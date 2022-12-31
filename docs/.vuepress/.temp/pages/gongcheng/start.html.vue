<template><h1 id="webpack-入门" tabindex="-1"><a class="header-anchor" href="#webpack-入门" aria-hidden="true">#</a> webpack 入门</h1>
<p><code>webpack</code> 是一个<strong>模块打包工具</strong> ,当 <code>webpack</code> 处理应用程序时，它会在内部从一个或多个入口点构建一个 <strong>依赖图</strong>(dependency graph)，然后将你项目中所需的每一个模块组合成一个或多个 <code>bundles</code>，它们均为静态资源，用于展示你的内容</p>
<h2 id="搭建-webpack-环境" tabindex="-1"><a class="header-anchor" href="#搭建-webpack-环境" aria-hidden="true">#</a> 搭建 webpack 环境</h2>
<ol>
<li><code>npm init</code> 初始化项目, 生成 <code>package.json</code> 文件</li>
<li>创建 <code>src/index.js</code> 入口文件</li>
<li>创建 <code>public/index.html</code></li>
<li>创建 <code>webpack.config.js</code> 配置文件填入配置</li>
<li>执行 <code>npm install  webpack webpack-cli</code> <strong>安装 webpack</strong></li>
<li><code>package.json</code> 文件的 <code>scripts</code> 配置项 配置 <code>build</code> 命令, <code>webpack</code></li>
<li>执行 <code>npm run build</code> 进行打包构建</li>
</ol>
<h4 id="核心概念" tabindex="-1"><a class="header-anchor" href="#核心概念" aria-hidden="true">#</a> 核心概念</h4>
<ul>
<li><code>entry</code> : 入口模块文件路径</li>
<li><code>output</code> : 输出 bundle 文件路径</li>
<li><code>module</code> : 模块, webpack 构建对象</li>
<li><code>bundle</code> : 输出文件 webpack的构建产物</li>
<li><code>chunk</code> :  中间件, webpack 构建的中间产物(不是直接引入,比如<code>import './test.js'</code>, 而是使用 <code>import('./test.js')</code> 的方式异步引入..</li>
<li><code>loader</code> : 文件转化器  (比如通过 vue-loader 把 .vue 文件转换成浏览器认识的 .js 文件)</li>
<li><code>plugin</code> : 插件, 在 webpack 生命周期执行特定任务</li>
</ul>
<h4 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件" aria-hidden="true">#</a> 配置文件 *</h4>
<p><code>webpack.config.js</code> 配置文件, 编写具体的配置内容</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span><span class="token string">'./src/index.js'</span><span class="token punctuation">,</span> <span class="token comment">// 入口文件路径</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span><span class="token punctuation">{</span>                <span class="token comment">// 输出 bundle 文件路径</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'dist'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// 必须 绝对路径</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span><span class="token string">'bundle.js'</span> <span class="token comment">// 文件名称</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>如果配置文件的名字不是 <code>webpack.config.js</code>, 该如何打包?</p>
<ul>
<li>命令: <code>webpack --config xxxx</code></li>
</ul>
<p>默认的 <code>mode</code> 是 <code>production</code>, 打包出的文件会被压缩。但如果 <code>mode</code> 设置成 <code>development</code>的时候,  那么打包出的 <code>bundle.js</code>是一段没有被压缩的代码</p>
<h2 id="loader" tabindex="-1"><a class="header-anchor" href="#loader" aria-hidden="true">#</a> Loader</h2>
<p><code>loader</code> 就是一个打包的方案, <code>webpack</code> 知道对于 <code>js</code> 文件应该如何进行打包, webpack 不能识别非js结尾的文件后缀模块, 那本身 <code>webpack</code> 是不知道对于其他文件是该如何处理的, 但是 <code>loader</code> 知道, 所以 <code>webpack</code> 可以去求助 <code>loader</code> 就可以了</p>
<p>所以只要看到引入的模块结尾呢不是 <code>.js</code>文件, 这个时候要想到使用 <code>loader</code>了, 可以这么理解</p>
<ul>
<li><strong>module.rules 的配置如下：</strong>
<img src="@source/.vuepress/public/images/ru1.png" alt="图片"></li>
</ul>
<h3 id="用下-file-loader" tabindex="-1"><a class="header-anchor" href="#用下-file-loader" aria-hidden="true">#</a> 用下 file-loader</h3>
<p><code>src/index.js</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> avatar <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./avatar.jpg'</span><span class="token punctuation">)</span> 
<span class="token comment">// 引入了 .jpg 文件, 但 webpack 无法打包非.js后缀名的文件, 所以需要配置一下对应的 loader</span>
<span class="token comment">// 可以求助 file-loader 帮助 webpack 进行打包</span>
<span class="token keyword">const</span> image <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Image</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
image<span class="token punctuation">.</span>src <span class="token operator">=</span> avatar
<span class="token keyword">const</span> root <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'root'</span><span class="token punctuation">)</span>
root<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>image<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><code>webpack.config.js</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span><span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.jpg$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span><span class="token punctuation">{</span>
          <span class="token literal-property property">loader</span><span class="token operator">:</span><span class="token string">'file-loader'</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>安装 <code>file-loader</code> : <code>npm install file-loader -D</code></p>
<p>最后执行 <code>npm run build</code> 进行打包</p>
<p><img src="@source/.vuepress/public/images/fileloader1.png" alt="图片">
结果: 图片文件被输出到打包后 <code>dist</code> 文件夹中</p>
<h3 id="使用-loader-打包静态资源-图片篇" tabindex="-1"><a class="header-anchor" href="#使用-loader-打包静态资源-图片篇" aria-hidden="true">#</a> 使用 Loader 打包静态资源 (图片篇)</h3>
<p>续上面的内容, 之前使用 file-loader 打包出的图片文件, 名字非常的乱, 有一套随机的字符串组成</p>
<p>现在使用 <strong><code>placeholder</code> 占位符</strong>, 对打包后的图片资源的文件名做一些处理</p>
<p><code>webpack.config.js</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span><span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.jpg}png|gif$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span><span class="token punctuation">{</span>
          <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">'file-loader'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">options</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token comment">// placeholder 占位符</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'[name]_[hash].[ext]'</span> <span class="token comment">// 原来的文件名.原来的后罪名</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>又想让图片打包到一个叫 <code>images</code> 的文件夹里面</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span><span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.jpg}png|gif$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span><span class="token punctuation">{</span>
          <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">'file-loader'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">options</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token comment">// placeholder 占位符</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'[name]_[hash].[ext]'</span><span class="token punctuation">,</span> <span class="token comment">// 原来的文件名.原来的后罪名</span>
            <span class="token literal-property property">outputPath</span><span class="token operator">:</span> <span class="token string">'images/'</span>  <span class="token comment">// 打包到 images 文件夹下面</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h3 id="url-loader" tabindex="-1"><a class="header-anchor" href="#url-loader" aria-hidden="true">#</a> url-loader</h3>
<p><code>url-loader</code> 跟 <code>file-loader</code> 不一样, 他会把我们的图片转化成一个 <code>base64</code> 的字符串然后直接放到我们的 <code>bundle.js</code> 里面, 而不是直接生成一个文件</p>
<p>实际的作用:</p>
<ul>
<li>
<p>因为直接打包到 <code>js</code> 文件里面, 那么实际上只要加载对应的 <code>js</code> 文件图片就可以出来了, 他不用在额外请求一个图片的地址了, 生了一次 <code>http</code> 请求, 但如果这个图片文件特别的大, 那么打包出来的 <code>js</code> 文件也会特别的大, 那么加载这个 <code>js</code> 文件的时间就会很长, 所以有可能一开始很长的时间里面页面上什么东西都显示不出来, 所以这个 <code>url-loader</code> 最佳的使用方式是什么呢?</p>
</li>
<li>
<p>如果一个图片非常的小, 比如 1,2 KB, 那么这个图片以 <code>base6</code>4 的形式打包到 js 文件里面, 是一个非常好的选择, 没必要让这些图片再发一个 http 的请求, 浪费资源
但如果这个图片很大, 那么可以把图片打包到 dist 目录下, 不要打包到 bundle.js 文件里面, 这样更合适, 因为可以让bundle.js 快速的加载完, 页面可以快速的显示出来,  不然的话 bundle.js 会一下子变得很大, 那加载它时间很长, 页面很久才能显示出来</p>
</li>
</ul>
<p>使用方式:
<code>webpack.config.js</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span><span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.jpg}png|gif$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span><span class="token punctuation">{</span>
          <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">'url-loader'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">options</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'[name]_[hash].[ext]'</span><span class="token punctuation">,</span> 
            <span class="token literal-property property">outputPath</span><span class="token operator">:</span> <span class="token string">'images/'</span><span class="token punctuation">,</span> 
            <span class="token literal-property property">limit</span> <span class="token operator">:</span> <span class="token number">2048</span> 
            <span class="token comment">// 如果图片小于 2048 字节即小于 2kb 的时候, 那么这些图片就会直接以 base64 的形式打包到 bundle.js 文件里面</span>
            <span class="token comment">// 否则会在 dist 目录下生成一个图片文件</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h3 id="使用-loader-打包静态资源-样式篇" tabindex="-1"><a class="header-anchor" href="#使用-loader-打包静态资源-样式篇" aria-hidden="true">#</a> 使用 Loader 打包静态资源 (样式篇)</h3>
<p>想要打包 .css 文件, 需要用到两个 loader : <code>style-loader</code> , <code>css-loader</code></p>
<p><code>webpack.config.js</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">-</span>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
   <span class="token operator">...</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span><span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.jpg}png|gif$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span><span class="token punctuation">{</span>
          <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">'url-loader'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">options</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'[name]_[hash].[ext]'</span><span class="token punctuation">,</span> 
            <span class="token literal-property property">outputPath</span><span class="token operator">:</span> <span class="token string">'images/'</span><span class="token punctuation">,</span> 
            <span class="token literal-property property">limit</span> <span class="token operator">:</span> <span class="token number">2048</span> 
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">'style-loader'</span><span class="token punctuation">,</span><span class="token string">'css-loader'</span><span class="token punctuation">]</span>  
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p>安装</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> css-loader style-loader -D
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><code>css-loader</code> 的作用:</p>
<ul>
<li><code>css-loader</code> 会帮我们解析出几个 <code>css</code> 文件之间的关系, 最终把这些 <code>css</code> 文件<strong>合并成</strong>一段 <code>css</code></li>
</ul>
<p><code>style-loader</code> 的作用:</p>
<ul>
<li>将 <code>css-loader</code> 合并出 <code>css</code> 之后, <code>style-loader</code> 会把这段内容<strong>通过 <code>style</code> 标签挂载到页面的 <code>head</code> 部分</strong></li>
</ul>
<p><img src="@source/.vuepress/public/images/styleloader1.png" alt="图片"></p>
<h3 id="sass-loader" tabindex="-1"><a class="header-anchor" href="#sass-loader" aria-hidden="true">#</a> sass-loader</h3>
<p><code>sass-loader</code> 加载 Sass/SCSS 文件并将他们编译为 CSS</p>
<p><a href="https://webpack.docschina.org/loaders/sass-loader/" target="_blank" rel="noopener noreferrer">sass-loader 官网 https://webpack.docschina.org/loaders/sass-loader/<ExternalLinkIcon/></a></p>
<p>安装 <code>sass-loader</code>和 <code>sass</code></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> sass-loader sass --save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>webpack.config.js</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">-</span>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
   <span class="token operator">...</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span><span class="token punctuation">[</span>
      <span class="token operator">...</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.scss$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">'style-loader'</span><span class="token punctuation">,</span><span class="token string">'css-loader'</span><span class="token punctuation">,</span> <span class="token string">'scss-loader'</span><span class="token punctuation">]</span>  
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p><strong>注意</strong> : loader 的执行顺序是<strong>从下到上(或者 从有到左)</strong>, 所以咱们需要先使用 <code>sass-loader</code> 把 <code>scss</code> 翻译成 <code>css</code> 代码之后,  给到 <code>css-loader</code>, 然后都处理好了再给 <code>style-loader</code>挂载到页面上</p>
<h3 id="postcss-loader-autoprefixer-兼容浏览器前缀" tabindex="-1"><a class="header-anchor" href="#postcss-loader-autoprefixer-兼容浏览器前缀" aria-hidden="true">#</a> postcss-loader + autoprefixer 兼容浏览器前缀</h3>
<p>作用: 可以添加一些浏览器前缀 , 配合 <code>autoprefixer</code> 插件自动补齐 CSS3 前缀</p>
<p><img src="@source/.vuepress/public/images/qzqz01.png" alt="图片"></p>
<p><a href="https://webpack.docschina.org/loaders/postcss-loader/" target="_blank" rel="noopener noreferrer">postcss-loader 官方文档<ExternalLinkIcon/></a></p>
<p>为了使用本 loader，你需要安装 <code>postcss-loader 和 postcss</code>：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span>  postcss-loader postcss -D
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>还需要安装过 <code>autoprefixer</code> 插件</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> autoprefixer -D
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
   <span class="token operator">...</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span><span class="token punctuation">[</span>
      <span class="token operator">...</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span><span class="token punctuation">[</span>
          <span class="token string">'style-loader'</span><span class="token punctuation">,</span>
          <span class="token string">'css-loader'</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>   <span class="token comment">// &lt;- 开始看</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">'postcss-loader'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">options</span><span class="token operator">:</span><span class="token punctuation">{</span>
              <span class="token literal-property property">postcssOptions</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                  <span class="token punctuation">[</span>
                    <span class="token string">'autoprefixer'</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                      <span class="token comment">// 选项</span>
                    <span class="token punctuation">}</span>
                  <span class="token punctuation">]</span>
                <span class="token punctuation">]</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>  <span class="token comment">// 看到这儿</span>
        <span class="token punctuation">]</span>  
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><p>并且必须需要在 <code>package.json</code> 去配置 <code>browserslist</code> 选项(哪些浏览器要支持):</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  ...
  ...
  <span class="token property">"browserslist"</span><span class="token operator">:</span><span class="token punctuation">[</span>
    <span class="token string">"last 10 Chrome versions"</span><span class="token punctuation">,</span> 
    <span class="token string">"last 5 Firefox versions"</span><span class="token punctuation">,</span>
    <span class="token string">"Safari >= 6"</span><span class="token punctuation">,</span>
    <span class="token string">"ie> 8"</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>如果想要配置在 <code>webpack.config.js</code> 里面</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
   <span class="token operator">...</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span><span class="token punctuation">[</span>
      <span class="token operator">...</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span><span class="token punctuation">[</span>
          <span class="token string">'style-loader'</span><span class="token punctuation">,</span>
          <span class="token string">'css-loader'</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>   <span class="token comment">// &lt;- 开始看</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">'postcss-loader'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">options</span><span class="token operator">:</span><span class="token punctuation">{</span>
              <span class="token literal-property property">postcssOptions</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                  <span class="token punctuation">[</span>
                    <span class="token string">'autoprefixer'</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>                     <span class="token comment">//  &lt;- 名字要写成 browsers, 一定要切记注意</span>
                      <span class="token string-property property">"browsers"</span><span class="token operator">:</span><span class="token punctuation">[</span>
                        <span class="token string">"last 10 Chrome versions"</span><span class="token punctuation">,</span> 
                        <span class="token string">"last 5 Firefox versions"</span><span class="token punctuation">,</span>
                        <span class="token string">"Safari >= 6"</span><span class="token punctuation">,</span>
                        <span class="token string">"ie> 8"</span>
                      <span class="token punctuation">]</span>
                    <span class="token punctuation">}</span>
                  <span class="token punctuation">]</span>
                <span class="token punctuation">]</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>  <span class="token comment">// 看到这儿</span>
        <span class="token punctuation">]</span>  
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><!-- 或者 创建 `postcss.config.js`配置文件
```js
module.exports = {
  plugins:[
    require('autoprefixer')
  ]
}
``` -->
<h3 id="css-loader-补充" tabindex="-1"><a class="header-anchor" href="#css-loader-补充" aria-hidden="true">#</a> css-loader 补充</h3>
<ol>
<li><code>css-loader</code> 的配置项 : <code>importLoaders</code></li>
</ol>
<p><code>webpack.config.js</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
   <span class="token operator">...</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span><span class="token punctuation">[</span>
      <span class="token operator">...</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.scss$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span><span class="token punctuation">[</span>
          <span class="token string">'style-loader'</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">'css-loader'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">options</span><span class="token operator">:</span><span class="token punctuation">{</span>
              <span class="token literal-property property">importLoaders</span><span class="token operator">:</span> <span class="token number">2</span>
              <span class="token comment">// 通过 @import 引入的 sass 文件 , 引入之前呢也要去走2个loader , 也就是 postcss-loader 和 sass-loader</span>
              <span class="token comment">// 这样可以保证无论是在js 里面直接引入 sass 这种文件, 还是在 sass 文件里面再去用 @import 引入了其他的 sass 文件, 都会有从下到上引入所有的 loader</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
          <span class="token string">'scss-loader'</span><span class="token punctuation">,</span>
          <span class="token string">'postcss-loader'</span>
          <span class="token punctuation">]</span>  
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><ol start="2">
<li><strong>模块化的 <code>css</code></strong>
<code>webpack.config.js</code></li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
   <span class="token operator">...</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span><span class="token punctuation">[</span>
      <span class="token operator">...</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.scss$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span><span class="token punctuation">[</span>
          <span class="token string">'style-loader'</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">'css-loader'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">options</span><span class="token operator">:</span><span class="token punctuation">{</span>
              <span class="token literal-property property">importLoaders</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
              <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token boolean">true</span>  
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
          <span class="token string">'scss-loader'</span><span class="token punctuation">,</span>
          <span class="token string">'postcss-loader'</span>
          <span class="token punctuation">]</span>  
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>那么可以使用这种语法, 让样式独立
<img src="@source/.vuepress/public/images/cssm1.png" alt="图片"></p>
<h3 id="打包字体文件" tabindex="-1"><a class="header-anchor" href="#打包字体文件" aria-hidden="true">#</a> 打包字体文件</h3>
<p><code>webpack.config.js</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
   <span class="token operator">...</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span><span class="token punctuation">[</span>
      <span class="token operator">...</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.(eot|ttf|svg|woff)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span><span class="token punctuation">[</span>
          <span class="token string">'file-loader'</span>  
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="plugins" tabindex="-1"><a class="header-anchor" href="#plugins" aria-hidden="true">#</a> Plugins</h2>
<p>可以在 <code>webpack</code> 运行到某一时刻(生命周期)的时候, 帮我们做一些事情</p>
<h3 id="htmlwebpackplugin" tabindex="-1"><a class="header-anchor" href="#htmlwebpackplugin" aria-hidden="true">#</a> HtmlWebpackPlugin</h3>
<p><code>HtmlWebpackPlugin</code> 这个插件会在打包结束后, 自动生成一个 <code>HTML</code> 文件, 并把打包生成的 <code>js</code> 文件自动引入到这个 <code>html</code> 文件中</p>
<p><a href="https://webpack.docschina.org/plugins/html-webpack-plugin/" target="_blank" rel="noopener noreferrer">HtmlWebpackPlugin 官方文档<ExternalLinkIcon/></a></p>
<p>安装</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> --save-dev html-webpack-plugin
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'html-webpack-plugin'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">'index.js'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'./dist'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">'bundle.js'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token operator">...</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>但需要做一些配置 , 配置基本的 <code>html</code> 模板</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'html-webpack-plugin'</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span><span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">'./src/index.html'</span>  <span class="token comment">// 以它为模板创建 html</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="cleanwebpackplugin" tabindex="-1"><a class="header-anchor" href="#cleanwebpackplugin" aria-hidden="true">#</a> cleanWebpackPlugin</h3>
<p>现在希望当我们重新打包的时候, 先把 <code>dist</code> 目录清除, 然后呢再进行打包</p>
<p>新版本的 <code>cleanWebpackPlugin</code> 需要用<strong>解构</strong>的形式导入 , 也<strong>不需要传入参数</strong></p>
<p>安装</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> cleanWebpackPlugin -D
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><code>webpack.config.js</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'html-webpack-plugin'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> CleanWebpackPlugin <span class="token punctuation">}</span><span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'clean-webpack-plugin'</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span><span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">template</span><span class="token operator">:</span><span class="token string">'src/index.html'</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token keyword">new</span> <span class="token class-name">CleanWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 打包之前会删除 dist 目录下的所有东西。 新版本的插件没必要传入参数</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="entry-和-output-的基础配置" tabindex="-1"><a class="header-anchor" href="#entry-和-output-的基础配置" aria-hidden="true">#</a> Entry 和 output 的基础配置</h2>
<h3 id="entry-入口文件" tabindex="-1"><a class="header-anchor" href="#entry-入口文件" aria-hidden="true">#</a> entry 入口文件</h3>
<p><a href="https://webpack.docschina.org/concepts/entry-points#root" target="_blank" rel="noopener noreferrer">单个入口（简写）语法<ExternalLinkIcon/></a>
<a href="https://webpack.docschina.org/concepts/entry-points#object-syntax" target="_blank" rel="noopener noreferrer">对象语法<ExternalLinkIcon/></a>
现在调整配置。我们将在 <code>entry</code> 里添加 <code>./src/test.js</code> 作为新的入口起点（test），然后修改 <code>output</code>，以便根据入口起点定义的名称，动态地产生 <code>bundle</code> 名称：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code> <span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

 module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">index</span><span class="token operator">:</span> <span class="token string">'./src/index.js'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">test</span><span class="token operator">:</span><span class="token string">'./src/test.js'</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">'[name]_[hash].js'</span><span class="token punctuation">,</span> 
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'dist'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token literal-property property">plugins</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span>
 <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>重新打包后看看, 会生成 2个 <code>js</code> 文件</p>
<p><img src="@source/.vuepress/public/images/entry01.png" alt="图片"></p>
<h3 id="output-构建产物输出" tabindex="-1"><a class="header-anchor" href="#output-构建产物输出" aria-hidden="true">#</a> output 构建产物输出</h3>
<p><strong>产物输出</strong></p>
<ul>
<li><code>path</code> : 产物输出路径 (必须绝对路径)</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'dist'</span><span class="token punctuation">)</span>
    <span class="token operator">...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ul>
<li><code>publicPath</code> : 按需加载或外部资源的真实路径, 默认为绝对路径
打包后的 <code>index.html</code> 中的 <code>js</code>文件希望前面多一个域名 ,例如静态资源都放入到 <code>cdn</code> 的情况下:  比如 <code>http://cdn.com.cn/main.js</code></li>
</ul>
<p>可以在 <code>output</code> 中添加 <code>publicPath</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">publicPath</span><span class="token operator">:</span><span class="token string">'http://cdn.com.cn'</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">'[name].js'</span><span class="token punctuation">,</span> 
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'dist'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><strong>文件名称相关</strong></p>
<ul>
<li><code>filename</code>: 产物输出名称</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'dist'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">'[name]_[hash].js'</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ul>
<li><code>assetModuleFilename</code> : 静态资源输出名称 (Webpack5 新特性: <code>Asset Modules</code>)</li>
<li><code>chunkFilename</code>: 非初始 <code>chunk</code> 文件名称, 比如异步引入的文件</li>
</ul>
<h2 id="source-map-的配置" tabindex="-1"><a class="header-anchor" href="#source-map-的配置" aria-hidden="true">#</a> source-map 的配置</h2>
<p><a href="https://webpack.docschina.org/configuration/devtool/" target="_blank" rel="noopener noreferrer">devtool 官方文档<ExternalLinkIcon/></a></p>
<p><code>source-map</code> 作用:
当我们打包生成的代码出错的时候, 如果不用 <code>source-map</code>, 只能知道打包之后的代码第几行出错了, 我们并不知道对应的源代码是哪里出错了, 所提我们需要使用这个 <code>source-map</code>,
帮我们生成一个源代码和打包后的代码的一个<strong>映射关系</strong></p>
<ul>
<li>先在知道打包后的的 <code>dist</code> 目录下 <code>main.js</code>  96行出错了</li>
<li><code>source-map</code> 它是一个<strong>映射关系</strong>, 他知道 <code>dist</code> 目录下 <code>main.js</code> 96行 实际上对应的是 <code>src</code> 目录下的 <code>index.js</code> 文件第一行</li>
<li>经过映射的转化之后知道, 当前其实是 <code>index.js</code> 中第一行代码出错了</li>
</ul>
<ol>
<li>
<p>可以配置 <code>devtool</code>属性改为 <code>source-map</code>, 会生成一个<code>xxx.js.map</code> 的映射的对应关系文件</p>
</li>
<li>
<p>如果配置成 <code>inline-source-map</code>, 那么 <code>xxx.js.map</code> 文件会变成 <code>base64</code> 的字符串被放到 <code>main.js</code> 的底部, 直接打包到 <code>js</code> 文件里面(合并到对应的 <code>js</code>文件中)</p>
</li>
<li>
<p><code>inline-cheap-source-map</code>: 其实如果报错信息精确哪一行, 哪一列, 哪个字符, 这样做实际上会比较耗费性能, 代码出错了我们只希望知道哪一行出错了就行了, 具体哪一行的第几列出错了没必要告诉我, 如果只加了 <code>cheap</code>, 那么可以只告诉我具体哪一行出错了,  打包的性能会有提升。 不加 <code>module</code> 只会关心自己的业务代码</p>
</li>
<li>
<p><code>cheap-module-source-map</code>: <code>module</code> 的作用 - 我不仅关自己业务代码的错误, 我还要管一些其他的 <code>loader 或 第三方模块的错误</code>, 就是这么一个区别</p>
</li>
<li>
<p><code>eval</code>: 打包速度最快, 只用 <code>eval</code> 的语句形成因涉恶关系, 但如果代码比较复杂, 提示会有可能不全面</p>
</li>
</ol>
<h4 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结:</h4>
<ul>
<li><strong>开发时</strong>: 建议使用 <code>eval-cheap-module-source-map</code>, 提示出来的错误比较全, 打包速度比较快</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token literal-property property">mode</span><span class="token operator">:</span><span class="token string">'development'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">devtool</span><span class="token operator">:</span><span class="token string">'eval-cheap-module-source-map'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul>
<li><strong>上线后</strong>:</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token literal-property property">mode</span><span class="token operator">:</span><span class="token string">'production'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">devtool</span><span class="token operator">:</span><span class="token string">'cheap-module-source-map'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="webpackdevserver" tabindex="-1"><a class="header-anchor" href="#webpackdevserver" aria-hidden="true">#</a> webpackDevServer</h2>
<p>启动一个 <code>web</code> 服务器, 监听到文件发生了改变重新帮我们打包, 自动地重新刷新浏览器</p>
<p>打包之后生成的文件不会放入到 <code>dist</code> 目录例, 而是会放到<strong>内存</strong>里面, 可以有效提升打包的速度</p>
<p>安装</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> webpack-dev-server -D
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><code>package.json</code></p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token property">"scripts"</span><span class="token operator">:</span><span class="token punctuation">{</span>
  <span class="token property">"start"</span><span class="token operator">:</span> <span class="token string">"webpack-dev-server"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><code>webpack.config.js</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports<span class="token operator">=</span><span class="token punctuation">{</span>
  <span class="token operator">...</span>
  <span class="token literal-property property">devServer</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">contentBase</span><span class="token operator">:</span><span class="token string">'./dist'</span><span class="token punctuation">,</span> 
    <span class="token literal-property property">open</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>  <span class="token comment">// 当 devServer 启动时, 自动打开浏览器, 自动访问服务器地址</span>
    <span class="token literal-property property">port</span><span class="token operator">:</span><span class="token number">8080</span>  <span class="token comment">// 默认端口</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>Vue , React 脚手架都会开启一个服务器, 通过 <code>devServer</code> 开启的</p>
<p><a href="https://webpack.docschina.org/configuration/dev-server/" target="_blank" rel="noopener noreferrer">dev-server 配置项官方文档<ExternalLinkIcon/></a></p>
<p><strong>常用配置:</strong></p>
<ol>
<li><code>client</code>: 设置用户端展示相关</li>
</ol>
<ul>
<li><code>overlay</code> : 全屏覆盖报错信息, 设置 <code>false</code> 就不会显示</li>
<li><code>progress</code>: 在浏览器中以百分比显示编译进度</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token operator">...</span>
 <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">client</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">overlay</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 关闭全屏的代码遮罩层</span>
      <span class="token literal-property property">progress</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// 半分比显示编译进度</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ol start="2">
<li><code>compress</code>: 是否启用 <code>gzip</code> , 默认 <code>true</code></li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">//...</span>
  <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">compress</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 开启 gzip 压缩</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ol start="3">
<li><code>hot</code>: 启用 webpack 的 <strong>热模块替换</strong> 特性, 默认 <code>true</code>, 可设置为 `only</li>
<li><code>open</code>: 是否自动打开浏览器</li>
<li><code>port</code>: 端口, <code>webpack5</code> 可以设置 <code>auto</code> 自动更换端口</li>
<li><code>proxy</code>: 设置代理</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">//...</span>
  <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">'/api'</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">'http://localhost:3000'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">pathRewrite</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token string-property property">'^/api'</span><span class="token operator">:</span> <span class="token string">''</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="hot-module-replacement-热模块更新" tabindex="-1"><a class="header-anchor" href="#hot-module-replacement-热模块更新" aria-hidden="true">#</a> Hot Module Replacement 热模块更新</h2>
<p>模块热替换(HMR - hot module replacement)功能会在应用程序运行过程中，替换、添加或删除 模块，而<strong>无需重新加载整个页面</strong></p>
<p>需要更新 <code>webpack-dev-server</code>配置， 然后使用 <code>webpack</code> 内置的 <code>HMR</code> 插件 -  <code>HotModuleReplacementPlugin</code></p>
<p><code>webpack.config.js</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> webpack <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'webpack'</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports<span class="token operator">=</span><span class="token punctuation">{</span>
  <span class="token operator">...</span>
  <span class="token literal-property property">devServer</span><span class="token operator">:</span><span class="token punctuation">{</span> 
    <span class="token literal-property property">contentBase</span><span class="token operator">:</span><span class="token string">'./dist'</span><span class="token punctuation">,</span> 
    <span class="token literal-property property">open</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>  <span class="token comment">// 当 devServer 启动时, 自动打开浏览器, 自动访问服务器地址</span>
    <span class="token literal-property property">port</span><span class="token operator">:</span><span class="token number">8080</span><span class="token punctuation">,</span>  <span class="token comment">// 默认端口</span>
    <span class="token literal-property property">hot</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">hotOnly</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span><span class="token punctuation">[</span>
    <span class="token operator">...</span><span class="token punctuation">,</span>
    <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>HotModuleReplacementPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">// 还要配置插件</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><br><div class="highlight-line">&nbsp;</div><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>重启命令</p>
<p><strong><code>js</code> 文件里面使用 <code>HMR</code>: <code>module.hot.accept</code></strong>
<img src="@source/.vuepress/public/images/koko1.png" alt="图片">
当 ./number 文件发生改变时, 执行后面的回调</p>
<p>其实 <code>css-loader</code> 已经帮我们实现了这种代码, 所以 <code>css</code> 就没必要写这样的代码</p>
<p><code>vue-loader</code> 也帮我们自动实现了这种功能, 所以之前用框架开发就没必要写这些代码</p>
<h2 id="babel-处理-es6-语法" tabindex="-1"><a class="header-anchor" href="#babel-处理-es6-语法" aria-hidden="true">#</a> Babel 处理 ES6 语法</h2>
<p>在<code>src/index.js</code> 使用一些 <code>ES6</code> 语法</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">]</span>

arr<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>如果打包之后如果把这些 <code>ES6</code> 的语法都转为所有浏览器都可以识别的 <code>ES5</code> 语法那就更好了, 这样就不会有问题</p>
<p>那么可以求助 <code>Babel</code> , <code>Babel</code>可以把 <code>ES6</code> 的语法转换为 <code>ES5</code></p>
<p>安装 <code>babel-loader</code> 和 <code>@babel/core</code></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> --save-dev babel-loader @babel/core
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><code>webpack.config.js</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span><span class="token punctuation">{</span>
  <span class="token operator">...</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.m?js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token comment">// 排除第三方的文件</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">"babel-loader"</span><span class="token punctuation">,</span>
          <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'@babel/preset-env'</span><span class="token punctuation">]</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>然后需要再安装 <code>@babel/preset-env</code> 这个模块, 昂我们使用 <code>babel-loader</code>处理 <code>js</code>文件的时候, <code>babel-loader</code>只是 <code>webpack</code>和 <code>babel</code>做通信的一个桥梁, 用了它它们俩就打通, 但实际上 <code>babe-loader</code>不会把 ES6 转为 ES5, 还需要借助一些其他的模块</p>
<p><code>@babel/preset-env</code> 它里面头所有 <code>ES6</code> 转 <code>ES5</code> 的语法规则</p>
<p>安装 <code>@babel/preset-env</code></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> @babel/preset-env --save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><code>webpack.config.js</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span><span class="token punctuation">{</span>
  <span class="token operator">...</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.m?js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token comment">// 排除第三方的文件</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">"babel-loader"</span><span class="token punctuation">,</span>
          <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'@babel/preset-env'</span><span class="token punctuation">]</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="认识-polyfill" tabindex="-1"><a class="header-anchor" href="#认识-polyfill" aria-hidden="true">#</a> 认识 polyfill</h2>
<p><strong>Polyfill</strong> 是什么呢？</p>
<ul>
<li>作用: <strong>会弥补低版本浏览器不存在的一些内容</strong></li>
</ul>
<p>什么时候会用到 <code>polyfill</code> 呢？</p>
<ul>
<li>比如我们使用了一些语法特性（例如：Promise, Generator, Symbol等以及实例方法例如 Array.prototype.includes 等）</li>
<li>但是某些浏览器压根不认识这些特性，必然会报错；</li>
<li>可以使用 <code>polyfill</code> 来填充或者说打一个补丁，那么就会包含该特性了</li>
</ul>
<h3 id="如何使用-polyfill" tabindex="-1"><a class="header-anchor" href="#如何使用-polyfill" aria-hidden="true">#</a> 如何使用 polyfill？</h3>
<p><code>babel7.4.0</code> 之前，可以使用 <code>@babel/polyfill</code> 的包，但是该包现在已经不推荐使用了：
<img src="@source/.vuepress/public/images/pf1.png" alt="图片">
<code>babel7.4.0</code>之后，可以通过单独引入<code>core-js和regenerator-runtime</code>来完成 polyfill 的使用：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> core-js regenerator-runtime --save
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="@source/.vuepress/public/images/pf2.png" alt="图片"></p>
<h3 id="配置-babel-config-js" tabindex="-1"><a class="header-anchor" href="#配置-babel-config-js" aria-hidden="true">#</a> 配置 babel.config.js</h3>
<p>我们需要在 <code>babel.config.js</code> 文件中进行配置，给 <code>preset-env</code> 配置一些属性：</p>
<ul>
<li><code>useBuiltIns</code>：设置以什么样的方式来使用 polyfill；</li>
<li><code>corejs</code>：设置corejs的版本，目前使用较多的是 3.x 的版本，比如我使用的是 3.8.x 的版本；
<ul>
<li>另外 corejs 可以设置是否对提议阶段的特性进行支持；</li>
<li>设置 proposals 属性为 true 即可</li>
</ul>
</li>
</ul>
<h3 id="usebuiltins-属性设置" tabindex="-1"><a class="header-anchor" href="#usebuiltins-属性设置" aria-hidden="true">#</a> useBuiltIns 属性设置</h3>
<p><strong><code>useBuiltIns</code></strong> 属性有 <strong>三个</strong> 常见的值</p>
<p>第一个值：<code>false</code></p>
<ul>
<li>打包后的文件不使用 polyfill 来进行适配；</li>
<li>并且这个时候是不需要设置 corejs 属性的；</li>
</ul>
<p>第二个值：<code>usage</code></p>
<p>引入打包后的 <code>main.js</code> 会变得非常大, 因为没有用到的所有语法转换规则都打包到了 <code>main.js</code>, 所以需要配置一下</p>
<ul>
<li>会根据源代码中出现的语言特性，自动检测所需要的 polyfill；</li>
<li>这样可以确保最终包里的 polyfill 数量的最小化，<strong>打包的包相对会小一些</strong>；</li>
<li>可以设置 corejs 属性来确定使用的 corejs 的版本</li>
</ul>
<p><img src="@source/.vuepress/public/images/pf4.png" alt="图片">
<code>babel.config.js</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span><span class="token punctuation">{</span>
    <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">[</span><span class="token string">'@babel/preset-env'</span><span class="token punctuation">,</span><span class="token punctuation">{</span>  <span class="token comment">// 中括号- 第一个参数: preset的名字, 第二个参数: 配置参数 </span>
          <span class="token literal-property property">useBuiltIns</span><span class="token operator">:</span> <span class="token string">'usage'</span> <span class="token comment">// 不是把所有的特性都加进来 , 根据我的业务代码决定要加什么</span>
      <span class="token punctuation">}</span><span class="token punctuation">]</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>第三个值：<code>entry</code></p>
<ul>
<li>如果我们依赖的某一个库本身使用了某些 polyfill 的特性，但是因为我们使用的是 usage ，所以之后用户浏览器
可能会报错；</li>
<li>所以，如果你担心出现这种情况，可以使用 entry；</li>
<li>并且需要在 <strong>入口文件 中添加</strong> <code>import 'core-js/stable'; import 'regenerator-runtime/runtime'</code>;</li>
<li>这样做会根据 browserslist 目标导入所有的 polyfill，但是对应的包也会变大</li>
</ul>
<p><img src="@source/.vuepress/public/images/bf5.png" alt="图片"></p>
</template>
