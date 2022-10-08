export const data = {
  "key": "v-3083cf40",
  "path": "/node/path.html",
  "title": "path 路径模块",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "路径拼接",
      "slug": "路径拼接",
      "children": [
        {
          "level": 3,
          "title": "path.join() 语法格式",
          "slug": "path-join-语法格式",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "获取路径中的文件名",
      "slug": "获取路径中的文件名",
      "children": [
        {
          "level": 3,
          "title": "path.basename() 语法格式",
          "slug": "path-basename-语法格式",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "获取路径中文件扩展名",
      "slug": "获取路径中文件扩展名",
      "children": [
        {
          "level": 3,
          "title": "path.extname() 语法格式",
          "slug": "path-extname-语法格式",
          "children": []
        }
      ]
    }
  ],
  "git": {
    "contributors": []
  },
  "filePathRelative": "node/path.md"
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
