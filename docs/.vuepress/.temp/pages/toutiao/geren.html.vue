<template><h1 id="个人中心" tabindex="-1"><a class="header-anchor" href="#个人中心" aria-hidden="true">#</a> 个人中心</h1>
<h2 id="_1-tabbar-处理" tabindex="-1"><a class="header-anchor" href="#_1-tabbar-处理" aria-hidden="true">#</a> 1. TabBar 处理</h2>
<p>通过分析页面，可以看到，首页、问答、视频、我的 都使用的是同一个底部标签栏，没必要在每个页面中都写一个，所以为了通用方便，可以使用 Vue Router 的嵌套路由来处理。</p>
<ul>
<li>父路由：一个空页面，包含一个 tabbar，中间留子路由出口</li>
<li>子路由
<ul>
<li>首页</li>
<li>问答</li>
<li>视频</li>
<li>我的</li>
</ul>
</li>
</ul>
<p>创建 tabbar 组件并配置路由</p>
<p>这里主要使用到的 Vant 组件：</p>
<ul>
<li><a href="https://youzan.github.io/vant/#/zh-CN/tabbar" target="_blank" rel="noopener noreferrer">Tabbar 标签栏<ExternalLinkIcon/></a></li>
</ul>
<p>创建 src/layout/index.vue
<img src="@source/.vuepress/public/images/lo1.png" alt="图片"></p>
<p>分别创建 首页、问答、视频、我的 页面组件</p>
<p><img src="@source/.vuepress/public/images/lo2.png" alt="图片"></p>
<p>然后将 layout 组件配置到一级路由, 并且设置它的子路由 src/router/index.js<br>
<img src="@source/.vuepress/public/images/lo3.png" alt="图片"></p>
<h2 id="_2-页面布局" tabindex="-1"><a class="header-anchor" href="#_2-页面布局" aria-hidden="true">#</a> 2. 页面布局</h2>
<h3 id="_2-1-未登录-登录头部状态" tabindex="-1"><a class="header-anchor" href="#_2-1-未登录-登录头部状态" aria-hidden="true">#</a> 2.1 未登录/登录头部状态</h3>
<p><img src="@source/.vuepress/public/images/lie1.png" alt="图片"></p>
<p>写 html , css , 头像用到了Vant的<a href="https://vant-ui.github.io/vant/v2/#/zh-CN/image" target="_blank" rel="noopener noreferrer">image组件<ExternalLinkIcon/></a></p>
<h3 id="_2-2-宫格导航" tabindex="-1"><a class="header-anchor" href="#_2-2-宫格导航" aria-hidden="true">#</a> 2.2 宫格导航</h3>
<p><a href="https://vant-ui.github.io/vant/v2/#/zh-CN/grid" target="_blank" rel="noopener noreferrer">宫格 grid组件<ExternalLinkIcon/></a></p>
<p><img src="@source/.vuepress/public/images/gong.png" alt="图片"></p>
<p><img src="@source/.vuepress/public/images/gong1.png" alt="图片"></p>
<p>导航要加 to 属性, 后面再加</p>
<h3 id="_2-3-单元格导航" tabindex="-1"><a class="header-anchor" href="#_2-3-单元格导航" aria-hidden="true">#</a> 2.3 单元格导航</h3>
<p><a href="https://vant-ui.github.io/vant/v2/#/zh-CN/cell" target="_blank" rel="noopener noreferrer">cell 单元格<ExternalLinkIcon/></a></p>
<p><img src="@source/.vuepress/public/images/ge1.png" alt="图片"></p>
<p><img src="@source/.vuepress/public/images/ge2.png" alt="图片"></p>
<p>后面再加 to 属性跳转</p>
<h2 id="_3-处理-未登录-已登录-不同的显示状态" tabindex="-1"><a class="header-anchor" href="#_3-处理-未登录-已登录-不同的显示状态" aria-hidden="true">#</a> 3. 处理 未登录/已登录 不同的显示状态</h2>
<ul>
<li>未登录，展示登录按钮</li>
<li>已登录，展示登录用户信息</li>
</ul>
<p>记得之前 Vuex里的user模块 存了 user, 判断有没有这个 use 数据</p>
<p><img src="@source/.vuepress/public/images/zt1.png" alt="图片"></p>
<p>最终效果:</p>
<p><img src="@source/.vuepress/public/images/xg555.png" alt="图片"></p>
<h2 id="_4-退出登录" tabindex="-1"><a class="header-anchor" href="#_4-退出登录" aria-hidden="true">#</a> 4. 退出登录</h2>
<ul>
<li>点击退出登录按钮, 弹窗提示(确认退出吗?)</li>
<li>调 action -&gt; 删除 state 数据, 删除本地存储  -&gt; 提示退出成功并跳转到 login 页面</li>
</ul>
<p><a href="https://vant-ui.github.io/vant/v2/#/zh-CN/dialog" target="_blank" rel="noopener noreferrer">dialog 弹出框<ExternalLinkIcon/></a></p>
<p>Vuex 退出登录 action 封装  src/store/user/index.js
<img src="@source/.vuepress/public/images/tc1.png" alt="图片">
点击退出按钮并调用 dispatch
<img src="@source/.vuepress/public/images/tc2.png" alt="图片"></p>
<p>这个项目没把用户资料存在 Vuex 里面, 所以这个方面就不管了</p>
<h2 id="axios-请求拦截器-token-优化" tabindex="-1"><a class="header-anchor" href="#axios-请求拦截器-token-优化" aria-hidden="true">#</a> axios 请求拦截器 token 优化</h2>
<p>项目中的接口除了登录之外大多数都需要提供 token 才有访问权限。</p>
<p>通过接口文档可看以到，后端接口要求我们将 token 放到请求头 <code>Header</code> 中并以下面的格式发送。</p>
<blockquote>
<p>字段名称：<code>Authorization</code></p>
<p>字段值：<code>Bearer token</code>，注意 <code>Bearer</code> 和 <code>token</code> 之间有一个空格</p>
</blockquote>
<p>方式一：在每次请求的时候手动添加（麻烦）</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
  <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">Authorization</span><span class="token operator">:</span> <span class="token string">"Bearer token"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>方式二：使用请求拦截器统一添加（推荐，更方便）</p>
