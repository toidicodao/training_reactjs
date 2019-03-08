// Get url root
const path = require('path');
const webpack = require('webpack');

const devServer = {
    port: 4000,
    open: true
}

const config = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
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