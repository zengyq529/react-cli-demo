

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { srcPath, distPath, publicPath } = require('./path')


const path = require('path');
const { env } = require('process');

module.exports = {
  entry: path.join(srcPath, 'index.js'),
  output: {
    path: distPath,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': srcPath,
    }
  },
  module: {
    rules: [
      {
        test: /\.js|\.jsx$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(publicPath, 'index.html'),
      NODE_ENV: env.NODE_ENV,
    })
  ]
}