<template><h1 id="前中台响应式处理方案" tabindex="-1"><a class="header-anchor" href="#前中台响应式处理方案" aria-hidden="true">#</a> 前中台响应式处理方案</h1>
<h4 id="数据" tabindex="-1"><a class="header-anchor" href="#数据" aria-hidden="true">#</a> 数据</h4>
<p>先分析数据，双方<code>（移动端和 PC端 ）</code>的数据是一样的。所以说这一块是完全可以复用的</p>
<p>那么目前<code>navigationBar</code>的数据是通过 <code>src/views/main/components/navigation/index.vue</code> 进行获取，然后进行传递的。那么期望进行数据的复用，如果一直进行数据传递的话，未免有些过于复杂了。</p>
<p>所以说对于数据，可以直接通过 <strong><code>vuex</code></strong> 来封装这一系列的 <strong>获取、切换</strong> 行为。</p>
<h4 id="视图" tabindex="-1"><a class="header-anchor" href="#视图" aria-hidden="true">#</a> 视图</h4>
<p>双方的视图在展示中的逻辑具备较大的差异，所以为了综合 <strong>可维护性</strong>，视图逻辑部分的话单独封装到各自的组件中来进行处理</p>
<h4 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h4>
<p>就分析好了 <strong>navigationBar</strong> 的公有和私有部分：</p>
<ol>
<li>数据 为公有数据，可以在 <code>vuex</code> 中进行抽离处理</li>
<li>视图 为私有部分，需要在各自的组件中进行单独处理</li>
</ol>
<h2 id="抽离公用逻辑-封装系列动作" tabindex="-1"><a class="header-anchor" href="#抽离公用逻辑-封装系列动作" aria-hidden="true">#</a> 抽离公用逻辑，封装系列动作</h2>
<p>根据刚才的分析，抽离公用逻辑，其实指的是：<strong>把公有数据的一系列动作封装起来，那么想要封装我们就需要创建对应的 <code>vuex</code> 模块</strong></p>
<ol>
<li>创建 <code>src/store/modules/category.js</code> 文件</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> getCategory <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/api/category'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">ALL_CATEGORY_ITEM</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/constants'</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">namespaced</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token function">state</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">category</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token constant">ALL_CATEGORY_ITEM</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mutations</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">setCategorys</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> categorys</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      state<span class="token punctuation">.</span>categorys <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token constant">ALL_CATEGORY_ITEM</span><span class="token punctuation">,</span> <span class="token operator">...</span>categorys<span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token keyword">async</span> <span class="token function">getCategoryData</span><span class="token punctuation">(</span><span class="token parameter">context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getCategory</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      context<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">'setCategorys'</span><span class="token punctuation">,</span> res<span class="token punctuation">.</span>categorys<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><ol start="2">
<li>在 <code>src/store/index.js</code> 中初始化 <code>store</code>，并注册 <code>category</code> 模块：</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vuex'</span>
<span class="token keyword">import</span> category <span class="token keyword">from</span> <span class="token string">'./modules/category'</span>
<span class="token keyword">import</span> getters <span class="token keyword">from</span> <span class="token string">'./getters'</span>

<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  getters<span class="token punctuation">,</span>
  <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    category
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> store
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><ol start="3">
<li>在 <code>src/store/getters.js</code> 中创建 <code>category</code> 的访问</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">categorys</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token operator">=></span> state<span class="token punctuation">.</span>category<span class="token punctuation">.</span>categorys
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ol start="4">
<li>在 <code>main.js</code> 完成 <code>store</code> 注册：</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">'./store'</span>
<span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>store<span class="token punctuation">)</span><span class="token operator">...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol start="5">
<li>在 <code>src/views/main/components/navigation/index.vue</code> 转移数据获取到 <code>vuex</code></li>
</ol>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mobile-navigation-vue</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>isMobileTerminal<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> isMobileTerminal <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/utils/flexible'</span>
<span class="token keyword">import</span> mobileNavigationVue <span class="token keyword">from</span> <span class="token string">'./mobile/index.vue'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vuex'</span>

<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">useStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// 触发 category 数据获取动作</span>
store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">'category/getCategoryData'</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><ol start="6">
<li>在 <code>src/views/main/components/navigation/mobile/index.vue</code> 中，从 <code>vuex</code> 读取数据</li>
</ol>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token comment">&lt;!-- category item --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span>
	<span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(item, index) in $store.getters.categorys<span class="token punctuation">"</span></span>
<span class="token attr-name">...</span>
    
