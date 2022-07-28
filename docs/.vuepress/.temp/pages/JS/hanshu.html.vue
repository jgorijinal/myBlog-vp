<template><h1 id="函数式编程" tabindex="-1"><a class="header-anchor" href="#函数式编程" aria-hidden="true">#</a> 函数式编程</h1>
<h2 id="call-函数的实现" tabindex="-1"><a class="header-anchor" href="#call-函数的实现" aria-hidden="true">#</a> call 函数的实现</h2>
<p><img src="@source/.vuepress/public/images/call1.png" alt="图片"></p>
<p>详解:
<img src="@source/.vuepress/public/images/callxiangjie.png" alt="图片"></p>
<h2 id="apply函数的实现" tabindex="-1"><a class="header-anchor" href="#apply函数的实现" aria-hidden="true">#</a> apply函数的实现</h2>
<p><img src="@source/.vuepress/public/images/apply1.png" alt="图片"></p>
<p>需要处理没有传参数的边界情况</p>
<h2 id="bind-函数的实现" tabindex="-1"><a class="header-anchor" href="#bind-函数的实现" aria-hidden="true">#</a> bind 函数的实现</h2>
<p>bind函数的用法</p>
<p><img src="@source/.vuepress/public/images/bbb1.png" alt="图片">
<img src="@source/.vuepress/public/images/bbb2.png" alt="图片"></p>
<p><strong>自己实现 bind</strong>
<img src="@source/.vuepress/public/images/bbb3.png" alt="图片"></p>
<h2 id="认识-arguments" tabindex="-1"><a class="header-anchor" href="#认识-arguments" aria-hidden="true">#</a> 认识 arguments</h2>
<p>arguments 是一个 对应于 <strong>传递给函数的参数</strong> 的 <strong>类数组(array-like)对象</strong></p>
<p><img src="@source/.vuepress/public/images/arg.png" alt="图片"></p>
<ul>
<li>array-like 意味着它不是一个数组类型，而是一个对象类型
<ul>
<li>但是它却拥有数组的一些特性，比如说 length，比如可以通过 index 索引来访问</li>
<li>但是它却没有数组的一些方法，比如 forEach、map 等；
<img src="@source/.vuepress/public/images/arg1.png" alt="图片"></li>
</ul>
</li>
</ul>
</template>
