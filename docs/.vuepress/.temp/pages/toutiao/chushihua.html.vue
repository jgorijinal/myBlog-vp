<template><h1 id="项目初始化" tabindex="-1"><a class="header-anchor" href="#项目初始化" aria-hidden="true">#</a> 项目初始化</h1>
<h2 id="使用-vue-cli创建项目" tabindex="-1"><a class="header-anchor" href="#使用-vue-cli创建项目" aria-hidden="true">#</a> 使用 Vue Cli创建项目</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>vue create toutiao-m
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="调整初始目录结构" tabindex="-1"><a class="header-anchor" href="#调整初始目录结构" aria-hidden="true">#</a> 调整初始目录结构</h2>
<ul>
<li>src/<strong>api</strong> 目录
<ul>
<li>存储接口封装</li>
</ul>
</li>
<li>src/<strong>utils</strong> 目录
<ul>
<li>存储一些工具模块</li>
</ul>
</li>
<li>src/<strong>styles</strong> 目录
<ul>
<li>index.less 文件，存储全局样式</li>
<li>在 <code>main.js</code> 中加载全局样式 <code>import './styles/index.less'</code></li>
</ul>
</li>
</ul>
<p>调整之后的目录结构如下。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>├── README.md                     
├── babel.config.js               
├── package-lock.json             
├── package.json                  
├── public                        
│   ├── favicon.ico               
│   └── index.html                
└── src                           
    ├── api
    ├── App.vue                   
    ├── assets                    
    ├── components                
    ├── main.js                   
    ├── router
    ├── utils
    ├── styles
    ├── store                     
    └── views
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="iconpark-图标库" tabindex="-1"><a class="header-anchor" href="#iconpark-图标库" aria-hidden="true">#</a> iconPark 图标库</h2>
<p><a href="https://iconpark.oceanengine.com/home" target="_blank" rel="noopener noreferrer">iconPark图标官网<ExternalLinkIcon/></a></p>
<p><a href="https://github.com/bytedance/IconPark/blob/master/packages/vue/README.md" target="_blank" rel="noopener noreferrer">使用文档<ExternalLinkIcon/></a></p>
<h2 id="引入-vant-组件库" tabindex="-1"><a class="header-anchor" href="#引入-vant-组件库" aria-hidden="true">#</a> 引入 Vant 组件库</h2>
<p>Vant 是有赞商城前端开发团队开发的一个基于 Vue.js 的移动端组件库，它提供了非常丰富的移动端功能组件，简单易用。</p>
<ul>
<li><a href="https://youzan.github.io/vant/#/zh-CN/" target="_blank" rel="noopener noreferrer">官方文档<ExternalLinkIcon/></a></li>
<li><a href="https://github.com/youzan/vant" target="_blank" rel="noopener noreferrer">GitHub 仓库<ExternalLinkIcon/></a>
在我们的项目中主要使用 Vant 作为核心组件库，下面我们根据<a href="https://youzan.github.io/vant/#/zh-CN/quickstart#yin-ru-zu-jian" target="_blank" rel="noopener noreferrer">官方文档<ExternalLinkIcon/></a>将 Vant 导入项目中。</li>
</ul>
<p>将 Vant 引入项目一共有四种方式：</p>
<ul>
<li>方式一：自动按需引入组件
<ul>
<li>和方式二一样，都是按需引入，但是加载更方便一些（需要额外配置插件）</li>
<li>优点：打包体积小</li>
<li>缺点：每个组件在使用之前都需要手动加载注册</li>
</ul>
</li>
<li>方式二：手动按需引入组件
<ul>
<li>在不使用插件的情况下，可以手动引入需要的组件</li>
<li>优点：打包体积小</li>
<li>缺点：每个组件在使用之前都需要手动加载注册</li>
</ul>
</li>
<li>方式三：导入所有组件
<ul>
<li>Vant 支持一次性导入所有组件，引入所有组件会增加代码包体积，因此不推荐这种做法</li>
<li>优点：导入一次，使用所有</li>
<li>缺点：打包体积大</li>
</ul>
</li>
<li>方式四：通过 CDN 引入
<ul>
<li>使用 Vant 最简单的方法是直接在 html 文件中引入 CDN 链接，之后你可以通过全局变量<code>vant</code>访问到所有组件。</li>
<li>优点：适合一些演示、示例项目，一个 html 文件就可以跑起来</li>
<li>缺点：不适合在模块化系统中使用</li>
</ul>
</li>
</ul>
<p>这里建议为了前期开发的便利性我们选择方式三：导入所有组件，在最后做打包优化的时候根据需求配置按需加载以降低打包体积大小。</p>
<p>1、安装 Vant</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i vant
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>2、在 <code>main.js</code> 中加载注册 Vant 组件</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> Vant <span class="token keyword">from</span> <span class="token string">'vant'</span>
<span class="token keyword">import</span> <span class="token string">'vant/lib/index.css'</span>

Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Vant<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="移动端-rem-适配" tabindex="-1"><a class="header-anchor" href="#移动端-rem-适配" aria-hidden="true">#</a> 移动端 Rem 适配</h2>
<p>Vant 中的样式默认使用 <code>px</code> 作为单位，如果需要使用 <code>rem</code> 单位，推荐使用以下两个工具：</p>
<ul>
<li><a href="https://github.com/cuth/postcss-pxtorem" target="_blank" rel="noopener noreferrer">postcss-pxtorem<ExternalLinkIcon/></a> 是一款 postcss 插件，用于将单位转化为 rem</li>
<li><a href="https://github.com/amfe/lib-flexible" target="_blank" rel="noopener noreferrer">lib-flexible<ExternalLinkIcon/></a> 用于设置 rem 基准值</li>
</ul>
<p>分别将这两个工具配置到项目中完成 REM 适配。</p>
<p><strong>一、使用 <a href="https://github.com/amfe/lib-flexible" target="_blank" rel="noopener noreferrer">lib-flexible<ExternalLinkIcon/></a> 动态设置 REM 基准值（html 标签的字体大小）</strong></p>
<p>1、安装</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i amfe-flexible
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>2、然后在 <code>main.js</code> 中加载执行该模块</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">'amfe-flexible'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>最后测试：在浏览器中切换不同的手机设备尺寸，观察 html 标签 <code>font-size</code> 的变化。</p>
<p><img src="@source/.vuepress/public/images/shipei1.png" alt="图片"></p>
<p><strong>二、使用 <a href="https://github.com/cuth/postcss-pxtorem" target="_blank" rel="noopener noreferrer">postcss-pxtorem<ExternalLinkIcon/></a> 将 <code>px</code> 转为 <code>rem</code></strong></p>
<p>1、安装</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># -D 是 --save-dev 的(开发时依赖)简写</span>
<span class="token function">npm</span> <span class="token function">install</span> postcss-pxtorem -D
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>2、然后在<strong>项目根目录</strong>中创建 <code>.postcssrc.js</code> 文件</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">'autoprefixer'</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">browsers</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'Android >= 4.0'</span><span class="token punctuation">,</span> <span class="token string">'iOS >= 8'</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">'postcss-pxtorem'</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">rootValue</span><span class="token operator">:</span> <span class="token number">37.5</span><span class="token punctuation">,</span>
      <span class="token literal-property property">propList</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'*'</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>3、<strong>配置完毕，重新启动服务</strong>
