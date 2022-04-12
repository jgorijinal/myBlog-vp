<template><h1 id="composition-api" tabindex="-1"><a class="header-anchor" href="#composition-api" aria-hidden="true">#</a> Composition API</h1>
<p><a href="https://staging-cn.vuejs.org/api/composition-api-setup.html#basic-usage" target="_blank" rel="noopener noreferrer">官网<ExternalLinkIcon/></a></p>
<h2 id="_1-为什么用-composition-api" tabindex="-1"><a class="header-anchor" href="#_1-为什么用-composition-api" aria-hidden="true">#</a> 1. 为什么⽤ Composition API</h2>
<ol>
<li>问题：业务逻辑关注点过于分散</li>
<li>期望：同⼀业务逻辑的代码放在⼀起</li>
</ol>
<ul>
<li>所有逻辑放⼊<code>setup</code>函数,第⼀个参数是 <code>props</code> 对象</li>
<li>通过 <code>ref</code> 、<code>reactive</code> 、<code>toRef</code>来创建响应式数据</li>
<li>视图要⽤的变量为 setup 函数返回到对象属性</li>
<li><code>watch</code>、<code>computed</code>是个函数</li>
<li>⽣命周期钩⼦写法微调,xyz 变成 OnXyz,如 <code>mounted</code> 变成 <code>onMounted</code>。<code>created</code>和 <code>beforeCreate</code>不再需要</li>
</ul>
<h2 id="_2-用ref-处理响应式数据" tabindex="-1"><a class="header-anchor" href="#_2-用ref-处理响应式数据" aria-hidden="true">#</a> 2.  用ref()处理响应式数据</h2>
<p>接受一个值，将其用作内部值来返回一个响应式的、可更改的 <code>ref</code> 对象。只有一个属性 <code>.value</code> 用来指向内部的值。</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>count++<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{ count }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token comment">// 暴露给模板和 API 钩子的其他选项</span>
      count<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 0</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><ul>
<li><strong>注意</strong> : 从 <code>setup</code> 返回的 <code>ref</code> 在模板上访问时无须再在模板中为它写 <code>.value</code>。当通过 <code>this</code> 访问时也不需要写 <code>.value</code></li>
</ul>
<h2 id="_3-用reactive-处理响应式数据" tabindex="-1"><a class="header-anchor" href="#_3-用reactive-处理响应式数据" aria-hidden="true">#</a> 3. 用reactive()处理响应式数据</h2>
<p>reactive : 处理<strong>对象</strong>，变成响应式数据。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token literal-property property">bar</span><span class="token operator">:</span> <span class="token number">2</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> fooRef <span class="token operator">=</span> <span class="token function">toRef</span><span class="token punctuation">(</span>state<span class="token punctuation">,</span> <span class="token string">'foo'</span><span class="token punctuation">)</span>    
fooRef<span class="token punctuation">.</span>value<span class="token operator">++</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>state<span class="token punctuation">.</span>foo<span class="token punctuation">)</span> <span class="token comment">// 2</span>
state<span class="token punctuation">.</span>foo<span class="token operator">++</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>fooRef<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token comment">// 3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="_4-模板ref" tabindex="-1"><a class="header-anchor" href="#_4-模板ref" aria-hidden="true">#</a> 4. 模板ref</h2>
<p>允许我们在一个特定的 <code>DOM</code> 元素或子组件实例被挂载后 ，获得对它的直接引用。</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>input<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="_1-访问模板-ref" tabindex="-1"><a class="header-anchor" href="#_1-访问模板-ref" aria-hidden="true">#</a> (1) 访问模板 ref</h3>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>input<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> onMounted <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">export</span> <span class="token keyword">default</span>  <span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">const</span> input <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token comment">// 声明一个 ref 来存放该元素的引用 , 必须和模板 ref 同名</span>
    <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
      input<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span> input <span class="token punctuation">}</span>     <span class="token comment">//记得 return 出去ref</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>注意 , 只可以在<strong>组件挂载后</strong>才能访问 <code>ref</code>。如果想在模板中的表达式上访问 <code>input</code>，在初次渲染时会是 <code>null</code>。这是因为在初次渲染前这个元素还压根不存在</p>
<p>如果想要考虑模板<code>ref</code>的变化 , 需要考虑<code>null</code>的状况</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">watchEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>input<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>   <span class="token comment">//存在</span>
    input<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// 此时还未挂载，或此元素已经被卸载（例如通过 v-if 控制）</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="_2-v-for-和-ref-配合使用" tabindex="-1"><a class="header-anchor" href="#_2-v-for-和-ref-配合使用" aria-hidden="true">#</a> (2)v-for 和 ref 配合使用</h3>
