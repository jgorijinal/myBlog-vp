export const data = {
  "key": "v-26626eba",
  "path": "/vue3/vue3.html",
  "title": "Vue2到Vue3的变化",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {
    "contributors": [
      {
        "name": "jgoriginal",
        "email": "932274204@qq.com",
        "commits": 3
      }
    ]
  },
  "filePathRelative": "vue3/vue3.md"
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
