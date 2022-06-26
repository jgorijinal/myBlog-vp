export const data = {
  "key": "v-f9f1c4e8",
  "path": "/vue3/communication.html",
  "title": "组件通信",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "非父子组件通信",
      "slug": "非父子组件通信",
      "children": [
        {
          "level": 3,
          "title": "provide / inject 依赖注入",
          "slug": "provide-inject-依赖注入",
          "children": []
        },
        {
          "level": 3,
          "title": "全局事件总线mitt库",
          "slug": "全局事件总线mitt库",
          "children": []
        }
      ]
    }
  ],
  "git": {
    "contributors": []
  },
  "filePathRelative": "vue3/communication.md"
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
