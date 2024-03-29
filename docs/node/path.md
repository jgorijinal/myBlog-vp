# path 路径模块
用来**处理路径**的模块

例如: 
* path.join() 方法 , 用来**将多个片段拼接成一个完整的路径字符串**
* path.basename() 方法, 用来从路径字符串 , 将文件名解析出来

需要导入
```js
const path = require('path')
```
```js
const path = require("path");

const basePath = "./User/why";
const filename = "abc.txt";


// join 路径拼接
// 直接拼接
console.log(path.join(basePath, filename));  //  \User\why\abc.txt
// resolve 路径拼接
// resolve 会拼接的是 /或 ./ 或 ../ 开头的路径, 查找拼接(比较智能)
console.log(path.resolve(basePath, filename));  //  C:\Users\86188\Desktop\node-demo\User\why\abc.txt
```
获取路径信息
```js
const path = require("path");

const filePath = '/User/why/abc.txt'

// 目录名
console.log(path.dirname(filePath))  // /User/why
// 文件名
console.log(path.basename(filePath)) // abc.txt
// 文件名后缀
console.log(path.extname(filePath))  // .txt
```
## webpack 中的使用
![图片](../.vuepress/public/images/pathqita.png)
<!-- ## 路径拼接
### path.join() 语法格式
```
path.join([...paths])
```

* `...paths<string>`路径片段的序列
* 返回值 `<string>`

```js
const pathStr = path.join('/a','/b/c','../','./d','e')
// 注意 :  ../ 会抵消紧挨在前面的路径
console.log(pathStr)  // 输出 \a\b\d\e

const pathStr2 = path.join(__dirname , './file/1.txt')
console.log(pathStr2) // 输出 当前文件所处的目录\files\1.txt
```

## 获取路径中的文件名
### path.basename() 语法格式
```
path.basename(path[,ext])
```
* `path <string>` 必选参数, 表示路径的字符串
* `ext <string>` 可选参数 , 表示文件扩展名
* 返回 : 表示路径中的最后一部分

```js
const fpath = '/a/b/c/index.html' // 问价内存放路径

const fullName = path.basename(fpath)
console.log(fullName) // 输出 index.html


const nameWithoutExtension = path.basename(fpath , '.html')
console.log(nameWithoutExtension) // 输出 index
```
## 获取路径中文件扩展名
### path.extname() 语法格式

```
path.extname(path)
```
参数
* `path<string>`: 必选参数, 表示路径字符串
* 返回 : 返回的发ode扩展名字符串 

```js
const fpath = '/a/b/c/index.html' // 问价内存放路径

const fext = path.extname(fpath)
console.log(fext)  // 输出 .html
```
 -->
