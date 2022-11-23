<template><h1 id="webpack" tabindex="-1"><a class="header-anchor" href="#webpack" aria-hidden="true">#</a> Webpack</h1>
<h2 id="核心概念" tabindex="-1"><a class="header-anchor" href="#核心概念" aria-hidden="true">#</a> 核心概念</h2>
<ul>
<li>entry : 入口模块文件路径</li>
<li>output : 输出 bundle 文件路径</li>
<li>module : 模块, webpack 构建对象</li>
<li>bundle : 输出文件 webpack的构建产物</li>
<li>chunk : 中间件, webpack 构建的中间产物</li>
<li>loader : 文件转化器  (比如通过 vue-loader 把 .vue 文件转换成浏览器认识的 .js 文件)</li>
<li>plugin : 插件, 在 webpack 生命周期执行特定任务</li>
</ul>
<p>标准的 webpack 初始化项目流程</p>
<ol>
<li>npm init 初始化项目</li>
<li>创建 src/index.js</li>
<li>创建 public/index.html</li>
<li>创建 webpack.config.js 填入配置</li>
<li>执行 npm install  webpack webpack-cli</li>
<li>配置 build 命令, webpack</li>
<li>执行 npm run build 进行打包构建</li>
</ol>
<p>webpack.config.js</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">'./src/index.js'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">'bundle.js'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span>path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'./dist'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></template>
