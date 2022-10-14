<template><h1 id="webpack" tabindex="-1"><a class="header-anchor" href="#webpack" aria-hidden="true">#</a> webpack</h1>
<h2 id="认识-postcss-工具" tabindex="-1"><a class="header-anchor" href="#认识-postcss-工具" aria-hidden="true">#</a> 认识 PostCSS 工具</h2>
<p>什么是PostCSS呢？</p>
<ul>
<li>PostCSS是一个通过<strong>JavaScript</strong>来<strong>转换样式的工具</strong>；</li>
<li>这个工具可以帮助我们进行一些<strong>CSS的转换和适配</strong>，比如<strong>自动添加浏览器前缀、css样式的重置；</strong></li>
<li>但是实现这些工具，我们需要借助于 PostCSS 对应的插件；</li>
</ul>
<p>如何使用PostCSS呢？主要就是两个步骤：</p>
<ul>
<li>第一步：查找 PostCSS 在构建工具中的扩展，比如 webpack 中的 postcss-loader；</li>
<li>第二步：选择可以添加你需要的 PostCSS 相关的插件；</li>
</ul>
<h3 id="命令行使用-postcss" tabindex="-1"><a class="header-anchor" href="#命令行使用-postcss" aria-hidden="true">#</a> 命令行使用 postcss</h3>
<p>当然，能不能也直接在终端使用PostCSS呢？</p>
<ul>
<li>也是可以的，但是我们需要单独安装一个工具postcss-cli；</li>
</ul>
<p>可以安装一下它们：postcss、postcss-cli</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> postcss -D

