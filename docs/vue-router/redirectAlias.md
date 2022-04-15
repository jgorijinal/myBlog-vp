# 重定向和别名
## 重定向
重新跳转到某个地方
```js
const router = new VueRouter({
  routes: [
    { path: '/a', redirect: '/b' }
  ]
})
```
重定向的目标也可以是一个命名的路由：
```js
const router = new VueRouter({
  routes: [
    { path: '/a', redirect: { name: 'foo' }}
  ]
})
```

## 别名
`/a` 的别名是 `/b`，意味着，当用户访问 `/b` 时，`URL` 会**保持**为 `/b`，但是`路由匹配`则为 `/a`，就像用户访问 `/a` 一样。
```js
const router = new VueRouter({
  routes: [
    { path: '/a', component: A, alias: '/b' }
  ]
})
```
复杂点 , 实际很简单
```js
const router = new VueRouter({
  routes: [
    { path: '/article-:id(\\d+).html', component: A, alias: '/:id(\\d+).html' }
  ]
})
```