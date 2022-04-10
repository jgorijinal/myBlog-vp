# Vue2到Vue3的变化
> Vue3 为什么使用 Proxy?

* (1)弥补`Object.defineProperty`的两个不足
**动态**创建的`data`属性需要用`Vue.set`来赋值 , `Vue3`用了`Proxy`就不需要了
如果一开始属性不在`data`里面 , 突然我对`data`突然增加了一个属性 , 那么`vue`是不知道的 
基于性能考虑 , `Vue2` 篡改了数组的7个API , `Vue`用了`proxy`就不需要了
* (2) `Object.defineProperty`需要提前递归遍历`data`做到响应式 , 
而`proxy`可以在真正需要深层数据的时候在做响应式(**惰性**)


> 为什么使用  composition API ?
* (1)解决了数据来源不清晰
* (2)更适合`typescript`

> Vue2 到 Vue3 的变动
* (1)`createApp()` 代替了`new Vue()`
* (2)`v-model`代替了 `v-model` 和 `.sync`
* (3)根元素不只有一个了 
* (4)新增`Teleport`传送门
* (5)`destroyed`改名为`unMounted`
* (6)`ref`属性支持函数了
* (7)新增了 `composition API`

