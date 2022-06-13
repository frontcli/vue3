import merge from 'webpack-merge'
import base from './webpack.base.conf'
import { resolve } from './utils'
import webpack from 'webpack'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import WebpackBar from 'webpackbar'
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')

const config = merge(base, {
  mode: 'development',
  output: {
    path: resolve('dist'),
    filename: 'js/[name].[contenthash].js',
    chunkFilename: 'js/[name].[chunkhash].js',
    publicPath: '/',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new ForkTsCheckerWebpackPlugin({ async: false })
  ],
  // 缓存
  cache: {
    type: 'filesystem',
    buildDependencies: {
      config: [__filename], // 针对构建的额外代码依赖的数组对象。webpack 将使用这些项和所有依赖项的哈希值来使文件系统缓存失效。
    },
    cacheDirectory: resolve('temp_cache'),
    name: 'scf-cache', // 路径temp_cache/scf-cache
    compression: 'gzip',
  }
})

config?.plugins?.push(
  new WebpackBar(),
  // 错误提示
  new FriendlyErrorsWebpackPlugin({
    // 成功的时候输出
    compilationSuccessInfo: {
      messages: [
        `Your application is running here: http://${config?.devServer?.host}:${config?.devServer?.port}`,
      ],
    },
    // 是否每次都清空控制台
    clearConsole: true,
  })
)

export default config