<template><h1 id="函数类型" tabindex="-1"><a class="header-anchor" href="#函数类型" aria-hidden="true">#</a> 函数类型</h1>
<p><img src="@source/.vuepress/public/images/aft.png" alt="图片">
在某些语言中，可能参数名称num1和num2是可以省略，但是TypeScript是不可以的</p>
<p><img src="@source/.vuepress/public/images/te.png" alt="图片"></p>
<p>简单使用案例:
<img src="@source/.vuepress/public/images/155.png" alt="图片"></p>
<h2 id="参数参数的可选类型" tabindex="-1"><a class="header-anchor" href="#参数参数的可选类型" aria-hidden="true">#</a> 参数参数的可选类型</h2>
<p><img src="@source/.vuepress/public/images/kexuan.png" alt="图片">
这个时候 y 依然是有类型的。它的类型是 number | undefined</p>
<p><img src="@source/.vuepress/public/images/xx.png" alt="图片">
另外可选类型需要在必传参数的后面
<img src="@source/.vuepress/public/images/kx.png" alt="图片"></p>
<h2 id="默认参数" tabindex="-1"><a class="header-anchor" href="#默认参数" aria-hidden="true">#</a> 默认参数</h2>
<p>从ES6开始，JavaScript是支持默认参数的，TypeScript也是支持默认参数的：
<img src="@source/.vuepress/public/images/moren.png" alt="图片"></p>
<h2 id="剩余参数" tabindex="-1"><a class="header-anchor" href="#剩余参数" aria-hidden="true">#</a> 剩余参数</h2>
<p>从ES6开始，JavaScript也支持剩余参数，剩余参数语法允许我们将一个不定数量的参数放到一个数组中
<img src="@source/.vuepress/public/images/nums.png" alt="图片"></p>
<h2 id="函数的重载" tabindex="-1"><a class="header-anchor" href="#函数的重载" aria-hidden="true">#</a> 函数的重载</h2>
<p>在TypeScript中，如果想编写了一个 add 函数，希望可以对字符串和数字类型进行相加，应该如何编写 ?</p>
<p>你可能会这样来编写，但是其实是错误的!!
<img src="@source/.vuepress/public/images/lianhe1.png" alt="图片">
<img src="@source/.vuepress/public/images/lianhe2.png" alt="图片"></p>
<ul>
<li>在TypeScript中，我们可以去编写不同的重载签名（overload signatures）来表示函数可以以不同的方式进行
调用；</li>
<li>一般是编写两个或者以上的重载签名，再去编写一个通用的函数以及实现</li>
</ul>
<p><img src="@source/.vuepress/public/images/chongzai.png" alt="图片"></p>
<ul>
<li><strong>但是注意，有实现提的函数，是不能直接被调用的：</strong></li>
</ul>
<h2 id="联合类型和重载" tabindex="-1"><a class="header-anchor" href="#联合类型和重载" aria-hidden="true">#</a> 联合类型和重载</h2>
<p>现在有一个需求：定义一个函数，可以传入字符串或者数组，获取它们的长度</p>
<p>这里有两种实现方案：</p>
<ul>
<li>方案一：使用联合类型来实现；</li>
<li>方案二：实现函数重载来实现；</li>
</ul>
<p><img src="@source/.vuepress/public/images/lc1.png" alt="图片">
<img src="@source/.vuepress/public/images/lc2.png" alt="图片"></p>
<p>在可能的情况下，<strong>尽量选择使用联合类型</strong>来实现</p>
</template>
