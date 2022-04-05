<template><h1 id="v-show和v-if有什么区别" tabindex="-1"><a class="header-anchor" href="#v-show和v-if有什么区别" aria-hidden="true">#</a> v-show和v-if有什么区别？</h1>
<h2 id="_1-v-show与v-if的共同点" tabindex="-1"><a class="header-anchor" href="#_1-v-show与v-if的共同点" aria-hidden="true">#</a> 1. v-show与v-if的共同点</h2>
<p>我们都知道在 <code>vue</code> 中 <code>v-show</code> 与 <code>v-if</code> 的作用效果是相同的(不含v-else)，都能控制元素在页面是否显示</p>
<p>在用法上也是相同的</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>div v<span class="token operator">-</span>show<span class="token operator">=</span><span class="token string">"visible"</span> <span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>    
<span class="token operator">&lt;</span>div v<span class="token operator">-</span><span class="token keyword">if</span><span class="token operator">=</span><span class="token string">"visible"</span> <span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>可用<code>true</code>或<code>false</code>控制在页面页面是否显示</p>
<h2 id="_2-v-show与v-if的区别" tabindex="-1"><a class="header-anchor" href="#_2-v-show与v-if的区别" aria-hidden="true">#</a> 2. v-show与v-if的区别</h2>
<ol>
<li>
<p>控制手段：<code>v-show</code>隐藏则是为该元素添加<code>css--display:none</code>，<code>dom</code>元素依旧还在。<code>v-if</code>显示隐藏是在Dom树中将dom元素整个添加或删除</p>
</li>
<li>
<p>编译过程：<code>v-if</code>切换有一个局部编译/卸载的过程，切换过程中合适地销毁和重建内部的事件监听和子组件；<code>v-show</code>只是简单的基于<code>css</code>切换</p>
</li>
<li>
<p>编译条件：<code>v-if</code>是真正的条件渲染</p>
</li>
</ol>
<ul>
<li>
<p><code>v-show</code> 由<code>false</code>变为<code>true</code>不会触发组件的生命周期 , 因为它的本质是用<code>css--display:none</code>控制</p>
</li>
<li>
<p><code>v-if</code>由<code>false</code>变为<code>true</code>，会触发组件的<code>beforeCreate</code>、<code>create</code>、<code>beforeMount</code>、<code>mounted</code>钩子， 由<code>true</code>变为<code>false</code>的时候触发组件的<code>beforeDestory</code>、<code>destoryed</code>方法</p>
</li>
</ul>
<p>4.其他</p>
<ul>
<li><code>v-if</code>支持在<code>&lt;template&gt;</code>标签中使用 , 而<code>v-show</code>不支持</li>
</ul>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>条件<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>     <span class="token comment">&lt;!--可以这么写--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">v-show</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>条件<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>   <span class="token comment">&lt;!--不可以这么写!--></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul>
<li><code>v-if</code>有<code>v-else</code>,<code>v-else-if</code>, 而<code>v-show</code>没有</li>
</ul>
<h2 id="_3-v-show与v-if的使用场景" tabindex="-1"><a class="header-anchor" href="#_3-v-show与v-if的使用场景" aria-hidden="true">#</a> 3. v-show与v-if的使用场景</h2>
<p><code>v-if</code> 与 <code>v-show</code> 都能控制dom元素在页面的显示</p>
<p><code>v-if</code> 相比 <code>v-show</code> 开销更大的（直接操作dom节点增加与删除）</p>
<p>如果需要非常频繁地切换，则使用 <code>v-show</code> 较好</p>
<p>如果在运行时条件很少改变，则使用 <code>v-if</code> 较好</p>
</template>
