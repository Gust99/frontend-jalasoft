const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
                test: /style\.less$/i,
                use: ['css-loader','less-loader']//'style-loader',
            },
            {
                test: /generics\.less$/i,
                use: [MiniCssExtractPlugin.loader,'css-loader','less-loader']
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Pokedex',
            filename: 'index.html',
            template: 'src/index.html'
        }),
        new MiniCssExtractPlugin()
    ],
    resolve: {
        alias: {
            Styles: path.resolve(__dirname, 'src/styles/'),
        },
    }
}