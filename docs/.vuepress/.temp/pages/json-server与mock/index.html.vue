<template><h2 id="安装配置json-server" tabindex="-1"><a class="header-anchor" href="#安装配置json-server" aria-hidden="true">#</a> 安装配置json-server</h2>
<p><a href="https://github.com/typicode/json-server" target="_blank" rel="noopener noreferrer">json-server官网<ExternalLinkIcon/></a></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 命令行</span>
<span class="token function">yarn</span> <span class="token function">add</span> --dev json-server
json-server --watch --post <span class="token number">3003</span> --host <span class="token number">127.0</span>.0.1 db.json
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="使用mockjs批量生成中文数据" tabindex="-1"><a class="header-anchor" href="#使用mockjs批量生成中文数据" aria-hidden="true">#</a> 使用mockjs批量生成中文数据</h2>
<p><a href="http://mockjs.com/" target="_blank" rel="noopener noreferrer">mockjs官网<ExternalLinkIcon/></a></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 命令行</span>
<span class="token function">yarn</span> <span class="token function">add</span> mockjs
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>db.js:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> Mock <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'mockjs'</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> Random <span class="token operator">=</span> Mock<span class="token punctuation">.</span>Random

module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    <span class="token keyword">let</span> data <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">news</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span><span class="token number">20</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        data<span class="token punctuation">.</span>news<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">id</span><span class="token operator">:</span>i<span class="token punctuation">,</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span>Random<span class="token punctuation">.</span><span class="token function">cword</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token literal-property property">content</span><span class="token operator">:</span>Random<span class="token punctuation">.</span><span class="token function">cparagraph</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> data   <span class="token comment">//return出对象</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># 命令行
json-server --watch --post 3003 --host 127.0.0.1 db.js
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></template>
