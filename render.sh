#!/usr/bin/env bash
npm run production &&
mkdir -p public/views
./node_modules/.bin/replace "<div id=\"app\">" "<div id=\"app\" server-rendered=\"true\">" public/index.html
./node_modules/.bin/replace "<script>window.__SERVER__=1</script>" "<script>window.__SERVER__=0</script>" public/index.html &&
mv public/index.html resources/views/rendered/index.blade.php
