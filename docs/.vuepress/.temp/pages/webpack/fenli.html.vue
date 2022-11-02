<template><h1 id="环境分离和代码分离" tabindex="-1"><a class="header-anchor" href="#环境分离和代码分离" aria-hidden="true">#</a> 环境分离和代码分离</h1>
<h2 id="如何区分开发环境" tabindex="-1"><a class="header-anchor" href="#如何区分开发环境" aria-hidden="true">#</a> 如何区分开发环境</h2>
<p>目前我们所有的webpack配置信息都是放到一个配置文件中的：webpack.config.js</p>
<ul>
<li>当配置越来越多时，这个文件会变得越来越不容易维护；</li>
<li>并且某些配置是在开发环境需要使用的，某些配置是在生成环境需要使用的，当然某些配置是在开发和生成环
境都会使用的；</li>
<li>所以，我们最好对配置进行划分，方便我们维护和管理；</li>
</ul>
<p>那么，在启动时如何可以区分不同的配置呢？</p>
<ul>
<li>方案一：编写两个不同的配置文件，开发和生成时，分别加载不同的配置文件</li>
<li>方案二：使用相同的一个入口配置文件，通过 <code>--env</code> 设置参数来区分它们；</li>
</ul>
<p><img src="@source/.vuepress/public/images/qf0.png" alt="图片">
<img src="@source/.vuepress/public/images/qf1.png" alt="图片"></p>
<h3 id="entry-入口文件解析-context-属性" tabindex="-1"><a class="header-anchor" href="#entry-入口文件解析-context-属性" aria-hidden="true">#</a> entry 入口文件解析 - context 属性</h3>
<p>我们之前编写入口文件的规则是这样的：./src/index.js，但是如果我们的配置文件所在的位置变成了 config 目录，是否应该变成 ../src/index.js呢？</p>
<ul>
<li>如果我们这样编写，会发现是报错的，依然要写成 ./src/index.js；</li>
<li>这是因为入口文件其实是和另一个属性时有关的 context；</li>
</ul>
<p>context的作用是用于解析入口（entry point）和加载器（loader）：</p>
<ul>
<li>默认是 webpack 的启动目录(package.json 中脚本中的的启动路径)</li>
<li>另外推荐在配置中传入一个值</li>
</ul>
<p><img src="@source/.vuepress/public/images/qf2.png" alt="图片"></p>
<h3 id="配置文件的分离" tabindex="-1"><a class="header-anchor" href="#配置文件的分离" aria-hidden="true">#</a> 配置文件的分离</h3>
<ul>
<li>webpack.comm.conf.js  公共</li>
<li>webpack.dev.conf.js  开发</li>
<li>webpack.prod.conf.js  生产</li>
</ul>
<p>封装 resolveApp 函数
<img src="@source/.vuepress/public/images/resolveapp1.png" alt="图片">
<img src="@source/.vuepress/public/images/resolveapp2.png" alt="图片"></p>
<h3 id="合并" tabindex="-1"><a class="header-anchor" href="#合并" aria-hidden="true">#</a> 合并</h3>
<p><strong>合并</strong>公共配置 和 开发/生产配置</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> webpack-merge -D
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>要注意 webpack 是跑在 <strong>Node 环境</strong>当中, 所以要使用 <strong>Common JS 规范导入导入</strong></p>
<p>config/webpack.dev.conf.js 要merge一下
<img src="@source/.vuepress/public/images/merge1.png" alt="图片"></p>
<p>config/webpack.prod.conf.js 当然也要merge一下</p>
<h2 id="认识代码分离" tabindex="-1"><a class="header-anchor" href="#认识代码分离" aria-hidden="true">#</a> 认识代码分离</h2>
<p>代码分离（Code Splitting）是webpack一个非常重要的特性：</p>
<ul>
<li>它主要的目的是将代码分离到不同的bundle中，之后我们可以按需加载，或者并行加载这些文件；</li>
<li>比如默认情况下，所有的JavaScript代码（业务代码、第三方依赖、暂时没有用到的模块）在首页全部都加载，
就会影响首页的加载速度；</li>
<li>代码分离可以分出出更小的bundle，以及控制资源加载优先级，提供代码的加载性能；</li>
</ul>
<p>Webpack中常用的代码分离有三种：</p>
<ul>
<li><strong>入口起点</strong>：使用entry配置手动分离代码；</li>
<li><strong>防止重复</strong>：使用Entry Dependencies或者SplitChunksPlugin去重和分离代码；</li>
<li><strong>动态导入</strong>：通过模块的内联函数调用来分离代码；</li>
</ul>
<h3 id="多入口起点" tabindex="-1"><a class="header-anchor" href="#多入口起点" aria-hidden="true">#</a> 多入口起点</h3>
<p>入口起点的含义非常简单，就是配置多入口：</p>
<ul>
<li>比如配置一个 index.js 和 main.js 的入口；</li>
<li>他们分别有自己的代码逻辑；</li>
</ul>
<p><img src="@source/.vuepress/public/images/ent1.png" alt="图片"></p>
<p>执行 npm run build 编译看看
<img src="@source/.vuepress/public/images/ent.png" alt="图片"></p>
<h3 id="entry-dependencies-入口依赖" tabindex="-1"><a class="header-anchor" href="#entry-dependencies-入口依赖" aria-hidden="true">#</a> Entry Dependencies (入口依赖)</h3>
<p>假如我们的 index.js 和 main.js 都依赖两个库：lodash、dayjs</p>
<ul>
<li>如果我们单纯的进行入口分离，那么打包后的两个 bunlde 都有会有一份 lodash 和 dayjs；</li>
<li>事实上我们可以对他们进行共享</li>
</ul>
<p><img src="@source/.vuepress/public/images/ede1.png" alt="图片"></p>
<h3 id="splitchunks" tabindex="-1"><a class="header-anchor" href="#splitchunks" aria-hidden="true">#</a> SplitChunks</h3>
<p>另外一种分包的模式是 splitChunk，它是使用SplitChunksPlugin来实现的：</p>
<ul>
<li>因为该插件 webpack 已经默认安装和集成，所以我们并不需要单独安装和直接使用该插件；</li>
<li>只需要提供 SplitChunksPlugin 相关的配置信息即可；</li>
</ul>
<p>Webpack 提供了 SplitChunksPlugin 默认的配置，我们也可以手动来修改它的配置：</p>
<ul>
<li>比如默认配置中，chunks 仅仅针对于异步（async）请求，我们可以设置为 initial(同步) 或者 all</li>
</ul>
<p><img src="@source/.vuepress/public/images/optimization1.png" alt="图片"></p>
<h3 id="splitchunks-自定义配置" tabindex="-1"><a class="header-anchor" href="#splitchunks-自定义配置" aria-hidden="true">#</a> SplitChunks 自定义配置</h3>
<p><img src="@source/.vuepress/public/images/splitchunk1.png" alt="图片">
<img src="@source/.vuepress/public/images/splitchunk2.png" alt="图片"></p>
</template>
