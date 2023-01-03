export const data = {
  "key": "v-3d7d7eae",
  "path": "/gongcheng/mokuaihua.html",
  "title": "模块化",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "CommonJS",
      "slug": "commonjs",
      "children": [
        {
          "level": 3,
          "title": "CommonJS 模块打包",
          "slug": "commonjs-模块打包",
          "children": []
        }
      ]
    }
  ],
  "git": {
    "contributors": [
      {
        "name": "jgoriginal",
        "email": "932274204@qq.com",
        "commits": 2
      }
    ]
  },
  "filePathRelative": "gongcheng/mokuaihua.md"
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
