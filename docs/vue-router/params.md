## 1. 动态路由匹配
路径参数 用**冒号** : 表示。当一个路由被匹配时，它的 `params` 的值将在每个组件中以 `this.$route.params` 的形式暴露出来。在`Composition API`里需要引用 `useRoute` 来获取 useRoute().params
```js{10}
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        .... ， 
        {
            path: '/article',
            component: Article
        },
        {
            path: '/article/:id',  //动态字段以冒号开始
            component: Show
        }
    ]
})
```
```vue{10}
<script setup>
const { article } = defineProps({
  article:{
    type:Object
  }
})
</script>
<template>
  <div class="item">
    <router-link :to="`/article/${article.id}`">{{article.title}}</router-link> 
  </div>
</template>
```
在组件里获取`params`
```vue
<script setup>
// import api from '../api'
import { useRoute } from 'vue-router'
const route = useRoute()    //Composition API中需引入useRoute获取params
console.log(route.params.id)
// const obj = await api.find(route.params.id)
</script>
```
除了 `$route.params` 之外，`$route` 对象还公开了其他有用的信息，如 `$route.query`（如果 URL 中存在参数）、`$route.hash` 等。可以在 [API 参考](https://router.vuejs.org/zh/api/#routelocationnormalized)中查看完整的细节。

技巧 : 路由高亮
```html
<router-link to="{name:'user'}" :class=" {'link-active':$route.params.includes('user') }">用户</router-link>
<!--判断$route.params包含指定参数,指定类名-->
```

## 2. 响应路由参数的变化 (不同的路由且同一组件识别)
当使用路由参数时，例如从 /user/foo 导航到 /user/bar，**原来的组件实例会被复用**。因为两个路由都渲染同个组件，比起销毁再创建，复用则显得更加高效。不过，**这也意味着组件的生命周期钩子不会再被调用**。

当页面切换到同一个路由但不同参数的地址时，组件的生命周期钩子**不会**重新触发。

这是因为`vue-router`会识别出两个路由使用的是同一个组件从而进行复用，并不会重新创建组件，因此组件的生命周期钩子自然也不会触发。

组件本质是一个映射关系，所以先销毁再重建一个相同的组件会存在很大程度的性能浪费，复用组件才是正确的选择。但是这也意味着组件的生命周期钩子不会再被调用。

解决办法如下:
### (1)通过`watch`监听`$route`对象的变化
```vue{4,5,8}
<script setup>
import api from '../api'
import {ref, watch} from "vue";
import { useRoute } from 'vue-router'
const route = useRoute()
// const obj = ref('')
// obj.value  = await api.find(route.params.id)
watch(route , async ()=>{    //使用watch监听route的变化
  console.log(route.params.id)
  // obj.value  = await api.find(route.params.id)  // 对路由变化作出响应
})
</script>
```
这种方式也可以解决上述问题，但代价是组件内多了一个`watch`，这会带来依赖追踪的内存开销。
如果最终选择使用`watch`解决这个问题，那么在某些场景下推荐在组件里只观察自己需要的`query`或`params`等，这样有利于减少不必要的请求。
```js
watch(route.params.id,()=>{
   // 对路由变化作出响应
})
```
### (2)使用`beforeRouteUpdate` [导航守卫](https://router.vuejs.org/zh/guide/advanced/navigation-guards.html)：

## 3. 404 路由
```js{14}
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        .... ， 
        {
            path: '/article',
            component: Article
        },
        {
            path: '/article/:id',  
            component: Show
        },
         {
            path: '*',    //会匹配所有路径
            component: NotFound
        }
    ]
})
```
当使用通配符路由时，请确保路由的顺序是正确的，也就是说含有通配符的路由应该放在**最后**。路由 `{ path: '*' }` 通常用于客户端 `404` 错误。

当使用一个通配符时，`$route.params` 内会自动添加一个名为 `pathMatch` 参数。它包含了 URL 通过通配符被匹配的部分：
```js
// 给出一个路由 { path: '/user-*' }
this.$router.push('/user-admin')
this.$route.params.pathMatch // 'admin'
// 给出一个路由 { path: '*' }
this.$router.push('/non-existing')
this.$route.params.pathMatch // '/non-existing'
```