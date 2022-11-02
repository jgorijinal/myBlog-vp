export const data = {
  "key": "v-79ea3892",
  "path": "/pinia/start.html",
  "title": "Pinia",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Pinia 和 VueX 对比",
      "slug": "pinia-和-vuex-对比",
      "children": []
    },
    {
      "level": 2,
      "title": "如何使用 Pinia",
      "slug": "如何使用-pinia",
      "children": []
    },
    {
      "level": 2,
      "title": "认识 Store",
      "slug": "认识-store",
      "children": [
        {
          "level": 3,
          "title": "定义一个 Store",
          "slug": "定义一个-store",
          "children": []
        },
        {
          "level": 3,
          "title": "使用定义的 Store",
          "slug": "使用定义的-store",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "state",
      "slug": "state",
      "children": [
        {
          "level": 3,
          "title": "操作 state (一)",
          "slug": "操作-state-一",
          "children": []
        },
        {
          "level": 3,
          "title": "操作 state (二)",
          "slug": "操作-state-二",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "getters",
      "slug": "getters",
      "children": []
    },
    {
      "level": 2,
      "title": "actions",
      "slug": "actions",
      "children": [
        {
          "level": 3,
          "title": "ctions 执行异步操作",
          "slug": "ctions-执行异步操作",
          "children": []
        }
      ]
    }
  ],
  "git": {
    "contributors": []
  },
  "filePathRelative": "pinia/start.md"
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
