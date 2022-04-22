<template><h1 id="环境配置" tabindex="-1"><a class="header-anchor" href="#环境配置" aria-hidden="true">#</a> 环境配置</h1>
<h2 id="项目中安装" tabindex="-1"><a class="header-anchor" href="#项目中安装" aria-hidden="true">#</a> 项目中安装</h2>
<p>项目中独立安装 typescript，这可以限定项目使用的 typescript 版本</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> init -y
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>安装 typescript</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> -D typescript
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>查看版本</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> tsc -v
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="编译ts" tabindex="-1"><a class="header-anchor" href="#编译ts" aria-hidden="true">#</a> 编译TS</h2>
<p>使用 tsc 命令可以将 ts 文件编译为js 文件，如果在编译过程中有 ts 错误将在命令行报出</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>tsc <span class="token number">1</span>.ts  //会编译生成 <span class="token number">1</span>.js 文件
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>每次执行命令会过于繁琐 , 可以自动监听ts 文件内容并自动生成 js 文件</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>tsc <span class="token number">1</span>.ts -w
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件" aria-hidden="true">#</a> 配置文件</h2>
<p>TS 支持对编译过程使用配置项自定义，要掌握TS 配置文件的创建与使用。</p>
<h3 id="初始化" tabindex="-1"><a class="header-anchor" href="#初始化" aria-hidden="true">#</a> 初始化</h3>
<p>创建ts.config.json</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>tsc --init
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>配置项的定义进行监测</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>tsc -w 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></template>
