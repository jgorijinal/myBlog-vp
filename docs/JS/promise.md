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
#### 用Promise改写
```js
function loadImage(src) {
    return new Promise((resolve, reject) => {
        const image = new Image()
        image.src = src
        image.onload = () => {
            resolve(image)
        }
        image.onerror = () => {
            reject('失败')
        }
    })
}
loadImage('./img.png').then(image => {
    document.body.appendChild(image)
    image.style.border = "10px solid red"
}, reason => {
    console.log(reason)
})
```
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
#### 用Promise改写
```js{16,26}
function interval(delay=100 , callback) {  //封装
    return new Promise((resolve,reject)=>{
        let id = setInterval(()=>{
            callback(id , resolve)   //把resolve传进去
        }, delay)
    })
}

interval(100 , (id ,resolve)=>{
    const div = document.querySelector(".box");
    let left = div.getBoundingClientRect().left;
    div.style.left = left + 10 + "px";
    if (left > 200) {
        //当left大于200时clearInterval
        clearInterval(id);
        resolve(div)
    }
})
    .then(div =>{
        return interval(100 , (id,resolve)=>{
            let { width } = div.getBoundingClientRect();
            div.style.width = width - 5 + "px";
            if (width < 50) {
                //当宽度小于50时clearInterval
                clearInterval(id);
                resolve(div)
            }
        })
    })
    .then(div => {
      div.style.background = 'green'
    })

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

## Promise.then的用法
**每个`then`最终返回的也是一个`promise`对象, 如果后面在写一个`then` , 那么它是对上一个`promise`的处理**
```js
let p1 = new Promise((resolve, reject) => {
    resolve('成功')
})
let p2 = p1.then((value) => {
    console.log(value)  // '成功'
    return 1  
}, (reason) => {
    console.log(reason)
}).then((value) => {
    console.log(value)  // 1
}, (reason) => {
    console.log(reason)
})
```
```js 
let p1 = new Promise((resolve, reject) => {
    reject('失败')  
})
let p2 = p1.then((value) => {
    console.log(value)
}, (reason) => {
    console.log(reason)    // '失败'
}).then((value) => {
    console.log('成功')    // '成功'
}, (reason) => {
    console.log(reason)
})
```
### then返回值的处理技巧
`then`return了一个值
```js
let p1 = new Promise((resolve, reject) => {
    resolve('成功')
})
let p2 = p1
    .then(value => {
        return 'hello'   //return的值下一个 then 就能接到 , 默认走成功
    }, reason => {
        console.log(reason)
    })
    .then(value => {
        console.log(value)  // 'hello'
    }, reason => {
        console.log(reason)
    })
```
`then`return了`promise`
```js
let p1 = new Promise((resolve, reject) => {
    resolve('成功')
})
let p2 = p1
    .then(value => {
        return new Promise((resolve , reject)=>{
            resolve('hello')
        }).then((value)=>{
            console.log(value)  // 'hello'
            return 123   
        })
    }, reason => {
        console.log(reason)
    })
    .then(value => {
        console.log(value)  // 123
    }, reason => {
        console.log(reason)
    })
```
就一句话 , **后面的`then`就是对前面返回的`promise`的处理**

## 使用Promise封装ajax请求
```js{8}
function ajax(url){
    return new Promise((resolve ,reject)=>{
        const  xhr = new XMLHttpRequest()
        xhr.open('GET' ,url)
        xhr.onreadystatechange = ()=>{
            if (xhr.readyState === 4) {
                if(xhr.status  >= 200 &&  xhr.status < 300 || xhr.status === 304 ){
                    resolve(xhr.responseText)
                }else {
                    reject('失败')
                }
            }
        }
        xhr.send()
    })
}
```
## Promise多种错误监测与catch的使用
常见的抛出错误方法
```js{2-4}
new Promise((resolve, reject) => {
    reject('fail')
    //reject(new Error('fail'))  //或者
    //throw new Error('fail')    // 或者直接抛出错误
}).then(value => {
    console.log(value)
}, reason => {
    console.log(reason.message)
})
```
`.catch`其实是`then(null, () => {})`的语法糖。`.catch`推荐**放到最后面** , 对上面所有的`promise`统一做处理
```js
new Promise((resolve, reject) => {
    reject('fail')
}).then(value => {      //上面是reject , 所以并不会走到这条路
    console.log(value)
    return new Promise((resolve,reject)=>{
        reject('123')
    })
}).catch((reason => console.log(reason)))   //会打出 '123'
```
**细节**:`catch`返回的`promise`对象是解决状态
## 使用finally实现异步加载动画

`.finally`基本使用:`finally`无论promise成功或者失败**始终会执行**
```js
new Promise((resolve, reject) => {
    // resolve('成功')
    reject('失败')
})
    .then(value => {
        console.log(value)
    })
    .catch(reason => console.log(reason))
    .finally(()=>{
        console.log('永远会执行')
    })
