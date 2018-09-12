const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const webpackNodeExternals = require('webpack-node-externals');
const base = require('./webpack.base.js');

const config = {
  target: 'node',
  mode: 'development',
  entry: './src/index.js',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },

  externals: [webpackNodeExternals()],

  plugins: [
    new webpack.ProvidePlugin({
      "React": "react",
    }),
  ],
};

module.exports = merge(base, config);