import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":"Hello VuePress"},["/index.html","/README.md"]],
  ["v-522485bf","/category_2/child1.html",{"title":"子 1"},["/category_2/child1","/category_2/child1.md"]],
  ["v-53d95e5e","/category_2/child2.html",{"title":"子 2"},["/category_2/child2","/category_2/child2.md"]],
  ["v-e34766f6","/category_2/",{"title":"category_2"},["/category_2/index.html","/category_2/README.md"]],
  ["v-b1db4c9c","/vue/character.html",{"title":"Vue和React对比"},["/vue/character","/vue/character.md"]],
  ["v-7b5b5cfd","/vue/showIf.html",{"title":"v-show和v-if有什么区别？"},["/vue/showIf","/vue/showIf.md"]],
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
