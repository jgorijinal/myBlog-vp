<template><h1 id="移动端路由切换解决方案-虚拟任务栈让-h5-丝滑" tabindex="-1"><a class="header-anchor" href="#移动端路由切换解决方案-虚拟任务栈让-h5-丝滑" aria-hidden="true">#</a> 移动端路由切换解决方案  - 虚拟任务栈让 H5 丝滑</h1>
<h2 id="通用组件-trigger-menu-和-trigger-menu-item-构建方案分析" tabindex="-1"><a class="header-anchor" href="#通用组件-trigger-menu-和-trigger-menu-item-构建方案分析" aria-hidden="true">#</a> 通用组件：trigger-menu 和 trigger-menu-item 构建方案分析</h2>
<p>现在主要处理的就是移动端下的交互内容。那么对于移动端的展示而言，它有一个和 <code>PC端</code> 非常不一样的地方，那就是：
<img src="@source/.vuepress/public/images/ttb1.png" alt="图片"></p>
<p>这块内容充当了移动端中的 <code>TabBar</code> 的作用，所以目前期望把它封装为一个通用的组件</p>
<p>我期望将来 <code>trigger-menu</code> 可以以这样的形式进行使用：</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>m-trigger-menu</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>m-trigger-menu-item</span>
    <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>home<span class="token punctuation">"</span></span>
    <span class="token attr-name">iconClass</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fill-zinc-900 dark:fill-zinc-200<span class="token punctuation">"</span></span>
    <span class="token punctuation">></span></span>首页<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>m-trigger-menu-item</span>
  <span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>m-trigger-menu-item</span>
    <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>vip<span class="token punctuation">"</span></span>
    <span class="token attr-name">iconClass</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fill-zinc-400 dark:fill-zinc-500<span class="token punctuation">"</span></span>
    <span class="token attr-name">textClass</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text-zinc-400 dark:text-zinc-500<span class="token punctuation">"</span></span>
    <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onVipClick<span class="token punctuation">"</span></span>
    <span class="token punctuation">></span></span>VIP<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>m-trigger-menu-item</span>
  <span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>m-trigger-menu-item</span>
    <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>profile<span class="token punctuation">"</span></span>
    <span class="token attr-name">iconClass</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fill-zinc-400 dark:fill-zinc-500<span class="token punctuation">"</span></span>
    <span class="token attr-name">textClass</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text-zinc-400 dark:text-zinc-500<span class="token punctuation">"</span></span>
    <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onMyClick<span class="token punctuation">"</span></span>
    <span class="token punctuation">></span></span>我的<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>m-trigger-menu-item</span>
  <span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>m-trigger-menu</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>也就是说，它被分成了两个组件：<code>trigger-menu</code> 和 <code>trigger-menu-item</code></p>
