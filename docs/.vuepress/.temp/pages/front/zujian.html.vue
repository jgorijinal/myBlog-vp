<template><h1 id="构建自己的组件库-实现前端设计" tabindex="-1"><a class="header-anchor" href="#构建自己的组件库-实现前端设计" aria-hidden="true">#</a> 构建自己的组件库 - 实现前端设计</h1>
<p>因为 <strong>前台系统</strong> 和 <strong>后台系统</strong> 的这种 <strong>根本性的设计区别（前台讲究个性化，后台偏同质化）</strong> ，所以这就导致了目前市面上的 <strong>通用组件库</strong> 更多的是 后台 PC 系统组件库（比如 element 或者 antd） 。</p>
<p>这就导致，如果想要开发一个前台系统，那么就需要拥有自己的 <strong>组件库</strong></p>
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
<p><img src="@source/.vuepress/public/images/slider1.png" alt="图片"></p>
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="补全-category-数据-全部" tabindex="-1"><a class="header-anchor" href="#补全-category-数据-全部" aria-hidden="true">#</a> 补全 category 数据 ('全部')</h2>
<p>对于 <code>category</code> 的数据而言，服务端返回的数据之中，还缺少一个 <strong>全部</strong> 的数据源，这个在实际开发中是非常常见的一个情况，服务端仅会返回 <strong>具体分类</strong> 而不包含 <strong>全部概念</strong></p>
<p>如果实际开发中也遇到了这样的情况的话，那么就需要 <strong>自定义数据</strong>，以补全缺失的展示数据</p>
<ol>
<li>在 <code>src/constants/index.js</code> 定义</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// category 的本地构建数据</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">ALL_CATEGORY_ITEM</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">'all'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'全部'</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ol start="2">
<li>在 <code>src/views/main/components/navigation/index.vue</code> 进行数据补全</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">getCategoryData</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token operator">...</span>
  categoryData<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span><span class="token constant">ALL_CATEGORY_ITEM</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ol start="3">
<li>修改 <code>src/views/main/components/navigation/mobile/index.vue</code> 中的 <code>sliderStyle</code> 初始宽度</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 滑块</span>
<span class="token keyword">const</span> sliderStyle <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token string">'translateX(0px)'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">'52px'</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="通用组件-弹出窗口-popup-能力分析" tabindex="-1"><a class="header-anchor" href="#通用组件-弹出窗口-popup-能力分析" aria-hidden="true">#</a> 通用组件：弹出窗口 - popup 能力分析</h2>
<p><img src="@source/.vuepress/public/images/popup1.png" alt="图片"></p>
<p>当点击 <strong>面包屑按钮</strong> 时，会有一个 弹出窗口 <code>popup</code> 自低而上弹出，那么这样的一个功能，一样可以把它处理为项目的 通用组件</p>
<p>那么想要处理 <code>popup</code> 的话，首先就需要先搞清楚 <code>popup</code> 的能力。</p>
<ol>
<li>当 <code>popup</code> 展开时，内容视图应该不属于任何一个 <strong>组件内部</strong> ，而应该直接被插入到 <code>body</code> 下面</li>
<li><code>popup</code> 应该包含两部分内容，一部分为背景蒙版，一部分为内容的包裹容器</li>
<li><code>popup</code> 应该通过一个双向绑定进行控制展示和隐藏</li>
<li><code>popup</code> 展示时，页面滚动应该被锁定(不让页面滚动)</li>
<li>内容区域应该接收所有的 <code>attrs</code>，并且应该通过插槽让调用方指定其内容</li>
</ol>
<h3 id="弹出窗口-popup-实现" tabindex="-1"><a class="header-anchor" href="#弹出窗口-popup-实现" aria-hidden="true">#</a> 弹出窗口-popup 实现</h3>
<ol>
<li>新建 <code>src/libs/popup/index.vue</code> 文件</li>
</ol>
<details class="custom-container details">
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>teleport</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>body<span class="token punctuation">'</span></span><span class="token punctuation">></span></span>
      <span class="token comment">&lt;!--蒙版--></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>transition</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fade<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>modelValue<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>w-screen h-screen fixed z-40 left-0 top-0 bg-zinc-900/80<span class="token punctuation">"</span></span>
          <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>emits(<span class="token punctuation">'</span>update:modelValue<span class="token punctuation">'</span>, false)<span class="token punctuation">"</span></span>
        <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>transition</span><span class="token punctuation">></span></span>
      <span class="token comment">&lt;!--弹出框--></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>transition</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>downToUp<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>modelValue<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>w-screen fixed  bottom-0 z-50 bg-white<span class="token punctuation">"</span></span> <span class="token attr-name">v-bind</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$attrs<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>transition</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>teleport</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> watch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useScrollLock <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vueuse/core'</span>
