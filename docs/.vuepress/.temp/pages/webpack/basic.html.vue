<template><h1 id="webpack" tabindex="-1"><a class="header-anchor" href="#webpack" aria-hidden="true">#</a> webpack</h1>
<h2 id="webpack的基本使用" tabindex="-1"><a class="header-anchor" href="#webpack的基本使用" aria-hidden="true">#</a> webpack的基本使用</h2>
<h3 id="_1-创建列表隔行变色项目" tabindex="-1"><a class="header-anchor" href="#_1-创建列表隔行变色项目" aria-hidden="true">#</a> 1. 创建列表隔行变色项目</h3>
<ol>
<li>新建项目空白目录 , <code>npm init -y</code> , 初始化 package.json</li>
<li>新建 src 源代码目录</li>
<li>新建 src -&gt; index.html 文件</li>
<li>初始化首页基本结构</li>
<li>运行 npm install jquery -S , 安装 jQuery</li>
<li>通过模块化形式, 实现列表隔行变色效果
<img src="@source/.vuepress/public/images/web1.png" alt="图片"></li>
</ol>
<h3 id="_2-项目中安装-webpack" tabindex="-1"><a class="header-anchor" href="#_2-项目中安装-webpack" aria-hidden="true">#</a> 2. 项目中安装 webpack</h3>
<ol>
<li>运行 <code>npm install webpack webpack-cli -D</code> 命令 , 安装相关的 webpack 包</li>
<li>在项目根目录中, 创建名为 webpack.config.js 的 webpack 配置文件
<img src="@source/.vuepress/public/images/webpack111.png" alt="图片"></li>
<li>其中, 初始化如下基本配置 :</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span><span class="token string">"development"</span>  <span class="token comment">// mode 用来指定构建模式</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>一定要记住: 开发阶段都用 development 模式, 因为可以提高电码的编译速度, 在上线阶段改成 production 模式
4. 在 package.json文件中, script 节点下, 新增 dev 脚本 , 如下:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string-property property">"scripts"</span><span class="token operator">:</span><span class="token punctuation">{</span>
  <span class="token string-property property">"dev"</span><span class="token operator">:</span><span class="token string">"webpack"</span>  <span class="token comment">// 通过 npm run dev 运行</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ol start="5">
