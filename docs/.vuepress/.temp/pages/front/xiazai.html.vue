<template><h1 id="前台常见功能解决方案-下载-全屏-引导" tabindex="-1"><a class="header-anchor" href="#前台常见功能解决方案-下载-全屏-引导" aria-hidden="true">#</a> 前台常见功能解决方案：下载+全屏+引导</h1>
<h2 id="文件下载解决方案" tabindex="-1"><a class="header-anchor" href="#文件下载解决方案" aria-hidden="true">#</a> 文件下载解决方案</h2>
<p>当点击 <code>item</code> 中的 <strong>下载</strong> 按钮时，期望可以下载当前的图片</p>
<p>想要实现该功能，则需要使用到专门的下载包</p>
<p>目前常用的支持下载功能包有两个</p>
<ol>
<li>小文件下载： <a href="https://www.npmjs.com/package/file-saver" target="_blank" rel="noopener noreferrer">file-saver<ExternalLinkIcon/></a></li>
<li>大文件下载：<a href="https://www.npmjs.com/package/streamsaver" target="_blank" rel="noopener noreferrer">streamsaver<ExternalLinkIcon/></a></li>
</ol>
<p>这个项目的图片下载属于小文件的下载，所以可以直接使用 <a href="https://www.npmjs.com/package/file-saver" target="_blank" rel="noopener noreferrer">file-saver<ExternalLinkIcon/></a></p>
<ol>
<li>安装 <code>file-saver</code> ：</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i --save file-saver@2.0.5
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="2">
<li>在 <code>src/views/main/components/list/item.vue</code> 中，增加下载功能：</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> saveAs <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'file-saver'</span>
<span class="token operator">...</span>
<span class="token doc-comment comment">/**
 * 下载按钮点击事件
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">onDownload</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 1. 下载的图片链接
   */</span>
  <span class="token function">saveAs</span><span class="token punctuation">(</span>
    props<span class="token punctuation">.</span>data<span class="token punctuation">.</span>photoDownLink
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>但是此时的下载有点突兀，达不到良好交互的体验，所以现在期望在下载时能够给用户一个提示，增加用户体验。</p>
<p>那么这个提示怎么做....</p>
<h2 id="用方法触发的-message-构建分析" tabindex="-1"><a class="header-anchor" href="#用方法触发的-message-构建分析" aria-hidden="true">#</a> 用方法触发的 message 构建分析</h2>
<p>在之前的时候，构建过一个 <code>confirm</code> 的通用组件，该组件可以直接通过 <strong>方法进行调用展示</strong></p>
<p>那么对于接下来打算构建的 <code>message</code> 组件，同样如此，依然希望可以通过方法的调用直接展示对应的组件</p>
<p>那么根据之前的经验，现在知道知道：</p>
<ol>
<li>首先需要先构建出一个对应的 <code>message.vue</code></li>
<li>然后构建出对应的 <code>message.js</code> 模块</li>
<li>在模块中，通过：
<ol>
<li><code>h</code>函数 构建 <code>vnode</code></li>
<li><code>render</code> 函数，进行渲染</li>
</ol>
</li>
</ol>
<p>那么以上方式，就是是 <code>message</code> 的构建过程。</p>
<h3 id="构建-message-组件基本能力" tabindex="-1"><a class="header-anchor" href="#构建-message-组件基本能力" aria-hidden="true">#</a> 构建 message 组件基本能力</h3>
<ol>
<li>创建 <code>src/libs/message/index.vue</code> 组件：</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// 风格</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
    <span class="token keyword">default</span><span class="token operator">:</span><span class="token string">'success'</span><span class="token punctuation">,</span>
    <span class="token function">validator</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> typeArr <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>styles<span class="token punctuation">)</span>
      <span class="token keyword">const</span> result <span class="token operator">=</span> typeArr<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>result<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">type 必须是 </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>typeArr<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">','</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> 中的一个值</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> result
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span>String
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 显示时长</span>
  <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> Number
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 关闭时回调</span>
  <span class="token literal-property property">destroyCallback</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> Function
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><ol start="2">
<li>构建各种状态下的样式表：</li>
</ol>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token comment">// 样式表</span>
<span class="token keyword">const</span> styles <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 成功</span>
  <span class="token literal-property property">success</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">'success'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">fillClass</span><span class="token operator">:</span> <span class="token string">'fill-success-300'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">textClass</span><span class="token operator">:</span> <span class="token string">'text-success-300'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">containerClass</span><span class="token operator">:</span>
      <span class="token string">'bg-success-100 border-success-200  hover:shadow-lg hover:shadow-success-100'</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 警告</span>
  <span class="token literal-property property">warn</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">'warn'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">fillClass</span><span class="token operator">:</span> <span class="token string">'fill-warn-300'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">textClass</span><span class="token operator">:</span> <span class="token string">'text-warn-300'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">containerClass</span><span class="token operator">:</span>
      <span class="token string">'bg-warn-100 border-warn-200  hover:shadow-lg hover:shadow-warn-100'</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 错误</span>
  <span class="token literal-property property">error</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">'error'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">fillClass</span><span class="token operator">:</span> <span class="token string">'fill-error-300'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">textClass</span><span class="token operator">:</span> <span class="token string">'text-error-300'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">containerClass</span><span class="token operator">:</span>
      <span class="token string">'bg-error-100 border-error-200  hover:shadow-lg hover:shadow-error-100'</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><ol start="3">
