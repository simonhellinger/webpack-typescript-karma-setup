var webpackConfig = require('./webpack.config.js');

// TODO: check if this is actually needed
process.env.CHROME_BIN = require('puppeteer').executablePath();

module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            'test/**/*Spec.ts'
        ],
        preprocessors: {
            'test/**/*Spec.ts': ['webpack']
        },
        webpack: webpackConfig,
        webpackMiddleware: {

        },
        beforeMiddleware: ['webpackBlocker'],
        reporters: ['mocha'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['ChromeHeadless'],
        singleRun: false,
        concurrency: Infinity,
        mime: {
            'text/x-typescript': ['ts','tsx']
        },
        failOnEmptyTestSuite: false
    });
}