<template><h1 id="fs-文件系统模块" tabindex="-1"><a class="header-anchor" href="#fs-文件系统模块" aria-hidden="true">#</a> fs 文件系统模块</h1>
<p>fs 模块是用拉埃操作文件的模块</p>
<p>例如:</p>
<ul>
<li><code>fs.readFile()</code> 方法, 用来读取指定文件的内容</li>
<li><code>fs.writeFile()</code> 方法, 想指定的文件中写入内容</li>
</ul>
<p>需要先导入 fs 模块</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'fs'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="读取指定文件内容" tabindex="-1"><a class="header-anchor" href="#读取指定文件内容" aria-hidden="true">#</a> 读取指定文件内容</h2>
<h3 id="fs-readfile-语法格式" tabindex="-1"><a class="header-anchor" href="#fs-readfile-语法格式" aria-hidden="true">#</a> fs.readFile() 语法格式</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>fs<span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span>path<span class="token punctuation">[</span><span class="token punctuation">,</span> options<span class="token punctuation">]</span><span class="token punctuation">,</span> callback<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul>
<li>参数1 : <strong>必选</strong>参数, 文件路径</li>
<li>参数2 : 可选参数, 表示以什么<strong>编码格式</strong>来读取文件, 一般指定为 utf8</li>
<li>参数3 : <strong>必选</strong>参数, 读取后, 通过回调函数拿到读取的结果</li>
</ul>
<h3 id="fs-readfile-实例代码" tabindex="-1"><a class="header-anchor" href="#fs-readfile-实例代码" aria-hidden="true">#</a> fs.readFile() 实例代码</h3>
<p>以 utf8 的编码格式, 读取指定文件的内容, 并打印 err 和 dataStr</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 1.  导入 fs 模块, 来操作文件</span>
<span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'fs'</span><span class="token punctuation">)</span>

<span class="token comment">// 2.  调用 readFile() 读取文件</span>
fs<span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span><span class="token string">'./file/1.txt'</span><span class="token punctuation">,</span> <span class="token string">'utf8'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> dataStr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 1. 打印失败的结构</span>
  <span class="token comment">// 如果读取成功, 则 err 的值为 null</span>
  <span class="token comment">// 如果读取失败, 则 err 的值为 错误对象, dataStr 的值为 undefined</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'--------'</span><span class="token punctuation">)</span>
  <span class="token comment">// 2. 打印成功的结果</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>dataStr<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="判断文件是否读取成功" tabindex="-1"><a class="header-anchor" href="#判断文件是否读取成功" aria-hidden="true">#</a> 判断文件是否读取成功</h3>
<p>可以判断 err 对象是否为 <code>null</code>, 来知晓文件读取的解构</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'fs'</span><span class="token punctuation">)</span>

fs<span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span><span class="token string">'./file/1.txt'</span><span class="token punctuation">,</span> <span class="token string">'utf8'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> dataStr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// err 存在, 说明出错</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'文件读取失败!'</span> <span class="token operator">+</span> err<span class="token punctuation">.</span>message <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'文件读取成功, 内容是:'</span> <span class="token operator">+</span> result<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p><img src="@source/.vuepress/public/images/nj2.png" alt="图片"></p>
<h2 id="向指定文件写入内容" tabindex="-1"><a class="header-anchor" href="#向指定文件写入内容" aria-hidden="true">#</a> 向指定文件写入内容</h2>
<h3 id="fs-writefile-的语法格式" tabindex="-1"><a class="header-anchor" href="#fs-writefile-的语法格式" aria-hidden="true">#</a> fs.writeFile() 的语法格式</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>fs<span class="token punctuation">.</span><span class="token function">writeFile</span><span class="token punctuation">(</span>file<span class="token punctuation">,</span>data<span class="token punctuation">[</span><span class="token punctuation">,</span>options<span class="token punctuation">]</span><span class="token punctuation">,</span>callback<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul>
<li>参数1 : <strong>必选</strong>参数, <strong>文件路径的字符串</strong></li>
<li>参数2 : <strong>必选</strong>参数, 表示写入的内容</li>
<li>参数3 : 可选参数, 什么格式写入文件, 默认值为 <code>utf8</code></li>
<li>参数4 : <strong>必选</strong>参数, 文件写入完成后的回调函数</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'fs'</span><span class="token punctuation">)</span>

