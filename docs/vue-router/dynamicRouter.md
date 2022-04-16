# 动态路由

## 动态路由管理 api

- `router.addRoute({})` 添加路由
- `router.removeRoute('name')` 删除路由
- `router.getRoutes()`获取一个包含所有路由记录的**数组**。

```js
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", redirect: "/home" },
    {
      path: "/home",
      name: "home",
      component: Home,
    },
  ],
});
router.addRoute({
  //动态添加 router.addRoute()
  path: "/login",
  name: "login",
  component: Login,
});
router.addRoute({
  path: "/article",
  name: "article",
  component: Article,
});

router.removeRoute("article"); //动态删除 router.removeRoute('路由的name')

console.log(router.getRoutes()); // 获取全部路由

export default router;
```

## 动态渲染`<router-link>`

```js{9,15,20}
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/', redirect: '/home'},
        {
            path: '/home',
            name: 'home',
            component: Home,
            meta:{title:'主页'}             //后面要判断 meta里面(1)有没有标题 , (2)isMenu是不是true
        },
        {
            path: '/about',
            name: 'about',
            meta:{title:'相关' , isMenu:true},  //后面要判断 meta里面(1)有没有标题 , (2)isMenu是不是true
            component: About
        },
        {
            path: '/login',
            name: 'login',
            meta:{title:'相关' , isMenu:false}, //后面要判断 meta里面(1)有没有标题 , (2)isMenu是不是true
            component: ()=>import ('../views/Login.vue'),
        },
```

```html
<span v-for="route of $router.getRoutes()" :key="route.path">
  <!--$router.getRoutes()得到所有路由,遍历-->
  <router-link
    v-if=" route.meta?.isMenu && route.meta?.title"
    :to="{name:route.name}"
  >
    <!--判断meta里的isMenu和title-->
    {{ route.meta.title }}
  </router-link>
</span>
```

## 过滤掉没有权限的路由
从后台发请求得到有权限的路由 , 跟本地中的 `meta` 里面的 `permissions` 作比较, 过滤掉相应的路由, 然后用 `router.addRoute({})`动态添加路由

`router/routes.js` 打算要被动态添加的路由表

```js
import About from '../views/about.vue'
import Article from '../views/article.vue'

const routes = [
  {
    path:'/about',
    name:'about',
    meta:{title:'关于我们' , permissions:['about']}
    component:About
  },
   {
    path:'/article',
    name:'article',
    meta:{title:'文章列表' , permissions:['article']}
    component:Article
  }
]

export default routes
```

`router/index.js` 基本路由表

```js
import { createRouter, createWebHashHistory } from "vue-router";
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/home",
      name: "home",
      meta: { title: "主页" },
      component: () => import("../views/Home.vue"),
    },
    {
      path: "/:any(.+)", //404页面
      name: "notFound",
      component: () => import("../views/404.vue"),
    },
  ],
});
```
`router/service.js`  过滤函数

```js
import routes from "./routes";

const getRoutes = async () => {
  const permissions = await fetch("http://127.0.0.1:3000/permission"); //给后台发请求的得到有权限的路由
  //后台返回的格式是   ["about"]
  const result = routes.filter((route) => {
    return route.meta.permissions?.every((p) => permissions.includes(p)); //过滤包含(后台给的权限路由的)路由
  });
  return result;
};

export { getRoutes };
```

最后再来到 `router/index.js` 动态添加路由

```js
import { createRouter, createWebHashHistory } from "vue-router";
import { getRoutes } from "./service";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/home",
      name: "home",
      meta: { title: "主页" },
      component: () => import("../views/Home.vue"),
    },
    {
      path: "/:any(.+)", //404页面
      name: "notFound",
      component: () => import("../views/404.vue"),
    },
  ],
});

let isAddRoute = false;
router.beforeEach(async (to, from, next) => {
  const routes = await getRoutes();   //得到已完成过滤的路由
  if (isAddRoute === false) {     //防止每次添加
    routes.forEach((route) => {
      router.addRoute(route);   //router.addRoute({}) 动态添加路由
    });
    isAddRoute = true;
    return next(to.fullPath);
  } else {
    next();
  }
});
```
