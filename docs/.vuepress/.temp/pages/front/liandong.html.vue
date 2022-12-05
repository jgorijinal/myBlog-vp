<template><h1 id="多组件联动与高阶组件解决方案" tabindex="-1"><a class="header-anchor" href="#多组件联动与高阶组件解决方案" aria-hidden="true">#</a> 多组件联动与高阶组件解决方案</h1>
<h2 id="多组件联动整体逻辑分析" tabindex="-1"><a class="header-anchor" href="#多组件联动整体逻辑分析" aria-hidden="true">#</a> 多组件联动整体逻辑分析</h2>
<p>所谓的多组件联动，其实更准确一点来说，通常指的是：<strong>多个组件之间，存在一个或多个共享的数据。当数据发生改变时，执行对应的逻辑</strong></p>
<p>那么把这一句话拆分开来看，就是两部分：</p>
<ol>
<li>多组件之间需要共享数据</li>
<li>监听数据变化，并执行对应逻辑</li>
</ol>
<h4 id="多组件之间需要共享数据" tabindex="-1"><a class="header-anchor" href="#多组件之间需要共享数据" aria-hidden="true">#</a> 多组件之间需要共享数据</h4>
<p>多组件之间共享数据，通常有三种方式：</p>
<ol>
<li>组件之间的数据传递 — 常见于层级关系比较清晰的多组件之中</li>
</ol>
<ul>
<li>父传子</li>
<li>子传父</li>
<li>…</li>
</ul>
<ol start="2">
<li>依赖注入： <a href="https://v3.cn.vuejs.org/api/composition-api.html#provide-inject" target="_blank" rel="noopener noreferrer">Provide / Inject<ExternalLinkIcon/></a> — 嵌套层级比较深，并且子组件只需要父组件的部分内容</li>
<li>全局状态管理工具：<a href="https://vuex.vuejs.org/zh/index.html" target="_blank" rel="noopener noreferrer">Vuex<ExternalLinkIcon/></a> — 以上两种情况都不适用的情况下</li>
</ol>
<h4 id="监听数据变化的方式" tabindex="-1"><a class="header-anchor" href="#监听数据变化的方式" aria-hidden="true">#</a> 监听数据变化的方式</h4>
<p>当组件之间共享的数据发生变化时，需要执行对应的逻辑操作</p>
<p>那么在 <code>vue</code> 中监听数据变化的方式，首推就是 <code>watch</code></p>
<p>并且在刚才已经确定了共享的数据需要被保存到 <code>vuex</code> 中，所以就需要通过 <code>watch</code> 监听到 <code>vuex</code> 中共享数据的变化，然后在监听到变化时，执行对应的业务逻辑</p>
<h4 id="整体逻辑分析" tabindex="-1"><a class="header-anchor" href="#整体逻辑分析" aria-hidden="true">#</a> 整体逻辑分析</h4>
<p>那么根据分析，整体实现逻辑应该为：</p>
<ol>
<li>创建共享数据对应的 vuex 模块</li>
<li>在 <code>getters</code> 中建立对应的快捷访问计算属性</li>
<li>在对应的业务组件中，<code>watch</code> 监听 <code>getters</code>，并执行对应逻辑</li>
</ol>
<h2 id="简单联动处理-navigationbar-对应-list" tabindex="-1"><a class="header-anchor" href="#简单联动处理-navigationbar-对应-list" aria-hidden="true">#</a> 简单联动处理：navigationBar 对应 list</h2>
<p><img src="@source/.vuepress/public/images/liandong1.png" alt="图片"></p>
<p>现在期望当 <code>navigationBar</code> 中的 <code>item</code> 发生切换时，切换对应的 <code>list</code> 中的展示数据，那么根据刚才的分析，切换的关键就在于：<strong>共享数据的变化，引起的逻辑变化</strong></p>
<p>那么共享数据指的就是 <strong>被选中项</strong></p>
<p>目前无论是 <code>PC端</code> 下还是 <code>移动端</code> 下，被选中项都是在组件内部进行处理的，这肯定不符合现在的目的。现在期望共享的数据可以在 <code>Vuex</code> 中被维护</p>
<ol>
<li>创建 <code>src/store/modules/app.js</code> ，该模块下的数据 <strong>不会</strong> 被缓存</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">ALL_CATEGORY_ITEM</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/constants'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">namespaced</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token function-variable function">state</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// 当前选中的分类</span>
    <span class="token literal-property property">currentCategory</span><span class="token operator">:</span> <span class="token constant">ALL_CATEGORY_ITEM</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mutations</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 切换选中分类
     */</span>
    <span class="token function">changeCurrentCategory</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> newCategory</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      state<span class="token punctuation">.</span>currentCategory <span class="token operator">=</span> newCategory
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><ol start="2">
<li>在 <code>src/store/index.js</code> 完成注册，注意：<code>app</code> 模块不缓存</li>
<li>在 <code>src/store/getters.js</code> 中，提供两个快捷访问：</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span>
  <span class="token doc-comment comment">/**
   * category选中项
   */</span>
  <span class="token function-variable function">currentCategory</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token operator">=></span> state<span class="token punctuation">.</span>app<span class="token punctuation">.</span>currentCategory<span class="token punctuation">,</span>
  <span class="token doc-comment comment">/**
   * category选中项下标
   */</span>
  <span class="token function-variable function">currentCategoryIndex</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> getters</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> getters<span class="token punctuation">.</span>categorys<span class="token punctuation">.</span><span class="token function">findIndex</span><span class="token punctuation">(</span>
      <span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=></span> item<span class="token punctuation">.</span>id <span class="token operator">===</span> getters<span class="token punctuation">.</span>currentCategory<span class="token punctuation">.</span>id
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><ol start="4">
<li>接下来可以分别在 <code>PC 端 和 移动端</code>下触发 <code>changeCurrentCategory</code>：</li>
</ol>
<p><code>pc端 和 移动端</code>的逻辑代码全部要根据 Vuex 的数据需要改一改</p>
<ol start="5">
<li>接下来可以完成对应的 <code>list</code> 逻辑操作：</li>
</ol>
<p>在 <code>src/views/main/components/list/index.vue</code> 中</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">...</span>
<span class="token comment">// 请求参数</span>
<span class="token keyword">const</span> query <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">page</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token literal-property property">size</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
  <span class="token literal-property property">categoryId</span><span class="token operator">:</span> <span class="token string">'all'</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token operator">...</span>
<span class="token operator">...</span>
<span class="token doc-comment comment">/**
 * 重置 qeury 请求参数
*/</span>
<span class="token keyword">const</span> <span class="token function-variable function">resetQuery</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">newQueryObj</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  pexelsData<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  total<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token number">0</span>
  isLoading<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">false</span>
  isFinished<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">false</span>

  query<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token operator">...</span>query<span class="token punctuation">.</span>value<span class="token punctuation">,</span> <span class="token operator">...</span>newQueryObj<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">watch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> store<span class="token punctuation">.</span>getters<span class="token punctuation">.</span>currentCategory<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">currentCategory</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// 重置参数</span>
  <span class="token function">resetQuery</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">page</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token literal-property property">categoryId</span><span class="token operator">:</span>currentCategory<span class="token punctuation">.</span>id
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><p>那么至此完成了 <code>navigationBar</code> 对应 <code>list</code> 组件的联动效果</p>
<h2 id="明确-searchbar-对应-list-处理流程" tabindex="-1"><a class="header-anchor" href="#明确-searchbar-对应-list-处理流程" aria-hidden="true">#</a> 明确 searchBar 对应 list 处理流程</h2>
<p>searchBar 区域目前还缺少三部分的内容处理：</p>
<ul>
<li>搜索提示</li>
<li>搜索历史</li>
<li>推荐精选</li>
</ul>
<p>所以现在处理顺序是</p>
<ol>
<li>搜索提示</li>
<li>搜索历史</li>
<li>推荐精选</li>
<li><code>search</code> 触发时的 <code>list</code> 联动</li>
</ol>
<h3 id="searchbar-搜索提示的初步实现" tabindex="-1"><a class="header-anchor" href="#searchbar-搜索提示的初步实现" aria-hidden="true">#</a> searchBar : 搜索提示的初步实现</h3>
<p><img src="@source/.vuepress/public/images/sousuotishi1.png" alt="图片"></p>
<ol>
<li>在 <code>src/api/pexels.js</code> 定义 <strong>获取搜索提示</strong> 接口：</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 获取搜索提示
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">getHint</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">q</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'/pexels/hint'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      q
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><ol start="2">
<li>创建 <code>src/views/layout/components/header/header-search/hint.vue</code> 组件，作为 <strong>搜索提示</strong> 模块</li>
</ol>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
      <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(item, index) in hintData<span class="token punctuation">"</span></span>
      <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>index<span class="token punctuation">"</span></span>
      <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>py-1 pl-1 text-base font-bold text-zinc-500 rounded cursor-pointer duration-300 hover:bg-zinc-200 dark:hover:bg-zinc-900<span class="token punctuation">"</span></span>
      <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onItemClick(item)<span class="token punctuation">"</span></span>
    <span class="token punctuation">></span></span>
      {{ item }}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">const</span> <span class="token constant">EMITS_ITEM_CLICK</span> <span class="token operator">=</span> <span class="token string">'itemClick'</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> getHint <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/api/pexels'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> watch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>

<span class="token doc-comment comment">/**
 * 接收搜索数据
 */</span>
<span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">searchText</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
    <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token doc-comment comment">/**
 * item 被点击触发事件
 */</span>
<span class="token keyword">const</span> emits <span class="token operator">=</span> <span class="token function">defineEmits</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token constant">EMITS_ITEM_CLICK</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token doc-comment comment">/**
 * 处理搜索提示数据获取
 */</span>
<span class="token keyword">const</span> hintData <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">getHintData</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>props<span class="token punctuation">.</span>searchText<span class="token punctuation">)</span> <span class="token keyword">return</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> result <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getHint</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>searchText<span class="token punctuation">)</span>
  hintData<span class="token punctuation">.</span>value <span class="token operator">=</span> result
<span class="token punctuation">}</span>
<span class="token doc-comment comment">/**
 * 监听搜索文本的变化，并获取对应提示数据
 */</span>
