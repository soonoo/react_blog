const webpack = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new UglifyJSPlugin(),
  ],
  
  devServer: {
    contentBase: './dist',
    hot: true
  },
});