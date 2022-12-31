<template><h1 id="高级概念" tabindex="-1"><a class="header-anchor" href="#高级概念" aria-hidden="true">#</a> 高级概念</h1>
<h2 id="tree-shaking" tabindex="-1"><a class="header-anchor" href="#tree-shaking" aria-hidden="true">#</a> Tree Shaking</h2>
<p>一句话总结 : 把没有用到的代码删掉</p>
<p>在引入模块的时候, 我们不引入所有的代码, 而是只引入咱们需要的代码, 这就需要借助 <code>tree-shaking</code>来实现</p>
<p>摇树, 在一个模块里没用的东西就摇晃掉, 只对引入的东西做打包, 没引入就不打包</p>
<p><strong><code>tree-shaking</code> 只支持 <code>ES Module</code> 的引入方式(静态引入)</strong>, 因为ES6的模块依赖关系式确定的, 和运行时状态无关, 可以进行可靠的<strong>静态分析</strong>, 即从字面量上对代码分析</p>
<ul>
<li><code>usedExports</code> 只需要将 <code>usedExports</code> 设为 <code>true</code> ；使用之后，没被用上的代码在 <code>webpack</code> 打包中会加入<code>unused harmony export mul</code>注释，用来告知 <code>Terser</code> 在优化时，可以删除掉这段代码</li>
</ul>
<p><code>webpack.config.js</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span><span class="token string">'development'</span><span class="token punctuation">,</span>
  <span class="token operator">...</span>
  <span class="token literal-property property">optimization</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">usedExports</span><span class="token operator">:</span> <span class="token boolean">true</span> 
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ul>
<li><code>sideEffects</code> 配置方法在 <code>package.json</code> 中设置 <code>sideEffects</code> 属性，如果sideEffects设置为 <code>false</code> ，就是告知 webpack 可以安全的删除未用到的 <code>exports</code>即无副作用 。如果有些文件需要保留，可以设置为数组的形式</li>
</ul>
<p><code>package.json</code></p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"sideEffects"</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token comment">// tree-shaking 对全部模块都作用, 没有特殊处理的东西</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>比如 <code>import './style.css'</code> 他没有导出任何的内容, <code>tree-shaking</code> 会把它忽略掉, 这样会发生问题</p>
<p>比如  <code>在sideEffects</code> 里会把 <code>*.css</code> 文件写上去</p>
<p><code>package.json</code></p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"sideEffects"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"*.css"</span><span class="token punctuation">]</span> <span class="token comment">// 别让 tree-shaking 把.css 文件摇晃掉, 指定文件不让 tree-shaking</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>在 <code>development</code>的环境下即使我们用了 <code>tree-shaking</code>, 他也不会把我们的代码直接从打包后的代码去除掉, 他只是在代码里面提示一下
之所以这样做, 因为在开发环境生成的代码需要做调试, 如果开发环境下 <code>tree-shaking</code> 把我们的代码删除掉, 那么调试起来困难, 所以会保留</p>
<p>但真正把代码打包上线, <code>development</code> 变成 <code>production</code> , 那么这个时候 <code>tree-shaking</code> 才会真正生效</p>
<p>其实在 <code>production</code> 模式下关于 <code>tree-shaking</code> 的配置已经自动帮我们写好了, 这个时候连 <code>optimization</code>都可以不用写, 但是 <code>package.json</code> 的<code>sideEffects</code>的配置呢需要写一下</p>
<p>还有在 <code>production</code>模式下, 一般会配置 <code>devtool</code>:<code>cheap-module-source-map</code>, 这个内容在前面已经总结过, 并且在 <code>development</code>模式下
<code>devtool</code>一般设置成 <code>eval-cheap-module-source-map</code>, 开发环境下这个时候 <code>optimization</code>属性需要配置一下</p>
<h2 id="development-和-production-模式的区分打包" tabindex="-1"><a class="header-anchor" href="#development-和-production-模式的区分打包" aria-hidden="true">#</a> development 和 production 模式的区分打包</h2>
<p>几个方面上的差异</p>
<ol>
<li>
<p><code>development</code>模式下 <code>source-map</code> 是非常全的,  这样的话, 可以在开发环境下快速的定位代码的问题, 但是在 <code>production</code>环境下,
代码已经要上线了, 那么 <code>source-map</code>其实可以不那么重要, 所以在线上环境下 , 一般它的 <code>source-map</code> 会更简洁一些, 或者呢, 在线下环境下的
<code>source-map</code> 我们可以生成一个 <code>.map</code> 文件来你行存储</p>
</li>
<li>
<p>在开发环境下, 一般我们打包的代码不需要做压缩, 因为我们希望达到之后的代码比较明显的看到具体的说明项, 一旦代码上线, 那么代码就可以被压缩了, 在 <code>production</code>模式下, 代码呢, 一般是被压缩过得代码</p>
</li>
</ol>
<p>但现在就有个问题, 在开发环境和生产环境的切换过程当中, 我们需要不断的修改 <code>webpack.config.js</code> 配置文件, 这就比较麻烦了</p>
<p>所以可以这么做, 生成 <code>webpack.dev.js</code> 文件表示开发环境下的配置文件, 在创建 <code>webpack.prod.js</code> 文件, 表示一旦要打包线上代码就用这个配置文件</p>
<p><code>webpack.dev.js</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'html-webpack-plugin'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> CleanWebpackPlugin <span class="token punctuation">}</span><span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'clean-webpack-plugin'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> webpack <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'webpack'</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span><span class="token string">'development'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">devtool</span><span class="token operator">:</span><span class="token string">'cheap-module-eval-source-map'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">main</span><span class="token operator">:</span><span class="token string">'./src/index.js'</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span>path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'dist'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">'[name].js'</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">devServer</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">contentBase</span><span class="token operator">:</span><span class="token string">'./dist'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">open</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">hot</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">hotOnly</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token literal-property property">port</span><span class="token operator">:</span><span class="token number">8080</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span><span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">exclude</span><span class="token operator">:</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">loader</span><span class="token operator">:</span><span class="token string">'babel-loader'</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.(jpg|gif|svg)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span><span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span><span class="token string">'url-loader'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">options</span><span class="token operator">:</span><span class="token punctuation">{</span>
              <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'[name]_[hash].[ext]'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">outputPath</span><span class="token operator">:</span><span class="token string">'images/'</span>
              <span class="token literal-property property">limit</span><span class="token operator">:</span><span class="token number">10240</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.(eot|ttf|svg)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">loader</span><span class="token operator">:</span><span class="token string">'file-loader'</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.scss$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span><span class="token punctuation">[</span>
          <span class="token string">'style-loader'</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span><span class="token string">'css-loader'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">options</span><span class="token operator">:</span><span class="token punctuation">{</span>
              <span class="token literal-property property">importLoaders</span><span class="token operator">:</span><span class="token number">2</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token string">'sass-loader'</span><span class="token punctuation">,</span>
          <span class="token string">'postcss-loader'</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span><span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">template</span><span class="token operator">:</span><span class="token string">'./src/index.html'</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token keyword">new</span> <span class="token class-name">CleanWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>HotModuleReplacementPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">optimization</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">usedExports</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br></div></div><p><code>webpack.prod.js</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'html-webpack-plugin'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> CleanWebpackPlugin <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'clean-webpack-plugin'</span><span class="token punctuation">)</span>