<span class="token function">watch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> props<span class="token punctuation">.</span>searchText<span class="token punctuation">,</span> getHintData<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">immediate</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token doc-comment comment">/**
 * item 点击事件处理
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">onItemClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token function">emits</span><span class="token punctuation">(</span><span class="token constant">EMITS_ITEM_CLICK</span><span class="token punctuation">,</span> item<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br></div></div><ol start="3">
<li>在 <code>src/views/layout/components/header/header-search/index.vue</code> 中展示并做对应处理</li>
</ol>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>w-full<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>m-search</span>
      <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>inputValue<span class="token punctuation">"</span></span>
      <span class="token attr-name">@search</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onSearchHandler<span class="token punctuation">"</span></span>
      <span class="token attr-name">@clear</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onSearchHandler<span class="token punctuation">"</span></span>
    <span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#dropdown</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
          <span class="token comment">&lt;!-- 搜索提示 --></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hint-vue</span>
            <span class="token attr-name">:searchText</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>inputValue<span class="token punctuation">"</span></span>
            <span class="token attr-name">v-show</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>inputValue<span class="token punctuation">"</span></span>
            <span class="token attr-name">@itemClick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onSearchHandler<span class="token punctuation">"</span></span>
          <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>hint-vue</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>m-search</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> hintVue <span class="token keyword">from</span> <span class="token string">'./hint.vue'</span>

<span class="token keyword">const</span> inputValue <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span>

<span class="token comment">// 搜索的回调事件</span>
<span class="token keyword">const</span> <span class="token function-variable function">onSearchHandler</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  inputValue<span class="token punctuation">.</span>value <span class="token operator">=</span> val
<span class="token punctuation">}</span>

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><h3 id="searchbar-处理-防抖-功能" tabindex="-1"><a class="header-anchor" href="#searchbar-处理-防抖-功能" aria-hidden="true">#</a> searchBar ：处理 防抖 功能</h3>
<p>不过这样的防抖 <code>watch</code> 不需要自己进行实现，<code>vueuse</code> 中提供了对应的 <a href="https://vueuse.org/shared/watchDebounced/" target="_blank" rel="noopener noreferrer">watchDebounced（源码地址）<ExternalLinkIcon/></a> ，可以直接利用这个 <code>API</code> 直接实现防抖的 <code>watch</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 监听搜索文本的变化，并获取对应提示数据
 */</span>