<div class="language-mermaid ext-mermaid line-numbers-mode"><pre v-pre class="language-mermaid"><code><span class="token keyword">sequenceDiagram</span>
	<span class="token keyword">participant</span> A as 发起请求
	<span class="token keyword">participant</span> B as 请求拦截器
	<span class="token keyword">participant</span> C as 服务端
  A<span class="token arrow operator">-->></span>B<span class="token operator">:</span> http<span class="token operator">:</span>//xxx
  <span class="token keyword">Note right of</span> B<span class="token operator">:</span> 设置 token
  B<span class="token arrow operator">->></span>C<span class="token operator">:</span> 请求发出
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>在 <code>src/utils/request.js</code> 中添加拦截器统一设置 token :
<img src="@source/.vuepress/public/images/qq1.png" alt="图片"></p>
<p><img src="@source/.vuepress/public/images/resdata.png" alt="图片">
在响应拦截器还直接返回了 res.data , 所以前面登录模块user数据接受部分还要处理一下</p>
<h2 id="展示用户登录信息" tabindex="-1"><a class="header-anchor" href="#展示用户登录信息" aria-hidden="true">#</a> 展示用户登录信息</h2>
<ul>
<li>封装接口</li>
<li>请求获取数据</li>
<li>模板绑定</li>
</ul>
<p>1、在 <code>api/user.js</code> 中添加封装数据接口
<img src="@source/.vuepress/public/images/zl1.png" alt="图片">
在 axios 请求拦截器中已经注入了 token, 所以没必要单独注入
2、在 <code>views/my/index.vue</code> 请求加载数据
<img src="@source/.vuepress/public/images/zs1.png" alt="图片"></p>
<ol start="3">
<li>模板上绑定</li>
</ol>
</template>
