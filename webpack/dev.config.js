const {
  mode,
  pathTo,
  plugins,
  loaders,
} = require('./common');

// const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

// 解析配置参数
// 构建compiler对象
// 执行compiler对象的run
// 根据入口找到编译文件 构建ATS语法树
// 递归根据配置的loader进行编译
// 输出打包完成的资源

module.exports = {
  mode,
  devtool: 'eval',
  entry: [
    pathTo('example', 'index.tsx'),
    'webpack-dev-server/client?http://localhost:8081'
  ],
  output: {
    filename: 'bundle.js',
    path: pathTo('dev')
  },
  optimization: {
    minimize: false,
    moduleIds: 'named',
    chunkIds: 'named'
  },
  plugins: [
    plugins.html,
    // new NodePolyfillPlugin()
  ],
  module: {
    rules: [
      loaders.babel,
      loaders.css
    ]
  },
  devServer: {
    historyApiFallback: true,
  }
};
