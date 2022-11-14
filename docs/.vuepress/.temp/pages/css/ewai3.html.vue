<template><h1 id="额外知识-3" tabindex="-1"><a class="header-anchor" href="#额外知识-3" aria-hidden="true">#</a> 额外知识 (3)</h1>
<h2 id="css中的单位" tabindex="-1"><a class="header-anchor" href="#css中的单位" aria-hidden="true">#</a> CSS中的单位</h2>
<h3 id="相对单位" tabindex="-1"><a class="header-anchor" href="#相对单位" aria-hidden="true">#</a> 相对单位</h3>
<p><img src="@source/.vuepress/public/images/xiangdui1.png" alt="图片"></p>
<ul>
<li>em: 相对于自身的 font-size 大小</li>
<li>rem : 相对于 html 的 font-size 大小 (默认 16px)</li>
</ul>
<h2 id="less" tabindex="-1"><a class="header-anchor" href="#less" aria-hidden="true">#</a> Less</h2>
<h3 id="变量-variables" tabindex="-1"><a class="header-anchor" href="#变量-variables" aria-hidden="true">#</a> 变量（Variables）</h3>
<p><strong><code>@变量名: 变量值;</code></strong></p>
<p><img src="@source/.vuepress/public/images/less1.png" alt="图片"></p>
<h3 id="嵌套-nesting" tabindex="-1"><a class="header-anchor" href="#嵌套-nesting" aria-hidden="true">#</a> 嵌套（Nesting）</h3>
<p><img src="@source/.vuepress/public/images/less.png" alt="图片"></p>
<p><strong>特殊符号：&amp; 表示当前选择器的父级</strong></p>
<h3 id="运算-operations-太笨了不用" tabindex="-1"><a class="header-anchor" href="#运算-operations-太笨了不用" aria-hidden="true">#</a> 运算（Operations) 太笨了不用</h3>
<p>在Less中，算术运算符 +、-、 、/ 可以对任何数字、颜色或变量进行运算。</p>
<ul>
<li>算术运算符在加、减或比较之前会进行单位换算，计算的结果以<strong>最左侧操作数的单位类型为准</strong>；</li>
<li>如果单位换算无效或失去意义，则忽略单位；</li>
</ul>
<p><img src="@source/.vuepress/public/images/less3.png" alt="图片"></p>
<h3 id="混合-mixins" tabindex="-1"><a class="header-anchor" href="#混合-mixins" aria-hidden="true">#</a> 混合（Mixins)</h3>
<p>在原来的CSS编写过程中，多个选择器中可能会有大量相同的代码</p>
<ul>
<li>我们希望可以<strong>将这些代码进行抽取到一个独立的地方，任何选择器都可以进行复用；</strong></li>
<li>在less中提供了**混入（Mixins）**来帮助我们完成这样的操作；</li>
</ul>
<p>混合（Mixin）是一种将一组属性从一个规则集（或混入）到另一个规则集的方法。</p>
<p><img src="@source/.vuepress/public/images/less4.png" alt="图片"></p>
<p><strong>注意：混入在没有参数的情况下，小括号可以省略，但是不建议这样使用；</strong></p>
<p><strong>混入也可以传入变量（暂时了解）</strong>
<img src="@source/.vuepress/public/images/less01.png" alt="图片">
<strong>Less语法六：映射（Maps）</strong>
<img src="@source/.vuepress/public/images/less02.png" alt="图片">
<strong>混入和映射结合：混入也可以当做一个自定义函数来使用（暂时了解）</strong>
<img src="@source/.vuepress/public/images/less03.png" alt="图片"></p>
<h3 id="其他语法补充-了解" tabindex="-1"><a class="header-anchor" href="#其他语法补充-了解" aria-hidden="true">#</a> 其他语法补充(了解)</h3>
<p>extend继承</p>
<ul>
<li>和mixins作用类似，用于<strong>复用代码</strong></li>
<li>和mixins相比，<strong>继承代码最终会转化成并集选择器</strong></li>
</ul>
<p><img src="@source/.vuepress/public/images/lss1.png" alt="图片"></p>
<p>Less语法八：Less内置函数</p>
<ul>
<li>Less 内置了多种函数用于转换颜色、处理字符串、算术运算等。</li>
<li>内置函数手册：<a href="https://less.bootcss.com/functions/" target="_blank" rel="noopener noreferrer">https://less.bootcss.com/functions/<ExternalLinkIcon/></a></li>
</ul>
<p><img src="@source/.vuepress/public/images/lss2.png" alt="图片"></p>
<p><strong>作用域（Scope）</strong></p>
<ul>
<li>在查找一个变量时，首先在本地查找变量和混合（mixins）；</li>
<li>如果找不到，则从“父”级作用域继承；</li>
</ul>
<p><img src="@source/.vuepress/public/images/lss5.png" alt="图片"></p>
<p><strong>注释（Comments）</strong></p>
<ul>
<li>在Less中，块注释和行注释都可以使用；</li>
</ul>
<p><strong>导入（Importing）</strong></p>
<ul>
<li>导入的方式和CSS的用法是一致的；</li>
<li>导入一个 .less 文件，此文件中的所有变量就可以全部使用了；</li>
<li>如果导入的文件是 .less 扩展名，则可以将扩展名省略掉；</li>
</ul>
</template>
