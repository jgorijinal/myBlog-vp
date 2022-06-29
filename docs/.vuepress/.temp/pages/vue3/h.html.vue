<template><h1 id="h-函数" tabindex="-1"><a class="header-anchor" href="#h-函数" aria-hidden="true">#</a> h()函数</h1>
<p>Vue推荐在绝大多数情况下<strong>使用模板</strong>来创建你的HTML, 然后一些特殊的场景, 真的需要<strong>JavaScript的完全编程的能力</strong>, 这个时候可以用<strong>渲染函数</strong>, 它<strong>比模板更接近编译器</strong></p>
<p><strong>使用h函数:</strong></p>
<ul>
<li><strong>h 函数</strong>是一个用于<strong>创建 vNode 的函数</strong></li>
<li>其实跟准确的命名为<strong>createVNode()函数</strong> , 但是为了简便在Vue将之<strong>简化为h函数</strong></li>
</ul>
<h2 id="h函数的使用" tabindex="-1"><a class="header-anchor" href="#h函数的使用" aria-hidden="true">#</a> h函数的使用</h2>
<p>接受三个参数</p>
<ul>
<li><img src="@source/.vuepress/public/images/h1.png" alt="图片"></li>
<li><img src="@source/.vuepress/public/images/h2.png" alt="图片"></li>
<li><img src="@source/.vuepress/public/images/h3.png" alt="图片"></li>
</ul>
<p>注意:</p>
<ul>
<li>如果没有props, 那么通常可以作为children作为第二个参数传入;</li>
<li>但是会产生歧义, 可以将 null 作为第二个参数传入, 将 children 作为第三个参数传入</li>
</ul>
<h3 id="创建原生元素" tabindex="-1"><a class="header-anchor" href="#创建原生元素" aria-hidden="true">#</a> 创建原生元素</h3>
<p>当 Composition API 与模板一起使用时，<strong>setup() 钩子</strong>的返回值是用于暴露数据给模板。然而当我们使用渲染函数时，可以<strong>直接把渲染函数返回：</strong></p>
<p>setup钩子 渲染一个计数器:
<img src="@source/.vuepress/public/images/counter.png" alt="图片"></p>
<ul>
<li><img src="@source/.vuepress/public/images/setuph.png" alt="图片"></li>
</ul>
<h3 id="创建组件-及-插槽的使用" tabindex="-1"><a class="header-anchor" href="#创建组件-及-插槽的使用" aria-hidden="true">#</a> 创建组件 及 插槽的使用</h3>
<p><img src="@source/.vuepress/public/images/a1.png" alt="图片">
<img src="@source/.vuepress/public/images/a2.png" alt="图片"></p>
<h2 id="jsx" tabindex="-1"><a class="header-anchor" href="#jsx" aria-hidden="true">#</a> jsx</h2>
<p>如果想要在<strong>项目中使用jsx</strong>, 那么<strong>需要添加对jsx的支持</strong></p>
<ul>
<li>通常会<strong>通过babel来转换</strong></li>
<li>只需要在 <strong>Babel 配置对应的插件即可</strong></li>
<li>安装 babel 支持Vue的jsx插件</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm install @vue/babel-plugin-jsx -D
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul>
<li>在<strong>babel.config.js配置文件</strong>中配置插件
<img src="@source/.vuepress/public/images/babel.png" alt="图片"></li>
</ul>
</template>
