const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const babelRules = {
  test: /\.js$/,
  exclude: /node_modules/,
  loader: 'babel-loader'
}

const cssRules = {
  test: /\.css$/,
  use: [
    'style-loader',
    {
      loader: 'css-loader',
      options: {
        modules: {
          localIdentName: '[name]__[local]--[hash:base64:5]'
        },
        importLoaders: 1
      }
    },
    'postcss-loader'
  ]
}

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'app.[contenthash].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [babelRules, cssRules]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Pokédex',
      template: './src/index.html',
      hash: true
    })
  ]
}
