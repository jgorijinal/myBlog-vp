<template><h1 id="路由守卫" tabindex="-1"><a class="header-anchor" href="#路由守卫" aria-hidden="true">#</a> 路由守卫</h1>
<h2 id="构建路由守卫基础" tabindex="-1"><a class="header-anchor" href="#构建路由守卫基础" aria-hidden="true">#</a> 构建路由守卫基础</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>src/router
|--autoload.ts
|--guard.ts    //路由守卫
|--index.ts
|--routes.ts
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>index.ts</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createRouter<span class="token punctuation">,</span> createWebHashHistory<span class="token punctuation">,</span> RouteRecordRaw <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue-router"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> App <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> routes <span class="token keyword">from</span> <span class="token string">"./routes"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> AutoloadRoutes <span class="token keyword">from</span> <span class="token string">"./autoload"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Guard <span class="token keyword">from</span> <span class="token string">'./guard'</span>

<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  history<span class="token operator">:</span> <span class="token function">createWebHashHistory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  routes<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token operator">...</span>routes<span class="token punctuation">,</span> <span class="token operator">...</span>AutoloadRoutes<span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// console.log(getRoutes())</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">setupRouter</span><span class="token punctuation">(</span>app<span class="token operator">:</span> App<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>router<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">Guard</span><span class="token punctuation">(</span>router<span class="token punctuation">)</span>    <span class="token comment">// 把 router实例 传进去 (精髓!!!!!)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> router<span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>src/guard.ts</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>Router<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue-router'</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">Guard</span> <span class="token punctuation">{</span>    <span class="token comment">// 使用了 类</span>
  <span class="token keyword">private</span>  router<span class="token operator">:</span> Router<span class="token punctuation">;</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>router<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>router <span class="token operator">=</span> router<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">public</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//console.log(this.router);</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>router<span class="token punctuation">.</span><span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>to<span class="token punctuation">,</span>from<span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>

    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span>router<span class="token operator">:</span> Router<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">new</span> <span class="token class-name">Guard</span><span class="token punctuation">(</span>router<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="登录验证机制" tabindex="-1"><a class="header-anchor" href="#登录验证机制" aria-hidden="true">#</a> 登录验证机制</h2>
<p>需要两步</p>
<ul>
<li>对登录的处理</li>
<li>对权限的处理</li>
</ul>
<p>guard.ts</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>RouteLocationNormalized<span class="token punctuation">,</span> Router<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue-router'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> store<span class="token punctuation">,</span> <span class="token punctuation">{</span>IData<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/utils/store'</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">Guard</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> router<span class="token operator">:</span> Router<span class="token punctuation">;</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>router<span class="token operator">:</span> Router<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>router <span class="token operator">=</span> router<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">public</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>router<span class="token punctuation">.</span><span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>to<span class="token punctuation">,</span> from<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> token <span class="token operator">=</span> store<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'token'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// 如果没登录 , 跳转到 login 页面</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">isLogin</span><span class="token punctuation">(</span>to<span class="token punctuation">,</span> token<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  <span class="token comment">// 如果是 false , 跳转到登录页</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>name<span class="token operator">:</span> <span class="token string">'login'</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 检查是否满足可查看某页面的条件 , 返回布尔值</span>
  <span class="token keyword">private</span> <span class="token function">isLogin</span><span class="token punctuation">(</span>toRoute<span class="token operator">:</span> RouteLocationNormalized<span class="token punctuation">,</span> token<span class="token operator">:</span> IData <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>toRoute<span class="token punctuation">.</span>meta<span class="token punctuation">.</span>auth <span class="token operator">||</span> <span class="token punctuation">(</span>token <span class="token operator">&amp;&amp;</span> toRoute<span class="token punctuation">.</span>meta<span class="token punctuation">.</span>auth<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>  
      <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span>router<span class="token operator">:</span> Router<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">new</span> <span class="token class-name">Guard</span><span class="token punctuation">(</span>router<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><p>其中给**<code>meta</code>**定义类型, <a href="https://router.vuejs.org/zh/guide/advanced/meta.html#typescript" target="_blank" rel="noopener noreferrer">官网<ExternalLinkIcon/></a></p>
</template>
