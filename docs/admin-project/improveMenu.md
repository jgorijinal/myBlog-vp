# 后台菜单优化
## 用户退出登录
* localStorage中的token删掉
* pinia 中的 info 删除

### 优化localStorage工具函数
```
src/utils  工具
|-- env.ts
|-- index.ts   入口文件
|-- store.ts   localStorage工具函数
|-- user.ts    关于用户操作的函数
```
store.ts
```ts
// 定义localStorage工具函数
// set时, 可以设置过期时间 . get时判断是否到期了,如果到期了就删除,没过期返回数据 (逻辑处理要细品)
// 时间上的处理, 善用 new Date().getTime()得到时间戳

export interface IData {
  data:any
  expire?: number;     //过期时间 (s)
}
export default {
  set(key: string, data:any , expire?:number): void {    // 三个参数: 1.字符串名 2.data数据 3.expire过期时间
    const cache:IData = { data }
    if (expire) {
      cache.expire = expire * 1000 + new Date().getTime();
    }
    localStorage.setItem(key, JSON.stringify(cache));
  },
  get(key: string) {
    const cacheStore = localStorage.getItem(key);
    if (cacheStore) {
      const cache = JSON.parse(cacheStore);
      const expire = cache?.expire;
      if (expire && expire < new Date().getTime()) {
        localStorage.removeItem(key);
        return null;
      }
      return cache.data ;
    }
    return null;
  },
  remove(key:string){
    localStorage.removeItem(key)
  }
};
```
其中由于 'token'这个字符串会被重复使用 , 直接配置成`enum`
```
src/enum
|-- cacheEnum.ts
```
cacheEnum.ts
```ts
export enum CacheEnum {
  TOKEN_NAME = 'login_token'
}
```
随之把所有用到'token'字符串的地方 , 全部更改成`CacheEnum.TOKEN_NAME` , 比如路由守卫`guard.ts`

**登录**和**用户退出的登录**函数封装

user.ts  
```ts
import store from '@/utils/store';
import {CacheEnum} from '@/enum/cacheEnum';
import userApi , {ILoginData} from '@/apis/userApi';
import router from '@/router';
// 这里的router 不是composition api , 所以不能使用const router = useRouter(), 必须导入具体router实例

//login 登录
export async function login(values:ILoginData){
  const {result: {token}} = await userApi.login(values); // 获取 token
  store.set(CacheEnum.TOKEN_NAME,  token )
  await router.push({name:'home'})
}
//logout  删除localStorage里的token
export function logout(){
  store.remove(CacheEnum.TOKEN_NAME)
  await router.push('/')                 // 跳转到home页
  useUserStore().info = null             // pinia 的 info 清空
}
```
src/api/userApi.ts 
```ts{16-26}
import { http } from '@/plugins/axios'
export interface  User {
  name: string,
  age:number,
  avatar:string
}
 async function  info(){
   return  await http.request<User>({
    url:'user/info'
  })

}
interface LoginInterface {
  token: string
}
export interface ILoginData {   // 声明类型
  account:string
  password:string,
}
async function login(data:ILoginData){
  return await http.request<LoginInterface>({
    url:'login',
    method:'post',
    data
  })
}

export default {info , login }
```
index.ts 入口文件
```ts
import store from './store'

import env from './env'
import * as user  from './user'

export  { store , env  , user}
```
在其他组件里使用**退出登录**函数

![图片](../.vuepress/public/images/logout.png)
```
import * as utils from './utils'

<div @click="utils.user.logout()">退出登录</div>
```
## 自定义 404 路由 
src/router/routes.ts
```ts{9-13}
import {RouteRecordRaw} from 'vue-router';

const  routes = [
  {
    path:'/',
    name:'home',
    component:()=>import ('@/views/Home.vue')
  },
  {
    path:'/:any(.*)',
    name:'notfound',
    component:()=>import('@/views/error/404.vue')
  }
] as RouteRecordRaw[]

export default routes
```
## 登录历史路由跳转
比如用户在没有登录的状态下 , 直接访问到了`http://localhost:3000/#/error/404`, 这个时候当然访问不了这个页面

但一旦用户登陆了之后 , 想要让用户页面跳转到刚才访问不到的那个页面 , 做一下这个处理

思路:
* **路由守卫**的登录模块中做判断, 如果没能登录, 就在**`localStorage`里存**想要去的路由名字name
* 然后让用户登录时, 判断如果`localStorage`里存在刚才路由名字 , 就跳转到那

