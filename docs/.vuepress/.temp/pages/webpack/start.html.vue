<template><h1 id="webpack-基础打包" tabindex="-1"><a class="header-anchor" href="#webpack-基础打包" aria-hidden="true">#</a> webpack 基础打包</h1>
<p>webpack 是一个静态的模块化打包工具 , 为现代的JavaScript应用程序</p>
<ul>
<li><strong>打包 bundler</strong> : webpack 可以帮助我们进行打包 , 所以它是一个打包工具</li>
<li><strong>静态的 static</strong> : 这样表述的原因是最终可以将代码打包成最终的静态资源(部署到静态服务器)</li>
<li><strong>模块化 module</strong> : webpack默认支持各种模块化开发, ES Module , CommonJS , AMD 等</li>
<li><strong>现代的 modern</strong> : 正是因为前端开发面临各种各样的问题 , 才催生了webpack的出现和发展</li>
</ul>
<!-- ## Vue项目加载的文件有哪些? 
**JavaScript的打包**
* 将ES6转换成ES5
* Typescript的处理 , 将其转换成JavaScript 

**CSS的处理**
* CSS文件模块的加载 , 提取
* Less , Sass等预处理器的处理

**资源文件img , font**
* 图片img文件的加载
* 字体font文件的加载

**HTML资源的处理**
* 打包HTMl资源文件

