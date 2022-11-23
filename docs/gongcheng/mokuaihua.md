# 模块化

## CommonJS
Node.js 默认模块化规范, 每个文件就是一个模块, 有自己的作用域

Node.js 中 CommonJS 模块加载方式采用**同步加载**方式

通过 require 加载模块, 通过 exports 或 module.exports 输出模块
#### **特点** : 
所有的代码都运行在模块作用域, 不会污染全局环境

模块可以多次加载, **第一次加载时会运行模块, 模块输出结果会被缓存, 再次加载时, 会从缓存结果中直接读取模块输出结果**

模块加载的顺序, 会按照其在代码中出现的顺序
### CommonJS 模块打包
浏览器不认识 CommonJS , 所以需要打包

安装 browserify
```shell
npm install browserify -g
```

打包命令
```shell
browserify 文件夹/入口文件 -o dist/bundle.js
```

如果有多个模块, 都需要单独打包
