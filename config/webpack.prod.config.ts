import merge from 'webpack-merge'
import base from './webpack.base.conf'
import { resolve } from './utils'
import webpack from 'webpack'
import esbuild from 'esbuild'
import { ESBuildMinifyPlugin } from 'esbuild-loader'
import { CleanWebpackPlugin }  from 'clean-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

const config = merge(base, {
  mode: 'production',
  devtool: 'source-map',
  output: {
    path: resolve('dist'),
    filename: 'js/[name].[contenthash].js',
    chunkFilename: 'js/[name].[chunkhash].js',
    publicPath: '/',
  },
  optimization: {
    minimize: true,
    minimizer: [
      new ESBuildMinifyPlugin({
        target: 'es2015',
        legalComments: 'none', // 去除注释
        css: true, // 压缩 css
        implementation: esbuild // 自定义 esbuild instance 实现
      })
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new CleanWebpackPlugin(),
    // css抽离
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css',
      chunkFilename: 'css/[name].[contenthash].css',
    }),
  ]
})

export default config