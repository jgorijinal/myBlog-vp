<template><h1 id="手写防抖和节流" tabindex="-1"><a class="header-anchor" href="#手写防抖和节流" aria-hidden="true">#</a> 手写防抖和节流</h1>
<h2 id="认识防抖-debounce-函数" tabindex="-1"><a class="header-anchor" href="#认识防抖-debounce-函数" aria-hidden="true">#</a> 认识防抖 debounce 函数</h2>
<ul>
<li>当事件触发时，相应的函数<strong>并不会立即触发</strong>，而是<strong>会等待一定的时间</strong>；</li>
<li>当事件密集触发时，函数的触发会被频繁的<strong>推迟</strong>；</li>
<li><em>只有等待了一段时间也没有事件触发，才会真正的执行响应函数；</em></li>
</ul>
<p><img src="@source/.vuepress/public/images/fd1.png" alt="图片"></p>
<p><strong>防抖的应用场景很多：</strong></p>
<ul>
<li>输入框中频繁的输入内容，搜索或者提交信息；</li>
<li>频繁的点击按钮，触发某个事件；</li>
<li>监听浏览器滚动事件，完成某些特定操作；</li>
<li>用户缩放浏览器的 resize 事件</li>
</ul>
<h4 id="防抖的案例" tabindex="-1"><a class="header-anchor" href="#防抖的案例" aria-hidden="true">#</a> 防抖的案例</h4>
<p>遇到过这样的场景，在某个<strong>搜索框中输入自己想要搜索的内容</strong>：</p>
<p>比如想要搜索一个MacBook：</p>
<ul>
<li>当我输入m时，为了更好的用户体验，通常会出现对应的联想内容，这些联想内容通常是保存在服务器的，所以需要
一次网络请求；</li>
<li>当继续输入ma时，再次发送网络请求；</li>
<li>那么macbook一共需要发送7次网络请求；</li>
<li>这大大损耗我们整个系统的性能，无论是前端的事件处理，还是对于服务器的压力;</li>
</ul>
<p>但是我们需要这么多次的网络请求吗？</p>
<ul>
<li>不需要，正确的做法应该是在合适的情况下再发送网络请求；</li>
<li>比如如果用户快速的输入一个macbook，那么只是发送一次网络请求；</li>
<li>比如如果用户是输入一个m想了一会儿，这个时候m确实应该发送一次网络请求；</li>
<li>也就是我们应该监听用户在某个时间，比如500ms内，没有再次触发时间时，再发送网络请求；</li>
</ul>
<p>这就是防抖的操作：只有在某个时间内，没有再次触发某个函数时，才真正的调用这个函数</p>
<h2 id="认识节流-throttle-函数" tabindex="-1"><a class="header-anchor" href="#认识节流-throttle-函数" aria-hidden="true">#</a> 认识节流 throttle 函数</h2>
<ul>
<li>当事件触发时，<strong>会执行</strong>这个事件的响应函数；</li>
<li>如果这个事件会被频繁触发，那么节流函数会按照<strong>一定的频率来执行函数</strong>；</li>
<li>不管在这个中间有多少次触发这个事件，执行函数的频繁总是固定的；</li>
</ul>
<p><img src="@source/.vuepress/public/images/jieliu.png" alt="图片"></p>
<p>节流的应用场景：</p>
<ul>
<li>监听页面的滚动事件；</li>
<li>鼠标移动事件；</li>
<li>用户频繁点击按钮操作；</li>
<li>游戏中的一些设计；</li>
</ul>
<h2 id="underscore-库" tabindex="-1"><a class="header-anchor" href="#underscore-库" aria-hidden="true">#</a> Underscore 库</h2>
<p>事实上可以通过一些第三方库来实现防抖操作：</p>
<ul>
<li>lodash</li>
<li>underscore</li>
</ul>
<p><strong>这里使用 underscore</strong></p>
<ul>
<li>可以理解成 lodash 是 underscore 的升级版，它更重量级，功能也更多；</li>
<li>但是目前看到 underscore 还在维护，lodash 已经很久没有更新了；</li>
</ul>
<p>Underscore 的官网： <a href="https://underscorejs.org/" target="_blank" rel="noopener noreferrer">https://underscorejs.org/<ExternalLinkIcon/></a></p>
<p>Underscore 的安装有很多种方式：</p>
<ul>
<li>下载 Underscore ，本地引入；</li>
<li>通过 CDN 直接引入；</li>
<li>通过包管理工具（npm）管理安装；</li>
</ul>
<p>这里直接通过 CDN：
<code>&lt;script src=&quot;https://cdn.jsdelivr.net/npm/underscore@1.13.1/underscore-umd-min.js&quot;&gt;&lt;/script&gt;</code></p>
<p><img src="@source/.vuepress/public/images/kujd.png" alt="图片"></p>
<h2 id="手写防抖和节流-1" tabindex="-1"><a class="header-anchor" href="#手写防抖和节流-1" aria-hidden="true">#</a> 手写防抖和节流</h2>
<h3 id="防抖-debounce" tabindex="-1"><a class="header-anchor" href="#防抖-debounce" aria-hidden="true">#</a> 防抖 debounce</h3>
<p>按照如下思路来实现<strong>防抖</strong>：</p>
<ul>
<li>防抖基本功能实现：可以实现防抖效果</li>
<li>优化一：优化参数和 this 指向</li>
<li>优化二：优化取消操作（增加取消功能）</li>
<li>优化三：优化立即执行效果（第一次立即执行）</li>
<li>优化四：优化返回值</li>
</ul>
<p><strong>基本实现 v1</strong> :
<img src="@source/.vuepress/public/images/dedede.png" alt="图片">
v1 的详解:
<img src="@source/.vuepress/public/images/shouxiede.png" alt="图片">
<strong>立即执行 v2</strong> : inInvoke 表示是否执行过
<img src="@source/.vuepress/public/images/lijide.png" alt="图片">
<strong>取消功能 v3 :</strong>
<img src="@source/.vuepress/public/images/cancel1.png" alt="图片">
<img src="@source/.vuepress/public/images/cancel2.png" alt="图片">
<strong>函数的返回值</strong> : 两种思路 回调函数 / Promise
<img src="@source/.vuepress/public/images/fanhuizhi01.png" alt="图片">
<img src="@source/.vuepress/public/images/fanhuizhi02.png" alt="图片"></p>
<p><strong>或者</strong></p>
<p><img src="@source/.vuepress/public/images/fanhuizhi03.png" alt="图片">
<img src="@source/.vuepress/public/images/fanhuizhi04.png" alt="图片"></p>
<h3 id="节流-throttle" tabindex="-1"><a class="header-anchor" href="#节流-throttle" aria-hidden="true">#</a> 节流 throttle</h3>
<p>我们按照如下思路来实现<strong>节流</strong>：</p>
<ul>
<li>节流函数的基本实现：可以实现节流效果</li>
<li>优化一：节流最后一次也可以执行</li>
<li>优化二：优化添加取消功能</li>
<li>优化三：优化返回值问题</li>
</ul>
<p>基本实现 v1:
<img src="@source/.vuepress/public/images/jieliu01.png" alt="图片">
最开始不触发 (leading实现) v2 :
<img src="@source/.vuepress/public/images/leading.png" alt="图片"></p>
</template>
