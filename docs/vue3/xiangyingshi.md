# 响应式
## 初始
### 响应式函数的实现 watchFn
```js
const obj = {
  name:'frank',
  age:18
}
const reactiveFns = []
function watchFn(fn){
  reactiveFns.push(fn)
  fn()
}

watchFn(function foo() {
  console.log('foo:' + obj.name)
})
watchFn(function bar() {
  console.log('bar:' + obj.name)
})

console.log('obj 的 name 发生了变化-----')
obj.name = 'why'
// 把收集的响应式依赖挨个执行一遍
reactiveFns.forEach(fn => fn())
```

## 响应式依赖的收集
目前我们收集的依赖是放到一个数组中来保存的，但是这里会存在数据管理的问题：
* 我们在实际开发中需要监听很多对象的响应式；
* 这些对象需要监听的不只是一个属性，它们很多属性的变化，都会有对应的响应式函数；
* 我们不可能在全局维护一大堆的数组来保存这些响应函数；

所以我们要设计一个类，这个类用于管理某一个对象的某一个属性的所有响应式函数：
* 相当于替代了原来的简单 `reactiveFns` 的数组

```js
// 封装 一个 类
class Depend {
  constructor() {
    this.reactiveFns = []
  }
  addDepend(fn) {
    this.reactiveFns.push(fn)
  }
  notify() {
    this.reactiveFns.forEach(fn => fn())
  }
}

const obj = {
  name: 'frank',
  age:18
}
// 设置一个专门执行响应式函数的一个函数
// const reactiveFns = []
// function watchFn(fn) {
//   reactiveFns.push(fn)
//   fn()
// }
const dep = new Depend() 
function watchFn(fn) { 
  dep.addDepend(fn)    // <-
  fn()
}

watchFn(function foo() { 
  console.log("foo:" + obj.name)
})

watchFn(function bar() {
  console.log('bar:' + obj.name)
})

// reactiveFns.forEach(fn => fn())
console.log('obj 的 name 发生了变化-----')
obj.name = 'why'
dep.notify() // <-  一旦改了属性, 就调 notify 
```
有个明显缺点, 当某一个属性发生变化的时候, 每次需要自己调用 `dep.notify()`

所以要实现**自动监听**某一个属性的变化

* 方案1: `Object.defineProperty()`
* 方案2: `new Proxy()`
### 监听对象属性的变化
* 方式一：通过 `Object.defineProperty`的方式（vue2采用的方式）
* 方式二：通过 `new Proxy` 的方式（vue3采用的方式）

使用 `Object.defineProperty()` 方式来监听
```js
// 封装 一个 类
class Depend {
  constructor() {
    this.reactiveFns = []
  }
  addDepend(fn) {
    this.reactiveFns.push(fn)
  }
  notify() {
    this.reactiveFns.forEach(fn => fn())
  }
}

const obj = {
  name: 'frank',
  age:18
}

const dep = new Depend()
function watchFn(fn) { 
  dep.addDepend(fn)    // <-
  fn()
}

// 对 obj 进行遍历, 使用 Object.defineProperty() 对 obj 每个 key 进行劫持(set)
Object.keys(obj).forEach(key => {
  let value = obj[key]

  Object.defineProperty(obj, key, {
    set: function (newValue) {
      value = newValue
      dep.notify() // 属性发生变化的时候, 之前手机的依赖全部执行一次
    },
    get: function () {
      return value
    }
  })
})

watchFn(function foo() { 
  console.log("foo:" + obj.name)
}) 

watchFn(function bar() {
  console.log('bar:' + obj.name)
})

obj.name = 'why'
// dep.notify()  这里没必要手动调用
```
### 自动收集依赖
