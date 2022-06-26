<template><h1 id="options-api" tabindex="-1"><a class="header-anchor" href="#options-api" aria-hidden="true">#</a> Options API</h1>
<h2 id="组件实例" tabindex="-1"><a class="header-anchor" href="#组件实例" aria-hidden="true">#</a> 组件实例</h2>
<h3 id="refs" tabindex="-1"><a class="header-anchor" href="#refs" aria-hidden="true">#</a> $refs</h3>
<p>某些情况下 , 我们在组件中想要获取到<strong>元素对象</strong>或者<strong>子组件实例</strong></p>
<ul>
<li>Vue 开发中不推荐进行 DOM 操作</li>
<li>可以在<strong>元素</strong>或者<strong>组件</strong>绑定一个<code>ref</code>的<code>attribute</code>属性</li>
</ul>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>comp</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>comp<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>comp</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> comp <span class="token keyword">from</span> <span class="token string">'./components/comp.vue'</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span><span class="token punctuation">{</span>comp<span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//访问元素</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>title<span class="token punctuation">)</span>

    <span class="token comment">// 访问组件实例</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>comp<span class="token punctuation">.</span>$el<span class="token punctuation">)</span>
    <span class="token comment">// 访问组件实例的数据, 方法</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>comp<span class="token punctuation">.</span>message<span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>comp<span class="token punctuation">.</span><span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h3 id="parent-和-root" tabindex="-1"><a class="header-anchor" href="#parent-和-root" aria-hidden="true">#</a> $parent 和 $root</h3>
<ul>
<li>$parent : 访问父元素, 没有就 null</li>
<li>$root: 访问根元素</li>
</ul>
<p><strong>注意</strong>: Vue3 <strong>移除了 <code>$children</code>的属性</strong> , 所以不可以使用了</p>
<h3 id="el" tabindex="-1"><a class="header-anchor" href="#el" aria-hidden="true">#</a> $el</h3>
<ul>
<li>
<p>该组件实例的根节点</p>
</li>
<li>
<p><code>$el</code> 直到组件挂载完成 <code>(mounted)</code> 之前都会是 <code>undefined</code></p>
</li>
</ul>
<h3 id="attrs" tabindex="-1"><a class="header-anchor" href="#attrs" aria-hidden="true">#</a> $attrs</h3>
<h4 id="非props的attribute" tabindex="-1"><a class="header-anchor" href="#非props的attribute" aria-hidden="true">#</a> 非props的attribute</h4>
<ul>
<li>当我们<strong>传递给一个组件某个属性</strong> , 但是该属性并没有定义对应的<code>props</code>或者<code>emits</code>, 就称之为<strong>非props的attribute</strong></li>
<li>常见的包括<strong>class , style , id属性等</strong></li>
</ul>
<h4 id="attribute-继承" tabindex="-1"><a class="header-anchor" href="#attribute-继承" aria-hidden="true">#</a> attribute 继承</h4>
<ul>
<li>当<strong>组件有单个根节点时</strong> , <strong>非props的attribute将自动添加到根节点的Attribute</strong>中</li>
</ul>
<p>如果<strong>不希望组建的根元素继承attribute</strong>,可以在组件中设置 <strong><code>inheritAttrs:false</code></strong></p>
<ul>
<li>禁用attribute继承的<strong>常见情况</strong>是需要<strong>将attribute应用在根元素之外的其他元素上</strong></li>
<li>可以<strong>通过<code>$attrs</code>来访问所有的非props的attribute</strong></li>
</ul>
<h4 id="多个根节点的attribute" tabindex="-1"><a class="header-anchor" href="#多个根节点的attribute" aria-hidden="true">#</a> 多个根节点的attribute</h4>
<ul>
<li><strong>多个根节点的attribute如果没有显示地绑定</strong>, 那么会报警告 , <strong>所以必须要手动地指定具体要绑到哪一个元素</strong></li>
</ul>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$attrs.class<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>多个根节点<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>多个根节点<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></template>
