# Webpack
## 核心概念
* entry : 入口模块文件路径
* output : 输出 bundle 文件路径
* module : 模块, webpack 构建对象
* bundle : 输出文件 webpack的构建产物
* chunk : 中间件, webpack 构建的中间产物
* loader : 文件转化器  (比如通过 vue-loader 把 .vue 文件转换成浏览器认识的 .js 文件)
* plugin : 插件, 在 webpack 生命周期执行特定任务

标准的 webpack 初始化项目流程

1. npm init 初始化项目
2. 创建 src/index.js
3. 创建 public/index.html
4. 创建 webpack.config.js 填入配置
5. 执行 npm install  webpack webpack-cli
6. 配置 build 命令, webpack
7. 执行 npm run build 进行打包构建


webpack.config.js
```js
const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path:path.resolve(__dirname, './dist')
  }
}
```










