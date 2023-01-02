<template><!-- # webpack 实战
## webpack 性能优化 
### 提升 webpack 打包速度
1. `webpack` 版本越新，打包的效果肯定更好

2. 尽可能让 `loader` 的作用范围少

**exclude & include**
1. `exclude`：不需要处理的文件
2. `include`：需要处理的文件

![图片](../.vuepress/public/images/ude1.png)

降低 `loader` 被频发去执行的频率, 在转化或编译的过程被更少量的执行 `loader`

3. `Plugin` 尽可能精简并确保可靠
可以使用 `css-minimizer-webpack-plugin`这个插件对 CSS 文件进行代码的压缩，效果包括压缩、去重

其实这个插件只在生产环境有用, 在开发环境下我们是不需要对代码进行压缩的, 因为在开发环境代码只需要我一个人用

4. 使用 `DllPlugin` 提到打包速度 -->
<h2 id="webpack-性能优化" tabindex="-1"><a class="header-anchor" href="#webpack-性能优化" aria-hidden="true">#</a> webpack 性能优化</h2>
<h3 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> </h3>
<p>优化思路:</p>
<ul>
<li>当前构建速度如何?</li>
<li>如果慢, 是哪里慢?</li>
<li><code>webpack</code> 多个环节如何分析 ?</li>
</ul>
<p><code>spaed=measure-webpack-plugin</code> 插件</p>
<h3 id="构建速度优化-利用计算机多核优化构建" tabindex="-1"><a class="header-anchor" href="#构建速度优化-利用计算机多核优化构建" aria-hidden="true">#</a> 构建速度优化 - 利用计算机多核优化构建</h3>
<ul>
<li>js 是单线程, 是串行</li>
<li>电脑是多核, 是并行(更快)</li>
</ul>
<p><code>thread-loader</code>: 把 <code>loader</code> 以<strong>多线程</strong>的方式运行</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> thread-loader -D
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>具体写在某一个构建耗时比较大的 <code>loader</code> 的后面</p>
<p><code>webpack.config.js</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports<span class="token operator">=</span><span class="token punctuation">{</span>
  <span class="token operator">...</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span><span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span>
        <span class="token literal-property property">use</span><span class="token operator">:</span><span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span><span class="token string">'thread-loader'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">options</span><span class="token operator">:</span><span class="token punctuation">{</span>
              <span class="token literal-property property">workers</span><span class="token operator">:</span> <span class="token number">4</span> <span class="token comment">// 启动 4 核</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span><span class="token string">'babel-loader'</span>
            <span class="token operator">...</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>那么多进程一定快吗?</p>
<ul>
<li>多进程启动时间大约 <code>600ms</code></li>
<li>进程通信额外耗时</li>
</ul>
<p>所以使用在对耗时比较大的 <code>loader</code> 作用比较明显</p>
<h3 id="构建速度优化-使用缓存提升二次构建速度" tabindex="-1"><a class="header-anchor" href="#构建速度优化-使用缓存提升二次构建速度" aria-hidden="true">#</a> 构建速度优化 - 使用缓存提升二次构建速度</h3>
<p>注意是二次, 因为第一次缓存是没有的</p>
<p>缓存原理:</p>
<ul>
<li>当文件变化时, 只针对<strong>变化的依赖</strong>进行编译
<img src="@source/.vuepress/public/images/hchc1.png" alt="图片"></li>
</ul>
<p><strong>缓存配置:</strong></p>
<ul>
<li>缓存模式: <code>memory</code>, <code>filesystem</code></li>
<li>禁用缓存: <code>cache: false</code></li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports<span class="token operator">=</span><span class="token punctuation">{</span>
  <span class="token operator">...</span>
  <span class="token literal-property property">cache</span><span class="token operator">:</span><span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul>
<li>memory : 只在开发者模式生效, 开发者模式<strong>默认生效</strong></li>
</ul>
<p><strong>缓存配置 - <code>filesystem</code></strong> 持久化缓存</p>
<ul>
<li><code>type</code>: 缓存类型</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports<span class="token operator">=</span><span class="token punctuation">{</span>
  <span class="token operator">...</span>
  <span class="token literal-property property">cache</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span><span class="token string">'filesystem'</span> <span class="token comment">// 改成持久化缓存</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ul>
<li><code>buildDependencies</code>: 构建额外依赖代码, 推荐 <code>config:[__filename]</code></li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports<span class="token operator">=</span><span class="token punctuation">{</span>
  <span class="token operator">...</span>
  <span class="token literal-property property">cache</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span><span class="token string">'filesystem'</span><span class="token punctuation">,</span> <span class="token comment">// 改成持久化缓存</span>
    <span class="token literal-property property">config</span><span class="token operator">:</span><span class="token punctuation">[</span>__filename<span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ul>
<li><code>cacheDirectory</code>: 缓存目录, 默认 <code>node_modules/.cache/webpack</code></li>
<li><code>name</code>: 缓存名称, 创建隔离独立的缓存</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports<span class="token operator">=</span><span class="token punctuation">{</span>
  <span class="token operator">...</span>
  <span class="token literal-property property">cache</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span><span class="token string">'filesystem'</span><span class="token punctuation">,</span> <span class="token comment">// 改成持久化缓存</span>
    <span class="token literal-property property">config</span><span class="token operator">:</span><span class="token punctuation">[</span>__filename<span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'index'</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ul>
<li><code>version</code>: 缓存版本, 不同的版本不能使用</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports<span class="token operator">=</span><span class="token punctuation">{</span>
  <span class="token operator">...</span>
  <span class="token literal-property property">cache</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span><span class="token string">'filesystem'</span><span class="token punctuation">,</span> <span class="token comment">// 改成持久化缓存</span>
    <span class="token literal-property property">config</span><span class="token operator">:</span><span class="token punctuation">[</span>__filename<span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'index'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">version</span><span class="token operator">:</span><span class="token string">'index_1'</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p><img src="@source/.vuepress/public/images/vueloader11.png" alt="图片"></p>
</template>
