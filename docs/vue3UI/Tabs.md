# Tabs 标签页组件
## 需求与API
* 点击导航栏标题展示内容
* 如果`Tabs`的子标签不是`Tab`就直接报错
* 下面有横线滚动
* `props` 属性`title` 和 `name` 的 字符串要相等(因为我就是这么设计的)
```vue
<script lang="ts" setup>
import  Tabs from './Tabs.vue'
import  Tab from './Tab.vue'

import {ref} from 'vue';
const name = ref('导航1')
</script>
<template>
  <div>
    <Tabs v-model="name">
      <Tab title="导航1" name="导航1">内容1</Tab>  
      <Tab title="导航2" name="导航2">内容2</Tab>
      <Tab title="导航3" name="导航3">内容3</Tab>
    </Tabs>
  </div>
</template>
```
## 最基本的实现之 `<script setup>`
### 检查子组件的类型
```vue{5,6}
<script lang="ts" setup>
import {useSlots} from 'vue';
import Tab from './Tab.vue';

const slots = useSlots();
const defaults = slots.default(); 

defaults.forEach((c, index) => {
  if (c.type !== Tab) {              // 检查每个对象的 type 是否是 Tab !!
    throw new Error('Tabs的子标签必须是Tab');
  }
});
</script>
<template>
  <div>
    <component v-for="(c,index) in defaults" :key="index" :is="c"/>
  </div>
</template>
```
### 渲染Tabs的插槽
```vue
<script lang="ts" setup>
import {useSlots} from 'vue';
import Tab from './Tab.vue';

const slots = useSlots();
const defaults = slots.default();
defaults.forEach((c, index) => {
  if (c.type !== Tab) {              // 检查每个对象的 type !!
    throw new Error('Tabs的子标签必须是Tab');
  }
});

const titles = defaults.map((c)=>{    // 得到数组 ['导航1' , '导航2' , '导航3']
  return c.props.title              
})
</script>
<template>
  <div class="gulu-tabs">
    <ul class="gulu-tabs-navs">
        <li v-for="(title , index) in titles" :key="index">{{title}}</li>
    </ul>
    <div class="gulu-tabs-content">
      <component v-for="(c,index) in defaults" :key="index" :is="c"/>
    </div>
  </div>
</template>
<style lang="scss" scoped>
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.gulu-tabs {
  &-navs {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    > li {
      display: inline-block;
      padding: 8px 16px;
      cursor: pointer;
      &.selected {         // 选中时class中会添加 selected 类名
        color: $blue;
      }
    }
  }
  &-content {
    padding: 8px 16px;
  }
}
</style>
```
### 显示被选中的导航
```vue{23-27,29-31,36,39,5-11}
<script lang="ts" setup>
import {computed, useSlots} from 'vue';
import Tab from './Tab.vue';

const props = defineProps({
  modelValue:{
    type:String,
    required:true
  }
})
const emits = defineEmits(['update:modelValue'])
const slots = useSlots();
const defaults = slots.default();
defaults.forEach((c, index) => {
  if (c.type !== Tab) {              // 检查每个对象的 type !!
    throw new Error('Tabs的子标签必须是Tab');
  }
});

const titles = defaults.map((c) => {    // ['导航1' , '导航2' , '导航3']
  return c.props.title;
});
const currentTag = computed(()=>{
  return defaults.filter((c)=>{   // 选中的导航
    return c.props.name ===  props.modelValue
  })[0]
 })
//console.log(currentTag)
const select = (title)=>{
  emits('update:modelValue' , title)
}
</script>
<template>
  <div class="gulu-tabs">
    <ul class="gulu-tabs-navs">
      <li v-for="(title , index) in titles" :key="index" @click="select(title)" :class="{selected:title === props.modelValue}">{{ title }}</li>
    </ul>
    <div class="gulu-tabs-content">
      <component :is="currentTag" :key="props.modelValue" />
    </div>
  </div>
</template>
```


