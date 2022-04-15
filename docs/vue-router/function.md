# 编程式的导航
不借助 `router-link` 标签 , 用函数让路由跳转更加灵活
## router.push()
会追加历史记录 
**注意：在 `Vue`实例内部，你可以通过 `$router` 访问路由实例。因此你可以调用 `this.$router.push`。**

例子:
```vue
<script setup>
import {useRouter} from 'vue-router'
const router = useRouter()
const links = [
  {name:'home' , title :'主页'},
  {name:'article' , title :'文章'},
  {name:'mobile' , title :'收集'},
  {name:'email' , title :'邮箱'}
]

const push = (link)=>{
  router.push({name:link.name})  //命名路由
}
</script>
<template>
  <div v-for="(link , index) of links" :key="index" @click="push(link)">{{link.title}}}</div>
</template>
```
该方法的参数可以是一个字符串路径，或者一个描述地址的对象。例如：
```js
// 字符串
router.push('home')

// 对象
router.push({ path: 'home' })

// 命名的路由 
router.push({ name: 'user', params: { userId: '123' }})  

// 带查询参数，变成 /register?plan=private
router.push({ path: 'register', query: { plan: 'private' }})
```
**注意：如果提供了 `path`， 那么`params` 会被忽略，需要提供路由的 `name` 或手写完整的带有参数的 `path`：**
```js
const userId = '123'
router.push({ name: 'user', params: { userId }})    //  /user/123
router.push({ path: `/user/${userId}` })    // /user/123
// 这里的 params 不生效
router.push({ path: '/user', params: { userId }}) // -> /user  
```
## router.replace()
跟 `router.push` 很像，唯一的不同就是，它**不会向 history 添加新记录**，而是跟它的方法名一样 —— 替换掉当前的 `history` 记录。
## router.forward()
前进
## router.back()
后退
## router.go()
参数为数字 ,  正数 或者 负数

* 比如
`this.$router.go(3)`   前进3 page
`this.$router.go(-4)`  后退 4 page 

##  $route 和 $router 
$route 每个组件都有  , 都不同 
$router 只有一个 

