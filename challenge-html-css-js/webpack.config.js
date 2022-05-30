const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        bundle: {import: path.resolve(__dirname,'src/scripts/script.js'), dependOn: 'pokemoncard'},
        pokemoncard: path.resolve(__dirname,'src/scripts/PokemonCardComponent.js')
    },
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: '[name][contenthash].js',
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.less$/i,
                use: ['css-loader','less-loader']//'style-loader',
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Pokedex',
            filename: 'index.html',
            template: 'src/index.html'
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
    },
    resolve: {
        alias: {
            Styles: path.resolve(__dirname, 'src/styles/'),
        },
    }
}