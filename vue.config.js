const process = require('node:process')
const UnoCSS = require('@unocss/webpack').default

module.exports = {
  configureWebpack: (config) => {
    config.plugins.push(UnoCSS({}))
  },
  chainWebpack(config) {
    config.merge({
      cache: true
    })
  },
  css: {
    extract: process.env.NODE_ENV === 'development' ? {
      filename: 'css/[name].css',
      chunkFilename: 'css/[name].css'
    } : true
  },
};
