<template><h1 id="模块" tabindex="-1"><a class="header-anchor" href="#模块" aria-hidden="true">#</a> 模块</h1>
<h2 id="导入导出" tabindex="-1"><a class="header-anchor" href="#导入导出" aria-hidden="true">#</a> 导入导出</h2>
<p>ES6使用基于文件的模块，即一个文件一个模块。</p>
<ul>
<li>使用 <code>export</code> 将开发的接口导出</li>
<li>使用 <code>import</code> 导入模块接口</li>
<li>使用 <code>*</code> 可以导入全部模块接口</li>
</ul>
<p>导出是以引用方式导出，无论是标量还是对象，即模块内部变量发生变化将影响已经导入的变量</p>
<h3 id="导出模块" tabindex="-1"><a class="header-anchor" href="#导出模块" aria-hidden="true">#</a> 导出模块</h3>
<p>下面定义模块 <code>modules/module.js</code> ，使用 <code>export</code> 导出模块接口，没有导出的变量都是模块私有的</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">"frank"</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">fn</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token string">"is a module function"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
  <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"user.show"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>也可以这么导出</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">"frank"</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">fn</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">"is a module function"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"user.show"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span>name<span class="token punctuation">,</span> fn <span class="token punctuation">,</span> User<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="具名导入" tabindex="-1"><a class="header-anchor" href="#具名导入" aria-hidden="true">#</a> 具名导入</h3>
