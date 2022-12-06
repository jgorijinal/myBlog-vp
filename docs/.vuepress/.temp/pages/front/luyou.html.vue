<template><h1 id="高阶路由过渡处理方案-浏览器堆栈主动介入" tabindex="-1"><a class="header-anchor" href="#高阶路由过渡处理方案-浏览器堆栈主动介入" aria-hidden="true">#</a> 高阶路由过渡处理方案 - 浏览器堆栈主动介入</h1>
<p>通过 <code>vue-router</code> 的过渡动效是无法实现期望的路由切换效果的</p>
<p>所谓路由的跳转无非指的是两个部分：</p>
<ol>
<li>浏览器的 <code>url</code> 发生了变化</li>
<li>浏览器中展示的页面组件发生了变化</li>
</ol>
<p>那么只要满足这两点，就认为 <strong>路径进行了跳转</strong></p>
<p>所以说，是不是可以换个思路，<strong>不去进行真实的路由跳转</strong> ，而是 <strong>先修改浏览器的 URL ，再切换展示的页面（以组件的形式覆盖整个浏览器可视区域）</strong> 。这样对于用户而言，就完成了整个的路由跳转工作</p>
<p>所以说具体问题就变成了：</p>
<ol>
<li>如何让浏览器的 <code>url</code> 发生变化，但是不跳转页面</li>
<li>如何让一个新的组件以包含动画的形式进行展示</li>
</ol>
<p>那么想要完成第一个功能可以使用：<a href="https://developer.mozilla.org/zh-CN/docs/Web/API/History/pushState" target="_blank" rel="noopener noreferrer">History.pushState()<ExternalLinkIcon/></a> 方法</p>
<p>而第二个功能可以使用 <a href="https://github.com/greensock/GSAP" target="_blank" rel="noopener noreferrer">GSAP<ExternalLinkIcon/></a> 这个动画库来进行实现</p>
<h2 id="主动介入浏览器堆栈管理" tabindex="-1"><a class="header-anchor" href="#主动介入浏览器堆栈管理" aria-hidden="true">#</a> 主动介入浏览器堆栈管理</h2>
<p>可以通过 <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/History/pushState" target="_blank" rel="noopener noreferrer">History.pushState()<ExternalLinkIcon/></a> 方法，来修改浏览器的 <code>url</code> ，并且<strong>不让浏览器发生对应的跳转</strong></p>
<ol>
<li>在 <code>src/views/main/components/list/item.vue</code> 中，添加 <code>div</code> 点击事件：</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">...</span>
<span class="token keyword">const</span> emits <span class="token operator">=</span> <span class="token function">defineEmits</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'click'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token doc-comment comment">/**
 * 进入详情点击事件
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">onToPinsClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token function">emits</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> props<span class="token punctuation">.</span>item<span class="token punctuation">.</span>id
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><ol start="2">
<li>在 <code>src/views/main/components/list/index.vue</code> 中，监听对应的点击事件，并修改对应路由：</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 监听 item 组件传的图片 id , 改变 url 地址</span>
<span class="token keyword">const</span> <span class="token function-variable function">onToPins</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// console.log(obj.id)</span>
  <span class="token comment">// 使用history api 的 pushState, 不刷新页面改变 url 地址</span>
  window<span class="token punctuation">.</span>history<span class="token punctuation">.</span><span class="token function">pushState</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> obj<span class="token punctuation">.</span>id <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="基于-gsap-实现高阶路由过渡动画分析" tabindex="-1"><a class="header-anchor" href="#基于-gsap-实现高阶路由过渡动画分析" aria-hidden="true">#</a> 基于 GSAP 实现高阶路由过渡动画分析</h2>
