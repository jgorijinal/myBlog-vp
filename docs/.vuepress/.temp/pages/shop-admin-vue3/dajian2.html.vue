<template><h1 id="起步" tabindex="-1"><a class="header-anchor" href="#起步" aria-hidden="true">#</a> 起步</h1>
<h2 id="和服务端交互" tabindex="-1"><a class="header-anchor" href="#和服务端交互" aria-hidden="true">#</a> 和服务端交互</h2>
<ul>
<li>基于 axios 的二次封装</li>
<li>关于接口的类型问题</li>
<li>多环境 baseURL</li>
<li>跨域处理</li>
<li>数据 mock</li>
</ul>
<h3 id="axios-的二次封装" tabindex="-1"><a class="header-anchor" href="#axios-的二次封装" aria-hidden="true">#</a> axios 的二次封装</h3>
<p>安装</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm install axios 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>为什么用 axios.create()创建出一个axios实例? 因为创建出实例, 接下来我对她做的任何一些操作都是针对与实例的, 不影响 axios 本身</p>
<p>utils/request/ts
<img src="@source/.vuepress/public/images/ax1.png" alt="图片"></p>
<p>封装 API 请求模块</p>
<p><img src="@source/.vuepress/public/images/ax2.png" alt="图片"></p>
</template>
