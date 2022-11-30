<template><h1 id="主题替换解决方案" tabindex="-1"><a class="header-anchor" href="#主题替换解决方案" aria-hidden="true">#</a> 主题替换解决方案</h1>
<h2 id="主题替换原理分析" tabindex="-1"><a class="header-anchor" href="#主题替换原理分析" aria-hidden="true">#</a> 主题替换原理分析</h2>
<p><strong>所有的样式都是由 <code>css</code> 来进行决定的</strong> ，那么主题替换说白了就是一个 <strong>样式发生改变</strong> 的问题，那么针对于这种问题，同样是通过 <code>css</code> 来进行处理的</p>
<p>新建一个 <code>html</code> 文件</p>
<details class="custom-container details">
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>X-UA-Compatible<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>IE=edge<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
    <span class="token selector">*</span> <span class="token punctuation">{</span>
      <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
      <span class="token property">padding</span><span class="token punctuation">:</span> 0
    <span class="token punctuation">}</span>

    <span class="token comment">/* 浅色主题 */</span>
    <span class="token selector">.light .content</span> <span class="token punctuation">{</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 100vw<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
      <span class="token property">background-color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
      <span class="token property">color</span><span class="token punctuation">:</span> #333333<span class="token punctuation">;</span>
      <span class="token property">transition</span><span class="token punctuation">:</span> all 0.3s<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/* 深色主题 */</span>
    <span class="token selector">.dark .content</span> <span class="token punctuation">{</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 100vw<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
      <span class="token property">background-color</span><span class="token punctuation">:</span> #333333<span class="token punctuation">;</span>
      <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
      <span class="token property">transition</span><span class="token punctuation">:</span> all 0.3s<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">button</span> <span class="token punctuation">{</span>
      <span class="token property">position</span><span class="token punctuation">:</span> fixed<span class="token punctuation">;</span>
      <span class="token property">top</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
      <span class="token property">right</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>light<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>我是一个 div<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token special-attr"><span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value javascript language-javascript"><span class="token function">change</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>点我切换模式<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token comment">// 切换模式</span>
  <span class="token keyword">function</span> <span class="token function">change</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>className <span class="token operator">=</span> document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>className <span class="token operator">===</span> <span class="token string">'light'</span> <span class="token operator">?</span> <span class="token string">'dark'</span> <span class="token operator">:</span> <span class="token string">'light'</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br></div></div></details>
<p>在这样的一个代码中，通过两个不同的 <code>css</code> <strong>类名</strong> 来控制来控制样式</p>
<ol>
<li><code>light</code> 浅色系主题</li>
<li><code>dark</code> 深色系主题</li>
</ol>
<p>然后提供了一个按钮，点击按钮可以切换 <code>body</code> 的类名，当类名发生切换时，对应的样式也会发生切换，以此就完成了对应的 <strong>主题替换</strong></p>
<p>而这个也就是主题替换的原理：<strong>通过类名来控制对应的样式（主题），当类名发生变化时，即完成了主题替换</strong></p>
<h2 id="tailwind-darkmode-原理" tabindex="-1"><a class="header-anchor" href="#tailwind-darkmode-原理" aria-hidden="true">#</a> tailwind DarkMode 原理</h2>
<p>主题替换的核心在于 <strong>类名</strong> 的变化，那么对于 <code>tailwind</code> 而言，同样如此</p>
<p>在 <code>tailwind</code> 中提供了一个 <a href="https://tailwindcss.com/docs/dark-mode" target="_blank" rel="noopener noreferrer">dark mode<ExternalLinkIcon/></a> 的概念</p>
<p>在该概念下，可以通过 <code>dark:xxx</code> 的语法，来指定 <strong>暗黑模式</strong> 下的对应样式</p>
<p>其实现步骤为:</p>
<ol>
<li>在 <code>tailwind.config.js</code> 中</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 手动切换暗模式</span>
  <span class="token literal-property property">darkMode</span><span class="token operator">:</span> <span class="token string">'class'</span><span class="token punctuation">,</span>
  <span class="token operator">...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ol start="2">
<li>
<p>在 <code>src/views/layout/components/header/index.vue</code> 中为顶层的 <code>div</code> 提供 <code>dark:bg-zinc-800</code> 这样的类名，这就表示：<strong>在 <code>dark</code> 暗黑模式下，它的背景颜色将为 <code>bg-zinc-800</code></strong></p>
</li>
<li>
<p>最后可以在浏览器中，为 <code>html</code> 根标签修改 <code>class</code> 为 <strong><code>class=&quot;dark&quot;</code></strong></p>
</li>
<li>
<p>那么此时可以发现，<code>header</code> 区域的背景颜色就变为 <strong>黑色</strong></p>
</li>
<li>
<p>查看对应的 <code>Header</code> 的 <code>DOM</code>，可以发现 <code>.dark .dark\:bg-zinc-800</code> 生效</p>
</li>
</ol>
<p>那么据此我们就知道，如果想要基于 tailwind 实现主题替换，我们需要做两件事情：</p>
<ol>
<li>在 <code>DOM</code> 增加暗黑主题的适配 <code>CSS</code> 样式</li>
<li>在 <code>html</code> 根元素按需增加 <code>dark</code> 类名</li>
</ol>
<h2 id="为组件增加-dark-适配" tabindex="-1"><a class="header-anchor" href="#为组件增加-dark-适配" aria-hidden="true">#</a> 为组件增加 dark 适配</h2>
<p>需要在每个组件内样式的 <strong>类名</strong> 中添加 <code>dark</code> 的适配</p>
<p>比如</p>
<ul>
<li>在 m-svg-icon组件的 fillClass 中添加  <code>dark:fill-zinc-600</code></li>
<li><code>dark:hover:bg-zinc-800</code> .....</li>
<li><code>dark:text-zinc-400</code>....</li>
<li><code>dark:bg-zinc-800</code>....</li>
</ul>
<h2 id="darkmode-在复杂应用中的实现逻辑" tabindex="-1"><a class="header-anchor" href="#darkmode-在复杂应用中的实现逻辑" aria-hidden="true">#</a> DarkMode 在复杂应用中的实现逻辑</h2>
<p>那么现在就需要完成一套从：<strong>状态选择到最终修改 <code>html</code> 的 <code>class</code> 的一整套逻辑</strong></p>
<ol>
<li>监听主题的切换行为</li>
<li>根据行为保存当前展示的主题到 <code>vuex</code> 中</li>
<li>根据 <code>vuex</code> 中保存的当前主题，展示 <code>header -&gt; theme</code>的显示图标</li>
<li>根据 <code>vuex</code> 中保存的当前主题，修改 <code>html</code> 的 <code>class</code></li>
</ol>
<h4 id="实现" tabindex="-1"><a class="header-anchor" href="#实现" aria-hidden="true">#</a> 实现</h4>
<ol>
<li>创建 <code>src/store/modules/theme.js</code> 模块：</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">THEME_LIGHT</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/constants'</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">namespaced</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token function-variable function">state</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
 		<span class="token comment">// 主题模式   </span>
    <span class="token literal-property property">themeType</span><span class="token operator">:</span> <span class="token constant">THEME_LIGHT</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mutations</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
    *  切换主题模式
    */</span>
    <span class="token function">changeThemeType</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> newTheme</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      state<span class="token punctuation">.</span>themeType <span class="token operator">=</span> newTheme
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><ol start="2">
<li>在 <code>src/store/index.js</code> 完成注册，并标记到 <code>vuex-persistedstate</code> 的 <code>paths</code> 中</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vuex'</span>
<span class="token keyword">import</span> category <span class="token keyword">from</span> <span class="token string">'./modules/category'</span>
<span class="token keyword">import</span> theme <span class="token keyword">from</span> <span class="token string">'./modules/theme'</span>
<span class="token keyword">import</span> getters <span class="token keyword">from</span> <span class="token string">'./getters'</span>
<span class="token keyword">import</span> createPersistedState <span class="token keyword">from</span> <span class="token string">'vuex-persistedstate'</span>

<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  getters<span class="token punctuation">,</span>
  <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    category<span class="token punctuation">,</span>
    theme
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">createPersistedState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">// 保存到 localStorage 中的 key</span>
      <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'front-project'</span><span class="token punctuation">,</span>
      <span class="token comment">// 需要保存的模块</span>
      <span class="token literal-property property">paths</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'category'</span><span class="token punctuation">,</span><span class="token string">'theme'</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> store
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><ol start="3">
<li>在 <code>src/store/getters.js</code> 添加 getters 快捷访问</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>	<span class="token doc-comment comment">/**
   * 当前主题
   */</span>
  <span class="token function-variable function">themeType</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token operator">=></span> state<span class="token punctuation">.</span>theme<span class="token punctuation">.</span>themeType
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ol start="4">
<li>在 <code>src/views/layout/components/header/header-theme.vue</code> 中为 <code>item</code> 添加点击事件：</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * menu 切换事件
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">theme</span>
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">onItemClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">theme</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">'theme/changeThemeType'</span><span class="token punctuation">,</span> theme<span class="token punctuation">.</span>type<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ol start="5">
<li>在 <code>src/views/layout/components/header/header-theme.vue</code> 中渲染被选中的图标 <strong>计算属性筛选</strong>：</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 控制图标展示</span>
<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">useStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> svgIconName <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// 根据当前的 themeType 返回当前的选中 icon</span>
  <span class="token keyword">const</span> findTheme <span class="token operator">=</span> themeArr<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">theme</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> theme<span class="token punctuation">.</span>type <span class="token operator">===</span> store<span class="token punctuation">.</span>getters<span class="token punctuation">.</span>themeType
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> findTheme<span class="token punctuation">.</span>icon
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#reference</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>m-svg-icon</span>
    <span class="token attr-name">:name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>svgIconName<span class="token punctuation">"</span></span>
    <span class="token attr-name">...</span>
  <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>m-svg-icon</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ol start="6">
<li>
<p>至此，主题切换图标和对应的当前主题数据都已经处理完成</p>
</li>
<li>
<p>接下来我处理最后一部分也就是 修改 html 的 class</p>
</li>
<li>
<p>创建 <code>src/utils/theme.js</code> 方法, <code>watch</code> 监听主题的变化：</p>
</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">'@/store'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> watch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">THEME_LIGHT</span><span class="token punctuation">,</span> <span class="token constant">THEME_DARK</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/constants'</span>

<span class="token doc-comment comment">/**
 * 初始化主题
 */</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token function">watch</span><span class="token punctuation">(</span>
    <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> store<span class="token punctuation">.</span>getters<span class="token punctuation">.</span>themeType<span class="token punctuation">,</span>
    <span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token comment">// html 的 class</span>
      <span class="token keyword">let</span> themeClassName <span class="token operator">=</span> <span class="token string">''</span>
      <span class="token keyword">switch</span> <span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">case</span> <span class="token constant">THEME_LIGHT</span><span class="token operator">:</span>
          themeClassName <span class="token operator">=</span> <span class="token string">'light'</span>
          <span class="token keyword">break</span>
        <span class="token keyword">case</span> <span class="token constant">THEME_DARK</span><span class="token operator">:</span>
          themeClassName <span class="token operator">=</span> <span class="token string">'dark'</span>
          <span class="token keyword">break</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// 修改 html 的 class</span>
      document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'html'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>className <span class="token operator">=</span> themeClassName
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token comment">// 初始执行一次</span>
      <span class="token literal-property property">immediate</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><ol start="9">
<li>在 <code>main.js</code> 中触发</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> useTheme <span class="token keyword">from</span> <span class="token string">'./utils/theme'</span>
<span class="token comment">// 初始化主题</span>
<span class="token function">useTheme</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ol start="10">
<li>如果感觉替换过于生硬，可以给 <code>hearder</code> 和 <code>navigationBar</code> 增加 <code>duration-500</code> 过渡动画时长</li>
</ol>
</template>
