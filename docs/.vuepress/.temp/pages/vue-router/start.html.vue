<template><h1 id="vue-router-4" tabindex="-1"><a class="header-anchor" href="#vue-router-4" aria-hidden="true">#</a> Vue Router 4</h1>
<p>Vue Router 是 Vue.js官方的路由管理器 , 适用于构建单页面应用  (单页应用路由管理器)
<a href="https://router.vuejs.org/zh/introduction.html" target="_blank" rel="noopener noreferrer">官网<ExternalLinkIcon/></a></p>
<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> vue-router@4
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="初始配置" tabindex="-1"><a class="header-anchor" href="#初始配置" aria-hidden="true">#</a> 初始配置</h2>
<p>src/router/index.js</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createRouter<span class="token punctuation">,</span> createWebHashHistory <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue-router"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Home <span class="token keyword">from</span> <span class="token string">'../components/Home.vue'</span>
<span class="token keyword">import</span> Article <span class="token keyword">from</span> <span class="token string">'../components/Article.vue'</span>

<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>           
    <span class="token literal-property property">history</span><span class="token operator">:</span> <span class="token function">createWebHashHistory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">routes</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">component</span><span class="token operator">:</span> Home
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/article'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">component</span><span class="token operator">:</span> Article
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> router
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>main.js</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">'./App.vue'</span>
<span class="token keyword">import</span> <span class="token string">'./index.css'</span>
<span class="token keyword">import</span> router <span class="token keyword">from</span> <span class="token string">"./router"</span><span class="token punctuation">;</span>
<span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>router<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">'#app'</span><span class="token punctuation">)</span>    <span class="token comment">//app.use(router)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="hash模式-与-history模式" tabindex="-1"><a class="header-anchor" href="#hash模式-与-history模式" aria-hidden="true">#</a> hash模式 与 history模式</h3>
<p>一个用<code>hash</code> , 一个用的<code>History API</code></p>
<ul>
<li><code>hash</code>模式 :</li>
</ul>
<ol>
<li>地址永远带<code>#</code> , 不美观</li>
<li>兼容性较好</li>
</ol>
<ul>
<li><code>history</code>模式:</li>
</ul>
<ol>
<li>地址干净 , 美观</li>
<li>兼容性比<code>hash</code>模式略差</li>
<li>应用部署时需要后端人员配合 ,  解决刷新页面404的问题 , 否则页⾯刷新就挂了</li>
</ol>
</template>
