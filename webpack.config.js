var path = require('path');
var webpack = require('webpack');
var rucksack = require('rucksack-css');
var cssnext = require('postcss-cssnext');

module.exports = {
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
  module: {
    loaders: [{
      test: /\.ts$/,
      loaders: ['ts'],
      exclude: path.resolve(__dirname, 'node_modules'),
      include: path.join(__dirname, 'src')
    },
     {
      test: /\.html$/,
      loader: 'raw'
    },
    {
      test: /\.(svg|gif|png|jpe?g|ttf|woff2?|eot)$/,
      loader: 'url-loader?limit=4096&name=./assets/[hash].[ext]' 
    },
    {
      test: /\.css$/,
      loaders: [
        'style-loader',
        'css-loader?minimize&modules&importLoaders=1&localIdentName=[local]___[hash:base64:5]',
        'postcss-loader'
      ]
    },
    ]
  },
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
