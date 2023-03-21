import{_ as n,d as s}from"./app.fcb85f29.js";var a="/myBlog-vp/assets/module.8e1dce47.png",p="/myBlog-vp/assets/import1.6ff980b4.png";const e={},t=s(`<h1 id="\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#\u6A21\u5757" aria-hidden="true">#</a> \u6A21\u5757</h1><h2 id="\u5BFC\u5165\u5BFC\u51FA" tabindex="-1"><a class="header-anchor" href="#\u5BFC\u5165\u5BFC\u51FA" aria-hidden="true">#</a> \u5BFC\u5165\u5BFC\u51FA</h2><p>ES6\u4F7F\u7528\u57FA\u4E8E\u6587\u4EF6\u7684\u6A21\u5757\uFF0C\u5373\u4E00\u4E2A\u6587\u4EF6\u4E00\u4E2A\u6A21\u5757\u3002</p><ul><li>\u4F7F\u7528 <code>export</code> \u5C06\u5F00\u53D1\u7684\u63A5\u53E3\u5BFC\u51FA</li><li>\u4F7F\u7528 <code>import</code> \u5BFC\u5165\u6A21\u5757\u63A5\u53E3</li><li>\u4F7F\u7528 <code>*</code> \u53EF\u4EE5\u5BFC\u5165\u5168\u90E8\u6A21\u5757\u63A5\u53E3</li></ul><p>\u5BFC\u51FA\u662F\u4EE5\u5F15\u7528\u65B9\u5F0F\u5BFC\u51FA\uFF0C\u65E0\u8BBA\u662F\u6807\u91CF\u8FD8\u662F\u5BF9\u8C61\uFF0C\u5373\u6A21\u5757\u5185\u90E8\u53D8\u91CF\u53D1\u751F\u53D8\u5316\u5C06\u5F71\u54CD\u5DF2\u7ECF\u5BFC\u5165\u7684\u53D8\u91CF</p><h3 id="\u5BFC\u51FA\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#\u5BFC\u51FA\u6A21\u5757" aria-hidden="true">#</a> \u5BFC\u51FA\u6A21\u5757</h3><p>\u4E0B\u9762\u5B9A\u4E49\u6A21\u5757 <code>modules/module.js</code> \uFF0C\u4F7F\u7528 <code>export</code> \u5BFC\u51FA\u6A21\u5757\u63A5\u53E3\uFF0C\u6CA1\u6709\u5BFC\u51FA\u7684\u53D8\u91CF\u90FD\u662F\u6A21\u5757\u79C1\u6709\u7684</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">&quot;frank&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">fn</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token string">&quot;is a module function&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
  <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;user.show&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u4E5F\u53EF\u4EE5\u8FD9\u4E48\u5BFC\u51FA</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">&quot;frank&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">fn</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&quot;is a module function&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;user.show&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span>name<span class="token punctuation">,</span> fn <span class="token punctuation">,</span> User<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="\u5177\u540D\u5BFC\u5165" tabindex="-1"><a class="header-anchor" href="#\u5177\u540D\u5BFC\u5165" aria-hidden="true">#</a> \u5177\u540D\u5BFC\u5165</h3><p>\u5BFC\u5165\u4E0A\u9762\u5B9A\u4E49\u7684<code>module.js</code> , \u5206\u522B\u5BFC\u5165\u5185\u5BB9</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>name <span class="token punctuation">,</span> fn <span class="token punctuation">,</span> User<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./module.js&#39;</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u50CF\u4E0B\u9762\u8FD9\u6837\u5728 <code>{}</code> \u4E2D\u5BFC\u5165\u662F\u9519\u8BEF\u7684\uFF0C\u6A21\u5757\u9ED8\u8BA4\u662F\u5728\u9876\u5C42\u9759\u6001\u5BFC\u5165\uFF0C\u8FD9\u662F\u4E3A\u4E86\u5206\u6790\u4F7F\u7528\u7684\u6A21\u5757\u65B9\u4FBF\u6253\u5305</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> name <span class="token punctuation">,</span>  fn <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./hd.js&quot;</span><span class="token punctuation">;</span>     <span class="token comment">// Error</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="\u6279\u91CF\u5BFC\u5165" tabindex="-1"><a class="header-anchor" href="#\u6279\u91CF\u5BFC\u5165" aria-hidden="true">#</a> \u6279\u91CF\u5BFC\u5165</h3><p>\u5C3D\u91CF\u4E0D\u7528\u8FD9\u79CD\u65B9\u6CD5 , \u5EFA\u8BAE\u7528\u4E0A\u9762\u7684\u5177\u540D\u5BFC\u5165</p><p>\u5982\u679C\u8981\u5BFC\u5165\u7684\u5185\u5BB9\u6BD4\u8F83\u591A\uFF0C\u53EF\u4EE5\u4F7F\u7528 <code>*</code> \u6765\u6279\u91CF\u5BFC\u5165</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> api <span class="token keyword">from</span> <span class="token string">&quot;./module.js&quot;</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>api<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>api<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><img src="`+a+`" alt="\u56FE\u7247"></p><h2 id="\u522B\u540D\u4F7F\u7528-as" tabindex="-1"><a class="header-anchor" href="#\u522B\u540D\u4F7F\u7528-as" aria-hidden="true">#</a> \u522B\u540D\u4F7F\u7528 as</h2><p>\u53EF\u4EE5\u4E3A\u5BFC\u5165\u7684\u6A21\u5757\u91CD\u65B0\u547D\u540D</p><ul><li>\u6709\u4E9B\u5BFC\u51FA\u7684\u6A21\u5757\u547D\u540D\u8FC7\u957F\uFF0C\u8D77\u522B\u540D\u53EF\u4EE5\u7406\u7B80\u6D01</li><li>\u672C\u6A21\u5757\u4E0E\u5BFC\u5165\u6A21\u5757\u91CD\u540D\u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7\u8D77\u522B\u540D\u9632\u6B62\u9519\u8BEF</li></ul><h3 id="\u5BFC\u51FA\u522B\u540D" tabindex="-1"><a class="header-anchor" href="#\u5BFC\u51FA\u522B\u540D" aria-hidden="true">#</a> \u5BFC\u51FA\u522B\u540D</h3><p>\u6A21\u5757\u5BFC\u5165\u4F7F\u7528 <code>as</code> \u5BF9\u63A5\u53E3\u91CD\u547D\u540D</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>  <span class="token keyword">import</span> <span class="token punctuation">{</span> User <span class="token keyword">as</span> user<span class="token punctuation">,</span> fn <span class="token keyword">as</span> action<span class="token punctuation">,</span> site <span class="token keyword">as</span> name <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./module.js&quot;</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> fn <span class="token operator">=</span> <span class="token string">&quot;\u51FD\u6570&quot;</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>action<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="\u5BFC\u51FA\u522B\u540D-1" tabindex="-1"><a class="header-anchor" href="#\u5BFC\u51FA\u522B\u540D-1" aria-hidden="true">#</a> \u5BFC\u51FA\u522B\u540D</h3><p>\u540C\u6837\u53EF\u4EE5\u4F7F\u7528 <code>as</code> \u522B\u540D\u5BFC\u51FA</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">&quot;frank&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">fn</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&quot;is a module function&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;user.show&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span>name <span class="token keyword">as</span> xxx<span class="token punctuation">,</span> fn <span class="token keyword">as</span> yyy <span class="token punctuation">,</span> User <span class="token keyword">as</span> zzz<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="\u9ED8\u8BA4\u5BFC\u51FA" tabindex="-1"><a class="header-anchor" href="#\u9ED8\u8BA4\u5BFC\u51FA" aria-hidden="true">#</a> \u9ED8\u8BA4\u5BFC\u51FA</h2><p>\u5F88\u591A\u65F6\u5019\u6A21\u5757\u77E5\u8BC6\u4E00\u4E2A\u7C7B , \u4E5F\u5C31\u662F\u8981\u5BFC\u51FA\u7684\u5185\u5BB9\u53EA\u6709\u4E00\u4E2A\u7684\u65F6\u5019 , \u53EF\u4EE5\u4F7F\u7528\u9ED8\u8BA4\u5BFC\u51FA</p><p>\u4F7F\u7528 <code>default</code> \u5B9A\u4E49\u9ED8\u8BA4\u5BFC\u51FA\u7684\u63A5\u53E3 , \u4E0D\u9700\u8981\u7528 <code>{}</code></p><ul><li>\u53EF\u4EE5\u4E3A\u9ED8\u8BA4\u5BFC\u51FA\u81EA\u5B9A\u4E49\u522B\u540D</li><li>\u53EA\u80FD\u6709\u4E00\u4E2A\u9ED8\u8BA4\u5BFC\u51FA</li><li>\u9ED8\u8BA4\u5BFC\u51FA\u53EF\u4EE5\u6CA1\u6709\u547D\u540D</li></ul><h3 id="\u5355\u4E00\u5BFC\u51FA" tabindex="-1"><a class="header-anchor" href="#\u5355\u4E00\u5BFC\u51FA" aria-hidden="true">#</a> \u5355\u4E00\u5BFC\u51FA</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token punctuation">{</span>
  <span class="token keyword">static</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;User.method&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u4E5F\u53EF\u4EE5</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">class</span>  <span class="token class-name">User</span> <span class="token punctuation">{</span>
  <span class="token keyword">static</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;User.method&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span>  <span class="token punctuation">{</span>User <span class="token keyword">as</span> <span class="token keyword">default</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u5BFC\u5165\u65F6 , \u89E3\u9898\u4F7F\u7528\u4EFB\u4F55\u540D\u5B57\u5B9A\u4E49 , \u800C\u4E14\u4E0D\u9700\u8981 <code>{}</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> User <span class="token keyword">from</span> <span class="token string">&#39;./module.js&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="\u6DF7\u5408\u5BFC\u51FA" tabindex="-1"><a class="header-anchor" href="#\u6DF7\u5408\u5BFC\u51FA" aria-hidden="true">#</a> \u6DF7\u5408\u5BFC\u51FA</h3><p>\u6A21\u5757\u53EF\u4EE5\u5B58\u5728\u9ED8\u8BA4\u5BFC\u51FA\u4E0E\u547D\u540D\u5BFC\u51FA</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">&#39;frank&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    <span class="token keyword">static</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;User.render&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u4E5F\u53EF\u4EE5</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">&#39;frank&#39;</span>
<span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    <span class="token keyword">static</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;User.render&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span>User <span class="token keyword">as</span> <span class="token keyword">default</span> <span class="token punctuation">,</span> name<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u5BFC\u5165\u65F6 , \u53EF\u4EE5\u4F7F\u7528\u4E00\u6761\u8BED\u53E5\u5BFC\u5165\u9ED8\u8BA4\u63A5\u53E3\u4E0E\u5E38\u89C4\u63A5\u53E3</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> User <span class="token punctuation">,</span> <span class="token punctuation">{</span> name <span class="token punctuation">}</span> <span class="token keyword">from</span> &#39;<span class="token punctuation">.</span><span class="token operator">/</span>module<span class="token punctuation">.</span>js
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u5982\u679C\u662F\u6279\u91CF\u5BFC\u5165\u65F6\uFF0C\u8BB0\u5F97\u4F7F\u7528 <code>default</code> \u83B7\u5F97\u9ED8\u8BA4\u5BFC\u51FA</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> api <span class="token keyword">from</span> <span class="token string">&#39;./module.js&#39;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>api<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
api<span class="token punctuation">.</span>default<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="\u4F7F\u7528\u5EFA\u8BAE" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u5EFA\u8BAE" aria-hidden="true">#</a> \u4F7F\u7528\u5EFA\u8BAE</h3><ul><li>\u4E0D\u5EFA\u8BAE\u4F7F\u7528\u9ED8\u8BA4\u5BFC\u51FA\uFF0C\u4F1A\u8BA9\u5F00\u53D1\u8005\u5BFC\u5165\u65F6\u968F\u610F\u547D\u540D</li><li>\u5982\u679C\u4F7F\u7528\u9ED8\u8BA4\u5BFC\u5165\u6700\u597D\u4EE5\u6A21\u5757\u7684\u6587\u4EF6\u540D\u6709\u5173\u8054\uFF0C\u4F1A\u4F7F\u7528\u4EE3\u7801\u66F4\u6613\u9605\u8BFB</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> user <span class="token keyword">from</span> <span class="token string">&quot;./user.js&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="\u5408\u5E76\u5BFC\u51FA" tabindex="-1"><a class="header-anchor" href="#\u5408\u5E76\u5BFC\u51FA" aria-hidden="true">#</a> \u5408\u5E76\u5BFC\u51FA</h2><p>\u9879\u76EE\u7684\u6A21\u5757\u6BD4\u8F83\u591A\uFF0C\u8FD9\u65F6\u53EF\u4EE5\u5C06\u6240\u6709\u6A21\u5757\u5408\u5E76\u5230<strong>\u4E00\u4E2A\u5165\u53E3\u6587\u4EF6</strong>\u4E2D</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>|--user.js
|--admin.js
...
...
|--index.js
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u6BD4\u5982 admin.js \u6587\u4EF6:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">&#39;frank&#39;</span>
<span class="token keyword">const</span> <span class="token function-variable function">fn</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;a module function&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> name <span class="token punctuation">,</span>fn <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>user.js\u6587\u4EF6:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
  <span class="token keyword">static</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;get user info&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> User  
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>index.js <strong>\u5165\u53E3\u6587\u4EF6</strong>:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span>  <span class="token operator">*</span> <span class="token keyword">as</span> admin <span class="token keyword">from</span> <span class="token string">&#39;./admin.js&#39;</span>
<span class="token keyword">export</span>  <span class="token operator">*</span> <span class="token keyword">as</span> user <span class="token keyword">from</span> <span class="token string">&#39;./user.js&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u6700\u7EC8\u4F7F\u7528\u65F6 ,</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> api <span class="token keyword">from</span> <span class="token string">&#39;./index.js&#39;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>api<span class="token punctuation">.</span>admin<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>api<span class="token punctuation">.</span>user<span class="token punctuation">.</span>default<span class="token punctuation">)</span>  <span class="token comment">// \u8FD9\u65F6\u5019\u8981\u6CE8\u610Fdefault , \u56E0\u4E3Auser.js\u662F\u9ED8\u8BA4\u5BFC\u51FA </span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="\u52A8\u6001\u52A0\u8F7D\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#\u52A8\u6001\u52A0\u8F7D\u6A21\u5757" aria-hidden="true">#</a> \u52A8\u6001\u52A0\u8F7D\u6A21\u5757</h2><p>\u4F7F\u7528 <code>import</code> \u5FC5\u987B\u5728\u9876\u5C42\u9759\u6001\u5BFC\u5165\u6A21\u5757\uFF0C\u800C\u4F7F\u7528 <code>import()</code> \u51FD\u6570\u53EF\u4EE5\u52A8\u6001\u5BFC\u5165\u6A21\u5757\uFF0C\u5B83\u8FD4\u56DE\u4E00\u4E2A <code>promise</code> \u5BF9\u8C61</p><p>module.js</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">&#39;frank&#39;</span>
<span class="token keyword">const</span> <span class="token function-variable function">fn</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> name <span class="token punctuation">,</span> fn <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u4F7F\u7528 <code>import()</code> \u51FD\u6570\u53EF\u4EE5\u52A8\u6001\u5BFC\u5165\uFF0C\u5B9E\u73B0\u6309\u9700\u52A0\u8F7D</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">if</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;./module.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">module</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>   <span class="token comment">// \u8FD9\u91CC\u53EF\u4EE5\u4F7F\u7528\u89E3\u6784  ( {name , fn} )=&gt;{ }</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>module<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><img src="`+p+`" alt="\u56FE\u7247"> \u70B9\u51FB\u4E8B\u4EF6\u53D1\u751F\u540E\u6309\u9700\u8981\u52A0\u8F7D\u6A21\u5757</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> button  <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;button&#39;</span><span class="token punctuation">)</span>
button<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span> <span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token keyword">let</span> hd <span class="token operator">=</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&quot;./module.js&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> name<span class="token punctuation">,</span> fn <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>  <span class="token comment">//\u89E3\u6784</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>`,70);function o(c,l){return t}var i=n(e,[["render",o],["__file","module.html.vue"]]);export{i as default};
