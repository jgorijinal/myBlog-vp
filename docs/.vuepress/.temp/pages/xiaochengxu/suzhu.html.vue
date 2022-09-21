<template><h1 id="宿主环境" tabindex="-1"><a class="header-anchor" href="#宿主环境" aria-hidden="true">#</a> 宿主环境</h1>
<h2 id="认识宿主环境" tabindex="-1"><a class="header-anchor" href="#认识宿主环境" aria-hidden="true">#</a> 认识宿主环境</h2>
<h3 id="什么是宿主环境" tabindex="-1"><a class="header-anchor" href="#什么是宿主环境" aria-hidden="true">#</a> 什么是宿主环境</h3>
<p><strong>宿主环境</strong>（host environment） 指的是<strong>程序运行所必须的依赖环境</strong>。例如：
Android 系统和 iOS 系统是两个不同的宿主环境。安卓版的微信 App 是不能在 iOS 环境下运行的，所以，
Android 是安卓软件的宿主环境，<strong>脱离了宿主环境的软件是没有任何意义的</strong></p>
<p><img src="@source/.vuepress/public/images/suzhu1.png" alt="图片"></p>
<h3 id="小程序的宿主环境" tabindex="-1"><a class="header-anchor" href="#小程序的宿主环境" aria-hidden="true">#</a> 小程序的宿主环境</h3>
<p><strong>手机微信</strong>是小程序的宿主环境</p>
<p>小程序<strong>借助宿主环境提供的能力</strong>，可以完成许多普通网页无法完成的功能，例如：</p>
<p>微信扫码、微信支付、微信登录、地理定位、等等</p>
<h3 id="小程序宿主环境包含的内容" tabindex="-1"><a class="header-anchor" href="#小程序宿主环境包含的内容" aria-hidden="true">#</a> 小程序宿主环境包含的内容</h3>
<p>① 通信模型
② 运行机制
③ 组件
④ API</p>
<h2 id="通信模型" tabindex="-1"><a class="header-anchor" href="#通信模型" aria-hidden="true">#</a> 通信模型</h2>
<h3 id="通信的主体" tabindex="-1"><a class="header-anchor" href="#通信的主体" aria-hidden="true">#</a> 通信的主体</h3>
<p>小程序中通信的主体是 <strong>渲染层</strong> 和 <strong>逻辑层</strong> ，其中：</p>
<ol>
<li>WXML 模板和 WXSS 样式工作在渲染层</li>
<li>JS 脚本工作在逻辑层</li>
</ol>
<h3 id="小程序的通信模型" tabindex="-1"><a class="header-anchor" href="#小程序的通信模型" aria-hidden="true">#</a> 小程序的通信模型</h3>
<p>小程序中的通信模型分为两部分：</p>
<ol>
<li><strong>渲染层</strong>和<strong>逻辑层</strong>之间的通信</li>
</ol>
<ul>
<li>由微信客户端进行转发</li>
</ul>
<ol start="2">
<li><strong>逻辑层</strong>和<strong>第三方服务器</strong>之间的通信</li>
</ol>
<ul>
<li>由微信客户端进行转发</li>
</ul>
<p><img src="@source/.vuepress/public/images/suzhu2.png" alt="图片"></p>
<h2 id="运行机制" tabindex="-1"><a class="header-anchor" href="#运行机制" aria-hidden="true">#</a> 运行机制</h2>
<ol>
<li><strong>小程序启动的过程</strong></li>
</ol>
<ul>
<li>把小程序的代码包下载到本地</li>
<li>解析 app.json 全局配置文件</li>
<li>执行 app.js 小程序入口文件，<strong>调用 App() 创建小程序实例</strong></li>
<li>渲染小程序首页</li>
<li>小程序启动完成</li>
</ul>
<ol start="2">
<li>页面渲染的过程</li>
</ol>
<ul>
<li>加载解析页面的 .json 配置文件</li>
<li>加载页面的 .wxml 模板和 .wxss 样式</li>
<li>执行页面的 .js 文件，调用 <strong>Page() 创建页面实例</strong></li>
<li>页面渲染完成</li>
</ul>
<h2 id="组件" tabindex="-1"><a class="header-anchor" href="#组件" aria-hidden="true">#</a> 组件</h2>
<h3 id="组件分类" tabindex="-1"><a class="header-anchor" href="#组件分类" aria-hidden="true">#</a> 组件分类</h3>
<p><strong>小程序中的组件也是由宿主环境提供的</strong></p>
<ul>
<li><strong>视图容器</strong></li>
<li><strong>基础内容</strong></li>
<li><strong>表单组件</strong></li>
<li><strong>导航组件</strong></li>
<li>媒体组件</li>
<li>map 地图组件</li>
<li>canvas 画布组件</li>
<li>开放能力</li>
<li>无障碍访问</li>
</ul>
<h3 id="常用的-视图容器类-组件" tabindex="-1"><a class="header-anchor" href="#常用的-视图容器类-组件" aria-hidden="true">#</a> 常用的 视图容器类 组件</h3>
<p><strong>1. view</strong></p>
<ul>
<li>普通视图区域</li>
<li>类似于 HTML 中的 div，是一个块级元素</li>
<li>常用来实现页面的布局效果</li>
</ul>
<p><strong>2. scroll-view</strong></p>
<ul>
<li>可滚动的视图区域</li>
<li>常用来实现滚动列表效果</li>
</ul>
<p><strong>3. swiper 和 swiper-item</strong></p>
<ul>
<li>轮播图容器组件 和 轮播图 item 组件</li>
</ul>
<h3 id="view-组件-基本使用" tabindex="-1"><a class="header-anchor" href="#view-组件-基本使用" aria-hidden="true">#</a> view 组件 基本使用</h3>
<p>实现如图的 flex 横向布局效果
<img src="@source/.vuepress/public/images/view1.png" alt="图片"></p>
<h3 id="scroll-view-组件-基本使用" tabindex="-1"><a class="header-anchor" href="#scroll-view-组件-基本使用" aria-hidden="true">#</a> scroll-view 组件 基本使用</h3>
<p>实现如图的纵向滚动效果
<img src="@source/.vuepress/public/images/scrollview.png" alt="图片"></p>
<h3 id="swiper-和-swiper-item-组价-基本使用" tabindex="-1"><a class="header-anchor" href="#swiper-和-swiper-item-组价-基本使用" aria-hidden="true">#</a> swiper 和 swiper-item 组价 基本使用</h3>
<p><img src="@source/.vuepress/public/images/swiper1.png" alt="图片"></p>
<h4 id="swiper组件-的常用属性" tabindex="-1"><a class="header-anchor" href="#swiper组件-的常用属性" aria-hidden="true">#</a> swiper组件 的常用属性</h4>
<p><a href="https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html" target="_blank" rel="noopener noreferrer">swiper 属性<ExternalLinkIcon/></a></p>
<p><img src="@source/.vuepress/public/images/swiper2.png" alt="图片"></p>
<h3 id="常用的基础内容组件" tabindex="-1"><a class="header-anchor" href="#常用的基础内容组件" aria-hidden="true">#</a> 常用的基础内容组件</h3>
<ol>
<li>text</li>
</ol>
<ul>
<li>文本组件</li>
<li>类似于 HTML 中的 span 标签，是一个行内元素</li>
</ul>
<ol start="2">
<li>rich-text</li>
</ol>
<ul>
<li>富文本组件</li>
<li>支持把 HTML 字符串渲染为 WXML 结构</li>
</ul>
<h3 id="text-组件-和-rich-text-组件-基本使用" tabindex="-1"><a class="header-anchor" href="#text-组件-和-rich-text-组件-基本使用" aria-hidden="true">#</a> text 组件 和 rich-text 组件 基本使用</h3>
<p>通过 text 组件的 <strong>selectable 属性</strong>，实现长按选中文本内容的效果：</p>
<p>通过 rich-text 组件的 <strong>nodes 属性节点</strong>，<strong>把 HTML 字符串渲染为对应的 UI 结构：</strong></p>
<p><img src="@source/.vuepress/public/images/text1.png" alt="图片"></p>
<h3 id="其他常用组件" tabindex="-1"><a class="header-anchor" href="#其他常用组件" aria-hidden="true">#</a> 其他常用组件</h3>
<p><strong>1. button</strong></p>
<ul>
<li>按钮组件</li>
<li>功能比 HTML 中的 button 按钮丰富</li>
<li>通过 open-type 属性可以调用微信提供的各种功能（客服、转发、获取用户授权、获取用户信息等）</li>
</ul>
<p><strong>2. image</strong></p>
<ul>
<li>图片组件</li>
<li>image 组件默认宽度约 300px、高度约 240px
<strong>3. navigator（后面再总结）</strong></li>
<li>页面导航组件</li>
<li>类似于 HTML 中的 a 链接</li>
</ul>
<h3 id="button-按钮的基本使用" tabindex="-1"><a class="header-anchor" href="#button-按钮的基本使用" aria-hidden="true">#</a> button 按钮的基本使用</h3>
<p><img src="@source/.vuepress/public/images/wechatbutton.png" alt="图片"></p>
<h3 id="image-组件的使用" tabindex="-1"><a class="header-anchor" href="#image-组件的使用" aria-hidden="true">#</a> image 组件的使用</h3>
<p>image 组件默认宽度约 300px、高度约 240px
<img src="@source/.vuepress/public/images/image111.png" alt="图片"></p>
<h4 id="image-组件的-mode-属性" tabindex="-1"><a class="header-anchor" href="#image-组件的-mode-属性" aria-hidden="true">#</a> image 组件的 mode 属性</h4>
<p>image 组件的 <strong>mode 属性</strong> 用来指定图片的<strong>裁剪</strong>和<strong>缩放</strong>模式，常用的 mode 属性值如下：</p>
<p><img src="@source/.vuepress/public/images/imagemode1.png" alt="图片"></p>
<h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2>
<p><strong>小程序中的 API 是由宿主环境提供的</strong>，通过这些丰富的小程序 API，开发者可以方便的调用微信提供的能力，
例如：获取用户信息、本地存储、支付功能等</p>
<h3 id="小程序-api-的-3大类" tabindex="-1"><a class="header-anchor" href="#小程序-api-的-3大类" aria-hidden="true">#</a> 小程序 API 的 3大类</h3>
<p>小程序官方把 API 分为了如下 3 大类：
<strong>1. 事件监听 API</strong></p>
<ul>
<li>特点：以 on 开头，用来监听某些事件的触发</li>
<li>举例：<code>wx.onWindowResize(function callback)</code>监听窗口尺寸变化的事件</li>
</ul>
<p><strong>2. 同步 API</strong></p>
<ul>
<li>特点1：以 Sync 结尾的 API 都是同步 API</li>
<li>特点2：同步 API 的执行结果，可以通过函数返回值直接获取，如果执行出错会抛出异常</li>
<li>举例：<code>wx.setStorageSync('key', 'value')</code> 向本地存储中写入内容</li>
</ul>
<p><strong>3. 异步 API</strong></p>
<ul>
<li>特点：类似于 jQuery 中的 $.ajax(options) 函数，需要通过 success、fail、complete 接收调用的结果</li>
<li>举例：<code>wx.request()</code> 发起网络数据请求，通过 success 回调函数接收数据</li>
</ul>
</template>
