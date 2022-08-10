<template><h1 id="包管理工具" tabindex="-1"><a class="header-anchor" href="#包管理工具" aria-hidden="true">#</a> 包管理工具</h1>
<h2 id="包管理工具-npm" tabindex="-1"><a class="header-anchor" href="#包管理工具-npm" aria-hidden="true">#</a> 包管理工具 npm</h2>
<p><strong>包管理工具npm：</strong></p>
<ul>
<li>Node Package Manager，也就是Node包管理器；</li>
<li>但是目前已经不仅仅是Node包管理器了，在前端项目中我们也在使用它来管理依赖的包；</li>
<li>比如vue、vue-router、vuex、express、koa、react、react-dom、axios、babel、webpack等等；</li>
</ul>
<p><strong>如何下载 npm工具呢?</strong></p>
<ul>
<li>npm 属于 node的一个管理工具，所以我们需要先安装Node；</li>
<li>node 管理工具：<a href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer">https://nodejs.org/en/<ExternalLinkIcon/></a></li>
</ul>
<p><strong>npm 管理的包可以在哪里查看、搜索呢？</strong></p>
<ul>
<li><a href="https://www.npmjs.org/" target="_blank" rel="noopener noreferrer">https://www.npmjs.org/<ExternalLinkIcon/></a></li>
<li>这是我们安装相关的npm包的官网；</li>
</ul>
<p><strong>npm 管理的包存放在哪里呢？</strong></p>
<ul>
<li>我们发布自己的包其实是发布到 registry 上面的；</li>
<li>当我们安装一个包时其实是从 registry 上面下载的包</li>
</ul>
<h2 id="npm-的配置文件" tabindex="-1"><a class="header-anchor" href="#npm-的配置文件" aria-hidden="true">#</a> npm 的配置文件</h2>
<p>那么对于一个项目来说，如何使用 npm 来管理这么多包呢？</p>
<ul>
<li>事实上，每一个项目都会有一个对应的<strong>配置文件</strong>，无论是前端项目（Vue、React）还是后端项目
（Node）；</li>
<li>这个配置文件会记录着你<strong>项目的名称、版本号、项目描述</strong>等；</li>
<li>也会记录着你项目所依赖的<strong>其他库的信息</strong>和<strong>依赖库的版本号</strong>；</li>
</ul>
<p><strong>这个配置文件就是 package.json</strong></p>
<p>那么这个配置文件如何得到呢？</p>
<ul>
<li>方式一：手动从零创建项目，<strong>npm init –y</strong></li>
<li>方式二：通过脚手架创建项目，脚手架会帮助我们生成 <strong>package.json</strong>，并且里面有相关的配置</li>
</ul>
<h2 id="常见的配置文件" tabindex="-1"><a class="header-anchor" href="#常见的配置文件" aria-hidden="true">#</a> 常见的配置文件</h2>
<ul>
<li><strong>npm init</strong> #创建时填写信息</li>
<li><strong>npm init</strong> -y #所有信息使用默认的</li>
</ul>
<p><img src="@source/.vuepress/public/images/npm01.png" alt="图片"></p>
<p>Vue CLI4 创建的 Vue3 项目</p>
<p><img src="@source/.vuepress/public/images/npm02.png" alt="图片"></p>
<p>create-react-app 创建的 react17 项目</p>
<p><img src="@source/.vuepress/public/images/npm03.png" alt="图片"></p>
<h2 id="常见的属性" tabindex="-1"><a class="header-anchor" href="#常见的属性" aria-hidden="true">#</a> 常见的属性</h2>
<p><strong>必须填写的属性：name、version</strong></p>
<ul>
<li>name 是项目的名称；</li>
<li>version 是当前项目的版本号；</li>
<li>description 是描述信息，很多时候是作为项目的基本描述；</li>
<li>author 是作者相关信息（发布时用到）；</li>
<li>license 是开源协议（发布时用到）；</li>
</ul>
<p><strong>private 属性：</strong></p>
<ul>
<li>private 属性记录当前的项目是否是私有的；</li>
<li>当值为 true 时，npm 是不能发布它的，这是防止私有项目或模块发布出去的方式；</li>
</ul>
<p>*** main 属性：**</p>
<ul>
<li>设置程序的入口。</li>
<li>很多人会有疑惑，webpack 不是会自动找到程序的入口吗？
<ul>
<li>这个入口和 webpack 打包的入口并不冲突；</li>
<li>它是在你发布一个模块的时候会用到的；</li>
<li>比如我们使用 axios 模块 const axios = require('axios');</li>
<li>实际上是找到对应的 main 属性查找文件的</li>
</ul>
</li>
</ul>
<p><img src="@source/.vuepress/public/images/axiosmain.png" alt="图片"></p>
<p><strong>scripts 属性:</strong></p>
<ul>
<li>scripts 属性用于配置一些脚本命令，以键值对的形式存在；</li>
<li>配置后我们可以通过 npm run 命的 key 来执行这个命令；</li>
<li>npm start 和  npm run start 的区别是什么？
<ul>
<li>对于常用的 start、 test、stop、restart 可以省略掉 run 直接通过 npm start等方式运行</li>
</ul>
</li>
</ul>
<p><strong>dependencies 属性</strong></p>
<ul>
<li>dependencies 属性是指定无论开发环境还是生成环境都需要依赖的包；</li>
<li>通常是我们项目实际开发用到的一些库模块 vue、vuex、vue-router、react、react-dom、axios 等等；</li>
<li>与之对应的是 devDependencies；</li>
</ul>
<p><strong>devDependencies 属性</strong></p>
<ul>
<li>一些包在生产环境是不需要的，比如 webpack、babel 等；</li>
<li>这个时候我们会通过 npm install webpack <strong>--save-dev</strong>，将它安装到 devDependencies 属性中</li>
</ul>
<p><strong>peerDependencies 属性</strong></p>
<ul>
<li>还有一种项目依赖关系是对等依赖，也就是你依赖的一个包，它必须是以另外一个宿主包为前提的；</li>
<li>比如 element-plus 是依赖于 vue3 的，ant design 是依赖于 react、react-dom</li>
</ul>
<p><strong>engines 属性:</strong></p>
<ul>
<li>engines 属性用于指定 Node 和 NPM 的版本号；</li>
<li>在安装的过程中，会先检查对应的引擎版本，如果不符合就会报错；</li>
<li>事实上也可以指定所在的操作系统 &quot;os&quot; : [ &quot;darwin&quot;, &quot;linux&quot; ]，只是很少用到；</li>
</ul>
<p><strong>browserslist 属性:</strong></p>
<ul>
<li>用于配置打包后的 JavaScript 浏览器的兼容情况，参考；</li>
<li>否则我们需要手动的添加 polyfills 来让支持某些语法</li>
<li>也就是说它是为 webpack 等打包工具服务的一个属性</li>
</ul>
<h2 id="依赖的版本管理" tabindex="-1"><a class="header-anchor" href="#依赖的版本管理" aria-hidden="true">#</a> 依赖的版本管理</h2>
<p>我们会发现安装的依赖版本出现：^2.0.3 或 ~2.0.3，这是什么意思呢？</p>
<p>npm的包通常需要遵从 semver 版本规范：</p>
<ul>
<li>semver：https://semver.org/lang/zh-CN/</li>
<li>npm semver：https://docs.npmjs.com/misc/semver</li>
</ul>
<p>semver版本规范是X.Y.Z：</p>
<ul>
<li>X主版本号（major）：当你做了不兼容的 API 修改（可能不兼容之前的版本）；</li>
<li>Y次版本号（minor）：当你做了向下兼容的功能性新增（新功能增加，但是兼容之前的版本）；</li>
<li>Z修订号（patch）：当你做了向下兼容的问题修正（没有新功能，修复了之前版本的bug）；</li>
</ul>
<p>我们这里解释一下 ^ 和 ~ 的区别：</p>
<ul>
<li>^x.y.z：表示 x 是保持不变的，y 和 z 永远安装最新的版本；</li>
<li>~x.y.z：表示 x 和 y 保持不变的，z 永远安装最新的版本</li>
</ul>
<h2 id="npm-install-命令" tabindex="-1"><a class="header-anchor" href="#npm-install-命令" aria-hidden="true">#</a> npm install 命令</h2>
<p>安装 npm 包分两种情况：</p>
<ul>
<li>全局安装（global install）： npm install webpack -g;</li>
<li>项目（局部）安装（local install）： npm install webpack</li>
</ul>
<p>全局安装</p>
<ul>
<li>全局安装是直接将某个包安装到全局：</li>
<li>比如 yarn 的全局安装：</li>
</ul>
<p>但是很多人对全局安装有一些误会：</p>
<ul>
<li>通常使用npm全局安装的包都是一些工具包：yarn、webpack 等；</li>
<li>并不是类似于 axios、express、koa等库文件；</li>
<li>所以全局安装了之后<strong>并不能</strong>让我们在所有的项目中使用 axios 等库</li>
</ul>
<h2 id="局部安装" tabindex="-1"><a class="header-anchor" href="#局部安装" aria-hidden="true">#</a> 局部安装</h2>
<p>项目安装会在当前目录下生产一个 node_modules 文件夹</p>
<p>局部安装分为开发时依赖和生产时依赖：</p>
<ul>
<li>
<p>安装开发和生产依赖</p>
<ul>
<li>npm install axios</li>
<li>npm i axios</li>
</ul>
</li>
<li>
<p>开发依赖</p>
<ul>
<li>npm install webpack --save-dev</li>
<li>npm install webpack -D</li>
<li>npm i webpack –D</li>
</ul>
</li>
<li>
<p>根据 package.jso 中的依赖包</p>
<ul>
<li>npm install</li>
</ul>
</li>
</ul>
<h2 id="npm-install-原理" tabindex="-1"><a class="header-anchor" href="#npm-install-原理" aria-hidden="true">#</a> npm install 原理</h2>
<p><img src="@source/.vuepress/public/images/npminstall.png" alt="图片">
npm install会检测是有package-lock.json文件：</p>
<p>没有lock文件</p>
<ul>
<li>分析依赖关系，这是因为我们可能包会依赖其他的包，并且多个包之间会产生相同依赖的情况；</li>
<li>从 registry 仓库中下载压缩包（如果我们设置了镜像，那么会从镜像服务器下载压缩包）；</li>
<li>获取到压缩包后会对压缩包进行缓存（从 npm5 开始有的）；</li>
<li>将压缩包解压到项目的 node_modules 文件夹中（ require 的查找顺序会在该包下面查找）</li>
</ul>
<p>有lock文件</p>
<ul>
<li>检测lock中包的版本是否和 package.json 中一致（会按照semver版本规范检测）；
<ul>
<li>不一致，那么会重新构建依赖关系，直接会走顶层的流程；</li>
</ul>
</li>
<li>一致的情况下，会去优先查找缓存
<ul>
<li>没有找到，会从 registry 仓库下载，直接走顶层流程；</li>
</ul>
</li>
<li>查找到，会获取缓存中的压缩文件，并且将压缩文件解压到 node_modules 文件夹中；</li>
</ul>
<h2 id="package-lock-json" tabindex="-1"><a class="header-anchor" href="#package-lock-json" aria-hidden="true">#</a> package-lock.json</h2>
<ul>
<li>package-lock.json文件解析：</li>
<li>name：项目的名称；</li>
<li>version：项目的版本；</li>
<li>lockfileVersion：lock文件的版本；</li>
<li>requires：使用requires来跟踪模块的依赖关系；</li>
<li>dependencies：项目的依赖
<ul>
<li>当前项目依赖axios，但是 axios 依赖follow-redireacts；</li>
<li>axios中的属性如下：
<ul>
<li>version表示实际安装的axios的版本；</li>
<li>resolved用来记录下载的地址，registry仓库中的位置；</li>
<li>requires记录当前模块的依赖；</li>
<li>integrity用来从缓存中获取索引，再通过索引去获取压缩包文件</li>
</ul>
</li>
</ul>
</li>
</ul>
<p><img src="@source/.vuepress/public/images/pjson.png" alt="图片"></p>
<h2 id="npm-其他命令" tabindex="-1"><a class="header-anchor" href="#npm-其他命令" aria-hidden="true">#</a> npm 其他命令</h2>
<ul>
<li>
<p>卸载某个依赖包：
npm uninstall package
npm uninstall package --save-dev
npm uninstall package -D</p>
</li>
<li>
<p>强制重新build :
npm rebuild</p>
</li>
<li>
<p>清除缓存:
npm cache clean</p>
</li>
<li>
<p>npm的命令其实是非常多的：
<a href="https://docs.npmjs.com/cli-documentation/cli" target="_blank" rel="noopener noreferrer">https://docs.npmjs.com/cli-documentation/cli<ExternalLinkIcon/></a></p>
</li>
</ul>
<h2 id="yarn工具" tabindex="-1"><a class="header-anchor" href="#yarn工具" aria-hidden="true">#</a> yarn工具</h2>
<p>另一个 node 包管理工具 yarn：</p>
<ul>
<li>yarn 是由 Facebook、Google、Exponent 和 Tilde 联合推出了一个新的 JS 包管理工具；</li>
<li>yarn 是为了弥补 npm 的一些缺陷而出现的；</li>
<li>早期的 npm 存在很多的缺陷，比如安装依赖速度很慢、版本依赖混乱等等一系列的问题；</li>
<li>虽然从 npm5 版本开始，进行了很多的升级和改进，但是依然很多人喜欢使用 yarn；</li>
</ul>
<p>yarn 和 npm 不能同时一起公用
<img src="@source/.vuepress/public/images/yarn11.png" alt="图片"></p>
<h2 id="cnpm-工具" tabindex="-1"><a class="header-anchor" href="#cnpm-工具" aria-hidden="true">#</a> cnpm 工具</h2>
<p>由于一些特殊的原因，某些情况下我们没办法很好的从 https://registry.npmjs.org下载下来一些需要的包</p>
<ul>
<li>查看 npm 镜像: npm config get registry</li>
<li>我们可以直接设置 npm 的镜像：  npm config set registry https://registry.npm.taobao.org</li>
</ul>
<p>但是对于大多数人来说，并<strong>不希望</strong>将 npm 镜像修改了：</p>
<ul>
<li>
<p>第一，不太希望随意修改 npm 原本从官方下来包的渠道；</p>
</li>
<li>
<p>第二，担心某天淘宝的镜像挂了或者不维护了，又要改来改去；</p>
</li>
<li>
<p>这个时候，我们可以使用 cnpm，并且将 cnpm 设置为淘宝的镜像：</p>
</li>
</ul>
<p>npm install -g cnpm --registry=https://registry.npm.taobao.org
cnpm config get registry # https://r.npm.taobao.org/</p>
<h2 id="npx-工具" tabindex="-1"><a class="header-anchor" href="#npx-工具" aria-hidden="true">#</a> npx 工具</h2>
<p>npx 是 npm5.2 之后自带的一个命令。</p>
<ul>
<li>npx 的作用非常多，但是比较常见的是使用它来调用项目中的某个模块的指令</li>
</ul>
<p>npx 是npm5.2之后自带的一个命令。</p>
<ul>
<li>npx 的作用非常多，但是比较常见的是使用它来调用项目中的某个模块的指令。</li>
</ul>
<p>以webpack为例：</p>
<ul>
<li>全局安装的是 webpack5.1.3</li>
<li>项目安装的是 webpack3.6.0</li>
</ul>
<p>如果我在终端执行 webpack --version使用的是哪一个命令呢？</p>
<ul>
<li>显示结果会是 webpack 5.1.3，事实上使用的是全局的，为什么呢？</li>
<li>原因非常简单，在当前目录下找不到 webpack 时，就会去全局找，并且执行命令</li>
</ul>
<h2 id="局部命令的执行" tabindex="-1"><a class="header-anchor" href="#局部命令的执行" aria-hidden="true">#</a> 局部命令的执行</h2>
<p>那么如何使用项目（局部）的webpack，常见的是两种方式：</p>
<ul>
<li>方式一：明确查找到node_module下面的webpack</li>
<li>方式二：在 scripts定义脚本，来执行webpack；</li>
</ul>
<p>方式一：在终端中使用如下命令（在项目根目录下） : ./node_modules/.bin/webpack --version</p>
<p>方式二：修改package.json中的scripts:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>"scripts": {
    "webpack": "webpack --version"
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>方式三：使用npx : <strong>npx webpack --version</strong></p>
<ul>
<li>npx 的原理非常简单，它会到当前目录的 node_modules/.bin 目录下查找对应的命令</li>
</ul>
<h2 id="npm-发布自己的包" tabindex="-1"><a class="header-anchor" href="#npm-发布自己的包" aria-hidden="true">#</a> npm 发布自己的包</h2>
<p><img src="@source/.vuepress/public/images/npmpublish.png" alt="图片"></p>
</template>
