<template><h1 id="vue3-elementplus-基础模块实现" tabindex="-1"><a class="header-anchor" href="#vue3-elementplus-基础模块实现" aria-hidden="true">#</a> vue3+ElementPlus 基础模块实现</h1>
<h2 id="个人中心模块基本布局" tabindex="-1"><a class="header-anchor" href="#个人中心模块基本布局" aria-hidden="true">#</a> 个人中心模块基本布局</h2>
<p>整个 <strong>个人中心</strong> 被分为左右两大块：</p>
<ol>
<li>项目介绍</li>
<li><code>tabs</code>
<ol>
<li>功能</li>
<li>章节</li>
<li>作者</li>
</ol>
</li>
</ol>
<p>根据功能划分，整个项目应该包含 4 个组件，分别对应着 4 个功能。</p>
<p>所以，我们想要完成 <strong>个人中心模块基本布局</strong> 那么就需要先创建出这四个组件</p>
<ol>
<li>在 <code>views/profile/components</code> 下创建 <strong>项目介绍</strong> 组件 <code>ProjectCard</code></li>
<li>在 <code>views/profile/components</code> 下创建 <strong>功能</strong> 组件 <code>feature</code></li>
<li>在 <code>views/profile/components</code> 下创建 <strong>章节</strong> 组件 <code>chapter</code></li>
<li>在 <code>views/profile/components</code> 下创建 <strong>作者</strong> 组件 <code>author</code></li>
<li>进入到 <code>views/profile/index</code> 页面，绘制基本布局结构</li>
</ol>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>profile<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-row</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-col</span> <span class="token attr-name">:span</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>project-card</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>project-card<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-col</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-col</span> <span class="token attr-name">:span</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>16<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-tabs</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>activeName<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo-tabs<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-tab-pane</span> <span class="token attr-name">:label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$t(<span class="token punctuation">'</span>msg.profile.feature<span class="token punctuation">'</span>)<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>feature<span class="token punctuation">"</span></span>
            <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>feature</span>
          <span class="token punctuation">/></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-tab-pane</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-tab-pane</span> <span class="token attr-name">:label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$t(<span class="token punctuation">'</span>msg.profile.chapter<span class="token punctuation">'</span>)<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>chapter<span class="token punctuation">"</span></span>
            <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Chapter</span>
          <span class="token punctuation">/></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-tab-pane</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-tab-pane</span> <span class="token attr-name">:label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$t(<span class="token punctuation">'</span>msg.profile.author<span class="token punctuation">'</span>)<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>author<span class="token punctuation">"</span></span>
            <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>author</span>
          <span class="token punctuation">/></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-tab-pane</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-tabs</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-col</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-row</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> Author <span class="token keyword">from</span> <span class="token string">'./components/Author.vue'</span>
<span class="token keyword">import</span> ProjectCard <span class="token keyword">from</span> <span class="token string">'./components/ProjectCard.vue'</span>
<span class="token keyword">import</span> Feature <span class="token keyword">from</span> <span class="token string">'./components/Feature.vue'</span>
<span class="token keyword">import</span> Chapter <span class="token keyword">from</span> <span class="token string">'./components/Chapter.vue'</span>

