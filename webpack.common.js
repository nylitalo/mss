const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './app/index.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
    template: 'app/index.html'
  })
],
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
  }
}
