<template><h1 id="深拷贝-事件总线" tabindex="-1"><a class="header-anchor" href="#深拷贝-事件总线" aria-hidden="true">#</a> 深拷贝 - 事件总线</h1>
<h2 id="深拷贝" tabindex="-1"><a class="header-anchor" href="#深拷贝" aria-hidden="true">#</a> 深拷贝</h2>
<ul>
<li>引入的赋值：指向同一个对象，相互之间会影响；</li>
<li>对象的浅拷贝：只是浅层的拷贝，内部引入对象时，依然会相互影响；</li>
<li>对象的深拷贝：两个对象不再有任何关系，不会相互影响；</li>
</ul>
<p>已经可以通过一种方法来实现深拷贝了：JSON.parse</p>
<ul>
<li>这种深拷贝的方式其实对于函数、Symbol等是无法处理的；</li>
<li>并且如果存在对象的循环引用，也会报错的；</li>
</ul>
<p><img src="@source/.vuepress/public/images/shenkaobei1.png" alt="图片">
<img src="@source/.vuepress/public/images/shenkaobei2.png" alt="图片"></p>
<p><strong>自定义深拷贝函数：</strong></p>
<ul>
<li>1.自定义深拷贝的基本功能；</li>
<li>2.对 Symbol 的 key 进行处理；</li>
<li>3.其他数据类型的值进程处理：数组、函数、Symbol、Set、Map；</li>
<li>4.对循环引用的处理</li>
</ul>
<p>基本实现 v1 :
<img src="@source/.vuepress/public/images/shen1.png" alt="图片"></p>
<p>其他类型 v2 :</p>
<p><img src="@source/.vuepress/public/images/qitaleixing.png" alt="图片"></p>
<p>循环引用 v3 :
<img src="@source/.vuepress/public/images/shen3.png" alt="图片">
<img src="@source/.vuepress/public/images/shen4.png" alt="图片">
但是 map = new Map() 放在全局并不好  , 优化一下
<img src="@source/.vuepress/public/images/shen5.png" alt="图片">
<img src="@source/.vuepress/public/images/shen6.png" alt="图片"></p>
<h2 id="事件总线" tabindex="-1"><a class="header-anchor" href="#事件总线" aria-hidden="true">#</a> 事件总线</h2>
<p>自定义事件总线属于一种观察者模式，其中包括三个角色：</p>
<ul>
<li>发布者（Publisher）：发出事件（Event）；</li>
<li>订阅者（Subscriber）：订阅事件（Event），并且会进行响应（Handler）；</li>
<li>事件总线（EventBus）：无论是发布者还是订阅者都是通过事件总线作为中台的；</li>
</ul>
<p>当然可以选择一些第三方的库：</p>
<ul>
<li>Vue2 默认是带有事件总线的功能；</li>
<li>Vue3 中推荐一些第三方库，比如 mitt；</li>
</ul>
<p>也可以实现自己的事件总线：</p>
<ul>
<li>事件的监听方法 on；</li>
<li>事件的发射方法 emit；</li>
<li>事件的取消监听 off</li>
</ul>
<p><img src="@source/.vuepress/public/images/eb11.png" alt="图片"></p>
</template>
