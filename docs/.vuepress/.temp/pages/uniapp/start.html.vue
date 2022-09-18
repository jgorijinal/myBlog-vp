<template><h1 id="起步" tabindex="-1"><a class="header-anchor" href="#起步" aria-hidden="true">#</a> 起步</h1>
<p><a href="https://uniapp.dcloud.net.cn/" target="_blank" rel="noopener noreferrer">uni-app 官方文档<ExternalLinkIcon/></a></p>
<h2 id="开发工具" tabindex="-1"><a class="header-anchor" href="#开发工具" aria-hidden="true">#</a> 开发工具</h2>
<p>uni-app 官方推荐使用 <strong>HBuilderX</strong> 来开发 uni-app 类型的项目。主要好处：</p>
<ul>
<li>模板丰富</li>
<li>完善的智能提示</li>
<li>一键运行</li>
</ul>
<h3 id="下载-hbuilderx" tabindex="-1"><a class="header-anchor" href="#下载-hbuilderx" aria-hidden="true">#</a> 下载 HBuilderX</h3>
<p><a href="https://www.dcloud.io/hbuilderx.html" target="_blank" rel="noopener noreferrer">https://www.dcloud.io/hbuilderx.html<ExternalLinkIcon/></a></p>
<h3 id="安装-scss-sass-编译" tabindex="-1"><a class="header-anchor" href="#安装-scss-sass-编译" aria-hidden="true">#</a> 安装 scss/sass 编译</h3>
<p>为了方便编写样式（例如：<code>&lt;style lang=&quot;scss&quot;&gt;&lt;/style&gt;</code>），需要安装 scss/sass 编译 插件。插件下载地址：</p>
<blockquote>
<p><a href="https://ext.dcloud.net.cn/plugin?name=compile-node-sass" target="_blank" rel="noopener noreferrer">https://ext.dcloud.net.cn/plugin?name=compile-node-sass<ExternalLinkIcon/></a></p>
</blockquote>
<p>进入插件下载页面之后，点击右上角的 <strong>使用 HBuilderX 导入插件</strong> 按钮进行自动安装
<img src="@source/.vuepress/public/images/hb1.png" alt="图片"></p>
<h3 id="快捷键方案切换" tabindex="-1"><a class="header-anchor" href="#快捷键方案切换" aria-hidden="true">#</a> 快捷键方案切换</h3>
<p>操作步骤：工具 -&gt; 预设快捷键方案切换 -&gt; VS Code</p>
<h3 id="修改编辑器的基本设置" tabindex="-1"><a class="header-anchor" href="#修改编辑器的基本设置" aria-hidden="true">#</a> 修改编辑器的基本设置</h3>
<p>操作步骤：工具 -&gt; 设置 -&gt; 打开 Settings.json 按需进行配置</p>
<p>源码视图下可用的参考配置：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>{
  "editor.colorScheme": "Default",
  "editor.fontSize": 12,
  "editor.fontFamily": "Consolas",
  "editor.fontFmyCHS": "微软雅黑 Light",
  "editor.insertSpaces": true,
  "editor.lineHeight": "1.5",
  "editor.minimap.enabled": false,
  "editor.mouseWheelZoom": true,
  "editor.onlyHighlightWord": false,
  "editor.tabSize": 2,
  "editor.wordWrap": true,
  "explorer.iconTheme": "vs-seti",
  "editor.codeassist.px2rem.enabel": false,
  "editor.codeassist.px2upx.enabel": false
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><blockquote>
<p>可以使用 Ctrl + 鼠标滚轮 缩放编辑器</p>
</blockquote>
<h2 id="新建-uni-app-项目" tabindex="-1"><a class="header-anchor" href="#新建-uni-app-项目" aria-hidden="true">#</a> 新建 uni-app 项目</h2>
<ol>
<li>
<p>文件 -&gt; 新建 -&gt; 项目
<img src="@source/.vuepress/public/images/hb2.png" alt="图片"></p>
</li>
<li>
<p>填写项目基本信息
<img src="@source/.vuepress/public/images/hb3.png" alt="图片"></p>
</li>
<li>
<p>项目创建成功</p>
</li>
</ol>
<h2 id="目录结构" tabindex="-1"><a class="header-anchor" href="#目录结构" aria-hidden="true">#</a> 目录结构</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>┌─components            uni-app组件目录
│  └─comp-a.vue         可复用的a组件
├─pages                 业务页面文件存放的目录
│  ├─index
│  │  └─index.vue       index页面
│  └─list
│     └─list.vue        list页面
├─static                存放应用引用静态资源（如图片、视频等）的目录，注意：静态资源只能存放于此
├─main.js               Vue初始化入口文件
├─App.vue               应用配置，用来配置小程序的全局样式、生命周期函数等
├─manifest.json         配置应用名称、appid、logo、版本等打包信息
└─pages.json            配置页面路径、页面窗口样式、tabBar、navigationBar 等页面类信息
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="把项目运行到微信开发者工具" tabindex="-1"><a class="header-anchor" href="#把项目运行到微信开发者工具" aria-hidden="true">#</a> 把项目运行到微信开发者工具</h2>
<ol>
<li>
<p>填写自己的微信小程序的 AppID：
<img src="@source/.vuepress/public/images/hx1.png" alt="图片"></p>
</li>
<li>
<p>在 HBuilderX 中，配置“微信开发者工具”的安装路径：
<img src="@source/.vuepress/public/images/hx2.png" alt="图片"></p>
</li>
<li>
<p>在微信开发者工具中，通过 设置 -&gt; 安全设置 面板，开启“微信开发者工具”的服务端口：
<img src="@source/.vuepress/public/images/hx3.png" alt="图片"></p>
</li>
<li>
<p>在 HBuilderX 中，点击菜单栏中的 运行 -&gt; 运行到小程序模拟器 -&gt; 微信开发者工具，将当前 uni-app 项目编译之后，自动运行到微信开发者工具中，从而方便查看项目效果与调试：
<img src="@source/.vuepress/public/images/hx4.png" alt="图片"></p>
</li>
<li>
<p>初次运行成功之后的项目效果：
<img src="@source/.vuepress/public/images/hx5.png" alt="图片"></p>
</li>
<li>
<p>取消 siteMap 烦人的警告, 不能在微信开发者而工具里修改, 必须要在 uni-app 项目中修改, 如下:
<img src="@source/.vuepress/public/images/hx6.png" alt="图片"></p>
</li>
</ol>
<h2 id="git-管理项目" tabindex="-1"><a class="header-anchor" href="#git-管理项目" aria-hidden="true">#</a> git 管理项目</h2>
<ol>
<li>在项目根目录中新建 .gitignore 忽略文件，并配置如下：</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># 忽略 node_modules 目录
/node_modules
/unpackage/dist
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><blockquote>
<p>注意：由于我们忽略了 unpackage 目录中仅有的 dist 目录，因此默认情况下， unpackage 目录不会被 Git 追踪</p>
</blockquote>
<blockquote>
<p>此时，为了让 Git 能够正常追踪 unpackage 目录，按照惯例，我们可以在 unpackage 目录下创建一个叫做 <code>.gitkeep</code> 的文件进行占位</p>
</blockquote>
<ol start="2">
<li>打开终端，切换到项目根目录中，运行如下的命令，初始化本地 Git 仓库：</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>git init
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="3">
<li>将所有文件都加入到暂存区：</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>git add .
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="4">
<li>本地提交更新：</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>git commit -m "init project"
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></template>
