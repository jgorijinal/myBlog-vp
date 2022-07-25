<template><h1 id="组件通信" tabindex="-1"><a class="header-anchor" href="#组件通信" aria-hidden="true">#</a> 组件通信</h1>
<h2 id="父子组件通信" tabindex="-1"><a class="header-anchor" href="#父子组件通信" aria-hidden="true">#</a> 父子组件通信</h2>
<ul>
<li>父组件传递给子组件: <strong>通过 props 属性</strong></li>
<li>子组件传递给父组件: <strong>通过 $emit 触发事件</strong></li>
</ul>
<p><img src="@source/.vuepress/public/images/prop1.png" alt="图片"></p>
<h2 id="非-prop-的-attribute" tabindex="-1"><a class="header-anchor" href="#非-prop-的-attribute" aria-hidden="true">#</a> 非 prop 的 attribute</h2>
<ul>
<li>当我们<strong>传递给一个组件某个属性</strong>，但是<strong>该属性并没有定义对应的 props 或者 emits 时</strong>，就称之为 非Prop的
Attribute；</li>
<li>常见的包括 class、style、id 属性等</li>
</ul>
<p><strong>Attribute继承</strong></p>
<ul>
<li>当<strong>组件有单个根节点</strong>时，<strong>非Prop的Attribute将自动添加到根节点的Attribute</strong></li>
</ul>
<h2 id="禁用attribute继承和多根节点" tabindex="-1"><a class="header-anchor" href="#禁用attribute继承和多根节点" aria-hidden="true">#</a> 禁用Attribute继承和多根节点</h2>
<p>如果不希望组件的根元素继承 attribute，可以在组件中设置 <strong>inheritAttrs: false</strong></p>
<ul>
<li>禁用attribute继承的常见情况是<strong>需要将 attribute 应用于根元素之外的其他元素</strong></li>
<li>可以通过 <strong>$attrs来访问所有的 非props的attribute</strong></li>
</ul>
<p><img src="@source/.vuepress/public/images/at1.png" alt="图片"></p>
<p>多个根节点的attribute</p>
<ul>
<li><strong>多个根节点的attribute如果没有显示的绑定</strong>，那么会报警告，<strong>必须手动的指定要绑定到哪一个属性上</strong></li>
</ul>
<p><img src="@source/.vuepress/public/images/at2.png" alt="图片"></p>
<h2 id="子组件传递给父组件" tabindex="-1"><a class="header-anchor" href="#子组件传递给父组件" aria-hidden="true">#</a> 子组件传递给父组件</h2>
<p>什么情况下子组件需要传递内容到父组件呢？</p>
<ul>
<li>当<strong>子组件有一些事件发生的时候</strong>，比如在组件中发生了点击，父组件需要切换内容；</li>
<li>子组件<strong>有一些内容想要传递给父组件的时候</strong></li>
</ul>
<p>那如何操作？</p>
<ul>
<li>首先，需要在<strong>子组件中定义好在某些情况下触发的事件名称</strong></li>
<li>其次，在<strong>父组件中以v-on的方式传入要监听的事件名称，并且绑定到对应的方法中</strong></li>
<li>最后，在<strong>子组件中发生某个事件的时候，根据事件名称触发对应的事件</strong></li>
</ul>
<h3 id="自定义事件的流程" tabindex="-1"><a class="header-anchor" href="#自定义事件的流程" aria-hidden="true">#</a> 自定义事件的流程</h3>
<p><img src="@source/.vuepress/public/images/cpcp.png" alt="图片"></p>
<h3 id="自定义事件的参数和验证" tabindex="-1"><a class="header-anchor" href="#自定义事件的参数和验证" aria-hidden="true">#</a> 自定义事件的参数和验证</h3>
<ul>
<li>自定义事件的时候，我们也可以传递一些参数给父组件：
<img src="@source/.vuepress/public/images/gh1.png" alt="图片"></li>
<li>在vue3当中，我们可以对传递的参数进行验证
<img src="@source/.vuepress/public/images/gh2.png" alt="图片"></li>
</ul>
<h2 id="非父子组件通信" tabindex="-1"><a class="header-anchor" href="#非父子组件通信" aria-hidden="true">#</a> 非父子组件通信</h2>
<p>除了<strong>父子组件通信</strong>之外, 还会有<strong>非父子组件之间的通信</strong></p>
<p>主**要有两种方法</p>
<ul>
<li><strong>provide / inject</strong></li>
<li><strong>Mitt全局事件总线</strong></li>
</ul>
<h3 id="provide-inject-依赖注入" tabindex="-1"><a class="header-anchor" href="#provide-inject-依赖注入" aria-hidden="true">#</a> provide / inject 依赖注入</h3>
<p><img src="@source/.vuepress/public/images/provideInject.png" alt="图片"></p>
<h4 id="provide" tabindex="-1"><a class="header-anchor" href="#provide" aria-hidden="true">#</a> provide</h4>
<p>为组件后代供给数据</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">provide</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">'hello!'</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>如果要提供组件内 <strong>data()定义</strong> 的数,要用<strong>函数</strong>的形式 , 但<strong>这不会保持响应性</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">'hello!'</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">provide</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 使用函数的形式，可以访问到 `this`</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>message
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>为保证<code>provide</code>和<code>inject</code>的<strong>响应性</strong>链接, <strong>需要使用<code>computed()</code>属性</strong></p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> comp <span class="token keyword">from</span> <span class="token string">'./composition/comp.vue'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>computed<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>comp<span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">message</span><span class="token operator">:</span><span class="token string">'message'</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">provide</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">length</span><span class="token operator">:</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token keyword">this</span><span class="token punctuation">.</span>message<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h4 id="inject" tabindex="-1"><a class="header-anchor" href="#inject" aria-hidden="true">#</a> inject</h4>
<p>要注入祖先组件提供的数据 , 需要用<code>inject</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">inject</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">'message'</span><span class="token punctuation">]</span><span class="token punctuation">.</span>
  <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>message<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="全局事件总线mitt库" tabindex="-1"><a class="header-anchor" href="#全局事件总线mitt库" aria-hidden="true">#</a> 全局事件总线mitt库</h3>
