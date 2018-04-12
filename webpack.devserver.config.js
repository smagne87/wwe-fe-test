const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const customRules = require('./webpack-rules.js');

module.exports = {
  entry: './src/index.js',
  devtool: 'inline-source-map', // Enables easy debugging by mapping errors to raw file
  devServer: { // Enables development server with auto reload
    disableHostCheck: true,
  },
  plugins: [
    new HtmlWebpackPlugin({ // Enables the dynamic creation of dist/index.html
      title: 'WWE test by SMAGNE',
      public_url: 'public',
      template: 'public/index.html',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: customRules,
  },
};
