const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'naf.js'
  },
  module:{
      loaders:[{
        test:/\.js/,
        loader:'babel-loader',
        exclude:/node_modules|dev/,
        include:path.resolve(__dirname,'../src')
      }]
  }
};