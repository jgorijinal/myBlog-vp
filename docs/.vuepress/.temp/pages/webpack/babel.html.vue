<template><h1 id="babel" tabindex="-1"><a class="header-anchor" href="#babel" aria-hidden="true">#</a> babel</h1>
<p>Babel 是一个<strong>工具链</strong>，主要用于旧浏览器或者环境中将ECMAScript 2015+代码转换为向后兼容版本的JavaScript；</p>
<ul>
<li>包括：语法转换、源代码转换等</li>
</ul>
<p>babel本身可以作为一个独立的工具（和postcss一样），不和webpack等构建工具配置来单独使用。
如果我们希望在命令行尝试使用babel，需要安装如下库：</p>
<ul>
<li><strong>@babel/core</strong>：babel的核心代码，必须安装；</li>
<li><strong>@babel/cli</strong>：可以让我们在命令行使用babel；</li>
</ul>
<p><code>npm install @babel/cli @babel/core -D</code></p>
<p>使用babel来处理我们的源代码：</p>
<ul>
<li><strong>src</strong>：是源文件的目录；</li>
<li><strong>--out-dir</strong>：指定要输出的文件夹 dist；
Babel命令行使用</li>
</ul>
<p><code>npx babel src --out-dir dist</code></p>
<h2 id="插件的使用" tabindex="-1"><a class="header-anchor" href="#插件的使用" aria-hidden="true">#</a> 插件的使用</h2>
<p>比如我们需要转换箭头函数，那么我们就可以使用箭头函数转换相关的插件：</p>
<p><code>npm install @babel/plugin-transform-arrow-functions -D</code></p>
<p><code>npx babel src --out-dir dist --plugins=@babel/plugin-transform-arrow-functions</code></p>
<p>查看转换后的结果：我们会发现 const 并没有转成 var</p>
<ul>
<li>这是因为 plugin-transform-arrow-functions，并没有提供这样的功能；</li>
<li>我们需要使用 plugin-transform-block-scoping 来完成这样的功能；
插件的使用</li>
</ul>
<p><code>npm install @babel/plugin-transform-block-scoping -D</code></p>
<p><code>npx babel src --out-dir dist --plugins=@babel/plugin-transform-block-scoping,@babel/plugin-transform-arrow-functions</code></p>
<h2 id="babel-的预设-preset" tabindex="-1"><a class="header-anchor" href="#babel-的预设-preset" aria-hidden="true">#</a> Babel 的预设 preset</h2>
<p>但是如果要转换的内容过多，一个个设置是比较麻烦的，我们可以使用预设（preset）：</p>
<ul>
<li>安装@babel/preset-env预设：</li>
</ul>
<p><code>npm install @babel/preset-env -D</code></p>
<p>执行如下命令：</p>
<p><code>npx babel src --out-dir dist --presets=@babel/preset-env</code></p>
</template>
