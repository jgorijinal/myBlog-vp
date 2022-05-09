# 函数
## 声明定义
函数也是个对象 , 是`Function`类创建出来的实例, 所以可以用 `new Function`定义函数
```js
const fn = new Function('title' , 'console.log(title)')
fn('frank') 
```
标准语法声明函数
```js
const fn = function(title){
    console.log(title)
}
fn('frank')
```
对象字面量属性函数简写
```js
const user = {
    name: 'frank',
    setName: function (name) {
        this.name = name
    },
    //简写形式
    getName(){
        return this.name
    }
}
user.setName('xxx')
```
## 全局函数
全局函数会声明在`window`对象上 , 但不建议使用全局函数 , 尽量使用模块或者类的处理
```js
console.log(window.screenX)  // 2000
```
当我们定义`screenX`函数, 会覆盖 window.screenX 方法
```js
function screenX(){
  return 'frank'
}
console.log(window.screenX) // 'frank'
```
当使用 `let/const`不会压入到 window
```js
let fn = function() {
  console.log("后盾人");
};
window.fn(); //window.fn is not a function
```
## 匿名函数
函数是对象所以可以通过赋值来指向到函数对象的指针 , 当然指针也可以传递给其他变量，注意后面要以`;`结束。
```js
let fn = function(){
  return 'xxx'
}
const x = fn;
x()
```
标准声明的函数优先级更高，解析器会优先提取函数并放在代码树顶端(函数提升)，所以标准声明函数位置不限制，所以下面的代码可以正常执行
```js
fn()

function fn(){
    console.log('hi')
}
```
## 立即执行函数
声明一个匿名函数, 然后立即执行它 . 这种做法就是立即执行函数
作用:
* ES6之前 , 可以用来定义私有作用域防止污染全局作用域
```js
( function (){console.log('hi')}())    //用括号把整个表达式抱起来
( function (){console.log('hi')}) ()   //用括号把函数包起来
! function (){console.log('hi')} ()    //求反,我们不在意值是多少,只想通过语法检查
// +
// ~
// new
```
使用 `let/const` 有块级作用域特性，所以下面方式也可以产生私有作用域
```js
{
    let xxx = 'frank'
    console.log(xxx)  //能读取到
}
console.log(xxx) // 读取不到 ,  xxx is not defined
```
## 形参和实参
`形参`指的是声明函数是设置的参数 , `实参`指的是调用函数是传递的值
* 形参数量大于实参是 , 没有传递值得形参的值为`undefined`
* 实参数量大于形参时 , 会被忽略并不会报错
```js
function sum(a, b, c) {
    console.log(c)       // undefined
    console.log(a + b)     // 3
    console.log(a + b + c)  //NaN
}
sum(1, 2)
```
实参多于形参:
```js
function sum(a, b) {
    return a + b
}
sum(1, 2, 3, 4)
```
## 默认参数
排序
```js
function sortArray(array, type = 'asc') {   // 定了默认参数
    //其实默认参数等价于
    // type = type || 'asc' 
    return array.sort((a, b) => {
        return type === 'asc'
            ? a - b
            : b - a
    })
}
const arr = [5,6,9,2,4,5,3]
console.log(sortArray(arr));         // [2, 3, 4, 5, 5, 6, 9]
console.log(sortArray(arr , 'desc'));  // [9, 6, 5, 5, 4, 3, 2]
```
## arguments
`arguments` 是函数获得到所有实参的集合 , 下面写一个求和函数

先把 `arguments` 打出来看看
```js
function  sum() {
    console.log(arguments)  
}
sum(1,2,5,9,8,7,5,5,)
```
![图片](../.vuepress/public/images/arguments.png)
使用`for`循环写个求和函数
```js
function sum() {
    // console.log(arguments)
    let total = 0
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i]
    }
    return total
}
```
使用`reduce`在写一下
```js
function sum() {
    return [...arguments].reduce((pre , cur)=>{
        return pre + cur
    })
}

console.log(sum(1, 2, 5, 9, 8, 7, 5, 5,));
```
但这时候更建议使用`...`展开语法
```js
function sum(...args) {
    return args.reduce((pre , cur)=>{
        return pre + cur
    })
}

console.log(sum(1, 2, 5, 9, 8, 7, 5, 5,));
```
## 箭头函数
与普通函数的区别 : 
*  箭头函数是匿名函数，不能作为构造函数，不能使用 `new`：
*  没有 `arguments`
*  箭头函数不支持 `this`
*  箭头函数的 `this` 永远指向其上下文的 `this` ，任何方法都改变不了(因为就压根不支持 this )，如 `call()` , `bind()` , `apply()`
## 回调函数
在某个时刻被 其他函数调用的函数 称为回调函数，比如处理键盘、鼠标事件的函数。
如果我写一个函数 A，传给另一个函数 B 调用，那么函数 A 就是回调
```js
document.querySelector('button').addEventListener('click',(e)=>{
  console.log(e.target)
})
```
## 