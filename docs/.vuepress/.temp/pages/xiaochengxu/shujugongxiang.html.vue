<template><h1 id="全局数据共享" tabindex="-1"><a class="header-anchor" href="#全局数据共享" aria-hidden="true">#</a> 全局数据共享</h1>
<h2 id="全局共享方案" tabindex="-1"><a class="header-anchor" href="#全局共享方案" aria-hidden="true">#</a> 全局共享方案</h2>
<p>在小程序中，可使用 <strong>mobx-miniprogram</strong> 配合 <strong>mobx-miniprogram-bindings</strong> 实现全局数据共享。其中：
⚫ mobx-miniprogram 用来<strong>创建 Store 实例对象</strong>
⚫ mobx-miniprogram-bindings 用来<strong>把 Store 中的共享数据或方法，绑定到组件或页面中使用</strong></p>
<h2 id="mobx" tabindex="-1"><a class="header-anchor" href="#mobx" aria-hidden="true">#</a> Mobx</h2>
<h3 id="安装-mobx-相关的包" tabindex="-1"><a class="header-anchor" href="#安装-mobx-相关的包" aria-hidden="true">#</a> 安装 Mobx 相关的包</h3>
<p>在项目中运行如下的命令，安装 MobX 相关的包：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm install --save mobx-miniprogram@4.13.2 mobx-miniprogram-bindings@1.2.1
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>注意：MobX 相关的包安装完毕之后，<strong>记得删除 miniprogram_npm 目录后，重新构建 npm</strong></p>
<h3 id="创建-mobx-的-store-实例" tabindex="-1"><a class="header-anchor" href="#创建-mobx-的-store-实例" aria-hidden="true">#</a> 创建 MobX 的 Store 实例</h3>
<p><img src="@source/.vuepress/public/images/mm1.png" alt="图片">
<img src="@source/.vuepress/public/images/mm2.png" alt="图片"></p>
<h3 id="将-store-中的成员绑定到-页面上" tabindex="-1"><a class="header-anchor" href="#将-store-中的成员绑定到-页面上" aria-hidden="true">#</a> 将 store 中的成员绑定到 页面上</h3>
<p><img src="@source/.vuepress/public/images/mobxbind1.png" alt="图片"></p>
<h3 id="在页面上使用-store-中的成员" tabindex="-1"><a class="header-anchor" href="#在页面上使用-store-中的成员" aria-hidden="true">#</a> 在页面上使用 Store 中的成员</h3>
<p><img src="@source/.vuepress/public/images/fff1.png" alt="图片"></p>
<h3 id="将-store-中的成员绑定到-组件上" tabindex="-1"><a class="header-anchor" href="#将-store-中的成员绑定到-组件上" aria-hidden="true">#</a> 将 store 中的成员绑定到 组件上</h3>
<p><img src="@source/.vuepress/public/images/fff2.png" alt="图片"></p>
<h3 id="在组件中使用-store-中的成员" tabindex="-1"><a class="header-anchor" href="#在组件中使用-store-中的成员" aria-hidden="true">#</a> 在组件中使用 Store 中的成员</h3>
<p><img src="@source/.vuepress/public/images/fff4.png" alt="图片"></p>
</template>
