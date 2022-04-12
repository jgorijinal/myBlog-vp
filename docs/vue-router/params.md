## 动态路由匹配
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
