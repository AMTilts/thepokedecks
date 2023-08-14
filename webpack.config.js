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
        test: /\.ts$/, loader: "ts-loader" 
      },  
      { 
        test: /\.node$/, 
        use: "node-loader"
      },
      {
        /**
         * OPTION A:
         * default file-loader fallback
         **/
        test: /\.(png|jpe?g)$/,
        loaders: [
          {
            loader: 'lqip-loader',
            options: {
              base64: true,
              palette: false
            }
          },
          {
            loader: 'url-loader',
            options: {
              limit: 8000
            }
          }
        ]
      }
    ],
  }
  // output: {
  //   path: path.resolve(__dirname, 'dist'),
  //   filename: 'bundle.js'
  //   },
  //   plugins: [
  //   new webpack.ProvidePlugin({
  //     Buffer: 'buffer'
  //   })
  //   ]
};
  //...};