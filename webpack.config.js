/* eslint-env node */
const path = require('path');
const {name: library, module: entry} = require('./package.json');

module.exports = {
    mode: 'production',
    entry: entry,
    output: {
        library: library,
        libraryTarget: 'umd',
        filename: `${library}.js`,
        path: path.resolve(__dirname, 'dist'),
    },
};