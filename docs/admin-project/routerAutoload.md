# 根据配置项自定义路由自动注册
src/router/autoload.ts
```ts{41,42}
import {RouteRecordRaw} from 'vue-router';
import {env} from '@/utils/index';

const routesModules = import.meta.globEager('../layouts/*.vue')
const viewsModules = import.meta.globEager('../views/**/*.vue')


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
    if (file.includes(`../views/${layoutRoute.name  as string}`)){
      const route = getRouteByModule(file , module)
      routes.push(route)
    }
  })
  return routes
}
const getRouteByModule = (file:string , module:{ [key:string]:any} )=>{
  const name = file.replace( /.+layouts\/|.+views\/|\.vue/gi, '')
  return {
    path: `/${name}`,
    name: name.replace('/', '.'),
    component: module.default
  } as RouteRecordRaw
}


const routes = env.VITE_ROUTER_AUTOLOAD ? getRoutes() : [] as RouteRecordRaw[]
export default  routes;
```