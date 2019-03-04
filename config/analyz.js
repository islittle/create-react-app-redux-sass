process.env.NODE_ENV = "production"
var BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin

const webpackConfigProd = require("./webpack.config.prod")
webpackConfigProd.plugins.push(
  new BundleAnalyzerPlugin()
)

require("../scripts/build")