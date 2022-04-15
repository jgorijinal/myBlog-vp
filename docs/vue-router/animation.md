# 过渡动画

对导航进行动画处理，需要使用 `v-slot`API：

```html
<router-view v-slot="{Component}">
  <transition name="fade" mode="out-in">
    <!--mode="out-in或者in-out"-->
    <component :is="Component" />
  </transition>
</router-view>
```
```css
.fade-enter-from,
.fade-leave-to {
  transform: translateX(-100%);
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}
```

## 单个路由的过渡动画
上面的用法会对所有的路由使用相同的过渡动画。如果想让每个路由的组件有不同的过渡，可以将元信息和动态的 `:name`结合在一起，放在`<transition>`上：
```js{10,16}
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/', redirect: '/home'},
        {path: '/home', name: 'home', component: Home},
        {
            path: '/about',
            name: 'about',
            component: About,
            meta: {transition: 'slide-left'}
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
            meta:{transition: 'slide-right'}
        },
        {path: '/article', name: 'article', component: Article}
    ]
})
```
```html{2}
<router-view v-slot="{Component , route}">
  <transition :name="route.meta.transition ? route.meta.transition : 'fade' "mode="out-in">
    <component :is="Component" />
  </transition>
</router-view>
```
