"use strict";

const webpack = require('webpack');
const env = require('yargs').argv.mode;
console.log("Environment: ", env);
const debug = (env === 'dev');

module.exports = {
    devServer: {
        inline: true,
        port: 3000,
        host: '0.0.0.0',
        disableHostCheck: true,
    },
    devtool: 'source-map',
    entry: './src/index.jsx',
    output:
        {path: "./dev/", publicPath: "/assets/", filename: 'app.bundle.js'}
       ,
    debug: true,
    devtool: "source-map",   
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react', 'stage-0'],
                    plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
                }
            }
            ,
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.(png|gif)$/,
                loader: "url-loader?limit=100000"
            },
            {
                test: /\.(jpg|JPG|jpeg|JPEG)$/,
                loader: "file-loader"
            },
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=application/octet-stream'
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file'
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=image/svg+xml'
            },
            {
                test: /\.html$/,
                loader: 'html-loader?attrs[]=video:src'
            },
            {
                test: /\.(mov|mp4)$/,
                loader: 'file-loader',   
            }
        ]
    },
    plugins: debug ? [] : [
            new webpack.optimize.DedupePlugin(),
            new webpack.optimize.OccurenceOrderPlugin(),
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                },
                output: {
                    comments: false
                }
            })
        ]
};