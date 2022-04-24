<template><h1 id="类" tabindex="-1"><a class="header-anchor" href="#类" aria-hidden="true">#</a> 类</h1>
<p>类的底层实现机制依然是<strong>原型</strong>。</p>
<p>class 只是语法糖为了让类的声明与继承更加简洁清晰。</p>
<h2 id="基础知识" tabindex="-1"><a class="header-anchor" href="#基础知识" aria-hidden="true">#</a> 基础知识</h2>
<h3 id="原理分析" tabindex="-1"><a class="header-anchor" href="#原理分析" aria-hidden="true">#</a> 原理分析</h3>
<p>类其实是<strong>函数</strong> ,  类的内部工作原理是<strong>原型</strong>操作</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> User<span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// function</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><code>constructor</code> 用于定义函数代码，与普通函数的对比，结构是一致的
<img src="@source/.vuepress/public/images/class1.png" alt="图片"></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
    <span class="token punctuation">}</span>
    <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 与下面使用函数的定义是一致的</span>
<span class="token keyword">function</span> <span class="token function">Fn</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
<span class="token punctuation">}</span>
<span class="token class-name">Fn</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">show</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">dir</span><span class="token punctuation">(</span>User<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">dir</span><span class="token punctuation">(</span>Fn<span class="token punctuation">)</span>
</code></pre><div class="highlight-lines"><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>在类中定义的方法也保存在函数原型 <code>prototype</code> 中
<img src="@source/.vuepress/public/images/class2.png" alt="图片"></p>
<h3 id="属性定义" tabindex="-1"><a class="header-anchor" href="#属性定义" aria-hidden="true">#</a> 属性定义</h3>
<p>在 <code>class</code> 中定义的属性为每个 <code>new</code> 出的对象独立创建，下面定义了 <code>site</code> 与 <code>name</code> 两个对象属性</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    site <span class="token operator">=</span> <span class="token string">'xxxxxx'</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
    <span class="token punctuation">}</span>
    <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">dir</span><span class="token punctuation">(</span>User<span class="token punctuation">)</span>

<span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token string">'frank'</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">dir</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p><img src="@source/.vuepress/public/images/class3.png" alt="图片"></p>
<h3 id="严格模式" tabindex="-1"><a class="header-anchor" href="#严格模式" aria-hidden="true">#</a> 严格模式</h3>
<p><code>class</code> 默认使用 <code>strict</code> 严格模式执行</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span>  user <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
user<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">//会打出 undefined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="静态访问" tabindex="-1"><a class="header-anchor" href="#静态访问" aria-hidden="true">#</a> 静态访问</h2>
<h3 id="静态属性" tabindex="-1"><a class="header-anchor" href="#静态属性" aria-hidden="true">#</a> 静态属性</h3>
<p>静态属性是<strong>为类设置的属性</strong> , 而<strong>不是</strong>为生成的对象设置的属性 , 下面是原理实现</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
User<span class="token punctuation">.</span>site <span class="token operator">=</span> <span class="token string">'hello'</span>

<span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span>site<span class="token punctuation">)</span>  <span class="token comment">// undefined</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>User<span class="token punctuation">.</span>site<span class="token punctuation">)</span>  <span class="token comment">// 'hello'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>在 <code>class</code> 中为属性添加 <code>static</code> 关键字即声明为静态属性, static 中文翻译为(静止的,不变的)</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Request</span> <span class="token punctuation">{</span>
    <span class="token keyword">static</span> <span class="token constant">HOST</span> <span class="token operator">=</span> <span class="token string">"https://www.houdunren.com"</span><span class="token punctuation">;</span>

    <span class="token function">query</span><span class="token punctuation">(</span><span class="token parameter">api</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> Request<span class="token punctuation">.</span><span class="token constant">HOST</span> <span class="token operator">+</span> <span class="token string">"/"</span> <span class="token operator">+</span> api<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> request <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Request</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span><span class="token constant">HOST</span><span class="token punctuation">)</span>  <span class="token comment">//undefined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="静态方法" tabindex="-1"><a class="header-anchor" href="#静态方法" aria-hidden="true">#</a> 静态方法</h3>
<p>在 <code>class</code> 内声明的方法前使用 <code>static</code> 定义的方法即是静态方法</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name <span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age
  <span class="token punctuation">}</span>
  <span class="token keyword">static</span> <span class="token function">create</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>argus</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token operator">...</span>argus<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> user <span class="token operator">=</span> User<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token string">"frank"</span> <span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//用 类 调</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div></template>