<p>所以分析需要针对于这两个组件分别进行分析：</p>
<ol>
<li><code>trigger-menu</code>：对于它而言，只起到一个 <strong>包裹容器</strong> 的作用，所以只需要提供一个对应的<strong>插槽</strong>即可</li>
<li><code>trigger-menu-item</code> ：起到了对应的展示作用，展示包括了 <code>icon</code> 和 <code>文字</code>。所以内部应该存在 <code>svg-icon</code> 用来展示图片，存在一个插槽用来展示文字</li>
</ol>
<h3 id="通用组件-构建-trigger-menu-和-trigger-menu-item" tabindex="-1"><a class="header-anchor" href="#通用组件-构建-trigger-menu-和-trigger-menu-item" aria-hidden="true">#</a> 通用组件：构建 trigger-menu 和 trigger-menu-item</h3>
<ol>
<li>创建 src/libs/trigger-menu/index.vue ：</li>
</ol>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>min-w-[180px] bg-white dark:bg-zinc-800 rounded-full shadow flex items-center justify-between px-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ol start="2">
<li>创建 <code>src/libs/trigger-menu-item/index.vue</code>，并定义 <code>props</code>：</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// 图标</span>
  <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
    <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// icon 的类</span>
  <span class="token literal-property property">iconClass</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> String
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 字体 类</span>
  <span class="token literal-property property">textClass</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
    <span class="token keyword">default</span><span class="token operator">:</span><span class="token string">'text-zinc-900 dark:text-zinc-200'</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 跳转到哪里</span>
  <span class="token literal-property property">to</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span>String
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><ol start="3">
<li>根据 <code>props</code> 处理对应视图：</li>
</ol>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>flex flex-col items-center py-2 px-2<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>clickItem<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>m-svg-icon</span> <span class="token attr-name">:name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>icon<span class="token punctuation">"</span></span> <span class="token attr-name">:fillClass</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>iconClass<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>w-2 h-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>m-svg-icon</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>textClass<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text-sm mt-[4px] whitespace-nowrap<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> 
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// 图标</span>
  <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
    <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// icon 的类</span>
  <span class="token literal-property property">iconClass</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> String
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 字体 类</span>
  <span class="token literal-property property">textClass</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
    <span class="token keyword">default</span><span class="token operator">:</span><span class="token string">'text-zinc-900 dark:text-zinc-200'</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 跳转到哪里</span>
  <span class="token literal-property property">to</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span>String
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><ol start="4">
<li>处理对应的点击跳转：</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useRouter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue-router'</span>
<span class="token operator">...</span>
<span class="token operator">...</span>
<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">useRouter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">clickItem</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>props<span class="token punctuation">.</span>to<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 跳转</span>
  router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>to<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>5 在 <code>src/views/main/index.vue</code>中根据 <strong>设备状态(pc端/移动端)</strong> 和 <strong>登录/未登录状态</strong> 进行展示：</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token comment">&lt;!--移动端: 下面导航栏--></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>m-trigger-menu</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>isMobileTerminal<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fixed bottom-2 left-[50%] translate-x-[-50%]<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>m-trigger-menu-item</span> 
        <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>home<span class="token punctuation">"</span></span>  
        <span class="token attr-name">iconClass</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fill-zinc-900 dark:fill-zinc-200<span class="token punctuation">"</span></span>
        <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/<span class="token punctuation">"</span></span>
      <span class="token punctuation">></span></span>
        首页
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>m-trigger-menu-item</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>m-trigger-menu-item</span>
        <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$store.getters.token<span class="token punctuation">"</span></span>
        <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>vip<span class="token punctuation">"</span></span>
        <span class="token attr-name">iconClass</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fill-zinc-400 dark:fill-zinc-500<span class="token punctuation">"</span></span>
        <span class="token attr-name">textClass</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text-zinc-400 dark:text-zinc-500<span class="token punctuation">"</span></span>
        <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/member<span class="token punctuation">"</span></span>
      <span class="token punctuation">></span></span>
      VIP
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>m-trigger-menu-item</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>m-trigger-menu-item</span>
        <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>profile<span class="token punctuation">"</span></span>
        <span class="token attr-name">iconClass</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fill-zinc-400 dark:fill-zinc-500<span class="token punctuation">"</span></span>
        <span class="token attr-name">textClass</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text-zinc-400 dark:text-zinc-500<span class="token punctuation">"</span></span>
        <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/profile<span class="token punctuation">"</span></span>
    <span class="token punctuation">></span></span>
    {{$store.getters.token ? '我的' : '未登录'}}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>m-trigger-menu-item</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>m-trigger-menu</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><p>那么至此, 渲染完成</p>
