# 基础知识
## 类型检测
### typeof
`typeof`会返回以下类型
* 基本类型：number/string/boolean
* function
* object
* undefined
```js
let a = []
let b = {}
console.log(typeof a)   // object
console.log(typeof b)   // object

function x(){
}
console.log(typeof x)   // function

console.log(typeof f)   // undefined

console.log(typeof  null)  // object
```
### instanceof
`instanceof`会检测**实例对象的原型链上是否存在构造函数的`prototype`**,
也可以理解为是否为某个对象的实例，`typeof`不能区分数组，但`instanceof`则可以
```js
let arr = []
let obj = {}
console.log(arr instanceof Array)  // true
console.log(obj instanceof Array)  // false

function User(){
}
const user = new User()
console.log(user instanceof User)  // true
console.log(user instanceof Object) // true
console.log(user instanceof Array) // false
```
## String
### 转义符号
使用 `\`转义符号进行含义转换
```js
const str = 'www.bai\'du.com'
console.log(str)  
// www.bai'du.com
```
|  符号   | 说明  |
|  ---  | ---  |
| \t  | 四个字符 , 缩进 |
| \n  | 换行 |
| \\  | 斜杠 |
| \'  | 单引号 |
| \"  | 双引号 |

还有 , `HTML`里面空格是 `&nbsp`
### 模板字符串 
模板字符串 里面可以再套 模板字符串

![图片](../.vuepress/public/images/temString.png)
```js
const arr = [
    {type: 'js课程'},
    {type: 'css课程'},
    {type: 'vue课程'}
]

function template() {
    return `<ul>${arr.map(item => {
        return `<li>${item.type}</li>`
    }).join('')
    }</ul>`
}

document.body.innerHTML = template()
```
### 获取长度
使用`length`属性可以获取字符串长度
```js
const str = 'Hello,my name is frank'
console.log(str.length)
```
### 大小写转换
```js
const str = 'Hello,my name is frank'

console.log(str.toUpperCase())
console.log(str.toLowerCase())
```
### 消除空格
使用`trim()`删除字符串左右的空白字符

输入密码是防止敲空格实例
```js
const input = document.querySelector(`[name='password']`)

input.addEventListener('keyup',(e)=>{
    e.target.value = e.target.value.trim()
    console.log(e.target.value.length)   //敲空格时长度始终为0
})
```
还有 , 使用`trimLeft`删除左边空白，使用`trimRight`删除右边空白
### 获取单个字符
使用`charAt()`
```js
const name = 'frank'
console.log(name.charAt(0))  // f
```
也可用数字索引
```js
const name = 'frank'
console.log(name[0])  // f
```
小例子:
![图片](../.vuepress/public/images/hello.png)
```js
const str = 'Hello world'

for (let i=0;i<str.length;i++){
    console.log(i);
    let span = document.createElement('span')
    span.style.fontSize = (i+1) * 10 + 'px'
    span.innerHTML = str[i]
    document.body.append(span)
}
```
### 截取字符串
使用 `slice`、`substr`、`substring` 函数都可以截取字符串。

* `slice`、`substring` 第二个参数为截取的结束位置
* `substr` 第二个参数指定获取字符数量
```js
const str = '0123456789'
console.log(str.slice(0))        // 0123456789
console.log(str.substring(0))    // 0123456789
console.log(str.substr(0))  // 0123456789

console.log(str.slice(1,3))        // 12
console.log(str.substring(1,3))    // 12
console.log(str.substring(3, 1));   //12   较小的做为起始位置
console.log(str.substr(1,3))  // 123

console.log(str.slice(3, -1));      // 345678
console.log(str.slice(-2));         // 89 从末尾取
console.log(str.substring(3, -9));  // 012 负数转为0
console.log(str.substr(-3, 2)); // 78  从后面第三个开始取两个
```
### 查找字符串
#### indexOf()
**`.indexOf(searchString: string, position?: number):number`** 

第一个参数是要找的字符串 , 第二个参数是起始位置 , 找不到返回 -1
```js
const str = 'Hello world'
console.log(str.indexOf('o'))    // 4
console.log(str.indexOf('o', 5))  // 7
console.log(str.indexOf('x'))   // -1
```
#### lastIndexOf()
**`String.lastIndexOf(searchString: string, position?: number): number`**
从后面, **向前找**
```js
const str = 'Hello world'
console.log(str.lastIndexOf('o'));  // 7
console.log(str.lastIndexOf('o',6));  // 4
```
#### includes()
**`String.includes(searchString: string, position?: number): boolean`**

返回布尔值 true / false
```js
const str = 'Hello world'
console.log(str.includes('o')); // true
console.log(str.includes('o' , 5)); // true
console.log(str.includes('x')); // false
```
#### startsWith()
**`String.startsWith(searchString: string, position?: number): boolean`**
```js
const str = 'Hello world'

console.log(str.startsWith('Hello'));  // true
console.log(str.startsWith('o'));  // false
console.log(str.startsWith('o',4));  // true
```
#### endsWith()
跟上面一样

小例子: 检索字符串
```js
const word = ['js','css']
const string = '我学的课程有js和css'
const status = word.some(w=>{
    return string.includes(w)
})
if(status) {
    console.log('找到了关键词')
}
```
### 替换字符串
#### replace()
**`String.replace(searchValue: string | RegExp, replaceValue: string): string`**
```js
const str = 'Hello world'
const newStr = str.replace('world' , 'people')

console.log(str)
console.log(newStr);
```
小例子:![图片](../.vuepress/public/images/replace.png)
```js
const word = ['js' , 'css']
const string = '我想学好js和css'
// 试图要在js和css上加上a标签
const replacedString = word.reduce((pre,word)=>{
    return pre.replace(word , `<a href="?w=${word}">${word}</a>`)
},string)
console.log(replacedString);
document.body.innerHTML = replacedString
```
### 重复生成 
#### repeat()
**`String.repeat(count: number): string`**
```js
console.log('*'.repeat(3))  // *** 
```
#### 电话号码的模糊处理
```js
function phone(number , length){
    return String(number).slice(0,(-1)*length)+ '*'.repeat(length)   // 细品
}

console.log(phone(18844332822 , 5))  // 188443*****
```
### 类型转换
