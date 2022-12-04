<template><h1 id="长列表组件-infinite-图片懒加载-自定义指令" tabindex="-1"><a class="header-anchor" href="#长列表组件-infinite-图片懒加载-自定义指令" aria-hidden="true">#</a> 长列表组件 infinite + 图片懒加载(自定义指令)</h1>
<h2 id="长列表组件-infinite" tabindex="-1"><a class="header-anchor" href="#长列表组件-infinite" aria-hidden="true">#</a> 长列表组件 infinite</h2>
<h4 id="长列表实现原理" tabindex="-1"><a class="header-anchor" href="#长列表实现原理" aria-hidden="true">#</a> 长列表实现原理</h4>
<p>所谓长列表分页加载, 其实指的是: <strong>当滚动到列表底部时, 加载数据</strong></p>
<p>需要做的核心的一点就是能够 <strong>监听到列表滚动到底部</strong></p>
<p>那么想要监听到列表滚动到底部的话，可以利用 <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/IntersectionObserver" target="_blank" rel="noopener noreferrer">IntersectionObserver<ExternalLinkIcon/></a>，该接口可以判断：<strong>目标元素与其祖先元素或顶级文档视窗(viewport)的交叉状态（是否可见）</strong></p>
<p>那么就可以利用这个特性，把一个元素 <strong>置于列表底部</strong>，当这个元素可见时则表示 <strong>列表滚动到了底部</strong></p>
<p>那么原生的 <code>IntersectionObserver</code> 使用起来比较复杂，所以 <code>vueuse</code> 提供了 <a href="https://vueuse.org/core/useIntersectionObserver/" target="_blank" rel="noopener noreferrer">useIntersectionObserver<ExternalLinkIcon/></a> 方法</p>
<h4 id="使用长列表时-希望如何进行使用" tabindex="-1"><a class="header-anchor" href="#使用长列表时-希望如何进行使用" aria-hidden="true">#</a> 使用长列表时，希望如何进行使用</h4>
<p>分析一下它的使用方法以及接受的 <strong>props</strong></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>&lt;m-infinite-list
  v-model="" // 当前是否处于加载状态
  :isFinished="" // 数据是否全部加载完成
  @onLoad="" // 加载下一页数据的触发事件
>
	列表
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>m-infinite-list</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="构建长列表-infinite-组件" tabindex="-1"><a class="header-anchor" href="#构建长列表-infinite-组件" aria-hidden="true">#</a> 构建长列表 infinite 组件</h3>
<p><img src="@source/.vuepress/public/images/infi1.png" alt="图片"></p>
<p>创建 <code>src/libs/infinite-list/index.vue</code> 组件</p>
<ol>
<li>构建 <code>props</code> 与 <code>emits</code>，并处理双向数据绑定逻辑</li>
</ol>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// 是否处于加载状态</span>
  <span class="token literal-property property">modelValue</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> Boolean<span class="token punctuation">,</span>
    <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 数据是否全部加载完成 </span>
  <span class="token literal-property property">isFinished</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> Boolean<span class="token punctuation">,</span>
    <span class="token keyword">default</span><span class="token operator">:</span><span class="token boolean">false</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> emits <span class="token operator">=</span> <span class="token function">defineEmits</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'update:modelValue'</span><span class="token punctuation">,</span> <span class="token string">'onLoad'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><ol start="2">
<li>构建对应视图与插槽逻辑</li>
</ol>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!--列表内容--></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>loadingRef<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token comment">&lt;!--加载图标--></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>m-svg-icon</span>
        <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>!isFinished<span class="token punctuation">"</span></span>
        <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>infinite-load<span class="token punctuation">"</span></span>
        <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mx-auto w-4 h-4 animate-spin mb-1<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
      <span class="token comment">&lt;!--没有更多数据了--></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>isFinished<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text-center text-base text-zinc-400 pb-1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>数据已经全部加载完成<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><ol start="3">
