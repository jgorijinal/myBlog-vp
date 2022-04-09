export const data = {
  "key": "v-29530678",
  "path": "/vue3/composition.html",
  "title": "Composition API",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "一. 为什么⽤ Composition API",
      "slug": "一-为什么用-composition-api",
      "children": []
    },
    {
      "level": 2,
      "title": "二.  用ref处理响应式数据",
      "slug": "二-用ref处理响应式数据",
      "children": []
    },
    {
      "level": 2,
      "title": "三 . 模板ref",
      "slug": "三-模板ref",
      "children": [
        {
          "level": 3,
          "title": "访问模板 ref",
          "slug": "访问模板-ref",
          "children": []
        },
        {
          "level": 3,
          "title": "v-for 和 ref 配合使用",
          "slug": "v-for-和-ref-配合使用",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "三. watch()",
      "slug": "三-watch",
      "children": []
    },
    {
      "level": 2,
      "title": "四 . watchEffect()",
      "slug": "四-watcheffect",
      "children": []
    },
    {
      "level": 2,
      "title": "setup()",
      "slug": "setup",
      "children": [
        {
          "level": 3,
          "title": "访问 Props",
          "slug": "访问-props",
          "children": []
        },
        {
          "level": 3,
          "title": "context 上下文",
          "slug": "context-上下文",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "依赖注入 provide / inject",
      "slug": "依赖注入-provide-inject",
      "children": []
    }
  ],
  "git": {
    "updatedTime": null,
    "contributors": []
  },
  "filePathRelative": "vue3/composition.md"
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