src/enum/cacheEnum.ts
```ts{3}
export enum CacheEnum {
  TOKEN_NAME = 'login_token',
  REDIRECT_ROUTE_NAME = 'redirect_route_name'
}
```
src/router/guard.ts
```ts{36-38}
import {RouteLocationNormalized, Router, RouteRecordNormalized} from 'vue-router';
import store, {IData} from '@/utils/store';
import {useUserStore} from '@/plugins/store/user';
import {CacheEnum} from '@/enum/cacheEnum';

class Guard {
  private router: Router;

  constructor(router: Router) {
    this.router = router;
  }

  public run() {
    this.router.beforeEach((to, from) => {
      console.log(to);
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
    return store.get(CacheEnum.TOKEN_NAME)
  }
  // 检查是否满足可查看某页面的条件 , 返回布尔值
  private isLogin(toRoute: RouteLocationNormalized) {
    const status = Boolean(!toRoute.meta.auth || (this.token() && toRoute.meta.auth));
    // 登录历史路由跳转
    if(status === false) {
      store.set(CacheEnum.REDIRECT_ROUTE_NAME , toRoute.name)
    }
    return status
  }
  private isGuest(toRoute: RouteLocationNormalized) {
    return  Boolean(!toRoute.meta.guest || (toRoute.meta.guest && !this.token()));
  }
}
export default (router: Router) => {
  new Guard(router).run();
}
```
src/utils/user.ts
```ts{13-20}
import store from '@/utils/store';
import {CacheEnum} from '@/enum/cacheEnum';
import userApi , {ILoginData} from '@/apis/userApi';
import router from '@/router';
import {useUserStore} from '@/plugins/store/user';
// 这里的router 不是composition api , 所以不能使用const router = useRouter(), 必须导入具体router实例


//login
export async function login(values:ILoginData){
  const {result: {token}} = await userApi.login(values);  // 获取 token
  store.set(CacheEnum.TOKEN_NAME,  token )
  //登录历史路由跳转
  const  redirectRouteName = store.get(CacheEnum.REDIRECT_ROUTE_NAME)
  console.log(redirectRouteName)
  if(redirectRouteName) {
    await router.push({name:redirectRouteName})
  }else {
    await router.push({name:'home'})
  }
}

//logout
export async function logout(){
  store.remove(CacheEnum.TOKEN_NAME)
  await router.push('/')
  useUserStore().info = null
}
```
## 优化后台菜单逻辑
之前在 pinia 中得到菜单的数据是通过遍历 router 得到并渲染

但现在做些优化 , pinia 中直接返回 menu 的数据在模板遍历 , 在模板里不通过router间接得到

src/types/menus.ts  **menu的ts类型**
```ts
export interface Menu {
  title?:string
  iconName?:string
  isClick?:boolean
  routeName?:string        // 下一步会很重要
}
export interface IMenu extends Menu {
  children?:Menu[]
}
```
模块路由中`meta`会这么定义, `meta:{auth:true , menu:{title:'错误页面',iconName:'error',isClick:true}}`

只要么他里面有`menu`对象存在, 已经能说明可以在菜单中显示了 , 所以从此不需要`show`属性

