# 路由守卫
`vue-router` 提供的路由守卫主要用来通过**跳转或取消**的方式**守卫**导航。路由守卫有(1)全局的，(2)单个路由独享的，或者(3)组件级的。
##  全局前置守卫 `router.beforeEach()`
```js
const router = createRouter({ ... })

router.beforeEach((to, from) => {
    console.log(to.name , from.name)
  // ...
  // 返回 false 会取消导航
  return false
})
```
当一个导航触发时，全局前置守卫按照创建顺序调用。守卫是**异步解析执行**的。

两个参数: 
* `to`: 即将要进入的目标 [用一种标准化的方式](https://router.vuejs.org/zh/api/#routelocationnormalized)
* `from`: 当前导航正要离开的路由 [用一种标准化的方式](https://router.vuejs.org/zh/api/#routelocationnormalized)
返回的值:
* `false`: 取消当前的导航。
* 一个[路由地址](https://router.vuejs.org/zh/api/#routelocationraw): 通过一个路由地址跳转到一个不同的地址 ,比如`name: 'home'` 之类的配置。

如果什么都没有，`undefined` 或返回 `true`，则**导航是有效的**，并调用下一个导航守卫

用**Promise**
```js
router.beforeEach((to, from)=>{
  return new Promise((resolve , reject)=>{
     setTimeout(()=>{ resolve() } , 2000)
  })
})
```
```js
router.beforeEach(async (to, from) => {
  // canUserAccess() 返回 `true` 或 `false`
  return await canUserAccess(to)
})
```
### 可选的第三个参数 next
如果传了next参数 , 就要保证**调一次**
```js
router.beforeEach((to,from , next)=>{
    if(to.name==='about' && !isAuthenticated) next({name:'login'})
    else next()     //确保只调一次
})
```
##  全局解析守卫 `router.beforeResolve()` 
在导航被确认之前，同时在**所有组件内守卫和异步路由组件被解析之后**，解析守卫就被调用。
```js
router.beforeResolve((to , from)=>{
  console.log('beforeResolve')
})
```
## 全局后置守卫 `router.afterEach()` 
不会接受 `next` 函数也不会改变导航本身
第三个参数是`fail` , 通常是`undefined` , 导航被阻止了`fail`是带有`Error`实例,这些属性为我们提供了足够的信息，让我们知道哪些导航被阻止了以及为什么被阻止了。
```js
const routes = []   //本地存储跳转成功的路由
router.afterEach((to, from ,fail)=>{
    if(!fail) {   //没被阻止
        routes.push(to.path)
        window.localStorage.setItem('routes' , JSON.stringify(routes))
    }
})
```
## 路由独享守卫 `beforeEnter`
可以直接在路由配置上定义 `beforeEnter` 守卫。

`beforeEnter` 守卫 **只在进入路由时触发**，不会在 params、query 或 hash 改变时触发。例如，从 /users/2 进入到 /users/3 或者从 /users/2#info 进入到 /users/2#projects。它们只有在 **从一个不同的** 路由导航时，才会被触发。

也可以将一个**函数数组**传递给 `beforeEnter`，这在为不同的路由重用守卫时很有用：
### 例子 :meta源信息完成登录验证
helper.js
```js
const login = false  //假设 登录状态是false ,即用户没登录

const loginCheck = (to , from , next) {
  //如果 没登录 && 需要验证 , 就直接跳转到登录页
  if(!login && to.meta.auth) next({name:'login'})
  else next()
}
export { loginCheck }
```
router/index.js
```js{5,14,15}
// import {createRouter, createWebHashHistory} from "vue-router";
// import Home from '../views/Home.vue'
// import About from '../views/About.vue'
// import Login from '../views/Login.vue'
import   { loginCheck }  from '../helper'
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/', redirect: '/home'},
        {path: '/home', name: 'home', component: Home},
        {
            path: '/about',
            name: 'about',
            meta:{ auth: true }   // 需要验证
            component: About,
            beforeEnter:[loginCheck]  //可以是函数的数组
        },
        {path: '/login', name: 'login', component: Login}
    ]
})

export default router
```
## 组件内路由守卫
* `beforeRouteEnter`
* `beforeRouteUpdate` 
* `beforeRouteLeave`

### (1) `beforeRouteEnter`

* `beforeRouteEnter`在导航确认前被调用，因此即将登场的新组件还没被创建。所以不能访问`this`
不过，可以通过传一个**回调**给 `next`来访问组件实例。
```js
beforeRouteEnter (to, from, next) {
  next(vm => {
    // 通过 `vm` 访问组件实例
    vm.title = 'frank'
  })
}
```
#### 例子: `beforeRouteEnter`获取数据
```vue{8}
<script>
export default  {
  data(){
    return {
      name:'frank'
    }
  },
  beforeRouteEnter(to, from ,next){
    new Promise((resolve , reject)=>{  //模拟请求数据 , 2秒后获取数据
      setTimeout(()=>{
          next(vm => {
            vm.name  = 'hello'  //next通过回调, 用vm获取实例 , 改data属性
          })
      } , 2000)
    })
  }
}
</script>
```
### (2) `beforeRouteUpdate`
路由参数变化时 , 当使用路由参数时，例如从 `/user/foo` 导航到 `/user/bar`，原来的组件实例会被复用。因为两个路由都渲染同个组件，比起销毁再创建，复用则显得更加高效。不过，这也意味着组件的生命周期钩子不会再被调用。

所以想要响应路由参数的变化, 修改数据:
**(1)** 可以通过`watch`监听`$route`对象的变化 , **(2)** 也可以使用**组件内守卫**  **`beforeRouteUpdate`**
### (3) `beforeRouteLeave`
#### 例子: 使用`beforeRouteLeave`保护数据
如果当前页面为编辑页面, 用户点击退出会丢失编辑好的资料 , 所以这个时候可以加上退出前确认
该导航可以通过返回 `false` 来取消。
```vue
<script>
export default  {
  // data(){
  //   return {
  //     name:'frank'
  //   }
  // },
  // beforeRouteEnter(to, from ,next){
  //   new Promise((resolve , reject)=>{
  //     setTimeout(()=>{
  //         next(vm => {
  //           vm.name  = 'hello'
  //         })
  //     } , 2000)
  //   })
  // },
  beforeRouteLeave(to,from ,next){
    const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
    if(answer) next()
  }
}
</script>
```
## 路由解析流程
1. 导航被触发。
2. 在失活的组件里调用 `beforeRouteLeave` 守卫
3. 调用全局的 `beforeEach` 守卫
4. 在重用的组件里调用 `beforeRouteUpdate` 守卫
5. 在路由配置里调用 `beforeEnter`
6. 解析异步路由组件。
7. 在被激活的组件里调用 `beforeRouteEnter`。
8. 调用全局的 `beforeResolve` 守卫
9. 导航被确认
10. 调用全局的 `afterEach` 钩子
11. 触发 DOM 更新
12. 调用 `beforeRouteEnter` 守卫中传给 `next` 的回调函数，创建好的组件实例会作为回调函数的参数传入。

* 只有**路由参数**变化时:
1. 全局的`beforeEach`
2. 组件内的`beforeRouteUpdate`
3. 全局的`beforeResolve`
4. 全局的`afterEach`



