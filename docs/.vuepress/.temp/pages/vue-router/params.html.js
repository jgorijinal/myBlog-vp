export const data = {
  "key": "v-2c11d1a6",
  "path": "/vue-router/params.html",
  "title": "动态路由匹配",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "带参数的动态路由匹配",
      "slug": "带参数的动态路由匹配",
      "children": []
    },
    {
      "level": 2,
      "title": "响应路由参数的变化 (不同的路由且同一组件识别)",
      "slug": "响应路由参数的变化-不同的路由且同一组件识别",
      "children": [
        {
          "level": 3,
          "title": "(1)通过watch监听$route对象的变化",
          "slug": "_1-通过watch监听-route对象的变化",
          "children": []
        },
        {
          "level": 3,
          "title": "(2)使用beforeRouteUpdate 导航守卫：",
          "slug": "_2-使用beforerouteupdate-导航守卫",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "404 路由",
      "slug": "_404-路由",
      "children": []
    }
  ],
  "git": {
    "contributors": [
      {
        "name": "jgoriginal",
        "email": "932274204@qq.com",
        "commits": 4
      }
    ]
  },
  "filePathRelative": "vue-router/params.md"
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
