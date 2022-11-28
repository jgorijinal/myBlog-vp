# 通用业务 Header 处理方案
## 处理 PC 端基础架构
`PC端` **将具备两个路由的出口**

1. 一级路由出口：`APP.vue` 中
2. 二级路由出口：`main.vue` 中

那么对于当前的代码而言，现在仅存在一个一级路由出口，所以接下来就需要处理 **二级路由出口**

1. 创建 `src/views/layout/index.vue` 文件，表示 **一级路由出口** 对应的组件

2. 在 `layout/components` 中分别创建**三个**业务组件：

* `header/index.vue`：表示 PC 端头部区域
* `main.vue` ：二级路由出口
* `floating`：右下角悬浮区域

3. 在 `src/views/layout/index.vue` 文件中，导入这三个组件
```vue
<template>
  <div class="h-screen">
    <!-- 需要在 tailwind 中定义 h-header 高度 -->
    <header-vue class="h-header"></header-vue>
    <main-vue class="h-main"></main-vue>
    <floating-vue></floating-vue>
  </div>
</template>

<script setup>
import headerVue from './components/header/index.vue'
import mainVue from './components/main.vue'
import floatingVue from './components/floating/index.vue'
import {} from 'vue'
</script>
```
4. 在 `tailwind.config.js` 中定义 `header、main`
```js
module.exports = {
  // Tailwind 应用范围
 ...
  theme: {
    extend: {
      ...
      height: {
        header: '72px',
        main: 'calc(100vh - 72px)'
      },
      ...
  },
  ...
}
```

5. 在 `src/router/modules/pc-routes.js` 导出对应 `layout` 组件的路由表
```js
export default [
  {
    path: '/',
    name: 'main',
    component: () => import('@/views/layout/index.vue'),
    children: []
  }
]
```
6. 在 `src/views/layout/components/floating/index.vue`中，修改样式，使其脱离标准文档流

```html
<div class="fixed bottom-10 right-2">floating</div>
```

## PC 端 : Header 模块处理分析与简单实现
整个 **`PC` 端 Header 模块** ，从左往右可以分为 4 个模块

1. `logo` : 点击返回到首页
2. `search` : 搜索区域
3. `theme` : 主题切换区域
4. `my` : 信息区域

明确好了这些内容之后, 根据分析实现这些视图区域

1. 分别创建以下组件，并完成初始化
* `src/views/layout/components/header/header-search/index.vue`
* `src/views/layout/components/header/header-theme.vue`
* `src/views/layout/components/header/header-my.vue`

2. 在 `src/views/layout/components/header/index.vue` 中完成初始化
```vue
<template>
  <div class="w-full bg-white border-b border-b-zinc-200 px-2 py-1">
    <div class="flex items-center">
      <img
        class="h-4 cursor-pointer mr-2"
        src="https://m.imooc.com/static/wap/static/common/img/logo-small@2x.png"
        @click="onToHome"
      />
      <header-search-vue class="mr-1"></header-search-vue>
      <header-theme-vue class="mr-1"></header-theme-vue>
      <header-my-vue></header-my-vue>
    </div>
  </div>
</template>

<script setup>
import headerSearchVue from './header-search/index.vue'
import headerThemeVue from './header-theme.vue'
import headerMyVue from './header-my.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const onToHome = () => {
  router.push('/')
}
</script>
```
目前的效果 :
![图片](../.vuepress/public/images/hhee1.png)

## 通用组件：search 搜索框能力分析
对于 `header` 中的模块我们依次进行处理

`search` 部分为搜索框，对于该搜索框而言我们期望把它做成 **通用组件**

那么既然是通用组件，就需要分析它的 **能力**，它应该具备什么样的功能：

