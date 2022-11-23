<template><h1 id="模块化" tabindex="-1"><a class="header-anchor" href="#模块化" aria-hidden="true">#</a> 模块化</h1>
<h2 id="commonjs" tabindex="-1"><a class="header-anchor" href="#commonjs" aria-hidden="true">#</a> CommonJS</h2>
<p>Node.js 默认模块化规范, 每个文件就是一个模块, 有自己的作用域</p>
<p>Node.js 中 CommonJS 模块加载方式采用<strong>同步加载</strong>方式</p>
<p>通过 require 加载模块, 通过 exports 或 module.exports 输出模块</p>
<h4 id="特点" tabindex="-1"><a class="header-anchor" href="#特点" aria-hidden="true">#</a> <strong>特点</strong> :</h4>
<p>所有的代码都运行在模块作用域, 不会污染全局环境</p>
<p>模块可以多次加载, <strong>第一次加载时会运行模块, 模块输出结果会被缓存, 再次加载时, 会从缓存结果中直接读取模块输出结果</strong></p>
<p>模块加载的顺序, 会按照其在代码中出现的顺序</p>
<h3 id="commonjs-模块打包" tabindex="-1"><a class="header-anchor" href="#commonjs-模块打包" aria-hidden="true">#</a> CommonJS 模块打包</h3>
<p>浏览器不认识 CommonJS , 所以需要打包</p>
<p>安装 browserify</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> browserify -g
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>打包命令</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>browserify 文件夹/入口文件 -o dist/bundle.js
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>如果有多个模块, 都需要单独打包</p>
</template>
