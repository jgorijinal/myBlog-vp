 ## 嵌套路由
 要在嵌套的出口中渲染组件，需要在 VueRouter 的参数中使用 `children` 配置：
 `注意`:父级路由组件中要有`<router-view />`
 ```js
 const router = new VueRouter({
  routes: [
    {
      path: '/user/:id',  
      component: User,   //注意 User里面一定要有个 <router-view />标签
      children: [
        {
          path: 'profile',  //嵌套不加斜杠
          component: UserProfile
        },
        {
          path: 'posts',
          component: UserPosts
        }
      ]
    }
  ]
})
```