<span class="token comment">// const webpack = require('webpack')</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span><span class="token string">'production'</span><span class="token punctuation">,</span>  <span class="token comment">// 生产环境</span>
  <span class="token literal-property property">devtool</span><span class="token operator">:</span><span class="token string">'cheap-module-source-map'</span><span class="token punctuation">,</span> <span class="token comment">// 这里也要该成这样</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">main</span><span class="token operator">:</span><span class="token string">'./src/index.js'</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span>path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'dist'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">'[name].js'</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// devServer:{  // 开发环境不需要 devServer</span>
  <span class="token comment">//   contentBase:'./dist',</span>
  <span class="token comment">//   open:true,</span>
  <span class="token comment">//   hot:true,</span>
  <span class="token comment">//   hotOnly: true</span>
  <span class="token comment">//   port:8080</span>
  <span class="token comment">// },</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span><span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">exclude</span><span class="token operator">:</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">loader</span><span class="token operator">:</span><span class="token string">'babel-loader'</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.(jpg|gif|svg)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span><span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span><span class="token string">'url-loader'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">options</span><span class="token operator">:</span><span class="token punctuation">{</span>
              <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'[name]_[hash].[ext]'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">outputPath</span><span class="token operator">:</span><span class="token string">'images/'</span>
              <span class="token literal-property property">limit</span><span class="token operator">:</span><span class="token number">10240</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.(eot|ttf|svg)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">loader</span><span class="token operator">:</span><span class="token string">'file-loader'</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.scss$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span><span class="token punctuation">[</span>
          <span class="token string">'style-loader'</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span><span class="token string">'css-loader'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">options</span><span class="token operator">:</span><span class="token punctuation">{</span>
              <span class="token literal-property property">importLoaders</span><span class="token operator">:</span><span class="token number">2</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token string">'sass-loader'</span><span class="token punctuation">,</span>
          <span class="token string">'postcss-loader'</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span><span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">template</span><span class="token operator">:</span><span class="token string">'./src/index.html'</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token keyword">new</span> <span class="token class-name">CleanWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">// new webpack.HotModuleReplacementPlugin() // 不需要</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// optimization:{   // 不需要</span>
  <span class="token comment">//   usedExports: true</span>
  <span class="token comment">// },</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br></div></div><p><code>package.json</code></p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  ...
  <span class="token property">"scripts"</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">"dev"</span><span class="token operator">:</span><span class="token string">"webpack-dev-server --config webpack.dev.js"</span><span class="token punctuation">,</span>  <span class="token comment">// 开发时</span>
    <span class="token property">"build"</span><span class="token operator">:</span><span class="token string">"webpack --config webpack.prod.js"</span><span class="token punctuation">,</span>         <span class="token comment">// 上线时</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>但可以发现在 <code>webpack.dev.js</code> 和 <code>webpack.prod.js</code> 有很多重复的代码</p>
<p>所以可以把公用的的代码提取出来, 放到 <code>webpack.common.js</code> 文件上面</p>
<p><code>webpack.common.js</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'html-webpack-plugin'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> CleanWebpackPlugin <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'clean-webpack-plugin'</span><span class="token punctuation">)</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">main</span><span class="token operator">:</span><span class="token string">'./src/index.js'</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span>path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'dist'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">'[name].js'</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span><span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">exclude</span><span class="token operator">:</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">loader</span><span class="token operator">:</span><span class="token string">'babel-loader'</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.(jpg|gif|svg)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span><span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span><span class="token string">'url-loader'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">options</span><span class="token operator">:</span><span class="token punctuation">{</span>
              <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'[name]_[hash].[ext]'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">outputPath</span><span class="token operator">:</span><span class="token string">'images/'</span>
              <span class="token literal-property property">limit</span><span class="token operator">:</span><span class="token number">10240</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.(eot|ttf|svg)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">loader</span><span class="token operator">:</span><span class="token string">'file-loader'</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.scss$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span><span class="token punctuation">[</span>
          <span class="token string">'style-loader'</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span><span class="token string">'css-loader'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">options</span><span class="token operator">:</span><span class="token punctuation">{</span>
              <span class="token literal-property property">importLoaders</span><span class="token operator">:</span><span class="token number">2</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token string">'sass-loader'</span><span class="token punctuation">,</span>
          <span class="token string">'postcss-loader'</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span><span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">template</span><span class="token operator">:</span><span class="token string">'./src/index.html'</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token keyword">new</span> <span class="token class-name">CleanWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br></div></div><p>然后在 <code>webpack.dev.js</code> 和 <code>webpack.prod.js</code> 里重复的逻辑都删掉</p>
<p>光删掉是不行的, 需要把 <code>common</code> 里的配置需要合并再输出 , 这个时候咱们需要一个模块 <code>webpack-merge</code></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> webpack-merge -D
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>所以在开发环境配置文件 <code>webpack.dev.js</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> webpack <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'webpack'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> merge <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'webpack-merge'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> commonConfig <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./webpack.common.js'</span><span class="token punctuation">)</span> <span class="token comment">// 引入公共的配置</span>

