<template><h1 id="通用功能开发" tabindex="-1"><a class="header-anchor" href="#通用功能开发" aria-hidden="true">#</a> 通用功能开发</h1>
<p>在本次会实现常见的一些通用功能，具体如下：</p>
<ol>
<li>国际化</li>
<li>动态换肤</li>
<li><code>screenfull</code></li>
<li><code>headerSearch</code></li>
<li><code>tagView</code></li>
<li><code>guide</code></li>
</ol>
<h2 id="国际化实现" tabindex="-1"><a class="header-anchor" href="#国际化实现" aria-hidden="true">#</a> 国际化实现</h2>
<h3 id="国际化实现原理" tabindex="-1"><a class="header-anchor" href="#国际化实现原理" aria-hidden="true">#</a> 国际化实现原理</h3>
<p>先来看一个需求：</p>
<blockquote>
<p>有一个变量 <code>msg</code> ，但是这个 <code>msg</code> 有且只能有两个值：</p>
<ol>
<li>hello world</li>
<li>你好世界</li>
</ol>
<p>要求：根据需要切换 <code>msg</code> 的值</p>
</blockquote>
<p>这样的一个需求就是 国际化 的需求，那么我们可以通过以下代码来实现这个需求</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>script<span class="token operator">></span>
  <span class="token comment">// 1. 定义 msg 值的数据源</span>
  <span class="token keyword">const</span> messages <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">en</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">'hello world'</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">zh</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">'你好世界'</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 2. 定义切换变量</span>
  <span class="token keyword">let</span> locale <span class="token operator">=</span> <span class="token string">'en'</span>
  <span class="token comment">// 3. 定义赋值函数</span>
  <span class="token keyword">function</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> messages<span class="token punctuation">[</span>locale<span class="token punctuation">]</span><span class="token punctuation">[</span>key<span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 4. 为 msg 赋值 </span>
  <span class="token keyword">let</span> msg <span class="token operator">=</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">'msg'</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 修改 locale， 重新执行 t 方法，获取不同语言环境下的值</span>

<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p>总结：</p>
<ol>
<li>通过一个变量来 <strong>控制</strong> 语言环境</li>
<li>所有语言环境下的数据源要 <strong>预先</strong> 定义好</li>
<li>通过一个方法来获取 <strong>当前语言</strong> 下 <strong>指定属性</strong> 的值</li>
<li>该值即为国际化下展示值</li>
</ol>
<h3 id="基于-vue-i18n-v9-的国际化实现方案分析" tabindex="-1"><a class="header-anchor" href="#基于-vue-i18n-v9-的国际化实现方案分析" aria-hidden="true">#</a> 基于 vue-i18n V9  的国际化实现方案分析</h3>
<p>在 <code>vue</code> 的项目中，不需要手写这么复杂的一些基础代码，可以直接使用 <a href="https://vue-i18n.intlify.dev/" target="_blank" rel="noopener noreferrer">vue-i18n<ExternalLinkIcon/></a> 进行实现（注意：<strong><code>vue3</code> 下需要使用 <code>V 9.x</code> 的 <code>i18n</code></strong>）</p>
<p><a href="https://vue-i18n.intlify.dev/guide/" target="_blank" rel="noopener noreferrer">vue-i18n<ExternalLinkIcon/></a> 的使用可以分为四个部分：</p>
<ol>
<li>创建 <code>messages</code> 数据源</li>
<li>创建 <code>locale</code> 语言变量</li>
<li>初始化 <code>i18n</code> 实例</li>
<li>注册 <code>i18n</code> 实例</li>
</ol>
<p>接下来就去实现以下：</p>
<ol>
<li>安装 <code>vue-i18n</code></li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm install vue-i18n@9.1.7
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="2">
<li>创建 <code>i18n/index.js</code> 文件</li>
<li>创建 <code>messages</code> 数据源</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> messages <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">en</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token string">'hello world'</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">zh</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token string">'你好世界'</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>\
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><ol start="4">
<li>创建 <code>locale</code> 语言变量</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> locale <span class="token operator">=</span> <span class="token string">'en'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="5">
<li>初始化 <code>i18n</code> 实例</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createI18n <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue-i18n'</span>
<span class="token keyword">const</span> messages <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">en</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token string">'hello world'</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">zh</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token string">'你好世界'</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> locale <span class="token operator">=</span> <span class="token string">'en'</span>

<span class="token keyword">const</span> i18n <span class="token operator">=</span> <span class="token function">createI18n</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// 使用 Composition API 模式，则需要将其设置为false</span>
  <span class="token literal-property property">legacy</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">// 全局注入 $t 函数,</span>
  <span class="token literal-property property">globalInjection</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  locale<span class="token punctuation">,</span>
  messages
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> i18n
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><ol start="6">
<li>在 <code>main.js</code> 中导入 , 把 <code>i18n</code> 注册到 <code>vue</code> 实例</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// i18n （PS：导入放到 APP.vue 导入之前，因为后面会在 app.vue 中使用国际化内容）</span>
<span class="token keyword">import</span> i18n <span class="token keyword">from</span> <span class="token string">'@/i18n'</span>
<span class="token operator">...</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>i18n<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ol start="7">
<li>组件中使用 <code>i18n</code></li>
</ol>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>logo-title<span class="token punctuation">"</span></span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$store.getters.sidebarOpened<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        {{ $t('msg.test') }}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ol start="8">
<li>修改 <code>locale</code> 的值，即可改变展示的内容</li>
</ol>
<p>截止到现在已经实现了 <code>i18n</code> 的最基础用法，就可以在项目中使用 <code>i18n</code> 完成国际化</p>
<p>项目中完成国际化分成以下几步进行:</p>
<ol>
<li>封装 <code>langSelect</code> 组件用于修改 <code>locale</code></li>
<li>导入 <code>el-locale</code> 语言包</li>
<li>创建自定义语言包</li>
</ol>
<h3 id="_1-封装-langselect-组件" tabindex="-1"><a class="header-anchor" href="#_1-封装-langselect-组件" aria-hidden="true">#</a> 1) 封装  langSelect  组件</h3>
<p><img src="@source/.vuepress/public/images/lang1.png" alt="图片"></p>
<ol>
<li>定义 <code>store/app.js</code></li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> storage <span class="token keyword">from</span> <span class="token string">'@/utils/storage'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">LANG</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/constant'</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">namespaced</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token function">state</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token operator">...</span>
      <span class="token literal-property property">lang</span><span class="token operator">:</span> storage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token constant">LANG</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token string">'zh'</span> <span class="token comment">// 语言 en / zh</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mutations</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
    <span class="token function">setLang</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> lang</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      state<span class="token punctuation">.</span>lang <span class="token operator">=</span> lang
      storage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token constant">LANG</span><span class="token punctuation">,</span> lang<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><ol start="2">
<li>在 <code>constant</code> 中定义常量</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 国际化</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">LANG</span> <span class="token operator">=</span> <span class="token string">'language'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol start="3">
<li>创建 <code>components/LangSelect/index</code></li>
</ol>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>langSelect<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-tooltip</span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>切换语言<span class="token punctuation">"</span></span> <span class="token attr-name">:effect</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>effect<span class="token punctuation">"</span></span> <span class="token attr-name">trigger</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>hover<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-dropdown</span>
        <span class="token attr-name">:hide-on-click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>false<span class="token punctuation">"</span></span>
        <span class="token attr-name">@command</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleClickItem<span class="token punctuation">"</span></span>
        <span class="token attr-name">trigger</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>click<span class="token punctuation">"</span></span>
      <span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>el-dropdown-link<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-icon</span> <span class="token attr-name">:size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>28<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Operation</span> <span class="token punctuation">/></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-icon</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#dropdown</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-dropdown-menu</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-dropdown-item</span> <span class="token attr-name">command</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>zh<span class="token punctuation">"</span></span> <span class="token attr-name">:disabled</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>currentLang === <span class="token punctuation">'</span>zh<span class="token punctuation">'</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>中文<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-dropdown-item</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-dropdown-item</span> <span class="token attr-name">command</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span> <span class="token attr-name">:disabled</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>currentLang === <span class="token punctuation">'</span>en<span class="token punctuation">'</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>English<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-dropdown-item</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-dropdown-menu</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-dropdown</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-tooltip</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineProps<span class="token punctuation">,</span> computed <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useI18n <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue-i18n'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vuex'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ElMessage <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'element-plus'</span>
<span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">effect</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// tooltip 的样式, dark/light</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
    <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">'dark'</span><span class="token punctuation">,</span>
    <span class="token function-variable function">validator</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token string">'light'</span><span class="token punctuation">,</span> <span class="token string">'dark'</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">></span> <span class="token operator">-</span><span class="token number">1</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 切换语言的方法</span>
<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">useStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> i18n <span class="token operator">=</span> <span class="token function">useI18n</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">handleClickItem</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">lang</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  i18n<span class="token punctuation">.</span>locale<span class="token punctuation">.</span>value <span class="token operator">=</span> lang
  store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">'app/setLang'</span><span class="token punctuation">,</span> lang<span class="token punctuation">)</span>
  ElMessage<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string">'语言切换成功'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> currentLang <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> <span class="token comment">// 当前语言</span>
  <span class="token keyword">return</span> store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>app<span class="token punctuation">.</span>lang
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
<span class="token selector">.langSelect</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">margin-right</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br></div></div><ol start="4">
<li>在 <code>navbar</code> 中导入 <code>LangSelect</code></li>
</ol>
<h3 id="_2-element-plus-国际化处理" tabindex="-1"><a class="header-anchor" href="#_2-element-plus-国际化处理" aria-hidden="true">#</a> 2)element-plus 国际化处理</h3>
<ol>
<li>在 <code>plugins/index</code> 中导入 <code>element</code> 的中文、英文语言包：</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> zhCn <span class="token keyword">from</span> <span class="token string">'element-plus/es/locale/lang/zh-cn'</span>
<span class="token keyword">import</span> en <span class="token keyword">from</span> <span class="token string">'element-plus/lib/locale/lang/en'</span>	
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol start="2">
<li>
<p>注册 <code>element</code> 时，根据当前语言选择使用哪种语言包</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">'@/store'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token parameter">app</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>ElementPlus<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">locale</span><span class="token operator">:</span> store<span class="token punctuation">.</span>getters<span class="token punctuation">.</span>language <span class="token operator">===</span> <span class="token string">'en'</span> <span class="token operator">?</span> en <span class="token operator">:</span> zhCn
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></li>
</ol>
<h3 id="_3-自定义语言包国际化处理" tabindex="-1"><a class="header-anchor" href="#_3-自定义语言包国际化处理" aria-hidden="true">#</a> 3) 自定义语言包国际化处理</h3>
<p>自定义语言包使用了 <code>commonJS</code> 导出了一个对象，这个对象就是所有的 <strong>自定义语言对象</strong></p>
<ol>
<li>
<p>在 <code>lang/index</code> 中，导入自定义的语言包</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> mZhLocale <span class="token keyword">from</span> <span class="token string">'./lang/zh'</span>
<span class="token keyword">import</span> mEnLocale <span class="token keyword">from</span> <span class="token string">'./lang/en'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li>
<li>
<p>在 <code>messages</code> 中注册到语言包</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> messages <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">en</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token operator">...</span>mEnLocale
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">zh</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token operator">...</span>mZhLocale
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div></li>
</ol>
<h3 id="_4-处理项目国际化内容" tabindex="-1"><a class="header-anchor" href="#_4-处理项目国际化内容" aria-hidden="true">#</a> 4) 处理项目国际化内容</h3>
<p>在处理好了国际化的语言包之后，接下来就可以应用国际化功能到我们的项目中</p>
<p>对于目前的项目而言，需要进行国际化处理的地方主要分为：</p>
<ol>
<li>登录页面</li>
<li><code>navbar</code> 区域</li>
<li><code>sidebar</code> 区域</li>
<li>面包屑区域</li>
</ol>
<p><strong>登录页面：</strong></p>
<p><code>login/index</code></p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>login-container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    ...
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>title-container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{ $t('msg.login.title') }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lang-select</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>lang-select<span class="token punctuation">"</span></span> <span class="token attr-name">effect</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>light<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>lang-select</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

      ...

      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span>
        <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span>
        <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span> <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 30px</span><span class="token punctuation">"</span></span></span>
        <span class="token attr-name">:loading</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>loading<span class="token punctuation">"</span></span>
        <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleLogin<span class="token punctuation">"</span></span>
        <span class="token punctuation">></span></span>{{ $t('msg.login.loginBtn') }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span>
      <span class="token punctuation">></span></span>
      
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tips<span class="token punctuation">"</span></span> <span class="token attr-name">v-html</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$t(<span class="token punctuation">'</span>msg.login.desc<span class="token punctuation">'</span>)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-form</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> useI18n <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue-i18n'</span>
<span class="token operator">...</span>
<span class="token comment">// 验证规则</span>
<span class="token keyword">const</span> i18n <span class="token operator">=</span> <span class="token function">useI18n</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> loginRules <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token operator">...</span>
      <span class="token literal-property property">message</span><span class="token operator">:</span> i18n<span class="token punctuation">.</span><span class="token function">t</span><span class="token punctuation">(</span><span class="token string">'msg.login.usernameRule'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token operator">...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token operator">...</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div><p>login/rules  组件内和 不是组件内 i18n 的获取属性方式有所不同, 细品</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> i18n <span class="token keyword">from</span> <span class="token string">'@/i18n'</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">validatePassword</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token parameter">rule<span class="token punctuation">,</span> value<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>value<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> <span class="token number">6</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">callback</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span> i18n<span class="token punctuation">.</span>global<span class="token punctuation">.</span><span class="token function">t</span><span class="token punctuation">(</span><span class="token string">'msg.login.passwordRule'</span><span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token function">callback</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p><strong><code>navbar</code>区域</strong></p>
<p><img src="@source/.vuepress/public/images/tmsg1.png" alt="图片"></p>
<p><strong>components/LangSelect/index</strong></p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-tooltip</span> <span class="token attr-name">:content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$t(<span class="token punctuation">'</span>msg.navBar.lang<span class="token punctuation">'</span>)<span class="token punctuation">"</span></span> <span class="token attr-name">:effect</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>effect<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
       ...
    
    
const handleSetLanguage = lang => {
  ...
  ElMessage.success(i18n.t('msg.toast.switchLangSuccess'))
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="_5-sidebar-与-面包屑-区域的国际化处理" tabindex="-1"><a class="header-anchor" href="#_5-sidebar-与-面包屑-区域的国际化处理" aria-hidden="true">#</a> 5) sidebar 与 面包屑 区域的国际化处理</h3>
<p><strong>sidebar 区域</strong></p>
<p>目前对于 <code>sidebar</code> 而言，显示的文本是在定义路由表时的 meta 里的<code>title</code></p>
<p>可以 <strong>把 <code>title</code> 作为语言包内容的 <code>key</code> 进行处理</strong> , 分这个样一个工具函数</p>
<p>创建 <code>utils/i18n</code> 工具模块，用于 <strong>将 <code>title</code> 转化为国际化内容</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> i18n <span class="token keyword">from</span> <span class="token string">'@/i18n'</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">generateTitle</span><span class="token punctuation">(</span><span class="token parameter">title</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> i18n<span class="token punctuation">.</span>global<span class="token punctuation">.</span><span class="token function">t</span><span class="token punctuation">(</span><span class="token string">'msg.route.'</span> <span class="token operator">+</span> title<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>在 <code>layout/components/Sidebar/MenuItem.vue</code> 中导入该方法：
<img src="@source/.vuepress/public/images/get1.png" alt="图片"></p>
<p><strong>面包屑区域：</strong></p>
<p>在 <code>components/Breadcrumb/index</code></p>
<p><img src="@source/.vuepress/public/images/get2.png" alt="图片"></p>
<h3 id="_6-国际化缓存处理" tabindex="-1"><a class="header-anchor" href="#_6-国际化缓存处理" aria-hidden="true">#</a> 6) 国际化缓存处理</h3>
<p>们希望在 <strong>刷新页面后，当前的国际化选择可以被保留</strong>，所以想要实现这个功能，那么就需要进行 <strong>国际化的缓存处理</strong></p>
<p>此处的缓存，我们依然通过两个方面进行：</p>
<ol>
<li><code>vuex</code> 缓存</li>
<li><code>LocalStorage</code> 缓存</li>
</ol>
<p>只不过这里的缓存，我们已经在处理 <strong><code>langSelect</code> 组件时</strong> 处理完成了，所以此时我们只需要使用缓存下来的数据即可。</p>
<p>在 <code>i18n/index</code> 中，创建 <code>getLanguage</code> 方法：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">'@/store'</span>
<span class="token doc-comment comment">/**
 * 返回当前 lang
 */</span>
<span class="token keyword">function</span> <span class="token function">getLanguage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> store <span class="token operator">&amp;&amp;</span> store<span class="token punctuation">.</span>getters <span class="token operator">&amp;&amp;</span> store<span class="token punctuation">.</span>getters<span class="token punctuation">.</span>language
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>修改 <code>createI18n</code> 的 <code>locale</code> 为 <code>getLanguage()</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> i18n <span class="token operator">=</span> <span class="token function">createI18n</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token operator">...</span>
  <span class="token literal-property property">locale</span><span class="token operator">:</span> <span class="token function">getLanguage</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>或者:  初始时直接从缓存读取</p>
<p><img src="@source/.vuepress/public/images/locale1.png" alt="图片"></p>
<h3 id="关于登录页面表单校验提示无法自动国际化的问题" tabindex="-1"><a class="header-anchor" href="#关于登录页面表单校验提示无法自动国际化的问题" aria-hidden="true">#</a> 关于登录页面表单校验提示无法自动国际化的问题</h3>
<p>表单校验提示信息的内容取决于 <code>loginRules</code> 中具体选项的 <code>message</code> 属性，我们对该 <code>message</code> 属性进行了初始赋值：</p>
<p>初始赋值时， <code>i18n</code> 会根据当前语言环境获取到对应的国际化内容。</p>
<p>但是当语言环境改变时，<code>message</code> 属性的 <code>value</code> 未重新获取。（即：依然为 <strong>初始赋值</strong> 内容）。</p>
<p>因此会出现以上 <code>bug</code></p>
<p><strong>解决方案：</strong></p>
<p>那么想要解决这个问题，就需要从问题的原因入手</p>
<p>方案具体分为两步：</p>
<ol>
<li><code>message</code> 属性的 <code>value</code> 应该是动态获取的：
<ol>
<li>针对 <code>username</code>，它应该为一个计算属性：
<img src="@source/.vuepress/public/images/wt1.png" alt="图片"></li>
<li>针对 <code>password</code>，因为它的验证为 <code>validator</code>，本身就会重新计算，所以无需改动</li>
</ol>
</li>
<li>监听语言的变化，主动触发校验，以便 <code>message</code> 属性的 <code>value</code> 进行重新获取</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> watchSwitchLang <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/utils/i18n'</span>

<span class="token function">watchSwitchLang</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  loginFromRef<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>至此，该问题得到处理</p>
<h3 id="国际化方案总结" tabindex="-1"><a class="header-anchor" href="#国际化方案总结" aria-hidden="true">#</a> 国际化方案总结</h3>
<p>前端项目中实现国际化主要依靠的就是 <code>vue-i18n</code> 这个第三方的包</p>
<p>而  <code>i18n</code> 的使用，整体来说就分为这么四步：</p>
<ol>
<li>创建 <code>messages</code> 数据源</li>
<li>创建 <code>locale</code> 语言变量</li>
<li>初始化 <code>i18n</code> 实例</li>
<li>注册 <code>i18n</code> 实例</li>
</ol>
<p>核心的内容其实就是 数据源的部分，但是要注意，如果项目中使用了 <strong>第三方组件库</strong> ,注意 <strong>第三方组件库的数据源</strong> 需要 <strong>单独</strong> 进行处理！</p>
<h2 id="screenfull-原理及方案分析" tabindex="-1"><a class="header-anchor" href="#screenfull-原理及方案分析" aria-hidden="true">#</a> screenfull 原理及方案分析</h2>
<p>接下来我们来看 <code>screenfull （全屏）</code> 功能实现</p>
<p>对于 <code>screenfull </code> 和之前一样 ，我们还是先分析它的原理，然后在制定对应的方案实现</p>
<p><strong>原理：</strong></p>
<p>对于 <code>screenfull </code> 而言，浏览器本身已经提供了对用的 <code>API</code>，<a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Fullscreen_API" target="_blank" rel="noopener noreferrer">点击这里即可查看<ExternalLinkIcon/></a>，这个 <code>API</code> 中，主要提供了两个方法：</p>
<ol>
<li><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Document/exitFullscreen" target="_blank" rel="noopener noreferrer"><code>Document.exitFullscreen()</code><ExternalLinkIcon/></a>：该方法用于请求从全屏模式切换到窗口模式</li>
<li><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Element/requestFullScreen" target="_blank" rel="noopener noreferrer"><code>Element.requestFullscreen()</code><ExternalLinkIcon/></a>：该方法用于请求浏览器（user agent）将特定元素（甚至延伸到它的后代元素）置为全屏模式
<ol>
<li>比如我们可以通过 <code>document.getElementById('app').requestFullscreen()</code> 在获取 <code>id=app</code> 的 <code>DOM</code> 之后，把该区域置为全屏</li>
</ol>
</li>
</ol>
<p>但是该方法存在一定的小问题，比如：</p>
<ol>
<li><code>appmain</code> 区域背景颜色为黑色</li>
</ol>
<p>所以通常情况下我们不会直接使用该 <code>API</code> 来去实现全屏效果，而是会使用它的包装库 <a href="https://www.npmjs.com/package/screenfull" target="_blank" rel="noopener noreferrer">screenfull<ExternalLinkIcon/></a></p>
<p><strong>方案：</strong></p>
<p>那么明确好了原理之后，接下来实现方案就比较容易了。</p>
<p>整体的方案实现分为两步：</p>
<ol>
<li>封装 <code>screenfull</code> 组件
<ol>
<li>展示切换按钮</li>
<li>基于 <a href="https://www.npmjs.com/package/screenfull" target="_blank" rel="noopener noreferrer">screenfull<ExternalLinkIcon/></a> 实现切换功能</li>
</ol>
</li>
<li>在 <code>navbar</code> 中引入该组件</li>
</ol>
<h3 id="封装-screenfull-组件" tabindex="-1"><a class="header-anchor" href="#封装-screenfull-组件" aria-hidden="true">#</a> 封装 screenfull 组件</h3>
<p>**封装 <code>screenfull</code> 组件：</p>
<ol>
<li>
<p>下来依赖包  <a href="https://www.npmjs.com/package/screenfull" target="_blank" rel="noopener noreferrer">screenfull<ExternalLinkIcon/></a></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm i screenfull@5.1.0
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li>
<li>
<p>创建 <code>components/Screenfull/index</code></p>
</li>
</ol>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>screenfull<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>toggleClick<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-tooltip</span>
      <span class="token attr-name">:content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>isFullscreen ? <span class="token punctuation">'</span>关闭全屏模式<span class="token punctuation">'</span> : <span class="token punctuation">'</span>开启全屏模式<span class="token punctuation">'</span><span class="token punctuation">"</span></span>
      <span class="token attr-name">trigger</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>hover<span class="token punctuation">"</span></span>
    <span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-icon</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>!isFullscreen<span class="token punctuation">"</span></span> <span class="token attr-name">:size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>28<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>FullScreen</span> <span class="token punctuation">/></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-icon</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-icon</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>isFullscreen<span class="token punctuation">"</span></span> <span class="token attr-name">:size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>28<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Hide</span> <span class="token punctuation">/></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-icon</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-tooltip</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> onMounted<span class="token punctuation">,</span> onUnmounted<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> screenfull <span class="token keyword">from</span> <span class="token string">'screenfull'</span>
<span class="token comment">// 是否全屏</span>
<span class="token keyword">const</span> isFullscreen <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>

<span class="token comment">// 全屏切换</span>
<span class="token keyword">const</span> <span class="token function-variable function">toggleClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  screenfull<span class="token punctuation">.</span><span class="token function">toggle</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 监听变化</span>
<span class="token keyword">const</span> <span class="token function-variable function">change</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  isFullscreen<span class="token punctuation">.</span>value <span class="token operator">=</span> screenfull<span class="token punctuation">.</span>isFullscreen
<span class="token punctuation">}</span>
<span class="token comment">// 设置监听器</span>
<span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  screenfull<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'change'</span><span class="token punctuation">,</span> change<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 删除监听器</span>
<span class="token function">onUnmounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  screenfull<span class="token punctuation">.</span><span class="token function">off</span><span class="token punctuation">(</span><span class="token string">'change'</span><span class="token punctuation">,</span> change<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
<span class="token selector">.screenfull</span> <span class="token punctuation">{</span>
  <span class="token selector">.el-icon</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div><p><strong>在 <code>navbar</code> 中引入该组件：</strong></p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>screenfull</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>screenfull<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>

import Screenfull from '@/components/Screenfull'
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="headersearch-原理及方案分析" tabindex="-1"><a class="header-anchor" href="#headersearch-原理及方案分析" aria-hidden="true">#</a> headerSearch 原理及方案分析</h2>
<blockquote>
<p>所谓 <code>headerSearch</code> 指 <strong>页面搜索</strong></p>
</blockquote>
<p><strong>原理：</strong></p>
<p><code>headerSearch</code> 是复杂后台系统中非常常见的一个功能，它可以：<strong>在指定搜索框中对当前应用中所有页面进行检索，以 <code>select</code> 的形式展示出被检索的页面，以达到快速进入的目的</strong></p>
<p>那么明确好了 <code>headerSearch</code>  的作用之后，接下来我们来看一下对应的实现原理</p>
<p>根据前面的目的可以发现，整个 <code>headerSearch</code> 其实可以分为三个核心的功能点：</p>
<ol>
<li>根据指定内容对所有页面进行检索</li>
<li>以 <code>select</code> 形式展示检索出的页面</li>
<li>通过检索页面可快速进入对应页面</li>
</ol>
<p>那么围绕着这三个核心的功能点，我们想要分析它的原理就非常简单了：<strong>根据指定内容检索所有页面，把检索出的页面以 <code>select</code> 展示，点击对应 <code>option</code> 可进入</strong></p>
<p><strong>方案：</strong></p>
<p>对照着三个核心功能点和原理，想要指定对应的实现方案是非常简单的一件事情了</p>
<ol>
<li>创建 <code>headerSearch</code> 组件，用作样式展示和用户输入内容获取</li>
<li>获取所有的页面数据，用作被检索的数据源</li>
<li>根据用户输入内容在数据源中进行 <a href="https://fusejs.io/" target="_blank" rel="noopener noreferrer">模糊搜索<ExternalLinkIcon/></a></li>
<li>把搜索到的内容以 <code>select</code> 进行展示</li>
<li>监听 <code>select</code> 的 <code>change</code> 事件，完成对应跳转</li>
</ol>
<h3 id="创建-headersearch-组件" tabindex="-1"><a class="header-anchor" href="#创建-headersearch-组件" aria-hidden="true">#</a> 创建 headerSearch 组件</h3>
<p><a href="https://element-plus.gitee.io/zh-CN/component/select.html" target="_blank" rel="noopener noreferrer">Select 选择器<ExternalLinkIcon/></a></p>
<p>多看一下属性, 比如:  default-first-option , filterable , remote , :remote-method , @change</p>
<p><strong>创建 <code>components/headerSearch/index</code> 组件：</strong></p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>header-search<span class="token punctuation">"</span></span>  <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{ show: isShow }<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-tooltip</span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>搜索<span class="token punctuation">"</span></span> <span class="token attr-name">trigger</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>hover<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-icon</span> <span class="token attr-name">:size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>28<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>search-icon<span class="token punctuation">"</span></span> <span class="token attr-name">@click.stop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onShowClick<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Search</span> <span class="token punctuation">/></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-icon</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-tooltip</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-select</span>
      <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>search<span class="token punctuation">"</span></span>
      <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>header-search-select<span class="token punctuation">"</span></span>
      <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>headerSearchSelectRef<span class="token punctuation">"</span></span>
      <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>select<span class="token punctuation">"</span></span>
      <span class="token attr-name">default-first-option</span>
      <span class="token attr-name">filterable</span>
      <span class="token attr-name">remote</span>
      <span class="token attr-name">:remote-method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>querySearch<span class="token punctuation">"</span></span>
      <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onSelectChange<span class="token punctuation">"</span></span>
    <span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-option</span>
        <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item in 4<span class="token punctuation">"</span></span>
        <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item<span class="token punctuation">"</span></span>
        <span class="token attr-name">:label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item<span class="token punctuation">"</span></span>
        <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item<span class="token punctuation">"</span></span>
      <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-select</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token comment">// 控制 search 显示/隐藏</span>
<span class="token keyword">const</span> isShow <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
<span class="token comment">// el-select 实例</span>
<span class="token keyword">const</span> headerSearchSelectRef <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">onShowClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  isShow<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token operator">!</span>isShow<span class="token punctuation">.</span>value
  headerSearchSelectRef<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// search 搜索值</span>
<span class="token keyword">const</span> search <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span>
<span class="token comment">// 搜索方法</span>
<span class="token keyword">const</span> <span class="token function-variable function">querySearch</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'querySearch'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// 选中回调</span>
<span class="token keyword">const</span> <span class="token function-variable function">onSelectChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'onSelectChange'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  <span class="token selector">.header-search</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 0 <span class="token important">!important</span><span class="token punctuation">;</span>
  <span class="token selector">.search-icon</span> <span class="token punctuation">{</span>
    <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.header-search-select</span> <span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 18px<span class="token punctuation">;</span>
    <span class="token property">transition</span><span class="token punctuation">:</span> width 0.2s<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> transparent<span class="token punctuation">;</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
    <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
    <span class="token selector">::v-deep .el-input__inner</span> <span class="token punctuation">{</span>
      <span class="token property">border-radius</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
      <span class="token property">border</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
      <span class="token property">padding-left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
      <span class="token property">padding-right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
      <span class="token property">box-shadow</span><span class="token punctuation">:</span> none <span class="token important">!important</span><span class="token punctuation">;</span>
      <span class="token property">border-bottom</span><span class="token punctuation">:</span> 1px solid #d9d9d9<span class="token punctuation">;</span>
      <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token selector">&amp;.show</span> <span class="token punctuation">{</span>
    <span class="token selector">.header-search-select</span> <span class="token punctuation">{</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 210px<span class="token punctuation">;</span>
      <span class="token property">margin-left</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br></div></div><p>在 <code>navbar</code> 中导入该组件</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;header-search class="right-menu-item hover-effect">&lt;/header-search>
import HeaderSearch from '@/components/HeaderSearch'
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="检索数据源-对路由表进行处理" tabindex="-1"><a class="header-anchor" href="#检索数据源-对路由表进行处理" aria-hidden="true">#</a> 检索数据源, 对路由表进行处理</h3>
<p>在有了 <code>headerSearch</code> 之后，接下来就可以来处理对应的 <strong>检索数据源</strong></p>
<p><strong>检索数据源</strong> 表示：<strong>有哪些页面希望检索</strong></p>
<p>那么对于当前的业务而言，希望被检索的页面其实就是左侧菜单中的页面，检索数据源即为：<strong>左侧菜单对应的数据源</strong></p>
<p>根据以上原理，可以得出以下代码：</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> computed <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> filterRouters<span class="token punctuation">,</span> generateMenus <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/utils/route'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useRouter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue-router'</span>
<span class="token operator">...</span>
<span class="token comment">// 检索数据源</span>
<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">useRouter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> searchPool <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> filterRoutes <span class="token operator">=</span> <span class="token function">filterRouters</span><span class="token punctuation">(</span>router<span class="token punctuation">.</span><span class="token function">getRoutes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">generateMenus</span><span class="token punctuation">(</span>filterRoutes<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token function">generateMenus</span><span class="token punctuation">(</span>filterRoutes<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>searchPool<span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="对检索数据源进行模糊搜索" tabindex="-1"><a class="header-anchor" href="#对检索数据源进行模糊搜索" aria-hidden="true">#</a> 对检索数据源进行模糊搜索</h3>
<p>如果想要进行  <a href="https://fusejs.io/" target="_blank" rel="noopener noreferrer">模糊搜索<ExternalLinkIcon/></a>  的话，那么需要依赖一个第三方的库  <a href="https://fusejs.io/" target="_blank" rel="noopener noreferrer">fuse.js<ExternalLinkIcon/></a></p>
<ol>
<li>
<p>安装 <a href="https://fusejs.io/" target="_blank" rel="noopener noreferrer">fuse.js<ExternalLinkIcon/></a></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm install --save fuse.js@6.4.6

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li>
<li>
<p>初始化 <code>Fuse</code>，更多初始化配置项 <a href="https://fusejs.io/api/options.html" target="_blank" rel="noopener noreferrer">可点击这里<ExternalLinkIcon/></a></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> Fuse <span class="token keyword">from</span> <span class="token string">'fuse.js'</span>

<span class="token doc-comment comment">/**
 * 搜索库相关
 */</span>
<span class="token keyword">const</span> fuse <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Fuse</span><span class="token punctuation">(</span>list<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token comment">// 是否按优先级进行排序</span>
    <span class="token literal-property property">shouldSort</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// 匹配长度超过这个值的才会被认为是匹配的</span>
    <span class="token literal-property property">minMatchCharLength</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token comment">// 将被搜索的键列表。 这支持嵌套路径、加权搜索、在字符串和对象数组中搜索。</span>
    <span class="token comment">// name：搜索的键</span>
    <span class="token comment">// weight：对应的权重</span>
    <span class="token literal-property property">keys</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'title'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">weight</span><span class="token operator">:</span> <span class="token number">0.7</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'path'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">weight</span><span class="token operator">:</span> <span class="token number">0.3</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>


</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div></li>
<li>
<p>参考 <a href="https://fusejs.io/demo.html" target="_blank" rel="noopener noreferrer">Fuse Demo<ExternalLinkIcon/></a> 与 最终效果，可以得出，最终需要得到如下的检索数据源结构</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token property">"path"</span><span class="token operator">:</span><span class="token string">"/my"</span><span class="token punctuation">,</span>
        <span class="token property">"title"</span><span class="token operator">:</span><span class="token punctuation">[</span>
            <span class="token string">"个人中心"</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">"path"</span><span class="token operator">:</span><span class="token string">"/user"</span><span class="token punctuation">,</span>
        <span class="token property">"title"</span><span class="token operator">:</span><span class="token punctuation">[</span>
            <span class="token string">"用户"</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">"path"</span><span class="token operator">:</span><span class="token string">"/user/manage"</span><span class="token punctuation">,</span>
        <span class="token property">"title"</span><span class="token operator">:</span><span class="token punctuation">[</span>
            <span class="token string">"用户"</span><span class="token punctuation">,</span>
            <span class="token string">"用户管理"</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">"path"</span><span class="token operator">:</span><span class="token string">"/user/info"</span><span class="token punctuation">,</span>
        <span class="token property">"title"</span><span class="token operator">:</span><span class="token punctuation">[</span>
            <span class="token string">"用户"</span><span class="token punctuation">,</span>
            <span class="token string">"用户信息"</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">"path"</span><span class="token operator">:</span><span class="token string">"/article"</span><span class="token punctuation">,</span>
        <span class="token property">"title"</span><span class="token operator">:</span><span class="token punctuation">[</span>
            <span class="token string">"文章"</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">"path"</span><span class="token operator">:</span><span class="token string">"/article/ranking"</span><span class="token punctuation">,</span>
        <span class="token property">"title"</span><span class="token operator">:</span><span class="token punctuation">[</span>
            <span class="token string">"文章"</span><span class="token punctuation">,</span>
            <span class="token string">"文章排名"</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">"path"</span><span class="token operator">:</span><span class="token string">"/article/create"</span><span class="token punctuation">,</span>
        <span class="token property">"title"</span><span class="token operator">:</span><span class="token punctuation">[</span>
            <span class="token string">"文章"</span><span class="token punctuation">,</span>
            <span class="token string">"创建文章"</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br></div></div></li>
<li>
<p>所以我们之前处理了的数据源并不符合我们的需要，所以我们需要对数据源进行重新处理</p>
</li>
</ol>
<h3 id="数据源重处理-生成-searchpool" tabindex="-1"><a class="header-anchor" href="#数据源重处理-生成-searchpool" aria-hidden="true">#</a> 数据源重处理，生成 searchPool</h3>
<p>在上面明确了最终期望得到数据源结构，那么接下来就对重新计算数据源，生成对应的 <code>searchPoll</code></p>
<p>创建 <code>compositions/HeaderSearch/FuseData.js</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> path <span class="token keyword">from</span> <span class="token string">'path'</span>
<span class="token keyword">import</span> i18n <span class="token keyword">from</span> <span class="token string">'@/i18n'</span>
<span class="token doc-comment comment">/**
 * 筛选出可供搜索的路由对象
 * <span class="token keyword">@param</span> <span class="token parameter">routes</span> 路由表
 * <span class="token keyword">@param</span> <span class="token parameter">basePath</span> 基础路径，默认为 /
 * <span class="token keyword">@param</span> <span class="token parameter">prefixTitle</span>
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> generateRoutes <span class="token operator">=</span> <span class="token punctuation">(</span>routes<span class="token punctuation">,</span> basePath <span class="token operator">=</span> <span class="token string">'/'</span><span class="token punctuation">,</span> prefixTitle <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// 创建 result 数据</span>
  <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token comment">// 循环 routes 路由</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> route <span class="token keyword">of</span> routes<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 创建包含 path 和 title 的 item</span>
    <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>basePath<span class="token punctuation">,</span> route<span class="token punctuation">.</span>path<span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token operator">...</span>prefixTitle<span class="token punctuation">]</span>	
    <span class="token punctuation">}</span>
    <span class="token comment">// 当前存在 meta 时，使用 i18n 解析国际化数据，组合成新的 title 内容</span>
    <span class="token comment">// 动态路由不允许被搜索</span>
    <span class="token comment">// 匹配动态路由的正则</span>
    <span class="token keyword">const</span> re <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">.*\/:.*</span><span class="token regex-delimiter">/</span></span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>route<span class="token punctuation">.</span>meta <span class="token operator">&amp;&amp;</span> route<span class="token punctuation">.</span>meta<span class="token punctuation">.</span>title <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>re<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>route<span class="token punctuation">.</span>path<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> i18ntitle <span class="token operator">=</span> i18n<span class="token punctuation">.</span>global<span class="token punctuation">.</span><span class="token function">t</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">msg.route.</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>route<span class="token punctuation">.</span>meta<span class="token punctuation">.</span>title<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
      data<span class="token punctuation">.</span>title <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>data<span class="token punctuation">.</span>title<span class="token punctuation">,</span> i18ntitle<span class="token punctuation">]</span>
      res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 存在 children 时，迭代调用</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>route<span class="token punctuation">.</span>children<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> tempRoutes <span class="token operator">=</span> <span class="token function">generateRoutes</span><span class="token punctuation">(</span>route<span class="token punctuation">.</span>children<span class="token punctuation">,</span> data<span class="token punctuation">.</span>path<span class="token punctuation">,</span> data<span class="token punctuation">.</span>title<span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>tempRoutes<span class="token punctuation">.</span>length <span class="token operator">>=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>res<span class="token punctuation">,</span> <span class="token operator">...</span>tempRoutes<span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> res
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div><p>在 <code>headerSearch</code> 中导入 <code>generateRoutes</code></p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> computed<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> generateRoutes <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./FuseData'</span>
<span class="token keyword">import</span> Fuse <span class="token keyword">from</span> <span class="token string">'fuse.js'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> filterRouters <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/utils/route'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useRouter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue-router'</span>

<span class="token operator">...</span>

<span class="token comment">// 检索数据源</span>
<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">useRouter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> searchPool <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> filterRoutes <span class="token operator">=</span> <span class="token function">filterRouters</span><span class="token punctuation">(</span>router<span class="token punctuation">.</span><span class="token function">getRoutes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token function">generateRoutes</span><span class="token punctuation">(</span>filterRoutes<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token doc-comment comment">/**
 * 搜索库相关
 */</span>
<span class="token keyword">const</span> fuse <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Fuse</span><span class="token punctuation">(</span>searchPool<span class="token punctuation">.</span>value<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token comment">// 是否按优先级进行排序</span>
  <span class="token literal-property property">shouldSort</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// 匹配长度超过这个值的才会被认为是匹配的</span>
  <span class="token literal-property property">minMatchCharLength</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token comment">// 将被搜索的键列表。 这支持嵌套路径、加权搜索、在字符串和对象数组中搜索。</span>
  <span class="token comment">// name：搜索的键</span>
  <span class="token comment">// weight：对应的权重</span>
  <span class="token literal-property property">keys</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'title'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">weight</span><span class="token operator">:</span> <span class="token number">0.7</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'path'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">weight</span><span class="token operator">:</span> <span class="token number">0.3</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div><p>通过 <code>querySearch</code> 测试搜索结果</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 搜索方法</span>
<span class="token keyword">const</span> <span class="token function-variable function">querySearch</span> <span class="token operator">=</span> <span class="token parameter">query</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>fuse<span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">(</span>query<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="渲染检索数据-并-点击跳转" tabindex="-1"><a class="header-anchor" href="#渲染检索数据-并-点击跳转" aria-hidden="true">#</a> 渲染检索数据 并 点击跳转</h3>
<p>数据源处理完成之后，最后我们就只需要完成:</p>
<ol>
<li>渲染检索出的数据</li>
<li>完成对应跳转</li>
</ol>
<p>那么下面我们按照步骤进行实现：</p>
<ol>
<li>
<p>渲染检索出的数据</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
   ...
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-option</span>
      <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>option in searchOptions<span class="token punctuation">"</span></span>
      <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>option.item.path<span class="token punctuation">"</span></span>
      <span class="token attr-name">:label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>option.item.title.join(<span class="token punctuation">'</span> - <span class="token punctuation">'</span>)<span class="token punctuation">"</span></span>
      <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>option.item.path<span class="token punctuation">"</span></span>
  <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-option</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token operator">...</span>
<span class="token comment">// 搜索结果</span>
<span class="token keyword">const</span> searchOptions <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment">// 搜索方法</span>
<span class="token keyword">const</span> <span class="token function-variable function">querySearch</span> <span class="token operator">=</span> <span class="token parameter">query</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>query <span class="token operator">!==</span> <span class="token string">''</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    searchOptions<span class="token punctuation">.</span>value <span class="token operator">=</span> fuse<span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">(</span>query<span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    searchOptions<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">...</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div></li>
<li>
<p>完成对应跳转</p>
</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>   <span class="token comment">// 选中回调</span>
 <span class="token keyword">const</span> <span class="token function-variable function">onSelectChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">path</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="剩余问题处理" tabindex="-1"><a class="header-anchor" href="#剩余问题处理" aria-hidden="true">#</a> 剩余问题处理</h3>
<p>到这里 <code>headerSearch</code> 功能基本上就已经处理完成了，但是还存在一些小 <code>bug</code> ，那么最后这一小节就处理下这些剩余的 <code>bug</code></p>
<ol>
<li>在 <code>search</code> 打开时，点击 <code>body</code> 关闭 <code>search</code></li>
<li>在 <code>search</code> 关闭时，清理 <code>searchOptions</code></li>
<li><code>headerSearch</code> 应该具备国际化能力</li>
</ol>
<p>明确好问题之后，接下来进行处理</p>
<p>首先先处理前前面两个问题：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// close 函数 :关闭 搜索, 输入框失去焦点, searchOptions 设为[]</span>
<span class="token keyword">const</span> <span class="token function-variable function">onClose</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  headerSearchSelectRef<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">blur</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  isShow<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">false</span>
  searchOptions<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
<span class="token comment">// 监听 search 打开 , 处理 close 事件</span>
<span class="token function">watch</span><span class="token punctuation">(</span>isShow<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>isShow<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> onClose<span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    document<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> onClose<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3>
<p>整个 <code>headerSearch</code> 只需要把握住三个核心的关键点</p>
<ol>
<li>根据指定内容对所有页面进行检索</li>
<li>以 <code>select</code> 形式展示检索出的页面</li>
<li>通过检索页面可快速进入对应页面</li>
</ol>
<p>保证大方向没有错误，那么具体的细节处理我们具体分析就可以了。</p>
<p>关于细节的处理，可能比较复杂的地方有两个：</p>
<ol>
<li>模糊搜索</li>
<li>检索数据源</li>
</ol>
<p>对于这两块，我们依赖于 <code>fuse.js</code> 进行了实现，大大简化了我们的业务处理流程。</p>
</template>
