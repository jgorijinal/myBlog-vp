 # 路由配置
 介绍: 使用`Vue3`开发的前端脚手架，使用技术包括`Vue3`、`typescript`、`tailwindcss`、`elementPlus`、`axios`、`mockJs`、`vite`
 ## 创建项目
 ```sh
 mkdir 项目名
 cd 项目名
 yarn create vite
 ```
 ## 初始的路由配置
即将要用**布局路由的自动注册**方法
```
src/layouts   布局路由(要加上<router-view>)
|--admin.vue
|--member.vue
```
```
src/views
admin
|--user.vue
member
|--mail.vue
```
**注意**: 布局路由一定要写上`<router-view>`
```
src/router
|--autoload.ts
|--guard.ts    //路由守卫
|--index.ts     
|--routes.ts
```
src/router/routes.ts 
```js
import {RouteRecordRaw} from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../layouts/Admin.vue'),
  }
] as RouteRecordRaw[]

export default routes
```
src/router/index.ts
```js
import {createRouter, createWebHashHistory} from 'vue-router';
import {App} from 'vue';
import routes from './routes';
import layoutRoutes from './autoload';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    ...routes , ...layoutRoutes
  ]
});
console.log(layoutRoutes)
export function setupRouter(app: App) {
  app.use(router);
}


export default router;
```
src/router/autoload.ts

使用`import.meta.globEager(pattern)`api , 获取vue文件
```ts
import {RouteRecordRaw} from 'vue-router';
//import.meta.globEager(pattern)
const routesModules = import.meta.globEager('../layouts/*.vue')   //布局路由
const viewsModules = import.meta.globEager('../views/**/*.vue')   // 布局路由对应的子路由
//https://cn.vitejs.dev/guide/features.html#glob-import 看vite文档
//import.meta.globEager(pattern)
//返回的格式为, 例如
// {
//   './dir/foo.js': () => import('./dir/foo.js'),
//   './dir/bar.js': () => import('./dir/bar.js')
// }
const  getRoutes = ():RouteRecordRaw[]=>{
  const layoutRoutes = [] as RouteRecordRaw[]
  Object.entries(routesModules).forEach(([file , module]) =>{
    const route = getRouteByModule(file , module)
    route.children = getChildRouteByModules(route)
    console.log(route)
    layoutRoutes.push(route)
  })
  return layoutRoutes
}


// ../views/admin/validate.vue
const getChildRouteByModules = (layoutRoute:RouteRecordRaw) =>{
  const routes = [] as RouteRecordRaw[]
  Object.entries(viewsModules).forEach(([file , module])=>{
    if (file.includes(`../views/${layoutRoute.name  as string}`)){   // 细品
      const route = getRouteByModule(file , module)
      routes.push(route)
    }
  })
  return routes
}
const getRouteByModule = (file:string , module:{ [key:string]:any} )=>{
  const name = file.replace( /.+layouts\/|.+views\/|\.vue/gi, '')      // 细品 
  return {
    path: `/${name}`,
    name: name.replace('/', '.'),
    component: module.default
  } as RouteRecordRaw
}

export default getRoutes()
```
src/main.ts
```ts
import { createApp } from 'vue'
import App from '@/App.vue'
import router , { setupRouter } from '@/router';

async function bootstrap() {
  const app = createApp(App)
  setupRouter(app)     //路由
  //setupPlugins(app)  //插件
  await router.isReady()
  app.mount('#app')
}
bootstrap()
```