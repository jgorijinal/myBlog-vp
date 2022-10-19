export const data = {
  "key": "v-78d56b33",
  "path": "/webpack/sourcemap.html",
  "title": "模块化原理和 sourcemap",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Mode 配置",
      "slug": "mode-配置",
      "children": [
        {
          "level": 3,
          "title": "Mode 配置代表更多",
          "slug": "mode-配置代表更多",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Webpack 的模块化",
      "slug": "webpack-的模块化",
      "children": []
    }
  ],
  "git": {
    "contributors": []
  },
  "filePathRelative": "webpack/sourcemap.md"
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
