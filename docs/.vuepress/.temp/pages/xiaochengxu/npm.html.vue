<template><h1 id="使用-npm-包" tabindex="-1"><a class="header-anchor" href="#使用-npm-包" aria-hidden="true">#</a> 使用 npm 包</h1>
<h2 id="小程序对-npm-的支持与限制" tabindex="-1"><a class="header-anchor" href="#小程序对-npm-的支持与限制" aria-hidden="true">#</a> 小程序对 npm 的支持与限制</h2>
<p>目前，小程序中已经支持使用 npm 安装第三方包，从而来提高小程序的开发效率。但是，在小程序中使用
npm 包有如下 3 个限制：</p>
<ul>
<li>不支持依赖于 Node.js 内置库的包</li>
<li>不支持依赖于浏览器内置对象的包</li>
<li>不支持依赖于 C++ 插件的包</li>
</ul>
<p>总结：虽然 npm 上的包有千千万，但是能供小程序使用的包却“为数不多”</p>
<h2 id="vant-weapp" tabindex="-1"><a class="header-anchor" href="#vant-weapp" aria-hidden="true">#</a> Vant Weapp</h2>
<p><a href="https://youzan.github.io/vant-weapp" target="_blank" rel="noopener noreferrer">官方文档地址<ExternalLinkIcon/></a></p>
<h3 id="安装-vant-组件库" tabindex="-1"><a class="header-anchor" href="#安装-vant-组件库" aria-hidden="true">#</a> 安装 Vant 组件库</h3>
<p><a href="https://vant-contrib.gitee.io/vant-weapp/#/quickstart" target="_blank" rel="noopener noreferrer">快速上手安装<ExternalLinkIcon/></a></p>
<ul>
<li>npm init -y</li>
<li>npm i @vant/weapp@1.3.3 -S --production</li>
<li>将 app.json 中的 <code>&quot;style&quot;: &quot;v2&quot;</code> 去除</li>
<li><img src="@source/.vuepress/public/images/goujian1.png" alt="图片"></li>
<li><img src="@source/.vuepress/public/images/goujian2.png" alt="图片"></li>
</ul>
<h3 id="使用-vant-组件" tabindex="-1"><a class="header-anchor" href="#使用-vant-组件" aria-hidden="true">#</a> 使用 Vant 组件</h3>
<p>安装完 Vant 组件库之后，可以在 <strong>app.json 的 usingComponents 节点</strong>中引入需要的组件，即可在 wxml 中
直接使用组件</p>
<p><img src="@source/.vuepress/public/images/goujian2.png" alt="图片"></p>
<h3 id="定制全局主题样式" tabindex="-1"><a class="header-anchor" href="#定制全局主题样式" aria-hidden="true">#</a> 定制全局主题样式</h3>
<p>在 app.wxss 中，写入 CSS 变量，即可对全局生效
<img src="@source/.vuepress/public/images/yss1.png" alt="图片"></p>
<p>所有可用的颜色变量，请参考 Vant 官方提供的配置文件：
<a href="https://github.com/youzan/vant-weapp/blob/dev/packages/common/style/var.less" target="_blank" rel="noopener noreferrer">Vant 样式变量<ExternalLinkIcon/></a></p>
<h2 id="api-promise-化" tabindex="-1"><a class="header-anchor" href="#api-promise-化" aria-hidden="true">#</a> API Promise 化</h2>
<p><em><strong>API Promise化</strong>，指的是通过额外的配置，将官方提供的、基于回调函数的异步 API，升级改造为基于Promise 的异步 API，从而提高代码的可读性、维护性，避免回调地狱的问题</em></p>
<h3 id="实现-api-promise化" tabindex="-1"><a class="header-anchor" href="#实现-api-promise化" aria-hidden="true">#</a> 实现 API Promise化</h3>
<p>在小程序中，实现 API Promise 化主要依赖于 <strong>miniprogram-api-promise</strong> 这个第三方的 npm 包</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm install --save miniprogram-api-promise@1.0.4
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>删除 miniprogram_npm 文件夹 , 然后点击重新构建 npm 模块
(删除后, 重新构建)<img src="@source/.vuepress/public/images/mini1.png" alt="图片"></p>
<p><a href="../.vuepress/public/images/pma1.png">图片</a></p>
<h3 id="调用-promise-化之后的异步-api" tabindex="-1"><a class="header-anchor" href="#调用-promise-化之后的异步-api" aria-hidden="true">#</a> 调用 Promise 化之后的异步 API</h3>
<p><a href="../.vuepress/public/images/pma2.png">图片</a></p>
</template>