<span class="token keyword">const</span> devConfig <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token comment">// 开发环境下独有配置</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span><span class="token string">'development'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">devtool</span><span class="token operator">:</span> <span class="token string">'cheap-module-eval-source-map'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">devServer</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">contentBase</span><span class="token operator">:</span><span class="token string">'./dist'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">hot</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">hotOnly</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">port</span><span class="token operator">:</span><span class="token number">8080</span><span class="token punctuation">,</span>
    <span class="token literal-property property">open</span><span class="token operator">:</span><span class="token boolean">true</span>
  <span class="token punctuation">}</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span><span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>HotModuleReplacement</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">optimization</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">userExports</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">merge</span><span class="token punctuation">(</span>commonConfig <span class="token punctuation">,</span> devConfig<span class="token punctuation">)</span>  <span class="token comment">// 合并配置</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>然后在生产环境配置文件 <code>webpack.prod.js</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> merge <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'webpack-merge'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> commonConfig <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'webpack.common.js'</span><span class="token punctuation">)</span> <span class="token comment">// 公共的配置</span>

<span class="token keyword">const</span> prodConfig <span class="token operator">=</span> <span class="token punctuation">{</span>  <span class="token comment">// 生产环境独有的配置</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span><span class="token string">'production'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">devtool</span><span class="token operator">:</span><span class="token string">'cheap-module-source-map'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">merge</span><span class="token punctuation">(</span>commonConfig <span class="token punctuation">,</span> prodConfig<span class="token punctuation">)</span>  <span class="token comment">// 合并</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>最后重新运行对应的命令</p>
<p>还有在有些框架, 他会把这些配置文件 <code>webpack.common.js</code>,<code>webpack.dev.js</code>,<code>webpack.prod.js</code> 都放到独立的 <code>build</code> 文件下下面</p>
<p>所以这个情况赞们需要修改对应 <code>package.json</code> 的执行命令的路径</p>
<p><code>package.json</code></p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  ...
  <span class="token property">"scripts"</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">"dev"</span><span class="token operator">:</span><span class="token string">"webpack-dev-server --config ./build/webpack.dev.js"</span><span class="token punctuation">,</span>  <span class="token comment">// 开发时</span>
    <span class="token property">"build"</span><span class="token operator">:</span><span class="token string">"webpack --config ./build/webpack.prod.js"</span><span class="token punctuation">,</span>         <span class="token comment">// 上线时</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>这里需要额外注意  , 因为配置文件在 build 目录下 , 所以在生成打包后的文件时候会根据配置文件所在的当前目录及 build 文件夹上会生成dist 目录和打包文件, 但是我希望它打包到<code>根目录</code>下的 dist 文件夹下面, 这个时候需要配置一下 <code>output</code></p>
<p><code>webpack.common.js</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span><span class="token operator">...</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span>path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'../dist'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>  
    <span class="token comment">// 会根据配置文件的路径(build文件夹下)生成产物, 所以这里需要写 ../dist (上一层也就是跟木下生成 dist 目录) </span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">'[name].js'</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">.</span><span class="token punctuation">.</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span><span class="token punctuation">[</span>
    <span class="token operator">...</span>
    <span class="token keyword">new</span> <span class="token class-name">CleanWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
  <span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>OK!! 大功告成</p>
<p><strong>总结</strong>一下: 了解了一下<strong>为什么</strong>需要开发环境和生产环境,  开发环境有 <code>devServer</code> 方便我们开发, 生产环境需要对带吗进行压缩并且对<code>source-map</code>进行精简, 所以需要建立不同环境有自己的配置文件, 有了配置文件之后呢, 会发现, 这两个配置文件, 实际上有很多公共的内容,
我们可以吧公共的内容提取出来放到 <code>common</code> 的文件里,  最后的在不同的环境下引入 common 的配置内容, 通过 <code>webpack-merge</code> 这个第三方模块
可以吧 common 的配置内容和对应不同环境的独立的配置内容进行合并, 最后生成环境下要使用的 config 的内容</p>
<h2 id="webpack-和-code-splitting" tabindex="-1"><a class="header-anchor" href="#webpack-和-code-splitting" aria-hidden="true">#</a> Webpack 和 Code Splitting</h2>
<p>代码分割的意义:</p>
<ul>
<li>不是所有内容都需要在首屏加载</li>
<li>按需加载可以节省网络资源, 提升首屏速度</li>
</ul>
<p>将代码分离到不同的 <code>bundle</code> 中，之后可以<strong>按需加载</strong>，或者<strong>并行加载</strong>这些文件。默认情况下，所有的 <code>JS</code> 代码在首页全部加载，会影响到首页的加载速度。代码可以分出更小的bundle，以及控制资源加载的优先级，提供代码的加载性能, 更是可以<strong>优化加载的时间</strong></p>
<ul>
<li>打包文件会很大, 加载时间会长</li>
<li>我们改了业务代码, 那么用户需要重新加载对应的 <code>main.js</code> 才能显示最新的内容</li>
<li>有没有办法解决这个问题?</li>
</ul>
<p>代码分割 三种:</p>
<ul>
<li>设置 <code>entry</code> 多入口</li>
<li>设置内置的 <code>SplitChunksPlugin</code> 相关属性；</li>
<li>通过 <code>import()</code> 动态引入模块, 异步加载</li>
</ul>
<h3 id="splitchunks" tabindex="-1"><a class="header-anchor" href="#splitchunks" aria-hidden="true">#</a> SplitChunks</h3>
<p>一种分包的模式是 <code>splitChunk</code> ，它是使用 <code>SplitChunksPlugin</code> 来实现的：</p>
<ul>
<li>因为该插件 <code>webpack</code> 已经默认安装和集成，不需要单独安装和直接使用该插件；</li>
<li>只需要提供 <code>SplitChunksPlugin</code> 相关的配置信息即可；</li>
</ul>
<p>有了 <code>webpack</code> , 会根据插件自动地执行 <code>code Splitting</code></p>
<p><code>webpack.common.js</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports<span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span>
  <span class="token literal-property property">optimization</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">splitChunks</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">chunks</span><span class="token operator">:</span> <span class="token string">'all'</span>   <span class="token comment">// 如果splitChunks 是空对象, 那么 chunks 的默认值是 async , 但设置成了 all </span>
    <span class="token punctuation">}</span> 
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>通过合理的代码分割, 可以让我们运行的项目性能更高, 那以前没有 <code>webpack</code> 的时候, 我们需要手动的去思考, 代码怎么做分割合适, 然后自己做分割
, 但是有了 <code>webpack</code> 之后只需要在配置中去使用几个简单的配置项, 他就知道怎么做分割最为合适, 自动帮我们分割。</p>
<p><img src="@source/.vuepress/public/images/chunkname1.png" alt="图片">
发现魔法注释我们填写的是 lodash,为什么打包后生成的文件名是 vendors~lodash,多了一个 vendors 呢?因为受配置文件中 optimization 的默认配置项的值的影响</p>
<h3 id="splitchunksplugin-的配置参数" tabindex="-1"><a class="header-anchor" href="#splitchunksplugin-的配置参数" aria-hidden="true">#</a> SplitChunksPlugin 的配置参数</h3>
<p><a href="https://webpack.docschina.org/plugins/split-chunks-plugin/" target="_blank" rel="noopener noreferrer">SplitChunksPlugin 的配置参数<ExternalLinkIcon/></a></p>
<p>看一看这些配置项</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">//...</span>
  <span class="token literal-property property">optimization</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">splitChunks</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">chunks</span><span class="token operator">:</span> <span class="token string">'all'</span><span class="token punctuation">,</span>  <span class="token comment">// 对同步和异步的代码都生效, 有三个值: async, all , initial</span>
      <span class="token literal-property property">minSize</span><span class="token operator">:</span> <span class="token number">30000</span><span class="token punctuation">,</span>  <span class="token comment">// 如果一个包拆分出来, 达不到 minSize (30kb) , 那么这个包就不会做代码的分割</span>
      <span class="token comment">// maxSize: 50000,  // 一般不配 </span>
      <span class="token literal-property property">minRemainingSize</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> 
      <span class="token literal-property property">minChunks</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token comment">// 至少被引入的此时 , 默认是 1 , 如果写了2, 但实际引入了2次, 那么久不会做代码分割</span>
      <span class="token literal-property property">maxAsyncRequests</span><span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span>
      <span class="token literal-property property">maxInitialRequests</span><span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span>
      <span class="token literal-property property">enforceSizeThreshold</span><span class="token operator">:</span> <span class="token number">50000</span><span class="token punctuation">,</span>
      <span class="token literal-property property">automaticNameDelimiter</span><span class="token operator">:</span><span class="token string">'~'</span>  <span class="token comment">// 组合文件之间, 分割后的代码会以 xxxx~xxxx.js 的形式以 ~ 链接生成 , 如果在下面赔了 filename 就被覆盖</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>  <span class="token comment">// 控制缓存组的  filename 是否有效</span>
      <span class="token literal-property property">cacheGroups</span><span class="token operator">:</span> <span class="token punctuation">{</span>         <span class="token comment">// 对拆分地包进行*分组* , 比如 lodash 被拆分之后并不会立即打包, 会走这条规则  </span>
        <span class="token literal-property property">defaultVendors</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[\\/]node_modules[\\/]</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>  <span class="token comment">// 检查如果 lodash 这种库是不是在 node_modules 目录下的, 如果是, 就打包单独放到文件里</span>
          <span class="token literal-property property">priority</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">10</span><span class="token punctuation">,</span>  <span class="token comment">// 优先级 : -10 大于 -20 , 所以如果分组的 `test` 都满组条件会走这条路</span>
          <span class="token literal-property property">reuseExistingChunk</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token literal-property property">filename</span><span class="token operator">:</span><span class="token string">'vendors.js'</span>   <span class="token comment">// 分包出来的文件名会变成自定义的文件名 vendors.js,  原来是 vendors~main.js (后面的这个 'main' 是根据 output 的配置决定的)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token keyword">default</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">minChunks</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
          <span class="token literal-property property">priority</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">20</span><span class="token punctuation">,</span>
          <span class="token literal-property property">reuseExistingChunk</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 如果一个模块已经被打包过了, 那我再打包的时候就忽略这个模块直接使用之前被大包过的内容</span>
          <span class="token literal-property property">filename</span><span class="token operator">:</span><span class="token string">'common.js'</span>  <span class="token comment">// 分组分割后的文件名变成了 common.js , 原来是 default~main.js</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><p>如果我们打包一个<strong>同步</strong>的代码, 不仅仅会走 <code>chunks:'all'/'async'</code>这个配置参数, 实际上他还会往下走到 <code>cacheGroups</code> 这个参数, 我知道你要打包一个同步的库, 那怎么打包怎么根据下面的一个个组来进行打包, 如果发现引入的库, 它实际上是在 <code>node_modules</code>里面的话, 那么在打包的过程中呢, 我就会把这个库, 分割到叫做 <code>vendors.js</code> 的文件里去, 这两个配置是配合用的 <code>chunks</code> 和 <code>cacheGroups</code></p>
<p>简单来说如果咱们引入了一个 <code>lodash</code>, 一个 <code>jquery</code> , 那么代码打包怎么样? 如果想要把它们打包分割到一个 <code>js</code> 文件, 那么没有 <code>cacheGroups</code> 就做不到, 实际上 <code>cacheGroups</code> 相当于是一个缓存组, 那打包 <code>jquery</code> 的时候先不着急打包这个 <code>jquery</code> 文件, 我先放到这个组里先缓存着, 我发现 <code>lodash</code> 也符合这个组的要求, 我也缓存到这个组里面,  当所有的模块分析好了之后呢, 把符合这个组的所有的模块都打包到一起去</p>
<p>所以在做同步代码的代码分割, 如果发现我们打包的文件复合上面这些配置逻辑, 实际上, 这个文件不会被直接进行代码分割, 还会走到 <code>cacheGroups</code>这个缓存组里面去, 如果我的这个文件复符合
缓存分组里面的要求, 他就会把文件打包到分组对应的这个最终文件里面去</p>
<h3 id="lazy-loading-懒加载-chunk-是什么" tabindex="-1"><a class="header-anchor" href="#lazy-loading-懒加载-chunk-是什么" aria-hidden="true">#</a> Lazy Loading 懒加载 , Chunk 是什么?</h3>
<p>懒加载原理就是使用了 <code>import()</code> 语法, 真正需要时在请求代码</p>
<p><code>webpack</code> 解析依赖的时候，<strong>遇到import()形式的的引入方式就会将这段代码分割成一个单独的 <code>js</code> 文件</strong>，等到要动态导入的时候，<code>webpack</code>会构造一个 script 标签，由浏览器异步请求 js 文件导入</p>
<p>作用: 可以优化首屏加载，因为 <code>webpack</code> 会打包会默认只会生成一个 <code>bundle</code> 文件，但是懒加载之后会把部分代码分割成后续再加载的 <code>js</code> 文件，<strong>减少了主要 <code>bundle</code> 的体积，加快了加载时间</strong>。</p>
<ol>
<li><code>import('')</code></li>
</ol>
<p><code>import ‘./xxxx’</code> 改成 <code>() =&gt; import(‘lazyComponent.js’).then(data=&gt;console.log(data))</code></p>
<p><code>ES6</code> 的提案，返回一个 <code>promise</code>，导入的模块在 <code>then</code> 中拿到</p>
<p>用函数引入，而且使用括号括起来，现在只能通过编译去使用， 而且 <code>babel</code> 为了解析 <code>import()</code> 语法需要引入一个插件：<code>babel-plugin-syntax-dynamic-import</code></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> @/babel/plugin-syntax-dynamic-import -D
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>这个插件使用方式在 <code>.babelrc</code> 里加：<code>“plugins”: [“syntax-dynamic-import”]</code></p>
<p>或者 在 <code>babel.config.js</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports<span class="token operator">=</span><span class="token punctuation">{</span>
  <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">[</span>
        <span class="token string">'@babel/preset-env'</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token string-property property">"useBuiltIns"</span><span class="token operator">:</span> <span class="token string">"usage"</span><span class="token punctuation">,</span> 
          <span class="token string-property property">"corejs"</span><span class="token operator">:</span> <span class="token string">"3.8"</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"@/babel/plugin-syntax-dynamic-import"</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p><img src="@source/.vuepress/public/images/mofa1.png" alt="图片"></p>
<h2 id="打包分析-preload-预加载-prefetch-预获取" tabindex="-1"><a class="header-anchor" href="#打包分析-preload-预加载-prefetch-预获取" aria-hidden="true">#</a> 打包分析, preload 预加载, prefetch 预获取</h2>
<p><a href="https://github.com/webpack-contrib/webpack-bundle-analyzer" target="_blank" rel="noopener noreferrer">webpack-bundle-analyzer<ExternalLinkIcon/></a>一个 plugin 和 CLI 工具，它将 bundle 内容展示为一个便捷的、交互式、可缩放的树状图形式。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> --save-dev webpack-bundle-analyzer
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> BundleAnalyzerPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'webpack-bundle-analyzer'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>BundleAnalyzerPlugin<span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">BundleAnalyzerPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h4 id="prefetch-预获取" tabindex="-1"><a class="header-anchor" href="#prefetch-预获取" aria-hidden="true">#</a> prefetch 预获取</h4>
<p>空闲的时间偷偷把其他某块的代码下载下来, 利用空闲的时间</p>
<p>预获取<code>(prefetch)</code> <strong>魔法注释</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">...</span>
<span class="token keyword">import</span><span class="token punctuation">(</span><span class="token comment">/* webpackPrefetch: true */</span> <span class="token string">'./path/to/LoginModal.js'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>这会生成 <code>&lt;link rel=&quot;prefetch&quot; href=&quot;login-modal-chunk.js&quot;&gt;</code> 并追加到页面头部，指示着浏览器在闲置时间预取 <code>login-modal-chunk.js</code> 文件</p>
<p><strong>这个注释<code>/* webpackPrefetch:true */</code>就能使异步模块在网络空闲的时候能够被预先加载</strong></p>
<p><code>prefetch</code>  和 <code>preload</code> 的区别:</p>
<ul>
<li>preload chunk 会在父 chunk 加载时，以<strong>并行</strong>方式开始加载。prefetch chunk 会在父 chunk <strong>加载结束后</strong>开始加载</li>
<li>preload chunk 具有中等优先级，并立即下载。prefetch chunk 在<strong>浏览器闲置时</strong>下载。</li>
<li>preload chunk 会在父 chunk 中立即请求，用于当下时刻。prefetch chunk 会用于未来的某个时刻</li>
<li>浏览器支持程度不同</li>
</ul>
<p>这样看来：
<code>preload</code> 主要用于预加载<strong>当前</strong>页面需要的资源；而 <code>prefetch</code> 主要用于加载<strong>将来</strong>页面可能需要的资源；</p>
<h2 id="css-文件的代码分割" tabindex="-1"><a class="header-anchor" href="#css-文件的代码分割" aria-hidden="true">#</a> CSS 文件的代码分割</h2>
<p>先看一看小的知识点</p>
<p>在 <code>output</code> 的配置中, 可能会看得到这样的配置:</p>
<p><code>webpack.common.js</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span>path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'dist'</span><span class="token punctuation">)</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">[name].js</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
    <span class="token literal-property property">chunkFIlename</span><span class="token operator">:</span> <span class="token string">'[name].chunk.js'</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>打包生成 <img src="@source/.vuepress/public/images/chch11.png" alt="图片"></p>
<p><code>src/index.js</code> 文件会走的时候 <code>filename</code> 这个配置参数, 像 <code>lodash</code> 是通过异步加载的方式引入对应的代码, 如果是间接引用了这种模块,
那么打包生成的文件名就会走 <code>chunkFilename</code> 这块的配置内容</p>
<h3 id="minicssextractplugin" tabindex="-1"><a class="header-anchor" href="#minicssextractplugin" aria-hidden="true">#</a> MiniCssExtractPlugin</h3>
<p>一句话总结: 生成一个单独的 <code>css</code>文件, 需要注意<strong>不能和 <code>style-loader</code> 一起使用</strong>, 要用 <code>MiniCssExtractPlugin.loader</code></p>
<p>默认情况, 打包并不会生成一个 CSS 文件, webpack 在进行打包的时候, 他会把 CSS 文件直接打包到 js 里面, 这就是经常听说的 CSS in JS 的概念,
但我希望在打包生成代码的时候, 如果我引入的是 CSS 文件, 那么把 CSS 文件单独打包到 dist 目录下, 生成单独的 <code>css</code> 文件, 而不是打包到 js 文件里</p>
<p>本插件<strong>会将 CSS 提取到单独的文件中</strong>，为<strong>每个包含 CSS 的 JS 文件创建一个 CSS 文件</strong>，并且支持 CSS 和 SourceMaps 的按需加载</p>
<p>最后会通过 <code>link</code> 标签引入打包出来的 <code>.css</code> 文件</p>
<p><a href="https://webpack.docschina.org/plugins/mini-css-extract-plugin" target="_blank" rel="noopener noreferrer">MiniCssExtractPlugin 官方文档<ExternalLinkIcon/></a></p>
<p>安装</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> --save-dev mini-css-extract-plugin
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><code>MiniCssExtractPlugin</code> 只在<strong>生产环境</strong>下使用</p>
<p><code>src/index.js</code> 引入了一个 <code>css</code> 文件</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">'./style.css'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><code>MiniCssExtractPlugin</code> 的官网基本的配置是这样的, 实际上使用这个插件, 还需要对 <code>loader</code> 进行配置, 所以现在需要区分 <code>开发/生产/公用</code>环境的配置文件</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> MiniCssExtractPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"mini-css-extract-plugin"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">MiniCssExtractPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span><span class="token string">'[name].css'</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token comment">// &lt;-</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.css$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>MiniCssExtractPlugin<span class="token punctuation">.</span>loader<span class="token punctuation">,</span> <span class="token string">"css-loader"</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// &lt;- 这个 loader 不能跟 style-loader 一起使用</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>首先到 <code>webpack.common.js</code> 这个文件, 对 <code>sass 和 css</code> 的 <code>loader</code> 部分的代码线剪切一下</p>
<p>现在要做的事情就是: 在开发环境是使用 <code>style-loader</code>, 但在生产环境使用的是  <code>MiniCssExtractPlugin</code> 它里面提供的 <code>loader</code>, 所以要区分一下</p>
<p>然后到开发环境中 <code>webpack.dev.js</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> webpack <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'webpack'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> merge <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'webpack-merge'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> commonConfig <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./webpack.common.js'</span><span class="token punctuation">)</span> 

<span class="token keyword">const</span> devConfig <span class="token operator">=</span> <span class="token punctuation">{</span> 
  <span class="token literal-property property">mode</span><span class="token operator">:</span><span class="token string">'development'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">devtool</span><span class="token operator">:</span> <span class="token string">'cheap-module-eval-source-map'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">devServer</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">contentBase</span><span class="token operator">:</span><span class="token string">'./dist'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">hot</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">hotOnly</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">port</span><span class="token operator">:</span><span class="token number">8080</span><span class="token punctuation">,</span>
    <span class="token literal-property property">open</span><span class="token operator">:</span><span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span><span class="token punctuation">{</span>   <span class="token comment">// 开发环境依然使用 style-loader</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span><span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.scss$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span><span class="token punctuation">[</span>
          <span class="token string">'style-loader'</span><span class="token punctuation">,</span>   <span class="token comment">// &lt;-</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span><span class="token string">'css-loader'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">options</span><span class="token operator">:</span><span class="token punctuation">{</span>
              <span class="token literal-property property">importLoaders</span><span class="token operator">:</span><span class="token number">2</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token string">'sass-loader'</span><span class="token punctuation">,</span>
          <span class="token string">'postcss-loader'</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
       <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span><span class="token punctuation">[</span>
          <span class="token string">'style-loader'</span><span class="token punctuation">,</span>   <span class="token comment">// &lt;-</span>
          <span class="token string">'css-loader'</span><span class="token punctuation">,</span>
          <span class="token string">'postcss-loader'</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span><span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>HotModuleReplacement</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">optimization</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">userExports</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">merge</span><span class="token punctuation">(</span>commonConfig <span class="token punctuation">,</span> devConfig<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br></div></div><p>到生产环境 <code>webpack.prod.js</code>, 使用 <code>MiniCssExtractPlugin.loader</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> merge <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'webpack-merge'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> commonConfig <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'webpack.common.js'</span><span class="token punctuation">)</span> 
<span class="token keyword">const</span> MiniCssExtractPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"mini-css-extract-plugin"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> prodConfig <span class="token operator">=</span> <span class="token punctuation">{</span> 
  <span class="token literal-property property">mode</span><span class="token operator">:</span><span class="token string">'production'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">devtool</span><span class="token operator">:</span><span class="token string">'cheap-module-source-map'</span><span class="token punctuation">,</span>
   <span class="token literal-property property">module</span><span class="token operator">:</span><span class="token punctuation">{</span>   <span class="token comment">// 开发环境依然使用 MiniCssExtractPlugin.loader</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span><span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.scss$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span><span class="token punctuation">[</span>
          MiniCssExtractPlugin<span class="token punctuation">.</span>loader<span class="token punctuation">,</span>   <span class="token comment">// &lt;-</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span><span class="token string">'css-loader'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">options</span><span class="token operator">:</span><span class="token punctuation">{</span>
              <span class="token literal-property property">importLoaders</span><span class="token operator">:</span><span class="token number">2</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token string">'sass-loader'</span><span class="token punctuation">,</span>
          <span class="token string">'postcss-loader'</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
       <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span><span class="token punctuation">[</span>
          MiniCssExtractPlugin<span class="token punctuation">.</span>loader<span class="token punctuation">,</span> <span class="token comment">// &lt;-</span>
          <span class="token string">'css-loader'</span><span class="token punctuation">,</span>
          <span class="token string">'postcss-loader'</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">MiniCssExtractPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>  <span class="token comment">// // &lt;-  配置 plugin</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">merge</span><span class="token punctuation">(</span>commonConfig <span class="token punctuation">,</span> prodConfig<span class="token punctuation">)</span>  <span class="token comment">// 合并</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div><p>还需要注意的是因为 <code>tree-shaking</code> 的影响, 使用 <code>import ./style.css</code> 代码会被摇晃掉, 所以注意要在 <code>package.json</code> 配置</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"sideEffects"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"*.css"</span><span class="token punctuation">]</span> <span class="token comment">// 别让 tree-shaking 把.css 文件摇晃掉, 指定文件不让 tree-shaking</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>还有些高级配置: 比如: <a href="https://webpack.docschina.org/plugins/mini-css-extract-plugin#minimizing-for-production" target="_blank" rel="noopener noreferrer">生产模式压缩 css 文件<ExternalLinkIcon/></a></p>
<p><a href="https://webpack.docschina.org/plugins/mini-css-extract-plugin#extracting-all-css-in-a-single-file" target="_blank" rel="noopener noreferrer">提取所有的 CSS 到一个文件中<ExternalLinkIcon/></a>用过使用 <code>optimization.splitChunks.cacheGroups</code> 选项，所有的 CSS 可以被提取到一个 CSS 文件中</p>
<h2 id="css-代码压缩-cssminimizerwebpackplugin" tabindex="-1"><a class="header-anchor" href="#css-代码压缩-cssminimizerwebpackplugin" aria-hidden="true">#</a> CSS 代码压缩 : CssMinimizerWebpackPlugin</h2>
<p><a href="https://webpack.docschina.org/plugins/css-minimizer-webpack-plugin/#root" target="_blank" rel="noopener noreferrer">CssMinimizerWebpackPlugin 官方文档<ExternalLinkIcon/></a></p>
<p>安装</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> css-minimizer-webpack-plugin --save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> MiniCssExtractPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"mini-css-extract-plugin"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> CssMinimizerPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"css-minimizer-webpack-plugin"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// &lt;- </span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">.s?css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>MiniCssExtractPlugin<span class="token punctuation">.</span>loader<span class="token punctuation">,</span> <span class="token string">"css-loader"</span><span class="token punctuation">,</span> <span class="token string">"sass-loader"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">optimization</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">minimizer</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token keyword">new</span> <span class="token class-name">CssMinimizerPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>  <span class="token comment">// &lt;- css 代码压缩</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">MiniCssExtractPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span> 
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>这将<strong>仅在生产环境</strong>开启 <code>CSS</code> 优化</p>
<p>如果还想在开发环境下启用 CSS 优化，请将 <code>optimization.minimize 设置为 true</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// [...]</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">optimization</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// [...]</span>
    <span class="token literal-property property">minimize</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="webpack-和浏览器缓存-caching" tabindex="-1"><a class="header-anchor" href="#webpack-和浏览器缓存-caching" aria-hidden="true">#</a> webpack 和浏览器缓存 (Caching)</h2>
<p>我们要保证，改过的文件需要更新 <code>hash</code> 值，而没改过的文件依然保持原本的 <code>hash</code> 值，这样才能保证在上线后，浏览器访问时没有改变的文件会命中缓存，从而达到性能优化的目的</p>
<p><code>webpack.prod.js</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span><span class="token punctuation">{</span>
     <span class="token comment">// 给js文件加上 contenthash,</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">'[name]-[contenthash].js'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">chunkFilename</span><span class="token operator">:</span><span class="token string">'[name]-[contenthash].js'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><img src="@source/.vuepress/public/images/contenthash1.png" alt="图片"></p>
<p>只要我们不改源代码, 文件的内容不变, 这两个值在打包的过程中, 永远都不会变</p>
<p><strong>源代码变了, 对应的 <code>hash</code> 值会变, 那么如果重新打包上线, 发现之前的文件跟现在的文件名字是一模一样的, 那么就直接用缓存, 但如果 <code>hash</code> 变了, 需要到我们的服务器上重新加载新的 <code>js</code> 文件</strong></p>
<p><strong>通过使用 <code>contenthash</code>  这种新式, 我们可以做到, 当我们重新打包代码上线的时候, 用户只需要请求有变化的文件, 而没有变化的文件就直接使用之前本地的缓存</strong></p>
<h2 id="环境变量的使用方法" tabindex="-1"><a class="header-anchor" href="#环境变量的使用方法" aria-hidden="true">#</a> 环境变量的使用方法</h2>
<p>在 <code>webpack.dev.js</code> 和 <code>webpack.prod.js</code> 里让导出的不是 merge 之后的东西, 把代码改成 导出配置对象</p>
<p><code>webpack.common.js</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'html-webpack-plugin'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span>CleanWebpackPlugin<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'clean-webpack-plugin'</span><span class="token punctuation">)</span> 

<span class="token keyword">const</span> devConfig <span class="token operator">=</span> <span class="token function">requirer</span><span class="token punctuation">(</span><span class="token string">'./webpack.dev.js'</span><span class="token punctuation">)</span>  <span class="token comment">// &lt;-  </span>
<span class="token keyword">const</span> prodConfig <span class="token operator">=</span> <span class="token function">requirer</span><span class="token punctuation">(</span><span class="token string">'./webpack.prod.js'</span><span class="token punctuation">)</span> <span class="token comment">// &lt;-</span>
<span class="token keyword">const</span> merge <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'webpack-merge'</span><span class="token punctuation">)</span> <span class="token comment">// &lt;-</span>
<span class="token keyword">const</span> commonConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">env<span class="token punctuation">,</span>argv</span><span class="token punctuation">)</span> <span class="token operator">=></span><span class="token punctuation">{</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>argv<span class="token punctuation">.</span>mode <span class="token operator">===</span> <span class="token string">'production'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  <span class="token comment">// 如果 env.production 全局变量存在..</span>
    <span class="token keyword">return</span> <span class="token function">merge</span><span class="token punctuation">(</span>commonConfig <span class="token punctuation">,</span> prodConfig<span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">merge</span><span class="token punctuation">(</span>commonConfig <span class="token punctuation">,</span> devConfig<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p><code>package.json</code> : 全部都使用了 <code>webpack.common.js</code> 配置文件, 执行命令了</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"scripts"</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">"dev-build"</span><span class="token operator">:</span><span class="token string">"webpack --config ./build/webpack.common.js"</span><span class="token punctuation">,</span>
    <span class="token property">"dev"</span><span class="token operator">:</span><span class="token string">"webpack-dev-server --config ./build/webpack.common.js"</span><span class="token punctuation">,</span>
    <span class="token property">"build"</span><span class="token operator">:</span><span class="token string">"webpack --config ./build/webpack.common.js --mode=production"</span><span class="token punctuation">,</span>  <span class="token comment">// &lt;-  --mode=xxx 使用了环境变量 : 表示了生产环境</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>通过传入 <code>mode</code> 环境变量区分环境</p>
<p>把 <code>env</code> 和 <code>argv</code> 打出来看看</p>
<p><img src="@source/.vuepress/public/images/argv1.png" alt="图片"></p>
<h2 id="公共静态资源的处理" tabindex="-1"><a class="header-anchor" href="#公共静态资源的处理" aria-hidden="true">#</a> 公共静态资源的处理</h2>
<ol>
<li>使用外链 <code>externals</code></li>
</ol>
<p><strong>防止</strong>将某些 <code>import</code> 的包(package) 打包到 bundle 中，而是在<strong>运行时</strong> (runtime) 再去从外部获取这些扩展依赖</p>
<p>例如，从 <code>CDN</code> 引入 <code>jQuery</code>，而不是把它打包：</p>
<p><code>webpack.config.js</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span>
  <span class="token literal-property property">externals</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">jquery1</span><span class="token operator">:</span><span class="token string">'jQuery'</span> 
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p><code>index.html</code></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://code.jquery.com/jquery-3.1.0.js<span class="token punctuation">"</span></span> <span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> $ <span class="token keyword">from</span> <span class="token string">'jquery1'</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>$<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ol start="2">
<li><strong>利用 <code>html-webpack-plugin</code> 编写</strong></li>
</ol>
<p><code>webpack.config.js</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'html-webpack-plugin'</span><span class="token punctuation">)</span>
<span class="token operator">...</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span><span class="token punctuation">[</span>
    <span class="token operator">...</span>
    <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">filename</span><span class="token operator">:</span><span class="token string">'test.html'</span><span class="token punctuation">,</span> <span class="token comment">// 打包输出的文件名称</span>
      <span class="token literal-property property">template</span><span class="token operator">:</span><span class="token string">'./src/index.html'</span><span class="token punctuation">,</span> <span class="token comment">// 模板</span>
      <span class="token literal-property property">templateParameters</span><span class="token operator">:</span><span class="token punctuation">{</span>   <span class="token comment">// 注入的变量, 在 index.html 里面通过 ejs 模板语法获取 </span>
        <span class="token literal-property property">titleName</span><span class="token operator">:</span><span class="token string">'test2'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">jsList</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">'https://code.jquery.com/jquery-3.1.0.js'</span><span class="token punctuation">]</span>  <span class="token comment">// &lt;-</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p><code>src/index.html</code></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>X-UA-Compatible<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>IE=edge<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>&lt;%= titleName %><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>         // &lt;- ejs 模板语法
  &lt;% for(var item in jsList) { %}                // <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>-</span>
    <span class="token attr-name">&lt;script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>&lt;%= jsList[item] %><span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
  &lt;% } %>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>root<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="资源内联到-html-中" tabindex="-1"><a class="header-anchor" href="#资源内联到-html-中" aria-hidden="true">#</a> 资源内联到 html 中</h2>
<p>内联的意义:</p>
<ul>
<li>减少 http 请求, 提升性能</li>
<li>提高用户体验</li>
<li>复用资源, 提升开发效率</li>
</ul>
<p>如何内联:</p>
<ol>
<li><code>html</code> 片段: <code>rwa-loader</code> / <code>asset/source + html-webpack-plugin</code></li>
</ol>
<p><code>src/inline/meta.html</code></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>test<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>test<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><code>webpack.config.js</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports<span class="token operator">=</span><span class="token punctuation">{</span>
  <span class="token operator">...</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span><span class="token punctuation">[</span>
      <span class="token operator">...</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">meta.html</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span><span class="token string">'asset/source'</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>src/index.html</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>X-UA-Compatible<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>IE=edge<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  &lt;%= require(./inline/meta.html) %>      // <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>-</span> <span class="token attr-name">看这里</span>
  <span class="token attr-name">&lt;title</span><span class="token punctuation">></span></span>&lt;%= titleName %><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>        
  &lt;% for(var item in jsList) { %}             
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>&lt;%= jsList[item] %><span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
  &lt;% } %>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>root<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p><code>npm run build</code> 打包</p>
<p>得到 <code>test.html</code></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>X-UA-Compatible<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>IE=edge<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width,initial-scale=1<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>test-title-name<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>test<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>test<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>    // <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>-</span> <span class="token attr-name">发现已经内联成功</span>
    <span class="token attr-name">&lt;script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://code.jquery.com/jquery-3.1.0.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">defer</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>defer<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>main_f09fabf9355303804fed.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">defer</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>defer<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>test_f09fabf9355303804fed.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>main.css<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>root<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>或者<strong>使用 <code>raw-loader </code></strong></p>
<p><code>webpack.config.js</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports<span class="token operator">=</span><span class="token punctuation">{</span>
  <span class="token operator">...</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span><span class="token punctuation">[</span>
      <span class="token operator">...</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">meta.html</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span><span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span><span class="token string">'raw-loader'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">options</span><span class="token operator">:</span><span class="token punctuation">{</span>
              <span class="token literal-property property">esModule</span><span class="token operator">:</span> <span class="token boolean">false</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><ol start="2">
<li>js : 同上面的 html</li>
<li>css : <code>style-loader</code></li>
<li>图片, 字体: asset | asset-inline or url-loader</li>
</ol>
<h2 id="通过-webpack-构建去除代码中的调试日志-terser-webpack-plugin" tabindex="-1"><a class="header-anchor" href="#通过-webpack-构建去除代码中的调试日志-terser-webpack-plugin" aria-hidden="true">#</a> 通过 webpack 构建去除代码中的调试日志 - terser-webpack-plugin</h2>
<p>作用: 删除代码中的 <code>console.log</code></p>
<p><a href="https://webpack.docschina.org/plugins/terser-webpack-plugin/#root" target="_blank" rel="noopener noreferrer">terser-webpack-plugin 官方文档<ExternalLinkIcon/></a></p>
<p>使用 <code>terser-webpack-plugin</code>, <code>webpack5</code> 是开箱即用, <code>webpack4</code> 需要下载安装</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">...</span>
<span class="token keyword">const</span> TerserPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"terser-webpack-plugin"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 删除 console</span>

module<span class="token punctuation">.</span>exports<span class="token operator">=</span><span class="token punctuation">{</span>
  <span class="token operator">...</span>
  <span class="token literal-property property">optimization</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">minimizer</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token keyword">new</span> <span class="token class-name">CssMinimizerPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> 
      <span class="token keyword">new</span> <span class="token class-name">TerserPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>       <span class="token comment">// 删除 console</span>
         <span class="token literal-property property">terserOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">compress</span><span class="token operator">:</span> <span class="token punctuation">{</span>            
            <span class="token literal-property property">drop_console</span><span class="token operator">:</span> <span class="token boolean">true</span>  <span class="token comment">// 只 production 模式生效</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span> 
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">minimize</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div></template>
