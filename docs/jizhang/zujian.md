# 封装业务组件
## Button 按钮 组件
![图片](../.vuepress/public/images/ebu1.png)

细节: 
* **$attrs** 的( **类名,事件**.. )的绑定 : 将外部传过来的 `attrs` 手动分配到的指定的标签上(`attrs` 包括类名以及事件...)
* 如果用户想要让**此 button 组件撑满屏幕**, 使用时可以在**组件上**添加 `display:block`(实现组件时已默认将原生 button 的宽度设置为 `100%`)
```vue
<template>
  <!--外面包了一层 div, 并且把 attrs 绑定到跟标签上(但 Vue 会默认绑定到根标签上)-->
  <div :class="$attrs" class="eren-button-wrapper">  
    <button class="eren-button">
    <slot></slot>
  </button>
  </div>
</template>
<script lang="ts" setup>
import { useAttrs } from 'vue'
const attrs = useAttrs()
console.log(attrs)
</script>
<style lang="scss" scoped>
$btn-bg:#3465e0;
$btn-bg-hover:#0433ab;
$btn-fs:18px;
.eren-button-wrapper{
  /*如果用户想要让此组件撑满屏幕, 会加上 display:block 覆盖 , 并且因为下面的 width:100% 撑满屏幕*/
  display: inline-block;
  .eren-button{
    /* 默认加上了width:100 */
    width: 100%;
    height: 48px;
    border:1px solid $btn-bg;
    padding:8px 16px; 
    font-size:$btn-fs;
    color:white;
    background-color:$btn-bg;
    border-radius:4px;
    transition: all 0.3s ease;
    &:hover,&:active {
      background-color:$btn-bg-hover;
      border:1px solid $btn-bg-hover;
    }
  }
}
</style>
```
使用 button 组件
```vue
<template>
  <div>
    <e-button class="button" @click="handleClick">开始记账</e-button>
  </div>
</template>
<script setup lang="ts">
import EButton from '../components/button.vue'
const handleClick = () => {
  console.log('hi')
}
</script>
<style lang="scss" scoped>
.button {
  display: block;
  margin:10px;
}
</style>
```
打出来此组件接受的 `attrs` 看一看:
![图片](../.vuepress/public/images/attrs1.png)
## NavBar 导航栏 组件
![图片](../.vuepress/public/images/enb1.png)

需求:
* 文字(左, 中, 有) 要通过 **props 传递**(`left-text`, `title` , `right-text` )
* icon图标 通过**插槽**让用户自定义
* 并且点击左则区域 / 右侧区域触发**点击事件**, 组件监听的事件名为 `@click-left` 和 `@click-right` 

