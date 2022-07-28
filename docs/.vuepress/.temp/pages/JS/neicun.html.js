export const data = {
  "key": "v-f87371bc",
  "path": "/JS/neicun.html",
  "title": "JS 的内存管理",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "JS 的内存管理",
      "slug": "js-的内存管理-1",
      "children": []
    },
    {
      "level": 2,
      "title": "JS 的垃圾回收",
      "slug": "js-的垃圾回收",
      "children": [
        {
          "level": 3,
          "title": "常见的 GC 算法 - 引用计数",
          "slug": "常见的-gc-算法-引用计数",
          "children": []
        },
        {
          "level": 3,
          "title": "常见的 GC 算法 – 标记清除",
          "slug": "常见的-gc-算法-–-标记清除",
          "children": []
        }
      ]
    }
  ],
  "git": {
    "contributors": []
  },
  "filePathRelative": "JS/neicun.md"
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
