<template><h1 id="构建自己的组件库-实现前端设计" tabindex="-1"><a class="header-anchor" href="#构建自己的组件库-实现前端设计" aria-hidden="true">#</a> 构建自己的组件库 - 实现前端设计</h1>
<p>因为 <strong>前台系统</strong> 和 <strong>后台系统</strong> 的这种 <strong>根本性的设计区别（前台讲究个性化，后台偏同质化）</strong> ，所以这就导致了目前市面上的 <strong>通用组件库</strong> 更多的是 后台 PC 系统组件库（比如 element 或者 antd） 。</p>
<p>这就导致，如果你想要开发一个前台系统，那么就需要拥有你自己的 <strong>组件库</strong> ！</p>
<p>这也是为什么必须要开发一个组件库的原因</p>
<h2 id="业务组件-移动端-navigationbar" tabindex="-1"><a class="header-anchor" href="#业务组件-移动端-navigationbar" aria-hidden="true">#</a> 业务组件：移动端 navigationBar</h2>
<p>截止到现在已经可以成功的拿到简洁的服务端返回的数据，那么接下来就可以利用这个数据构建 <strong>移动端 <code>navigationBar</code> 部分</strong></p>
<p>该部分的处理将分成两部分：</p>
<ol>
<li>数据</li>
<li>视图</li>
</ol>
<h4 id="数据" tabindex="-1"><a class="header-anchor" href="#数据" aria-hidden="true">#</a> 数据</h4>
<ol>
<li>在 <code>src/views/main/components/navigation/mobile/index.vue</code> 中定义 <code>props</code> 接收数据源</li>
</ol>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> Array<span class="token punctuation">,</span>
    <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ol start="2">
<li>在 <code>src/views/main/components/navigation/index.vue</code>中传递对应数据</li>
</ol>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mobile-navigation-vue</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>isMobileTerminal<span class="token punctuation">"</span></span> <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>categoryData<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> isMobileTerminal <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/utils/flexible'</span>
<span class="token keyword">import</span> mobileNavigationVue <span class="token keyword">from</span> <span class="token string">'./mobile/index.vue'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> getCategory <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/api/category'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>

<span class="token keyword">const</span> categoryData <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">getCategoryData</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> categorys <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getCategory</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  categoryData<span class="token punctuation">.</span>value <span class="token operator">=</span> categorys
<span class="token punctuation">}</span>
<span class="token function">getCategoryData</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h4 id="视图" tabindex="-1"><a class="header-anchor" href="#视图" aria-hidden="true">#</a> 视图</h4>
<p>在 <code>src/views/main/components/navigation/mobile/index.vue</code> 中进行视图处理</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bg-white sticky top-0 left-0 z-10<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span>
      <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>relative flex overflow-x-auto p-1 text-xs text-zinc-600 overflow-hidden<span class="token punctuation">"</span></span>
    <span class="token punctuation">></span></span>
      <span class="token comment">&lt;!-- category item --></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span>
        <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item in data<span class="token punctuation">"</span></span>
        <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item.id<span class="token punctuation">"</span></span>
        <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>shrink-0 px-1.5 py-0.5 z-10 duration-200<span class="token punctuation">"</span></span>
      <span class="token punctuation">></span></span>
        {{ item.name }}
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>那么至此 <strong>移动端 navigationBar 部分</strong> 就完成了基础的渲染</p>
<h2 id="动态-rem-基准-修正-tailwind-完善移动端navigationbar" tabindex="-1"><a class="header-anchor" href="#动态-rem-基准-修正-tailwind-完善移动端navigationbar" aria-hidden="true">#</a> 动态 rem 基准+修正 tailwind，完善移动端navigationBar</h2>
<p>需要修正的点主要有两个：</p>
<ol>
<li><strong><code>rem</code> 基准值</strong>：因为 <code>tailwind</code> 的尺寸单位默认为 <code>rem</code> ，这也是为了适配移动端下的情况。但是针对于这样的 <code>rem</code> 并没有指定其基准值，所以首先需要做的就是指定 <code>rem</code> 基准值。对于该基准值期望可以 <strong>根据用户设备的不同，在一个幅度之内变化</strong>，所以就需要一个 <strong>动态的 <code>rem</code> 值</strong></li>
</ol>
<p>在 <code>src/utils/flexible.js</code> 中，新增一个方法</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 初始化 rem 基准值，最大为 40px
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">useREM</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// 定义最大的 fontSize</span>
  <span class="token keyword">const</span> <span class="token constant">MAX_FONT_SIZE</span> <span class="token operator">=</span> <span class="token number">40</span>

  <span class="token comment">// 监听 html 文档被解析完成的事件</span>
  document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'DOMContentLoaded'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 获取 html 标签</span>
    <span class="token keyword">const</span> html <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'html'</span><span class="token punctuation">)</span>
    <span class="token comment">// 获取根元素 fontSize 标准，屏幕宽度 / 10。（以 Iphone 为例 Iphone 6 屏幕宽度为 375，则标准 fontSize 为 37.5）</span>
    <span class="token keyword">let</span> fontSize <span class="token operator">=</span> window<span class="token punctuation">.</span>innerWidth <span class="token operator">/</span> <span class="token number">10</span>
    <span class="token comment">// 获取到的 fontSize 不允许超过我们定义的最大值</span>
    fontSize <span class="token operator">=</span> fontSize <span class="token operator">></span> <span class="token constant">MAX_FONT_SIZE</span> <span class="token operator">?</span> <span class="token constant">MAX_FONT_SIZE</span> <span class="token operator">:</span> fontSize
    <span class="token comment">// 定义根元素（html）fontSize 的大小 （rem）</span>
    html<span class="token punctuation">.</span>style<span class="token punctuation">.</span>fontSize <span class="token operator">=</span> fontSize <span class="token operator">+</span> <span class="token string">'px'</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>接下来在 <code>main.js</code> 中调用它</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useREM <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./utils/flexible'</span>