<p>当 <code>ref</code> 在 <code>v-for</code> 中使用时，相应的 <code>ref</code> 中包含的值是一个数组，它将在元素被挂载后填充：
除了使用字符串值作名字,<code>ref</code> attribute 还可以绑定为一个函数，会在每次组件更新时都被调用。函数接受<strong>该元素引用</strong>作为第一个参数：</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(item , index) of list<span class="token punctuation">"</span></span> <span class="token attr-name">:ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>el => { if(el){ refList[index] = el}}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> onMounted <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">export</span> <span class="token keyword">default</span>  <span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">const</span> list <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
      <span class="token comment">/* ... */</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> refList <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>     <span class="token comment">//理解成是一个容器 , 然后通过 refList[index] = el 全部塞到这个容器里</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span> list <span class="token punctuation">,</span> refList <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h2 id="_5-computed" tabindex="-1"><a class="header-anchor" href="#_5-computed" aria-hidden="true">#</a> 5. computed()</h2>
<p>接受一个计算函数，返回一个只读的响应式 <code>ref</code> 对象，即计算函数的返回值。它也可以接受一个带有<code>get</code>和 <code>set</code> 函数的对象来创建一个可写的 <code>ref</code> 对象。</p>
<p>创建一个<strong>只读</strong>的计算属性 <code>ref</code>：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>script<span class="token operator">></span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>computed<span class="token punctuation">,</span> ref<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> plusOne <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> count<span class="token punctuation">.</span>value <span class="token operator">+</span> <span class="token number">1</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>plusOne<span class="token punctuation">.</span>value<span class="token punctuation">)</span>  <span class="token comment">// 2</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>count<span class="token punctuation">.</span>value<span class="token punctuation">)</span>    <span class="token comment">// 1</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>创建一个<strong>可写</strong>的计算属性 <code>ref</code>：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>script<span class="token operator">></span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>computed<span class="token punctuation">,</span> ref<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
   <span class="token keyword">const</span> plusOne <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
     <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
       <span class="token keyword">return</span> count<span class="token punctuation">.</span>value <span class="token operator">+</span> <span class="token number">1</span>
     <span class="token punctuation">}</span><span class="token punctuation">,</span>
     <span class="token function">set</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">{</span>
        count<span class="token punctuation">.</span>value  <span class="token operator">=</span> value <span class="token operator">-</span> <span class="token number">1</span>
     <span class="token punctuation">}</span>
   <span class="token punctuation">}</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>plusOne<span class="token punctuation">.</span>value<span class="token punctuation">)</span>  <span class="token comment">//2</span>
    plusOne<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token number">10</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>count<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">//1</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>plusOne<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">//10</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h2 id="_6-watch" tabindex="-1"><a class="header-anchor" href="#_6-watch" aria-hidden="true">#</a> 6 . watch()</h2>
