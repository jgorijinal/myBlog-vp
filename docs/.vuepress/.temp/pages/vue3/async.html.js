export const data = {
  "key": "v-205c7ba6",
  "path": "/vue3/async.html",
  "title": "异步组件",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "基本使用",
      "slug": "基本使用",
      "children": []
    },
    {
      "level": 2,
      "title": "加载与错误状态(对象的写法)",
      "slug": "加载与错误状态-对象的写法",
      "children": [
        {
          "level": 3,
          "title": "异步组件和suspense",
          "slug": "异步组件和suspense",
          "children": []
        }
      ]
    }
  ],
  "git": {
    "contributors": []
  },
  "filePathRelative": "vue3/async.md"
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
