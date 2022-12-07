# 人类行为验证处理方案 - 脱离UI组件库实现登录、注册+表单校验

1. 在 `src/views/layout/components/header/header-my.vue` 中新增一个 **登录按钮**
![图片](../.vuepress/public/images/dengluanniu1.png)

2.  分别构建 `PC 端` 下和 `移动端` 下对应的路由：
```js
{
  path: '/login',
  name: 'login',
  component: () => import('@/views/login-register/login/index.vue')
}
```

3. 创建 `src/views/login-register/login/index.vue` 组件，为登录组件
4. 构建对应基础样式：
```vue
<template>
  <div
    class="relative h-screen bg-white dark:bg-zinc-700 text-center xl:bg-zinc-200"
  >
    <!-- 头部图标：PC端 -->
    <div class="hidden pt-5 h-8 xl:block">
      <img src="@/assets/vue.svg" class="m-auto w-7 h-7" alt="">
    </div>
    <!-- 头部图标：移动端 -->
    <div class="h-[111px] xl:hidden">
      <img
        v-lazy
        class="dark:hidden"
        src="https://res.lgdsunday.club/login-bg.png"
        alt=""
      />
      <img
        v-lazy
        class="h-5 absolute top-[5%] left-[50%] translate-x-[-50%]"
        src="@/assets/vue.svg"
        alt=""
        srcset=""
      />
    </div>
    <!-- 表单区 -->
    <div
      class="block px-3 mt-4 dark:bg-zinc-800 xl:bg-white xl:w-[388px] xl:dark:bg-zinc-900 xl:m-auto xl:mt-8 xl:py-4 xl:rounded-sm xl:shadow-lg"
    >
      <h3
        class="mb-2 font-semibold text-base text-main dark:text-zinc-300 hidden xl:block"
      >
        账号登录
      </h3>
      <!-- 表单 -->
      <form>
        <input
          class="dark:bg-zinc-800 dark:text-zinc-400 border-b-zinc-400 border-b-[1px] w-full outline-0 pb-1 px-1 text-base focus:border-b-main dark:focus:border-b-zinc-200 xl:dark:bg-zinc-900"
          name="username"
          type="text"
          placeholder="用户名"
          autocomplete="on"
        />
        <input
          class="dark:bg-zinc-800 dark:text-zinc-400 border-b-zinc-400 border-b-[1px] w-full outline-0 pb-1 px-1 text-base focus:border-b-main dark:focus:border-b-zinc-200 xl:dark:bg-zinc-900"
          name="password"
          type="password"
          placeholder="密码"
          autocomplete="on"
        />

        <div class="pt-1 pb-3 leading-[0px] text-right">
          <a
            class="inline-block p-1 text-zinc-400 text-right dark:text-zinc-600 hover:text-zinc-600 dark:hover:text-zinc-400 text-sm duration-400 cursor-pointer"
          >
            去注册
          </a>
        </div>

        <m-button class="w-full dark:bg-zinc-900 xl:dark:bg-zinc-800">
          登录
        </m-button>
      </form>

      <div class="flex justify-around mt-4">
        <!-- QQ -->
        <m-svg-icon class="w-4 cursor-pointer" name="qq"></m-svg-icon>
        <!-- 微信 -->
        <m-svg-icon class="w-4 cursor-pointer" name="wexin"></m-svg-icon>
      </div>
    </div>
  </div>
</template>
```

## 表单校验实现原理与方案分析
在绝大多数情况下, 进行登录的时, 都会通过 `UI组件库` 实现表单校验功能, 但是在没有这种UI组件库的情况下, 应该如何实现表单校验呢? 

首先就需要搞明白表单校验的 **实现原理**

#### 表单校验的实现原理
所谓表单校验，指的是：
* 在某个特定的时机(输入框失去焦点, 或者 内容变化)
* 检查表单元素中的内容是否满足某个条件 (校验规则)
* 如果不符合, 则展示对应的提示

根据以上描述，所需要关注的，其实就是三点内容：
1. 监听表单元素的对应时机
2. 检查内容是否匹配校验条件
3. 根据检查结果，展示对应提示
#### 自定义表单校验方案分析
1. 创建对应的 `field` 输入框组件
2. 该组件中，包含两个元素：
   1. `input` 输入框
   2. `span` 表示错误提示
3. 监听 `input` 输入框的 `blur 失去焦点` 事件
4. 根据 `input` 的 `value` 判断是否满足一个或多个指定的条件（比如：是否为空）
5. 如果不满足，则展示 `span` 标签，表示错误提示消息