最后测试：<strong>刷新浏览器页面</strong>，审查元素的样式查看是否已将 <code>px</code> 转换为 <code>rem</code>。
<img src="@source/.vuepress/public/images/rem1.png" alt="图片"></p>
<h2 id="关于-postcssrc-js-配置文件" tabindex="-1"><a class="header-anchor" href="#关于-postcssrc-js-配置文件" aria-hidden="true">#</a> 关于 <code>.postcssrc.js</code> 配置文件</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">'autoprefixer'</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">browsers</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'Android >= 4.0'</span><span class="token punctuation">,</span> <span class="token string">'iOS >= 8'</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">'postcss-pxtorem'</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">rootValue</span><span class="token operator">:</span> <span class="token number">37.5</span><span class="token punctuation">,</span>
      <span class="token literal-property property">propList</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'*'</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p><code>.postcssrc.js</code> 是 PostCSS 的配置文件。</p>
<p>（1）PostCSS 介绍</p>
<p><a href="https://postcss.org/" target="_blank" rel="noopener noreferrer">PostCSS<ExternalLinkIcon/></a> 是一个处理 CSS 的处理工具，本身功能比较单一，它主要负责解析 CSS 代码，再交由插件来进行处理，它的插件体系非常强大，所能进行的操作是多种多样的，例如：</p>
<ul>
<li><a href="https://github.com/postcss/autoprefixer" target="_blank" rel="noopener noreferrer">Autoprefixer<ExternalLinkIcon/></a> 插件可以实现自动添加浏览器相关的声明前缀</li>
<li><a href="https://github.com/csstools/postcss-preset-env" target="_blank" rel="noopener noreferrer">PostCSS Preset Env<ExternalLinkIcon/></a> 插件可以让你使用更新的 CSS 语法特性并实现向下兼容</li>
<li><a href="https://github.com/cuth/postcss-pxtorem" target="_blank" rel="noopener noreferrer">postcss-pxtorem<ExternalLinkIcon/></a> 可以实现将 px 转换为 rem</li>
<li>...</li>
</ul>
<p>目前 PostCSS 已经有 <a href="https://github.com/postcss/postcss/blob/master/docs/plugins.md" target="_blank" rel="noopener noreferrer">200 多个功能各异的插件<ExternalLinkIcon/></a>。开发人员也可以根据项目的需要，开发出自己的 PostCSS 插件。</p>
<p>PostCSS 一般不单独使用，而是与已有的构建工具进行集成。</p>
<p><a href="https://cli.vuejs.org/zh/guide/css.html#postcss" target="_blank" rel="noopener noreferrer">Vue CLI 默认集成了 PostCSS<ExternalLinkIcon/></a>，并且默认开启了 <a href="https://github.com/postcss/autoprefixer" target="_blank" rel="noopener noreferrer">autoprefixer<ExternalLinkIcon/></a> 插件。</p>
<blockquote>
<p>Vue CLI 内部使用了 PostCSS。</p>
<p>你可以通过 <code>.postcssrc</code> 或任何 <a href="https://github.com/michael-ciniawsky/postcss-load-config" target="_blank" rel="noopener noreferrer">postcss-load-config<ExternalLinkIcon/></a> 支持的配置源来配置 PostCSS。也可以通过 <code>vue.config.js</code> 中的 <code>css.loaderOptions.postcss</code> 配置 <a href="https://github.com/postcss/postcss-loader" target="_blank" rel="noopener noreferrer">postcss-loader<ExternalLinkIcon/></a>。</p>
<p>我们默认开启了 <a href="https://github.com/postcss/autoprefixer" target="_blank" rel="noopener noreferrer">autoprefixer<ExternalLinkIcon/></a>。如果要配置目标浏览器，可使用 <code>package.json</code> 的 <a href="https://cli.vuejs.org/zh/guide/browser-compatibility.html#browserslist" target="_blank" rel="noopener noreferrer">browserslist<ExternalLinkIcon/></a> 字段。</p>
</blockquote>
<p>（2）Autoprefixer 插件的配置</p>
<p><a href="https://github.com/postcss/autoprefixer" target="_blank" rel="noopener noreferrer">autoprefixer<ExternalLinkIcon/></a> 是一个自动添加浏览器前缀的 PostCss 插件，<code>browsers</code> 用来配置兼容的浏览器版本信息，但是写在这里的话会引起编译器警告。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>Replace Autoprefixer browsers option to Browserslist config.
Use browserslist key in package.json or .browserslistrc file.

