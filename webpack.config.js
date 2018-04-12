const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const customRules = require('./webpack-rules.js');

const dist = {
  entry: './src/index.js',
  plugins: [
    new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify('production') } }),
    new CleanWebpackPlugin(['dist']), // Deletes old files in 'dist' folder
    new HtmlWebpackPlugin({ // Enables the dynamic creation of dist/index.html
      title: 'WWE test by SMAGNE',
      public_url: 'public',
      template: 'public/index.html',
    }),
    new webpack.NamedModulesPlugin(),
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: customRules,
  },
};

const lib = {
  entry: './src/lib.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'lib.js',
    libraryTarget: 'commonjs',
  },
  module: {
    rules: customRules,
  },
  externals: [
    {
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react',
      },
    },
  ],
};

module.exports = [dist, lib];
