::call this file from the base folder ./build/build.bat
@echo off
call rollup ./src/index.js --o ./dist/naf.js --f iife --name Naf
call rollup ./src/index.js --o ./dist/naf.common.js --f cjs
call node ./build/removeStrict.js