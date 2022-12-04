# 主题替换解决方案
## 主题替换原理分析
**所有的样式都是由 `css` 来进行决定的** ，那么主题替换说白了就是一个 **样式发生改变** 的问题，那么针对于这种问题，同样是通过 `css` 来进行处理的

新建一个 `html` 文件

::: details
```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    * {
      margin: 0;
      padding: 0
    }

    /* 浅色主题 */
    .light .content {
      width: 100vw;
      height: 100vh;
      background-color: white;
      color: #333333;
      transition: all 0.3s;
    }

    /* 深色主题 */
    .dark .content {
      width: 100vw;
      height: 100vh;
      background-color: #333333;
      color: white;
      transition: all 0.3s;
    }

    button {
      position: fixed;
      top: 100px;
      right: 100px;
    }
  </style>
</head>

<body class="light">
  <div class="content">我是一个 div</div>
  <button onclick="change()">点我切换模式</button>
</body>

<script>
  // 切换模式
  function change() {
    document.body.className = document.body.className === 'light' ? 'dark' : 'light'
  }
</script>

</html>
```
:::

在这样的一个代码中，通过两个不同的 `css` **类名** 来控制来控制样式
1. `light` 浅色系主题
2. `dark` 深色系主题

然后提供了一个按钮，点击按钮可以切换 `body` 的类名，当类名发生切换时，对应的样式也会发生切换，以此就完成了对应的 **主题替换**

而这个也就是主题替换的原理：**通过类名来控制对应的样式（主题），当类名发生变化时，即完成了主题替换**
## tailwind DarkMode 原理
主题替换的核心在于 **类名** 的变化，那么对于 `tailwind` 而言，同样如此

