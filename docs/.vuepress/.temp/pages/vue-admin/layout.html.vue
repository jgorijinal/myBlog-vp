<template><h1 id="项目架构之搭建-layout架构-解决方案与实现" tabindex="-1"><a class="header-anchor" href="#项目架构之搭建-layout架构-解决方案与实现" aria-hidden="true">#</a> 项目架构之搭建 Layout架构 解决方案与实现</h1>
<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2>
<p>layout 页面分为了三个部分，分别是：</p>
<ol>
<li>左侧的 <code>Menu</code> 菜单</li>
<li>顶部的 <code>NavBar</code></li>
<li>中间的内容区 <code>Main</code></li>
</ol>
<p>将会实现以下的核心解决方案：</p>
<ol>
<li>用户退出方案</li>
<li>动态侧边栏方案</li>
<li>动态面包屑方案</li>
</ol>
<p>除了这些核心内容之外，还有一些其他的小功能，比如：</p>
<ol>
<li>退出的通用逻辑封装</li>
<li>伸缩侧边栏动画</li>
<li><code>vue3</code> 动画</li>
<li>组件状态驱动的动态 <code>CSS</code> 值等等</li>
</ol>
<p>等等</p>
<h2 id="创建基于-layout-的基础架构" tabindex="-1"><a class="header-anchor" href="#创建基于-layout-的基础架构" aria-hidden="true">#</a> 创建基于 Layout 的基础架构</h2>
<p><img src="@source/.vuepress/public/images/lot1.png" alt="图片">
我们知道，当登录完成之后，那么我们会进入到 <code>Layout</code> 页面，这个 <code>Layout</code> 页面组件位于 <code>Layout/index.vue</code> 中，所以说想要实现这样的结构，那么我们就需要到对应的 <code>layout</code> 组件中进行。</p>
<ol>
<li>
<p>整个页面分为三部分，所以我们需要先去创建对应的三个组件：</p>
<ol>
<li><code>layout/components/Sidebar/index.vue</code></li>
<li><code>layout/components/Navbar.vue</code></li>
<li><code>layout/components/AppMain.vue</code></li>
</ol>
</li>
<li>
<p>然后在 <code>layout/index.vue</code> 中引入这三个组件</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">import</span> Navbar <span class="token keyword">from</span> <span class="token string">'./components/Navbar'</span>
    <span class="token keyword">import</span> Sidebar <span class="token keyword">from</span> <span class="token string">'./components/Sidebar'</span>
    <span class="token keyword">import</span> AppMain <span class="token keyword">from</span> <span class="token string">'./components/AppMain'</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></li>
<li>
<p>完成对应的布局结构</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app-wrapper<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!-- 左侧 menu --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sidebar</span>
      <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>guide-sidebar<span class="token punctuation">"</span></span>
      <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>sidebar-container<span class="token punctuation">"</span></span>
    <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>main-container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fixed-header<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token comment">&lt;!-- 顶部的 navbar --></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>navbar</span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
      <span class="token comment">&lt;!-- 内容区 --></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>app-main</span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div></li>
<li>
<p>在 <code>styles</code> 中创建如下 <code>css</code> 文件：</p>
<ol>
<li><code>variables.module.scss</code> ： 定义常量</li>
<li><code>mixin.scss</code> ：定义通用的 <code>css</code></li>
<li><code>sidebar.scss</code>：处理 <code>menu</code> 菜单的样式</li>
</ol>
</li>
<li>
<p>为 <code>variables.module.scss</code> ，定义如下常量并进行导出（ <code>:export</code> 可见 <a href="https://www.bluematador.com/blog/how-to-share-variables-between-js-and-sass" target="_blank" rel="noopener noreferrer">scss 与 js 共享变量<ExternalLinkIcon/></a>）：</p>
<div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token comment">// sidebar</span>
<span class="token property"><span class="token variable">$menuText</span></span><span class="token punctuation">:</span> #bfcbd9<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$menuActiveText</span></span><span class="token punctuation">:</span> #ffffff<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$subMenuActiveText</span></span><span class="token punctuation">:</span> #f4f4f5<span class="token punctuation">;</span>

<span class="token property"><span class="token variable">$menuBg</span></span><span class="token punctuation">:</span> #304156<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$menuHover</span></span><span class="token punctuation">:</span> #263445<span class="token punctuation">;</span>

<span class="token property"><span class="token variable">$subMenuBg</span></span><span class="token punctuation">:</span> #1f2d3d<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$subMenuHover</span></span><span class="token punctuation">:</span> #001528<span class="token punctuation">;</span>

<span class="token property"><span class="token variable">$sideBarWidth</span></span><span class="token punctuation">:</span> 210px<span class="token punctuation">;</span>

