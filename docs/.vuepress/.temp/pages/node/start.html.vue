<template><h1 id="初识-node" tabindex="-1"><a class="header-anchor" href="#初识-node" aria-hidden="true">#</a> 初识 Node</h1>
<p><strong>Node.js</strong> 是一个基于 Chrome V8 引擎的 <strong>JavaScript 运行环境</strong></p>
<h4 id="node-js-中的-javascript-运行环境" tabindex="-1"><a class="header-anchor" href="#node-js-中的-javascript-运行环境" aria-hidden="true">#</a> Node.js 中的 javascript 运行环境</h4>
<p><img src="@source/.vuepress/public/images/nj1.png" alt="图片"></p>
<p>注意:</p>
<ul>
<li><strong>浏览器</strong>是 JavaScript 的<strong>前端运行环境</strong></li>
<li><strong>Node.js</strong>是 JavaScript 的<strong>后端运行环境</strong></li>
<li>Node.js 中<strong>无法调用</strong> DOM 和 BOM 等<strong>浏览器内置 API</strong></li>
</ul>
<h2 id="查看版本号" tabindex="-1"><a class="header-anchor" href="#查看版本号" aria-hidden="true">#</a> 查看版本号</h2>
<p>window + R 打开控制面板, 输入 cmd 后打回车. 即可打开终端, 然后运行命令</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">node</span> -v
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="node-环境中执行-js-代码" tabindex="-1"><a class="header-anchor" href="#node-环境中执行-js-代码" aria-hidden="true">#</a> Node 环境中执行 JS 代码</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">node</span> 要执行的js文件
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="给-node-传递参数" tabindex="-1"><a class="header-anchor" href="#给-node-传递参数" aria-hidden="true">#</a> 给 Node 传递参数</h2>
<p>node1.js</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>process<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">node</span> node1.js
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>在 argv 属性里有参数信息
<img src="@source/.vuepress/public/images/argv1.png" alt="图片"></p>
<p>如果要传递参数, 比如</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">node</span> node1.js hello <span class="token assign-left variable">name</span><span class="token operator">=</span>frank
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="@source/.vuepress/public/images/argv2.png" alt="图片"></p>
<p>所以可以打出全部的 process</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>argv<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>argv<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

process<span class="token punctuation">.</span>argv<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=></span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="node-全局对象" tabindex="-1"><a class="header-anchor" href="#node-全局对象" aria-hidden="true">#</a> Node 全局对象</h2>
<h3 id="特殊的全局对象" tabindex="-1"><a class="header-anchor" href="#特殊的全局对象" aria-hidden="true">#</a> 特殊的全局对象</h3>
<ul>
<li>包括: __dirname, __filename, exports , module , require()</li>
<li>这些全局对象实际上是模块中的变量, 只是每个模块都有, 看起来像是全局变量</li>
<li>在命令行交互中是不可以使用的</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">)</span>  <span class="token comment">// C:\Users\86188\Desktop\node-demo</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>__filename<span class="token punctuation">)</span> <span class="token comment">// C:\Users\86188\Desktop\node-demo\node1.js</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul>
<li>process 对象: process 提供了Node进程相关信息</li>
</ul>
<p>比如 Node 的 运行环境, 参数信息等</p>
<ul>
<li>
<p>console 对象: 提供了简单的调试控制台</p>
</li>
<li>
<p>定时器函数</p>
</li>
</ul>
<p><img src="@source/.vuepress/public/images/dingshiqi1.png" alt="图片"></p>
<h3 id="global-全局对象" tabindex="-1"><a class="header-anchor" href="#global-全局对象" aria-hidden="true">#</a> global 全局对象</h3>
<h4 id="global-和-window-对象的区别" tabindex="-1"><a class="header-anchor" href="#global-和-window-对象的区别" aria-hidden="true">#</a> global 和  window 对象的区别</h4>
<p>在浏览器上, 全局对象都是在 window 上的, 比如有document, setInterval, setTimeout, alert 等</p>
<p>在 Node 中, 也有一个 global 属性, 它里面有很多其他对象</p>
<p>但是在浏览器中执行的 JS 代码, 如果在顶级范围内通过 var 定义一个属性, 默认会添加到 window 对象上</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> age <span class="token operator">=</span> <span class="token number">18</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>age<span class="token punctuation">)</span>  <span class="token comment">// 18</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>但是在 node 中, 通过 var定义的变量, 他只是在在当前模块(每个 .js 文件相当于一个模块)中有一个变量, 不会放到全局</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> age <span class="token operator">=</span> <span class="token number">18</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>global<span class="token punctuation">.</span>age<span class="token punctuation">)</span>  <span class="token comment">// undefined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></template>
