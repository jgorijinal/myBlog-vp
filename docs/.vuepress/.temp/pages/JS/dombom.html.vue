<template><h1 id="bom" tabindex="-1"><a class="header-anchor" href="#bom" aria-hidden="true">#</a> BOM</h1>
<p>JavaScript有一个非常重要的运行环境就是浏览器，而且浏览器本身又作为一个应用程序需要对其本身进行操作，所以通常浏览器会有对
应的对象模型（BOM，Browser Object Model）。</p>
<p>可以将 BOM 看成是<strong>连接JavaScript脚本与浏览器窗口的桥梁</strong></p>
<p>BOM 主要包括以下的对象模型 :</p>
<ul>
<li>window：包括全局属性、方法，控制浏览器窗口相关的属性、方法；</li>
<li>location：浏览器连接到的对象的位置（URL）；</li>
<li>history：操作浏览器的历史；</li>
<li>document：当前窗口操作文档的对象</li>
</ul>
<p>window 对象在浏览器中有两个身份：</p>
<ul>
<li>身份一：全局对象
<ul>
<li>ECMAScript 其实是有一个全局对象的，这个全局对象在 Node 中是 global；</li>
<li>在浏览器中就是window对象；</li>
</ul>
</li>
<li>身份二：浏览器窗口对象
<ul>
<li>作为浏览器窗口时，提供了对浏览器操作的相关的 API</li>
</ul>
</li>
</ul>
<h2 id="window-全局对象" tabindex="-1"><a class="header-anchor" href="#window-全局对象" aria-hidden="true">#</a> Window 全局对象</h2>
<p>在浏览器中，window 对象就是之前经常提到的全局对象，也就是 GO 对象：</p>
<ul>
<li>比如在全局通过 var 声明的变量，会被添加到 GO 中，也就是会被添加到 window 上；</li>
<li>比如 window 默认给我们提供了全局的函数和类：setTimeout、Math、Date、Object 等；</li>
</ul>
<p><img src="@source/.vuepress/public/images/quanju1.png" alt="图片"></p>
<h2 id="window-窗口对象" tabindex="-1"><a class="header-anchor" href="#window-窗口对象" aria-hidden="true">#</a> Window 窗口对象</h2>
<p>事实上 window 对象上肩负的重担是非常大的：</p>
<ul>
<li>第一：包含大量的属性，localStorage、console、location、history、screenX、scrollX 等等（大概60+个属性）；</li>
<li>第二：包含大量的方法，alert、close、scrollTo、open等等（大概40+个方法）；</li>
<li>第三：包含大量的事件，focus、blur、load、hashchange等等（大概30+个事件）；</li>
<li>第四：<strong>包含从 EventTarget 继承过来的方法</strong>，addEventListener、removeEventListener、dispatchEvent 方法；</li>
</ul>
<p>那么这些大量的属性、方法、事件在哪里查看呢？</p>
<ul>
<li>MDN文档：<a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Window" target="_blank" rel="noopener noreferrer">https://developer.mozilla.org/zh-CN/docs/Web/API/Window<ExternalLinkIcon/></a></li>
</ul>
<p>查看 MDN文 档时，会发现有很多不同的符号，解释一下是什么意思：</p>
<ul>
<li>删除符号：表示这个 API 已经废弃，不推荐继续使用了</li>
<li>点踩符号：表示这个 API 不属于 W3C 规范，某些浏览器有实现（所以兼容性的问题）</li>
<li>实验符号：该 AP I是实验性特性，以后可能会修改，并且存在兼容性问题</li>
</ul>
<h3 id="window-常见的属性" tabindex="-1"><a class="header-anchor" href="#window-常见的属性" aria-hidden="true">#</a> window 常见的属性</h3>
<p><img src="@source/.vuepress/public/images/winshuxing.png" alt="图片">
<img src="@source/.vuepress/public/images/oiheight.png" alt="图片"></p>
<h3 id="window-常见的方法" tabindex="-1"><a class="header-anchor" href="#window-常见的方法" aria-hidden="true">#</a> window 常见的方法</h3>
<p><img src="@source/.vuepress/public/images/winfangfa.png" alt="图片"></p>
<h3 id="window-常见的事件" tabindex="-1"><a class="header-anchor" href="#window-常见的事件" aria-hidden="true">#</a> window 常见的事件</h3>
<p><img src="@source/.vuepress/public/images/win.png" alt="图片"></p>
<h2 id="eventtarget" tabindex="-1"><a class="header-anchor" href="#eventtarget" aria-hidden="true">#</a> EventTarget</h2>
<p><strong>Window 继承自 EventTarget，所以会继承其中的属性和方法：</strong></p>
<ul>
<li>addEventListener：注册某个事件类型以及事件处理函数；</li>
<li>removeEventListener：移除某个事件类型以及事件处理函数；</li>
<li>dispatchEvent：派发某个事件类型到 EventTarget 上；</li>
</ul>
<p><img src="@source/.vuepress/public/images/ar11.png" alt="图片">
<img src="@source/.vuepress/public/images/dp001.png" alt="图片"></p>
<h2 id="location-对象" tabindex="-1"><a class="header-anchor" href="#location-对象" aria-hidden="true">#</a> Location 对象</h2>
<p>Location 对象用于表示 window 上当前链接到的 URL 信息</p>
<h3 id="location-对象常见的属性" tabindex="-1"><a class="header-anchor" href="#location-对象常见的属性" aria-hidden="true">#</a> Location 对象常见的属性</h3>
<ul>
<li>href: 当前 window 对应的超链接 URL, 整个 URL；</li>
<li>protocol: 当前的协议；</li>
<li>host: 主机地址；</li>
<li>hostname: 主机地址(不带端口)；</li>
<li>port: 端口；</li>
<li>pathname: 路径；</li>
<li>search: 查询字符串；</li>
<li>hash: 哈希值；</li>
<li>username：URL 中的 username（很多浏览器已经禁用）；</li>
<li>password：URL 中的 password（很多浏览器已经禁用）；</li>
</ul>
<p><img src="@source/.vuepress/public/images/location55.png" alt="图片"></p>
<h3 id="location-对象常见的方法" tabindex="-1"><a class="header-anchor" href="#location-对象常见的方法" aria-hidden="true">#</a> Location 对象常见的方法</h3>
<p>location其实是URL的一个抽象实现
<img src="@source/.vuepress/public/images/url11.png" alt="图片">
location 有如下常用的方法：</p>
<ul>
<li>assign：赋值一个新的 URL，并且跳转到该 URL 中；</li>
<li>replace：打开一个新的 URL，并且跳转到该 URL 中（不同的是不会在浏览记录中留下之前的记录）；</li>
<li>reload：重新加载页面，可以传入一个 Boolean 类型</li>
</ul>
<p><img src="@source/.vuepress/public/images/locationfangfa.png" alt="图片"></p>
<h3 id="history对象常见属性和方法" tabindex="-1"><a class="header-anchor" href="#history对象常见属性和方法" aria-hidden="true">#</a> history对象常见属性和方法</h3>
<p>history 对象允许我们访问浏览器曾经的会话历史记录。</p>
<p>有两个属性：</p>
<ul>
<li>length：会话中的记录条数；</li>
<li>state：当前保留的状态值；</li>
</ul>
<p>有五个方法：</p>
<ul>
<li>back()：返回上一页，等价于 history.go(-1)；</li>
<li>forward()：前进下一页，等价于 history.go(1)；</li>
<li>go()：加载历史中的某一页；</li>
<li>pushState()：打开一个指定的地址；</li>
<li>replaceState()：打开一个新的地址，并且使用 replace；</li>
</ul>
<p><img src="@source/.vuepress/public/images/history.png" alt="图片"></p>
</template>