<p>当 <code>url</code> 发生变化之后，接下来就只需要处理对应的动画就可以了</p>
<p>动画的处理依赖于 <a href="https://github.com/greensock/GSAP" target="_blank" rel="noopener noreferrer">GSAP<ExternalLinkIcon/></a> 进行实现。对于 <code>GSAP</code> 而言，主要依赖两个方法：</p>
<ol>
<li><a href="https://greensock.com/docs/v3/GSAP/gsap.set()" target="_blank" rel="noopener noreferrer">gsap.set()<ExternalLinkIcon/></a> ：这个方法通常使用在动画开始之前，表示设置动画开始前的元素属性</li>
<li><a href="https://greensock.com/docs/v3/GSAP/gsap.to()" target="_blank" rel="noopener noreferrer">gsap.to()<ExternalLinkIcon/></a>：这个方法表示 <strong>最终元素展示的状态</strong>
<code>GSAP</code> 会基于 <code>set</code> 和 <code>to</code> 的状态，来自动执行中间的补间动画。</li>
</ol>
<p>所以只需要：</p>
<ol>
<li>创建一个对应的组件，使用 <code>transition</code> 进行包裹</li>
<li>计算出 <code>set</code> 时，组件元素对应的样式属性 (这里主要处理的是位置信息, 图片中心的位置.., 下同)</li>
<li>计算出 <code>to</code> 时，组件元素对应的样式属性</li>
</ol>
<p>然后就可以由 <code>GSAP</code> 自动实现对应的补间动画了</p>
<h3 id="基于-gsap-实现高阶路由过渡动画处理" tabindex="-1"><a class="header-anchor" href="#基于-gsap-实现高阶路由过渡动画处理" aria-hidden="true">#</a> 基于 GSAP 实现高阶路由过渡动画处理</h3>
<ol>
<li>
<p>创建 <code>src/views/pins/index.vue</code> 组件，该组件的作用之后再说</p>
</li>
<li>
<p>创建 <code>src/views/pins/components/pins.vue</code> 组件，该组件即为详情组件，在该组件中写入一些初始内容</p>
</li>
</ol>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fixed left-0 top-0 w-screen h-screen text-xl bg-slate-500 z-20<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    {{ id }}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// 图片的 id</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
    <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><ol start="3">
<li>在 <code>src/views/main/components/list/index.vue</code> 中使用 <code>pins</code> 组件，并使用 <code>transition</code> 进行包裹，并利用 <a href="https://v3.cn.vuejs.org/guide/transitions-enterleave.html#javascript-%E9%92%A9%E5%AD%90" target="_blank" rel="noopener noreferrer">JavaScript 钩子<ExternalLinkIcon/></a> 绑定对应的三个状态，并添加 <code>css=&quot;false&quot;</code></li>
</ol>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token comment">&lt;!-- 大图详情处理 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>transition</span> <span class="token attr-name">:css</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>false<span class="token punctuation">"</span></span> <span class="token attr-name">@before-enter</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>beforeEnter<span class="token punctuation">"</span></span> <span class="token attr-name">@enter</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>enter<span class="token punctuation">"</span></span> <span class="token attr-name">@leave</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>leave<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pins-vue</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>isVisiblePins<span class="token punctuation">"</span></span> <span class="token attr-name">:id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>currentPins.id<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>transition</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ol start="4">
<li>修改对应的 <code>onToPins</code> 方法</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">...</span>
    <span class="token operator">&lt;</span>item<span class="token operator">-</span>vue <span class="token operator">:</span>item<span class="token operator">=</span><span class="token string">"item"</span> <span class="token operator">:</span>width<span class="token operator">=</span><span class="token string">"width"</span> @click<span class="token operator">=</span><span class="token string">"onToPins"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>item<span class="token operator">-</span>vue<span class="token operator">></span>
<span class="token operator">...</span>
<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>pins 图片详情页面<span class="token operator">--</span><span class="token operator">></span>
<span class="token operator">&lt;</span>transition <span class="token operator">:</span>css<span class="token operator">=</span><span class="token string">"false"</span> @before<span class="token operator">-</span>enter<span class="token operator">=</span><span class="token string">"beforeEnter"</span> @enter<span class="token operator">=</span><span class="token string">"enter"</span> @leave<span class="token operator">=</span><span class="token string">"leave"</span><span class="token operator">></span>
  <span class="token operator">&lt;</span>pins<span class="token operator">-</span>vue v<span class="token operator">-</span><span class="token keyword">if</span><span class="token operator">=</span><span class="token string">"isPinsVisible"</span> <span class="token operator">:</span>id<span class="token operator">=</span><span class="token string">"currentPins.id"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>pins<span class="token operator">-</span>vue<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>transition<span class="token operator">></span>
<span class="token operator">...</span><span class="token punctuation">.</span>

<span class="token comment">// 点击的 pins 的数据</span>
<span class="token keyword">const</span> currentPins <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// pins 页面的显示/隐藏</span>
<span class="token keyword">const</span> isPinsVisible <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>

