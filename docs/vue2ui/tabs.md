# Tabs 标签页

## 需求与 API 设计

- 点击时展现对应内容
- `g-tabs`设置`selected`的 props 初始选中内容 , 每个元素要加上对应的 `name`
- 下面有横线平滑移动
- 标签页的方向(横向 , 纵向)
- `g-tabs-head`里需要一些额外操作的话, 可以用具名插槽搞定

```html
<template>
  <g-tabs selected.sync="selectedTab">
    <!-- 等于 -->
    <!-- <g-tabs selected.sync="sports" @update:selected="selectedTab = $event">   -->
    <g-tabs-head>
      <g-tabs-item name="women">美女</g-tabs-item>
      <g-tabs-item name="finance">财经</g-tabs-item>
      <g-tabs-item name="sports">运动</g-tabs-item>
      <template v-slot:actions>
        <button>额外的操作</button>
      </template>
    </g-tabs-head>
    <g-tabs-body>
      <g-tabs-pane name="women">美女相关</g-tabs-pane>
      <g-tabs-pane name="finance">财经相关</g-tabs-pane>
      <g-tabs-pane name="sports">运动相关</g-tabs-pane>
    </g-tabs-body>
  </g-tabs>
</template>
<script>
  export default {
    data() {
      return {
        selectedTab: "sports",
      };
    },
  };
</script>
```

## 基本的实现

思路:  *`tabs` 切换时要触发`update:selected`事件 , 通知 `g-tabs`自己改值
* `item` 和 `pane` 是任意组件关系 , 需要用 `eventBus`进行组件通信                                            
* 在`tabs`里 , 要触发`this.eventBus.$emit('update:selected',this.selected)` 要传一开始的选中的`this.selected` 到 `item` 和 `pane`
* 在`tabs-item`里, 触发`this.eventBus.$emit('update:selected',this.name)`  (为了判断哪个`item`被选中, 哪个`item`没被选中)
* 在`tabs-item`里同时要 监听一开始传过来的`this.selected` 和点击 `tab-item` 时触发的 `this.name` ,  判断是否跟`this.name`值相同 , 然后用`data`属性或`class`或v--if ,  对css进行更改
* `tabs-pane` 同理 (因为`pane`也`props`传入了`name`)
### provide / inject 依赖注入
在 `g-tabs` 把 `eventBus` 提供给后代

g-tabs.vue
```vue
<template>
  <div>
    <slot></slot>
  </div>
</template>
<script>
import Vue from "vue";
export default {
  props:{
    selected:{
      type:String,
      required:true
    }
  },
  data(){
    return {
      eventBus : new Vue()
    }
  },
  provide(){
    return {
      eventBus: this.eventBus         // provide
    }
  }

}
</script>
<style lang="scss" scoped>

</style>
```
g-Tabs-item.vue
```vue
<template>
  <div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  inject:['eventBus'],  //inject
  mounted(){ 
    console.log(this.eventBus) 
  }
}
</script>
<style lang="scss" scoped>
</style>
```
### 用 eventBus 实现 tab 切换
g-tabs.vue
```vue
<template>
  <div>
    <slot></slot>
  </div>
</template>
<script>
import Vue from "vue";
export default {
  props:{
    selected:{
      type:String,
      required:true
    }
  },
  data(){
    return {
      eventBus : new Vue()
    }
  },
  provide(){
    return {
      eventBus: this.eventBus
    }
  },
  mounted(){
    this.eventBus.$emit('update:tab' , this.selected)

    this.eventBus.$on('update:tab' , (name)=>{           // tab 被切换时 , 通知外面
      this.$emit('update:selected' , name)
    })
  }
}
</script>
<style lang="scss" scoped>

</style>
```
g-tabs-item.vue
```vue
<template>
  <div @click="onClick"  :class="{active:active}">
    <slot></slot>
  </div>
</template>
<script>
export default {
  inject:['eventBus'],
  data(){
    return {
      active:false
    }
  },
  props:{
    name:{
      type:String,
      required:true
    }
  },
  mounted(){
    this.eventBus.$on('update:tab' , (name)=>{
      if(name === this.name){
        this.active = true
      }else {
        this.active = false
      }
    })
  },
  methods:{
    onClick(){
      this.eventBus.$emit('update:tab' , this.name)
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
```
g-tabs-pane.vue
```vue
<template>
  <div v-if="active">
  <slot></slot>
  </div>
</template>
<script>
export default {
  inject:['eventBus'],
  props:{
    name:{
      type:String,
      required:true
    }
  },
  data(){
    return {
      active:false
    }
  },
  mounted() {
    this.eventBus.$on('update:tab' , (name)=>{
      if(name === this.name){
        this.active = true
      }else {
        this.active = false
      }
    })
  }
}
</script>
<style lang="scss" scoped>

</style>
```


