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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></template>
