##  用ref()处理响应式数据
接受一个值，将其用作内部值来返回一个响应式的、可更改的 `ref` 对象。只有一个属性 `.value` 用来指向内部的值。

```vue
<template>
  <button @click="count++">{{ count }}</button>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const count = ref(0);
    return {
      // 暴露给模板和 API 钩子的其他选项
      count,
    };
  },
  mounted() {
    console.log(this.count); // 0
  },
};
</script>
```
- **注意** : 从 `setup` 返回的 `ref` 在模板上访问时无须再在模板中为它写 `.value`。当通过 `this` 访问时也不需要写 `.value`

## 用reactive()处理响应式数据
reactive : 处理**对象**，变成响应式数据。
```js
const state = reactive({
  foo: 1,
  bar: 2
})
const fooRef = toRef(state, 'foo')    
fooRef.value++
console.log(state.foo) // 2
state.foo++
console.log(fooRef.value) // 3
```
## 模板ref
允许我们在一个特定的 `DOM` 元素或子组件实例被挂载后 ，获得对它的直接引用。
```html
<input ref="input">
```
### (1) 访问模板 ref
```vue {2,8}
<template>
  <input ref="input" />
</template>
<script>
import { ref, onMounted } from 'vue'
export default  {
  setup(){
    const input = ref(null) // 声明一个 ref 来存放该元素的引用 , 必须和模板 ref 同名
    onMounted(()=>{
      input.value.focus()
    })
    return { input }     //记得 return 出去ref
  }
}
</script>
```
注意 , 只可以在**组件挂载后**才能访问 `ref`。如果想在模板中的表达式上访问 `input`，在初次渲染时会是 `null`。这是因为在初次渲染前这个元素还压根不存在

如果想要考虑模板`ref`的变化 , 需要考虑`null`的状况
```js
watchEffect(() => {
  if (input.value) {   //存在
    input.value.focus()
  } else {
    // 此时还未挂载，或此元素已经被卸载（例如通过 v-if 控制）
  }
})
```
### (2)v-for 和 ref 配合使用
当 `ref` 在 `v-for` 中使用时，相应的 `ref` 中包含的值是一个数组，它将在元素被挂载后填充：
除了使用字符串值作名字,`ref` attribute 还可以绑定为一个函数，会在每次组件更新时都被调用。函数接受**该元素引用**作为第一个参数：
```vue{3,13}
<template>
 <ul>
   <li v-for="(item , index) of list" :ref="el => { if(el){ refList[index] = el}}"></li>
 </ul>
</template>
<script>
import { ref, onMounted } from 'vue'
export default  {
  setup(){
    const list = ref([
      /* ... */
    ])
    const refList = ref([])     //理解成是一个容器 , 然后通过 refList[index] = el 全部塞到这个容器里
    return { list , refList }
  }
}
</script>
<style lang="scss" scoped>
</style>
```
## computed()
接受一个计算函数，返回一个只读的响应式 `ref` 对象，即计算函数的返回值。它也可以接受一个带有`get`和 `set` 函数的对象来创建一个可写的 `ref` 对象。

创建一个**只读**的计算属性 `ref`：
```js
<script>
import {computed, ref} from "vue";

export default {
  setup() {
    const count = ref(1)
    const plusOne = computed(() => {
      return count.value + 1
    })
    console.log(plusOne.value)  // 2
    console.log(count.value)    // 1
  }
};
</script>
```
创建一个**可写**的计算属性 `ref`：
```js
<script>
import {computed, ref} from "vue";

export default {
  setup(){
    const count = ref(1)
   const plusOne = computed({
     get(){
       return count.value + 1
     },
     set(value){
        count.value  = value - 1
     }
   })
    console.log(plusOne.value)  //2
    plusOne.value = 10
    console.log(count.value);   //1
    console.log(plusOne.value);   //10
  }
};
</script>
```

## watch() 
监视一个或多个数据源，并在数据源更改时调用回调函数 , `Watch ()`在默认情况下是**惰性**的——也就是说，只有在监视数据更改时才调用回调。

1. **第一个参数**可以是
* return一个值的getter函数
* ref
* reactive 对象
2. **第二个参数**是回调
3. **第三个参数**是选项对象
* `immediate` : watcher创建时直接触发回调. 这个时候旧值是`undefined`
* `deep`:  深度监听， 不论对象被嵌套多深 , 该回调会在任何被侦听的对象的 property 改变时被调用
 

> **与 `watchEffect`作对比 , `watch`允许我们**
* 惰性地执行副作用;
* 更具体地说明哪个状态下应该触发回调运行;
* 可访问数据的旧值和新值。

例:
```vue
<template>
 {{num}}
  <button @click="add">+1</button>
</template>
<script>
import {ref, watch} from "vue";

export default  {
  setup(){
    const num = ref(0)
    const add = ()=>{
      num.value += 1
    }
    watch(num , (newValue)=>{
      if(newValue > 10) {
        console.log('太长了')
      }
    } , { immediate:true })
    return {num , add}
  }
}
</script>
```

## watchEffect()
立即运行函数 ，并在依赖项发生更改时重新运行该函数。 

