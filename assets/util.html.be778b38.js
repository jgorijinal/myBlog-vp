import{_ as n,d as s}from"./app.fcb85f29.js";const a={},p=s(`<h1 id="\u65E5\u671F\u683C\u5F0F\u5316" tabindex="-1"><a class="header-anchor" href="#\u65E5\u671F\u683C\u5F0F\u5316" aria-hidden="true">#</a> \u65E5\u671F\u683C\u5F0F\u5316</h1><p>\u628A\u4E00\u4E2A Date \u5BF9\u8C61\u7684js\u65E5\u671F , \u683C\u5F0F\u5316\u4E3A\u6BD4\u59822020-05-29\u5F62\u5F0F , \u53EF\u4EE5\u53C2\u8003\u4E0B\u9762\u8FD9\u4E2A\u51FD\u6570</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">formatDate</span><span class="token punctuation">(</span>date<span class="token punctuation">,</span> fmt <span class="token operator">=</span> <span class="token string">&#39;yyyy-MM-dd&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token punctuation">(</span>date <span class="token keyword">instanceof</span> <span class="token class-name">Array</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    date <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span>date<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(y+)</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>fmt<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt <span class="token operator">=</span> fmt<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>RegExp<span class="token punctuation">.</span>$1<span class="token punctuation">,</span> <span class="token punctuation">(</span>date<span class="token punctuation">.</span><span class="token function">getFullYear</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">substr</span><span class="token punctuation">(</span><span class="token number">4</span> <span class="token operator">-</span> RegExp<span class="token punctuation">.</span>$1<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> o <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&#39;M+&#39;</span><span class="token operator">:</span> date<span class="token punctuation">.</span><span class="token function">getMonth</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;d+&#39;</span><span class="token operator">:</span> date<span class="token punctuation">.</span><span class="token function">getDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;h+&#39;</span><span class="token operator">:</span> date<span class="token punctuation">.</span><span class="token function">getHours</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;m+&#39;</span><span class="token operator">:</span> date<span class="token punctuation">.</span><span class="token function">getMinutes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;s+&#39;</span><span class="token operator">:</span> date<span class="token punctuation">.</span><span class="token function">getSeconds</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> k <span class="token keyword">in</span> o<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>k<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">)</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>fmt<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> str <span class="token operator">=</span> o<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token string">&#39;&#39;</span>
      fmt <span class="token operator">=</span> fmt<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>RegExp<span class="token punctuation">.</span>$1<span class="token punctuation">,</span> <span class="token punctuation">(</span>RegExp<span class="token punctuation">.</span>$1<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">?</span> str <span class="token operator">:</span> <span class="token function">padLeftZero</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> fmt
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div>`,3);function t(e,o){return p}var u=n(a,[["render",t],["__file","util.html.vue"]]);export{u as default};
