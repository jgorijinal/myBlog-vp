export const siteData = {
  "base": "/myBlog-vp/",
  "lang": "zh-CN",
  "title": "Eren的个人文档 - 记录优于记忆",
  "description": "这是我的第一个 VuePress 站点",
  "head": [
    [
      "link",
      {
        "rel": "stylesheet",
        "href": "/css/index.css"
      }
    ]
  ],
  "locales": {}
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