1. 输入内容实现双向数据绑定
2. 鼠标移入与获取焦点时的动画
3. 一键清空文本功能
4. 搜索触发功能
5. 可控制，可填充的下拉展示区
6. 监听到以下事件列表：
* `clear`：删除所有文本事件
* `input`：输入事件
* `focus`：获取焦点事件
* `blur`：失去焦点事件
* `search`：触发搜索（点击或回车）事件

### 通用组件：search 搜索框样式处理
![图片](../.vuepress/public/images/headeryangshi.png)
创建 `src/libs/search/index.vue` 文件
```vue
<template>
  <div
    class="group relative p-0.5 rounded-xl border-white duration-500 hover:bg-red-100/40"
  >
    <div>
      <!-- 搜索图标 -->
      <m-svg-icon
        class="w-1.5 h-1.5 absolute translate-y-[-50%] top-[50%] left-2"
        name="search"
        color="#707070"
      />
      <!-- 输入框 -->
      <input
        class="block w-full h-[44px] pl-4 text-sm outline-0 bg-zinc-100 caret-zinc-400 rounded-xl text-zinc-900 tracking-wide font-semibold border border-zinc-100 duration-500 group-hover:bg-white group-hover:border-zinc-200 focus:border-red-300"
        type="text"
        placeholder="搜索"
      />
      <!-- 删除按钮 -->
      <m-svg-icon
        name="input-delete"
        class="h-1.5 w-1.5 absolute translate-y-[-50%] top-[50%] right-9 duration-500 cursor-pointer"
      ></m-svg-icon>
      <!-- 分割线 -->
      <div
        class="opacity-0 h-1.5 w-[1px] absolute translate-y-[-50%] top-[50%] right-[62px] duration-500 bg-zinc-200 group-hover:opacity-100"
      ></div>
      <!-- TODO: 搜索按钮(通用组件) -->
    </div>
    <!-- 下拉区 -->
    <transition name="slide">
      <div
        class="max-h-[368px] w-full text-base overflow-auto bg-white absolute z-20 left-0 top-[56px] p-2 rounded border border-zinc-200 duration-200 hover:shadow-3xl"
      >
        <slot name="dropdown" />
      </div>
    </transition>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.slide-enter-active {
  transition: all 0.5s;
}

.slide-leave-active {
  transition: all 0.5s;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateY(40px);
  opacity: 0;
}
</style>
```

在 `src/views/layout/components/header/header-search/index.vue` 使用组件
```vue
<template>
  <div class="w-full">
    <m-search></m-search>
  </div>
</template>
```
## 通用组件：button 按钮能力分析
现在 `search` 通用组件还差最后的一个 **按钮** 显示

因为会经常使用到各种各样的 `button` 按钮组件，所以说期望拥有一个 `button` **按钮通用组件**

1. 可以显示文字按钮，并提供 `loading` 功能
2. 可以显示 `icon` 按钮，并可以任意指定 `icon` 颜色
3. 可开关的点击动画
4. 可以指定各种风格和大小
5. 当指定的风格或大小不符合预设时，需要给开发者以提示消息

### 通用组件：button 按钮功能实现
![图片](../.vuepress/public/images/bbtt1.png)

1. 创建 `src/libs/button/index.vue` 通用按钮组件