<p>导入上面定义的<code>module.js</code> , 分别导入内容</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>name <span class="token punctuation">,</span> fn <span class="token punctuation">,</span> User<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./module.js'</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>像下面这样在 <code>{}</code> 中导入是错误的，模块默认是在顶层静态导入，这是为了分析使用的模块方便打包</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> name <span class="token punctuation">,</span>  fn <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"./hd.js"</span><span class="token punctuation">;</span>     <span class="token comment">// Error</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="批量导入" tabindex="-1"><a class="header-anchor" href="#批量导入" aria-hidden="true">#</a> 批量导入</h3>
<p>尽量不用这种方法 , 建议用上面的具名导入</p>
<p>如果要导入的内容比较多，可以使用 <code>*</code> 来批量导入</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> api <span class="token keyword">from</span> <span class="token string">"./module.js"</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>api<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>api<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><img src="@source/.vuepress/public/images/module.png" alt="图片"></p>
<h2 id="别名使用-as" tabindex="-1"><a class="header-anchor" href="#别名使用-as" aria-hidden="true">#</a> 别名使用 as</h2>
<p>可以为导入的模块重新命名</p>
<ul>
<li>有些导出的模块命名过长，起别名可以理简洁</li>
<li>本模块与导入模块重名时，可以通过起别名防止错误</li>
</ul>
<h3 id="导出别名" tabindex="-1"><a class="header-anchor" href="#导出别名" aria-hidden="true">#</a> 导出别名</h3>
<p>模块导入使用 <code>as</code> 对接口重命名</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token keyword">import</span> <span class="token punctuation">{</span> User <span class="token keyword">as</span> user<span class="token punctuation">,</span> fn <span class="token keyword">as</span> action<span class="token punctuation">,</span> site <span class="token keyword">as</span> name <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"./module.js"</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> fn <span class="token operator">=</span> <span class="token string">"函数"</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>action<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="导出别名-1" tabindex="-1"><a class="header-anchor" href="#导出别名-1" aria-hidden="true">#</a> 导出别名</h3>
<p>同样可以使用 <code>as</code> 别名导出</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">"frank"</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">fn</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">"is a module function"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"user.show"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span>name <span class="token keyword">as</span> xxx<span class="token punctuation">,</span> fn <span class="token keyword">as</span> yyy <span class="token punctuation">,</span> User <span class="token keyword">as</span> zzz<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="默认导出" tabindex="-1"><a class="header-anchor" href="#默认导出" aria-hidden="true">#</a> 默认导出</h2>
<p>很多时候模块知识一个类 , 也就是要导出的内容只有一个的时候 , 可以使用默认导出</p>
<p>使用 <code>default</code> 定义默认导出的接口 , 不需要用 <code>{}</code></p>
<ul>
<li>可以为默认导出自定义别名</li>
<li>只能有一个默认导出</li>
<li>默认导出可以没有命名</li>
</ul>
<h3 id="单一导出" tabindex="-1"><a class="header-anchor" href="#单一导出" aria-hidden="true">#</a> 单一导出</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token punctuation">{</span>
  <span class="token keyword">static</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"User.method"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>也可以</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span>  <span class="token class-name">User</span> <span class="token punctuation">{</span>
  <span class="token keyword">static</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"User.method"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span>  <span class="token punctuation">{</span>User <span class="token keyword">as</span> <span class="token keyword">default</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>导入时 , 解题使用任何名字定义 , 而且不需要 <code>{}</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> User <span class="token keyword">from</span> <span class="token string">'./module.js'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="混合导出" tabindex="-1"><a class="header-anchor" href="#混合导出" aria-hidden="true">#</a> 混合导出</h3>
<p>模块可以存在默认导出与命名导出</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">'frank'</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    <span class="token keyword">static</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"User.render"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>也可以</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">'frank'</span>
<span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    <span class="token keyword">static</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"User.render"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span>User <span class="token keyword">as</span> <span class="token keyword">default</span> <span class="token punctuation">,</span> name<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>导入时 , 可以使用一条语句导入默认接口与常规接口</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> User <span class="token punctuation">,</span> <span class="token punctuation">{</span> name <span class="token punctuation">}</span> <span class="token keyword">from</span> '<span class="token punctuation">.</span><span class="token operator">/</span>module<span class="token punctuation">.</span>js
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>如果是批量导入时，记得使用 <code>default</code> 获得默认导出</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> api <span class="token keyword">from</span> <span class="token string">'./module.js'</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>api<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
api<span class="token punctuation">.</span>default<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="使用建议" tabindex="-1"><a class="header-anchor" href="#使用建议" aria-hidden="true">#</a> 使用建议</h3>
<ul>
<li>不建议使用默认导出，会让开发者导入时随意命名</li>
<li>如果使用默认导入最好以模块的文件名有关联，会使用代码更易阅读</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> user <span class="token keyword">from</span> <span class="token string">"./user.js"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="合并导出" tabindex="-1"><a class="header-anchor" href="#合并导出" aria-hidden="true">#</a> 合并导出</h2>
<p>项目的模块比较多，这时可以将所有模块合并到<strong>一个入口文件</strong>中</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>|--user.js
|--admin.js
...
...
|--index.js
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>比如 admin.js 文件:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">'frank'</span>
<span class="token keyword">const</span> <span class="token function-variable function">fn</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"a module function"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> name <span class="token punctuation">,</span>fn <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>user.js文件:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
  <span class="token keyword">static</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'get user info'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> User  
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>index.js <strong>入口文件</strong>:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span>  <span class="token operator">*</span> <span class="token keyword">as</span> admin <span class="token keyword">from</span> <span class="token string">'./admin.js'</span>
<span class="token keyword">export</span>  <span class="token operator">*</span> <span class="token keyword">as</span> user <span class="token keyword">from</span> <span class="token string">'./user.js'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>最终使用时 ,</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> api <span class="token keyword">from</span> <span class="token string">'./index.js'</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>api<span class="token punctuation">.</span>admin<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>api<span class="token punctuation">.</span>user<span class="token punctuation">.</span>default<span class="token punctuation">)</span>  <span class="token comment">// 这时候要注意default , 因为user.js是默认导出 </span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="动态加载模块" tabindex="-1"><a class="header-anchor" href="#动态加载模块" aria-hidden="true">#</a> 动态加载模块</h2>
<p>使用 <code>import</code> 必须在顶层静态导入模块，而使用 <code>import()</code> 函数可以动态导入模块，它返回一个 <code>promise</code> 对象</p>
<p>module.js</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">'frank'</span>
<span class="token keyword">const</span> <span class="token function-variable function">fn</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'hello'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> name <span class="token punctuation">,</span> fn <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>使用 <code>import()</code> 函数可以动态导入，实现按需加载</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">if</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'./module.js'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">module</span><span class="token operator">=></span><span class="token punctuation">{</span>   <span class="token comment">// 这里可以使用解构  ( {name , fn} )=>{ }</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>module<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><img src="@source/.vuepress/public/images/import1.png" alt="图片">
点击事件发生后按需要加载模块</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> button  <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'button'</span><span class="token punctuation">)</span>
button<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span> <span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    <span class="token keyword">let</span> hd <span class="token operator">=</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">"./module.js"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> name<span class="token punctuation">,</span> fn <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>  <span class="token comment">//解构</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></template>
