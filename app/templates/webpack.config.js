const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
<% if (exportCss) { %>const ExtractTextPlugin = require('extract-text-webpack-plugin');<% } %>

const libraryName = '<%= libraryNameCamelized %>';

module.exports = {
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    path: path.join(__dirname, 'lib'),
    filename: libraryName + '.min.js',
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  externals: {
    react: 'react'
  },
  module: {
    loaders: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /(\.jsx|\.js)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      <% if (exportCss) { %>
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: 'css-loader'
        })
      }
      <% } %>
    ]
  },
  resolve: {
    extensions: ['.js']
  },
  plugins: [
    new UglifyJsPlugin({ minimize: true }),
    <% if (exportCss) { %>
    new ExtractTextPlugin({
      filename: '<%= libraryName %>.css',
      allChunks: true
    })
    <% } %>
  ]
};