<p><img src="@source/.vuepress/public/images/ttb2.png" alt="图片"></p>
<h2 id="前台业务下-h5-的应用场景" tabindex="-1"><a class="header-anchor" href="#前台业务下-h5-的应用场景" aria-hidden="true">#</a> 前台业务下 H5 的应用场景</h2>
<p>通常情况下我们说起移动端项目，指的一般是两种：</p>
<ol>
<li>原生 <code>APP</code></li>
<li><code>H5</code> 网页</li>
</ol>
<p>现在所做的这个移动端，指的其实就是 <code>H5</code> 网页</p>
<p>而 <code>H5</code> 网页应用到手机端的时候，通常也是有两种运行的形式：</p>
<ol>
<li>直接在手机端浏览器中运行：这种使用情况相对较少。在这种情况下，用户明显的知道这就是一个网页</li>
<li>在原生组件 <code>WebView</code> 中运行（混合开发）：通常会被嵌入到 <code>APP</code> 之中，这种使用情况比较多。所以以下内容，主要针对这种情况进行说明</li>
</ol>
<p>那么这种情况下，用户会认为该内容是 <code>APP</code> 的一部分，不会把它当成网页，而是会把它当做 <code>原生APP</code>。那么一旦用户把它作为 <code>APP</code> 来进行衡量，那么就会对这块应用有更高的要求</p>
<p>比如可以接收一个网页的页面跳转为</p>
<p><img src="@source/.vuepress/public/images/app2.gif" alt="图片"></p>
<p>但是绝对不能接受一个 <code>APP</code> 的页面跳转是这样，我理想的 <code>APP</code> 页面跳转应该是这个样子的：</p>
<p><img src="@source/.vuepress/public/images/APP.gif" alt="图片"></p>
<p>路由之间的跳转应该具备对应的动画，并且<strong>上一个页面的状态应该被缓存（页面的滚动状态和数据视图）</strong></p>
<p>现在期望把整个的一套移动端的跳转全部封装为一个 <strong>通用组件</strong> ，期望通过这个通用组件来实现 <strong>移动端下 H5 页面的过渡功能</strong></p>
<h2 id="通用组件-transition-router-view-构建方案分析-与-虚拟任务栈" tabindex="-1"><a class="header-anchor" href="#通用组件-transition-router-view-构建方案分析-与-虚拟任务栈" aria-hidden="true">#</a> 通用组件：transition-router-view 构建方案分析 与 虚拟任务栈</h2>
<p>接下来要实现 <strong>移动端的过渡动效</strong>，以达到一个良好的移动端用户交互体验</p>
<p>它的实现方案整体分为两种：</p>
<ol>
<li>过渡动画</li>
<li>组件缓存</li>
</ol>
<h4 id="过渡动画" tabindex="-1"><a class="header-anchor" href="#过渡动画" aria-hidden="true">#</a> 过渡动画</h4>
<p>需要使用到 <a href="https://router.vuejs.org/zh/guide/advanced/transitions.html" target="_blank" rel="noopener noreferrer">过渡动效<ExternalLinkIcon/></a> 这个功能，它描述了两个路由之间进行过渡时的动画效果</p>
<p>这个功能的官方描述中，主要包含了三个对应的组件</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token comment">&lt;!-- 路由出口 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span> <span class="token attr-name">v-slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{ Component }<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token comment">&lt;!-- 动画 --></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>transition</span> <span class="token attr-name">:name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>transitionName<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!-- 动态组件 --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>component</span> <span class="token attr-name">:is</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Component<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>transition</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-view</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>利用其中的 <code>transition</code> 就可以实现跳转时的动画效果</p>
<p>但是需要注意过渡动画分为两部分：</p>
<ol>
<li>进入动画</li>
<li>退出动画</li>
</ol>
<p>所以这里 <code>transition</code> 的 <code>name</code> 需要是动态的，一次来表示对应的两种动画形式</p>
<h4 id="组件缓存" tabindex="-1"><a class="header-anchor" href="#组件缓存" aria-hidden="true">#</a> 组件缓存</h4>
<p>要使用到 组件缓存 ，所以还需要依赖 <a href="https://v3.cn.vuejs.org/api/built-in-components.html#keep-alive" target="_blank" rel="noopener noreferrer">keep-alive<ExternalLinkIcon/></a></p>
<p>那么这四个组件想要在一起工作，将要按照以下的方式进行组合</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token comment">&lt;!-- 路由出口 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span> <span class="token attr-name">v-slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{ Component }<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token comment">&lt;!-- 动画组件 --></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>transition</span>
    <span class="token attr-name">:name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>transitionName<span class="token punctuation">"</span></span>
  <span class="token punctuation">></span></span>
    <span class="token comment">&lt;!-- 缓存组件--></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>keep-alive</span><span class="token punctuation">></span></span>
      <span class="token comment">&lt;!-- 动态组件 --></span>
      &lt;component
        :is="Component"
        :key="$route.fullPath"    // 同域名下的跳转。比如（动态路由 /detail/:id）      
      />
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>keep-alive</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>transition</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-view</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>但需要注意：<strong>不是所有的组件都需要缓存</strong></p>
<p>在当前移动端的组件处理中，同样期望有一个栈来维护组件进入和退出流程，所以把这样的一套流程，称作：<strong>虚拟任务栈</strong></p>
<p>那么对于这样的一个虚拟任务栈而言，可以通过 <strong>数组</strong> 来进行维护，因为数组与栈的概念相同都是：<strong>先进后出</strong> 的流程</p>
<p>然后我们可以通过 <code>keep-alive</code> 中的 <code>include</code> 概念，把 <strong>虚拟任务栈 - 数组</strong> 进行绑定，从而实现 <strong>任务栈</strong> 的缓存概念</p>
<h4 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h4>
<ol>
<li>过渡动画：利用 <strong>过渡动效</strong> 实现</li>
<li>组件缓存：<strong>虚拟任务栈 - 数组</strong> 配合 <code>keep-alive</code> 中的 <code>include</code> 实现</li>
</ol>
<h3 id="通用组件-transition-router-view-构建方案之过渡动效" tabindex="-1"><a class="header-anchor" href="#通用组件-transition-router-view-构建方案之过渡动效" aria-hidden="true">#</a> 通用组件：transition-router-view 构建方案之过渡动效</h3>
<ol>
<li>
<p>创建 <code>src/libs/transition-router-view/index.vue</code> 组件</p>
</li>
<li>
<p>创建如下 <code>template</code></p>
</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 路由出口 <span class="token operator">--</span><span class="token operator">></span>
  <span class="token operator">&lt;</span>router<span class="token operator">-</span>view v<span class="token operator">-</span>slot<span class="token operator">=</span><span class="token string">"{ Component }"</span><span class="token operator">></span>    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>注意 Component 要大写 <span class="token operator">--</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 动画组件 <span class="token operator">--</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>transition <span class="token operator">:</span>name<span class="token operator">=</span><span class="token string">"transitionName"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 缓存组件 <span class="token operator">--</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>keep<span class="token operator">-</span>alive<span class="token operator">></span>                        <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>keep<span class="token operator">-</span>alive 只允许有一个节点<span class="token punctuation">,</span> 所以不能有注释<span class="token operator">--</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>component <span class="token operator">:</span>is<span class="token operator">=</span><span class="token string">"Component"</span> <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>keep<span class="token operator">-</span>alive<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>transition<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>router<span class="token operator">-</span>view<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><ol start="3">
