<template><h1 id="生命周期-和-wsx脚本" tabindex="-1"><a class="header-anchor" href="#生命周期-和-wsx脚本" aria-hidden="true">#</a> 生命周期 和 WSX脚本</h1>
<h2 id="生命周期" tabindex="-1"><a class="header-anchor" href="#生命周期" aria-hidden="true">#</a> 生命周期</h2>
<h3 id="生命周期函数分类" tabindex="-1"><a class="header-anchor" href="#生命周期函数分类" aria-hidden="true">#</a> 生命周期函数分类</h3>
<p>小程序中的生命周期函数分为两类，分别是：</p>
<ol>
<li>应用的生命周期函数</li>
</ol>
<ul>
<li>特指小程序从启动 -&gt; 运行 -&gt; 销毁期间依次调用的那些函数</li>
</ul>
<ol start="2">
<li>页面的生命周期函数</li>
</ol>
<ul>
<li>特指小程序中，每个页面从加载 -&gt; 渲染 -&gt; 销毁期间依次调用的那些函数</li>
</ul>
<h3 id="应用的生命周期函数" tabindex="-1"><a class="header-anchor" href="#应用的生命周期函数" aria-hidden="true">#</a> 应用的生命周期函数</h3>
<p>小程序的应用生命周期函数需要在 <strong>app.js</strong>中进行声明
<img src="@source/.vuepress/public/images/app1.png" alt="图片"></p>
<h3 id="页面的生命周期函数" tabindex="-1"><a class="header-anchor" href="#页面的生命周期函数" aria-hidden="true">#</a> 页面的生命周期函数</h3>
<p>小程序的页面生命周期函数需要在页面的 <strong>.js 文件</strong>中进行声明
<img src="@source/.vuepress/public/images/app2.png" alt="图片"></p>
<h2 id="wsx" tabindex="-1"><a class="header-anchor" href="#wsx" aria-hidden="true">#</a> WSX</h2>
<p>小程序中 wxs 的典型应用场景就是 “<strong>过滤器</strong>”</p>
<h3 id="wxs-和-javascript-的关系-了解" tabindex="-1"><a class="header-anchor" href="#wxs-和-javascript-的关系-了解" aria-hidden="true">#</a> wxs 和 JavaScript 的关系(了解)</h3>
<p>虽然 wxs 的语法类似于 JavaScript，但是 wxs 和 JavaScript 是完全不同的两种语言</p>
<ol>
<li>wxs 有自己的数据类型</li>
</ol>
<ul>
<li>number 数值类型、string 字符串类型、boolean 布尔类型、object 对象类型、</li>
<li>function 函数类型、array 数组类型、 date 日期类型、 regexp 正则</li>
</ul>
<ol start="2">
<li>wxs 不支持类似于 ES6 及以上的语法形式</li>
</ol>
<ul>
<li>不支持：let、const、解构赋值、展开运算符、箭头函数、对象属性简写 等</li>
<li>支持：var 定义变量、普通 function 函数等类似于 ES5 的语法</li>
</ul>
<ol start="3">
<li>wxs 遵循 CommonJS 规范</li>
</ol>
<ul>
<li>module 对象</li>
<li>require() 函数</li>
<li>module.exports 对象</li>
</ul>
<h3 id="定义内嵌-wsx-脚本" tabindex="-1"><a class="header-anchor" href="#定义内嵌-wsx-脚本" aria-hidden="true">#</a> 定义内嵌 wsx 脚本</h3>
<p>wxs 代码可以编写在 wxml 文件中的 <code>&lt;wxs&gt;</code>标签内，就像 Javascript 代码可以编写在 html 文件中的 <code>&lt;script&gt;</code>
标签内一样。
wxml 文件中的每个<code>&lt;wxs&gt;&lt;/wxs&gt;</code> 标签，<strong>必须提供 module 属性</strong>，用来指定当前 wxs 的模块名称，方便在</p>
<p>wxml 中访问模块中的成员</p>
<p><img src="@source/.vuepress/public/images/toup.png" alt="图片"></p>
<h3 id="定义外联的-wsx-脚本" tabindex="-1"><a class="header-anchor" href="#定义外联的-wsx-脚本" aria-hidden="true">#</a> 定义外联的 wsx 脚本</h3>
<p>wxs 代码还可以编写在以 <strong>.wxs 为后缀名的文件</strong> 内，就像 javascript 代码可以编写在以 .js 为后缀名的文件中
一样</p>
<p><img src="@source/.vuepress/public/images/tools1.png" alt="图片"></p>
<h3 id="使用外联的-wsx-脚本" tabindex="-1"><a class="header-anchor" href="#使用外联的-wsx-脚本" aria-hidden="true">#</a> 使用外联的 wsx 脚本</h3>
<p>在 wxml 中引入外联的 wxs 脚本时，<strong>必须</strong>为 <code>&lt;wxs&gt;</code> 标签添加 <code>module</code> 和 <code>src</code> 属性，其中：</p>
<ul>
<li><strong>module</strong> 用来指定模块的名称</li>
<li>src 用来指定要引入的脚本的路径，且必须是<strong>相对路径</strong></li>
</ul>
<p><img src="@source/.vuepress/public/images/wailian.png" alt="图片"></p>
<h2 id="wsx-特点" tabindex="-1"><a class="header-anchor" href="#wsx-特点" aria-hidden="true">#</a> WSX 特点</h2>
<h3 id="与-javascript-不同" tabindex="-1"><a class="header-anchor" href="#与-javascript-不同" aria-hidden="true">#</a> 与 JavaScript 不同</h3>
<p>为了降低 wxs（WeiXin Script）的学习成本， wxs 语言在设计时借大量鉴了 JavaScript 的语法。但是本质上，wxs 和 JavaScript 是完全不同的两种语言!</p>
<h3 id="不能作为组件的事件回调" tabindex="-1"><a class="header-anchor" href="#不能作为组件的事件回调" aria-hidden="true">#</a> 不能作为组件的事件回调</h3>
<p>wxs 典型的应用场景就是 <strong>“过滤器”，经常配合 Mustache 语法进行使用</strong></p>
<p>但是，在 wxs 中定义的函数<strong>不能作为组件的事件回调函数</strong></p>
<h3 id="隔离性" tabindex="-1"><a class="header-anchor" href="#隔离性" aria-hidden="true">#</a> 隔离性</h3>
<p>隔离性指的是 wxs 的运行环境和其他 JavaScript 代码是隔离的。体现在如下两方面：</p>
<ul>
<li>wxs 不能调用 js 中定义的函数</li>
<li>wxs 不能调用小程序提供的 API</li>
</ul>
<h3 id="性能好" tabindex="-1"><a class="header-anchor" href="#性能好" aria-hidden="true">#</a> 性能好</h3>
<ul>
<li>在 <strong>iOS 设备</strong>上，小程序内的 WXS 会比 JavaScript 代码<strong>快 2 ~ 20 倍</strong></li>
<li>在 <strong>android 设备</strong>上，二者的运行效率无差异</li>
</ul>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<ol>
<li>能够知道如何实现页面之间的导航跳转</li>
</ol>
<ul>
<li>声明式导航、编程式导航</li>
</ul>
<ol start="2">
<li>能够知道如何实现下拉刷新效果</li>
</ol>
<ul>
<li>enablePullDownRefresh、onPullDownRefresh</li>
</ul>
<ol start="3">
<li>能够知道如何实现上拉加载更多效果</li>
</ol>
<ul>
<li>onReachBottomDistance、onReachBottom</li>
</ul>
<ol start="4">
<li>能够知道小程序中常用的生命周期函数</li>
</ol>
<ul>
<li>应用生命周期函数：onLaunch, onShow, onHide</li>
<li>页面生命周期函数：onLoad, onShow, onReady, onHide, onUnloa</li>
</ul>
</template>
