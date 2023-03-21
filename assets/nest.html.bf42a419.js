import{_ as n,d as s}from"./app.fcb85f29.js";const a={},p=s(`<h1 id="\u5D4C\u5957\u8DEF\u7531" tabindex="-1"><a class="header-anchor" href="#\u5D4C\u5957\u8DEF\u7531" aria-hidden="true">#</a> \u5D4C\u5957\u8DEF\u7531</h1><p>\u8981\u5728\u5D4C\u5957\u7684\u51FA\u53E3\u4E2D\u6E32\u67D3\u7EC4\u4EF6\uFF0C\u9700\u8981\u5728 VueRouter \u7684\u53C2\u6570\u4E2D\u4F7F\u7528 <code>children</code> \u914D\u7F6E\uFF1A <code>\u6CE8\u610F</code>:\u7236\u7EA7\u8DEF\u7531\u7EC4\u4EF6\u4E2D\u8981\u6709<code>&lt;router-view /&gt;</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
 <span class="token literal-property property">routes</span><span class="token operator">:</span> <span class="token punctuation">[</span>
   <span class="token punctuation">{</span>
     <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/user/:id&#39;</span><span class="token punctuation">,</span>  
     <span class="token literal-property property">component</span><span class="token operator">:</span> User<span class="token punctuation">,</span>   <span class="token comment">//\u6CE8\u610F User\u91CC\u9762\u4E00\u5B9A\u8981\u6709\u4E2A &lt;router-view /&gt;\u6807\u7B7E</span>
     <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
       <span class="token punctuation">{</span>
         <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;profile&#39;</span><span class="token punctuation">,</span>  <span class="token comment">//\u5D4C\u5957\u4E0D\u52A0\u659C\u6760</span>
         <span class="token literal-property property">component</span><span class="token operator">:</span> UserProfile
       <span class="token punctuation">}</span><span class="token punctuation">,</span>
       <span class="token punctuation">{</span>
         <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;posts&#39;</span><span class="token punctuation">,</span>
         <span class="token literal-property property">component</span><span class="token operator">:</span> UserPosts
       <span class="token punctuation">}</span>
     <span class="token punctuation">]</span>
   <span class="token punctuation">}</span>
 <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div>`,3);function e(t,r){return p}var c=n(a,[["render",e],["__file","nest.html.vue"]]);export{c as default};
