<template><h1 id="登录" tabindex="-1"><a class="header-anchor" href="#登录" aria-hidden="true">#</a> 登录</h1>
<h2 id="导入-element-plus" tabindex="-1"><a class="header-anchor" href="#导入-element-plus" aria-hidden="true">#</a> 导入 element-plus</h2>
<p>需要先去导入 element-ui 的 vue3 支持版本，也就是 <a href="https://element-plus.gitee.io/zh-CN/guide/quickstart.html" target="_blank" rel="noopener noreferrer">element-plus<ExternalLinkIcon/></a></p>
<p>这里完整导入</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm install element-plus --save
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>main.js
<img src="@source/.vuepress/public/images/ep1.png" alt="图片"></p>
<h2 id="构建登录页面-ui-结构" tabindex="-1"><a class="header-anchor" href="#构建登录页面-ui-结构" aria-hidden="true">#</a> 构建登录页面 UI 结构</h2>
<p><img src="@source/.vuepress/public/images/fengmian1.png" alt="图片"></p>
<ol>
<li>在 <code>views</code> 中 <code>login</code> 文件夹，创建 <code>index.vue</code> 文件</li>
</ol>
<p><img src="@source/.vuepress/public/images/li1.png" alt="图片"></p>
<ol start="2">
<li>在 <code>router/index.js</code> 中增加以下路由配置</li>
</ol>
<p><img src="@source/.vuepress/public/images/public1.png" alt="图片"></p>
<ol start="3">
<li>创建登录页面基本 UI 结构</li>
</ol>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>login-container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!--表单--></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-form</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>login-form<span class="token punctuation">"</span></span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>loginFormRef<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>title-container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>后台管理系统<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
      <span class="token comment">&lt;!--username--></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-form-item</span> <span class="token attr-name">prop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>username<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-input</span> <span class="token attr-name">prefix-icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>user<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>username<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-input</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-form-item</span><span class="token punctuation">></span></span>
      <span class="token comment">&lt;!--password--></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-form-item</span> <span class="token attr-name">prop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-input</span>
          <span class="token attr-name">prefix-icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>lock<span class="token punctuation">"</span></span>
          <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span>
          <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span>
          <span class="token attr-name">show-password</span>
        <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-input</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-form-item</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 100%</span><span class="token punctuation">"</span></span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>登录<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-form</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">></span></span><span class="token style"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h2 id="美化登录页面样式" tabindex="-1"><a class="header-anchor" href="#美化登录页面样式" aria-hidden="true">#</a> 美化登录页面样式</h2>
<ol>
<li>创建全局的 <code>style</code></li>
</ol>
<ul>
<li>在 <code>src</code> 下创建 <code>styles/index.scss</code> 文件，并写入以下内容：</li>
</ul>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">html,
body</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">-moz-osx-font-smoothing</span><span class="token punctuation">:</span> grayscale<span class="token punctuation">;</span>
  <span class="token property">-webkit-font-smoothing</span><span class="token punctuation">:</span> antialiased<span class="token punctuation">;</span>
  <span class="token property">text-rendering</span><span class="token punctuation">:</span> optimizeLegibility<span class="token punctuation">;</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> Helvetica Neue<span class="token punctuation">,</span> Helvetica<span class="token punctuation">,</span> PingFang SC<span class="token punctuation">,</span> Hiragino Sans GB<span class="token punctuation">,</span>
    Microsoft YaHei<span class="token punctuation">,</span> Arial<span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">#app</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">*,
