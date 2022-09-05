export const data = {
  "key": "v-135b4a1e",
  "path": "/toutiao/pinglun.html",
  "title": "文章评论",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "1. 展示文章评论列表",
      "slug": "_1-展示文章评论列表",
      "children": [
        {
          "level": 3,
          "title": "1.1  准备组件",
          "slug": "_1-1-准备组件",
          "children": []
        },
        {
          "level": 3,
          "title": "1.2 获取数据并展示",
          "slug": "_1-2-获取数据并展示",
          "children": []
        },
        {
          "level": 3,
          "title": "1.3 展示文章评论总数量",
          "slug": "_1-3-展示文章评论总数量",
          "children": []
        },
        {
          "level": 3,
          "title": "1.4 展示文章评论项",
          "slug": "_1-4-展示文章评论项",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "2. 评论点赞(v-for 和 .sync的bug)",
      "slug": "_2-评论点赞-v-for-和-sync的bug",
      "children": []
    },
    {
      "level": 2,
      "title": "3. 发布文章评论",
      "slug": "_3-发布文章评论",
      "children": [
        {
          "level": 3,
          "title": "3.1 准备组件",
          "slug": "_3-1-准备组件",
          "children": []
        },
        {
          "level": 3,
          "title": "3.2 封装弹出层内部的组件",
          "slug": "_3-2-封装弹出层内部的组件",
          "children": []
        },
        {
          "level": 3,
          "title": "3.3 发布评论逻辑完成",
          "slug": "_3-3-发布评论逻辑完成",
          "children": []
        }
      ]
    }
  ],
  "git": {
    "contributors": []
  },
  "filePathRelative": "toutiao/pinglun.md"
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
