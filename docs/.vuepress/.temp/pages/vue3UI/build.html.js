export const data = {
  "key": "v-2650fd40",
  "path": "/vue3UI/build.html",
  "title": "部署",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "设置 build path",
      "slug": "设置-build-path",
      "children": []
    },
    {
      "level": 2,
      "title": "部署",
      "slug": "部署-1",
      "children": []
    },
    {
      "level": 2,
      "title": "一键部署",
      "slug": "一键部署",
      "children": []
    }
  ],
  "git": {
    "contributors": [
      {
        "name": "jgoriginal",
        "email": "932274204@qq.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "vue3UI/build.md"
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
