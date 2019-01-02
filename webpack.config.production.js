const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')

module.exports = merge(baseConfig, {
  mode: 'production',
  // devtool: 'cheap-module-source-map',

  entry: {
    bundle: [
      '@babel/polyfill',
      './src/index'
    ],
    /*
    contact: [
      '@babel/polyfill',
      './src/contact'
    ],
    */
  },

  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: './',
  },

  plugins: [
    // NODE_ENV should be production so that modules do not perform certain development checks
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
  ],
})