const fs = require('fs');
const path = require('path');

function removeStrict(filePath){
    fs.readFile(filePath,'utf8',function(err,data){
        if(err){
            return console.log(err);
        }

        const result = data.replace(/\'use strict\';\n/g,'');
        fs.writeFile(filePath, result,'utf8',function(err){
            if(err){
                return console.log(err);
            }
        });
    });
}
function grabDistPath(name){
 
    return path.resolve('./dist/' + name + '.js');
}

const common = grabDistPath('naf.common');
const iife = grabDistPath('naf');

removeStrict(common);
removeStrict(iife);
