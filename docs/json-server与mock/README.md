## 安装配置json-server
[json-server官网](https://github.com/typicode/json-server) 
```
# 命令行
yarn add --dev json-server
json-server --watch --post 3003 --host 127.0.0.1 db.json
```
## 使用mockjs批量生成中文数据
[mockjs官网](http://mockjs.com/) 
```
# 命令行
yarn add mockjs
```
db.js:
```js
const Mock = require('mockjs')

const Random = Mock.Random

module.exports = ()=>{
    let data = {news:[]}
    for(let i =0;i<20;i++){
        data.news.push({
            id:i,
            title:Random.cword(10,20),
            content:Random.cparagraph(10)
        })
    }
    return data   //return出对象
}
```
```
# 命令行
json-server --watch --post 3003 --host 127.0.0.1 db.js
```
