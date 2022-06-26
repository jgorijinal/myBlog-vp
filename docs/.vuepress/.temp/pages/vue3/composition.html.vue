<template><h1 id="composition-api" tabindex="-1"><a class="header-anchor" href="#composition-api" aria-hidden="true">#</a> Composition API</h1>
<p><a href="https://staging-cn.vuejs.org/api/composition-api-setup.html#basic-usage" target="_blank" rel="noopener noreferrer">官网<ExternalLinkIcon/></a></p>
<h2 id="options-api-的弊端" tabindex="-1"><a class="header-anchor" href="#options-api-的弊端" aria-hidden="true">#</a> Options API 的弊端</h2>
<ul>
<li>Vue2 中<strong>编写组件的方式是 OPtions API</strong></li>
</ul>
<ol>
<li>OPtions API 的最大的特点就是在<strong>对应的属性</strong>中编写<strong>对应的功能模块</strong></li>
<li>比如<strong>data 定义数据</strong>, <strong>methods 中定义方法</strong>, <strong>computed 中定义计算属性</strong>, <strong>watch 中监听属性的改变</strong>, 也包括<strong>生命钩子函数</strong></li>
</ol>
<ul>
<li>但这种代码有一个很大的弊端</li>
</ul>
<ol>
<li>当我们<strong>实现某一个功能时</strong>, 这个功能<strong>对应的代码逻辑</strong>会被<strong>拆分到各个属性</strong>中</li>
<li>当组件<strong>变得更大、更复杂时</strong>, <strong>逻辑关注点的列表</strong>就会增长, 那么同一个功能的逻辑就会被拆分地很分散, 这些代码难以阅读和理解</li>
</ol>
<!--
- 所有逻辑放⼊`setup`函数,第⼀个参数是 `props` 对象
- 通过 `ref` 、`reactive` 、`toRef`来创建响应式数据
- 视图要⽤的变量为 setup 函数返回到对象属性
- `watch`、`computed`是个函数
- ⽣命周期钩⼦写法微调,xyz 变成 OnXyz,如 `mounted` 变成 `onMounted`。`created`和 `beforeCreate`不再需要 -->
<h2 id="setup-函数" tabindex="-1"><a class="header-anchor" href="#setup-函数" aria-hidden="true">#</a> setup 函数</h2>
<h3 id="setup-函数的参数" tabindex="-1"><a class="header-anchor" href="#setup-函数的参数" aria-hidden="true">#</a> setup 函数的参数</h3>
<p>有两个参数</p>
<ul>
<li>第一个参数: <strong>props</strong></li>
<li>第二个参数: <strong>context</strong></li>
</ul>
<p>跟之前一样, 在<strong>props 选项中定义</strong>并且<strong>在 template 中</strong>依然可以<strong>正常去使用 props 中的属性</strong>。如果我们在<strong>setup 函数中想要使用 props</strong>, 那么<strong>不可以通过 this 去获取</strong>, 因为 props 有直接<strong>作为参数传递到 setup 函数中</strong>, 所以可以<strong>直接通过参数</strong>来使用即可</p>
<p>另外一个参数是 context, 称之为 <strong>SetupContext</strong>里面<strong>包含三个属性</strong></p>
<ul>
<li>attrs : 所有非 props 的属性</li>
<li>slots : 父组件传递过来的插槽</li>
<li>emit : 当在组件内部需要发出事件时会用到 emit(因为不能访问跟 this, 所以不可以通过 this.$emit 发出事件)</li>
<li>可使用解构语法</li>
</ul>
<p><img src="@source/.vuepress/public/images/setupContext.png" alt="图片"></p>
<h3 id="setup-函数的返回值" tabindex="-1"><a class="header-anchor" href="#setup-函数的返回值" aria-hidden="true">#</a> setup 函数的返回值</h3>
<ul>
<li>setup 的返回值可以在<strong>模板 template 中被使用</strong></li>
<li>也就是说<strong>可以通过 setup 的返回值替代 data 选项</strong></li>
<li>甚至还可以<strong>返回一个执行函数</strong>来<strong>替代 methods 中定义的方法</strong></li>
<li>注意: setup 函数里的变量需要做<strong>响应式处理</strong></li>
</ul>
<h2 id="核心" tabindex="-1"><a class="header-anchor" href="#核心" aria-hidden="true">#</a> 核心</h2>
<h3 id="reactive-api" tabindex="-1"><a class="header-anchor" href="#reactive-api" aria-hidden="true">#</a> reactive api</h3>
<p>如果想在 setup 中定义的数据变成响应式的特性, 可以<strong>使用 reactive 函数</strong>, <strong>要求传入对象或者数组类型</strong></p>
<p><img src="@source/.vuepress/public/images/reactive.png" alt="图片"></p>
<h3 id="ref-api" tabindex="-1"><a class="header-anchor" href="#ref-api" aria-hidden="true">#</a> ref API</h3>
<p>reactive <strong>API 对传入的类型是有要求的</strong>, 他要求不许传入的是<strong>一个对象或者数组类型</strong>:</p>
<ul>
<li>如果传入一个<strong>基本类型, 如 string, number, boolean 会报一个警告</strong>;
<img src="@source/.vuepress/public/images/reactiveError.png" alt="图片"></li>
</ul>
<p>这个时候可以用另外一个 API: <strong>ref API</strong></p>
<ul>
<li>ref 会返回一个<strong>可变的响应式对象</strong> , 该对象最为一个<strong>响应式引用</strong>维护着它内部的值</li>
<li>它内部的值<strong>在 ref 的<code>value</code>属性</strong>中被维护
<img src="@source/.vuepress/public/images/ref.png" alt="图片"></li>
</ul>
<p>注意事项:</p>
<ul>
<li>在<strong>模板中引入 ref 的值</strong>时, Vue 会<strong>自动帮我们进行解包操作</strong>, 所以<strong>不需要在模板中通过 ref.value 的方式来使用</strong></li>
<li>但是在 <strong>setup 函数内部</strong>, 他依然<strong>是 ref 引用</strong>, 所以对其进行操作时, 依然需要<strong>使用 ref.value 的形式</strong>
<img src="@source/.vuepress/public/images/refTemplate.png" alt="图片"></li>
</ul>
<h3 id="readonly" tabindex="-1"><a class="header-anchor" href="#readonly" aria-hidden="true">#</a> readonly</h3>
<p>通过<strong>reactive 或者 ref 可以获取到一个响应式对象</strong>, 但是某些情况下, <strong>传入给其他组件的响应式对象</strong>希望被使用<strong>但是不能被修改</strong>, 这个时候可以使用 readonly</p>
<p><strong>readonly 返回一个原值的只读代理</strong> , 接受一个对象(无论响应式或非响应式)或者一个 ref</p>
<p><img src="@source/.vuepress/public/images/readonly.png" alt="图片"></p>
<h2 id="工具函数" tabindex="-1"><a class="header-anchor" href="#工具函数" aria-hidden="true">#</a> 工具函数</h2>
<p><strong>isProxy()</strong></p>
<ul>
<li>检查对象<strong>是否是由 reactive 或者 readonly 创建的 proxy</strong></li>
</ul>
<p><strong>isReactive()</strong></p>
<ul>
<li>检查对象<strong>是否是有 reactive 创建的响应式代理</strong></li>
<li>如果该代理是 readonly 建的 , 但是包裹了由 reactive 创建的另一个代理, 也会返回 true</li>
</ul>
<p><strong>isReadonly()</strong></p>
<ul>
<li>检查对象<strong>是否由 readonly 创建的只读代理</strong></li>
</ul>
<p><strong>toRow()</strong></p>
<ul>
<li>返回** reactive 和 readonly 代理的原始的对象**(<strong>不</strong>建议对原始对象的持久引用, 谨慎使用)</li>
</ul>
<p><strong>shallowReactive()</strong></p>
<ul>
<li>创建一个响应式代理, 他跟踪自身 property 的响应性, 但<strong>不执行嵌套对象的深层响应式转换</strong>(浅层响应式转换)</li>
</ul>
<p><strong>shallowReadonly</strong></p>
<ul>
<li>创建一个 proxy , 使其自身的 property 为只读, 但<strong>不执行嵌套对象的深度只读转换</strong>(深层还是可读, 可写的)</li>
</ul>
<h3 id="torefs" tabindex="-1"><a class="header-anchor" href="#torefs" aria-hidden="true">#</a> toRefs</h3>
<p>如果<strong>使用 ES6 的解构语法</strong>, 对<strong>reactive 返回的对象进行解构获取值</strong>, 那么<strong>数据不再是响应式的</strong>:</p>
<p><img src="@source/.vuepress/public/images/toRefs.png" alt="图片"></p>
<ul>
<li>Vue3 提供了一个 <strong>toRefs 的函数</strong>, 可以将<strong>reactive 返回的对象中的属性都转成 ref</strong></li>
<li>那么<strong>解构出来的 name 和 age 本身都是 ref</strong></li>
</ul>
<p><img src="@source/.vuepress/public/images/toRefs2.png" alt="图片"></p>
<p>这种做法已经在<strong>state.name 和 ref.value</strong>之间建立了<strong>链接</strong> , <strong>任何一个修改都会引起另外一个的变化</strong></p>
<h3 id="toref" tabindex="-1"><a class="header-anchor" href="#toref" aria-hidden="true">#</a> toRef</h3>
<p>如果只希望转换一个<strong>reactive 对象中的属性为 ref</strong>, 那么<strong>可以用 toRef 的方法:</strong><br>
<img src="@source/.vuepress/public/images/toRef.png" alt="图片"></p>
<p><strong>unref</strong></p>
<p>如果想要<strong>获取一个 ref 引用中的 value</strong> , 那么可以用 unref 方法:</p>
<ul>
<li><strong>如果参数是一个 ref</strong> , 则<strong>返回内部值 ,否则返回参数本身</strong></li>
<li>这是<strong>val = isRef(val) ? val.value : val</strong> 的语法糖</li>
</ul>
<p><strong>isRef</strong></p>
<ul>
<li>判断值<strong>是否为 ref 对象</strong></li>
</ul>
<p><strong>shallowRef</strong></p>
<ul>
<li>创建<strong>一个浅层的 ref 对象</strong></li>
</ul>
<p><strong>triggerRef</strong></p>
<ul>
<li>手动触发和 shallowRef 相关联的副作用</li>
</ul>
<h3 id="customref" tabindex="-1"><a class="header-anchor" href="#customref" aria-hidden="true">#</a> customRef</h3>
<p>创建<strong>一个自定义的 ref</strong>, 并对<strong>其依赖项跟踪和更新触发进行显示控制:</strong></p>
<ul>
<li>需要<strong>一个工厂函数</strong>, 该<strong>函数接受 track 和 trigger 函数作为参数</strong></li>
<li>并且要返回<strong>一个带有 get 和 set 的函数</strong></li>
</ul>
<p>案例: 对<strong>双向绑定的属性进行 debounce 防抖的操作</strong></p>
<p>hook/userDebounceRef.js
<img src="@source/.vuepress/public/images/customRef.png" alt="图片"></p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> useDebouncedRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"./debouncedRef"</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> text <span class="token operator">=</span> <span class="token function">useDebouncedRef</span><span class="token punctuation">(</span><span class="token string">"hello"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></template>