Using browsers option can cause errors. Browserslist config
can be used for Babel, Autoprefixer, postcss-normalize and other tools.

If you really need to use option, rename it to overrideBrowserslist.

Learn more at:
https://github.com/browserslist/browserslist#readme
https://twitter.com/browserslist
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>警告意思就是说你应该将 <code>browsers</code> 选项写到 <code>package.json</code> 或 <code>.browserlistrc</code> 文件中。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>[Android]
>= 4.0

[iOS]
>= 8

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><blockquote>
<p>具体语法请<a href="https://github.com/browserslist/browserslist" target="_blank" rel="noopener noreferrer">参考这里<ExternalLinkIcon/></a>。</p>
</blockquote>
<p>（3）postcss-pxtorem 插件的配置</p>
<ul>
<li><code>rootValue</code>：表示根元素字体大小，它会根据根元素大小进行单位转换</li>
<li><code>propList</code> 用来设定可以从 px 转为 rem 的属性
<ul>
<li>例如 <code>*</code> 就是所有属性都要转换，<code>width</code> 就是仅转换 <code>width</code> 属性</li>
</ul>
</li>
</ul>
<p><code>rootValue</code> 应该如何设置呢？</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>如果你使用的是基于 lib-flexable 的 REM 适配方案，则应该设置为你的设计稿的十分之一。
例如设计稿是 750 宽，则应该设置为 75。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>大多数设计稿的原型都是以 iphone6 为原型，iphone6 设备的宽是 750，我们的设计稿也是这样。</p>
<p>但是 Vant 建议设置为 37.5，为什么呢？</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>因为 Vant 是基于 375 写的，所以如果你设置为 75 的话，Vant 的样式就小了一半。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>所以如果设置为 <code>37.5</code> 的话，Vant 的样式是没有问题的，但是我们在测量设计稿的时候都必须除2才能使用，否则就会变得很大。</p>
<p>这样做其实也没有问题，但是有没有更好的办法呢？我就想实现测量多少写多少（不用换算）。于是聪明的你就想，可以不可以这样来做？</p>
<ul>
<li>如果是 Vant 的样式，就把 <code>rootValue</code> 设置为 37.5 来转换</li>
<li>如果是我们的样式，就按照 75 的 <code>rootValue</code> 来转换</li>
</ul>
<p>通过<a href="https://github.com/cuth/postcss-pxtorem#options" target="_blank" rel="noopener noreferrer">查阅文档<ExternalLinkIcon/></a>可以看到 <code>rootValue</code> 支持两种参数类型：</p>
<ul>
<li>数字：固定值</li>
<li>函数：动态计算返回
<ul>
<li>postcss-pxtorem 处理每个 CSS 文件的时候都会来调用这个函数</li>
<li>它会把被处理的 CSS 文件相关的信息通过参数传递给该函数</li>
</ul>
</li>
</ul>
<p>所以修改配置如下：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * PostCSS 配置文件
 */</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 配置要使用的 PostCSS 插件</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 配置使用 autoprefixer 插件</span>
    <span class="token comment">// 作用：生成浏览器 CSS 样式规则前缀</span>
    <span class="token comment">// VueCLI 内部已经配置了 autoprefixer 插件</span>
    <span class="token comment">// 所以又配置了一次，所以产生冲突了</span>
    <span class="token comment">// 'autoprefixer': { // autoprefixer 插件的配置</span>
    <span class="token comment">//   // 配置要兼容到的环境信息</span>
    <span class="token comment">//   browsers: ['Android >= 4.0', 'iOS >= 8']</span>
    <span class="token comment">// },</span>

    <span class="token comment">// 配置使用 postcss-pxtorem 插件</span>
    <span class="token comment">// 作用：把 px 转为 rem</span>
    <span class="token string-property property">'postcss-pxtorem'</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">rootValue</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> file <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> file<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">'vant'</span><span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">?</span> <span class="token number">37.5</span> <span class="token operator">:</span> <span class="token number">75</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">propList</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'*'</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><p>配置完毕，把服务重启一下</p>
