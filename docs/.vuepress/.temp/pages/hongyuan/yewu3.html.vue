<template><h1 id="业务-3" tabindex="-1"><a class="header-anchor" href="#业务-3" aria-hidden="true">#</a> 业务 (3)</h1>
<h2 id="详情页" tabindex="-1"><a class="header-anchor" href="#详情页" aria-hidden="true">#</a> 详情页</h2>
<h3 id="点击-item-跳转到详情页" tabindex="-1"><a class="header-anchor" href="#点击-item-跳转到详情页" aria-hidden="true">#</a> 点击 item 跳转到详情页</h3>
<p>home-house-list.vue
<img src="@source/.vuepress/public/images/xxx1.png" alt="图片"></p>
<p>那么必须新创建一个详情页的路由 router/index,js
<img src="@source/.vuepress/public/images/xxx2.png" alt="图片"></p>
<h3 id="轮播图" tabindex="-1"><a class="header-anchor" href="#轮播图" aria-hidden="true">#</a> 轮播图</h3>
<p><img src="@source/.vuepress/public/images/lbt1.png" alt="图片"></p>
<p><strong>难点在于 : 自定义轮播图的指示器</strong></p>
<p>detail-01-swipe.vue
<img src="@source/.vuepress/public/images/lbt3.png" alt="图片">
<img src="@source/.vuepress/public/images/lbt2.png" alt="图片"></p>
<h3 id="百度地图" tabindex="-1"><a class="header-anchor" href="#百度地图" aria-hidden="true">#</a> 百度地图</h3>
<p>地图这种东西如何嵌入到前端项目里面? 这取决于你要用的是什么地图</p>
<p>API 不需要记, 直接看文档就 ok
<a href="https://lbsyun.baidu.com/index.php?title=jspopularGL/guide/show" target="_blank" rel="noopener noreferrer">百度地图 开发文档<ExternalLinkIcon/></a></p>
<p><a href="https://lbsyun.baidu.com/index.php?title=jspopularGL/guide/addOverlay" target="_blank" rel="noopener noreferrer">添加锚点<ExternalLinkIcon/></a></p>
<p><img src="@source/.vuepress/public/images/bdmap1.png" alt="图片"></p>
<h3 id="tabcontrol-的展示与-监听元素的滚动-usescroll-重构" tabindex="-1"><a class="header-anchor" href="#tabcontrol-的展示与-监听元素的滚动-usescroll-重构" aria-hidden="true">#</a> TabControl 的展示与 监听元素的滚动 - useScroll 重构</h3>
<p><strong>之前封装 useSCroll hooks 的时候只是监听了 windows 的滚动, 但如果是需要监听其他某一个元素在滚动的话需要单独处理</strong></p>
<p><strong>useScroll.js</strong>
<img src="@source/.vuepress/public/images/uses1.png" alt="图片">
<img src="@source/.vuepress/public/images/uses2.png" alt="图片"></p>
<h3 id="点击-tabcontrol-某一项时-滚动到对应的位置" tabindex="-1"><a class="header-anchor" href="#点击-tabcontrol-某一项时-滚动到对应的位置" aria-hidden="true">#</a> 点击 TabControl 某一项时, 滚动到对应的位置</h3>
<p>又难又麻烦</p>
<p><img src="@source/.vuepress/public/images/pinghua3.png" alt="图片"></p>
<p>大体是这样:</p>
<ol>
<li>监听滚动 到一定距离时, 显示 tab 标签页(tab使用的是Vant组件)</li>
<li>点击某一项 , 平滑到对应内容区域
<ul>
<li>需要拿到每个组件到顶部的高度</li>
<li>点击时 scrollTo() 平滑</li>
</ul>
</li>
</ol>
<p><img src="@source/.vuepress/public/images/pinghua1.png" alt="图片">
<img src="@source/.vuepress/public/images/pinghua2.png" alt="图片"></p>
<h2 id="首页做-keep-alive-缓存" tabindex="-1"><a class="header-anchor" href="#首页做-keep-alive-缓存" aria-hidden="true">#</a> 首页做 keep-alive 缓存</h2>
<p>home.vue <strong>因为 setup 语法中无法定义组件的 name</strong>, 所以做如下处理</p>
<p><img src="@source/.vuepress/public/images/ka1.png" alt="图片"></p>
<p>App.vue
<img src="@source/.vuepress/public/images/ka2.png" alt="图片"></p>
<h2 id="视口设置-和-px-vw-单位的转换" tabindex="-1"><a class="header-anchor" href="#视口设置-和-px-vw-单位的转换" aria-hidden="true">#</a> 视口设置 和 px -&gt; vw 单位的转换</h2>
<ol>
<li><strong>让页面禁止缩放</strong></li>
</ol>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0 maximum-scale=1.0,minimum-scale=1.0, user-scalable=no<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="2">
<li><strong>px -&gt; vw 单位的转换</strong></li>
</ol>
<p><strong>postcss 工具 -&gt; plugins -&gt; postcss-px-to-viewport 插件</strong></p>
<p><a href="https://vant-contrib.gitee.io/vant/#/zh-CN/advanced-usage#liu-lan-qi-gua-pei" target="_blank" rel="noopener noreferrer">Vant 浏览器适配<ExternalLinkIcon/></a></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> postcss-px-to-viewport -D
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><strong>postcss.config.js</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">'postcss-px-to-viewport'</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// 设计稿是口的一个大小 viewportWidth</span>
      <span class="token literal-property property">viewportWidth</span><span class="token operator">:</span><span class="token number">375</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></template>