<span class="token comment">// https://www.bluematador.com/blog/how-to-share-variables-between-js-and-sass</span>
<span class="token comment">// JS 与 scss 共享变量，在 scss 中通过 :export 进行导出，在 js 中可通过 ESM 进行导入</span>
<span class="token selector">:export </span><span class="token punctuation">{</span>
  <span class="token property">menuText</span><span class="token punctuation">:</span> <span class="token variable">$menuText</span><span class="token punctuation">;</span>
  <span class="token property">menuActiveText</span><span class="token punctuation">:</span> <span class="token variable">$menuActiveText</span><span class="token punctuation">;</span>
  <span class="token property">subMenuActiveText</span><span class="token punctuation">:</span> <span class="token variable">$subMenuActiveText</span><span class="token punctuation">;</span>
  <span class="token property">menuBg</span><span class="token punctuation">:</span> <span class="token variable">$menuBg</span><span class="token punctuation">;</span>
  <span class="token property">menuHover</span><span class="token punctuation">:</span> <span class="token variable">$menuHover</span><span class="token punctuation">;</span>
  <span class="token property">subMenuBg</span><span class="token punctuation">:</span> <span class="token variable">$subMenuBg</span><span class="token punctuation">;</span>
  <span class="token property">subMenuHover</span><span class="token punctuation">:</span> <span class="token variable">$subMenuHover</span><span class="token punctuation">;</span>
  <span class="token property">sideBarWidth</span><span class="token punctuation">:</span> <span class="token variable">$sideBarWidth</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div></li>
<li>
<p>为 <code>mixin.scss</code> 定义如下样式：</p>
<div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token keyword">@mixin</span> <span class="token selector">clearfix </span><span class="token punctuation">{</span>
  <span class="token selector"><span class="token parent important">&amp;</span>:after </span><span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">''</span><span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> table<span class="token punctuation">;</span>
    <span class="token property">clear</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">@mixin</span> <span class="token selector">scrollBar </span><span class="token punctuation">{</span>
  <span class="token selector"><span class="token parent important">&amp;</span>::-webkit-scrollbar-track-piece </span><span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span> #d3dce6<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector"><span class="token parent important">&amp;</span>::-webkit-scrollbar </span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 6px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector"><span class="token parent important">&amp;</span>::-webkit-scrollbar-thumb </span><span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span> #99a9bf<span class="token punctuation">;</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">@mixin</span> <span class="token selector">relative </span><span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div></li>
<li>
<p>为 <code>sidebar.scss</code> 定义如下样式：</p>
<div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token selector">#app </span><span class="token punctuation">{</span>
  <span class="token selector">.main-container </span><span class="token punctuation">{</span>
    <span class="token property">min-height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">transition</span><span class="token punctuation">:</span> margin-left 0.28s<span class="token punctuation">;</span>
    <span class="token property">margin-left</span><span class="token punctuation">:</span> <span class="token variable">$sideBarWidth</span><span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">.sidebar-container </span><span class="token punctuation">{</span>
    <span class="token property">transition</span><span class="token punctuation">:</span> width 0.28s<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token variable">$sideBarWidth</span> <span class="token important">!important</span><span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> fixed<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">z-index</span><span class="token punctuation">:</span> 1001<span class="token punctuation">;</span>
    <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>

    <span class="token comment">// 重置 element-plus 的css</span>
    <span class="token selector">.horizontal-collapse-transition </span><span class="token punctuation">{</span>
      <span class="token property">transition</span><span class="token punctuation">:</span> 0s width ease-in-out<span class="token punctuation">,</span> 0s padding-left ease-in-out<span class="token punctuation">,</span>
        0s padding-right ease-in-out<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.scrollbar-wrapper </span><span class="token punctuation">{</span>
      <span class="token property">overflow-x</span><span class="token punctuation">:</span> hidden <span class="token important">!important</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.el-scrollbar__bar.is-vertical </span><span class="token punctuation">{</span>
      <span class="token property">right</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.el-scrollbar </span><span class="token punctuation">{</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector"><span class="token parent important">&amp;</span>.has-logo </span><span class="token punctuation">{</span>
      <span class="token selector">.el-scrollbar </span><span class="token punctuation">{</span>
        <span class="token property">height</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>100% <span class="token operator">-</span> 50px<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.is-horizontal </span><span class="token punctuation">{</span>
      <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">a </span><span class="token punctuation">{</span>
      <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
      <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.svg-icon </span><span class="token punctuation">{</span>
      <span class="token property">margin-right</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.sub-el-icon </span><span class="token punctuation">{</span>
      <span class="token property">margin-right</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
      <span class="token property">margin-left</span><span class="token punctuation">:</span> -2px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.el-menu </span><span class="token punctuation">{</span>
      <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 100% <span class="token important">!important</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.is-active > .el-submenu__title </span><span class="token punctuation">{</span>
      <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$subMenuActiveText</span> <span class="token important">!important</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector"><span class="token parent important">&amp;</span> .nest-menu .el-submenu > .el-submenu__title,
    <span class="token parent important">&amp;</span> .el-submenu .el-menu-item </span><span class="token punctuation">{</span>
      <span class="token property">min-width</span><span class="token punctuation">:</span> <span class="token variable">$sideBarWidth</span> <span class="token important">!important</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token selector">.hideSidebar </span><span class="token punctuation">{</span>
    <span class="token selector">.sidebar-container </span><span class="token punctuation">{</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 54px <span class="token important">!important</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.main-container </span><span class="token punctuation">{</span>
      <span class="token property">margin-left</span><span class="token punctuation">:</span> 54px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.submenu-title-noDropdown </span><span class="token punctuation">{</span>
      <span class="token property">padding</span><span class="token punctuation">:</span> 0 <span class="token important">!important</span><span class="token punctuation">;</span>
      <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>

      <span class="token selector">.el-tooltip </span><span class="token punctuation">{</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 0 <span class="token important">!important</span><span class="token punctuation">;</span>

        <span class="token selector">.svg-icon </span><span class="token punctuation">{</span>
          <span class="token property">margin-left</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">.sub-el-icon </span><span class="token punctuation">{</span>
          <span class="token property">margin-left</span><span class="token punctuation">:</span> 19px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.el-submenu </span><span class="token punctuation">{</span>
      <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>

      <span class="token selector"><span class="token parent important">&amp;</span> > .el-submenu__title </span><span class="token punctuation">{</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 0 <span class="token important">!important</span><span class="token punctuation">;</span>

        <span class="token selector">.svg-icon </span><span class="token punctuation">{</span>
          <span class="token property">margin-left</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">.sub-el-icon </span><span class="token punctuation">{</span>
          <span class="token property">margin-left</span><span class="token punctuation">:</span> 19px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">.el-submenu__icon-arrow </span><span class="token punctuation">{</span>
          <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.el-menu--collapse </span><span class="token punctuation">{</span>
      <span class="token selector">.el-submenu </span><span class="token punctuation">{</span>
        <span class="token selector"><span class="token parent important">&amp;</span> > .el-submenu__title </span><span class="token punctuation">{</span>
          <span class="token selector"><span class="token parent important">&amp;</span> > span </span><span class="token punctuation">{</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
            <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
            <span class="token property">visibility</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
            <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token selector">.el-menu--collapse .el-menu .el-submenu </span><span class="token punctuation">{</span>
    <span class="token property">min-width</span><span class="token punctuation">:</span> <span class="token variable">$sideBarWidth</span> <span class="token important">!important</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">.withoutAnimation </span><span class="token punctuation">{</span>
    <span class="token selector">.main-container,
    .sidebar-container </span><span class="token punctuation">{</span>
      <span class="token property">transition</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token selector">.el-menu--vertical </span><span class="token punctuation">{</span>
  <span class="token selector"><span class="token parent important">&amp;</span> > .el-menu </span><span class="token punctuation">{</span>
    <span class="token selector">.svg-icon </span><span class="token punctuation">{</span>
      <span class="token property">margin-right</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.sub-el-icon </span><span class="token punctuation">{</span>
      <span class="token property">margin-right</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
      <span class="token property">margin-left</span><span class="token punctuation">:</span> -2px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 菜单项过长时</span>
  <span class="token selector">> .el-menu--popup </span><span class="token punctuation">{</span>
    <span class="token property">max-height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
    <span class="token property">overflow-y</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>

    <span class="token selector"><span class="token parent important">&amp;</span>::-webkit-scrollbar-track-piece </span><span class="token punctuation">{</span>
      <span class="token property">background</span><span class="token punctuation">:</span> #d3dce6<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector"><span class="token parent important">&amp;</span>::-webkit-scrollbar </span><span class="token punctuation">{</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 6px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector"><span class="token parent important">&amp;</span>::-webkit-scrollbar-thumb </span><span class="token punctuation">{</span>
      <span class="token property">background</span><span class="token punctuation">:</span> #99a9bf<span class="token punctuation">;</span>
      <span class="token property">border-radius</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br></div></div></li>
<li>
<p>在 <code>index.scss</code> 中按照顺序导入以上样式文件</p>
<div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token keyword">@import</span> <span class="token string">'./variables.module.scss'</span><span class="token punctuation">;</span>
<span class="token keyword">@import</span> <span class="token string">'./mixin.scss'</span><span class="token punctuation">;</span>
<span class="token keyword">@import</span> <span class="token string">'./sidebar.scss'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li>
<li>
<p>在 <code>layout/index.vue</code> 中写入如下样式</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
<span class="token atrule"><span class="token rule">@import</span> <span class="token string">'~@/styles/mixin.scss'</span><span class="token punctuation">;</span></span>
<span class="token atrule"><span class="token rule">@import</span> <span class="token string">'~@/styles/variables.module.scss'</span><span class="token punctuation">;</span></span>

<span class="token selector">.app-wrapper</span> <span class="token punctuation">{</span>
  <span class="token atrule"><span class="token rule">@include</span> clearfix<span class="token punctuation">;</span></span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.fixed-header</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> fixed<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">z-index</span><span class="token punctuation">:</span> 9<span class="token punctuation">;</span>
  <span class="token selector">width: calc(100% - #</span><span class="token punctuation">{</span>$sideBarWidth<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div></li>
<li>
<p>因为将来要实现 <strong>主题更换</strong>，所以为 <code>sidebar</code> 赋值动态的背景颜色</p>
</li>
</ol>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
...
    <span class="token comment">&lt;!-- 左侧 menu --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sidebar</span>
      <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>sidebar-container<span class="token punctuation">"</span></span>
      <span class="token attr-name">:style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{ backgroundColor: variables.menuBg }<span class="token punctuation">"</span></span>
    <span class="token punctuation">/></span></span>
...
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> variables <span class="token keyword">from</span> <span class="token string">'@/styles/variables.module.scss'</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><ol start="11">
<li>为 <code>Navbar</code>、<code>Sidebar</code>、<code>AppMain</code> 组件进行初始化代码</li>
</ol>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>Navbar<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">></span></span><span class="token style"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ol start="12">
<li>至此查看效果为
<img src="@source/.vuepress/public/images/an1.png" alt="图片"></li>
<li>可见 <code>Navbar</code> 与 <code>AppMain</code> 重叠</li>
<li>为 <code>AppMain</code> 进行样式处理</li>
</ol>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>组件名<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
<span class="token selector">.app-main</span> <span class="token punctuation">{</span>
  <span class="token comment">/*浏览器可是区域 100vh*/</span>
  <span class="token property">min-height</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>100vh - 50px<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 61px 20px 20px 20px<span class="token punctuation">;</span>
  <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><ol start="15">
<li>查看效果
<img src="@source/.vuepress/public/images/an2.png" alt="图片"></li>
</ol>
<p>下一步去实现一下 <code>navbar</code> 中的功能操作</p>
<h2 id="获取用户信息" tabindex="-1"><a class="header-anchor" href="#获取用户信息" aria-hidden="true">#</a> 获取用户信息</h2>
<p>接下来我们实现一下 <code>navbar</code> 中的 <strong>头像菜单</strong> 功能</p>
<p><img src="@source/.vuepress/public/images/uy1.png" alt="图片"></p>
<p>这样的一个功能主要分为三个部分：</p>
<ol>
<li>获取并展示用户信息</li>
<li><code>element-plus</code> 中的 <code>dropdown</code> 组件使用</li>
<li>退出登录的方案实现</li>
</ol>
<p>现在就实现第一部分的功能 <strong>获取并展示用户信息</strong></p>
<p><strong>获取并展示用户信息</strong> 我们把它分为三部分进行实现：</p>
<ol>
<li>定义接口请求方法</li>
<li>定义调用接口的动作</li>
<li>在<strong>权限拦截时</strong>触发动作</li>
</ol>
<p>那么接下来我们就根据这三个步骤，分别来进行实现：</p>
<p><strong>定义接口请求方法：</strong></p>
<p>在 <code>api/sys.js</code> 中定义如下方法：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 获取用户信息</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">getUserInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'GET'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'/sys/profile'</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>因为获取用户信息需要对应的 <code>token</code> ，所以我们可以利用 <code>axios</code> 的 <strong>请求拦截器</strong> 对 <code>token</code> 进行统一注入，在 <code>utils/request.js</code> 中写入如下代码：
<img src="@source/.vuepress/public/images/ttoo1.png" alt="图片"></p>
<p><strong>定义调用接口的动作：</strong></p>
<p>在 <code>store/modules/user</code> 中写入以下代码：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> login<span class="token punctuation">,</span> getUserInfo <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/api/sys'</span>
<span class="token operator">...</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">namespaced</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token function">state</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token operator">...</span>
      <span class="token literal-property property">userInfo</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mutations</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
    <span class="token function">setUserInfo</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> userInfo</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      state<span class="token punctuation">.</span>userInfo <span class="token operator">=</span> userInfo
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
   <span class="token operator">...</span>
    <span class="token keyword">async</span> <span class="token function">getUserInfoAction</span><span class="token punctuation">(</span><span class="token parameter">context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getUserInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
      context<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">'setUserInfo'</span><span class="token punctuation">,</span> res<span class="token punctuation">)</span>
      <span class="token keyword">return</span> res
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><p><strong>在权限拦截时触发动作：</strong>
<img src="@source/.vuepress/public/images/ttoo2.png" alt="图片"></p>
<p>但先在 <code>store/getters.js</code> 中写入判断是否有用户信息代码：
<img src="@source/.vuepress/public/images/ttoo3.png" alt="图片"></p>
<h2 id="渲染用户头像菜单" tabindex="-1"><a class="header-anchor" href="#渲染用户头像菜单" aria-hidden="true">#</a> 渲染用户头像菜单</h2>
<p>到现在已经拿到了 <strong>用户数据，并且在 <code>getters</code> 中做了对应的快捷访问</strong> ，那么接下来我们就可以根据数据渲染出 <strong>用户头像内容</strong></p>
<p>渲染用户头像，我们将使用到 <code>element-plus</code> 的两个组件：</p>
<ol>
<li><code>avatar</code></li>
<li><code>Dropdown</code></li>
</ol>
<p>在 <code>layout/components/navbar.js</code> 中实现以下代码</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>navbar<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>right-menu<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token comment">&lt;!-- 头像 --></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-dropdown</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>avatar-container<span class="token punctuation">"</span></span> <span class="token attr-name">trigger</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>click<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>avatar-wrapper<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-avatar</span>
            <span class="token attr-name">shape</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>square<span class="token punctuation">"</span></span>
            <span class="token attr-name">:size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>40<span class="token punctuation">"</span></span>
            <span class="token attr-name">:src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$store.getters.userInfo.avatar<span class="token punctuation">"</span></span>
          <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-avatar</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-icon</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tools</span> <span class="token punctuation">/></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-icon</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#dropdown</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-dropdown-menu</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>user-dropdown<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-dropdown-item</span><span class="token punctuation">></span></span> 首页 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-dropdown-item</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-dropdown-item</span> <span class="token attr-name">divided</span><span class="token punctuation">></span></span> 退出登录 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-dropdown-item</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-dropdown-menu</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-dropdown</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
<span class="token selector">.navbar</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 1px 4px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 21<span class="token punctuation">,</span> 41<span class="token punctuation">,</span> 0.08<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token selector">.right-menu</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
    <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">float</span><span class="token punctuation">:</span> right<span class="token punctuation">;</span>
    <span class="token property">padding-right</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>

    <span class="token selector">::v-deep .avatar-container</span> <span class="token punctuation">{</span>
      <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
      <span class="token selector">.avatar-wrapper</span> <span class="token punctuation">{</span>
        <span class="token property">margin-top</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
        <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
        <span class="token selector">.el-avatar</span> <span class="token punctuation">{</span>
          <span class="token property">--el-avatar-background-color</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
          <span class="token property">margin-right</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br></div></div><h2 id="退出登录方案实现" tabindex="-1"><a class="header-anchor" href="#退出登录方案实现" aria-hidden="true">#</a> 退出登录方案实现</h2>
<p><strong>退出登录</strong> 一直是一个通用的前端实现方案，对于退出登录而言，它的触发时机一般有两种：</p>
<ol>
<li>用户<strong>主动</strong>退出</li>
<li>用户<strong>被动</strong>退出</li>
</ol>
<p>其中：</p>
<ol>
<li>主动退出指：用户点击登录按钮之后退出</li>
<li>被动退出指：<code>token</code> 过期或 单用户登录(被其他人”顶下来“) 时退出</li>
</ol>
<p>那么无论是什么退出方式，在用户退出时，所需要执行的操作都是固定的：</p>
<ol>
<li>清理掉当前用户缓存数据</li>
<li>清理掉权限相关配置</li>
<li>返回到登录页</li>
</ol>
<p>那么明确好了对应的方案之后，接下来咱们就先来实现 <strong>用户主动退出的对应策略</strong></p>
<h3 id="用户主动退出解决方案" tabindex="-1"><a class="header-anchor" href="#用户主动退出解决方案" aria-hidden="true">#</a> 用户主动退出解决方案</h3>
<p>在 <code>store/modules/user.js</code> 中，添加对应 <code>action</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code> <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
    <span class="token function">logoutAction</span><span class="token punctuation">(</span><span class="token parameter">context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      context<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">'setToken'</span><span class="token punctuation">,</span> <span class="token string">''</span><span class="token punctuation">)</span>
      context<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">'setUserInfo'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
      storage<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token comment">// TODO : 清理掉权限相关配置</span>
      router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">'/login'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>为退出登录按钮添加点击事件，触发 <code>logout</code> 的 <code>action</code></p>
<p><img src="@source/.vuepress/public/images/ou1.png" alt="图片">
<img src="@source/.vuepress/public/images/ou2.png" alt="图片"></p>
<p>完成了 <strong>用户主动退出</strong> 对应的实现</p>
<h3 id="用户被动退出方案解析" tabindex="-1"><a class="header-anchor" href="#用户被动退出方案解析" aria-hidden="true">#</a> 用户被动退出方案解析</h3>
<p>在上面实现了 <strong>用户主动退出</strong> 场景，同时也提到 <strong>用户被动退出</strong> 的场景主要有两个：</p>
<ol>
<li><code>token</code> 失效</li>
<li>单用户登录：其他人登录该账号被 “顶下来”</li>
</ol>
<p>那么这两种场景下，在前端对应的处理方案一共也分为两种，共分为 <strong>主动处理</strong> 、<strong>被动处理</strong> 两种 ：</p>
<ol>
<li>主动处理：主要应对 <code>token</code> 失效</li>
<li>被动处理：同时应对 <code>token</code> 失效 与 <strong>单用户登录</strong></li>
</ol>
<p>这两种方案基本上就覆盖了用户被动推出时的主要业务场景了</p>
<p>主要分析了 <strong>用户被动退出</strong> 的场景，那么从下面开始，分别来实现这两种处理方案</p>
<h3 id="用户被动退出解决方案之-主动处理" tabindex="-1"><a class="header-anchor" href="#用户被动退出解决方案之-主动处理" aria-hidden="true">#</a> 用户被动退出解决方案之 - 主动处理</h3>
<p>有时效的，这个大家都知道。但是通常情况下，这个时效都是在服务端进行处理。而此时我们要在 <strong>服务端处理 <code>token</code> 时效的同时，在前端主动介入 <code>token</code> 时效的处理</strong>。 从而保证用户信息的更加安全性。</p>
<p>那么对应到我们代码中的实现方案为：</p>
<ol>
<li>在用户登陆时，记录当前 <strong>登录时间</strong></li>
<li>制定一个 <strong>失效时长</strong></li>
<li>在接口调用时，根据 <strong>当前时间</strong> 对比 <strong>登录时间</strong> ，看是否超过了 <strong>时效时长</strong>
<ol>
<li>如果未超过，则正常进行后续操作</li>
<li>如果超过，则进行 <strong>退出登录</strong> 操作</li>
</ol>
</li>
</ol>
<p>那么明确好了对应的方案之后，接下来就去实现对应代码</p>
<ol>
<li>创建 <code>utils/auth.js</code> 文件，并写入以下代码：</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> storage <span class="token keyword">from</span> <span class="token string">'./storage'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">TIME_STAMP</span><span class="token punctuation">,</span> <span class="token constant">TOKEN_TIMEOUT_VALUE</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/constant'</span>

<span class="token comment">// 获取 时间戳</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">getTimeStamp</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> storage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token constant">TIME_STAMP</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 设置时间戳</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">setTimeStamp</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  storage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token constant">TIME_STAMP</span><span class="token punctuation">,</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 判断是否超时 true / false</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">isCheckTImeout</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 当前时间</span>
  <span class="token keyword">const</span> currentTime <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token comment">// 之前存的 时间戳</span>
  <span class="token keyword">const</span> timeStamp <span class="token operator">=</span> storage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token constant">TIME_STAMP</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> currentTime <span class="token operator">-</span> timeStamp <span class="token operator">></span> <span class="token constant">TOKEN_TIMEOUT_VALUE</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p>事先在 <code>constant</code> 中声明对应常量：</p>
<p><img src="@source/.vuepress/public/images/ts1.png" alt="图片"></p>
<ol start="2">
<li>在用户登录成功之后去<strong>设置时间</strong>，到 <code>store/user.js</code> 的 <code>login</code> 中：</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> setTimeStamp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/utils/auth'</span>
<span class="token operator">...</span><span class="token punctuation">{</span><span class="token number">16</span><span class="token punctuation">,</span><span class="token number">17</span><span class="token punctuation">}</span>
  <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">loginAction</span><span class="token punctuation">(</span><span class="token parameter">context<span class="token punctuation">,</span> userInfo</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> <span class="token punctuation">{</span> username<span class="token punctuation">,</span> password <span class="token punctuation">}</span> <span class="token operator">=</span> userInfo
      <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token function">login</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          username<span class="token punctuation">,</span>
          <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token function">md5</span><span class="token punctuation">(</span>password<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            context<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">'setToken'</span><span class="token punctuation">,</span> res<span class="token punctuation">.</span>token<span class="token punctuation">)</span>
            ElMessage<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string">'登录成功'</span><span class="token punctuation">)</span>
            <span class="token comment">// 登录后操作: 跳转</span>
            router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">)</span>
            <span class="token comment">// 设置登录时时间戳</span>
            <span class="token function">setTimeStamp</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token operator">...</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><ol start="3">
<li>在 <code>utils/request</code> 对应的 <strong>请求拦截器</strong> 中进行 <strong>主动介入</strong></li>
</ol>
<p><img src="@source/.vuepress/public/images/jieru0.png" alt="图片">
<img src="@source/.vuepress/public/images/jieru1.png" alt="图片"></p>
<p>至此就完成了 <strong>主动处理</strong>  token 失效的 业务逻辑</p>
<h3 id="用户被动退出解决方案之-被动处理" tabindex="-1"><a class="header-anchor" href="#用户被动退出解决方案之-被动处理" aria-hidden="true">#</a> 用户被动退出解决方案之 - 被动处理</h3>
<p>在上面处理了 <strong>用户被动退出时的 - 主动处理</strong> ，那么在现去处理 <strong>用户被动退出时的被动处理</strong> 。</p>
<p>还是和上一小节一样，我们还是先明确背景，然后再来明确业务逻辑。</p>
<p><strong>背景：</strong></p>
<p>首先我们需要先明确 <strong>被动处理</strong> 需要应对两种业务场景：</p>
<ol>
<li><code>token</code> 过期</li>
<li>单用户登录</li>
</ol>
<p>然后我们一个一个来去看，首先是 <code>token</code> 过期</p>
<blockquote>
<p>我们知道对于 <code>token</code> 而言，本身就是具备时效的，这个是在服务端生成 <code>token</code> 时就已经确定的。</p>
<p>而此时我们所谓的 <code>token</code> 过期指的就是：</p>
<p><strong>服务端生成的 <code>token</code> 超过 服务端指定时效</strong> 的过程</p>
</blockquote>
<p>而对于 单用户登录 而言，指的是：</p>
<blockquote>
<p>当用户 A 登录之后，<code>token</code> 过期之前。</p>
<p>用户 A 的账号在其他的设备中进行了二次登录，导致第一次登录的 A 账号被 “顶下来” 的过程。</p>
<p>即：<strong>同一账户仅可以在一个设备中保持在线状态</strong></p>
</blockquote>
<p>那么明确好了对应的背景之后，接下来我们来看对应的业务处理场景：</p>
<p>从背景中我们知道，以上的两种情况，都是在 <strong>服务端进行判断的</strong>，而对于前端而言其实是 <strong>服务端通知前端的一个过程。</strong></p>
<p>所以说对于其业务处理，将遵循以下逻辑：</p>
<ol>
<li>服务端返回数据时，会通过特定的状态码通知前端</li>
<li>当前端接收到特定状态码时，表示遇到了特定状态：<strong><code>token</code> 时效</strong> 或 <strong>单用户登录</strong></li>
<li>此时进行 <strong>退出登录</strong> 处理</li>
</ol>
<p>但是这里需要注意，因为这次项目，<strong>同一个账号需要在多个设备中使用</strong>，所以这个项目没有指定 <strong>单用户登录</strong> 的状态码，仅有 <strong><code>token</code> 失效</strong> 状态码。之后当需要到 <strong>单用户登录</strong> 时，只需要增加一个状态码判断即可</p>
<p>明确好了业务逻辑之后，接下来来实现对应代码：</p>
<p>在 <code>utils/request</code> 的 <strong>响应拦截器</strong> 中，增加以下逻辑：</p>
<p><img src="@source/.vuepress/public/images/ttoo5.png" alt="图片"></p>
<p>那么至此，就已经完成了 <strong>整个用户退出</strong> 方案</p>
<h2 id="创建页面组件-使用临时-menu-菜单" tabindex="-1"><a class="header-anchor" href="#创建页面组件-使用临时-menu-菜单" aria-hidden="true">#</a> 创建页面组件，使用临时 menu 菜单</h2>
<p>处理完了 <strong>退出登录</strong> 之后，接下来处理 <strong>动态<code>menu</code>菜单</strong></p>
<p>这里先生成一个临时的 <code>menu</code> 菜单</p>
<ol>
<li>创建 <code>layout/Sidebar/SidebarMenu.vue</code> 文件</li>
</ol>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-menu</span>
    <span class="token attr-name">:uniqueOpened</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span>
    <span class="token attr-name">default-active</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span>
    <span class="token attr-name">background-color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#545c64<span class="token punctuation">"</span></span>
    <span class="token attr-name">text-color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#fff<span class="token punctuation">"</span></span>
    <span class="token attr-name">active-text-color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#ffd04b<span class="token punctuation">"</span></span>
  <span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-menu-item</span> <span class="token attr-name">index</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-icon</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>setting</span> <span class="token punctuation">/></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-icon</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>导航 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-menu-item</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-menu-item</span> <span class="token attr-name">index</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-icon</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>document</span> <span class="token punctuation">/></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-icon</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>导航 2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-menu-item</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-menu-item</span> <span class="token attr-name">index</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-icon</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>setting</span> <span class="token punctuation">/></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-icon</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>导航 3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-menu-item</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-sub-menu</span> <span class="token attr-name">index</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>4<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#title</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-icon</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>location</span> <span class="token punctuation">/></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-icon</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>导航4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-menu-item</span> <span class="token attr-name">index</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>4-1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>导航 4 - 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-menu-item</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-menu-item</span> <span class="token attr-name">index</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>4-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>导航 4 - 2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-menu-item</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-sub-menu</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-menu</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><ol start="2">
<li>在 <code>layout/Sidebar/index</code> 中导入该组件</li>
</ol>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>占位<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-scrollbar</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sidebar-menu</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sidebar-menu</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-scrollbar</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> SidebarMenu <span class="token keyword">from</span> <span class="token string">'./SidebarMenu.vue'</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">></span></span><span class="token style"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>至此生成了一个临时的 <code>menu</code> 菜单，从这个临时的 <code>menu</code> 菜单出可以看到，<code>el-menu</code> 其实分成了三个部分：</p>
<ol>
<li><code>el-menu</code>：整个 <code>menu</code> 菜单</li>
<li><code>el-submenu</code>：子集 <code>menu</code> 菜单</li>
<li><code>el-menu-item</code>：具体菜单项</li>
</ol>
<p>那么明确好了这些内容之后，接下来就可以来去分析一下 <strong>动态 <code>menu</code> 菜单如何生成</strong></p>
<h2 id="动态-menu-菜单处理方案解析" tabindex="-1"><a class="header-anchor" href="#动态-menu-菜单处理方案解析" aria-hidden="true">#</a> 动态 menu 菜单处理方案解析</h2>
<p>上面处理了 <strong>静态 <code>menu</code></strong>，那么接下来去处理 <strong>动态 <code>menu</code> 菜单</strong></p>
<p>其实 <strong>动态<code>menu</code>菜单</strong> 其实主要是和 <strong>动态路由表</strong>  配合来去实现 <strong>用户权限</strong> 的</p>
<p>但是 <strong>用户权限处理</strong> 需要等到后面的章节中才可以接触到，因为咱们想要处理 <strong>用户权限</strong> 还需要先去处理很多的业务场景，所以在这里就先只处理 <strong>动态<code>menu</code>菜单</strong> 这一个概念</p>
<p>那么 <strong>动态<code>menu</code>菜单</strong> 指的到底是什么意思呢？</p>
<p>所谓 <strong>动态<code>menu</code>菜单</strong> 指的是：</p>
<blockquote>
<p>根据路由表的配置，自动生成对应的 <code>menu</code> 菜单。</p>
<p>当路由表发生变化时，<code>menu</code> 菜单自动发生变化</p>
</blockquote>
<p>那么明确了 <strong>动态<code>menu</code>菜单</strong> 的含义之后，接下来就需要来明确以下 <strong>动态<code>menu</code>菜单</strong> 的实现方案：</p>
<ol>
<li>定义 <strong>路由表</strong> 对应 <strong><code>menu</code> 菜单规则</strong></li>
<li>根据规则制定 <strong>路由表</strong></li>
<li>根据规则，依据 <strong>路由表</strong> ，生成 <strong><code>menu</code> 菜单</strong></li>
</ol>
<p>那么根据实现方案可以发现，实现 <strong>动态<code>menu</code>菜单</strong> 最核心的关键点其实就在步骤一，也就是</p>
<blockquote>
<p>定义 <strong>路由表</strong> 对应 <strong><code>menu</code> 菜单规则</strong></p>
</blockquote>
<p>那么看一下，这个规则如何制定：</p>
<ol>
<li>对于单个路由规则而言（循环）：
<ol>
<li>如果<code>meta &amp;&amp; meta.title &amp;&amp; meta.icon</code> ：则显示在 <code>menu</code> 菜单中，其中 <code>title</code> 为显示的内容，<code>icon</code> 为显示的图标
<ol>
<li>如果存在 <code>children</code> ：则以 <code>el-sub-menu（子菜单）</code> 展示</li>
<li>否则：则以 <code>el-menu-item（菜单项）</code> 展示</li>
</ol>
</li>
<li>否则：不显示在 <code>menu</code> 菜单中</li>
</ol>
</li>
</ol>
<p>那么明确好了对应的规则之后，接下来看一下如何进行实现</p>
<h3 id="生成项目页面组件" tabindex="-1"><a class="header-anchor" href="#生成项目页面组件" aria-hidden="true">#</a> 生成项目页面组件</h3>
<p>想要完成动态的 <code>menu</code>，那么我们需要按照以下的步骤来去实现：</p>
<ol>
<li>创建页面组件</li>
<li>生成路由表</li>
<li>解析路由表</li>
<li>生成 <code>menu</code> 菜单</li>
</ol>
<p>那么明确好了步骤之后，就先来实现第一步</p>
<p><strong>创建页面组件</strong></p>
<p>在 <code>views</code> 文件夹下，创建如下页面：</p>
<ol>
<li>创建文章：<code>article-create</code></li>
<li>文章详情：<code>article-detail</code></li>
<li>文章排名：<code>article-ranking</code></li>
<li>错误页面：<code>error-page</code>
<ol>
<li><code>404</code></li>
<li><code>401</code></li>
</ol>
</li>
<li>导入：<code>import</code></li>
<li>权限列表：<code>permission-list</code></li>
<li>个人中心：<code>profile</code></li>
<li>角色列表：<code>role-list</code></li>
<li>用户信息：<code>user-info</code></li>
<li>用户管理：<code>user-manage</code></li>
</ol>
<h3 id="创建结构路由表" tabindex="-1"><a class="header-anchor" href="#创建结构路由表" aria-hidden="true">#</a> 创建结构路由表</h3>
<p>想要实现结构路由表，那么我们需要先知道最终我们要实现的结构是什么样子的</p>
<p><img src="@source/.vuepress/public/images/mn1.png" alt="图片"></p>
<p>这是最终要实现的 <code>menu</code> 截图</p>
<p>根据此截图，可以知道两点内容：</p>
<ol>
<li>之前创建的页面<strong>并没有全部</strong>进行展示
<ol>
<li>根据该方案
<img src="@source/.vuepress/public/images/fa1.png" alt="图片"></li>
<li>即不显示页面 <strong>不满足</strong> 该条件 <code>meta &amp;&amp; meta.title &amp;&amp; meta.icon</code></li>
</ol>
</li>
<li>menu` 菜单将具备父子级的结构
<ol>
<li>按照此结构规划数据，则数据应为</li>
</ol>
</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token string-property property">"title"</span><span class="token operator">:</span> <span class="token string">"个人中心"</span><span class="token punctuation">,</span>
        <span class="token string-property property">"path"</span><span class="token operator">:</span> <span class="token string">""</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token string-property property">"title"</span><span class="token operator">:</span> <span class="token string">"用户"</span><span class="token punctuation">,</span>
        <span class="token string-property property">"children"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token string-property property">"title"</span><span class="token operator">:</span> <span class="token string">"员工管理"</span><span class="token punctuation">,</span>
                <span class="token string-property property">"path"</span><span class="token operator">:</span> <span class="token string">""</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token string-property property">"title"</span><span class="token operator">:</span> <span class="token string">"角色列表"</span><span class="token punctuation">,</span>
                <span class="token string-property property">"path"</span><span class="token operator">:</span> <span class="token string">""</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token string-property property">"title"</span><span class="token operator">:</span> <span class="token string">"权限列表"</span><span class="token punctuation">,</span>
                <span class="token string-property property">"path"</span><span class="token operator">:</span> <span class="token string">""</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token string-property property">"title"</span><span class="token operator">:</span> <span class="token string">"文章"</span><span class="token punctuation">,</span>
        <span class="token string-property property">"children"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token string-property property">"title"</span><span class="token operator">:</span> <span class="token string">"文章排名"</span><span class="token punctuation">,</span>
                <span class="token string-property property">"path"</span><span class="token operator">:</span> <span class="token string">""</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token string-property property">"title"</span><span class="token operator">:</span> <span class="token string">"创建文章"</span><span class="token punctuation">,</span>
                <span class="token string-property property">"path"</span><span class="token operator">:</span> <span class="token string">""</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><p>又因为将来我们需要进行 <strong>用户权限处理</strong> ，所以此时我们需要先对路由表进行一个划分：</p>
<ol>
<li><strong>私有路由表 <code>privateRoutes</code></strong> ：权限路由</li>
<li><strong>公有路由表 <code>publicRoutes</code></strong>：无权限路由</li>
</ol>
<p>根据以上理论，生成以下路由表结构：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createRouter<span class="token punctuation">,</span> createWebHashHistory <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue-router'</span>
<span class="token keyword">import</span> Layout <span class="token keyword">from</span> <span class="token string">'@/layout'</span>

<span class="token comment">// 私有路由表</span>
<span class="token keyword">const</span> privateRoutes <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/user'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> Layout<span class="token punctuation">,</span>
    <span class="token literal-property property">redirect</span><span class="token operator">:</span> <span class="token string">'/user/manage'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'user'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">'user'</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/user/manege'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'userManage'</span><span class="token punctuation">,</span>
        <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'@/views/user-manage/index.vue'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'userManage'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">'memo'</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/user/role'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'userRole'</span><span class="token punctuation">,</span>
        <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'@/views/role-list/index.vue'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'roleList'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">'user'</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/user/permission'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'userPermission'</span><span class="token punctuation">,</span>
        <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'@/views/permission-list/index.vue'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'userPermission'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">'finished'</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/user/info/:id'</span><span class="token punctuation">,</span>
        <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'@/views/user-info/index.vue'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'userInfo'</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/user/import'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'userImport'</span><span class="token punctuation">,</span>
        <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'@/views/import/index.vue'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'excelImport'</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/article'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> Layout<span class="token punctuation">,</span>
    <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'article'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">'document'</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/article/ranking'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'articleRanking'</span><span class="token punctuation">,</span>
        <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'@/views/article-ranking/index.vue'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'article-ranking'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">'document'</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/article/create'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'articleCreate'</span><span class="token punctuation">,</span>
        <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'@/views/article-create/index.vue'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'articleCreate'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">'documentAdd'</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/article/editor/:id'</span><span class="token punctuation">,</span>
        <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'@/views/article-create/index.vue'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'articleEditor'</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/article/:id'</span><span class="token punctuation">,</span>
        <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'@/views/article-detail/index.vue'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'articleDetail'</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>

<span class="token comment">// 公开路由表</span>
<span class="token keyword">const</span> publicRoutes <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/login'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'login'</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'@/views/login/index.vue'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'layout'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> Layout<span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/profile'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'profile'</span><span class="token punctuation">,</span>
        <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'@/views/profile/index.vue'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'profile'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">'user'</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/404'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'404'</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'@/views/error-page/404.vue'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/401'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'401'</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'@/views/error-page/401.vue'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>

<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">history</span><span class="token operator">:</span> <span class="token function">createWebHashHistory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">routes</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token operator">...</span>publicRoutes<span class="token punctuation">,</span> <span class="token operator">...</span>privateRoutes<span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> router
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br></div></div><p>最后不要忘记在 <code>layout/appMain</code> 下设置路由出口</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app-main<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-view</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="解析路由表-获取结构化数据" tabindex="-1"><a class="header-anchor" href="#解析路由表-获取结构化数据" aria-hidden="true">#</a> 解析路由表, 获取结构化数据</h3>
<p>获取到之前明确的结构化数据：</p>
<p>想要获取路由表数据，那么有两种方式：</p>
<ol>
<li><a href="https://next.router.vuejs.org/zh/api/#routes" target="_blank" rel="noopener noreferrer">router.options.routes<ExternalLinkIcon/></a>：初始路由列表（<a href="https://next.router.vuejs.org/zh/api/#addroute" target="_blank" rel="noopener noreferrer">新增的路由<ExternalLinkIcon/></a> 无法获取到）</li>
<li><a href="https://next.router.vuejs.org/zh/api/#getroutes" target="_blank" rel="noopener noreferrer">router.getRoutes()<ExternalLinkIcon/></a>：获取所有 <a href="https://next.router.vuejs.org/zh/api/#routerecord" target="_blank" rel="noopener noreferrer">路由记录<ExternalLinkIcon/></a> 的完整列表</li>
</ol>
<p>所以，我们此时使用 <a href="https://next.router.vuejs.org/zh/api/#getroutes" target="_blank" rel="noopener noreferrer">router.getRoutes()<ExternalLinkIcon/></a></p>
<p>在 <code>layout/components/Sidebar/SidebarMenu</code> 下写入以下代码：</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> useRouter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue-router'</span>

<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">useRouter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>router<span class="token punctuation">.</span><span class="token function">getRoutes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>得到返回的数据：
<img src="@source/.vuepress/public/images/ooii1.png" alt="图片"></p>
<p>从返回的数据来看，它与我们想要的数据结构相去甚远。</p>
<p>出现这个问题的原因，是因为它返回的是一个 <strong>完整的路由表</strong></p>
<p>这个路由表距离我们想要的存在两个问题：</p>
<ol>
<li>存在重复的路由数据</li>
<li>不满足该条件 <code>meta &amp;&amp; meta.title &amp;&amp; meta.icon</code> 的数据不应该存在</li>
</ol>
<p>那么接下来我们就应该来处理这两个问题</p>
<p>创建 <code>utils/route</code> 文件，创建两个方法分别处理对应的两个问题：</p>
<ol>
<li><code>filterRouters</code></li>
<li><code>generateMenus</code></li>
</ol>
<p>写入以下代码：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> path <span class="token keyword">from</span> <span class="token string">'path'</span>

<span class="token doc-comment comment">/**
 * 返回所有子路由
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">getChildrenRoutes</span> <span class="token operator">=</span> <span class="token parameter">routes</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  routes<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">route</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>route<span class="token punctuation">.</span>children <span class="token operator">&amp;&amp;</span> route<span class="token punctuation">.</span>children<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token operator">...</span>route<span class="token punctuation">.</span>children<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> result
<span class="token punctuation">}</span>
<span class="token doc-comment comment">/**
 * 处理脱离层级的路由：某个一级路由为其他子路由，则剔除该一级路由，保留路由层级
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">routes</span> router.getRoutes()
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">filterRouters</span> <span class="token operator">=</span> <span class="token parameter">routes</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> childrenRoutes <span class="token operator">=</span> <span class="token function">getChildrenRoutes</span><span class="token punctuation">(</span>routes<span class="token punctuation">)</span>
  <span class="token keyword">return</span> routes<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">route</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">!</span>childrenRoutes<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token parameter">childrenRoute</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> childrenRoute<span class="token punctuation">.</span>path <span class="token operator">===</span> route<span class="token punctuation">.</span>path
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 判断数据是否为空值
 */</span>
<span class="token keyword">function</span> <span class="token function">isNull</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>data<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">'{}'</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">'[]'</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span>
  <span class="token keyword">return</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
<span class="token doc-comment comment">/**
 * 根据 routes 数据，返回对应 menu 规则数组
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">generateMenus</span><span class="token punctuation">(</span>routes<span class="token punctuation">,</span> basePath <span class="token operator">=</span> <span class="token string">''</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token comment">// 遍历路由表</span>
  routes<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 不存在 children &amp;&amp; 不存在 meta 直接 return</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isNull</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>meta<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isNull</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>children<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span>
    <span class="token comment">// 存在 children 不存在 meta，进入迭代</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isNull</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>meta<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token function">isNull</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>children<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token function">generateMenus</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>children<span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 合并 path 作为跳转路径</span>
    <span class="token keyword">const</span> routePath <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>basePath<span class="token punctuation">,</span> item<span class="token punctuation">.</span>path<span class="token punctuation">)</span>
    <span class="token comment">// 路由分离之后，存在同名父路由的情况，需要单独处理</span>
    <span class="token keyword">let</span> route <span class="token operator">=</span> result<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=></span> item<span class="token punctuation">.</span>path <span class="token operator">===</span> routePath<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>route<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      route <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token operator">...</span>item<span class="token punctuation">,</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> routePath<span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>

      <span class="token comment">// icon 与 title 必须全部存在</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>route<span class="token punctuation">.</span>meta<span class="token punctuation">.</span>icon <span class="token operator">&amp;&amp;</span> route<span class="token punctuation">.</span>meta<span class="token punctuation">.</span>title<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// meta 存在生成 route 对象，放入 arr</span>
        result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>route<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 存在 children 进入迭代到children</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>item<span class="token punctuation">.</span>children<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      route<span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token function">generateMenus</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>children<span class="token punctuation">,</span> route<span class="token punctuation">.</span>path<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> result
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br></div></div><p>在 <code>SidebarMenu</code> 中调用该方法</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> computed <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useRouter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue-router'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> filterRouters<span class="token punctuation">,</span> generateMenus <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/utils/route'</span>

<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">useRouter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> filterRoutes <span class="token operator">=</span> <span class="token function">filterRouters</span><span class="token punctuation">(</span>router<span class="token punctuation">.</span><span class="token function">getRoutes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token keyword">return</span> <span class="token function">generateMenus</span><span class="token punctuation">(</span>filterRoutes<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>routes<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>会得到该数据结构</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token string-property property">"path"</span><span class="token operator">:</span><span class="token string">"/profile"</span><span class="token punctuation">,</span>
        <span class="token string-property property">"name"</span><span class="token operator">:</span><span class="token string">"profile"</span><span class="token punctuation">,</span>
        <span class="token string-property property">"meta"</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token string-property property">"title"</span><span class="token operator">:</span><span class="token string">"profile"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"icon"</span><span class="token operator">:</span><span class="token string">"el-icon-user"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token string-property property">"path"</span><span class="token operator">:</span><span class="token string">"/user"</span><span class="token punctuation">,</span>
        <span class="token string-property property">"redirect"</span><span class="token operator">:</span><span class="token string">"/user/manage"</span><span class="token punctuation">,</span>
        <span class="token string-property property">"meta"</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token string-property property">"title"</span><span class="token operator">:</span><span class="token string">"user"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"icon"</span><span class="token operator">:</span><span class="token string">"personnel"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string-property property">"props"</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token string-property property">"default"</span><span class="token operator">:</span><span class="token boolean">false</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string-property property">"children"</span><span class="token operator">:</span><span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token string-property property">"path"</span><span class="token operator">:</span><span class="token string">"/user/manage"</span><span class="token punctuation">,</span>
                <span class="token string-property property">"name"</span><span class="token operator">:</span><span class="token string">"userManage"</span><span class="token punctuation">,</span>
                <span class="token string-property property">"meta"</span><span class="token operator">:</span><span class="token punctuation">{</span>
                    <span class="token string-property property">"title"</span><span class="token operator">:</span><span class="token string">"userManage"</span><span class="token punctuation">,</span>
                    <span class="token string-property property">"icon"</span><span class="token operator">:</span><span class="token string">"personnel-manage"</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token string-property property">"children"</span><span class="token operator">:</span><span class="token punctuation">[</span>

                <span class="token punctuation">]</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token string-property property">"path"</span><span class="token operator">:</span><span class="token string">"/user/role"</span><span class="token punctuation">,</span>
                <span class="token string-property property">"name"</span><span class="token operator">:</span><span class="token string">"userRole"</span><span class="token punctuation">,</span>
                <span class="token string-property property">"meta"</span><span class="token operator">:</span><span class="token punctuation">{</span>
                    <span class="token string-property property">"title"</span><span class="token operator">:</span><span class="token string">"roleList"</span><span class="token punctuation">,</span>
                    <span class="token string-property property">"icon"</span><span class="token operator">:</span><span class="token string">"role"</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token string-property property">"children"</span><span class="token operator">:</span><span class="token punctuation">[</span>

                <span class="token punctuation">]</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token string-property property">"path"</span><span class="token operator">:</span><span class="token string">"/user/permission"</span><span class="token punctuation">,</span>
                <span class="token string-property property">"name"</span><span class="token operator">:</span><span class="token string">"userPermission"</span><span class="token punctuation">,</span>
                <span class="token string-property property">"meta"</span><span class="token operator">:</span><span class="token punctuation">{</span>
                    <span class="token string-property property">"title"</span><span class="token operator">:</span><span class="token string">"permissionList"</span><span class="token punctuation">,</span>
                    <span class="token string-property property">"icon"</span><span class="token operator">:</span><span class="token string">"permission"</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token string-property property">"children"</span><span class="token operator">:</span><span class="token punctuation">[</span>

                <span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token string-property property">"path"</span><span class="token operator">:</span><span class="token string">"/article"</span><span class="token punctuation">,</span>
        <span class="token string-property property">"redirect"</span><span class="token operator">:</span><span class="token string">"/article/ranking"</span><span class="token punctuation">,</span>
        <span class="token string-property property">"meta"</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token string-property property">"title"</span><span class="token operator">:</span><span class="token string">"article"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"icon"</span><span class="token operator">:</span><span class="token string">"article"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string-property property">"props"</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token string-property property">"default"</span><span class="token operator">:</span><span class="token boolean">false</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string-property property">"children"</span><span class="token operator">:</span><span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token string-property property">"path"</span><span class="token operator">:</span><span class="token string">"/article/ranking"</span><span class="token punctuation">,</span>
                <span class="token string-property property">"name"</span><span class="token operator">:</span><span class="token string">"articleRanking"</span><span class="token punctuation">,</span>
                <span class="token string-property property">"meta"</span><span class="token operator">:</span><span class="token punctuation">{</span>
                    <span class="token string-property property">"title"</span><span class="token operator">:</span><span class="token string">"articleRanking"</span><span class="token punctuation">,</span>
                    <span class="token string-property property">"icon"</span><span class="token operator">:</span><span class="token string">"article-ranking"</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token string-property property">"children"</span><span class="token operator">:</span><span class="token punctuation">[</span>

                <span class="token punctuation">]</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token string-property property">"path"</span><span class="token operator">:</span><span class="token string">"/article/create"</span><span class="token punctuation">,</span>
                <span class="token string-property property">"name"</span><span class="token operator">:</span><span class="token string">"articleCreate"</span><span class="token punctuation">,</span>
                <span class="token string-property property">"meta"</span><span class="token operator">:</span><span class="token punctuation">{</span>
                    <span class="token string-property property">"title"</span><span class="token operator">:</span><span class="token string">"articleCreate"</span><span class="token punctuation">,</span>
                    <span class="token string-property property">"icon"</span><span class="token operator">:</span><span class="token string">"article-create"</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token string-property property">"children"</span><span class="token operator">:</span><span class="token punctuation">[</span>

                <span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br></div></div><h3 id="生成动态-menu-菜单" tabindex="-1"><a class="header-anchor" href="#生成动态-menu-菜单" aria-hidden="true">#</a> 生成动态 menu 菜单</h3>
<p>computed 计算属性分一下对应的菜单 : 有 children 的菜单, 没有 children 的菜单</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> useRouter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue-router'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> computed <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> filterRouters<span class="token punctuation">,</span> generateMenus <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/utils/route'</span>

<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">useRouter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> fRoutes <span class="token operator">=</span> <span class="token function">filterRouters</span><span class="token punctuation">(</span>router<span class="token punctuation">.</span><span class="token function">getRoutes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token function">generateMenus</span><span class="token punctuation">(</span>fRoutes<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 没有子菜单的路由</span>
<span class="token keyword">const</span> noChildrenRoutes <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> routes<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">route</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>route<span class="token punctuation">.</span>children<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">'[]'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 有子菜单的路由</span>
<span class="token keyword">const</span> hasChildrenRoutes <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> routes<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">route</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>route<span class="token punctuation">.</span>children<span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token string">'[]'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>模板遍历对应类型的菜单</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-menu</span>
    <span class="token attr-name">:uniqueOpened</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span>
    <span class="token attr-name">default-active</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span>
    <span class="token attr-name">background-color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#545c64<span class="token punctuation">"</span></span>
    <span class="token attr-name">text-color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#fff<span class="token punctuation">"</span></span>
    <span class="token attr-name">active-text-color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#ffd04b<span class="token punctuation">"</span></span>
  <span class="token punctuation">></span></span>
    <span class="token comment">&lt;!--没有子菜单的路由--></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item in noChildrenRoutes<span class="token punctuation">"</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item.path<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-menu-item</span> <span class="token attr-name">:index</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item.path<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-icon</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>component</span> <span class="token attr-name">:is</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item.meta.icon<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-icon</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>{{ item.meta.title }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-menu-item</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!--有子菜单的路由--></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item in hasChildrenRoutes<span class="token punctuation">"</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item.path<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-sub-menu</span> <span class="token attr-name">:index</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item.path<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#title</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-icon</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>component</span> <span class="token attr-name">:is</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item.meta.icon<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-icon</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>{{ item.meta.title }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-menu-item</span>
          <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>child in item.children<span class="token punctuation">"</span></span>
          <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>child.path<span class="token punctuation">"</span></span>
          <span class="token attr-name">:index</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>child.path<span class="token punctuation">"</span></span>
        <span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-icon</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>component</span> <span class="token attr-name">:is</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>child.meta.icon<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-icon</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>{{ child.meta.title }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-menu-item</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-sub-menu</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-menu</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br></div></div><h3 id="修复最后残余问题" tabindex="-1"><a class="header-anchor" href="#修复最后残余问题" aria-hidden="true">#</a> 修复最后残余问题</h3>
<p>目前 <code>menu</code> 菜单存在三个问题</p>
<ol>
<li>样式问题</li>
<li>路由跳转问题</li>
<li>默认激活项</li>
</ol>
<p><strong>样式问题：</strong></p>
<p>首先处理样式，因为后面我们需要处理 <strong>主题替换</strong> ，所以此处我们不能把样式写死</p>
<p>在 <code>store/getters</code> 中创建一个新的 <strong>快捷访问</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> variables <span class="token keyword">from</span> <span class="token string">'@/styles/variables.module.scss'</span>
<span class="token keyword">const</span> getters <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span>
  <span class="token function-variable function">cssVar</span><span class="token operator">:</span> <span class="token parameter">state</span> <span class="token operator">=></span> variables
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> getters
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>在 <code>SidebarMenu</code> 中写入如下样式
<img src="@source/.vuepress/public/images/vsvs1.png" alt="图片"></p>
<p><strong>路由跳转问题：</strong></p>
<p><img src="@source/.vuepress/public/images/lytz1.png" alt="图片"></p>
<p><strong>默认激活项：</strong></p>
<p>根据当前 <code>url</code> 进行判断即可</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-menu</span>
    <span class="token attr-name">:uniqueOpened</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span>
    <span class="token attr-name">:default-active</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>activeMenu<span class="token punctuation">"</span></span>
    <span class="token attr-name">:background-color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$store.getters.cssVar.menuBg<span class="token punctuation">"</span></span>
    <span class="token attr-name">:text-color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$store.getters.cssVar.menuText<span class="token punctuation">"</span></span>
    <span class="token attr-name">:active-text-color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$store.getters.cssVar.menuActiveText<span class="token punctuation">"</span></span>
    <span class="token attr-name">router</span>
  <span class="token punctuation">></span></span>
  ...
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> useRouter<span class="token punctuation">,</span> useRoute <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue-router'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> computed <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token operator">...</span><span class="token punctuation">.</span>

<span class="token comment">// 当前路由激活项</span>
<span class="token keyword">const</span> route <span class="token operator">=</span> <span class="token function">useRoute</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> activeMenu <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> route<span class="token punctuation">.</span>path
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>至此整个 <strong>动态<code>menu</code>完成</strong></p>
<h2 id="动画逻辑-左侧菜单伸缩功能实现" tabindex="-1"><a class="header-anchor" href="#动画逻辑-左侧菜单伸缩功能实现" aria-hidden="true">#</a> 动画逻辑，左侧菜单伸缩功能实现</h2>
<p>样式的改变总是由数据进行驱动，所以首先去创建对应的数据</p>
<p>创建 <code>store/app</code> 模块，写入如下代码</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">namespaced</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token function-variable function">state</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">sidebarOpened</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mutations</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">triggerSidebarOpened</span><span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      state<span class="token punctuation">.</span>sidebarOpened <span class="token operator">=</span> <span class="token operator">!</span>state<span class="token punctuation">.</span>sidebarOpened
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>在 <code>store/index</code> 中进行导入</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">...</span>
<span class="token keyword">import</span> app <span class="token keyword">from</span> <span class="token string">'./modules/app'</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">createStore</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  getters<span class="token punctuation">,</span>
  <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
    app
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>在 <code>store/getters</code> 中创建快捷访问</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function-variable function">sidebarOpened</span><span class="token operator">:</span> <span class="token parameter">state</span> <span class="token operator">=></span> state<span class="token punctuation">.</span>app<span class="token punctuation">.</span>sidebarOpened
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>创建 <code>components/hamburger</code> 组件，用来控制数据</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>hamburger-container<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>toggleClick<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg-icon</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>hamburger<span class="token punctuation">"</span></span> <span class="token attr-name">:icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>icon<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg-icon</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> computed <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vuex'</span>

<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">useStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">toggleClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">'app/triggerSidebarOpened'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> icon <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span>
  store<span class="token punctuation">.</span>getters<span class="token punctuation">.</span>sidebarOpened <span class="token operator">?</span> <span class="token string">'hamburger-opened'</span> <span class="token operator">:</span> <span class="token string">'hamburger-closed'</span>
<span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
<span class="token selector">.hamburger-container</span> <span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0 16px<span class="token punctuation">;</span>
  <span class="token selector">.hamburger</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
    <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><p>在 <code>navbar</code> 中使用该组件</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>navbar<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hamburger</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>hamburger-container<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    ...
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> Hamburger <span class="token keyword">from</span> <span class="token string">'@/components/Hamburger'</span>
<span class="token operator">...</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
<span class="token selector">.navbar</span> <span class="token punctuation">{</span>
  <span class="token selector">...

  .hamburger-container</span> <span class="token punctuation">{</span>
    <span class="token property">line-height</span><span class="token punctuation">:</span> 46px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
    <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
    // hover 动画
    <span class="token property">transition</span><span class="token punctuation">:</span> background 0.5s<span class="token punctuation">;</span>

    <span class="token selector">&amp;:hover</span> <span class="token punctuation">{</span>
      <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

 ...
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><p>在 <code>SidebarMenu</code> 中，控制 <code>el-menu</code> 的 <a href="https://element-plus.org/#/zh-CN/component/menu" target="_blank" rel="noopener noreferrer">collapse<ExternalLinkIcon/></a> 属性</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>&lt;el-menu
    :collapse="!$store.getters.sidebarOpened"
    ...
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>在 <code>layout/index</code> 中指定 <strong>整个侧边栏的宽度和缩放动画</strong></p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
    <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app-wrapper<span class="token punctuation">"</span></span>
    <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>[$store.getters.sidebarOpened ? <span class="token punctuation">'</span>openSidebar<span class="token punctuation">'</span> : <span class="token punctuation">'</span>hideSidebar<span class="token punctuation">'</span>]<span class="token punctuation">"</span></span>
  <span class="token punctuation">></span></span>
  ...
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>在 <code>layout/index</code> 中 处理 <code>navbar</code> 的宽度</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
<span class="token selector">...

.fixed-header</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> fixed<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">z-index</span><span class="token punctuation">:</span> 9<span class="token punctuation">;</span>
  <span class="token selector">width: calc(100% - #</span><span class="token punctuation">{</span>$sideBarWidth<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> width 0.28s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.hideSidebar .fixed-header</span> <span class="token punctuation">{</span>
  <span class="token selector">width: calc(100% - #</span><span class="token punctuation">{</span>$hideSideBarWidth<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>在 <code>styles/variables.scss</code> 中指定 <code>hideSideBarWidth</code></p>
<div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token property"><span class="token variable">$hideSideBarWidth</span></span><span class="token punctuation">:</span> 54px<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="sidebarheader-处理" tabindex="-1"><a class="header-anchor" href="#sidebarheader-处理" aria-hidden="true">#</a> SidebarHeader 处理</h2>
<p>layout/components/Sidebar/index.vue</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;template>
  &lt;div class="">
    &lt;div class="title">
      &lt;router-link to="/profile">
        &lt;h3>Vue3-admin&lt;/h3>
      &lt;/router-link>
    &lt;/div>
    &lt;el-scrollbar>
      &lt;sidebar-menu>&lt;/sidebar-menu>
    &lt;/el-scrollbar>
  &lt;/div>
&lt;/template>
&lt;script setup>
import SidebarMenu from './SidebarMenu.vue'
&lt;/script>
&lt;style lang="scss" scoped>
.title{
  padding:20px;
  text-align:center;
  color:white;
  cursor:pointer;
}
&lt;/style>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h2 id="全新-vue-能力-组件状态驱动的动态-css-值" tabindex="-1"><a class="header-anchor" href="#全新-vue-能力-组件状态驱动的动态-css-值" aria-hidden="true">#</a> 全新 vue 能力：组件状态驱动的动态 CSS 值</h2>
<p>在 <a href="https://blog.vuejs.org/posts/vue-3.2.html" target="_blank" rel="noopener noreferrer">vue 3.2<ExternalLinkIcon/></a> 最新更新中，除了之前的 <strong>响应式变化</strong> 之外，还有另外一个很重要的更新，那就是 <strong>组件状态驱动的动态 <code>CSS</code> 值</strong> ，对应的文档也已经公布，大家可以 <a href="https://v3.vuejs.org/api/sfc-style.html#state-driven-dynamic-css" target="_blank" rel="noopener noreferrer">点击这里<ExternalLinkIcon/></a> 查看</p>
<p>那么下面就使用下最新的特性，来为 <code>logo-container</code> 指定下高度：</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
 ...
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>logo-container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
 ...

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token operator">...</span>
<span class="token keyword">const</span> logoHeight <span class="token operator">=</span> <span class="token number">44</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
<span class="token selector">.logo-container</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> <span class="token function">v-bind</span><span class="token punctuation">(</span>logoHeight<span class="token punctuation">)</span> + <span class="token string">'px'</span><span class="token punctuation">;</span>
...
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="动态面包屑方案分析" tabindex="-1"><a class="header-anchor" href="#动态面包屑方案分析" aria-hidden="true">#</a> 动态面包屑方案分析</h2>
<p>到目前位置，最后一个功能就是 <strong>面包屑导航</strong>，分为：</p>
<ol>
<li>静态面包屑</li>
<li>动态面包屑</li>
</ol>
<p><strong>静态面包屑：</strong></p>
<p>指的是：<strong>在每个页面中写死对应的面包屑菜单</strong>，缺点也很明显：</p>
<ol>
<li>每个页面都得写一遍</li>
<li>页面路径结构变化了，得手动更改</li>
</ol>
<p>简单来说就是 <strong>不好维护，不好扩展</strong> 。</p>
<p><strong>动态面包屑：</strong></p>
<p><strong>根据当前的 <code>url</code> 自动生成面包屑导航菜单</strong></p>
<p>无论之后路径发生了什么变化，<strong>动态面包屑</strong> 都会正确的进行计算</p>
<p>那么在后面的实现过程中，将会分成三大步来实现</p>
<ol>
<li>创建、渲染基本的面包屑组件</li>
<li>计算面包屑结构数据</li>
<li>根据数据渲染动态面包屑内容</li>
</ol>
<h3 id="渲染基本的面包屑组件" tabindex="-1"><a class="header-anchor" href="#渲染基本的面包屑组件" aria-hidden="true">#</a> 渲染基本的面包屑组件</h3>
<p>完成第一步，先去创建并渲染出基本的 <a href="https://element-plus.org/#/zh-CN/component/breadcrumb" target="_blank" rel="noopener noreferrer">面包屑<ExternalLinkIcon/></a> 组件</p>
<p>创建 <code>components/Breadcrumb/index</code>，并写入如下代码：</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-breadcrumb</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>breadcrumb<span class="token punctuation">"</span></span> <span class="token attr-name">separator</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-breadcrumb-item</span> <span class="token attr-name">:to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{ path: <span class="token punctuation">'</span>/<span class="token punctuation">'</span> }<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>首页<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-breadcrumb-item</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-breadcrumb-item</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>活动管理<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-breadcrumb-item</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-breadcrumb-item</span><span class="token punctuation">></span></span>活动列表<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-breadcrumb-item</span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!-- 面包屑的最后一项 --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-breadcrumb-item</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>no-redirect<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>活动详情<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-breadcrumb-item</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-breadcrumb</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
<span class="token selector">.breadcrumb</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span>
  <span class="token property">line-height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
  <span class="token property">margin-left</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span>

  <span class="token selector">::v-deep .no-redirect</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #97a8be<span class="token punctuation">;</span>
    <span class="token property">cursor</span><span class="token punctuation">:</span> text<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><p>在 <code>layout/components/Navbar</code> 组件下导入</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>navbar<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hamburger</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>hamburger-container<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>breadcrumb</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>breadcrumb-container<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
	...
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
...

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
<span class="token selector">.navbar</span> <span class="token punctuation">{</span>
 <span class="token selector">...

  .breadcrumb-container</span> <span class="token punctuation">{</span>
    <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
   ...
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h3 id="动态计算面包屑结构数据" tabindex="-1"><a class="header-anchor" href="#动态计算面包屑结构数据" aria-hidden="true">#</a> 动态计算面包屑结构数据</h3>
<p>现在我们是完成了一个静态的 面包屑，接下来咱们就需要依托这个静态的菜单来完成动态的。</p>
<p>对于现在的静态面包屑来说，他分成了两个组件：</p>
<ol>
<li><code>el-breadcrumb</code>：包裹性质的容器</li>
<li><code>el-breadcrumb-item</code>：每个单独项</li>
</ol>
<p>如果我们想要完成动态的，那么就需要 **依据动态数据，渲染 <code>el-breadcrumb-item</code> **</p>
<p>所以说接下来我们需要做的事情就很简单了</p>
<ol>
<li>动态数据</li>
<li>渲染 <code>el-breadcrumb-item</code></li>
</ol>
<p>那么这一小节咱们先来看 <strong>动态数据如何制作</strong></p>
<p>我们希望可以制作出一个 <strong>数组</strong>，数组中每个 <code>item</code> 都表示一个 <strong>路由信息</strong>：</p>
<p>创建一个方法，用来生成数组数据，在这里我们要使用到 <a href="https://next.router.vuejs.org/zh/api/#matched" target="_blank" rel="noopener noreferrer">route.match<ExternalLinkIcon/></a> 属性来：<strong>获取与给定路由地址匹配的<a href="https://next.router.vuejs.org/zh/api/#routerecord" target="_blank" rel="noopener noreferrer">标准化的路由记录<ExternalLinkIcon/></a>数组</strong></p>
<p><img src="@source/.vuepress/public/images/match1.png" alt="图片"></p>
<h3 id="vue3-动画处理" tabindex="-1"><a class="header-anchor" href="#vue3-动画处理" aria-hidden="true">#</a> vue3 动画处理</h3>
<p>vue3对 <a href="https://v3.cn.vuejs.org/guide/transitions-overview.html#%E5%9F%BA%E4%BA%8E-class-%E7%9A%84%E5%8A%A8%E7%94%BB%E5%92%8C%E8%BF%87%E6%B8%A1" target="_blank" rel="noopener noreferrer">动画<ExternalLinkIcon/></a> 进行了一些修改（<a href="https://v3.cn.vuejs.org/guide/migration/transition.html#%E6%A6%82%E8%A7%88" target="_blank" rel="noopener noreferrer">vue 动画迁移文档<ExternalLinkIcon/></a>）</p>
<p>主要的修改其实只有两个：</p>
<ol>
<li>过渡类名 <code>v-enter</code> 修改为 <code>v-enter-from</code></li>
<li>过渡类名 <code>v-leave</code> 修改为 <code>v-leave-from</code></li>
</ol>
<p>那么依据修改之后的动画，我们来为面包屑增加一些动画样式：</p>
<ol>
<li>在 <code>Breadcrumb/index</code> 中增加 <code>transition-group</code></li>
</ol>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-breadcrumb</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>breadcrumb<span class="token punctuation">"</span></span> <span class="token attr-name">separator</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>transition-group</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>breadcrumb<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
         ...
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>transition-group</span><span class="token punctuation">></span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-breadcrumb</span><span class="token punctuation">></span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ol start="2">
<li>新建 <code>styles/transition</code> 样式文件</li>
</ol>
<div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token selector">.breadcrumb-enter-active,
.breadcrumb-leave-active</span><span class="token punctuation">{</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> all 0.3s ease<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.breadcrumb-enter-from </span><span class="token punctuation">{</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>20px<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">opacity</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.breadcrumb-leave-to </span><span class="token punctuation">{</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>-20px<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">opacity</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.breadcrumb-leave-active </span><span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><ol start="3">
<li>在 <code>styles/index</code> 中导入</li>
</ol>
<div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token keyword">@import</span> <span class="token string">'./transition.scss'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p>围绕着<code>layout</code> 为核心，主要实现了三个大的业务方案：</p>
<ol>
<li>用户退出方案</li>
<li>动态侧边栏方案</li>
<li>动态面包屑方案</li>
</ol>
<p>除了这三块大的方案之后，还有一些小的功能，比如：</p>
<ol>
<li>退出的通用逻辑封装</li>
<li>伸缩侧边栏动画</li>
<li><code>vue3</code> 动画</li>
<li>组件状态驱动的动态 <code>CSS</code> 值等等</li>
</ol>
</template>
