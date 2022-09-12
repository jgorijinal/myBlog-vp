<template><h1 id="父子组件通信-和-behavior" tabindex="-1"><a class="header-anchor" href="#父子组件通信-和-behavior" aria-hidden="true">#</a> 父子组件通信 和 behavior</h1>
<h2 id="父子通信-3种方式" tabindex="-1"><a class="header-anchor" href="#父子通信-3种方式" aria-hidden="true">#</a> 父子通信 3种方式</h2>
<ol>
<li>属性绑定</li>
</ol>
<ul>
<li>用于父组件向子组件的指定属性设置数据，仅能设置 JSON 兼容的数据</li>
</ul>
<ol start="2">
<li>事件绑定</li>
</ol>
<ul>
<li>用于子组件向父组件传递数据，可以传递任意数据</li>
</ul>
<ol start="3">
<li>获取组件实例</li>
</ol>
<ul>
<li>父组件还可以通过 <code>this.selectComponent()</code> 获取子组件实例对象</li>
<li>这样就可以直接访问子组件的任意数据和方法</li>
</ul>
<h3 id="属性绑定" tabindex="-1"><a class="header-anchor" href="#属性绑定" aria-hidden="true">#</a> 属性绑定</h3>
<p>思路跟 Vue 相同, 子组件 通过 properties 属性接受数据</p>
<h3 id="事件绑定" tabindex="-1"><a class="header-anchor" href="#事件绑定" aria-hidden="true">#</a> 事件绑定</h3>
<p><strong>跟 Vue 思路相同</strong></p>
<p>事件绑定用于实现子向父传值，可以传递任何类型的数据。使用步骤如下：</p>
<ol>
<li>在父组件的 js 中，定义一个函数，这个函数即将通过自定义事件的形式，传递给子组件</li>
<li>在父组件的 wxml 中，通过自定义事件的形式，将步骤 1 中定义的函数引用，传递给子组件</li>
<li>在子组件的 js 中，通过调用 <strong><code>this.triggerEvent('自定义事件名称', { /* 参数对象 */ })</code></strong> ，将数据发送到父组件</li>
<li>在父组件的 js 中，通过 <code>e.detail</code> 获取到子组件传递过来的数据</li>
</ol>
<p><img src="@source/.vuepress/public/images/tx1.png" alt="图片">
<img src="@source/.vuepress/public/images/tx2.png" alt="图片">
<img src="@source/.vuepress/public/images/tx3.png" alt="图片">
<img src="@source/.vuepress/public/images/tx4.png" alt="图片"></p>
<h3 id="获取组件实例" tabindex="-1"><a class="header-anchor" href="#获取组件实例" aria-hidden="true">#</a> 获取组件实例</h3>
<p>可在父组件里调用 <strong><code>this.selectComponent(&quot;id或class选择器&quot;)</code></strong> ，获取子组件的实例对象，从而直接访问子组
件的任意数据和方法。调用时需要传入一个选择器，例如 this.selectComponent(&quot;.my-component&quot;)</p>
<p><img src="@source/.vuepress/public/images/tx5.png" alt="图片"></p>
<h2 id="behavior" tabindex="-1"><a class="header-anchor" href="#behavior" aria-hidden="true">#</a> behavior</h2>
<p>behaviors 是小程序中，用于<strong>实现组件间代码共享的特性</strong>，类似于 Vue.js 中的 “mixins”</p>
<p>每个 behavior 可以包含一组<strong>属性、数据、生命周期函数和方法</strong>。组件引用它时，它的属性、数据和方法会被
合并到组件中</p>
<p>每个组件可以引用多个 behavior，behavior 也可以引用其它 behavior</p>
<h3 id="创建-behavior" tabindex="-1"><a class="header-anchor" href="#创建-behavior" aria-hidden="true">#</a> 创建 behavior</h3>
<p><strong>调用 Behavior(Object object) 方法</strong>即可创建一个共享的 behavior 实例对象</p>
<p><img src="@source/.vuepress/public/images/beh1.png" alt="图片"></p>
<p><img src="@source/.vuepress/public/images/beh2.png" alt="图片"></p>
<h3 id="导入并使用-behavior" tabindex="-1"><a class="header-anchor" href="#导入并使用-behavior" aria-hidden="true">#</a> 导入并使用 behavior</h3>
<p>在组件中，使用 <strong>require() 方法</strong>导入需要的 behavior，<strong>挂载后即可访问 behavior 中的数据或方法</strong></p>
<p><img src="@source/.vuepress/public/images/beh4.png" alt="图片"></p>
<h3 id="behavior-中所有可用的节点" tabindex="-1"><a class="header-anchor" href="#behavior-中所有可用的节点" aria-hidden="true">#</a> behavior 中所有可用的节点</h3>
<p><img src="@source/.vuepress/public/images/beh6.png" alt="图片"></p>
<h3 id="同名字段的覆盖和组合规则-了解" tabindex="-1"><a class="header-anchor" href="#同名字段的覆盖和组合规则-了解" aria-hidden="true">#</a> 同名字段的覆盖和组合规则 (了解)</h3>
<p>组件和它引用的 behavior 中可以包含同名的字段，此时可以参考如下 3 种同名时的处理规则：</p>
<ul>
<li>同名的数据字段 (data)</li>
<li>同名的属性 (properties) 或方法 (methods)</li>
<li>同名的生命周期函数</li>
</ul>
<p>关于详细的覆盖和组合规则<a href="https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/behaviors.html" target="_blank" rel="noopener noreferrer">官方解释<ExternalLinkIcon/></a></p>
</template>
