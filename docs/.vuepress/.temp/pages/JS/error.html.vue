<template><h1 id="错误处理" tabindex="-1"><a class="header-anchor" href="#错误处理" aria-hidden="true">#</a> 错误处理</h1>
<p>开发中我们会封装一些工具函数，封装之后给别人使用：</p>
<ul>
<li>在其他人使用的过程中，可能会传递一些参数；</li>
<li>对于函数来说，<strong>需要对这些参数进行验证</strong>，否则可能得到的是我们不想要的结果；</li>
</ul>
<p>很多时候我们可能验证到不是希望得到的参数时，就会直接return：</p>
<ul>
<li>但是return存在很大的弊端：调用者不知道是因为函数内部没有正常执行，还是执行结果就是一个undefined；</li>
<li>事实上，正确的做法应该是如果没有通过某些验证，那么应该<strong>让外界知道函数内部报错</strong>了；</li>
</ul>
<p><strong>如何可以让一个函数告知外界自己内部出现了错误呢？</strong></p>
<ul>
<li>通过throw关键字，抛出一个异常；</li>
</ul>
<p><strong>throw语句：</strong></p>
<ul>
<li>throw语句用于抛出一个用户自定义的异常；</li>
<li>当遇到throw语句时，当前的函数执行会被停止（throw后面的语句不会执行）；</li>
</ul>
<p>如果我们执行代码，就会报错，拿到错误信息的时候我们可以及时的去修正代码</p>
<p><img src="@source/.vuepress/public/images/cuowu1.png" alt="图片"></p>
<h2 id="throw-关键字" tabindex="-1"><a class="header-anchor" href="#throw-关键字" aria-hidden="true">#</a> throw 关键字</h2>
<p>throw 表达式就是在 throw 后面可以跟上一个表达式来表示具体的异常信息：</p>
<p>throw关键字可以跟上哪些类型呢？</p>
<ul>
<li>基本数据类型：比如number、string、Boolean</li>
<li>对象类型：对象类型可以包含更多的信息</li>
</ul>
<p>但是每次写这么长的对象又有点麻烦，所以自己可以创建一个类 , 比如</p>
<p><img src="@source/.vuepress/public/images/cuowu11.png" alt="图片"></p>
<h2 id="error-类型" tabindex="-1"><a class="header-anchor" href="#error-类型" aria-hidden="true">#</a> Error 类型</h2>
<p>事实上，JavaScript 已经给我们提供了一个 Error 类，我们可以直接创建这个类的对象：(上面的图)</p>
<p>Error包含三个属性：</p>
<ul>
<li>messsage：创建 Error 对象时传入的 message；</li>
<li>name：Error 的名称，通常和类的名称一致；</li>
<li>stack：整个 Error 的错误信息，包括函数的调用栈，当我们直接打印 Error 对象时，打印的就是stack；</li>
</ul>
<p>Error 有一些自己的子类：</p>
<ul>
<li>RangeError：下标值越界时使用的错误类型；</li>
<li>SyntaxError：解析语法错误时使用的错误类型；</li>
<li>TypeError：出现类型错误时，使用的错误类型；</li>
</ul>
<p><strong>强调</strong> :<em><strong>如果函数内抛出了异常 , 那么函数内代码不会继续执行</strong></em></p>
<h2 id="异常的处理" tabindex="-1"><a class="header-anchor" href="#异常的处理" aria-hidden="true">#</a> 异常的处理</h2>
<p>会发现在之前的代码中，一个函数抛出了异常，调用它的时候程序会被强制终止：</p>
<ul>
<li>这是因为如果我们在调用一个函数时，这个函数抛出了异常，但是我们并没有对这个异常进行处理，那么这个异常会继续传
递到上一个函数调用中；</li>
<li>而如果到了最顶层（全局）的代码中依然没有对这个异常的处理代码，这个时候就会报错并且终止程序的运行；</li>
</ul>
<p>先来看一下这段代码的异常传递过程：</p>
<ul>
<li>foo 函数在被执行时会抛出异常，也就是我们的bar函数会拿到这个异常；</li>
<li>但是 bar 函数并没有对这个异常进行处理，那么这个异常就会被继续传递到调用 bar 函数的函数，也就是 test 函数；</li>
<li>但是 test 函数依然没有处理，就会继续传递到我们的全局代码逻辑中；</li>
<li>依然没有被处理，这个时候程序会终止执行，后续代码都不会再执行了</li>
</ul>
<p><img src="@source/.vuepress/public/images/yes1.png" alt="图片"></p>
<h2 id="异常的捕获" tabindex="-1"><a class="header-anchor" href="#异常的捕获" aria-hidden="true">#</a> 异常的捕获</h2>
<p>但是很多情况下当出现异常时，我们并不希望程序直接推出，而是希望可以正确的处理异常：</p>
<p>这个时候就可以使用 try catch</p>
<ul>
<li>在ES10（ES2019）中，catch 后面绑定的 error 可以省略。</li>
<li>当然，如果有一些必须要执行的代码，我们可以使用 finally 来执行：</li>
</ul>
<p>finally 表示最终一定会被执行的代码结构；</p>
<ul>
<li>注意：如果 try 和 finally 中都有返回值，那么会使用finally当中的返回值；</li>
</ul>
<p><img src="@source/.vuepress/public/images/tc11.png" alt="图片"></p>
</template>