<span class="token comment">// 监听 item 组件传的图片 id , 改变 url 地址</span>
<span class="token keyword">const</span> <span class="token function-variable function">onToPins</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> <span class="token comment">// { 图片id , 图片中央位置信息 } 对象</span>
  currentPins<span class="token punctuation">.</span>value <span class="token operator">=</span> obj
  isPinsVisible<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">true</span>
  <span class="token comment">// 使用history api 的 pushState, 不刷新页面改变 url 地址</span>
  window<span class="token punctuation">.</span>history<span class="token punctuation">.</span><span class="token function">pushState</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">/pins/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>obj<span class="token punctuation">.</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>

  <span class="token comment">//img的中间位置 x,y</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>imgCenterInfo<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><ol start="5">
<li>那么此时点击即可展示出对应的 <code>pins</code> 组件</li>
</ol>
<p>接下来缺少的就是对应的动画内容</p>
<ol>
<li>在 <code>src/views/main/components/list/item.vue</code> 中，记录点击时当前 <code>item</code> 图片的中心位置，该位置即为<strong>动画的起点</strong>，此处将使用到 <a href="https://vueuse.org/core/useElementBounding/" target="_blank" rel="noopener noreferrer">useElementBounding<ExternalLinkIcon/></a> 方法, 把得到的位置信息传递到外面</li>
</ol>
<p>因为要做动画的话, 需要的是每张图片中心点的位置信息, 在编写 gsap 函数的时候会使用到位置信息</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 点击进入详情页面, 给父组件传 id</span>
<span class="token keyword">const</span> <span class="token function-variable function">onToPinsClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'item 中点击了图片详情'</span><span class="token punctuation">)</span> 
  <span class="token comment">// 使用 useElementBounding 拿到图片的位置信息</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> width<span class="token punctuation">,</span> height <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useElementBounding</span><span class="token punctuation">(</span>imgRef<span class="token punctuation">)</span>

  <span class="token comment">// 图片中心的位置信息</span>
  <span class="token keyword">const</span> imgCenterInfo <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>x<span class="token punctuation">.</span>value <span class="token operator">+</span> <span class="token punctuation">(</span>width<span class="token punctuation">.</span>value <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>y<span class="token punctuation">.</span>value <span class="token operator">+</span> <span class="token punctuation">(</span>height<span class="token punctuation">.</span>value <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token function">emits</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> props<span class="token punctuation">.</span>item<span class="token punctuation">.</span>id<span class="token punctuation">,</span>  <span class="token comment">// 图片 id</span>
    imgCenterInfo       <span class="token comment">// 图片中间位置信息 x,y</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><ol start="2">
<li>安装 <code>GSAP</code>:</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i --save gsap@3.9.1
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="3">
<li>在 <code>src/views/main/components/list/index.vue</code> 中，填充三个 <code>transition</code> 钩子：</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> gasp <span class="token keyword">from</span> <span class="token string">'gsap'</span>
<span class="token keyword">const</span> <span class="token function-variable function">beforeEnter</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">el</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  gsap<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">scaleX</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token literal-property property">scaleY</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token literal-property property">transformOrigin</span><span class="token operator">:</span> <span class="token string">'0 0'</span><span class="token punctuation">,</span>

    <span class="token literal-property property">opacity</span><span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token function-variable function">enter</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> done</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  gsap<span class="token punctuation">.</span><span class="token function">to</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">0.3</span><span class="token punctuation">,</span>
    <span class="token literal-property property">scaleX</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token literal-property property">scaleY</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token literal-property property">opacity</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token literal-property property">translateX</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token literal-property property">translateY</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token literal-property property">onComplete</span><span class="token operator">:</span> done
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token function-variable function">leave</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> done</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  gsap<span class="token punctuation">.</span><span class="token function">to</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">0.3</span><span class="token punctuation">,</span>
    <span class="token literal-property property">scaleX</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token literal-property property">scaleY</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token literal-property property">x</span><span class="token operator">:</span> currentPins<span class="token punctuation">.</span>value<span class="token punctuation">.</span>imgCenterInfo<span class="token operator">?.</span>x<span class="token punctuation">,</span>
    <span class="token literal-property property">y</span><span class="token operator">:</span> currentPins<span class="token punctuation">.</span>value<span class="token punctuation">.</span>imgCenterInfo<span class="token operator">?.</span>y<span class="token punctuation">,</span>
    <span class="token literal-property property">opacity</span><span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><p>那么此时可以实现 <code>item</code> 点击的跳转动画</p>
<p>此时可以监听浏览器的 <strong>后退</strong> 事件，在点击后退时，关闭 <code>pins</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'popstate'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  isPinsVisible<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></template>
