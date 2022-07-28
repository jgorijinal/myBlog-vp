<template><h1 id="js-的内存管理" tabindex="-1"><a class="header-anchor" href="#js-的内存管理" aria-hidden="true">#</a> JS 的内存管理</h1>
<h2 id="js-的内存管理-1" tabindex="-1"><a class="header-anchor" href="#js-的内存管理-1" aria-hidden="true">#</a> JS 的内存管理</h2>
<p>Javascript会在定义变量时为我们分配内存</p>
<ul>
<li>JS 对<strong>基本数据类型内存的分配</strong>会在执行时, 直接在<strong>栈空间</strong>进行分配</li>
<li>JS 对于<strong>复杂数据类型内存的分配</strong>会在<strong>堆内存</strong>中开辟一块空间，并且将这块空间的指针返回值变量引用</li>
</ul>
<p><img src="@source/.vuepress/public/images/zhandui.png" alt="图片"></p>
<h2 id="js-的垃圾回收" tabindex="-1"><a class="header-anchor" href="#js-的垃圾回收" aria-hidden="true">#</a> JS 的垃圾回收</h2>
<p>因为<strong>内存的大小是有限</strong>的，所以当<strong>内存不再需要的时候</strong>，我们需要<strong>对其进行释放</strong>，以便腾出<strong>更多的内存空间</strong></p>
<ul>
<li>垃圾回收的英文是 <code>Garbage Collection</code>，简称 <strong>GC</strong></li>
<li>对于那些不再使用的对象，都称之为是垃圾，它需要被回收，以释放更多的内存空间</li>
</ul>
<h3 id="常见的-gc-算法-引用计数" tabindex="-1"><a class="header-anchor" href="#常见的-gc-算法-引用计数" aria-hidden="true">#</a> 常见的 GC 算法 - 引用计数</h3>
<p>引用计数：</p>
<ul>
<li>
<p>当一个对象有一个引用指向它时，那么这个对象的引用就 <strong>+1</strong></p>
<p>当一个对象的引用为 0 时，这个对象就可以被销毁掉</p>
</li>
<li>
<p>这个算法有一个很大的<strong>弊端</strong>就是会产生<strong>循环引用</strong></p>
</li>
</ul>
<p><img src="@source/.vuepress/public/images/xunhuan1.png" alt="图片"></p>
<h3 id="常见的-gc-算法-–-标记清除" tabindex="-1"><a class="header-anchor" href="#常见的-gc-算法-–-标记清除" aria-hidden="true">#</a> 常见的 GC 算法 – 标记清除</h3>
<p>标记清除：</p>
<ul>
<li>这个算法是设置一个根对象（root object），垃圾回收器会定期从这个根开始，找所有从根开始有引用到的对象，对
于哪些没有引用到的对象，就认为是不可用的对象</li>
<li>这个算法可以很好的解决循环引用的问题</li>
</ul>
<p><img src="@source/.vuepress/public/images/biaoji.png" alt="图片"></p>
</template>
