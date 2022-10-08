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
      "title": "读取指定文件内容",
      "slug": "读取指定文件内容",
      "children": [
        {
          "level": 3,
          "title": "fs.readFile() 语法格式",
          "slug": "fs-readfile-语法格式",
          "children": []
        },
        {
          "level": 3,
          "title": "fs.readFile() 实例代码",
          "slug": "fs-readfile-实例代码",
          "children": []
        },
        {
          "level": 3,
          "title": "判断文件是否读取成功",
          "slug": "判断文件是否读取成功",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "向指定文件写入内容",
      "slug": "向指定文件写入内容",
      "children": [
        {
          "level": 3,
          "title": "fs.writeFile() 的语法格式",
          "slug": "fs-writefile-的语法格式",
          "children": []
        },
        {
          "level": 3,
          "title": "判断是否写入成功",
          "slug": "判断是否写入成功",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "练习",
      "slug": "练习",
      "children": []
    },
    {
      "level": 2,
      "title": "路径动态拼接的问题 __dirname",
      "slug": "路径动态拼接的问题-dirname",
      "children": []
    }
  ],
  "git": {
    "contributors": []
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
