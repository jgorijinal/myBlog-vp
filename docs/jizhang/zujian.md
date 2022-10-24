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
* 想要缓存组件, 使用 `keep-alive`, 套在 **component 动态组件**外面
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
    <keep-alive>
      <component :is="activeTab" :key="activeTab.props?.name"></component>
    <keep-alive>>
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
## InputPad 数字按键 组件
![图片](../.vuepress/public/images/ipad1.png)
### 初步实现布局
```vue
<template>
  <div class="inputPad">
    <div class="notes">
      <span class="date">
        <img :src="dateSvg" alt="">
        <span class="dateText">2025-04-12</span>
      </span>
      <span class="amount">123456</span>
    </div>
    <div class="pad">
      <button v-for="button in buttons" @click="button.clickFn">{{button.text}}</button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import dateSvg from '../assets/icons/date.svg'
// 数字按键规则, v-for 循环显示
const buttons = [
  { text: '1', clickFn: () => { } },
  { text: '2', clickFn: () => { } },
  { text: '3', clickFn: () => { } },
  { text: 'del', clickFn: () => { } },
  { text: '4', clickFn: () => { } },
  { text: '5', clickFn: () => { } },
  { text: '6', clickFn: () => { } },
  { text: '+', clickFn: () => { } },
  { text: '7', clickFn: () => { } },
  { text: '8', clickFn: () => { } },
  { text: '9', clickFn: () => { } },
  { text: '-', clickFn: () => { } },
  { text: '.', clickFn: () => { } },
  { text: '0', clickFn: () => { } },
  { text: '清空', clickFn: () => { } },
  { text: '提交', clickFn: () => { } },
]
</script>
<style lang="scss" scoped>
.inputPad{
  .notes {
    display: flex;
    padding:8px;
    border-top:1px solid rgb(225, 224, 224); ;
    justify-content: space-between;
    .date {
      display: flex;
      img{
      width:30px;
      height:30px;
      margin-right:8px;
    }
    .dateText{
      display: flex;
      align-items: center;
      color:gray;
      font-size:14px;
    }
    }
    .amount {
      display: flex;
      align-items: center;
      color:#00b894;
      font-size:22px;
    }
  }
  .pad{
    font-size: 18px;
    display: flex;
    flex-wrap: wrap;
    border-top:1px solid rgb(225, 224, 224);
    button {
      border:none;
      border-right:1px solid rgb(225, 224, 224);
      border-bottom:1px solid rgb(225, 224, 224);
      padding:16px;
      width:25%;
      color:#636e72;
      background-color:white;
      transition:all 0.25s ease;
      &:nth-child(4n) {
        border-right:none;
      }
      &:hover,&:active {
        background-color: #feedb0;
        border-right:1px solid #feedb0;
      border-bottom:1px solid #feedb0;
      }
    }
  }
}
</style>
```
### Vant 引入日期选择器 和 弹出层 组件
![图片](../.vuepress/public/images/riqi1.png)

