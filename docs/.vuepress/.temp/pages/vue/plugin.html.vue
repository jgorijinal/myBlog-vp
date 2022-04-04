<template><h1 id="开发插件" tabindex="-1"><a class="header-anchor" href="#开发插件" aria-hidden="true">#</a> 开发插件</h1>
<p>Vue.js 的插件应该暴露一个 install 方法。这个方法的第一个参数是 Vue 构造器，第二个参数是一个可选的选项对象：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>MyPlugin<span class="token punctuation">.</span><span class="token function-variable function">install</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">Vue<span class="token punctuation">,</span> options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token comment">// 1. 添加全局方法或 property</span>
    Vue<span class="token punctuation">.</span><span class="token function-variable function">myGlobalMethod</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 逻辑...</span>
    <span class="token punctuation">}</span>

<span class="token comment">// 2. 添加全局资源</span>
    Vue<span class="token punctuation">.</span><span class="token function">directive</span><span class="token punctuation">(</span><span class="token string">'my-directive'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token function">bind</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> binding<span class="token punctuation">,</span> vnode<span class="token punctuation">,</span> oldVnode</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 逻辑...</span>
        <span class="token punctuation">}</span>
        <span class="token operator">...</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 3. 注入组件选项</span>
    Vue<span class="token punctuation">.</span><span class="token function">mixin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token function-variable function">created</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 逻辑...</span>
        <span class="token punctuation">}</span>
        <span class="token operator">...</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 4. 添加实例方法</span>
    <span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">$myMethod</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">methodOptions</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 逻辑...</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><p>通过全局方法 Vue.use() 使用插件。它需要在你调用 new Vue() 启动应用之前完成：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 调用 `MyPlugin.install(Vue)`</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>MyPlugin<span class="token punctuation">)</span>

<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
<span class="token comment">// ...组件选项</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="vue-动态创建组件实例" tabindex="-1"><a class="header-anchor" href="#vue-动态创建组件实例" aria-hidden="true">#</a> Vue 动态创建组件实例</h2>
<p>在 <code>Vue</code> 里面，如果你想在页面里弹出一个东西，通常的办法是：</p>
<ul>
<li>事先把要弹出的东西写在页面里，用 visible: false 把它隐藏起来</li>
<li>控制 <code>visible</code> 使其显示或再次隐藏</li>
</ul>
<p>另外一种就是下面代码所示那样 比如用户点击按钮的时候动态创建一个 <code>Vue</code> 实例
<code>Element UI</code> 中的 <code>$message</code>就是这样实现的，这种方法尤其适合通知类的场景，实现思路如下</p>
<p><code>plugin.js</code>中</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> Component <span class="token keyword">from</span> <span class="token string">'./Component.Vue'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">install</span><span class="token punctuation">(</span><span class="token parameter">Vue<span class="token punctuation">,</span> options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  <span class="token comment">//第一个参数Vue是Vue.use(plugin)传过来的</span>
        <span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">$message</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">message<span class="token punctuation">,</span> componentOptions</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
            <span class="token keyword">const</span> Constructor <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span>Component<span class="token punctuation">)</span>   <span class="token comment">//使用基础 Vue 构造器，创建一个“子类”。参数是一个包含组件选项的对象。</span>
            <span class="token keyword">const</span> component <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Constructor</span><span class="token punctuation">(</span><span class="token punctuation">{</span>         <span class="token comment">//创建动态实例</span>
                <span class="token literal-property property">propsData</span><span class="token operator">:</span> componentOptions
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
            toast<span class="token punctuation">.</span>$slots<span class="token punctuation">.</span>default <span class="token operator">=</span> <span class="token punctuation">[</span>message<span class="token punctuation">]</span>       <span class="token comment">//插槽slot里面写内容, $slot.dafault是数组</span>
            toast<span class="token punctuation">.</span><span class="token function">$mount</span><span class="token punctuation">(</span><span class="token punctuation">)</span>                         <span class="token comment">//$mount如果没有提供参数，模板将被渲染为文档之外的的元素，并且你必须使用原生 DOM API 把它插入文档中。</span>
            document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>toast<span class="token punctuation">.</span>$el<span class="token punctuation">)</span>   <span class="token comment">//添加到页面</span>
        <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>使用时</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> plugin <span class="token keyword">from</span> <span class="token string">'./plugin.js'</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>plugin<span class="token punctuation">)</span>
    
<span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">$message</span><span class="token punctuation">(</span><span class="token string">'这是提个弹出框'</span> <span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token comment">//一些相关的配置</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></template>
