module.exports = {
  publicPath:process.env.NODE_ENV==='production'?'./':'/',
  productionSourceMap:false,
  devServer: {
    port: 8999, //  端口号的配置
    open: true // 自动打开浏览器
  }
}