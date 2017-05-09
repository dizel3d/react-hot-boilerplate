var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/index.tsx',

  output: {
    filename: 'static/bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },

  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          'babel-loader',
          'ts-loader',
        ],
        exclude: /node_modules/
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      comments: false
    })
  ]
};
