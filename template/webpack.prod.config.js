'use strict'
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.config')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
require("babel-polyfill");

const webpackConfig = merge(baseWebpackConfig, {
  mode: 'development',
  entry:  ["babel-polyfill", './src/components/wiwi.vue'],
  optimization: {
  minimizer: [
    // we specify a custom UglifyJsPlugin here to get source maps in production
    new UglifyJsPlugin({
      uglifyOptions: {
        warnings: false
      },
      sourceMap: false
    })
    ]
  },
  plugins: [
  // http://vuejs.github.io/vue-loader/en/workflow/production.html
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"production"'
    }
    })
  ]
})

module.exports = webpackConfig
