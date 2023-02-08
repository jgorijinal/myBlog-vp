<template><h1 id="小程序进阶概念" tabindex="-1"><a class="header-anchor" href="#小程序进阶概念" aria-hidden="true">#</a> 小程序进阶概念</h1>
<h2 id="组件" tabindex="-1"><a class="header-anchor" href="#组件" aria-hidden="true">#</a> 组件</h2>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<ol>
<li>组件应该被放入到哪个文件夹中？</li>
<li>如何在页面中使用【自定义组件】？</li>
</ol>
</div>
<ol>
<li>创建组件
<ol>
<li>创建 <code>components</code> 文件夹</li>
<li>创建 <code>tabs</code> 和 <code>list</code> 文件夹</li>
<li>右键 <strong>新建 <code>Component</code></strong>
<img src="@source/.vuepress/public/images/wx03.png" alt="图片"></li>
</ol>
</li>
<li>使用组件
<ol>
<li>找到页面的 <code>.json</code> 文件</li>
<li>在 <code>usingComponents</code> 选项下 <strong>注册组件</strong>
<ol>
<li><code>key</code> 为当前组件在该页面中的标签名</li>
<li><code>value</code> 为组件的代码路径
<img src="@source/.vuepress/public/images/wx04.png" alt="图片"></li>
</ol>
</li>
<li>在页面的 <code>wxml</code> 文件中，以 <strong>注册的 <code>key</code></strong> 为标签名，使用组件</li>
</ol>
</li>
</ol>
<p>总结:</p>
<ol>
<li>组件应该被放入到哪个文件夹中？
<ol>
<li><code>components</code></li>
</ol>
</li>
<li>如何在页面中使用【自定义组件】？
<ol>
<li>在<strong>页面</strong>的 <code>.json</code> 文件中，通过 <code>usingComponents</code> 进行注册</li>
<li>在 <code>wxml</code> 文件中，以注册的 <code>key</code>  为 <strong>标签名</strong> 进行使用</li>
</ol>
</li>
</ol>
<h2 id="组件的生命周期" tabindex="-1"><a class="header-anchor" href="#组件的生命周期" aria-hidden="true">#</a> 组件的生命周期</h2>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<ol>
<li>组件的 生命周期 和 方法 分别应该被放入到哪个节点下？</li>
<li><code>created</code> 函数中可以调用 <code>setData</code> 吗？</li>
<li>获取数据的操作应该在哪个函数中进行？</li>
</ol>
</div>
<p>组件的生命周期必须要放入到 <strong><code>lifetimes</code></strong> 中, 而方法必须要放入到 <code>methods</code> 中</p>
<p>组件的生命周期一共有三个：</p>
<ol>
<li><code>created</code> ： 组件实例刚刚被创建好。<strong>此时还不能调用 <code>setData</code></strong></li>
<li><code>attached</code>：组件完全初始化完毕、进入页面节点树后。<strong>绝大多数初始化工作可以在这个时机进行</strong></li>
<li><code>detached</code>：在组件离开页面节点树后</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// components/tabs/tabs.js</span>
<span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">properties</span><span class="token operator">:</span> <span class="token punctuation">{</span>

  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">listData</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// tabs 数据</span>
    <span class="token literal-property property">active</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token comment">// 选中项</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 组件的生命周期</span>
  <span class="token literal-property property">lifetimes</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token function">attached</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">loadTabsData</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token doc-comment comment">/**
   * 组件的方法列表
   */</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">loadTabsData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      wx<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">url</span><span class="token operator">:</span><span class="token string">'https://api.imooc-blog.lgdsunday.club/api/hot/tabs'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">method</span><span class="token operator">:</span><span class="token string">'GET'</span><span class="token punctuation">,</span>
        <span class="token function">success</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">listData</span><span class="token operator">:</span> res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>data<span class="token punctuation">.</span>list<span class="token punctuation">,</span>
            <span class="token literal-property property">active</span><span class="token operator">:</span> <span class="token number">0</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scroll-view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tabs-box<span class="token punctuation">"</span></span> <span class="token attr-name">scroll-x</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name"><span class="token namespace">wx:</span>for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{listData}}<span class="token punctuation">"</span></span>
    <span class="token attr-name"><span class="token namespace">wx:</span>key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>index<span class="token punctuation">"</span></span>
    <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tab {{active === index ? <span class="token punctuation">'</span>active<span class="token punctuation">'</span> : <span class="token punctuation">'</span><span class="token punctuation">'</span>}}<span class="token punctuation">"</span></span>
    <span class="token punctuation">></span></span>
    {{item.label}}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scroll-view</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.tabs-box</span> <span class="token punctuation">{</span>
    <span class="token comment">/* 指定宽度 + 不换行 */</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 750rpx<span class="token punctuation">;</span>
    <span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>
    <span class="token property">border-bottom</span><span class="token punctuation">:</span> 1px solid #cccccc<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.tab</span> <span class="token punctuation">{</span>
    <span class="token comment">/* 指定 display */</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 12px 22px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.active</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #f94d2a<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p><img src="@source/.vuepress/public/images/wxtabs1.png" alt="图片"></p>
<p><strong>总结</strong> :</p>
<ol>
<li>组件的 生命周期 和 方法 分别应该被放入到哪个节点下？
<ol>
<li>生命周期应该被定义在 <code>lifetimes</code> 中</li>
<li>方法必须要放入到 <code>methods</code> 中</li>
</ol>
</li>
<li><code>created</code> 函数中可以调用 <code>setData</code> 吗？
<ol>
<li>不可以</li>
</ol>
</li>
<li>获取数据的操作应该在哪个生命周期函数中进行？
<ol>
<li><code>attached</code></li>
</ol>
</li>
</ol>
<h2 id="数据监听器" tabindex="-1"><a class="header-anchor" href="#数据监听器" aria-hidden="true">#</a> 数据监听器</h2>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<ol>
<li>小程序中通过哪个选项来声明数据监听器</li>
<li>数据监听器的使用场景是什么？</li>
</ol>
</div>
<p>通过 <strong>接口文档</strong> 可以看出，如果想要获取 <code>list</code> 那么需要传递一个 <code>type</code> 的参数，而这个 <code>type</code> 就是用户选中的 <code>tab 项</code> 的 <code>id</code></p>
<p>所以接下来就需要来做一件事情：<strong>监听用户选中的 <code>tab</code>，根据用户选中的 <code>tab</code> 来切换底部 <code>list</code> 的数据</strong></p>
<p><a href="https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/observer.html" target="_blank" rel="noopener noreferrer">数据监听器官方文档<ExternalLinkIcon/></a></p>
<p>目标：<strong>监听用户选中的 <code>tab</code>，根据用户选中的 <code>tab</code> 来切换底部 <code>list</code> 的数据</strong></p>
<p>步骤拆解如下：</p>
<blockquote>
<ol>
<li>监听用户选中项的变化</li>
<li>获取用户选中的数据的 <code>id</code></li>
<li>把 <code>id</code> 传递给 <code>list</code> 组件</li>
<li><code>list</code> 组件根据接收到的 <code>id</code> 获取对应的数据</li>
</ol>
</blockquote>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scroll-view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tabs-box<span class="token punctuation">"</span></span> <span class="token attr-name">scroll-x</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name"><span class="token namespace">wx:</span>for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{listData}}<span class="token punctuation">"</span></span>
    <span class="token attr-name"><span class="token namespace">wx:</span>key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>index<span class="token punctuation">"</span></span>
    <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tab {{active === index ? <span class="token punctuation">'</span>active<span class="token punctuation">'</span> : <span class="token punctuation">'</span><span class="token punctuation">'</span>}}<span class="token punctuation">"</span></span>
    <span class="token attr-name"><span class="token namespace">bind:</span>tap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onItemClick<span class="token punctuation">"</span></span>
    <span class="token attr-name">data-index</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{index}}<span class="token punctuation">"</span></span>
    <span class="token punctuation">></span></span>
    {{item.label}}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scroll-view</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
    <span class="token function">onItemClick</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 通过 dataset 获取传递的参数</span>
      <span class="token keyword">const</span> <span class="token punctuation">{</span> index <span class="token punctuation">}</span> <span class="token operator">=</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>dataset
      <span class="token comment">// 点击 tab 时, 切换当前激活项</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">active</span><span class="token operator">:</span> index
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">observers</span><span class="token operator">:</span><span class="token punctuation">{</span> <span class="token comment">// 监听器</span>
    <span class="token string-property property">'active'</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">active</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 监听 active 数据的变化, 先获取那一个 item 项</span>
      <span class="token keyword">const</span> <span class="token punctuation">{</span>id<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>listData<span class="token punctuation">[</span>active<span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>目前，已经实现了需求的前两步</p>
<p>后面两步需要了解 <strong>组件之间的关系和通讯</strong></p>
<p><strong>总结:</strong></p>
<ol>
<li>小程序中通过哪个选项来声明数据监听器
<ol>
<li><code>observers</code></li>
</ol>
</li>
<li>数据监听器的使用场景是什么？
<ol>
<li>需要监听数据的变化</li>
<li>在数据变化之后，进行一些额外的操作</li>
</ol>
</li>
</ol>
<h2 id="组件之间的关系与通讯" tabindex="-1"><a class="header-anchor" href="#组件之间的关系与通讯" aria-hidden="true">#</a> 组件之间的关系与通讯</h2>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<ol>
<li>组件之间数据传递的关系可以分为哪几种？</li>
<li>兄弟组件之间传递数据的方式是什么？</li>
</ol>
</div>
<p>组件之间的关系常用的可以分为<strong>父子组件</strong>和<strong>兄弟组件</strong></p>
<p><strong>不同关系组件之间传递数据的方式</strong>
父子关系</p>
<ol>
<li>
<p>父向子传参：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 子组件：通过 properties 声明要从父组件中接收的数据</span>
    <span class="token doc-comment comment">/**
     * 组件的属性列表
     */</span>
    <span class="token literal-property property">properties</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">tabId</span><span class="token operator">:</span> String
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

<span class="token comment">// 父组件：通过自定义属性的形式传递数据，以子组件中定义的 key 为属性名，以要传递的数据为属性值</span>
   <span class="token operator">&lt;</span>list tabId<span class="token operator">=</span><span class="token string">"{{tabSelectId}}"</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></li>
<li>
<p>子向父传参：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 子组件：通过 triggerEvent 方法发送一个通知，通知父组件接收数据。</span>
<span class="token comment">// 方法的第一个参数为：通知名</span>
<span class="token comment">// 方法的第二个参数为：要传递的数据</span>
<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">triggerEvent</span><span class="token punctuation">(</span><span class="token string">'change'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    id
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 父组件：通过 bind 监听子组件中发送的通知</span>
<span class="token comment">// bind 后的内容为 子组件发送的通知名，表达式为接收到该通知时所触发的方法</span>
<span class="token operator">&lt;</span>tabs bind<span class="token operator">:</span>change<span class="token operator">=</span><span class="token string">"onTabChange"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>tabs<span class="token operator">></span>
<span class="token comment">// 方法被触发后可以通过 e.detail 的形式获取子组件传递过来的数据对象</span>
<span class="token function">onTabChange</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span>id<span class="token punctuation">}</span> <span class="token operator">=</span> e<span class="token punctuation">.</span>detail<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">tabSelectId</span><span class="token operator">:</span> id
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div></li>
</ol>
<p>兄弟关系</p>
<ol>
<li>
<p>兄弟组件之间传参：<strong>兄弟关系 === 没有关系</strong>。 兄弟组件只是为了方便称呼的一个叫法而已</p>
<p>所以想要完成兄弟组件之间的传参，就需要：<strong>为它们建立关系</strong></p>
<p>而建立关系说白了就是为了找到一个：<strong>和这两个组件都认识的 ”中间人“ 。</strong></p>
<p>这个中间人一般为：<strong>统一的父组件。</strong></p>
<p>而最后：兄弟组件之间想要传递数据，就需要利用 ”中间人进行传递“，也就是：</p>
<blockquote>
<ol>
<li>【兄弟 A 组件】传递数据给 父组件（中间人）</li>
<li>父组件（中间人）再把数据传递给 【兄弟 B 组件】</li>
</ol>
</blockquote>
</li>
</ol>
<p><strong>总结</strong></p>
<ol>
<li>组件之间数据传递的关系可以分为哪几种？
<ol>
<li>父向子传递数据</li>
<li>子向父传递数据</li>
<li>兄弟组件之间传递数据</li>
</ol>
</li>
<li>兄弟组件之间传递数据的方式是什么？</li>
</ol>
<h2 id="组件的插槽" tabindex="-1"><a class="header-anchor" href="#组件的插槽" aria-hidden="true">#</a> 组件的插槽</h2>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>小程序中如何定义多个插槽？</p>
</div>
<p>小程序默认只能定义一个插槽，如果要定义多个插槽那么需要：<strong>在组件中指定 <code>options</code> 选项的 <code>multipleSlots</code> 选项为 <code>true</code></strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">options</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">multipleSlots</span><span class="token operator">:</span><span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><strong>使用：</strong></p>
<p><strong>2.1：使用单一插槽：</strong></p>
<p>在组件使用时，以 <code>innerHTML </code> 的形式插入内容：</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>component</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">></span></span>单一插槽插入的 DOM<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>component</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>2.2：使用多个插槽：</strong></p>
<p>在组件使用时，以 <code>innerHTML </code> 的形式插入内容，以 <code>slot</code> 属性标记当前 <code>DOM</code> 插入到哪个插槽中：</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>component</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>header<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>该元素将被插入到 name=header 的插槽中<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>footer<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>该元素将被插入到 name=footer 的插槽中<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>component</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><strong>总结:</strong>
小程序中如何定义多个插槽？</p>
<ol>
<li>指定 <code>options</code> 的 <code>multipleSlots</code> 为 <code>true</code></li>
<li>使用具名插槽传递</li>
</ol>
</template>
