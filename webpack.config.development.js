const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')

const port = process.env.PORT || 3000

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'cheap-module-source-map',

  entry: {
    bundle: [
      `webpack-hot-middleware/client?path=http://localhost:${port}/__webpack_hmr`,
      // '@babel/polyfill',
      './src/index'
    ],
    /*
    contact: [
      `webpack-hot-middleware/client?path=http://localhost:${port}/__webpack_hmr`,
      './src/contact'
    ],
    */
  },

  output: {
    publicPath: `http://localhost:${port}/`
  },

  plugins: [
    new webpack.NamedModulesPlugin(),
    // https://webpack.js.org/concepts/hot-module-replacement/
    new webpack.HotModuleReplacementPlugin(),

    // “If you are using the CLI, the webpack process will not exit with an error code by enabling this plugin.”
    // https://github.com/webpack/docs/wiki/list-of-plugins#noerrorsplugin
    new webpack.NoEmitOnErrorsPlugin(),
  ],
})
