
function errHandler(err){
    return console.log(err);
}

function run(){
    const path = process.argv[2];
    if(!path){ return;}
    const fs = require('fs');
    fs.readFile(path,'utf8',function(err,data){
        if(err){return errHandler(err);}
        const result = data.replace(/\'use strict\';/g,'');
        fs.writeFile(path, result, 'utf8', errHandler)
    });
}

