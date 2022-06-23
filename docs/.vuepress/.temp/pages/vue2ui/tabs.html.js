export const data = {
  "key": "v-267a8676",
  "path": "/vue2ui/tabs.html",
  "title": "Tabs 标签页",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "需求与 API 设计",
      "slug": "需求与-api-设计",
      "children": []
    },
    {
      "level": 2,
      "title": "基本的实现",
      "slug": "基本的实现",
      "children": [
        {
          "level": 3,
          "title": "provide / inject 依赖注入",
          "slug": "provide-inject-依赖注入",
          "children": []
        },
        {
          "level": 3,
          "title": "用 eventBus 实现 tab 切换",
          "slug": "用-eventbus-实现-tab-切换",
          "children": []
        }
      ]
    }
  ],
  "git": {
    "contributors": []
  },
  "filePathRelative": "vue2ui/tabs.md"
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
