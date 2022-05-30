const { merge } = require('webpack-merge');
const common = require('./webpack.config');
const WebpackObfuscator = require('webpack-obfuscator');

module.exports = merge(common,{
    mode: 'production',
    plugins: [
        new WebpackObfuscator ({
            rotateStringArray: true
        })
    ],
    optimization: {
        chunkIds: 'total-size',
        emitOnErrors: true,
        innerGraph: true,
        minimize: true,
        moduleIds: 'size',
        runtimeChunk: 'single',
        splitChunks: {
            chunks: 'async',
            minSize: 20000,
            minRemainingSize: 0,
            minChunks: 1,
            maxAsyncRequests: 30,
            maxInitialRequests: 30,
            enforceSizeThreshold: 50000,
            cacheGroups: {
              defaultVendors: {
                test: /[\\/]node_modules[\\/]/,
                priority: -10,
                reuseExistingChunk: true,
              },
              default: {
                minChunks: 2,
                priority: -20,
                reuseExistingChunk: true,
              },
            },
        },
    }
});