<template><h1 id="嵌套路由" tabindex="-1"><a class="header-anchor" href="#嵌套路由" aria-hidden="true">#</a> 嵌套路由</h1>
<p>要在嵌套的出口中渲染组件，需要在 VueRouter 的参数中使用 <code>children</code> 配置：
<code>注意</code>:父级路由组件中要有<code>&lt;router-view /&gt;</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
 <span class="token literal-property property">routes</span><span class="token operator">:</span> <span class="token punctuation">[</span>
   <span class="token punctuation">{</span>
     <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/user/:id'</span><span class="token punctuation">,</span>  
     <span class="token literal-property property">component</span><span class="token operator">:</span> User<span class="token punctuation">,</span>   <span class="token comment">//注意 User里面一定要有个 &lt;router-view />标签</span>
     <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
       <span class="token punctuation">{</span>
         <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'profile'</span><span class="token punctuation">,</span>  <span class="token comment">//嵌套不加斜杠</span>
         <span class="token literal-property property">component</span><span class="token operator">:</span> UserProfile
       <span class="token punctuation">}</span><span class="token punctuation">,</span>
       <span class="token punctuation">{</span>
         <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'posts'</span><span class="token punctuation">,</span>
         <span class="token literal-property property">component</span><span class="token operator">:</span> UserPosts
       <span class="token punctuation">}</span>
     <span class="token punctuation">]</span>
   <span class="token punctuation">}</span>
 <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div></template>