<li>定义对应的 <code>props</code> ：</li>
</ol>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token comment">// none</span>
<span class="token keyword">const</span> <span class="token constant">ROUTER_TYPE_NONE</span> <span class="token operator">=</span> <span class="token string">'none'</span>
<span class="token comment">// 进入 push</span>
<span class="token keyword">const</span> <span class="token constant">ROUTER_TYPE_PUSH</span> <span class="token operator">=</span> <span class="token string">'push'</span>
<span class="token comment">// 退出 back</span>
<span class="token keyword">const</span> <span class="token constant">ROUTER_TYPE_BACK</span> <span class="token operator">=</span> <span class="token string">'back'</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useRouter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue-router'</span>
<span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// 状态: none , push , back </span>
  <span class="token literal-property property">routerType</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
    <span class="token keyword">default</span><span class="token operator">:</span> <span class="token constant">ROUTER_TYPE_NONE</span><span class="token punctuation">,</span>
    <span class="token function">validator</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> routerTypeArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token constant">ROUTER_TYPE_NONE</span><span class="token punctuation">,</span> <span class="token constant">ROUTER_TYPE_PUSH</span><span class="token punctuation">,</span> <span class="token constant">ROUTER_TYPE_BACK</span><span class="token punctuation">]</span>
      <span class="token keyword">const</span> result <span class="token operator">=</span> routerTypeArr<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>result<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">你必须要传入 </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>routerTypeArr<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">','</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> 中的一个值</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> result
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 首页的组件名称, 对应任务栈的第一个组件</span>
  <span class="token literal-property property">mainComponentName</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
    <span class="token literal-property property">required</span><span class="token operator">:</span><span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><ol start="4">
