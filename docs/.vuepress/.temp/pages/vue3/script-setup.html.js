export const data = {
  "key": "v-812fd256",
  "path": "/vue3/script-setup.html",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "<script setup>",
      "slug": "script-setup",
      "children": []
    },
    {
      "level": 2,
      "title": "1. 顶层await",
      "slug": "_1-顶层await",
      "children": [
        {
          "level": 3,
          "title": "(1)suspense处理全局异步",
          "slug": "_1-suspense处理全局异步",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "2. defineProps() 和 defineEmits()",
      "slug": "_2-defineprops-和-defineemits",
      "children": []
    },
    {
      "level": 2,
      "title": "3.  制作一个小demo(增删todoList):",
      "slug": "_3-制作一个小demo-增删todolist",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 1649781039000,
    "contributors": [
      {
        "name": "jgoriginal",
        "email": "932274204@qq.com",
        "commits": 2
      }
    ]
  },
  "filePathRelative": "vue3/script-setup.md"
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
