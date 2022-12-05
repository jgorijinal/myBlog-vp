# 前台常见功能解决方案：下载+全屏+引导
## 文件下载解决方案
当点击 `item` 中的 **下载** 按钮时，期望可以下载当前的图片

想要实现该功能，则需要使用到专门的下载包

目前常用的支持下载功能包有两个

1. 小文件下载： [file-saver](https://www.npmjs.com/package/file-saver)
2. 大文件下载：[streamsaver](https://www.npmjs.com/package/streamsaver)

这个项目的图片下载属于小文件的下载，所以可以直接使用 [file-saver](https://www.npmjs.com/package/file-saver)

1. 安装 `file-saver` ：
```shell
npm i --save file-saver@2.0.5
```

2. 在 `src/views/main/components/list/item.vue` 中，增加下载功能：
```js
import { saveAs } from 'file-saver'
...
/**
 * 下载按钮点击事件
 */
const onDownload = () => {
  /**
   * 1. 下载的图片链接
   */
  saveAs(
    props.data.photoDownLink
  )
}
```

但是此时的下载有点突兀，达不到良好交互的体验，所以现在期望在下载时能够给用户一个提示，增加用户体验。

那么这个提示怎么做....
## 用方法触发的 message 构建分析
在之前的时候，构建过一个 `confirm` 的通用组件，该组件可以直接通过 **方法进行调用展示**

那么对于接下来打算构建的 `message` 组件，同样如此，依然希望可以通过方法的调用直接展示对应的组件

那么根据之前的经验，现在知道知道：

1. 首先需要先构建出一个对应的 `message.vue`
2. 然后构建出对应的 `message.js` 模块
3. 在模块中，通过：
   1. `h`函数 构建 `vnode`
   2. `render` 函数，进行渲染

那么以上方式，就是是 `message` 的构建过程。

### 构建 message 组件基本能力
1. 创建 `src/libs/message/index.vue` 组件：
```js
const props = defineProps({
  // 风格
  type: {
    type: String,
    default:'success',
    validator(val) {
      const typeArr = Object.keys(styles)
      const result = typeArr.includes(val)
      if (!result) {
        throw new Error(`type 必须是 ${typeArr.join(',')} 中的一个值`)
      }
      return result
    }
  },
  content: {
    type:String
  },
  // 显示时长
  duration: {
    type: Number
  },
  // 关闭时回调
  destroyCallback: {
    type: Function
  }
})
```

2. 构建各种状态下的样式表：
```vue
<script>
// 样式表
const styles = {
  // 成功
  success: {
    icon: 'success',
    fillClass: 'fill-success-300',
    textClass: 'text-success-300',
    containerClass:
      'bg-success-100 border-success-200  hover:shadow-lg hover:shadow-success-100'
  },
  // 警告
  warn: {
    icon: 'warn',
    fillClass: 'fill-warn-300',
    textClass: 'text-warn-300',
    containerClass:
      'bg-warn-100 border-warn-200  hover:shadow-lg hover:shadow-warn-100'
  },
  // 错误
  error: {
    icon: 'error',
    fillClass: 'fill-error-300',
    textClass: 'text-error-300',
    containerClass:
      'bg-error-100 border-error-200  hover:shadow-lg hover:shadow-error-100'
  }
}
</script>
```

3. 新增 `tailwind` 的自定义样式：
```js
module.exports = {
  darkMode:'class',
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {
     ...
      colors: {
        'main': '#f44c58',
        'hover-main': '#f32836',
        'success-100': '#F2F9EC',
        'success-200': '#E4F2DB',
        'success-300': '#7EC050',
        'warn-100': '#FCF6ED',
        'warn-200': '#F8ECDA',
        'warn-300': '#DCA550',
        'error-100': '#ED7456',
        'error-200': '#f3471c',
        'error-300': '#ffffff'
      }
    },
  },
  plugins: [],
}
```

4. 配合样式表，构建 `template`

[transition 钩子函数](https://cn.vuejs.org/guide/built-ins/transition.html#javascript-hooks)
```vue
<template>
  <transition name="down" @after-leave="destroyCallback">
    <div
      v-show="isVisable"
      class="min-w-[420px] fixed top-[20px] left-[50%] translate-x-[-50%] z-50 flex items-center px-3 py-1.5 rounded-sm border cursor-pointer"
      :class="styles[type].containerClass"
    >
      <m-svg-icon
        :name="styles[type].icon"
        :fillClass="styles[type].fillClass"
        class="h-1.5 w-1.5 mr-1.5"
      ></m-svg-icon>
      <span class="text-sm" :class="styles[type].textClass">
        {{ content }}
      </span>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
.down-enter-active,
.down-leave-active {
  transition: all 0.5s;
}

.down-enter-from,
.down-leave-to {
  opacity: 0;
  transform: translate3d(-50%, -100px, 0);
}
</style>
```
5. 处理展示逻辑：
```js
const isVisible = ref(true)
// 为了保证动画展示, 必须要 mounted 后显示, 因为组件是被 render 函数渲染的
onMounted(() => {
  isVisible.value = true
  // 几秒后, 关闭
  setTimeout(() => {
    isVisible.value = false
  }, props.duration)
})
```


## 用方法触发 message 展示
1. 创建 `src/libs/message/index.js` 模块：
```js
import { h, render } from 'vue'
import messageComponent from './index.vue'

export const message = (type, content, duration = 3000) => {
  /**
   * 动画结束时的回调
   */
  const onDestroy = () => {
    // 3. message 销毁
    render(null, document.body)
  }

  // 1. 返回 vnode
  const vnode = h(messageComponent, {
    type,
    content,
    duration,
    destroy: onDestroy
  })
  // 2. render () 渲染
  render(vnode, document.body)
}

```
2. 在 s`rc/libs/index.js` 导入并导出 `message` 方法
```js
export { message } from '@/libs/message'
```
3. 在 `src/views/main/components/list/item.vue` 中进行触发：
```js
/**
 * 下载按钮点击事件
 */
const onDownload = () => {
  // 提示消息
  message('success', '图片开始下载...')
  // 延迟一段时间执行，可以得到更好的体验
  setTimeout(() => {
    /**
     * 1. 下载的图片链接
     */
    saveAs(
      props.data.photoDownLink
    )
  }, 1000)
}

```
