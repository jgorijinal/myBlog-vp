import{_ as n,d as s}from"./app.fcb85f29.js";const a={},p=s(`<h1 id="\u5F00\u53D1\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5F00\u53D1\u63D2\u4EF6" aria-hidden="true">#</a> \u5F00\u53D1\u63D2\u4EF6</h1><p>Vue.js \u7684\u63D2\u4EF6\u5E94\u8BE5\u66B4\u9732\u4E00\u4E2A install \u65B9\u6CD5\u3002\u8FD9\u4E2A\u65B9\u6CD5\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\u662F Vue \u6784\u9020\u5668\uFF0C\u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F\u4E00\u4E2A\u53EF\u9009\u7684\u9009\u9879\u5BF9\u8C61\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>MyPlugin<span class="token punctuation">.</span><span class="token function-variable function">install</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">Vue<span class="token punctuation">,</span> options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token comment">// 1. \u6DFB\u52A0\u5168\u5C40\u65B9\u6CD5\u6216 property</span>
    Vue<span class="token punctuation">.</span><span class="token function-variable function">myGlobalMethod</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u903B\u8F91...</span>
    <span class="token punctuation">}</span>

<span class="token comment">// 2. \u6DFB\u52A0\u5168\u5C40\u8D44\u6E90</span>
    Vue<span class="token punctuation">.</span><span class="token function">directive</span><span class="token punctuation">(</span><span class="token string">&#39;my-directive&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token function">bind</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> binding<span class="token punctuation">,</span> vnode<span class="token punctuation">,</span> oldVnode</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u903B\u8F91...</span>
        <span class="token punctuation">}</span>
        <span class="token operator">...</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 3. \u6CE8\u5165\u7EC4\u4EF6\u9009\u9879</span>
    Vue<span class="token punctuation">.</span><span class="token function">mixin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token function-variable function">created</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u903B\u8F91...</span>
        <span class="token punctuation">}</span>
        <span class="token operator">...</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 4. \u6DFB\u52A0\u5B9E\u4F8B\u65B9\u6CD5</span>
    <span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">$myMethod</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">methodOptions</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u903B\u8F91...</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><p>\u901A\u8FC7\u5168\u5C40\u65B9\u6CD5 Vue.use() \u4F7F\u7528\u63D2\u4EF6\u3002\u5B83\u9700\u8981\u5728\u4F60\u8C03\u7528 new Vue() \u542F\u52A8\u5E94\u7528\u4E4B\u524D\u5B8C\u6210\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u8C03\u7528 \`MyPlugin.install(Vue)\`</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>MyPlugin<span class="token punctuation">)</span>

<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
<span class="token comment">// ...\u7EC4\u4EF6\u9009\u9879</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="vue-\u52A8\u6001\u521B\u5EFA\u7EC4\u4EF6\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#vue-\u52A8\u6001\u521B\u5EFA\u7EC4\u4EF6\u5B9E\u4F8B" aria-hidden="true">#</a> Vue \u52A8\u6001\u521B\u5EFA\u7EC4\u4EF6\u5B9E\u4F8B</h2><p>\u5728 <code>Vue</code> \u91CC\u9762\uFF0C\u5982\u679C\u4F60\u60F3\u5728\u9875\u9762\u91CC\u5F39\u51FA\u4E00\u4E2A\u4E1C\u897F\uFF0C\u901A\u5E38\u7684\u529E\u6CD5\u662F\uFF1A</p><ul><li>\u4E8B\u5148\u628A\u8981\u5F39\u51FA\u7684\u4E1C\u897F\u5199\u5728\u9875\u9762\u91CC\uFF0C\u7528 visible: false \u628A\u5B83\u9690\u85CF\u8D77\u6765</li><li>\u63A7\u5236 <code>visible</code> \u4F7F\u5176\u663E\u793A\u6216\u518D\u6B21\u9690\u85CF</li></ul><p>\u53E6\u5916\u4E00\u79CD\u5C31\u662F\u4E0B\u9762\u4EE3\u7801\u6240\u793A\u90A3\u6837 \u6BD4\u5982\u7528\u6237\u70B9\u51FB\u6309\u94AE\u7684\u65F6\u5019\u52A8\u6001\u521B\u5EFA\u4E00\u4E2A <code>Vue</code> \u5B9E\u4F8B <code>Element UI</code> \u4E2D\u7684 <code>$message</code>\u5C31\u662F\u8FD9\u6837\u5B9E\u73B0\u7684\uFF0C\u8FD9\u79CD\u65B9\u6CD5\u5C24\u5176\u9002\u5408\u901A\u77E5\u7C7B\u7684\u573A\u666F\uFF0C\u5B9E\u73B0\u601D\u8DEF\u5982\u4E0B</p><p><code>plugin.js</code>\u4E2D</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> Component <span class="token keyword">from</span> <span class="token string">&#39;./Component.Vue&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">install</span><span class="token punctuation">(</span><span class="token parameter">Vue<span class="token punctuation">,</span> options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  <span class="token comment">//\u7B2C\u4E00\u4E2A\u53C2\u6570Vue\u662FVue.use(plugin)\u4F20\u8FC7\u6765\u7684</span>
        <span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">$message</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">message<span class="token punctuation">,</span> componentOptions</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
            <span class="token keyword">const</span> Constructor <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span>Component<span class="token punctuation">)</span>   <span class="token comment">//\u4F7F\u7528\u57FA\u7840 Vue \u6784\u9020\u5668\uFF0C\u521B\u5EFA\u4E00\u4E2A\u201C\u5B50\u7C7B\u201D\u3002\u53C2\u6570\u662F\u4E00\u4E2A\u5305\u542B\u7EC4\u4EF6\u9009\u9879\u7684\u5BF9\u8C61\u3002</span>
            <span class="token keyword">const</span> component <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Constructor</span><span class="token punctuation">(</span><span class="token punctuation">{</span>         <span class="token comment">//\u521B\u5EFA\u52A8\u6001\u5B9E\u4F8B</span>
                <span class="token literal-property property">propsData</span><span class="token operator">:</span> componentOptions
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
            toast<span class="token punctuation">.</span>$slots<span class="token punctuation">.</span>default <span class="token operator">=</span> <span class="token punctuation">[</span>message<span class="token punctuation">]</span>       <span class="token comment">//\u63D2\u69FDslot\u91CC\u9762\u5199\u5185\u5BB9, $slot.dafault\u662F\u6570\u7EC4</span>
            toast<span class="token punctuation">.</span><span class="token function">$mount</span><span class="token punctuation">(</span><span class="token punctuation">)</span>                         <span class="token comment">//$mount\u5982\u679C\u6CA1\u6709\u63D0\u4F9B\u53C2\u6570\uFF0C\u6A21\u677F\u5C06\u88AB\u6E32\u67D3\u4E3A\u6587\u6863\u4E4B\u5916\u7684\u7684\u5143\u7D20\uFF0C\u5E76\u4E14\u4F60\u5FC5\u987B\u4F7F\u7528\u539F\u751F DOM API \u628A\u5B83\u63D2\u5165\u6587\u6863\u4E2D\u3002</span>
            document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>toast<span class="token punctuation">.</span>$el<span class="token punctuation">)</span>   <span class="token comment">//\u6DFB\u52A0\u5230\u9875\u9762</span>
        <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u4F7F\u7528\u65F6</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> plugin <span class="token keyword">from</span> <span class="token string">&#39;./plugin.js&#39;</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>plugin<span class="token punctuation">)</span>
    
<span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">$message</span><span class="token punctuation">(</span><span class="token string">&#39;\u8FD9\u662F\u63D0\u4E2A\u5F39\u51FA\u6846&#39;</span> <span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token comment">//\u4E00\u4E9B\u76F8\u5173\u7684\u914D\u7F6E</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>`,13);function e(t,o){return p}var l=n(a,[["render",e],["__file","plugin.html.vue"]]);export{l as default};
