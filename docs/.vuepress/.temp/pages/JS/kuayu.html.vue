<template><h1 id="跨域" tabindex="-1"><a class="header-anchor" href="#跨域" aria-hidden="true">#</a> 跨域</h1>
<h2 id="同源策略" tabindex="-1"><a class="header-anchor" href="#同源策略" aria-hidden="true">#</a> 同源策略</h2>
<ol>
<li>什么是同源?</li>
</ol>
<p>如果两个页面的<strong>协议</strong>, <strong>域名</strong>, <strong>端口</strong>都相同, 则两个页面具有相同的源</p>
<p>比如, 相对于 http://www.test/com/index.html 页面的同源检测
<img src="@source/.vuepress/public/images/ky1.png" alt="图片"></p>
<ol start="2">
<li>什么是<strong>同源策略</strong>?</li>
</ol>
<p><em>同源策略是<strong>浏览器</strong>提供的一个<strong>安全功能</strong></em></p>
<p><em>浏览器规定, A 网站的 JavaScript, 不允许和<strong>非同源</strong>的网站 C 之间, 进行资源的交互</em> 例如:</p>
<ul>
<li>无法读取非同源网页的 Cookie, LocalStorage, indexDB</li>
<li>无法接触非同源网页的 DOM</li>
<li>无法向非同源底子发送 Ajax 请求</li>
</ul>
<h2 id="跨域-1" tabindex="-1"><a class="header-anchor" href="#跨域-1" aria-hidden="true">#</a> 跨域</h2>
<p>什么是<strong>跨域</strong> ?</p>
<p><strong>同源</strong>指的是两个URL的协议, 玉米螟, 端口一致, 反之, 则是<strong>跨域</strong></p>
<p>出现跨域的根本原因: <strong>浏览器的同源策略</strong>不允许非同源的 URL 之间进行资源的交互</p>
<h3 id="浏览器对跨域请求的拦截" tabindex="-1"><a class="header-anchor" href="#浏览器对跨域请求的拦截" aria-hidden="true">#</a> 浏览器对跨域请求的拦截</h3>
<p><img src="@source/.vuepress/public/images/ky2.png" alt="图片"></p>
<p>注意: 浏览器是允许发起跨域请求, 但是, 跨域请求回来的数据, 会被浏览器拦截, 无法被页面获取到 !</p>
<h3 id="如何实现跨域数据请求" tabindex="-1"><a class="header-anchor" href="#如何实现跨域数据请求" aria-hidden="true">#</a> 如何实现跨域数据请求</h3>
<p>主要的两种解决方案 JSONP 和 CORS</p>
<ul>
<li>
<p>JSONP: 出现的早, 兼容性好(兼容低版本IE) 是前端程序员被迫想出来的一种临时解决方案. 缺点是只支持 GET 请求, 不支持 POST 请求</p>
</li>
<li>
<p>CORS: 出现的较晚, 属于跨域 Ajax 请求的根本解决方案, 支持 GET 和 POST 请求, 缺点是不兼容低版本浏览器</p>
</li>
</ul>
<h2 id="jsonp-实现原理" tabindex="-1"><a class="header-anchor" href="#jsonp-实现原理" aria-hidden="true">#</a> JSONP 实现原理</h2>
<p>由于浏览器同源策略的限制, 网页中无法通过 ajax 请求非同源的接口数据。 但是<code>&lt;script&gt;</code> 标签不受浏览器同源策略的影响,  可以通过 src 属性,
请求非同源的 js 脚本</p>
<p>就是通过 <code>&lt;script&gt;</code> 标签的 src 属性, 请求跨域的数据接口, 并通过 <strong>函数调用</strong>的形式, 接受跨域接口响应过来的数据。</p>
<h3 id="将函数的定义和调用分离为-2-个-script-标签" tabindex="-1"><a class="header-anchor" href="#将函数的定义和调用分离为-2-个-script-标签" aria-hidden="true">#</a> <strong>将函数的定义和调用分离为 2 个 script 标签</strong></h3>
<p><img src="@source/.vuepress/public/images/scr1.png" alt="图片">
<img src="@source/.vuepress/public/images/scr2.png" alt="图片"></p>
<h3 id="将函数的调用抽离为单独的-js-文件" tabindex="-1"><a class="header-anchor" href="#将函数的调用抽离为单独的-js-文件" aria-hidden="true">#</a> 将函数的调用抽离为单独的 JS 文件</h3>
<p><img src="@source/.vuepress/public/images/jsonp1.png" alt="图片"></p>
<h3 id="通过-callback-指定回调函数的名称" tabindex="-1"><a class="header-anchor" href="#通过-callback-指定回调函数的名称" aria-hidden="true">#</a> 通过 callback 指定回调函数的名称</h3>
<p><img src="@source/.vuepress/public/images/jsonp2.png" alt="图片"></p>
<h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3>
<ol>
<li>定义回调函数</li>
<li>用 <code>&lt;script&gt;</code>标签请求接口, 这个接口呢希望他啊能够返回一个函数的调用, 至于他要调用一个什么样的函数, 可以通过查询字符串的形式告诉服务器</li>
<li>服务器根据传递过去的函数名字返回一个函数的调用</li>
</ol>
<h3 id="jsonp-的缺点" tabindex="-1"><a class="header-anchor" href="#jsonp-的缺点" aria-hidden="true">#</a> JSONP 的缺点</h3>
<p>由于 JSONP 是通过 <code>&lt;script&gt;</code> 标签的 src 属性, 来实现跨域数据获取的, 所以 ,<strong>JSONP 只支持 GET 请求, 不支持 POST 请求</strong></p>
<p>注意 : <strong>JSONP 和 Ajax 之间没有任何关系</strong>, 不能把 JSONP 的请求数据的方式叫做 Ajax, 因为 JSONP 没有用到, XMLHttpRequest 这个对象</p>
</template>