<li>运行 npm run dev , 打包</li>
</ol>
<p><img src="@source/.vuepress/public/images/web2.png" alt="图片"></p>
<h3 id="_3-配置打包的入口和出口" tabindex="-1"><a class="header-anchor" href="#_3-配置打包的入口和出口" aria-hidden="true">#</a> 3. 配置打包的入口和出口</h3>
<p>webpack 的 4.x 版本中默认约定 :</p>
<ul>
<li>打包的<strong>入口文件</strong>为  src -&gt; index.js</li>
<li>打包的<strong>输出文件</strong>为 dis -&gt; main.js</li>
</ul>
<p>如果要修改打包的入口与出口 , 可以在 webpack.config.js 中配置如下信息 :</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"path"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// 导入 nodejs 中专门操作路径的模块</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">"development"</span><span class="token punctuation">,</span> <span class="token comment">// 开发阶段</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">"./src/index.js"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>  <span class="token comment">// 入口文件路径</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">"./dist"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>      <span class="token comment">// 输出文件存放路径</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">"bundle.js"</span><span class="token punctuation">,</span>                     <span class="token comment">// 输出文件名称</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><div class="highlight-line">&nbsp;</div><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p><img src="@source/.vuepress/public/images/web3.png" alt="图片"></p>
<h3 id="_4-配置-webpack-的自动打包功能" tabindex="-1"><a class="header-anchor" href="#_4-配置-webpack-的自动打包功能" aria-hidden="true">#</a> 4. 配置 webpack 的自动打包功能</h3>
<ol>
<li><code>npm install webpack-dev-server -D</code> , 安装项目自动打包工具</li>
<li>修改 package.json 下的 -&gt; scripts 中的 dev 命令 , 如下:</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>"scripts":{
  "dev":"webpack-dev-server"   
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ol start="3">
<li>将 sec -&gt; index.html中 , script脚本的路径 修改为 <strong>&quot;/bundle.js&quot;</strong> (<strong>根路径下</strong>的 bundle.js)
<img src="@source/.vuepress/public/images/web5.png" alt="图片"></li>
<li>运行 <code>npm run dev</code> , 重新打包
这时根目录下有一个隐藏的 bundle.js(存在在内存中), 所以在index.html 中引入时直接写 根目录下的 &quot;/bundle.js&quot;</li>
<li>浏览器访问  地址, 查看自动打包效果</li>
</ol>
<p><strong>注意:</strong> webpack-dev-server 会启动一个实时打包的 http 服务器</p>
<h3 id="_5-配置-html-webpack-plugin-生成预览页面" tabindex="-1"><a class="header-anchor" href="#_5-配置-html-webpack-plugin-生成预览页面" aria-hidden="true">#</a> 5. 配置 html-webpack-plugin 生成预览页面</h3>
<ol>
<li>运行 <code>npm install html-webpack-plugin -D</code> , 安装生成预览页面的插件</li>
<li>修改 webpack.plugin.js 文件头部区域, 添加如下配置:
<img src="@source/.vuepress/public/images/web6.png" alt="图片"></li>
<li>修改 webpack.config.js , 新增如下配置
<img src="@source/.vuepress/public/images/web7.png" alt="图片"></li>
</ol>
<p>最终代码:
<img src="@source/.vuepress/public/images/web8.png" alt="图片"></p>
<h3 id="_6-配置自动打包相关参数" tabindex="-1"><a class="header-anchor" href="#_6-配置自动打包相关参数" aria-hidden="true">#</a> 6. 配置自动打包相关参数</h3>
<p><img src="@source/.vuepress/public/images/web9.png" alt="图片"></p>
<p>运行 npm run dev 命令之后会直接自动进入到网页</p>
<h2 id="webpack-加载器" tabindex="-1"><a class="header-anchor" href="#webpack-加载器" aria-hidden="true">#</a> webpack 加载器</h2>
<h3 id="_1-通过-loader-打包-非js-模块" tabindex="-1"><a class="header-anchor" href="#_1-通过-loader-打包-非js-模块" aria-hidden="true">#</a> 1. 通过 loader 打包 非js 模块</h3>
<p>在实际开发过程中, webpack 默认只能打包处理以 .js 后缀名结尾的模块, <strong>其他 非 .js 后缀名结尾的模块</strong> , webpack 是默认处理不了,
<strong>需要调用 loader 加载器才可以正常打包</strong>, 否则会报错 !</p>
<p>loader 加载器可以协助 webpack 打包处理特定的文件模块, 比如:</p>
<ul>
<li>less-loader 可以打包处理 .less 相关的文件</li>
<li>sass-loader 可以打包处理 .scss 相关的文件</li>
<li>url-loader 可以打包处理 css 中与 url 路径相关的文件</li>
</ul>
<h3 id="_2-loader-调用过程" tabindex="-1"><a class="header-anchor" href="#_2-loader-调用过程" aria-hidden="true">#</a> 2. loader 调用过程</h3>
<p><img src="@source/.vuepress/public/images/web11.png" alt="图片"></p>
<h2 id="webpack-中加载器-loader-的基本使用" tabindex="-1"><a class="header-anchor" href="#webpack-中加载器-loader-的基本使用" aria-hidden="true">#</a> webpack 中加载器 loader 的基本使用</h2>
<h3 id="_1-打包处理-css-文件" tabindex="-1"><a class="header-anchor" href="#_1-打包处理-css-文件" aria-hidden="true">#</a> 1. 打包处理 css 文件</h3>
<ol>
<li>运行 <code>npm install style-loader css-loader -D</code> , 安装处理 css 文件的 loader</li>
<li>在 webpack.config.js 中的 module -&gt; rules 数组中 , 添加 loader 规则如下:</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"style-loader"</span><span class="token punctuation">,</span> <span class="token string">"css-loader"</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>其中 , test 表示匹配的文件类型(正则) , use 表示对应要调用的 loader</p>
<p><strong>注意</strong> :</p>
<ul>
<li>use 数组中指定的 loader 顺序是固定的</li>
<li>多个 loader 的调用顺序是: <strong>从后往前调用</strong></li>
</ul>
<p>最终代码:
<img src="@source/.vuepress/public/images/web12.png" alt="图片"></p>
<h3 id="_2-打包处理-less-文件" tabindex="-1"><a class="header-anchor" href="#_2-打包处理-less-文件" aria-hidden="true">#</a> 2. 打包处理 less 文件</h3>
<ol>
<li><code>npm install less-loader less -D</code> 命令,  (less是less-loader的内置项, 必须要安装 less)</li>
<li>在 webpack.config.js 中的 module -&gt; rules 中 , 添加 loader 的规则如下 :</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">module</span><span class="token operator">:</span><span class="token punctuation">{</span>
  <span class="token literal-property property">rules</span><span class="token operator">:</span><span class="token punctuation">[</span>
    <span class="token punctuation">{</span><span class="token literal-property property">test</span><span class="token operator">:</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.less$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token literal-property property">use</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">'style-loader'</span><span class="token punctuation">,</span> <span class="token string">'css-loader'</span><span class="token punctuation">,</span> <span class="token string">'less-loader'</span><span class="token punctuation">]</span><span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><img src="@source/.vuepress/public/images/web13.png" alt="图片"></p>
<h3 id="_3-打包处理-scss-文件" tabindex="-1"><a class="header-anchor" href="#_3-打包处理-scss-文件" aria-hidden="true">#</a> 3. 打包处理 scss 文件</h3>
<ol>
<li>运行 <code>npm install sass-loader node-sass -D</code> 命令</li>
<li>在 webpack.config.js 中 module -&gt; rules数组中 , 添加 loader 规则如下:</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">module</span><span class="token operator">:</span><span class="token punctuation">{</span>
  <span class="token literal-property property">rules</span><span class="token operator">:</span><span class="token punctuation">[</span>
    <span class="token punctuation">{</span><span class="token literal-property property">test</span><span class="token operator">:</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.scss$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token literal-property property">use</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">'style-loader'</span><span class="token punctuation">,</span><span class="token string">'css-loader'</span><span class="token punctuation">,</span><span class="token string">'sass-loader'</span><span class="token punctuation">]</span><span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><img src="@source/.vuepress/public/images/web15.png" alt="图片"></p>
<h3 id="_4-配置-postcss-自动添加-css-的兼容前缀" tabindex="-1"><a class="header-anchor" href="#_4-配置-postcss-自动添加-css-的兼容前缀" aria-hidden="true">#</a> 4  . 配置 postCSS 自动添加 css 的兼容前缀</h3>
<ol>
<li>运行 <code>npm install postcss-loader autoprefixer -D</code> 命令</li>
<li>在项目的根目录下创建 postcss 配置文件 postcss.config.js , 并初始化如下配置:
<img src="@source/.vuepress/public/images/postcss1.png" alt="图片"></li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> autoprefixer <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'autoprefixer'</span><span class="token punctuation">)</span>  <span class="token comment">// 导入自动添加前缀插件</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span><span class="token punctuation">[</span> autoprefixer <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ol start="3">
<li>在 webpack.config.js 的 module -&gt; rules数组中, <strong>修改</strong> css 的loader 规则如下:</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">module</span><span class="token operator">:</span><span class="token punctuation">{</span>
  <span class="token literal-property property">rules</span><span class="token operator">:</span><span class="token punctuation">[</span>
    <span class="token punctuation">{</span><span class="token literal-property property">test</span><span class="token operator">:</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token literal-property property">use</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">'style-loader'</span><span class="token punctuation">,</span> <span class="token string">'css-loader'</span><span class="token punctuation">,</span><span class="token string">'postcss-loader'</span><span class="token punctuation">]</span><span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>代码 :</p>
<p><img src="@source/.vuepress/public/images/auto1.png" alt="图片">
<img src="@source/.vuepress/public/images/web16.png" alt="图片"></p>
<h3 id="_5-打包样式表中的图片和字体文件" tabindex="-1"><a class="header-anchor" href="#_5-打包样式表中的图片和字体文件" aria-hidden="true">#</a> 5. 打包样式表中的图片和字体文件</h3>
<ol>
<li>运行 <code>npm install url-loader file-loader -D</code> 命令,  (其中 file-loader 是 url-loader 的内置依赖项)</li>
<li>在 webpack.config.js 的 module -&gt; rules 数组中 , 添加 loader 规则如下:</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">module</span><span class="token operator">:</span><span class="token punctuation">{</span>
  <span class="token literal-property property">rules</span><span class="token operator">:</span><span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">test</span><span class="token operator">:</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.jpg|png|gif|bmp|ttf|eot|svg|woff|woff2$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
      <span class="token literal-property property">use</span><span class="token operator">:</span><span class="token string">'url-loader?limit=16940'</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>其中 <strong><code>?</code></strong> 之后的是 loader 的参数项</p>
<p>limit 用来指定图片的大小, 单位是字节(byte) ,只有小于 limit 大小的图片, 才能转为 base64 的照片</p>
<p>代码: webpack.config.js
<img src="@source/.vuepress/public/images/web17.png" alt="图片"></p>
<h3 id="_6-打包处理-js-文件中的高级语法-babel" tabindex="-1"><a class="header-anchor" href="#_6-打包处理-js-文件中的高级语法-babel" aria-hidden="true">#</a> 6. 打包处理 js 文件中的高级语法 (babel)</h3>
<ol>
<li>安装 babel 转换器相关的包: <code>npm i babel-loader @babel/core @babel/runtime -D</code></li>
<li>安装 babel 语法插件相关的包: <code>npm i @babel/preset-env @babel/plugin-transform-runtime @babel/plugin-proposal-class-properties -D</code></li>
<li>在项目根目录中, 创建 babel.config.js 并初始化配置如下:</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">presets</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">'@/babel/preset-env'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">'@babel/plugin-transform-runtime'</span><span class="token punctuation">,</span><span class="token string">'@babel/plugin-proposal-class-properties'</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ol start="4">
<li>在 webpack.config.js 中 module -&gt; rules 数组中, 添加 loader 规则如下:</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">module</span><span class="token operator">:</span><span class="token punctuation">{</span>
  <span class="token literal-property property">rules</span><span class="token operator">:</span><span class="token punctuation">[</span>
    <span class="token punctuation">{</span><span class="token literal-property property">test</span><span class="token operator">:</span><span class="token string">'/\.js$/'</span><span class="token punctuation">,</span> <span class="token literal-property property">use</span><span class="token operator">:</span><span class="token string">'babel-loader'</span><span class="token punctuation">,</span><span class="token literal-property property">exclude</span><span class="token operator">:</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
<span class="token comment">// exclude 为排除项, 表示 babel-loader 不需要处理 node_modules 下的 js 文件</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>代码:
<img src="@source/.vuepress/public/images/ba1.png" alt="图片">
<img src="@source/.vuepress/public/images/ba2.png" alt="图片"></p>
<h2 id="vue-单文件组件" tabindex="-1"><a class="header-anchor" href="#vue-单文件组件" aria-hidden="true">#</a> Vue 单文件组件</h2>
<h3 id="_1-webpack-中配置-vue-组件的加载器" tabindex="-1"><a class="header-anchor" href="#_1-webpack-中配置-vue-组件的加载器" aria-hidden="true">#</a> 1. webpack 中配置 vue 组件的加载器</h3>
<ol>
<li>运行 <code>npm i vue-loader vue-template-compiler -D</code> 命令</li>
<li>在webpack.config.js 配置文件中, 添加 vue-loader 的配置如下 :</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> VueLoaderPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'vue-loader/lib/plugin'</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span><span class="token punctuation">[</span>
      <span class="token comment">// ... 其他规则 </span>
      <span class="token punctuation">{</span><span class="token literal-property property">test</span><span class="token operator">:</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.vue$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token literal-property property">use</span><span class="token operator">:</span><span class="token string">'vue-loader'</span><span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span><span class="token punctuation">[</span>
    <span class="token comment">// ... 其他插件</span>
    <span class="token keyword">new</span> <span class="token class-name">VueLoaderPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">// 要确保引入这个插件 ! </span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="_2-在-webpack-项目中使用-vue" tabindex="-1"><a class="header-anchor" href="#_2-在-webpack-项目中使用-vue" aria-hidden="true">#</a> 2. 在 webpack 项目中使用 vue</h3>
<ol>
<li>运行 <code>npm i vue -S</code> 安装 vue</li>
<li>在 src -&gt; index.js 入口文件中, 通过 import Vue from 'vue' 来导入 vue 构造函数</li>
<li>创建 vue 实例对象, 并制定要控制的 el 区域</li>
<li>通过 render 函数渲染 App 根组件</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">'vue'</span>  <span class="token comment">// 严格办的 vue , 只能用 render 渲染组件</span>

<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">'./components/App.vue'</span>

<span class="token keyword">const</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// 3. 指定 vm 实例要控制的页面范围</span>
  <span class="token literal-property property">el</span><span class="token operator">:</span><span class="token string">'#app'</span><span class="token punctuation">,</span>
  <span class="token comment">// 通过 render 函数, 把制定的组件渲染到 el 区域中 </span>
  <span class="token function-variable function">render</span><span class="token operator">:</span><span class="token parameter">h</span> <span class="token operator">=></span> <span class="token function">h</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="_3-webpack-打包发布" tabindex="-1"><a class="header-anchor" href="#_3-webpack-打包发布" aria-hidden="true">#</a> 3. webpack 打包发布</h3>
<p>上线前需要用 webpack 将应用进行整体打包, 可以通过 package.json 文件配置打包命令</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 该命令默认加载项目根目录中的 webpack.config.js 文件 </span>
<span class="token string-property property">"scripts"</span><span class="token operator">:</span><span class="token punctuation">{</span>
  <span class="token comment">// 打包命令 </span>
  <span class="token string-property property">"build"</span><span class="token operator">:</span><span class="token string">"webpack -p"</span><span class="token punctuation">,</span>
  <span class="token comment">// 用于开发调试的命令 </span>
  <span class="token string-property property">"dev"</span><span class="token operator">:</span> <span class="token string">"webpack-dev-server --open --host 127.0.0.1 --port 3000"</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></template>
