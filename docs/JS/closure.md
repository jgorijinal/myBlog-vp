# 闭包
## 作用域
全局作用域只有一个，每个函数又都有作用域（环境）

函数每次调用都会创建一个新作用域

## let/const
在 `for` 循环中使用`let/const`会在每一次迭代中重新**生成不同的变量**, 开辟新的区域
```js
for (var i=0;i<=3;i++) {   // var
    setTimeout(()=>{
        console.log(i)
    } ,0)
}
//打印出 4 4 4 4
// var 会挂到全局作用域
```
```js
for (let i=0;i<=3;i++) {   // let 
    setTimeout(()=>{
        console.log(i)
    } ,0)
}
//打印出 0 1 2 3  
```
使用`var`模拟伪块作用域 , 利用了函数每次调用都会创建一个新作用域的特性
```js
for (let i = 0; i <= 3; i++) {
    (function (a) {      // 函数每次调用都会创建一个新作用域
        setTimeout(() => {
            console.log(a)
        })
    })(i)   // 立即执行函数里传了 i
}
```
## 闭包
闭包指子函数可以访问外部作用域变量的函数特性
* JS中的所有函数都是闭包

### 基本示例
```js
function fn() {
    let name = 'frank';
    return function () {
        return name;
    }
}
let x = fn();
console.log(x()); // frank
```
### 移动动画(解决bug的过程)
制作一个动画, 点击按钮后 , 让按钮本身向右缓慢移动
```js
const buttons = document.querySelectorAll('button')
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let left = 0
        setInterval(() => {
            button.style.left = left++ + 'px'
        }, 100)
    })
})
```
但每次点击移动的按钮时 ,按钮发现会剧烈抖动 , 这是因为
* 当用户每次点击时 ,`addEventListener`的回调函数每次会执行
* 要注意函数执行时会生成新的环境
* 所以每次用户点击时 , 这个回调函数每次会生成新的环境, 因此里面的 left 和 setInterval 每次都被再次生成 
* 所以要把 left 放在外面,防止再新的环境中每次生成
```js{3}
const buttons = document.querySelectorAll('button')
buttons.forEach((button) => {
    let left = 0
    button.addEventListener('click', () => {
        setInterval(() => {
            button.style.left = left++ + 'px'
        }, 100)
    })
})
```
又要防止 setInterval 的每次都执行
```js{4,6,7}
const buttons = document.querySelectorAll('button')
buttons.forEach((button) => {
    let left = 0
    let status = false
    button.addEventListener('click', () => {
        if(!status){
            status = true
            setInterval(() => {
                button.style.left = left++ + 'px'
            }, 100)
        }
    })
})
```
但事实还可以这么写
```js{7}
const buttons = document.querySelectorAll('button')
buttons.forEach((button) => {
    let status = false
    button.addEventListener('click', () => {
        if(!status){
            status = true
            let left = 0
            setInterval(() => {
                button.style.left = left++ + 'px'
            }, 100)
        }
    })
})
```
这是因为用户第一次点击后`status`等于`true` , 之后用户点击按钮时会每次生成空的环境 ,所以不影响第一次点击时的`left` 




