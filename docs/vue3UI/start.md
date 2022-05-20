# 使用 vite 搭建官网
使用了 `vite` , `Vue3` , `TS`写的`UI`组件
[vite中文官网](https://cn.vitejs.dev/guide/)
## 创建项目
```sh
yarn create vite
```
## 初始化 vue-router
安装 `vue-router`
```sh
yarn add vue-router@4

yarn add -D sass
```
注意:必须要添加 `<router-view />`标签
```
src/router
|--index.ts
|--routes.ts
```
src/router/routes.ts
```ts
const routes = [
  {
    path:'/',
    name:'home',
    component:()=>import('../views/Home.vue')
  }
] as RouterRecordRaw[]

export default routes
```
src/router/index.ts
```ts
import {createRouter , createWebHashHistory} from 'vue-router';
import {App} from 'vue';
import routes from './routes'
const router = createRouter({
  history:createWebHashHistory(),
  routes
})

export const setupRouter = (app:App)=>{
  app.use(router)
}

export default router
```
main.ts
```ts
import { createApp } from 'vue'
import App from './App.vue'
import router ,{ setupRouter } from './router';

const bootstrap = async ()=>{
  const app = createApp(App)
  setupRouter(app)
  await router.isReady()
  app.mount('#app')
}
bootstrap()
```
## 别名 @
```sh
yarn add -D path
yarn add -D @types/node
```
```ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve:{
    alias:{'@':path.resolve(__dirname,'src')}
  }
})
```
## provide/inject 实现sidebar切换按钮
要在App.vue上声明`provide`,即可把`sidebarVisible`传递给所有子组件中

要注意比较多的CSS细节 , 如响应式 ...
### App.vue
App.vue
```vue
<script setup lang="ts">
import {provide, ref} from 'vue';

const width = document.documentElement.clientWidth;
const sidebarVisible = ref(width < 960 ? false : true);  // 初始化时获取屏幕宽度, 判断是否显示sidebar
provide('sidebarVisible', sidebarVisible);
</script>
<template>
  <div>
    <router-view/>        <!-- <router-view/> -->
  </div>
</template>
```
### topNav.vue 上导航栏
```vue
<script setup lang="ts">
import {inject, Ref} from 'vue';
import Icon from '@/components/Icon.vue'
const sidebarVisible = inject<Ref<Boolean>>('sidebarVisible')    // inject 注入
const toggle = ()=>{
  sidebarVisible.value = !sidebarVisible.value  
}
</script>
<template>
  <div class="topNav">
    <div class="toggleMenu" @click="toggle">
      <Icon name="Humberg" />                 <!--封装的 Icon 组件-->
    </div>
    <div class="logo">Logo</div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
.topNav {
  position: fixed;
  width:100%;
  background: lightgrey;
  z-index: 10;
  display: flex;
  padding: 16px;
  color: #213547;
  border-bottom: 1px solid #e7e7e8;
  .toggleMenu {
    margin-right: 8px;
    svg {
      width: 1.5em;
      height: 1.5em;
    }
    &:hover{
      cursor: pointer;
    }
  }
  > .logo {
    max-width: 6em;
    margin-right: auto;
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
}

@media (max-width: 960px) {
  .topNav {
    justify-content: space-between;
    > .logo {
      margin-right: 0;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%);
    }
  }
}
@media (min-width: 960px) {
  .toggleMenu{
    display: none;
  }
  .menu {
    display: none;
  }
}
</style>
```
### Sidebar.vue 侧边栏
```vue
<script lang="ts" setup>
import {inject} from 'vue';
const sidebarVisible = inject('sidebarVisible');  // inejct
window.addEventListener('resize', (e) => {            // resize
  e.target.innerWidth < 960 ? sidebarVisible.value = false : sidebarVisible.value = true;
});
</script>
<template>
  <Transition>           <!--Transition-->
    <aside v-if="sidebarVisible">
      <h1>组件列表</h1>
      <ul>
        <li>
          <router-link to="/doc/switch">Switch</router-link>
        </li>
        <li>
          <router-link to="/doc/button" exact-active-class="active">Button</router-link>
        </li>
        <li>
          <router-link to="/doc/tabs">Tabs</router-link>
        </li>
        <li>
          <router-link to="/doc/dialog">Dialog</router-link>
        </li>
      </ul>
    </aside>
  </Transition>
</template>
<style lang="scss" scoped>
aside {
  overflow: auto;
  position: fixed;
  width: 320px;
  height: 100vh;
  background: pink;
  padding-top: 54px;
  z-index: 9;
  h1 {
    font-size: 20px;
    padding-top: 26px;
    padding-left: 46px;
  }
  a {
    display: block;
    width: 100%;
    color: black;
    font-size: 16px;
    padding: 10px 0 10px 46px;

    &:hover {
      color: #31835e;
    }

    &.router-link-exact-active {
      color: #31835e;
    }
  }
}
@media (max-width: 960px) {
  aside {
    width: 265px;
    h1 {
      padding-left: 30px;
    }
    a {
      padding-left: 30px;
    }
  }
}
.v-enter-active, .v-leave-active {
  transition: all 0.3s ease;
}
.v-enter-from, .v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}
</>
```
### Icon.vue 图标组件
图标使用了[iconfont官网](https://www.iconfont.cn/) , 自己封装一下
```vue
<script setup lang="ts">
const props = defineProps({    // defineProps
  name: {
    type: String,
    required: true
  }
});
</script>
<template>
  <svg class="icon" aria-hidden="true">
    <use :xlink:href="`#icon-${props.name}`"></use>
  </svg>
</template>
<style lang="scss" scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
```
### Docs.vue
```vue
<script lang="ts" setup>
import TopNav from '@/components/TopNav.vue';
import Sidebar from '@/components/Sidebar.vue';
</script>

<template>
  <TopNav/>
  <div class="content">
  <Sidebar />
    <main>
      <router-view/>    <!--嵌套路由的<router-view/>-->
    </main>
  </div>
</template>
<style lang="scss" scoped>
main {
  width: 100%;
  height: 100vh;
  background: lightgreen;
  position: absolute;
  top: 54px;
  left: 320px;
}
@media (max-width: 960px) {
  main {
    left: 0;
  }
}
</style>
```
## 路由间切换
使用了`vue-router`的嵌套路由

routes.ts
```ts
import {RouteRecordRaw} from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/doc',
    name: 'doc',
    component: () => import('@/views/Doc.vue'),
    children: [
      {path:'switch', component:()=>import('@/components/SwitchDemo.vue')},
      {path:'button', component:()=>import('@/components/ButtonDemo.vue')},
      {path:'dialog', component:()=>import('@/components/DialogDemo.vue')},
      {path:'tabs', component:()=>import('@/components/TabsDemo.vue')},
    ]
  },
];

export default routes;
```


