<template><h1 id="动态组件" tabindex="-1"><a class="header-anchor" href="#动态组件" aria-hidden="true">#</a> 动态组件</h1>
<h2 id="基本使用" tabindex="-1"><a class="header-anchor" href="#基本使用" aria-hidden="true">#</a> 基本使用</h2>
<p>动态组件是使用 <strong><code>component</code>组件</strong>, 通过 <strong>一个特殊的attribute <code>is</code></strong> 实现
<img src="@source/.vuepress/public/images/currentTab.png" alt="图片">
这个<code>currentTab</code>的中需要的内容:</p>
<ul>
<li>可以是通过 <strong><code>component</code>函数注册的组件</strong></li>
<li>在<strong>一个组件对象的<code>components</code>对象中注册的组件</strong></li>
</ul>
<p>具体代码:</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tab in tabs<span class="token punctuation">"</span></span>
            <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tab<span class="token punctuation">"</span></span>
            <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{active:currentTab === tab}<span class="token punctuation">"</span></span>
            <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tabClick(tab)<span class="token punctuation">"</span></span>
    <span class="token punctuation">></span></span>{{ tab }}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>component</span> <span class="token attr-name">:is</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>currentTab<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>component</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> home <span class="token keyword">from</span> <span class="token string">'./components/home.vue'</span>
<span class="token keyword">import</span> about <span class="token keyword">from</span> <span class="token string">'./components/about.vue'</span>
<span class="token keyword">import</span> category <span class="token keyword">from</span> <span class="token string">'./components/category.vue'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>category<span class="token punctuation">,</span> home<span class="token punctuation">,</span> about<span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">tabs</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'home'</span><span class="token punctuation">,</span> <span class="token string">'about'</span><span class="token punctuation">,</span> <span class="token string">'category'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">currentTab</span><span class="token operator">:</span> <span class="token string">'home'</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">tabClick</span><span class="token punctuation">(</span><span class="token parameter">tab</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>currentTab <span class="token operator">=</span> tab
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
<span class="token selector">button</span> <span class="token punctuation">{</span>
  <span class="token selector">&amp;.active</span> <span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div><p><img src="@source/.vuepress/public/images/componentProps.png" alt="图片">
<code>component</code>组件也可以传入 <code>props</code> 和事件 , 子组件可以接受<code>props</code>和<code>emits</code>来触发</p>
<h2 id="keep-alive" tabindex="-1"><a class="header-anchor" href="#keep-alive" aria-hidden="true">#</a> keep-alive</h2>
<p>在默认情况下,我们在<strong>切换组件后</strong>, <strong>被切换的组件会被销毁掉</strong>, 再次回来<strong>会重新创建组件</strong></p>
<p>但是某些情况我们希望组建继续保持组建的状态, 而不是销毁掉, 这个时候可以<strong>使用一个内置组件<code>keep-alive</code></strong></p>
<p><img src="@source/.vuepress/public/images/keep-alive.png" alt="图片"></p>
<p>keep-alive 属性
<img src="@source/.vuepress/public/images/keep-alive2.png" alt="图片"></p>
</template>