确实可以实现一个基础的表单校验，但是这样的表单校验组件，很难具有 **普适** 性，因为实际开发中，表单校验的场景多种多样，比如：国际化处理。

所以说，把它抽离成一个 **通用组件** 意义并不大

这里采用一种更加普适的方式...

这个方式就是：[vee-validata](https://vee-validate.logaretm.com/v4/)

`vee-validata `是一个 `vue` 中专门做表单校验的库，该库更加具有 **普适** 性，也更加适合大家在实际开发中的使用。

## 基于 vee-validata 实现普适的表单校验
现在用 `vee-validate`来实现登录的表单校验逻辑

1. 安装 `vee-validate`
```shell
npm i vee-validate@4.5.10 --save
```

2. `vee-validata` 中提供了非常详细的基础[使用流程](https://vee-validate.logaretm.com/v4/tutorials/basics)

3. 在这一套流程中，涉及到了三个组件，分别为：
* `Form` 表单
* `Field` 输入框
* `ErrorMessage` 错误提示

4. 就需要使用这三个组件, 代替之前写好的表单结构, 其中每一个单独的表单都具备一个 `name`, 该 `name`对应表单域和错误提示
```vue{3-17}
<template>
  ...
      <!-- 表单 -->
      <vee-form>
        <vee-field ...  name="username" />
        <vee-error-message
          class="text-sm text-red-600 block mt-0.5 text-left"
          name="username"
        >
        </vee-error-message>

        <vee-field  ...  name="password"/>
        <vee-error-message
          class="text-sm text-red-600 block mt-0.5 text-left"
          name="password"
        >
        </vee-error-message>
        ...
      </vee-form>
      ...
</template>

<script>
export default {
  name: 'login'
}
</script>

<script setup>
import headerVue from '../components/header.vue'
// 组件都改一改名字
import {
  Form as VeeForm,
  Field as VeeField,
  ErrorMessage as VeeErrorMessage
} from 'vee-validate'
</script>
```
5. 接下来需要创建出对应的 **校验规则** ，对于 `VeeField` 而言，可以通过 `rules` 属性，绑定对应的校验规则，该规则为一个 **方法**

6. 创建 `src/views/login-register/validate.js` ，对外导出两个函数
```js
/**
 * 用户明德表单校验
 * 返回 true 表示表单校验通过 , 返回 字符串 表示表单校验不通过
 */
export const validateUsername = (value) => {
  if (!value) {
    return '用户名必须要填写!'
  }
  if (value.length < 3 || value.length > 12) {
    return '用户名的长度应该在3 ~ 12位之间'
  }
  return true
}
/**
 * 
 * 密码的比导弹校验
 */
export const validatePassword = (value) => {
  if (!value) {
    return '密码必须要填写!'
  }
  if (value.length < 6 || value.length > 12) {
    return '密码的长度应该在6 ~ 12位之间'
  }
  return true
}
```

7. 在 `src/views/login-register/login/index.vue` 中导入校验函数，并绑定到对应的`vee-filed`组件的 `:rules` 中
```js
<vee-field
  ...
  :rules="validateUsername"
  ...
/>
...
<vee-field
  ...
  :rules="validatePassword"
  ...
/>

import { validateUsername, validatePassword } from '../validate'
```

8. 此时，在**表单域失去焦点时**，表单校验会生效

9. 为 `vee-form` 添加 `submit` 事件，可以发现，当表单校验不通过时，不会触发该事件

```js
<vee-form @submit="onLoginHandler">

/**
 * 点击登录触发
 */
const onLoginHandler = () => {
  console.log('触发登录')
}
```

表单校验完成
## 人类行为验证

目前人类行为验证的实现方案，主要分为两种：

1. 收费平台，年费在几万到几十万不等，有专门的技术人员帮助对接：
* [极验](https://www.geetest.com/)
* [网易易盾](https://dun.163.com/trial/sense)
* …
2. 免费开源，验证的精准度，需要看服务端的能力：
* gitee 开源的： [SliderCaptcha](https://gitee.com/LongbowEnterprise/SliderCaptcha?_from=gitee_search)

项目中主要就是用这个开源的 `SliderCaptcha` 实现

### 构建人类行为验证模块

1. 创建 `vendor` 文件夹，复制 `SliderCaptcha` 源代码至该文件夹中

2. 创建 `src/views/login-register/login/slider-captcha.vue` ，作为人类行为验证组件

3. 在该组件中，完成对应 `UI` 样式：
![图片](../.vuepress/public/images/xingwei1.png)

```vue
<template>
  <div
    class="fixed top-[20%] left-[50%] translate-x-[-50%] w-[340px] h-[270px] text-sm bg-white dark:bg-zinc-800 rounded border border-zinc-200 dark:border-zinc-900 shadow-3xl"
  >
    <div class="flex items-center h-5 text-left px-1 mb-1">
      <span class="flex-grow dark:text-zinc-200">请完成安全验证</span>
      <m-svg-icon
        name="refresh"
        fillClass="fill-zinc-900 dark:fill-zinc-200"
        class="w-3 h-3 p-0.5 rounded-sm duration-300 cursor-pointer hover:bg-zinc-200 dark:hover:bg-zinc-900"
        @click="onReset"
      ></m-svg-icon>
      <m-svg-icon
        name="close"
        fillClass="fill-zinc-900 dark:fill-zinc-200"
        class="ml-2 w-3 h-3 p-0.5 rounded-sm duration-300 cursor-pointer hover:bg-zinc-200 dark:hover:bg-zinc-900"
        @click="onClose"
      ></m-svg-icon>
    </div>
    <div id="captcha"></div>
  </div>
</template>

<script setup>
/**
 * 重置
 */
const onReset = () => {}

/**
 * 关闭
 */
const onClose = () => {}
</script>
```
4. 在 `src/views/login-register/login/index.vue` 中导入该组件：
```html
import sliderCaptchaVue from './slider-captcha.vue'

<!-- 人类行为验证模块 -->
<slider-captcha-vue></slider-captcha-vue>
```

5. 接下来就需要生成 `sliderCaptcha` 实例，并且在 **前端用户拼图成功之后，把用户的拼图操作路径（用户行为）数据传递给服务端，由服务端进行人类行为判定**
6. 在 `src/views/login-register/login/slider-captcha.vue` 中：
```js
import '@/vendor/SliderCaptcha/slidercaptcha.min.css'
import '@/vendor/SliderCaptcha/longbow.slidercaptcha.min.js'
import { getCaptcha } from '@/api/sys'
import { onMounted } from 'vue'

let captcha = null
onMounted(() => {
  captcha = sliderCaptcha({
    // 渲染位置
    id: 'captcha',
    // 用户拼图成功之后的回调
    async onSuccess(arr) {
      const res = await getCaptcha({
        behavior: arr
      })
    },
    // 用户拼图失败之后的回调
    onFail() {
      console.log('onFail')
    },
    // 默认的验证方法，咱们不在此处进行验证，而是选择在用户拼图成功之后进行验证，所以此处永远返回为 true
    verify() {
      return true
    }
  })
})
```
7. 创建 `src/api/sys.js` 模块，构建请求接口：
```js
import request from '@/utils/request'

/**
 * 人类行为验证
 */
export const getCaptcha = (data) => {
  return request({
    url: '/sys/captcha',
    method: 'POST',
    data
  })
}
```

8. 当用户服务端返回成功之后，传递事件到 `login` 组件，同时处理 `close` 和 `reset` 事件
```js
<script>
const EMITS_CLOSE = 'close'
const EMITS_SUCCESS = 'success'
</script>

const emits = defineEmits([EMITS_CLOSE, EMITS_SUCCESS])
// 用户拼图成功之后的回调
async onSuccess(arr) {
  ...
  if (res) {
    emits(EMITS_SUCCESS)
  }
}

/**
 * 重置
 */
const onReset = () => {
  captcha.reset()
}

/**
 * 关闭
 */
const onClose = () => {
  emits(EMITS_CLOSE)
}
```
9. 在 `src/views/login-register/login/index.vue` 中，监听对应事件处理

```js
    <!-- 人类行为验证模块 -->
    <slider-captcha-vue v-if="isCaptchaVisible" @success="onSuccess" @close="onClose"></slider-captcha-vue>

...
import sliderCaptchaVue from './slider-captcha.vue'
import { ref } from 'vue' 

// // 控制 sliderCaptcha 显示/隐藏
const isCaptchaVisible = ref(false)
// 点击登录按钮
const onLoginHandler = (val) => {
  isCaptchaVisible.value = true
}

// 行为验证成功
const onSuccess = () => {
  isCaptchaVisible.value = false
  // TODO: 真正的登录请求
}
// //  sliderCaptcha 关闭
const onClose = () => {
  isCaptchaVisible.value = false
}
</script
```