types/router.ts   **meta的ts类型** 
```ts
import 'vue-router'
import {IMenu} from './menus';

declare module 'vue-router' {
  interface RouteMeta {
    auth?: boolean,
    guest?:boolean,
    // show?:boolean, //路由是否在菜单中显示
    // title?:string, //菜单标题
    // iconName?:string // 图标Icon的name名字.
    // isClick?:boolean
    menu?:IMenu[]
  }
}
```
src/store/menuStore.ts  **直接遍历meta返回有关菜单的数据** , 模板上使用前调用`init`方法获取数据
```ts
import {defineStore} from 'pinia';

import {IMenu} from '../../../types/menus';
import router from '@/router';

export const useRouterStore = defineStore('router', {
  state: () => {
    return {
      menus: [] as IMenu[]
    };
  },
  actions: {
    init(){                           // 在外面初始化
      this.getMenusByRoutes()
    },
    getMenusByRoutes() {                 // 细品
      this.menus = router.getRoutes()   // 直接赋值
        .filter(route => {
          return route.meta.menu && route.children.length;
        })
        .map(route => {
          let menu = {...route.meta?.menu} as IMenu;
          menu.children = route.children
            .filter(route => route.meta?.menu)
            .map(route => {
              return {...route.meta?.menu,routeName:route.name};           // 重要 !!!!!!!!!
            }) as IMenu[];
          return menu;
        });
    }
  }
});
```
**`menu`组件中**
```vue
<script lang="ts" setup>
import Icon from '@/components/Icon.vue'
import { reactive } from 'vue';

import { useRouterStore } from '@/plugins/store/menuStore';
import { useRouter} from 'vue-router';
import {IMenu,Menu} from '../../../types/menus';

const menusStore = useRouterStore()
menusStore.init()                      // 初始化
// console.log(menusStore.menus)
const menus  = reactive(menusStore.menus)

const routerService = useRouter()

const  handle = (pMenu:IMenu , cMenu?:Menu)=>{
  reset()
  pMenu.isClick = true
  if (cMenu) {
    menus.forEach(pMenu=>{
      pMenu.children?.forEach(cMenu=>{
        cMenu.isClick = false
      })
    })
    cMenu.isClick = true
    routerService.push({name:cMenu.routeName})         // 跳转 !!
   }
}
const reset = ()=>{
  menus.forEach(menu =>{
    menu.isClick = false
  })
}
const backToHome = ()=>{
  routerService.push({path:'/admin/home'})
}
</script>
<template>
  <div class="menu">
    <div class="logo" @click="backToHome">
      <Icon name="admin" class="admin-logo" /> Eren后台管理
    </div>
    <div class="left-container">
      <dl v-for="(menu,index) in menus" :key="index">
        <dt @click="handle(menu)">
          <section class="title">
            <Icon :name="menu.iconName" />
            <span>{{menu.title}}</span>
          </section>
          <section class="arrow" :class="{active:menu.isClick}" >
            <Icon name="xiangxiajiantou" />
          </section>
        </dt>
        <dd v-show="menu.isClick" :class="{active:cMenu.isClick}"
            v-for="(cMenu,index) in menu.children" :key="index" @click="handle(menu,cMenu)">{{cMenu.title}}</dd>
      </dl>
    </div>
  </div>
</template>
```
## 添加路由切换动画
`<router-view></router-view>`

