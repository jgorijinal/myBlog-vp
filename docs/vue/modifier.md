# Vue中常用的修饰符
## 1. 修饰符是什么?
修饰符是由点开头的指令后缀来表示的。 在`Vue`中，修饰符处理了许多`DOM`事件的细节，让我们不再需要花大量的时间去处理这些烦恼的事情，而能有更多的精力专注于程序的逻辑处理

vue中修饰符分为以下五种：
* 事件修饰符
* 表单修饰符
* 按键修饰符
* 键值修饰符
* v-bind修饰符

## 2. 修饰符的作用
### 事件修饰符
#### .stop , .prevent
* `.prevent` 对应 `event.preventDefault()` , 可阻止默认的点击事件执行
* `.stop` 对应 `event.stopPropagation()` , 可以阻止事件继续传播

```vue
<!-- 阻止单击事件继续传播 -->
<a  @click.stop="do"></a>

<!-- 提交事件不再重载页面 -->
<form  @submit.prevent="onSubmit"></form>
<a href="http://www.baidu.com" @click.prevent="go"></a>

<!-- 修饰符可以串联 -->
<a  @click.stop.prevent="do"></a>

<!-- 只有修饰符 -->
<form  @submit.prevent></form>

<!-- 添加事件监听器时使用事件捕获模式 -->
<!-- 即内部元素触发的事件先在此处理，然后才交由内部元素进行处理 -->
<div  @click.capture="do">...</div>
```
#### .passive
告诉浏览器,"你不用对我的事件处理函数进行任何的判断 , 我这里面绝对不会拦截默认行为!" 意思就是让浏览器忽略对默认行为的检测提高性能 , 这个 `.passive` 修饰符尤其能够提升移动端的性能
```html
<div v-on:scroll.passive="onScroll">...</div>
```
### v-bind修饰符
#### .sync
子组件不能随便改父组件传来的的`props`, 这时可用`$emit`触发一个事件, 通知父组件自己改自己属性
```js
this.$emit('update:title', newTitle)
```

父组件通过`$event`接受了子组件传过来的数据
```html
<text-document
  :title="doc.title"
  @update:title="doc.title = $event"  />   <!-- 记得以 update:myPropName 的模式触发事件 -->
></text-document>
```

可用`.sync`修饰符简单缩写
```html
<text-document :title.sync="doc.title"></text-document>
```

### 按键修饰符
`Vue` 允许为 `v-on` 在监听键盘事件时添加按键修饰符：
```vue
<template>
  <div>按键事件</div>
  <!--ctrl alt shift meta -->
  <!--enter esc tab space delete up down left right -->
  <input type="text" @keyup.enter="key">
</template>
<script>
export default {
  methods:{
    key(event){
      console.log(event.key)     //在input框里点击enter键控制台回打出 Enter
    }
  }
}
</script>
```

#### .exact 修饰符
`.exact` 修饰符允许你控制由精确的系统修饰符组合触发的事件。
```html
<!-- 即使 Alt 或 Shift 被一同按下时也会触发 -->
<button v-on:click.ctrl="onClick">A</button>

<!-- 有且只有 Ctrl 被按下的时候才触发 -->
<button v-on:click.ctrl.exact="onCtrlClick">A</button>

<!-- 没有任何系统修饰符被按下的时候才触发 -->
<button v-on:click.exact="onClick">A</button>
```
#### 鼠标按钮修饰符
```html
<button v-on:click.left="Click1">A</button>
<button v-on:click.middle="Click2">A</button>
<button v-on:click.right="Click3">A</button>
```