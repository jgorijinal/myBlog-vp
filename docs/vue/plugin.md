# 开发插件

Vue.js 的插件应该暴露一个 install 方法。这个方法的第一个参数是 Vue 构造器，第二个参数是一个可选的选项对象：

```js
MyPlugin.install = function (Vue, options) {
// 1. 添加全局方法或 property
    Vue.myGlobalMethod = function () {
        // 逻辑...
    }

// 2. 添加全局资源
    Vue.directive('my-directive', {
        bind(el, binding, vnode, oldVnode) {
            // 逻辑...
        }
        ...
    })

// 3. 注入组件选项
    Vue.mixin({
        created: function () {
            // 逻辑...
        }
        ...
    })

// 4. 添加实例方法
    Vue.prototype.$myMethod = function (methodOptions) {
        // 逻辑...
    }
}
```

通过全局方法 Vue.use() 使用插件。它需要在你调用 new Vue() 启动应用之前完成：

```js
// 调用 `MyPlugin.install(Vue)`
Vue.use(MyPlugin)

new Vue({
// ...组件选项
})
```

## Vue 动态创建组件实例

在 `Vue` 里面，如果你想在页面里弹出一个东西，通常的办法是：

* 事先把要弹出的东西写在页面里，用 visible: false 把它隐藏起来
* 控制 `visible` 使其显示或再次隐藏

另外一种就是下面代码所示那样 比如用户点击按钮的时候动态创建一个 `Vue` 实例
`Element UI` 中的 `$message`就是这样实现的，这种方法尤其适合通知类的场景，实现思路如下

`plugin.js`中
```js
import Component from './Component.Vue'

export default {
    install(Vue, options) {  //第一个参数Vue是Vue.use(plugin)传过来的
        Vue.prototype.$message = function (message, componentOptions) {  
            const Constructor = Vue.extend(Component)   //使用基础 Vue 构造器，创建一个“子类”。参数是一个包含组件选项的对象。
            const component = new Constructor({         //创建动态实例
                propsData: componentOptions
            })
            toast.$slots.default = [message]       //插槽slot里面写内容, $slot.dafault是数组
            toast.$mount()                         //$mount如果没有提供参数，模板将被渲染为文档之外的的元素，并且你必须使用原生 DOM API 把它插入文档中。
            document.body.appendChild(toast.$el)   //添加到页面
        }
```
使用时
```js
import plugin from './plugin.js'
Vue.use(plugin)
    
Vue.prototype.$message('这是提个弹出框' , {
    //一些相关的配置
})
```
