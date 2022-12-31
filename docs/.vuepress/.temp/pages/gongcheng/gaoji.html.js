export const data = {
  "key": "v-f39da1d6",
  "path": "/gongcheng/gaoji.html",
  "title": "高级概念",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Tree Shaking",
      "slug": "tree-shaking",
      "children": []
    },
    {
      "level": 2,
      "title": "development 和 production 模式的区分打包",
      "slug": "development-和-production-模式的区分打包",
      "children": []
    },
    {
      "level": 2,
      "title": "Webpack 和 Code Splitting",
      "slug": "webpack-和-code-splitting",
      "children": [
        {
          "level": 3,
          "title": "SplitChunks",
          "slug": "splitchunks",
          "children": []
        },
        {
          "level": 3,
          "title": "SplitChunksPlugin 的配置参数",
          "slug": "splitchunksplugin-的配置参数",
          "children": []
        },
        {
          "level": 3,
          "title": "Lazy Loading 懒加载 , Chunk 是什么?",
          "slug": "lazy-loading-懒加载-chunk-是什么",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "打包分析, preload 预加载, prefetch 预获取",
      "slug": "打包分析-preload-预加载-prefetch-预获取",
      "children": []
    },
    {
      "level": 2,
      "title": "CSS 文件的代码分割",
      "slug": "css-文件的代码分割",
      "children": [
        {
          "level": 3,
          "title": "MiniCssExtractPlugin",
          "slug": "minicssextractplugin",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "CSS 代码压缩 : CssMinimizerWebpackPlugin",
      "slug": "css-代码压缩-cssminimizerwebpackplugin",
      "children": []
    },
    {
      "level": 2,
      "title": "webpack 和浏览器缓存 (Caching)",
      "slug": "webpack-和浏览器缓存-caching",
      "children": []
    },
    {
      "level": 2,
      "title": "环境变量的使用方法",
      "slug": "环境变量的使用方法",
      "children": []
    },
    {
      "level": 2,
      "title": "公共静态资源的处理",
      "slug": "公共静态资源的处理",
      "children": []
    },
    {
      "level": 2,
      "title": "资源内联到 html 中",
      "slug": "资源内联到-html-中",
      "children": []
    },
    {
      "level": 2,
      "title": "通过 webpack 构建去除代码中的调试日志 - terser-webpack-plugin",
      "slug": "通过-webpack-构建去除代码中的调试日志-terser-webpack-plugin",
      "children": []
    }
  ],
  "git": {
    "contributors": []
  },
  "filePathRelative": "gongcheng/gaoji.md"
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
