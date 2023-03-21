import{_ as n,d as s}from"./app.fcb85f29.js";var a="/myBlog-vp/assets/class1.43772e61.png",p="/myBlog-vp/assets/class2.9d8b3a8a.png",e="/myBlog-vp/assets/class3.c81c1998.png";const t={},c=s(`<h1 id="\u7C7B" tabindex="-1"><a class="header-anchor" href="#\u7C7B" aria-hidden="true">#</a> \u7C7B</h1><p>\u7C7B\u7684\u5E95\u5C42\u5B9E\u73B0\u673A\u5236\u4F9D\u7136\u662F<strong>\u539F\u578B</strong>\u3002</p><p>class \u53EA\u662F\u8BED\u6CD5\u7CD6\u4E3A\u4E86\u8BA9\u7C7B\u7684\u58F0\u660E\u4E0E\u7EE7\u627F\u66F4\u52A0\u7B80\u6D01\u6E05\u6670\u3002</p><h2 id="\u57FA\u7840\u77E5\u8BC6" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840\u77E5\u8BC6" aria-hidden="true">#</a> \u57FA\u7840\u77E5\u8BC6</h2><h3 id="\u539F\u7406\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#\u539F\u7406\u5206\u6790" aria-hidden="true">#</a> \u539F\u7406\u5206\u6790</h3><p>\u7C7B\u5176\u5B9E\u662F<strong>\u51FD\u6570</strong> , \u7C7B\u7684\u5185\u90E8\u5DE5\u4F5C\u539F\u7406\u662F<strong>\u539F\u578B</strong>\u64CD\u4F5C</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> User<span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// function</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><code>constructor</code> \u7528\u4E8E\u5B9A\u4E49\u51FD\u6570\u4EE3\u7801\uFF0C\u4E0E\u666E\u901A\u51FD\u6570\u7684\u5BF9\u6BD4\uFF0C\u7ED3\u6784\u662F\u4E00\u81F4\u7684 <img src="`+a+`" alt="\u56FE\u7247"></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
    <span class="token punctuation">}</span>
    <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u4E0E\u4E0B\u9762\u4F7F\u7528\u51FD\u6570\u7684\u5B9A\u4E49\u662F\u4E00\u81F4\u7684</span>
<span class="token keyword">function</span> <span class="token function">Fn</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
<span class="token punctuation">}</span>
<span class="token class-name">Fn</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">show</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">dir</span><span class="token punctuation">(</span>User<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">dir</span><span class="token punctuation">(</span>Fn<span class="token punctuation">)</span>
</code></pre><div class="highlight-lines"><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>\u5728\u7C7B\u4E2D\u5B9A\u4E49\u7684\u65B9\u6CD5\u4E5F\u4FDD\u5B58\u5728\u51FD\u6570\u539F\u578B <code>prototype</code> \u4E2D <img src="`+p+`" alt="\u56FE\u7247"></p><h3 id="\u5C5E\u6027\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#\u5C5E\u6027\u5B9A\u4E49" aria-hidden="true">#</a> \u5C5E\u6027\u5B9A\u4E49</h3><p>\u5728 <code>class</code> \u4E2D\u5B9A\u4E49\u7684\u5C5E\u6027\u4E3A\u6BCF\u4E2A <code>new</code> \u51FA\u7684\u5BF9\u8C61\u72EC\u7ACB\u521B\u5EFA\uFF0C\u4E0B\u9762\u5B9A\u4E49\u4E86 <code>site</code> \u4E0E <code>name</code> \u4E24\u4E2A\u5BF9\u8C61\u5C5E\u6027</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    site <span class="token operator">=</span> <span class="token string">&#39;xxxxxx&#39;</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
    <span class="token punctuation">}</span>
    <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">dir</span><span class="token punctuation">(</span>User<span class="token punctuation">)</span>

<span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token string">&#39;frank&#39;</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">dir</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p><img src="`+e+`" alt="\u56FE\u7247"></p><h3 id="\u4E25\u683C\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u4E25\u683C\u6A21\u5F0F" aria-hidden="true">#</a> \u4E25\u683C\u6A21\u5F0F</h3><p><code>class</code> \u9ED8\u8BA4\u4F7F\u7528 <code>strict</code> \u4E25\u683C\u6A21\u5F0F\u6267\u884C</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span>  user <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
user<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">//\u4F1A\u6253\u51FA undefined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="\u9759\u6001\u8BBF\u95EE" tabindex="-1"><a class="header-anchor" href="#\u9759\u6001\u8BBF\u95EE" aria-hidden="true">#</a> \u9759\u6001\u8BBF\u95EE</h2><h3 id="\u9759\u6001\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u9759\u6001\u5C5E\u6027" aria-hidden="true">#</a> \u9759\u6001\u5C5E\u6027</h3><p>\u9759\u6001\u5C5E\u6027\u662F<strong>\u4E3A\u7C7B\u8BBE\u7F6E\u7684\u5C5E\u6027</strong> , \u800C<strong>\u4E0D\u662F</strong>\u4E3A\u751F\u6210\u7684\u5BF9\u8C61\u8BBE\u7F6E\u7684\u5C5E\u6027 , \u4E0B\u9762\u662F\u539F\u7406\u5B9E\u73B0</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
User<span class="token punctuation">.</span>site <span class="token operator">=</span> <span class="token string">&#39;hello&#39;</span>

<span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span>site<span class="token punctuation">)</span>  <span class="token comment">// undefined</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>User<span class="token punctuation">.</span>site<span class="token punctuation">)</span>  <span class="token comment">// &#39;hello&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u5728 <code>class</code> \u4E2D\u4E3A\u5C5E\u6027\u6DFB\u52A0 <code>static</code> \u5173\u952E\u5B57\u5373\u58F0\u660E\u4E3A\u9759\u6001\u5C5E\u6027, static \u4E2D\u6587\u7FFB\u8BD1\u4E3A(\u9759\u6B62\u7684,\u4E0D\u53D8\u7684)</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Request</span> <span class="token punctuation">{</span>
    <span class="token keyword">static</span> <span class="token constant">HOST</span> <span class="token operator">=</span> <span class="token string">&quot;https://www.houdunren.com&quot;</span><span class="token punctuation">;</span>

    <span class="token function">query</span><span class="token punctuation">(</span><span class="token parameter">api</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> Request<span class="token punctuation">.</span><span class="token constant">HOST</span> <span class="token operator">+</span> <span class="token string">&quot;/&quot;</span> <span class="token operator">+</span> api<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> request <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Request</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span><span class="token constant">HOST</span><span class="token punctuation">)</span>  <span class="token comment">//undefined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="\u9759\u6001\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u9759\u6001\u65B9\u6CD5" aria-hidden="true">#</a> \u9759\u6001\u65B9\u6CD5</h3><p>\u5728 <code>class</code> \u5185\u58F0\u660E\u7684\u65B9\u6CD5\u524D\u4F7F\u7528 <code>static</code> \u5B9A\u4E49\u7684\u65B9\u6CD5\u5373\u662F\u9759\u6001\u65B9\u6CD5</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name <span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age
  <span class="token punctuation">}</span>
  <span class="token keyword">static</span> <span class="token function">create</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>argus</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token operator">...</span>argus<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> user <span class="token operator">=</span> User<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token string">&quot;frank&quot;</span> <span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//\u7528 \u7C7B \u8C03</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="\u8BBF\u95EE\u63A7\u5236" tabindex="-1"><a class="header-anchor" href="#\u8BBF\u95EE\u63A7\u5236" aria-hidden="true">#</a> \u8BBF\u95EE\u63A7\u5236</h2><h3 id="public" tabindex="-1"><a class="header-anchor" href="#public" aria-hidden="true">#</a> public</h3><p><code>public</code> \u6307\u4E0D\u53D7\u4FDD\u62A4\u7684\u5C5E\u6027\uFF0C\u5728\u7C7B\u7684\u5185\u90E8\u4E0E\u5916\u90E8\u90FD\u53EF\u4EE5\u8BBF\u95EE\u5230</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    url <span class="token operator">=</span> <span class="token string">&#39;https://www.baidu.com&#39;</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token string">&#39;frank&#39;</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span>url <span class="token punctuation">,</span> user<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="private" tabindex="-1"><a class="header-anchor" href="#private" aria-hidden="true">#</a> private</h3><p><code>private</code> \u6307\u79C1\u6709\u5C5E\u6027\uFF0C\u53EA\u5728\u5F53\u524D\u7C7B\u53EF\u4EE5\u8BBF\u95EE\u5230\uFF0C\u5E76\u4E14\u4E0D\u5141\u8BB8\u7EE7\u627F\u4F7F\u7528</p><ul><li>\u4E3A\u5C5E\u6027\u6216\u65B9\u6CD5\u540D\u524D\u52A0 <code>#</code> \u4E3A\u58F0\u660E\u4E3A\u79C1\u6709\u5C5E\u6027</li><li>\u79C1\u6709\u5C5E\u6027\u53EA\u80FD\u5728\u58F0\u660E\u7684\u7C7B\u4E2D\u4F7F\u7528</li></ul><p>\u4E0B\u9762\u58F0\u660E\u79C1\u6709\u5C5E\u6027 <code>#host</code> \u4E0E\u79C1\u6709\u65B9\u6CD5 <code>check</code> \u7528\u4E8E\u68C0\u6D4B\u7528\u6237\u540D</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    #host <span class="token operator">=</span> <span class="token string">&#39;baidu.com&#39;</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">#check</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">#check</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;\u540D\u5B57\u4E0D\u53EF\u4EE5\u5C0F\u4E8E5\u4F4D&#39;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token string">&#39;xxx&#39;</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span>#host<span class="token punctuation">)</span>  <span class="token comment">// Uncaught SyntaxError: Private field &#39;#host&#39; must be declared in an enclosing class</span>
user<span class="token punctuation">.</span><span class="token function">#check</span><span class="token punctuation">(</span><span class="token punctuation">)</span>    <span class="token comment">//Private field &#39;#check&#39; must be declared in an enclosing class</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div>`,35);function o(l,u){return c}var r=n(t,[["render",o],["__file","class.html.vue"]]);export{r as default};