<h2 id="封装请求模块" tabindex="-1"><a class="header-anchor" href="#封装请求模块" aria-hidden="true">#</a> 封装请求模块</h2>
<p>和之前项目一样，这里我们还是使用 <a href="https://github.com/axios/axios" target="_blank" rel="noopener noreferrer">axios<ExternalLinkIcon/></a> 作为我们项目中的请求库，为了方便使用，我们把它封装为一个请求模块，在需要的时候直接加载即可。</p>
<p>1、安装 axios</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i axios
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>2、创建 <code>src/utils/request.js</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 封装 axios 请求模块
 */</span>
<span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">"axios"</span>

<span class="token keyword">const</span> request <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">baseURL</span><span class="token operator">:</span> <span class="token string">"http://ttapi.research.itcast.cn/"</span> <span class="token comment">// 基础路径</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
 
<span class="token keyword">export</span> <span class="token keyword">default</span> request
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>先写这些
3、如何使用</p>
<ul>
<li>方式一（简单方便，但是不利于接口维护）：可以把请求对象挂载到 <code>Vue.prototype</code> 原型对象中，然后在组件中通过 <code>this.xxx</code> 直接访问</li>
<li>方式二（推荐）：把每一个请求都封装成每个独立的功能函数，在需要的时候加载调用，这种做法更便于接口的管理和维护</li>
</ul>
<p>在项目中建议使用方式二，更推荐</p>
</template>
