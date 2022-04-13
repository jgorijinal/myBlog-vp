# HTML
## `<router-link>` 和 `<router-view>`

```html
<template>
  <div class="nav">
    <!-- 通过传入 `to` 属性指定链接. -->
    <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
    <router-link to="/home">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/article">Article</router-link>
  </div>
  <!-- 路由匹配到的组件将渲染在这里 -->
  <router-view />
</template>
```
## `router-link-active` 和 `router-link-exact-active`
看被选中导航的`class`会发现他们有`router-link-active` 和 `router-link-exact-active`
  ![图片](../.vuepress/public/images/active.png)
前者是模糊匹配 , 后者是精确匹配 


改类名的方法:
* 在`router-link`标签里用`active-class`和`exact-active-class`单独配置类名
* 在初始配置文件中用`linkActiveClass`和`linkExactActiveClass`全局配置类名
```html
<router-link active-class="xxx" to="/home">Home</router-link>
<router-link exact-active-class="xxx" to="/article">Article</router-link>
```
或者
```js{3,4}
const router = createRouter({
    history: createWebHashHistory(),
    linkActiveClass:'xxx',
    linkExactActiveClass:'yyy',    
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/article',
            component: Article
        }
    ]
})
```
## `<router-view>` 的 `v-slot`
`<router-view>` 暴露了一个 `v-slot` API

基本用法 :
```html
  <router-view v-slot="{Component , route}">
    <component :is="Component" />
  </router-view>
```

* Component: 要传递给 `<component>`的组件对象(初始配置里面的`component:xxx`) 。

* route: 解析出的[标准化路由地址](https://router.vuejs.org/zh/api/#routelocationnormalized)。

### 应用: (1)根据meta动态设置样式
```js{6}
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            meta:'xxx',
            redirect:'/home',
        }
      ]
})
```
```html
 <router-view v-slot="{ Component, route }">
          <div :class="route.meta.class"> <!--包裹一个div, 加上meta里的class-->
            <component :is="Component" />
          </div>
        </router-view>
```
### 应用:(2) 主要使用 `<transition>` 和 `<keep-alive>` 组件来包裹你的路由组件。(官网例子)
```html
<Suspense>
  <template #default>
    <router-view v-slot="{ Component, route }">
      <transition :name="route.meta.transition || 'fade'" mode="out-in">
        <keep-alive>
          <component
            :is="Component"
            :key="route.meta.usePathKey ? route.path : undefined"
          />
        </keep-alive>
      </transition>
    </router-view>
  </template>
  <template #fallback> Loading... </template>
</Suspense>```

