# 环境分离和代码分离
## 如何区分开发环境
目前我们所有的webpack配置信息都是放到一个配置文件中的：webpack.config.js
* 当配置越来越多时，这个文件会变得越来越不容易维护；
* 并且某些配置是在开发环境需要使用的，某些配置是在生成环境需要使用的，当然某些配置是在开发和生成环
境都会使用的；
* 所以，我们最好对配置进行划分，方便我们维护和管理；

那么，在启动时如何可以区分不同的配置呢？
* 方案一：编写两个不同的配置文件，开发和生成时，分别加载不同的配置文件
* 方案二：使用相同的一个入口配置文件，通过 `--env` 设置参数来区分它们；

![图片](../.vuepress/public/images/qf0.png)
![图片](../.vuepress/public/images/qf1.png)

### entry 入口文件解析 - context 属性
我们之前编写入口文件的规则是这样的：./src/index.js，但是如果我们的配置文件所在的位置变成了 config 目录，是否应该变成 ../src/index.js呢？
* 如果我们这样编写，会发现是报错的，依然要写成 ./src/index.js；
* 这是因为入口文件其实是和另一个属性时有关的 context；

context的作用是用于解析入口（entry point）和加载器（loader）：
* 默认是 webpack 的启动目录(package.json 中脚本中的的启动路径)
* 另外推荐在配置中传入一个值

![图片](../.vuepress/public/images/qf2.png)

### 配置文件的分离
* webpack.comm.conf.js  公共
* webpack.dev.conf.js  开发
* webpack.prod.conf.js  生产

封装 resolveApp 函数
![图片](../.vuepress/public/images/resolveapp1.png)
![图片](../.vuepress/public/images/resolveapp2.png)
### 合并
**合并**公共配置 和 开发/生产配置

```shell
npm install webpack-merge -D
```
要注意 webpack 是跑在 **Node 环境**当中, 所以要使用 **Common JS 规范导入导入**

config/webpack.dev.conf.js 要merge一下
![图片](../.vuepress/public/images/merge1.png)

config/webpack.prod.conf.js 当然也要merge一下

## 认识代码分离
代码分离（Code Splitting）是webpack一个非常重要的特性：
* 它主要的目的是将代码分离到不同的bundle中，之后我们可以按需加载，或者并行加载这些文件；
* 比如默认情况下，所有的JavaScript代码（业务代码、第三方依赖、暂时没有用到的模块）在首页全部都加载，
就会影响首页的加载速度；
* 代码分离可以分出出更小的bundle，以及控制资源加载优先级，提供代码的加载性能；

Webpack中常用的代码分离有三种：
* **入口起点**：使用entry配置手动分离代码；
* **防止重复**：使用Entry Dependencies或者SplitChunksPlugin去重和分离代码；
* **动态导入**：通过模块的内联函数调用来分离代码；

### 多入口起点
入口起点的含义非常简单，就是配置多入口：
* 比如配置一个 index.js 和 main.js 的入口；
* 他们分别有自己的代码逻辑；

![图片](../.vuepress/public/images/ent1.png)

执行 npm run build 编译看看
![图片](../.vuepress/public/images/ent.png)

### Entry Dependencies (入口依赖)
假如我们的 index.js 和 main.js 都依赖两个库：lodash、dayjs
* 如果我们单纯的进行入口分离，那么打包后的两个 bunlde 都有会有一份 lodash 和 dayjs；
* 事实上我们可以对他们进行共享
 
![图片](../.vuepress/public/images/ede1.png)
### SplitChunks
另外一种分包的模式是 splitChunk，它是使用SplitChunksPlugin来实现的：
* 因为该插件 webpack 已经默认安装和集成，所以我们并不需要单独安装和直接使用该插件；
* 只需要提供 SplitChunksPlugin 相关的配置信息即可；

Webpack 提供了 SplitChunksPlugin 默认的配置，我们也可以手动来修改它的配置：
* 比如默认配置中，chunks 仅仅针对于异步（async）请求，我们可以设置为 initial(同步) 或者 all

![图片](../.vuepress/public/images/optimization1.png)

### SplitChunks 自定义配置
![图片](../.vuepress/public/images/splitchunk1.png)
![图片](../.vuepress/public/images/splitchunk2.png)
