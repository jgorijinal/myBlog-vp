<template><h1 id="v-show和v-if有什么区别" tabindex="-1"><a class="header-anchor" href="#v-show和v-if有什么区别" aria-hidden="true">#</a> v-show和v-if有什么区别？</h1>
<h2 id="v-show与v-if的共同点" tabindex="-1"><a class="header-anchor" href="#v-show与v-if的共同点" aria-hidden="true">#</a> v-show与v-if的共同点</h2>
<p>我们都知道在 <code>vue</code> 中 <code>v-show</code> 与 <code>v-if</code> 的作用效果是相同的(不含v-else)，都能控制元素在页面是否显示</p>
<p>在用法上也是相同的</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>div v<span class="token operator">-</span>show<span class="token operator">=</span><span class="token string">"visible"</span> <span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>    
<span class="token operator">&lt;</span>div v<span class="token operator">-</span><span class="token keyword">if</span><span class="token operator">=</span><span class="token string">"visible"</span> <span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>可用<code>true</code>或<code>false</code>控制在页面页面是否显示</p>
<h2 id="v-show与v-if的区别" tabindex="-1"><a class="header-anchor" href="#v-show与v-if的区别" aria-hidden="true">#</a> v-show与v-if的区别</h2>
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
</template>