<p>监视一个或多个数据源，并在数据源更改时调用回调函数 , <code>Watch ()</code>在默认情况下是<strong>惰性</strong>的——也就是说，只有在监视数据更改时才调用回调。</p>
<ol>
<li><strong>第一个参数</strong>可以是</li>
</ol>
<ul>
<li>return一个值的getter函数</li>
<li>ref</li>
<li>reactive 对象</li>
</ul>
<ol start="2">
<li><strong>第二个参数</strong>是回调</li>
<li><strong>第三个参数</strong>是选项对象</li>
</ol>
<ul>
<li><code>immediate</code> : watcher创建时直接触发回调. 这个时候旧值是<code>undefined</code></li>
<li><code>deep</code>:  深度监听， 不论对象被嵌套多深 , 该回调会在任何被侦听的对象的 property 改变时被调用</li>
</ul>
<blockquote>
<p><strong>与 <code>watchEffect</code>作对比 , <code>watch</code>允许我们</strong></p>
</blockquote>
<ul>
<li>惰性地执行副作用;</li>
<li>更具体地说明哪个状态下应该触发回调运行;</li>
<li>可访问数据的旧值和新值。</li>
</ul>
<p>例:</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
 {{num}}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>add<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>+1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>ref<span class="token punctuation">,</span> watch<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span>  <span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">const</span> num <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> <span class="token function-variable function">add</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
      num<span class="token punctuation">.</span>value <span class="token operator">+=</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
    <span class="token function">watch</span><span class="token punctuation">(</span>num <span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">newValue</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
      <span class="token keyword">if</span><span class="token punctuation">(</span>newValue <span class="token operator">></span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'太长了'</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">immediate</span><span class="token operator">:</span><span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>num <span class="token punctuation">,</span> add<span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h2 id="_7-watcheffect" tabindex="-1"><a class="header-anchor" href="#_7-watcheffect" aria-hidden="true">#</a> 7. watchEffect()</h2>
<p>立即运行函数 ，并在依赖项发生更改时重新运行该函数。</p>
<ol>
<li>
<p>第一个参数是要运行的函数。函数接收一个可用于注册清理回调的函数。清理回调将在下次重新运行效果之前调用，并且可以用于清除无效的副作用，例如挂起的异步请求(参见下面的例子)。</p>
</li>
<li>
<p>第二个参数是一个可选的 options 对象，可用于调整效果的刷新时间或调试效果的依赖项。</p>
</li>
<li>
<p>返回值是一个函数，可以调用该函数来停止该效果再次运行。</p>
</li>
</ol>
<p>例子</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

<span class="token function">watchEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>count<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span>  
<span class="token comment">// -> logs 0  会立即执行</span>

count<span class="token punctuation">.</span>value<span class="token operator">++</span>
<span class="token comment">// -> logs 1 依赖项变化时执行函数</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>清理副作用</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">watchEffect</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">onCleanup</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> response<span class="token punctuation">,</span> cancel <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">doAsyncWork</span><span class="token punctuation">(</span>id<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
  <span class="token comment">// id变化时`cancel`会执行</span>
  <span class="token comment">// 这之前的等待请求将被取消</span>
  <span class="token comment">// 如果还没有完成的话</span>
  <span class="token function">onCleanup</span><span class="token punctuation">(</span>cancel<span class="token punctuation">)</span>
  data<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token keyword">await</span> response
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>停止watcher</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> stop <span class="token operator">=</span> <span class="token function">watchEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">//不在需要watcher时</span>
<span class="token function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>技巧</strong>:
<code>watchEffect</code>会在挂载前执行 , 所以访问<code>Dom</code>的时候会报错 , 如果<strong>不想让挂载前</strong>执行
可以</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">onMounted</span><span class="token punctuation">(</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>  
  <span class="token function">watchEffect</span><span class="token punctuation">(</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    <span class="token operator">...</span><span class="token punctuation">.</span><span class="token keyword">do</span> something<span class="token operator">...</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="_8-setup" tabindex="-1"><a class="header-anchor" href="#_8-setup" aria-hidden="true">#</a> 8. setup()</h2>
<h3 id="_1-访问-props" tabindex="-1"><a class="header-anchor" href="#_1-访问-props" aria-hidden="true">#</a> (1)访问 Props</h3>
<p>setup 函数的第一个参数是组件的 props, 是响应式的，并且会在传入新的 props 时同步更新。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> String
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>title<span class="token punctuation">)</span>  <span class="token comment">//props.xxx获取</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="_2-toref-torefs" tabindex="-1"><a class="header-anchor" href="#_2-toref-torefs" aria-hidden="true">#</a> (2)toRef() , toRefs</h3>
<p><strong>注意</strong> , 如果从 <code>props</code> 对象上<code>解构</code>，被解构的变量<strong>将会丢失响应性</strong>,因此推荐通过 <code>props.xxx</code> 的形式来使用其中的属性。</p>
<p>如果你确实需要从 <code>props</code> 上解构，或者想要将某个 <code>prop</code> 传入到一个外部函数中但想保持响应性，那么你可以使用 <code>toRefs()</code> <code>toRef()</code> 这两个工具 API：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> toRefs <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 将 `props` 转为一个其中全是 ref 的对象，然后解构</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> title <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">toRefs</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span>
    <span class="token comment">// `title` 是一个追踪着 `props.title` 的 ref</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>title<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
    <span class="token comment">// 或者，将 `props` 的单个属性转为一个 ref</span>
    <span class="token keyword">const</span> title <span class="token operator">=</span> <span class="token function">toRef</span><span class="token punctuation">(</span>props<span class="token punctuation">,</span> <span class="token string">'title'</span><span class="token punctuation">)</span>

    <span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'Eren'</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token function">toRefs</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">}</span>   <span class="token comment">//善用 ... 把obj的属性都变成响应式</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h3 id="_3-context-上下文" tabindex="-1"><a class="header-anchor" href="#_3-context-上下文" aria-hidden="true">#</a> (3)context 上下文</h3>
<p>传入 <code>setup</code> 函数的第二个参数是一个 <code>Setup</code> 上下文 对象。上下文对象上暴露了其他一些在 <code>setup</code> 之中很有用的值：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// Attribute (⾮响应式对象)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span>attrs<span class="token punctuation">)</span>
  <span class="token comment">// 插槽 (⾮响应式对象)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span>slots<span class="token punctuation">)</span>
  <span class="token comment">// 触发事件 (⽅法)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span>emit<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h4 id="暴露公共属性-expose" tabindex="-1"><a class="header-anchor" href="#暴露公共属性-expose" aria-hidden="true">#</a> 暴露公共属性  - expose</h4>
<p><code>expose</code> 这个函数可以用于在父组件中通过<strong>模板 ref</strong>访问本组件时，显式地限制所暴露的属性：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> <span class="token punctuation">{</span> expose <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// expose(空) 这样会使得该组件处于 “关闭状态”</span>
    <span class="token comment">// 即不向父组件暴露任何东西</span>
    <span class="token function">expose</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">const</span> publicCount <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> privateCount <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token function">expose</span><span class="token punctuation">(</span> <span class="token punctuation">{</span> <span class="token literal-property property">count</span><span class="token operator">:</span> publicCount <span class="token punctuation">}</span> <span class="token punctuation">)</span> <span class="token comment">// 有选择地暴露局部状态</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h4 id="attrs属性绑定和-slots" tabindex="-1"><a class="header-anchor" href="#attrs属性绑定和-slots" aria-hidden="true">#</a> attrs属性绑定和 slots</h4>
<ol>
<li><strong>context.attrs</strong></li>
</ol>
<ul>
<li>默认外面传的所有属性都绑定到<strong>根元素</strong>  (Vue2 也一样)</li>
<li>使用 <code>inheritAttrs: false</code> 可以取消默认绑定</li>
<li>使用 <code>this.$attrs</code> 或者 <code>context.attrs</code> 获取所有属性</li>
<li>在模板里使用 <code>v-bind=&quot;$attrs&quot;</code> 批量绑定属性</li>
<li>使用 <code>const {size, level, ...xxx} = context.attrs</code> 将属性解构分开 , 在一个个绑定到模板中</li>
</ul>
<ol start="2">
<li><strong>context.slots</strong></li>
</ol>
<ul>
<li><code>const defaults = context.slots.default()</code>可得到默认的插槽 , defaults是包含<strong>对象</strong>的<strong>数组</strong></li>
</ul>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>component</span> <span class="token attr-name">:is</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>defaults[0]<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>component</span><span class="token punctuation">></span></span> 
<span class="token comment">&lt;!--然后可这么展示 , 实际要配合配合v-for--></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>动态组件</strong>, 在上面的例子中，被传给 <code>:is</code> 的值可以是以下几种：</p>
<ul>
<li>被注册的组件名</li>
<li>setup里return出的组件对象</li>
</ul>
<h2 id="_9-依赖注入-provide-inject" tabindex="-1"><a class="header-anchor" href="#_9-依赖注入-provide-inject" aria-hidden="true">#</a> 9 . 依赖注入 provide / inject</h2>
<p>要为组件后代供给数据，需要使用到 <code>provide(/* 注入名 */ , /* 值 */ )</code> 函数</p>
<p>在爷组件中 :</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> provide<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> visible <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">provide</span><span class="token punctuation">(</span><span class="token string">"注入名"</span><span class="token punctuation">,</span> visible<span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// provide 跟 ref 配合使用  基本语法: provide('注入名' , '注入值')</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>在子组件中 :</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> inject<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> visible <span class="token operator">=</span> inject <span class="token operator">&lt;</span> Ref <span class="token operator">&lt;</span> Boolean <span class="token operator">></span> <span class="token operator">></span><span class="token punctuation">(</span><span class="token string">"注入名"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   
      <span class="token comment">//如果供给的值是一个 ref,注入进来的就是它'本身',而不会自动解包。这使得被注入的组件保持了和供给者的响应性链接。</span>
    <span class="token keyword">const</span> <span class="token function-variable function">toggle</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token comment">//生命了toggle函数 , 点击时让 visible 取反</span>
      visible<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token operator">!</span>visible<span class="token punctuation">.</span>value<span class="token punctuation">;</span>   
      <span class="token comment">//注意! 读ref要用value , React里面是current</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span> toggle <span class="token punctuation">,</span> visible <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div></template>
