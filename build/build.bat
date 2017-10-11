
call rollup ./src/index.js --o ./dist/naf.js --f iife --name Naf
call rollup ./src/index.js --o ./dist/naf.common.js --f cjs
call node ./build/removeStrict.js