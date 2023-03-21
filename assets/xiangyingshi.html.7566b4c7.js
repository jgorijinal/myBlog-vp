import{_ as n,d as s}from"./app.fcb85f29.js";const a={},p=s(`<h1 id="\u54CD\u5E94\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u54CD\u5E94\u5F0F" aria-hidden="true">#</a> \u54CD\u5E94\u5F0F</h1><h2 id="\u521D\u59CB" tabindex="-1"><a class="header-anchor" href="#\u521D\u59CB" aria-hidden="true">#</a> \u521D\u59CB</h2><h3 id="\u54CD\u5E94\u5F0F\u51FD\u6570\u7684\u5B9E\u73B0-watchfn" tabindex="-1"><a class="header-anchor" href="#\u54CD\u5E94\u5F0F\u51FD\u6570\u7684\u5B9E\u73B0-watchfn" aria-hidden="true">#</a> \u54CD\u5E94\u5F0F\u51FD\u6570\u7684\u5B9E\u73B0 watchFn</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;frank&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">18</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> reactiveFns <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token keyword">function</span> <span class="token function">watchFn</span><span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  reactiveFns<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span>
  <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">watchFn</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;foo:&#39;</span> <span class="token operator">+</span> obj<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token function">watchFn</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;bar:&#39;</span> <span class="token operator">+</span> obj<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;obj \u7684 name \u53D1\u751F\u4E86\u53D8\u5316-----&#39;</span><span class="token punctuation">)</span>
obj<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;why&#39;</span>
<span class="token comment">// \u628A\u6536\u96C6\u7684\u54CD\u5E94\u5F0F\u4F9D\u8D56\u6328\u4E2A\u6267\u884C\u4E00\u904D</span>
reactiveFns<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">fn</span> <span class="token operator">=&gt;</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h2 id="\u54CD\u5E94\u5F0F\u4F9D\u8D56\u7684\u6536\u96C6" tabindex="-1"><a class="header-anchor" href="#\u54CD\u5E94\u5F0F\u4F9D\u8D56\u7684\u6536\u96C6" aria-hidden="true">#</a> \u54CD\u5E94\u5F0F\u4F9D\u8D56\u7684\u6536\u96C6</h2><p>\u76EE\u524D\u6211\u4EEC\u6536\u96C6\u7684\u4F9D\u8D56\u662F\u653E\u5230\u4E00\u4E2A\u6570\u7EC4\u4E2D\u6765\u4FDD\u5B58\u7684\uFF0C\u4F46\u662F\u8FD9\u91CC\u4F1A\u5B58\u5728\u6570\u636E\u7BA1\u7406\u7684\u95EE\u9898\uFF1A</p><ul><li>\u6211\u4EEC\u5728\u5B9E\u9645\u5F00\u53D1\u4E2D\u9700\u8981\u76D1\u542C\u5F88\u591A\u5BF9\u8C61\u7684\u54CD\u5E94\u5F0F\uFF1B</li><li>\u8FD9\u4E9B\u5BF9\u8C61\u9700\u8981\u76D1\u542C\u7684\u4E0D\u53EA\u662F\u4E00\u4E2A\u5C5E\u6027\uFF0C\u5B83\u4EEC\u5F88\u591A\u5C5E\u6027\u7684\u53D8\u5316\uFF0C\u90FD\u4F1A\u6709\u5BF9\u5E94\u7684\u54CD\u5E94\u5F0F\u51FD\u6570\uFF1B</li><li>\u6211\u4EEC\u4E0D\u53EF\u80FD\u5728\u5168\u5C40\u7EF4\u62A4\u4E00\u5927\u5806\u7684\u6570\u7EC4\u6765\u4FDD\u5B58\u8FD9\u4E9B\u54CD\u5E94\u51FD\u6570\uFF1B</li></ul><p>\u6240\u4EE5\u6211\u4EEC\u8981\u8BBE\u8BA1\u4E00\u4E2A\u7C7B\uFF0C\u8FD9\u4E2A\u7C7B\u7528\u4E8E\u7BA1\u7406\u67D0\u4E00\u4E2A\u5BF9\u8C61\u7684\u67D0\u4E00\u4E2A\u5C5E\u6027\u7684\u6240\u6709\u54CD\u5E94\u5F0F\u51FD\u6570\uFF1A</p><ul><li>\u76F8\u5F53\u4E8E\u66FF\u4EE3\u4E86\u539F\u6765\u7684\u7B80\u5355 <code>reactiveFns</code> \u7684\u6570\u7EC4</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u5C01\u88C5 \u4E00\u4E2A \u7C7B</span>
<span class="token keyword">class</span> <span class="token class-name">Depend</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>reactiveFns <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
  <span class="token function">addDepend</span><span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>reactiveFns<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token function">notify</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>reactiveFns<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">fn</span> <span class="token operator">=&gt;</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;frank&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">18</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u8BBE\u7F6E\u4E00\u4E2A\u4E13\u95E8\u6267\u884C\u54CD\u5E94\u5F0F\u51FD\u6570\u7684\u4E00\u4E2A\u51FD\u6570</span>
<span class="token comment">// const reactiveFns = []</span>
<span class="token comment">// function watchFn(fn) {</span>
<span class="token comment">//   reactiveFns.push(fn)</span>
<span class="token comment">//   fn()</span>
<span class="token comment">// }</span>
<span class="token keyword">const</span> dep <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Depend</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
<span class="token keyword">function</span> <span class="token function">watchFn</span><span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
  dep<span class="token punctuation">.</span><span class="token function">addDepend</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span>    <span class="token comment">// &lt;-</span>
  <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">watchFn</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;foo:&quot;</span> <span class="token operator">+</span> obj<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token function">watchFn</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;bar:&#39;</span> <span class="token operator">+</span> obj<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// reactiveFns.forEach(fn =&gt; fn())</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;obj \u7684 name \u53D1\u751F\u4E86\u53D8\u5316-----&#39;</span><span class="token punctuation">)</span>
obj<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;why&#39;</span>
dep<span class="token punctuation">.</span><span class="token function">notify</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// &lt;-  \u4E00\u65E6\u6539\u4E86\u5C5E\u6027, \u5C31\u8C03 notify </span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div><p>\u6709\u4E2A\u660E\u663E\u7F3A\u70B9, \u5F53\u67D0\u4E00\u4E2A\u5C5E\u6027\u53D1\u751F\u53D8\u5316\u7684\u65F6\u5019, \u6BCF\u6B21\u9700\u8981\u81EA\u5DF1\u8C03\u7528 <code>dep.notify()</code></p><p>\u6240\u4EE5\u8981\u5B9E\u73B0<strong>\u81EA\u52A8\u76D1\u542C</strong>\u67D0\u4E00\u4E2A\u5C5E\u6027\u7684\u53D8\u5316</p><ul><li>\u65B9\u68481: <code>Object.defineProperty()</code></li><li>\u65B9\u68482: <code>new Proxy()</code></li></ul><h3 id="\u76D1\u542C\u5BF9\u8C61\u5C5E\u6027\u7684\u53D8\u5316" tabindex="-1"><a class="header-anchor" href="#\u76D1\u542C\u5BF9\u8C61\u5C5E\u6027\u7684\u53D8\u5316" aria-hidden="true">#</a> \u76D1\u542C\u5BF9\u8C61\u5C5E\u6027\u7684\u53D8\u5316</h3><ul><li>\u65B9\u5F0F\u4E00\uFF1A\u901A\u8FC7 <code>Object.defineProperty</code>\u7684\u65B9\u5F0F\uFF08vue2\u91C7\u7528\u7684\u65B9\u5F0F\uFF09</li><li>\u65B9\u5F0F\u4E8C\uFF1A\u901A\u8FC7 <code>new Proxy</code> \u7684\u65B9\u5F0F\uFF08vue3\u91C7\u7528\u7684\u65B9\u5F0F\uFF09</li></ul><p>\u4F7F\u7528 <code>Object.defineProperty()</code> \u65B9\u5F0F\u6765\u76D1\u542C</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u5C01\u88C5 \u4E00\u4E2A \u7C7B</span>
<span class="token keyword">class</span> <span class="token class-name">Depend</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>reactiveFns <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
  <span class="token function">addDepend</span><span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>reactiveFns<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token function">notify</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>reactiveFns<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">fn</span> <span class="token operator">=&gt;</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;frank&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">18</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> dep <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Depend</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">function</span> <span class="token function">watchFn</span><span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
  dep<span class="token punctuation">.</span><span class="token function">addDepend</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span>    <span class="token comment">// &lt;-</span>
  <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u5BF9 obj \u8FDB\u884C\u904D\u5386, \u4F7F\u7528 Object.defineProperty() \u5BF9 obj \u6BCF\u4E2A key \u8FDB\u884C\u52AB\u6301(set)</span>
Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">key</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> value <span class="token operator">=</span> obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span>

  Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> key<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">set</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">newValue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      value <span class="token operator">=</span> newValue
      dep<span class="token punctuation">.</span><span class="token function">notify</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u5C5E\u6027\u53D1\u751F\u53D8\u5316\u7684\u65F6\u5019, \u4E4B\u524D\u624B\u673A\u7684\u4F9D\u8D56\u5168\u90E8\u6267\u884C\u4E00\u6B21</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> value
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token function">watchFn</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;foo:&quot;</span> <span class="token operator">+</span> obj<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span> 

<span class="token function">watchFn</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;bar:&#39;</span> <span class="token operator">+</span> obj<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

obj<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;why&#39;</span>
<span class="token comment">// dep.notify()  \u8FD9\u91CC\u6CA1\u5FC5\u8981\u624B\u52A8\u8C03\u7528</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br></div></div><h3 id="\u81EA\u52A8\u6536\u96C6\u4F9D\u8D56" tabindex="-1"><a class="header-anchor" href="#\u81EA\u52A8\u6536\u96C6\u4F9D\u8D56" aria-hidden="true">#</a> \u81EA\u52A8\u6536\u96C6\u4F9D\u8D56</h3>`,18);function t(e,o){return p}var l=n(a,[["render",t],["__file","xiangyingshi.html.vue"]]);export{l as default};
