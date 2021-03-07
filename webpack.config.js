const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
    entry: ['@babel/polyfill', './src/index.ts'],
    devtool: 'eval-source-map',
    resolve: {
        extensions: ['.ts', '.js'],
        alias: {
            'base-component': path.resolve(__dirname, 'src/utils/BaseComponent'),
            'useFilter': path.resolve(__dirname, 'src/utils/useFilter'),
        }
    },
    module: {
        rules: [
            {
                test: /\.ts/,
                use: 'ts-loader',
                exclude: /node_modules/,
            }, {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader",
                ],
            },
        ],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({template: "./assets/template.html"}),
        new MiniCssExtractPlugin({filename: "dist/[name].css"}),
        require('autoprefixer')
    ],
};
