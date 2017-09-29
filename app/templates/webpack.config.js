const path = require('path');
const webpack = require('webpack');

const libraryName = '<%= libraryNameCamelized %>';
const isProduction = process.env.NODE_ENV === 'production';

const config = {
  entry: {
    main: path.join(__dirname, 'src/index.js')
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: libraryName + (isProduction ? '.min.js' : '.js'),
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  externals: [
    {
      react: {
        root: 'React',
        commonjs2: './react',
        commonjs: ['./react'],
        amd: 'react',
      },
    },
    {
      'react-dom': {
        root: 'ReactDOM',
        commonjs2: './react-dom',
        commonjs: ['./react-dom'],
        amd: 'react-dom',
      },
    }
  ],
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
    ]
  },
  plugins: []
};

if (isProduction) {
  config.plugins.push(new webpack.optimize.UglifyJsPlugin({ minimize: true }))
}

module.exports = config
