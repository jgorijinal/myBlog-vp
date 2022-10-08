<template><h1 id="模块化" tabindex="-1"><a class="header-anchor" href="#模块化" aria-hidden="true">#</a> 模块化</h1>
<h2 id="node-中模块的分类" tabindex="-1"><a class="header-anchor" href="#node-中模块的分类" aria-hidden="true">#</a> Node 中模块的分类</h2>
<ul>
<li><strong>内置模块</strong> (例如:fs, path , http 等)</li>
<li><strong>自定义模块</strong> (用户创建的每个 .js 文件, 都是自定义模块)</li>
<li><strong>第三方模块</strong> (有第三方开发出来的模块, 使用前需要先下载)</li>
</ul>
<h3 id="加载模块" tabindex="-1"><a class="header-anchor" href="#加载模块" aria-hidden="true">#</a> 加载模块</h3>
<p><strong>require()</strong> 方法, 可以加载需要的 内置模块, 用户自定义模块, 第三方模块 等</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 加载内置模块</span>
<span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'fs'</span><span class="token punctuation">)</span>

<span class="token comment">// 加载用户的自定义模块</span>
<span class="token keyword">const</span> custom  <span class="token operator">=</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./custom.js'</span><span class="token punctuation">)</span>

<span class="token comment">// 加载第三方模块</span>
<span class="token keyword">const</span> moment <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'moment'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p><strong>注意</strong> : 使用 require() 方法加载模块时, 会执行被夹在模块中的代码</p>
<h3 id="使用-require-方法注意点" tabindex="-1"><a class="header-anchor" href="#使用-require-方法注意点" aria-hidden="true">#</a> 使用 require() 方法注意点</h3>
<p>在使用 require() 加载用户自定义模块期间, <strong>可以省略 .js 的后缀名</strong></p>
<h2 id="模块作用域" tabindex="-1"><a class="header-anchor" href="#模块作用域" aria-hidden="true">#</a> 模块作用域</h2>
<p>在自定义模块中定义的<strong>变量, 方法</strong>等成员, <strong>只能在当前模块内访问</strong>, 这种<strong>模块级别的访问限制</strong>, 叫做模块作用域</p>
<p>作用 : 防止全局变量的污染</p>
<h3 id="module-对象" tabindex="-1"><a class="header-anchor" href="#module-对象" aria-hidden="true">#</a> module 对象</h3>
<p>每个 .js 自定义模块中都有一个 module 对象, 它里面<strong>存储了和当前模块有关的信息</strong></p>
<p><img src="@source/.vuepress/public/images/module1.png" alt="图片"></p>
<h3 id="module-exports-对象" tabindex="-1"><a class="header-anchor" href="#module-exports-对象" aria-hidden="true">#</a> module.exports 对象</h3>
<p>在自定义模块中, 可以使用 module.exports 对象, 将模块内的成员共享出去, 供外界使用</p>
<p>外界使用 <strong>require() 方法</strong>导入自定义模块, 得到的就是 module.export 所指的那个对象, 默认 <code>module.export = {}</code></p>
<h4 id="向外共享模块作用域中的成员" tabindex="-1"><a class="header-anchor" href="#向外共享模块作用域中的成员" aria-hidden="true">#</a> 向外共享模块作用域中的成员</h4>
<p>main.js</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 一个自定义模块, 默认情况下, module.exports = {}</span>

<span class="token keyword">const</span> age <span class="token operator">=</span> <span class="token number">20</span> 
module<span class="token punctuation">.</span>exports<span class="token punctuation">.</span>username <span class="token operator">=</span> <span class="token string">'张三'</span>