```
实现异步加载动画
```html
<div id="loading"></div> 
```
```js
ajax('http://....').then(value=>{  
  console.log(value)
}).finally(()=>{
  loading.style.display = none
})
```

## 用Promise封装setTimeout定时器
```js
function timeout(delay) {
    return new Promise((resolve,reject)=>{
        setTimeout(resolve , delay)
    })
}
timeout(2000)
    .then(value=>{
        console.log('过2秒打印')
        return timeout(3000)
})
    .then(value => {
        console.log('又过3秒打印')
    })
```
## Promise.resolve()
`Promise.resolve(value)`方法返回一个以给定值解析后的`Promise`对象。
## Promise.reject()
`Promise.reject()`方法返回一个带有拒绝原因的`Promise`对象。
示例:
```js
new Promise((resolve, reject) => {
    resolve('hello')
})
    .then(value => {
        if (value !== '成功') {
            throw new Error('参数错误')
            // return Promise.reject('参数错误')
        }
    }).catch(reason => {
    console.log(reason)
})
```
## Promise.all()
1. `Promise.all` 的返回值是一个新的 `Promise`实例。
2. `Promise.all` 接受一个可遍历的数据容器，容器中每个元素都应是 `Promise` 实例。就是说，假设这个容器就是数组。
3. 数组中每个 `Promise` 实例都成功时（由`pendding`状态转化为`fulfilled`状态），`Promise.all` 才成功。这些 Promise 实例所有的 resolve 结果会按照原来的顺序集合在一个数组中作为 `Promise.all` 的 `resolve` 的结果。
4. 数组中只要有一个 Promise 实例失败（由`pendding`状态转化为rejected状态），`Promise.all` 就失败。

### 批量获取用户数据
```js
function getUsers(names) {
    let promises = names.map(name=>{
        return ajax(`http://..../user/?name=${name}`)
    })
    return Promise.all(promises)
}
getUsers(['用户1' , '用户2','用户3']).then(users =>{
    console.log(users)
})
```
### 手写Promise.all
```js
Promise.all2 = function (promiseList){
     return new Promise((resolve,reject)=>{
         let result = []
         let count = 0
         promiseList.forEach((promise,index) =>{
             promise.then((data)=>{         // 进入then已经说明promise成功
                 result[index] = data
                 count += 1
                 if(count === promiseList.length) {
                     resolve(result)
                 }
             },(reason)=>{
                 reject(reason)
             })
         })
     })
}
```
## Promise.allSettled()
该`Promise.allSettled()`方法返回一个在所有给定的`promise`都已经`fulfilled`或`rejected`后的promise，并带有一个对象数组，每个对象表示对应的`promise`结果。
### 手写 Promise.allSettled()
```js
Promise.MyAllSettled = (promiseList) => {
    return new Promise((resolve, reject) => {
        let result = []
        let count = 0
        promiseList.forEach((promise, index) => {
            promise.then((value) => {
                result[index] = {status: 'fulfilled', value: value}
                count += 1
                if (count === promiseList.length) {
                    resolve(result)
                }
            }, reason => {
                result[index] = {status: 'rejected', reason: reason}
                count += 1
                if (count === promiseList.length) {
                    resolve(result)
                }
            })
        })
    })
}
```
优化代码
```js
Promise.MyAllSettled2 = (promiseList) => {
    return new Promise((resolve, reject) => {
        let result = []
        let count = 0
        const processResult = (res,index , status)=>{
            result[index] =status === 'fulfilled' ? {status: 'fulfilled', value: res} : {status: 'rejected', reason: res}
            count += 1
            if (count === promiseList.length) {
                resolve(result)
            }
        }
        promiseList.forEach((promise, index) => {
            promise.then((value) => {
                processResult(value , index , 'fulfilled')
            }, reason => {
                processResult(reason , index , 'rejected')
            })
        })
    })
}
```
## Promise.race()
`Promise.race` 从字面意思理解就是赛跑，以状态变化最快的那个 `Promise` 实例为准，最快的 `Promise` 成功 `Promise.race` 就成功，最快的 `Promise` 失败 `Promise.race` 就失败。
