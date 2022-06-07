# 路由守卫
## 构建路由守卫基础
```
src/router
|--autoload.ts
|--guard.ts    //路由守卫
|--index.ts
|--routes.ts
```
index.ts
```ts{5,14}
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import { App } from "vue";
import routes from "./routes";
import AutoloadRoutes from "./autoload";
import Guard from './guard'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...routes, ...AutoloadRoutes],
});
// console.log(getRoutes())
export function setupRouter(app: App) {
  app.use(router);
  Guard(router)    // 把 router实例 传进去 (精髓!!!!!)
}

export default router;
```
src/guard.ts
```ts
import {Router} from 'vue-router';

class Guard {    // 使用了 类
  private  router: Router;
  constructor(router) {
    this.router = router;
  }
  public run() {
    //console.log(this.router);
    this.router.beforeEach((to,from)=>{

    })
  }
}

export default (router: Router) => {
  new Guard(router).run();
}
```

## 登录验证机制
需要两步
* 对登录的处理
* 对权限的处理

guard.ts
```ts{16,23-25}
import { RouteLocationNormalized, Router, RouteRecordNormalized } from 'vue-router';
import store, {IData} from '@/utils/store';

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
    });
  }
  private token():IData | null {
    return store.get('token')
  }
  // 检查是否满足可查看某页面的条件 , 返回布尔值
  private isLogin(toRoute: RouteLocationNormalized) {
    return Boolean(!toRoute.meta.auth || (this.token() && toRoute.meta.auth));
  }
}
export default (router: Router) => {
  new Guard(router).run();
}
```
其中给`meta`定义ts类型, [官网](https://router.vuejs.org/zh/guide/advanced/meta.html#typescript)
## 游客登录拦截
已登录的游客 , 不让访问登录页面

guard.ts
```js{17,28-30}
import {RouteLocationNormalized, Router, RouteRecordNormalized} from 'vue-router';
import store, {IData} from '@/utils/store';

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
    });
  }
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