export const data = {
  "key": "v-a9c5c828",
  "path": "/vue3UI/start.html",
  "title": "使用 vite 搭建官网",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "创建项目",
      "slug": "创建项目",
      "children": []
    },
    {
      "level": 2,
      "title": "初始化 vue-router",
      "slug": "初始化-vue-router",
      "children": []
    },
    {
      "level": 2,
      "title": "别名 @",
      "slug": "别名",
      "children": []
    },
    {
      "level": 2,
      "title": "provide/inject 实现sidebar切换按钮",
      "slug": "provide-inject-实现sidebar切换按钮",
      "children": [
        {
          "level": 3,
          "title": "App.vue",
          "slug": "app-vue",
          "children": []
        },
        {
          "level": 3,
          "title": "topNav.vue 上导航栏",
          "slug": "topnav-vue-上导航栏",
          "children": []
        },
        {
          "level": 3,
          "title": "Sidebar.vue 侧边栏",
          "slug": "sidebar-vue-侧边栏",
          "children": []
        },
        {
          "level": 3,
          "title": "Icon.vue 图标组件",
          "slug": "icon-vue-图标组件",
          "children": []
        },
        {
          "level": 3,
          "title": "Docs.vue",
          "slug": "docs-vue",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "路由间切换",
      "slug": "路由间切换",
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
  "filePathRelative": "vue3UI/start.md"
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
