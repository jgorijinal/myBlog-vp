export const data = {
  "key": "v-6b326c0c",
  "path": "/vue-router/guard.html",
  "title": "路由守卫",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "全局前置守卫 router.beforeEach()",
      "slug": "全局前置守卫-router-beforeeach",
      "children": [
        {
          "level": 3,
          "title": "可选的第三个参数 next",
          "slug": "可选的第三个参数-next",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "全局解析守卫 router.beforeResolve()",
      "slug": "全局解析守卫-router-beforeresolve",
      "children": []
    },
    {
      "level": 2,
      "title": "全局后置守卫 router.afterEach()",
      "slug": "全局后置守卫-router-aftereach",
      "children": []
    },
    {
      "level": 2,
      "title": "路由独享守卫 beforeEnter",
      "slug": "路由独享守卫-beforeenter",
      "children": [
        {
          "level": 3,
          "title": "例子 :meta源信息完成登录验证",
          "slug": "例子-meta源信息完成登录验证",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "组件内路由守卫",
      "slug": "组件内路由守卫",
      "children": [
        {
          "level": 3,
          "title": "(1) beforeRouteEnter",
          "slug": "_1-beforerouteenter",
          "children": []
        },
        {
          "level": 3,
          "title": "(2) beforeRouteUpdate",
          "slug": "_2-beforerouteupdate",
          "children": []
        },
        {
          "level": 3,
          "title": "(3) beforeRouteLeave",
          "slug": "_3-beforerouteleave",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "路由解析流程",
      "slug": "路由解析流程",
      "children": []
    },
    {
      "level": 2,
      "title": "例子: 使用路由守卫获取数据",
      "slug": "例子-使用路由守卫获取数据",
      "children": [
        {
          "level": 3,
          "title": "在setup里改写",
          "slug": "在setup里改写",
          "children": []
        },
        {
          "level": 3,
          "title": "或者 使用watch监听路由",
          "slug": "或者-使用watch监听路由",
          "children": []
        },
        {
          "level": 3,
          "title": "用watch监听页码获取数据",
          "slug": "用watch监听页码获取数据",
          "children": []
        }
      ]
    }
  ],
  "git": {
    "contributors": [
      {
        "name": "jgoriginal",
        "email": "932274204@qq.com",
        "commits": 2
      }
    ]
  },
  "filePathRelative": "vue-router/guard.md"
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
