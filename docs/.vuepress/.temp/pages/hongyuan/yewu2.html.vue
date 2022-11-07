<template><h1 id="业务-2" tabindex="-1"><a class="header-anchor" href="#业务-2" aria-hidden="true">#</a> 业务 (2)</h1>
<h2 id="主页房屋列表模块组件封装" tabindex="-1"><a class="header-anchor" href="#主页房屋列表模块组件封装" aria-hidden="true">#</a> 主页房屋列表模块组件封装</h2>
<h3 id="请求数据" tabindex="-1"><a class="header-anchor" href="#请求数据" aria-hidden="true">#</a> 请求数据</h3>
<p><strong>这里数据请求也是要在 Pinia 里封装</strong></p>
<p>service/modules/home.js <strong>api 接口</strong>
<img src="@source/.vuepress/public/images/house1.png" alt="图片"></p>
<p>store/modules/home.js <strong>Pinia 封装请求 action</strong>
<img src="@source/.vuepress/public/images/house2.png" alt="图片"></p>
<p>home.vue 一进入主页, 就发起网络请求
<img src="@source/.vuepress/public/images/house3.png" alt="图片"></p>
<h3 id="房屋信息的两种显示方式-v9-和-v3" tabindex="-1"><a class="header-anchor" href="#房屋信息的两种显示方式-v9-和-v3" aria-hidden="true">#</a> 房屋信息的两种显示方式 -  v9 和 v3</h3>
<p><img src="@source/.vuepress/public/images/fangwu1.png" alt="图片"></p>
<p>home-house-list.vue</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>house-list<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item in houseList<span class="token punctuation">"</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item.data.houseId<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>house-item-v9</span>
        <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item.discoveryContentType === 9<span class="token punctuation">"</span></span>
        <span class="token attr-name">:item-data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item.data<span class="token punctuation">"</span></span>
      <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>house-item-v3</span>
        <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item.discoveryContentType === 3<span class="token punctuation">"</span></span>
        <span class="token attr-name">:item-data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item.data<span class="token punctuation">"</span></span>
      <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>moreListClick<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>加载更多<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> useHomeStore <span class="token keyword">from</span> <span class="token string">"@/store/modules/home"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> storeToRefs <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"pinia"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> houseItemV9 <span class="token keyword">from</span> <span class="token string">"@/components/house-item-v9/house-item-v9.vue"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> houseItemV3 <span class="token keyword">from</span> <span class="token string">"@/components/house-item-v3/house-item-v3.vue"</span><span class="token punctuation">;</span>
