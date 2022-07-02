export const data = {
  "key": "v-6b306c28",
  "path": "/typescript/start.html",
  "title": "TypeScript 的运行环境",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "webpack 配置",
      "slug": "webpack-配置",
      "children": []
    },
    {
      "level": 2,
      "title": "使用 ts-node",
      "slug": "使用-ts-node",
      "children": []
    }
  ],
  "git": {
    "contributors": []
  },
  "filePathRelative": "typescript/start.md"
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
