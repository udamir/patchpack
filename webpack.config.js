const webpack = require('webpack');
const path = require('path')
const pkg = require('./package.json');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = function (options) {
  if (!options) options = {};

  return {
    mode: "production",
    entry: {
      "patchpack": path.join(__dirname, "index.ts"),
      "patchpack.min": path.join(__dirname, "index.ts"),
    },
    output: {
      path: path.join(__dirname, "./browser/"),
      filename: "[name].js",

      globalObject: "self || this", // compatibility with Web Workers.
    },

    module: {
      rules: [
        { test: /\.ts$/, loader: "ts-loader" },
      ],
    },

    plugins: [
      new webpack.BannerPlugin({ banner: `patchpack@${pkg.version}` }),
    ],

    optimization: {
      minimize: true,
      minimizer: [new UglifyJsPlugin({
        include: /\.min\.js$/
      })]
    },

    resolve: {
      extensions: ['.ts', '.js', '.json']
    }

  }
};
