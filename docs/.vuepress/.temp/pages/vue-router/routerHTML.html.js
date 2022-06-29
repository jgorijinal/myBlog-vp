export const data = {
  "key": "v-5821e402",
  "path": "/vue-router/routerHTML.html",
  "title": "HTML",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "<router-link> 和 <router-view>",
      "slug": "router-link-和-router-view",
      "children": []
    },
    {
      "level": 2,
      "title": "router-link-active 和 router-link-exact-active",
      "slug": "router-link-active-和-router-link-exact-active",
      "children": []
    },
    {
      "level": 2,
      "title": "<router-view> 的 v-slot",
      "slug": "router-view-的-v-slot",
      "children": [
        {
          "level": 3,
          "title": "应用: (1)根据meta动态设置样式",
          "slug": "应用-1-根据meta动态设置样式",
          "children": []
        },
        {
          "level": 3,
          "title": "应用:(2) 主要使用 <transition> 和 <keep-alive> 组件来包裹你的路由组件。(官网例子)",
          "slug": "应用-2-主要使用-transition-和-keep-alive-组件来包裹你的路由组件。-官网例子",
          "children": []
        }
      ]
    }
  ],
  "git": {
    "contributors": [
      {
        "name": "jgoriginal",
        "email": "932274204@qq.com",
        "commits": 2
      }
    ]
  },
  "filePathRelative": "vue-router/routerHTML.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
