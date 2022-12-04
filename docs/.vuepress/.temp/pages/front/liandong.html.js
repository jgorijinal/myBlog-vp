export const data = {
  "key": "v-38194fac",
  "path": "/front/liandong.html",
  "title": "多组件联动与高阶组件解决方案",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "多组件联动整体逻辑分析",
      "slug": "多组件联动整体逻辑分析",
      "children": []
    },
    {
      "level": 2,
      "title": "简单联动处理：navigationBar 对应 list",
      "slug": "简单联动处理-navigationbar-对应-list",
      "children": []
    },
    {
      "level": 2,
      "title": "明确 searchBar 对应 list 处理流程",
      "slug": "明确-searchbar-对应-list-处理流程",
      "children": [
        {
          "level": 3,
          "title": "searchBar : 搜索提示的初步实现",
          "slug": "searchbar-搜索提示的初步实现",
          "children": []
        },
        {
          "level": 3,
          "title": "searchBar ：处理 防抖 功能",
          "slug": "searchbar-处理-防抖-功能",
          "children": []
        },
        {
          "level": 3,
          "title": "searchBar ：提示关键字高亮处理",
          "slug": "searchbar-提示关键字高亮处理",
          "children": []
        },
        {
          "level": 3,
          "title": "searchBar：搜索历史处理",
          "slug": "searchbar-搜索历史处理",
          "children": []
        }
      ]
    }
  ],
  "git": {
    "contributors": []
  },
  "filePathRelative": "front/liandong.md"
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
