import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":"记录开始"},["/index.html","/README.md"]],
  ["v-a950b3e0","/admin-project/axios.html",{"title":"Axios结合Typescript"},["/admin-project/axios","/admin-project/axios.md"]],
  ["v-34681369","/admin-project/component.html",{"title":"全局组件注册"},["/admin-project/component","/admin-project/component.md"]],
  ["v-29734508","/admin-project/form.html",{"title":"表单验证 vee-validate"},["/admin-project/form","/admin-project/form.md"]],
  ["v-2358cd7e","/admin-project/guard.html",{"title":"路由守卫"},["/admin-project/guard","/admin-project/guard.md"]],
  ["v-0150a664","/admin-project/routerAutoload.html",{"title":"根据配置项自定义路由自动注册"},["/admin-project/routerAutoload","/admin-project/routerAutoload.md"]],
  ["v-2e63fcb8","/admin-project/start.html",{"title":"项目"},["/admin-project/start","/admin-project/start.md"]],
  ["v-15de9f3b","/admin-project/tailwindcss.html",{"title":"tailwindcss"},["/admin-project/tailwindcss","/admin-project/tailwindcss.md"]],
  ["v-4c9ef26d","/admin-project/token.html",{"title":"TOKEN储存与登录请求"},["/admin-project/token","/admin-project/token.md"]],
  ["v-5a98d968","/admin-project/vite.html",{"title":"Vite环境"},["/admin-project/vite","/admin-project/vite.md"]],
  ["v-522485bf","/category_2/child1.html",{"title":"子 1"},["/category_2/child1","/category_2/child1.md"]],
  ["v-53d95e5e","/category_2/child2.html",{"title":"子 2"},["/category_2/child2","/category_2/child2.md"]],
  ["v-e34766f6","/category_2/",{"title":"category_2"},["/category_2/index.html","/category_2/README.md"]],
  ["v-603fcf66","/JS/array.html",{"title":"数组"},["/JS/array","/JS/array.md"]],
  ["v-06d77c8e","/JS/class.html",{"title":"类"},["/JS/class","/JS/class.md"]],
  ["v-4244732a","/JS/closure.html",{"title":"闭包"},["/JS/closure","/JS/closure.md"]],
  ["v-73f5eeb4","/JS/function.html",{"title":""},["/JS/function","/JS/function.md"]],
  ["v-12696d40","/JS/module.html",{"title":"模块"},["/JS/module","/JS/module.md"]],
  ["v-c60638ea","/JS/promise.html",{"title":"Promise"},["/JS/promise","/JS/promise.md"]],
  ["v-76dfbbc4","/JS/proto.html",{"title":"原型"},["/JS/proto","/JS/proto.md"]],
  ["v-7cc72632","/JS/reg.html",{"title":"正则表达式"},["/JS/reg","/JS/reg.md"]],
  ["v-5b635b6e","/json-server%E4%B8%8Emock/",{"title":""},["/json-server与mock/","/json-server%E4%B8%8Emock/index.html","/json-server与mock/README.md","/json-server%E4%B8%8Emock/README.md"]],
  ["v-222ca7e0","/TS/as.html",{"title":"断言"},["/TS/as","/TS/as.md"]],
  ["v-2644d4a2","/TS/basic.html",{"title":"基础类型"},["/TS/basic","/TS/basic.md"]],
  ["v-57f5bd98","/TS/class.html",{"title":"类与接口"},["/TS/class","/TS/class.md"]],
  ["v-04d8c246","/TS/generics.html",{"title":"泛型"},["/TS/generics","/TS/generics.md"]],
  ["v-0b7ee4ee","/TS/start.html",{"title":"环境配置"},["/TS/start","/TS/start.md"]],
  ["v-4b29d755","/TS/Vue3.html",{"title":"TS 与 Vue 结合"},["/TS/Vue3","/TS/Vue3.md"]],
  ["v-b1db4c9c","/vue/character.html",{"title":"Vue和React对比"},["/vue/character","/vue/character.md"]],
  ["v-4b0bafb6","/vue/communication.html",{"title":"Vue组件之间的通信方式"},["/vue/communication","/vue/communication.md"]],
  ["v-5aef15b9","/vue/computedWatch.html",{"title":"computed 和 watch"},["/vue/computedWatch","/vue/computedWatch.md"]],
  ["v-d3b8299a","/vue/directives.html",{"title":""},["/vue/directives","/vue/directives.md"]],
  ["v-3f43a2dc","/vue/dynamic.html",{"title":"动态组件"},["/vue/dynamic","/vue/dynamic.md"]],
  ["v-6c4c521a","/vue/form.html",{"title":"Vue中的表单基本使用"},["/vue/form","/vue/form.md"]],
  ["v-9ea8eb9e","/vue/lifeCycle.html",{"title":"Vue中的生命周期"},["/vue/lifeCycle","/vue/lifeCycle.md"]],
  ["v-5cf855c0","/vue/modifier.html",{"title":"Vue中常用的修饰符"},["/vue/modifier","/vue/modifier.md"]],
  ["v-33c90264","/vue/plugin.html",{"title":"开发插件"},["/vue/plugin","/vue/plugin.md"]],
  ["v-7b5b5cfd","/vue/showIf.html",{"title":"v-show和v-if有什么区别？"},["/vue/showIf","/vue/showIf.md"]],
  ["v-f221a40e","/vue/slot.html",{"title":"Vue中的插槽 - slot"},["/vue/slot","/vue/slot.md"]],
  ["v-54b9850a","/vue-router/animation.html",{"title":"过渡动画"},["/vue-router/animation","/vue-router/animation.md"]],
  ["v-6529e7d2","/vue-router/dynamicRouter.html",{"title":"动态路由"},["/vue-router/dynamicRouter","/vue-router/dynamicRouter.md"]],
  ["v-cb8cbcca","/vue-router/function.html",{"title":"编程式的导航"},["/vue-router/function","/vue-router/function.md"]],
  ["v-6b326c0c","/vue-router/guard.html",{"title":"路由守卫"},["/vue-router/guard","/vue-router/guard.md"]],
  ["v-2bcc5a52","/vue-router/lazyLoading.html",{"title":"懒加载"},["/vue-router/lazyLoading","/vue-router/lazyLoading.md"]],
  ["v-05f7afc8","/vue-router/name.html",{"title":"命名路由"},["/vue-router/name","/vue-router/name.md"]],
  ["v-070b0fca","/vue-router/nest.html",{"title":"嵌套路由"},["/vue-router/nest","/vue-router/nest.md"]],
  ["v-2c11d1a6","/vue-router/params.html",{"title":"动态路由匹配"},["/vue-router/params","/vue-router/params.md"]],
  ["v-50c6102b","/vue-router/redirectAlias.html",{"title":"重定向和别名"},["/vue-router/redirectAlias","/vue-router/redirectAlias.md"]],
  ["v-571ee6a4","/vue-router/router-view-name.html",{"title":"<router-view>的命名视图"},["/vue-router/router-view-name","/vue-router/router-view-name.md"]],
  ["v-5821e402","/vue-router/routerHTML.html",{"title":"HTML"},["/vue-router/routerHTML","/vue-router/routerHTML.md"]],
  ["v-029f4374","/vue-router/scroll.html",{"title":"滚动行为"},["/vue-router/scroll","/vue-router/scroll.md"]],
  ["v-763d9b46","/vue-router/start.html",{"title":"Vue Router 4 初始配置"},["/vue-router/start","/vue-router/start.md"]],
  ["v-29530678","/vue3/composition.html",{"title":"Vue3中的Composition API"},["/vue3/composition","/vue3/composition.md"]],
  ["v-812fd256","/vue3/script-setup.html",{"title":"Vue3中的Composition API之script setup"},["/vue3/script-setup","/vue3/script-setup.md"]],
  ["v-4f57be90","/vue3/v-model.html",{"title":"Vue3中v-model 的使用"},["/vue3/v-model","/vue3/v-model.md"]],
  ["v-26626eba","/vue3/vue3.html",{"title":"Vue2到Vue3的变化"},["/vue3/vue3","/vue3/vue3.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
