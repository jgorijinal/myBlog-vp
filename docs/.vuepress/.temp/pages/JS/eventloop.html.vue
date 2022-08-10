<template><h1 id="事件循环" tabindex="-1"><a class="header-anchor" href="#事件循环" aria-hidden="true">#</a> 事件循环</h1>
<h2 id="浏览器中的-javascript-线程" tabindex="-1"><a class="header-anchor" href="#浏览器中的-javascript-线程" aria-hidden="true">#</a> 浏览器中的 JavaScript 线程</h2>
<ul>
<li>
<p>我们经常会说 <strong>JavaScript 是单线程</strong>的，但是 JavaScript 的线程应该有自己的容器进程：<strong>浏览器或者Node</strong>。</p>
</li>
<li>
<p>浏览器是一个进程吗，它里面只有一个线程吗？</p>
<ul>
<li>目前多数的浏览器其实都是多进程的，当我们打开一个tab页面时就会开启一个新的进程，这是为了防止一个页
面卡死而造成所有页面无法响应，整个浏览器需要强制退出；</li>
<li>每个进程中又有很多的线程，其中包括执行 JavaScript 代码的线程；</li>
</ul>
</li>
</ul>
<p>JavaScript的代码执行是在一个单独的线程中执行的：</p>
<ul>
<li>这就意味着 JavaScript 的代码，在<strong>同一个时刻只能做一件事</strong>；</li>
<li>如果<strong>这件事是非常耗时</strong>的，就意味着当前的线程就会被<strong>阻塞</strong>；</li>
</ul>
<p>所以真正耗时的操作，实际上并不是由 JavaScript 线程在执行的：</p>
<ul>
<li>浏览器的每个进程是多线程的，那么<strong>其他线程可以来完成这个耗时的操作</strong></li>
<li>比如<strong>网络请求</strong>、<strong>定时器</strong>，我们只需要在特性的时候执行应该有的回调即可；</li>
</ul>
<h2 id="浏览器的事件循环" tabindex="-1"><a class="header-anchor" href="#浏览器的事件循环" aria-hidden="true">#</a> 浏览器的事件循环</h2>
<p><em>有JS线程、浏览器其他线程 、事件队列</em></p>
<p>浏览器线程可处理很多操作比如 DOM 监听, 网络请求 , 定时器 或者其他一些东西。当我们到了某一时间
需要执行回调的话就会加入到事件队列里面, 然后JS引擎在从这个事件队列里面获取对应的函数 , 放到调用栈执行。
这个一个闭环就叫做 事件循环</p>
<p><img src="@source/.vuepress/public/images/sjxh1.png" alt="图片"></p>
<h2 id="宏任务和微任务" tabindex="-1"><a class="header-anchor" href="#宏任务和微任务" aria-hidden="true">#</a> 宏任务和微任务</h2>
<p><strong>但是在事件循环中并非只维护着一个队列 , 事实上有两个队列 :</strong></p>
<ul>
<li>宏任务队列 <em>macrotask queue</em>: ajax , setInterval, setTimeout , DOM 监听 , UI Rendering 等</li>
<li>微任务队列 <em>micotask queue</em> : Promise的then回调 , Mutation Observer API , queueMicrotask() 等</li>
</ul>
<p><strong>那么事件循环对于两个队列的优先级是怎么样呢？</strong></p>
<ul>
<li>
<ol>
<li>main script 中的代码优先执行(编写的顶层 script 代码)</li>
</ol>
</li>
<li>
<ol start="2">
<li><strong>在任何一个宏任务之前 (不是队列 , 是一个宏任务) , 都会先查看微任务队列中是否有任务需要执行</strong></li>
</ol>
<ul>
<li>也就是说宏任务执行之前 , 必须要保证微任务队列是空的</li>
<li>如果不为空 , 那么久优先执行微任务队列中的任务(回调)</li>
</ul>
</li>
</ul>
<h2 id="promise-面试题" tabindex="-1"><a class="header-anchor" href="#promise-面试题" aria-hidden="true">#</a> Promise 面试题</h2>
<p>画一下 main script  , 微 , 宏   然后再分析</p>
<ul>
<li>注意点 : (1) 执行宏任务之前微任务要清空 , 否则不能执行宏任务</li>
</ul>
<p><img src="@source/.vuepress/public/images/pmian1.png" alt="图片"></p>
<p>热身 :</p>
<ul>
<li>注意点: async 在前面总结过 , 异步函数的内部代码执行过程和普通函数是一致的 , 默认情况下也是会被<strong>同步执行</strong>
<img src="@source/.vuepress/public/images/pmian2.png" alt="图片">
答案: 1111 2222 4444 333</li>
</ul>
<p><img src="@source/.vuepress/public/images/pmian3.png" alt="图片">
<img src="@source/.vuepress/public/images/pmian4.png" alt="图片"></p>
<h2 id="node的事件循环" tabindex="-1"><a class="header-anchor" href="#node的事件循环" aria-hidden="true">#</a> Node的事件循环</h2>
<p>浏览器中的 EventLoop 是根据HTML5定义的规范来实现的，不同的浏览器可能会有不同的实现，而 Node 中是由 libuv 实现的。</p>
<ul>
<li>下面是一个Node的架构图:</li>
<li>我们会发现 libuv 中主要维护了一个 EventLoop 和 worker threads（线程池）；</li>
<li>ventLoop负责调用系统的一些其他操作：文件的IO、Network、child-processes等</li>
</ul>
<p>libuv是一个多平台的专注于异步IO的库，它最初是为Node开发的，但是现在也被使用到Luvit、Julia、pyuv等其
他地方
<img src="@source/.vuepress/public/images/node01.png" alt="图片"></p>
<h2 id="node事件循环的阶段" tabindex="-1"><a class="header-anchor" href="#node事件循环的阶段" aria-hidden="true">#</a> Node事件循环的阶段</h2>
<p><strong>事件循环像是一个桥梁</strong>，是连接着应用程序的 <strong>JavaScript 和系统调用</strong>之间的通道：</p>
<ul>
<li>无论是我们的文件IO、数据库、网络IO、定时器、子进程，在完成对应的操作后，都会将<strong>对应的结果和回调函数</strong>放到事件循环（任务队列）中；</li>
<li>事件循环会不断的从**任务队列中取出对应的事件（回调函数）**来执行；</li>
</ul>
<p><em>但是一次完整的事件循环Tick分成很多个阶段：</em></p>
<ul>
<li><em>定时器（Timers）</em>：本阶段执行已经被 setTimeout() 和 setInterval() 的调度回调函数。</li>
<li><em>待定回调（Pending Callback）</em>：对某些系统操作（如TCP错误类型）执行回调，比如 TCP 连接时接收到 ECONNREFUSED。</li>
<li><em>idle, prepare</em>：仅系统内部使用。</li>
<li><em>轮询（Poll）</em>：检索新的 I/O 事件；执行与 I/O 相关的回调；</li>
<li><em>检测（check）</em>：setImmediate() 回调函数在这里执行。</li>
<li><em>关闭的回调函数</em>：一些关闭的回调函数，如：socket.on('close', ...)。</li>
</ul>
<p><img src="@source/.vuepress/public/images/node02.png" alt="图片"></p>
<h2 id="node-的宏任务和微任务" tabindex="-1"><a class="header-anchor" href="#node-的宏任务和微任务" aria-hidden="true">#</a> Node 的宏任务和微任务</h2>
<p>我们会发现从一次事件循环的 Tick 来说，Node 的事件循环更复杂，它也分为微任务和宏任务：</p>
<ul>
<li>宏任务 (macrotask) :setTimeout , setInterval , IO事件 , setImmediate , close 事件</li>
<li>微任务 (microtask) : Promise的then回调 , process.nextTick , queueMicro</li>
</ul>
<p>但是 , Node 的事件循环不只是微任务和宏任务队列 :</p>
<ul>
<li><strong>微任务队列：</strong>
<ul>
<li>next tick queue：process.nextTick；</li>
<li>other queue：Promise的then回调、queueMicrotask；</li>
</ul>
</li>
<li><strong>宏任务队列：</strong>
<ul>
<li>timer queue：setTimeout、setInterval；</li>
<li>poll queue：IO事件；</li>
<li>check queue：<em>setImmediate；</em></li>
<li>close queue：close事件；</li>
</ul>
</li>
</ul>
<h2 id="node事件循环的顺序" tabindex="-1"><a class="header-anchor" href="#node事件循环的顺序" aria-hidden="true">#</a> Node事件循环的顺序</h2>
<p>所以，在每一次事件循环的 tick 中，会按照如下顺序来执行代码：</p>
<ul>
<li>next tick microtask queue；</li>
<li>other microtask queue；</li>
<li>timer queue；</li>
<li>poll queue；</li>
<li>check queue；</li>
<li>close queue</li>
</ul>
<h2 id="node-执行面试题" tabindex="-1"><a class="header-anchor" href="#node-执行面试题" aria-hidden="true">#</a> Node 执行面试题</h2>
<p><img src="@source/.vuepress/public/images/nodemian.png" alt="图片">
<img src="@source/.vuepress/public/images/nodemian2.png" alt="图片"></p>
</template>
