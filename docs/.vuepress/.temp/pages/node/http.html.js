export const data = {
  "key": "v-51bd70bd",
  "path": "/node/http.html",
  "title": "http 模块",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "创建最基本的 web 服务器",
      "slug": "创建最基本的-web-服务器",
      "children": [
        {
          "level": 3,
          "title": "基本步骤",
          "slug": "基本步骤",
          "children": []
        },
        {
          "level": 3,
          "title": "req 请求对象",
          "slug": "req-请求对象",
          "children": []
        },
        {
          "level": 3,
          "title": "res 响应对象",
          "slug": "res-响应对象",
          "children": []
        },
        {
          "level": 3,
          "title": "解决中文乱码问题",
          "slug": "解决中文乱码问题",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "根据不同的 url 响应不同的 html 内容",
      "slug": "根据不同的-url-响应不同的-html-内容",
      "children": []
    },
    {
      "level": 2,
      "title": "案例",
      "slug": "案例",
      "children": [
        {
          "level": 3,
          "title": "1. 导入需要的模块",
          "slug": "_1-导入需要的模块",
          "children": []
        },
        {
          "level": 3,
          "title": "2. 创建基本的 web 服务器",
          "slug": "_2-创建基本的-web-服务器",
          "children": []
        },
        {
          "level": 3,
          "title": "3. 将资源的请求 url 地址映射为文件的存放路径",
          "slug": "_3-将资源的请求-url-地址映射为文件的存放路径",
          "children": []
        },
        {
          "level": 3,
          "title": "4. 读取文件的内容响应给客户端",
          "slug": "_4-读取文件的内容响应给客户端",
          "children": []
        },
        {
          "level": 3,
          "title": "5. 优化资源的请求路径",
          "slug": "_5-优化资源的请求路径",
          "children": []
        }
      ]
    }
  ],
  "git": {
    "contributors": []
  },
  "filePathRelative": "node/http.md"
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
