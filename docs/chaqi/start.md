# 初始化项目
## git 操作

1. 领导创建项目
* 在 `main` 主分支下创建 `develop` 分支, 并把分支提交到远程仓库中
   * 创建 develop 分支 `git branch develop`
   * 切换到 `git checkout develop`
   * 添加到远程仓库 `git push --set-upstream origin develop`
* 在 `develop` 分支下创建各对应的功能分支
   * 比如创建了 `git branch feature/home` 
   * 切换到 `git checkout feature/home`
   * 再提交到远程仓库 `git push --set-upstream origin feature/home`
2. 初始化项目
* 创建前端 : `vue create <同样的项目名>` **`merge`合并** 并创建项目
* 创建后端
  * 切换到 `develop` 分支下
  * `npm install express-generator -g` 全局安装
  * 进入到项目目录, `express --view=ejs <文件夹名>` 如 `express --view=ejs server`
  * 然后进入创建的 server 目录需要执行 `npm install` 把依赖安装
  * `npm run start` 启动后端, 访问 `http://localhost:3000/` 正常访问及成功
3. 提交项目
* 在 `develop` 分支下
   * `git add .`
   * `git commit -m '初始化项目`
   * `git push`

**普通员工:** 
1. 克隆指定分支代码
* 需要注意: `git clone https://xxx` 这么克隆代码是在 `主分支`下克隆代码**并不是在 `develop` 分支下**
* 所以需要指定分支克隆代码  `git clone -b develop https://xxx`

2. 现在是在 `develop` 分支下, 但是上传代码是在某一个其他分支上
* 先配置一下身份 
  * `git config user.name '张三'` , `git config user.email 'zhangsan@163.com'`
* 在 `develop` 分支下看一下日志 , `git log` 
  * 记录 `hash`值 , 比如  `90f8eeb3786fdcfcd99fddb3185dbf9be12f184e`
* 把远程分支拉到本地仓库 `git checkout -b feature/home origin/feature/home` , 这么个写法 `git checkout -b 本地分支名 origin/远程分支名`
* 将 develope 分支 commit 对应的 `hash` 值提交的代码**合并**到 `feature/home` 分支上
   * `git cherry-pick 90f8eeb3786fdcfcd99fddb3185dbf9be12f184e`
* 功能开发完毕之后在当前分支提交代码
   * `git add .` ,`git commit -m 'xxx` ,`git push`
## css 重置样式
[normalize.css](https://github.com/necolas/normalize.css)

```shell
npm install --save normalize.css
```

`main.js` 引入 
```js
import 'normalize.css'
```
## lib-flexible 移动端适配
`utils/flexible.js`
```js
(function flexible (window, document) {
  var docEl = document.documentElement
  var dpr = window.devicePixelRatio || 1

  // adjust body font size
  function setBodyFontSize () {
    if (document.body) {
      document.body.style.fontSize = (12 * dpr) + 'px'
    }
    else {
      document.addEventListener('DOMContentLoaded', setBodyFontSize)
    }
  }
  setBodyFontSize();

  // set 1rem = viewWidth / 10
  function setRemUnit () {
    var rem = docEl.clientWidth / 10
    docEl.style.fontSize = rem + 'px'
  }

  setRemUnit()

  // reset rem unit on page resize
  window.addEventListener('resize', setRemUnit)
  window.addEventListener('pageshow', function (e) {
    if (e.persisted) {
      setRemUnit()
    }
  })

  // detect 0.5px supports
  if (dpr >= 2) {
    var fakeBody = document.createElement('body')
    var testElement = document.createElement('div')
    testElement.style.border = '.5px solid transparent'
    fakeBody.appendChild(testElement)
    docEl.appendChild(fakeBody)
    if (testElement.offsetHeight === 1) {
      docEl.classList.add('hairlines')
    }
    docEl.removeChild(fakeBody)
  }
}(window, document))
```
直接在 `main.js` 引入此文件, html 根元素的 `font-size`属性会根据屏幕的大小自动地变化

此后可以使用 `rem` 进行布局即可
## 项目中 @ 别名
`vue.config.js`
```js
const { defineConfig } = require("@vue/cli-service");
const path = require("path");

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: (config) => {
    config.resolve = {
      extensions: ['.js', '.json', '.vue'],
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    }
  }
});
```
## 头部的navbar切换插件
[ly-tab 移动端tab组件插件](https://github.com/ScoutYin/ly-tab)

## swiper 插件
[vue-awesome-swiper@3.1.3](https://github.com/surmon-china/vue-awesome-swiper/tree/v3.1.3)
## 滑动插件 better-scroll
[better-scroll](https://github.com/ustbhuangyi/better-scroll)

* 子元素的高度一定要比父元素的高度**高**
* 必须要添加到 `mounted` 中
* 也可以用 `ref` 获取 `DOM`

```html
<section ref="wrapper">
  <div class="">
    子元素
  </div>
</section>
```
```js
 mounted() {
    new BetterScroll(this.$refs.wrapper, {
      movable: true,
      zoom: true
    })
  }
```
