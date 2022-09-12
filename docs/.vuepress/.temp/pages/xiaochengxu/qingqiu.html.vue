<template><h1 id="网络请求" tabindex="-1"><a class="header-anchor" href="#网络请求" aria-hidden="true">#</a> 网络请求</h1>
<h2 id="小程序中网络数据请求的限制" tabindex="-1"><a class="header-anchor" href="#小程序中网络数据请求的限制" aria-hidden="true">#</a> 小程序中网络数据请求的限制</h2>
<p>出于安全性方面的考虑，小程序官方对数据接口的请求做出了如下
两个限制：</p>
<ul>
<li>只能请求 <code>HTTPS</code> 类型的接口</li>
<li>必须将<strong>接口的域名</strong>添加到<strong>信任列表</strong>中</li>
</ul>
<p><img src="@source/.vuepress/public/images/xinrenliebiao.png" alt="图片"></p>
<h2 id="配置-request-合法域名" tabindex="-1"><a class="header-anchor" href="#配置-request-合法域名" aria-hidden="true">#</a> 配置 request 合法域名</h2>
<p>需求描述：假设在自己的微信小程序中，希望请求 https://www.xxxxxxxx.cn/ 域名下的接口</p>
<p>配置步骤：<strong>登录微信小程序管理后台 -&gt; 开发 -&gt; 开发设置 -&gt; 服务器域名 -&gt; 修改 request 合法域名</strong></p>
<p>注意事项：</p>
<ul>
<li>域名只支持 <code>https</code> 协议</li>
<li>域名不能使用 IP 地址或 localhost</li>
<li>域名必须经过 ICP 备案</li>
<li>服务器域名一个月内最多可申请 5 次修改</li>
</ul>
<h2 id="发起-get-请求" tabindex="-1"><a class="header-anchor" href="#发起-get-请求" aria-hidden="true">#</a> 发起 GET 请求</h2>
<p>调用微信小程序提供的 <strong>wx.request() 方法</strong>，可以发起 GET 数据请求</p>
<p><img src="@source/.vuepress/public/images/wxrequest.png" alt="图片"></p>
<h2 id="发起-post-请求" tabindex="-1"><a class="header-anchor" href="#发起-post-请求" aria-hidden="true">#</a> 发起 POST 请求</h2>
<p><img src="@source/.vuepress/public/images/wxrequrst2.png" alt="图片"></p>
<h2 id="在页面刚加载时请求数据" tabindex="-1"><a class="header-anchor" href="#在页面刚加载时请求数据" aria-hidden="true">#</a> 在页面刚加载时请求数据</h2>
<p>在很多情况下，我们需要<strong>在页面刚加载的时候</strong>，<strong>自动请求一些初始化的数据</strong>。此时需要在页面的 <strong>onLoad</strong> 事件
中调用获取数据的函数</p>
<p><img src="@source/.vuepress/public/images/onload1.png" alt="图片"></p>
<h2 id="跳过-request-合法域名校验" tabindex="-1"><a class="header-anchor" href="#跳过-request-合法域名校验" aria-hidden="true">#</a> 跳过 request 合法域名校验</h2>
<p>如果后端程序员<strong>仅仅提供了 http 协议的接口、暂时没有提供 https 协议的接口</strong>。</p>
<p>此时为了不耽误开发的进度，我们可以在微信开发者工具中，临时
开启「开发环境不校验请求域名、TLS 版本及 HTTPS 证书」选项，
跳过 request 合法域名的校验。</p>
<p><img src="@source/.vuepress/public/images/tiaoguo.png" alt="图片"></p>
<p><strong>注意</strong>： <em>跳过 request 合法域名校验的选项，仅限在开发与调试阶段使用！</em></p>
<h2 id="关于-跨域-和-ajax-的说明" tabindex="-1"><a class="header-anchor" href="#关于-跨域-和-ajax-的说明" aria-hidden="true">#</a> 关于 跨域 和 Ajax 的说明</h2>
<p><em>跨域问题<strong>只存在于</strong>基于浏览器的 Web 开发中。由于小程序的宿主环境不是浏览器，而是<strong>微信客户端</strong>，所以<strong>小程序中不存在跨域的问题</strong></em></p>
<p><em>Ajax 技术的核心是依赖于浏览器中的 XMLHttpRequest 这个对象，<strong>由于小程序的宿主环境是微信客户端</strong>，所以小程序中不能叫做“发起 Ajax 请求”，而是叫做“<strong>发起网络数据请求</strong>”</em></p>
<h2 id="案例" tabindex="-1"><a class="header-anchor" href="#案例" aria-hidden="true">#</a> 案例</h2>
<h3 id="_1-首页效果以及实现步骤" tabindex="-1"><a class="header-anchor" href="#_1-首页效果以及实现步骤" aria-hidden="true">#</a> 1. 首页效果以及实现步骤</h3>
<ul>
<li>新建项目并梳理项目结构</li>
<li>配置导航栏效果</li>
<li>配置 tabBar 效果</li>
<li>实现轮播图效果</li>
<li>实现九宫格效果</li>
<li>实现图片布局</li>
</ul>
<p>接口地址:</p>
<ol>
<li>获取轮播图数据列表的接口</li>
</ol>
<ul>
<li>【GET】https://www.escook.cn/slides</li>
</ul>
<ol start="2">
<li>获取九宫格数据列表的接口</li>
</ol>
<ul>
<li>【GET】https://www.escook.cn/categories</li>
</ul>
<h3 id="_1-创建项目" tabindex="-1"><a class="header-anchor" href="#_1-创建项目" aria-hidden="true">#</a> (1) 创建项目</h3>
<p><img src="@source/.vuepress/public/images/xiangmu1.png" alt="图片">
还有进入 project.config.json -&gt; settings -&gt; &quot;checkSiteMap&quot;: false 设为 false</p>
<h3 id="_2-配置导航栏效果" tabindex="-1"><a class="header-anchor" href="#_2-配置导航栏效果" aria-hidden="true">#</a> (2) 配置导航栏效果</h3>
<p><img src="@source/.vuepress/public/images/xiangmu2.png" alt="图片"></p>
<h3 id="_3-配置-tabbar" tabindex="-1"><a class="header-anchor" href="#_3-配置-tabbar" aria-hidden="true">#</a> (3) 配置 tabBar</h3>
<p><img src="@source/.vuepress/public/images/xiangmu3.png" alt="图片"></p>
<h3 id="_4-获取轮播图数据并渲染到页面" tabindex="-1"><a class="header-anchor" href="#_4-获取轮播图数据并渲染到页面" aria-hidden="true">#</a> (4) 获取轮播图数据并渲染到页面</h3>
<p><img src="@source/.vuepress/public/images/xiangmu4.png" alt="图片"></p>
<p>渲染轮播图
<img src="@source/.vuepress/public/images/xiangmu5.png" alt="图片">
<img src="@source/.vuepress/public/images/xiangmu6.png" alt="图片">
<img src="@source/.vuepress/public/images/xiangmu7.png" alt="图片"></p>
<h3 id="_5-获取九宫格数据并渲染到页面" tabindex="-1"><a class="header-anchor" href="#_5-获取九宫格数据并渲染到页面" aria-hidden="true">#</a> (5) 获取九宫格数据并渲染到页面</h3>
<p>获取九宫格数据
<img src="@source/.vuepress/public/images/ooo0.png" alt="图片"></p>
<p>展示在页面 :</p>
<p><img src="@source/.vuepress/public/images/ooo1.png" alt="图片">
<img src="@source/.vuepress/public/images/ooo3.png" alt="图片"></p>
<h3 id="_6-底部图片区域" tabindex="-1"><a class="header-anchor" href="#_6-底部图片区域" aria-hidden="true">#</a> (6) 底部图片区域</h3>
<p><img src="@source/.vuepress/public/images/uuu1.png" alt="图片">
<img src="@source/.vuepress/public/images/uuu2.png" alt="图片"></p>
<h3 id="最终效果" tabindex="-1"><a class="header-anchor" href="#最终效果" aria-hidden="true">#</a> 最终效果</h3>
<p><img src="@source/.vuepress/public/images/uuu3.png" alt="图片"></p>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<ol>
<li>能够使用 WXML 模板语法渲染页面结构</li>
</ol>
<ul>
<li><strong>wx:if</strong>、wx:elif、wx:else、hidden、<strong>wx:for、wx:key</strong></li>
</ul>
<ol start="2">
<li>能够使用 WXSS 样式美化页面结构</li>
</ol>
<ul>
<li><strong>rpx 尺寸单位</strong>、@import 样式导入、全局样式和局部样式</li>
</ul>
<ol start="3">
<li>能够使用 app.json 对小程序进行全局性配置</li>
</ol>
<ul>
<li>pages、<strong>window、tabBar</strong>、style</li>
</ul>
<ol start="4">
<li>能够使用 page.json 对小程序页面进行个性化配置</li>
</ol>
<ul>
<li>对单个页面进行个性化配置、<strong>就近原则</strong></li>
</ul>
<ol start="5">
<li>能够知道如何发起网络数据请求</li>
</ol>
<ul>
<li><strong>wx.request() 方法、onLoad() 事件</strong></li>
</ul>
</template>
