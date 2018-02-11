const path = require('path');
const package = require('./package.json');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: `${package.name}-${package.version}.js`,
        path: path.resolve(__dirname, 'dist')
    }
};