export const data = {
  "key": "v-812fd256",
  "path": "/vue3/script-setup.html",
  "title": "Vue3中的Composition API之script setup",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "<script setup>的优势",
      "slug": "script-setup-的优势",
      "children": []
    },
    {
      "level": 2,
      "title": "顶层await",
      "slug": "顶层await",
      "children": [
        {
          "level": 3,
          "title": "suspense处理全局异步",
          "slug": "suspense处理全局异步",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "defineProps() 和 defineEmits()",
      "slug": "defineprops-和-defineemits",
      "children": []
    },
    {
      "level": 2,
      "title": "制作一个小demo(增删todoList)",
      "slug": "制作一个小demo-增删todolist",
      "children": []
    }
  ],
  "git": {
    "contributors": [
      {
        "name": "jgoriginal",
        "email": "932274204@qq.com",
        "commits": 3
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