*:before,
*:after</span> <span class="token punctuation">{</span>
  <span class="token property">box-sizing</span><span class="token punctuation">:</span> inherit<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">a:focus,
a:active</span> <span class="token punctuation">{</span>
  <span class="token property">outline</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">a,
a:focus,
a:hover</span> <span class="token punctuation">{</span>
  <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> inherit<span class="token punctuation">;</span>
  <span class="token property">text-decoration</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">div:focus</span> <span class="token punctuation">{</span>
  <span class="token property">outline</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.clearfix</span> <span class="token punctuation">{</span>
  <span class="token selector">&amp;:after</span> <span class="token punctuation">{</span>
    <span class="token property">visibility</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">' '</span><span class="token punctuation">;</span>
    <span class="token property">clear</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br></div></div><ul>
<li>在 <code>main.js</code> 中导入全局样式</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">...</span>
<span class="token comment">// 导入全局样式</span>
<span class="token keyword">import</span> <span class="token string">'./styles/index.scss'</span>
<span class="token operator">...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul>
<li>在 <code>views/login/index.vue</code> 中写入以下样式</li>
</ul>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
$<span class="token property">bg</span><span class="token punctuation">:</span> #2d3a4b<span class="token punctuation">;</span>
$<span class="token property">dark_gray</span><span class="token punctuation">:</span> #889aa4<span class="token punctuation">;</span>
$<span class="token property">light_gray</span><span class="token punctuation">:</span> #eee<span class="token punctuation">;</span>
$<span class="token property">cursor</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
<span class="token selector">.login-container</span> <span class="token punctuation">{</span>
  <span class="token property">min-height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> $bg<span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>

  <span class="token selector">.login-form</span> <span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 520px<span class="token punctuation">;</span>
    <span class="token property">max-width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 160px 35px 0<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
    <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>

    <span class="token selector">::v-deep .el-form-item</span> <span class="token punctuation">{</span>
      <span class="token property">border</span><span class="token punctuation">:</span> 1px solid <span class="token function">rgba</span><span class="token punctuation">(</span>255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 0.1<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.1<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">border-radius</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
      <span class="token property">color</span><span class="token punctuation">:</span> #454545<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">::v-deep .el-input</span> <span class="token punctuation">{</span>
      <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 47px<span class="token punctuation">;</span>
      <span class="token property">width</span><span class="token punctuation">:</span>100%<span class="token punctuation">;</span>
      <span class="token selector">.el-input__wrapper</span><span class="token punctuation">{</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> transparent<span class="token punctuation">;</span>
        <span class="token property">border</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>
        <span class="token property">box-shadow</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
        <span class="token property">width</span><span class="token punctuation">:</span>100%
      <span class="token punctuation">}</span>
      <span class="token selector">input</span> <span class="token punctuation">{</span>
        <span class="token property">background</span><span class="token punctuation">:</span> transparent<span class="token punctuation">;</span>
        <span class="token property">border</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span>
        <span class="token property">-webkit-appearance</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
        <span class="token property">border-radius</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 12px 5px 12px 15px<span class="token punctuation">;</span>
        <span class="token property">color</span><span class="token punctuation">:</span> $light_gray<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 47px<span class="token punctuation">;</span>
        <span class="token property">caret-color</span><span class="token punctuation">:</span> $cursor<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.title-container</span> <span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>

    <span class="token selector">.title</span> <span class="token punctuation">{</span>
      <span class="token property">font-size</span><span class="token punctuation">:</span> 26px<span class="token punctuation">;</span>
      <span class="token property">color</span><span class="token punctuation">:</span> $light_gray<span class="token punctuation">;</span>
      <span class="token property">margin</span><span class="token punctuation">:</span> 0px auto 40px auto<span class="token punctuation">;</span>
      <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
      <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br></div></div><h2 id="icon-图标处理方案-svgicon" tabindex="-1"><a class="header-anchor" href="#icon-图标处理方案-svgicon" aria-hidden="true">#</a> Icon 图标处理方案：SvgIcon</h2>
<ul>
<li><code>element-plus</code> 的图标</li>
<li>项目中自定义的 <code>svg</code> 图标</li>
</ul>
<p>对于 <code>element-plus</code> 的图标我们可以直接通过 <code>el-icon</code> 来进行显示，但是自定义图标的话，暂时还缺少显示的方式，所以说需要一个自定义的组件，来显示咱们项目内的自定义的 <code>svg</code> 图标</p>
<p>那么对于这个组件的话，它就需要拥有两种能力：</p>
<ol>
<li>显示外部资源的 <code>svg</code> 图标</li>
</ol>
<ul>
<li>比如 <code>https://res.lgdsunday.club/user.svg</code> , 这样的地址</li>
</ul>
<ol start="2">
<li>显示项目内部的 <code>svg</code> 图标</li>
</ol>
<p>创建 <code>components/SvgIcon/index.vue</code></p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token comment">&lt;!--外部的 svg 资源--></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
    <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>isExternal<span class="token punctuation">"</span></span>
    <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>className<span class="token punctuation">"</span></span>
    <span class="token attr-name">:style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>styleExternalIcon<span class="token punctuation">"</span></span>
    <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>svg-external-icon svg-icon<span class="token punctuation">"</span></span>

  <span class="token punctuation">/></span></span>  
  <span class="token comment">&lt;!--项目内部的 svg 资源--></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">:aria-hidden</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span> <span class="token attr-name">v-else</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>use</span> <span class="token attr-name">:xlink:href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>iconName<span class="token punctuation">"</span></span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>className<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>svg-icon<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>use</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineProps<span class="token punctuation">,</span> computed <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> isExternal <span class="token keyword">as</span> external <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/utils/validate'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token punctuation">{</span>  <span class="token comment">// icon 图标</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
    <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">className</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// 图标类名</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
    
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 判断是否是外部的 svg 资源</span>
<span class="token keyword">const</span> isExternal <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">external</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>icon<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 外部图标样式: 使用了 mask 属性</span>
<span class="token keyword">const</span> styleExternalIcon <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">mask</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">url(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>props<span class="token punctuation">.</span>icon<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">) no-repeat 50% 50%</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
  <span class="token string-property property">'-webkit-mask'</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">url(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>props<span class="token punctuation">.</span>icon<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">) no-repeat 50% 50%</span><span class="token template-punctuation string">`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// 项目内部的 svg 资源名称</span>
<span class="token keyword">const</span> iconName <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">#icon-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>props<span class="token punctuation">.</span>icon<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  <span class="token selector">.svg-icon</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span>
  <span class="token property">vertical-align</span><span class="token punctuation">:</span> -0.15em<span class="token punctuation">;</span>
  <span class="token property">fill</span><span class="token punctuation">:</span> currentColor<span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.svg-external-icon</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> currentColor<span class="token punctuation">;</span>
  <span class="token property">mask-size</span><span class="token punctuation">:</span> cover <span class="token important">!important</span><span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br></div></div><p>创建 <code>utils/validate.js</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 判断是否为外部资源 ,  比如 `https://res.lgdsunday.club/user.svg` 这样的外部的 svg 资源
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">isExternal</span><span class="token punctuation">(</span><span class="token parameter">path</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^(https?:|mailto:|tel:)</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>在外部试着使用一下</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>svg-container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg-icon</span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://res.lgdsunday.club/user.svg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg-icon</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>外部图标可正常展示</p>
<p>这里创建了 <code>SvgIcon</code> 组件，用来处理了 <strong>外部资源图标</strong> 的展示，但是对于内部图标而言，此时依然无法进行展示。所以需要看一下，如何处理内部的 <code>svg</code> 图标</p>
<h3 id="处理内部-svg-图标显示" tabindex="-1"><a class="header-anchor" href="#处理内部-svg-图标显示" aria-hidden="true">#</a> 处理内部 svg 图标显示</h3>
<p>上面封装的 <code>SvgIcon</code> 组件目前只能显示外部资源的 <code>svg</code> 图标, 内部的图标还无法展示</p>
<p>首先导入项目中被使用到的所有的 <code>svg</code> 图标, icons 目录下的 <code>svg</code> 文件夹里存放所有的 <code>xxx.svg</code> 图标</p>
<p>在 <code>icons</code> 目录下创建 <code>index.js</code> 文件，该文件中需要完成两件事情：</p>
<ol>
<li>导入所有的 <code>svg</code> 图标</li>
<li>完成 <code>SvgIcon</code> 的全局注册</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> SvgIcon <span class="token keyword">from</span> <span class="token string">'@/components/SvgIcon'</span>

<span class="token comment">// https://webpack.docschina.org/guides/dependency-management/#requirecontext</span>
<span class="token comment">// 通过 require.context() 函数来创建自己的 context</span>
<span class="token keyword">const</span> svgRequire <span class="token operator">=</span> require<span class="token punctuation">.</span><span class="token function">context</span><span class="token punctuation">(</span><span class="token string">'./svg'</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.svg$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span>
<span class="token comment">// 此时返回一个 require 的函数，可以接受一个 request 的参数，用于 require 的导入。</span>
<span class="token comment">// 该函数提供了三个属性，可以通过 require.keys() 获取到所有的 svg 图标</span>
<span class="token comment">// 遍历图标，把图标作为 request 传入到 require 导入函数中，完成本地 svg 图标的导入</span>
svgRequire<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">svgIcon</span> <span class="token operator">=></span> <span class="token function">svgRequire</span><span class="token punctuation">(</span>svgIcon<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token parameter">app</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">'svg-icon'</span><span class="token punctuation">,</span> SvgIcon<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>然后在 <code>main.js</code> 中引入该文件</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">...</span>
<span class="token comment">// 导入 svgIcon</span>
<span class="token keyword">import</span> installIcons <span class="token keyword">from</span> <span class="token string">'@/icons'</span>
<span class="token operator">...</span>
<span class="token function">installIcons</span><span class="token punctuation">(</span>app<span class="token punctuation">)</span>
<span class="token operator">...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>然后用组件在试一下, 图标依然无法展示</p>
<h3 id="使用-svg-sprite-loader-处理-svg-图标" tabindex="-1"><a class="header-anchor" href="#使用-svg-sprite-loader-处理-svg-图标" aria-hidden="true">#</a> 使用 svg-sprite-loader 处理 svg 图标</h3>
<p><a href="https://www.npmjs.com/package/svg-sprite-loader" target="_blank" rel="noopener noreferrer">svg-sprite-loader<ExternalLinkIcon/></a> 是 <code>webpack</code> 中专门用来处理 <code>svg</code> 图标的一个 <code>loader</code> ，在上面图标之所有没有展示，就是因为缺少该 <code>loader</code></p>
<ol>
<li>
<p>安装 loader : <code>npm i --save-dev svg-sprite-loader@6.0.9</code></p>
</li>
<li>
<p>创建 <code>vue.config.js</code> 文件，新增如下配置：</p>
</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"@vue/cli-service"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Element Plus 按需引入使用的插件</span>
<span class="token keyword">const</span> AutoImport <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'unplugin-auto-import/webpack'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> Components <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'unplugin-vue-components/webpack'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> ElementPlusResolver <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'unplugin-vue-components/resolvers'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span>
<span class="token keyword">function</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token parameter">dir</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> dir<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">transpileDependencies</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">configureWebpack</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token function">AutoImport</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">resolvers</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">ElementPlusResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token function">Components</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">resolvers</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">ElementPlusResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">chainWebpack</span><span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 设置 svg-sprite-loader</span>
    config<span class="token punctuation">.</span>module
      <span class="token punctuation">.</span><span class="token function">rule</span><span class="token punctuation">(</span><span class="token string">'svg'</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span>exclude<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">'src/icons'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    config<span class="token punctuation">.</span>module
      <span class="token punctuation">.</span><span class="token function">rule</span><span class="token punctuation">(</span><span class="token string">'icons'</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.svg$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span>include<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">'src/icons'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">'svg-sprite-loader'</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">loader</span><span class="token punctuation">(</span><span class="token string">'svg-sprite-loader'</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">options</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">symbolId</span><span class="token operator">:</span> <span class="token string">'icon-[name]'</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br></div></div><p>修改完 <code>vue.config.js</code> 配置文件完以上配置之后，重新启动项目, 最终图标终于可以显示了</p>
<h2 id="完善登录表单校验" tabindex="-1"><a class="header-anchor" href="#完善登录表单校验" aria-hidden="true">#</a> 完善登录表单校验</h2>
<p>为表单进行表单校验那么我们需要关注以下三点：</p>
<ol>
<li>为 <code>el-form</code> 绑定 <code>model</code> 属性</li>
<li>为 <code>el-form</code> 绑定 <code>rules</code> 属性</li>
<li>为 <code>el-form-item</code> 绑定 <code>prop</code> 属性</li>
</ol>
<p>保证以上三点即可为 <code>el-from</code> 添加表单校验功能</p>
<p>以下为对应的代码实现：</p>
<p><strong>views/login</strong>
<img src="@source/.vuepress/public/images/ddd1.png" alt="图片">
<img src="@source/.vuepress/public/images/ddd2.png" alt="图片"></p>
<p><strong>views/login/rules.js</strong>  把函数式校验规则单独抽出来, 因为真实项目校验规则有可能非常多, 避免主文件变得臃肿</p>
<p><img src="@source/.vuepress/public/images/ddd3.png" alt="图片"></p>
<h2 id="通用后台登录方案解析" tabindex="-1"><a class="header-anchor" href="#通用后台登录方案解析" aria-hidden="true">#</a> 通用后台登录方案解析</h2>
<p>处理完了表单的基本操作之后，接下来就是登录操作的实现了。</p>
<p>对于登录操作在后台项目中是一个通用的解决方案，具体可以分为以下几点：</p>
<ol>
<li>封装 <code>axios</code> 模块</li>
<li>封装 接口请求 模块</li>
<li>封装登录请求动作</li>
<li>保存服务端返回的 <code>token</code></li>
<li>登录鉴权</li>
</ol>
<p>这些内容就共同的组成了一套 <strong>后台登录解决方案</strong> 。</p>
<h3 id="配置环境变量封装-axios-模块" tabindex="-1"><a class="header-anchor" href="#配置环境变量封装-axios-模块" aria-hidden="true">#</a> 配置环境变量封装 axios 模块</h3>
<p>在当前这个场景下，我们希望封装出来的 <code>axios</code> 模块，至少需要具备一种能力，那就是：<strong>根据当前模式的不同，设定不同的 <code>BaseUrl</code></strong> ，因为通常情况下企业级项目在 <strong>开发状态</strong> 和 <strong>生产状态</strong> 下它的 <code>baseUrl</code> 是不同的。</p>
<p>对于 <code>@vue/cli</code> 来说，它具备三种不同的模式：</p>
<ol>
<li><code>development</code></li>
<li><code>test</code></li>
<li><code>production</code></li>
</ol>
<p>具体可以点击 <a href="https://cli.vuejs.org/zh/guide/mode-and-env.html#%E6%A8%A1%E5%BC%8F" target="_blank" rel="noopener noreferrer">这里<ExternalLinkIcon/></a> 进行参考</p>
<p><code>axios</code> 必须要满足：<strong>在 开发 || 生产 状态下，可以设定不同 <code>BaseUrl</code> 的能力</strong></p>
<p>想要解决这个问题，就必须要使用到 <code>@vue/cli</code> 所提供的 <a href="https://cli.vuejs.org/zh/guide/mode-and-env.html#%E6%A8%A1%E5%BC%8F" target="_blank" rel="noopener noreferrer">环境变量<ExternalLinkIcon/></a> 来去进行实现</p>
<p>可以在项目中创建两个文件：</p>
<ol>
<li><code>.env.development</code></li>
<li><code>.env.production</code></li>
</ol>
<p>它们分别对应 <strong>开发状态</strong> 和 <strong>生产状态</strong></p>
<p>分别写入以下代码：</p>
<p>.env.development</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># 标志
ENV='development'

# base api
VUE_APP_BASE_API='/api'
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>.env.production</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># 标志
ENV='production'

# base api
VUE_APP_BASE_API='/prod-api'
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>有了这两个文件之后，就可以创建对应的 <code>axios</code> 模块</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm install axios 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>创建 <code>utils/request.js</code> ，写入如下代码</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">'axios'</span>

<span class="token keyword">const</span> service <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">baseURL</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VUE_APP_BASE_API</span><span class="token punctuation">,</span>
  <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">5000</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> service
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="封装请求动作" tabindex="-1"><a class="header-anchor" href="#封装请求动作" aria-hidden="true">#</a> 封装请求动作</h3>
<p>有了 <code>axios</code> 模块之后，接下来我们就可以</p>
<ol>
<li>封装接口请求模块</li>
<li>封装登录请求动作</li>
</ol>
<p>创建 <code>api</code> 文件夹，创建 <code>sys.js</code>：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> request <span class="token keyword">from</span> <span class="token string">'@/utils/request'</span>

<span class="token comment">// 登录接口</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">login</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'/sys/login'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'POST'</span><span class="token punctuation">,</span>
    data
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p><strong>封装登录请求动作：</strong>\</p>
<p>该动作期望把它封装到 <code>Vuex</code> 的 <code>action</code> 中</p>
<p>在 <code>store</code> 下创建 <code>modules</code> 文件夹，创建 <code>user.js</code> 模块，用于处理所有和 <strong>用户相关</strong> 的内容（此处需要使用第三方包 <code>md5</code> ）</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> login <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/api/sys'</span>
<span class="token keyword">import</span> md5 <span class="token keyword">from</span> <span class="token string">'md5'</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">namespaced</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token function">state</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mutations</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">loginAction</span><span class="token punctuation">(</span><span class="token parameter">context<span class="token punctuation">,</span> userInfo</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> <span class="token punctuation">{</span> username<span class="token punctuation">,</span> password <span class="token punctuation">}</span> <span class="token operator">=</span> userInfo
      <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token function">login</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          username<span class="token punctuation">,</span>
          <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token function">md5</span><span class="token punctuation">(</span>password<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token function">resolve</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><p>然后在 <code>store/index</code> 中完成注册：</p>
<p><img src="@source/.vuepress/public/images/usermodule1.png" alt="图片"></p>
<h3 id="登录触发动作" tabindex="-1"><a class="header-anchor" href="#登录触发动作" aria-hidden="true">#</a> 登录触发动作</h3>
<ol>
<li>进行表单校验</li>
<li>触发登陆操作</li>
<li>进行登录后操作</li>
</ol>
<p>在 <code>login</code> 中，触发定义的登录 <code>action</code></p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span>
        <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 100%</span><span class="token punctuation">"</span></span></span>
        <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span>
        <span class="token attr-name">:loading</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>loading<span class="token punctuation">"</span></span>
        <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleLogin<span class="token punctuation">"</span></span>
        <span class="token punctuation">></span></span>登录
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> validatePassword <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./rules'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vuex'</span>

<span class="token keyword">const</span> loginForm <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">'super-admin'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token string">'123456'</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token operator">...</span>

<span class="token comment">// 处理登录</span>
<span class="token keyword">const</span> loading <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">useStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> loginFormRef <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">handleLogin</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  loginFormRef<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">isOK</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>isOK<span class="token punctuation">)</span> <span class="token keyword">return</span>
    loading<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">true</span> <span class="token comment">// 开启 loading 动画</span>

    store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">'user/loginAction'</span><span class="token punctuation">,</span> loginForm<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token comment">// TODO : 登录后操作</span>
      loading<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
      loading<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br></div></div><p>触发之后会得到以下错误：</p>
<p><img src="@source/.vuepress/public/images/cuo1.png" alt="图片"></p>
<p>该错误表示，我们当前请求的接口不存在。</p>
<p>出现这个问题的原因，是因为我们在前面配置环境变量时指定了 <strong>开发环境下</strong>，请求的 <code>BaseUrl</code> 为 <code>/api</code> ，所以我们真实发出的请求为：<code>/api/sys/login</code> 。</p>
<p>这样的一个请求会被自动键入到当前前端所在的服务中，所以最终就得到了 <code>http://localhost:8081/api/sys/login</code> 这样的一个请求路径</p>
<p>而想要处理这个问题，那么可以通过指定 <a href="https://webpack.docschina.org/configuration/dev-server/" target="_blank" rel="noopener noreferrer">webpack DevServer 代理<ExternalLinkIcon/></a> 的形式，代理当前的 <code>url</code> 请求。</p>
<p>而指定这个代理非常简单，是一种近乎固定的配置方案。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 配置反向代理</span>
    <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// 当地址中有/api的时候会触发代理机制</span>
      <span class="token string-property property">'/api'</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// 要代理的服务器地址  这里不用写 api</span>
        <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">'https://api.imooc-admin.lgdsunday.club/'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// 是否跨域</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>重新启动服务，再次进行请求，即可得到返回数据</p>
<p><img src="@source/.vuepress/public/images/cheng1.png" alt="图片"></p>
<h3 id="本地缓存处理方案-数据持久化" tabindex="-1"><a class="header-anchor" href="#本地缓存处理方案-数据持久化" aria-hidden="true">#</a> 本地缓存处理方案(数据持久化)</h3>
<p>通常情况下，在获取到 <code>token</code> 之后，会把 <code>token</code> 进行缓存，而缓存的方式将会分为两种：</p>
<ol>
<li>本地缓存：<code>LocalStorage</code></li>
<li>全局状态管理：<code>Vuex</code></li>
</ol>
<p>保存在 <code>LocalStorage</code> 是为了方便实现 <strong>自动登录功能</strong>,  <strong>数据持久化</strong></p>
<p>保存在 <code>vuex</code> 中是为了后面在其他位置进行使用</p>
<p>下面就分别来实现对应的缓存方案：</p>
<p><strong>LocalStorage：</strong></p>
<ol>
<li>创建 <code>utils/storage.js</code> 文件，封装三个对应方法：</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Storage</span> <span class="token punctuation">{</span>
  <span class="token function">setItem</span><span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      window<span class="token punctuation">.</span>localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> item <span class="token operator">=</span> window<span class="token punctuation">.</span>localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      item <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> item
  <span class="token punctuation">}</span>

  <span class="token function">removeItem</span><span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    window<span class="token punctuation">.</span>localStorage<span class="token punctuation">.</span><span class="token function">removeItem</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    window<span class="token punctuation">.</span>localStorage<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> storage <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Storage</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> storage
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><ol start="2">
<li>在 <code>vuex</code> 的 <code>user</code> 模块下，处理 <code>token</code> 的保存</li>
</ol>
<p>登录成功之后拿到 token , 提交 mutation 存储在 <strong>state 里</strong>和 <strong>localStorage 里</strong></p>
<p><img src="@source/.vuepress/public/images/ltoken1.png" alt="图片"></p>
<ol start="3">
<li>处理保存的过程中，需要创建 <code>constant</code> 常量目录 <code>constant/index.js</code></li>
</ol>
<p><img src="@source/.vuepress/public/images/constant1.png" alt="图片"></p>
<p>此时，当点击登陆时，即可把 <code>token</code> 保存至 <code>Vuex</code> 与  <code>localStorage</code> 中</p>
<h3 id="请求响应数据的统一处理" tabindex="-1"><a class="header-anchor" href="#请求响应数据的统一处理" aria-hidden="true">#</a> 请求响应数据的统一处理</h3>
<p>在上面中，保存了服务端返回的 <code>token</code> 。但是有一个地方比较难受，那就是在 <code>vuex 的 user 模块</code> 中，我们获取数据端的 <code>token</code> 数据，通过 <code>res.data.data.token</code> 的形式进行获取</p>
<p>一路的 <code>data.</code> 确实让人比较难受，可以通过 <a href="http://axios-js.com/zh-cn/docs/index.html#%E6%8B%A6%E6%88%AA%E5%99%A8" target="_blank" rel="noopener noreferrer">axios 响应拦截器<ExternalLinkIcon/></a> 进行处理。</p>
<p>登录成功服务器会返回这种格式数据
<img src="@source/.vuepress/public/images/dlfh1.png" alt="图片"></p>
<p>在 <code>utils/request.js</code> 中实现以下代码：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">'axios'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ElMessage <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'element-plus'</span>
<span class="token keyword">const</span> service <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">baseURL</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VUE_APP_BASE_API</span><span class="token punctuation">,</span>
  <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">5000</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token operator">...</span>

<span class="token comment">// 响应拦截器</span>
service<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
  <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> success<span class="token punctuation">,</span> data<span class="token punctuation">,</span> message <span class="token punctuation">}</span> <span class="token operator">=</span> res<span class="token punctuation">.</span>data
    <span class="token keyword">if</span> <span class="token punctuation">(</span>success<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 成功返回解析后的数据</span>
      <span class="token keyword">return</span> data
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// 失败(请求成功, 业务失败) , 消息提示</span>
      ElMessage<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span>
      <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// TODO: 将来处理 token 超时问题</span>
    ElMessage<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>err<span class="token punctuation">.</span>message<span class="token punctuation">)</span> <span class="token comment">// 提示消息</span>
    <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> service
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><p>此时，对于 <code>vuex 中的 user 模块</code> 就可以进行以下修改了：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>context<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">'setToken'</span><span class="token punctuation">,</span> data<span class="token punctuation">.</span>token<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="登录后操作" tabindex="-1"><a class="header-anchor" href="#登录后操作" aria-hidden="true">#</a> 登录后操作</h3>
<p>那么截止到此时，我们距离登录操作还差最后一个功能就是 <strong>登录鉴权</strong> 。</p>
<p>只不过在进行 <strong>登录鉴权</strong> 之前得先去创建一个登录后要跳转到的页面，也就是所说的登录后操作</p>
<ol>
<li>创建 <code>layout/index.vue</code> ，写入以下代码：</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;template>
  &lt;div>layout 页面 &lt;/div>
&lt;/template>
&lt;script setup>

&lt;/script>
&lt;style lang="scss" scoped>
&lt;/style>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ol start="2">
<li>在 <code>router/index</code> 中，指定对应路由表</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>const publicRoutes = [
  ...
  {
    path: '/',
    name: 'layout',
    component: () => import('@/layout/index.vue')
  }
]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ol start="3">
<li>action 里面, 在登录成功后，完成跳转</li>
</ol>
<p><img src="@source/.vuepress/public/images/tztz1.png" alt="图片"></p>
<h3 id="登录鉴权解决方案" tabindex="-1"><a class="header-anchor" href="#登录鉴权解决方案" aria-hidden="true">#</a> 登录鉴权解决方案</h3>
<p>在处理了登陆后操作之后，接下来我们就来看一下最后的一个功能，也就是 <strong>登录鉴权</strong></p>
<p>首先我们先去对 <strong>登录鉴权</strong> 进行一个定义，什么是  <strong>登录鉴权</strong> 呢？</p>
<blockquote>
<p>当用户未登陆时，不允许进入除 <code>login</code> 之外的其他页面。</p>
<p>用户登录后，<code>token</code> 未过期之前，不允许进入 <code>login</code> 页面</p>
</blockquote>
<p>而想要实现这个功能，那么最好的方式就是通过 <a href="https://router.vuejs.org/zh/guide/advanced/navigation-guards.html#%E5%85%A8%E5%B1%80%E5%89%8D%E7%BD%AE%E5%AE%88%E5%8D%AB" target="_blank" rel="noopener noreferrer">路由守卫<ExternalLinkIcon/></a> 来进行实现。</p>
<p>明确好了 <strong>登录鉴权</strong> 的概念之后，接下来就去实现一下</p>
<ol>
<li>在 <code>main.js</code> 平级，创建 <code>permission</code> 文件，并在 <code>main.js</code> 中进行导入</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> router <span class="token keyword">from</span> <span class="token string">'./router'</span>
<span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">'./store'</span>

<span class="token comment">// 白名单</span>
<span class="token keyword">const</span> whiteList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'/login'</span><span class="token punctuation">]</span>

<span class="token comment">// 1. 如果已登录, 则不允许进入 login 页面</span>
<span class="token comment">// 2. 如果未登录, 只允许进入 login 页面及白名单</span>
<span class="token doc-comment comment">/**
 * 路由前置守卫
 */</span>
router<span class="token punctuation">.</span><span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>store<span class="token punctuation">.</span>getters<span class="token punctuation">.</span>token<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 有 token, 说明已登录</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>to<span class="token punctuation">.</span>path <span class="token operator">===</span> <span class="token string">'/login'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">next</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// 未登录</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>whiteList<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>to<span class="token punctuation">.</span>path<span class="token punctuation">)</span> <span class="token operator">></span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token function">next</span><span class="token punctuation">(</span><span class="token string">'/login'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><p>在此处我们使用到了 <code>vuex 中的 getters</code> ，此时的 <code>getters</code> 被当作 <strong>快捷访问</strong> 的形式进行访问</p>
<p>所以需要声明对应的模块，创建 <code>store/getters.js</code>
<img src="@source/.vuepress/public/images/gts.png" alt="图片"></p>
<p>在 <code>store/index</code> 中进行导入：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> getters <span class="token keyword">from</span> <span class="token string">'./getters'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">createStore</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  getters<span class="token punctuation">,</span>
  <span class="token operator">...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>并且在 main.js, 引入 <code>permission.js</code> 登录鉴权</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">'./permission'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></template>
