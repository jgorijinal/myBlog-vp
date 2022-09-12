<template><h1 id="组件生命周期和插槽" tabindex="-1"><a class="header-anchor" href="#组件生命周期和插槽" aria-hidden="true">#</a> 组件生命周期和插槽</h1>
<h2 id="组件生命周期" tabindex="-1"><a class="header-anchor" href="#组件生命周期" aria-hidden="true">#</a> 组件生命周期</h2>
<h3 id="组件全部生命周期" tabindex="-1"><a class="header-anchor" href="#组件全部生命周期" aria-hidden="true">#</a> 组件全部生命周期</h3>
<p>小程序组件可用的全部生命周期
<img src="@source/.vuepress/public/images/shengming1.png" alt="图片"></p>
<h3 id="组件主要的生命周期函数" tabindex="-1"><a class="header-anchor" href="#组件主要的生命周期函数" aria-hidden="true">#</a> 组件主要的生命周期函数</h3>
<p>在小程序组件中，最重要的生命周期函数有 3 个，分别是 <strong>created、attached、detached</strong></p>
<ol>
<li>组件实例<strong>刚被创建</strong>好的时候，created 生命周期函数会被触发</li>
</ol>
<ul>
<li>此时还不能调用 setData</li>
<li>通常在这个生命周期函数中，只应该用于给组件的 this 添加一些自定义的属性字段</li>
</ul>
<ol start="2">
<li>在组件<strong>完全初始化完毕、进入页面节点树</strong>后， attached 生命周期函数会被触发</li>
</ol>
<ul>
<li>此时， this.data 已被初始化完毕</li>
<li>这个生命周期很有用，绝大多数初始化的工作可以在这个时机进行（例如发请求获取初始数据）</li>
</ul>
<ol start="3">
<li>在组件<strong>离开页面节点树</strong>后， detached 生命周期函数会被触发</li>
</ol>
<ul>
<li>退出一个页面时，会触发页面内每个自定义组件的 detached 生命周期函数</li>
<li>此时适合做一些清理性质的工作</li>
</ul>
<h3 id="lifetimes-节点" tabindex="-1"><a class="header-anchor" href="#lifetimes-节点" aria-hidden="true">#</a> lifetimes 节点</h3>
<p>在小程序组件中，生命周期函数可以直接定义在 Component 构造器的第一级参数中，可以在 <strong>lifetimes 字段</strong>
内进行声明 <strong>（这是推荐的方式，其优先级最高）</strong>
<img src="@source/.vuepress/public/images/lifetimes1.png" alt="图片"></p>
<h2 id="组件所在页面的生命周期" tabindex="-1"><a class="header-anchor" href="#组件所在页面的生命周期" aria-hidden="true">#</a> 组件所在页面的生命周期</h2>
<p>有时，<strong>自定义组件的行为依赖于页面状态的变化</strong>，此时就需要用到<strong>组件所在页面的生命周期</strong></p>
<p><img src="@source/.vuepress/public/images/zj1.png" alt="图片"></p>
<h3 id="pagelifetimes-节点" tabindex="-1"><a class="header-anchor" href="#pagelifetimes-节点" aria-hidden="true">#</a> pageLifetimes 节点</h3>
<p>组件所在页面的生命周期函数，需要定义在 <strong>pageLifetimes 节点中</strong>
<img src="@source/.vuepress/public/images/plt1.png" alt="图片"></p>
<h2 id="插槽" tabindex="-1"><a class="header-anchor" href="#插槽" aria-hidden="true">#</a> 插槽</h2>
<p>在自定义组件的 wxml 结构中，可以提供一个 <code>&lt;slot&gt;</code>节点（插槽），用于承载组件使用者提供的 wxml 结构</p>
<h3 id="单个插槽" tabindex="-1"><a class="header-anchor" href="#单个插槽" aria-hidden="true">#</a> 单个插槽</h3>
<p>单个插槽用法跟 Vue 相同</p>
<h3 id="多个插槽" tabindex="-1"><a class="header-anchor" href="#多个插槽" aria-hidden="true">#</a> 多个插槽</h3>
<p>options 开启 multipleSlots 属性</p>
<p><img src="@source/.vuepress/public/images/ms1.png" alt="图片"></p>
<p>组件内部 :</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;slot name="slotName">&lt;/slot>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>使用时:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;view slot="slotName">这是插入到slot name="slotName"的插槽&lt;/view>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></template>