实现需要注意细节:
* 组件实现思路借鉴了Vant UI 的 [navBar 组件](https://vant-ui.github.io/vant/v2/#/zh-CN/nav-bar#ji-chu-yong-fa)
* 点击时需要触发事件, 所以需要适当扩大区域面积给用户使用(用的时一个css小技巧 绝对定位: left,top,bottom:0 沾满整个区域)

```vue
<template>
  <div class="eren-navBar-content">
    <!--左侧区域-->
    <div class="eren-navBar-left" @click="clickLeft">
      <span class="eren-navBar-left-icon">
        <slot name="leftIcon"></slot>
      </span>
      <span class="eren-navBar-left-text" v-if="leftText">
        {{ leftText }}
      </span>
    </div>
    <!--中间标题-->
    <span class="eren-navBar-title" v-if="title">{{ title }}</span>
    <!--右侧区域-->
    <div class="eren-navBar-right" @click="clickRight">
      <span class="eren-navBar-left-text" v-if="rightText">
        {{ rightText }}
      </span>
      <span class="eren-navBar-right-icon">
        <slot name="rightIcon"></slot>
      </span>
    </div>
  </div>
</template>
<script lang="ts" setup>
export interface NavBarProps {
  leftText?: string
  title?: string
  rightText?:string
}
const props = defineProps<NavBarProps>()

const emits = defineEmits(['clickLeft','clickRight'])
// 点击左侧区域
const clickLeft = () => {
  emits('clickLeft')
}
// 点击右侧区域
const clickRight = () => {
  emits('clickRight')
}
</script>
<style lang="scss" scoped>
.eren-navBar-content {
  width:100%;
  background-image: linear-gradient(to bottom, #002ea6, #3667e3);
  color:white;
  position:relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height:46px;
  .eren-navBar-left{
    position:absolute;
    // 使用 绝对定位 撑满区域(下面三行), 并加上 左右padding 增加区域宽度
    left: 0;
    top: 0;
    bottom: 0;
    padding:0 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    &-icon {
      margin-right:4px;
    }
    &-text {
      
    }
  }
  .eren-navBar-title{
    
  }
  .eren-navBar-right{
    position:absolute;
    // 使用 绝对定位 撑满区域(下面三行), 并加上 左右padding 增加区域宽度
    right:0;
    top: 0;
    bottom: 0;
    padding:0 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    &-icon {
      margin-left:4px;
    }
    &-text {

    }
  }
}
</style>
```
使用该 navBar 组件
```vue
<template>
    <nav-bar left-text="左边文字" title="中间标题" right-text="右边文字" 
      @click-left="clickLeftHandle" @click-right="clickRightHandle">
      <template #leftIcon>
        左边Icon
      </template>
      <template #rightIcon>
        右边Icon
      </template>
    </nav-bar>
</template>
<script setup lang="ts">
import navBar from '../components/navBar.vue'

const clickLeftHandle = () => {
  console.log('点击了 navBar的左侧区域')
}
const clickRightHandle = () => {
  console.log('点击了 navBar的右侧区域')
}
</script>
```
## Overlay 遮罩层 组件
![图片](../.vuepress/public/images/ol1.png)

细节:
* 遮罩层和左边区域都使用 position:fixed 定位, 并用 z-index 调整层次
* 内容区域使用插槽让用户自定义内容
* 其组件的 显示/隐藏 通过 props 传递过来的 `visible` 属性所控制
```vue
<template>
  <transition name="fade">
    <div v-if="visible" class="eren-overlay">
    <!--遮罩层-->
    <div class="eren-overlay-mask" @click="clickOverlay"></div> 
    <!--内容-->
    <div class="eren-overlay-content">
      <section class="eren-overlay-content-login">
          <span class="text-login1">未登录用户</span>
          <span class="text-login2">点击此处登录</span> 
      </section>
      <!--插槽-->
        <slot></slot>
    </div>
  </div>
  </transition>
</template>
<script setup lang="ts">
export interface OverlayProps {
  visible:boolean
}
const props = defineProps<OverlayProps>()

const emits = defineEmits(['closeOverlay'])
// 点击了遮罩层区域
const clickOverlay = () => {
  emits('closeOverlay')
}
</script>
<style lang="scss" scoped>
.eren-overlay {
  &-mask {
    // 绝对定位
    position:fixed;
    background-color: gray;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    opacity: 0.4 ;
    z-index:8;
  }
  &-content {
    // 绝对定位
    position:fixed;
    left: 0;
    top: 0;
    width:14em;
    background-color: white;
    height: 100%;
    z-index:16;
    &-login {
      background-color: #0c3bb4;
      color:white;
      padding:26px;
      display: flex;
      flex-direction: column;
      .text-login1{
        font-size:20px;
      }
      .text-login2{
        margin-top:16px;
        color:rgb(176, 172, 172);
      }
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.15s ease;
}
.fade-enter-from,.fade-leave-to {
  opacity:0;
}
</style>
```
## tabs 标签页 组件
细节: 
* 需要 两个组件 tabs.vue , tab.vue

tabs 接受 `v-model:active` , 其 `active` 的值对应 tab 组件的 `name` 属性
```js
<tabs v-model:active="activeName">
    <tab name="支出">内容 1</tab>
    <tab name="收入">内容 2</tab>
</tabs>

const activeName = ref('支出')
```
* 因为对于 tabs 组件, 里面的 tab 组件 属于是它的插槽的内容, 这就是关键点 (使用了**插槽**获取了 tab 的组件实例)
* 使用 Composition API 中的 `computed` 找到了激活的组件
* 在使用 `component 动态组件` 时必须要加上 **key**

**tabs.vue** 实现功能(没加样式)
```vue
<template>
  <div class="eren-tabs">
    <ul class="eren-tabs-tab">
      <li v-for="item in arr" 
        :key="item.props?.name" 
        class="eren-tabs-tab-name"
        :class="{'active':item.props?.name === active}"
        @click="clickTab(item)"
      >{{item.props?.name}}</li>
    </ul>
    <!--细节: 这个时候 component 动态组件必须要加上 key-->
    <component :is="activeTab" :key="activeTab.props?.name"></component>
  </div>
</template>
<script lang="ts" setup>
import { useSlots, computed } from 'vue'
import tab from './tab.vue'

const slots = useSlots()
const arr = slots.default() 

// 检查 tabs 的子元素必须是 tab 组件
arr.forEach(item => {
  if (item.type !== tab) {
    throw new Error('tabs 组件的的子元素必须要求是 tab 组件')
  }
})
const props = defineProps({
  active: {
    type:String
  }
})
const emits = defineEmits(['update:active'])

// 获取当前激活的 tab 组件实例(必须计算属性)
const activeTab = computed(() => {
  return arr.filter(tab => tab.props?.name === props.active )[0]
})
// 点击标签名
const clickTab = (item:any) => {
  emits('update:active' , item.props.name)
}
</script>
<style lang="scss" scoped>
.eren-tabs{
  .active {
     background-color: antiquewhite;
  }
}
</style>
```
tab.vue
```vue
<template>
  <div class="eren-tab">
    <slot></slot> 
  </div>
</template>
<script lang="ts" setup>
</script>
```

加了样式
```vue
<style lang="scss" scoped>
.eren-tabs{
  .active {
    transition: all 0.25s ease;
    position:relative;
    // 使用了伪元素, 实现了下面的横线 (绝对定位)
    &::after {
      content:'';
      display: block;
      position:absolute;
      bottom:0;
      left: 0;
      right:0;
      height: 4px;
      background-color: white;
    }
  }
  &-tab {
    background-color: #273c75;
    display:flex;
    font-size: 18px;
    &-name {
      color:white;
      padding:8px 16px;
      flex-grow:1;
      display:flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
```