<li>利用 <a href="https://vueuse.org/core/useIntersectionObserver/" target="_blank" rel="noopener noreferrer">useIntersectionObserver<ExternalLinkIcon/></a> 方法，监听元素可见行为，用于判断列表滚动到底部：</li>
</ol>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useIntersectionObserver <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vueuse/core'</span>
<span class="token operator">...</span>
<span class="token operator">...</span>
<span class="token keyword">const</span> loadingRef <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
<span class="token function">useIntersectionObserver</span><span class="token punctuation">(</span>
    loadingRef<span class="token punctuation">,</span>
    <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">[</span><span class="token punctuation">{</span> isIntersecting <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span> observerElement</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>isIntersecting <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>props<span class="token punctuation">.</span>modelValue <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>props<span class="token punctuation">.</span>isFinished<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 加载状态设为 true</span>
        <span class="token function">emits</span><span class="token punctuation">(</span><span class="token string">'update:modelValue'</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
        <span class="token comment">// 说明已经到达了底部, 触发 onLoad 事件</span>
        <span class="token function">emits</span><span class="token punctuation">(</span><span class="token string">'onLoad'</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!--列表内容--></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>loadingRef<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      ....
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="应用-infinite-list-组件-结合-waterfall-实现请求下一页逻辑处理" tabindex="-1"><a class="header-anchor" href="#应用-infinite-list-组件-结合-waterfall-实现请求下一页逻辑处理" aria-hidden="true">#</a> 应用 infinite-list 组件 结合 waterfall 实现请求下一页逻辑处理</h3>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>containerId<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>m-infinite-list</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>isLoading<span class="token punctuation">"</span></span> <span class="token attr-name">:isFinished</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>isFinished<span class="token punctuation">"</span></span> <span class="token attr-name">@onLoad</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>getPexelsData<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>m-waterfull</span> <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>pexelsData<span class="token punctuation">"</span></span> <span class="token attr-name">:column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>isMobileTerminal ? 2 : 5<span class="token punctuation">"</span></span> <span class="token attr-name">nodeKey</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>id<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>w-full px-1<span class="token punctuation">"</span></span> <span class="token attr-name">:picturePreReading</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>false<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">v-slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{item, width}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>item-vue</span> <span class="token attr-name">:item</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item<span class="token punctuation">"</span></span> <span class="token attr-name">:width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>item-vue</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>m-waterfull</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>m-infinite-list</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> itemVue <span class="token keyword">from</span> <span class="token string">'./item.vue'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> getPexelsList <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/api/pexels'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> isMobileTerminal <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/utils/flexible'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token comment">// 图片列表</span>
<span class="token keyword">const</span> pexelsData <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment">// 当前页码</span>
<span class="token keyword">const</span> page <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token comment">// 一页数量</span>
<span class="token keyword">const</span> size <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span>
<span class="token comment">// 总数据数</span>
<span class="token keyword">const</span> total <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

<span class="token comment">// infinite-list 长列表组件相关逻辑</span>
<span class="token keyword">const</span> isLoading <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> isFinished <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">getPexelsData</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// 如果 isFinished 为 true , 则 return</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>isFinished<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> 
  <span class="token punctuation">}</span>

  isLoading<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">true</span>

  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getPexelsList</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">page</span><span class="token operator">:</span> page<span class="token punctuation">.</span>value<span class="token punctuation">,</span>
    <span class="token literal-property property">size</span><span class="token operator">:</span>size<span class="token punctuation">.</span>value
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>list<span class="token punctuation">)</span>
  <span class="token comment">// 注意 : 要追加数据!</span>
  pexelsData<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>pexelsData<span class="token punctuation">.</span>value<span class="token punctuation">,</span> <span class="token operator">...</span>res<span class="token punctuation">.</span>list<span class="token punctuation">]</span>
  total<span class="token punctuation">.</span>value <span class="token operator">=</span> res<span class="token punctuation">.</span>total

  isLoading<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">false</span>
  <span class="token comment">// 让 page 页码自增</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span>list<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    page<span class="token punctuation">.</span>value<span class="token operator">++</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 如果数据全部加载完, isFinished 设为 true</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>total<span class="token punctuation">.</span>value <span class="token operator">===</span> pexelsData<span class="token punctuation">.</span>value<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    isFinished<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token function">getPexelsData</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br></div></div><h2 id="懒加载" tabindex="-1"><a class="header-anchor" href="#懒加载" aria-hidden="true">#</a> 懒加载</h2>
