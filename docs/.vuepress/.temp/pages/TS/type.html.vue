<template><h1 id="类型缩小" tabindex="-1"><a class="header-anchor" href="#类型缩小" aria-hidden="true">#</a> 类型缩小</h1>
<p>什么是<strong>类型缩小</strong>呢？</p>
<ul>
<li>类型缩小的英文是 Type Narrowing</li>
<li>我们可以通过类似于 typeof padding === &quot;number&quot; 的判断语句，来改变TypeScript的执行路径</li>
<li>在给定的执行路径中，我们可以缩小比声明时更小的类型，这个过程称之为 缩小</li>
<li>而我们编写的 typeof padding === &quot;number 可以称之为 类型保护（type guards）</li>
</ul>
<p><strong>常见的类型保护</strong>有如下几种：</p>
<ul>
<li>typeof</li>
<li>平等缩小（比如===、!==）</li>
<li>instanceof</li>
<li>in</li>
<li>等等..</li>
</ul>
<h2 id="typeof" tabindex="-1"><a class="header-anchor" href="#typeof" aria-hidden="true">#</a> typeof</h2>
<p>在TypeScript 中，检查返回的值typeof是一种类型保护：因为 TypeScript 对如何typeof操作不同的值进行编码
<img src="@source/.vuepress/public/images/to.png" alt="图片"></p>
<h2 id="平等缩小" tabindex="-1"><a class="header-anchor" href="#平等缩小" aria-hidden="true">#</a> 平等缩小</h2>
<p>可以使用Switch或者相等的一些运算符来表达相等性（比如===, !==）
<img src="@source/.vuepress/public/images/sd.png" alt="图片"></p>
<h2 id="instanceof" tabindex="-1"><a class="header-anchor" href="#instanceof" aria-hidden="true">#</a> instanceof</h2>
<p>JavaScript 有一个运算符来检查一个值是否是另一个值的“实例”</p>
<p><img src="@source/.vuepress/public/images/ins.png" alt="图片"></p>
<h2 id="in" tabindex="-1"><a class="header-anchor" href="#in" aria-hidden="true">#</a> in</h2>
<p>Javascript 有一个运算符，用于确定对象是否具有带名称的属性：in 运算符</p>
<ul>
<li>如果指定的属性在指定的对象或其原型链中，则<strong>in 运算符</strong>返回 true</li>
</ul>
<p><img src="@source/.vuepress/public/images/sr.png" alt="图片"></p>
</template>
