<template><h1 id="babel" tabindex="-1"><a class="header-anchor" href="#babel" aria-hidden="true">#</a> babel</h1>
<p>事实上，在开发中我们很少直接去接触babel，但是babel对于前端开发来说，目前是不可缺少的一部分：</p>
<ul>
<li>开发中，我们想要使用ES6+的语法，想要使用TypeScript，开发React项目，它们都是离不开Babel的；</li>
<li>所以，学习 Babel 对于我们理解代码从编写到线上的转变过程直观重要；</li>
</ul>
<p>那么，Babel 到底是什么呢？</p>
<ul>
<li>Babel 是一个工具链，主要用于旧浏览器或者缓解将 ECMAScript 2015+代码转换为向后兼容版本的 JavaScript；</li>
<li>包括：语法转换、源代码转换、Polyfill实现目标缓解缺少的功能等
<img src="@source/.vuepress/public/images/mapp1.png" alt="图片"></li>
</ul>
<h2 id="babel-命令行使用" tabindex="-1"><a class="header-anchor" href="#babel-命令行使用" aria-hidden="true">#</a> Babel 命令行使用</h2>
<p>babel本身可以作为一个独立的工具（和postcss一样），不和webpack等构建工具配置来单独使用。</p>
<p>如果我们希望在命令行尝试使用babel，需要安装如下库：</p>
<ul>
<li>@babel/core：babel的核心代码，必须安装；</li>
<li>@babel/cli：可以让我们在命令行使用babel；</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> @babel/cli @babel/core
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>使用babel来处理我们的源代码：</p>
<ul>
<li>src：是源文件的目录；</li>
<li>--out-dir：指定要输出的文件夹dist；</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>npx babel src --out-dir dist
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="插件的使用" tabindex="-1"><a class="header-anchor" href="#插件的使用" aria-hidden="true">#</a> 插件的使用</h3>
<p>比如我们需要转换箭头函数，那么我们就可以使用箭头函数转换相关的插件：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> @babel/plugin-transform-arrow-functions -D

