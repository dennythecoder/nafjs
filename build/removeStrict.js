

module.exports = function(content){
    const result = content.replace(/\"use strict\";/g,'');

    return result;
}

module.exports.seperable = true;