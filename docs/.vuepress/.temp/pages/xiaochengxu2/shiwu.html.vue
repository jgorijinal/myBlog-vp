<template><h1 id="常见失误" tabindex="-1"><a class="header-anchor" href="#常见失误" aria-hidden="true">#</a> 常见失误</h1>
<h2 id="点击-navigator-无法跳转" tabindex="-1"><a class="header-anchor" href="#点击-navigator-无法跳转" aria-hidden="true">#</a> 点击 <code>&lt;navigator&gt;</code> 无法跳转</h2>
<p>在学小程序的时候发现给 <code>&lt;navigator&gt;</code> 添加 url 跳转不过去，需要检查以下几点：</p>
<ol>
<li>url 路径是否加了 <code>/</code>, 一定必须要加</li>
<li><strong>跳转的路径必须要在 app.json 里面的 pages 配置中声明</strong> !!!!!!!!!!!!! 无论是 tabBar 页面还是 非tabBar 页面</li>
<li>tabBar页面的 open-type属性为 <strong>switchTab</strong>, 非tabBar 页面的 open-type 属性为 <strong>navigate</strong></li>
</ol>
</template>
