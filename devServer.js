/**
 * Setup and run the development server for Hot-Module-Replacement
 * https://webpack.js.org/concepts/hot-module-replacement/
 */

const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const config = require('./webpack.config.development')

const logger = console

const app = express()
const compiler = webpack(config)
const PORT = process.env.PORT || 3000

const wdm = webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  stats: {
    colors: true
  }
})

app.use(wdm)

app.use(webpackHotMiddleware(compiler))

const server = app.listen(PORT, 'localhost', serverError => {
  if (serverError) {
    return console.error(serverError)
  }

  logger.log(`Listening at http://localhost:${PORT}`)
})

process.on('SIGTERM', () => {
  logger.log('Stopping dev server')
  wdm.close()
  server.close(() => {
    process.exit(0)
  })
})
