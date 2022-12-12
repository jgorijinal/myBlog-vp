export const data = {
  "key": "v-33c90264",
  "path": "/vue/plugin.html",
  "title": "开发插件",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Vue 动态创建组件实例",
      "slug": "vue-动态创建组件实例",
      "children": []
    }
  ],
  "git": {
    "contributors": [
      {
        "name": "jgoriginal",
        "email": "932274204@qq.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "vue/plugin.md"
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
