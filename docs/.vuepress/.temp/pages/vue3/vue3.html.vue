<template><h1 id="vue2到vue3的变化" tabindex="-1"><a class="header-anchor" href="#vue2到vue3的变化" aria-hidden="true">#</a> Vue2到Vue3的变化</h1>
<blockquote>
<p>Vue3 为什么使用 Proxy?</p>
</blockquote>
<ul>
<li>(1)弥补<code>Onject.defineProperty</code>的两个不足
<strong>动态</strong>创建的<code>data</code>属性需要用<code>Vue.set</code>来赋值 , <code>Vue3</code>用了<code>Proxy</code>就不需要了
如果一开始属性不在<code>data</code>里面 , 突然我对<code>data</code>突然增加了一个属性 , 那么<code>vue</code>是不知道的
基于性能考虑 , <code>Vue2</code> 篡改了数组的7个API , <code>Vue</code>用了<code>proxy</code>就不需要了</li>
<li>(2) <code>defineProperty</code>需要提前递归遍历<code>data</code>做到响应式 ,
而<code>proxy</code>可以在真正需要深层数据的时候在做响应式(<strong>惰性</strong>)</li>
</ul>
<blockquote>
<p>为什么使用  composition API ?</p>
</blockquote>
<ul>
<li>(1)解决了数据来源不清晰</li>
<li>(2)更适合<code>typescript</code></li>
</ul>
<blockquote>
<p>Vue2 到 Vue3 的变动</p>
</blockquote>
<ul>
<li>(1)<code>createApp()</code> 代替了<code>new Vue()</code></li>
<li>(2)<code>v-model</code>代替了 <code>v-model</code> 和 <code>.sync</code></li>
<li>(3)根元素不只有一个了</li>
<li>(4)新增<code>Teleport</code>传送门</li>
<li>(5)<code>destroyed</code>改名为<code>unMounted</code></li>
<li>(6)<code>ref</code>属性支持函数了</li>
<li>(7)新增了 <code>composition API</code></li>
</ul>
</template>
