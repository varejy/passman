var rootPath   = __dirname;
var wpkconfig  = require('./webpack/config')(rootPath);
var wpkloaders = require('./webpack/loaders');

wpkconfig
  .module
  .loaders = wpkloaders.test(rootPath);

module.exports = function(config) {
  config.set({

    basePath: '',

    frameworks: ['jasmine'],

    files: ['./src/**/*.spec.ts'],

    exclude: [],

    preprocessors: {
      '**/*.ts': ['webpack', 'sourcemap']
    },

     webpack: wpkconfig,

    webpackServer: {
      noInfo: true // prevent console spamming when running in Karma!
},

    reporters: ['spec'],

    specReporter: {
      maxLogLines: 5,         // limit number of lines logged per test
      suppressErrorSummary: true,  // do not print error summary
      suppressFailed: false,  // do not print information about failed tests
      suppressPassed: false,  // do not print information about passed tests
      suppressSkipped: true,  // do not print information about skipped tests
      showSpecTiming: false // print the time elapsed for each spec
    },


    port: 9876,

    colors: true,

    logLevel: config.LOG_DISABLE,

    autoWatch: false,

    browsers: ['Chrome'],

    singleRun: true,

    concurrency: Infinity
  })
}
