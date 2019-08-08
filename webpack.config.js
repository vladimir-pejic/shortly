const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    watch: false, 
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx']
    }, 
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'public')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ],
    devServer: {
        historyApiFallback: true
    },
};