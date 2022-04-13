# Vue Router 4
Vue Router 是 Vue.js官方的路由管理器 , 适用于构建单页面应用  (单页应用路由管理器)
[官网](https://router.vuejs.org/zh/introduction.html)
## 安装
```sh{2}
yarn create vite vue --template vue
yarn add vue-router@4
yarn add -D sass@1.26.10  #安装sass 
```
## 初始配置
src/router/index.js
```js
import { createRouter, createWebHashHistory } from "vue-router";
import Home from '../components/Home.vue'
import Article from '../components/Article.vue'

const router = createRouter({           
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/article',
            component: Article
        }
    ]
})

export default router
```
main.js
```js
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from "./router";
createApp(App).use(router).mount('#app')    //app.use(router)
```
### hash模式 与 history模式
一个用`hash` , 一个用的`History API`
* `hash`模式 :
1. 地址永远带`#` , 不美观
2. 兼容性较好
* `history`模式:
1. 地址干净 , 美观
2. 兼容性比`hash`模式略差
3. 应用部署时需要后端人员配合 ,  解决刷新页面404的问题 , 否则页⾯刷新就挂了