[Vant 安装](https://vant-contrib.gitee.io/vant/#/zh-CN/quickstart#tong-guo-npm-an-zhuang)
[Vant 按需引入组件方法](https://vant-contrib.gitee.io/vant/#/zh-CN/quickstart#fang-fa-er.-an-xu-yin-ru-zu-jian-yang-shi)

utils/formatDate.js 先封装日期格式转换工具函数
```shell
npm i dayjs
```
```ts
import dayjs from 'dayjs'

// 加载中文语言包
import 'dayjs/locale/zh-cn'

// 配置使用中文语言包
dayjs.locale('zh-cn')

const DATE_TIME_FORMAT = "YYYY-MM-DD"

export default function formateDate(date:Date,format:string = DATE_TIME_FORMAT) {
  return dayjs(date).format(format)
}
```

使用 日期选择器 和 弹出层 组件 
```vue{4,13-24}
<template>
  <div class="inputPad">
    <div class="notes">
      <span class="date" @click="popupVisible = true">
        <img :src="dateSvg" alt="">
        <span class="dateText">{{formatDate(currentDate)}}</span>
      </span>
      <span class="amount">123456</span>
    </div>
    <div class="pad">
      <button v-for="button in buttons" @click="button.clickFn">{{button.text}}</button>
    </div>
    <!--弹出层 - 日期选择器-->
    <van-popup v-model:show="popupVisible" position="bottom">
      <van-datetime-picker
          :value="currentDate"
          type="date"
          title="请选择年月日"
          :min-date="minDate"
          :max-date="maxDate"
          @confirm = "clickConfirmHandle"
          @cancel = "clickCancelHandle"
      />
    </van-popup>
  </div>
</template>
<script lang="ts" setup>
import dateSvg from '../assets/icons/date.svg'
import { ref } from 'vue';
import formatDate from '../utils/formatDate'
const buttons = [
  { text: '1', clickFn: () => { } },
  { text: '2', clickFn: () => { } },
  { text: '3', clickFn: () => { } },
  ...
  ...
]
// 弹出层
const popupVisible = ref(false)
// 选择的日期
const currentDate = ref(new Date(2021, 0, 17));
const minDate = new Date(2020, 0, 1)
const maxDate = new Date(2025, 10, 1)

// 日期选择 - 点击确认
const clickConfirmHandle = (date:Date) => {
  console.log(date)
  currentDate.value = date
  popupVisible.value = false
}
// 日期选择 - 点击取消
const clickCancelHandle = () => {
  popupVisible.value = false
}
</script>
```
### 改数字按键的需求 并且完成数字检查
![图片](../.vuepress/public/images/sz.png)

布局细节:
* 使用 `grid` 布局
![图片](../.vuepress/public/images/sz1.png)

数字检查细节:
* 一开始就有 `0`
* 一开始`0`之后不能再连续输入 `0`, 但小数点之后的 `0`可以重复
* 一开始`0`, 再选 1~9 会把`0`去掉, 但`.`除外
* `.`之后不能再有个 `.`

```js
const buttons = [
  { text: '1', clickFn: () => { appendText('1')} },
  { text: '2', clickFn: () => { appendText('2')} },
  { text: '3', clickFn: () => { appendText('3')} },
  { text: '4', clickFn: () => { appendText('4')} },
  { text: '5', clickFn: () => { appendText('5')} },
  { text: '6', clickFn: () => { appendText('6')} },
  { text: '7', clickFn: () => { appendText('7')} },
  { text: '8', clickFn: () => { appendText('8')} },
  { text: '9', clickFn: () => { appendText('9')} },
  { text: '0', clickFn: () => { appendText('0')} },
  { text: '·', clickFn: () => { appendText('.')} },
  { text: '清空', clickFn: () => {amount.value = '0' } },
  { text: '提交', clickFn: () => { console.log('提交')} },
]
// 总金额
const amount = ref('0')
// 按键逻辑
const appendText = (str:string) => {
  if (str === '.') {
    if (amount.value.indexOf('.') > -1) {
      return 
    }
  }
  if (amount.value === '0') {
    if (str === '.') {
      amount.value += str
      return 
    }
    amount.value = ''  
    amount.value += str
    return 
  }
  if (amount.value.length === 16) {
    return
  }
  amount.value += str
}
```
### 点击提交派发事件
目前提交条件的细节还没有添加, 后面使用时需要自己定制
```js
const emits = defineEmits(['click-submit'])

const buttons = [
  ...
  { 
    text: '提交', 
    clickFn: () => { 
      emits('click-submit' , amount.value)
    }},
]

const amount = ref('0')
```
并且父组件监听此事件
```vue
  <inputPad @click-submit="submitHandle"/>
```
## emojiSelecte 表情选择器 组件
![图片](../.vuepress/public/images/emoji1.png)

这是 Unicode v13 里的 emoji

[emoji 源代码 https://github.com/jgorijinal/github-page-demo-1/blob/master/src/components/emojiList.ts](https://github.com/jgorijinal/github-page-demo-1/blob/master/src/components/emojiList.ts)

![图片](../.vuepress/public/images/emojiList1.png)

细节: 
* 组件使用了 `v-model` 绑定, 接受 `modelValue` 作为 props
* 点击 tab 标签时, `筛选(computed) 展示`出其对应的表情 
* 点击表情时, 需要通知父组件并传递该选中的表情

```vue
<template>
  <div class="emojiList">
    <!--标签-->
    <nav>
      <span v-for="item,index in table" :key="index" @click="clickTab(index)" :class="{selected:selectedTab === index}">{{item[0]}}</span>
    </nav>
    <!--表情 emoji-->
    <ol>
      <li v-for="(emoji,index) in emojis" :key="index" @click="clickEmoji(emoji)">{{emoji}}</li>
    </ol>
  </div>
</template>
<script setup lang="ts">
import { emojiList } from './emojiList'
import { ref,computed } from 'vue' 

const table: [string, string[]][] = [
      ['表情', ['face-smiling', 'face-affection', 'face-tongue', 'face-hand',
        'face-neutral-skeptical', 'face-sleepy', 'face-unwell', 'face-hat',
        'face-glasses', 'face-concerned', 'face-negative', 'face-costume'
      ]],
      ['手势', ['hand-fingers-open', 'hand-fingers-partial', 'hand-single-finger',
        'hand-fingers-closed', 'hands', 'hand-prop', 'body-parts']],
      ['人物', ['person', 'person-gesture', 'person-role', 'person-fantasy',
        'person-activity', 'person-sport', 'person-resting']],
      ['衣服', ['clothing']],
      ['动物', ['cat-face', 'monkey-face', 'animal-mammal', 'animal-bird',
        'animal-amphibian', 'animal-reptile', 'animal-marine', 'animal-bug']],
      ['植物', ['plant-flower', 'plant-other']],
      ['自然', ['sky & weather', 'science']],
      ['食物', [
        'food-fruit', 'food-vegetable', 'food-prepared', 'food-asian',
        'food-marine', 'food-sweet'
      ]],
      ['运动', ['sport', 'game']],
]
// 当前的 tab 的索引
const selectedTab = ref(0)
// 筛选选中的 tab 对应的符号
const emojis = computed(() => {
      const selectedItem = table[selectedTab.value][1]
      return selectedItem.map(category =>
        emojiList.find(item => item[0] === category)?.[1]
      ).flat()
})
// 选择 tab
const clickTab = (index:number) => {
  selectedTab.value = index
}
const props = defineProps({
  modelValue: {
    type:String
  }
})
const emits = defineEmits(['update:modelValue'])
// 点击 emoji 
const clickEmoji = (emoji:string) => {
  emits('update:modelValue',emoji)
}
</script>
<style lang="scss" scoped>
.emojiList {
  flex-grow: 1;
  border: 1px solid #5c33be;
  border-radius: 4px;
  font-size: 18px;
  font-size: 14px;
  &.error {
    border-color: #e10505;
  }
  > nav {
    display: flex;
    flex-wrap: nowrap;
    overflow: auto;
    padding: 0 4px;
    &::-webkit-scrollbar {
      display: none;
    }
    > span {
      flex-shrink: 0;
      display: inline-block;
      padding: 8px;
      color: #999;
      &.selected {
        color: #333;
        font-weight: bold;
      }
    }
  }
  > ol {
    display: flex;
    flex-wrap: wrap;
    font-size: 22px;
    line-height: 32px;
    height: calc(32px * 12);
    overflow: auto;
    align-content:flex-start;
    padding: 0 4px;
    &::-webkit-scrollbar {
      display: none;
    }
    > li {
      flex-shrink: 0;
      flex-grow: 0;
      width: 10%;
      text-align: center;
    }
  }
}
</style>
```

使用该组件
```js
<!--表情选择器 组件-->
<emoji-select class="formItem emojiList error" v-model="formData.emoji"/>

const formData = reactive({
  tagName: '',
  emoji:'(请选择符号)'
})
```
## date-picker 日期选择器组件
![图片](../.vuepress/public/images/datep1.png)
![图片](../.vuepress/public/images/datep2.png)

基于 Vant 组件库**二次封装**日期选择组件

细节:
* 使用到了 Vant 的 field 输入框, popup 弹出层 , DatetimePicker 时间选择 组件进行了二次封装, 并且内部时间处理细节使用到了 dayjs
* 如果未选择开始日期, 则**不允许**先选择结束日期
* 如果重新选择开始日期, 则结束日期会被重置
* 选择完结束日期, 给父组件派发事件, 传递选择完的日期 (对象) `{startDate:'xxx',endDate:'yyy'}`, 外部监听 `@date-changed`

```vue
<template>
  <div class="eren-date-picker">
    <van-field
      v-model="startDate"
      label="开始时间"
      readonly
      label-width="56px"
      placeholder="选择开始时间"
      @focus="dateStartPickerVisible = true"
    />
    <van-field
      v-model="endDate"
      label="结束时间"
      readonly
      label-width="56px"
      placeholder="选择结束时间"
      @focus="dateEndPickerVisible = true"
      :disabled="dateEndDisabled"
      @click="clickDateEndPicker"
    />
    <van-popup v-model:show="dateStartPickerVisible" position="bottom">
      <van-datetime-picker
          :value="startDate"
          type="date"
          title="请选择年月日"
          @confirm = "dateStartConfirm"
          @cancel = "onCancel"
      />
    </van-popup>
    <van-popup v-model:show="dateEndPickerVisible" position="bottom">
      <van-datetime-picker
          :value="endDate"
          :min-date="dayjs(startDate).$d"
          type="date"
          title="请选择年月日"
          @confirm = "dateEndConfirm"
          @cancel = "onCancel"
      />
    </van-popup>
  </div>
</template>
<script setup lang="ts">
import { ref, watch } from "vue";
import dayjs from 'dayjs'
import formateDate from '../utils/formatDate'
import { Toast } from 'vant';
import 'vant/es/toast/style';
const startDate = ref("");
const endDate = ref("");

const dateStartPickerVisible = ref(false);
const dateEndPickerVisible = ref(false);

// 结束时间 可点击 
const dateEndDisabled = ref(true)

// 开始 确认
const dateStartConfirm = (date:Date) => {
  console.log(date)
  startDate.value = formateDate(date)
  dateStartPickerVisible.value = false
}
// 结束 确认
const dateEndConfirm = (date:Date) => {
  console.log(date)
  endDate.value = formateDate(date)
  dateEndPickerVisible.value = false

}
// 取消
const onCancel = () => {
  dateStartPickerVisible.value = false
  dateEndPickerVisible.value = false
}

// 开始时间 和 结束时间 两者逻辑 : 没选择开始时间, 则不能选择先结束时间
watch(startDate, (value) => {
  if (value) { // 有值
    dateEndDisabled.value = false
    endDate.value = ''
  } else {
    endDate.value = ''
    dateEndDisabled.value = true
  }
})
const emits = defineEmits(['date-changed'])
// 选择完结束时间, 派发事件给外部传递 startDate, endDate
watch(endDate, (value) => {
  if (value) {
    emits('date-changed', {
      startDate: startDate.value,
      endDate:endDate.value
    })
  }
})

// 点击 结束时间 提醒用户 
const clickDateEndPicker = () => {
  if (dateEndDisabled.value) {
    Toast.fail('请先选择开始时间') // 提示
  }
}
</script>
<style lang="scss" scoped>
.eren-date-picker {
  display: flex;
}
</style>
```
## chart 统计图表组件
### 实现 select 控件
![图片](../.vuepress/public/images/eselect1.png)

select 选择完选项后, 发起事件通知父组件
```vue
<template>
  <div class="eren-chart-container">
    <div class="eren-chart-select">
      <span>类型</span>
      <!--select 控件-->
      <select :value="modelValue" @change="selectChange">
        <option disabled value="">请选择</option>
        <option value="expense">支出</option>
        <option value="income">收入</option>
      </select>
    </div>
    <!--图表-->
  </div>
</template>
<script setup lang="ts">
import { ref} from 'vue'
// 开始时间, 结束时间, 支出/收入类型 v-model 绑定
interface chartsProps {
  startDate: string
  endDate: string
  modelValue:string
}
const props = defineProps<chartsProps>()
const emits = defineEmits(['update:modelValue'])

// 支出,收入切换动作
const selectChange = (e:any) => {
  // console.log(e.target.value) // 支出,收入
  emits('update:modelValue',e.target.value)
}
</script>
<style lang="scss" scoped>
.eren-chart-container{
  padding:8px;
  .eren-chart-select{
    display: flex;
    align-items: center;
    select{
      margin-left:10px; 
    width:80px;
    height:30px;
    border:1px solid #3465e0;
  }
  }
}
</style>
```
### useEchart hook 的封装
```ts
import * as echarts from 'echarts'

export default function useEchart(el: HTMLDivElement) {
  // 初始化实例 
  const echartInstance = echarts.init(el)
  // 设置配置&绘制 函数
  const setOptions = (options: echarts.EChartsOption) => {
    echartInstance.setOption(options)
  }
  // 浏览器窗口大小变化时. 自动调整 echart 的大小
  window.addEventListener('resize', () => {
    echartInstance.resize()
  })
  // 可以让外部自己调用 调整echart 函数
  const updateSize = () => {
    echartInstance.resize()
  }
  return {
    echartInstance,
    setOptions,
    updateSize
  }
}
```
### baseEchart 组件的封装
细节:
* 这个是图表的模板
* 因为根据传入的配置项 `options` 来绘制不同内容, 并且还可接受 width, height
* 但是配置项 options 的数据可能会变, 每当变化时需重新调用 setOptions 方法, 所以使用了 **`watchEffect`**
```vue
<template>
  <div class="base-echart">
    <div ref="echartDivRef" :style="{ width:width, height:height }"></div>
  </div>
</template>
<script setup lang="ts">
import { withDefaults,ref, onMounted } from 'vue'
import useEchart from '../../../hooks/useEchart'
import { EChartsOption } from 'echarts'

interface baseEchartProps {
  width?: string
  height?: string
  options:EChartsOption
}
const props = withDefaults(defineProps<baseEchartProps>(), {
  width: '100vw',
  height: '300px'
})
const echartDivRef = ref<HTMLDivElement>()

onMounted(() => {
  const { echartInstance, setOptions, updateSize } = useEchart(echartDivRef.value!)
  setOptions(props.options)
})
</script>
<style lang="scss" scoped>
</style>
```
### lineEchart 折线图的封装
[折线图官网 option 配置](https://echarts.apache.org/examples/zh/editor.html?c=area-stack)

细节:
* 基于在上面已封装好的 baseEchart 进行二次封装
* 接受x 轴数据 `xLabels` 和 y 轴数据 `values`, 在外部可以直接用 `v-bind `绑定包含前面这些属性的对象
* 因为 props 数据随时可能会发生变化, 所以使用 `computed 计算属性` 返回 options 配置项
```vue{38,55}
<template>
  <div>
    <base-echart :options="options"></base-echart>
  </div>
</template>
<script setup lang="ts">
import baseEchart from './base-echart.vue'
import { EChartsOption } from 'echarts'
import { computed } from 'vue'
// x轴,y轴 数据
export interface LineEchartProps {
  xLabels: string[]
  values:string[]
}
const props = defineProps<LineEchartProps>()
// props数据有可能随时会变, 所以使用 computed 计算属性
const options = computed(() => {
  return {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985'
      }
    }
  },
  // grid: {
  //   left: '3%',
  //   right: '4%',
  //   bottom: '3%',
  //   containLabel: true
  // },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      data: props.xLabels
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: 'Email',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data:props.values
    }
  ]
} as EChartsOption
})
</script>
<style lang="scss" scoped>
</style>
```
### pieEchart 饼图的封装
[饼图 option 配置](https://echarts.apache.org/examples/zh/editor.html?c=pie-simple)

细节:
* 也是基于上面已经做好的 baseEchart 进行二次封装
* 接受 `{name:string,value:string}[]` 数组为 props, 并且记得还要使用 `computed` 返回 options 配置项

```vue{26}
<template>
  <div class="pie-echart">
    <base-echart :options="options"></base-echart>
  </div>
</template>
<script setup lang="ts">
import baseEchart from './base-echart.vue'
import { EChartsOption } from 'echarts'
import { computed } from 'vue'

export interface IDateType {
  name: string
  value:string
}
const props = defineProps<{
  pieData: IDateType[]
}>()
// props数据有可能随时会变, 所以使用 computed 计算属性
const options = computed(() => {
  return {
    series: [
    {
      name: 'Access From',
      type: 'pie',
      grid:[
        {left:0,top:0,right:0}
        ],
      radius: '50%',
      data: props.pieData,
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
} as EChartsOption
})
</script>
```