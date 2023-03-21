import{_ as n,d as s}from"./app.fcb85f29.js";var a="/myBlog-vp/assets/computed.3eb0d89b.png";const p={},t=s(`<h1 id="computed-\u548C-watch" tabindex="-1"><a class="header-anchor" href="#computed-\u548C-watch" aria-hidden="true">#</a> computed \u548C watch</h1><h2 id="_1-computed-\u8BA1\u7B97\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#_1-computed-\u8BA1\u7B97\u5C5E\u6027" aria-hidden="true">#</a> 1. computed \u8BA1\u7B97\u5C5E\u6027</h2><p>\u5982\u679C\u5728\u6A21\u677F\u91CC\u505A\u8FC7\u591A\u7684\u8BA1\u7B97 ,\u6BCF\u6B21\u8FD8\u9700\u8981\u5B9A\u4E49\u51FD\u6570\u540D ,\u8FD9\u663E\u7136\u4E0D\u662F\u6B63\u786E\u7684\u5199\u6CD5\u3002 \u800C\u4E14\u6211\u4EEC\u5728store\u91CC\u62FF\u5230getters\u8BD5\u56FE\u663E\u793A\u5230\u6A21\u677F\u65F6 , \u60F3\u4E0D\u5230\u5408\u9002\u7684\u65B9\u6CD5 , \u8FD9\u79CD\u65F6\u5019\u53EF\u4EE5\u7528<code>computed</code></p><ul><li><code>computed</code>\u652F\u6301\u7F13\u5B58\uFF0C\u53EA\u6709\u4F9D\u8D56\u6570\u636E\u53D1\u751F\u6539\u53D8\uFF0C\u624D\u4F1A\u91CD\u65B0\u8FDB\u884C\u8BA1\u7B97</li><li>\u4E0D\u652F\u6301\u5F02\u6B65\uFF0C\u5F53computed\u5185\u6709\u5F02\u6B65\u64CD\u4F5C\u65F6\u65E0\u6548\uFF0C\u65E0\u6CD5\u76D1\u542C\u6570\u636E\u7684\u53D8\u5316</li><li><code>computed</code> \u5C5E\u6027\u503C\u4F1A\u9ED8\u8BA4\u8D70\u7F13\u5B58\uFF0C\u8BA1\u7B97\u5C5E\u6027\u662F\u57FA\u4E8E\u5B83\u4EEC\u7684\u54CD\u5E94\u5F0F\u4F9D\u8D56\u8FDB\u884C\u7F13\u5B58\u7684\uFF0C\u4E5F\u5C31\u662F\u57FA\u4E8E<code>data</code>\u4E2D\u58F0\u660E\u8FC7\u6216\u8005\u7236\u7EC4\u4EF6\u4F20\u9012\u7684<code>props</code>\u4E2D\u7684\u6570\u636E\u901A\u8FC7\u8BA1\u7B97\u5F97\u5230\u7684\u503C</li><li>\u5982\u679C\u4E00\u4E2A\u5C5E\u6027\u662F\u7531\u5176\u4ED6\u5C5E\u6027\u8BA1\u7B97\u800C\u6765\u7684\uFF0C\u8FD9\u4E2A\u5C5E\u6027\u4F9D\u8D56\u5176\u4ED6\u5C5E\u6027\uFF0C\u662F\u4E00\u4E2A\u591A\u5BF9\u4E00\u6216\u8005\u4E00\u5BF9\u4E00\uFF0C\u4E00\u822C\u7528<code>computed</code></li></ul><p><code>computed</code>\u5982\u4E0B\u4F7F\u7528</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>{{ ticketList }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>{{ increase }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">score</span><span class="token operator">:</span> <span class="token number">1</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">increase</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> score <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
      <span class="token comment">//\u53EF\u76F4\u62FF\u5230data\u4F9D\u8D56 , \u628A\u8BA1\u7B97\u7ED3\u679C\u53CD\u5E94\u5230\u6A21\u677F\u91CC</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">ticketList</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span>getters<span class="token punctuation">[</span><span class="token string">&quot;ticket/ticket&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token comment">// \u5728ticket.js\u7684store\u4E2D\u62FF\u5230getters\u4E4B\u540E\u663E\u793A\u5230\u6A21\u677F\u91CC</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h3 id="\u53EF\u5199\u7684\u8BA1\u7B97\u5C5E\u6027-getter-setter" tabindex="-1"><a class="header-anchor" href="#\u53EF\u5199\u7684\u8BA1\u7B97\u5C5E\u6027-getter-setter" aria-hidden="true">#</a> \u53EF\u5199\u7684\u8BA1\u7B97\u5C5E\u6027 getter setter</h3><p>\u5C0Fdemo , \u4E3B\u8981\u5B9E\u73B0\u4E86\u6839\u636E\u4EF7\u683C\u548C\u8BC4\u8BBA\u6570 ,\u6309\u5347\u5E8F\u6216\u8005\u964D\u5E8F\u6392\u5217\u7684\u5C0F\u6848\u4F8B <img src="`+a+`" alt="\u56FE\u7247"></p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>orderBy = <span class="token punctuation">&#39;</span>price<span class="token punctuation">&#39;</span><span class="token punctuation">&quot;</span></span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{orderBy:orderBy===<span class="token punctuation">&#39;</span>price<span class="token punctuation">&#39;</span>}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u4EF7\u683C<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>orderBy = <span class="token punctuation">&#39;</span>comments<span class="token punctuation">&#39;</span><span class="token punctuation">&quot;</span></span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{orderBy:orderBy===<span class="token punctuation">&#39;</span>comments<span class="token punctuation">&#39;</span>}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u8BC4\u8BBA\u6570<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  ||
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>lessonsList = <span class="token punctuation">&#39;</span>asc<span class="token punctuation">&#39;</span><span class="token punctuation">&quot;</span></span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{orderType:orderType===<span class="token punctuation">&#39;</span>asc<span class="token punctuation">&#39;</span>}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u5347\u5E8F<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>lessonsList = <span class="token punctuation">&#39;</span>desc<span class="token punctuation">&#39;</span><span class="token punctuation">&quot;</span></span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{orderType:orderType===<span class="token punctuation">&#39;</span>desc<span class="token punctuation">&#39;</span>}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u964D\u5E8F<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>lesson in lessonsList<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>lesson.id<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>{{lesson.title}} - \u4EF7\u683C:{{lesson.price}} - \u8BC4\u8BBA\u6570: {{lesson.comments}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">lessons</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span><span class="token string-property property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string-property property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u6807\u9898\u4E00&quot;</span><span class="token punctuation">,</span> <span class="token string-property property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token string-property property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">150</span><span class="token punctuation">,</span> <span class="token string-property property">&quot;comments&quot;</span><span class="token operator">:</span> <span class="token number">42</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span><span class="token string-property property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string-property property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u6807\u9898\u4E8C&quot;</span><span class="token punctuation">,</span> <span class="token string-property property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token string-property property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">77</span><span class="token punctuation">,</span> <span class="token string-property property">&quot;comments&quot;</span><span class="token operator">:</span> <span class="token number">118</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span><span class="token string-property property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token string-property property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u6807\u9898\u4E09&quot;</span><span class="token punctuation">,</span> <span class="token string-property property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token string-property property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">199</span><span class="token punctuation">,</span> <span class="token string-property property">&quot;comments&quot;</span><span class="token operator">:</span> <span class="token number">69</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span><span class="token string-property property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token string-property property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u6807\u9898\u56DB&quot;</span><span class="token punctuation">,</span> <span class="token string-property property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token string-property property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token string-property property">&quot;comments&quot;</span><span class="token operator">:</span> <span class="token number">328</span><span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">orderBy</span><span class="token operator">:</span> <span class="token string">&#39;price&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">orderType</span><span class="token operator">:</span> <span class="token string">&#39;asc&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">lessonsList</span><span class="token operator">:</span> <span class="token punctuation">{</span>  <span class="token comment">//\u5BF9\u8C61\u7684\u5F62\u5F0F</span>
      <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  <span class="token comment">//getter</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>lessons<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>orderType <span class="token operator">===</span> <span class="token string">&#39;asc&#39;</span> <span class="token operator">?</span> <span class="token punctuation">(</span>a<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>orderBy<span class="token punctuation">]</span> <span class="token operator">-</span> b<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>orderBy<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token punctuation">(</span>b<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>orderBy<span class="token punctuation">]</span> <span class="token operator">-</span> a<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>orderBy<span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function">set</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>  <span class="token comment">//setter</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>orderType <span class="token operator">=</span> newValue
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>css<span class="token punctuation">&quot;</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">button.orderType</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> white
<span class="token punctuation">}</span>

<span class="token selector">button.orderBy</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> white
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br></div></div><h2 id="_2-watch-\u4FA6\u542C\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#_2-watch-\u4FA6\u542C\u5C5E\u6027" aria-hidden="true">#</a> 2. watch \u4FA6\u542C\u5C5E\u6027</h2><ul><li>\u4E0D\u652F\u6301\u7F13\u5B58\uFF0C\u6570\u636E\u53D8\uFF0C\u76F4\u63A5\u4F1A\u89E6\u53D1\u76F8\u5E94\u7684\u64CD\u4F5C\uFF1B</li><li><code>watch</code>\u652F\u6301\u5F02\u6B65\uFF1B\u5F53\u9700\u8981\u5728\u6570\u636E\u53D8\u5316\u65F6\u6267\u884C\u5F02\u6B65\u6216\u5F00\u9500\u8F83\u5927\u7684\u64CD\u4F5C\u65F6\uFF0C\u8FD9\u4E2A\u65B9\u5F0F\u662F\u6700\u6709\u7528\u7684\u3002</li><li>\u76D1\u542C\u7684\u51FD\u6570\u63A5\u6536\u4E24\u4E2A\u53C2\u6570\uFF0C\u7B2C\u4E00\u4E2A\u53C2\u6570\u662F\u6700\u65B0\u7684\u503C\uFF1B\u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F\u8F93\u5165\u4E4B\u524D\u7684\u503C\uFF1B</li><li>\u5F53\u4E00\u4E2A\u5C5E\u6027\u53D1\u751F\u53D8\u5316\u65F6\uFF0C\u9700\u8981\u6267\u884C\u5BF9\u5E94\u7684\u64CD\u4F5C\uFF1B\u4E00\u5BF9\u591A\uFF1B</li><li>\u76D1\u542C\u6570\u636E\u5FC5\u987B\u662Fdata\u4E2D\u58F0\u660E\u8FC7\u6216\u8005\u7236\u7EC4\u4EF6\u4F20\u9012\u8FC7\u6765\u7684<code>props</code>\u4E2D\u7684\u6570\u636E\uFF0C\u5F53\u6570\u636E\u53D8\u5316\u65F6\uFF0C\u89E6\u53D1\u5176\u4ED6\u64CD\u4F5C\uFF0C\u51FD\u6570\u6709\u4E24\u4E2A\u53C2\u6570\uFF0C <code>immediate</code>\uFF1A\u7EC4\u4EF6\u52A0\u8F7D\u7ACB\u5373\u89E6\u53D1\u56DE\u8C03\u51FD\u6570\u6267\u884C\uFF0C <code>deep</code>: \u6DF1\u5EA6\u76D1\u542C\uFF0C\u4E3A\u4E86\u53D1\u73B0\u5BF9\u8C61\u5185\u90E8\u503C\u7684\u53D8\u5316\uFF0C\u590D\u6742\u7C7B\u578B\u7684\u6570\u636E\u65F6\u4F7F\u7528\uFF0C\u4F8B\u5982\u6570\u7EC4\u4E2D\u7684\u5BF9\u8C61\u5185\u5BB9\u7684\u6539\u53D8\uFF0C\u4F46\u662F\u76D1\u542C\u6570\u7EC4\u7684\u53D8\u52A8\u4E0D\u9700\u8981\u8FD9\u4E48\u505A\u3002</li></ul><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">$route</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">handler</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">changeData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">immediate</span><span class="token operator">:</span> <span class="token boolean">true</span>
      <span class="token comment">//\u52A0\u8F7D\u4E4B\u540E\u7ACB\u5373\u88AB\u8C03\u7528</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u6216\u8005\u76D1\u542Cdata\u91CC\u9762\u5C5E\u6027 ,\u5F53\u76D1\u542C\u7684\u503C\u53D8\u5316\u662F\u505A\u76F8\u5E94\u7684\u64CD\u4F5C</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">user</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token keyword">undefined</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&#39;user.password&#39;</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">newValue<span class="token punctuation">,</span> oldValue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>newValue<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> <span class="token number">6</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>msg <span class="token operator">=</span> <span class="token string">&#39;\u5BC6\u7801\u592A\u77ED&#39;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>newValue<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">15</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>msg <span class="token operator">=</span> <span class="token string">&#39;\u5BC6\u7801\u592A\u957F&#39;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>msg <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div>`,14);function e(o,c){return t}var u=n(p,[["render",e],["__file","computedWatch.html.vue"]]);export{u as default};
