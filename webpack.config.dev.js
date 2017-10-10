const path = require('path');

module.exports = {
  entry: './dev/index.js',
  output: {
    path: path.resolve(__dirname, 'dev'),
    filename: 'naf.js'
  },
  module:{
      loaders:[{
        test:/\.js/,
        loader:'babel-loader',
        exclude:/node_modules|build/,
        include:path.resolve(__dirname,'../src'),
        options:{
          presets:['env']
        }

      }]
  }
};