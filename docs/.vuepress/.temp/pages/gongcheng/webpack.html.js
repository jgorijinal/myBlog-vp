export const data = {
  "key": "v-55119a1c",
  "path": "/gongcheng/webpack.html",
  "title": "Webpack",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "核心概念",
      "slug": "核心概念",
      "children": []
    }
  ],
  "git": {
    "contributors": []
  },
  "filePathRelative": "gongcheng/webpack.md"
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
