<template><h1 id="webpack" tabindex="-1"><a class="header-anchor" href="#webpack" aria-hidden="true">#</a> Webpack</h1>
<p>webpack is a <strong>static module bundler</strong> for <strong>modern</strong> JavaScript applications</p>
<ul>
<li>webpack 是一个静态的模块化打包工具，为现代的JavaScript应用程序；
<ul>
<li>打包 <code>bundler</code>：webpack 可以将帮助我们<strong>进行打包</strong>，所以它是一个打包工具</li>
<li>静态的 <code>static</code>：这样表述的原因是我们最终<strong>可以将代码打包成最终的静态资源</strong>（部署到静态服务器）</li>
<li>模块化 <code>module</code>：webpack 默认<strong>支持各种模块化开发</strong>，ES Module、CommonJS、AMD 等</li>
<li>现代的 <code>modern</code>：我们前端，正是因为现代前端开发面临各种各样的问题，才催生了 webpack 的出现和发展</li>
</ul>
</li>
</ul>
<p><img src="@source/.vuepress/public/images/wp1.png" alt="图片"></p>
<h2 id="安装-webpack" tabindex="-1"><a class="header-anchor" href="#安装-webpack" aria-hidden="true">#</a> 安装 Webpack</h2>
<p>webpack 的安装目前分为两个：<strong><code>webpack</code>、<code>webpack-cli</code></strong></p>
<ul>
<li>执行webpack命令，会执行node_modules下的.bin目录下的webpack；</li>
<li>webpack在执行时是依赖webpack-cli的，如果没有安装就会报错；</li>
<li>而webpack-cli中代码执行时，才是真正利用webpack进行编译和打包的过程；</li>
<li>所以在安装webpack时，我们需要同时安装webpack-cli（第三方的脚手架事实上是没有使用webpack-cli的，而是类似于
自己的vue-service-cli的东西）</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> webpack webpack-cli -g <span class="token comment"># 全局安装</span>
<span class="token function">npm</span> <span class="token function">install</span> webpack webpack-cli -D <span class="token comment"># 局部安装</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="传统开发存在的问题" tabindex="-1"><a class="header-anchor" href="#传统开发存在的问题" aria-hidden="true">#</a> 传统开发存在的问题</h2>
<p>代码存在什么问题呢？某些语法浏览器是不认识的（尤其在低版本浏览器上）</p>
<ul>
<li>1.使用了 ES6 的语法，比如 const、箭头函数等语法；</li>
<li>2.使用了 ES6 中的模块化语法；</li>
<li>3.使用 CommonJS 的模块化语法；</li>
<li>4.在通过 script 标签引入时，必须添加上 type=&quot;module&quot; 属性；</li>
</ul>
<p>显然，上面存在的问题，让我们在发布静态资源时，是不能直接发布的，因为运行在用户浏览器必然会存在各种各
样的兼容性问题。</p>
<ul>
<li>我们需要通过某个工具对其进行打包，让其转换成浏览器可以直接识别的语法</li>
</ul>
<h2 id="webpack-默认打包" tabindex="-1"><a class="header-anchor" href="#webpack-默认打包" aria-hidden="true">#</a> Webpack 默认打包</h2>
<p>可以通过webpack进行打包，之后运行打包之后的代码</p>
<ul>
<li>在目录下直接执行 <code>webpack</code> 命令</li>
</ul>
<p>生成一个 <code>dist</code> 文件夹，里面存放一个 <code>main.js</code> 的文件，就是打包之后的文件：</p>
<ul>
<li>这个文件中的代码被压缩和丑化了</li>
<li>暂时不关心他是如何做到的，后讲 webpack 实现模块化原理时再总结</li>
<li>另外发现代码中依然存在 ES6 的语法，比如箭头函数、const等，这是因为默认情况下 webpack 并不清楚</li>
<li>打包后的文件是否需要转成 ES5 之前的语法，后续我们需要通过babel来进行转换和设置；</li>
</ul>
<p>我们发现是可以正常进行打包的，但是有一个问题，webpack 是如何确定我们的入口的呢？</p>
<ul>
<li>事实上，当我们运行 webpack 时，webpack 会查找当前目录下的 <code>src/index.js</code> 作为入口；</li>
<li>所以，如果当前项目中没有存在 <code>src/index.js</code> 文件，那么会报错</li>
</ul>
<p><img src="@source/.vuepress/public/images/bab1.png" alt="图片"></p>
<h2 id="webpack-配置文件" tabindex="-1"><a class="header-anchor" href="#webpack-配置文件" aria-hidden="true">#</a> Webpack 配置文件</h2>
<p>在通常情况下，webpack 需要打包的项目是非常复杂的，并且需要一系列的配置来满足要求，默认配置必然
是不可以的</p>
<p>可以在根目录下创建一个<code>webpack.config.js</code>文件，来作为 webpack 的配置文件
<img src="@source/.vuepress/public/images/wp2.png" alt="图片"></p>
<p><img src="@source/.vuepress/public/images/wp4.png" alt="图片"></p>
<h2 id="指定配置文件" tabindex="-1"><a class="header-anchor" href="#指定配置文件" aria-hidden="true">#</a> 指定配置文件</h2>
<p>但是如果我们的配置文件<strong>并不是</strong> <code>webpack.config.js</code> 的名字，而是其他的名字呢？</p>
<ul>
<li>比如将 webpack.config.js 修改成了 <code>wk.config.js</code></li>
<li>这个时候我们可以通过 <code>--config</code> 来指定对应的配置文件；</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>webpack --config wk.config.js
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>但是每次这样执行命令来对源码进行编译，会非常繁琐，所以可以在 <code>package.json</code> 中增加一个新的脚本
<img src="@source/.vuepress/public/images/wp5.png" alt="图片"></p>
<h2 id="webpack-依赖图" tabindex="-1"><a class="header-anchor" href="#webpack-依赖图" aria-hidden="true">#</a> Webpack 依赖图</h2>
<p>webpack到底是如何对我们的项目进行打包的呢？</p>
<ul>
<li>事实上 webpack 在处理应用程序时，它会根据命令或者配置文件找到入口文件；</li>
<li>从入口开始，会生成一个 <strong>依赖关系图</strong>，这个 <strong>依赖关系图</strong> 会包含应用程序中所需的所有模块（比如.js文件、css文件、图片、
字体等）；</li>
</ul>
<p>然后遍历图结构，打包一个个模块（根据文件的不同使用不同的loader来解析）
<img src="@source/.vuepress/public/images/wpi5.png" alt="图片"></p>
<h2 id="css-loader" tabindex="-1"><a class="header-anchor" href="#css-loader" aria-hidden="true">#</a> css-loader</h2>
<h3 id="css-loader-的使用" tabindex="-1"><a class="header-anchor" href="#css-loader-的使用" aria-hidden="true">#</a> css-loader 的使用</h3>
<p>编写案例代码</p>
<p><img src="@source/.vuepress/public/images/wp01.png" alt="图片">
<img src="@source/.vuepress/public/images/wp02.png" alt="图片">
<img src="@source/.vuepress/public/images/wp05.png" alt="图片"></p>
<p><code>webpack</code>命令 打包
<img src="@source/.vuepress/public/images/wp03.png" alt="图片"></p>
<p>上面的错误信息告诉我们需要一个loader来加载这个css文件，但是loader是什么呢？</p>
<ul>
<li>loader 可以用于对<strong>模块的源代码</strong>进行转换；</li>
<li>可以将<strong>css文件也看成是一个模块</strong>，我们是<strong>通过import来加载这个模块</strong>的</li>
<li>在加载这个模块时，<strong>webpack其实并不知道如何对其进行加载</strong>，必须制定对应的 loader 来完成这个功能</li>
</ul>
<p>那么需要一个什么样的loader呢？</p>
<ul>
<li>对于加载 css 文件来说，需要一个可以读取 css 文件的 loader</li>
<li>这个 loader 最常用的是 <strong>css-loader</strong></li>
</ul>
<p><strong><code>css-loader</code> 的安装：</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> css-loader -D
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="使用方案" tabindex="-1"><a class="header-anchor" href="#使用方案" aria-hidden="true">#</a> 使用方案</h3>
<p>如何使用这个 loader 来加载 css 文件呢？有三种方式：</p>
<ul>
<li>内联方式；</li>
<li>CLI方式（webpack5中不再使用）；</li>
<li><strong>配置方式</strong></li>
</ul>
<p>内联方式：内联方式使用较少，因为不方便管理；</p>
<ul>
<li>在引入的样式前加上使用的loader，并且使用!分割；
<img src="@source/.vuepress/public/images/wp9.png" alt="图片"></li>
</ul>
<p>CLI方式</p>
<ul>
<li>在 webpack5 的文档中已经没有了--module-bind；</li>
<li>实际应用中也比较少使用，因为不方便管理；</li>
</ul>
<h3 id="loader-配置方式" tabindex="-1"><a class="header-anchor" href="#loader-配置方式" aria-hidden="true">#</a> loader 配置方式</h3>
<p>配置方式表示的意思是在我们的webpack.config.js文件中写明配置信息：</p>
<ul>
<li>
<p>module.rules 中允许我们配置多个loader（因为我们也会继续使用其他的loader，来完成其他文件的加载）；</p>
</li>
<li>
<p>这种方式可以更好的表示loader的配置，也方便后期的维护，同时也让你对各个Loader有一个全局的概览</p>
</li>
<li>
<p><strong>module.rules 的配置如下：</strong>
<img src="@source/.vuepress/public/images/ru1.png" alt="图片"></p>
</li>
</ul>
<p><strong>Loader 的配置代码</strong>:
<img src="@source/.vuepress/public/images/ru2.png" alt="图片"></p>
<h2 id="style-loader" tabindex="-1"><a class="header-anchor" href="#style-loader" aria-hidden="true">#</a> style-loader</h2>
<p>已经可以通过css-loader来加载css文件了</p>
<ul>
<li>但是会发现这个css在我们的代码中<strong>并没有生效（页面没有效果）</strong></li>
</ul>
<p>这是为什么呢？</p>
<ul>
<li>因为css-loader只是<strong>负责将.css文件进行解析</strong>，并不会将解析之后的<strong>css插入到页面</strong>中；</li>
<li>如果希望再完成插入 style 的操作，那么还需要另外一个 loader，就是 <code>style-loader</code></li>
</ul>
<p>安装 <strong>style-loader：</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> style-loader -D
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="配置-style-loader" tabindex="-1"><a class="header-anchor" href="#配置-style-loader" aria-hidden="true">#</a> 配置 style-loader</h3>
<ul>
<li>在配置文件中，添加 <code>style-loader</code></li>
<li><strong>注意</strong>：因为 loader 的执行顺序是从右向左（或者说<strong>从下到上</strong>，或者说<strong>从后到前</strong>的），所以我们<strong>需要将 style-loader 写到 css-loader 的前面</strong>
<img src="@source/.vuepress/public/images/ru3.png" alt="图片"></li>
</ul>
<p>重新执行编译 <code>npm run build</code>，可以发现打包后的 css 已经生效了</p>
<ul>
<li>当前目前 css 是通过页面内样式的方式添加进来的</li>
</ul>
<h2 id="如何处理-less-文件" tabindex="-1"><a class="header-anchor" href="#如何处理-less-文件" aria-hidden="true">#</a> 如何处理 less 文件</h2>
<p>首先，less、sass等编写的css需要通过工具转换成普通的 css</p>
<p>比如编写如下的 less 样式</p>
<p><img src="@source/.vuepress/public/images/le1.png" alt="图片"></p>
<h3 id="less工具处理" tabindex="-1"><a class="header-anchor" href="#less工具处理" aria-hidden="true">#</a> Less工具处理</h3>
<p>可以使用less工具来完成它的编译转换：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token function">less</span> -D
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>执行如下命令：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>npx <span class="token function">less</span> ./src/css/title.less <span class="token operator">></span> title.css
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="less-loader处理" tabindex="-1"><a class="header-anchor" href="#less-loader处理" aria-hidden="true">#</a> less-loader处理</h3>
<p>但是在项目中会编写大量的 css，它们如何可以自动转换呢？</p>
<ul>
<li>这个时候可以使用less-loader，来自动使用less工具转换less到css；</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> less-loader -D
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><strong>配置 webpack.config.js</strong>
<img src="@source/.vuepress/public/images/le4.png" alt="图片"></p>
<h2 id="认识-browserslist-工具" tabindex="-1"><a class="header-anchor" href="#认识-browserslist-工具" aria-hidden="true">#</a> 认识 browserslist 工具</h2>
<p>其实在很多的脚手架配置中，都能看到类似于这样的配置信息：</p>
<ul>
<li>这里的百分之一，就是指市场占有率</li>
</ul>
<p><img src="@source/.vuepress/public/images/brow1.png" alt="图片"></p>
<p>但是在哪里可以查询到浏览器的市场占有率呢？</p>
<ul>
<li>这个最好用的网站，也是我们工具通常会查询的一个网站就是 caniuse；</li>
<li><a href="https://caniuse.com/usage-table" target="_blank" rel="noopener noreferrer">https://caniuse.com/usage-table<ExternalLinkIcon/></a></li>
</ul>
<p>但是有一个问题，我们如何可以在css兼容性和js兼容性下共享我们配置的兼容性条件呢？</p>
<ul>
<li>就是当我们<strong>设置了一个条件： &gt; 1%；</strong></li>
<li>我们表达的意思是<strong>css要兼容市场占有率大于1%的浏览器，js也要兼容市场占有率大于1%的浏览器</strong>；</li>
<li>如果我们<strong>是通过工具来达到这种兼容性</strong>的，比如后面总结到的 postcss-prest-env、babel、autoprefixer等</li>
</ul>
<p>如何可以让他们共享我们的配置呢？</p>
<ul>
<li>这个问题的答案就是 Browserslist；</li>
</ul>
<p>Browserslist是什么？Browserslist是一个在不同的前端工具之间，共享目标浏览器和Node.js版本的配置：</p>
<ul>
<li><a href="https://github.com/postcss/autoprefixer" target="_blank" rel="noopener noreferrer">Autoprefixer<ExternalLinkIcon/></a></li>
<li><a href="https://github.com/babel/babel/tree/master/packages/babel-preset-env" target="_blank" rel="noopener noreferrer">Babel<ExternalLinkIcon/></a></li>
<li><a href="https://github.com/jonathantneal/postcss-preset-envs" target="_blank" rel="noopener noreferrer">postcss-preset-env<ExternalLinkIcon/></a></li>
<li><a href="https://github.com/amilajack/eslint-plugin-compat" target="_blank" rel="noopener noreferrer">eslint-plugin-compat<ExternalLinkIcon/></a></li>
<li><a href="https://github.com/ismay/stylelint-no-unsupported-browser-features" target="_blank" rel="noopener noreferrer">stylelint-no-unsupported-browser-features<ExternalLinkIcon/></a></li>
<li><a href="https://github.com/jonathantneal/postcss-normalize" target="_blank" rel="noopener noreferrer">postcss-normalize<ExternalLinkIcon/></a></li>
<li><a href="https://github.com/ElemeFE/obsolete-webpack-plugin" target="_blank" rel="noopener noreferrer">obsolete-webpack-plugin<ExternalLinkIcon/></a></li>
</ul>
<h3 id="browserslist-编写规则一" tabindex="-1"><a class="header-anchor" href="#browserslist-编写规则一" aria-hidden="true">#</a> Browserslist 编写规则一</h3>
<p><img src="@source/.vuepress/public/images/brow2.png" alt="图片"></p>
<h3 id="browserslist-编写规则二" tabindex="-1"><a class="header-anchor" href="#browserslist-编写规则二" aria-hidden="true">#</a> Browserslist 编写规则二</h3>
<p><img src="@source/.vuepress/public/images/brow3.png" alt="图片"></p>
<h3 id="命令行使用browserslist" tabindex="-1"><a class="header-anchor" href="#命令行使用browserslist" aria-hidden="true">#</a> 命令行使用browserslist</h3>
<p>可以直接通过命令来查询某些条件所匹配到的浏览器：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>npx browserslist <span class="token string">">1%, last 2 version, not dead"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="@source/.vuepress/public/images/br1.png" alt="图片"></p>
<h3 id="配置browserslist" tabindex="-1"><a class="header-anchor" href="#配置browserslist" aria-hidden="true">#</a> 配置browserslist</h3>
<p>我们如何可以配置browserslist呢？两种方案：</p>
<ul>
<li>
<p>方案一：在package.json中配置；</p>
</li>
<li>
<p>方案二：单独的一个配置文件.browserslistrc文件；</p>
</li>
<li>
<p>方案一：package.json配置：
<img src="@source/.vuepress/public/images/br2.png" alt="图片"></p>
</li>
<li>
<p>方案二：.browserslistrc 文件
<img src="@source/.vuepress/public/images/br3.png" alt="图片"></p>
</li>
</ul>
<p>记得在用脚手架创建项目时会问到要不要把配置项写到<strong>单独的文件</strong>还是放到 <strong>package.json 文件里面</strong>, 就是上面这种情况</p>
<h3 id="默认配置和条件关系" tabindex="-1"><a class="header-anchor" href="#默认配置和条件关系" aria-hidden="true">#</a> 默认配置和条件关系</h3>
<p>如果没有配置，那么也会有一个默认配置：
<img src="@source/.vuepress/public/images/br4.png" alt="图片">
我们编写了多个条件之后，多个条件之间是什么关系呢？
<img src="@source/.vuepress/public/images/br6.png" alt="图片"></p>
</template>