布局路由 admin.vue
```vue{13-19}
<script lang="ts" setup>
import MenuComponent from '@/layouts/admin/menu.vue';
import NavBar from '@/layouts/admin/navbar.vue';
import HistoryLink from '@/layouts/admin/historyLink.vue';
</script>

<template>
  <div class="admin">
    <MenuComponent/>
    <div class="content">
      <NavBar/>
      <HistoryLink/>
      <div>
        <router-view v-slot="{ Component }">
          <transition enter-active-class="animate__animated animate__fadeIn">
            <component :is="Component"/>
          </transition>
        </router-view>
      </div>
    </div>
  </div>
</template>
```
动画使用到了[Animate.css](https://animate.style/#migration)库 , 引入了CDN

## 历史路由管理

每当跳转时触发`actions` , pinia 中历史菜单数组里添加跳转的菜单

store/menuStore.ts
```ts{19,36-51}
import {defineStore} from 'pinia';

import {IMenu} from '../../../types/menus';
import router from '@/router';
import { RouteLocationNormalized } from 'vue-router';
import store from '@/utils/store';
import {CacheEnum} from '@/enum/cacheEnum';

export const useMenuStore = defineStore('router', {
  state: () => {
    return {
      menus: [] as IMenu[],
      historyMenus: [] as IMenu[]   // 跳转的历史记录菜单
    };
  },
  actions: {
    init() {
      this.getMenusByRoutes();
      this.historyMenus = store.get(CacheEnum.HISTORY_MENU) || []     // 注意一开始是空数组
    },
    getMenusByRoutes() {
      this.menus = router.getRoutes()
        .filter(route => {
          return route.meta.menu && route.children.length;
        })
        .map(route => {
          let menu = {...route.meta?.menu} as IMenu;
          menu.children = route.children
            .filter(route => route.meta?.menu)
            .map(route => {
              return {...route.meta?.menu, routeName: route.name};
            }) as IMenu[];
          return menu;
        });
    },
    addHistoryMenu(route: RouteLocationNormalized) {
      const menu = {...route.meta?.menu, routeName: route.name as string};
      const isHas = this.historyMenus.some(menu => {
        return menu.routeName === route.name;
      });
      if(!route.meta.menu) return
      if (!isHas) {// 如果历史记录里已经存在 , 则不添加
        this.historyMenus.unshift(menu);
      }
      if(this.historyMenus.length > 10) {
        this.historyMenus.pop()
      }

      store.set(CacheEnum.HISTORY_MENU , this.historyMenus)  // 在localStorage保存
      // console.log(this.historyMenus)
    }
  }
});
```
布局路由 admin.vue
```vue{13,15}
<script lang="ts" setup>
import MenuComponent from '@/layouts/admin/menu.vue';
import NavBar from '@/layouts/admin/navbar.vue';
import HistoryLink from '@/layouts/admin/historyLink.vue';
import {onBeforeRouteUpdate, useRoute} from 'vue-router';
import {useMenuStore} from '@/plugins/store/menuStore';
import {watch} from 'vue';

const menus = useMenuStore()
menus.init()
const route = useRoute()

watch(route , ()=>{
  menus.addHistoryMenu(route)      //添加菜单历史记录
},  { immediate:true })
</script>

```
historyLink.vue
```vue{5,6}
<script lang="ts" setup>
import Icon from '@/components/Icon.vue';
import {useMenuStore} from '@/plugins/store/menuStore';

useMenuStore().init()
const historyMenus = useMenuStore().historyMenus
</script>

<template>
  <div class="historyLinks">
    <router-link :to="{name:menu.routeName}" href="" class="link"
                 v-for="(menu,index) in historyMenus" :key="index"
                 v-show="historyMenus.length"
                 :class="{active:menu.routeName === $route.name}">
      {{ menu.title }}
      <Icon name="delete"/>
    </router-link>
  </div>
</template>
```
## 点击时移除历史菜单
store/menuStore.ts
```ts{52-58}
import {defineStore} from 'pinia';

import {IMenu} from '../../../types/menus';
import router from '@/router';
import { RouteLocationNormalized } from 'vue-router';
import store from '@/utils/store';
import {CacheEnum} from '@/enum/cacheEnum';

export const useMenuStore = defineStore('router', {
  state: () => {
    return {
      menus: [] as IMenu[],
      historyMenus: [] as IMenu[]   // 跳转的历史记录菜单
    };
  },
  actions: {
    init() {
      this.getMenusByRoutes();
      this.historyMenus = store.get(CacheEnum.HISTORY_MENU) || []
    },
    getMenusByRoutes() {
      this.menus = router.getRoutes()
        .filter(route => {
          return route.meta.menu && route.children.length;
        })
        .map(route => {
          let menu = {...route.meta?.menu} as IMenu;
          menu.children = route.children
            .filter(route => route.meta?.menu)
            .map(route => {
              return {...route.meta?.menu, routeName: route.name};
            }) as IMenu[];
          return menu;
        });
    },
    addHistoryMenu(route: RouteLocationNormalized) {
      const menu = {...route.meta?.menu, routeName: route.name as string};
      const isHas = this.historyMenus.some(menu => {
        return menu.routeName === route.name;
      });
      if(!route.meta.menu) return
      if (!isHas) {// 如果历史记录里已经存在 , 则不添加
        this.historyMenus.unshift(menu);
      }
      if(this.historyMenus.length > 10) {
        this.historyMenus.pop()
      }

      store.set(CacheEnum.HISTORY_MENU , this.historyMenus)  // 在localStorage保存
      // console.log(this.historyMenus)
    },
    removeHistoryMenu(menu:IMenu){
      const index = this.historyMenus.indexOf(menu)
      this.historyMenus.splice(index , 1)
      // console.log(index)
      // console.log(this.historyMenus);
      store.set(CacheEnum.HISTORY_MENU , this.historyMenus)
    }
  }
});
```
historyLink.vue 组件

```vue{17}
<script lang="ts" setup>
import Icon from '@/components/Icon.vue';
import {useMenuStore} from '@/plugins/store/menuStore';


useMenuStore().init()
const historyMenus = useMenuStore().historyMenus
</script>

<template>
  <div class="historyLinks">
    <router-link :to="{name:menu.routeName}" href="" class="link"
                 v-for="(menu,index) in historyMenus" :key="index"
                 v-show="historyMenus.length"
                 :class="{active:menu.routeName === $route.name}">
      {{ menu.title }}
      <Icon name="delete" @click.prevent.stop="useMenuStore().removeHistoryMenu(menu) " />
    </router-link>
  </div>
</template>
```