在 `tailwind` 中提供了一个 [dark mode](https://tailwindcss.com/docs/dark-mode) 的概念

在该概念下，可以通过 `dark:xxx` 的语法，来指定 **暗黑模式** 下的对应样式

其实现步骤为: 

1. 在 `tailwind.config.js` 中
```js
module.exports = {
  // 手动切换暗模式
  darkMode: 'class',
  ...
```

2. 在 `src/views/layout/components/header/index.vue` 中为顶层的 `div` 提供 `dark:bg-zinc-800` 这样的类名，这就表示：**在 `dark` 暗黑模式下，它的背景颜色将为 `bg-zinc-800`**

3. 最后可以在浏览器中，为 `html` 根标签修改 `class` 为 **`class="dark"`**

4. 那么此时可以发现，`header` 区域的背景颜色就变为 **黑色**

5. 查看对应的 `Header` 的 `DOM`，可以发现 `.dark .dark\:bg-zinc-800` 生效

那么据此我们就知道，如果想要基于 tailwind 实现主题替换，我们需要做两件事情：

1. 在 `DOM` 增加暗黑主题的适配 `CSS` 样式
2. 在 `html` 根元素按需增加 `dark` 类名


## 为组件增加 dark 适配
需要在每个组件内样式的 **类名** 中添加 `dark` 的适配

比如

* 在 m-svg-icon组件的 fillClass 中添加  `dark:fill-zinc-600`
* `dark:hover:bg-zinc-800` .....
* `dark:text-zinc-400`....
* `dark:bg-zinc-800`....

## DarkMode 在复杂应用中的实现逻辑
那么现在就需要完成一套从：**状态选择到最终修改 `html` 的 `class` 的一整套逻辑**

1. 监听主题的切换行为
2. 根据行为保存当前展示的主题到 `vuex` 中
3. 根据 `vuex` 中保存的当前主题，展示 `header -> theme`的显示图标
4. 根据 `vuex` 中保存的当前主题，修改 `html` 的 `class`

#### 实现
1. 创建 `src/store/modules/theme.js` 模块：
```js
import { THEME_LIGHT } from '@/constants'
export default {
  namespaced: true,
  state: () => ({
 		// 主题模式   
    themeType: THEME_LIGHT
  }),
  mutations: {
    /**
    *  切换主题模式
    */
    changeThemeType(state, newTheme) {
      state.themeType = newTheme
    }
  }
}
```
2. 在 `src/store/index.js` 完成注册，并标记到 `vuex-persistedstate` 的 `paths` 中
```js
import { createStore } from 'vuex'
import category from './modules/category'
import theme from './modules/theme'
import getters from './getters'
import createPersistedState from 'vuex-persistedstate'

const store = createStore({
  getters,
  modules: {
    category,
    theme
  },
  plugins: [
    createPersistedState({
      // 保存到 localStorage 中的 key
      key: 'front-project',
      // 需要保存的模块
      paths: ['category','theme']
    })
  ]
})

export default store
```
3. 在 `src/store/getters.js` 添加 getters 快捷访问
```js
	/**
   * 当前主题
   */
  themeType: (state) => state.theme.themeType
```

4. 在 `src/views/layout/components/header/header-theme.vue` 中为 `item` 添加点击事件：

```js
/**
 * menu 切换事件
 * @param {*} theme
 */
const onItemClick = (theme) => {
  store.commit('theme/changeThemeType', theme.type)
}
```
5. 在 `src/views/layout/components/header/header-theme.vue` 中渲染被选中的图标 **计算属性筛选**：
```js
// 控制图标展示
const store = useStore()
const svgIconName = computed(() => {
  // 根据当前的 themeType 返回当前的选中 icon
  const findTheme = themeArr.find((theme) => {
    return theme.type === store.getters.themeType
  })
  return findTheme.icon
})
```
```html
<template #reference>
  <m-svg-icon
    :name="svgIconName"
    ...
  ></m-svg-icon>
</template>
```

6. 至此，主题切换图标和对应的当前主题数据都已经处理完成

7. 接下来我处理最后一部分也就是 修改 html 的 class

8. 创建 `src/utils/theme.js` 方法, `watch` 监听主题的变化：
```js
import store from '@/store'
import { watch } from 'vue'
import { THEME_LIGHT, THEME_DARK } from '@/constants'

/**
 * 初始化主题
 */
export default () => {
  watch(
    () => store.getters.themeType,
    (val) => {
      // html 的 class
      let themeClassName = ''
      switch (val) {
        case THEME_LIGHT:
          themeClassName = 'light'
          break
        case THEME_DARK:
          themeClassName = 'dark'
          break
      }
      // 修改 html 的 class
      document.querySelector('html').className = themeClassName
    },
    {
      // 初始执行一次
      immediate: true
    }
  )
}
```

9. 在 `main.js` 中触发
```js
import useTheme from './utils/theme'
// 初始化主题
useTheme()
```

10. 如果感觉替换过于生硬，可以给 `hearder` 和 `navigationBar` 增加 `duration-500` 过渡动画时长

## 跟随系统的主题变更
想要生成跟随系统的主题变更，那么就需要 **监听系统的主题变化**

想要做到这一点，可以利用 [Window.matchMedia()](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/matchMedia) 方法，该方法接收一个 `mediaQueryString（媒体查询解析的字符串）` ，该字符串可以传递 [prefers-color-scheme](https://developer.mozilla.org/zh-CN/docs/Web/CSS/@media/prefers-color-scheme) ，即 `window.matchMedia('(prefers-color-scheme: dark)')` 方法

该方法可以返回一个 [MediaQueryList](https://developer.mozilla.org/zh-CN/docs/Web/API/MediaQueryList) 对象：

1. 该对象存在一个 `change` 事件，可以监听 主题发生变更 的行为
2. 同时存在一个 `matches` 属性，该属性为 `boolean` 性的值


可生成以下代码。在 `src/utils/theme.js` 中：
```js
import store from '@/store'
import { watch } from 'vue'
import { THEME_LIGHT, THEME_DARK, THEME_SYSTEM } from '@/constants'

/**
 * 监听系统主题变更
 */
// MediaQueryList 对象
let matchMedia
const watchSystemThemeChange = () => {
  // 仅需初始化一次即可
  if (matchMedia) return
  matchMedia = window.matchMedia('(prefers-color-scheme: dark)')
  // 监听主题变更
  matchMedia.onchange = function () {
    changeTheme(THEME_SYSTEM)
  }
}

/**
 * 变更主题
 * @param {*} theme 主题的标记常量
 */
const changeTheme = (theme) => {
  // html 的 class
  let themeClassName = ''
  switch (theme) {
    ...
    case THEME_SYSTEM:
      watchSystemThemeChange()
      themeClassName = matchMedia.matches ? 'dark' : 'light'
      break
  }
  // 修改 html 的 class
  document.querySelector('html').className = themeClassName
}

/**
 * 初始化主题
 */
export default () => {
  watch(() => store.getters.themeType, changeTheme, {
    // 初始执行一次
    immediate: true
  })
}
```
## 总结
1. 主题替换原理
2. `tailwind` 主题替换原理
3. 复杂应用中的实现方案
4. 跟随系统的主题变更

