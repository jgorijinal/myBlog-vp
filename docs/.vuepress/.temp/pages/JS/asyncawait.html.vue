<template><h1 id="async-await" tabindex="-1"><a class="header-anchor" href="#async-await" aria-hidden="true">#</a> async - await</h1>
<h2 id="异步函数-async-function" tabindex="-1"><a class="header-anchor" href="#异步函数-async-function" aria-hidden="true">#</a> 异步函数 async function</h2>
<p>async 关键字用于声明一个异步函数</p>
<ul>
<li>async 是 asynchronous 单词的缩写，异步、非同步；</li>
<li>sync 是 synchronous 单词的缩写，同步、同时</li>
</ul>
<p>async 异步函数可以有很多中写法 :</p>
<p><img src="@source/.vuepress/public/images/async01.png" alt="图片"></p>
<h2 id="异步函数的执行流程" tabindex="-1"><a class="header-anchor" href="#异步函数的执行流程" aria-hidden="true">#</a> 异步函数的执行流程</h2>
<p><em>异步函数的内部代码执行过程和普通函数是一致的 , 默认情况下也是会被<strong>同步执行</strong></em>
<img src="@source/.vuepress/public/images/async02.png" alt="图片"></p>
<h2 id="异步函数与普通函数区别-返回值" tabindex="-1"><a class="header-anchor" href="#异步函数与普通函数区别-返回值" aria-hidden="true">#</a> 异步函数与普通函数区别 - 返回值</h2>
<p><em>异步函数的返回值一定是 Promise</em></p>
<p><strong>异步函数有返回值时，和普通函数会有区别：</strong></p>
<ul>
<li><strong>情况一：</strong> 异步函数也可以有返回值，但是异步函数的返回值会被包裹到 Promise.resolve 中；</li>
<li><strong>情况二：</strong> 如果我们的异步函数的返回值是 Promise，Promise.resolve 的状态会由 Promise 决定；</li>
<li><strong>情况三：</strong> 如果我们的异步函数的返回值是一个对象并且实现了 thenable，那么会由对象的 then 方法来决定；</li>
</ul>
<p><img src="@source/.vuepress/public/images/afan1.png" alt="图片">
<img src="@source/.vuepress/public/images/afan2.png" alt="图片">
<img src="@source/.vuepress/public/images/afan3.png" alt="图片"></p>
<h2 id="异步函数与普通函数区别-异常" tabindex="-1"><a class="header-anchor" href="#异步函数与普通函数区别-异常" aria-hidden="true">#</a> 异步函数与普通函数区别 - 异常</h2>
<ul>
<li>如果在 async 中抛出了异常，那么程序它并不会像普通函数一样报错，而是会作为 Promise 的 reject 来传递
<img src="@source/.vuepress/public/images/ayi1.png" alt="图片"></li>
</ul>
<h2 id="await-关键字" tabindex="-1"><a class="header-anchor" href="#await-关键字" aria-hidden="true">#</a> await 关键字</h2>
<p><em>async 函数另外一个特殊之处就是可以在它内部使用 await 关键字，而普通函数中是不可以的</em></p>
<p><strong>await 关键字有什么特点 ?</strong></p>
<ul>
<li><em>通常使用 await 是后面会跟上一个表达式，这个表达式会返回一个 Promise</em></li>
<li><em>那么 await 会等到Promise的状态变成 fulfilled 状态，之后继续执行异步函数</em></li>
</ul>
<p><img src="@source/.vuepress/public/images/await001.png" alt="图片"></p>
<p>await 后面跟上其他的值 :</p>
<ul>
<li>如果 await 后面是一个普通的值，那么会直接返回这个值；</li>
<li>如果 await 后面是一个 thenable 的对象，那么会根据对象的 then 方法调用来决定后续的值；</li>
<li>如果 await 后面的表达式，<em>返回的 Promise 是 <strong>reject 的状态</strong>，那么会<strong>将这个 reject 结果直接作为异步函数的 Promise 的 reject 值</strong></em></li>
</ul>
<p><img src="@source/.vuepress/public/images/qita55.png" alt="图片">
<img src="@source/.vuepress/public/images/reject123.png" alt="图片"></p>
</template>