<span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">modelValue</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> Boolean<span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> emits <span class="token operator">=</span> <span class="token function">defineEmits</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'update:modelValue'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token comment">// 当popup 显示时 , 页面禁止滚动</span>
<span class="token keyword">const</span> isLocked <span class="token operator">=</span> <span class="token function">useScrollLock</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span>body<span class="token punctuation">)</span>
<span class="token function">watch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> props<span class="token punctuation">.</span>modelValue<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    isLocked<span class="token punctuation">.</span>value <span class="token operator">=</span> val
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    isLocked<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">immediate</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  <span class="token selector">.fade-enter-active,.fade-leave-active</span> <span class="token punctuation">{</span>
    <span class="token property">transition</span><span class="token punctuation">:</span> all 0.25s ease<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.fade-enter-from,.fade-leave-to</span> <span class="token punctuation">{</span>
    <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.downToUp-enter-active,.downToUp-leave-active</span> <span class="token punctuation">{</span>
    <span class="token property">transition</span><span class="token punctuation">:</span> all 0.25s ease<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.downToUp-enter-from,.downToUp-leave-to</span> <span class="token punctuation">{</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br></div></div></details>
<ol start="2">
<li>在 src/libs/index.js 中注册该组件</li>
</ol>
<details class="custom-container details">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> svgIcon <span class="token keyword">from</span> <span class="token string">'./svg-icon/index.vue'</span>
<span class="token keyword">import</span> popup <span class="token keyword">from</span> <span class="token string">'./popup/index.vue'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">install</span><span class="token punctuation">(</span><span class="token parameter">app</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">'m-svg-icon'</span><span class="token punctuation">,</span> svgIcon<span class="token punctuation">)</span>
    app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">'m-popup'</span><span class="token punctuation">,</span> popup<span class="token punctuation">)</span>
  <span class="token punctuation">}</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></details>
<ol start="3">
<li>在 <code>src/views/main/components/navigation/mobile/index.vue</code> 中使用该组件</li>
</ol>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token comment">&lt;!-- 汉堡按钮 --></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span>
        <span class="token attr-name">...</span>
        <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>isOpenPopup = !isOpenPopup<span class="token punctuation">"</span></span>
      <span class="token punctuation">></span></span>
        ...
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>m-popup</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>isOpenPopup<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>测试内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>m-popup</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// popup 展示</span>
<span class="token keyword">const</span> isOpenPopup <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="vite-通用组件自动化注册" tabindex="-1"><a class="header-anchor" href="#vite-通用组件自动化注册" aria-hidden="true">#</a> vite 通用组件自动化注册</h2>
<p>目前在项目中已经完成了两个通用组件，将来还会完成更多的通用组件开发。那么如果每次开发完成一个通用组件之后，都去手动进行注册，未免有些过于麻烦了，所以我们期望通过 <strong><code>vite</code> 提供的功能，进行通用组件的自动化注册</strong></p>
<p>如果想要完成这个功能的话，就需要使用到两个关键的知识点：</p>
<ol>
<li><a href="https://cn.vitejs.dev/guide/features.html#glob-import" target="_blank" rel="noopener noreferrer">vite 的 Glob 导入 功能<ExternalLinkIcon/></a>：该功能可以帮助我们在 <strong>文件系统中导入多个模块</strong></li>
<li><a href="https://v3.cn.vuejs.org/api/global-api.html#defineasynccomponent" target="_blank" rel="noopener noreferrer">vue 的 defineAsyncComponent 方法<ExternalLinkIcon/></a>：该方法可以创建一个 <strong>按需加载的异步组件</strong></li>
</ol>
<p>基于以上两个方法，实现 <strong>组件自动注册</strong></p>
<p>在 <code>src/libs/index.js</code> 中：</p>
<details class="custom-container details">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineAsyncComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">install</span><span class="token punctuation">(</span><span class="token parameter">app</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 获取当前路径任意文件夹下的 index.vue 文件</span>
    <span class="token keyword">const</span> components <span class="token operator">=</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span><span class="token function">glob</span><span class="token punctuation">(</span><span class="token string">'./*/index.vue'</span><span class="token punctuation">)</span>
    <span class="token comment">// 遍历获取到的组件模块</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token punctuation">[</span>key<span class="token punctuation">,</span> value<span class="token punctuation">]</span> <span class="token keyword">of</span> Object<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span>components<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 拼接组件注册的 name</span>
      <span class="token keyword">const</span> componentName <span class="token operator">=</span> <span class="token string">'m-'</span> <span class="token operator">+</span> key<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">'./'</span><span class="token punctuation">,</span> <span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
      <span class="token comment">// 通过 defineAsyncComponent 异步导入指定路径下的组件</span>
      app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span>componentName<span class="token punctuation">,</span> <span class="token function">defineAsyncComponent</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div></details>
<h2 id="业务组件-移动端弹层-menu" tabindex="-1"><a class="header-anchor" href="#业务组件-移动端弹层-menu" aria-hidden="true">#</a> 业务组件：移动端弹层 menu</h2>
<p><img src="@source/.vuepress/public/images/popmenu.png" alt="图片"></p>
<p>当 <code>popup</code> 弹出时，期望在内部展示一个对应的 列表 <code>menu</code>，这一块就是一个标准的业务组件，可以直接去进行渲染</p>
<p>创建 <code>src/views/main/components/menu/index.vue</code></p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>h-[80vh] py-1 flex flex-col<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>px-1 pb-1 font-bold text-xl<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>所有分类<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>overflow-y-scroll<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item,index in categorys<span class="token punctuation">"</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>index<span class="token punctuation">"</span></span>
        <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>px-1 py-1 text-lg active:bg-zinc-200 duration-200<span class="token punctuation">"</span></span>
        <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onItemClick(index)<span class="token punctuation">"</span></span>
      <span class="token punctuation">></span></span>
        {{item.name}}
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">categorys</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> Array<span class="token punctuation">,</span>
    <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> emits <span class="token operator">=</span> <span class="token function">defineEmits</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'itemClick'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment">// 点击 item 时 触发事件</span>
<span class="token keyword">const</span> <span class="token function-variable function">onItemClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">index</span><span class="token punctuation">)</span><span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token function">emits</span><span class="token punctuation">(</span><span class="token string">'itemClick'</span><span class="token punctuation">,</span> index<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><p>在 <code>src/views/main/components/navigation/mobile/index.vue</code> 接受数据，并触发事件函数</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>m-popup</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>isOpenPopup<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>menu-vue</span> <span class="token attr-name">:categorys</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>data<span class="token punctuation">"</span></span> <span class="token attr-name">@itemClick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>itemClick<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>menu-vue</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>m-popup</span><span class="token punctuation">></span></span>

// item 点击事件
const itemClick = (index) => {
  currentCategoryIndex.value = index
  isVisible.value = false
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p>在这里处理了 <strong>移动端的 navgationBar 模块</strong>，在处理该模块的过程中，做了：</p>
<ol>
<li>自定义了两个通用组件，这两个组件都是将来可以被随意放入到 <strong>中台组件库/物料库</strong> 中：</li>
</ol>
<ul>
<li><code>svg-icon</code></li>
<li><code>popup</code></li>
</ul>
<ol start="2">
<li>修正了 <code>rem</code> 值，对于移动端的 <code>rem</code> 处理目前可以根据设备的不同来自动修正</li>
<li>基于 <code>vite</code> 的 <code>svg</code> 矢量图导入和自动组件注册</li>
<li>使用了 <code>vueuse</code> 中更多的功能方法</li>
</ol>
</template>
