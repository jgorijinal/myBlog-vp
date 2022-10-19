export const data = {
  "key": "v-33fd45c9",
  "path": "/webpack/devServerHMR.html",
  "title": "devServer 和 HMR",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Webpack watch",
      "slug": "webpack-watch",
      "children": []
    }
  ],
  "git": {
    "contributors": []
  },
  "filePathRelative": "webpack/devServerHMR.md"
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
