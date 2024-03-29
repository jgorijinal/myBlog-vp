# 跨域
## 同源策略
1. 什么是同源? 

如果两个页面的**协议**, **域名**, **端口**都相同, 则两个页面具有相同的源

比如, 相对于 http://www.test/com/index.html 页面的同源检测
![图片](../.vuepress/public/images/ky1.png)

2. 什么是**同源策略**? 

*同源策略是**浏览器**提供的一个**安全功能***

*浏览器规定, A 网站的 JavaScript, 不允许和**非同源**的网站 C 之间, 进行资源的交互* 例如:
* 无法读取非同源网页的 Cookie, LocalStorage, indexDB
* 无法接触非同源网页的 DOM
* 无法向非同源底子发送 Ajax 请求

## 跨域
什么是**跨域** ? 

**同源**指的是两个URL的协议, 玉米螟, 端口一致, 反之, 则是**跨域**

出现跨域的根本原因: **浏览器的同源策略**不允许非同源的 URL 之间进行资源的交互

### 浏览器对跨域请求的拦截
![图片](../.vuepress/public/images/ky2.png)

注意: 浏览器是允许发起跨域请求, 但是, 跨域请求回来的数据, 会被浏览器拦截, 无法被页面获取到 ! 

### 如何实现跨域数据请求

主要的两种解决方案 JSONP 和 CORS

* JSONP: 出现的早, 兼容性好(兼容低版本IE) 是前端程序员被迫想出来的一种临时解决方案. 缺点是只支持 GET 请求, 不支持 POST 请求

* CORS: 出现的较晚, 属于跨域 Ajax 请求的根本解决方案, 支持 GET 和 POST 请求, 缺点是不兼容低版本浏览器
## JSONP 实现原理
由于浏览器同源策略的限制, 网页中无法通过 ajax 请求非同源的接口数据。 但是` <script> ` 标签不受浏览器同源策略的影响,  可以通过 src 属性,
请求非同源的 js 脚本

就是通过 `<script>` 标签的 src 属性, 请求跨域的数据接口, 并通过 **函数调用**的形式, 接受跨域接口响应过来的数据。

### **将函数的定义和调用分离为 2 个 script 标签**

![图片](../.vuepress/public/images/scr1.png)
![图片](../.vuepress/public/images/scr2.png)

### 将函数的调用抽离为单独的 JS 文件

![图片](../.vuepress/public/images/jsonp1.png)
### 通过 callback 指定回调函数的名称
![图片](../.vuepress/public/images/jsonp2.png)
### 总结
1. 定义回调函数
2. 用 `<script>`标签请求接口, 这个接口呢希望他啊能够返回一个函数的调用, 至于他要调用一个什么样的函数, 可以通过查询字符串的形式告诉服务器
3. 服务器根据传递过去的函数名字返回一个函数的调用
### 使用 jquery 发送 jsonp 请求
![图片](../.vuepress/public/images/jq1.png)
![图片](../.vuepress/public/images/jq2.png)
#### 自定义回调函数名字
![图片](../.vuepress/public/images/jq3.png)
### JSONP 的缺点
由于 JSONP 是通过 `<script>` 标签的 src 属性, 来实现跨域数据获取的, 所以 ,**JSONP 只支持 GET 请求, 不支持 POST 请求**

注意 : **JSONP 和 Ajax 之间没有任何关系**, 不能把 JSONP 的请求数据的方式叫做 Ajax, 因为 JSONP 没有用到, XMLHttpRequest 这个对象







