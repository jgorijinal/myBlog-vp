# Promise

## 为什么使用 Promise?

Promise 是 JS 进行异步编程的新的解决方案
为什么用 Promise?

- 指定回调函数的方式更加灵活. 返回`promise`对象,可以给`promise`对象绑定回调函数.
- 支持链式调用,可以解决回调地狱的问题

## 回调地狱和复杂的嵌套

### 异步加载图片体验 JS 的任务操作

```js
function loadImage(src, success, fail) {
  let image = new Image();
  image.src = src;
  image.onload = success(image);
  image.onerror = fail;
}

loadImage(
  "/images/logo.png",
  (image) => {
    console.log("成功了");
    document.body.appendChild(image);
  },
  () => {
    console.log("失败了");
  }
);

console.log("hello");
```

先把主任务完成了之后 , 再来轮询的形式不断遍历任务队列
这里通过**回调**完成了异步操作

### 定时器的任务轮询

用`setInterval`制作一个可以移动有变化的 div

```css{6}
.box {
    width: 100px;
    height: 100px;
    background: red;
    display: inline-block;
    position: absolute;
}
```

```js
function interval(callback, delay) {
  //声明一个定时器函数
  let id = setInterval(() => {
    callback(id);
  }, delay);
}
interval(function (id) {
  const div = document.querySelector(".box");
  let left = div.getBoundingClientRect().left;
  div.style.left = left + 10 + "px";
  if (left > 200) {
    //当left大于200时clearInterval
    clearInterval(id);
    interval(function (id) {
      //再让宽度减少
      let { width } = div.getBoundingClientRect();
      div.style.width = width - 5 + "px";
      if (width < 50) {
        //当宽度小于50时clearInterval
        clearInterval(id);
      }
    }, 100);
  }
}, 100);
```

## Promise 微任务机制

无论是宏任务还是微任务，首先它们都是异步任务。`setTimeout` 和 `Promise` 并不在同一个异步队列中，前者属于宏任务，而后者属于微任务。**先**执行微任务, **后**执行宏任务

```js
setTimeout(() => {
  console.log("setTimeout");
}, 0);
console.log("同步");
// `同步`
// `setTimeout`
```

系统走到这儿当看到`setTimeout`, 就会把它放到**宏任务**队列里面 , **准备**执行。同步任务执行完了之后,才会执行`setTimeout`。也就是同步的优先级最高

```js
new Promise((resolve, reject) => {
  console.log("promise");
});
console.log("同步");
// 'promise'
// '同步'
```

注意: `promise`构造函数里面的代码也是**同步**进行的,先输入'promise', 再输出'同步'。

```js
new Promise((resolve, reject) => {
  resolve();
}).then((value) => console.log("then"));

console.log("同步");
// '同步'
// 'then'
```

只要发了`resolve()`成功通知, 就会把`then`里的任务加到微任务队列里面。微任务队列也是要延迟的,同步的代码先执行后,在循环微任务。所以先输出'同步' , 后打出'then'

```js
new Promise((resolve, reject) => {
  resolve();
  console.log("promise");
}).then((value) => console.log("then"));

console.log("同步");
// 'promise'
// '同步'
// 'then'
```

先执行同步的, `promise`构造函数里面的代码是同步执行的,`then`里的任务加到微任务队列里面。所以先打出'promise'又打出'同步', 后打出'then'

```js
setTimeout(() => {
  console.log("setTimeout");
}, 0);

new Promise((resolve, reject) => {
  resolve();
  console.log("promise");
}).then((value) => console.log("then"));

console.log("同步");
```

那么想一下 , 上面代码会依次打出什么?
(提示: 同步 -> 微任务 -> 宏任务)

会依次打出: 'promise' , '同步' , 'then' , 'setTimeout'

* 宏任务的提升原来是个误解
```js
let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
    console.log('setTimeout')
  }, 0);
  console.log("promise");
}).then((value) => console.log("then"));

console.log("同步");
```
在想一想这种情况改怎么思考....`promise`构造函数里面居然有`setTimeout`.....

`promise`构造函数里面的代码是同步执行的, 但遇到了`setTimeout`不会马上执行,会把他放到**宏任务**里面。所以先是打印'promise', '同步'。注意`setTimeout`被丢到宏任务里面,所以他里面的`resolve()`还没执行, **微任务还没有创建**。等它执行的时候会创建微任务。打印顺序是: 'promise','同步' , 'setTimeout' , 'then'
问题所在是, 在这种情况,**宏任务没执行,微任务就没办法生成**, 因为微任务是宏任务执行过程当中生成出来的 

## Promise的单一状态与状态中转
```js

let p1 = new Promise((resolve,reject)=>{
    // resolve('成功')
    reject('拒绝')
})
new Promise((resolve, reject) => {
    resolve(p1)      // 传递了一个Promise -  p1
}).then(msg => {     //如果p1是成功状态 , 走这条路 , 打出 '成功'
    console.log(msg)    
}, (error) => {      //如果p1是拒绝状态 , 会走这条路 , 打出 '失败'   
    console.log(error)  
})
```
Promise只要状态改变了之后是不可逆的,不可撤销的
```js
new Promise((resolve, reject) => {
    resolve('fulfilled')
    reject('失败')  //这行代码无效 ,只要上面状态一改变, 就丢到微任务里, 然后就没戏了      
}).then(msg => {     
    console.log(msg)    
}, (error) => {      '   
    console.log(error)  
})
```
```


