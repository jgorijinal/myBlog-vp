<template><h1 id="typescript-的运行环境" tabindex="-1"><a class="header-anchor" href="#typescript-的运行环境" aria-hidden="true">#</a> TypeScript 的运行环境</h1>
<ul>
<li>方式一：通过 webpack，配置本地的 TypeScript 编译环境和开启一个本地服务，可以直接运行在浏览器上</li>
<li>方式二：通过 ts-node库，为 TypeScript 的运行提供执行环境</li>
</ul>
<h2 id="webpack-配置" tabindex="-1"><a class="header-anchor" href="#webpack-配置" aria-hidden="true">#</a> webpack 配置</h2>
<p>目录结构
<img src="@source/.vuepress/public/images/mulu.png" alt="图片">
<img src="@source/.vuepress/public/images/math.png" alt="图片">
<img src="@source/.vuepress/public/images/main.png" alt="图片"></p>
<p><strong>现在来开始配置 webpack</strong></p>
<p>创建 package.json 文件</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> init
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>安装局部的webpack</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> webpack webpack-cli -D
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>package.json script脚本</p>
<p><img src="@source/.vuepress/public/images/sp.png" alt="图片"></p>
<p>根目录下创建 webpack.config.js 配置文件
<img src="@source/.vuepress/public/images/pw.png" alt="图片"></p>
<p>局部安装 ts-loader 和 typescript</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> ts-loader typescript -D
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>在配置一下 webpack.config.js
<img src="@source/.vuepress/public/images/tl.png" alt="图片">
执行 <strong><code>npm run build</code></strong> , 报错缺少 tsconfig.json 文件
<img src="@source/.vuepress/public/images/tt.png" alt="图片">
执行命令  <strong><code>tsc --init</code></strong> 生成 tsconfig.json 文件</p>
<p><img src="@source/.vuepress/public/images/ttt.png" alt="图片"></p>
<p>加上 extensions
<img src="@source/.vuepress/public/images/ext.png" alt="图片"></p>
<p>在用 webpack-dev-server 搭建本地服务</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> webpack-dev-server -D
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="@source/.vuepress/public/images/dev.png" alt="图片">
想要告诉他默认的模板是根目录下的index.html, 需要使用 html-webpack-plugin 插件
console.log(message);
安装 html-webpack-plugin 插件到根目录里</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm install html-webpack-plugin -D 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>配置html-webpack-plugin 插件
<img src="@source/.vuepress/public/images/hp.png" alt="图片"></p>
<p><img src="@source/.vuepress/public/images/dev.png" alt="图片">
然后最终执行 <code>npm run serve</code></p>
<h2 id="使用-ts-node" tabindex="-1"><a class="header-anchor" href="#使用-ts-node" aria-hidden="true">#</a> 使用 ts-node</h2>
<ul>
<li>方式二：安装 ts-node</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm install ts-node -g
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul>
<li>另外ts-node需要依赖 tslib 和 @types/node 两个包</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm install tslib @types/node -g
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul>
<li>现在，可以直接通过 ts-node 来运行TypeScript的代码</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>ts-node math.ts
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></template>
