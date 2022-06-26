<template><h1 id="mixin-和-extends" tabindex="-1"><a class="header-anchor" href="#mixin-和-extends" aria-hidden="true">#</a> Mixin 和 extends</h1>
<p><strong>组件组件之间有时候会有相同的代码逻辑</strong>, 所以可以对<strong>相同的代码逻辑进行抽取</strong></p>
<p>Vue2和Vue3中都支持的一种方式就是<strong>使用<code>Mixin</code>来完成</strong></p>
<ul>
<li>Mixin提供了一种非常灵活的方式, 来<strong>分发Vue组件中可复用的功能</strong></li>
<li>一个Mixin对象可以包含<strong>任何组件选项</strong></li>
<li>当组件使用Mixin对象时, 所有<strong>Mixin对象的选项被混入进入该组件本身的选项中</strong></li>
</ul>
<h2 id="mixin基本使用" tabindex="-1"><a class="header-anchor" href="#mixin基本使用" aria-hidden="true">#</a> Mixin基本使用</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>mixins
|--demoMixin.js
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>demoMixin.js</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> demoMixin <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">message</span><span class="token operator">:</span><span class="token string">'mixin'</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>任意组件内部:</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>demoMixin<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"./mixins/demoMixins"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
 <span class="token literal-property property">mixins</span><span class="token operator">:</span><span class="token punctuation">[</span>demoMixin<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="mixin的合并规则" tabindex="-1"><a class="header-anchor" href="#mixin的合并规则" aria-hidden="true">#</a> Mixin的合并规则</h2>
<p><strong>如果Mixin对象中的选项和组件对象中的选项发生了冲突, Vue会如何操作?</strong></p>
<p>这里<strong>分成不同情况</strong>来讨论</p>
<ol>
<li><strong>如果是data函数的返回值对象</strong></li>
</ol>
<ul>
<li>返回值对象默认情况下会<strong>进行合并</strong></li>
<li>如果data返回值发生了冲突, 那么会<strong>保留组件自身的数据</strong></li>
</ul>
<ol start="2">
<li><strong>如果是生命周期钩子函数</strong></li>
</ol>
<ul>
<li>生命周期钩子函数<strong>会被合并到数组</strong>当中, 都会被调用</li>
</ul>
<ol start="3">
<li><strong>值为对象的选项, 例如methods, components, directives, 将被合并为同一个对象</strong></li>
</ol>
<ul>
<li>比如都有 <strong>methods 选项</strong>, 并且都定义了方法, 那么<strong>它们都会被调用</strong></li>
<li>但是如果<strong>对象的key相同</strong>, 那么会<strong>取组件对象的键值对</strong></li>
</ul>
<h2 id="全局混入-mixin" tabindex="-1"><a class="header-anchor" href="#全局混入-mixin" aria-hidden="true">#</a> 全局混入 Mixin</h2>
<p>如果组件中的某些选项, 是所有组件都需要拥有的, 那么这个时候可以用<strong>全局Mixin</strong></p>
<ul>
<li>可以用<strong>应用App方法mixin</strong>来完成注册</li>
<li>一旦注册, 那么<strong>全局混入的选项将会影响到每一个组件</strong></li>
</ul>
<p>main.js</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">'./App.vue'</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">mixin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">message</span><span class="token operator">:</span><span class="token string">'全局引入的Mixin'</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'全局引入的Mixin'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">'#app'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="extends-用得少" tabindex="-1"><a class="header-anchor" href="#extends-用得少" aria-hidden="true">#</a> extends(用得少)</h2>
<ul>
<li>允许声明扩展另外一个组件, <strong>类似Mixins</strong>
使一个组件可以<strong>继承另一个组件的组件选项</strong></li>
</ul>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> basePage <span class="token keyword">from</span> <span class="token string">'/basePage.vue'</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token keyword">extends</span><span class="token operator">:</span>basePage
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></template>