<span class="token attr-name">&lt;m-popup</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>isOpenPopup<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>menu-vue</span> <span class="token attr-name">@onItemClick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onItemClick<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>menu-vue</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>m-popup</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!-- js 部分删除 props --></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><ol start="7">
<li>在 <code>src/views/main/components/menu/index.vue</code> 中，从 <code>vuex</code> 读取数据</li>
</ol>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>&lt;li
        v-for="(item, index) in $store.getters.categorys"
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>数据就已经被抽离到 <code>vuex</code> 之中</p>
<h2 id="pc-端-navigationbar-私有视图处理" tabindex="-1"><a class="header-anchor" href="#pc-端-navigationbar-私有视图处理" aria-hidden="true">#</a> PC 端 navigationBar 私有视图处理</h2>
<ol>
<li>创建 <code>src/views/main/components/navigation/pc/index.vue</code> 文件</li>
</ol>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pc-navigation-vue</span> <span class="token attr-name">v-else</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>pc-navigation-vue</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="2">
<li>在 <code>src/views/main/components/navigation/index.vue</code> 中按需渲染
<img src="@source/.vuepress/public/images/pcnavi1.png" alt="图片"></li>
</ol>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pc-navigation-vue</span> <span class="token attr-name">v-else</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>pc-navigation-vue</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="3">
<li>在 <code>src/views/main/components/navigation/pc/index.vue</code> 中，完成基本的数据渲染</li>
</ol>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bg-white sticky top-0 left-0 w-full z-10<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span>
      <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>w-[800px] relative flex flex-wrap justify-center overflow-x-auto px-[10px] py-1 text-xs text-zinc-600 duration-300 overflow-hidden mx-auto<span class="token punctuation">"</span></span>
    <span class="token punctuation">></span></span>
      <span class="token comment">&lt;!-- lg 下展开箭头 --></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
        <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>absolute right-1 bottom-1 z-20 p-1 rounded cursor-pointer duration-200 hover:bg-zinc-200<span class="token punctuation">"</span></span>
      <span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>m-svg-icon</span>
          <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>unfold<span class="token punctuation">"</span></span>
          <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>w-1 h-1<span class="token punctuation">"</span></span>
          <span class="token attr-name">fillClass</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fill-zinc-900<span class="token punctuation">"</span></span>
        <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>m-svg-icon</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
      <span class="token comment">&lt;!-- category item --></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span>
        <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item in $store.getters.categorys<span class="token punctuation">"</span></span>
        <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item.id<span class="token punctuation">"</span></span>
        <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>shrink-0 px-1.5 py-0 z-10 duration-200 last:mr-4 text-zinc-900 text-base font-bold h-4 leading-4 cursor-pointer hover:bg-zinc-200 rounded mr-1 mb-1<span class="token punctuation">"</span></span>
      <span class="token punctuation">></span></span>
        {{ item.name }}
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><ol start="4">
<li>在 <code>src/views/layout/components/main.vue</code> 定义二级路由出口：</li>
</ol>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-view</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ol start="5">
<li>在 <code>src/router/modules/pc-routes.js</code> 中创建对应路由表</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'main'</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'@/views/layout/index.vue'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'home'</span><span class="token punctuation">,</span>
        <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'@/views/main/index.vue'</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="pc-端-navigationbar-私有逻辑处理" tabindex="-1"><a class="header-anchor" href="#pc-端-navigationbar-私有逻辑处理" aria-hidden="true">#</a> PC 端 navigationBar 私有逻辑处理</h2>
<p><img src="@source/.vuepress/public/images/pcnavi2.png" alt="图片"></p>
<ol>
<li>在 <code>src/views/main/components/navigation/pc/index.vue</code>  <strong>处理<code>展开/收缩</code>功能</strong></li>
</ol>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>

<span class="token doc-comment comment">/**
 * 状态切换处理
 */</span>
<span class="token keyword">const</span> isOpenCategoty <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">triggerState</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  isOpenCategoty<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token operator">!</span>isOpenCategoty<span class="token punctuation">.</span>value
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><ol start="2">
<li>通过数据控制展开和关闭状态</li>
</ol>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  ...
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span>
      <span class="token attr-name">...</span>
      <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>[isOpenCategoty ? <span class="token punctuation">'</span>h-[206px]<span class="token punctuation">'</span> : <span class="token punctuation">'</span>h-[56px]<span class="token punctuation">'</span>]<span class="token punctuation">"</span></span>
    <span class="token punctuation">></span></span>
      <span class="token comment">&lt;!-- lg 下展开箭头 --></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
        <span class="token attr-name">...</span>
        <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>triggerState<span class="token punctuation">"</span></span>
      <span class="token punctuation">></span></span>
        &lt;m-svg-icon
          :name="isOpenCategoty ? 'fold' : 'unfold'"
          ...
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>m-svg-icon</span><span class="token punctuation">></span></span>
        ...
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><ol start="3">
<li>建立数据源控制选中状态</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 选中状态处理
 */</span>
