module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        corejs: '3.0',
      },
    ],
    // [
    //   "@babel/preset-typescript",
    //   {
    //     allExtensions: true, // 支持所有文件扩展名，否则在vue文件中使用ts会报错
    //   },
    // ]
  ],
  plugins: [
    '@babel/plugin-transform-runtime',
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-proposal-nullish-coalescing-operator'
  ]
}