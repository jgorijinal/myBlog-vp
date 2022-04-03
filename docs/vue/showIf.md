# v-show和v-if有什么区别？

## v-show与v-if的共同点

我们都知道在 `vue` 中 `v-show` 与 `v-if` 的作用效果是相同的(不含v-else)，都能控制元素在页面是否显示

在用法上也是相同的
```js
<div v-show="visible" ></div>    
<div v-if="visible" ></div>
```
可用`true`或`false`控制在页面页面是否显示

## v-show与v-if的区别

1. 控制手段：`v-show`隐藏则是为该元素添加`css--display:none`，`dom`元素依旧还在。`v-if`显示隐藏是在Dom树中将dom元素整个添加或删除

2. 编译过程：`v-if`切换有一个局部编译/卸载的过程，切换过程中合适地销毁和重建内部的事件监听和子组件；`v-show`只是简单的基于`css`切换

3. 编译条件：`v-if`是真正的条件渲染
* `v-show` 由`false`变为`true`不会触发组件的生命周期 , 因为它的本质是用`css--display:none`控制

* `v-if`由`false`变为`true`，会触发组件的`beforeCreate`、`create`、`beforeMount`、`mounted`钩子， 由`true`变为`false`的时候触发组件的`beforeDestory`、`destoryed`方法