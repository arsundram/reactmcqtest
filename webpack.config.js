var path = require('path');
var webpack = require('webpack');

module.exports = {
    //entry: './components/APP.js',
    entry: './main.js',
    //entry: './multipleChoiceQuestion.js',
    output: { path: __dirname, filename: './public/bundle.js' },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel',
                exclude: /(node_modules|app-server.js)/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};