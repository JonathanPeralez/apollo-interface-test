const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './index.js',
  mode: 'development',
  devServer: {
    hot: true,
    publicPath: '/build/',
    proxy: {
      '/api': 'http://localhost:3000',
    },
    historyApiFallback: true,
    contentBase: path.join(__dirname, './')
  },
  devtool: 'source-map',
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }
    }]
  },
  output: {
    path: path.resolve(__dirname, 'react', 'build'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};