module<span class="token punctuation">.</span>exports<span class="token punctuation">.</span><span class="token function-variable function">sayHello</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Hello!'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports<span class="token punctuation">.</span>age <span class="token operator">=</span> age
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> m <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./m.js'</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span>  <span class="token comment">// { username:'张三', sayHello:[Function], age:20 }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="向外共享时的注意点" tabindex="-1"><a class="header-anchor" href="#向外共享时的注意点" aria-hidden="true">#</a> 向外共享时的注意点</h4>
<p>永远以 module.exports 指向的对象为准
<img src="@source/.vuepress/public/images/module2.png" alt="图片"></p>
<h3 id="exports-对象" tabindex="-1"><a class="header-anchor" href="#exports-对象" aria-hidden="true">#</a> exports 对象</h3>
<p><strong>默认情况下, exports 和 module.exports 指向的是同一个对象</strong>。 最终共享的结果, 还是以 module.exports 指向的独显过为准</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>module<span class="token punctuation">.</span>exports <span class="token operator">===</span> exports<span class="token punctuation">)</span>  <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="@source/.vuepress/public/images/module3.png" alt="图片"></p>
<h3 id="exports-和-module-exports-使用误区" tabindex="-1"><a class="header-anchor" href="#exports-和-module-exports-使用误区" aria-hidden="true">#</a> exports 和 module.exports 使用误区</h3>
<p>时刻要记住, require() 模块时, <em>得到的永远是 <strong>module.exports</strong> 指向的对象</em></p>
<p><strong>注意</strong>: <strong>不要</strong>在同一个模块<strong>同时</strong>使用 exports 和 module.exports
<img src="@source/.vuepress/public/images/mod1.png" alt="图片">
时刻要记住, require() 模块时, <em>得到的永远是 <strong>module.exports</strong> 指向的对象</em>
<img src="@source/.vuepress/public/images/mod2.png" alt="图片">
时刻要记住, require() 模块时, <em>得到的永远是 <strong>module.exports</strong> 指向的对象</em>
<img src="@source/.vuepress/public/images/mod3.png" alt="图片">
时刻要记住, require() 模块时, <em>得到的永远是 <strong>module.exports</strong> 指向的对象</em>
<img src="@source/.vuepress/public/images/mod4.png" alt="图片"></p>
<h2 id="模块化规范-commonjs" tabindex="-1"><a class="header-anchor" href="#模块化规范-commonjs" aria-hidden="true">#</a> 模块化规范 CommonJS</h2>
<p>Node.js 遵循了 CommonJS 模块化规范</p>
<p>规定:</p>
<ul>
<li>每个模块内部, <strong>module 变量</strong>代表当前模块</li>
<li>module 变量是一个对象, 它的 exports 属性(即 <strong>module.exports) 是对外的接口</strong></li>
<li>加载某个模块 , <em>其实就是加载该模块的 module.exports 属性</em>, <strong>require () 方法用于加载模块</strong></li>
</ul>
<h2 id="npm-与-包" tabindex="-1"><a class="header-anchor" href="#npm-与-包" aria-hidden="true">#</a> npm 与 包</h2>
<h2 id="安装包" tabindex="-1"><a class="header-anchor" href="#安装包" aria-hidden="true">#</a> 安装包</h2>
<p>安装指定的包</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> 包的名字
<span class="token comment"># 简写</span>
<span class="token function">npm</span> i 包的名字
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="安装指定版本" tabindex="-1"><a class="header-anchor" href="#安装指定版本" aria-hidden="true">#</a> 安装指定版本</h3>
<p><code>npm install</code> 会自动安装最新的包, 通过 <code>@ 符号</code>指定具体的版本</p>
<h3 id="卸载包" tabindex="-1"><a class="header-anchor" href="#卸载包" aria-hidden="true">#</a> 卸载包</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> uninstall 包名字
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="语义化版本规范" tabindex="-1"><a class="header-anchor" href="#语义化版本规范" aria-hidden="true">#</a> 语义化版本规范</h3>
<p>总共有三位数字, 例如 2.24.0</p>
<p>代表的含义</p>
<ul>
<li>第一位数字: <strong>大版本</strong></li>
<li>第二位数字: <strong>功能版本</strong></li>
<li>第三位数字: <strong>Bug 修复版本</strong></li>
</ul>
<p><strong>版本号提升规则</strong>: 只要前面的版本号增长了,  则后面的版本号<strong>归零</strong></p>
<h2 id="包管理配置文件" tabindex="-1"><a class="header-anchor" href="#包管理配置文件" aria-hidden="true">#</a> 包管理配置文件</h2>
<p><strong>项目根目录中</strong>的 package.json 文件, 用来记录与项目有关的一些配置文件</p>
<p>例如</p>
<ul>
<li>项目的名称, 版本号, 描述 等</li>
<li>项目中用到了哪些包</li>
<li>哪些包只在开发期间会用到 devDependencies</li>
<li>哪些包在开发和部署(以及上线之后)都会用到 dependencies</li>
</ul>
<h3 id="创建-package-json-文件" tabindex="-1"><a class="header-anchor" href="#创建-package-json-文件" aria-hidden="true">#</a> 创建 package.json 文件</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> init -y
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="dependencies-节点" tabindex="-1"><a class="header-anchor" href="#dependencies-节点" aria-hidden="true">#</a> dependencies 节点</h3>
<h3 id="devdependencies-节点" tabindex="-1"><a class="header-anchor" href="#devdependencies-节点" aria-hidden="true">#</a> devDependencies 节点</h3>
<p>某些包<strong>只在项目开发阶段会用到</strong>, 在<strong>项目上线之后不会用到</strong>, 则放在 devDependencies 节点中</p>
<p>与之对应, 某些宝在开发和项目上线以后都需要用到, 则放到 dependencies 节点上</p>
<p>以下命令会记录到 devDependencies 节点中</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i 包名 -D   <span class="token punctuation">(</span>-D的顺序不重要<span class="token punctuation">)</span>

