<template><h1 id="文章搜索" tabindex="-1"><a class="header-anchor" href="#文章搜索" aria-hidden="true">#</a> 文章搜索</h1>
<h2 id="_1-创建组件并配置路由" tabindex="-1"><a class="header-anchor" href="#_1-创建组件并配置路由" aria-hidden="true">#</a> 1. 创建组件并配置路由</h2>
<p>创建 src/views/search/index.vue
<img src="@source/.vuepress/public/images/sea1.png" alt="图片"></p>
<p>配置路由</p>
<p><img src="@source/.vuepress/public/images/sea2.png" alt="图片"></p>
<p>点击搜索时跳转
<img src="@source/.vuepress/public/images/sea3.png" alt="图片"></p>
<h2 id="_2-搜索页面的布局" tabindex="-1"><a class="header-anchor" href="#_2-搜索页面的布局" aria-hidden="true">#</a> 2. 搜索页面的布局</h2>
<p>Vant 的<a href="https://vant-ui.github.io/vant/v2/#/zh-CN/search" target="_blank" rel="noopener noreferrer">Search 组件<ExternalLinkIcon/></a></p>
<p>有搜索历史 , 搜索建议 , 搜索结果</p>
<p><img src="@source/.vuepress/public/images/sousuoyemian0.png" alt="图片"></p>
<p>1,  搜索历史 src/views/search/components/<strong>search-history</strong>.vue
<img src="@source/.vuepress/public/images/sousuoyemian1.png" alt="图片">
2,  搜索历史 src/views/search/components/<strong>search-suggestion</strong>.vue
<img src="@source/.vuepress/public/images/sousuoyemian2.png" alt="图片">
3,  搜索结果 src/views/search/components/<strong>search-result</strong>.vue
<img src="@source/.vuepress/public/images/sousuoyemian3.png" alt="图片"></p>
<p>在主页注册
<img src="@source/.vuepress/public/images/sousuoyemian4.png" alt="图片"></p>
<h2 id="_3-处理组件显示状态-细节" tabindex="-1"><a class="header-anchor" href="#_3-处理组件显示状态-细节" aria-hidden="true">#</a> 3. 处理组件显示状态 (细节)</h2>
<p>思路 :</p>
<ul>
<li>
<p>通过一个变量控制是否显示 <strong>搜索结果</strong></p>
</li>
<li>
<p>并且用  value 是否有<strong>值</strong>来判断是否为<strong>搜索历史</strong>或者<strong>搜索建议</strong>, 可以使用 <code>v-for, v-else-if, v-if</code></p>
</li>
<li>
<p>还需要注意: 得到搜索结果后, <em>再次在搜索框获取焦点时</em>需展示搜索建议, 这个也要处理一下</p>
</li>
</ul>
<ol>
<li>在 <code>data</code> 中添加数据用来控制搜索结果的显示状态
<img src="@source/.vuepress/public/images/sousuo1.png" alt="图片">
<img src="@source/.vuepress/public/images/sousuo2.png" alt="图片"></li>
</ol>
<h2 id="_4-搜索联想建议" tabindex="-1"><a class="header-anchor" href="#_4-搜索联想建议" aria-hidden="true">#</a> 4. 搜索联想建议</h2>
<h3 id="_4-1-基本功能" tabindex="-1"><a class="header-anchor" href="#_4-1-基本功能" aria-hidden="true">#</a> 4.1 基本功能</h3>
<p><img src="@source/.vuepress/public/images/jy.png" alt="图片"></p>
<p>一、将父组件中搜索框输入的内容传给联想建议子组件</p>
<p>二、在子组件中监视搜索框输入内容的变化，如果变化则请求获取联想建议数据</p>
<p>三、将获取到的联想建议数据展示到列表中</p>
<p>父组件通过props传递给子组件搜索框内容 value
<img src="@source/.vuepress/public/images/jy1.png" alt="图片"></p>
<p>封装请求 src/api/search.js</p>
<p><img src="@source/.vuepress/public/images/jy2.png" alt="图片"></p>
<p>watch 监听父组件传过来的搜索框内容 src/views/search/components/<strong>search-suggestion</strong>.vue
<img src="@source/.vuepress/public/images/jy3.png" alt="图片">
绑定模板
<img src="@source/.vuepress/public/images/jy4.png" alt="图片"></p>
<h3 id="_4-2-防抖优化" tabindex="-1"><a class="header-anchor" href="#_4-2-防抖优化" aria-hidden="true">#</a> 4.2 防抖优化</h3>
<p>1、安装 lodash</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># yarn add lodash</span>
<span class="token function">npm</span> i lodash
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>2、防抖处理</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// lodash 支持按需加载，有利于打包结果优化</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> debounce <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"lodash"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><blockquote>
<p>不建议下面这样使用，因为这样会加载整个模块。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> _ <span class="token keyword">from</span> <span class="token string">'lodash'</span>
_<span class="token punctuation">.</span><span class="token function">debounce</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></blockquote>
<p><img src="@source/.vuepress/public/images/fd111.png" alt="图片"></p>
<h3 id="_4-3-搜索关键字高亮" tabindex="-1"><a class="header-anchor" href="#_4-3-搜索关键字高亮" aria-hidden="true">#</a> 4.3 搜索关键字高亮</h3>
<p>如何将字符串中的指定字符在<strong>网页</strong>中高亮展示？</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string">"Hello World"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>将需要高亮的字符包裹 HTML 标签，为其单独设置颜色。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string">"Hello &lt;span style="</span><span class="token literal-property property">color</span><span class="token operator">:</span> red<span class="token string">">World&lt;/span>"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>在 Vue 中如何渲染带有 HTML 标签的字符串？</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">data</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
     <span class="token operator">:</span> <span class="token string">'Hello &lt;span style="color: red">World&lt;/span>'</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>{{ htmlStr }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-html</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>htmlStr<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>如何把字符串中指定字符统一替换为高亮（包裹了 HTML）的字符？</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token string">"Hello World"</span>

<span class="token comment">// 结果：&lt;span style="color: red">Hello&lt;/span> World</span>
<span class="token string">"Hello World"</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">'Hello'</span><span class="token punctuation">,</span> <span class="token string">'&lt;span style="color: red">Hello&lt;/span>'</span><span class="token punctuation">)</span>

<span class="token comment">// 需要注意的是，replace 方法的字符串匹配只能替换第1个满足的字符</span>
<span class="token comment">// &lt;span style="color: red">Hello&lt;/span> World Hello abc</span>
<span class="token string">"Hello World Hello abc"</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">'Hello'</span><span class="token punctuation">,</span> <span class="token string">'&lt;span style="color: red">Hello&lt;/span>'</span><span class="token punctuation">)</span>

<span class="token comment">// 如果想要全文替换，使用正则表达式</span>
<span class="token comment">// g 全局</span>
<span class="token comment">// i 忽略大小写</span>
<span class="token comment">// &lt;span style="color: red">Hello&lt;/span> World &lt;span style="color: red">Hello&lt;/span> abc</span>
<span class="token string">"Hello World Hello abc"</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">Hello</span><span class="token regex-delimiter">/</span><span class="token regex-flags">gi</span></span><span class="token punctuation">,</span> <span class="token string">'&lt;span style="color: red">Hello&lt;/span>'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><blockquote>
<p>一个小扩展：使用字符串的 split 结合数组的 join 方法实现高亮</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">"hello world 你好 hello"</span><span class="token punctuation">;</span>

<span class="token comment">// ["", " world 你好 ", ""]</span>
<span class="token keyword">const</span> arr <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">"hello"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// "&lt;span>hello&lt;/span> world 你好 &lt;span>hello&lt;/span>"</span>
arr<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">"&lt;span>hello&lt;/span>"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></blockquote>
<p><strong>具体实现:</strong></p>
<p>1、在 methods 中添加一个方法处理高亮
2、然后在联想建议列表项中绑定调用, 插槽, v-html ...
<img src="@source/.vuepress/public/images/hl1.png" alt="图片">
<img src="@source/.vuepress/public/images/hl2.png" alt="图片"></p>
<h2 id="_5-搜索结果" tabindex="-1"><a class="header-anchor" href="#_5-搜索结果" aria-hidden="true">#</a> 5. 搜索结果</h2>
<h3 id="_5-1-传递搜索内容" tabindex="-1"><a class="header-anchor" href="#_5-1-传递搜索内容" aria-hidden="true">#</a> 5.1 传递搜索内容</h3>
<p>但我们看到搜索建议后并且我们点击了某一个搜索建议, 这时应该要显示其搜索结果, 并且搜索框里显示点击的字符串</p>
<p>注册事件 <strong>search-suggestion</strong>.vue
<img src="@source/.vuepress/public/images/cd1.png" alt="图片">
父组件监听 index.vue
<img src="@source/.vuepress/public/images/cd2.png" alt="图片">
<img src="@source/.vuepress/public/images/cd3.png" alt="图片"></p>
<p>把 value 以props传递个 search-result.vue 组件
<img src="@source/.vuepress/public/images/cd4.png" alt="图片"></p>
<p>search-result.vue 组件接受 value</p>
<p><img src="@source/.vuepress/public/images/cd5.png" alt="图片"></p>
<h3 id="_5-2-搜索结果处理完成" tabindex="-1"><a class="header-anchor" href="#_5-2-搜索结果处理完成" aria-hidden="true">#</a> 5.2 搜索结果处理完成</h3>
<p><img src="@source/.vuepress/public/images/js1.png" alt="图片"></p>
<ol>
<li>封装 获取搜索结果 接口  src/api/search.js
<img src="@source/.vuepress/public/images/sresult0.png" alt="图片"></li>
</ol>
<p><strong>search-result.vue</strong>
<img src="@source/.vuepress/public/images/sresult1.png" alt="图片">
<img src="@source/.vuepress/public/images/sresult2.png" alt="图片">
<img src="@source/.vuepress/public/images/sresult3.png" alt="图片"></p>
<h2 id="_6-搜索历史记录" tabindex="-1"><a class="header-anchor" href="#_6-搜索历史记录" aria-hidden="true">#</a> 6. 搜索历史记录</h2>
<h3 id="_6-1-添加历史记录" tabindex="-1"><a class="header-anchor" href="#_6-1-添加历史记录" aria-hidden="true">#</a> 6.1 添加历史记录</h3>
<p>当搜素时才需要记录</p>
<p><img src="@source/.vuepress/public/images/sh1.png" alt="图片"></p>
<h3 id="_6-2-展示历史记录" tabindex="-1"><a class="header-anchor" href="#_6-2-展示历史记录" aria-hidden="true">#</a> 6.2 展示历史记录</h3>
<p><img src="@source/.vuepress/public/images/sh5.png" alt="图片"></p>
<h3 id="_6-3-删除历史记录" tabindex="-1"><a class="header-anchor" href="#_6-3-删除历史记录" aria-hidden="true">#</a> 6.3 删除历史记录</h3>
<p><img src="@source/.vuepress/public/images/scsc.png" alt="图片"></p>
<p>基本思路：</p>
<ul>
<li>给历史记录中的每一项注册点击事件</li>
<li>在处理函数中判断
<ul>
<li>如果是删除状态，则执行删除操作</li>
<li>如果是非删除状态，则执行搜索操作</li>
</ul>
</li>
</ul>
<p>定义变量 isDeleteShow 判断不同场景(删除 / 可直接跳转)
<img src="@source/.vuepress/public/images/scsc1.png" alt="图片">
<img src="@source/.vuepress/public/images/scsc2.png" alt="图片">
<img src="@source/.vuepress/public/images/scsc3.png" alt="图片"></p>
<h3 id="_6-4-数据持久化" tabindex="-1"><a class="header-anchor" href="#_6-4-数据持久化" aria-hidden="true">#</a> 6.4 数据持久化</h3>
<p>因为在index.vue 主页定义了 searchHistory 数组变量</p>
<ol>
<li>可以用 <strong>watch 监听</strong>它的变化, 每当变化时同步到本地存储</li>
</ol>
<p><img src="@source/.vuepress/public/images/cjhi1.png" alt="图片"></p>
<p>2、初始化的时候从本地存储获取数据</p>
<p><img src="@source/.vuepress/public/images/cjhi2.png" alt="图片"></p>
</template>
