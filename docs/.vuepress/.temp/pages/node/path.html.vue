<template><h1 id="path-路径模块" tabindex="-1"><a class="header-anchor" href="#path-路径模块" aria-hidden="true">#</a> path 路径模块</h1>
<p>用来<strong>处理路径</strong>的模块</p>
<p>例如:</p>
<ul>
<li>path.join() 方法 , 用来<strong>将多个片段拼接成一个完整的路径字符串</strong></li>
<li>path.basename() 方法, 用来从路径字符串 , 将文件名解析出来</li>
</ul>
<p>需要导入</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="路径拼接" tabindex="-1"><a class="header-anchor" href="#路径拼接" aria-hidden="true">#</a> 路径拼接</h2>
<h3 id="path-join-语法格式" tabindex="-1"><a class="header-anchor" href="#path-join-语法格式" aria-hidden="true">#</a> path.join() 语法格式</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>path.join([...paths])
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul>
<li><code>...paths&lt;string&gt;</code>路径片段的序列</li>
<li>返回值 <code>&lt;string&gt;</code></li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> pathStr <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">'/a'</span><span class="token punctuation">,</span><span class="token string">'/b/c'</span><span class="token punctuation">,</span><span class="token string">'../'</span><span class="token punctuation">,</span><span class="token string">'./d'</span><span class="token punctuation">,</span><span class="token string">'e'</span><span class="token punctuation">)</span>
<span class="token comment">// 注意 :  ../ 会抵消紧挨在前面的路径</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>pathStr<span class="token punctuation">)</span>  <span class="token comment">// 输出 \a\b\d\e</span>

<span class="token keyword">const</span> pathStr2 <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname <span class="token punctuation">,</span> <span class="token string">'./file/1.txt'</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>pathStr2<span class="token punctuation">)</span> <span class="token comment">// 输出 当前文件所处的目录\files\1.txt</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="获取路径中的文件名" tabindex="-1"><a class="header-anchor" href="#获取路径中的文件名" aria-hidden="true">#</a> 获取路径中的文件名</h2>
<h3 id="path-basename-语法格式" tabindex="-1"><a class="header-anchor" href="#path-basename-语法格式" aria-hidden="true">#</a> path.basename() 语法格式</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>path.basename(path[,ext])
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul>
<li><code>path &lt;string&gt;</code> 必选参数, 表示路径的字符串</li>
<li><code>ext &lt;string&gt;</code> 可选参数 , 表示文件扩展名</li>
<li>返回 : 表示路径中的最后一部分</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> fpath <span class="token operator">=</span> <span class="token string">'/a/b/c/index.html'</span> <span class="token comment">// 问价内存放路径</span>

<span class="token keyword">const</span> fullName <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">basename</span><span class="token punctuation">(</span>fpath<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>fullName<span class="token punctuation">)</span> <span class="token comment">// 输出 index.html</span>


<span class="token keyword">const</span> nameWithoutExtension <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">basename</span><span class="token punctuation">(</span>fpath <span class="token punctuation">,</span> <span class="token string">'.html'</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>nameWithoutExtension<span class="token punctuation">)</span> <span class="token comment">// 输出 index</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="获取路径中文件扩展名" tabindex="-1"><a class="header-anchor" href="#获取路径中文件扩展名" aria-hidden="true">#</a> 获取路径中文件扩展名</h2>
<h3 id="path-extname-语法格式" tabindex="-1"><a class="header-anchor" href="#path-extname-语法格式" aria-hidden="true">#</a> path.extname() 语法格式</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>path.extname(path)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>参数</p>
<ul>
<li><code>path&lt;string&gt;</code>: 必选参数, 表示路径字符串</li>
<li>返回 : 返回的发ode扩展名字符串</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> fpath <span class="token operator">=</span> <span class="token string">'/a/b/c/index.html'</span> <span class="token comment">// 问价内存放路径</span>

<span class="token keyword">const</span> fext <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">extname</span><span class="token punctuation">(</span>fpath<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>fext<span class="token punctuation">)</span>  <span class="token comment">// 输出 .html</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></template>
