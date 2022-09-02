export const data = {
  "key": "v-4c9eac04",
  "path": "/webpack/vuecli.html",
  "title": "vue 脚手架",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Vue Cli 的基本使用",
      "slug": "vue-cli-的基本使用",
      "children": []
    }
  ],
  "git": {
    "contributors": []
  },
  "filePathRelative": "webpack/vuecli.md"
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
