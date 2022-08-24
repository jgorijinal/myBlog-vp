# 项目搭建

本项目的技术栈 本项目技术栈基于 ES2015+、[vue](https://cn.vuejs.org/index.html)、[vuex](https://vuex.vuejs.org/zh-cn/)、[vue-router](https://router.vuejs.org/zh-cn/) 、[vue-cli](https://github.com/vuejs/vue-cli) 、[axios](https://github.com/axios/axios) 和 [element-ui](https://github.com/ElemeFE/element)

#### Vue Router v3.x

router/index.js
```js
import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

// 需要筛选权限动态添加的路由 route 对象
import approvalsRouter from './modules/approvals'
import departmentsRouter from './modules/departments'
import employeesRouter from './modules/employees'
import permissionRouter from './modules/permission'
import attendancesRouter from './modules/attendances'
import salarysRouter from './modules/salarys'
import settingRouter from './modules/setting'
import socialRouter from './modules/social'

export const constantRoutes = [  // 静态路由
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/index"),
    hidden: true,
  },

  {
    path: "/404",
    name: "404",
    component: () => import("@/views/404"),
    hidden: true,
  },
  {
    path:'/',
    component:Layout,
    redirect: '/dashboard',
    children:[]
  },
  { path: '*', redirect: '/404', hidden: true }
];

export asyncRoutes = [  // 动态路由
  approvalsRouter,
  departmentsRouter,
  employeesRouter,
  permissionRouter,
  attendancesRouter,
  salarysRouter,
  settingRouter,
  socialRouter
]

const createRouter = () => {
  return new Router({
    scrollBehavior: () => ({ y: 0 }),
    routes: [...constantRoutes] 
  })
}

const router = createRouter()

export function resetRouter(){ 
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router   // 默认导出 router 实例
```
