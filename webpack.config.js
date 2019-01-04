/* eslint-env node */
const path = require('path');
const {name, module: entry} = require('./package.json');

module.exports = {
    mode: 'production',
    entry: entry,
    output: {
        library: name,
        libraryTarget: 'umd',
        filename: `${name}.js`,
        path: path.resolve(__dirname, 'dist'),
    },
};