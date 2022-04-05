export const data = {
  "key": "v-4b0bafb6",
  "path": "/vue/communication.html",
  "title": "Vue组件之间的通信方式",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "1. 组件间通信的分类",
      "slug": "_1-组件间通信的分类",
      "children": []
    },
    {
      "level": 2,
      "title": "2. 组件间通信的方案",
      "slug": "_2-组件间通信的方案",
      "children": [
        {
          "level": 3,
          "title": "props传递数据",
          "slug": "props传递数据",
          "children": []
        },
        {
          "level": 3,
          "title": "$emit 触发自定义事件",
          "slug": "emit-触发自定义事件",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "EventBus",
      "slug": "eventbus",
      "children": []
    },
    {
      "level": 2,
      "title": "provide 与 inject",
      "slug": "provide-与-inject",
      "children": [
        {
          "level": 3,
          "title": "Vuex",
          "slug": "vuex",
          "children": []
        }
      ]
    }
  ],
  "git": {
    "updatedTime": 1649056921000,
    "contributors": [
      {
        "name": "jgoriginal",
        "email": "932274204@qq.com",
        "commits": 2
      }
    ]
  },
  "filePathRelative": "vue/communication.md"
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