<span class="token function">useREM</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol start="2">
<li><strong>修正 <code>tailwind</code> 的基准值</strong>: 对 <code>tailwind</code> 而言它具备默认的 <a href="https://tailwindcss.com/docs/font-size" target="_blank" rel="noopener noreferrer">font-size<ExternalLinkIcon/></a> 大小，并且这个大小也是以 <code>rem</code> 作为标准指定的，但是因为通过的修改了基准 <code>rem</code> 所以这个 <code>tailwind</code> 的 <code>fontsize</code> 基准值我们也需要进行改变</li>
</ol>
<p>在 <code>tailwind.config.js</code> 的 <code>theme</code> 选项中，进行以下指定</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">extend</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">xs</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'0.25rem'</span><span class="token punctuation">,</span> <span class="token string">'0.35rem'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">sm</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'0.35rem'</span><span class="token punctuation">,</span> <span class="token string">'0.45rem'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'0.45rem'</span><span class="token punctuation">,</span> <span class="token string">'0.55rem'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">lg</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'0.55rem'</span><span class="token punctuation">,</span> <span class="token string">'0.65rem'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">xl</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'0.65rem'</span><span class="token punctuation">,</span> <span class="token string">'0.75rem'</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>那么此时，<strong>移动端navigationBar</strong> 的效果就具备了一个比较好看的基准样式了</p>
<h2 id="通用组件-基于-vite-的统一-svg-处理-svg-icon" tabindex="-1"><a class="header-anchor" href="#通用组件-基于-vite-的统一-svg-处理-svg-icon" aria-hidden="true">#</a> 通用组件：基于 Vite 的统一 svg 处理 svg-icon</h2>
<p>接下来就处理第一个通用组件 <code>svg-icon</code> ：用于显示 <code>svg</code> 矢量图</p>
<ol>
<li>创建 <code>src/libs/svg-icon/index.vue</code></li>
</ol>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">aria-hidden</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>use</span> <span class="token attr-name">:xlink:href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>symbolId<span class="token punctuation">"</span></span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fillClass<span class="token punctuation">"</span></span> <span class="token attr-name">:fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>color<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>use</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// 显示的 svg 图标名称 (不包含 #icon-)</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
    <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 直接指定 svg 图标的颜色</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span>String
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 通过 tailwind 指定 svg 颜色的类名</span>
  <span class="token literal-property property">fillClass</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span>String
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 真实显示的 svg 图标名（拼接 #icon-）</span>
<span class="token keyword">const</span> symbolId <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">#icon-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>props<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><ol start="2">
<li>创建 <code>src/libs/index.js</code> ，完成通用组件注册</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> svgIcon <span class="token keyword">from</span> <span class="token string">'./svg-icon/index.vue'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">install</span><span class="token punctuation">(</span><span class="token parameter">app</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">'m-svg-icon'</span><span class="token punctuation">,</span> svgIcon<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ol start="3">
<li>在 <code>main.js</code> 中导入，并利用 <code>use</code> 注册</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> mLibs <span class="token keyword">from</span> <span class="token string">'./libs'</span>
<span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>mLibs<span class="token punctuation">)</span><span class="token operator">...</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol start="4">
<li>最后在 <code>src/views/main/components/navigation/mobile/index.vue</code> 中使用组件, 显示汉堡按钮</li>
</ol>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token comment">&lt;!-- 汉堡按钮 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span>
  <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>z-20 fixed top-0 right-[-1px] h-4 px-1 flex items-center bg-white<span class="token punctuation">"</span></span>
