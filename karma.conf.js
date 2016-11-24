
module.exports = function(config) {
  config.set({

    basePath: '',

    frameworks: ['jasmine', 'karma-typescript'],

    files: [
      './node_modules/angular/angular.min.js',
      './node_modules/angular-route/angular-route.min.js',
      './node_modules/angular-mocks/angular-mocks.js',
      './src/shared/services/fakedb/*.ts'
    ],

    exclude: [
    ],

    preprocessors: {
      '**/*.ts': ['karma-typescript']
    },

    reporters: ['spec', 'karma-typescript'],

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
