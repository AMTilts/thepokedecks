const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      //...
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.exe$/i,
        use: 'raw-loader',
      },
    ],
  },
  //...
};