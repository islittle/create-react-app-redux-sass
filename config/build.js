/**
 * [webpack-bundle-analyzer 打包分析]
 */
process.env.NODE_ENV = "production"
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin

const webpackConfigProd = require("./webpack.config.prod")
webpackConfigProd.plugins.push(
  new BundleAnalyzerPlugin()
)

require("../scripts/build")