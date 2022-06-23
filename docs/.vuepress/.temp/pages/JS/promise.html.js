export const data = {
  "key": "v-c60638ea",
  "path": "/JS/promise.html",
  "title": "Promise",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "为什么使用 Promise?",
      "slug": "为什么使用-promise",
      "children": []
    },
    {
      "level": 2,
      "title": "回调地狱和复杂嵌套",
      "slug": "回调地狱和复杂嵌套",
      "children": [
        {
          "level": 3,
          "title": "异步加载图片",
          "slug": "异步加载图片",
          "children": []
        },
        {
          "level": 3,
          "title": "定时器嵌套",
          "slug": "定时器嵌套",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "微任务机制",
      "slug": "微任务机制",
      "children": []
    },
    {
      "level": 2,
      "title": "异步状态",
      "slug": "异步状态",
      "children": [
        {
          "level": 3,
          "title": "状态说明",
          "slug": "状态说明",
          "children": []
        },
        {
          "level": 3,
          "title": "动态改变",
          "slug": "动态改变",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Promise.then",
      "slug": "promise-then",
      "children": [
        {
          "level": 3,
          "title": "链式调用",
          "slug": "链式调用",
          "children": []
        },
        {
          "level": 3,
          "title": "then返回值的处理技巧",
          "slug": "then返回值的处理技巧",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "多种错误监测与catch",
      "slug": "多种错误监测与catch",
      "children": []
    },
    {
      "level": 2,
      "title": "finally",
      "slug": "finally",
      "children": []
    },
    {
      "level": 2,
      "title": "用Promise封装setTimeout定时器",
      "slug": "用promise封装settimeout定时器",
      "children": []
    },
    {
      "level": 2,
      "title": "Promise.resolve()",
      "slug": "promise-resolve",
      "children": []
    },
    {
      "level": 2,
      "title": "Promise.reject()",
      "slug": "promise-reject",
      "children": []
    },
    {
      "level": 2,
      "title": "Promise.all()",
      "slug": "promise-all",
      "children": [
        {
          "level": 3,
          "title": "批量获取用户数据",
          "slug": "批量获取用户数据",
          "children": []
        },
        {
          "level": 3,
          "title": "手写Promise.all",
          "slug": "手写promise-all",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Promise.allSettled()",
      "slug": "promise-allsettled",
      "children": [
        {
          "level": 3,
          "title": "手写 Promise.allSettled()",
          "slug": "手写-promise-allsettled",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Promise.race()",
      "slug": "promise-race",
      "children": [
        {
          "level": 3,
          "title": "手写",
          "slug": "手写",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "async/await",
      "slug": "async-await",
      "children": [
        {
          "level": 3,
          "title": "async",
          "slug": "async",
          "children": []
        },
        {
          "level": 3,
          "title": "await",
          "slug": "await",
          "children": []
        },
        {
          "level": 3,
          "title": "async 实现做一个延时的函数",
          "slug": "async-实现做一个延时的函数",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "await错误处理",
      "slug": "await错误处理",
      "children": []
    },
    {
      "level": 2,
      "title": "await并行处理技巧",
      "slug": "await并行处理技巧",
      "children": []
    }
  ],
  "git": {
    "contributors": [
      {
        "name": "jgoriginal",
        "email": "932274204@qq.com",
        "commits": 8
      }
    ]
  },
  "filePathRelative": "JS/promise.md"
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
