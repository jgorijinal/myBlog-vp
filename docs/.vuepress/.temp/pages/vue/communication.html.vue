<template><h1 id="vue组件之间的通信方式" tabindex="-1"><a class="header-anchor" href="#vue组件之间的通信方式" aria-hidden="true">#</a> Vue组件之间的通信方式</h1>
<h2 id="_1-组件间通信的分类" tabindex="-1"><a class="header-anchor" href="#_1-组件间通信的分类" aria-hidden="true">#</a> 1. 组件间通信的分类</h2>
<ul>
<li>父子组件之间的通信</li>
<li>兄弟组件之间的通信</li>
<li>祖孙与后代组件之间的通信</li>
<li>非关系组件间之间的通信
<img src="@source/.vuepress/public/images/communication.png" alt="图片"></li>
</ul>
<h2 id="_2-组件间通信的方案" tabindex="-1"><a class="header-anchor" href="#_2-组件间通信的方案" aria-hidden="true">#</a> 2. 组件间通信的方案</h2>
<p>我常用的<code>vue</code>的常规的通信方案</p>
<ol>
<li>通过 <code>props</code> 传递</li>
<li>通过 <code>$emit</code> 触发自定义事件</li>
<li>EventBus</li>
<li><code>Provide</code> 与 <code>Inject</code></li>
<li>VueX</li>
</ol>
<h3 id="props传递数据" tabindex="-1"><a class="header-anchor" href="#props传递数据" aria-hidden="true">#</a> props传递数据</h3>
<ul>
<li>适用场景：父组件传递数据给子组件</li>
<li>子组件设置<code>props</code>属性，定义接收父组件传递过来的参数</li>
<li>父组件在使用子组件标签中通过字面量来传递值</li>
</ul>
<p><code>Children.vue</code></p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>   <span class="token comment">//props的类型定义</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>    <span class="token comment">// 接收的类型为字符串  </span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">'Eren'</span>  <span class="token comment">// 默认值为 'Eren'</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> Number<span class="token punctuation">,</span>
      <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span>  <span class="token comment">// age属性必须传递 </span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p><code>Father.vue</code>组件</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Children</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>jack<span class="token punctuation">"</span></span> <span class="token attr-name">age</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>18<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Children</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="emit-触发自定义事件" tabindex="-1"><a class="header-anchor" href="#emit-触发自定义事件" aria-hidden="true">#</a> $emit 触发自定义事件</h3>
<ul>
<li>适用场景：子组件传递数据给父组件</li>
<li>子组件通过$emit触发自定义事件，$emit第二个参数为传递的数值</li>
<li>父组件绑定监听器获取到子组件传递过来的参数</li>
</ul>
<p><code>Children.vue</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">'update:title'</span><span class="token punctuation">,</span> newTitle<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><code>Father.vue</code>组件</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Children</span>
    <span class="token attr-name"><span class="token namespace">v-bind:</span>title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>title<span class="token punctuation">"</span></span>
    <span class="token attr-name"><span class="token namespace">v-on:</span><span class="token namespace">update:</span>title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>title = $event<span class="token punctuation">"</span></span>
<span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Children</span><span class="token punctuation">></span></span>
<span class="token comment">&lt;!--上面代码用.sync修饰符 , 可缩写为--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Children</span> <span class="token attr-name">:title.sync</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Children</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>或者 使用回调函数</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>  
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Children</span>  <span class="token attr-name"><span class="token namespace">v-bind:</span>title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>title<span class="token punctuation">"</span></span>  <span class="token attr-name"><span class="token namespace">v-on:</span><span class="token namespace">update:</span>title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>changeTitle<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Children</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>  

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span><span class="token punctuation">{</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token function">changeTitle</span><span class="token punctuation">(</span><span class="token parameter">title</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>title <span class="token operator">=</span> title
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>  
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="eventbus" tabindex="-1"><a class="header-anchor" href="#eventbus" aria-hidden="true">#</a> EventBus</h2>
<ul>
<li>使用场景：兄弟组件传值</li>
<li>创建一个中央事件总线EventBus</li>
<li>兄弟组件通过$emit触发自定义事件，$emit第二个参数为传递的数值</li>
<li>另一个兄弟组件通过$on监听自定义事件</li>
</ul>
<p>eventBus.js</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">'vue'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><code>Children1.vue</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> eventBus <span class="token keyword">from</span> <span class="token string">'eventBus.js'</span>

eventBus<span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">'event'</span><span class="token punctuation">,</span> newValue<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><code>Children2.vue</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> eventBus <span class="token keyword">from</span> <span class="token string">'eventBus.js'</span>

eventBus<span class="token punctuation">.</span><span class="token function">$on</span><span class="token punctuation">(</span><span class="token string">'event'</span><span class="token punctuation">,</span> newValue<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="provide-与-inject" tabindex="-1"><a class="header-anchor" href="#provide-与-inject" aria-hidden="true">#</a> provide 与 inject</h2>
<ul>
<li>在祖先组件定义provide属性，返回传递的值</li>
<li>在后代组件通过inject接收组件传递过来的值</li>
</ul>
<p>祖先组件</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">eventBus</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">provide</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>  <span class="token comment">//provide选项应该是一个对象或返回一个对象的函数 , 如果是data上的属性, 要用函数的形式return</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">eventBus</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>eventBus
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>  
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>后代组件</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">inject</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">'eventBus'</span><span class="token punctuation">]</span> <span class="token comment">// 获取到祖先组件传递过来的值</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="vuex" tabindex="-1"><a class="header-anchor" href="#vuex" aria-hidden="true">#</a> Vuex</h3>
<p>适用场景: 复杂关系的组件数据传递</p>
<p>Vuex作用相当于一个用来存储共享变量的容器</p>
<ul>
<li><code>Vuex</code> 是一个专为 <code>Vue.js</code> 应用程序开发的状态管理模式+库</li>
<li><code>store</code>是个大容器,包含了所有内容 , 包括 <code>actions</code> , <code>mutations</code> , <code>state</code> , <code>getters</code></li>
<li><code>State</code>用来读取状态, 可以保存数据 , 带有一个<code>mapState</code>函数</li>
<li><code>Getter</code>,允许组件从 <code>Store</code> 中获取数据,<code>mapGetters</code> 辅助函数仅仅是将 <code>store</code> 中的 <code>getter</code> 映射到局部计算属性。</li>
<li><code>Mutation</code>用于同步提交状态变更 , 是唯一更改 <code>store</code> 中状态的方法.</li>
<li><code>Action</code>用于异步变更状态 , 用于提交 <code>mutation</code> , 而不是直接变更状态.</li>
<li>小插曲: <code>mutations</code> 和 <code>actions</code>的区别:
<ol>
<li><code>Action</code> 提交的是 <code>mutation</code>,而不是直接变更状态。</li>
<li><code>Action</code> 可以包含任意异步操作。<code>mutation</code>只支持同步</li>
</ol>
</li>
<li><code>Module</code>用来给<code>store</code>划分模块 , 方便维护代码</li>
</ul>
</template>
