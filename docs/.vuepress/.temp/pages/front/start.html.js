export const data = {
  "key": "v-20eb0b54",
  "path": "/front/start.html",
  "title": "搭建",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "通过 Vite 构建项目",
      "slug": "通过-vite-构建项目",
      "children": []
    },
    {
      "level": 2,
      "title": "安装 tailwindcss 和 sass",
      "slug": "安装-tailwindcss-和-sass",
      "children": []
    },
    {
      "level": 2,
      "title": "搭建基础项目结构",
      "slug": "搭建基础项目结构",
      "children": [
        {
          "level": 3,
          "title": "项目开发助手 Prettier - Code formatter 、 Tailwind CSS IntelliSense、Volar",
          "slug": "项目开发助手-prettier-code-formatter-、-tailwind-css-intellisense、volar",
          "children": []
        },
        {
          "level": 3,
          "title": "项目架构基本结构处理分析",
          "slug": "项目架构基本结构处理分析",
          "children": []
        },
        {
          "level": 3,
          "title": "构建项目架构",
          "slug": "构建项目架构",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "vite配置方案",
      "slug": "vite配置方案",
      "children": [
        {
          "level": 3,
          "title": "明确移动端和 PC 端的构建顺序",
          "slug": "明确移动端和-pc-端的构建顺序",
          "children": []
        },
        {
          "level": 3,
          "title": "构建移动处理工具 isMobileTerminal",
          "slug": "构建移动处理工具-ismobileterminal",
          "children": []
        },
        {
          "level": 3,
          "title": "通过 vueuse 优化处理方案",
          "slug": "通过-vueuse-优化处理方案",
          "children": []
        },
        {
          "level": 3,
          "title": "定义 @ 软链接",
          "slug": "定义-软链接",
          "children": []
        },
        {
          "level": 3,
          "title": "构建 VueRouter 移动端路由表",
          "slug": "构建-vuerouter-移动端路由表",
          "children": []
        },
        {
          "level": 3,
          "title": "划分移动端首页模块",
          "slug": "划分移动端首页模块",
          "children": []
        },
        {
          "level": 3,
          "title": "导入并配置 axios",
          "slug": "导入并配置-axios",
          "children": []
        },
        {
          "level": 3,
          "title": "vite 处理代理服务器 ( 跨域 )",
          "slug": "vite-处理代理服务器-跨域",
          "children": []
        },
        {
          "level": 3,
          "title": "vite 处理环境变量",
          "slug": "vite-处理环境变量",
          "children": []
        },
        {
          "level": 3,
          "title": "数据拦截简化数据获取流程",
          "slug": "数据拦截简化数据获取流程",
          "children": []
        }
      ]
    }
  ],
  "git": {
    "contributors": []
  },
  "filePathRelative": "front/start.md"
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
