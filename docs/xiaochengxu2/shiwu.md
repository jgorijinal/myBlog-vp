# 常见失误
## 点击 `<navigator>` 无法跳转
在学小程序的时候发现给 `<navigator>` 添加 url 跳转不过去，需要检查以下几点：

1. url 路径是否加了 `/`, 一定必须要加
2. **跳转的路径必须要在 app.json 里面的 pages 配置中声明** !!!!!!!!!!!!! 无论是 tabBar 页面还是 非tabBar 页面
3. tabBar页面的 open-type属性为 **switchTab**, 非tabBar 页面的 open-type 属性为 **navigate**

## setData() 是同步的还是异步的
* setData() 在设置 data 上是**同步**的
* 通过最新的数据对 wxml 进行渲染,  渲染的过程是**异步**的


