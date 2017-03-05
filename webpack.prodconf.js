'use strict';

const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const AssetsPlugin = require('assets-webpack-plugin');

module.exports = {
    context:    __dirname + '/frontend',

    entry: {
        index:  './index'
    },

    output: {
        path:           __dirname + '/backend',
        publicPath:     '/',
        filename:       '[name].[hash].js',
        chunkFilename:  '[id].js',
        library:        '[name]'
    },

    resolve: {
        modules:        ['node_modules'],
        extensions:     ['.js', '.css']
    },

    resolveLoader: {
        modules:            ['node_modules'],
        moduleExtensions:   ['-loader'],
        extensions:         ['.js']
    },

    module: {
        loaders: [
            {
                test:           /\.js$/,
                exclude:        /\/node_modules\//,
                loader:         'babel',
                query: {
                    presets:    ['es2015','react'],
                    plugins:    ['transform-runtime']
                }
            },
            {
                test:       /\.css$/,
                loader:     ExtractTextPlugin.extract({ fallback: 'style', use: 'css?importLoaders=1!postcss-loader' })
            },
            {
                test:       /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
                loader:     'file?name=[path][name].[hash:7].[ext]'
            }
        ]
    },

    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                properties: true,
                conditionals: true,
                loops: true,
                unused: true,
                collapse_vars: true,
                dead_code: true,
                drop_console: true,
                drop_debugger: true,
                warnings: false,
            },
        }),
        new webpack.NoEmitOnErrorsPlugin(),
        new ExtractTextPlugin("[name].[hash].css"),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.ProvidePlugin({
            ReactDOM:   'react-dom',
            React:      'react',
            PropTypes:  'react/lib/ReactPropTypes',
        }),
        new AssetsPlugin({
            filename: 'assets.json',
            path: __dirname + '/backend'
        })
    ],
};