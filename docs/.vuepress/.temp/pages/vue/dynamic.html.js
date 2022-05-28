export const data = {
  "key": "v-3f43a2dc",
  "path": "/vue/dynamic.html",
  "title": "动态组件",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "keep-alive 缓存组件",
      "slug": "keep-alive-缓存组件",
      "children": []
    }
  ],
  "git": {
    "contributors": [
      {
        "name": "jgoriginal",
        "email": "932274204@qq.com",
        "commits": 3
      }
    ]
  },
  "filePathRelative": "vue/dynamic.md"
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
