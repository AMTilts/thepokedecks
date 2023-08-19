"use strict";

var webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [//...
    {
      test: /\.svg$/,
      use: ['@svgr/webpack']
    }, {
      test: /\.ts$/,
      loader: "ts-loader"
    }, {
      test: /\.node$/,
      use: "node-loader"
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }, // custom loader added by me and installed using npm i file-loader
    {
      test: /\.(gif|svg|jpg|png)$/,
      // add whatever files you wanna use within this regEx
      use: ["file-loader"]
    }]
  } // output: {
  //   path: path.resolve(__dirname, 'dist'),
  //   filename: 'bundle.js'
  //   },
  //   plugins: [
  //   new webpack.ProvidePlugin({
  //     Buffer: 'buffer'
  //   })
  //   ]

}; //...};