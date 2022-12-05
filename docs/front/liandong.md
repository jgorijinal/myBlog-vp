# 多组件联动与高阶组件解决方案
## 多组件联动整体逻辑分析
所谓的多组件联动，其实更准确一点来说，通常指的是：**多个组件之间，存在一个或多个共享的数据。当数据发生改变时，执行对应的逻辑**

那么把这一句话拆分开来看，就是两部分：

1. 多组件之间需要共享数据
2. 监听数据变化，并执行对应逻辑

#### 多组件之间需要共享数据
多组件之间共享数据，通常有三种方式：
1. 组件之间的数据传递 — 常见于层级关系比较清晰的多组件之中
* 父传子
* 子传父
* …
2. 依赖注入： [Provide / Inject](https://v3.cn.vuejs.org/api/composition-api.html#provide-inject) — 嵌套层级比较深，并且子组件只需要父组件的部分内容
3. 全局状态管理工具：[Vuex](https://vuex.vuejs.org/zh/index.html) — 以上两种情况都不适用的情况下

#### 监听数据变化的方式
当组件之间共享的数据发生变化时，需要执行对应的逻辑操作

那么在 `vue` 中监听数据变化的方式，首推就是 `watch`

并且在刚才已经确定了共享的数据需要被保存到 `vuex` 中，所以就需要通过 `watch` 监听到 `vuex` 中共享数据的变化，然后在监听到变化时，执行对应的业务逻辑

#### 整体逻辑分析
那么根据分析，整体实现逻辑应该为：

1. 创建共享数据对应的 vuex 模块
2. 在 `getters` 中建立对应的快捷访问计算属性
3. 在对应的业务组件中，`watch` 监听 `getters`，并执行对应逻辑
## 简单联动处理：navigationBar 对应 list
![图片](../.vuepress/public/images/liandong1.png)

现在期望当 `navigationBar` 中的 `item` 发生切换时，切换对应的 `list` 中的展示数据，那么根据刚才的分析，切换的关键就在于：**共享数据的变化，引起的逻辑变化**

那么共享数据指的就是 **被选中项**

目前无论是 `PC端` 下还是 `移动端` 下，被选中项都是在组件内部进行处理的，这肯定不符合现在的目的。现在期望共享的数据可以在 `Vuex` 中被维护

1. 创建 `src/store/modules/app.js` ，该模块下的数据 **不会** 被缓存
```js
import { ALL_CATEGORY_ITEM } from '@/constants'

export default {
  namespaced: true,
  state: () => ({
    // 当前选中的分类
    currentCategory: ALL_CATEGORY_ITEM
  }),
  mutations: {
    /**
     * 切换选中分类
     */
    changeCurrentCategory(state, newCategory) {
      state.currentCategory = newCategory
    }
  }
}
```

2. 在 `src/store/index.js` 完成注册，注意：`app` 模块不缓存
3. 在 `src/store/getters.js` 中，提供两个快捷访问：
```js
export default {
  ...
  /**
   * category选中项
   */
  currentCategory: (state) => state.app.currentCategory,
  /**
   * category选中项下标
   */
  currentCategoryIndex: (state, getters) => {
    return getters.categorys.findIndex(
      (item) => item.id === getters.currentCategory.id
    )
  }
}
```
4. 接下来可以分别在 `PC 端 和 移动端`下触发 `changeCurrentCategory`：

`pc端 和 移动端`的逻辑代码全部要根据 Vuex 的数据需要改一改

5. 接下来可以完成对应的 `list` 逻辑操作：

在 `src/views/main/components/list/index.vue` 中
```js
...
// 请求参数
const query = ref({
  page: 1,
  size: 20,
  categoryId: 'all'
})
...
...
/**
 * 重置 qeury 请求参数
*/
const resetQuery = (newQueryObj) => {
  pexelsData.value = []
  total.value = 0
  isLoading.value = false
  isFinished.value = false

  query.value = {...query.value, ...newQueryObj}
}

watch(() => store.getters.currentCategory, (currentCategory) => {
  // 重置参数
  resetQuery({
    page: 1,
    categoryId:currentCategory.id
  })
})
```

那么至此完成了 `navigationBar` 对应 `list` 组件的联动效果

## 明确 searchBar 对应 list 处理流程
searchBar 区域目前还缺少三部分的内容处理：

* 搜索提示
* 搜索历史
* 推荐精选

所以现在处理顺序是
1. 搜索提示
2. 搜索历史
3. 推荐精选
4. `search` 触发时的 `list` 联动

### searchBar : 搜索提示的初步实现
![图片](../.vuepress/public/images/sousuotishi1.png)

1. 在 `src/api/pexels.js` 定义 **获取搜索提示** 接口：
```js
/**
 * 获取搜索提示
 */
export const getHint = (q) => {
  return request({
    url: '/pexels/hint',
    params: {
      q
    }
  })
}
```

2. 创建 `src/views/layout/components/header/header-search/hint.vue` 组件，作为 **搜索提示** 模块
```vue
<template>
  <div class="">
    <div
      v-for="(item, index) in hintData"
      :key="index"
      class="py-1 pl-1 text-base font-bold text-zinc-500 rounded cursor-pointer duration-300 hover:bg-zinc-200 dark:hover:bg-zinc-900"
      @click="onItemClick(item)"
    >
      {{ item }}
    </div>
  </div>
</template>

<script>
const EMITS_ITEM_CLICK = 'itemClick'
</script>

<script setup>
import { getHint } from '@/api/pexels'
import { ref, watch } from 'vue'

/**
 * 接收搜索数据
 */
const props = defineProps({
  searchText: {
    type: String,
    required: true
  }
})
/**
 * item 被点击触发事件
 */
const emits = defineEmits([EMITS_ITEM_CLICK])

/**
 * 处理搜索提示数据获取
 */
const hintData = ref([])
const getHintData = async () => {
  if (!props.searchText) return
  const { result } = await getHint(props.searchText)
  hintData.value = result
}
/**
 * 监听搜索文本的变化，并获取对应提示数据
 */
watch(() => props.searchText, getHintData, {
  immediate: true
})

/**
 * item 点击事件处理
 */
const onItemClick = (item) => {
  emits(EMITS_ITEM_CLICK, item)
}
</script>
```
3. 在 `src/views/layout/components/header/header-search/index.vue` 中展示并做对应处理

```vue
<template>
  <div class="w-full">
    <m-search
      v-model="inputValue"
      @search="onSearchHandler"
      @clear="onSearchHandler"
    >
      <template #dropdown>
        <div>
          <!-- 搜索提示 -->
          <hint-vue
            :searchText="inputValue"
            v-show="inputValue"
            @itemClick="onSearchHandler"
          ></hint-vue>
        </div>
      </template>
    </m-search>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import hintVue from './hint.vue'

const inputValue = ref('')

// 搜索的回调事件
const onSearchHandler = (val) => {
  inputValue.value = val
}

</script>
```
### searchBar ：处理 防抖 功能
不过这样的防抖 `watch` 不需要自己进行实现，`vueuse` 中提供了对应的 [watchDebounced（源码地址）](https://vueuse.org/shared/watchDebounced/) ，可以直接利用这个 `API` 直接实现防抖的 `watch`

```js
/**
 * 监听搜索文本的变化，并获取对应提示数据
 */
watchDebounced(() => props.searchText, getHintData, {
  immediate: true,
  // 每次事件触发时，延迟的时间
  debounce: 500
})
```
### searchBar ：提示关键字高亮处理
在处理完成防抖之后，还期望提示列表中所有文本的关键字可以进行对应的**高亮**显示。

那么对于这样的功能，就需要构建对应的方法，生成包含 **高亮标签** 的 `html` 富文本。利用该富文本，替换原 `text` 文本。

所以需要首先构建出对应的方法：

```js
/**
 * 处理关键字高亮
 */
const highlightText = (text) => {
  // 生成高亮标签
  const highlightStr = `<span class="text-zinc-900 dark:text-zinc-200">${props.searchText}</span>`
  // 构建正则表达式，从《显示文本中》找出与《用户输入文本相同的内容》，使用《高亮标签》进行替换
  const reg = new RegExp(props.searchText, 'gi')
  // 替换
  return text.replace(reg, highlightStr)
}
```
通过 `v-html` 代替 `text` 渲染：
```html
<div
  ...
  v-html="highlightText(item)"
  @click="onItemClick(item)"
></div>
```

### searchBar：搜索历史处理
![图片](../.vuepress/public/images/sousuolishi1.png)

每次用户触发搜索时，当前的这次 **搜索文本** 会被作为 **搜索历史** 进行处理

因为搜索历史的数据需要进**行本地的持久化处理**，所以我们需要把该数据放入到 `vuex` 中。

同时提供对应的：

* 插入
* 删除单个
* 清空
的三个 `mutation`

1. 创建 `src/store/modules/search.js` 模块：
```js
export default {
  namespaced: true,
  state: () => ({
    histories: []
  }),
  mutations: {
    /**
     * 1. 新增的历史记录位于头部
     * 2. 不可出现重复的记录
     */
    addHistory(state, newHistory) {
      const isFindIndex = state.histories.findIndex(
        (item) => item === newHistory
      )
      // 剔除旧数据
      if (isFindIndex !== -1) {
        state.histories.splice(isFindIndex, 1)
      }
      // 新增记录
      state.histories.unshift(newHistory)
    },
    /**
     * 删除指定数据
     */
    deleteHistory(state, index) {
      state.histories.splice(index, 1)
    },
    /**
     * 删除所有历史记录
     */
    deleteAllHistory(state) {
      state.histories = []
    }
  }
}
```
2. 在 `src/store/index.js` 完成注册, 并且需要做**缓存**处理

3. 在 `src/store/getters.js`中完成对应的快捷访问

4. 创建搜索历史的处理组件 `src/views/layout/components/header/header-search/history.vue`：
```vue
<template>
  <div>
    <div class="flex items-center">
      <span class="text-sm dark:text-zinc-400">最近搜索</span>
      <m-svg-icon 
        name="delete"
        class="w-2.5 h-2.5 p-0.5 hover:bg-zinc-100 dark:hover:bg-zinc-500 ml-1 duration-200 cursor-pointer rounded-sm"
        fillClass="fill-zinc-400"
        @click.stop="deleteAllItems"
      ></m-svg-icon>  
    </div>
    <div class="flex my-1" v-if="$store.getters.histories !== []">
      <template v-for="item,index in $store.getters.histories" :key="index">
        <div class="bg-zinc-100 dark:bg-zinc-400 dark:hover:bg-zinc-500 flex items-center cursor-pointer hover:bg-zinc-200 rounded-sm 
          px-1 py-0.5 duration-200 mr-1 mb-1"
          @click="itemClick(item)"
          >
          <span class="text-sm font-bold">{{item}}</span>
          <m-svg-icon
            name="input-delete"
            class="w-2.5 h-2.5 p-0.5 ml-1 duration-300 rounded-sm  dark:bg-zinc-400 hover:bg-zinc-100
              dark:hover:bg-zinc-700"
            @click.stop="deleteItem(index)"
          ></m-svg-icon>
        </div>
      </template>
    </div>
  </div>
</template>
<script>
const EMITS_ITEM_CLICK = 'itemClick'
</script>
<script setup>
import { useStore } from 'vuex'

const emits = defineEmits([EMITS_ITEM_CLICK])

const store = useStore()

// 点击了某一个搜索历史 , 触发事件
const itemClick = (item) => {
  console.log('点击了搜索历史')
  emits(EMITS_ITEM_CLICK, item)
}

// 删除一个搜索历史
const deleteItem = (index) => {
  console.log('删除搜索历史')
  store.commit('search/deleteHistory', index)
}

// 清空搜索历史
const deleteAllItems = () => {
  // TODO : 弹出对话框提示, 是否全部删除
  console.log('删除全部')
  store.commit('search/deleteAllHistory')
}
</script>
```

5. 在 `src/views/layout/components/header/header-search/index.vue` 中使用该组件：
```vue{10-11}
<template>
  <div class="w-full">
    <m-search v-model="inputValue"
      @search="onSearchHandler"
    >
      <template #dropdown>
        <!--搜索提示-->
        <hint-vue :searchText="inputValue" @itemClick="hintClickHandler" v-if="inputValue"></hint-vue>
        <div v-else>
          <!--搜索历史-->
          <history-vue v-if="!inputValue" @itemClick="onSearchHandler"></history-vue>
        </div>
      </template>
    </m-search>
  </div>
</template>
```
## 通用组件 : confirm 应用场景
目前当点击 **删除全部** 历史记录时，会直接删除，这样体验并不好，目前期望的是能够给用户一个 **提示** ，也就是 `confirm`

所以期望能够构建出一个对应的 `confirm` 组件

但是对于 `confirm` 这种组件而言，不希望它通过标签的形式进行使用，而是期望可以像 `element-plus` 中的 [confirm](https://element-plus.org/zh-CN/component/message-box.html#%E7%A1%AE%E8%AE%A4%E6%B6%88%E6%81%AF)一样，可以直接通过**方法的形式**进行调用，这样就太爽了

那么如果想要通过一个**方法**来进行一个**组件的展示**，并与其进行交互的话, 那应该怎么做呢....

### vNode + h函数 + render函数 明确 confirm 构建思路

[渲染函数](https://v3.cn.vuejs.org/guide/render-function.html#dom-%E6%A0%91), 在渲染函数中，需要了解如下概念：

1. 虚拟 `dom`：通过 `js` 来描述 `dom`
2. `vnode` 虚拟节点：告诉 `vue` 页面上需要渲染什么样子的节点
3. `h` 函数：用来创建 `vnode` 的函数，接受三个参数 `(要渲染的 dom，attrs 对象，子元素)`
4. `render` 函数：可以根据 `vnode` 来渲染 `dom`

**通过 `h` 函数可以生成一个 `vnode`，该 `vnode` 可以通过 `render` 函数被渲染**


所以据此就可以得出 `confirm` 组件的实现思路：

1. 创建一个 `confirm` 组件
2. 创建一个 `confirm.js` 模块，在该模块中 **返回一个 promise**
3. 同时利用 `h` 函数生成 `confirm.vue` 的 `vnode`
4. 最后利用 `render` 函数，渲染 `vnode` 到 `body` 中
### 构建 confirm 组件
![图片](../.vuepress/public/images/confirm1.png)

1. 创建 `src/libs/confirm/index.vue` 组件，并创建对应的 `props`:
```js
const props = defineProps({
  // 标题
  title: {
    type: String
  },
  // 描述
  content: {
    type: String,
    required: true
  },
  // 取消按钮文本
  cancelText: {
    type: String,
    default: '取消'
  },
  // 确定按钮文本
  confirmText: {
    type: String,
    default: '确定'
  },
  // 取消按钮事件
  cancelHandler: {
    type: Function
  },
  // 确定按钮事件
  confirmHandler: {
    type: Function
  },
  // 关闭 confirm 的回调
  close: {
    type: Function
  }
})
```
2. 因为最终期望通过方法进行调用，这会导致 **自动导入的组件无法使用**，所以我们需要手动导入需要使用到的通用组件：
```js
// 在方法调用的组件中，需要主动导入组件
import mButton from '../button/index.vue'
```

3. 创建对应的模板样式
```vue
<template>
  <div>
    <!-- 蒙版 -->
    <transition name="fade">
      <div
        v-if="isVisible"
        @click="close"
        class="w-screen h-screen bg-zinc-900/80 z-40 fixed top-0 left-0"
      ></div>
    </transition>
    <!-- 内容 -->
    <transition name="up">
      <div
        v-if="isVisible"
        class="w-[80%] fixed top-1/3 left-[50%] translate-x-[-50%] z-50 px-2 py-1.5 rounded-sm border dark:border-zinc-600 cursor-pointer bg-white dark:bg-zinc-800 xl:w-[35%]"
      >
        <!-- 标题 -->
        <div class="text-lg font-bold text-zinc-900 dark:text-zinc-200 mb-2">
          {{ title }}
        </div>
        <!-- 内容 -->
        <div class="text-base text-zinc-900 dark:text-zinc-200 mb-2">
          {{ content }}
        </div>
        <!-- 按钮 -->
        <div class="flex justify-end">
          <m-button type="info" class="mr-2" @click="onCancelClick">{{
            cancelText
          }}</m-button>
          <m-button type="primary" @click="onConfirmClick">{{
            confirmText
          }}</m-button>
        </div>
      </div>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.up-enter-active,
.up-leave-active {
  transition: all 0.5s;
}

.up-enter-from,
.up-leave-to {
  opacity: 0;
  transform: translate3d(-50%, 100px, 0);
}
</style>
```

4. 创建展示控制方法，因为需要保留执行动画，所以我们在 `mounted` 时，让内容展示：
```js
// 控制显示处理
const isVisible = ref(false)

/**
 * confirm 展示
 */
const show = () => {
  isVisible.value = true
}

/**
 * 页面构建完成之后，执行。保留动画
 */
onMounted(() => {
  show()
})
```

5. 处理关闭控制方法，同样因为动画需要展示，所以我们需要预留动画执行时间：
```js
// 过渡动画时长
const duration = '0.5s'

// confirm 关闭, 需保留动画执行时长
const close = () => {
  isVisible.value = false
  // ????? 为啥这样做 ???????????????
  // 延迟一段时间进行关闭回调 , 因为要等待动画完全关闭之后, 在去触发 props.close()
  setTimeout(() => {
    if (props.close) {
      props.close()
    }
  }, parseInt(duration.replace('0.','').replace('s','')) * 100 )
}
```
6. 利用 [状态驱动 css 概念](https://v3.cn.vuejs.org/api/sfc-style.html#%E7%8A%B6%E6%80%81%E9%A9%B1%E5%8A%A8%E7%9A%84%E5%8A%A8%E6%80%81-css) 绑定响应式数据到 `css` 中：
```vue
<style lang="scss" scoped>
.fade-enter-active , .fade-leave-active {
  transition: all v-bind(duration);
}
.fade-enter-from , .fade-leave-to {
  opacity: 0;
}
.up-enter-active , .up-leave-active {
  transition: all v-bind(duration);
}
.up-enter-from , .up-leave-to {
  opacity: 0;
  // transform: translate3d(-50%, 100px, 0);
  transform: translate(-50%,100px);
}
</style>
```

7. 处理取消按钮和确定按钮的点击行为：
```js
/**
 * 取消按钮点击事件
 */
const onCancelClick = () => {
  if (props.cancelHandler) {
    props.cancelHandler()
  }
  close()
}

/**
 * 确定按钮点击事件
 */
const onConfirmClick = () => {
  if (props.confirmHandler) {
    props.confirmHandler()
  }
  close()
}
```

`confirm` 组件本身，构建完成
### 函数调用 confirm 组件

1. 创建 `src/libs/confirm/index.js` 文件

2. 创建 `confirm` 方法，接收四个参数：
```js
/**
 *
 * @param {*} title 标题
 * @param {*} content 文本
 * @param {*} cancelText 取消按钮文本
 * @param {*} confirmText 确定按钮文本
 * @returns
 */
export const confirm = (
  title,
  content,
  cancelText = '取消',
  confirmText = '确定'
) => {}
```
3. 该方法应该 `return promise` （只有这样才可以通过 `.then` 监听到确定按钮事件）

4. 该方法允许只传递 `content`
```js
return new Promise((resolve, reject) => {
    // 允许只传递 content
    if (title && !content) {
      content = title
      title = ''
    }
  })
```

5. 利用 `h` 函数生成 `vNode`，并利用 `render` 函数进行渲染：
```js
import { h, render } from 'vue'
import confirmComponent from './index.vue'
export const confirm = (
  ...
) => {
  return new Promise((resolve, reject) => {
    ...

    // 关闭弹层事件
    const close = () => {
      render(null, document.body)
    }

    // 取消按钮事件
    const cancelHandler = () => {
      reject(new Error('取消按钮点击'))
    }

    // 确定按钮事件
    const confirmHandler = () => {
      resolve()
    }

    // 1. vnode
    const vNode = h(confirmComponent, {
      title,
      content,
      cancelText,
      confirmText,
      confirmHandler,
      cancelHandler,
      close
    })
    // 2. render
    render(vNode, document.body)
  })
}


```
6. 在 `src/libs/index.js` 中执行导入并导出：
```js
export { confirm } from './confirm'
```

7. 在 `src/views/layout/components/header/header-search/history.vue` 中进行触发：

```js
/**
 * 删除所有记录
 */
const deleteAllItems = () => {
  confirm('要删除所有历史记录吗？').then(() => {
    store.commit('search/deleteAllHistory')
  })
}

```