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
<h3 id="arguments-转成-数组" tabindex="-1"><a class="header-anchor" href="#arguments-转成-数组" aria-hidden="true">#</a> arguments 转成 数组</h3>
<p><img src="@source/.vuepress/public/images/asz.png" alt="图片"></p>
<h3 id="箭头函数的-arguments" tabindex="-1"><a class="header-anchor" href="#箭头函数的-arguments" aria-hidden="true">#</a> 箭头函数的 arguments</h3>
<p>箭头函数是<strong>不绑定</strong> arguments 的，所以我们在箭头函数中使用arguments会去<strong>上层作用域查找</strong>
<img src="@source/.vuepress/public/images/aaa1.png" alt="图片">
<img src="@source/.vuepress/public/images/aaa2.png" alt="图片">
<img src="@source/.vuepress/public/images/aaa3.png" alt="图片"></p>
<p><strong>那箭头函数怎么获取参数 ? 使用 ...args</strong>
<img src="@source/.vuepress/public/images/thisargs.png" alt="图片"></p>
<h2 id="纯函数-、-副作用" tabindex="-1"><a class="header-anchor" href="#纯函数-、-副作用" aria-hidden="true">#</a> 纯函数 、 副作用</h2>
<p>什么是<strong>纯函数</strong> ?</p>
<p>维基百科定义：</p>
<ul>
<li>在程序设计中，若一个函数符合以下条件，那么这个函数被称为纯函数：</li>
<li>此函数<strong>在相同的输入值</strong>时，需<strong>产生相同的输出</strong></li>
<li>函数的<strong>输出和输入值以外的其他隐藏信息或状态无关</strong>，也和<strong>由I/O设备产生的外部输出无关</strong></li>
<li>该函数<strong>不能有语义上可观察的函数副作用</strong>，诸如 <strong>“触发事件”，使输出设备输出，或更改输出值以外物件的内容</strong>等</li>
</ul>
<p>简单两句话总结<strong>纯函数</strong>:</p>
<ul>
<li><strong>确定的输入，一定会产生确定的输出</strong></li>
<li><strong>函数在执行过程中，不能产生副作用</strong></li>
</ul>
<p>什么是<strong>副作用</strong> ?</p>
<ul>
<li>副作用（side effect）其实本身是医学的一个概念，比如我们经常说吃什么药本来是为了治病，可能会产生一
些其他的副作用</li>
<li>在计算机科学中，也引用了副作用的概念，表示<strong>在执行一个函数</strong>时，除了<strong>返回函数值之外</strong>，还对 <strong>调用函数产生了附加的影响</strong> ，比如<strong>修改了全局变量，修改参数或者改变外部的存储</strong></li>
</ul>
<p><strong>纯函数在执行的过程中就是不能产生这样的副作用：</strong></p>
<ul>
<li>副作用往往是产生 bug 的 <strong>“温床”</strong></li>
</ul>
<h3 id="纯函数的案例" tabindex="-1"><a class="header-anchor" href="#纯函数的案例" aria-hidden="true">#</a> 纯函数的案例</h3>
<p>看一个对 数组 操作的两个函数：</p>
<ul>
<li>slice：slice截取数组时不会对原数组进行任何操作,而是生成一个新的数组</li>
<li>splice：splice截取数组, 会返回一个新的数组, 也会对原数组进行修改</li>
<li><strong>slice 就是一个纯函数，不会修改传入的参数</strong>
<img src="@source/.vuepress/public/images/slicesplice.png" alt="图片"></li>
</ul>
<h3 id="编写几个案例-看看是不是纯函数" tabindex="-1"><a class="header-anchor" href="#编写几个案例-看看是不是纯函数" aria-hidden="true">#</a> 编写几个案例, 看看是不是纯函数</h3>
<p><img src="@source/.vuepress/public/images/fu1.png" alt="图片">
<img src="@source/.vuepress/public/images/fu2.png" alt="图片">
<img src="@source/.vuepress/public/images/fu3.png" alt="图片"></p>
<h3 id="纯函数的优势" tabindex="-1"><a class="header-anchor" href="#纯函数的优势" aria-hidden="true">#</a> 纯函数的优势</h3>
<p>为什么纯函数在函数式编程中非常重要呢？</p>
<ul>
<li>因为可以<strong>安心的编写</strong>和<strong>安心的使用</strong></li>
<li>在写的时候保证了函数的<strong>纯度</strong>，只是单纯实现自己的<strong>业务逻辑即可</strong>，<strong>不需要关心传入的内容</strong>是如何获得的或
者<strong>依赖其他的外部变量</strong>是否已经发生了修改；</li>
<li>在用的时候，确定你的<strong>输入内容不会被任意篡改</strong>，并且<strong>自己确定的输入</strong>，<strong>一定会有确定的输出</strong></li>
</ul>
<p>React中就要求我们无论是函数还是 class 声明一个组件，<strong>这个组件都必须像纯函数一样</strong>，保护它们的 props 不被修改</p>
<p><img src="@source/.vuepress/public/images/react.png" alt="图片"></p>
<h2 id="javascript-柯里化" tabindex="-1"><a class="header-anchor" href="#javascript-柯里化" aria-hidden="true">#</a> JavaScript 柯里化</h2>
<p>柯里化也是属于<strong>函数式编程</strong>里面一个非常重要的概念</p>
<p>看一下<strong>维基百科</strong>的解释:</p>
<ul>
<li>在计算机科学中，柯里化（英语：Currying），又译为卡瑞化或加里化</li>
<li>是把接收多个参数的函数，变成接受一个单一参数（最初函数的第一个参数）的函数，并且返回接受余下的参
数，而且返回结果的新函数的技术；</li>
<li>柯里化声称 “如果你固定某些参数，你将得到接受余下参数的一个函数”；</li>
</ul>
<p>非常的抽象，这里做一个总结：</p>
<ul>
<li><strong>只传递给函数一部分参数来调用它，让它返回一个函数去处理剩余的参数；</strong></li>
<li><strong>这个过程就称之为柯里化</strong></li>
</ul>
<h3 id="柯里化的结构" tabindex="-1"><a class="header-anchor" href="#柯里化的结构" aria-hidden="true">#</a> 柯里化的结构</h3>
<p><img src="@source/.vuepress/public/images/kelihua1.png" alt="图片"></p>
<h3 id="让函数的职责单一" tabindex="-1"><a class="header-anchor" href="#让函数的职责单一" aria-hidden="true">#</a> 让函数的职责单一</h3>
<ul>
<li>在函数式编程中，其实往往<strong>希望一个函数处理的问题尽可能的单一</strong>，<strong>而不是将一大堆的处理过程交给一个函数来处理</strong></li>
<li>那么<strong>我们是否就可以将每次传入的参数在单一的函数中进行处理</strong>，处理完后在<strong>下一个函数中再使用处理后的结果</strong></li>
</ul>
<p>传入的函数需要分别被进行如下处理 :</p>
<p><img src="@source/.vuepress/public/images/keli1.png" alt="图片"></p>
<h3 id="柯里化的复用" tabindex="-1"><a class="header-anchor" href="#柯里化的复用" aria-hidden="true">#</a> 柯里化的复用</h3>
<p>另外一个使用柯里化的场景是可以帮助可以<strong>复用参数逻辑</strong></p>
<ul>
<li>makeAdder 函数要求我们传入一个 num</li>
<li>在之后使用返回的函数时，不需要再继续传入num了</li>
</ul>
<p><img src="@source/.vuepress/public/images/futong1.png" alt="图片"></p>
<h4 id="打印日志的柯里化函数" tabindex="-1"><a class="header-anchor" href="#打印日志的柯里化函数" aria-hidden="true">#</a> 打印日志的柯里化函数</h4>
<p>这里再写一个案例，需求是打印一些日志：</p>
<ul>
<li>日志包括时间、类型、信息</li>
</ul>
<p>普通函数的实现方案如下 :
<img src="@source/.vuepress/public/images/fuyong1.png" alt="图片"></p>
<p>利用柯里化 复用 :
<img src="@source/.vuepress/public/images/fuyong3.png" alt="图片"></p>
<h3 id="实现自动柯里化函" tabindex="-1"><a class="header-anchor" href="#实现自动柯里化函" aria-hidden="true">#</a> 实现自动柯里化函</h3>
<ul>
<li>实现一个能把普通的函数，转成柯里化函数的函数
<img src="@source/.vuepress/public/images/shixian1.png" alt="图片"></li>
</ul>
<h2 id="函数额外知识点" tabindex="-1"><a class="header-anchor" href="#函数额外知识点" aria-hidden="true">#</a> 函数额外知识点</h2>
<h3 id="with-语句" tabindex="-1"><a class="header-anchor" href="#with-语句" aria-hidden="true">#</a> with 语句</h3>
<p>with语句 : 扩展一个语句的作用域链
<img src="@source/.vuepress/public/images/with.png" alt="图片"></p>
<p><strong>不建议使用with语句</strong>, 因为它可能是混淆错误和兼容性问题的根源</p>
<p>在严格模式下压根都不支持 witch 语句</p>
<h3 id="eval-函数" tabindex="-1"><a class="header-anchor" href="#eval-函数" aria-hidden="true">#</a> eval 函数</h3>
<p>eval是一个特殊的函数，它可以将传入的字符串当做 JavaScript 代码来运行
<img src="@source/.vuepress/public/images/eval.png" alt="图片"></p>
<p><strong>不建议</strong>在开发中使用 eval：</p>
<ul>
<li>eval代码的可读性非常的差（代码的可读性是高质量代码的重要原则</li>
<li>eval是一个字符串，那么有可能在执行的过程中被刻意篡改，那么可能会造成被攻击的风险</li>
<li>eval的执行必须经过 JS 解释器，不能被J S 引擎优化</li>
</ul>
<h3 id="严格模式" tabindex="-1"><a class="header-anchor" href="#严格模式" aria-hidden="true">#</a> 严格模式</h3>
<p>在ECMAScript5标准中，JavaScript提出了<strong>严格模式的概念（Strict Mode）</strong></p>
<ul>
<li>严格模式很好理解，是<strong>一种具有限制性的JavaScript模式</strong>，从而使<strong>代码隐式的脱离了 ”懒散（sloppy）模式“</strong></li>
<li><strong>支持严格模式的浏览器</strong>在检测到代码中有严格模式时，会以更加严格的方式对代码进行检测和执行；</li>
</ul>
<p>严格模式对正常的JavaScript语义进行了一些限制：</p>
<ul>
<li>严格模式通过 <strong>抛出错误</strong> 来消除一些原有的 <strong>静默（silent）错误</strong></li>
<li>严格模式让<strong>JS引擎在执行代码时可以进行更多的优化</strong>（不需要对一些特殊的语法进行处理）；</li>
<li>严格模式禁用了在<strong>ECMAScript未来版本中可能会定义的一些语法</strong></li>
</ul>
<h3 id="开启严格模式" tabindex="-1"><a class="header-anchor" href="#开启严格模式" aria-hidden="true">#</a> 开启严格模式</h3>
<ul>
<li>可以支持在 js 文件中开启严格模式</li>
<li>也支持对某一个函数开启严格模式</li>
</ul>
<p>严格模式通过在文件或者函数开头使用 use strict 来开启
<img src="@source/.vuepress/public/images/use1.png" alt="图片">
<img src="@source/.vuepress/public/images/use2.png" alt="图片"></p>
<h3 id="严格模式限制" tabindex="-1"><a class="header-anchor" href="#严格模式限制" aria-hidden="true">#</a> 严格模式限制</h3>
<ul>
<li>
<ol>
<li>无法意外的创建全局变量</li>
</ol>
</li>
<li>
<ol start="2">
<li>严格模式会使引起静默失败(silently fail,注:不报错也没有任何效果)的赋值操作抛出异常</li>
</ol>
</li>
<li>
<ol start="3">
<li>严格模式下试图删除不可删除的属性</li>
</ol>
</li>
<li>
<ol start="4">
<li>严格模式不允许函数参数有相同的参数名</li>
</ol>
</li>
<li>
<ol start="5">
<li>不允许0的八进制语法</li>
</ol>
</li>
<li>
<ol start="6">
<li>在严格模式下，不允许使用 with</li>
</ol>
</li>
<li>
<ol start="7">
<li>在严格模式下，eval 不再为上层引用变量</li>
</ol>
</li>
<li>
<ol start="8">
<li>严格模式下，this 绑定不会默认转成window , 会是undefined 但setTimeout()的this依然是window (fn.apply(this= window))</li>
</ol>
</li>
</ul>
</template>
