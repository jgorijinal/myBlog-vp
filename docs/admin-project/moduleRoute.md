# 模块路由自动注册
```
router/autoload
|--view.ts      布局路由自动注册的路由   (用env环境变量控制切换是否走布局路由 , 还是模块路由)
|--modules.ts   根据模块手动注册的路由
|--index.ts     入口文件
router/modules  
|--admin.ts    模块路由之admin布局路由
|--auth.ts     模块路由之auth布局路由
```
判断env变量中`VITE_ROUTER_AUTOLOAD`是否为`true` , 如果是`true`的话使用布局路由的自动注册

如果是`false`的话 , 就用自己手动写入代码添加的模块路由 , 如`module`文件夹里的`admin.ts`和`auth.ts`

router/autoload/index.ts
```ts
import getRoutes from '@/router/autoload/views';
import { env } from '@/utils'
import { RouteRecordRaw } from 'vue-router';
import { autoloadModuleRoutes } from '@/router/autoload/module';

let autoloadRoutes = [] as RouteRecordRaw[]
if(env.VITE_ROUTER_AUTOLOAD){
  autoloadRoutes = getRoutes()
}else {
  autoloadRoutes = autoloadModuleRoutes()
}

export default  autoloadRoutes
```
router/autoload/module.ts  自动注册自己填写的模块路由
```ts
import {RouteRecordRaw} from 'vue-router';

export function autoloadModuleRoutes(){
  const autoloadRoutes = [] as RouteRecordRaw[]
  const modules = import.meta.globEager('../module/**/*.ts')
  console.log(Object.keys(modules));
  Object.keys(modules).forEach((name)=>{
    // console.log(name);
    // console.log(modules[name].default)
    autoloadRoutes.push( modules[name].default )      // 精髓代码
  })
  return autoloadRoutes
}
```
router/module/admin.ts
```ts
import {RouteRecordRaw} from 'vue-router';

export default {
  path: '/admin',
  name: 'admin',
  component:()=>import('@/layouts/admin.vue'),
  meta:{auth:true},
  children:[
    {
      path:'home',
      name:'admin.home',
      component:()=>import('@/views/admin/home.vue')
    }
  ]
} as RouteRecordRaw;
```
router/module/auth.ts
```ts
import {RouteRecordRaw} from 'vue-router';

export default    {
  path:'/auth',
  name:'auth',
  component:()=>import ('@/layouts/auth.vue'),
  children:[
    {
      path:'/auth/login',
      name:'login',
      meta:{guest:true},
      component:()=>import('@/views/auth/login.vue')
    }
  ]
} as RouteRecordRaw

```
router/index.ts  `router`总入口文件
```ts{4}
import { createRouter, createWebHashHistory, RouteRecordRaw,createWebHistory } from "vue-router";
import { App } from "vue";
import routes from "./routes";
import autoloadRoutes from './autoload';
import Guard from './guard'

const router = createRouter({
  history: createWebHistory(),
  routes:[...routes , ...autoloadRoutes]
});

export function setupRouter(app: App) {
  app.use(router);
  Guard(router)
}

export default router;
```
## 添加新的布局路由
增添新的布局页面`error.vue`, 并在`src/views/error`里新增新的`error`页面如403.vue、404.vue、500.vue , 然后在模块路由里新增相应的路由
```
src/layouts
|--error.vue  (注意加上<router-view />)
```
添加新的`error`模块路由

