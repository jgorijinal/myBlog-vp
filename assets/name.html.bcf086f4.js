import{_ as n,d as s}from"./app.fcb85f29.js";const a={},e=s(`<h1 id="\u547D\u540D\u8DEF\u7531" tabindex="-1"><a class="header-anchor" href="#\u547D\u540D\u8DEF\u7531" aria-hidden="true">#</a> \u547D\u540D\u8DEF\u7531</h1><p>\u6709\u65F6\u5019\uFF0C\u901A\u8FC7\u4E00\u4E2A\u540D\u79F0\u6765\u6807\u8BC6\u4E00\u4E2A\u8DEF\u7531\u663E\u5F97\u66F4\u65B9\u4FBF\u4E00\u4E9B\uFF0C\u53EF\u4EE5\u5728\u521B\u5EFA <code>Router</code> \u5B9E\u4F8B\u7684\u65F6\u5019\uFF0C\u5728 <code>routes</code> \u914D\u7F6E\u4E2D\u7ED9\u67D0\u4E2A\u8DEF\u7531\u8BBE\u7F6E\u540D\u79F0\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/user/:username&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;user&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> User
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line">\xA0</div><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u53EF\u4EE5\u5411 <code>router-link</code> \u7EC4\u4EF6\u7684 <code>:to</code> \u5C5E\u6027\u4F20\u9012\u4E00\u4E2A\u5BF9\u8C61\uFF1A</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{name:<span class="token punctuation">&#39;</span>user<span class="token punctuation">&#39;</span> , params:{username:<span class="token punctuation">&#39;</span>eren<span class="token punctuation">&#39;</span>}}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u7B49\u4EF7\u4E8E</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;user&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">&#39;erina&#39;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u8DEF\u7531\u5C06\u5BFC\u822A\u5230\u8DEF\u5F84 <code>/user/eren</code></p>`,8);function p(t,o){return e}var c=n(a,[["render",p],["__file","name.html.vue"]]);export{c as default};