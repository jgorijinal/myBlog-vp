export const data = {
  "key": "v-4c0d8ad0",
  "path": "/node/fs.html",
  "title": "fs 文件系统模块",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "fs的三种操作方式",
      "slug": "fs的三种操作方式",
      "children": []
    },
    {
      "level": 2,
      "title": "文件描述符",
      "slug": "文件描述符",
      "children": []
    },
    {
      "level": 2,
      "title": "文件的读写",
      "slug": "文件的读写",
      "children": [
        {
          "level": 3,
          "title": "flag 选项",
          "slug": "flag-选项",
          "children": []
        },
        {
          "level": 3,
          "title": "encoding 选项",
          "slug": "encoding-选项",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "文件夹操作",
      "slug": "文件夹操作",
      "children": []
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
  "filePathRelative": "node/fs.md"
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
