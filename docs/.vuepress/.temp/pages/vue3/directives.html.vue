<template><h1 id="自定义指令" tabindex="-1"><a class="header-anchor" href="#自定义指令" aria-hidden="true">#</a> 自定义指令</h1>
<ul>
<li>在 Vue 中, <strong>代码的复用和抽象主要还是通过组件</strong></li>
<li>通常在某些情况下, 需要对 <strong>DOM 元素进行底层的操作</strong>, 这个时候会用到<strong>自定义指令</strong></li>
</ul>
<p>自定义指令分为</p>
<ul>
<li>自定义局部指令: 组件中通过 <strong>directives 选项</strong>, 只有在当前组件中使用</li>
<li>自定义全局指令: app的 <strong>directives 方法</strong>, 可以在任意组件中被使用</li>
</ul>
<p>实现一个非常简单的实例: <strong>让输入框挂载完成后自动获取焦点</strong></p>
<ul>
<li>
<ol>
<li>默认实现</li>
</ol>
</li>
<li>
<ol start="2">
<li>自定义一个 v-focus <strong>局部</strong>指令</li>
</ol>
</li>
<li>
<ol start="3">
<li>自定义一个 v-focus <strong>全局</strong>指令
<img src="@source/.vuepress/public/images/focus.png" alt="图片">
<img src="@source/.vuepress/public/images/focus2.png" alt="图片">
<img src="@source/.vuepress/public/images/focus3.png" alt="图片"></li>
</ol>
</li>
</ul>
<h4 id="指令的生命周期" tabindex="-1"><a class="header-anchor" href="#指令的生命周期" aria-hidden="true">#</a> 指令的生命周期</h4>
<p><img src="@source/.vuepress/public/images/directiveLife.png" alt="图片"></p>
<h4 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h4>
<p>把 bindings 打出来看看:
<img src="@source/.vuepress/public/images/b.png" alt="图片">
<img src="@source/.vuepress/public/images/dp.png" alt="图片"></p>
<h4 id="自定义指令练习" tabindex="-1"><a class="header-anchor" href="#自定义指令练习" aria-hidden="true">#</a> 自定义指令练习</h4>
<p>案例: 时间戳的显示需求</p>
<ul>
<li>在开发中, 大部分情况下服务器获取到的是时间戳</li>
<li>通过自定义指令来完成需求</li>
</ul>
<h5 id="目录结构" tabindex="-1"><a class="header-anchor" href="#目录结构" aria-hidden="true">#</a> 目录结构</h5>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>directives
|-- index.js 入口文件
|-- format-time.js 
|-- ....
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>index.js</p>
<p><img src="@source/.vuepress/public/images/dIndex.png" alt="图片"></p>
<p>format-time.js</p>
<p><img src="@source/.vuepress/public/images/fd.png" alt="图片"></p>
<p>main.js</p>
<p><img src="@source/.vuepress/public/images/md.png" alt="图片"></p>
<h5 id="实现" tabindex="-1"><a class="header-anchor" href="#实现" aria-hidden="true">#</a> 实现</h5>
<p>format-time.js
<img src="@source/.vuepress/public/images/fd3.png" alt="图片">
组件内使用:
<img src="@source/.vuepress/public/images/tfd.png" alt="图片"></p>
</template>