<h3 id="懒加载原理" tabindex="-1"><a class="header-anchor" href="#懒加载原理" aria-hidden="true">#</a> 懒加载原理</h3>
<p><strong>当图片不可见时，不加载图片。当图片可见时，才去加载图片。</strong></p>
<p><strong>可以监听所有图片是否被可见，如果图片处于不可见状态，那么就不加载图片，如果图片处于可见状态，那么开始加载图片。</strong></p>
<p>而这个功能的实现关键就是 <strong><code>IntersectionObserver</code></strong></p>
<h3 id="通用指令-v-lazy-实现图片懒加载" tabindex="-1"><a class="header-anchor" href="#通用指令-v-lazy-实现图片懒加载" aria-hidden="true">#</a> 通用指令： v-lazy 实现图片懒加载</h3>
<p>那么多的 <code>img</code> 标签怎么一个个监听到呢？</p>
<p>那么想要监听到所有 <code>img</code> 标签，可以利用<strong>指令</strong>来进行实现</p>
<p>比如可以给所有的 <code>img</code> 增加一个 <strong><code>v-lazy</code> 指令</strong>，在这个指令中可以拿到 <code>el</code> 也就是 <code>img</code> 标签本身，这样就可以监听到所有的 <code>img</code> 标签状态</p>
<ol>
<li>创建 <code>src/directives/modules/lazy.js</code> 文件：</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useIntersectionObserver <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vueuse/core'</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token parameter">el</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//1.  拿到当前 img 标签的 src 属性</span>
    <span class="token keyword">const</span> imgSrc <span class="token operator">=</span> el<span class="token punctuation">.</span>src
    <span class="token comment">// 2. 把 img 标签的 src 替换为本地地址，也可以替换为空或者一个透明的图片</span>
    el<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token string">''</span>

    <span class="token keyword">const</span> <span class="token punctuation">{</span> stop <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useIntersectionObserver</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">[</span><span class="token punctuation">{</span> isIntersecting <span class="token punctuation">}</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>isIntersecting<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 到了可见范围内, 就去 src 赋值</span>
        el<span class="token punctuation">.</span>src <span class="token operator">=</span> imgSrc
        <span class="token comment">// 加载完图片, 就取消监听</span>
        <span class="token function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><ol start="2">
<li>然后在 <code>src/directives/index.js</code> 完成对应注册</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> lazy <span class="token keyword">from</span> <span class="token string">'./modules/lazy'</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">install</span><span class="token punctuation">(</span><span class="token parameter">app</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    app<span class="token punctuation">.</span><span class="token function">directive</span><span class="token punctuation">(</span><span class="token string">'lazy'</span><span class="token punctuation">,</span>lazy<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ol start="3">
<li>
<p>在 <code>main.js</code> 中触发 <code>app.use()</code></p>
</li>
<li>
<p>全局替换所有的 <code>img</code> 标签为 <code>&lt;img v-lazy&gt;</code></p>
</li>
</ol>
<h2 id="指令的自动注册" tabindex="-1"><a class="header-anchor" href="#指令的自动注册" aria-hidden="true">#</a> 指令的自动注册</h2>
<p>此时在 <code>src/directives/index.js</code> 中，面临了一个和注册组件时的同样问题，那就是：*<strong>如果指令过多，那么一个一个注册未免过于麻烦了</strong>。所以最好有一种方式完成 <strong>指令的自动注册</strong></p>
<p>那么想要完成这个功能我们依然要利用 <a href="https://cn.vitejs.dev/guide/features.html#glob-import" target="_blank" rel="noopener noreferrer">Glob导入（import.meta.globEager）<ExternalLinkIcon/></a> 和 <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/entries" target="_blank" rel="noopener noreferrer">Object.entries<ExternalLinkIcon/></a> 功能：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 全局指令注册
 */</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token keyword">async</span> <span class="token function">install</span><span class="token punctuation">(</span><span class="token parameter">app</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// https://cn.vitejs.dev/guide/features.html#glob-import</span>
    <span class="token comment">// import.meta.globEager 为同步导入</span>
    <span class="token keyword">const</span> directives <span class="token operator">=</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span><span class="token function">globEager</span><span class="token punctuation">(</span><span class="token string">'./modules/*.js'</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token punctuation">[</span>key<span class="token punctuation">,</span> value<span class="token punctuation">]</span> <span class="token keyword">of</span> Object<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span>directives<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 拼接组件注册的 name</span>
      <span class="token keyword">const</span> arr <span class="token operator">=</span> key<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">)</span>
      <span class="token keyword">const</span> directiveName <span class="token operator">=</span> arr<span class="token punctuation">[</span>arr<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">'.js'</span><span class="token punctuation">,</span> <span class="token string">''</span><span class="token punctuation">)</span>
      <span class="token comment">// 完成注册</span>
      app<span class="token punctuation">.</span><span class="token function">directive</span><span class="token punctuation">(</span>directiveName<span class="token punctuation">,</span> value<span class="token punctuation">.</span>default<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="指定彩色占位图" tabindex="-1"><a class="header-anchor" href="#指定彩色占位图" aria-hidden="true">#</a> 指定彩色占位图</h2>
<p><img src="@source/.vuepress/public/images/suijiyanse1.png" alt="图片"></p>
<p>通常情况下异步的处理，特别是异步的图片处理都会指定一个占位图来进行实现，比如常见的 <a href="https://element-plus.org/zh-CN/component/skeleton.html" target="_blank" rel="noopener noreferrer">骨架屏<ExternalLinkIcon/></a></p>
<p>但是这里不使用骨架屏，而是采用了另外一种 <strong>色彩图</strong> 的形式进行展示</p>
<ul>
<li>封装一个生成随机方法的工具函数</li>
<li>然后在 <code>div</code> 绑定背景颜色 <code>:style</code></li>
</ul>
<ol>
<li>新建 <code>src/utils/color.js</code> 模块，创建生成随机色方法</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 生成随机色值
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">randomRGB</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> r <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">255</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> g <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">255</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> b <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">255</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">rgb(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>r<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>g<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>b<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">)</span><span class="token template-punctuation string">`</span></span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ol start="2">
<li>在 <code>src/views/main/components/list/item.vue</code> 中生成随机背景色</li>
</ol>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> 
      <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>relative rounded-md<span class="token punctuation">"</span></span>
      <span class="token attr-name">:style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{backgroundColor: randomRGB()}<span class="token punctuation">"</span></span>
      <span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">&nbsp;</div><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<ol>
<li>瀑布流</li>
<li>长列表</li>
<li>懒加载</li>
<li>指令自动注册</li>
<li>随机颜色背景
…</li>
</ol>
<p>但是现在对于首页而言，所欠缺的内容还是比较多的，比如：</p>
<ol>
<li><code>search</code> 模块到首页的联动</li>
<li><code>item</code> 上的点击处理</li>
</ol>
</template>
