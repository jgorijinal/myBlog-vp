<template><h1 id="pinia" tabindex="-1"><a class="header-anchor" href="#pinia" aria-hidden="true">#</a> Pinia</h1>
<h2 id="pinia-和-vuex-对比" tabindex="-1"><a class="header-anchor" href="#pinia-和-vuex-对比" aria-hidden="true">#</a> Pinia 和 VueX 对比</h2>
<ul>
<li>与 VueX 相比, Pinia <strong>提供了一个更简单的 API , 具有更少的仪式, 提供了 Composition Api 风格的 API</strong></li>
<li>最重要的是, 在<strong>与 TypeScript 一起使用的时候, 具有可靠的类型推断支持</strong></li>
</ul>
<p>和 VueX 相比, Pinia 有很多的优势</p>
<ol>
<li><strong>比如 mutation 不再存在</strong>
<ul>
<li>它们经常被认为是非常多余的</li>
<li>它们最初是为了 devTools 的集成, 但这不再是问题</li>
</ul>
</li>
<li><strong>更友好的 TypeScript 支持, VueX 之前对 TS 支持很不友好</strong></li>
<li><strong>不再有 modules 嵌套结构</strong>
<ul>
<li>可以灵活使用每一个 store, 他们是通过扁平化的方式开相互使用的</li>
</ul>
</li>
<li><strong>也不再有名革命空间的概念, 不需要记住它们复杂关系</strong></li>
</ol>
<h2 id="如何使用-pinia" tabindex="-1"><a class="header-anchor" href="#如何使用-pinia" aria-hidden="true">#</a> 如何使用 Pinia</h2>
<p><a href="https://pinia.web3doc.top/getting-started.html#%E5%AE%89%E8%A3%85" target="_blank" rel="noopener noreferrer">Pinia 中文文档<ExternalLinkIcon/></a></p>
<p>先安装 pinia</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> pinia
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="@source/.vuepress/public/images/pia3.png" alt="图片"></p>
<p>store/index.js 创建 pinia 并且将其传递给应用程序</p>
<p><img src="@source/.vuepress/public/images/pia1.png" alt="图片"></p>
<p>main.js 引入</p>
<p><img src="@source/.vuepress/public/images/pia2.png" alt="图片"></p>
<h2 id="认识-store" tabindex="-1"><a class="header-anchor" href="#认识-store" aria-hidden="true">#</a> 认识 Store</h2>
<p>什么是 Store?</p>
<ul>
<li>一个 Store 是一个<strong>实体</strong>, 它会持有绑定到你<strong>组件树的状态和业务逻辑</strong>, 也就是保存了全局的状态</li>
<li>他有点想始终存在, 并且<strong>每个人都可以读取和写入的组件</strong></li>
<li>可以在我的应用程序中<strong>定义任意数量的 store 来管理状态</strong></li>
</ul>
<p>Store 有三个概念:</p>
<ol>
<li><strong>state, actions, getters</strong> , 等同于组件的 data,computed, methods</li>
<li>一旦 store 被实例化, 就可以直接在 store 上访问 state, getters, actions 中定义的任意属性</li>
</ol>
<h3 id="定义一个-store" tabindex="-1"><a class="header-anchor" href="#定义一个-store" aria-hidden="true">#</a> 定义一个 Store</h3>
<p><img src="@source/.vuepress/public/images/counter1.png" alt="图片"></p>
<p>Store 是<strong>使用 <code>defineStore()</code>来定义的</strong></p>
<p>并且他需要一个唯一的名称 , 作为第一个参数传递:
<img src="@source/.vuepress/public/images/pia4.png" alt="图片"></p>
<p>这个 name, 也<strong>称为 id</strong>, Pinia会使用它来连接到 devTools</p>
<p><strong>返回的函数统一使用 useXXXX 作为命名方案, 这是约定的规范</strong></p>
<h3 id="使用定义的-store" tabindex="-1"><a class="header-anchor" href="#使用定义的-store" aria-hidden="true">#</a> 使用定义的 Store</h3>
<p>Store 在它使用之前是不会被创建的, 我们可以通过调用 <strong>use函数</strong> 来使用 Store
<img src="@source/.vuepress/public/images/ux1.png" alt="图片"></p>
<p><strong>注意:</strong> Store 获取到后不能被解构, 那么<strong>会失去响应式</strong></p>
<ul>
<li>为了从 Store 提取属性同时保持响应式, <strong>需要使用 <code>storeToRefs()</code></strong></li>
</ul>
<p><img src="@source/.vuepress/public/images/ux2.png" alt="图片"></p>
<h2 id="state" tabindex="-1"><a class="header-anchor" href="#state" aria-hidden="true">#</a> state</h2>
<p>先定义一个 store
<img src="@source/.vuepress/public/images/pstate1.png" alt="图片"></p>
<h3 id="操作-state-一" tabindex="-1"><a class="header-anchor" href="#操作-state-一" aria-hidden="true">#</a> 操作 state (一)</h3>
<p>读取和写入 state:</p>
<ul>
<li>默认情况下, 可以通过 store 实例访问状态来直接读取和写入状态
<img src="@source/.vuepress/public/images/pstate2.png" alt="图片"></li>
</ul>
<p>重置 state</p>
<ul>
<li>可以通过调用 store 上的 <strong><code>$reset()</code></strong> 方法 将状态<strong>重置</strong>到其初始值
<img src="@source/.vuepress/public/images/preset1.png" alt="图片"></li>
</ul>
<h3 id="操作-state-二" tabindex="-1"><a class="header-anchor" href="#操作-state-二" aria-hidden="true">#</a> 操作 state (二)</h3>
<p>改变 state</p>
<ul>
<li>除了直接用 store.state++ 修改 store, 还可以调用 $patch 方法</li>
<li>它允许你使用部分 state 对象<strong>同时应用多个修改</strong></li>
</ul>
<p><img src="@source/.vuepress/public/images/ppatch1.png" alt="图片"></p>
<p>替换 state</p>
<ul>
<li>可以通过将其 $state 属性设置为新对象, 来替换 Store 的整个状态
<img src="@source/.vuepress/public/images/state55.png" alt="图片"></li>
</ul>
<h2 id="getters" tabindex="-1"><a class="header-anchor" href="#getters" aria-hidden="true">#</a> getters</h2>
<p>相当于 计算属性</p>
<p>定义 getters 4种情况:</p>
<p><img src="@source/.vuepress/public/images/pgetter1.png" alt="图片"></p>
<h2 id="actions" tabindex="-1"><a class="header-anchor" href="#actions" aria-hidden="true">#</a> actions</h2>
<h3 id="ctions-执行异步操作" tabindex="-1"><a class="header-anchor" href="#ctions-执行异步操作" aria-hidden="true">#</a> ctions 执行异步操作</h3>
<p>actions 中支持异步操作的, 并且可以编写异步函数, , 在函数中使用 await</p>
<p><img src="@source/.vuepress/public/images/paction1.png" alt="图片"></p>
</template>
