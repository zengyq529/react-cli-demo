

const { merge } = require('webpack-merge');
module.exports = merge(require('./common'), {
  mode:'development',
  devServer: {
    port: 8080,
   // https: false,//签名证书：https://webpack.docschina.org/configuration/dev-server/#devserverhttps
    proxy: {
      '/api': 'http://localhost:3000'
    }
  }
})