module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      //...
      { 
        test: /\.ts$/, 
        loader: "ts-loader" 
      },  
      { 
        test: /\.node$/, 
        use: "node-loader"
      },
      { 
        test: /\.css$/, 
        use: ['style-loader', 'css-loader'] 
      },
      {
        test: /\.(gif|svg|jpg|png)$/,  // Combined the SVG rule with this rule
        use: ["file-loader", '@svgr/webpack']  // Added '@svgr/webpack' here for handling SVG files
      }
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.ProvidePlugin({
      Buffer: 'buffer'
    })
  ]
};