<span class="token keyword">const</span> currentCategoryIndex <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">onItemClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">index</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  currentCategoryIndex<span class="token punctuation">.</span>value <span class="token operator">=</span> index
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ol start="4">
<li>绑定状态到数据</li>
</ol>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token comment">&lt;!-- category item --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span>
  <span class="token attr-name">...</span> 
  <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{
    <span class="token punctuation">'</span>text-zinc-900 bg-zinc-200 <span class="token punctuation">'</span>: currentCategoryIndex === index
  }<span class="token punctuation">"</span></span>
  <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onItemClick(index)<span class="token punctuation">"</span></span>
<span class="token punctuation">></span></span>
  {{ item.name }}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p><code>PC</code> 端 <code>navigationBar</code> 基本渲染完成。</p>
<h2 id="处理-navigationbar-闪烁问题" tabindex="-1"><a class="header-anchor" href="#处理-navigationbar-闪烁问题" aria-hidden="true">#</a> 处理 navigationBar 闪烁问题</h2>
<p><strong>分析问题出现的原因</strong></p>
<p>出现该问题的原因，其实非常简单：</p>
<ul>
<li><code>在初始状态中，navigationBar</code> 所依赖的 <code>$store.getters.categorys</code> 并没有数据</li>
<li>当 <code>categoryData</code> 数据获取成功之后，进行展示</li>
<li>这样一个 <strong>展示</strong> 的过程就变成了 <strong>闪烁</strong> 的问题</li>
</ul>
<p><strong>解决方案</strong></p>
<ol>
<li>
<p>让 <code>$store.getters.categorys</code> 具备一个<strong>初始数据</strong></p>
</li>
<li>
<p>当获取到服务端数据时，替换初始数据</p>
</li>
<li>
<p>同时缓存该次服务端数据，作为下次的初始数据</p>
</li>
<li>
<p>之后每次进入都执行该三步操作</p>
</li>
<li>
<p>在 <code>src/constants/index.js</code> 定义初始数据</p>
</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 初始 category 数据</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">CATEGORY_NOMAR_DATA</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token constant">ALL_CATEGORY_ITEM</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">'web_app_icon'</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'UI/UX'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">'design'</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'平面'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">'illustration'</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'插画/漫画'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">'photography'</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'摄影'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">'games'</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'游戏'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">'anime'</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'动漫'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">'industrial_design'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'工业设计'</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">'industrial_design'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'建筑设计'</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">'industrial_design'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'人文艺术'</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">'industrial_design'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'家居/家装'</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><ol start="2">
<li>在 <code>src/store/modules/category.js</code> 中赋值初始数据</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> getCategory <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/api/category'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">ALL_CATEGORY_ITEM</span><span class="token punctuation">,</span><span class="token constant">CATEGORY_NOMAR_DATA</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/constants'</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">namespaced</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token function">state</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">categorys</span><span class="token operator">:</span> <span class="token constant">CATEGORY_NOMAR_DATA</span> <span class="token comment">// 指定这些初始数据</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mutations</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">setCategorys</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> categorys</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      state<span class="token punctuation">.</span>categorys <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token constant">ALL_CATEGORY_ITEM</span><span class="token punctuation">,</span><span class="token operator">...</span>categorys<span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token keyword">async</span> <span class="token function">getCategoryData</span><span class="token punctuation">(</span><span class="token parameter">context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getCategory</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      context<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">'setCategorys'</span><span class="token punctuation">,</span> res<span class="token punctuation">.</span>categorys<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>那么此时再刷新页面，<code>navigationBar</code> 则不在闪烁</p>
<h3 id="category-数据缓存-覆盖初始数据" tabindex="-1"><a class="header-anchor" href="#category-数据缓存-覆盖初始数据" aria-hidden="true">#</a> category 数据缓存，覆盖初始数据</h3>
<p><strong>缓存请求得来的 vuex 中的数据，并且在下次运行时把缓存的数据作为初始值</strong></p>
<p>可以利用 <a href="https://github.com/robinvdvleuten/vuex-persistedstate" target="_blank" rel="noopener noreferrer">vuex-persistedstate<ExternalLinkIcon/></a></p>
<p><code>vuex-persistedstate</code>：可以自动保存 <code>vuex</code> 中的数据到 <code>localStorage</code>，并且在下次开始的时候自动读取这个数据到对应的 <code>state</code> 中</p>
<ol>
<li>安装 <strong>vuex-persistedstate</strong></li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i --save vuex-persistedstate@4.1.0
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="2">
<li>在 <code>src/store/index.js</code> 中导入，并注册 <code>plugin</code></li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> createPersistedState <span class="token keyword">from</span> <span class="token string">'vuex-persistedstate'</span>
<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token operator">...</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">createPersistedState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">// 保存到 localStorage 中的 key</span>
      <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'front-project'</span><span class="token punctuation">,</span>
      <span class="token comment">// 需要保存的模块</span>
      <span class="token literal-property property">paths</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'category'</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p><img src="@source/.vuepress/public/images/lol1.png" alt="图片"></p>
</template>
