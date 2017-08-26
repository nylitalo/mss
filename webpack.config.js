var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.bundle.js'
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' },
      { test: /\.(css)$/, use: [ 'style-loader', 'css-loader' ]}
    ],
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['latest', 'react', 'stage-0'],
          plugins: ['transform-decorators-legacy']
        }
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: 'app/index.html'
  })],
  devServer: {
    historyApiFallback: true,
    contentBase: './',
  }
}
