# 懒加载

当打包构建应用时，JavaScript 包会变得非常大，影响页面加载。如果我们能把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应组件，这样就会更加高效。

```js
// import UserDetails from './views/UserDetails'
// 替换成
const UserDetails = () => import("./views/UserDetails");

const router = createRouter({
  // ...
  routes: [{ path: "/users/:id", component: UserDetails }],
});
```