<li>新增 <code>tailwind</code> 的自定义样式：</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">darkMode</span><span class="token operator">:</span><span class="token string">'class'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'./index.html'</span><span class="token punctuation">,</span> <span class="token string">'./src/**/*.{vue,js}'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">extend</span><span class="token operator">:</span> <span class="token punctuation">{</span>
     <span class="token operator">...</span>
      <span class="token literal-property property">colors</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">'main'</span><span class="token operator">:</span> <span class="token string">'#f44c58'</span><span class="token punctuation">,</span>
        <span class="token string-property property">'hover-main'</span><span class="token operator">:</span> <span class="token string">'#f32836'</span><span class="token punctuation">,</span>
        <span class="token string-property property">'success-100'</span><span class="token operator">:</span> <span class="token string">'#F2F9EC'</span><span class="token punctuation">,</span>
        <span class="token string-property property">'success-200'</span><span class="token operator">:</span> <span class="token string">'#E4F2DB'</span><span class="token punctuation">,</span>
        <span class="token string-property property">'success-300'</span><span class="token operator">:</span> <span class="token string">'#7EC050'</span><span class="token punctuation">,</span>
        <span class="token string-property property">'warn-100'</span><span class="token operator">:</span> <span class="token string">'#FCF6ED'</span><span class="token punctuation">,</span>
        <span class="token string-property property">'warn-200'</span><span class="token operator">:</span> <span class="token string">'#F8ECDA'</span><span class="token punctuation">,</span>
        <span class="token string-property property">'warn-300'</span><span class="token operator">:</span> <span class="token string">'#DCA550'</span><span class="token punctuation">,</span>
        <span class="token string-property property">'error-100'</span><span class="token operator">:</span> <span class="token string">'#ED7456'</span><span class="token punctuation">,</span>
        <span class="token string-property property">'error-200'</span><span class="token operator">:</span> <span class="token string">'#f3471c'</span><span class="token punctuation">,</span>
        <span class="token string-property property">'error-300'</span><span class="token operator">:</span> <span class="token string">'#ffffff'</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><ol start="4">
<li>配合样式表，构建 <code>template</code></li>
</ol>
<p><a href="https://cn.vuejs.org/guide/built-ins/transition.html#javascript-hooks" target="_blank" rel="noopener noreferrer">transition 钩子函数<ExternalLinkIcon/></a></p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>transition</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>down<span class="token punctuation">"</span></span> <span class="token attr-name">@after-leave</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>destroyCallback<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
      <span class="token attr-name">v-show</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>isVisable<span class="token punctuation">"</span></span>
      <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>min-w-[420px] fixed top-[20px] left-[50%] translate-x-[-50%] z-50 flex items-center px-3 py-1.5 rounded-sm border cursor-pointer<span class="token punctuation">"</span></span>
      <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>styles[type].containerClass<span class="token punctuation">"</span></span>
    <span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>m-svg-icon</span>
        <span class="token attr-name">:name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>styles[type].icon<span class="token punctuation">"</span></span>
        <span class="token attr-name">:fillClass</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>styles[type].fillClass<span class="token punctuation">"</span></span>
        <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>h-1.5 w-1.5 mr-1.5<span class="token punctuation">"</span></span>
      <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>m-svg-icon</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text-sm<span class="token punctuation">"</span></span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>styles[type].textClass<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        {{ content }}
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>transition</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
<span class="token selector">.down-enter-active,
.down-leave-active</span> <span class="token punctuation">{</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> all 0.5s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.down-enter-from,
.down-leave-to</span> <span class="token punctuation">{</span>
  <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate3d</span><span class="token punctuation">(</span>-50%<span class="token punctuation">,</span> -100px<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><ol start="5">
<li>处理展示逻辑：</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> isVisible <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token comment">// 为了保证动画展示, 必须要 mounted 后显示, 因为组件是被 render 函数渲染的</span>
<span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  isVisible<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">true</span>
  <span class="token comment">// 几秒后, 关闭</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    isVisible<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> props<span class="token punctuation">.</span>duration<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="用方法触发-message-展示" tabindex="-1"><a class="header-anchor" href="#用方法触发-message-展示" aria-hidden="true">#</a> 用方法触发 message 展示</h3>
<ol>
<li>创建 <code>src/libs/message/index.js</code> 模块：</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> h<span class="token punctuation">,</span> render <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> messageComponent <span class="token keyword">from</span> <span class="token string">'./index.vue'</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">message</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">type<span class="token punctuation">,</span> content<span class="token punctuation">,</span> duration <span class="token operator">=</span> <span class="token number">3000</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 动画结束时的回调
   */</span>
  <span class="token keyword">const</span> <span class="token function-variable function">onDestroy</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 3. message 销毁</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> document<span class="token punctuation">.</span>body<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 1. 返回 vnode</span>
  <span class="token keyword">const</span> vnode <span class="token operator">=</span> <span class="token function">h</span><span class="token punctuation">(</span>messageComponent<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    type<span class="token punctuation">,</span>
    content<span class="token punctuation">,</span>
    duration<span class="token punctuation">,</span>
    <span class="token literal-property property">destroy</span><span class="token operator">:</span> onDestroy
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token comment">// 2. render () 渲染</span>
  <span class="token function">render</span><span class="token punctuation">(</span>vnode<span class="token punctuation">,</span> document<span class="token punctuation">.</span>body<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><ol start="2">
<li>在 s<code>rc/libs/index.js</code> 导入并导出 <code>message</code> 方法</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token punctuation">{</span> message <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/libs/message'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="3">
<li>在 <code>src/views/main/components/list/item.vue</code> 中进行触发：</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 下载按钮点击事件
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">onDownload</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// 提示消息</span>
  <span class="token function">message</span><span class="token punctuation">(</span><span class="token string">'success'</span><span class="token punctuation">,</span> <span class="token string">'图片开始下载...'</span><span class="token punctuation">)</span>
  <span class="token comment">// 延迟一段时间执行，可以得到更好的体验</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 1. 下载的图片链接
     */</span>
    <span class="token function">saveAs</span><span class="token punctuation">(</span>
      props<span class="token punctuation">.</span>data<span class="token punctuation">.</span>photoDownLink
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="模块全屏解决方案" tabindex="-1"><a class="header-anchor" href="#模块全屏解决方案" aria-hidden="true">#</a> 模块全屏解决方案</h2>
<p>让页面中的指定区域进行全屏展示也是非常常见的一个功能</p>
<p>想要让页面的指定区域进行全屏展示，我们通常可以使用 <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Fullscreen_API" target="_blank" rel="noopener noreferrer">全屏 API<ExternalLinkIcon/></a> ，该 API 中提供了两个方法</p>
<ol>
<li><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Element/requestFullScreen" target="_blank" rel="noopener noreferrer">Element.requestFullscreen()<ExternalLinkIcon/></a>：让指定元素进行全屏</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'app'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">requestFullscreen</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="2">
<li><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Document/exitFullscreen" target="_blank" rel="noopener noreferrer">Document.exitFullscreen()<ExternalLinkIcon/></a>：退出全屏</li>
</ol>
<p>但是这个 API 比较原始，使用起来没有那么方便，所以可以使用一个 <code>vueuse</code> 中的更加简便的 API：<a href="https://vueuse.org/core/useFullscreen/#usefullscreen" target="_blank" rel="noopener noreferrer">useFullScreen<ExternalLinkIcon/></a></p>
<ol>
<li>利用 useFullScreen 生成 img 图片的全屏方法：</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 生成全屏方法
 */</span>
<span class="token keyword">const</span> imgTarget <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token literal-property property">enter</span><span class="token operator">:</span> onImgFullScreen <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useFullscreen</span><span class="token punctuation">(</span>imgTarget<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ol start="2">
<li>将 <code>onImgFullScreen</code> 绑定至全屏按钮点击事件：</li>
</ol>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token comment">&lt;!--全屏按钮--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>m-button</span>
  <span class="token attr-name">...</span>
  <span class="token attr-name">...</span>
  <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>full<span class="token punctuation">"</span></span>
  <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onImgFullScreen<span class="token punctuation">"</span></span>
<span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="构建-floating-基础布局" tabindex="-1"><a class="header-anchor" href="#构建-floating-基础布局" aria-hidden="true">#</a> 构建 floating 基础布局</h2>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fixed bottom-10 right-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!-- 引导页 --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
      <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>guide-start w-4 h-4 mb-1 bg-white dark:bg-zinc-900 border dark:border-0 border-zinc-200 rounded-full flex justify-center items-center cursor-pointer duration-200 group hover:shadow-lg<span class="token punctuation">"</span></span>
    <span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>m-svg-icon</span>
        <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>guide<span class="token punctuation">"</span></span>
        <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>w-2 h-2<span class="token punctuation">"</span></span>
        <span class="token attr-name">fillClass</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fill-zinc-900 dark:fill-zinc-200 group-hover:fill-main <span class="token punctuation">"</span></span>
      <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>m-svg-icon</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!-- 反馈 --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>m-popover</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>flex items-center guide-feedback<span class="token punctuation">"</span></span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>top-left<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#reference</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
          <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span> w-4 h-4 bg-white dark:bg-zinc-900 border dark:border-0 border-zinc-200 rounded-full flex justify-center items-center cursor-pointer duration-200 group hover:shadow-lg<span class="token punctuation">"</span></span>
        <span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>m-svg-icon</span>
            <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>feedback<span class="token punctuation">"</span></span>
            <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>w-2 h-2<span class="token punctuation">"</span></span>
            <span class="token attr-name">fillClass</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fill-zinc-900 dark:fill-zinc-200 group-hover:fill-main <span class="token punctuation">"</span></span>
          <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>m-svg-icon</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>w-[140px] overflow-hidden<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
          <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>flex items-center p-1 cursor-pointer rounded hover:bg-zinc-100/60 dark:hover:bg-zinc-800<span class="token punctuation">"</span></span>
        <span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>m-svg-icon</span>
            <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>feedback<span class="token punctuation">"</span></span>
            <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>w-1.5 h-1.5 mr-1<span class="token punctuation">"</span></span>
            <span class="token attr-name">fillClass</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fill-zinc-900 dark:fill-zinc-300<span class="token punctuation">"</span></span>
          <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>m-svg-icon</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text-zinc-800 dark:text-zinc-300 text-sm<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>立即吐槽<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>m-popover</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div><h2 id="样式修正-处理难看的-scrollbar" tabindex="-1"><a class="header-anchor" href="#样式修正-处理难看的-scrollbar" aria-hidden="true">#</a> 样式修正：处理难看的 scrollBar</h2>
<p>对于 <code>tailwind</code> 而言，默认并没有提供 <code>scrollBar</code> 的样式类名，想要处理 <code>scrollBar</code> 的样式，那么需要安装单独的插件：<a href="https://www.npmjs.com/package/tailwind-scrollbar" target="_blank" rel="noopener noreferrer">tailwind-scrollbar<ExternalLinkIcon/></a></p>
<ol>
<li>安装插件：</li>
</ol>
<div class="language-npm ext-npm line-numbers-mode"><pre v-pre class="language-npm"><code>npm install --save-dev tailwind-scrollbar@1.3.1
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="2">
<li>在 <code>tailwind.config.js</code> 中注册该插件：</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'tailwind-scrollbar'</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="3">
<li>在 <code>tailwind.config.js</code> 中，让 <code>scrollBar</code> 支持 <code>dark</code> 模式：</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">extend</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token operator">...</span>
      <span class="token literal-property property">variants</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">scrollbar</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'dark'</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ol start="4">
<li>在 <code>src/views/main/index.vue</code> 使用 <code>scrollbar</code></li>
</ol>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
    <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>h-full overflow-auto bg-white dark:bg-zinc-800 duration-500 scrollbar-thin scrollbar-thumb-transparent xl:scrollbar-thumb-zinc-200 xl:dark:scrollbar-thumb-zinc-900 scrollbar-track-transparent<span class="token punctuation">"</span></span>
  <span class="token punctuation">></span></span>
  ...
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ol start="5">
<li>在 <code>src/libs/search/index.vue</code> 中，为下拉区指定 <code>scrollBar</code></li>
</ol>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
        <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$slots.dropdown<span class="token punctuation">"</span></span>
        <span class="token attr-name">v-show</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>isFocus<span class="token punctuation">"</span></span>
        <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>... scrollbar-thin scrollbar-thumb-zinc-200 dark:scrollbar-thumb-zinc-900 scrollbar-track-transparent<span class="token punctuation">"</span></span>
      <span class="token punctuation">></span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ol start="6">
<li>最后在 <code>src/styles/index.scss</code> 中，为 <code>scrollBar</code> 指定弧度<code>（1.3.1 通过属性指定弧度无效）</code></li>
</ol>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">::-webkit-scrollbar-thumb</span> <span class="token punctuation">{</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="功能引导解决方案" tabindex="-1"><a class="header-anchor" href="#功能引导解决方案" aria-hidden="true">#</a> 功能引导解决方案</h2>
<p>想要完成功能引导的实现，那么需要借助一个第三方的包：<a href="https://www.npmjs.com/package/driver.js" target="_blank" rel="noopener noreferrer">driver.js<ExternalLinkIcon/></a></p>
<ol>
<li>安装 <code>driver.js</code>：</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> --save driver.js@0.9.8
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="2">
<li>在 <code>src/views/layout/components/floating/index.vue</code> 中导入对应模块</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> Driver <span class="token keyword">from</span> <span class="token string">'driver.js'</span>
<span class="token keyword">import</span> <span class="token string">'driver.js/dist/driver.min.css'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol start="3">
<li>初始化 <code>Driver：</code></li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 引导页处理
 */</span>
<span class="token keyword">let</span> driver <span class="token operator">=</span> <span class="token keyword">null</span>
<span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  driver <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Driver</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// 禁止点击蒙版关闭</span>
    <span class="token literal-property property">allowClose</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token literal-property property">closeBtnText</span><span class="token operator">:</span> <span class="token string">'关闭'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">nextBtnText</span><span class="token operator">:</span> <span class="token string">'下一个'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">prevBtnText</span><span class="token operator">:</span> <span class="token string">'上一个'</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><ol start="4">
<li>
<p><code>driver.js</code> 的运行主要依赖于 <a href="https://kamranahmed.info/driver.js/" target="_blank" rel="noopener noreferrer">defineSteps<ExternalLinkIcon/></a> ，该方法接收一个数组，表示引导的步骤和机制</p>
</li>
<li>
<p>所以需要先构建出这样的数组，创建 <code>src/views/layout/components/floating/steps.js</code> 模块：</p>
</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token comment">// 在哪个元素中高亮</span>
    <span class="token literal-property property">element</span><span class="token operator">:</span> <span class="token string">'.guide-home'</span><span class="token punctuation">,</span>
    <span class="token comment">// 配置对象</span>
    <span class="token literal-property property">popover</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// 标题</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'logo'</span><span class="token punctuation">,</span>
      <span class="token comment">// 描述</span>
      <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">'点击可返回首页'</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">element</span><span class="token operator">:</span> <span class="token string">'.guide-search'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">popover</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'搜索'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">'搜索您期望的图片'</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">element</span><span class="token operator">:</span> <span class="token string">'.guide-theme'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">popover</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'风格'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">'选择一个您喜欢的风格'</span><span class="token punctuation">,</span>
      <span class="token comment">// 弹出的位置</span>
      <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">'left'</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">element</span><span class="token operator">:</span> <span class="token string">'.guide-my'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">popover</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'账户'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">'这里标记了您的账户信息'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">'left'</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">element</span><span class="token operator">:</span> <span class="token string">'.guide-start'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">popover</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'引导'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">'这里可再次查看引导信息'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">'left'</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">element</span><span class="token operator">:</span> <span class="token string">'.guide-feedback'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">popover</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'反馈'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">'您的任何不满都可以在这里告诉我们'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">'left'</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br></div></div><ol start="6">
<li>一一为其中的 <code>element</code> 指定对应的类名 <code>class</code></li>
<li>在 <code>src/views/layout/components/floating/index.vue</code> 导入数组，并执行 <code>defineSteps</code> 方法</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 开始引导
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">onGuideClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  driver<span class="token punctuation">.</span><span class="token function">defineSteps</span><span class="token punctuation">(</span>steps<span class="token punctuation">)</span>
  driver<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>但是此时的引导存在一个问题，那就是 <strong>白色背景会遮挡住已有的图标</strong> ，这个问题咱们如何处理呢...</p>
<p><img src="@source/.vuepress/public/images/yindao1.png" alt="图片"></p>
<h3 id="解决功能引导图标不显示的问题" tabindex="-1"><a class="header-anchor" href="#解决功能引导图标不显示的问题" aria-hidden="true">#</a> 解决功能引导图标不显示的问题</h3>
<p><code>styles/index.scss</code> 加上属性</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">div#driver-highlighted-element-stage, div#driver-page-overlay</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> transparent <span class="token important">!important</span><span class="token punctuation">;</span>
  <span class="token property">outline</span><span class="token punctuation">:</span> 5000px solid <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> .75<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p>处理了 <code>4</code> 个核心功能：</p>
<ol>
<li>文件下载</li>
<li>通用组件：<code>message </code>构建</li>
<li>全屏处理</li>
<li>引导处理</li>
</ol>
</template>
