'use strict';

let fs = require('fs');
let path = require('path');
let webpack = require('webpack');

module.exports = {
    context: path.resolve(__dirname, 'backend'),

    entry: {
        server: './server'
    },

    output: {
        path: __dirname + '/backend',
        filename: 'server.bundle.js'
    },

    target: 'node',

    externals: fs.readdirSync(path.resolve(__dirname, 'node_modules')).concat([
        'react-dom/server', 'react/addons',
    ]).reduce(function (ext, mod) {
        ext[mod] = 'commonjs ' + mod;
        return ext;
    }, {}),

    node: {
        __filename: true,
        __dirname: true
    },

    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' }
        ]
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

    plugins: [
        new webpack.ProvidePlugin({
            ReactDOM:   'react-dom',
            React:      'react',
            PropTypes:  'react/lib/ReactPropTypes',
        })
    ]
};