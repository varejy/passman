var path = require('path');
var webpack = require('webpack');
var rucksack = require('rucksack-css');
var cssnext = require('postcss-cssnext');

module.exports = (rootPath) => {
  return {
    devtool: 'eval',

    resolve: {
      modulesDirectories: ['src', 'node_modules'],
      extensions: ["", ".webpack.js", ".web.js", ".ts", ".js"]
    },

    output: {},

    plugins: [
      new webpack.NoErrorsPlugin(),
      // new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
      // new webpack.DefinePlugin({ NODE_ENV: JSON.stringify(NODE_ENV) })
    ],
    module: {},
    postcss: {
      defaults: [
        cssnext({
          browsers: ['last 2 version']
        }),
        rucksack({
          autoprefixer: false
        }),
      ]
    },
    externals: {}
  };
}
