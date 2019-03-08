// Get url root
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')

const devServer = {
    port: 4000,
    open: true,
    watchContentBase: true
};

const config = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: "/dist"
    },
    module: {
        rules: [
            {
                use: 'babel-loader',
                exclude: /node_modules/,
                test: /\.js$/
            },
            {
                use: [
                    'style-loader',
                    'css-loader'
                ],
                test: /\.css$/
            }
        ]
    },
    devServer
}


module.exports = config