const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'app', 'client', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist', 'assets'),
    filename: 'bundle.js',
    publicPath: '/assets/'
  },
  watchOptions: {
    poll: true,
    aggregateTimeout: 300
  },
  resolve: {
    alias: {
      shared: path.resolve(__dirname, 'app', 'shared')
    }
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'app', 'client'),
          path.resolve(__dirname, 'app', 'shared')
        ],
        loaders: ['babel-loader']
      },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader?modules', {
          loader: 'sass-loader',
          options: {
            includePaths: [
              path.resolve(__dirname, 'app', 'shared', 'styles')
            ]
          }
        }]
      },
      {
        test: /\.svg$/,
        use: ['file-loader']
      }
    ]
  },
  devServer: {
    port: 9000,
    publicPath: '/assets/',
    historyApiFallback: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    }
  }
}