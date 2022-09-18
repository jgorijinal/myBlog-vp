<template><h1 id="技巧" tabindex="-1"><a class="header-anchor" href="#技巧" aria-hidden="true">#</a> 技巧</h1>
<h2 id="封装-wx-request-网络请求" tabindex="-1"><a class="header-anchor" href="#封装-wx-request-网络请求" aria-hidden="true">#</a> 封装 wx.request() 网络请求</h2>
<p>网络请求会在很多页面上用到, 但每次用原生的 <code>wx.request()</code>的话会非常的繁琐, 配置选项也比较多</p>
<p>所以事先封装一下网络请求, 着了要用 <strong>类 class</strong> 来封装, 因为用 class 封装有更高的聚合度, 而且里面还可以定义很多方法</p>
<p><img src="@source/.vuepress/public/images/hm6.png" alt="图片">
<img src="@source/.vuepress/public/images/hm5.png" alt="图片"></p>
<p>怎么用?  可以这么用, 如下:
<img src="@source/.vuepress/public/images/hm7.png" alt="图片"></p>
<p>但我们要想某一些页面它们返送网络请求的次数是非常多的, 而且每次发送网络请求的时候都要管理很多个 url路径, params 参数 等,
整个代码的结构依然看起来是很乱的, 所以怎么做呢? 中间再加一层 <strong>分层架构</strong> , 把确定的东西直接给我写死, 甚至连 <code>hyRequest.get</code> 都不用写</p>
<p><img src="@source/.vuepress/public/images/hm01.png" alt="图片">
<img src="@source/.vuepress/public/images/hm02.png" alt="图片"></p>
<p>然后该怎么用 ?</p>
<p><img src="@source/.vuepress/public/images/hm03.png" alt="图片"></p>
<p>发请求就变这么简单了, 封装的魅力...</p>
<h2 id="关于-swiper-组件和图片的适配方案" tabindex="-1"><a class="header-anchor" href="#关于-swiper-组件和图片的适配方案" aria-hidden="true">#</a> 关于 swiper 组件和图片的适配方案</h2>
<p><strong>需求:</strong> 不管是哪一种机型,  <strong>让 swiper 组件的高度 等于 图片的高度</strong></p>
<p><strong>思路</strong>:</p>
<ol>
<li>图片加载完后, 获取图片的高度</li>
<li>获取到的图片高度 赋值给 swiper 组件的高度</li>
</ol>
<p><strong>实现:</strong></p>
<p>怎么获取到图片加载完后的时机? image 组件有 <strong>bindload</strong> 事件,
<img src="@source/.vuepress/public/images/bindload.png" alt="图片">
可以监听这个事件</p>
<p>那下一步怎么获取到<strong>图片的高度</strong>呢?  <a href="https://developers.weixin.qq.com/miniprogram/dev/api/wxml/wx.createSelectorQuery.html" target="_blank" rel="noopener noreferrer">wx.createSelectorQuery()<ExternalLinkIcon/></a></p>
<p><img src="@source/.vuepress/public/images/lunbo5.png" alt="图片"></p>
<p>data 里的 swiperHeight 动态设置到 swiper 的高度上
<img src="@source/.vuepress/public/images/lunbo6.png" alt="图片"></p>
<p>但这次发现上面的(获取高度)代码有点难记, 所以封装一下, 在里面用promise 直接 resolve(res)
<img src="@source/.vuepress/public/images/rect1.png" alt="图片">
<img src="@source/.vuepress/public/images/rect2.png" alt="图片"></p>
<p><strong>最终</strong>:
<img src="@source/.vuepress/public/images/rect3.png" alt="图片"></p>
<h2 id="轮播图-圆角-border-radius-bug修复" tabindex="-1"><a class="header-anchor" href="#轮播图-圆角-border-radius-bug修复" aria-hidden="true">#</a> 轮播图 圆角(border-radius) bug修复</h2>
<p><code>&lt;swiper&gt;</code> 组件上添加 class=&quot;swiper&quot;</p>
<p><img src="@source/.vuepress/public/images/swi1.png" alt="图片"></p>
</template>
