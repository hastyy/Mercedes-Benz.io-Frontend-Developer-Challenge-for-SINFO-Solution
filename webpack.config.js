const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const VENDOR_LIBS = [
    "lory.js",
    "redux"
];

module.exports = {
    entry: {
        bundle: './src/main.js',
        vendor: VENDOR_LIBS
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].[chunkhash].js'
    },
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader',
                    publicPath: '/dist/css'
                }),
                test: /\.css$/
            },
            {
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 40000, // bytes
                            name: '[name].[ext]',
                            outputPath: 'images/',
                            publicPath: 'images/'
                        }
                    },
                    'image-webpack-loader'
                ],
                test: /\.(jpe?g|png|gif|svg)$/
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest']
        }),
        new ExtractTextPlugin({
            filename: 'css/styles.css',
            disable: false,
            allChunks: true
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                conservativeCollapse: true
            }
        })
    ]
};