<span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>m-svg-icon</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>w-1.5 h-1.5<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>hamburger<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>m-svg-icon</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ol start="5">
<li>因为期望汉堡按钮存在一个横向的阴影效果，在 <code>tailwind</code> 中没有对应的样式，所以需要新增这个样式, 在 <code>tailwind.config.js</code> 中写入</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">extend</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token operator">...</span>
      <span class="token literal-property property">boxShadow</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">'l-white'</span><span class="token operator">:</span> <span class="token string">'-10px 0 10px white'</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><ol start="6">
<li>在 <code>src/views/main/components/navigation/mobile/index.vue</code> 中使用该样式</li>
</ol>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token comment">&lt;!-- 汉堡按钮 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span>
  <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>... shadow-l-white<span class="token punctuation">"</span></span>
<span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>m-svg-icon</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>w-1.5 h-1.5<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>hamburger<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>m-svg-icon</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ol start="7">
<li>指定最后一个 <code>categoryItem</code> 距离右侧距离</li>
</ol>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>class="shrink-0 px-1.5 py-0.5 z-10 duration-200 last:mr-4"
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>发现其实面包屑按钮并 <strong>未显示</strong> ，那么为什么会这样？</p>
<h2 id="vite-处理-svg-矢量图" tabindex="-1"><a class="header-anchor" href="#vite-处理-svg-矢量图" aria-hidden="true">#</a> vite 处理 svg 矢量图</h2>
<p>无论是 <code>vue-cli</code> 还是 <code>vite</code> 默认他们都不会处理咱们主动导入的 svg 矢量图标，也就是说 <strong>虽然把 svg 图标放入到了项目中，但是 vite “无法使用” 到它们</strong></p>
<p>那么怎么办呢？</p>
<p>此时就需要使用到一个 <code>vite</code> 的 <code>plugin</code> <a href="https://github.com/vbenjs/vite-plugin-svg-icons" target="_blank" rel="noopener noreferrer">vite-plugin-svg-icons<ExternalLinkIcon/></a></p>
<ol>
<li>安装 <code>vite-plugin-svg-icons</code> 到项目中</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i --save-dev vite-plugin-svg-icons@2.0.1
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="2">
<li>在 <code>vite.config.js</code> 中注册</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">...</span>
<span class="token keyword">import</span> path<span class="token punctuation">,</span> <span class="token punctuation">{</span> join <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'path'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createSvgIconsPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vite-plugin-svg-icons'</span>

<span class="token comment">// https://vitejs.dev/config/</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">createSvgIconsPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">// 指定需要缓存的图标文件夹</span>
      <span class="token literal-property property">iconDirs</span><span class="token operator">:</span> <span class="token punctuation">[</span>path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span><span class="token function">cwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">'src/assets/icons'</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token comment">// 指定symbolId格式</span>
      <span class="token literal-property property">symbolId</span><span class="token operator">:</span> <span class="token string">'icon-[name]'</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token operator">...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><ol start="3">
<li>在 <code>main.js</code> 中完成注册</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">'virtual:svg-icons-register'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>重新运行项目</p>
<p><img src="@source/.vuepress/public/images/navi01.png" alt="图片"></p>
<h2 id="移动端-slider-处理" tabindex="-1"><a class="header-anchor" href="#移动端-slider-处理" aria-hidden="true">#</a> 移动端 slider 处理</h2>
<p><img src="@source/.vuepress/public/images/slider.png" alt="图片"></p>
<p>接下来我们来处理对应的 <code>slider</code> 选中滑块。</p>
<p>对于选中滑块而言，我们想要处理分为两部分：</p>
<ol>
<li><code>slider</code> 滑块的本身样式</li>
<li>滑块切换时逻辑与滚动动画</li>
</ol>
<h4 id="slider-样式处理" tabindex="-1"><a class="header-anchor" href="#slider-样式处理" aria-hidden="true">#</a> slider 样式处理</h4>
<p>在 <code>src/views/main/components/navigation/mobile/index.vue</code> 中新增：</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token comment">&lt;!-- 滑块 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span>
  <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>sliderTarget<span class="token punctuation">"</span></span>
  <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>absolute h-[22px] bg-zinc-900 rounded-lg duration-200<span class="token punctuation">"</span></span>
  <span class="token attr-name">:style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>sliderStyle<span class="token punctuation">"</span></span>
<span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>

<span class="token comment">// 滑块 : height 固定,  需要改变的是 translateX的值和 width的值</span>
<span class="token keyword">const</span> sliderStyle <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token string">'translateX(0px)'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">'60px'</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h4 id="处理切换逻辑" tabindex="-1"><a class="header-anchor" href="#处理切换逻辑" aria-hidden="true">#</a> 处理切换逻辑</h4>
<p><img src="@source/.vuepress/public/images/navi02.png" alt="图片"></p>
<p>当 <code>slider</code> 进行切换时，它的当前位置就是通过 <code>translateX</code> 进行指定，也就是说只需要 <strong>计算出当前点击的 <code>item 位置与宽度即可</code></strong></p>
<p>就需要具备以下内容：</p>
<ol>
<li>选中的 <code>item</code> 下标：<code>currentCategoryIndex</code></li>
<li>所有的 item 元素：<code>itemRefs</code></li>
<li><code>ul</code> 的<strong>横向滚动偏离位置</strong>：<code>ulScrollLeft</code></li>
<li>最后在 <code>currentCategoryIndex</code> 发生改变时，获取 <code>item</code> 下标元素的 <code>left</code> 和 <code>width</code>，计算 <code>sliderStyle</code> 即可</li>
</ol>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  ...
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span>
      <span class="token attr-name">...</span>
      <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ulRef<span class="token punctuation">"</span></span>
    <span class="token punctuation">></span></span>
      ...

      <span class="token comment">&lt;!-- slider 滑块 --></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span>
        <span class="token attr-name">...</span>
        <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>sliderRef<span class="token punctuation">"</span></span>
        <span class="token attr-name">:style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>sliderStyle<span class="token punctuation">"</span></span>
      <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>

      <span class="token comment">&lt;!-- category item --></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span>
        <span class="token attr-name">...</span>
        <span class="token attr-name">:ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>setItemRef<span class="token punctuation">"</span></span>
        <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onItemClick(index)<span class="token punctuation">"</span></span>
      <span class="token punctuation">></span></span>
        {{ item.name }}
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> watch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useScroll <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vueuse/core'</span><span class="token punctuation">;</span>
<span class="token operator">...</span><span class="token punctuation">.</span>
<span class="token comment">// slider 的样式:</span>
<span class="token keyword">const</span> sliderStyle <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">'60px'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token string">'translateX(0px)'</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 当前分类的 index</span>
<span class="token keyword">const</span> currentCategoryIndex <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token comment">// 切换 index</span>
<span class="token keyword">const</span> <span class="token function-variable function">onItemClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">index</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  currentCategoryIndex<span class="token punctuation">.</span>value <span class="token operator">=</span> index
<span class="token punctuation">}</span>
<span class="token comment">// 所有 category 的 el 数组</span>
<span class="token keyword">const</span> itemRefs <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> <span class="token function-variable function">setItemRef</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">el</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>el<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    itemRefs<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token function">onBeforeUpdate</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> <span class="token comment">// 数据变化之后, dom 变化之前</span>
  itemRefs <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> ulRef <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> ulScrollLeft <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useScroll</span><span class="token punctuation">(</span>ulRef<span class="token punctuation">)</span>
<span class="token comment">// 监听 currentCategoryIndex 的变化, 把对应元素的 width 和 left 赋值给slider的样式</span>
<span class="token function">watch</span><span class="token punctuation">(</span>currentCategoryIndex<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">newIndex</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> currentCategoryEl <span class="token operator">=</span> itemRefs<span class="token punctuation">[</span>newIndex<span class="token punctuation">]</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> width<span class="token punctuation">,</span> left <span class="token punctuation">}</span> <span class="token operator">=</span> currentCategoryEl<span class="token punctuation">.</span><span class="token function">getBoundingClientRect</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token comment">// 改样式</span>
  sliderStyle<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> width <span class="token operator">+</span> <span class="token string">'px'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">translateX(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>ulScrollLeft<span class="token punctuation">.</span>value <span class="token operator">+</span> left <span class="token operator">-</span> <span class="token number">10</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">px)</span><span class="token template-punctuation string">`</span></span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br></div></div><p>那么此时，就可以完成对应的一个 <code>slider</code> 切换效果。</p>
<p>最后只需要指定对应的 选中文字高亮即可</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token comment">&lt;!-- category item --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span>
  <span class="token attr-name">...</span>
  <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{
    <span class="token punctuation">'</span>text-zinc-100 <span class="token punctuation">'</span>: currentCategoryIndex === index
  }<span class="token punctuation">"</span></span>
<span class="token punctuation">></span></span>
  {{ item.name }}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></template>
