import{_ as n,d as a}from"./app.fcb85f29.js";const s={},t=a(`<h1 id="router-view-\u7684\u547D\u540D\u89C6\u56FE" tabindex="-1"><a class="header-anchor" href="#router-view-\u7684\u547D\u540D\u89C6\u56FE" aria-hidden="true">#</a> <code>&lt;router-view&gt;</code>\u7684\u547D\u540D\u89C6\u56FE</h1><p>\u60F3\u540C\u65F6\u5C55\u793A\u591A\u4E2A\u89C6\u56FE, \u5E76\u4E14\u6BCF\u4E2A\u8BD5\u56FE\u5C55\u793A\u4E0D\u540C\u7684\u7EC4\u4EF6, \u53EF\u4EE5\u4F7F\u7528\u547D\u540D\u89C6\u56FE</p><p><code>&lt;router-view&gt;</code>\u53EF\u4EE5\u8BBE\u7F6E<code>name</code>\u5C5E\u6027, <strong>\u9ED8\u8BA4\u503C</strong>\uFF1A&quot;default&quot;</p><ul><li>\u5982\u679C <code>&lt;router-view&gt;</code> \u8BBE\u7F6E\u4E86 <code>name</code>\uFF0C\u5219\u4F1A\u6E32\u67D3\u5BF9\u5E94\u7684\u8DEF\u7531\u914D\u7F6E\u4E2D <code>components </code>\u4E0B\u7684\u76F8\u5E94\u7EC4\u4EF6\u3002</li></ul><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>view one<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>default<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>view two<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>a<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>A<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>view three<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>b<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>B<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-view</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u6216\u8005 \u6839\u636E\u4E0D\u540C\u7684\u60C5\u51B5</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span>  <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>a<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{Component}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>component</span> <span class="token attr-name">:is</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Component ? Component : OtherComponent <span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>   <span class="token comment">&lt;!--\u8DEF\u7531\u914D\u7F6E\u540D\u4E3Aa\u7684\u7EC4\u4EF6\u5B58\u5728\u7684\u8BDD\u5C31\u5C55\u793Aa , \u4E0D\u7136\u5C31\u5C55\u793A\u5176\u4ED6\u7684\u7EC4\u4EF6 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-view</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u521D\u59CB\u8DEF\u7531\u914D\u7F6E:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">routes</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>   <span class="token comment">//\u6CE8\u610F: \u8FD9\u91CC\u662Fcomponents , \u4E0D\u662Fcomponent</span>
        <span class="token keyword">default</span><span class="token operator">:</span> Foo<span class="token punctuation">,</span> <span class="token comment">//\u9ED8\u8BA4\u4E3A default</span>
        <span class="token literal-property property">a</span><span class="token operator">:</span> Bar<span class="token punctuation">,</span>
        <span class="token literal-property property">b</span><span class="token operator">:</span> Baz
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="highlight-lines"><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div>`,9);function p(e,o){return t}var c=n(s,[["render",p],["__file","router-view-name.html.vue"]]);export{c as default};