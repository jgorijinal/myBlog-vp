export const data = {
  "key": "v-5772bda8",
  "path": "/webpack/fenli.html",
  "title": "环境分离和代码分离",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "如何区分开发环境",
      "slug": "如何区分开发环境",
      "children": [
        {
          "level": 3,
          "title": "entry 入口文件解析 - context 属性",
          "slug": "entry-入口文件解析-context-属性",
          "children": []
        },
        {
          "level": 3,
          "title": "配置文件的分离",
          "slug": "配置文件的分离",
          "children": []
        },
        {
          "level": 3,
          "title": "合并",
          "slug": "合并",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "认识代码分离",
      "slug": "认识代码分离",
      "children": [
        {
          "level": 3,
          "title": "多入口起点",
          "slug": "多入口起点",
          "children": []
        },
        {
          "level": 3,
          "title": "Entry Dependencies (入口依赖)",
          "slug": "entry-dependencies-入口依赖",
          "children": []
        },
        {
          "level": 3,
          "title": "SplitChunks",
          "slug": "splitchunks",
          "children": []
        },
        {
          "level": 3,
          "title": "SplitChunks 自定义配置",
          "slug": "splitchunks-自定义配置",
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
  "filePathRelative": "webpack/fenli.md"
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
