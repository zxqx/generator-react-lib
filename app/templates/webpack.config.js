const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const libraryName = '<%= libraryNameCamelized %>';
const isProduction = process.env.NODE_ENV === 'production';
const enableSourcemaps = true
const name = process.env.FOLDER ? libraryName : 'index';
const filename = name + (isProduction ? '.min.js' : '.js');

const extractStyles = new ExtractTextPlugin({
  filename: 'styles/[name].[contenthash].css',
  allChunks: true,
  disable: !isProduction
});

const config = {
  entry: {
    main: path.join(__dirname, 'src/index.js')
  },
  output: {
    path: path.join(__dirname, process.env.FOLDER || 'lib'),
    filename,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  externals: {
    react: 'react'
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(sass|scss)$/,
        loader: extractStyles.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: enableSourcemaps,
                modules: true,
                importLoaders: 2,
                localIdentName: '[name]__[local]___[hash:base64:5]',
                minimize: {
                  autoprefixer: {
                    add: true,
                    remove: true,
                    browsers: ['last 2 versions'],
                  },
                  discardComments: {
                    removeAll: true,
                  },
                  discardUnused: false,
                  mergeIdents: false,
                  reduceIdents: false,
                  safe: true,
                  sourcemap: enableSourcemaps,
                }
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: enableSourcemaps
              }
            }
          ]
        })
      },
    ]
  },
  plugins: [extractStyles]
};

if (isProduction) {
  config.plugins.push(new webpack.optimize.UglifyJsPlugin({ minimize: true }))
}

module.exports = config
