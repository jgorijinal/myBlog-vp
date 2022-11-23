<template><h1 id="sourcemap" tabindex="-1"><a class="header-anchor" href="#sourcemap" aria-hidden="true">#</a> sourcemap</h1>
<h2 id="mode-配置" tabindex="-1"><a class="header-anchor" href="#mode-配置" aria-hidden="true">#</a> Mode 配置</h2>
<p>Mode配置选项，可以告知 webpack 使用响应模式的内置优化：</p>
<ul>
<li>默认值是 <strong><code>production</code></strong>（什么都不设置的情况下）；</li>
<li>可选值有：'none' | 'development' | 'production'；</li>
</ul>
<p>这几个选项有什么样的区别呢?</p>
<p><img src="@source/.vuepress/public/images/mde1.png" alt="图片"></p>
<h3 id="mode-配置代表更多" tabindex="-1"><a class="header-anchor" href="#mode-配置代表更多" aria-hidden="true">#</a> Mode 配置代表更多</h3>
<p><img src="@source/.vuepress/public/images/mde2.png" alt="图片"></p>
<h2 id="认识-source-map" tabindex="-1"><a class="header-anchor" href="#认识-source-map" aria-hidden="true">#</a> 认识 source-map</h2>
<p>代码通常运行在浏览器上时，是通过打包压缩的：</p>
<ul>
<li>也就是<strong>真实跑在浏览器上的代码</strong>，和<strong>我们编写的代码其实是有差异</strong>的；</li>
<li>比如 <em>ES6 的代码</em>可能被转换成 <em>ES5</em>；</li>
<li>比如对应的代码<em>行号、列号</em>在经过编译后肯定会不一致；</li>
<li>比如代码进行<em>丑化压缩</em>时，会将编码名称等修改；</li>
<li>比如我们使用了<em>TypeScript</em>等方式编写的代码，最终<em>转换成JavaScript</em></li>
</ul>
<p>但是，当代码报错需要<strong>调试时（debug）</strong>，调试<strong>转换后的代码</strong>是很困难的</p>
<p>但是能保证我们写的代码不出错吗？<strong>不可能</strong></p>
<p>那么如何可以调试这种转换后不一致的代码呢？答案就是 <code>source-map</code></p>
<ul>
<li>source-map是从<strong>已转换的代码</strong>，<strong>映射到原始的源文件</strong>；</li>
<li>使浏览器可以<strong>重构原始源</strong>并在调试器中<strong>显示重建的原始源</strong></li>
</ul>
<h3 id="如何使用-source-map" tabindex="-1"><a class="header-anchor" href="#如何使用-source-map" aria-hidden="true">#</a> 如何使用 source-map</h3>
<p><strong>如何可以使用 source-map呢？两个步骤：</strong></p>
<ul>
<li>第一步：根据源文件，生成 source-map 文件，webpack在打包时，可以通过配置生成 source-map；</li>
<li>第二步：在转换后的代码，最后添加一个<strong>注释</strong>，它指向 sourcemap；</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>//# sourceMappingURL=common.bundle.js.map
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>浏览器会根据我们的注释，查找响应的source-map，并且根据source-map还原我们的代码，方便进行调试。</p>
<p>在Chrome中，我们可以按照如下的方式打开source-map：</p>
<p><img src="@source/.vuepress/public/images/xa1.png" alt="图片"></p>
<h3 id="分析-source-map" tabindex="-1"><a class="header-anchor" href="#分析-source-map" aria-hidden="true">#</a> 分析 source-map</h3>
<p>目前的source-map长什么样子呢？</p>
<ul>
<li><code>version</code>：当前使用的版本，也就是最新的第三版</li>
<li><code>sources</code>：从哪些文件转换过来的source-map和打包的代码（最初始的文件）</li>
<li><code>names</code>：转换前的变量和属性名称（因为我目前使用的是development模式，所以不需要保留转换前的名称）</li>
<li><code>mappings</code>：source-map用来和源文件映射的信息（比如位置信息等），一串base64 VLQ（variable-length quantity可变长度值）编码</li>
<li><code>file</code>：打包后的文件（浏览器加载的文件）</li>
<li><code>sourceContent</code>：转换前的具体代码信息（和sources是对应的关系）</li>
<li><code>sourceRoot</code>：所有的sources相对的根目录</li>
</ul>
<p><img src="@source/.vuepress/public/images/smap1.png" alt="图片"></p>
<h3 id="生成-source-map" tabindex="-1"><a class="header-anchor" href="#生成-source-map" aria-hidden="true">#</a> 生成 source-map</h3>
<p>如何在使用 webpac k打包的时候，生成对应的 source-map 呢？</p>
<ul>
<li>webpack为我们提供了非常多的选项（目前是26个），来处理source-map；</li>
<li>https://webpack.docschina.org/configuration/devtool/</li>
<li>选择不同的值，生成的 source-map 会稍微有差异，打包的过程也会有<strong>性能的差异</strong>，可以根据不同的情况进行选择；</li>
</ul>
<p>下面几个值<strong>不会生成source-map</strong> , 可以设置 <code>devtool</code> 属性为一下选项:</p>
<ul>
<li><code>false</code>：不使用source-map，也就是没有任何和 source-map 相关的内容。</li>
<li><code>none</code>：production 模式下的默认值，不生成 source-map</li>
<li><code>eval</code>：development 模式下的默认值(什么值都不写)，不生成 source-map
<ul>
<li><em>但是它会在 eval 执行的代码中，添加 <code>//# sourceURL=；</code></em></li>
<li><em>它会被浏览器在执行时解析，并且在调试面板中生成对应的一些文件目录，方便我们调试代码</em></li>
</ul>
</li>
</ul>
<p><img src="@source/.vuepress/public/images/smap2.png" alt="图片"></p>
<h2 id="devtool-的值" tabindex="-1"><a class="header-anchor" href="#devtool-的值" aria-hidden="true">#</a> devtool 的值</h2>
<h3 id="source-map" tabindex="-1"><a class="header-anchor" href="#source-map" aria-hidden="true">#</a> source-map</h3>
<p>source-map：</p>
<ul>
<li>生成一个独立的 source-map 文件，并且在 bundle 文件中有一个注释，指向source-map文件；</li>
</ul>
<p>bundle文件中有如下的注释：</p>
<ul>
<li>开发工具会根据这个注释找到 source-map 文件，并且解析；</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>//# sourceMappingURL=bundle.js.map
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="eval-source-map" tabindex="-1"><a class="header-anchor" href="#eval-source-map" aria-hidden="true">#</a> eval-source-map</h3>
<p>会生成 sourcemap，但是source-map是<strong>以 DataUrl 添加到eval函数的后面</strong>
<img src="@source/.vuepress/public/images/smap3.png" alt="图片"></p>
<h3 id="inline-source-map" tabindex="-1"><a class="header-anchor" href="#inline-source-map" aria-hidden="true">#</a> inline-source-map</h3>
<p>inline-source-map：会生成sourcemap，但是source-map是<strong>以DataUrl添加到bundle文件的后面</strong>
<img src="@source/.vuepress/public/images/smap4.png" alt="图片"></p>
<h3 id="cheap-source-map" tabindex="-1"><a class="header-anchor" href="#cheap-source-map" aria-hidden="true">#</a> cheap-source-map</h3>
<ul>
<li>会生成sourcemap，<strong>但是会更加高效一些</strong>（cheap低开销），因为<strong>它没有生成列映射</strong>（Column Mapping）</li>
<li>因为在开发中，我们只需要行信息通常就可以定位到错误了</li>
</ul>
<p><img src="@source/.vuepress/public/images/smap5.png" alt="图片"></p>
<h3 id="cheap-module-source-map" tabindex="-1"><a class="header-anchor" href="#cheap-module-source-map" aria-hidden="true">#</a> cheap-module-source-map</h3>
<p>cheap-module-source-map：</p>
<ul>
<li>会生成sourcemap，类似于cheap-source-map，但是对源自loader的sourcemap处理会更好。</li>
</ul>
<p>这里有一个很模糊的概念：对源自loader的sourcemap处理会更好，官方也没有给出很好的解释</p>
<ul>
<li>其实是如果loader对我们的源码进行了特殊的处理，比如babel；</li>
</ul>
<p><img src="@source/.vuepress/public/images/smap6.png" alt="图片"></p>
<h4 id="cheap-source-map-和-cheap-module-source-map" tabindex="-1"><a class="header-anchor" href="#cheap-source-map-和-cheap-module-source-map" aria-hidden="true">#</a> cheap-source-map 和 cheap-module-source-map</h4>
<p><img src="@source/.vuepress/public/images/smap7.png" alt="图片"></p>
<h3 id="hidden-source-map" tabindex="-1"><a class="header-anchor" href="#hidden-source-map" aria-hidden="true">#</a> hidden-source-map</h3>
<p>hidden-source-map：</p>
<ul>
<li>会生成sourcemap，但是不会对source-map文件进行引用</li>
<li>相当于删除了打包文件中对sourcemap的引用注释</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>// 被删除掉的
//# sourceMappingURL=bundle.js.map
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>如果手动添加进来，那么sourcemap就会生效了</p>
<h3 id="nosources-source-map值" tabindex="-1"><a class="header-anchor" href="#nosources-source-map值" aria-hidden="true">#</a> nosources-source-map值</h3>
<p>会生成sourcemap，但是生成的sourcemap<strong>只有错误信息的提示，不会生成源代码文件</strong></p>
<p>正确的错误提示：
<img src="@source/.vuepress/public/images/smap8.png" alt="图片"></p>
<p>点击错误提示，无法查看源码
<img src="@source/.vuepress/public/images/smap9.png" alt="图片"></p>
<h3 id="多个值的组合" tabindex="-1"><a class="header-anchor" href="#多个值的组合" aria-hidden="true">#</a> 多个值的组合</h3>
<p>事实上，webpack提供给我们的26个值，是可以进行多组合的。</p>
<p>组合的规则如下：</p>
<ul>
<li>inline-|hidden-|eval：三个值时三选一；</li>
<li>nosources：可选值；</li>
<li>cheap可选值，并且可以跟随module的值；</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>[inline-|hidden-|eval-][nosources-][cheap-[module-]]source-ma
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><strong>那么在开发中，最佳的实践是什么呢？</strong></p>
<ol>
<li><strong>开发阶段</strong>：推荐使用 source-map或者cheap-module-source-map</li>
</ol>
<ul>
<li>这分别是vue和react使用的值，可以获取调试信息，方便快速开发；</li>
</ul>
<ol start="2">
<li><strong>测试阶段</strong>：推荐使用 source-map或者cheap-module-source-map</li>
</ol>
<ul>
<li>测试阶段我们也希望在浏览器下看到正确的错误提示；</li>
</ul>
<ol start="3">
<li><strong>发布阶段</strong>：false、缺省值（不写）</li>
</ol>
</template>
