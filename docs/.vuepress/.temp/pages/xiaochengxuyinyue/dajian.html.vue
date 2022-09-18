<template><h1 id="搭建" tabindex="-1"><a class="header-anchor" href="#搭建" aria-hidden="true">#</a> 搭建</h1>
<h2 id="创建-pages" tabindex="-1"><a class="header-anchor" href="#创建-pages" aria-hidden="true">#</a> 创建 pages</h2>
<p>创建了 2 个页面分别是 <strong>home-music, home-video</strong>, 并在 app.json 配置文件配置了路径, 如下:
<img src="@source/.vuepress/public/images/hm1.png" alt="图片">
<img src="@source/.vuepress/public/images/hm2.png" alt="图片"></p>
<h2 id="创建-tabbar" tabindex="-1"><a class="header-anchor" href="#创建-tabbar" aria-hidden="true">#</a> 创建 tabBar</h2>
<p><img src="@source/.vuepress/public/images/hm4.png" alt="图片"></p>
<p>app.json 配置文件中配置 &quot;tabBar&quot; 属性, 如下:</p>
<p><img src="@source/.vuepress/public/images/hm3.png" alt="图片"></p>
<h2 id="视频列表页" tabindex="-1"><a class="header-anchor" href="#视频列表页" aria-hidden="true">#</a> 视频列表页</h2>
<h3 id="封装-wx-request-网络请求" tabindex="-1"><a class="header-anchor" href="#封装-wx-request-网络请求" aria-hidden="true">#</a> 封装 wx.request() 网络请求</h3>
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
<p><strong>pages/home-video/indeex.js</strong></p>
<p><img src="@source/.vuepress/public/images/hm03.png" alt="图片"></p>
<p>发请求就变这么简单了, 封装的魅力...</p>
<h3 id="做一些优化" tabindex="-1"><a class="header-anchor" href="#做一些优化" aria-hidden="true">#</a> 做一些优化</h3>
<p>请求中直接resolve了 res.data
<img src="@source/.vuepress/public/images/yh1.png" alt="图片"></p>
<p>不用 then , 而是用了 async await</p>
<p><img src="@source/.vuepress/public/images/yh2.png" alt="图片"></p>
<h3 id="视频页面的ui结构" tabindex="-1"><a class="header-anchor" href="#视频页面的ui结构" aria-hidden="true">#</a> 视频页面的UI结构</h3>
<p>快速地搭建
<img src="@source/.vuepress/public/images/vid1.png" alt="图片"></p>
<h3 id="页面数据格式处理-mv播放量-时长" tabindex="-1"><a class="header-anchor" href="#页面数据格式处理-mv播放量-时长" aria-hidden="true">#</a> 页面数据格式处理(MV播放量, 时长)</h3>
<p>wxml 文件中想要进行<strong>数据的转化处理</strong>, 使用另外一个语法 wxs</p>
<p><em>注意: wxs文件里面<strong>不能</strong>使用 ES6 语法</em></p>
<p><img src="@source/.vuepress/public/images/ft1.png" alt="图片">
<img src="@source/.vuepress/public/images/ft2.png" alt="图片"></p>
<p>并将模块导入  <code>&lt;wxs src=&quot;../../utils/format.wxs&quot; module=&quot;format&quot;&gt;&lt;/wxs&gt;</code>
<img src="@source/.vuepress/public/images/ft3.png" alt="图片"></p>
<h3 id="mv视频封面-自定义组件-video-item-v1" tabindex="-1"><a class="header-anchor" href="#mv视频封面-自定义组件-video-item-v1" aria-hidden="true">#</a> mv视频封面 自定义组件 video-item-v1</h3>
<p>有可能被很多页面中使用这个 mv 封面</p>
<p><img src="@source/.vuepress/public/images/mv1.png" alt="图片"></p>
<p>所以要封装成一个公共组件</p>
<p>在项目创建 components 文件夹, 要在里面生成公共的组件</p>
<p><img src="@source/.vuepress/public/images/videoitem1.png" alt="图片">
<img src="@source/.vuepress/public/images/video222.png" alt="图片"></p>
<p>然后在 pages 下的 home-video 页面使用该组件, 先配置一下 home-video 的 index.json 文件
<img src="@source/.vuepress/public/images/itemvideo3.png" alt="图片">
<img src="@source/.vuepress/public/images/itemvideo4.png" alt="图片"></p>
<h3 id="上拉触底加载更多" tabindex="-1"><a class="header-anchor" href="#上拉触底加载更多" aria-hidden="true">#</a> 上拉触底加载更多</h3>
<p>先简单实现, 不考虑细节</p>
<p><img src="@source/.vuepress/public/images/hasmore1.png" alt="图片">
<img src="@source/.vuepress/public/images/hasmore2.png" alt="图片"></p>
<h3 id="下拉刷新" tabindex="-1"><a class="header-anchor" href="#下拉刷新" aria-hidden="true">#</a> 下拉刷新</h3>
<p>下你简单实现, 不考虑细节</p>
<p><img src="@source/.vuepress/public/images/pr1.png" alt="图片">
<img src="@source/.vuepress/public/images/pr2.png" alt="图片"></p>
<p>整体一看重复逻辑比较多, 所以下面做下封装</p>
<h3 id="再次封装网络请求" tabindex="-1"><a class="header-anchor" href="#再次封装网络请求" aria-hidden="true">#</a> 再次封装网络请求</h3>
<p><img src="@source/.vuepress/public/images/getm1.png" alt="图片"></p>
<h3 id="下拉刷新加载动画" tabindex="-1"><a class="header-anchor" href="#下拉刷新加载动画" aria-hidden="true">#</a> 下拉刷新加载动画</h3>
<p><img src="@source/.vuepress/public/images/pr4.png" alt="图片"></p>
<p>先要在页面 JSON 文件, 设置 &quot;backgroundTextStyle&quot;: &quot;dark&quot;
<img src="@source/.vuepress/public/images/pr5.png" alt="图片"></p>
<p>下拉刷新默认不会自动关闭, 调用 wx.stopPullDownRefresh() 关掉
<img src="@source/.vuepress/public/images/pr3.png" alt="图片"></p>
<h2 id="视频详情页" tabindex="-1"><a class="header-anchor" href="#视频详情页" aria-hidden="true">#</a> 视频详情页</h2>
<h3 id="点击后跳转到详情页-传递id参数" tabindex="-1"><a class="header-anchor" href="#点击后跳转到详情页-传递id参数" aria-hidden="true">#</a> 点击后跳转到详情页(传递id参数)</h3>
<p>需求: 点击某一个视频封面后, 跳转到此视频的详情页面</p>
<p><img src="@source/.vuepress/public/images/vd1.png" alt="图片">
<img src="@source/.vuepress/public/images/vd2.png" alt="图片"></p>
<p>但事先要创建一个 video-detail 页面 详情页 pages/video-detail/index</p>
<p><img src="@source/.vuepress/public/images/vd3.png" alt="图片"></p>
<p>index.js:</p>
<p><img src="@source/.vuepress/public/images/vd4.png" alt="图片"></p>
<p>并且为了方便开发, 把变异模式调到当前详情页面
<img src="@source/.vuepress/public/images/vd5.png" alt="图片"></p>
<h3 id="封装请求接口" tabindex="-1"><a class="header-anchor" href="#封装请求接口" aria-hidden="true">#</a> 封装请求接口</h3>
<p>详情页面需要拿到关于 mv地址, mv详情数据, 相关视频 的数据</p>
<p>在 service/api_video.js 封装请求接口
<img src="@source/.vuepress/public/images/mvd0.png" alt="图片"></p>
<p><img src="@source/.vuepress/public/images/mvd1.png" alt="图片"></p>
<h3 id="获取详情数据" tabindex="-1"><a class="header-anchor" href="#获取详情数据" aria-hidden="true">#</a> 获取详情数据</h3>
<p>pages/video-detail/index.js
<img src="@source/.vuepress/public/images/mvd2.png" alt="图片"></p>
<h3 id="视频播放器展示-video-媒体组件" tabindex="-1"><a class="header-anchor" href="#视频播放器展示-video-媒体组件" aria-hidden="true">#</a> 视频播放器展示 - video 媒体组件</h3>
<p>用的是小程序原生组件
<a href="https://developers.weixin.qq.com/miniprogram/dev/component/video.html" target="_blank" rel="noopener noreferrer">video 媒体组件<ExternalLinkIcon/></a></p>
<p>并且要给个<strong>固定定位</strong>, 然后给 page 给个 padding</p>
<p><img src="@source/.vuepress/public/images/video1.png" alt="图片"></p>
</template>
