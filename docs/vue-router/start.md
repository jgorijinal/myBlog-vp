# Vue Router 4 初始配置
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
#### createRouter
创建一个可以被 `Vue` 应用程序使用的路由实例。查看 [`RouterOptions`](https://router.vuejs.org/zh/api/#history) 中的所有可以传递的属性列表
```ts
export declare function createRouter(options: RouterOptions): Router
```
参数 `options`用来初始化 `router`
#### RouterOptions
[官网参考](https://router.vuejs.org/zh/api/#history)
#### RouteRecordRaw
[官网参考](https://router.vuejs.org/zh/api/#routerecordraw)
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
3. `SEO` 差
* `history`模式:
1. 地址干净 , 美观
2. 兼容性比`hash`模式略差
3. 应用部署时需要后端人员配合 ,  解决刷新页面404的问题 , 否则页⾯刷新就挂了

大多数 `web` 应用程序都应该使用 `createWebHistory`，但它要求正确配置服务器。你还可以使用 `createWebHashHistory` 的基于 `hash` 的历史记录，它不需要在服务器上进行任何配置，但是搜索引擎根本不会处理它，在 `SEO` 上表现很差。

## 别名@ 
TS环境:
```sh
yarn add -D path
yarn add -D @types/node
```
```ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'     //TS

export default defineConfig({
  plugins: [vue()],
  resolve:{
    alias:{'@':path.resolve(__dirname,'src')}
  }
})
```
## 配合TS的路由初始配置
router/routes.ts:
```ts
import {RouteRecordRaw} from 'vue-router';

const routes = [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue')
    }
  ] as RouteRecordRaw[]

export default routes
```

router/index.ts: 
```ts{3,12,16-18}
import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router';
import {App} from 'vue';
import routes from './routes';

const router = createRouter({
  history: createWebHashHistory(),
  routes  
});

export function setupRouter(app: App) {
  app.use(router);
}

export default router;
```
main.ts:
```ts{5-11}
import { createApp } from 'vue'
import App from './App.vue'
import router , { setupRouter } from './router';

async function bootstrap() {
  const app = createApp(App)
  setupRouter(app)
  await router.isReady()   //等到路由器完成初始化导航, isReady()会返回promise, 后面再挂载
  app.mount('#app')
}
bootstrap()
```