1. 第一个参数是要运行的函数。函数接收一个可用于注册清理回调的函数。清理回调将在下次重新运行效果之前调用，并且可以用于清除无效的副作用，例如挂起的异步请求(参见下面的例子)。

2. 第二个参数是一个可选的 options 对象，可用于调整效果的刷新时间或调试效果的依赖项。

3. 返回值是一个函数，可以调用该函数来停止该效果再次运行。

例子
```js
const count = ref(0)

watchEffect(() => console.log(count.value))  
// -> logs 0  会立即执行

count.value++
// -> logs 1 依赖项变化时执行函数
```
清理副作用
```js
watchEffect(async (onCleanup) => {
  const { response, cancel } = doAsyncWork(id.value)
  // id变化时`cancel`会执行
  // 这之前的等待请求将被取消
  // 如果还没有完成的话
  onCleanup(cancel)
  data.value = await response
})
```
停止watcher
```js
const stop = watchEffect(() => {})
//不在需要watcher时
stop()
```
**技巧**:
`watchEffect`会在挂载前执行 , 所以访问`Dom`的时候会报错 , 如果**不想让挂载前**执行
可以
```js
onMounted( ()=>{  
  watchEffect( ()=>{
    ....do something...
  })
})
```

## setup()
### (1)访问 Props
setup 函数的第一个参数是组件的 props, 是响应式的，并且会在传入新的 props 时同步更新。
```js
export default {
  props: {
    title: String
  },
  setup(props) {
    console.log(props.title)  //props.xxx获取
  }
}
```
### (2)toRef() , toRefs

**注意** , 如果从 `props` 对象上`解构`，被解构的变量**将会丢失响应性**,因此推荐通过 `props.xxx` 的形式来使用其中的属性。

如果你确实需要从 `props` 上解构，或者想要将某个 `prop` 传入到一个外部函数中但想保持响应性，那么你可以使用 `toRefs()` `toRef()` 这两个工具 API：
```js
import { toRefs } from 'vue'

export default {
  setup(props) {
    // 将 `props` 转为一个其中全是 ref 的对象，然后解构
    const { title } = toRefs(props)
    // `title` 是一个追踪着 `props.title` 的 ref
    console.log(title.value)
    // 或者，将 `props` 的单个属性转为一个 ref
    const title = toRef(props, 'title')

    const obj = reactive({name:'Eren'})
    return {...toRefs(obj)}   //善用 ... 把obj的属性都变成响应式
  }
}
```
### (3)context 上下文
传入 `setup` 函数的第二个参数是一个 `Setup` 上下文 对象。上下文对象上暴露了其他一些在 `setup` 之中很有用的值：
```js
export default {
  setup(props, context) {
  // Attribute (⾮响应式对象)
  console.log(context.attrs)
  // 插槽 (⾮响应式对象)
  console.log(context.slots)
  // 触发事件 (⽅法)
  console.log(context.emit)
  }
}
```
#### 暴露公共属性  - expose
`expose` 这个函数可以用于在父组件中通过**模板 ref**访问本组件时，显式地限制所暴露的属性：
```js
export default {
  setup(props, { expose }) {
    // expose(空) 这样会使得该组件处于 “关闭状态”
    // 即不向父组件暴露任何东西
    expose()

    const publicCount = ref(0)
    const privateCount = ref(0)
    expose( { count: publicCount } ) // 有选择地暴露局部状态
  }
}
```
####  attrs属性绑定和 slots
1. **context.attrs**
* 默认外面传的所有属性都绑定到**根元素**  (Vue2 也一样)
* 使用 `inheritAttrs: false` 可以取消默认绑定 
* 使用 `this.$attrs` 或者 `context.attrs` 获取所有属性
* 在模板里使用 `v-bind="$attrs"` 批量绑定属性
* 使用 `const {size, level, ...xxx} = context.attrs` 将属性解构分开 , 在一个个绑定到模板中

2. **context.slots**
* `const defaults = context.slots.default()`可得到默认的插槽 , defaults是包含**对象**的**数组**
```html
<component :is="defaults[0]"></component> 
<!--然后可这么展示 , 实际要配合配合v-for-->
```
**动态组件**, 在上面的例子中，被传给 `:is` 的值可以是以下几种：

* 被注册的组件名
* setup里return出的组件对象

##  依赖注入 provide / inject 
要为组件后代供给数据，需要使用到 `provide(/* 注入名 */ , /* 值 */ )` 函数

在爷组件中 :
```vue
<script>
import { provide, ref } from "vue";
export default {
  setup() {
    const visible = ref(false);
    provide("注入名", visible);   // provide 跟 ref 配合使用  基本语法: provide('注入名' , '注入值')
  },
};
</script>
```
在子组件中 :
```vue
<script>
import { inject, ref } from "vue";
export default {
  setup() {
    const visible = inject < Ref < Boolean > >("注入名");   
      //如果供给的值是一个 ref,注入进来的就是它'本身',而不会自动解包。这使得被注入的组件保持了和供给者的响应性链接。
    const toggle = () => {
      //生命了toggle函数 , 点击时让 visible 取反
      visible.value = !visible.value;   
      //注意! 读ref要用value , React里面是current
    };
    return { toggle , visible };
  },
};
</script>
```

