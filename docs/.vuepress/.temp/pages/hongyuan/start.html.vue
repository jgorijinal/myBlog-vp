<template><h1 id="搭建" tabindex="-1"><a class="header-anchor" href="#搭建" aria-hidden="true">#</a> 搭建</h1>
<h2 id="创建-vue-项目" tabindex="-1"><a class="header-anchor" href="#创建-vue-项目" aria-hidden="true">#</a> 创建 Vue 项目</h2>
<p>方式一 : Vue Cli</p>
<ul>
<li>基于 webpack 工具</li>
<li>命令: <code>vue create</code></li>
</ul>
<p>方式二: create-vue</p>
<ul>
<li>基于 Vite 工具</li>
<li>命令: <code>npm init vue@latest</code></li>
</ul>
<p><strong>此项目使用第二种方式 , Vite 搭建了项目</strong></p>
<ul>
<li>项目配置:</li>
</ul>
<ol>
<li>配置 项目的icon</li>
<li>配置 项目的标题</li>
<li>配置 jsconfig.json (使vscode代码提示更友好)</li>
</ol>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"compilerOptions"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// "target": "es5",</span>
    <span class="token property">"module"</span><span class="token operator">:</span> <span class="token string">"esnext"</span><span class="token punctuation">,</span>
    <span class="token property">"baseUrl"</span><span class="token operator">:</span> <span class="token string">"./"</span><span class="token punctuation">,</span>
    <span class="token property">"moduleResolution"</span><span class="token operator">:</span> <span class="token string">"node"</span><span class="token punctuation">,</span>
    <span class="token property">"paths"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"@/*"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">"src/*"</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"lib"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">"esnext"</span><span class="token punctuation">,</span>
      <span class="token string">"dom"</span><span class="token punctuation">,</span>
      <span class="token string">"dom.iterable"</span><span class="token punctuation">,</span>
      <span class="token string">"scripthost"</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h2 id="项目目录结构划分" tabindex="-1"><a class="header-anchor" href="#项目目录结构划分" aria-hidden="true">#</a> 项目目录结构划分</h2>
<p><img src="@source/.vuepress/public/images/vmulu1.png" alt="图片"></p>
<h2 id="css样式的重置" tabindex="-1"><a class="header-anchor" href="#css样式的重置" aria-hidden="true">#</a> CSS样式的重置</h2>
<p>对默认CSS样式进行重置:</p>
<ol>
<li><strong>normalize.css</strong> 重置样式</li>
</ol>
<p><a href="https://github.com/necolas/normalize.css" target="_blank" rel="noopener noreferrer">normalize.css<ExternalLinkIcon/></a></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> --save normalize.css
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>并在 main.js 引入形成依赖</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>import 'normalize.css'
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="2">
<li><strong>reset.css</strong> 自定义配置重置样式</li>
</ol>
<p>目录结构:</p>
<p><img src="@source/.vuepress/public/images/reset1.png" alt="图片"></p>
<p>比如:</p>
<p><img src="@source/.vuepress/public/images/reset2.png" alt="图片">
然后在 main.js 引入并形成依赖</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">'./assets/css/index.css'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="全家桶-vue-router-路由配置" tabindex="-1"><a class="header-anchor" href="#全家桶-vue-router-路由配置" aria-hidden="true">#</a> 全家桶 - Vue Router 路由配置</h2>
<p>先安装 Vue Router</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> vue-router@4
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>基本页面都最好<strong>写成文件夹</strong>, 因为这些基本页面有可能有它们自己的其他页面</p>
<p><img src="@source/.vuepress/public/images/rt1.png" alt="图片"></p>
<p>router/index.js</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createRouter<span class="token punctuation">,</span> createWebHashHistory <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue-router'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">history</span><span class="token operator">:</span> <span class="token function">createWebHashHistory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token comment">// 映射关系 path -> component</span>
  <span class="token literal-property property">routes</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">redirect</span><span class="token operator">:</span><span class="token string">'/home'</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/home'</span><span class="token punctuation">,</span>
      <span class="token function-variable function">component</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'@/views/home/home.vue'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/favor'</span><span class="token punctuation">,</span>
      <span class="token function-variable function">component</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'@/views/favor/favor.vue'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/order'</span><span class="token punctuation">,</span>
      <span class="token function-variable function">component</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'@/views/order/order.vue'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/message'</span><span class="token punctuation">,</span>
      <span class="token function-variable function">component</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'@/views/message/message.vue'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> router 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><p>main.js <strong>引入 router 实例</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">'./App.vue'</span>
<span class="token keyword">import</span> <span class="token string">'normalize.css'</span>
<span class="token keyword">import</span> <span class="token string">'./assets/css/index.css'</span>
<span class="token keyword">import</span> router <span class="token keyword">from</span> <span class="token string">'./router'</span>

<span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>router<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">'#app'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>并<strong>且不能忘记, 在 App.vue, 要添加 <code>&lt;router-view /&gt;</code> 标签</strong></p>
<h2 id="全家桶-pinia-状态管理" tabindex="-1"><a class="header-anchor" href="#全家桶-pinia-状态管理" aria-hidden="true">#</a> 全家桶 - Pinia 状态管理</h2>
<p><a href="https://pinia.web3doc.top/getting-started.html" target="_blank" rel="noopener noreferrer">Pinia 中文文档<ExternalLinkIcon/></a></p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>npm install pinia
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="@source/.vuepress/public/images/rt1.png" alt="图片"></p>
<p>store/index.js</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createPinia <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'pinia'</span>

<span class="token keyword">const</span> pinia <span class="token operator">=</span> <span class="token function">createPinia</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> pinia
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>main.js 引入 pinia 实例</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">'./App.vue'</span>
<span class="token keyword">import</span> <span class="token string">'normalize.css'</span>
<span class="token keyword">import</span> <span class="token string">'./assets/css/index.css'</span>
<span class="token keyword">import</span> router <span class="token keyword">from</span> <span class="token string">'./router'</span>
<span class="token keyword">import</span> pinia <span class="token keyword">from</span> <span class="token string">'./store'</span>

<span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>router<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>pinia<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">'#app'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="引入-vant-组件" tabindex="-1"><a class="header-anchor" href="#引入-vant-组件" aria-hidden="true">#</a> 引入 Vant 组件</h2>
<p><a href="https://vant-contrib.gitee.io/vant/#/zh-CN/quickstart#tong-guo-npm-an-zhuang" target="_blank" rel="noopener noreferrer">npm 安装<ExternalLinkIcon/></a></p>
<p><a href="https://vant-contrib.gitee.io/vant/#/zh-CN/quickstart#fang-fa-er.-an-xu-yin-ru-zu-jian-yang-shi" target="_blank" rel="noopener noreferrer">按需引入组件<ExternalLinkIcon/></a></p>
<h3 id="修改组件库样式方案" tabindex="-1"><a class="header-anchor" href="#修改组件库样式方案" aria-hidden="true">#</a> * 修改组件库样式方案 *</h3>
<ul>
<li><strong>方案一 : 全局覆盖</strong></li>
</ul>
<p>因为它们组件库样式是通过<strong>变量</strong>来控制的,如下
<img src="@source/.vuepress/public/images/bianliang1.png" alt="图片"></p>
<p>所以可以做全局的覆盖, 如:</p>
<p>assets/css/common.css</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">:root</span> <span class="token punctuation">{</span>
  <span class="token property">--primary-color</span><span class="token punctuation">:</span>#ff9854<span class="token punctuation">;</span>
  <span class="token property">--van-tabbar-item-icon-size</span><span class="token punctuation">:</span>30px <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">&nbsp;</div><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul>
<li><strong>方案二 : 局部覆盖</strong></li>
</ul>
<p>可以在<strong>组件内部单独覆盖变量的值</strong></p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>less<span class="token punctuation">"</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
<span class="token selector">.tabBar</span> <span class="token punctuation">{</span>
  // 组件内部<span class="token punctuation">,</span> 局部定义的变量<span class="token punctuation">,</span> 只在当前组件内部生效
  <span class="token property">--van-tabbar-item-icon-size</span><span class="token punctuation">:</span>30px <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ul>
<li><strong>方案三 : <code>:deep(选择器)</code></strong></li>
</ul>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>less<span class="token punctuation">"</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
<span class="token selector">.tabBar</span> <span class="token punctuation">{</span>
  <span class="token selector">// :deep(选择器) 可以找到子组件的类, 并直接该css属性
  :deep(.van-tabbar-item__icon)</span> <span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span>30px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></template>
