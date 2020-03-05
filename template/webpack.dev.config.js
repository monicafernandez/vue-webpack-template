'use strict'
const webpack = require('webpack')
const merge = require('webpack-merge')
const path = require('path')
const baseWebpackConfig = require('./webpack.base.config')
//const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')
require("babel-polyfill");

const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)

const devWebpackConfig = merge(baseWebpackConfig, {
  mode: 'development',
  entry: ["babel-polyfill", './src/main.js'],
  module: {
    rules: [{
      test: /\.s(c|a)ss$/,
      use: [
        'vue-style-loader',
        'css-loader',
        {
          loader: 'sass-loader',
          // Requires sass-loader@^8.0.0
          options: {
            implementation: require('sass'),
            sassOptions: {
              fiber: require('fibers'),
              indentedSyntax: true // optional
            }
          }
        }
      ]
    }]
  },
  // cheap-module-eval-source-map is faster for development
  // https://webpack.js.org/configuration/devtool/#development
  devtool: 'cheap-module-eval-source-map',
  // these devServer options should be customized in /config/index.js
  devServer: {
    clientLogLevel: 'warning',
    historyApiFallback: {
      rewrites: [
        { from: /.*/, to: path.posix.join('/', 'index.html') },
      ],
    },
    hot: true,
    contentBase: false, // since we use CopyWebpackPlugin.
    compress: true,
    host: HOST || 'localhost',
    port: PORT || '8080',
    open: false,
    overlay: { warnings: false, errors: true },
    publicPath: '/',
    proxy: {},
    quiet: true, // necessary for FriendlyErrorsPlugin
    // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-
    watchOptions: {
      poll: false,
    }
  },
  plugins: [
    new VuetifyLoaderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
    //new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    // copy custom static assets
    /*new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: 'static',
        ignore: ['.*']
      }
    ])*/
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  performance: {
    hints: false
  }
})

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || '8080'
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port
      // add port to devServer config
      devWebpackConfig.devServer.port = port

      // Add FriendlyErrorsPlugin
      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
        },
        onErrors: () => {
          const notifier = require('node-notifier')

          return (severity, errors) => {
            if (severity !== 'error') return

            const error = errors[0]
            const filename = error.file && error.file.split('!').pop()

            notifier.notify({
              title: packageConfig.name,
              message: severity + ': ' + error.name,
              subtitle: filename || '',
              icon: path.join(__dirname, 'logo.png')
            })
          }
        }
      }))

      resolve(devWebpackConfig)
    }
  })
})
