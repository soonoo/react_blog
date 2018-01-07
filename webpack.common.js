const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    './src/index.js',
  ],

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },

  resolve: {
    modules: [ 'node_modules' ],
    alias: {
      Actions: path.resolve(__dirname, 'src/actions'),
      Reducers: path.resolve(__dirname, 'src/reducers'),
      Components: path.resolve(__dirname, 'src/components'),
      Pages: path.resolve(__dirname, 'src/pages'),
      Containers: path.resolve(__dirname, 'src/containers'),
    },
    extensions: [ '.js' ],
  },
  
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        loader: 'eslint-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        test: /\.otf$/,
        use: [
          'file-loader',
        ],
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
  ],
};
