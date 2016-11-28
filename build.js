let browserify = require('browserify');
let tsify = require('tsify');
let watchify = require('watchify');
let fs = require('fs');

const doneMessage = '.';

const browserifyOptions = {
    debug: true,
    cache: {},
    packageCache: {},
    plugin: [watchify]
};

const tsifyOptions =  { 
    noImplicitAny: true 
};

function bundleStream() {
    const bundleFs = fs.createWriteStream(__dirname + '/public/js/bundle.js');
    bundleFs.on('finish', function () {
        console.log(doneMessage);
    });
    return bundleFs;
}

function writeError(error) {
    console.error(error.toString());
}


let b = browserify(browserifyOptions);
b.add('src/main.ts');
b.plugin(tsify, tsifyOptions);
b.on('update', bundle);

function bundle() {
    b.bundle().on('error', writeError).pipe(bundleStream());
}

bundle();