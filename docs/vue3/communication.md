# 组件通信

## 非父子组件通信
除了**父子组件通信**之外, 还会有**非父子组件之间的通信**

主**要有两种方法
* **provide / inject**
* **Mitt全局事件总线**

### provide / inject 依赖注入

![图片](../.vuepress/public/images/provideInject.png)
#### provide 
为组件后代供给数据
```js
export default {
  provide: {
    message: 'hello!'
  }
}
```
如果要提供组件内 **data()定义** 的数,要用**函数**的形式 , 但**这不会保持响应性**
```js{7-12}
export default {
  data() {
    return {
      message: 'hello!'
    }
  },
  provide() {
    // 使用函数的形式，可以访问到 `this`
    return {
      message: this.message
    }
  }
}
```
为保证`provide`和`inject`的**响应性**链接, **需要使用`computed()`属性**
```vue{14}
<script>
import comp from './composition/comp.vue'
import {computed} from "vue";

export default {
  components: {comp},
  data() {
    return {
      message:'message'
    }
  },
  provide() {
    return {
      length: computed(()=>this.message)
    }
  }
}
</script>
```
#### inject
要注入祖先组件提供的数据 , 需要用`inject`
```js
export default {
  inject:['message'].
  created(){
    console.log(this.message)
  }
}
```
### 全局事件总线mitt库
Vue3 从实例中**移除了**`$on`,'$off','$once'方法 , **如果想使用全局事件总线, 要通过第三方的库:**
* Vue3官方有推荐的一些库, 例如 `mitt` 或 `tiny-emitter`;
* 先主要了解一下 [mitt库](https://github.com/developit/mitt) 的使用;

安装
```sh
npm install --save mitt
```
utils/eventBus.js
```js
import mitt from 'mitt'

const emitter  = mitt()

export default emitter
```

```js
import emitter from "../utils/eventBus";

emitter.emit('eventName' , {name:'frank',age:18})

emitter.on('eventName', (data)=>{
  console.log(data)
})

//监听所有的事件 *
emitter.on('*', (type , data)=>{
  console.log(type , data)
})
```

#### Mitt 取消监听
在某些情况下 , **可能希望取消掉之前注册的函数监听**
```js
import emitter from "../utils/eventBus";

// 定义一个函数
function onFoo(){}
emitter.on('foo',onFoo)   // 监听
emitter.off('foo',onFoo)  // 取消监听
```

