'use strict'

const path = require('path')
const ExtractPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: path.join(__dirname, 'src', 'index'),

  output: {
    library: 'ReactInputrange',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: ExtractPlugin.extract('style-loader', 'css-loader!less-loader')
      }
    ]
  },

  plugins: [new ExtractPlugin('Inputrange.css')],

  externals: [
    {
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react'
      }
    }
  ]
}
