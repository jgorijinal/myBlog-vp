<template><h1 id="异步组件" tabindex="-1"><a class="header-anchor" href="#异步组件" aria-hidden="true">#</a> 异步组件</h1>
<p><a href="https://staging-cn.vuejs.org/api/general.html#defineasynccomponent" target="_blank" rel="noopener noreferrer">官网<ExternalLinkIcon/></a></p>
<h2 id="基本使用" tabindex="-1"><a class="header-anchor" href="#基本使用" aria-hidden="true">#</a> 基本使用</h2>
<p>在大型项目中，我们可能需要拆分应用为更小的块，并仅在需要时再从服务器加载相关组件。为实现这点，<code>Vue</code> 提供了一个 <code>defineAsyncComponent</code> 方法：</p>
<p>ES 模块动态导入也会返回一个<code>Promise</code>，所以多数情况下我们会将它和 <code>defineAsyncComponent</code> 搭配使用，类似 <code>Vite</code> 和 <code>Webpack</code> 这样的构建工具也支持这种语法，因此我们也可以用它来导入 <code>Vue</code> <strong>单文件组件</strong></p>
<p><code>defineAsyncComponent</code>接受两种类型的参数</p>
<ul>
<li><strong>类型一</strong>: 工厂函数 , 该工厂函数需要返回一个<code>Promise</code></li>
<li><strong>类型二</strong>: 接受一个对象类型 , 对异步函数进行配置</li>
</ul>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>defineAsyncComponent<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> AsyncComp <span class="token operator">=</span> <span class="token function">defineAsyncComponent</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'./asyncComponent.vue'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AsyncComp</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>AsyncComp</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="加载与错误状态-对象的写法" tabindex="-1"><a class="header-anchor" href="#加载与错误状态-对象的写法" aria-hidden="true">#</a> 加载与错误状态(对象的写法)</h2>
<p>(用得少 , 大多数用上面方法)</p>
<p>异步操作会导致加载失败或错误状态 , <code>defineAsyncComponent</code>支持通过<strong>高级选项</strong>处理这些状态</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>defineAsyncComponent<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> AsyncComp <span class="token operator">=</span> <span class="token function">defineAsyncComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// 工厂函数</span>
  <span class="token function-variable function">loader</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'./asyncComponent.vue'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token comment">// 加载过程中显示的组件</span>
  <span class="token literal-property property">loadingComponent</span><span class="token operator">:</span>loadingComponent<span class="token punctuation">,</span>
  <span class="token comment">// 加载失败时显示的组件</span>
  <span class="token literal-property property">errorComponent</span><span class="token operator">:</span>errorComponent<span class="token punctuation">,</span>
  <span class="token comment">// 在显示 loadingComponent之前的延迟时间 / 默认 200ms</span>
  <span class="token literal-property property">delay</span><span class="token operator">:</span><span class="token number">200</span><span class="token punctuation">,</span>
  <span class="token comment">// 如果提供了 timeout , 并且加载组件的事件超过了设定值 ,将显示失败组件</span>
  <span class="token comment">// 默认是 infinity (即用不超时 , 单位 ms)</span>
  <span class="token comment">// timeout : 0</span>

  <span class="token comment">//定义组件是否挂起 | 默认值:true</span>
  <span class="token literal-property property">suspensible</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>

  <span class="token comment">/*
  * error:错误信息
  * retry: 函数 ,调用 retry 尝试重新加载
  * fail: 函数
  * attempts: 记录尝试次数
  * */</span>
  <span class="token function">onError</span><span class="token punctuation">(</span><span class="token parameter">error<span class="token punctuation">,</span>retry<span class="token punctuation">,</span>fail<span class="token punctuation">,</span>attempts</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><p><img src="@source/.vuepress/public/images/dac.png" alt="图片"></p>
<h3 id="异步组件和suspense" tabindex="-1"><a class="header-anchor" href="#异步组件和suspense" aria-hidden="true">#</a> 异步组件和suspense</h3>
<p><code>Suspense</code>是一个内置的全局组件, 他有两个插槽</p>
<ul>
<li>default: 如果 default 能显示, 那么就显示 default 的内容</li>
<li>fallback: 如果 default 无法显示 , 那么会显示 fallback 的内容</li>
</ul>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>suspense</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#default</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>async-comp</span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#fallback</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>loadingComponent</span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>suspense</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></template>
