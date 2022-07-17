<template><h1 id="axios的基本使用" tabindex="-1"><a class="header-anchor" href="#axios的基本使用" aria-hidden="true">#</a> axios的基本使用</h1>
<h2 id="基本使用" tabindex="-1"><a class="header-anchor" href="#基本使用" aria-hidden="true">#</a> 基本使用</h2>
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
<p><img src="@source/.vuepress/public/images/r.png" alt="图片"></p>
<p>简单实例:</p>
<p>http://123.207.32.32:8000/home/multidata
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
<li>
<p>方式一：手动修改不同的变量；</p>
</li>
<li>
<p>方式二(用得最多)：根据 process.env.NODE_ENV 的值进行区分；
<img src="@source/.vuepress/public/images/envnode.png" alt="图片"></p>
</li>
<li>
<p>方式三(也支持这种办法)：编写不同的环境变量配置文件；</p>
<p>根目录下:
<img src="@source/.vuepress/public/images/pe1.png" alt="图片">
<img src="@source/.vuepress/public/images/hhhh.png" alt="图片">
<img src="@source/.vuepress/public/images/ed.png" alt="图片">
<img src="@source/.vuepress/public/images/ep.png" alt="图片">
<img src="@source/.vuepress/public/images/et.png" alt="图片">
<img src="@source/.vuepress/public/images/999.png" alt="图片">
<img src="@source/.vuepress/public/images/et.png" alt="图片">
<img src="@source/.vuepress/public/images/oooo.png" alt="图片">
打出来看看
<img src="@source/.vuepress/public/images/pe.png" alt="图片"></p>
</li>
</ul>
</template>