fs<span class="token punctuation">.</span><span class="token function">writeFile</span><span class="token punctuation">(</span><span class="token string">'./file/2.txt'</span><span class="token punctuation">,</span> <span class="token string">'Hello, Node.js!'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 如果文件写入成功, 则 err 的值 等于 null</span>
  <span class="token comment">// 如果文件写入失败, 则 err 的值 等于 一个错误对象</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="判断是否写入成功" tabindex="-1"><a class="header-anchor" href="#判断是否写入成功" aria-hidden="true">#</a> 判断是否写入成功</h3>
<p>可以判断 err 对象是否为 <code>null</code>, 来知晓文件写入的结果</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'fs'</span><span class="token punctuation">)</span>

fs<span class="token punctuation">.</span><span class="token function">writeFile</span><span class="token punctuation">(</span><span class="token string">'./file/2.txt'</span><span class="token punctuation">,</span> <span class="token string">'Hello, Node.js!'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span>  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'文件写入失败!'</span> <span class="token operator">+</span> err<span class="token punctuation">.</span>message<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'文件写入成功 ! '</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="练习" tabindex="-1"><a class="header-anchor" href="#练习" aria-hidden="true">#</a> 练习</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 1.txt </span>
小红<span class="token operator">=</span><span class="token number">99</span> 小黄<span class="token operator">=</span><span class="token number">94</span> 小白<span class="token operator">=</span><span class="token number">92</span> 小红<span class="token operator">=</span><span class="token number">93</span> 小绿<span class="token operator">=</span><span class="token number">98</span> 小黑<span class="token operator">=</span><span class="token number">99</span>  

<span class="token comment">// 上面数据想要转换成下面这样, 并整理到 2.txt 里</span>
<span class="token literal-property property">小红</span><span class="token operator">:</span><span class="token number">99</span> 
<span class="token literal-property property">小黄</span><span class="token operator">:</span><span class="token number">94</span> 
<span class="token literal-property property">小白</span><span class="token operator">:</span><span class="token number">92</span> 
<span class="token literal-property property">小红</span><span class="token operator">:</span><span class="token number">93</span> 
<span class="token literal-property property">小绿</span><span class="token operator">:</span><span class="token number">98</span> 
<span class="token literal-property property">小黑</span><span class="token operator">:</span><span class="token number">99</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>写代码~~</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'fs'</span><span class="token punctuation">)</span>

fs<span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span><span class="token string">'./1.txt'</span><span class="token punctuation">,</span> <span class="token string">'utf8'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span>dataStr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'文件读取失败! '</span> <span class="token operator">+</span> err<span class="token punctuation">.</span>message<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// console.log('文件读取成功!')</span>
  
  <span class="token comment">// 数据按空格分割</span>
  <span class="token comment">// 分割后字符串, 遍历, 替换字符串</span>
  <span class="token comment">// 新数组每一项, 进行合并</span>
  <span class="token keyword">const</span> arrOld <span class="token operator">=</span> dataStr<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> arrNew <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  arrOld<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    arrNew<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">'='</span><span class="token punctuation">,</span><span class="token string">':'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> newStr <span class="token operator">=</span> arrNew<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">'\r\n'</span><span class="token punctuation">)</span>

  <span class="token comment">// 写入文件</span>
  fs<span class="token punctuation">.</span><span class="token function">writeFile</span><span class="token punctuation">(</span><span class="token string">'./2.txt'</span><span class="token punctuation">,</span> newStr<span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'写入文件失败'</span> <span class="token operator">+</span> err<span class="token punctuation">.</span>message<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'写入成功'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h2 id="路径动态拼接的问题-dirname" tabindex="-1"><a class="header-anchor" href="#路径动态拼接的问题-dirname" aria-hidden="true">#</a> 路径动态拼接的问题 __dirname</h2>
<p>在使用 fs 模块操作文件时, <strong>直接提供完整的路径</strong>， 不要写成 ./ 或 ../ 开头的相对路径， 从而防止路径动态拼接的问题</p>
<p><code>__dirname</code> 表示当前文件所处的目录</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>不要使用相对路径 !</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'fs'</span><span class="token punctuation">)</span>

fs<span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span>__dirname <span class="token operator">+</span> <span class="token string">'/file/1.txt'</span><span class="token punctuation">,</span> <span class="token string">'utf8'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> dataStr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// err 存在, 说明出错</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'文件读取失败!'</span> <span class="token operator">+</span> err<span class="token punctuation">.</span>message <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'文件读取成功, 内容是:'</span> <span class="token operator">+</span> result<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>









</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></template>
