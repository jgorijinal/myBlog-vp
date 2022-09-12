<template><h1 id="起步" tabindex="-1"><a class="header-anchor" href="#起步" aria-hidden="true">#</a> 起步</h1>
<h2 id="小程序与普通开发的不同" tabindex="-1"><a class="header-anchor" href="#小程序与普通开发的不同" aria-hidden="true">#</a> 小程序与普通开发的不同</h2>
<ol>
<li>运行环境的不同</li>
</ol>
<ul>
<li><strong>网页</strong>运行在<strong>浏览器</strong></li>
<li><strong>小程序</strong>运行在<strong>微信</strong>里</li>
</ul>
<ol start="2">
<li>API 不同
由于运行环境的不同, 小程序中 <strong>无法调用 DOM 和 BOM 的API</strong></li>
</ol>
<p>但是小程序中可以调用微信环境提供的 API</p>
<ul>
<li>地理定位</li>
<li>支付</li>
<li>扫码</li>
</ul>
<ol start="3">
<li>开发模式不同
网页的开发模式: <strong>浏览器 + 编辑器</strong></li>
</ol>
<p>小程序有自己的一套开发模式:</p>
<ul>
<li><strong>申请小程序开发账号</strong></li>
<li><strong>安装小程序开发者工具</strong></li>
<li><strong>创建和配置小程序项目</strong></li>
</ul>
<h2 id="小程序代码的构成-项目结构" tabindex="-1"><a class="header-anchor" href="#小程序代码的构成-项目结构" aria-hidden="true">#</a> 小程序代码的构成 - 项目结构</h2>
<h3 id="项目的基本组成结构" tabindex="-1"><a class="header-anchor" href="#项目的基本组成结构" aria-hidden="true">#</a> 项目的基本组成结构</h3>
<p><img src="@source/.vuepress/public/images/chat1.png" alt="图片"></p>
<ul>
<li>pages 用来存放所有小程序的页面</li>
<li>utils 用来存放工具性质的模块 ( 例如: 格式化时间的自定义模块 )</li>
<li>app.js 小程序项目的入口文件</li>
<li>app.json 小程序项目的全局配置文件</li>
<li>app.wxss 小程序项目的全局样式文件</li>
<li>project.config.json 项目的配置文件</li>
<li>sitemap.json 用来配置小程序及其页面是否允许被微信索引</li>
</ul>
<h3 id="小程序页面的组成部分" tabindex="-1"><a class="header-anchor" href="#小程序页面的组成部分" aria-hidden="true">#</a> 小程序页面的组成部分</h3>
<p>小程序官方建议把所有小程序的页面, 都存放在 <strong>pages 目录</strong> 里, 以 <strong>单独的文件夹</strong>存在, 如图所示
<img src="@source/.vuepress/public/images/chat2.png" alt="图片">
其中, 每个页面由 <strong>四个基本文件</strong> 组成, 分别是:</p>
<ul>
<li><strong>.js</strong> 文件 ( 页面的脚本文件, 存放页面的数据, 事件处理函数 等 )</li>
<li><strong>.json</strong> 文件 ( 当前页面的配置文件, 配置窗口的外观, 表现 等 )</li>
<li><strong>.wxml</strong> 文件 ( 页面的模板结构文件 )</li>
<li><strong>.wxss</strong> 文件 ( 当前页面的样式表文件 )</li>
</ul>
<h2 id="小程序代码的构成-json-配置文件" tabindex="-1"><a class="header-anchor" href="#小程序代码的构成-json-配置文件" aria-hidden="true">#</a> 小程序代码的构成 - json 配置文件</h2>
<h3 id="json-配置文件的作用" tabindex="-1"><a class="header-anchor" href="#json-配置文件的作用" aria-hidden="true">#</a> json 配置文件的作用</h3>
<p>可以对小程序项目进行不同级别的配置</p>
<p>小程序项目中有 4种项目配置文件, 分别是 :</p>
<ul>
<li>项目根目录中的 <strong>app.json</strong> 配置文件</li>
<li>项目根目录中的 <strong>project.config.json</strong> 配置文件</li>
<li>项目根目录中的 sitemap.json 配置文件</li>
<li><strong>每个页面文件夹中的 .json 配置文件</strong></li>
</ul>
<h3 id="app-json-文件" tabindex="-1"><a class="header-anchor" href="#app-json-文件" aria-hidden="true">#</a> app.json 文件</h3>
<p>app.json 是当前小程序的 <strong>全局配置</strong>, 包括小程序的 <strong>所有页面路径, 窗口外观, 界面表现, 底部 tab 等</strong></p>
<p>简单看下 demo项目里的 app.json :
<img src="@source/.vuepress/public/images/chat3.png" alt="图片"></p>
<p>了解一下 4个 配置项的作用:</p>
<ul>
<li>pages : 用来记录当前小程序所有页面的路径</li>
<li>window : 全局定义小程序所有页面的背景色, 文字颜色 等</li>
<li>style :  全局定义小程序组件所使用的样式版本</li>
<li>sitemapLocation : 用来指明 sitemap.json 的位置</li>
</ul>
<h3 id="project-config-json" tabindex="-1"><a class="header-anchor" href="#project-config-json" aria-hidden="true">#</a> project.config.json</h3>
<p>用来记录我们对 小程序开发工具所做的个性化配置, 例如:</p>
<ul>
<li><strong>setting</strong> 中保存 <strong>编译相关的配置</strong></li>
<li><strong>projectname</strong> 保存的是 <strong>项目名称</strong></li>
<li><strong>appid</strong> 中保存的是 <strong>小程序的账号id</strong></li>
</ul>
<p><img src="@source/.vuepress/public/images/chat4.png" alt="图片"></p>
<h3 id="sitemap-json" tabindex="-1"><a class="header-anchor" href="#sitemap-json" aria-hidden="true">#</a> sitemap.json</h3>
<p>微信已开放 <strong>小程序内搜索</strong>, 效果类似于 PC 网页的 SEO , sitemap.json 文件用来配置 <strong>小程序页面是否允许微信索引</strong></p>
<p>当开发者允许微信索引时, 微信会通过爬虫的形式, 为小程序的页面内容简历索引。当用户的搜索关键字和页面的索引匹配成功的时候, 小程序的页面将可能展示在搜索结果中
<img src="@source/.vuepress/public/images/chat5.png" alt="图片"></p>
<p>注意: sitemap的索引提示是默认开启的, 如果要关闭 sitemap 的索引提示, 可在小程序配置文件 <strong>project.config.json的 setting 中 配置字段 checkSiteMap 为 true</strong></p>
<h3 id="页面的-json-文件" tabindex="-1"><a class="header-anchor" href="#页面的-json-文件" aria-hidden="true">#</a> 页面的 .json 文件</h3>
<p>小程序的每一个页面可以使用 .json 文件来对 <strong>本页面的窗口外观进行配置</strong>, 页面中的配置项会覆盖 app.json 里的 window 中相同的配置。
<img src="@source/.vuepress/public/images/chat6.png" alt="图片"></p>
<h3 id="新建小程序页面" tabindex="-1"><a class="header-anchor" href="#新建小程序页面" aria-hidden="true">#</a> 新建小程序页面</h3>
<p>只需要在 app.json -&gt; pages 中新增页面的存放路径, 开发者工具自动帮我们创建对应的页面组件
<img src="@source/.vuepress/public/images/chat7.png" alt="图片"></p>
<h3 id="修改项目首页" tabindex="-1"><a class="header-anchor" href="#修改项目首页" aria-hidden="true">#</a> 修改项目首页</h3>
<p>只需要调整 <strong>app.json -&gt; pages</strong> 数组中页面路径地前后顺序, 即可修改相矛盾首页, 小程序会把排在第一位的页面, 当做项目首页进行渲染
<img src="@source/.vuepress/public/images/chat8.png" alt="图片"></p>
<h2 id="小程序代码的构成-wxml-模板" tabindex="-1"><a class="header-anchor" href="#小程序代码的构成-wxml-模板" aria-hidden="true">#</a> 小程序代码的构成 - WXML 模板</h2>
<h3 id="wxml-和-html-区别" tabindex="-1"><a class="header-anchor" href="#wxml-和-html-区别" aria-hidden="true">#</a> WXML 和 HTML 区别</h3>
<ol>
<li>标签名不同</li>
</ol>
<ul>
<li>HTML (div, span, img, a)</li>
<li>WXML (view, text, image, navigator)</li>
</ul>
<ol start="2">
<li>属性节点不同</li>
</ol>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>超链接<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>navigator</span> <span class="token attr-name">url</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/pages/home/home<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>navigator</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ol start="3">
<li>提供了类似于 Vue 的模板语法</li>
</ol>
<ul>
<li>数据绑定</li>
<li>列表渲染</li>
<li>条件渲染</li>
</ul>
<h2 id="小程序代码的构成-wxss-样式" tabindex="-1"><a class="header-anchor" href="#小程序代码的构成-wxss-样式" aria-hidden="true">#</a> 小程序代码的构成 - WXSS 样式</h2>
<h3 id="wxss-和-css-区别" tabindex="-1"><a class="header-anchor" href="#wxss-和-css-区别" aria-hidden="true">#</a> WXSS 和 CSS 区别</h3>
<p>***1. 新增了 rpx 尺寸单位 ***</p>
<ul>
<li>CSS 中需要手动进行像素单位的换算, 比如: rem</li>
<li>WXSS 中在底层支持新的尺寸单位 <strong>rpx</strong>, 在不同大小的屏幕上小程序会自动地进行换算</li>
</ul>
<p><strong>2. 提供了全局样式和局部样式</strong></p>
<ul>
<li>项目根目录中的 app.wxss 会作用于所有小程序的页面</li>
<li>局部页面的 .wxss 样式仅对当前页面有效</li>
</ul>
<p><strong>3. WXSS 仅支持部分 CSS 选择器</strong></p>
<ul>
<li>.class 和 #id</li>
<li>element</li>
<li>并集选择器, 后代选择器</li>
<li>::after 和 ::before 等伪类选择器</li>
</ul>
<h2 id="小程序代码的构成-js-逻辑交互" tabindex="-1"><a class="header-anchor" href="#小程序代码的构成-js-逻辑交互" aria-hidden="true">#</a> 小程序代码的构成 - JS 逻辑交互</h2>
<h3 id="js-文件" tabindex="-1"><a class="header-anchor" href="#js-文件" aria-hidden="true">#</a> .js 文件</h3>
<p>在小程序中, 我们通过 .js文件来处理用户的操作, 例如: 响应用户的点击, 获取用户的位置 等等</p>
<h3 id="小程序中-js-文件的分类" tabindex="-1"><a class="header-anchor" href="#小程序中-js-文件的分类" aria-hidden="true">#</a> 小程序中 .js 文件的分类</h3>
<p>小程序中的 JS 文件分为三大类 , 分别是 :</p>
<ol>
<li>app.js</li>
</ol>
<ul>
<li>是整个小程序项目的入口文件, 需要通过 <strong>App()函数</strong> 来启动整个小程序</li>
</ul>
<ol start="2">
<li>页面的 .js</li>
</ol>
<ul>
<li>是页面的入口文件, 需要通过调用 <strong>Page()函数</strong>来创建并运行页面</li>
</ul>
<ol start="3">
<li>普通的 js文件
是普通的功能模块文件, 用来 <strong>封装公共的函数或属性</strong> 供页面使用</li>
</ol>
</template>
