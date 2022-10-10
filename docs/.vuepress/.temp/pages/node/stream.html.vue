<template><h1 id="stream" tabindex="-1"><a class="header-anchor" href="#stream" aria-hidden="true">#</a> Stream</h1>
<p><img src="@source/.vuepress/public/images/stream1.png" alt="图片"></p>
<h2 id="文件读写的-stream" tabindex="-1"><a class="header-anchor" href="#文件读写的-stream" aria-hidden="true">#</a> 文件读写的 Stream</h2>
<p><img src="@source/.vuepress/public/images/str1.png" alt="图片"></p>
<h3 id="readable-流的使用" tabindex="-1"><a class="header-anchor" href="#readable-流的使用" aria-hidden="true">#</a> Readable 流的使用</h3>
<p>之前读取一个文件的信息:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>fs<span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span><span class="token string">'./1.txt'</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span>data</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul>
<li><strong>流的方式读取文件:</strong></li>
</ul>
<p><img src="@source/.vuepress/public/images/str2.png" alt="图片">
<img src="@source/.vuepress/public/images/str3.png" alt="图片"></p>
<p><img src="@source/.vuepress/public/images/pause1.png" alt="图片"></p>
<h3 id="writable-流的使用" tabindex="-1"><a class="header-anchor" href="#writable-流的使用" aria-hidden="true">#</a> Writable 流的使用</h3>
<p>之前传统的方式是写入文件</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'fs'</span><span class="token punctuation">)</span>
fs<span class="token punctuation">.</span><span class="token function">writeFile</span><span class="token punctuation">(</span><span class="token string">'./1.txt'</span><span class="token punctuation">,</span> <span class="token string">'Hello Stream'</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">flag</span><span class="token operator">:</span><span class="token string">'a'</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul>
<li>流的写入方式</li>
</ul>
<p><img src="@source/.vuepress/public/images/writeable1.png" alt="图片"></p>
<h3 id="读文件然后写入到另外一个文件里面-pipe-方法" tabindex="-1"><a class="header-anchor" href="#读文件然后写入到另外一个文件里面-pipe-方法" aria-hidden="true">#</a> 读文件然后写入到另外一个文件里面 - pipe 方法</h3>
<p>传统的方式</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>fs<span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span><span class="token string">'./1.txt'</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span>data</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
  fs<span class="token punctuation">.</span><span class="token function">writeFile</span><span class="token punctuation">(</span><span class="token string">'./2.txt'</span><span class="token punctuation">,</span> data<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul>
<li><strong>Stream 的写法</strong>(更优雅)
<img src="@source/.vuepress/public/images/pipe1.png" alt="图片"></li>
</ul>
</template>
