<template><h1 id="小程序初体验" tabindex="-1"><a class="header-anchor" href="#小程序初体验" aria-hidden="true">#</a> 小程序初体验</h1>
<h2 id="了解小程序项目的基本组成结构" tabindex="-1"><a class="header-anchor" href="#了解小程序项目的基本组成结构" aria-hidden="true">#</a> 了解小程序项目的基本组成结构</h2>
<p>问题：</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<ol>
<li>一个小程序的页面由什么组成？</li>
<li>project.config.json 文件的作用是什么？</li>
<li>sitemap.json 文件的作用是什么？</li>
</ol>
</div>
<ul>
<li>pages：所有的 <strong>小程序页面</strong>每个页面以 <strong>单独的文件夹存在</strong>
<ul>
<li>index：index 页面文件夹，文件夹下面都包含 <strong>4 个</strong> 基本的页面文件，这<strong>四个文件共同组成 index 页面</strong>
<ul>
<li>index.js：<code>.js</code> 文件 -- 页面的脚本文件，存放页面的数据、事件处理函数、生命周期等</li>
<li>index.json：<code>.json</code> 文件 -- 当前页面的配置文件，配置页面的外观、表现等</li>
<li>index.wxml：<code>.wxml</code> 文件 -- 页面的模板结构文件</li>
<li>index.wxss：<code>.wxss</code> 文件 -- 当前页面的样式表文件</li>
</ul>
</li>
<li>logs
<ul>
<li>...</li>
</ul>
</li>
</ul>
</li>
<li>utils：工具类文件夹
<ul>
<li>utils.js</li>
</ul>
</li>
<li>app.js：小程序的<strong>项目</strong>逻辑文件，用来 <strong>注册小程序实例，绑定生命周期回调函数、错误监听和页面不存在监听函数</strong>等。</li>
<li>app.json：小程序公共配置文件，决定页面文件的路径、窗口表现、设置网络超时时间、设置多 tab 等。</li>
<li>app.wxss：小程序公共样式表</li>
<li>project.config.json：是项目配置文件，用来记录我们对小程序开发工具所做的个性化配置
<ul>
<li><code>setting</code> 中保存了<code>编译相关的配置</code></li>
<li><code>projectname</code> 中保存的是<code>项目名称</code></li>
<li><code>appid</code> 中保存的是<code>小程序的账号 ID</code></li>
</ul>
</li>
<li>sitemap.json：配置小程序及其页面是否允许被微信索引
<ul>
<li>rules中保存了索引规则列表的配置</li>
<li>rules规则中，action表示页面是否能被索引(allow,disallow)，page表示生效的页面</li>
</ul>
</li>
</ul>
<p><strong>答案：</strong></p>
<blockquote>
<ol>
<li>一<strong>个小程序的页面由什么组成？</strong>
<ol>
<li>小程序的页面由 4 个文件组成</li>
<li>并且 这4个文件 应该被放入到 pages 文件夹下的 同一个文件夹中</li>
</ol>
</li>
<li><strong>project.config.json 文件的作用是什么？</strong>
<ol>
<li>项目配置文件，用来记录我们对小程序开发工具所做的个性化配置</li>
</ol>
</li>
<li><strong>sitemap.json 文件的作用是什么？</strong>
<ol>
<li>配置小程序及其页面是否允许被微信索引</li>
</ol>
</li>
</ol>
</blockquote>
<h2 id="wxml-vs-html" tabindex="-1"><a class="header-anchor" href="#wxml-vs-html" aria-hidden="true">#</a> wxml VS html</h2>
<blockquote>
<ol>
<li>我是否可以在 <code>wxml</code> 文件中，写入 <code>div</code> 标签？并说出原因！</li>
</ol>
</blockquote>
<ol>
<li>
<p>什么是 <code>WXML</code></p>
<p><code>WXML</code>（<code>WeiXin Markup Language</code>）是框架设计的一套标签语言（组件），用来构建小程序页面的结构，其作用类似于网页开发中的 <code>HTML</code></p>
</li>
<li>
<p><code>WXML</code> 和 <code>HTML</code> 的区别</p>
<ul>
<li>标签名称不同
<ul>
<li>HTML(div, span, img, a)</li>
<li>WXML(view, text, image, navigator)</li>
</ul>
</li>
<li>属性节点不同
<ul>
<li>&lt;a href=&quot;#&quot;&gt;超链接&lt;/a&gt;</li>
<li>&lt;navigator url=&quot;/pages/home/home&quot;&gt;跳转到home页&lt;/navigator&gt;</li>
</ul>
</li>
<li>提供了动态渲染数据的模板语法
<ul>
<li>数据绑定</li>
<li>条件渲染</li>
<li>列表渲染</li>
</ul>
</li>
</ul>
</li>
</ol>
<p>我是否可以在 <code>wxml</code> 文件中，写入 <code>div</code> 标签？</p>
<ol>
<li>可以写入 <code>div</code> 标签，但是<strong>不要</strong>使用。<code>div</code> 标签会被解析成 <code>类 view</code> 标签效果</li>
<li><code>wxml</code> 中需要写入 小程序提供的组件，如果写入的为 <strong>非小程序组件</strong>，则会被解析为  <code>类 view</code> 标签效果</li>
</ol>
<h2 id="wxss-vs-css" tabindex="-1"><a class="header-anchor" href="#wxss-vs-css" aria-hidden="true">#</a> wxss VS css</h2>
<p><strong>问题</strong></p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<ol>
<li><code>wxss</code> 新增了什么尺寸单位？</li>
<li><code>wxss</code> 中推荐使用什么选择器？</li>
</ol>
</div>
<ol>
<li>什么是 <code>WXSS</code>
<ul>
<li>WXSS<code> (</code>WeiXin Style Sheets<code>)是一套样式语言，用于描述 </code>WXML` 的组件样式</li>
<li>类似于网页开发中的 <code>CSS</code></li>
<li><code>WXSS</code> 具有 <code>CSS</code> 大部分的特性</li>
</ul>
</li>
<li>新增了尺寸单位 --  <strong>rpx</strong>，<strong>一个 <code>rpx</code> 为页面宽度的 <code>1 / 750</code></strong></li>
<li>提供了全局的样式和局部样式。
<ol>
<li>全局样式：写入到 <strong>根目录的<code>wxss</code></strong> 中的样式</li>
<li>局部样式：写入到 **页面的 <code>wxss</code> ** 中的样式</li>
</ol>
</li>
<li>此外 <code>WXSS</code> 仅支持部分 <code>CSS</code> 选择器
<ol>
<li><strong><code>.class</code>（推荐使用）</strong> 和 <code>#id</code></li>
<li><code>element</code></li>
<li>并集选择器和后代选择器</li>
<li><code>::after</code> 和 <code>::before</code> 等伪类选择器</li>
</ol>
</li>
</ol>
<p><strong>答案：</strong></p>
<blockquote>
<ol>
<li><strong><code>wxss</code> 新增了什么尺寸单位？</strong>
<ol>
<li><code>rpx</code> 尺寸单位，一个 <code>rpx</code> 为页面宽度的 <code>1 / 750</code></li>
</ol>
</li>
<li><strong><code>wxss</code> 中推荐使用什么选择器？</strong>
<ol>
<li><code>.class</code> 类选择器</li>
</ol>
</li>
</ol>
</blockquote>
<h2 id="json-配置文件" tabindex="-1"><a class="header-anchor" href="#json-配置文件" aria-hidden="true">#</a> .json 配置文件</h2>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<ol>
<li>小程序中的 .json 文件主要分为哪两种？</li>
<li>当这两种配置文件出现相同配置时，会出现什么结果？</li>
</ol>
</div>
<p>小程序中，额外多出了一个 <code>.json</code> 的配置文件，<code>.json</code> 文件主要分为两个：</p>
<ol>
<li>项目根目录下的 .json 文件
<ol>
<li>修改项目的基本配置
<ol>
<li>首页</li>
<li><code>navigationBarBackgroundColor</code></li>
</ol>
</li>
</ol>
</li>
<li>页面中的 .json 文件
<ol>
<li>修改页面的基本配置（优先级高）
<ol>
<li><code>navigationBarBackgroundColor</code></li>
</ol>
</li>
</ol>
</li>
</ol>
<p><strong>答案：</strong></p>
<blockquote>
<ol>
<li><strong>小程序中的 .json 文件主要分为哪两种？</strong>
<ol>
<li>项目根目录下的 .json 文件</li>
<li>页面中的 .json 文件</li>
</ol>
</li>
<li><strong>当这两种配置文件出现相同配置时，会出现什么结果？</strong>
<ol>
<li>以 页面的.json 文件 为主</li>
</ol>
</li>
</ol>
</blockquote>
<h2 id="宿主的概念与小程序的宿主环境" tabindex="-1"><a class="header-anchor" href="#宿主的概念与小程序的宿主环境" aria-hidden="true">#</a> 宿主的概念与小程序的宿主环境</h2>
<p><strong>问题：</strong></p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<ol>
<li>什么是<strong>宿主环境</strong>？</li>
<li>微信小程序项目为什么可以调用 <strong>微信支付</strong> 功能？</li>
<li>小程序的运行环境是如何划分的？</li>
</ol>
</div>
<ol>
<li>宿主环境指的是 <strong>程序运行所必须的依赖环境</strong>
<ol>
<li>web 前端的宿主环境为：浏览器</li>
<li><code>android</code> 软件的宿主环境为：<code>android</code> 系统</li>
<li><code>IOS</code> 软件的宿主环境为：<code>IOS</code> 系统</li>
</ol>
</li>
<li>小程序的宿主环境是什么？
<ol>
<li>小程序的宿主环境为：<strong>手机微信</strong>
<ol>
<li>所以：小程序可以调用 <strong>手机微信</strong> 中的
<ol>
<li>扫码</li>
<li>支付</li>
<li>登录</li>
<li>分享</li>
<li>等等功能</li>
</ol>
</li>
</ol>
</li>
</ol>
</li>
<li>小程序的<strong>运行环境</strong>：
<ol>
<li><img src="@source/.vuepress/public/images/xcx1.png" alt="图片"></li>
<li>分成<strong>渲染层</strong>和<strong>逻辑层</strong>
<ol>
<li>其中 <code>WXML</code> 模板和 <code>WXSS</code> 样式工作在<strong>渲染层</strong>
<ol>
<li><strong>渲染层</strong>的界面使用了<code>WebView</code> 进行渲染</li>
<li>一个小程序存在<strong>多个界面</strong>，所以渲染层存在**多个<code>WebView</code>**线程</li>
</ol>
</li>
<li>JS 脚本工作在<strong>逻辑层</strong>。
<ol>
<li><strong>逻辑层</strong>采用<code>JsCore</code>线程运行JS脚本</li>
</ol>
</li>
</ol>
</li>
<li>这<strong>两个线程的通信</strong>会经由<strong>微信客户端</strong>做中转
<ol>
<li><strong>逻辑层</strong>发送<strong>网络请求</strong>也经由 <strong><code>Native（手机原生系统）</code></strong> 转发</li>
</ol>
</li>
</ol>
</li>
</ol>
<p><strong>答案：</strong></p>
<blockquote>
<ol>
<li><strong>什么是</strong>宿主环境****？
<ol>
<li>宿主环境指的是 <strong>程序运行所必须的依赖环境</strong></li>
</ol>
</li>
<li><strong>微信小程序项目为什么可以调用 <strong>微信支付</strong> 功能？</strong>
<ol>
<li>因为 微信小程序 的宿主环境为 <strong>手机微信</strong>，而 <strong>手机微信</strong> 提供了对应的功能</li>
</ol>
</li>
<li><strong>小程序的运行环境是如何划分的？</strong>
<ol>
<li>分成<strong>渲染层</strong>和<strong>逻辑层</strong></li>
</ol>
</li>
</ol>
</blockquote>
<h2 id="小程序的内置组件" tabindex="-1"><a class="header-anchor" href="#小程序的内置组件" aria-hidden="true">#</a> 小程序的内置组件</h2>
<ol>
<li><a href="https://developers.weixin.qq.com/miniprogram/dev/component/view.html" target="_blank" rel="noopener noreferrer">view<ExternalLinkIcon/></a></li>
<li><a href="https://developers.weixin.qq.com/miniprogram/dev/component/scroll-view.html" target="_blank" rel="noopener noreferrer">scroll-view 可滚动视图区域<ExternalLinkIcon/></a></li>
</ol>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token comment">&lt;!--scroll-view 可以理解为是加了 overflow:scoll 的 div--></span>
<span class="token comment">&lt;!--竖向/横向 滚动
   1. scroll-view 本身拥有固定的高度
   2. scroll-view 内容的高度超出本身
   3. scroll-view  加上属性 scroll-y / scroll-x
--></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ol start="3">
<li><a href="https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html" target="_blank" rel="noopener noreferrer">swiper<ExternalLinkIcon/></a> &amp;&amp; <a href="https://developers.weixin.qq.com/miniprogram/dev/component/swiper-item.html" target="_blank" rel="noopener noreferrer">swiper-item<ExternalLinkIcon/></a></li>
</ol>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token comment">&lt;!--swiper 滑动视图容器 内部只可以防止 swiper-item--></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="4">
<li>
<p><a href="https://developers.weixin.qq.com/miniprogram/dev/component/text.html" target="_blank" rel="noopener noreferrer">text<ExternalLinkIcon/></a> &amp;&amp; <a href="https://developers.weixin.qq.com/miniprogram/dev/component/rich-text.html" target="_blank" rel="noopener noreferrer">rich-text<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://developers.weixin.qq.com/miniprogram/dev/component/button.html" target="_blank" rel="noopener noreferrer">button<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://developers.weixin.qq.com/miniprogram/dev/component/image.html" target="_blank" rel="noopener noreferrer">image<ExternalLinkIcon/></a></p>
</li>
</ol>
</template>
