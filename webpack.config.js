/* eslint-env node */

const CommonConfigWebpackPlugin = require('common-config-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');
const {name: library, module: entry} = require('./package.json');

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, entry),
  output: {
    library: library,
    libraryTarget: 'umd',
    filename: `${library}.min.js`,
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({title: library}),
    new CommonConfigWebpackPlugin(),
  ],
};
