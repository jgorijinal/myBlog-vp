<template><h1 id="路由守卫" tabindex="-1"><a class="header-anchor" href="#路由守卫" aria-hidden="true">#</a> 路由守卫</h1>
<p><code>vue-router</code> 提供的路由守卫主要用来通过<strong>跳转或取消</strong>的方式<strong>守卫</strong>导航。路由守卫有(1)全局的，(2)单个路由独享的，或者(3)组件级的。</p>
<h2 id="全局前置守卫-router-beforeeach" tabindex="-1"><a class="header-anchor" href="#全局前置守卫-router-beforeeach" aria-hidden="true">#</a> 全局前置守卫 <code>router.beforeEach()</code></h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

router<span class="token punctuation">.</span><span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> <span class="token keyword">from</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>to<span class="token punctuation">.</span>name <span class="token punctuation">,</span> from<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
  <span class="token comment">// ...</span>
  <span class="token comment">// 返回 false 会取消导航</span>
  <span class="token keyword">return</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>当一个导航触发时，全局前置守卫按照创建顺序调用。守卫是<strong>异步解析执行</strong>的。</p>
<p>两个参数:</p>
<ul>
<li><code>to</code>: 即将要进入的目标 <a href="https://router.vuejs.org/zh/api/#routelocationnormalized" target="_blank" rel="noopener noreferrer">用一种标准化的方式<ExternalLinkIcon/></a></li>
<li><code>from</code>: 当前导航正要离开的路由 <a href="https://router.vuejs.org/zh/api/#routelocationnormalized" target="_blank" rel="noopener noreferrer">用一种标准化的方式<ExternalLinkIcon/></a>
返回的值:</li>
<li><code>false</code>: 取消当前的导航。</li>
<li>一个<a href="https://router.vuejs.org/zh/api/#routelocationraw" target="_blank" rel="noopener noreferrer">路由地址<ExternalLinkIcon/></a>: 通过一个路由地址跳转到一个不同的地址 ,比如<code>name: 'home'</code> 之类的配置。</li>
</ul>
<p>如果什么都没有，<code>undefined</code> 或返回 <code>true</code>，则<strong>导航是有效的</strong>，并调用下一个导航守卫</p>
<p>用<strong>Promise</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>router<span class="token punctuation">.</span><span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> <span class="token keyword">from</span></span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve <span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
     <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">}</span> <span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>router<span class="token punctuation">.</span><span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> <span class="token keyword">from</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// canUserAccess() 返回 `true` 或 `false`</span>
  <span class="token keyword">return</span> <span class="token keyword">await</span> <span class="token function">canUserAccess</span><span class="token punctuation">(</span>to<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="可选的第三个参数-next" tabindex="-1"><a class="header-anchor" href="#可选的第三个参数-next" aria-hidden="true">#</a> 可选的第三个参数 next</h3>
<p>如果传了next参数 , 就要保证<strong>调一次</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>router<span class="token punctuation">.</span><span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span>from <span class="token punctuation">,</span> next</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>to<span class="token punctuation">.</span>name<span class="token operator">===</span><span class="token string">'about'</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>isAuthenticated<span class="token punctuation">)</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'login'</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">else</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>     <span class="token comment">//确保只调一次</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="全局解析守卫-router-beforeresolve" tabindex="-1"><a class="header-anchor" href="#全局解析守卫-router-beforeresolve" aria-hidden="true">#</a> 全局解析守卫 <code>router.beforeResolve()</code></h2>
<p>在导航被确认之前，同时在<strong>所有组件内守卫和异步路由组件被解析之后</strong>，解析守卫就被调用。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>router<span class="token punctuation">.</span><span class="token function">beforeResolve</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">to <span class="token punctuation">,</span> <span class="token keyword">from</span></span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'beforeResolve'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="全局后置守卫-router-aftereach" tabindex="-1"><a class="header-anchor" href="#全局后置守卫-router-aftereach" aria-hidden="true">#</a> 全局后置守卫 <code>router.afterEach()</code></h2>
<p>不会接受 <code>next</code> 函数也不会改变导航本身
第三个参数是<code>fail</code> , 通常是<code>undefined</code> , 导航被阻止了<code>fail</code>是带有<code>Error</code>实例,这些属性为我们提供了足够的信息，让我们知道哪些导航被阻止了以及为什么被阻止了。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>   <span class="token comment">//本地存储跳转成功的路由</span>
router<span class="token punctuation">.</span><span class="token function">afterEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from <span class="token punctuation">,</span>fail</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>fail<span class="token punctuation">)</span> <span class="token punctuation">{</span>   <span class="token comment">//没被阻止</span>
        routes<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>to<span class="token punctuation">.</span>path<span class="token punctuation">)</span>
        window<span class="token punctuation">.</span>localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">'routes'</span> <span class="token punctuation">,</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>routes<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="路由独享守卫-beforeenter" tabindex="-1"><a class="header-anchor" href="#路由独享守卫-beforeenter" aria-hidden="true">#</a> 路由独享守卫 <code>beforeEnter</code></h2>
