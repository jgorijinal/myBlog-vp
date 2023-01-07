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