<span class="token function">watchDebounced</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> props<span class="token punctuation">.</span>searchText<span class="token punctuation">,</span> getHintData<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">immediate</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// 每次事件触发时，延迟的时间</span>
  <span class="token literal-property property">debounce</span><span class="token operator">:</span> <span class="token number">500</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="searchbar-提示关键字高亮处理" tabindex="-1"><a class="header-anchor" href="#searchbar-提示关键字高亮处理" aria-hidden="true">#</a> searchBar ：提示关键字高亮处理</h3>
<p>在处理完成防抖之后，还期望提示列表中所有文本的关键字可以进行对应的<strong>高亮</strong>显示。</p>
<p>那么对于这样的功能，就需要构建对应的方法，生成包含 <strong>高亮标签</strong> 的 <code>html</code> 富文本。利用该富文本，替换原 <code>text</code> 文本。</p>
<p>所以需要首先构建出对应的方法：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 处理关键字高亮
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">highlightText</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">text</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// 生成高亮标签</span>
  <span class="token keyword">const</span> highlightStr <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;span class="text-zinc-900 dark:text-zinc-200"></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>props<span class="token punctuation">.</span>searchText<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/span></span><span class="token template-punctuation string">`</span></span>
  <span class="token comment">// 构建正则表达式，从《显示文本中》找出与《用户输入文本相同的内容》，使用《高亮标签》进行替换</span>
  <span class="token keyword">const</span> reg <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>searchText<span class="token punctuation">,</span> <span class="token string">'gi'</span><span class="token punctuation">)</span>
  <span class="token comment">// 替换</span>
  <span class="token keyword">return</span> text<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>reg<span class="token punctuation">,</span> highlightStr<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>通过 <code>v-html</code> 代替 <code>text</code> 渲染：</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
  <span class="token attr-name">...</span>
  <span class="token attr-name">v-html</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>highlightText(item)<span class="token punctuation">"</span></span>
  <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onItemClick(item)<span class="token punctuation">"</span></span>
<span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="searchbar-搜索历史处理" tabindex="-1"><a class="header-anchor" href="#searchbar-搜索历史处理" aria-hidden="true">#</a> searchBar：搜索历史处理</h3>
<p><img src="@source/.vuepress/public/images/sousuolishi1.png" alt="图片"></p>
<p>每次用户触发搜索时，当前的这次 <strong>搜索文本</strong> 会被作为 <strong>搜索历史</strong> 进行处理</p>
<p>因为搜索历史的数据需要进<strong>行本地的持久化处理</strong>，所以我们需要把该数据放入到 <code>vuex</code> 中。</p>
<p>同时提供对应的：</p>
<ul>
<li>插入</li>
<li>删除单个</li>
<li>清空
的三个 <code>mutation</code></li>
</ul>
<ol>
<li>创建 <code>src/store/modules/search.js</code> 模块：</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">namespaced</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token function-variable function">state</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">histories</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mutations</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 1. 新增的历史记录位于头部
     * 2. 不可出现重复的记录
     */</span>
    <span class="token function">addHistory</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> newHistory</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> isFindIndex <span class="token operator">=</span> state<span class="token punctuation">.</span>histories<span class="token punctuation">.</span><span class="token function">findIndex</span><span class="token punctuation">(</span>
        <span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=></span> item <span class="token operator">===</span> newHistory
      <span class="token punctuation">)</span>
      <span class="token comment">// 剔除旧数据</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>isFindIndex <span class="token operator">!==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        state<span class="token punctuation">.</span>histories<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>isFindIndex<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// 新增记录</span>
      state<span class="token punctuation">.</span>histories<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span>newHistory<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token doc-comment comment">/**
     * 删除指定数据
     */</span>
    <span class="token function">deleteHistory</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      state<span class="token punctuation">.</span>histories<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token doc-comment comment">/**
     * 删除所有历史记录
     */</span>
    <span class="token function">deleteAllHistory</span><span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      state<span class="token punctuation">.</span>histories <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><ol start="2">
<li>
<p>在 <code>src/store/index.js</code> 完成注册, 并且需要做<strong>缓存</strong>处理</p>
</li>
<li>
<p>在 <code>src/store/getters.js</code>中完成对应的快捷访问</p>
</li>
<li>
<p>创建搜索历史的处理组件 <code>src/views/layout/components/header/header-search/history.vue</code>：</p>
</li>
</ol>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>flex items-center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text-sm dark:text-zinc-400<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>最近搜索<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>m-svg-icon</span> 
        <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>delete<span class="token punctuation">"</span></span>
        <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>w-2.5 h-2.5 p-0.5 hover:bg-zinc-100 dark:hover:bg-zinc-500 ml-1 duration-200 cursor-pointer rounded-sm<span class="token punctuation">"</span></span>
        <span class="token attr-name">fillClass</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fill-zinc-400<span class="token punctuation">"</span></span>
        <span class="token attr-name">@click.stop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>deleteAllItems<span class="token punctuation">"</span></span>
      <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>m-svg-icon</span><span class="token punctuation">></span></span>  
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>flex my-1<span class="token punctuation">"</span></span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$store.getters.histories !== []<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item,index in $store.getters.histories<span class="token punctuation">"</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>index<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bg-zinc-100 dark:bg-zinc-400 dark:hover:bg-zinc-500 flex items-center cursor-pointer hover:bg-zinc-200 rounded-sm 
          px-1 py-0.5 duration-200 mr-1 mb-1<span class="token punctuation">"</span></span>
          <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>itemClick(item)<span class="token punctuation">"</span></span>
          <span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text-sm font-bold<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{item}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>m-svg-icon</span>
            <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>input-delete<span class="token punctuation">"</span></span>
            <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>w-2.5 h-2.5 p-0.5 ml-1 duration-300 rounded-sm  dark:bg-zinc-400 hover:bg-zinc-100
              dark:hover:bg-zinc-700<span class="token punctuation">"</span></span>
            <span class="token attr-name">@click.stop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>deleteItem(index)<span class="token punctuation">"</span></span>
          <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>m-svg-icon</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">const</span> <span class="token constant">EMITS_ITEM_CLICK</span> <span class="token operator">=</span> <span class="token string">'itemClick'</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> useStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vuex'</span>

<span class="token keyword">const</span> emits <span class="token operator">=</span> <span class="token function">defineEmits</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token constant">EMITS_ITEM_CLICK</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">useStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// 点击了某一个搜索历史 , 触发事件</span>
<span class="token keyword">const</span> <span class="token function-variable function">itemClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'点击了搜索历史'</span><span class="token punctuation">)</span>
  <span class="token function">emits</span><span class="token punctuation">(</span><span class="token constant">EMITS_ITEM_CLICK</span><span class="token punctuation">,</span> item<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 删除一个搜索历史</span>
<span class="token keyword">const</span> <span class="token function-variable function">deleteItem</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">index</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'删除搜索历史'</span><span class="token punctuation">)</span>
  store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">'search/deleteHistory'</span><span class="token punctuation">,</span> index<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 清空搜索历史</span>
<span class="token keyword">const</span> <span class="token function-variable function">deleteAllItems</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// TODO : 弹出对话框提示, 是否全部删除</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'删除全部'</span><span class="token punctuation">)</span>
  store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">'search/deleteAllHistory'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br></div></div><ol start="5">
<li>在 <code>src/views/layout/components/header/header-search/index.vue</code> 中使用该组件：</li>
</ol>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>w-full<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>m-search</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>inputValue<span class="token punctuation">"</span></span>
      <span class="token attr-name">@search</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onSearchHandler<span class="token punctuation">"</span></span>
    <span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#dropdown</span><span class="token punctuation">></span></span>
        <span class="token comment">&lt;!--搜索提示--></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hint-vue</span> <span class="token attr-name">:searchText</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>inputValue<span class="token punctuation">"</span></span> <span class="token attr-name">@itemClick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>hintClickHandler<span class="token punctuation">"</span></span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>inputValue<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>hint-vue</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-else</span><span class="token punctuation">></span></span>
          <span class="token comment">&lt;!--搜索历史--></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>history-vue</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>!inputValue<span class="token punctuation">"</span></span> <span class="token attr-name">@itemClick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onSearchHandler<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>history-vue</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>m-search</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="通用组件-confirm-应用场景" tabindex="-1"><a class="header-anchor" href="#通用组件-confirm-应用场景" aria-hidden="true">#</a> 通用组件 : confirm 应用场景</h2>
<p>目前当点击 <strong>删除全部</strong> 历史记录时，会直接删除，这样体验并不好，目前期望的是能够给用户一个 <strong>提示</strong> ，也就是 <code>confirm</code></p>
<p>所以期望能够构建出一个对应的 <code>confirm</code> 组件</p>
<p>但是对于 <code>confirm</code> 这种组件而言，不希望它通过标签的形式进行使用，而是期望可以像 <code>element-plus</code> 中的 <a href="https://element-plus.org/zh-CN/component/message-box.html#%E7%A1%AE%E8%AE%A4%E6%B6%88%E6%81%AF" target="_blank" rel="noopener noreferrer">confirm<ExternalLinkIcon/></a>一样，可以直接通过<strong>方法的形式</strong>进行调用，这样就太爽了</p>
<p>那么如果想要通过一个<strong>方法</strong>来进行一个<strong>组件的展示</strong>，并与其进行交互的话, 那应该怎么做呢....</p>
<h3 id="vnode-h函数-render函数-明确-confirm-构建思路" tabindex="-1"><a class="header-anchor" href="#vnode-h函数-render函数-明确-confirm-构建思路" aria-hidden="true">#</a> vNode + h函数 + render函数 明确 confirm 构建思路</h3>
<p><a href="https://v3.cn.vuejs.org/guide/render-function.html#dom-%E6%A0%91" target="_blank" rel="noopener noreferrer">渲染函数<ExternalLinkIcon/></a>, 在渲染函数中，需要了解如下概念：</p>
<ol>
<li>虚拟 <code>dom</code>：通过 <code>js</code> 来描述 <code>dom</code></li>
<li><code>vnode</code> 虚拟节点：告诉 <code>vue</code> 页面上需要渲染什么样子的节点</li>
<li><code>h</code> 函数：用来创建 <code>vnode</code> 的函数，接受三个参数 <code>(要渲染的 dom，attrs 对象，子元素)</code></li>
<li><code>render</code> 函数：可以根据 <code>vnode</code> 来渲染 <code>dom</code></li>
</ol>
<p><strong>通过 <code>h</code> 函数可以生成一个 <code>vnode</code>，该 <code>vnode</code> 可以通过 <code>render</code> 函数被渲染</strong></p>
<p>所以据此就可以得出 <code>confirm</code> 组件的实现思路：</p>
<ol>
<li>创建一个 <code>confirm</code> 组件</li>
<li>创建一个 <code>confirm.js</code> 模块，在该模块中 <strong>返回一个 promise</strong></li>
<li>同时利用 <code>h</code> 函数生成 <code>confirm.vue</code> 的 <code>vnode</code></li>
<li>最后利用 <code>render</code> 函数，渲染 <code>vnode</code> 到 <code>body</code> 中</li>
</ol>
<h3 id="构建-confirm-组件" tabindex="-1"><a class="header-anchor" href="#构建-confirm-组件" aria-hidden="true">#</a> 构建 confirm 组件</h3>
<p><img src="@source/.vuepress/public/images/confirm1.png" alt="图片"></p>
<ol>
<li>创建 <code>src/libs/confirm/index.vue</code> 组件，并创建对应的 <code>props</code>:</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// 标题</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> String
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 描述</span>
  <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
    <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 取消按钮文本</span>
  <span class="token literal-property property">cancelText</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
    <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">'取消'</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 确定按钮文本</span>
  <span class="token literal-property property">confirmText</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
    <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">'确定'</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 取消按钮事件</span>
  <span class="token literal-property property">cancelHandler</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> Function
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 确定按钮事件</span>
  <span class="token literal-property property">confirmHandler</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> Function
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 关闭 confirm 的回调</span>
  <span class="token literal-property property">close</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> Function
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><ol start="2">
<li>因为最终期望通过方法进行调用，这会导致 <strong>自动导入的组件无法使用</strong>，所以我们需要手动导入需要使用到的通用组件：</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 在方法调用的组件中，需要主动导入组件</span>
<span class="token keyword">import</span> mButton <span class="token keyword">from</span> <span class="token string">'../button/index.vue'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol start="3">
<li>创建对应的模板样式</li>
</ol>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!-- 蒙版 --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>transition</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fade<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
        <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>isVisible<span class="token punctuation">"</span></span>
        <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>close<span class="token punctuation">"</span></span>
        <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>w-screen h-screen bg-zinc-900/80 z-40 fixed top-0 left-0<span class="token punctuation">"</span></span>
      <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>transition</span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!-- 内容 --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>transition</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>up<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
        <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>isVisible<span class="token punctuation">"</span></span>
        <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>w-[80%] fixed top-1/3 left-[50%] translate-x-[-50%] z-50 px-2 py-1.5 rounded-sm border dark:border-zinc-600 cursor-pointer bg-white dark:bg-zinc-800 xl:w-[35%]<span class="token punctuation">"</span></span>
      <span class="token punctuation">></span></span>
        <span class="token comment">&lt;!-- 标题 --></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text-lg font-bold text-zinc-900 dark:text-zinc-200 mb-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          {{ title }}
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token comment">&lt;!-- 内容 --></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text-base text-zinc-900 dark:text-zinc-200 mb-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          {{ content }}
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token comment">&lt;!-- 按钮 --></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>flex justify-end<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>m-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>info<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mr-2<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onCancelClick<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{
            cancelText
          }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>m-button</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>m-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onConfirmClick<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{
            confirmText
          }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>m-button</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>transition</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
<span class="token selector">.fade-enter-active,
.fade-leave-active</span> <span class="token punctuation">{</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> all 0.5s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.fade-enter-from,
.fade-leave-to</span> <span class="token punctuation">{</span>
  <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.up-enter-active,
.up-leave-active</span> <span class="token punctuation">{</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> all 0.5s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.up-enter-from,
.up-leave-to</span> <span class="token punctuation">{</span>
  <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate3d</span><span class="token punctuation">(</span>-50%<span class="token punctuation">,</span> 100px<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br></div></div><ol start="4">
<li>创建展示控制方法，因为需要保留执行动画，所以我们在 <code>mounted</code> 时，让内容展示：</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 控制显示处理</span>
<span class="token keyword">const</span> isVisible <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>

<span class="token doc-comment comment">/**
 * confirm 展示
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">show</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  isVisible<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 页面构建完成之后，执行。保留动画
 */</span>
<span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><ol start="5">
<li>处理关闭控制方法，同样因为动画需要展示，所以我们需要预留动画执行时间：</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 过渡动画时长</span>
<span class="token keyword">const</span> duration <span class="token operator">=</span> <span class="token string">'0.5s'</span>

<span class="token comment">// confirm 关闭, 需保留动画执行时长</span>
<span class="token keyword">const</span> <span class="token function-variable function">close</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  isVisible<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">false</span>
  <span class="token comment">// ????? 为啥这样做 ???????????????</span>
  <span class="token comment">// 延迟一段时间进行关闭回调 , 因为要等待动画完全关闭之后, 在去触发 props.close()</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>props<span class="token punctuation">.</span>close<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      props<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>duration<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">'0.'</span><span class="token punctuation">,</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">'s'</span><span class="token punctuation">,</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">100</span> <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><ol start="6">
<li>利用 <a href="https://v3.cn.vuejs.org/api/sfc-style.html#%E7%8A%B6%E6%80%81%E9%A9%B1%E5%8A%A8%E7%9A%84%E5%8A%A8%E6%80%81-css" target="_blank" rel="noopener noreferrer">状态驱动 css 概念<ExternalLinkIcon/></a> 绑定响应式数据到 <code>css</code> 中：</li>
</ol>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
<span class="token selector">.fade-enter-active , .fade-leave-active</span> <span class="token punctuation">{</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> all <span class="token function">v-bind</span><span class="token punctuation">(</span>duration<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.fade-enter-from , .fade-leave-to</span> <span class="token punctuation">{</span>
  <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.up-enter-active , .up-leave-active</span> <span class="token punctuation">{</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> all <span class="token function">v-bind</span><span class="token punctuation">(</span>duration<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.up-enter-from , .up-leave-to</span> <span class="token punctuation">{</span>
  <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  // <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate3d</span><span class="token punctuation">(</span>-50%<span class="token punctuation">,</span> 100px<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-50%<span class="token punctuation">,</span>100px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><ol start="7">
<li>处理取消按钮和确定按钮的点击行为：</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 取消按钮点击事件
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">onCancelClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>props<span class="token punctuation">.</span>cancelHandler<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    props<span class="token punctuation">.</span><span class="token function">cancelHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 确定按钮点击事件
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">onConfirmClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>props<span class="token punctuation">.</span>confirmHandler<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    props<span class="token punctuation">.</span><span class="token function">confirmHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p><code>confirm</code> 组件本身，构建完成</p>
<h3 id="函数调用-confirm-组件" tabindex="-1"><a class="header-anchor" href="#函数调用-confirm-组件" aria-hidden="true">#</a> 函数调用 confirm 组件</h3>
<ol>
<li>
<p>创建 <code>src/libs/confirm/index.js</code> 文件</p>
</li>
<li>
<p>创建 <code>confirm</code> 方法，接收四个参数：</p>
</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 *
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">title</span> 标题
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">content</span> 文本
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">cancelText</span> 取消按钮文本
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">confirmText</span> 确定按钮文本
 * <span class="token keyword">@returns</span>
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> confirm <span class="token operator">=</span> <span class="token punctuation">(</span>
  title<span class="token punctuation">,</span>
  content<span class="token punctuation">,</span>
  cancelText <span class="token operator">=</span> <span class="token string">'取消'</span><span class="token punctuation">,</span>
  confirmText <span class="token operator">=</span> <span class="token string">'确定'</span>
<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><ol start="3">
<li>
<p>该方法应该 <code>return promise</code> （只有这样才可以通过 <code>.then</code> 监听到确定按钮事件）</p>
</li>
<li>
<p>该方法允许只传递 <code>content</code></p>
</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 允许只传递 content</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>title <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>content<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      content <span class="token operator">=</span> title
      title <span class="token operator">=</span> <span class="token string">''</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ol start="5">
<li>利用 <code>h</code> 函数生成 <code>vNode</code>，并利用 <code>render</code> 函数进行渲染：</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> h<span class="token punctuation">,</span> render <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> confirmComponent <span class="token keyword">from</span> <span class="token string">'./index.vue'</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">confirm</span> <span class="token operator">=</span> <span class="token punctuation">(</span>
  <span class="token parameter"><span class="token operator">...</span></span>
<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>

    <span class="token comment">// 关闭弹层事件</span>
    <span class="token keyword">const</span> <span class="token function-variable function">close</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token function">render</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> document<span class="token punctuation">.</span>body<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 取消按钮事件</span>
    <span class="token keyword">const</span> <span class="token function-variable function">cancelHandler</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token function">reject</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">'取消按钮点击'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 确定按钮事件</span>
    <span class="token keyword">const</span> <span class="token function-variable function">confirmHandler</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 1. vnode</span>
    <span class="token keyword">const</span> vNode <span class="token operator">=</span> <span class="token function">h</span><span class="token punctuation">(</span>confirmComponent<span class="token punctuation">,</span> <span class="token punctuation">{</span>
      title<span class="token punctuation">,</span>
      content<span class="token punctuation">,</span>
      cancelText<span class="token punctuation">,</span>
      confirmText<span class="token punctuation">,</span>
      confirmHandler<span class="token punctuation">,</span>
      cancelHandler<span class="token punctuation">,</span>
      close
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token comment">// 2. render</span>
    <span class="token function">render</span><span class="token punctuation">(</span>vNode<span class="token punctuation">,</span> document<span class="token punctuation">.</span>body<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div><ol start="6">
<li>在 <code>src/libs/index.js</code> 中执行导入并导出：</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token punctuation">{</span> confirm <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./confirm'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="7">
<li>在 <code>src/views/layout/components/header/header-search/history.vue</code> 中进行触发：</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 删除所有记录
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">deleteAllItems</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token function">confirm</span><span class="token punctuation">(</span><span class="token string">'要删除所有历史记录吗？'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">'search/deleteAllHistory'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></template>