<span class="token comment">// 房屋列表 : Pinia 里获取</span>
<span class="token keyword">const</span> homeStore <span class="token operator">=</span> <span class="token function">useHomeStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> houseList <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">storeToRefs</span><span class="token punctuation">(</span>homeStore<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 记载更多按钮</span>
<span class="token keyword">const</span> <span class="token function-variable function">moreListClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  homeStore<span class="token punctuation">.</span><span class="token function">fetchHouseList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>less<span class="token punctuation">"</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
<span class="token selector">.house-list</span> <span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 6px<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">flex-wrap</span><span class="token punctuation">:</span> wrap<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><p><img src="@source/.vuepress/public/images/fw2.png" alt="图片"></p>
<p>渲染模板, 布局...</p>
<h3 id="到达底部自动加载更多" tabindex="-1"><a class="header-anchor" href="#到达底部自动加载更多" aria-hidden="true">#</a> 到达底部自动加载更多</h3>
<p>先要分清楚什么在滚动?</p>
<ul>
<li>windows 页面在滚动</li>
<li>还是某一个元素在滚动 (一般会设置一个固定的高度, overflow-y:auto 😉</li>
</ul>
<p><strong>但是 home 页面他实际滚动的是 windows 整个页面</strong> ,所以<strong>监听 window 的滚动</strong></p>
<p><img src="@source/.vuepress/public/images/gd1.png" alt="图片"></p>
<h3 id="监听滚动的-hooks-函数的抽取-usescroll" tabindex="-1"><a class="header-anchor" href="#监听滚动的-hooks-函数的抽取-usescroll" aria-hidden="true">#</a> 监听滚动的 Hooks 函数的抽取 -  useScroll</h3>
<p>续 上一节 :</p>
<ol>
<li><strong>当我们离开页面时 , 需要移除 window 上的监听, 避免影响到其他页面</strong></li>
<li><strong>如果别的页面也会实现类似的功能, 会产生重复的代码</strong></li>
</ol>
<p><strong>所以抽取逻辑代码, 封装成一个 useScroll 的 Hooks</strong></p>
<p>Hooks/useScroll.js 需要一些细节, 比如: <strong>(1)在 onUnmounted 移除监听器, (2)缓存组件的生命周期也要同样处理..</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 监听是否到达了页面的底部</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span>onMounted<span class="token punctuation">,</span> onUnmounted <span class="token punctuation">,</span>onActivated<span class="token punctuation">,</span>onDeactivated<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">useScroll</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token comment">// 是否到达底部</span>
<span class="token keyword">const</span> isReachBottom <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">scrollListener</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
<span class="token keyword">const</span> scrollHeight <span class="token operator">=</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>scrollHeight
<span class="token keyword">const</span> clientHeight <span class="token operator">=</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>clientHeight
<span class="token keyword">const</span> scrollTop <span class="token operator">=</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>scrollTop
<span class="token keyword">if</span> <span class="token punctuation">(</span>scrollHeight <span class="token operator">&lt;=</span> clientHeight <span class="token operator">+</span> scrollTop<span class="token punctuation">)</span> <span class="token punctuation">{</span>
isReachBottom<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'scroll'</span><span class="token punctuation">,</span> scrollListener<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token function">onActivated</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'scroll'</span><span class="token punctuation">,</span> scrollListener<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 取消监听</span>
<span class="token function">onUnmounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
window<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">'scroll'</span><span class="token punctuation">,</span> scrollListener<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token function">onDeactivated</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
window<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">'scroll'</span><span class="token punctuation">,</span> scrollListener<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">return</span> <span class="token punctuation">{</span>
  isReachBottom
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><p><strong>其实在这个Hooks 里面返回了一个叫 <code>isReachBottom</code> 的响应式变量, 但为什么不直接传递了具体的回调呢?</strong></p>
<ul>
<li>答 : 因为如果在 Hooks 里面传入很多个回调的话, 维护起来它们非常麻烦 , 所以在 hooks 里面直接声明一个变量, 他会判断是否到达了页面的底部
所以当我们使用这个 hooks 的时候 , 可以获取到这个变量, 在组件内部根据变量的值做条件判断执行一些属于他们自己的回调的话, 那么就更合理一些了</li>
</ul>
<p>比如:</p>
<p><img src="@source/.vuepress/public/images/reach1.png" alt="图片"></p>
<h3 id="页面滚动到一定的高度时-显示搜索栏-scrolltop" tabindex="-1"><a class="header-anchor" href="#页面滚动到一定的高度时-显示搜索栏-scrolltop" aria-hidden="true">#</a> 页面滚动到一定的高度时, 显示搜索栏 - scrollTop</h3>
<p>同样也要监听页面的滚动高度 , 但这个功能已经在 useScroll Hooks 里面实现过, <strong>但怎么导出 scrollTop 变量?</strong></p>
<p><img src="@source/.vuepress/public/images/usescroll1.png" alt="图片"></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>searchVisible<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>搜索栏&lt;/div
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 搜索栏 先手/隐藏</span>
<span class="token keyword">const</span> searchVisible <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
<span class="token comment">// Hooks 里获取滚动的高度, watch 监听</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> scrollTop <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useScroll</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">watch</span><span class="token punctuation">(</span>scrollTop <span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">newValue</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>newValue <span class="token operator">></span> <span class="token number">100</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    searchVisible<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    searchVisible<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p><strong>或者</strong> 可以使用<strong>计算属性</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> scrollTop <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useScroll</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> searchVisible <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
  <span class="token keyword">return</span> scrollTop<span class="token punctuation">.</span>value <span class="token operator">>=</span> <span class="token number">200</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="节流的处理" tabindex="-1"><a class="header-anchor" href="#节流的处理" aria-hidden="true">#</a> 节流的处理</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> underscore
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="@source/.vuepress/public/images/thth1.png" alt="图片"></p>
<h2 id="search-bar-搜索框的封装和展示" tabindex="-1"><a class="header-anchor" href="#search-bar-搜索框的封装和展示" aria-hidden="true">#</a> search-bar 搜索框的封装和展示</h2>
<p><img src="@source/.vuepress/public/images/sbar1.png" alt="图片"></p>
<p>如图 , 日期在很多组件都会用到, 所以这里创建一个新的 store 叫做 <strong>useMainStore</strong></p>
<p>之前做的关于日期的处理, 数据在 mainStore 中保存
<img src="@source/.vuepress/public/images/mainStore1.png" alt="图片"></p>
<p>需要重构之前的 home-search-box.vue 里的日期选择逻辑代码, 从 mainStore 读取日期并重新设置日期 ...</p>
<p><strong>在回到 search-bar.vue</strong>
<img src="@source/.vuepress/public/images/sbar3.png" alt="图片"></p>
<h2 id="loading-组件的封装-axios-拦截器" tabindex="-1"><a class="header-anchor" href="#loading-组件的封装-axios-拦截器" aria-hidden="true">#</a> Loading 组件的封装 (Axios 拦截器)</h2>
<p>loading 组件是通过 <code>v-if</code> 显示或者隐藏, 这里<strong>把 isLoading 变量放到的 mainStore 中</strong>, 方便管理</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>loading<span class="token punctuation">"</span></span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mainStore.isLoading<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>loadingClick<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>@/assets/img/home/full-screen-loading.gif<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>加载中...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> useMainStore <span class="token keyword">from</span> <span class="token string">'@/store/modules/main'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> mainStore <span class="token operator">=</span> <span class="token function">useMainStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// 点击了遮罩层的某一位置</span>
<span class="token keyword">const</span> <span class="token function-variable function">loadingClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  useMainStore<span class="token punctuation">.</span>isLoading <span class="token operator">=</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>less<span class="token punctuation">"</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  <span class="token selector">.loading</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> fixed<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">z-index</span><span class="token punctuation">:</span>999<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
    <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token selector">.bg</span> <span class="token punctuation">{</span>
      <span class="token property">width</span><span class="token punctuation">:</span>104px<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span>104px<span class="token punctuation">;</span>
      <span class="token property">background</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>@/assets/img/home/loading-bg.png<span class="token punctuation">)</span></span> 0 0 / 100% 100%<span class="token punctuation">;</span>
      <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
      <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
      <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
      <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
      <span class="token property">position</span><span class="token punctuation">:</span>relative<span class="token punctuation">;</span>
      <span class="token selector">img</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span>70px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span>70px<span class="token punctuation">;</span>
        <span class="token property">margin-bottom</span><span class="token punctuation">:</span>8px<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token selector">.text</span> <span class="token punctuation">{</span>
        <span class="token property">position</span><span class="token punctuation">:</span>absolute<span class="token punctuation">;</span>
        <span class="token property">bottom</span><span class="token punctuation">:</span>20%<span class="token punctuation">;</span>
        <span class="token property">transform</span><span class="token punctuation">:</span><span class="token function">translateX</span><span class="token punctuation">(</span>10%<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>103<span class="token punctuation">,</span> 101<span class="token punctuation">,</span> 101<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br></div></div><p>至于什么时候显示, 什么时候关闭 -&gt; 在 <strong>Axios 拦截器统一实现</strong></p>
<p><img src="@source/.vuepress/public/images/lan1.png" alt="图片"></p>
<p>还有需要注意的是 loading 组件本身要存在, 所以把<strong>它默认创建在 App.vue 页面里面</strong></p>
</template>
