export const data = {
  "key": "v-6831bb92",
  "path": "/vue3/other.html",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "用ref()处理响应式数据",
      "slug": "用ref-处理响应式数据",
      "children": []
    },
    {
      "level": 2,
      "title": "用reactive()处理响应式数据",
      "slug": "用reactive-处理响应式数据",
      "children": []
    },
    {
      "level": 2,
      "title": "模板ref",
      "slug": "模板ref",
      "children": [
        {
          "level": 3,
          "title": "(1) 访问模板 ref",
          "slug": "_1-访问模板-ref",
          "children": []
        },
        {
          "level": 3,
          "title": "(2)v-for 和 ref 配合使用",
          "slug": "_2-v-for-和-ref-配合使用",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "computed()",
      "slug": "computed",
      "children": []
    },
    {
      "level": 2,
      "title": "watch()",
      "slug": "watch",
      "children": []
    },
    {
      "level": 2,
      "title": "watchEffect()",
      "slug": "watcheffect",
      "children": []
    },
    {
      "level": 2,
      "title": "setup()",
      "slug": "setup",
      "children": [
        {
          "level": 3,
          "title": "(1)访问 Props",
          "slug": "_1-访问-props",
          "children": []
        },
        {
          "level": 3,
          "title": "(2)toRef() , toRefs",
          "slug": "_2-toref-torefs",
          "children": []
        },
        {
          "level": 3,
          "title": "(3)context 上下文",
          "slug": "_3-context-上下文",
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
    "contributors": [
      {
        "name": "jgoriginal",
        "email": "932274204@qq.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "vue3/other.md"
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
