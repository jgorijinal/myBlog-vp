<template><h1 id="webpack-实战" tabindex="-1"><a class="header-anchor" href="#webpack-实战" aria-hidden="true">#</a> webpack 实战</h1>
<h2 id="webpack-性能优化" tabindex="-1"><a class="header-anchor" href="#webpack-性能优化" aria-hidden="true">#</a> webpack 性能优化</h2>
<h3 id="提升-webpack-打包速度" tabindex="-1"><a class="header-anchor" href="#提升-webpack-打包速度" aria-hidden="true">#</a> 提升 webpack 打包速度</h3>
<ol>
<li>
<p><code>webpack</code> 版本越新，打包的效果肯定更好</p>
</li>
<li>
<p>尽可能让 <code>loader</code> 的作用范围少</p>
</li>
</ol>
<p><strong>exclude &amp; include</strong></p>
<ol>
<li><code>exclude</code>：不需要处理的文件</li>
<li><code>include</code>：需要处理的文件</li>
</ol>
<p><img src="@source/.vuepress/public/images/ude1.png" alt="图片"></p>
<p>降低 <code>loader</code> 被频发去执行的频率, 在转化或编译的过程被更少量的执行 <code>loader</code></p>
<ol start="3">
<li><code>Plugin</code> 尽可能精简并确保可靠
可以使用 <code>css-minimizer-webpack-plugin</code>这个插件对 CSS 文件进行代码的压缩，效果包括压缩、去重</li>
</ol>
<p>其实这个插件只在生产环境有用, 在开发环境下我们是不需要对代码进行压缩的, 因为在开发环境代码只需要我一个人用</p>
<ol start="4">
<li>使用 <code>DllPlugin</code> 提到打包速度</li>
</ol>
</template>
