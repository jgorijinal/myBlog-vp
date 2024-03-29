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


### 用方法触发 message 展示
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

## 模块全屏解决方案
让页面中的指定区域进行全屏展示也是非常常见的一个功能

想要让页面的指定区域进行全屏展示，我们通常可以使用 [全屏 API](https://developer.mozilla.org/zh-CN/docs/Web/API/Fullscreen_API) ，该 API 中提供了两个方法
1. [Element.requestFullscreen()](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/requestFullScreen)：让指定元素进行全屏
```js
document.getElementById('app').requestFullscreen()
```
2. [Document.exitFullscreen()](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/exitFullscreen)：退出全屏

但是这个 API 比较原始，使用起来没有那么方便，所以可以使用一个 `vueuse` 中的更加简便的 API：[useFullScreen](https://vueuse.org/core/useFullscreen/#usefullscreen)

1. 利用 useFullScreen 生成 img 图片的全屏方法：
```js
/**
 * 生成全屏方法
 */
const imgTarget = ref(null)
const { enter: onImgFullScreen } = useFullscreen(imgTarget)
```
2. 将 `onImgFullScreen` 绑定至全屏按钮点击事件：
```html
<!--全屏按钮-->
<m-button
  ...
  ...
  icon="full"
  @click="onImgFullScreen"
/>
```

## 构建 floating 基础布局
```vue
<template>
  <div class="fixed bottom-10 right-2">
    <!-- 引导页 -->
    <div
      class="guide-start w-4 h-4 mb-1 bg-white dark:bg-zinc-900 border dark:border-0 border-zinc-200 rounded-full flex justify-center items-center cursor-pointer duration-200 group hover:shadow-lg"
    >
      <m-svg-icon
        name="guide"
        class="w-2 h-2"
        fillClass="fill-zinc-900 dark:fill-zinc-200 group-hover:fill-main "
      ></m-svg-icon>
    </div>
    <!-- 反馈 -->
    <m-popover class="flex items-center guide-feedback" placement="top-left">
      <template #reference>
        <div
          class=" w-4 h-4 bg-white dark:bg-zinc-900 border dark:border-0 border-zinc-200 rounded-full flex justify-center items-center cursor-pointer duration-200 group hover:shadow-lg"
        >
          <m-svg-icon
            name="feedback"
            class="w-2 h-2"
            fillClass="fill-zinc-900 dark:fill-zinc-200 group-hover:fill-main "
          ></m-svg-icon>
        </div>
      </template>

      <div class="w-[140px] overflow-hidden">
        <div
          class="flex items-center p-1 cursor-pointer rounded hover:bg-zinc-100/60 dark:hover:bg-zinc-800"
        >
          <m-svg-icon
            name="feedback"
            class="w-1.5 h-1.5 mr-1"
            fillClass="fill-zinc-900 dark:fill-zinc-300"
          ></m-svg-icon>
          <span class="text-zinc-800 dark:text-zinc-300 text-sm">立即吐槽</span>
        </div>
      </div>
    </m-popover>
  </div>
</template>
```
## 样式修正：处理难看的 scrollBar
对于 `tailwind` 而言，默认并没有提供 `scrollBar` 的样式类名，想要处理 `scrollBar` 的样式，那么需要安装单独的插件：[tailwind-scrollbar](https://www.npmjs.com/package/tailwind-scrollbar)


1. 安装插件：
```npm
npm install --save-dev tailwind-scrollbar@1.3.1
```

2. 在 `tailwind.config.js` 中注册该插件：
```js
plugins: [require('tailwind-scrollbar')]
```

3. 在 `tailwind.config.js` 中，让 `scrollBar` 支持 `dark` 模式：
```js
theme: {
    extend: {
      ...
      variants: {
        scrollbar: ['dark']
      }
    }
  }
```

4. 在 `src/views/main/index.vue` 使用 `scrollbar`
```html
<div
    class="h-full overflow-auto bg-white dark:bg-zinc-800 duration-500 scrollbar-thin scrollbar-thumb-transparent xl:scrollbar-thumb-zinc-200 xl:dark:scrollbar-thumb-zinc-900 scrollbar-track-transparent"
  >
  ...
```
5. 在 `src/libs/search/index.vue` 中，为下拉区指定 `scrollBar`
```html
<div
        v-if="$slots.dropdown"
        v-show="isFocus"
        class="... scrollbar-thin scrollbar-thumb-zinc-200 dark:scrollbar-thumb-zinc-900 scrollbar-track-transparent"
      >

```
6. 最后在 `src/styles/index.scss` 中，为 `scrollBar` 指定弧度`（1.3.1 通过属性指定弧度无效）`
```css
::-webkit-scrollbar-thumb {
  border-radius: 10px;
}
```

## 功能引导解决方案
想要完成功能引导的实现，那么需要借助一个第三方的包：[driver.js](https://www.npmjs.com/package/driver.js)

1. 安装 `driver.js`：
```shell
npm install --save driver.js@0.9.8
```

2. 在 `src/views/layout/components/floating/index.vue` 中导入对应模块
```js
import Driver from 'driver.js'
import 'driver.js/dist/driver.min.css'
```

3. 初始化 `Driver：`
```js
/**
 * 引导页处理
 */
let driver = null
onMounted(() => {
  driver = new Driver({
    // 禁止点击蒙版关闭
    allowClose: false,
    closeBtnText: '关闭',
    nextBtnText: '下一个',
    prevBtnText: '上一个'
  })
})
```

4. `driver.js` 的运行主要依赖于 [defineSteps](https://kamranahmed.info/driver.js/) ，该方法接收一个数组，表示引导的步骤和机制

5. 所以需要先构建出这样的数组，创建 `src/views/layout/components/floating/steps.js` 模块：
```js
export default [
  {
    // 在哪个元素中高亮
    element: '.guide-home',
    // 配置对象
    popover: {
      // 标题
      title: 'logo',
      // 描述
      description: '点击可返回首页'
    }
  },
  {
    element: '.guide-search',
    popover: {
      title: '搜索',
      description: '搜索您期望的图片'
    }
  },
  {
    element: '.guide-theme',
    popover: {
      title: '风格',
      description: '选择一个您喜欢的风格',
      // 弹出的位置
      position: 'left'
    }
  },
  {
    element: '.guide-my',
    popover: {
      title: '账户',
      description: '这里标记了您的账户信息',
      position: 'left'
    }
  },
  {
    element: '.guide-start',
    popover: {
      title: '引导',
      description: '这里可再次查看引导信息',
      position: 'left'
    }
  },
  {
    element: '.guide-feedback',
    popover: {
      title: '反馈',
      description: '您的任何不满都可以在这里告诉我们',
      position: 'left'
    }
  }
]
```
6. 一一为其中的 `element` 指定对应的类名 `class`
7. 在 `src/views/layout/components/floating/index.vue` 导入数组，并执行 `defineSteps` 方法
```js
/**
 * 开始引导
 */
const onGuideClick = () => {
  driver.defineSteps(steps)
  driver.start()
}
```

但是此时的引导存在一个问题，那就是 **白色背景会遮挡住已有的图标** ，这个问题咱们如何处理呢...

![图片](../.vuepress/public/images/yindao1.png)

### 解决功能引导图标不显示的问题
`styles/index.scss` 加上属性
```css
div#driver-highlighted-element-stage, div#driver-page-overlay {
  background: transparent !important;
  outline: 5000px solid rgba(0, 0, 0, .75) !important;
}
```
## 总结 
处理了 `4` 个核心功能：

1. 文件下载
2. 通用组件：`message `构建
3. 全屏处理
4. 引导处理


