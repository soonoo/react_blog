const path = require('path');
const fs = require('fs');
const webpack = require('webpack');

module.exports = {
  externals: fs.readdirSync("node_modules")
  .reduce(function(acc, mod) {
    if (mod === ".bin") {
      return acc
    }

    acc[mod] = "commonjs " + mod
    return acc
  }, {}),

  node: {
    __dirname: false,
    __filename: false,
  },
  
  entry: [
    './server/index.js',
  ],

  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, 'server'),
  },

  resolve: {
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
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      $dirname: '__dirname',
    }),
  ],

  target: 'node',
};
