export const data = {
  "key": "v-f6e2c078",
  "path": "/hrsass/zhuye.html",
  "title": "主页模块",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "主页的 token 拦截处理",
      "slug": "主页的-token-拦截处理",
      "children": [
        {
          "level": 3,
          "title": "权限拦截的流程图",
          "slug": "权限拦截的流程图",
          "children": []
        },
        {
          "level": 3,
          "title": "流程图转化成代码",
          "slug": "流程图转化成代码",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "获取用户资料接口和 token 注入",
      "slug": "获取用户资料接口和-token-注入",
      "children": []
    },
    {
      "level": 2,
      "title": "封装获取用户资料的 action 并共享用户状态",
      "slug": "封装获取用户资料的-action-并共享用户状态",
      "children": []
    },
    {
      "level": 2,
      "title": "权限拦截处 调用获取资料action",
      "slug": "权限拦截处-调用获取资料action",
      "children": [
        {
          "level": 3,
          "title": "权限拦截器调用action",
          "slug": "权限拦截器调用action",
          "children": []
        },
        {
          "level": 3,
          "title": "获取头像接口 合并数据",
          "slug": "获取头像接口-合并数据",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "自定义指令 - 解决异常图片情况",
      "slug": "自定义指令-解决异常图片情况",
      "children": [
        {
          "level": 3,
          "title": "注册自定义指令",
          "slug": "注册自定义指令",
          "children": []
        },
        {
          "level": 3,
          "title": "在 main.js 完成自定义指令全局注册",
          "slug": "在-main-js-完成自定义指令全局注册",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "实现登出功能",
      "slug": "实现登出功能",
      "children": []
    },
    {
      "level": 2,
      "title": "Token 失效的主动介入",
      "slug": "token-失效的主动介入",
      "children": [
        {
          "level": 3,
          "title": "token 超时处理 - 客户端主动介入",
          "slug": "token-超时处理-客户端主动介入",
          "children": []
        },
        {
          "level": 3,
          "title": "流程图转化代码",
          "slug": "流程图转化代码",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Token失效的被动处理",
      "slug": "token失效的被动处理",
      "children": []
    }
  ],
  "git": {
    "contributors": []
  },
  "filePathRelative": "hrsass/zhuye.md"
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
