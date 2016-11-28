Seed project for client side Typescript

build:
  npm install
watch files in referenced in src/main.ts and write to public/js/bundle.js:
  node build.js

install browser-sync:
  npm install -g browser-sync

reload index.html on bundle changes:
  browser-sync start --server 'public' --files 'public/js/bundle.js' --startPath 'index.html'
