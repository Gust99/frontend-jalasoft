const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        bundle: path.resolve(__dirname,'src/scripts/script.js'),
    },
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: '[name][contenthash].js',
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use: ['style-loader','css-loader','less-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Pokedex',
            filename: 'index.html',
            template: 'src/index.html'
        })
    ]
}