#!/usr/bin/env bash
npm run production &&
mkdir -p resources/views/rendered
./node_modules/.bin/replace "<div id=\"app\">" "<div id=\"app\" server-rendered=\"true\">" public/index.html
./node_modules/.bin/replace "<script>window.__SERVER__=true</script>" "<script>window.__SERVER__=false</script>" public/index.html &&
mv public/index.html resources/views/rendered/index.blade.php
