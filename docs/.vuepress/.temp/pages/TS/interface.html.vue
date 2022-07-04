<template><h1 id="接口" tabindex="-1"><a class="header-anchor" href="#接口" aria-hidden="true">#</a> 接口</h1>
<h2 id="接口的声明" tabindex="-1"><a class="header-anchor" href="#接口的声明" aria-hidden="true">#</a> 接口的声明</h2>
<p>前面通过type可以用来声明一个对象类型：</p>
<p><img src="@source/.vuepress/public/images/type1.png" alt="图片"></p>
<p>对象的另外一种声明方式就是通过接口来声明:
<img src="@source/.vuepress/public/images/inter.png" alt="图片"></p>
<h2 id="索引类型" tabindex="-1"><a class="header-anchor" href="#索引类型" aria-hidden="true">#</a> 索引类型</h2>
<p>是有时候会遇到类似下面的对象：
<img src="@source/.vuepress/public/images/suoyin.png" alt="图片">
<img src="@source/.vuepress/public/images/suoyin2.png" alt="图片"></p>
<h2 id="函数类型" tabindex="-1"><a class="header-anchor" href="#函数类型" aria-hidden="true">#</a> 函数类型</h2>
<p>，实际上 interface 也可以用来定义函数类型
<img src="@source/.vuepress/public/images/adad.png" alt="图片"></p>
<p>当然，除非特别的情况，还是推荐使用类型别名来定义函数</p>
<p><img src="@source/.vuepress/public/images/tf.png" alt="图片"></p>
<h2 id="接口继承" tabindex="-1"><a class="header-anchor" href="#接口继承" aria-hidden="true">#</a> 接口继承</h2>
<p>接口和类一样是可以进行继承的，也是使用 extends 关键字</p>
<p>并且接口是支持多继承的（类不支持多继承)</p>
<p><img src="@source/.vuepress/public/images/ie.png" alt="图片"></p>
<h2 id="接口的实现" tabindex="-1"><a class="header-anchor" href="#接口的实现" aria-hidden="true">#</a> 接口的实现</h2>
<p>接口定义后，也是可以被类实现的</p>
<ul>
<li>如果被一个类实现，那么在之后需要传入接口的地方，都可以将这个类传入</li>
<li>这就是面向接口开发</li>
</ul>
<p>继承 : 只能实现单继承
实现 : 实现接口 , 类可以实现多个接口
<img src="@source/.vuepress/public/images/ip1.png" alt="图片">  <img src="@source/.vuepress/public/images/ip2.png" alt="图片"></p>
<h2 id="交叉类型" tabindex="-1"><a class="header-anchor" href="#交叉类型" aria-hidden="true">#</a> 交叉类型</h2>
<ul>
<li>交叉类似表示需要满足多个类型的条件；</li>
<li>交叉类型使用 &amp; 符号</li>
</ul>
<p>在开发中，我们进行交叉时，通常是对对象类型进行交叉的
<img src="@source/.vuepress/public/images/jiaocha.png" alt="图片"></p>
<h2 id="type-和-interface-的区别" tabindex="-1"><a class="header-anchor" href="#type-和-interface-的区别" aria-hidden="true">#</a> type 和 interface 的区别</h2>
<p>发现interface和type都可以用来定义对象类型，那么在开发中定义对象类型时，到底选择哪一个呢？</p>
<ul>
<li>如果是定义非对象类型，通常推荐使用type，比如Direction、Alignment、一些Function；</li>
</ul>
<p>如果是定义对象类型，那么他们是有区别的：</p>
<ul>
<li>interface 可以<strong>重复</strong>的对某个接口来定义属性和方法；</li>
<li>而type定义的是别名，别名是<strong>不能重复</strong>的；</li>
</ul>
<p><img src="@source/.vuepress/public/images/ti1.png" alt="图片"> <img src="@source/.vuepress/public/images/ti2.png" alt="图片"></p>
<h2 id="枚举类型" tabindex="-1"><a class="header-anchor" href="#枚举类型" aria-hidden="true">#</a> 枚举类型</h2>
<ul>
<li>枚举其实就是将一组可能出现的值，一个个列举出来，定义在一个类型中，这个类型就是枚举类型；</li>
<li>枚举允许开发者定义一组命名常量，常量可以是数字、字符串类型</li>
</ul>
<p><img src="@source/.vuepress/public/images/enum2.png" alt="图片"></p>
<ul>
<li>当然，我们也可以给枚举其他值：</li>
<li>这个时候会从100进行递增；</li>
<li>也可以给他们赋值其他的类型</li>
</ul>
<p><img src="@source/.vuepress/public/images/enum3.png" alt="图片"></p>
</template>
