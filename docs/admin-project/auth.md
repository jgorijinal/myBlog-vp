# 根据权限控制路由
**基本思路:** 给后台发请求得到权限的`permissions`数组 , **(1)** 如果模块路由的`meta`里压根就不存在`permission` **(2)** 模块路有的`meta`里有`permission`且权限`permission`包含在`permissions`数组里, 就遍历`router.addRoute()`动态添加路由

模拟的后台数据 mock/user.ts
```ts{17}
import {MockMethod} from 'vite-plugin-mock';
import {Random} from 'mockjs';

export default [
  {
    url: '/api/user/info',
    method: 'get',
    response: ({ query }) => {
      return {
        code: 200,
        message:'请求成功',
        type:'success',
        result: {
          name: 'frank',
          age:18,
          avatar:'/images/eren.png',
          permissions:['editor_markdown', 'article_edit']
        },
      }
    },
  },
  {
    url: '/api/login',
    method: 'post',
    response: () => {
      return {
        code: 200,
        message:'登录成功',
        type:'success',
        result: {
          token:Random.string(10)
        },
      }
    },
  },
] as MockMethod[];
//http://localhost:3000/api/user/info 测试数据
```
下面使用调用函数的形式 , 因为在这`autoload`函数里要用`router.addRoute()`判断条件动态添加路由

初始化路由时直接调用`pinia`中的获取用户信息api , 这么做全局状态管理中一开始就会有用户的数据

router/index.ts
```ts{16,17,19}
import { createRouter, createWebHashHistory, RouteRecordRaw,createWebHistory } from "vue-router";
import { App } from "vue";
import routes from "./routes";
import autoload from './autoload';
import Guard from './guard'
import {useUserStore} from '@/plugins/store/userStore';

const router = createRouter({
  history: createWebHashHistory(),
  // routes: [...routes, ...AutoloadRoutes],
  routes:[...routes]
});


export async function setupRouter(app: App) {
  const user = useUserStore()
  await user.getUserInfo()

  autoload(router)  // 根据权限动态加载路由 , 传递router实例
  app.use(router);
  Guard(router)
}

export default router;
```
基本思路:
* 获取`pinia`中得到的用户数据 , 拿到后台返回的`permissions`数组
* 判断路由的`meta`对象中是否存在自定义的`permission`权限

(1)如果压根没有`permission`权限 , 则添加路由

(2)如果有`permission` , 且后台返回的`permissions`数组中包含自己的`permission` , 就添加路由
* 最终得到过滤掉的路由, 遍历且`router.addRoute()`添加路由

router/autoload/index.ts 权限过滤函数
```ts
import getRoutes from '@/router/autoload/views';
import { env } from '@/utils'
import {Router, RouteRecordRaw} from 'vue-router';
import {autoloadModuleRoutes} from '@/router/autoload/module';
import {useUserStore} from '@/plugins/store/userStore';

let autoloadRoutes = [] as RouteRecordRaw[]
if(env.VITE_ROUTER_AUTOLOAD){
  autoloadRoutes = getRoutes()
}else {
  autoloadRoutes = autoloadModuleRoutes()
}

function  autoload(router:Router){        // 根据权限过滤函数
  const user = useUserStore()
  const permissions = user.info.permissions
  
  const filteringRoutes = autoloadRoutes.map(route => {
    route.children = route.children.filter(route => {
      const permission =  route.meta.permission
      return permission ? permissions.includes(permission) : true
    })
    return route
  })

  filteringRoutes.forEach(route => {
    router.addRoute(route)
  })
}

export default  autoload
```
## 优化过滤历史菜单
```ts{66-77,21,22}
import {defineStore} from 'pinia';

import {IMenu} from '../../../types/menus';
import router from '@/router';
import {RouteLocationNormalized, RouteRecordRaw} from 'vue-router';
import store from '@/utils/store';
import {CacheEnum} from '@/enum/cacheEnum';

export const useMenuStore = defineStore('router', {
  state: () => {
    return {
      menus: [] as IMenu[],
      historyMenus: [] as IMenu[],   // 跳转的历史记录菜单
      menuClose:true as boolean,
      route:null as RouteLocationNormalized  // 当前的路由
    };
  },
  actions: {
    init() {
      this.getMenusByRoutes();
      // this.historyMenus = store.get(CacheEnum.HISTORY_MENU) || []
      this.historyMenus = this.getHistoryMenu()
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

      this.route = route   // 当前路由
    },
    removeHistoryMenu(menu:IMenu){
      const index = this.historyMenus.indexOf(menu)
      this.historyMenus.splice(index , 1)
      // console.log(index)
      // console.log(this.historyMenus);
      store.set(CacheEnum.HISTORY_MENU , this.historyMenus)
    },
    toggleClose(){
      this.menuClose = !this.menuClose
    },
    getHistoryMenu(){
      const routes = [] as RouteRecordRaw[]
      router.getRoutes().forEach(route => {
          routes.push(...route.children)
      })
      const menus = store.get(CacheEnum.HISTORY_MENU) || []

      return menus.filter(m => {
        return routes.some(r => r.name === m.routeName)
      })
    }
  }
});
```