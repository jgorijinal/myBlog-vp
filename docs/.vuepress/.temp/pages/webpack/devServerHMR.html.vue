<template><h1 id="devserver-和-hmr" tabindex="-1"><a class="header-anchor" href="#devserver-和-hmr" aria-hidden="true">#</a> devServer 和 HMR</h1>
<p>目前我们开发的代码，为了运行需要有两个操作：</p>
<ul>
<li>操作一：npm run build，编译相关的代码；</li>
<li>操作二：通过live server或者直接通过浏览器，打开index.html代码，查看效果；
这个过程经常操作会影响我们的开发效率，我们希望可以做到，当文件发生变化时，可以自动的完成 编译 和 展示；</li>
</ul>
<p>为了完成自动编译，webpack提供了几种可选的方式：</p>
<ul>
<li>webpack watch mode；</li>
<li>webpack-dev-server；</li>
<li>webpack-dev-middleware</li>
</ul>
<p>一个个学一下</p>
<h2 id="webpack-watch" tabindex="-1"><a class="header-anchor" href="#webpack-watch" aria-hidden="true">#</a> Webpack watch</h2>
</template>
