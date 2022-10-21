<template><h1 id="plugin" tabindex="-1"><a class="header-anchor" href="#plugin" aria-hidden="true">#</a> plugin；</h1>
<p><code>loader</code> 是文件加载器</p>
<ul>
<li>功能：能够对文件进行编译、优化、混淆（压缩）等 , 用于 <strong>特定的模块类型</strong>(处理或转换某一个文件) 进行转换，比如 babel-loader , vue-loader</li>
<li>运行时机：在创建最终产物之前运行
<code>plugin</code> 是 webpack 插件</li>
<li>功能：能实现更多功能，比如定义全局变量、Code Split、加速编译等 , 打包优化、资源管理、环境变量注入...</li>
<li>运行时机：在整个打包过程（以及前后）都能运行
<img src="@source/.vuepress/public/images/plu1.png" alt="图片"></li>
</ul>
<h2 id="cleanwebpackplugin" tabindex="-1"><a class="header-anchor" href="#cleanwebpackplugin" aria-hidden="true">#</a> CleanWebpackPlugin</h2>
<p>在前面，每次修改了一些配置，重新打包时，都需要手动删除dist文件夹：</p>
<ul>
<li>可以借助于一个插件来帮助我们完成，这个插件就是 <strong><code>CleanWebpackPlugin</code></strong></li>
</ul>
<p>首先，先安装这个插件：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> clean-webpack-plugin -D
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul>
<li>之后在插件中配置：</li>
</ul>
<p><img src="@source/.vuepress/public/images/plu3.png" alt="图片"></p>
<h2 id="htmlwebpackplugin" tabindex="-1"><a class="header-anchor" href="#htmlwebpackplugin" aria-hidden="true">#</a> HtmlWebpackPlugin</h2>
<p>另外还有一个不太规范的地方：</p>
<ul>
<li>我们的 HTML 文件是编写在根目录下的，而最终打包的<strong>dist 文件夹中是没有index.html文件</strong>的</li>
<li>在<strong>进行项目部署的</strong>时，必然也是需要<strong>有对应的入口文件 index.html</strong></li>
<li>所以我们也需要对 <strong>index.html 进行打包处理</strong></li>
</ul>
<p>对 HTML 进行打包处理可以使用另外一个插件：<strong><code>HtmlWebpackPlugin</code></strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> html-webpack-plugin -D
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="@source/.vuepress/public/images/plug4.png" alt="图片"></p>
<h3 id="生成的-index-html-分析" tabindex="-1"><a class="header-anchor" href="#生成的-index-html-分析" aria-hidden="true">#</a> 生成的 index.html 分析</h3>
<p>会发现，现在自动在 dist 文件夹中，生成了一个 index.html 的文件：</p>
<ul>
<li>该文件中也自动添加了打包的 bundle.js 文件</li>
</ul>
<p><img src="@source/.vuepress/public/images/plu5.png" alt="图片"></p>
<p>这个文件是如何生成的呢？</p>
<ul>
<li>默认情况下是根据<strong>ejs 的一个模板</strong>来生成的；</li>
<li>在 html-webpack-plugin 的源码中，有一个 default_index.ejs 模块；</li>
</ul>
<h3 id="自定义-html-模板" tabindex="-1"><a class="header-anchor" href="#自定义-html-模板" aria-hidden="true">#</a> 自定义 HTML 模板</h3>
<p>如果我们想在自己的模块中加入一些比较特别的内容：</p>
<ul>
<li>比如添加一个noscript标签，在用户的JavaScript被关闭时，给予响应的提示</li>
<li>比如在<strong>开发vue或者react项目</strong>时，我们需要一个可以挂载后续组件的<strong>根标签</strong> <code>&lt;div id=&quot;app&quot;&gt;&lt;/div&gt;</code></li>
</ul>
<p>这个我们需要一个属于自己的 index.html 模块
<img src="@source/.vuepress/public/images/hp1.png" alt="图片"></p>
<h3 id="自定义模板数据填充" tabindex="-1"><a class="header-anchor" href="#自定义模板数据填充" aria-hidden="true">#</a> 自定义模板数据填充</h3>
<p>上面的代码中，会有一些类似这样的语法&lt;% 变量 %&gt;，这个是EJS模块填充数据的方式。</p>
<p>在配置 HtmlWebpackPlugin 时 ，可以添加如下配置</p>
<ul>
<li><strong>template</strong>：指定我们要使用的模块所在的路径</li>
<li><strong>title</strong>：在进行 <code>htmlWebpackPlugin.options.title</code> 读取时，就会读到该信息</li>
</ul>
<h3 id="defineplugin-的介绍" tabindex="-1"><a class="header-anchor" href="#defineplugin-的介绍" aria-hidden="true">#</a> DefinePlugin 的介绍</h3>
<p>但是，这个时候编译还是会<strong>报错</strong>，因为在我们的模块中还使用到一个 <strong><code>BASE_URL</code></strong> 的常量
<img src="@source/.vuepress/public/images/hp2.png" alt="图片"></p>
<p>这是因为在编译template模块时，有一个BASE_URL：</p>
<ul>
<li><code>&lt;link rel=&quot;icon&quot; href=&quot;&lt;%= BASE_URL %&gt;favicon.ico&quot;&gt;；</code></li>
<li>但是我们并没有设置过这个常量值，所以会出现没有定义的错误</li>
</ul>
<p>这个时候可以使用 <strong>DefinePlugin</strong> 插件</p>
<h3 id="defineplugin-的使用" tabindex="-1"><a class="header-anchor" href="#defineplugin-的使用" aria-hidden="true">#</a> DefinePlugin 的使用</h3>
<p>DefinePlugin 允许在编译时创建配置的全局常量，是一个 webpack 内置的插件（不需要单独安装）：</p>
<p><img src="@source/.vuepress/public/images/hp3.png" alt="图片"></p>
<p>这个时候，<code>npm run build</code>编译 template 就可以正确的编译了，会读取到BASE_URL的值；</p>
<p>后续还会再总结 DefinePlugin 的一些其他用法</p>
<h2 id="copywebpackplugin" tabindex="-1"><a class="header-anchor" href="#copywebpackplugin" aria-hidden="true">#</a> CopyWebpackPlugin</h2>
<p>在vue的打包过程中，如果我们将一些文件放到public的目录下，那么这个目录会被复制到dist文件夹中。</p>
<ul>
<li>这个复制的功能，我们可以使用 CopyWebpackPlugin 来完成；</li>
</ul>
<p>安装 CopyWebpackPlugin 插件：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> copy-webpack-plugin -D
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>接下来配置 CopyWebpackPlugin 即可
<img src="@source/.vuepress/public/images/hp4.png" alt="图片"></p>
<p><img src="@source/.vuepress/public/images/hp5.png" alt="图片"></p>
</template>
