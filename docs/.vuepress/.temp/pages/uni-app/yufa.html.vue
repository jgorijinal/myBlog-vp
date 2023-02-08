<template><h1 id="基础语法" tabindex="-1"><a class="header-anchor" href="#基础语法" aria-hidden="true">#</a> 基础语法</h1>
<h2 id="项目文件分析" tabindex="-1"><a class="header-anchor" href="#项目文件分析" aria-hidden="true">#</a> 项目文件分析</h2>
<h3 id="main-js" tabindex="-1"><a class="header-anchor" href="#main-js" aria-hidden="true">#</a> main.js</h3>
<p><strong><code>main.js</code></strong>: uni-app 的入口文件 , 主要作用是</p>
<ul>
<li>初始化 Vue 实例</li>
<li>定义全局组件</li>
<li>定义全局属性</li>
<li>安装插件 如: Pinia, VueX 等</li>
</ul>
<h3 id="app-vue" tabindex="-1"><a class="header-anchor" href="#app-vue" aria-hidden="true">#</a> App.vue</h3>
<p><a href="https://uniapp.dcloud.net.cn/collocation/App.html#applifecycle" target="_blank" rel="noopener noreferrer">App.vue 官方文档<ExternalLinkIcon/></a></p>
<p><strong><code>App.vue</code></strong>:  入口组件</p>
<ul>
<li>是 uni-app 的入口文件, 所有页面都是在 App.vue 下进行切换</li>
<li><strong>App.vue 本身不是页面</strong>, 这里不能编写视图元素, 也就是<strong>没有</strong> <code>&lt;template&gt; 元素</code></li>
</ul>
<p>App.vue 的<strong>作用</strong> :</p>
<ul>
<li>应用的生命周期</li>
<li>编写全局样式</li>
<li>定义全局数据 <code>globalData</code></li>
</ul>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
		<span class="token function-variable function">onLaunch</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			console<span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span><span class="token string">'当前组件仅支持 uni_modules 目录结构 ，请升级 HBuilderX 到 3.1.0 版本以上！'</span><span class="token punctuation">)</span>
			console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'App Launch'</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token function-variable function">onShow</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'App Show'</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token function-variable function">onHide</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'App Hide'</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">globalData</span><span class="token operator">:</span><span class="token punctuation">{</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'frank'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">18</span>
      <span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
	<span class="token comment">/*每个页面公共css */</span>
	<span class="token atrule"><span class="token rule">@import</span> <span class="token string">'@/uni_modules/uni-scss/index.scss'</span><span class="token punctuation">;</span></span>
	<span class="token comment">/* #ifndef APP-NVUE */</span>
	<span class="token atrule"><span class="token rule">@import</span> <span class="token string">'@/static/customicons.css'</span><span class="token punctuation">;</span></span>
	<span class="token selector">// 设置整个项目的背景色
	page</span> <span class="token punctuation">{</span>
		<span class="token property">background-color</span><span class="token punctuation">:</span> #f5f5f5<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">/* #endif */</span>
	<span class="token selector">.example-info</span> <span class="token punctuation">{</span>
		<span class="token property">font-size</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span>
		<span class="token property">color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>
		<span class="token property">padding</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><p>注意: 应用生命周期 <strong>只能在 App.vue 中监听</strong>, 在页面监听是无效的</p>
<p>页面</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
		<span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token punctuation">{</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 页面的声明周期</span>
    <span class="token function">onLoad</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token comment">// 1. 拿到全局数据 globalData</span>
      <span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">getApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>app<span class="token punctuation">.</span>globalData<span class="token punctuation">)</span>  <span class="token comment">// {name: 'eren', age: 18}</span>
      
      <span class="token comment">// 2. 拿到当前页面的路由</span>
      <span class="token keyword">const</span> pages <span class="token operator">=</span> <span class="token function">getCurrentPages</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>pages<span class="token punctuation">[</span>pages<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>route<span class="token punctuation">)</span> <span class="token comment">// pages/index/index</span>
     
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h3 id="全局和局部样式" tabindex="-1"><a class="header-anchor" href="#全局和局部样式" aria-hidden="true">#</a> 全局和局部样式</h3>
<p><strong>全局样式</strong>:</p>
<ol>
<li>App.vue 中的 style 样式为全局样式, 作用于每一个页面(style 标签<strong>不支持 scoped</strong>, 写了导致样式无效)</li>
</ol>
<ul>
<li>App.vue 中通过 <code>@import</code> 可以导入 <strong>外联样式</strong>, 一样作用于每一个页面</li>
</ul>
<ol start="2">
<li><code>uni.scss</code> 文件也是用来编写全局的公共样式, 通常用来定义<strong>全局变量</strong></li>
</ol>
<ul>
<li><code>uni.scss</code> 中通过 <code>@import</code> 可以导入 <strong>外联样式</strong>, 一样作用于每一个页面</li>
</ul>
<p><strong>局部样式</strong>:</p>
<ol>
<li>在 pages 目录下的 vue 文件的 style 样式为<strong>局部样式</strong>, 只作用于对应的页面, 并会覆盖 App.vue 中的相同的选择器</li>
<li>vue 文件的 style标签也支持 <code>scss</code>等预处理器, 比如: 安装了 <code>dart-sass</code>插件之后, style 标签也可以用 scss 来编写样式</li>
<li>style 标签支持 <code>scoped</code>吗 ? <strong>不支持, 无需要写</strong></li>
</ol>
<h4 id="uni-scss" tabindex="-1"><a class="header-anchor" href="#uni-scss" aria-hidden="true">#</a> uni.scss</h4>
<p>为 <strong>全局样式文件</strong></p>
<ol>
<li>为了方便整体控制应用的风格, 默认定义了uni-app 框架内置全局变量, 当然也可以存放自定义的全局变量</li>
<li><strong>在 uni.scss 中定义的变量, 无需 @import 就可以在任意的组件中直接使用</strong></li>
<li>使用 uni.scss 中的变量, 需要在 HBuilder X 中里面安装 scss 插件 (dart-scss 插件)</li>
<li>然后<strong>需要在该组件的 style 标签加上 <code>lang=&quot;scss&quot;</code>, 重启即可生效</strong></li>
</ol>
<p>注意事项:</p>
<ul>
<li>这里的 <strong>uni-app 框架</strong>内置变量和后面 <strong>uni-ui 组件库</strong>内置的变量是不一样的</li>
<li>uni.scss 定义的变量可以在全局直接使用, 但在 App.vue 定义的变量, 只能在当前组件中使用</li>
</ul>
<p><img src="@source/.vuepress/public/images/unicss.png" alt="图片"></p>
<h3 id="页面调用接口" tabindex="-1"><a class="header-anchor" href="#页面调用接口" aria-hidden="true">#</a> 页面调用接口</h3>
<p><code>getApp()</code> 函数</p>
<ul>
<li>用于获取当前应用的实例, 可用于获取 <code>globalData</code></li>
</ul>
<p><code>getCurrentPages()</code> 函数</p>
<ul>
<li>用于获取当前页面栈的实例, 以数组的形式按栈的顺序给出
<ul>
<li><strong>第一个元素为首页, 最后一个元素为当前页面</strong></li>
</ul>
</li>
<li>仅用于展示页面栈, 勿修改页面栈, 以免造成页面状态错误</li>
<li>常用方法:
<img src="@source/.vuepress/public/images/getpages1.png" alt="图片">
如:</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> pages <span class="token operator">=</span> <span class="token function">getCurrentPages</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> page <span class="token operator">=</span> pages<span class="token punctuation">[</span>pages<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>page<span class="token punctuation">.</span>route<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="pages-json" tabindex="-1"><a class="header-anchor" href="#pages-json" aria-hidden="true">#</a> pages.json</h3>
<p><a href="https://uniapp.dcloud.net.cn/collocation/pages.html" target="_blank" rel="noopener noreferrer">官方文档<ExternalLinkIcon/></a></p>
<p>全局页面配置</p>
<ul>
<li><code>pages.json</code> 文件用来对 uni-app 进行全局配置, 类似微信小程序中的 app.json</li>
<li>决定<strong>页面路径, 窗口样式, 原生的导航栏, 底部的 <code>tabbar</code></strong> 等等</li>
</ul>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
	<span class="token property">"pages"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">"path"</span><span class="token operator">:</span> <span class="token string">"pages/index/index"</span><span class="token punctuation">,</span>
      <span class="token property">"style"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"navigationBarTitleText"</span><span class="token operator">:</span> <span class="token string">"uni-app"</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
	<span class="token property">"globalStyle"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">"navigationBarTextStyle"</span><span class="token operator">:</span> <span class="token string">"black"</span><span class="token punctuation">,</span>
		<span class="token property">"navigationBarTitleText"</span><span class="token operator">:</span> <span class="token string">"uni-app"</span><span class="token punctuation">,</span>
		<span class="token property">"navigationBarBackgroundColor"</span><span class="token operator">:</span> <span class="token string">"#F8F8F8"</span><span class="token punctuation">,</span>
		<span class="token property">"backgroundColor"</span><span class="token operator">:</span> <span class="token string">"#F8F8F8"</span><span class="token punctuation">,</span>
		<span class="token property">"app-plus"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">"background"</span><span class="token operator">:</span> <span class="token string">"#efeff4"</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="内置组件" tabindex="-1"><a class="header-anchor" href="#内置组件" aria-hidden="true">#</a> 内置组件</h2>
<ol>
<li><code>view</code> : 视图容器, 类似于传统 html 中的 div 标签, 用于包裹各种元素内容 (那可以使用 div 吗? 可以但<strong>不跨平台</strong>)</li>
<li><code>text</code>:  文本组件, 用于包裹文本内容</li>
<li><code>button</code>: 在小程序端的主题 和 其他端的<strong>主题是不一样的</strong> (可以通过条件编译来统一风格)</li>
<li><code>image</code>: 图片, <strong>默认宽度<code>320px</code> , 高度<code>240px</code></strong>
<ul>
<li>仅支持 相对路径, 绝对路径, 支持导入, 支持 base64码</li>
</ul>
</li>
<li><code>scrollview</code>: 可<strong>滚动</strong>视图区域, 用于<strong>区域滚动</strong></li>
</ol>
<ul>
<li>使用竖向滚动时, 需要给<code>scrollview</code>一个<strong>固定的高度</strong>, <strong>通过 css 设置 <code>height</code></strong></li>
</ul>
<p>h5端隐藏滚动条:</p>
<div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code> <span class="token comment">// 全局样式</span>
 <span class="token comment">// 或者也可以使用 样式穿透 :deep()</span>
<span class="token punctuation">:</span><span class="token function">global</span><span class="token punctuation">(</span>.xxx  .<span class="token property">uni-scroll-view</span><span class="token punctuation">:</span><span class="token punctuation">:</span>webkit-scrollbar<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token property">display</span><span class="token punctuation">:</span>none<span class="token punctuation">;</span>
<span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ol start="6">
<li><code>swiper</code> : 滑块视图容器。</li>
</ol>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>swiper</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>swiper<span class="token punctuation">"</span></span> <span class="token attr-name">circular</span> <span class="token attr-name">:indicator-dots</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>indicatorDots<span class="token punctuation">"</span></span> <span class="token attr-name">:autoplay</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>autoplay<span class="token punctuation">"</span></span> <span class="token attr-name">:interval</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>interval<span class="token punctuation">"</span></span>
			<span class="token attr-name">:duration</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>duration<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>swiper-item</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>swiper-item uni-bg-red<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>A<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>swiper-item</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>swiper-item</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>swiper-item uni-bg-green<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>B<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>swiper-item</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>swiper-item</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>swiper-item uni-bg-blue<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>C<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>swiper-item</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>swiper</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="扩展组件-uni-ui" tabindex="-1"><a class="header-anchor" href="#扩展组件-uni-ui" aria-hidden="true">#</a> 扩展组件 uni-ui</h2>
<p><code>uni-ui</code> : 一套基于 Vue组件, flex布局的 <strong>跨全端ui框架</strong></p>
<p><a href="https://uniapp.dcloud.net.cn/component/uniui/uni-ui.html" target="_blank" rel="noopener noreferrer">uni-ui 官方文档<ExternalLinkIcon/></a></p>
<p><code>uni.scss</code></p>
<div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token keyword">@import</span> <span class="token string">'@/uni_modules/uni-scss/variables.scss'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>可以修改变量</p>
<h3 id="uni-forms-组件" tabindex="-1"><a class="header-anchor" href="#uni-forms-组件" aria-hidden="true">#</a> uni-forms 组件</h3>
<p><a href="https://uniapp.dcloud.net.cn/component/uniui/uni-forms.html#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95" target="_blank" rel="noopener noreferrer">uni-forms 官方文档<ExternalLinkIcon/></a></p>
<p>试着用一下, 实现<strong>自定义校验规则</strong></p>
<p><strong>注意</strong>: 需要注意，如果需要使用 <code>validateFunction</code> <strong>自定义校验规则</strong>,则不能采用 <code>uni-forms</code> 的 <code>rules</code> 属性来配置校验规则，这时候需要通过 <code>ref</code>，在<code>onReady</code> 生命周期调用组件的 <strong><code>setRules</code></strong> 方法绑定验证规则</p>
<p><img src="@source/.vuepress/public/images/uniform1.png" alt="图片"></p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>uni-forms</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>formRef<span class="token punctuation">"</span></span> <span class="token attr-name">:modelValue</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>formData<span class="token punctuation">"</span></span> <span class="token attr-name">:model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>formData<span class="token punctuation">"</span></span> <span class="token attr-name">label-position</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>left<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
					<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>uni-forms-item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>用户名<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>username<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
						<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>uni-easyinput</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>formData.username<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入用户名<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
					<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>uni-forms-item</span><span class="token punctuation">></span></span>
					<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>uni-forms-item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>密码<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
						<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>uni-easyinput</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>formData.password<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入密码<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
					<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>uni-forms-item</span><span class="token punctuation">></span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>uni-forms</span><span class="token punctuation">></span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Submit<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
		<span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token comment">// 表单数据</span>
				<span class="token literal-property property">formData</span><span class="token operator">:</span><span class="token punctuation">{</span> 
          <span class="token literal-property property">username</span><span class="token operator">:</span><span class="token string">''</span><span class="token punctuation">,</span>
          <span class="token literal-property property">password</span><span class="token operator">:</span><span class="token string">''</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">rules</span><span class="token operator">:</span><span class="token punctuation">{</span>
          <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">{</span>
                <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                <span class="token literal-property property">errorMessage</span><span class="token operator">:</span> <span class="token string">'用户名必须要输入'</span><span class="token punctuation">,</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
                <span class="token function-variable function">validateFunction</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">rule<span class="token punctuation">,</span>value<span class="token punctuation">,</span>data<span class="token punctuation">,</span>callback</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                  <span class="token keyword">if</span> <span class="token punctuation">(</span>value<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> <span class="token number">6</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token function">callback</span><span class="token punctuation">(</span><span class="token string">'用户名不少于 6 位'</span><span class="token punctuation">)</span>
                  <span class="token punctuation">}</span>
                  <span class="token keyword">return</span> <span class="token boolean">true</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">]</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">onReady</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token comment">// 有自定义的校验时, 需要调用 setRules()</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>formRef<span class="token punctuation">.</span><span class="token function">setRules</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>rules<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">submit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        	<span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>formRef<span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br></div></div><h3 id="重写-uni-ui-组件的样式" tabindex="-1"><a class="header-anchor" href="#重写-uni-ui-组件的样式" aria-hidden="true">#</a> 重写 uni-ui 组件的样式</h3>
<ol>
<li>小程序 , App <strong>直接重写</strong>, 需要添加 <code>!important</code></li>
<li>H5,App,小程序 使用: <strong><code>:global( selector )</code></strong>, 需要添加 <code>!important</code></li>
<li>H5,App,小程序 使用: <strong><code>:deep( selector )</code></strong>, 需要添加 <code>!important</code></li>
</ol>
<p>具体有三种方案</p>
<div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code>  <span class="token comment">// 1. 方案一: 小程序 , App</span>
  <span class="token selector">.uni-forms-item__label </span><span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> blue <span class="token important">!important</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 方案二: :deep()  生效在 h5, 小程序, App</span>
  <span class="token punctuation">:</span><span class="token function">deep</span><span class="token punctuation">(</span>.uni-forms-item__label<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> blue <span class="token important">!important</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 方案三: :global() 生效在 h5,小程序, App</span>
  <span class="token punctuation">:</span><span class="token function">global</span><span class="token punctuation">(</span>.uni-forms-item__label<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> blue <span class="token important">!important</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="条件编译" tabindex="-1"><a class="header-anchor" href="#条件编译" aria-hidden="true">#</a> 条件编译</h2>
<p><a href="https://uniapp.dcloud.net.cn/tutorial/platform.html#preprocessor" target="_blank" rel="noopener noreferrer">条件编译官方文档<ExternalLinkIcon/></a></p>
<p>以 <code>#ifdef 或 #ifndef</code> 加 <code>%PLATFORM%</code>开头，以 <code>#endif</code> 结尾</p>
<ul>
<li><code>#ifdef</code>: if defined 浸在某个平台存在</li>
<li><code>#ifndef</code>: if not defined 除了某个平台均存在</li>
<li><code>%PLATFORM%</code>: 平台名称</li>
<li>然后使用 <code>#endif</code> 结尾</li>
</ul>
<p>支持的文件</p>
<ul>
<li>.vue</li>
<li>.js</li>
<li>.css</li>
<li>pages.json</li>
<li>各预编译语言文件，如：.scss、.less、.stylus、.ts、.pug</li>
</ul>
<p>注意：</p>
<ul>
<li>条件编译是利用注释实现的，在不同语法里注释写法不一样，<code>js使用 // 注释</code>、<code>css 使用 /* 注释 */</code>、<code>vue/nvue 模板里使用 &lt;!-- 注释 --&gt;；</code></li>
<li>条件编译APP-PLUS包含APP-NVUE和APP-VUE，APP-PLUS-NVUE和APP-NVUE没什么区别，为了简写后面出了APP-NVUE ；</li>
<li>使用条件编译请保证编译前和编译后文件的正确性，比如json文件中不能有多余的逗号；</li>
<li>VUE3 需要在项目的 <code>manifest.json</code> 文件根节点配置 <code>&quot;vueVersion&quot; : &quot;3&quot;</code></li>
</ul>
<p><code>%PLATFORM%</code> 的取值:
<img src="@source/.vuepress/public/images/plat1.png" alt="图片"></p>
<p><a href="https://uniapp.dcloud.net.cn/tutorial/platform.html#api-%E7%9A%84%E6%9D%A1%E4%BB%B6%E7%BC%96%E8%AF%91" target="_blank" rel="noopener noreferrer">条件编译 具体实例<ExternalLinkIcon/></a></p>
<ol>
<li><strong>API 的条件编译</strong></li>
</ol>
<p>仅在 <code>App</code> 平台上出现</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// #ifdef APP-PLUS</span>
  平台特有的<span class="token constant">API</span>实现
<span class="token comment">// #endif</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>不会再 <code>H5</code> 平台上出现</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// #ifndef H5</span>
  代码
<span class="token comment">// #endif</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ol start="2">
<li>组件的条件编译</li>
</ol>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token comment">&lt;!-- #ifdef %PLATFORM% --></span>
  平台特有的组件
<span class="token comment">&lt;!-- #endif --></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ol start="3">
<li>样式的条件编译</li>
</ol>
<p>注意： 样式的条件编译，无论是 css 还是 sass/scss/less/stylus 等预编译语言中，必须使用 <code>/*注释*/</code> 的写法</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token comment">/*  #ifdef  %PLATFORM%  */</span>
平台特有样式
<span class="token comment">/*  #endif  */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><a href="https://uniapp.dcloud.net.cn/tutorial/platform.html#pages-json-%E7%9A%84%E6%9D%A1%E4%BB%B6%E7%BC%96%E8%AF%91" target="_blank" rel="noopener noreferrer">其他情况下的条件编译<ExternalLinkIcon/></a></p>
<h2 id="新建-pages-页面" tabindex="-1"><a class="header-anchor" href="#新建-pages-页面" aria-hidden="true">#</a> 新建 pages 页面</h2>
<p><code>uni-app</code>中的页面，通常编写在根目录下的 <strong><code>pages</code> 目录</strong>下</p>
<p>可直接在 <code>pages</code> 目录下点击右键 <strong>&quot;新建页面&quot;</strong>, HBuilderX会自动地在 <code>pages.json</code>中完成页面注册</p>
<p>每次新建页面，均需在 <code>pages.json</code> 中配置 <code>pages</code> 列表；未在 pages.json -&gt; pages 中配置的页面，uni-app 会在编译阶段进行忽略。pages.json 的完整配置参考：<a href="https://uniapp.dcloud.net.cn/collocation/pages.html#" target="_blank" rel="noopener noreferrer">全局文件<ExternalLinkIcon/></a></p>
<p>删除页面: 删除 <code>.vue</code> 文件和 <code>pages.json</code> 中对应的配置</p>
<p>配置 <code>tabBar</code>:</p>
<ul>
<li><code>color</code> : tab 上的文字默认颜色</li>
<li><code>selectedColor</code>: tab 上的文字选中时的颜色</li>
<li><code>list</code> -&gt; <code>pagePath , text, iconPath, selectedIconPath</code></li>
</ul>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  ...
  ...
  <span class="token property">"tabBar"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"color"</span><span class="token operator">:</span> <span class="token string">"black"</span><span class="token punctuation">,</span>
    <span class="token property">"selectedColor"</span><span class="token operator">:</span> <span class="token string">"red"</span><span class="token punctuation">,</span>
    <span class="token property">"list"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">"pagePath"</span><span class="token operator">:</span> <span class="token string">"pages/index/index"</span><span class="token punctuation">,</span>
        <span class="token property">"text"</span><span class="token operator">:</span> <span class="token string">"首页"</span><span class="token punctuation">,</span>
        <span class="token property">"iconPath"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
        <span class="token property">"selectedIconPath"</span><span class="token operator">:</span> <span class="token string">""</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">"pagePath"</span><span class="token operator">:</span> <span class="token string">"pages/category/category"</span><span class="token punctuation">,</span>
        <span class="token property">"text"</span><span class="token operator">:</span> <span class="token string">"分类"</span><span class="token punctuation">,</span>
        <span class="token property">"iconPath"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
        <span class="token property">"selectedIconPath"</span><span class="token operator">:</span> <span class="token string">""</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">"pagePath"</span><span class="token operator">:</span> <span class="token string">"pages/my/my"</span><span class="token punctuation">,</span>
        <span class="token property">"text"</span><span class="token operator">:</span> <span class="token string">"我的"</span><span class="token punctuation">,</span>
        <span class="token property">"iconPath"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
        <span class="token property">"selectedIconPath"</span><span class="token operator">:</span> <span class="token string">""</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><h2 id="路由跳转" tabindex="-1"><a class="header-anchor" href="#路由跳转" aria-hidden="true">#</a> 路由跳转</h2>
<p><code>uni-app</code>有两种页面路由跳转方式：使用 <a href="https://uniapp.dcloud.net.cn/component/navigator.html#" target="_blank" rel="noopener noreferrer">navigator<ExternalLinkIcon/></a> 组件跳转、调用<a href="https://uniapp.dcloud.net.cn/api/router.html#" target="_blank" rel="noopener noreferrer">API<ExternalLinkIcon/></a> 跳转</p>
<ul>
<li>组件: <code>&lt;navigator&gt;</code></li>
<li>API: <code>uni.navigateTo</code>, <code>uni.redirectTo</code>, <code>uni.switchTab</code> ,<code>uni.navigateBack</code></li>
</ul>
<p><img src="@source/.vuepress/public/images/yemianzhan1.png" alt="图片"></p>
<h2 id="页面间通讯-传递参数" tabindex="-1"><a class="header-anchor" href="#页面间通讯-传递参数" aria-hidden="true">#</a> 页面间通讯(传递参数)</h2>
<p>在 <code>uni-app</code> 中, 常见页面通讯方式有:</p>
<ol>
<li><code>url</code>查询字符串 和  <code>EventChannel</code></li>
<li>事件总线</li>
<li>全局数据 <code>globalData</code></li>
<li>本地数据存储</li>
<li><code>Vuex 和 Pinia</code> 状态管理库</li>
</ol>
<h4 id="url查询字符串-和-eventchannel" tabindex="-1"><a class="header-anchor" href="#url查询字符串-和-eventchannel" aria-hidden="true">#</a> <code>url</code>查询字符串 和  <code>EventChannel</code></h4>
<p><strong>方式一</strong> :  <code>url</code>查询字符串和 <code>EventChannel</code>(兼容 h5, weapp, app)</p>
<ul>
<li>直接在 <code>url</code> 的后面通过查询字符串的形式拼接在后面</li>
<li>然后可以在 <code>onLoad()</code> 生命周期里面获取 url 传递的参数</li>
</ul>
<p>**<code>EventChannel</code>**对象的获取方式</p>
<ul>
<li>Options 写法 : <code>this.getOpenerEventChannel()</code></li>
<li>Composition 写法: <code>getCurrentInstance().proxy().getOpenerEventChannel()</code></li>
</ul>
<p><strong>从首页传递到详情页面(正向传递)</strong></p>
<ul>
<li><code>url</code>查询字符串</li>
</ul>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>navigator</span> <span class="token attr-name">url</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/pages/detail/detail?name=frank&amp;age=18<span class="token punctuation">"</span></span> <span class="token attr-name">open-type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>navigate<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span><span class="token punctuation">></span></span>跳转到 detail 页面(非 tabBar 页面)<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>navigator</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>	  <span class="token operator">&lt;</span>button type<span class="token operator">=</span><span class="token string">"default"</span> @click<span class="token operator">=</span><span class="token string">"goToDetail"</span><span class="token operator">></span>跳转到 detail 页面<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>	
    
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">goToDetail</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        uni<span class="token punctuation">.</span><span class="token function">navigateTo</span><span class="token punctuation">(</span><span class="token punctuation">{</span> 
          <span class="token literal-property property">url</span><span class="token operator">:</span><span class="token string">"/pages/detail/detail?name=frank&amp;age=18"</span>  <span class="token comment">// url上传递参数</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>然后在页面中接受</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token function">onLoad</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span> <span class="token comment">// {name: 'frank', age: '18'}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul>
<li>或者使用  <code>EventChannel</code></li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>     <span class="token function">goToDetail</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        uni<span class="token punctuation">.</span><span class="token function">navigateTo</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">url</span><span class="token operator">:</span><span class="token string">"/pages/detail/detail?name=frank&amp;age=18"</span><span class="token punctuation">,</span>
          <span class="token function">success</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            res<span class="token punctuation">.</span>eventChannel<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">'shijianming'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>  
              <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'eren'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">22</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>页面内部:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token function">onLoad</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span> <span class="token comment">// {name: 'frank', age: '18'}</span>
     
     <span class="token comment">// eventChannel 通讯</span>
      <span class="token keyword">const</span> eventChannel <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getOpenerEventChannel</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      eventChannel<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'shijianming'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=></span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token comment">// {name: 'eren', age: 22}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p><strong>详情页面中吧数据传递给首页(你想传递)</strong></p>
<p>页面中:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">"goBackToHome"</span><span class="token operator">></span>回到首页<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>

  <span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token function">goBackToHome</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        uni<span class="token punctuation">.</span><span class="token function">navigateBack</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">delta</span><span class="token operator">:</span>  <span class="token number">1</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token keyword">const</span> eventChannel  <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getOpenerEventChannel</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        eventChannel<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">'shijianming'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">myData</span><span class="token operator">:</span> <span class="token string">'detail 详情页面中传递给首页的数据'</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>首页</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>	<span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">goToDetail</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        uni<span class="token punctuation">.</span><span class="token function">navigateTo</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">url</span><span class="token operator">:</span><span class="token string">"/pages/detail/detail?name=frank&amp;age=18"</span><span class="token punctuation">,</span>
          <span class="token literal-property property">events</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token function">shijianming</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
              console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>  
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h4 id="事件总线" tabindex="-1"><a class="header-anchor" href="#事件总线" aria-hidden="true">#</a> 事件总线</h4>
<p><strong>方式二 : 事件总线</strong></p>
<ul>
<li><code>uni.$emit(eventName, object)</code></li>
<li><code>uni.$on(eventName, callback)</code></li>
<li><code>uni.$off(eventName, callback)</code></li>
<li><code>uni.$once(eventName, callback)</code></li>
</ul>
<p>只能逆向传递, 比如在详情页面传递一些数据给首页</p>
<p>页面</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code> <span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token function">goBackToHome</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        uni<span class="token punctuation">.</span><span class="token function">navigateBack</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">delta</span><span class="token operator">:</span>  <span class="token number">1</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        uni<span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">'shijianming'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>   <span class="token comment">// uni.$emit('eventName', object) 触发事件</span>
          <span class="token literal-property property">myData</span><span class="token operator">:</span><span class="token string">'传递数据给首页'</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>首页</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token function">onLoad</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token comment">// uni.$on('eventName', callback) 监听触发的事件 </span>
      uni<span class="token punctuation">.</span><span class="token function">$on</span><span class="token punctuation">(</span><span class="token string">'shijianming'</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>getDataFromDetail<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">onUnload</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      uni<span class="token punctuation">.</span><span class="token function">$off</span><span class="token punctuation">(</span><span class="token string">'shijianming'</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>getDataFromDetail<span class="token punctuation">)</span>  <span class="token comment">// 移除监听器</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">getDataFromDetail</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="页面的声明周期" tabindex="-1"><a class="header-anchor" href="#页面的声明周期" aria-hidden="true">#</a> 页面的声明周期</h2>
<p><a href="https://uniapp.dcloud.net.cn/tutorial/page.html#lifecycle" target="_blank" rel="noopener noreferrer">页面生命周期<ExternalLinkIcon/></a></p>
<p>页面的声明周期有 <code>onLoad(options), onShow, onReady, onHide, onUnload, onReachBottom, onPullDownRefresh</code> 等等...</p>
<ul>
<li>
<p>tanBar 页面第一次渲染调用 <code>onLoad, onShow, onReady</code>, 跳转到另一个页面会调用当前页面的 <code>onHide</code>, 然后再次回来会只调用 <code>onShow</code></p>
</li>
<li>
<p>滚动到底部会触发 <code>onReachBottom</code></p>
</li>
</ul>
<p>注意: 页面滚动才会触发 <code>onReachBottom</code>, 如果自行通过 overflow 实现滚动不会触发 <code>onReachBottom</code> 回调</p>
<ul>
<li>下拉刷新需要在 pages.json 中开启功能 <code>&quot;enablePullDownRefresh&quot;: true</code>, 下拉舒心触发 <code>onPullDownRefresh</code></li>
</ul>
<p>关闭下拉刷新</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">onPullDownRefresh</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    uni<span class="token punctuation">.</span><span class="token function">stopPullDownRefresh</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 关闭下拉刷新</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">1000</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>页面也支持 <strong><code>Vue</code> 的生命周期</strong>, 它们的执行顺序:
<img src="@source/.vuepress/public/images/yemian1.png" alt="图片"></p>
<h2 id="页面的生命周期-composition-api" tabindex="-1"><a class="header-anchor" href="#页面的生命周期-composition-api" aria-hidden="true">#</a> 页面的生命周期 Composition API</h2>
<p><code>import { xxx } from '@dcloudio/uni-app'</code> 引入页面的生命周期钩子函数</p>
<p>比如:</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> 
    onLoad<span class="token punctuation">,</span>
    onShow<span class="token punctuation">,</span>
    onReady

  <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@dcloudio/uni-app'</span>

<span class="token function">onLoad</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'onLoad'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="网络的封装" tabindex="-1"><a class="header-anchor" href="#网络的封装" aria-hidden="true">#</a> 网络的封装</h2>
<p>baseURL: <code>http://152.136.185.210:7878/api/hy66</code></p>
<ol>
<li>获取首页 <code>Banner</code> 等数据</li>
</ol>
<ul>
<li>请求方法: GET</li>
<li>接口地址: <code>/home/multidata</code></li>
<li>调用例子 : <code>baseURL + /home/multidata</code></li>
</ul>
<p>封装请求 : 新建目录 <code>service</code> 并创建 index.js 文件</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>service
  |-- index.js
  |-- home.js
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><code>index.js </code> 使用了 <code>class类 和 promise</code> 封装网络请求</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> baseURL <span class="token operator">=</span> <span class="token string">'http://152.136.185.210:7878/api/hy66'</span>
<span class="token keyword">const</span> <span class="token constant">TIME_OUT</span> <span class="token operator">=</span> <span class="token number">60000</span>
<span class="token keyword">class</span> <span class="token class-name">HYRequest</span> <span class="token punctuation">{</span>
  <span class="token function">request</span><span class="token punctuation">(</span><span class="token parameter">url<span class="token punctuation">,</span> method<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      uni<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">url</span><span class="token operator">:</span>baseURL <span class="token operator">+</span> url<span class="token punctuation">,</span>
        <span class="token literal-property property">method</span><span class="token operator">:</span> method <span class="token operator">||</span> <span class="token string">'GET'</span><span class="token punctuation">,</span>
        data<span class="token punctuation">,</span>
        <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token constant">TIME_OUT</span><span class="token punctuation">,</span>
        <span class="token function">success</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
          <span class="token function">resolve</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">fail</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
          <span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token function">get</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span>params<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> <span class="token string">"GET"</span><span class="token punctuation">,</span> params<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token function">post</span><span class="token punctuation">(</span><span class="token parameter">url<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> <span class="token string">"POST"</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">HYRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><p><code>home.js</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> request <span class="token keyword">from</span> <span class="token string">'./index.js'</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">getHomeMultiData</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> request<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/home/multidata'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>页面中点击按钮发起了请求</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>  
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>getHomeData<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>获取 home 的数据<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> getHomeMultiData <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/service/home.js'</span>
<span class="token keyword">const</span> <span class="token function-variable function">getHomeData</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span><span class="token punctuation">{</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getHomeMultiData</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
<span class="token punctuation">}</span> 
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>一些注意点
<img src="@source/.vuepress/public/images/uniwangluo1.png" alt="图片"></p>
<h2 id="数据缓存" tabindex="-1"><a class="header-anchor" href="#数据缓存" aria-hidden="true">#</a> 数据缓存</h2>
<p><a href="https://uniapp.dcloud.net.cn/api/storage/storage.html#" target="_blank" rel="noopener noreferrer">数据缓存官方文档<ExternalLinkIcon/></a></p>
<p><img src="@source/.vuepress/public/images/unihuancun1.png" alt="图片"></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token function">setStorage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token comment">// 本地数据存储</span>
      uni<span class="token punctuation">.</span><span class="token function">setStorage</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span><span class="token string">'userInfo'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'frank'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">18</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">success</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'success'</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">fail</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">complete</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'complete'</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
     <span class="token function">getStorage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// 读取本地缓存的数据</span>
        uni<span class="token punctuation">.</span><span class="token function">getStorage</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">key</span><span class="token operator">:</span><span class="token string">'userInfo'</span><span class="token punctuation">,</span>
          <span class="token function">success</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>data<span class="token punctuation">)</span> <span class="token comment">// ，res = {data: key对应的内容}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><h2 id="组件" tabindex="-1"><a class="header-anchor" href="#组件" aria-hidden="true">#</a> 组件</h2>
<p>uni-app 的组件跟 Vue 的标准组件基本相同, 但也有一些区别, 比如:</p>
<ul>
<li>传统的 Vue 组件 需要创建, 引用, 注册 三个步骤才能使用组件, <code>easycom 组件模式</code>可以将其精简为一步</li>
<li><a href="https://uniapp.dcloud.net.cn/collocation/pages.html#easycom" target="_blank" rel="noopener noreferrer">easycom 组件模式<ExternalLinkIcon/></a>
<ul>
<li>组件需要符合 <code>components/组件名称/组件名称.vue</code> 的目录结构</li>
<li>符合以上目录结构的组件就可以不用引用, 注册, 直接在页面中使用该组件</li>
</ul>
</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>components
  |-- my-button
      |-- my-button.vue
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="组件生命周期" tabindex="-1"><a class="header-anchor" href="#组件生命周期" aria-hidden="true">#</a> 组件生命周期</h3>
<p><a href="https://uniapp.dcloud.net.cn/tutorial/page.html#componentlifecycle" target="_blank" rel="noopener noreferrer">组件的生命周期 官方文档<ExternalLinkIcon/></a></p>
<p><code>uni-app</code> 组件支持的声明周期, 与 <code>Vue</code> 组件的生命周期相同</p>
<p>那组件中可以使用页面的声明周期吗?</p>
<ul>
<li>在 <code>Options API</code> 中: 组件中<strong>不支持</strong>使用页面的声明周期</li>
<li>在 <code>Composition API</code> 中: 组件中<strong>支持</strong>页面的声明周期, 但不同端支持的情况有差异
<ul>
<li>比如在 App, H5 中 <code>onReady</code> 不会触发, 但在 weapp 中 <code>onReady</code> 可以触发</li>
</ul>
</li>
</ul>
<h2 id="composition-api-的页面通讯" tabindex="-1"><a class="header-anchor" href="#composition-api-的页面通讯" aria-hidden="true">#</a> Composition API 的页面通讯</h2>
<h3 id="正向传递" tabindex="-1"><a class="header-anchor" href="#正向传递" aria-hidden="true">#</a> 正向传递</h3>
<p><strong>正向传递</strong>数据方法:</p>
<ul>
<li><code>url</code> 拼接字符串</li>
<li><code>eventChannel</code></li>
</ul>
<ol>
<li><code>url</code> 字符串拼接
在首页</li>
</ol>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">function</span> <span class="token function">goToDetail</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  uni<span class="token punctuation">.</span><span class="token function">navigateTo</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span><span class="token string">'/pages/detail/detail?name=frank&amp;age=18'</span> <span class="token comment">// url 拼接字符串</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span> 
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>在详情页 -  方案一 :  使用<code>onLoad(options)</code> 接收值</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> onLoad <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@dcloudio/uni-app'</span>
  <span class="token comment">// 方案一: onLoad(options) 接受值</span>
  <span class="token function">onLoad</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span>  <span class="token comment">// {name: 'frank', age: '18'}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span> 
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>或者在详情页可以直接声明 <strong><code>props</code></strong> 来接受 <code>url</code> 传递的值</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span>String
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span>String
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'在首页通过 url 传递的数据'</span><span class="token punctuation">,</span> props<span class="token punctuation">.</span>name <span class="token punctuation">,</span> props<span class="token punctuation">.</span>age<span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><ol start="2">
<li>或者 方案二: 使用 <code>eventChannel</code></li>
</ol>
<p>在首页</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">function</span> <span class="token function">goToDetail</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  uni<span class="token punctuation">.</span><span class="token function">navigateTo</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span><span class="token string">'/pages/detail/detail?name=frank&amp;age=18'</span><span class="token punctuation">,</span>
    <span class="token function">success</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      res<span class="token punctuation">.</span>eventChannel<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">'emitEventToDetail'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">myData</span><span class="token operator">:</span> <span class="token string">'在首页传递给详情页面的数据'</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>在详情页:</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> onLoad <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@dcloudio/uni-app'</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> getCurrentInstance <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span> 
  
  <span class="token comment">// 方案二 : 使用 EventChannel </span>
  <span class="token comment">// $instance -> this 也就是当前 vue 的实例</span>
  <span class="token keyword">const</span> $instance <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token function">getCurrentInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>proxy<span class="token punctuation">)</span>
  <span class="token function">onLoad</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    <span class="token keyword">const</span> eventChannel <span class="token operator">=</span> $instance<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">getOpenerEventChannel</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    eventChannel<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'emitEventToDetail'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=></span><span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token comment">// {myData: '在首页传递给详情页面的数据'}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="逆向传递" tabindex="-1"><a class="header-anchor" href="#逆向传递" aria-hidden="true">#</a> 逆向传递</h3>
<p>在详情页点击某一个后退按钮时, 从详情页逆向传递数据给首页</p>
<p>详情页:</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> getCurrentInstance<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span>  <span class="token string">'vue'</span>
  <span class="token comment">// 获取实例 this</span>
  <span class="token keyword">const</span> $instance <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token function">getCurrentInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>proxy<span class="token punctuation">)</span>
  <span class="token keyword">function</span> <span class="token function">goBackToHome</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      uni<span class="token punctuation">.</span><span class="token function">navigateBack</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">delta</span><span class="token operator">:</span><span class="token number">1</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token keyword">const</span> eventChannel <span class="token operator">=</span> $instance<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">getOpenerEventChannel</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      eventChannel<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">'emitEventToHome'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">myData</span><span class="token operator">:</span> <span class="token string">'在详情页中传递数据给首页'</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>在首页:</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">function</span> <span class="token function">goToDetail</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  uni<span class="token punctuation">.</span><span class="token function">navigateTo</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span><span class="token string">'/pages/detail/detail?name=frank&amp;age=18'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">events</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token function">emitEventToHome</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token comment">// {myData: '在详情页中传递数据给首页'}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span> 
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="事件总线逆向传递数据" tabindex="-1"><a class="header-anchor" href="#事件总线逆向传递数据" aria-hidden="true">#</a> 事件总线逆向传递数据</h3>
<p>逆向传递数据 : 这次使用全局事件总线</p>
<p>在详情页:</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">function</span> <span class="token function">goBackToHome</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      uni<span class="token punctuation">.</span><span class="token function">navigateBack</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">delta</span><span class="token operator">:</span><span class="token number">1</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
      uni<span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">'emitEventToHome'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">myData</span><span class="token operator">:</span> <span class="token string">'数据'</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>在首页</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> onLoad<span class="token punctuation">,</span> onUnload <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@dcloudio/uni-app'</span>
  
<span class="token keyword">function</span> <span class="token function">goToDetail</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  uni<span class="token punctuation">.</span><span class="token function">navigateTo</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span><span class="token string">'/pages/detail/detail?name=frank&amp;age=18'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span> 

<span class="token function">onLoad</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span><span class="token punctuation">{</span>
  uni<span class="token punctuation">.</span><span class="token function">$on</span><span class="token punctuation">(</span><span class="token string">'emitEventToHome'</span><span class="token punctuation">,</span> acceptDataFromDetail<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token function">onUnload</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span><span class="token punctuation">{</span>
  uni<span class="token punctuation">.</span><span class="token function">$off</span><span class="token punctuation">(</span><span class="token string">'emitEventToHome'</span><span class="token punctuation">,</span> acceptDataFromDetail<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">function</span> <span class="token function">acceptDataFromDetail</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token comment">// {myData: '数据'}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h2 id="使用-pinia" tabindex="-1"><a class="header-anchor" href="#使用-pinia" aria-hidden="true">#</a> 使用 Pinia</h2>
<p>uni-app 内置了 <code>Pinia</code>, 使用 H Builder X 不需要手去安装, 直接使用即可</p>
<p>步骤如下:</p>
<ol>
<li>在 main.js 中安装 Pinia 插件</li>
</ol>
<ul>
<li><code>app.use(Pinia.createPinia())</code>
<img src="@source/.vuepress/public/images/unipinia1.png" alt="图片"></li>
</ul>
<ol start="2">
<li>接着创建一个 <code>store</code></li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>store
  |-- counter.js
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>counter.js</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineStore<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'pinia'</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> useCounter <span class="token operator">=</span> <span class="token function">defineStore</span><span class="token punctuation">(</span><span class="token string">'counter'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">state</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">actions</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token operator">++</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">decrement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token operator">--</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><ol start="3">
<li>然后在组件中就可以直接去使用了</li>
</ol>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">></span></span>  
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>text</span><span class="token punctuation">></span></span>{{count}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>text</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>increment<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>+1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span>storeToRefs<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'pinia'</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span>useCounter<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/store/counter.js'</span>
  
  <span class="token keyword">const</span> counterStore <span class="token operator">=</span> <span class="token function">useCounter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  
  <span class="token keyword">const</span> <span class="token punctuation">{</span> count <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">storeToRefs</span><span class="token punctuation">(</span>counterStore<span class="token punctuation">)</span>
  <span class="token keyword">const</span> <span class="token function-variable function">increment</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span><span class="token punctuation">{</span>
    counterStore<span class="token punctuation">.</span><span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div></template>
