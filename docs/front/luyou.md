# 高阶路由过渡处理方案 - 浏览器堆栈主动介入
通过 `vue-router` 的过渡动效是无法实现期望的路由切换效果的


所谓路由的跳转无非指的是两个部分：

1. 浏览器的 `url` 发生了变化
2. 浏览器中展示的页面组件发生了变化

那么只要满足这两点，就认为 **路径进行了跳转**

所以说，是不是可以换个思路，**不去进行真实的路由跳转** ，而是 **先修改浏览器的 URL ，再切换展示的页面（以组件的形式覆盖整个浏览器可视区域）** 。这样对于用户而言，就完成了整个的路由跳转工作

所以说具体问题就变成了：

1. 如何让浏览器的 `url` 发生变化，但是不跳转页面
2. 如何让一个新的组件以包含动画的形式进行展示

那么想要完成第一个功能可以使用：[History.pushState()](https://developer.mozilla.org/zh-CN/docs/Web/API/History/pushState) 方法

而第二个功能可以使用 [GSAP](https://github.com/greensock/GSAP) 这个动画库来进行实现

## 主动介入浏览器堆栈管理
可以通过 [History.pushState()](https://developer.mozilla.org/zh-CN/docs/Web/API/History/pushState) 方法，来修改浏览器的 `url` ，并且**不让浏览器发生对应的跳转**

1. 在 `src/views/main/components/list/item.vue` 中，添加 `div` 点击事件：
```js
...
const emits = defineEmits(['click'])

/**
 * 进入详情点击事件
 */
const onToPinsClick = () => {
  emits('click', {
    id: props.item.id
  })
}
```

2. 在 `src/views/main/components/list/index.vue` 中，监听对应的点击事件，并修改对应路由：
```js
// 监听 item 组件传的图片 id , 改变 url 地址
const onToPins = (obj) => {
  // console.log(obj.id)
  // 使用history api 的 pushState, 不刷新页面改变 url 地址
  window.history.pushState(null, null, obj.id )
}
```

## 基于 GSAP 实现高阶路由过渡动画分析
当 `url` 发生变化之后，接下来就只需要处理对应的动画就可以了

动画的处理依赖于 [GSAP](https://github.com/greensock/GSAP) 进行实现。对于 `GSAP` 而言，主要依赖两个方法：

1. [gsap.set()](https://greensock.com/docs/v3/GSAP/gsap.set()) ：这个方法通常使用在动画开始之前，表示设置动画开始前的元素属性
2. [gsap.to()](https://greensock.com/docs/v3/GSAP/gsap.to())：这个方法表示 **最终元素展示的状态**
`GSAP` 会基于 `set` 和 `to` 的状态，来自动执行中间的补间动画。

所以只需要：

1. 创建一个对应的组件，使用 `transition` 进行包裹
2. 计算出 `set` 时，组件元素对应的样式属性 (这里主要处理的是位置信息, 图片中心的位置.., 下同)
3. 计算出 `to` 时，组件元素对应的样式属性

然后就可以由 `GSAP` 自动实现对应的补间动画了
### 基于 GSAP 实现高阶路由过渡动画处理
1. 创建 `src/views/pins/index.vue` 组件，该组件的作用之后再说

2. 创建 `src/views/pins/components/pins.vue` 组件，该组件即为详情组件，在该组件中写入一些初始内容
```vue
<template>
  <div class="fixed left-0 top-0 w-screen h-screen text-xl bg-slate-500 z-20">
    {{ id }}
  </div>
</template>

<script setup>
defineProps({
  // 图片的 id
  id: {
    type: String,
    required: true
  }
})
</script>
```
3. 在 `src/views/main/components/list/index.vue` 中使用 `pins` 组件，并使用 `transition` 进行包裹，并利用 [JavaScript 钩子](https://v3.cn.vuejs.org/guide/transitions-enterleave.html#javascript-%E9%92%A9%E5%AD%90) 绑定对应的三个状态，并添加 `css="false"`

```html
<!-- 大图详情处理 -->
<transition :css="false" @before-enter="beforeEnter" @enter="enter" @leave="leave">
  <pins-vue v-if="isVisiblePins" :id="currentPins.id" />
</transition>
```

4. 修改对应的 `onToPins` 方法
```js
...
    <item-vue :item="item" :width="width" @click="onToPins"></item-vue>
...
<!--pins 图片详情页面-->
<transition :css="false" @before-enter="beforeEnter" @enter="enter" @leave="leave">
  <pins-vue v-if="isPinsVisible" :id="currentPins.id"></pins-vue>
</transition>
....

// 点击的 pins 的数据
const currentPins = ref({})
// pins 页面的显示/隐藏
const isPinsVisible = ref(false)

// 监听 item 组件传的图片 id , 改变 url 地址
const onToPins = (obj) => { // { 图片id , 图片中央位置信息 } 对象
  currentPins.value = obj
  isPinsVisible.value = true
  // 使用history api 的 pushState, 不刷新页面改变 url 地址
  window.history.pushState(null, null, `/pins/${obj.id}`)

  //img的中间位置 x,y
  console.log(obj.imgCenterInfo.value)
}
```

5. 那么此时点击即可展示出对应的 `pins` 组件

接下来缺少的就是对应的动画内容

1. 在 `src/views/main/components/list/item.vue` 中，记录点击时当前 `item` 图片的中心位置，该位置即为**动画的起点**，此处将使用到 [useElementBounding](https://vueuse.org/core/useElementBounding/) 方法, 把得到的位置信息传递到外面

因为要做动画的话, 需要的是每张图片中心点的位置信息, 在编写 gsap 函数的时候会使用到位置信息
```js
// 点击进入详情页面, 给父组件传 id
const onToPinsClick = () => {
  console.log('item 中点击了图片详情') 
  // 使用 useElementBounding 拿到图片的位置信息
  const { x, y, width, height } = useElementBounding(imgRef)

  // 图片中心的位置信息
  const imgCenterInfo = computed(() => {
    return {
      x: parseInt(x.value + (width.value / 2)),
      y: parseInt(y.value + (height.value / 2))
    }
  })
  emits('click', {
    id: props.item.id,  // 图片 id
    imgCenterInfo       // 图片中间位置信息 x,y
  })
} 
```

2. 安装 `GSAP`:
```shell
npm i --save gsap@3.9.1
```

3. 在 `src/views/main/components/list/index.vue` 中，填充三个 `transition` 钩子：
```js
import gasp from 'gsap'
const beforeEnter = (el) => {
  gsap.set(el, {
    scaleX: 1,
    scaleY: 1,
    transformOrigin: '0 0',

    opacity: 0
  })
}
const enter = (el, done) => {
  gsap.to(el, {
    duration: 0.3,
    scaleX: 1,
    scaleY: 1,
    opacity: 1,
    translateX: 0,
    translateY: 0,
    onComplete: done
  })
}
const leave = (el, done) => {
  gsap.to(el, {
    duration: 0.3,
    scaleX: 0,
    scaleY: 0,
    x: currentPins.value.imgCenterInfo?.x,
    y: currentPins.value.imgCenterInfo?.y,
    opacity: 0
  })
}
```
那么此时可以实现 `item` 点击的跳转动画

此时可以监听浏览器的 **后退** 事件，在点击后退时，关闭 `pins`
```js
window.addEventListener('popstate', () => {
  isPinsVisible.value = false
})
```