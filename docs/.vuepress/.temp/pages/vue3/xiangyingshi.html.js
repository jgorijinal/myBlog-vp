export const data = {
  "key": "v-12181764",
  "path": "/vue3/xiangyingshi.html",
  "title": "响应式",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "初始",
      "slug": "初始",
      "children": [
        {
          "level": 3,
          "title": "响应式函数的实现 watchFn",
          "slug": "响应式函数的实现-watchfn",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "响应式依赖的收集",
      "slug": "响应式依赖的收集",
      "children": [
        {
          "level": 3,
          "title": "监听对象属性的变化",
          "slug": "监听对象属性的变化",
          "children": []
        },
        {
          "level": 3,
          "title": "自动收集依赖",
          "slug": "自动收集依赖",
          "children": []
        }
      ]
    }
  ],
  "git": {
    "contributors": []
  },
  "filePathRelative": "vue3/xiangyingshi.md"
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
