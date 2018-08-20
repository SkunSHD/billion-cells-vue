// http://www.thinksincode.com/2016/07/07/karma-jasmine-webpack.html
var webpackConfig = require('./webpack.dev.js');

module.exports = (config) => {
    config.set({
        frameworks: ['jasmine'],
        files: [
            'src/tests/**/*Spec.js'
        ],
        preprocessors: {
            'src/tests/**/*Spec.js': [ 'webpack' ]
        },
        webpack: webpackConfig,
        reporters: ['mocha'],
        colors: true,
        autoWatch: true,
        browsers: ['Chrome'],
        concurrency: Infinity
    })
}