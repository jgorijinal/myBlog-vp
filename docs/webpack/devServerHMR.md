# devServer 和 HMR
目前我们开发的代码，为了运行需要有两个操作：
* 操作一：npm run build，编译相关的代码；
* 操作二：通过live server或者直接通过浏览器，打开index.html代码，查看效果；
这个过程经常操作会影响我们的开发效率，我们希望可以做到，当文件发生变化时，可以自动的完成 编译 和 展示；

为了完成自动编译，webpack提供了几种可选的方式：
* webpack watch mode；
* webpack-dev-server；
* webpack-dev-middleware

一个个学一下
## Webpack watch
webpack 给我们提供了 watch 模式：
* 在该模式下，webpack依赖图中的所有文件，只要有一个发生了更新，那么代码将被重新编译；
* 我们不需要手动去运行 npm run build 指令了；

如何开启watch呢？两种方式：
* 方式一：在导出的配置中，添加 watch: true；
![图片](../.vuepress/public/images/ww2.png)
* 方式二：在启动 webpack 的命令中，添加 --watch 的标识；
![图片](../.vuepress/public/images/ww1.png)

这里选择 方式二，在 package.json 的 scripts 中添加一个 watch 的脚本
## webpack-dev-server
上面的方式可以监听到文件的变化，但是事实上它本身是没有自动刷新浏览器的功能的：
* 当然，目前我们可以在VSCode中使用live-server来完成这样的功能；
* 但是，我们希望在不使用 live-server的情况下，可以具备live reloading（实时重新加载）的功能；

安装 `webpack-dev-server`
```shell
npm install --save-dev webpack-dev-server
```
添加一个新的 scripts 脚本
![图片](../.vuepress/public/images/ww3.png)

webpack-dev-server 在编译之后不会写入到任何输出文件。而是将 bundle 文件保留在内存中：
* 事实上webpack-dev-server使用了一个库叫memfs（memory-fs webpack自己写的）

执行 `npm run serve`
![图片](../.vuepress/public/images/ww4.png)

到现在 webpack.config.js 里没有配任何关于 webpack-dev-server 的配置

## 认识 模块热替换（HMR）
什么是HMR呢？
* HMR的全称是Hot Module Replacement，翻译为模块热替换；
* 模块热替换是指在 应用程序运行过程中，替换、添加、删除模块，而无需重新刷新整个页面；

HMR通过如下几种方式，来提高开发的速度：
* **不重新加载整个页面**，这样可以保留某些应用程序的状态不丢失；
* 只更新需要变化的内容，节省开发的时间；
* 修改了css、js源代码，会立即在浏览器更新，相当于直接在浏览器的devtools中直接修改样式；

如何使用 HMR 呢？
* 默认情况下，webpack-dev-server 已经支持 HMR，我们只需要开启即可；
* 在不开启HMR的情况下，当我们修改了源代码之后，整个页面会自动刷新，使用的是live reloading







