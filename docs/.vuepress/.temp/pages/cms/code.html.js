export const data = {
  "key": "v-4e09a76d",
  "path": "/cms/code.html",
  "title": "项目搭建规范",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "一.代码规范",
      "slug": "一-代码规范",
      "children": [
        {
          "level": 3,
          "title": "1.1. 集成editorConfig配置",
          "slug": "_1-1-集成editorconfig配置",
          "children": []
        },
        {
          "level": 3,
          "title": "1.2. 使用prettier工具",
          "slug": "_1-2-使用prettier工具",
          "children": []
        },
        {
          "level": 3,
          "title": "1.3. 使用ESLint检测",
          "slug": "_1-3-使用eslint检测",
          "children": []
        },
        {
          "level": 3,
          "title": "1.4. git Husky和eslint",
          "slug": "_1-4-git-husky和eslint",
          "children": []
        }
      ]
    }
  ],
  "git": {
    "contributors": []
  },
  "filePathRelative": "cms/code.md"
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
