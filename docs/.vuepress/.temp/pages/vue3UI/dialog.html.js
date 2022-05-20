export const data = {
  "key": "v-663f64fc",
  "path": "/vue3UI/dialog.html",
  "title": "Dialog 对话框组件",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "需求与API设计",
      "slug": "需求与api设计",
      "children": []
    },
    {
      "level": 2,
      "title": "基本的实现 <script setup>",
      "slug": "基本的实现-script-setup",
      "children": [
        {
          "level": 3,
          "title": "Teleport",
          "slug": "teleport",
          "children": []
        }
      ]
    }
  ],
  "git": {
    "updatedTime": null,
    "contributors": []
  },
  "filePathRelative": "vue3UI/dialog.md"
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
