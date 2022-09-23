export const data = {
  "key": "v-6e2e49bf",
  "path": "/vue-admin/fuwenben.html",
  "title": "富文本和 markdown 之 创建文章",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "创建文章基本结构实现",
      "slug": "创建文章基本结构实现",
      "children": []
    },
    {
      "level": 2,
      "title": "新建文章",
      "slug": "新建文章",
      "children": [
        {
          "level": 3,
          "title": "markdown 实现",
          "slug": "markdown-实现",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "markdown 提交",
      "slug": "markdown-提交",
      "children": [
        {
          "level": 3,
          "title": "markdown 文章编辑",
          "slug": "markdown-文章编辑",
          "children": []
        },
        {
          "level": 3,
          "title": "富文本的实现",
          "slug": "富文本的实现",
          "children": []
        }
      ]
    }
  ],
  "git": {
    "contributors": []
  },
  "filePathRelative": "vue-admin/fuwenben.md"
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
