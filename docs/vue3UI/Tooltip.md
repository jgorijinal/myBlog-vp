# Tooltip 文字提示组件
## 需求与API
* 触发方式有两种`click`和`hover` , 默认`click`
* 触发方式为`click`时 , 点击其他区域可关闭文字提示
* 可多方位提示文字, 自定义`position` 
```vue
<script lang="ts" setup>
</script> 
<template>
  <Tooltip position="top-center" trigger="click">
    <template v-slot="content">
      内容
    </template>
    <button>click (top center)</button>
  </Tooltip> 
</template>
```
## 最初的实现(有很多bug)
```vue
<script lang="ts" setup>
import {ref} from 'vue';

const props = defineProps({
  trigger: {
    type: String,
    default: 'click'
  },
  position: {
    type: String,
    default: 'top-center'
  }
});
const visible = ref<boolean>(false);
const toggle = () => {
  visible.value = !visible.value;
  // console.log('点击了');
  if (visible.value === true) {
    const eventHandler = () => {
      visible.value = false;
      // console.log('变为false');
      document.removeEventListener('click', eventHandler);   //  visible 变为 false时 removeEventListener
    };
    setTimeout(() => {
      document.addEventListener('click', eventHandler);   // 监听 document , 点击时 visible = false
    }, 0);
  }
};
</script>
<template>
  <div class="tooltip">
    <div class="tooltip-content" v-if="visible" @click.stop>  <!-- 阻止冒泡 --> 
      <slot name="content"/>
    </div>
    <span class="tooltip-action" @click="toggle">
      <slot/>
    </span>
  </div>
</template>
<style lang="scss" scoped>
.tooltip {
  display: inline-block;
  position: relative;
  &-content {
    position: absolute;
    left: 0;
    bottom: 100%;
    border: 1px solid #585e6b;
    border-radius: 6px;
    background: #585e6b;
    padding: 8px;
    color: #ffffff;
  }
  &-action {
    display: inline-block;
  }
}
</style>
```