<span class="token keyword">const</span> activeName <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">'feature'</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
<span class="token selector">.project-card</span> <span class="token punctuation">{</span>
  <span class="token property">margin-right</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div><h2 id="创建-panthumb-头像组件" tabindex="-1"><a class="header-anchor" href="#创建-panthumb-头像组件" aria-hidden="true">#</a> 创建 PanThumb 头像组件</h2>
<p>在 <strong>项目介绍</strong> 模块中，存在一个头像：*<em>鼠标移入之后，头像会移开，显示出后面的文本</em>
1.创建 <code>components/PanThumb/index</code></p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
    <span class="token attr-name">:style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{ zIndex: zIndex, height: height, width: width }<span class="token punctuation">"</span></span>
    <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>pan-item<span class="token punctuation">"</span></span>
  <span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>pan-info<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>pan-info-roles-container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">:style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{ backgroundImage: `url(${image})` }<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>pan-thumb<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineProps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">image</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> String
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">zIndex</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> Number<span class="token punctuation">,</span>
    <span class="token keyword">default</span><span class="token operator">:</span> <span class="token number">1</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
    <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">'150px'</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
    <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">'150px'</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
<span class="token selector">.pan-item</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 1px 3px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.2<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token selector">.pan-info</span> <span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> inherit<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> inherit<span class="token punctuation">;</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
    <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
    <span class="token property">box-shadow</span><span class="token punctuation">:</span> inset 0 0 0 5px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.05<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token selector">h3</span> <span class="token punctuation">{</span>
      <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
      <span class="token property">text-transform</span><span class="token punctuation">:</span> uppercase<span class="token punctuation">;</span>
      <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
      <span class="token property">letter-spacing</span><span class="token punctuation">:</span> 2px<span class="token punctuation">;</span>
      <span class="token property">font-size</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span>
      <span class="token property">margin</span><span class="token punctuation">:</span> 0 60px<span class="token punctuation">;</span>
      <span class="token property">padding</span><span class="token punctuation">:</span> 22px 0 0 0<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 85px<span class="token punctuation">;</span>
      <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">'Open Sans'</span><span class="token punctuation">,</span> Arial<span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>
      <span class="token property">text-shadow</span><span class="token punctuation">:</span> 0 0 1px #fff<span class="token punctuation">,</span> 0 1px 2px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.3<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">p</span> <span class="token punctuation">{</span>
      <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
      <span class="token property">padding</span><span class="token punctuation">:</span> 10px 5px<span class="token punctuation">;</span>
      <span class="token property">font-style</span><span class="token punctuation">:</span> italic<span class="token punctuation">;</span>
      <span class="token property">margin</span><span class="token punctuation">:</span> 0 30px<span class="token punctuation">;</span>
      <span class="token property">font-size</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
      <span class="token property">border-top</span><span class="token punctuation">:</span> 1px solid <span class="token function">rgba</span><span class="token punctuation">(</span>255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token selector">a</span> <span class="token punctuation">{</span>
        <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
        <span class="token property">color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 80px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 80px<span class="token punctuation">;</span>
        <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 0.3<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
        <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
        <span class="token property">font-style</span><span class="token punctuation">:</span> normal<span class="token punctuation">;</span>
        <span class="token property">font-weight</span><span class="token punctuation">:</span> 700<span class="token punctuation">;</span>
        <span class="token property">text-transform</span><span class="token punctuation">:</span> uppercase<span class="token punctuation">;</span>
        <span class="token property">font-size</span><span class="token punctuation">:</span> 9px<span class="token punctuation">;</span>
        <span class="token property">letter-spacing</span><span class="token punctuation">:</span> 1px<span class="token punctuation">;</span>
        <span class="token property">padding-top</span><span class="token punctuation">:</span> 24px<span class="token punctuation">;</span>
        <span class="token property">margin</span><span class="token punctuation">:</span> 7px auto 0<span class="token punctuation">;</span>
        <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">'Open Sans'</span><span class="token punctuation">,</span> Arial<span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>
        <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">transition</span><span class="token punctuation">:</span> transform 0.3s ease-in-out 0.2s<span class="token punctuation">,</span>
          opacity 0.3s ease-in-out 0.2s<span class="token punctuation">,</span> background 0.2s linear 0s<span class="token punctuation">;</span>
        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>60px<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>90deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token selector">a:hover</span> <span class="token punctuation">{</span>
        <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.pan-info-roles-container</span> <span class="token punctuation">{</span>
      <span class="token property">padding</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
      <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token selector">.pan-thumb</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">background-position</span><span class="token punctuation">:</span> center center<span class="token punctuation">;</span>
    <span class="token property">background-size</span><span class="token punctuation">:</span> cover<span class="token punctuation">;</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
    <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">transform-origin</span><span class="token punctuation">:</span> 95% 40%<span class="token punctuation">;</span>
    <span class="token property">transition</span><span class="token punctuation">:</span> all 0.3s ease-in-out<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">.pan-item:hover .pan-thumb</span> <span class="token punctuation">{</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>-110deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">.pan-item:hover .pan-info p a</span> <span class="token punctuation">{</span>
    <span class="token property">opacity</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>0px<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>0deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br></div></div><h2 id="项目介绍模块开发" tabindex="-1"><a class="header-anchor" href="#项目介绍模块开发" aria-hidden="true">#</a> 项目介绍模块开发</h2>
<p>项目介绍从上到下可以分为三部分：</p>
<ol>
<li>头像区域</li>
<li>项目介绍</li>
<li>项目功能</li>
</ol>
<p>对于这三块的数据而言，前面两个是直接在前端写死的，<strong>项目功能</strong> 是从服务端获取到的。</p>
<p>对于前端写死部分，已经在之前定义到了 <code>i18n/lang</code> 之下</p>
<p>而对于从服务端获取部分，就需要单独定义上接口了：</p>
<ol>
<li>
<p>创建 <code>api/user</code> 模块</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> request <span class="token keyword">from</span> <span class="token string">'@/utils/request'</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">feature</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'/user/feature'</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></li>
<li>
<p>因为该数据会同时在 <code>ProjectCard</code> 和 <code>Feature</code> 组件中使用，所以我们可以在 <code>profile</code> 中调用该接口获取数据，然后再把数据分别传入到两个子级组件中</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> feature <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/api/user'</span>

<span class="token keyword">const</span> featureData <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">getFeatureData</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  featureData<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">feature</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">getFeatureData</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></li>
<li>
<p>传递数据到 <code>ProjectCard</code></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>project-card</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>user-card<span class="token punctuation">"</span></span> <span class="token attr-name">:features</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>featureData<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>project-card</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li>
</ol>
<p>有了数据之后，接下来完成 <strong>项目介绍</strong> 模块</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-card</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>user-container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#header</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>header<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>{{ $t('msg.profile.introduce') }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>user-profile<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token comment">&lt;!-- 头像 --></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box-center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pan-thumb</span>
          <span class="token attr-name">:image</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$store.getters.userInfo.avatar<span class="token punctuation">"</span></span>
          <span class="token attr-name">:height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">'</span>100px<span class="token punctuation">'</span><span class="token punctuation">"</span></span>
          <span class="token attr-name">:width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">'</span>100px<span class="token punctuation">'</span><span class="token punctuation">"</span></span>
          <span class="token attr-name">:hoverable</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>false<span class="token punctuation">"</span></span>
        <span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>Hello<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
          {{ $store.getters.userInfo.title }}
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>pan-thumb</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
      <span class="token comment">&lt;!-- 姓名 &amp;&amp; 角色 --></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box-center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>user-name text-center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          {{ $store.getters.userInfo.username }}
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>user-role text-center text-muted<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          {{ $store.getters.userInfo.title }}
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!-- 简介 --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>project-bio<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>project-bio-section<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>project-bio-section-header<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-icon</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Document</span> <span class="token punctuation">/></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-icon</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>{{ $t('msg.profile.projectIntroduction') }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>project-bio-section-body<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text-muted<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            {{ $t('msg.profile.muted') }}
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
      <span class="token comment">&lt;!--功能--></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>project-bio-section<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>project-bio-section-header<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-icon</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Menu</span> <span class="token punctuation">/></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-icon</span><span class="token punctuation">></span></span>
          {{ $t('msg.profile.projectFunction') }}
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>project-bio-section-body<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>progress-item<span class="token punctuation">"</span></span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item in features<span class="token punctuation">"</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item.id<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>{{ item.title }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-progress</span> <span class="token attr-name">:percentage</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item.percentage<span class="token punctuation">"</span></span> <span class="token attr-name">status</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>success<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-card</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> PanThumb <span class="token keyword">from</span> <span class="token string">'@/components/PanThumb/index.vue'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineProps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">features</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> Array
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
<span class="token selector">.user-container</span> <span class="token punctuation">{</span>
  <span class="token selector">.text-muted</span> <span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #777<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">.user-profile</span> <span class="token punctuation">{</span>
    <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token selector">.user-name</span> <span class="token punctuation">{</span>
      <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.box-center</span> <span class="token punctuation">{</span>
      <span class="token property">padding-top</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.user-role</span> <span class="token punctuation">{</span>
      <span class="token property">padding-top</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
      <span class="token property">font-weight</span><span class="token punctuation">:</span> 400<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.project-bio</span> <span class="token punctuation">{</span>
    <span class="token property">margin-top</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #606266<span class="token punctuation">;</span>
    <span class="token selector">span</span> <span class="token punctuation">{</span>
      <span class="token property">padding-left</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.project-bio-section</span> <span class="token punctuation">{</span>
      <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 36px<span class="token punctuation">;</span>
      <span class="token selector">.project-bio-section-header</span> <span class="token punctuation">{</span>
        <span class="token property">border-bottom</span><span class="token punctuation">:</span> 1px solid #dfe6ec<span class="token punctuation">;</span>
        <span class="token property">padding-bottom</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
        <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
        <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token selector">.project-bio-section-body</span> <span class="token punctuation">{</span>
        <span class="token selector">.progress-item</span> <span class="token punctuation">{</span>
          <span class="token property">margin-top</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
          <span class="token selector">div</span> <span class="token punctuation">{</span>
            <span class="token property">font-size</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span>
            <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 2px<span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br></div></div><h2 id="接口国际化-处理接口国际化问题" tabindex="-1"><a class="header-anchor" href="#接口国际化-处理接口国际化问题" aria-hidden="true">#</a> 接口国际化：处理接口国际化问题</h2>
<p>在现在去切换语言，发现在 <strong>项目功能</strong> 部分，数据并没有进行国际化展示，所以接下来需要处理的就是这部分数据的国际化内容</p>
<p>在前面我们知道整个 <strong>项目介绍</strong> 中，数据存在两种：</p>
<ol>
<li>本地写死的国际化数据</li>
<li>接口获取到的数据</li>
</ol>
<p>那么针对于第一种数据是可以直接完成国际化展示的。</p>
<p>但是第二种数据因为是从服务端获取到的，所以说，服务端返回什么内容，那么前端就会展示什么内容。</p>
<p>所以说如果想要完成接口的国际化，那么就需要让服务端返回对应国际化的数据。</p>
<p>如果想要达到这个目的，那么我们需要：<strong>在接口请求的 <code>headers</code> 中增加 <code>Accept-Language</code> 表明当前我们所需要的语言类型</strong>，在 <strong>支持国际化</strong> 的接口服务中，可以直接获取到国际化数据</p>
<ol>
<li>在 <code>utils/request.js</code> 的请求拦截器中增加 <code>headers</code> 配置
<img src="@source/.vuepress/public/images/gj1.png" alt="图片"></li>
</ol>
<p>其实发现，在切换了语言之后，<strong>刷新</strong> 页面即可获取到 <strong>国际化返回数据</strong></p>
<p>但是每次都刷新页面的操作未免不太友好，那么有没有什么办法可以跳过刷新这个步骤呢？</p>
<p>只需要：<strong>监听语言变化，重新计算数据源初始化(重新发请求)</strong>,  监听 语言的变化, 重新执行传入的回调(重新获取数据), 如网络请求</p>
<ol>
<li>在 <code>utils/i18n.js</code> 下，新建方法 <code>watchSwitchLang</code></li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token keyword">import</span> <span class="token punctuation">{</span> watch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
    <span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">'@/store'</span>

    <span class="token doc-comment comment">/**
     *
     * <span class="token keyword">@param</span>  <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">...</span>any<span class="token punctuation">}</span></span> <span class="token parameter">cbs</span> 所有的回调
     */</span>
    <span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">watchSwitchLang</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>cbs</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">watch</span><span class="token punctuation">(</span>
        <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> store<span class="token punctuation">.</span>getters<span class="token punctuation">.</span>language<span class="token punctuation">,</span>
        <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          cbs<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">cb</span> <span class="token operator">=></span> <span class="token function">cb</span><span class="token punctuation">(</span>store<span class="token punctuation">.</span>getters<span class="token punctuation">.</span>language<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>定义过的 <code>watchSwitchLang</code> 方法，该方法可以 <strong>监听到语言的变化，然后指定操作</strong>。依赖这个方法得出以下代码：</p>
<ol start="2">
<li>
<p>在 <code>views/profile/index</code> 中</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> watchSwitchLang <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/utils/i18n'</span>
<span class="token comment">// 监听语言切换, 重新发请求</span>
<span class="token function">watchSwitchLang</span><span class="token punctuation">(</span>getFeatureData<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li>
</ol>
<p>那么现在 <strong>项目介绍</strong> 的数据已经可以实现国际化了</p>
<h2 id="功能模块开发" tabindex="-1"><a class="header-anchor" href="#功能模块开发" aria-hidden="true">#</a> 功能模块开发</h2>
<p>处理完成接口的国际化之后，接下来完成功能模块开发</p>
<p>功能模块中会使用到 <code>element-plus</code> 的 <a href="https://element-plus.org/zh-CN/component/collapse.html" target="_blank" rel="noopener noreferrer">el-collapse<ExternalLinkIcon/></a> 组件</p>
<ol>
<li>在 <code>profile</code> 中传递数据到 <code>Feature</code></li>
<li>渲染 UI结构</li>
</ol>
<p><strong>profile/components/Feature.vue</strong></p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>feature<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-collapse</span> <span class="token attr-name">accordion</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-collapse-item</span>
        <span class="token attr-name">:title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item.title<span class="token punctuation">"</span></span>
        <span class="token attr-name">:name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item.title<span class="token punctuation">"</span></span>
        <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item in features<span class="token punctuation">"</span></span>
        <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item.index<span class="token punctuation">"</span></span>
      <span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>content<span class="token punctuation">"</span></span> <span class="token attr-name">v-html</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item.content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-collapse-item</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-collapse</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineProps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>

<span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">features</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> Array<span class="token punctuation">,</span>
    <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>features<span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
<span class="token selector">::v-deep .content</span> <span class="token punctuation">{</span>
  <span class="token selector">a</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span>0 4px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><h2 id="作者模块开发" tabindex="-1"><a class="header-anchor" href="#作者模块开发" aria-hidden="true">#</a> 作者模块开发</h2>
<p>这里比较简单, 直接干</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>author-container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>header<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pan-thumb</span>
        <span class="token attr-name">image</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://img4.sycdn.imooc.com/61110c2b0001152907400741-140-140.jpg<span class="token punctuation">"</span></span>
        <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>60px<span class="token punctuation">"</span></span>
        <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>60px<span class="token punctuation">"</span></span>
        <span class="token attr-name">:hoverable</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>false<span class="token punctuation">"</span></span>
      <span class="token punctuation">></span></span>
        {{ $t('msg.profile.name') }}
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>pan-thumb</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>header-desc<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span>{{ $t('msg.profile.name') }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>{{ $t('msg.profile.job') }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>info<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      {{ $t('msg.profile.Introduction') }}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> PanThumb <span class="token keyword">from</span> <span class="token string">'@/components/PanThumb/index.vue'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
<span class="token selector">.author-container</span> <span class="token punctuation">{</span>
  <span class="token selector">.header</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
    <span class="token selector">.header-desc</span> <span class="token punctuation">{</span>
      <span class="token property">margin-left</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
      <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
      <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
      <span class="token property">justify-content</span><span class="token punctuation">:</span> space-around<span class="token punctuation">;</span>

      <span class="token selector">span</span> <span class="token punctuation">{</span>
        <span class="token property">font-size</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.info</span> <span class="token punctuation">{</span>
    <span class="token property">margin-top</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
    <span class="token property">line-height</span><span class="token punctuation">:</span> 22px<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span>
    <span class="token property">text-indent</span><span class="token punctuation">:</span> 26px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br></div></div></template>
