# 命名路由
有时候，通过一个名称来标识一个路由显得更方便一些，可以在创建 `Router` 实例的时候，在 `routes` 配置中给某个路由设置名称。
```js{4}
const routes = [
  {
    path: '/user/:username',
    name: 'user',
    component: User
  }
]
```
可以向 `router-link` 组件的 `:to` 属性传递一个对象：
```html
<router-link to="{name:'user' , params:{username:'eren'}}"></router-link>
```
等价于
```js
router.push({ name: 'user', params: { username: 'erina' } })
```
路由将导航到路径 `/user/eren`