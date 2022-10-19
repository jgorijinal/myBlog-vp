# 模块化原理和 sourcemap
## Mode 配置
前面一直没有总结 mode，但是在这里我们要简单讲一下，后面还会提到它的其他用法。

Mode配置选项，可以告知 webpack 使用响应模式的内置优化：
* 默认值是 `production`（什么都不设置的情况下）；
* 可选值有：'none' | 'development' | 'production'；

这几个选项有什么样的区别呢?

![图片](../.vuepress/public/images/mde1.png)
### Mode 配置代表更多
![图片](../.vuepress/public/images/mde2.png)

## Webpack 的模块化

