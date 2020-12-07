const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const ESLintPlugin = require('eslint-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: "development",
    entry: {
        main: "./index.js"
    },
    output: {
        //когда вебпак соберет все нужные нам файлы js, мы получим один единственный файл bundle.js
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js', '.json', '.png', '.jpg']
    },
    // optimization: {
    //     splitChunks: {
    //         chunks: 'all'
    //     }
    // },
    devServer: {
        port: 4200,
        open : true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new CleanWebpackPlugin(),
        // new ESLintPlugin(),
        new MiniCssExtractPlugin(),
    ],

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        // options: {
                        //     publicPath: '/public/path/to/'
                        // },
                    },
                    'css-loader',
                ],
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: ''
                        },
                    },
                    'css-loader',
                    'less-loader'
                ],
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: ['file-loader']
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
}