**处理vue项目的SFC文件.vue文件** -->
<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2>
<p><img src="@source/.vuepress/public/images/wp.png" alt="图片"></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm install webpack webpack-cli -g  #全局安装
npm install webpack webpack-cli -D  #局部安装 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="webpack-的默认打包" tabindex="-1"><a class="header-anchor" href="#webpack-的默认打包" aria-hidden="true">#</a> webpack 的默认打包</h2>
<p><img src="@source/.vuepress/public/images/wm.png" alt="图片"></p>
<h2 id="创建局部的webpack" tabindex="-1"><a class="header-anchor" href="#创建局部的webpack" aria-hidden="true">#</a> 创建局部的webpack</h2>
<p><img src="@source/.vuepress/public/images/jw.png" alt="图片"></p>
<h2 id="webpack-的配置文件" tabindex="-1"><a class="header-anchor" href="#webpack-的配置文件" aria-hidden="true">#</a> webpack 的配置文件</h2>
<p><img src="@source/.vuepress/public/images/wc.png" alt="图片">
<img src="@source/.vuepress/public/images/cc.png" alt="图片"></p>
<p>据需执行 webpack 命令 , 依然可以打包  <strong><code>npm run build</code></strong></p>
<h3 id="指定配置文件" tabindex="-1"><a class="header-anchor" href="#指定配置文件" aria-hidden="true">#</a> 指定配置文件</h3>
<p>但是我们的配置文件并不是 webpack.config.js 的文件 , 而是其他名字呢?</p>
<ul>
<li>比如要把webpack.config.js 修改为 xxxxxx.config.js</li>
<li>这个时候可以通过 --config 来指定对应的配置文件
<img src="@source/.vuepress/public/images/hh.png" alt="图片"></li>
<li>但是每次这样执行命令对源码进行编译 , 会非常繁琐 , 所以可以在package.json 中增加一个新的脚本
<img src="@source/.vuepress/public/images/ccc.png" alt="图片"></li>
</ul>
<p>之后执行 npm run build 打包即可</p>
<h2 id="css-loader的使用" tabindex="-1"><a class="header-anchor" href="#css-loader的使用" aria-hidden="true">#</a> css-loader的使用</h2>
<p>小案例 : 通过 js 创建了一个元素 , 并且给他设置一些样式
<img src="@source/.vuepress/public/images/css.png" alt="图片">
<img src="@source/.vuepress/public/images/css2.png" alt="图片">
据需编译命令 <strong><code>npm run build</code></strong>
<img src="@source/.vuepress/public/images/fail.png" alt="图片"></p>
<p><img src="@source/.vuepress/public/images/cssloader.png" alt="图片"></p>
<h3 id="css-loader的使用方案" tabindex="-1"><a class="header-anchor" href="#css-loader的使用方案" aria-hidden="true">#</a> css-loader的使用方案</h3>
<p>有三种方式</p>
<ul>
<li>内联方式</li>
<li>CLI方式 (webpack5中不再使用)</li>
<li>配置方式</li>
</ul>
<ol>
<li>内联方式:  使用比较少 , 因为不方便管理</li>
</ol>
<ul>
<li>在引入样式前 , 加上使用的loader , 并且使用<code>!</code>来分割
<img src="@source/.vuepress/public/images/!l.png" alt="图片"></li>
</ul>
<ol start="2">
<li>CLI方式:</li>
</ol>
<ul>
<li>在 webpack5 的文档中已经没有了--module-bind；</li>
<li>实际应用中也比较少使用，因为不方便管理</li>
</ul>
<h3 id="loader-配置方式-掌握" tabindex="-1"><a class="header-anchor" href="#loader-配置方式-掌握" aria-hidden="true">#</a> <strong>loader 配置方式</strong>(掌握)</h3>
<p><img src="@source/.vuepress/public/images/ff.png" alt="图片"></p>
<p>loader的配置代码 :</p>
<p><img src="@source/.vuepress/public/images/ooo.png" alt="图片"></p>
<h2 id="style-loader-的配置" tabindex="-1"><a class="header-anchor" href="#style-loader-的配置" aria-hidden="true">#</a> style-loader 的配置</h2>
<p><img src="@source/.vuepress/public/images/sl.png" alt="图片"></p>
<p>style-loader 的配置:</p>
<p><img src="@source/.vuepress/public/images/sll.png" alt="图片"></p>
<h2 id="处理-less-文件" tabindex="-1"><a class="header-anchor" href="#处理-less-文件" aria-hidden="true">#</a> 处理 less 文件</h2>
<p><img src="@source/.vuepress/public/images/l1.png" alt="图片"></p>
<h3 id="less-工具处理" tabindex="-1"><a class="header-anchor" href="#less-工具处理" aria-hidden="true">#</a> less 工具处理</h3>
<p><img src="@source/.vuepress/public/images/l2.png" alt="图片"></p>
<h3 id="less-loader-处理" tabindex="-1"><a class="header-anchor" href="#less-loader-处理" aria-hidden="true">#</a> less-loader 处理</h3>
<p><img src="@source/.vuepress/public/images/l3.png" alt="图片"></p>
<h2 id="postcss" tabindex="-1"><a class="header-anchor" href="#postcss" aria-hidden="true">#</a> Postcss</h2>
<p><img src="@source/.vuepress/public/images/ps1.png" alt="图片"></p>
<h3 id="命令行使用-postcss" tabindex="-1"><a class="header-anchor" href="#命令行使用-postcss" aria-hidden="true">#</a> 命令行使用 Postcss</h3>
<p><img src="@source/.vuepress/public/images/ps2.png" alt="图片"></p>
<h3 id="插件-autoprefixer" tabindex="-1"><a class="header-anchor" href="#插件-autoprefixer" aria-hidden="true">#</a> 插件 autoprefixer</h3>
<p><img src="@source/.vuepress/public/images/ps3.png" alt="图片"></p>
<h3 id="postcss-loader" tabindex="-1"><a class="header-anchor" href="#postcss-loader" aria-hidden="true">#</a> postcss-loader</h3>
<p><img src="@source/.vuepress/public/images/ps4.png" alt="图片"></p>
<h3 id="单独的-postcss-配置文件" tabindex="-1"><a class="header-anchor" href="#单独的-postcss-配置文件" aria-hidden="true">#</a> 单独的 postcss 配置文件</h3>
<p><img src="@source/.vuepress/public/images/ps5.png" alt="图片"></p>
<h3 id="postcss-preset-env" tabindex="-1"><a class="header-anchor" href="#postcss-preset-env" aria-hidden="true">#</a> postcss-preset-env</h3>
<p><img src="@source/.vuepress/public/images/ps6.png" alt="图片"></p>
</template>
