# 任务机制
JS 是单线程的 , 也就是说在干活的时候只有一个人在干活, 同一个时间只能处理一个任务。JS 处理任务是在等待任务、执行任务 、休眠等待新任务中不断循环中，也称这种机制为事件循环。
* 主线程中的任务执行完后，才执行任务队列中的任务
* 有新任务到来时会将其放入队列，采取先进先执行的策略执行队列中的任务
* 比如多个 `setTimeout` 同时到时间了，就要依次执行

任务包括 script(整体代码)、 setTimeout、setInterval、DOM 渲染、DOM 事件、Promise 等...

## 原理分析
细品:
```js
setTimeout(() => {
    console.log('定时器')
    setTimeout(()=>{
        console.log('setTimeout setTimeout')
    },0)
    new Promise((resolve, reject) => {
        console.log('setTimeout Promise')
        resolve()
    }).then(() => {
        console.log('setTimeout then ')
    })
}, 0)
new Promise((resolve, reject) => {
    console.log('Promise')
    resolve()
}).then(() => {
    console.log('then')
})
console.log('hello')

// 'Promise' 'hello'  'then'  '定时器' 'setTimeout Promise' 'setTimeout then'  'setTimeout setTimeout'
```
## 定时器的任务编排
即使是0秒 , 需要等主线程代码全部执行完才能执行任务队列里的代码
```js
setTimeout(()=>{
    console.log('定时器1')
} , 0)
setTimeout(()=>{
    console.log('定时器2')
} , 0)
for(let i=0;i<10000 ;i++ ){
    console.log('')         
}
```
这里有个误区 , 是不是主线程代码执行完才开始计时? 不是的

JS看到 setTimeout 的时候, JS已经把 setTimeout 放到**定时器模块**里 , 他已经开始计时, 到时间的时候, 已经把它们放到宏任务队列里面 , 然后主线程执行完了直接从宏任务队列里面拿来直接执行。
```js
setTimeout(()=>{
    console.log('定时器1')
} , 2000)
setTimeout(()=>{
    console.log('定时器2')
} , 1000)
for(let i=0;i<10000 ;i++ ){
    console.log('')         
}
// 先输出 '定时器2' , 然后 '定时器 1'
```
## 脚本的加载(DOM渲染任务)
引擎在执行任务时不会进行 DOM 渲染，所以如果把 script 定义在前面，要先执行完任务后再渲染 DOM，建议将script 放在 body 结束标签前 , 先渲染DOM , 这样用户能先看到页面内容 , 用户体验更好
```js
<body>
  <h1>hello</h1>  
  <script src="x.js"></script>
</body>
```
## 任务共享内存
```js
let  i = 0
setTimeout(()=>{
    console.log(++i)
} ,1000)
setTimeout(()=>{
    console.log(++i)
} ,1000)

// 1 2 
```
## 制作一个进度条
```html
<div class="progress"></div> 
```
```css
.progress {
    width: 0;
    height: 100px;
    background: #8e44ad;
    display: flex;
    justify-content: center;
    align-items: center;
}
```
```js
// 进度条
const progress = document.querySelector('.progress')

function handle (){
    let i = 0;
    (function run(){
        progress.innerText = i
        progress.style.width = i + '%'
        if(++i <= 100) {
            setTimeout(run , 50)
        }
    })()
}
handle()
```
