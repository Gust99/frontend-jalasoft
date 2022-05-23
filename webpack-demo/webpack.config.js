const path = require('path');

module.exports = {
    mode: 'none',
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname,'build')
    }
}