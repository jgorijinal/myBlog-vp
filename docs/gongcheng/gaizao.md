# 项目改造
原项目源码:[https://github.com/NewCoder798/ZBestPC](https://github.com/NewCoder798/ZBestPC)

源代码存在的问题分析:
1. `css` 和 `js` 资源多,  且全部采用了同步加载, 所以渲染是需要多次请求和加载, 降低了页面的性能
2. `css` 和 `js` 源码未压缩
3. 开发模式陈旧, 需要同时维护 `html, css 和 js` , 代码逻辑和解构不清晰, 迭代困难
4. 项目不支持 `source-map`, 调试困难, 手动维护 `source-map` 成本大


