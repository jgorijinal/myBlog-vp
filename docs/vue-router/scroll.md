# 滚动行为

使用前端路由，当切换到新路由时，想要页面滚到顶部，或者是保持原先的滚动位置

当创建一个 `Router` 实例，你可以提供一个 `scrollBehavior` 方法：

```js{4,10}
const router = createRouter({
  history: createWebHashHistory(),
  routes: [...],
  scrollBehavior (to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    return {
      top: 0,
      behavior: 'smooth',  //缓慢平滑滚动
       }
  }
})
```

函数可以返回一个 [`ScrollToOptions`](https://developer.mozilla.org/zh-CN/docs/web/api/window/scroll)位置对象。
第三个参数`savedPosition` , 只有当由**浏览器的后退/前进按钮触发**

```js
const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
  //简化成 return savedPosition ? savedPosition : { top:0 , behavior: 'smooth' }
});
```

### 滚动到指定元素
可以通过 `el` 传递一个 `CSS`选择器或一个 `DOM` 元素。在这种情况下，`top` 和 `left` 将被视为该元素的**相对偏移量**。

```js{8,9}
const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    return savedPosition
      ? savedPosition
      : {
          // 也可以这么写
          // el: document.getElementById('main'),
          el: "#main",
          top: -10, //相对偏移量  始终在元素 #main 上方滚动 10px
        };
  },
});
```
### 不同路由自定义滚动效果
```js{3-10,16,21}
const router = createRouter({
    history: createWebHashHistory(),
    scrollBehavior(to, from, savedPosition) {
        const options = {behavior: 'smooth'}
        if (to.meta.scrollTo) {   //meta.scroll存在的话 , options对象里面添加el
            options['el']= to.meta.scrollTo  
            console.log(options)
        }
        return savedPosition ? savedPosition : options
    },
     routes: [
        {
            path: '/home', 
            name: 'home', 
            component: Home,
            meta: {scrollTo: '#home'},
        },
        {
            path: '/about',
            name: 'about',
            meta: {scrollTo: '#about'},
            component: About,
```
### 使用promise异步处理滚动效果
```js{8-13}
const router = createRouter({
    history: createWebHashHistory(),
    scrollBehavior(to, from, savedPosition) {
        const options = {behavior: 'smooth',top:0}
        if (to.meta.scrollTo) {
            options['el']= to.meta.scrollTo
        }
        return new Promise((resolve,reject) =>{
            setTimeout(()=>{
                resolve(savedPosition ? savedPosition : options)
            },1000)
        })
    },
    routes:[...]
```