<p>可以直接在路由配置上定义 <code>beforeEnter</code> 守卫。</p>
<p><code>beforeEnter</code> 守卫 <strong>只在进入路由时触发</strong>，不会在 params、query 或 hash 改变时触发。例如，从 /users/2 进入到 /users/3 或者从 /users/2#info 进入到 /users/2#projects。它们只有在 <strong>从一个不同的</strong> 路由导航时，才会被触发。</p>
<p>也可以将一个<strong>函数数组</strong>传递给 <code>beforeEnter</code>，这在为不同的路由重用守卫时很有用：</p>
<h3 id="例子-meta源信息完成登录验证" tabindex="-1"><a class="header-anchor" href="#例子-meta源信息完成登录验证" aria-hidden="true">#</a> 例子 :meta源信息完成登录验证</h3>
<p>helper.js</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> login <span class="token operator">=</span> <span class="token boolean">false</span>  <span class="token comment">//假设 登录状态是false ,即用户没登录</span>

<span class="token keyword">const</span> loginCheck <span class="token operator">=</span> <span class="token punctuation">(</span>to <span class="token punctuation">,</span> from <span class="token punctuation">,</span> next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">//如果 没登录 &amp;&amp; 需要验证 , 就直接跳转到登录页</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>login <span class="token operator">&amp;&amp;</span> to<span class="token punctuation">.</span>meta<span class="token punctuation">.</span>auth<span class="token punctuation">)</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'login'</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">else</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> loginCheck <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>router/index.js</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// import {createRouter, createWebHashHistory} from "vue-router";</span>
<span class="token comment">// import Home from '../views/Home.vue'</span>
<span class="token comment">// import About from '../views/About.vue'</span>
<span class="token comment">// import Login from '../views/Login.vue'</span>
<span class="token keyword">import</span>   <span class="token punctuation">{</span> loginCheck <span class="token punctuation">}</span>  <span class="token keyword">from</span> <span class="token string">'../helper'</span>
<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">history</span><span class="token operator">:</span> <span class="token function">createWebHashHistory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">routes</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span><span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/'</span><span class="token punctuation">,</span> <span class="token literal-property property">redirect</span><span class="token operator">:</span> <span class="token string">'/home'</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span><span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/home'</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'home'</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> Home<span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/about'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'about'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">meta</span><span class="token operator">:</span><span class="token punctuation">{</span> <span class="token literal-property property">auth</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span>   <span class="token comment">// 需要验证</span>
            <span class="token literal-property property">component</span><span class="token operator">:</span> About<span class="token punctuation">,</span>
            <span class="token literal-property property">beforeEnter</span><span class="token operator">:</span><span class="token punctuation">[</span>loginCheck<span class="token punctuation">]</span>  <span class="token comment">//可以是函数的数组</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span><span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/login'</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'login'</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> Login<span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> router
</code></pre><div class="highlight-lines"><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h2 id="组件内路由守卫" tabindex="-1"><a class="header-anchor" href="#组件内路由守卫" aria-hidden="true">#</a> 组件内路由守卫</h2>
<ul>
<li><code>beforeRouteEnter</code></li>
<li><code>beforeRouteUpdate</code></li>
<li><code>beforeRouteLeave</code></li>
</ul>
<h3 id="_1-beforerouteenter" tabindex="-1"><a class="header-anchor" href="#_1-beforerouteenter" aria-hidden="true">#</a> (1) <code>beforeRouteEnter</code></h3>
<ul>
<li><code>beforeRouteEnter</code>在导航确认前被调用，因此即将登场的新组件还没被创建。所以不能访问<code>this</code>
不过，可以通过传一个<strong>回调</strong>给 <code>next</code>来访问组件实例。</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">beforeRouteEnter</span> <span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">next</span><span class="token punctuation">(</span><span class="token parameter">vm</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 通过 `vm` 访问组件实例</span>
    vm<span class="token punctuation">.</span>title <span class="token operator">=</span> <span class="token string">'frank'</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h4 id="例子-beforerouteenter获取数据" tabindex="-1"><a class="header-anchor" href="#例子-beforerouteenter获取数据" aria-hidden="true">#</a> 例子: <code>beforeRouteEnter</code>获取数据</h4>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span>  <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'frank'</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">beforeRouteEnter</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from <span class="token punctuation">,</span>next</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve <span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>  <span class="token comment">//模拟请求数据 , 2秒后获取数据</span>
      <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
          <span class="token function">next</span><span class="token punctuation">(</span><span class="token parameter">vm</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            vm<span class="token punctuation">.</span>name  <span class="token operator">=</span> <span class="token string">'hello'</span>  <span class="token comment">//next通过回调, 用vm获取实例 , 改data属性</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h3 id="_2-beforerouteupdate" tabindex="-1"><a class="header-anchor" href="#_2-beforerouteupdate" aria-hidden="true">#</a> (2) <code>beforeRouteUpdate</code></h3>
<p>路由参数变化时 , 当使用路由参数时，例如从 <code>/user/foo</code> 导航到 <code>/user/bar</code>，原来的组件实例会被复用。因为两个路由都渲染同个组件，比起销毁再创建，复用则显得更加高效。不过，这也意味着组件的生命周期钩子不会再被调用。</p>
<p>所以想要响应路由参数的变化, 修改数据:
<strong>(1)</strong> 可以通过<code>watch</code>监听<code>$route</code>对象的变化 , <strong>(2)</strong> 也可以使用<strong>组件内守卫</strong>  <strong><code>beforeRouteUpdate</code></strong></p>
<h3 id="_3-beforerouteleave" tabindex="-1"><a class="header-anchor" href="#_3-beforerouteleave" aria-hidden="true">#</a> (3) <code>beforeRouteLeave</code></h3>
<h4 id="例子-使用beforerouteleave保护数据" tabindex="-1"><a class="header-anchor" href="#例子-使用beforerouteleave保护数据" aria-hidden="true">#</a> 例子: 使用<code>beforeRouteLeave</code>保护数据</h4>
<p>如果当前页面为编辑页面, 用户点击退出会丢失编辑好的资料 , 所以这个时候可以加上退出前确认
该导航可以通过返回 <code>false</code> 来取消。</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span>  <span class="token punctuation">{</span>
  <span class="token comment">// data(){</span>
  <span class="token comment">//   return {</span>
  <span class="token comment">//     name:'frank'</span>
  <span class="token comment">//   }</span>
  <span class="token comment">// },</span>
  <span class="token comment">// beforeRouteEnter(to, from ,next){</span>
  <span class="token comment">//   new Promise((resolve , reject)=>{</span>
  <span class="token comment">//     setTimeout(()=>{</span>
  <span class="token comment">//         next(vm => {</span>
  <span class="token comment">//           vm.name  = 'hello'</span>
  <span class="token comment">//         })</span>
  <span class="token comment">//     } , 2000)</span>
  <span class="token comment">//   })</span>
  <span class="token comment">// },</span>
  <span class="token function">beforeRouteLeave</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span>from <span class="token punctuation">,</span>next</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">const</span> answer <span class="token operator">=</span> window<span class="token punctuation">.</span><span class="token function">confirm</span><span class="token punctuation">(</span><span class="token string">'Do you really want to leave? you have unsaved changes!'</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>answer<span class="token punctuation">)</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h2 id="路由解析流程" tabindex="-1"><a class="header-anchor" href="#路由解析流程" aria-hidden="true">#</a> 路由解析流程</h2>
<ol>
<li>导航被触发。</li>
<li>在失活的组件里调用 <code>beforeRouteLeave</code> 守卫</li>
<li>调用全局的 <code>beforeEach</code> 守卫</li>
<li>在重用的组件里调用 <code>beforeRouteUpdate</code> 守卫</li>
<li>在路由配置里调用 <code>beforeEnter</code></li>
<li>解析异步路由组件。</li>
<li>在被激活的组件里调用 <code>beforeRouteEnter</code>。</li>
<li>调用全局的 <code>beforeResolve</code> 守卫</li>
<li>导航被确认</li>
<li>调用全局的 <code>afterEach</code> 钩子</li>
<li>触发 DOM 更新</li>
<li>调用 <code>beforeRouteEnter</code> 守卫中传给 <code>next</code> 的回调函数，创建好的组件实例会作为回调函数的参数传入。</li>
</ol>
<ul>
<li>只有<strong>路由参数</strong>变化时:</li>
</ul>
<ol>
<li>全局的<code>beforeEach</code></li>
<li>组件内的<code>beforeRouteUpdate</code></li>
<li>全局的<code>beforeResolve</code></li>
<li>全局的<code>afterEach</code></li>
</ol>
</template>
