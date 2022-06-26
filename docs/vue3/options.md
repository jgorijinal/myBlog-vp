# Options API
## 组件实例
### $refs
某些情况下 , 我们在组件中想要获取到**元素对象**或者**子组件实例**
* Vue 开发中不推荐进行 DOM 操作
* 可以在**元素**或者**组件**绑定一个`ref`的`attribute`属性
```vue
<template>
  <div>
    <h1 ref="title"></h1>
    <comp ref="comp"></comp>
  </div>
</template>

<script>
import comp from './components/comp.vue'
export default {
  components:{comp},
  mounted() {
    //访问元素
    console.log(this.$refs.title)

    // 访问组件实例
    console.log(this.$refs.comp.$el)
    // 访问组件实例的数据, 方法
    console.log(this.$refs.comp.message)
    console.log(this.$refs.comp.sayHello())
  }
}
</script>
```
### $parent 和 $root
* $parent : 访问父元素, 没有就 null
* $root: 访问根元素

**注意**: Vue3 **移除了 `$children`的属性** , 所以不可以使用了
### $el
* 该组件实例的根节点

* `$el` 直到组件挂载完成 `(mounted)` 之前都会是 `undefined`
### $attrs

#### 非props的attribute
* 当我们**传递给一个组件某个属性** , 但是该属性并没有定义对应的`props`或者`emits`, 就称之为**非props的attribute**
* 常见的包括**class , style , id属性等**
#### attribute 继承
* 当**组件有单个根节点时** , **非props的attribute将自动添加到根节点的Attribute**中

如果**不希望组建的根元素继承attribute**,可以在组件中设置 **`inheritAttrs:false`**
* 禁用attribute继承的**常见情况**是需要**将attribute应用在根元素之外的其他元素上**
* 可以**通过`$attrs`来访问所有的非props的attribute**

#### 多个根节点的attribute
* **多个根节点的attribute如果没有显示地绑定**, 那么会报警告 , **所以必须要手动地指定具体要绑到哪一个元素**
```vue
<template>
  <div :class="$attrs.class"></div>
  <div>多个根节点</div>
  <div>多个根节点</div>
</template>
```

