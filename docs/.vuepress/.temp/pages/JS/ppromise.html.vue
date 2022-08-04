<template><h1 id="promise" tabindex="-1"><a class="header-anchor" href="#promise" aria-hidden="true">#</a> Promise</h1>
<p>看一下Promise的API是怎么样的：</p>
<p>Promise 是一个类，可以翻译成 承诺、许诺</p>
<ul>
<li>当我们需要给予调用者一个承诺：待会儿我会给你回调数据时，就可以创建一个 Promise 的对象；</li>
<li>在通过 new 创建 Promise 对象时，我们需要传入一个回调函数，我们称之为 executor
<ul>
<li>这个回调函数会被立即执行，并且给传入另外两个回调函数resolve、reject</li>
<li>当我们调用 resolve 回调函数时，会执行 Promise 对象的 then 方法传入的回调函数</li>
<li>当我们调用 reject 回调函数时，会执行 Promise 对象的 catch 方法传入的回调函数</li>
</ul>
</li>
</ul>
<h2 id="promise-的代码结构" tabindex="-1"><a class="header-anchor" href="#promise-的代码结构" aria-hidden="true">#</a> Promise 的代码结构</h2>
<p>Promise使用过程，可以将它划分成<strong>三个状态</strong>：</p>
<ul>
<li><strong>待定（pending）</strong>: 初始状态，既没有被兑现，也没有被拒绝；
<ul>
<li>当执行 executor 中的代码时，处于该状态；</li>
</ul>
</li>
<li><strong>已兑现（fulfilled）</strong>: 意味着操作成功完成；
<ul>
<li>执行了 resolve 时，处于该状态；</li>
</ul>
</li>
<li><strong>已拒绝（rejected）</strong>: 意味着操作失败；
<ul>
<li>执行了 reject 时，处于该状态</li>
</ul>
</li>
</ul>
<p><img src="@source/.vuepress/public/images/pms1.png" alt="图片"></p>
<h2 id="executor" tabindex="-1"><a class="header-anchor" href="#executor" aria-hidden="true">#</a> Executor</h2>
<p>Executor 是在创建 Promise 时需要传入的一个<strong>回调函数</strong>，这个回调函数<strong>会被立即执行</strong>，并且传入两个参数：</p>
<p><img src="@source/.vuepress/public/images/exc1.png" alt="图片"></p>
<ul>
<li>通常会在 Executor 中确定我们的 Promise 状态：
<ul>
<li>通过 resolve，可以兑现（fulfilled）Promise的状态，我们也可以称之为已决议（resolved）；</li>
<li>通过reject，可以拒绝（reject）Promise的状态；</li>
</ul>
</li>
<li>这里需要注意：一旦状态被确定下来，Promise 的状态会被 <strong>锁死</strong>，该 <strong>Promise 的状态是不可更改的</strong>
<ul>
<li>在我们调用 resolve 的时候，如果 resolve传入的值本身不是一个Promise，那么会将该Promise的状态变成 兑
现（fulfilled）；</li>
<li>在之后我们去调用 reject 时 ，已经不会有任何的响应了（并不是这行代码不会执行，<strong>而是无法改变Promise状态</strong>）</li>
</ul>
</li>
</ul>
<h2 id="resolve-不同值的区别" tabindex="-1"><a class="header-anchor" href="#resolve-不同值的区别" aria-hidden="true">#</a> resolve 不同值的区别</h2>
<ul>
<li>情况一：如果 resolve <strong>传入一个普通的值或者对象</strong>，那么这个值会作为then回调的参数；</li>
<li>情况二：如果 resolve 中<strong>传入的是另外一个  Promise</strong>，那么这个新Promise会决定原Promise的状态：</li>
<li>情况三：如果 resolve 中<strong>传入的是一个对象，并且这个对象有实现 then 方法</strong>，那么会执行该then方法，并且根据
then方法的结果来决定 Promise 的状态：</li>
</ul>
<p><img src="@source/.vuepress/public/images/resolve01.png" alt="图片">
<img src="@source/.vuepress/public/images/resolve02.png" alt="图片">
<img src="@source/.vuepress/public/images/resolve03.png" alt="图片"></p>
<h2 id="then方法-–-接受两个参数" tabindex="-1"><a class="header-anchor" href="#then方法-–-接受两个参数" aria-hidden="true">#</a> then方法 – 接受两个参数</h2>
<p>then 方法是 <strong>Promise对象</strong>上的一个方法：它其实是放在 Promise 的原型上的 <strong>Promise.prototype.then</strong></p>
<p>then 方法接受两个参数：</p>
<ul>
<li>fulfilled 的回调函数：当状态变成 fulfilled 时会回调的函数；</li>
<li>reject 的回调函数：当状态变成 reject 时会回调的函数</li>
</ul>
<p><img src="@source/.vuepress/public/images/pd1.png" alt="图片">
<img src="@source/.vuepress/public/images/then02.png" alt="图片"></p>
<h2 id="then-方法-多次调用" tabindex="-1"><a class="header-anchor" href="#then-方法-多次调用" aria-hidden="true">#</a> then 方法 - 多次调用</h2>
<p>一个 Promise 的 then 方法是可以<strong>被多次调用</strong>的</p>
<ul>
<li>每次调用我们都可以传入对应的 fulfilled 回调；</li>
<li>当 Promise 的状态变成 fulfilled 的时候，这些回调函数都会被执行</li>
</ul>
<p><img src="@source/.vuepress/public/images/thenduo.png" alt="图片"></p>
<h2 id="then方法-返回值-链式调用" tabindex="-1"><a class="header-anchor" href="#then方法-返回值-链式调用" aria-hidden="true">#</a> then方法 - 返回值 , 链式调用</h2>
<p>then 方法本身是有返回值的，它的<strong>返回值是一个新的Promise</strong>，所以可以进行如下的<strong>链式调用</strong>：</p>
<ul>
<li>但是 then 方法返回的 Promise 到底处于什么样的状态？</li>
</ul>
<p>Promise 有三种状态，那么这个 Promise 处于什么状态呢？</p>
<ul>
<li>当 then 方法中的回调函数本身在执行的时候，那么它处于 pending 状态；</li>
<li>当 then 方法中的回调函数返回一个结果时，那么它处于 fulfilled 状态，并且会将结果作为 resolve 的参数；
<ul>
<li>情况一：<strong>返回一个普通的值</strong></li>
<li>情况二：<strong>返回一个 Promise</strong></li>
<li>情况三：<strong>返回一个 thenable 值</strong></li>
</ul>
</li>
</ul>
<p>当 then 方法抛出一个异常时，那么它处于reject状态；</p>
<p><img src="@source/.vuepress/public/images/fanhuizhi1.png" alt="图片"></p>
<h2 id="catch-方法-基本使用" tabindex="-1"><a class="header-anchor" href="#catch-方法-基本使用" aria-hidden="true">#</a> catch 方法 - 基本使用</h2>
<p><img src="@source/.vuepress/public/images/catch1.png" alt="图片">
<img src="@source/.vuepress/public/images/catch2.png" alt="图片">
<img src="@source/.vuepress/public/images/catch3.png" alt="图片">
<img src="@source/.vuepress/public/images/catch4.png" alt="图片"></p>
<h2 id="catch方法-–-多次调用" tabindex="-1"><a class="header-anchor" href="#catch方法-–-多次调用" aria-hidden="true">#</a> catch方法 – 多次调用</h2>
<p>catch 方法也是 Promise 对象上的一个方法：它也是放在 Promise 的原型上的 Promise.prototype.catch</p>
<p>一个 Promise 的 catch 方法是可以被多次调用的：</p>
<ul>
<li>每次调用我们都可以传入对应的 reject 回调；</li>
<li>当Promise 的状态变成 reject 的时候，这些回调函数都会被执行；</li>
</ul>
<p><img src="@source/.vuepress/public/images/catch5.png" alt="图片"></p>
<h2 id="catch方法-返回值" tabindex="-1"><a class="header-anchor" href="#catch方法-返回值" aria-hidden="true">#</a> catch方法 - 返回值</h2>
<p>事实上 catch 方法也是会返回一个 Promise对象的，所以 catch 方法后面可以继续调用 then 方法或者 catch 方法：</p>
<ul>
<li>catch 传入的回调在执行完后，<strong>默认状态依然会是fulfilled</strong>的；</li>
</ul>
<p><img src="@source/.vuepress/public/images/catch6.png" alt="图片"></p>
<h2 id="finally-方法" tabindex="-1"><a class="header-anchor" href="#finally-方法" aria-hidden="true">#</a> finally 方法</h2>
<p>finally 是在ES9（ES2018）中新增的一个特性：表示无论Promise对象无论变成fulfilled还是reject状态，<strong>最终都会被执行的代码</strong></p>
<p>finally 方法是不接收参数的，因为无论前面是 fulfilled 状态，还是reject状态，它都会执行
<img src="@source/.vuepress/public/images/fy1.png" alt="图片"></p>
<h2 id="resolve-方法" tabindex="-1"><a class="header-anchor" href="#resolve-方法" aria-hidden="true">#</a> resolve 方法</h2>
<p>前面总结的 then、catch、finally 方法都属于 Promise 的<strong>实例方法</strong>，都是存放在Promise的prototype上的。</p>
<ul>
<li>现在总结一下 Promise 的<strong>类方法</strong></li>
</ul>
<p>有时候我们已经有一个现成的内容了，希望将其转成 Promise 来使用，这个时候可以使用 Promise.resolve 方法来完成</p>
<p>Promise.resolve的用法相当于 new Promise，并且执行 resolve 操作
<img src="@source/.vuepress/public/images/pr01.png" alt="图片"></p>
<p>resolve参数的形态：</p>
<ul>
<li>情况一：参数是一个普通的值或者对象</li>
<li>情况二：参数本身是 Promise</li>
<li>情况三：参数是一个 thenable</li>
</ul>
<h2 id="reject-方法" tabindex="-1"><a class="header-anchor" href="#reject-方法" aria-hidden="true">#</a> reject 方法</h2>
<ul>
<li>reject方法类似于resolve方法，只是会将Promise对象的状态设置为reject状态</li>
<li>Promise.reject 的用法相当于 new Promise，只是会调用 reject</li>
<li><strong>注意</strong>: Promise.reject 传入的参数<strong>无论是什么形态</strong>，都会直接作为 reject 状态的参数传递到 catch 的</li>
</ul>
<h2 id="all-方法" tabindex="-1"><a class="header-anchor" href="#all-方法" aria-hidden="true">#</a> all 方法</h2>
<p>另外一个类方法是 Promise.all：</p>
<ul>
<li>它的作用是将多个 Promise 包裹在一起形成一个新的Promise；</li>
<li>新的Promise状态由包裹的所有Promise共同决定：
<ul>
<li>当所有的 Promise 状态变成 fulfilled 状态时，新的 Promise 状态为 fulfilled，并且会将所有 Promise 的返回值组成一个数组；</li>
<li>当有一个 Promise 状态为 reject时，新的 Promise 状态为 reject，并且会将第一个 reject 的返回值作为参数</li>
</ul>
</li>
</ul>
<p><img src="@source/.vuepress/public/images/pall1.png" alt="图片"></p>
<h2 id="allsettled-方法" tabindex="-1"><a class="header-anchor" href="#allsettled-方法" aria-hidden="true">#</a> allSettled 方法</h2>
<p>all方法有一个缺陷：当有其中一个 Promise 变成 reject 状态时，新Promise就会立即变成对应的reject状态。</p>
<ul>
<li>那么对于 resolved 的，以及依然处于 pending 状态的 Promise，我们是获取不到对应的结果的；
在ES11（ES2020）中，添加了新的 API Promise.allSettled：</li>
<li>该方法会在所有的 Promise 都有结果（settled），无论是 fulfilled，还是reject时，才会有最终的状态；</li>
<li>并且这个 Promise 的结果一定是 fulfilled 的；</li>
</ul>
<p><img src="@source/.vuepress/public/images/alls1.png" alt="图片">
我们来看一下打印的结果：</p>
<ul>
<li>allSettled的结果是一个数组，数组中存放着每一个 Promise 的结果，并且是对应一个对象的；</li>
<li>这个对象中包含 status 状态，以及对应的 value 值；</li>
</ul>
<p><img src="@source/.vuepress/public/images/alls2.png" alt="图片"></p>
<h2 id="race-方法" tabindex="-1"><a class="header-anchor" href="#race-方法" aria-hidden="true">#</a> race 方法</h2>
<p>如果有一个 Promise 有了结果，我们就希望决定最终新 Promise 的状态，那么可以使用race方法：</p>
<ul>
<li>race 是竞技、竞赛的意思，<strong>表示多个 Promise 相互竞争，谁先有结果(不管是 fulfilled 或 rejected)，那么就使用谁的结果</strong></li>
</ul>
<h2 id="any-方法" tabindex="-1"><a class="header-anchor" href="#any-方法" aria-hidden="true">#</a> any 方法</h2>
<p>any方法是ES12中新增的方法，和race方法是类似的：</p>
<ul>
<li>any 方法<strong>会等到一个 fulfilled 状态，才会决定新 Promise 的状态</strong>；</li>
<li><strong>如果所有的 Promise 都是 reject 的，那么也会等到所有的 Promise 都变成 rejected 状态</strong></li>
</ul>
<p>如果所有的Promise都是reject的，那么会报一个 AggregateError 的错误</p>
<p><img src="@source/.vuepress/public/images/anyr.png" alt="图片">
<img src="@source/.vuepress/public/images/allr2.png" alt="图片"></p>
</template>
