<template><h1 id="es6-一" tabindex="-1"><a class="header-anchor" href="#es6-一" aria-hidden="true">#</a> ES6 (一)</h1>
<h2 id="对象字面量的增强" tabindex="-1"><a class="header-anchor" href="#对象字面量的增强" aria-hidden="true">#</a> 对象字面量的增强</h2>
<p>ES6 中对 <strong>对象字面量</strong> 进行了增强，称之为 Enhanced object literals（增强对象字面量）</p>
<p>字面量的增强主要包括下面几部分：</p>
<ul>
<li>属性的简写：Property Shorthand</li>
<li>方法的简写：Method Shorthand</li>
<li>计算属性名：Computed Property Names</li>
</ul>
<p><img src="@source/.vuepress/public/images/zengqiang1.png" alt="图片"></p>
<h2 id="解构" tabindex="-1"><a class="header-anchor" href="#解构" aria-hidden="true">#</a> 解构</h2>
<p>ES6 中新增了一个从数组或对象中方便获取数据的方法，称之为<strong>解构</strong> Destructuring</p>
<ul>
<li>可以划分为：<strong>数组</strong>的解构和<strong>对象</strong>的解构。</li>
</ul>
<h3 id="数组的解构" tabindex="-1"><a class="header-anchor" href="#数组的解构" aria-hidden="true">#</a> 数组的解构</h3>
<p><img src="@source/.vuepress/public/images/shuzujiegou.png" alt="图片"></p>
<h3 id="对象的解构" tabindex="-1"><a class="header-anchor" href="#对象的解构" aria-hidden="true">#</a> 对象的解构</h3>
<p><img src="@source/.vuepress/public/images/duixiangjiegou.png" alt="图片"></p>
<h3 id="解构的应用场景" tabindex="-1"><a class="header-anchor" href="#解构的应用场景" aria-hidden="true">#</a> 解构的应用场景</h3>
<ul>
<li>比如在开发中拿到一个变量时，自动对其进行解构使用；</li>
<li>比如对函数的参数进行解构</li>
</ul>
<p><img src="@source/.vuepress/public/images/jiegou55.png" alt="图片"></p>
<h2 id="块级作用域" tabindex="-1"><a class="header-anchor" href="#块级作用域" aria-hidden="true">#</a> 块级作用域</h2>
<h3 id="var的块级作用域" tabindex="-1"><a class="header-anchor" href="#var的块级作用域" aria-hidden="true">#</a> var的块级作用域</h3>
<p>ES5之前 JavaScript 只会形成两个作用域：全局作用域 和 函数作用域
<img src="@source/.vuepress/public/images/var.png" alt="图片"></p>
<p>var 没有块级作用域</p>
<p><img src="@source/.vuepress/public/images/var2.png" alt="图片"></p>
<h3 id="let-const-的块级作用域" tabindex="-1"><a class="header-anchor" href="#let-const-的块级作用域" aria-hidden="true">#</a> let/const 的块级作用域</h3>
<p>在ES6中新增了块级作用域，并且通过let、const、function、class声明的标识符是具备块级作用域的限制的：
<img src="@source/.vuepress/public/images/kuaiji1.png" alt="图片"></p>
<h3 id="if-switch-for-块级作用域" tabindex="-1"><a class="header-anchor" href="#if-switch-for-块级作用域" aria-hidden="true">#</a> if-switch-for 块级作用域</h3>
<p><img src="@source/.vuepress/public/images/if1.png" alt="图片">
<img src="@source/.vuepress/public/images/swtich1.png" alt="图片">
<img src="@source/.vuepress/public/images/for1.png" alt="图片"></p>
<h3 id="块级作用域应用" tabindex="-1"><a class="header-anchor" href="#块级作用域应用" aria-hidden="true">#</a> 块级作用域应用</h3>
<p><img src="@source/.vuepress/public/images/button4.png" alt="图片">
<img src="@source/.vuepress/public/images/kz1.png" alt="图片"></p>
<p>点击要执行回调时 , 函数里没有 i , 就去上层作用域上找 , 那么它的上层作用域是全局作用域 , 但这时全局作用域里的 i 已经变成了 4</p>
<p>在以前的时候解决这个问题 , 用立即执行函数形成函数作用域
<img src="@source/.vuepress/public/images/kz2.png" alt="图片"></p>
<p>但ES6以后, 现在的话 , 可以直接
<img src="@source/.vuepress/public/images/kz3.png" alt="图片"></p>
<p>因为这个回调找上层作用域时就<strong>找到了块级作用域</strong> , let 是有块级作用域 , 每次绑定函数的时候绑定的 i 分别是0 ,1, 2, 3, 不会去找全局</p>
<h3 id="块级作用域补充" tabindex="-1"><a class="header-anchor" href="#块级作用域补充" aria-hidden="true">#</a> 块级作用域补充</h3>
<h4 id="for-循环里" tabindex="-1"><a class="header-anchor" href="#for-循环里" aria-hidden="true">#</a> for 循环里</h4>
<p><img src="@source/.vuepress/public/images/let1.png" alt="图片">
那么能不能使用 const ?</p>
<p><img src="@source/.vuepress/public/images/let2.png" alt="图片"></p>
<p>答案 : 不能</p>
<h4 id="for-of-里" tabindex="-1"><a class="header-anchor" href="#for-of-里" aria-hidden="true">#</a> for..of 里</h4>
<p><img src="@source/.vuepress/public/images/of1.png" alt="图片"></p>
<p>使用了 let</p>
<p><img src="@source/.vuepress/public/images/of2.png" alt="图片"></p>
<p>使用 const 可以吗 ?</p>
<p><img src="@source/.vuepress/public/images/of3.png" alt="图片"></p>
<p>答案 : 这个时候可以</p>
<h3 id="暂时性死区" tabindex="-1"><a class="header-anchor" href="#暂时性死区" aria-hidden="true">#</a> 暂时性死区</h3>
<p>在 ES6 中，还有一个概念称之为暂时性死区</p>
<ul>
<li>它表达的意思是在一个代码中，使用let、const声明的变量，在声明之前，变量都是不可以访问的</li>
<li>我们将这种现象称之为 temporal dead zone（暂时性死区，TDZ）</li>
</ul>
<p><img src="@source/.vuepress/public/images/siqu1.png" alt="图片">
<img src="@source/.vuepress/public/images/siqu2.png" alt="图片"></p>
<h3 id="var、let、const的选择" tabindex="-1"><a class="header-anchor" href="#var、let、const的选择" aria-hidden="true">#</a> var、let、const的选择</h3>
<p>对于var的使用：</p>
<ul>
<li>需要明白一个事实，var所表现出来的特殊性：比如作用域提升、window全局对象、没有块级作用域等都是一些历史遗留问题</li>
<li>其实是JavaScript在设计之初的一种语言缺陷</li>
<li>但是在实际工作中，我们可以使用最新的规范来编写，也就是不再使用var来定义变量了</li>
</ul>
<p>对于let、const</p>
<ul>
<li>对于let和const来说，是目前开发中推荐使用的</li>
<li>我们会优先推荐使用const，这样可以保证数据的安全性不会被随意的篡改</li>
<li>只有当我们明确知道一个变量后续会需要被重新赋值时，这个时候再使用let</li>
<li>这种在很多其他语言里面也都是一种约定俗成的规范，尽量我们也遵守这种规范</li>
</ul>
<h2 id="字符串模板" tabindex="-1"><a class="header-anchor" href="#字符串模板" aria-hidden="true">#</a> 字符串模板</h2>
<h3 id="字符串模板基本使用" tabindex="-1"><a class="header-anchor" href="#字符串模板基本使用" aria-hidden="true">#</a> 字符串模板基本使用</h3>
<p>ES6 允许我们使用字符串模板来嵌入JS的变量或者表达式来进行拼接：</p>
<ul>
<li>首先，会使用 `` 符号来编写字符串，称之为模板字符串；</li>
<li>其次，在模板字符串中，我们可以通过 <strong>${expression}</strong> 来嵌入动态的内容；</li>
</ul>
<p><img src="@source/.vuepress/public/images/muban1.png" alt="图片"></p>
<h3 id="标签模板字符串使用" tabindex="-1"><a class="header-anchor" href="#标签模板字符串使用" aria-hidden="true">#</a> 标签模板字符串使用</h3>
<p>模板字符串还有另外一种用法：标签模板字符串（Tagged Template Literals）</p>
<p>如果我们使用标签模板字符串，并且在调用的时候插入其他的变量：</p>
<ul>
<li>模板字符串被拆分了</li>
<li>第一个元素是数组，是被模块字符串拆分的字符串组合</li>
<li>后面的元素是一个个模块字符串传入的内容</li>
</ul>
<p><img src="@source/.vuepress/public/images/biaoqian1.png" alt="图片"></p>
<p>React 的 styled-components 库 用到了这个标签模板字符串</p>
<h2 id="函数的补充" tabindex="-1"><a class="header-anchor" href="#函数的补充" aria-hidden="true">#</a> 函数的补充</h2>
<h3 id="函数的默认参数" tabindex="-1"><a class="header-anchor" href="#函数的默认参数" aria-hidden="true">#</a> 函数的默认参数</h3>
<p>在ES6中，我们允许给函数一个默认值
<img src="@source/.vuepress/public/images/morencanshu.png" alt="图片"></p>
<p>源代码 :
<img src="@source/.vuepress/public/images/my1.png" alt="图片"></p>
<ul>
<li>对象默认参数 以及 解构
<img src="@source/.vuepress/public/images/dm1.png" alt="图片"></li>
</ul>
<p>另外参数的默认值通常会将其放到最后（在很多语言中，如果不放到最后其实会报错的）</p>
<p>但是JavaScript允许不将其放到最后，但是意味着还是会按照顺序来匹配；</p>
<ul>
<li>另外默认值会改变函数的length的个数，默认值以及后面的参数都不计算在length之内</li>
</ul>
<h3 id="函数的剩余参数" tabindex="-1"><a class="header-anchor" href="#函数的剩余参数" aria-hidden="true">#</a> 函数的剩余参数</h3>
<p>ES6中引用了 rest parameter ，可以将不定数量的参数放入到一个数组中：</p>
<ul>
<li>如果最后一个参数是 ... 为前缀的，那么它会将剩余的参数放到该参数中，并且作为一个数组</li>
</ul>
<p><img src="@source/.vuepress/public/images/shengyu1.png" alt="图片"></p>
<p>那么剩余参数和 arguments 有什么区别呢？</p>
<ul>
<li>剩余参数只包含那些<strong>没有对应形参的实参</strong>，而 <strong>arguments 对象包含了传给函数的所有实参</strong></li>
<li><strong>arguments对象不是一个真正的数组</strong>，而<strong>rest参数是一个真正的数组</strong>，可以进行数组的所有操作</li>
<li>arguments 是<strong>早期的ECMAScript</strong>中为了方便去获取所有的参数提供的一个数据结构，而 rest参数是ES6中提供并且希望以此来替代 arguments 的；</li>
</ul>
<p>剩余参数<strong>必须放到最后一个位置</strong>，否则会报错</p>
<h3 id="函数的箭头函数补充" tabindex="-1"><a class="header-anchor" href="#函数的箭头函数补充" aria-hidden="true">#</a> 函数的箭头函数补充</h3>
<ul>
<li>箭头函数是没有显式原型 prototype 的，所以不能作为构造函数，使用 new 来创建对象</li>
</ul>
<p><img src="@source/.vuepress/public/images/jp1.png" alt="图片"></p>
<h2 id="展开语法" tabindex="-1"><a class="header-anchor" href="#展开语法" aria-hidden="true">#</a> 展开语法</h2>
<p>展开语法(Spread syntax)：</p>
<ul>
<li>可以在函数调用/数组构造时，将数组表达式或者string在语法层面展开；</li>
<li>还可以在构造字面量对象时, 将对象表达式按key-value的方式展开；</li>
</ul>
<p>展开语法的场景：</p>
<ul>
<li>在函数调用时使用；</li>
<li>在数组构造时使用；</li>
<li>在构建对象字面量时，也可以使用展开运算符，这个是在ES2018（ES9）中添加的新特性；</li>
</ul>
<p>注意：展开运算符其实是一种<strong>浅拷贝</strong>
<img src="@source/.vuepress/public/images/zhankai1.png" alt="图片"></p>
</template>