<span class="token comment"># 上面命令式简写 , 等价于下面命令</span>
<span class="token function">npm</span> <span class="token function">install</span> 包名 --save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="下载包速度慢的问题" tabindex="-1"><a class="header-anchor" href="#下载包速度慢的问题" aria-hidden="true">#</a> 下载包速度慢的问题</h2>
<p>默认从国外服务器尽心下载, 因此下包速度慢</p>
<h3 id="切换-npm-的下包镜像源" tabindex="-1"><a class="header-anchor" href="#切换-npm-的下包镜像源" aria-hidden="true">#</a> 切换 npm 的下包镜像源</h3>
<p>下包的服务器地址</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 查看当前的下包镜像源</span>
<span class="token function">npm</span> config get registry
<span class="token comment"># 将下包的镜像源切换到 淘宝镜像源</span>
<span class="token function">npm</span> config <span class="token builtin class-name">set</span> <span class="token assign-left variable">registry</span><span class="token operator">=</span>https://registry.npm.taobao.org/
<span class="token comment"># 检查镜像源是否下载成功</span>
<span class="token function">npm</span> config get registry
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="nrm-切换下包服务器" tabindex="-1"><a class="header-anchor" href="#nrm-切换下包服务器" aria-hidden="true">#</a> nrm 切换下包服务器</h3>
<p>为了更加方便切换报的镜像源</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 将 nrm 安装位全局可用的工具</span>
<span class="token function">npm</span> i nrm -g
<span class="token comment"># 查看所有可用的镜像源</span>
nrm <span class="token function">ls</span>
<span class="token comment"># 将下包的镜像源切换为 taobao</span>
nrm use taobao
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="包的分类" tabindex="-1"><a class="header-anchor" href="#包的分类" aria-hidden="true">#</a> 包的分类</h2>
<h3 id="项目包" tabindex="-1"><a class="header-anchor" href="#项目包" aria-hidden="true">#</a> 项目包</h3>
<p>项目包分为两类:</p>
<ol>
<li><strong>开发依赖包</strong> - (被记录到 devDependencies 节点的包, 只在开发期间会用到)</li>
<li><strong>核心依赖包</strong> - (被记录到 dependencies 节点中的包,  在开发期间和项目上线之后都能用到)</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i 包名 -D  <span class="token comment"># 开发依赖包(被记录到 devDependencies 节点)</span>

<span class="token function">npm</span> i 包名     <span class="token comment"># 核心依赖包(被记录到 dependencies 节点)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="全局包" tabindex="-1"><a class="header-anchor" href="#全局包" aria-hidden="true">#</a> 全局包</h3>
<p>在执行 npm install 命令, 提供了 <code>-g</code>, 则把包安装位<strong>全局包</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i 包名 -g  <span class="token comment"># 全局安装</span>

<span class="token function">npm</span> uninstall 包名 -g <span class="token comment"># 卸载全局安装的包</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="规范的包结构" tabindex="-1"><a class="header-anchor" href="#规范的包结构" aria-hidden="true">#</a> 规范的包结构</h3>
</template>
