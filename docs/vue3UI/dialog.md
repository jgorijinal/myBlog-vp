# Dialog 对话框组件
## 需求与API设计
需求:
* 点击后弹出
* 用 v-model 控制( true 时显示)
* 有半透明遮罩层 mask
* 点击遮罩层是否关闭 mask-closable
* 是有 右上角关闭 按钮  closable 
* 有标题  (使用了具名插槽 , 因为具名插槽可以写入标签或者字符串)
* 有内容  (使用了具名插槽 , 理由同上)
* 有 ok / cancel 触发事件
* ok-text 确定按钮文字
* cancel-text 取消按钮文字

API设计:
```vue
<script lang="ts" setup>
  const ok = ()=>{
    console.log('确定')
    return true          // 返回 true 类型 , 下同
  }
  const cancel = ()=>{
    console.log('取消')
    return true
  }
  const visible = ref<boolean>(false) 
</script>

<template>
  <button @click="visible = true">点击</button>
  <Dialog v-model="visible" :ok="ok" :cancel="cancel">
    <template v-slot:title>   <!-- 具名插槽 --> 
      <h1>标题</h1>
    </template>
    <h1>标题1</h1>     <!-- 默认插槽 --> 
    <h2>标题2</h2>
    <h3>标题3</h3>
  </Dialog>
</template>
```
## 基本的实现 `<script setup>`

### Teleport
注意: 最后要使用 `Teleport` 传送门把 Dialog 移到 body 下面 , 防止被其他因素遮挡
```vue
<Teleport to="body">
  .....
</Teleport>
```

使用到的知识点有 `v-model` , `.self修饰符` , `具名插槽` , `Teleport` , `Transition` 等... , 难度感觉还可以

Dialog.vue
```vue
<script lang="ts" setup>
import {defineEmits} from 'vue';
const props = defineProps({
  modelValue:{
    type:Boolean,
    required:true
  },
  okText: {
    type: String,
    default: '确定'
  },
  cancelText: {
    type: String,
    default: '取消'
  },
  closable: {
    type: Boolean,
    default: true
  },
  maskClosable: {
    type: Boolean,
    default: true
  },
  ok: {
    type: Function,
  },
  cancel: {
    type: Function,
  }
});
const emits = defineEmits(['update:modelValue'])
const close = ()=>{
  emits('update:modelValue' , !props.modelValue)
}
const maskClose = ()=>{
  if(props.maskClosable) {
    close()
  }
}

const onOk = ()=>{
  if(props.ok) {
    const status = props.ok()   // 如果返回值是 false , 就不能 close
    if(status) {                //只有返回值是true是 , 才能 close
      close()
    }
  }else{
    close()
  }
}
const onCancel = ()=>{
  if(props.cancel) {
    const status = props.cancel()
    if(status) {                //只有返回值是true是 , 才能 close
      close()                   //只有返回值是true是 , 才能 close
    }
  }else{
    close()
  }
}
</script>
<template>
  <Teleport to="body">   <!-- Teleport 传送门-->
    <Transition>     <!-- 加下舒服的动画 -->
      <template v-if="props.modelValue">
        <div class="gulu-dialog-mask"  @click.self="maskClose">   <!-- .self 只作用于自己 ,不作用用于其子元素 -->
          <div class="gulu-dialog-wrapper">
            <div class="gulu-dialog">
              <header><slot name="title" /><span v-if="closable" class="gulu-dialog-close" @click="close"></span></header>
              <main><slot/></main>
              <footer>
                <button @click="onOk">{{ props.okText }}</button>
                <button @click="onCancel">{{ props.cancelText }}</button>
              </footer>
            </div>
          </div>
        </div>
      </template>
    </Transition>
  </Teleport>
</template>

<style lang="scss">
$radius: 4px;
$border-color: #d9d9d9;
.gulu-dialog {
  background: white;
  border-radius: $radius;
  box-shadow: 0 0 3px fade_out(black, 0.5);
  min-width: 20em;
  max-width: 90%;

  &-mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: fade_out(black, 0.5);
    z-index: 10;
  }

  &-wrapper {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 11;
  }

  > header {
    padding: 12px 16px;
    border-bottom: 1px solid $border-color;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
  }

  > main {
    padding: 12px 16px;
  }

  > footer {
    border-top: 1px solid $border-color;
    padding: 12px 16px;
    text-align: right;
  }
  &-close {
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    cursor: pointer;
    &::before,
    &::after {
      content: '';
      position: absolute;
      height: 1px;
      background: black;
      width: 100%;
      top: 50%;
      left: 50%;
    }
    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
}
.v-enter-active , .v-leave-active {
  transition:all 0.3s ease;
}
.v-enter-from  ,.v-leave-to {
  opacity: 0;
}
</style>
```