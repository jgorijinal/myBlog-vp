<template><h1 id="面向对象-类" tabindex="-1"><a class="header-anchor" href="#面向对象-类" aria-hidden="true">#</a> 面向对象 - 类</h1>
<p>按照前面的构造函数形式创建 类，不仅仅和编写普通的函数过于相似，而且代码并不容易理解。</p>
<ul>
<li>在 ES6（ECMAScript2015）新的标准中使用了 class 关键字来直接定义类</li>
<li>但是类本质上依然是前面所讲的构造函数、原型链的<strong>语法糖</strong>而已</li>
<li>所以学好了前面的构造函数、原型链更有利于我们理解类的概念和继承关系</li>
</ul>
<p>如何使用 class 来定义一个类呢？</p>
<ul>
<li>可以使用两种方式来声明类：类声明和类表达式</li>
</ul>
<p><img src="@source/.vuepress/public/images/class00.png" alt="图片"></p>
<h2 id="类和构造函数的异同" tabindex="-1"><a class="header-anchor" href="#类和构造函数的异同" aria-hidden="true">#</a> 类和构造函数的异同</h2>
<p>类和我们的构造函数的特性其实是一致的
<img src="@source/.vuepress/public/images/class01.png" alt="图片"></p>
<h2 id="类的构造函数" tabindex="-1"><a class="header-anchor" href="#类的构造函数" aria-hidden="true">#</a> 类的构造函数</h2>
<ul>
<li>每个类都可以有一个自己的构造函数（方法），这个方法的名称是固定的constructor；</li>
<li>当我们通过new操作符，操作一个类的时候会调用这个类的构造函数constructor；</li>
<li>每个类只能有一个构造函数，如果包含多个构造函数，那么会抛出异常；</li>
</ul>
<p>当我们通过new关键字操作类的时候，会调用这个 constructor 函数，并且执行如下操作：</p>
<ul>
<li>1.在内存中创建一个新的对象（空对象）；</li>
<li>2.这个对象内部的 [[prototype]] 属性会被赋值为该类的 prototype 属性；</li>
<li>3.构造函数内部的 this，会指向创建出来的新对象；</li>
<li>4.执行构造函数的内部代码（函数体代码）；</li>
<li>5.如果构造函数没有返回非空对象，则返回创建出来的新对象；</li>
</ul>
<p><img src="@source/.vuepress/public/images/class03.png" alt="图片"></p>
<h2 id="类的实例方法" tabindex="-1"><a class="header-anchor" href="#类的实例方法" aria-hidden="true">#</a> 类的实例方法</h2>
<p><img src="@source/.vuepress/public/images/lei1.png" alt="图片"></p>
<h2 id="累的访问器方法" tabindex="-1"><a class="header-anchor" href="#累的访问器方法" aria-hidden="true">#</a> 累的访问器方法</h2>
<p><img src="@source/.vuepress/public/images/lei2.png" alt="图片"></p>
<h2 id="类的静态方法" tabindex="-1"><a class="header-anchor" href="#类的静态方法" aria-hidden="true">#</a> 类的静态方法</h2>
<p>静态方法通常用于定义<strong>直接使用类来执行的方法</strong>，<strong>不需要</strong>有类的实例，使用 <strong>static 关键字</strong>来定义
<img src="@source/.vuepress/public/images/lei3.png" alt="图片"></p>
<h2 id="es6类的继承" tabindex="-1"><a class="header-anchor" href="#es6类的继承" aria-hidden="true">#</a> ES6类的继承</h2>
<h3 id="extends" tabindex="-1"><a class="header-anchor" href="#extends" aria-hidden="true">#</a> extends</h3>
<p>在ES6中新增了使用 <strong>extends 关键字</strong>，可以方便的帮助我们实现继承
<img src="@source/.vuepress/public/images/extends55.png" alt="图片"></p>
<h3 id="super-关键字" tabindex="-1"><a class="header-anchor" href="#super-关键字" aria-hidden="true">#</a> super 关键字</h3>
<p>这个 super 关键字有不同的使用方式：</p>
<ul>
<li>注意：在子（派生）类的构造函数中使用 this 或者返回默认对象之前，必须<strong>先通过super调用父类的构造函数</strong></li>
<li>super 的使用位置有三个：子类的构造函数、实例方法、静态方法
<img src="@source/.vuepress/public/images/super1.png" alt="图片">
<img src="@source/.vuepress/public/images/super2.png" alt="图片">
<img src="@source/.vuepress/public/images/super3.png" alt="图片"></li>
</ul>
<h2 id="继承内置类" tabindex="-1"><a class="header-anchor" href="#继承内置类" aria-hidden="true">#</a> 继承内置类</h2>
<p>可以让我们的类继承自内置类，比如 Array
<img src="@source/.vuepress/public/images/neizhilei.png" alt="图片"></p>
<h2 id="类的混入mixin" tabindex="-1"><a class="header-anchor" href="#类的混入mixin" aria-hidden="true">#</a> 类的混入mixin</h2>
<p>javaScript的类只支持单继承：也就是只能有一个父类</p>
<ul>
<li>那么在开发中需要在一个类中添加更多相似的功能时，应该如何来做呢？</li>
<li>这个时候我们可以使用混入（mixin）</li>
</ul>
<p><img src="@source/.vuepress/public/images/min1.png" alt="图片">
<img src="@source/.vuepress/public/images/min2.png" alt="图片"></p>
</template>
