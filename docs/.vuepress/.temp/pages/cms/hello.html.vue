<template><h1 id="axios" tabindex="-1"><a class="header-anchor" href="#axios" aria-hidden="true">#</a> axios</h1>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm install axios -D
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="基本使用" tabindex="-1"><a class="header-anchor" href="#基本使用" aria-hidden="true">#</a> 基本使用</h2>
<p>axios 的功能特点:</p>
<ul>
<li>在浏览器中发送 XMLHttpRequests 请求</li>
<li>在 node.js 中发送 http 请求</li>
<li>支持 Promise API</li>
<li>拦截请求和响应</li>
<li>转换请求和响应数据</li>
<li>等等</li>
</ul>
<h3 id="请求方式" tabindex="-1"><a class="header-anchor" href="#请求方式" aria-hidden="true">#</a> 请求方式</h3>
<p><img src="@source/.vuepress/public/images/r.png" alt="图片">
简单实例:
<img src="@source/.vuepress/public/images/axios1.png" alt="图片">
<img src="@source/.vuepress/public/images/axios2.png" alt="图片">
<img src="@source/.vuepress/public/images/axios3.png" alt="图片"></p>
<h3 id="配置选项" tabindex="-1"><a class="header-anchor" href="#配置选项" aria-hidden="true">#</a> 配置选项</h3>
<p><img src="@source/.vuepress/public/images/mem.png" alt="图片">
<img src="@source/.vuepress/public/images/aaxx.png" alt="图片"></p>
<h3 id="axios-all" tabindex="-1"><a class="header-anchor" href="#axios-all" aria-hidden="true">#</a> axios.all([])</h3>
<p><img src="@source/.vuepress/public/images/all.png" alt="图片"></p>
<h3 id="拦截器" tabindex="-1"><a class="header-anchor" href="#拦截器" aria-hidden="true">#</a> 拦截器</h3>
<p>axios 的也可以设置拦截器：拦截每次请求和响应</p>
<ul>
<li>axios.interceptors.request.use(请求成功拦截, 请求失败拦截)</li>
<li>axios.interceptors.response.use(响应成功拦截, 响应失败拦截
<img src="@source/.vuepress/public/images/ai.png" alt="图片"></li>
</ul>
<h2 id="区分不同环境" tabindex="-1"><a class="header-anchor" href="#区分不同环境" aria-hidden="true">#</a> 区分不同环境</h2>
<p>在开发中，有时候我们需要根据不同的环境设置不同的环境变量，常见的有三种环境：</p>
<ul>
<li>开发环境：development；</li>
<li>生产环境：production；</li>
<li>测试环境：test；</li>
</ul>
<p>如何区分环境变量呢？常见有三种方式：</p>
<ul>
<li>方式一 ：手动修改不同的变量</li>
<li>方式二 : 根据 process.env.NODE_ENV
<img src="@source/.vuepress/public/images/envnode.png" alt="图片"></li>
</ul>
</template>