2. 构建 `type` 风格可选项与 `size` 大小可选项
```vue
<script>
// type 可选项: 按钮风格 primary main info
const typeEnum = { // primary , main , info
  primary: 'text-white  bg-zinc-800 hover:bg-zinc-900 active:bg-zinc-800 ', // 字体颜色,背景颜色, 点击时北京颜色
  main: 'text-white  bg-main hover:bg-hover-main active:bg-main ',
  info: 'text-zinc-800 bg-zinc-200 hover:bg-zinc-300 active:bg-zinc-200 '
}
// size 可选项: 按钮大小可选项 default small , 还要区分 文字按钮和图标按钮
const sizeEnum = { // default small,  (icon-default , icon-small)
  default: { 
    button: 'w-8 h-4 text-base', // 按钮尺寸, 字体尺寸
    icon: ''
  },
  'icon-default': {
    button: 'w-4 h-4',
    icon: 'w-1.5 h-1.5'
  },
  small: {
    button: 'w-7 h-3 text-base',
    icon: ''
  },
  'icon-small': {
    button: 'w-3 h-3',
    icon: 'w-1.5 h-1.5'
  }
}
</script>
```
3. `bg-main` 为 **自定义色值**，所以不要忘记在 `tailwind.config.js` 中指定
```js
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {
     ...
      colors: {
        'main': '#f44c58',
        'hover-main':'#f32836'
      }
    },
  },
  plugins: [],
}
```
4.  指定 `props` 让开发者可以控制当前按钮
```vue
<script setup>
const props = defineProps({
  // icon图标名称
  icon: {
    type:String
  },
  // icon 图标颜色
  iconColor: {
    type:String
  },
  // icon 图标类名 (匹配tailwind )
  iconClass: {
    type:String
  },
  // 按钮风格 type
  type: {
    type: String,
    default: 'primary',
    validator(value) {
      const keys = Object.keys(typeEnum)
      const result = keys.includes(value)
      if (!result) {
        throw new Error(`你的 type 必须是 ${keys.join(',')} 中的的一个值`)
      }
      return result
    }
  },
  // size 按钮大小可选项
  size: {
    type: String,
    default: 'default',
    validator(value) {
      const keys = Object.keys(sizeEnum).filter(key => !key.includes('icon-'))
      const result = keys.includes(value)
      if (!result) {
        throw new Error(`你的 size 必须是 ${keys.join(',')} 中的的一个值`)
      }
      return result
    }
  },
  // 按钮点击时是否需要动画
  isActiveAnim: {
    type: Boolean,
    default:true
  },
  // 加载状态
  loading: {
    type: Boolean,
    default:false
  }
})
</script>
```

5. 因为在处理 `size` 的 `prop` 时，区分了 `icon按钮` 和 `文字按钮`，所以说在指定类名时，需要通过一个 **计算属性** 
判定是否需要增加 `icon-` 前缀
```js
// 如果props 传了 icon 图标, 说明是 icon 按钮
// 所以它的 大小 必须要加上 'icon-'
// 处理大小的 key
const sizeKey = computed(() => {
  return props.icon ? 'icon-'+ props.size : props.size
}) 
```
6. 依据当前数据，实现对应的视图
```vue
<template>
  <button
    class="text-sm text-center rounded duration-150 flex justify-center items-center"
    :class="[
      typeEnum[type],
      sizeEnum[sizeKey].button,
      { 'active:scale-105': isActiveAnim }
    ]"
  >
    <!-- 展示 loading -->
    <m-svg-icon
      v-if="loading"
      name="loading"
      class="w-2 h-2 animate-spin mr-1"
    ></m-svg-icon>
    <!-- icon 按钮 -->
    <m-svg-icon
      v-if="icon"
      :name="icon"
      class="m-auto"
      :class="sizeEnum[sizeKey].icon"
      :color="iconColor"
      :fillClass="iconClass"
    ></m-svg-icon>
    <!-- 文字按钮 -->
    <slot v-else />
  </button>
</template>
```
7. 在 `src/libs/search/index.vue` 使用该组件
```vue
<!-- TODO: 搜索按钮(通用组件) -->
<m-button
  class="absolute translate-y-[-50%] top-[50%] right-1"
  icon="search"
  iconColor="#ffffff"
  type="main"
></m-button>
```

8. 最后为 `button` 处理点击事件
```
  <button
    ...
    @click.stop="onBtnClick"
  >
```

```js
const EMITS_CLICK = 'click'

const emits = defineEmits([EMITS_CLICK])

/**
 * 按钮点击事件处理
 */
const onBtnClick = () => {
  if (props.loading) {
    return
  }
  emits(EMITS_CLICK)
}
```