<span class="token function">npm</span> <span class="token function">install</span> postcss-cli -D
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>编写一个需要添加前缀的css：</p>
<p><img src="@source/.vuepress/public/images/pcss1.png" alt="图片"></p>
<h3 id="插件autoprefixer" tabindex="-1"><a class="header-anchor" href="#插件autoprefixer" aria-hidden="true">#</a> 插件autoprefixer</h3>
<p>因为我们需要添加前缀，所以要安装autoprefixer：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> autoprefixer -D
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>直接使用使用postcss工具，并且制定使用autoprefixer</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>npx postcss --use autoprefixer -o end.css ./src/css/style.css
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>转化之后的css样式如下</p>
<p><img src="@source/.vuepress/public/images/autop1.png" alt="图片"></p>
<h3 id="postcss-loader" tabindex="-1"><a class="header-anchor" href="#postcss-loader" aria-hidden="true">#</a> postcss-loader</h3>
<p>真实开发中我们必然不会直接使用命令行工具来对 css 进行处理，而是要<code>npm run build</code> , 借助于webpack构建工具打包时处理：</p>
<ul>
<li><strong>在webpack中使用postcss 就是使用postcss-loader来处理的</strong></li>
</ul>
<p>来安装postcss-loader：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> postcss-loader -D
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>修改加载css的loader：</p>
<ul>
<li>注意：<strong>因为 postcss 需要有对应的插件(autoprefixer)才会起效果，所以我们需要配置它的 plugin</strong></li>
</ul>
<p><img src="@source/.vuepress/public/images/autop2.png" alt="图片"></p>
<h3 id="单独的-postcss-配置文件" tabindex="-1"><a class="header-anchor" href="#单独的-postcss-配置文件" aria-hidden="true">#</a> 单独的 postcss 配置文件</h3>
<p>当然，我们也可以将这些配置信息放到<strong>一个单独的文件</strong>中进行管理：</p>
<ul>
<li>在根目录下创建 <code>postcss.config.js</code></li>
</ul>
<p><img src="@source/.vuepress/public/images/postc1.png" alt="图片"></p>
<h3 id="postcss-preset-env" tabindex="-1"><a class="header-anchor" href="#postcss-preset-env" aria-hidden="true">#</a> postcss-preset-env</h3>
<p>事实上，在配置 postcss-loader 时，我们配置插件并不需要使用 autoprefixer</p>
<p>我们可以使用另外一个插件：<strong><code>postcss-preset-env</code></strong></p>
<ul>
<li><code>postcss-preset-env</code> 也是一个 postcss 的插件；</li>
<li>它可以帮助我们将一些现代的CSS特性，转成大多数浏览器认识的CSS，并且会根据目标浏览器或者运行时环
境添加所需的polyfill；</li>
<li>也包括会自动帮助我们添加 autoprefixer（所以相当于已经内置了autoprefixer）；</li>
</ul>
<p>首先，我们需要安装postcss-preset-env：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> postcss-preset-env -D
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>之后，我们直接修改掉之前的 autoprefixer 即可
<img src="@source/.vuepress/public/images/penv1.png" alt="图片"></p>
<p>注意：我们在使用某些postcss插件时，<code>postcss.config.js</code>文件 也可以直接传入字符串
<img src="@source/.vuepress/public/images/penv2.png" alt="图片"></p>
<h3 id="css-loader的-importloaders-属性" tabindex="-1"><a class="header-anchor" href="#css-loader的-importloaders-属性" aria-hidden="true">#</a> css-loader的 importLoaders 属性</h3>
<p><img src="@source/.vuepress/public/images/clcl1.png" alt="图片"></p>
<h2 id="file-loader" tabindex="-1"><a class="header-anchor" href="#file-loader" aria-hidden="true">#</a> file-loader</h2>
<p>比较常见的使用图片的方式是两种：</p>
<ul>
<li><strong>img 元素</strong>，设置 src 属性；</li>
<li><strong>其他元素</strong>（比如div），设置background-image的css属性</li>
</ul>
<p><img src="@source/.vuepress/public/images/filel3.png" alt="图片"></p>
<p>要处理 jpg、png 等格式的图片，也需要有对应的loader：<code>file-loader</code></p>
<ul>
<li>file-loader 的作用就是帮助我们处理 <strong>import/require()方式</strong>引入的一个文件资源，并且会将它放到我们<strong>输出的文件夹</strong>中；</li>
<li>待会儿总结如何修改它的名字和所在文件夹；</li>
</ul>
<p>安装 file-loader：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> file-loader -D
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>配置处理图片的Rule：
<img src="@source/.vuepress/public/images/filel2.png" alt="图片"></p>
<h2 id="文件的名称规则" tabindex="-1"><a class="header-anchor" href="#文件的名称规则" aria-hidden="true">#</a> 文件的名称规则</h2>
<p>有时候我们处理后的 <strong>文件名称</strong> 按照一定的规则进行显示：</p>
<ul>
<li>比如保留原来的 <strong>文件名、扩展名</strong>，同时为了防止重复，包含一个 <strong>hash 值</strong>等；</li>
</ul>
<p>这个时候我们可以使用PlaceHolders来完成，webpack给我们提供了大量的PlaceHolders来显示不同的内容：</p>
<ul>
<li><a href="https://webpack.js.org/loaders/file-loader/#placeholders" target="_blank" rel="noopener noreferrer">https://webpack.js.org/loaders/file-loader/#placeholders<ExternalLinkIcon/></a></li>
<li>可以在文档中查阅自己需要的 placeholder；</li>
</ul>
<p>这里给几个最常用的placeholder
<img src="@source/.vuepress/public/images/ph1.png" alt="图片"></p>
<h3 id="设置文件名称" tabindex="-1"><a class="header-anchor" href="#设置文件名称" aria-hidden="true">#</a> 设置文件名称</h3>
<p>那么我们可以按照如下的格式编写：</p>
<ul>
<li>这个也是vue的写法；</li>
</ul>
<p><img src="@source/.vuepress/public/images/ph2.png" alt="图片"></p>
<h3 id="设置文件的存放路径" tabindex="-1"><a class="header-anchor" href="#设置文件的存放路径" aria-hidden="true">#</a> 设置文件的存放路径</h3>
<p>当然，刚才通过 <code>img/</code> 已经设置了文件夹，这个也是 vue、react脚手架中常见的设置方式：</p>
<ul>
<li>其实按照这种设置方式就可以了；</li>
<li>当然我们也可以通过 <strong>outputPath</strong> 来设置输出的文件夹；</li>
</ul>
<p><img src="@source/.vuepress/public/images/ph3.png" alt="图片"></p>
<h2 id="url-loader" tabindex="-1"><a class="header-anchor" href="#url-loader" aria-hidden="true">#</a> url-loader</h2>
<p>url-loader和file-loader的工作方式是相似的，但是可以将较小的文件，转成 <strong>base64的URI</strong></p>
<p>安装 url-loader：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> url-loader -D
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="@source/.vuepress/public/images/urll1.png" alt="图片"></p>
<p>显示结果是一样的，并且图片可以正常显示；</p>
<p>但是在dist文件夹中，我们会看不到图片文件：</p>
<ul>
<li>这是因为我的两张图片的大小分别是38kb和295kb；</li>
<li>默认情况下 url-loader 会将所有的图片文件转成base64编码</li>
</ul>
<h3 id="url-loader-的-limit" tabindex="-1"><a class="header-anchor" href="#url-loader-的-limit" aria-hidden="true">#</a> url-loader 的 limit</h3>
<p>但是开发中我们往往是<strong>小的图片需要转换</strong>，<strong>但是大的图片直接使用图片即可</strong></p>
<ul>
<li>这是因为<strong>小的图片转换base64之后</strong>可以<strong>和页面一起被请求，减少不必要的请求过程；</strong></li>
<li>而<strong>大的图片也进行转换</strong>，反而会<strong>影响页面的请求速度</strong></li>
</ul>
<p>那么，我们如何可以限制哪些大小的图片转换和不转换呢？</p>
<ul>
<li>url-loader有一个options属性 <strong>limit</strong>，可以用于设置转换的限制；</li>
<li>下面的代码38kb (<strong>&lt; 100kb</strong>)的图片会进行 base64 编码，而295kb的不会
<img src="@source/.vuepress/public/images/urll3.png" alt="图片"></li>
</ul>
<h2 id="asset-module-type-的介绍" tabindex="-1"><a class="header-anchor" href="#asset-module-type-的介绍" aria-hidden="true">#</a> asset module type 的介绍</h2>
<p>当前使用的webpack版本是webpack5：</p>
<ul>
<li>在 webpack5之前，加载这些资源我们需要使用一些 loader，比如raw-loader 、url-loader、file-loader；</li>
<li>在 webpack5之后，我们可以直接使用资源模块类型 **（asset module type）**来替代上面的这些 loader</li>
</ul>
<p><strong>资源模块类型(asset module type)</strong>，通过添加 4 种新的模块类型，来替换所有这些 loader：
<img src="@source/.vuepress/public/images/am1.png" alt="图片"></p>
<h3 id="asset-module-type的使用" tabindex="-1"><a class="header-anchor" href="#asset-module-type的使用" aria-hidden="true">#</a> asset module type的使用</h3>
<p>比如加载图片，之前使用的是 file-loader 或者 url-loader , 但还可以使用下面的方式
<img src="@source/.vuepress/public/images/am2.png" alt="图片"></p>
<p>但是，如何可以自定义文件的<strong>输出路径</strong>和<strong>文件名</strong>呢？</p>
<ul>
<li>方式一：修改 output 中，添加 <code>assetModuleFilename</code> 属性；
<img src="@source/.vuepress/public/images/am3.png" alt="图片"></li>
</ul>
<p>通常不用这种方法, 因为在这里设置的话 所有 asset module type 都会遵循这个规则, 所以不合理</p>
<ul>
<li><strong>方式二：</strong> 在 Rule 中，添加一个 <code>generator</code> 属性，并且设置 <code>filename</code>
<img src="@source/.vuepress/public/images/am4.png" alt="图片"></li>
</ul>
<h3 id="url-loader的-limit-效果" tabindex="-1"><a class="header-anchor" href="#url-loader的-limit-效果" aria-hidden="true">#</a> url-loader的 limit 效果</h3>
<p>我们需要两个步骤来实现：</p>
<ul>
<li>步骤一：将 type 修改为 asset；</li>
<li>步骤二：添加一个 <code>parser</code> 属性，并且制定 <code>dataUrl</code> 的条件，添加 <code>maxSize</code> 属性</li>
</ul>
<p><img src="@source/.vuepress/public/images/am5.png" alt="图片"></p>
<h2 id="加载字体文件" tabindex="-1"><a class="header-anchor" href="#加载字体文件" aria-hidden="true">#</a> 加载字体文件</h2>
<p>如果我们需要使用某些特殊的字体或者字体图标，那么我们会引入很多字体相关的文件，这些文件的处理也是一样
的</p>
<p>首先，从阿里图标库中下载了几个字体图标：
<img src="@source/.vuepress/public/images/fon1.png" alt="图片"></p>
<p>在 component 中引入，并且添加一个i元素用于显示字体图标
<img src="@source/.vuepress/public/images/fon2.png" alt="图片"></p>
<h3 id="字体的打包" tabindex="-1"><a class="header-anchor" href="#字体的打包" aria-hidden="true">#</a> 字体的打包</h3>
<p>这个时候打包会报错，因为无法正确的处理<strong>eot、ttf、woff</strong>等文件：</p>
<ul>
<li>可以选择使用 <code>file-loader</code> 来处理，也可以选择直接使用webpack5的资源模块类型(asset module type)来处理</li>
</ul>
<p><img src="@source/.vuepress/public/images/fon3.png" alt="图片"></p>
</template>