npx babel src --out-dir dist --plugins<span class="token operator">=</span>@babel/plugin-transform-arrow-functions
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>查看转换后的结果：我们会发现 const 并没有转成 var</p>
<ul>
<li>这是因为 plugin-transform-arrow-functions，并没有提供这样的功能；</li>
<li>我们需要使用 plugin-transform-block-scoping 来完成这样的功能；</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> @babel/plugin-transform-block-scoping -D 
npx babel src --out-dir dist --plugins<span class="token operator">=</span>@babel/plugin-transform-block-scoping
,@babel/plugin-transform-arrow-functions
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="babel-的预设-preset" tabindex="-1"><a class="header-anchor" href="#babel-的预设-preset" aria-hidden="true">#</a> Babel 的预设 preset</h3>
<p>但是如果要转换的内容过多，一个个设置是比较麻烦的，我们可以使用预设（preset）：</p>
<ul>
<li>后面我们再具体来总结预设代表的含义；
安装@babel/preset-env预设：</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> @babel/preset-env -D
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>执行如下命令：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>npx babel src --out-dir dist --presets<span class="token operator">=</span>@babel/preset-env
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="babel-loader" tabindex="-1"><a class="header-anchor" href="#babel-loader" aria-hidden="true">#</a> babel-loader</h2>
<p>在实际开发中，我们通常会在构建工具中通过配置babel来对其进行使用的，比如在webpack中。</p>
<p>那么我们就需要去安装相关的依赖：</p>
<ul>
<li>如果之前已经安装了@babel/core，那么这里不需要再次安装；</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> babel-loader @babel/core
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul>
<li>我们可以设置一个规则，在加载 js 文件时，使用我们的babel
<img src="@source/.vuepress/public/images/bl1.png" alt="图片"></li>
</ul>
<h3 id="指定使用的插件" tabindex="-1"><a class="header-anchor" href="#指定使用的插件" aria-hidden="true">#</a> 指定使用的插件</h3>
<p>并且必须指定使用的插件才会生效
<img src="@source/.vuepress/public/images/bl2.png" alt="图片"></p>
<h3 id="babel-preset" tabindex="-1"><a class="header-anchor" href="#babel-preset" aria-hidden="true">#</a> babel-preset</h3>
<p>如果我们一个个去安装使用插件，那么需要手动来管理大量的babel插件，我们可以直接给webpack提供一个</p>
<ul>
<li>reset，webpack会根据我们的预设来加载对应的插件列表，并且将其传递给babel。</li>
</ul>
<p>比如常见的预设有三个：</p>
<ul>
<li>env</li>
<li>react</li>
<li>TypeScript</li>
</ul>
<p>安装 preset-env：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> @babel/preset-env
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="@source/.vuepress/public/images/bl3.png" alt="图片"></p>
<h2 id="设置目标浏览器-browserslist" tabindex="-1"><a class="header-anchor" href="#设置目标浏览器-browserslist" aria-hidden="true">#</a> 设置目标浏览器 browserslist</h2>
<p>我们最终打包的 JavaScript 代码，是需要跑在目标浏览器上的，那么如何告知babel我们的目标浏览器呢？
*-browserslist工具
*-target属性</p>
<p>之前已经使用了browserslist工具，我们可以对比一下不同的配置，打包的区别：
<img src="@source/.vuepress/public/images/bl5.png" alt="图片"></p>
<h3 id="设置目标浏览器-targets" tabindex="-1"><a class="header-anchor" href="#设置目标浏览器-targets" aria-hidden="true">#</a> 设置目标浏览器 targets</h3>
<p>我们也可以通过targets来进行配置：
<img src="@source/.vuepress/public/images/bl.png" alt="图片"></p>
<p>那么，如果两个同时配置了，哪一个会生效呢？</p>
<ul>
<li>配置的 targets 属性会覆盖 browserslist；</li>
<li>但是在开发中，更推荐通过browserslist来配置，因为类似于 postcss 工具，也会使用 browserslist，进行统一浏览器
的适配</li>
</ul>
<h2 id="babel-的配置文件" tabindex="-1"><a class="header-anchor" href="#babel-的配置文件" aria-hidden="true">#</a> Babel 的配置文件</h2>
<p>像之前一样，我们可以将babel的配置信息放到一个独立的文件中，babel给我们提供了两种配置文件的编写：</p>
<ul>
<li>babel.config.json（或者.js，.cjs，.mjs）文件；</li>
<li>.babelrc.json（或者.babelrc，.js，.cjs，.mjs）文件；</li>
</ul>
<p>它们两个有什么区别呢？目前很多的项目都采用了多包管理的方式（babel本身、element-plus、umi等）；</p>
<ul>
<li>.babelrc.json：早期使用较多的配置方式，但是对于配置Monorepos项目是比较麻烦的；</li>
<li><strong><code>babel.config.json</code></strong>（babel7）：可以直接作用于Monorepos项目的子包，更加推荐</li>
</ul>
<p><img src="@source/.vuepress/public/images/bl6.png" alt="图片"></p>
<h2 id="认识-polyfill" tabindex="-1"><a class="header-anchor" href="#认识-polyfill" aria-hidden="true">#</a> 认识 polyfill</h2>
<p><strong>Polyfill</strong> 是什么呢？</p>
<ul>
<li>翻译：一种用于衣物、床具等的聚酯填充材料, 使这些物品更加温暖舒适；</li>
<li>理解：更像是应该填充物（垫片），一个补丁，可以帮助我们更好的使用 JavaScript；</li>
</ul>
<p>什么时候会用到 polyfill 呢？</p>
<ul>
<li>比如我们使用了一些语法特性（例如：Promise, Generator, Symbol等以及实例方法例如
Array.prototype.includes 等）</li>
<li>但是某些浏览器压根不认识这些特性，必然会报错；</li>
<li>我们可以使用 polyfill 来填充或者说打一个补丁，那么就会包含该特性了</li>
</ul>
<h3 id="如何使用-polyfill" tabindex="-1"><a class="header-anchor" href="#如何使用-polyfill" aria-hidden="true">#</a> 如何使用 polyfill？</h3>
<p>babel7.4.0之前，可以使用 @babel/polyfill的包，但是该包现在已经不推荐使用了：
<img src="@source/.vuepress/public/images/pf1.png" alt="图片">
babel7.4.0之后，可以通过单独引入core-js和regenerator-runtime来完成polyfill的使用：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> core-js regenerator-runtime --save
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="@source/.vuepress/public/images/pf2.png" alt="图片"></p>
<h3 id="配置-babel-config-js" tabindex="-1"><a class="header-anchor" href="#配置-babel-config-js" aria-hidden="true">#</a> 配置 babel.config.js</h3>
<p>我们需要在 babel.config.js 文件中进行配置，给 preset-env 配置一些属性：</p>
<ul>
<li><code>useBuiltIns</code>：设置以什么样的方式来使用 polyfill；</li>
<li><code>corejs</code>：设置corejs的版本，目前使用较多的是 3.x 的版本，比如我使用的是 3.8.x 的版本；
<ul>
<li>另外 corejs 可以设置是否对提议阶段的特性进行支持；</li>
<li>设置 proposals 属性为 true 即可</li>
</ul>
</li>
</ul>
<h3 id="usebuiltins-属性设置" tabindex="-1"><a class="header-anchor" href="#usebuiltins-属性设置" aria-hidden="true">#</a> useBuiltIns 属性设置</h3>
<p><strong><code>useBuiltIns</code></strong> 属性有 <strong>三个</strong> 常见的值</p>
<p>第一个值：<code>false</code></p>
<ul>
<li>打包后的文件不使用 polyfill 来进行适配；</li>
<li>并且这个时候是不需要设置 corejs 属性的；</li>
</ul>
<p>第二个值：<code>usage</code></p>
<ul>
<li>会根据源代码中出现的语言特性，自动检测所需要的 polyfill；</li>
<li>这样可以确保最终包里的 polyfill 数量的最小化，打包的包相对会小一些；</li>
<li>可以设置 corejs 属性来确定使用的 corejs 的版本</li>
</ul>
<p><img src="@source/.vuepress/public/images/pf4.png" alt="图片"></p>
<p>第三个值：<code>entry</code></p>
<ul>
<li>如果我们依赖的某一个库本身使用了某些 polyfill 的特性，但是因为我们使用的是 usage ，所以之后用户浏览器
可能会报错；</li>
<li>所以，如果你担心出现这种情况，可以使用 entry；</li>
<li>并且需要在 <strong>入口文件 中添加</strong> <code>import 'core-js/stable'; import 'regenerator-runtime/runtime'</code>;</li>
<li>这样做会根据 browserslist 目标导入所有的 polyfill，但是对应的包也会变大</li>
</ul>
<p><img src="@source/.vuepress/public/images/bf5.png" alt="图片"></p>
<h2 id="认识plugin-transform-runtime-了解" tabindex="-1"><a class="header-anchor" href="#认识plugin-transform-runtime-了解" aria-hidden="true">#</a> 认识Plugin-transform-runtime（了解）</h2>
<p>在前面我们使用的 polyfill，默认情况是添加的所有特性都是全局的</p>
<ul>
<li>如果我们正在编写一个工具库，这个工具库需要使用polyfill；</li>
<li>别人在使用我们工具时，工具库通过polyfill添加的特性，可能会污染它们的代码；</li>
<li>所以，当编写工具时，babel更推荐我们使用一个插件： @babel/plugin-transform-runtime来完成polyfill
的功能</li>
</ul>
<h3 id="使用plugin-transform-runtime" tabindex="-1"><a class="header-anchor" href="#使用plugin-transform-runtime" aria-hidden="true">#</a> 使用Plugin-transform-runtime</h3>
<p>安装 <code>@babel/plugin-transform-runtime</code>：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> @babel/plugin-transform-runtime -D
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>使用 plugins 来配置 <strong>babel.config.js</strong>：</p>
<p><img src="@source/.vuepress/public/images/pf6.png" alt="图片"></p>
<h2 id="react-的-jsx-支持" tabindex="-1"><a class="header-anchor" href="#react-的-jsx-支持" aria-hidden="true">#</a> React 的 jsx 支持</h2>
<p>在我们编写react代码时，react使用的语法是jsx，jsx是可以直接使用babel来转换的。</p>
<p>对 react jsx代码进行处理需要如下的插件：</p>
<ul>
<li>@babel/plugin-syntax-jsx</li>
<li>@babel/plugin-transform-react-jsx</li>
<li>@babel/plugin-transform-react-display-name</li>
</ul>
<p>但是开发中，我们并不需要一个个去安装这些插件，我们依然可以使用preset来配置</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> @babel/preset-react -D
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="@source/.vuepress/public/images/pf7.png" alt="图片"></p>
<h2 id="typescript-的编译" tabindex="-1"><a class="header-anchor" href="#typescript-的编译" aria-hidden="true">#</a> TypeScript 的编译</h2>
<p>在项目开发中，我们会使用TypeScript来开发，那么TypeScript代码是需要转换成JavaScript代码。
n 可以通过TypeScript的compiler来转换成JavaScript：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> typescript -D
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>n 另外 TypeScript 的编译配置信息我们通常会编写一个tsconfig.json文件：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>tsc --init
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>n 生成配置文件如下：
<img src="@source/.vuepress/public/images/ttss1.png" alt="图片">
n 之后我们可以运行 npx tsc来编译自己的ts代码：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>npx tsc
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="使用-ts-loader" tabindex="-1"><a class="header-anchor" href="#使用-ts-loader" aria-hidden="true">#</a> 使用 ts-loader</h3>
<p>如果我们希望在webpack中使用TypeScript，那么我们可以使用ts-loader来处理ts文件：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> ts-loader -D
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul>
<li>配置ts-loader</li>
</ul>
<p><img src="@source/.vuepress/public/images/tsl1.png" alt="图片"></p>
<h3 id="babel-loader-1" tabindex="-1"><a class="header-anchor" href="#babel-loader-1" aria-hidden="true">#</a> babel-loader</h3>
<p>除了可以使用TypeScript Compiler来编译TypeScript之外，我们也可以使用Babel：</p>
<ul>
<li>Babel是有对TypeScript进行支持；</li>
<li>我们可以使用插件： @babel/tranform-typescript；</li>
<li>但是更推荐直接使用preset：@babel/preset-typescript；</li>
</ul>
<p>我们来安装 <code>@babel/preset-typescript</code></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> @babel/preset-typescript -D
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="@source/.vuepress/public/images/bs1.png" alt="图片"></p>
<h3 id="ts-loader-和-babel-loader-选择" tabindex="-1"><a class="header-anchor" href="#ts-loader-和-babel-loader-选择" aria-hidden="true">#</a> ts-loader 和 babel-loader 选择</h3>
<p>那么我们在开发中应该选择ts-loader还是babel-loader呢？</p>
<p>使用 ts-loader（TypeScript Compiler）</p>
<ul>
<li>来直接编译 TypeScript，那么只能将ts转换成js；</li>
<li>如果我们还希望在这个过程中添加对应的 polyfill，那么 ts-loader 是无能为力的；</li>
<li>我们需要借助于 babel 来完成 polyfill 的填充功能；</li>
</ul>
<p>使用 babel-loader（Babel）</p>
<ul>
<li>来直接编译 TypeScript，也可以将ts转换成js，并且可以实现polyfill的功能；</li>
<li>但是 babel-loader 在编译的过程中，不会对类型错误进行检测</li>
</ul>
<h3 id="编译-typescript-最佳实践" tabindex="-1"><a class="header-anchor" href="#编译-typescript-最佳实践" aria-hidden="true">#</a> 编译 TypeScript 最佳实践</h3>
<p>我们使用 Babel 来完成代码的转换，使用 tsc 来进行类型的检查。</p>
<p>但是，如何可以使用tsc来进行类型的检查呢？</p>
<ul>
<li>在这里，我在scripts中添加了两个脚本，用于类型检查；</li>
<li>我们执行 npm run type-check 可以对 ts 代码的类型进行检测；</li>
<li>我们执行 npm run type-check-watch 可以实时的检测类型错误；</li>
</ul>
<p><img src="@source/.vuepress/public/images/tsc2.png" alt="图片"></p>
<h2 id="webpack中配置vue加载" tabindex="-1"><a class="header-anchor" href="#webpack中配置vue加载" aria-hidden="true">#</a> Webpack中配置vue加载</h2>
<ul>
<li>安装相关的依赖：</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> vue-loader -D

<span class="token function">npm</span> <span class="token function">install</span> vue-template-compiler -D
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul>
<li>配置 webpack</li>
</ul>
<p><img src="@source/.vuepress/public/images/wv1.png" alt="图片"></p>
</template>
