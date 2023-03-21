import{_ as n,d as s}from"./app.fcb85f29.js";import{_ as a}from"./pathqita.129f1ccf.js";const p={},t=s(`<h1 id="path-\u8DEF\u5F84\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#path-\u8DEF\u5F84\u6A21\u5757" aria-hidden="true">#</a> path \u8DEF\u5F84\u6A21\u5757</h1><p>\u7528\u6765<strong>\u5904\u7406\u8DEF\u5F84</strong>\u7684\u6A21\u5757</p><p>\u4F8B\u5982:</p><ul><li>path.join() \u65B9\u6CD5 , \u7528\u6765<strong>\u5C06\u591A\u4E2A\u7247\u6BB5\u62FC\u63A5\u6210\u4E00\u4E2A\u5B8C\u6574\u7684\u8DEF\u5F84\u5B57\u7B26\u4E32</strong></li><li>path.basename() \u65B9\u6CD5, \u7528\u6765\u4ECE\u8DEF\u5F84\u5B57\u7B26\u4E32 , \u5C06\u6587\u4EF6\u540D\u89E3\u6790\u51FA\u6765</li></ul><p>\u9700\u8981\u5BFC\u5165</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;path&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> basePath <span class="token operator">=</span> <span class="token string">&quot;./User/why&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> filename <span class="token operator">=</span> <span class="token string">&quot;abc.txt&quot;</span><span class="token punctuation">;</span>


<span class="token comment">// join \u8DEF\u5F84\u62FC\u63A5</span>
<span class="token comment">// \u76F4\u63A5\u62FC\u63A5</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>basePath<span class="token punctuation">,</span> filename<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//  \\User\\why\\abc.txt</span>
<span class="token comment">// resolve \u8DEF\u5F84\u62FC\u63A5</span>
<span class="token comment">// resolve \u4F1A\u62FC\u63A5\u7684\u662F /\u6216 ./ \u6216 ../ \u5F00\u5934\u7684\u8DEF\u5F84, \u67E5\u627E\u62FC\u63A5(\u6BD4\u8F83\u667A\u80FD)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>basePath<span class="token punctuation">,</span> filename<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//  C:\\Users\\86188\\Desktop\\node-demo\\User\\why\\abc.txt</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u83B7\u53D6\u8DEF\u5F84\u4FE1\u606F</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;path&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> filePath <span class="token operator">=</span> <span class="token string">&#39;/User/why/abc.txt&#39;</span>

<span class="token comment">// \u76EE\u5F55\u540D</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">dirname</span><span class="token punctuation">(</span>filePath<span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment">// /User/why</span>
<span class="token comment">// \u6587\u4EF6\u540D</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">basename</span><span class="token punctuation">(</span>filePath<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// abc.txt</span>
<span class="token comment">// \u6587\u4EF6\u540D\u540E\u7F00</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">extname</span><span class="token punctuation">(</span>filePath<span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment">// .txt</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="webpack-\u4E2D\u7684\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#webpack-\u4E2D\u7684\u4F7F\u7528" aria-hidden="true">#</a> webpack \u4E2D\u7684\u4F7F\u7528</h2><p><img src="`+a+'" alt="\u56FE\u7247"></p>',11);function e(o,c){return t}var i=n(p,[["render",e],["__file","path.html.vue"]]);export{i as default};
