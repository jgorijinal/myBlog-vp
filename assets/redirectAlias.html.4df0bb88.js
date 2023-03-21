import{_ as s,d as n}from"./app.fcb85f29.js";const a={},p=n(`<h1 id="\u91CD\u5B9A\u5411\u548C\u522B\u540D" tabindex="-1"><a class="header-anchor" href="#\u91CD\u5B9A\u5411\u548C\u522B\u540D" aria-hidden="true">#</a> \u91CD\u5B9A\u5411\u548C\u522B\u540D</h1><h2 id="\u91CD\u5B9A\u5411" tabindex="-1"><a class="header-anchor" href="#\u91CD\u5B9A\u5411" aria-hidden="true">#</a> \u91CD\u5B9A\u5411</h2><p>\u91CD\u65B0\u8DF3\u8F6C\u5230\u67D0\u4E2A\u5730\u65B9</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">routes</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/a&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">redirect</span><span class="token operator">:</span> <span class="token string">&#39;/b&#39;</span> <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u91CD\u5B9A\u5411\u7684\u76EE\u6807\u4E5F\u53EF\u4EE5\u662F\u4E00\u4E2A\u547D\u540D\u7684\u8DEF\u7531\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">routes</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/a&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">redirect</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;foo&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="\u522B\u540D" tabindex="-1"><a class="header-anchor" href="#\u522B\u540D" aria-hidden="true">#</a> \u522B\u540D</h2><p><code>/a</code> \u7684\u522B\u540D\u662F <code>/b</code>\uFF0C\u610F\u5473\u7740\uFF0C\u5F53\u7528\u6237\u8BBF\u95EE <code>/b</code> \u65F6\uFF0C<code>URL</code> \u4F1A<strong>\u4FDD\u6301</strong>\u4E3A <code>/b</code>\uFF0C\u4F46\u662F<code>\u8DEF\u7531\u5339\u914D</code>\u5219\u4E3A <code>/a</code>\uFF0C\u5C31\u50CF\u7528\u6237\u8BBF\u95EE <code>/a</code> \u4E00\u6837\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">routes</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/a&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> <span class="token constant">A</span><span class="token punctuation">,</span> <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token string">&#39;/b&#39;</span> <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u590D\u6742\u70B9 , \u5B9E\u9645\u5F88\u7B80\u5355</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">routes</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/article-:id(\\\\d+).html&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> <span class="token constant">A</span><span class="token punctuation">,</span> <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token string">&#39;/:id(\\\\d+).html&#39;</span> <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,11);function e(t,o){return p}var c=s(a,[["render",e],["__file","redirectAlias.html.vue"]]);export{c as default};