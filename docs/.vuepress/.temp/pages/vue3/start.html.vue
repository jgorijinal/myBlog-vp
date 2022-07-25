<template><h1 id="vue-基础" tabindex="-1"><a class="header-anchor" href="#vue-基础" aria-hidden="true">#</a> Vue 基础</h1>
<h2 id="模板语法" tabindex="-1"><a class="header-anchor" href="#模板语法" aria-hidden="true">#</a> 模板语法</h2>
<h3 id="v-once" tabindex="-1"><a class="header-anchor" href="#v-once" aria-hidden="true">#</a> v-once</h3>
<p>v-once 用于指定<strong>元素</strong>或者<strong>组件</strong>只渲染一次：</p>
<ul>
<li>当数据发生变化时，<strong>元素或者组件以及其所有的子元素将视为静态内容并且跳过</strong>；</li>
<li>该指令可以用于<strong>性能优化</strong>
如果是子节点，也是只会渲染一次：</li>
</ul>
<h3 id="v-text" tabindex="-1"><a class="header-anchor" href="#v-text" aria-hidden="true">#</a> v-text</h3>
<p>用于更新元素的 textContent</p>
<p><img src="@source/.vuepress/public/images/vtext.png" alt="图片"></p>
<h3 id="v-html" tabindex="-1"><a class="header-anchor" href="#v-html" aria-hidden="true">#</a> v-html</h3>
<p>默认情况下，如果我要展示的内容<strong>本身是 html</strong>的，vue并不会对其进行特殊的解析\</p>
<p>如果我们希望这个内容被Vue可以解析出来，那么可以使用 v-html 来展示；</p>
<p><img src="@source/.vuepress/public/images/vhtml.png" alt="图片"></p>
<h3 id="v-pre" tabindex="-1"><a class="header-anchor" href="#v-pre" aria-hidden="true">#</a> v-pre</h3>
<p>v-pre用于跳过元素和它的子元素的编译过程，显示原始的 Mustache 标签：</p>
<p>跳过不需要编译的节点，加快编译的速度</p>
<p><img src="@source/.vuepress/public/images/vpre.png" alt="图片"></p>
<h3 id="v-cloak" tabindex="-1"><a class="header-anchor" href="#v-cloak" aria-hidden="true">#</a> v-cloak</h3>
<p>这个指令保持在元素上直到关联组件实例结束编译。</p>
<ul>
<li>和 CSS 规则如 <code>[v-cloak] { display: none }</code> 一起用时，这个指令可以隐藏未编译的 Mustache 标签直到组件实
例准备完毕</li>
</ul>
<p><img src="@source/.vuepress/public/images/vcloak.png" alt="图片"></p>
<h3 id="v-bind-绑定属性" tabindex="-1"><a class="header-anchor" href="#v-bind-绑定属性" aria-hidden="true">#</a> v-bind 绑定属性</h3>
<p>动态地绑定一个或多个 attribute，或一个组件 prop 到表达式</p>
<h3 id="绑定class-对象语法" tabindex="-1"><a class="header-anchor" href="#绑定class-对象语法" aria-hidden="true">#</a> 绑定class - 对象语法</h3>
<p>可以传给 :class (v-bind:class 的简写) 一个对象，以动态地切换 class
<img src="@source/.vuepress/public/images/dclass.png" alt="图片"></p>
<h3 id="绑定class-数组语法" tabindex="-1"><a class="header-anchor" href="#绑定class-数组语法" aria-hidden="true">#</a> 绑定class - 数组语法</h3>
<p><img src="@source/.vuepress/public/images/aclass.png" alt="图片"></p>
<h3 id="绑定-style-对象语法" tabindex="-1"><a class="header-anchor" href="#绑定-style-对象语法" aria-hidden="true">#</a> 绑定 style - 对象语法</h3>
<p>可以利用<strong>v-bind:style</strong>来绑定一些CSS内联样式：</p>
<ul>
<li>
<p>这次因为某些样式需要根据数据<strong>动态</strong>来决定；</p>
</li>
<li>
<p>比如某段文字的<strong>颜色</strong>，<strong>大小</strong>等等；
CSS property 名可以用<strong>驼峰式 (camelCase)</strong> 或<strong>短横线分隔 (kebab-case，记得用引号括起来)</strong> 来命名；</p>
</li>
<li>
<p>对象语法</p>
</li>
</ul>
<p><img src="@source/.vuepress/public/images/aclass.png" alt="图片"></p>
<ul>
<li>数组语法</li>
</ul>
<p>:style 的数组语法可以将多个样式对象应用到同一个元素上
<img src="@source/.vuepress/public/images/aclass.png" alt="图片"></p>
<h3 id="v-bind-绑定一个对象-用得多" tabindex="-1"><a class="header-anchor" href="#v-bind-绑定一个对象-用得多" aria-hidden="true">#</a> v-bind 绑定一个对象 (用得多)</h3>
<p>如果希望将一个对象的所有属性，绑定到元素上的所有属性，应该怎么做 ?</p>
<ul>
<li>非常简单，可以直接使用 v-bind 绑定一个 对象；
<img src="@source/.vuepress/public/images/bd.png" alt="图片"></li>
</ul>
<h3 id="v-on-的基本使用" tabindex="-1"><a class="header-anchor" href="#v-on-的基本使用" aria-hidden="true">#</a> v-on 的基本使用</h3>
<ul>
<li>使用 v-on 来监听一下<strong>点击的事件</strong></li>
</ul>
<p><img src="@source/.vuepress/public/images/von1.png" alt="图片"></p>
<ul>
<li>也可以绑定<strong>其他的事件</strong></li>
</ul>
<p><img src="@source/.vuepress/public/images/von2.png" alt="图片"></p>
<ul>
<li><strong>绑定多个事件</strong>，这个时候可以传入一个<strong>对象</strong></li>
</ul>
<p><img src="@source/.vuepress/public/images/von3.png" alt="图片"></p>
<h3 id="v-on-参数传递" tabindex="-1"><a class="header-anchor" href="#v-on-参数传递" aria-hidden="true">#</a> v-on 参数传递</h3>
<p>当通过methods中定义方法，以供 @click 调用时，需要注意参数问题：</p>
<ul>
<li>情况一：如果该方法不需要额外参数，那么方法后的()可以不添加。
但是注意：如果方法本身中有一个参数，那么会默认将原生事件 event 参数传递进去</li>
<li>情况二：如果需要同时传入某个参数，同时需要 event 时，可以通过 $event 传入事件</li>
</ul>
<p><img src="@source/.vuepress/public/images/von4.png" alt="图片">
<img src="@source/.vuepress/public/images/von5.png" alt="图片"></p>
<h3 id="v-on-的修饰符" tabindex="-1"><a class="header-anchor" href="#v-on-的修饰符" aria-hidden="true">#</a> v-on 的修饰符</h3>
<p>v-on支持修饰符，修饰符相当于对事件进行了一些特殊的处理：</p>
<ul>
<li>.stop - 调用 event.stopPropagation()。</li>
<li>.prevent - 调用 event.preventDefault()。</li>
<li>.capture - 添加事件侦听器时使用 capture 模式。</li>
<li>.self - 只当事件是从侦听器绑定的元素本身触发时才触发回调。</li>
<li>.{keyAlias} - 仅当事件是从特定键触发时才触发回调。</li>
<li>.once - 只触发一次回调。</li>
<li>.left - 只当点击鼠标左键时触发。</li>
<li>.right - 只当点击鼠标右键时触发。</li>
<li>.middle - 只当点击鼠标中键时触发。</li>
<li>.passive - { passive: true } 模式添加侦听器</li>
</ul>
<p><img src="@source/.vuepress/public/images/xiushion.png" alt="图片"></p>
<h2 id="条件渲染" tabindex="-1"><a class="header-anchor" href="#条件渲染" aria-hidden="true">#</a> 条件渲染</h2>
<h3 id="v-if、v-else、v-else-if" tabindex="-1"><a class="header-anchor" href="#v-if、v-else、v-else-if" aria-hidden="true">#</a> v-if、v-else、v-else-if</h3>
<p>v-if、v-else、v-else-if 用于根据条件来渲染某一块的内容：</p>
<ul>
<li>这些内容只有在条件为 true 时，才会被渲染出来；</li>
<li>这三个指令与 JavaScript 的条件语句if、else、else if类似；
v-if 的渲染原理：</li>
<li>v-if是惰性的；</li>
<li>当条件为 false 时，其判断的内容完全不会被渲染或者会被销毁掉；</li>
<li>当条件为 true 时，才会真正渲染条件块中的内容</li>
</ul>
<h3 id="template-元素" tabindex="-1"><a class="header-anchor" href="#template-元素" aria-hidden="true">#</a> template 元素</h3>
<p>因为v-if是一个指令，所以必须将其添加到一个元素上：</p>
<ul>
<li>但是如果我们希望切换的是多个元素呢？</li>
<li>此时我们渲染div，但是我们并不希望div这种元素被渲染；</li>
<li>这个时候，我们可以选择使用template；</li>
</ul>
<p>template元素可以当做不可见的包裹元素，并且在 v-if 上使用，但是最终 template 不会被渲染出来</p>
<h3 id="v-show" tabindex="-1"><a class="header-anchor" href="#v-show" aria-hidden="true">#</a> v-show</h3>
<p>v-show 和 v-if 的用法看起来是一致的，也是根据一个条件决定是否显示元素或者组件</p>
<h3 id="v-if-和-v-show-的区别" tabindex="-1"><a class="header-anchor" href="#v-if-和-v-show-的区别" aria-hidden="true">#</a> v-if 和 v-show 的区别</h3>
<p>首先，在用法上的区别：</p>
<ul>
<li>v-show是不支持template；</li>
<li>v-show不可以和v-else一起使用；</li>
</ul>
<p>其次，本质的区别：</p>
<ul>
<li>v-show元素无论是否需要显示到浏览器上，它的 DOM 实际都是有渲染的，只是通过CSS的display属性来进行
切换；</li>
<li>v-if 当条件为 false 时，<strong>其对应的原生压根不会被渲染到DOM中</strong></li>
</ul>
<p>开发中如何进行选择呢？</p>
<ul>
<li>如果我们的原生需要在显示和隐藏之间频繁的切换，那么使用v-show；</li>
<li>如果不会频繁的发生切换，那么使用v-if；</li>
</ul>
<h2 id="组件实例" tabindex="-1"><a class="header-anchor" href="#组件实例" aria-hidden="true">#</a> 组件实例</h2>
<h3 id="refs" tabindex="-1"><a class="header-anchor" href="#refs" aria-hidden="true">#</a> $refs</h3>
<p>某些情况下 , 我们在组件中想要获取到<strong>元素对象</strong>或者<strong>子组件实例</strong></p>
<ul>
<li>Vue 开发中不推荐进行 DOM 操作</li>
<li>可以在<strong>元素</strong>或者<strong>组件</strong>绑定一个<code>ref</code>的<code>attribute</code>属性</li>
</ul>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>comp</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>comp<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>comp</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> comp <span class="token keyword">from</span> <span class="token string">'./components/comp.vue'</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span><span class="token punctuation">{</span>comp<span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//访问元素</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>title<span class="token punctuation">)</span>

    <span class="token comment">// 访问组件实例</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>comp<span class="token punctuation">.</span>$el<span class="token punctuation">)</span>
    <span class="token comment">// 访问组件实例的数据, 方法</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>comp<span class="token punctuation">.</span>message<span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>comp<span class="token punctuation">.</span><span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h3 id="parent-和-root" tabindex="-1"><a class="header-anchor" href="#parent-和-root" aria-hidden="true">#</a> $parent 和 $root</h3>
<ul>
<li>$parent : 访问父元素, 没有就 null</li>
<li>$root: 访问根元素</li>
</ul>
<p><strong>注意</strong>: Vue3 <strong>移除了 <code>$children</code>的属性</strong> , 所以不可以使用了</p>
<h3 id="el" tabindex="-1"><a class="header-anchor" href="#el" aria-hidden="true">#</a> $el</h3>
<ul>
<li>
<p>该组件实例的根节点</p>
</li>
<li>
<p><code>$el</code> 直到组件挂载完成 <code>(mounted)</code> 之前都会是 <code>undefined</code></p>
</li>
</ul>
<h3 id="attrs" tabindex="-1"><a class="header-anchor" href="#attrs" aria-hidden="true">#</a> $attrs</h3>
<h4 id="非props的attribute" tabindex="-1"><a class="header-anchor" href="#非props的attribute" aria-hidden="true">#</a> 非props的attribute</h4>
<ul>
<li>当我们<strong>传递给一个组件某个属性</strong> , 但是该属性并没有定义对应的<code>props</code>或者<code>emits</code>, 就称之为<strong>非props的attribute</strong></li>
<li>常见的包括<strong>class , style , id属性等</strong></li>
</ul>
<h4 id="attribute-继承" tabindex="-1"><a class="header-anchor" href="#attribute-继承" aria-hidden="true">#</a> attribute 继承</h4>
<ul>
<li>当<strong>组件有单个根节点时</strong> , <strong>非props的attribute将自动添加到根节点的Attribute</strong>中</li>
</ul>
<p>如果<strong>不希望组建的根元素继承attribute</strong>,可以在组件中设置 <strong><code>inheritAttrs:false</code></strong></p>
<ul>
<li>禁用attribute继承的<strong>常见情况</strong>是需要<strong>将attribute应用在根元素之外的其他元素上</strong></li>
<li>可以<strong>通过<code>$attrs</code>来访问所有的非props的attribute</strong></li>
</ul>
<h4 id="多个根节点的attribute" tabindex="-1"><a class="header-anchor" href="#多个根节点的attribute" aria-hidden="true">#</a> 多个根节点的attribute</h4>
<ul>
<li><strong>多个根节点的attribute如果没有显示地绑定</strong>, 那么会报警告 , <strong>所以必须要手动地指定具体要绑到哪一个元素</strong></li>
</ul>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$attrs.class<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>多个根节点<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>多个根节点<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></template>
