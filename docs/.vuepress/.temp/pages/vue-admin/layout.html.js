export const data = {
  "key": "v-13bcd74f",
  "path": "/vue-admin/layout.html",
  "title": "项目架构之搭建 Layout架构 解决方案与实现",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "前言",
      "slug": "前言",
      "children": []
    },
    {
      "level": 2,
      "title": "创建基于 Layout 的基础架构",
      "slug": "创建基于-layout-的基础架构",
      "children": []
    },
    {
      "level": 2,
      "title": "获取用户信息",
      "slug": "获取用户信息",
      "children": []
    },
    {
      "level": 2,
      "title": "渲染用户头像菜单",
      "slug": "渲染用户头像菜单",
      "children": []
    },
    {
      "level": 2,
      "title": "退出登录方案实现",
      "slug": "退出登录方案实现",
      "children": [
        {
          "level": 3,
          "title": "用户主动退出解决方案",
          "slug": "用户主动退出解决方案",
          "children": []
        },
        {
          "level": 3,
          "title": "用户被动退出方案解析",
          "slug": "用户被动退出方案解析",
          "children": []
        },
        {
          "level": 3,
          "title": "用户被动退出解决方案之 - 主动处理",
          "slug": "用户被动退出解决方案之-主动处理",
          "children": []
        },
        {
          "level": 3,
          "title": "用户被动退出解决方案之 - 被动处理",
          "slug": "用户被动退出解决方案之-被动处理",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "创建页面组件，使用临时 menu 菜单",
      "slug": "创建页面组件-使用临时-menu-菜单",
      "children": []
    },
    {
      "level": 2,
      "title": "动态 menu 菜单处理方案解析",
      "slug": "动态-menu-菜单处理方案解析",
      "children": [
        {
          "level": 3,
          "title": "生成项目页面组件",
          "slug": "生成项目页面组件",
          "children": []
        },
        {
          "level": 3,
          "title": "创建结构路由表",
          "slug": "创建结构路由表",
          "children": []
        },
        {
          "level": 3,
          "title": "解析路由表, 获取结构化数据",
          "slug": "解析路由表-获取结构化数据",
          "children": []
        }
      ]
    }
  ],
  "git": {
    "contributors": []
  },
  "filePathRelative": "vue-admin/layout.md"
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
