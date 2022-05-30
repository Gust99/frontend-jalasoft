const { merge } = require('webpack-merge');
const common = require('./webpack.config');
const WebpackObfuscator = require('webpack-obfuscator');

module.exports = merge(common,{
    mode: 'production',
    devtool: 'source-map',
    plugins: [
        new WebpackObfuscator ({
            rotateStringArray: true
        })
    ]
});