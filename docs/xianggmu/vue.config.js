module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://xxxx...',
        changeOrigin:true
      }
    }
  }
}