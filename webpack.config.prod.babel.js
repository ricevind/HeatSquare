

const webpack = require('webpack');
const path = require('path');
const WebpackConfig = require('WebpackConfig');
const ngAnnotatePlugin = require('ng-annotate-webpack-plugin');

module.exports = new WebpackConfig().extend('./webpack.config.common.babel.js').merge({
  entry : path.join(__dirname,'/app/app.module.js'),
  plugins: [
    // new webpack.optimize.CommonsChunkPlugin('common.js'),
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new ngAnnotatePlugin({
      add: true
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      mangle: false
    })
  ]
});