<li>接下来处理 <strong>路由过渡动画：</strong></li>
</ol>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
<span class="token selector">// push页面时：新页面的进入动画
.push-enter-active</span> <span class="token punctuation">{</span>
  <span class="token property">animation-name</span><span class="token punctuation">:</span> push-in<span class="token punctuation">;</span>
  <span class="token property">animation-duration</span><span class="token punctuation">:</span> 0.4s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">// push页面时：老页面的退出动画
.push-leave-active</span> <span class="token punctuation">{</span>
  <span class="token property">animation-name</span><span class="token punctuation">:</span> push-out<span class="token punctuation">;</span>
  <span class="token property">animation-duration</span><span class="token punctuation">:</span> 0.4s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
// push页面时：新页面的进入动画
<span class="token atrule"><span class="token rule">@keyframes</span> push-in</span> <span class="token punctuation">{</span>
  <span class="token selector">0%</span> <span class="token punctuation">{</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>100%<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">100%</span> <span class="token punctuation">{</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
// push页面时：老页面的退出动画
<span class="token atrule"><span class="token rule">@keyframes</span> push-out</span> <span class="token punctuation">{</span>
  <span class="token selector">0%</span> <span class="token punctuation">{</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">100%</span> <span class="token punctuation">{</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-50%<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token selector">// 后退页面时：即将展示的页面动画
.back-enter-active</span> <span class="token punctuation">{</span>
  <span class="token property">animation-name</span><span class="token punctuation">:</span> back-in<span class="token punctuation">;</span>
  <span class="token property">animation-duration</span><span class="token punctuation">:</span> 0.4s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">// 后退页面时：后退的页面执行的动画
.back-leave-active</span> <span class="token punctuation">{</span>
  <span class="token property">animation-name</span><span class="token punctuation">:</span> back-out<span class="token punctuation">;</span>
  <span class="token property">animation-duration</span><span class="token punctuation">:</span> 0.4s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
// 后退页面时：即将展示的页面动画
<span class="token atrule"><span class="token rule">@keyframes</span> back-in</span> <span class="token punctuation">{</span>
  <span class="token selector">0%</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-100%<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">100%</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
// 后退页面时：后退的页面执行的动画
<span class="token atrule"><span class="token rule">@keyframes</span> back-out</span> <span class="token punctuation">{</span>
  <span class="token selector">0%</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">100%</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>50%<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br></div></div><ol start="5">
<li>处理逻辑</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">useRouter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// 跳转动画</span>
<span class="token keyword">const</span> transitionName <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span>
<span class="token doc-comment comment">/**
 * 监听路由变化
 */</span>
router<span class="token punctuation">.</span><span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> <span class="token keyword">from</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// 定义当前动画名称</span>
  transitionName<span class="token punctuation">.</span>value <span class="token operator">=</span> props<span class="token punctuation">.</span>routerType
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>接下来我们就需要使用 <code>transition-router-view</code> ，通过 <code>routerType</code> 的 props 去指定跳转动画</p>
<p>现在期望：</p>
<ol>
<li>在 <code>PC端</code> 时：<code>routerType</code> 始终为 <code>NONE</code></li>
<li>在移动端时：<code>routerType</code> 根据进入或退出的状态指定为 <code>push</code> 或者 <code>back</code></li>
</ol>
<p>所以，这样的一个处理，可以通过一个全局的状态来进行管理：</p>
<ol>
<li>在 <code>src/store/modules/app.js</code> 中，定义对应的状态：</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">namespaced</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token function-variable function">state</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token operator">...</span>
    <span class="token comment">// 路由跳转类型</span>
    <span class="token literal-property property">routerType</span><span class="token operator">:</span> <span class="token string">'none'</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mutations</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
    <span class="token doc-comment comment">/**
     * 修改 routerType
     */</span>
    <span class="token function">changeRouterType</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> newType</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      state<span class="token punctuation">.</span>routerType <span class="token operator">=</span> newType
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><ol start="2">
<li>定义对应的 <code>getters</code>，处理 <code>PC 端</code>状态：</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 路由跳转方式</span>
<span class="token function-variable function">routerType</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// 在 PC 端下，永远为 none</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>isMobileTerminal<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">'none'</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> state<span class="token punctuation">.</span>app<span class="token punctuation">.</span>routerType
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ol start="3">
<li>在每次进行 <code>router.push()</code> 操作前，修改 <code>routerType</code> 为 <code>push</code>，在执行 <code>router.back()</code> 操作前，修改 <code>routerType</code> 为 <code>back</code>。但是需要注意两点：</li>
</ol>
<ul>
<li>不要再 <code>libs</code> 中修改，因为 <code>libs</code> 为通用组件</li>
<li>不要再跳转到 <strong>首页</strong> 时添加该操作，因为首页为任务栈的 <strong>根</strong></li>
</ul>
<p>此时, 虽然动画 “有些问题” 但是整个的进入和退出动画已经可以正常展示</p>
<h3 id="处理过渡动效展示样式错误的问题" tabindex="-1"><a class="header-anchor" href="#处理过渡动效展示样式错误的问题" aria-hidden="true">#</a> 处理过渡动效展示样式错误的问题</h3>
<p>审查元素我们可以发现，该样式错误的原因其实是因为 <strong>两个组件的样式在同一个文档流</strong> 导致的。</p>
<p>所以只需要在动画开始前，让组件<strong>脱离文档流</strong>，在动画结束后在回归原文档流即可</p>
<ol>
<li>在 <code>src/libs/transition-router-view/index.vue</code> 中，监听动画开始和结束的状态：</li>
</ol>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>&lt;transition
      :name="transitionName"
      @before-enter="beforeEnter"
      @after-leave="afterLeave"

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ol start="2">
<li>在对应状态时，定义变量：</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 处理动画状态变化</span>
<span class="token keyword">const</span> isAnimation <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">beforeEnter</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  isAnimation<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token function-variable function">afterLeave</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  isAnimation<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ol start="3">
<li>根据动画状态为动态组件新增样式：</li>
</ol>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>component</span>
  <span class="token attr-name">:is</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Component<span class="token punctuation">"</span></span>
  <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{ <span class="token punctuation">'</span>fixed top-0 left-0 w-screen z-50<span class="token punctuation">'</span>: isAnimation }<span class="token punctuation">"</span></span>
<span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>此时动画正常</p>
<h3 id="虚拟任务栈处理" tabindex="-1"><a class="header-anchor" href="#虚拟任务栈处理" aria-hidden="true">#</a> 虚拟任务栈处理</h3>
<p><img src="@source/.vuepress/public/images/kav1.png" alt="图片"></p>
<p>对于组件缓存而言，将通过 <code>keep-alive</code> 来构建一个虚拟任务栈：</p>
<ol>
<li>在 <code>src/libs/transition-router-view/index.vue</code> 中，定义变量：</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 任务栈</span>
<span class="token keyword">const</span> virtualTaskStack <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span>props<span class="token punctuation">.</span>mainComponentName<span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol start="2">
<li>在 <code>beforeEach</code> 中，定义出栈和入栈：</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 监听路由变化
 */</span>
router<span class="token punctuation">.</span><span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> <span class="token keyword">from</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token operator">...</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>props<span class="token punctuation">.</span>routerType <span class="token operator">===</span> <span class="token constant">ROUTER_TYPE_PUSH</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 入栈</span>
    virtualTaskStack<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>to<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>props<span class="token punctuation">.</span>routerType <span class="token operator">===</span> <span class="token constant">ROUTER_TYPE_BACK</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 出栈</span>
    virtualTaskStack<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><ol start="3">
<li>定义清空栈的方法，在进入首页时应该调用：</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 清空栈
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">clearTask</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  virtualTaskStack<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token punctuation">[</span>props<span class="token punctuation">.</span>mainComponentName<span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 监听路由变化
 */</span>
router<span class="token punctuation">.</span><span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> <span class="token keyword">from</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token operator">...</span>

  <span class="token comment">// 进入首页默认清空栈</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>to<span class="token punctuation">.</span>name <span class="token operator">===</span> props<span class="token punctuation">.</span>mainComponentName<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">clearTask</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><ol start="4">
<li>在 <code>keep-alive</code> 中，指定 <code>include</code> 属性：</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>keep<span class="token operator">-</span>alive <span class="token operator">:</span>include<span class="token operator">=</span><span class="token string">"virtualTaskStack"</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="5">
<li>在 <code>src/App.vue</code> 中指定 <code>mainComponentName</code> 为 <code>home：</code></li>
</ol>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>m-transition-router-view</span> 
      <span class="token attr-name">:routerType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>($store.getters.routerType)<span class="token punctuation">"</span></span>
      <span class="token attr-name">mainComponentName</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>home<span class="token punctuation">"</span></span>
    <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>m-transition-router-view</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ol start="6">
<li>为所有的路由表和组件，指定对应的 <code>name</code>，并保持相同</li>
</ol>
<p>比如:</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'home'</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>此时，已经可以完成动态的数据缓存</p>
</template>
