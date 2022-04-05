import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":"记录开始"},["/index.html","/README.md"]],
  ["v-522485bf","/category_2/child1.html",{"title":"子 1"},["/category_2/child1","/category_2/child1.md"]],
  ["v-53d95e5e","/category_2/child2.html",{"title":"子 2"},["/category_2/child2","/category_2/child2.md"]],
  ["v-e34766f6","/category_2/",{"title":"category_2"},["/category_2/index.html","/category_2/README.md"]],
  ["v-b1db4c9c","/vue/character.html",{"title":"Vue和React对比"},["/vue/character","/vue/character.md"]],
  ["v-4b0bafb6","/vue/communication.html",{"title":"Vue组件之间的通信方式"},["/vue/communication","/vue/communication.md"]],
  ["v-5aef15b9","/vue/computedWatch.html",{"title":"computed 和 watch"},["/vue/computedWatch","/vue/computedWatch.md"]],
  ["v-d3b8299a","/vue/directives.html",{"title":""},["/vue/directives","/vue/directives.md"]],
  ["v-6c4c521a","/vue/form.html",{"title":"Vue中的表单基本使用"},["/vue/form","/vue/form.md"]],
  ["v-5cf855c0","/vue/modifier.html",{"title":"Vue中常用的修饰符"},["/vue/modifier","/vue/modifier.md"]],
  ["v-33c90264","/vue/plugin.html",{"title":"开发插件"},["/vue/plugin","/vue/plugin.md"]],
  ["v-7b5b5cfd","/vue/showIf.html",{"title":"v-show和v-if有什么区别？"},["/vue/showIf","/vue/showIf.md"]],
  ["v-f221a40e","/vue/slot.html",{"title":"Vue中的插槽 - slot"},["/vue/slot","/vue/slot.md"]],
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
