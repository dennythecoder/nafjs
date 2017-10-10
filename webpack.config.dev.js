const path = require('path');
const removeStrict = require('./build/removeStrict');


module.exports = {
  entry: './dev/index.js',
  output: {
    path: path.resolve(__dirname, 'dev'),
    filename: 'naf.js'
  },
  module:{
      loaders:[
        {
          test:/\.js/,
          loader:require.resolve('./build/removeStrict.js')
        }  ,
        
        
        {


        loader:'babel-loader',
        exclude:/node_modules|build/,
        include:path.resolve(__dirname,'../src'),
        options:{
          presets:['env']
        }

      }
         
    ]
  }
};