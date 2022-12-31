export const data = {
  "key": "v-3fbc4f8c",
  "path": "/gongcheng/shizhan.html",
  "title": "webpack 实战",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "webpack 性能优化",
      "slug": "webpack-性能优化",
      "children": [
        {
          "level": 3,
          "title": "提升 webpack 打包速度",
          "slug": "提升-webpack-打包速度",
          "children": []
        }
      ]
    }
  ],
  "git": {
    "contributors": []
  },
  "filePathRelative": "gongcheng/shizhan.md"
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