<p>Vue3 从实例中<strong>移除了</strong><code>$on</code>,'$off','$once'方法 , <strong>如果想使用全局事件总线, 要通过第三方的库:</strong></p>
<ul>
<li>Vue3官方有推荐的一些库, 例如 <code>mitt</code> 或 <code>tiny-emitter</code>;</li>
<li>先主要了解一下 <a href="https://github.com/developit/mitt" target="_blank" rel="noopener noreferrer">mitt库<ExternalLinkIcon/></a> 的使用;</li>
</ul>
<p>安装</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> --save mitt
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>utils/eventBus.js</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> mitt <span class="token keyword">from</span> <span class="token string">'mitt'</span>

<span class="token keyword">const</span> emitter  <span class="token operator">=</span> <span class="token function">mitt</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> emitter
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> emitter <span class="token keyword">from</span> <span class="token string">"../utils/eventBus"</span><span class="token punctuation">;</span>

emitter<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">'eventName'</span> <span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'frank'</span><span class="token punctuation">,</span><span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">18</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

emitter<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'eventName'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">//监听所有的事件 *</span>
emitter<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'*'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">type <span class="token punctuation">,</span> data</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>type <span class="token punctuation">,</span> data<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h4 id="mitt-取消监听" tabindex="-1"><a class="header-anchor" href="#mitt-取消监听" aria-hidden="true">#</a> Mitt 取消监听</h4>
<p>在某些情况下 , <strong>可能希望取消掉之前注册的函数监听</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> emitter <span class="token keyword">from</span> <span class="token string">"../utils/eventBus"</span><span class="token punctuation">;</span>

<span class="token comment">// 定义一个函数</span>
<span class="token keyword">function</span> <span class="token function">onFoo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
emitter<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'foo'</span><span class="token punctuation">,</span>onFoo<span class="token punctuation">)</span>   <span class="token comment">// 监听</span>
emitter<span class="token punctuation">.</span><span class="token function">off</span><span class="token punctuation">(</span><span class="token string">'foo'</span><span class="token punctuation">,</span>onFoo<span class="token punctuation">)</span>  <span class="token comment">// 取消监听</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></template>