router/module/error.ts
```ts
import {RouteRecordRaw} from 'vue-router';

export default  {
  path:'/error',
  name:'error',
  component:()=>import('@/layouts/error.vue'),
  children:[
    {
      path:'404',
      name:'error.404',
      component:()=>import('@/views/error/404.vue')
    },
    {
      path:'403',
      name:'error.403',
      component:()=>import('@/views/error/403.vue')
    },
    {
      path:'500',
      name:'error.500',
      component:()=>import('@/views/error/500.vue')
    },
  ]
} as RouteRecordRaw
```
## `pinia`的安装与基本使用
[英文文档](https://pinia.vuejs.org/introduction.html) / [中文文档](https://pinia.web3doc.top/introduction.html)
### 安装
安装
```sh
yarn add pinia
# 或者使用 npm
npm install pinia
```
需引入`pinia` , 引入的具体细节需要参考官网
```
src/plugins/pinia
|--index.ts  pinia的入口文件
```
src/plugins/pinia/index.ts
```ts
import App from 'vue'
import { createPinia } from 'pinia'

export default function setupPinia(app:App) {
  app.use(createPinia())
}
```
src/plugins/index.ts   插件(plugins)的总入口文件
```ts{11}
import {App} from 'vue';
import {setupTailwindcss} from '@/plugins/tailwindcss';
import _ from 'lodash'
import setupElementPlus from '@/plugins/elementui';
import setupPinia from '@/plugins/pinia';

export function setupPlugins(app:App) {
  setupTailwindcss()
  setupElementPlus(app)
  autoRegisterComponent(app)
  setupPinia(app)
}

// 全局自动注册组件函数
function  autoRegisterComponent(app:App){
  const components= import.meta.globEager('../components/form/*.vue')
  Object.keys(components).forEach((key)=>{
    const name = _.camelCase(key.split('/').pop()?.split('.').shift() as string)
    console.log(name)
    app.component(name , components[key].default)
  })
}
```
### 基本使用
```
src/store
|--menuStore.ts
```
menuStore.ts
```ts
import {defineStore} from 'pinia';

export const useRouterStore = defineStore('router',{
  state:()=>{
    return {
      xxx:'hello'
    }
  },
  getters:{
    get(state){
      return state.xxx
    }
  }
})
```
在组件里面使用时
```vue
<script lang="ts" setup>
import { useRouterStore } from '@/store/menuStore';

const router = useRouterStore()
console.log(router.xxx)
console.log(router.get)
</script>
```
## 自定义路由元信息 meta
配置 `meta` 字段之前 , 先定义`RouteMeta`类型
```
src/types/router.ts
```
router.ts
```ts
import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    auth?: boolean,
    guest?:boolean,
    show?:boolean, //路由是否在菜单中显示
    title?:string, //菜单标题
    iconName?:string // 图标Icon的name名字.
    isClick?:boolean // 被点击的状态
  }
}
```
试着在`error`和'editor'模块路由上 , 配置`meta`字段

src/router/module/error.ts
```ts{7,12,18,24}
import {RouteRecordRaw} from 'vue-router';

export default  {
  path:'/error',
  name:'error',
  component:()=>import('@/layouts/error.vue'),
  meta:{title:'错误页面' , iconName:'error' , show:true ,isClick:true},
  children:[
    {
      path:'404',
      name:'error.404',
      meta:{title:'404页面',show:true},
      component:()=>import('@/views/error/404.vue')
    },
    {
      path:'403',
      name:'error.403',
      meta:{title:'403页面',show:true},
      component:()=>import('@/views/error/403.vue')
    },
    {
      path:'500',
      name:'error.500',
      meta:{title:'500页面',show:false},   // 这里设置 show 设置成了 false , 为了不想再菜单上显示
      component:()=>import('@/views/error/500.vue')
    },
  ]
} as RouteRecordRaw
```
src/router/module/editor.ts
```ts{4,10,16}
export default  {
  path:'/editor',
  name:'editor',
  meta:{title:'编辑器',iconName:'fuwenbenbianjiqi',show:true },
  component:()=>import('@/layouts/editor.vue'),
  children:[
    {
      path:'base',
      name:'editor.base',
      meta:{title:'富文本编辑器',show:true },
      component:()=>import('@/views/editor/base.vue')
    },
    {
      path:'markdown',
      name:'editor.markdown',
      meta:{title:'markdown编辑器',show:true },
      component:()=>import('@/views/editor/markdown.vue')
    }
  ]
}
```
## 根据meta字段提取菜单可用路由
使用 `pinia` 的 `state` 传递筛选的路由
src/store/menuStore.ts  
```ts
import {defineStore} from 'pinia';
import {useRouter} from 'vue-router';

export const useRouterStore = defineStore('router',{
  state:()=>{
    return {
      routes:getRoutes()
    }
  }
})

function getRoutes(){
  const router  = useRouter()
  const routes = router
    .getRoutes()
      // router.getRoutes() 会得到所有路由
    // 得到的所有路由里面 , 根据 meta 筛选出 {show:true} 的路由 , 并将其子路由中也筛选出 {show:true} 的路由
    .filter(route=>{
      return route.children.length && route.meta.show
    })
    .map(route => {
      route.children = route.children.filter(route=>route.meta?.show)
      return route
    })
  // console.log(routes)
  return routes
}
```
## 渲染菜单与路由跳转
遍历路由自定义的`meta`属性, 渲染菜单

src/layouts/admin/menu.vue 左侧菜单组件
```vue{23}
<script lang="ts" setup>
import Icon from '@/components/Icon.vue'
import {reactive, ref} from 'vue';

import {useRouterStore} from '@/plugins/store/menuStore';
import {RouteRecordNormalized, RouteRecordRaw , useRouter} from 'vue-router';
const router = useRouterStore()
const routes  = reactive(router.routes)
const routerService = useRouter()

const handle = (route: RouteRecordNormalized , cRoute:RouteRecordRaw)=>{
  reset()
  route.meta.isClick = true
  if(cRoute && cRoute.meta) {
    routes.forEach(route => {
      route.children.forEach(c =>{
        if(c.meta) {
          c.meta.isClick = false
        }
      })
    })
    cRoute.meta.isClick = true
    routerService.push(cRoute)    // 路由跳转
  }
}
const reset = ()=>{
  routes.forEach(route =>{
    route.meta.isClick = false
  })
}
</script>
<template>
  <div class="menu">
    <div class="logo">
      <Icon name="admin" class="admin-logo" /> Eren后台管理
    </div>
    <div class="left-container">
      <dl v-for="(route,index) in routes" :key="index">
        <dt @click="handle(route)">
          <section class="title">
            <Icon :name="route.meta.iconName" />
            <span>{{route.meta.title}}</span>
          </section>
          <section class="arrow" :class="{active:route.meta.isClick}" >
            <Icon name="xiangxiajiantou" />
          </section>
        </dt>
        <dd v-show="route.meta.isClick" :class="{active:children.meta.isClick}"
            v-for="(children,index) in route.children" :key="index" @click="handle(route,children)">{{children.meta.title}}</dd>
      </dl>
    </div>
  </div>
</template>
```
## pinia保存用户数据
在全局前置路由守卫中,  getUserInfo() 获取用户数据 , 并保存到pinia状态管理

scr/plugins/store/userStore.ts
```ts
//在全局前置路由守卫中,  getUserInfo() 获取用户数据 , 并保存到pinia状态管理

import {defineStore} from 'pinia';
import userApi, { User } from '@/apis/userApi'

export const useUserStore = defineStore('user',{
  state:()=>{
    return {
      info:{} as null | User
    }
  },
  actions:{
    async getUserInfo(){
      const res = await  userApi.info()
      this.info = res.result
    }
  }
})
```
guard.ts  在路由守卫的前置守卫中发送请求
```ts{19,23-27}
import {RouteLocationNormalized, Router, RouteRecordNormalized} from 'vue-router';
import store, {IData} from '@/utils/store';
import {useUserStore} from '@/plugins/store/userStore';

class Guard {
  private router: Router;

  constructor(router: Router) {
    this.router = router;
  }

  public run() {
    this.router.beforeEach((to, from) => {
      console.log(to);
      const token = store.get('token');
      // 如果没登录 , 跳转到 login 页面
      if (this.isLogin(to) === false) {return {name: 'login'};}
      if (this.isGuest(to) === false) {return from;}
      this.getUserInfo()  //获取用户数据
    });
  }
  // 获取用户数据 , 前提是拥有token
  private getUserInfo() {
    if(this.token()) {
      return useUserStore().getUserInfo()
    }
  }
  //获取token
  private token():IData | null {
    return store.get('token')
  }
  // 检查是否满足可查看某页面的条件 , 返回布尔值
  private isLogin(toRoute: RouteLocationNormalized) {
    return Boolean(!toRoute.meta.auth || (this.token() && toRoute.meta.auth));

  }
  private isGuest(toRoute: RouteLocationNormalized) {
    return Boolean(!toRoute.meta.guest || (toRoute.meta.guest && !this.token()));
  }
}

export default (router: Router) => {
  new Guard(router).run();
}
```
在其他组件中读取使用`pinia`保存的用户数据 , 例如`navbar.vue`导航组件里的`avatar`头像

pinia 的`Actions` 可以象method一样使用
navbar.vue
```vue{2-4,15-16}
<script setup lang="ts">
import {useUserStore} from '@/plugins/store/user';
const user = useUserStore()
const userInfo = user.info
</script>
<template>
<div class="navbar">
  <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: '/' }">编辑器</el-breadcrumb-item>
    <el-breadcrumb-item><a href="">富文本编辑器</a></el-breadcrumb-item>
  </el-breadcrumb>
  <div class="avatar-wrapper">
    <div class="avatar">
      <div class="info">
        <img :src="userInfo.avatar" alt="avatar">
        <span>{{userInfo.name}}</span>
      </div>
      <div class="actions">
        <div>文档资料</div>
        <div>用户管理</div>
        <div>会员中心</div>
      </div>
    </div>
  </div>
</div>
</template>
```