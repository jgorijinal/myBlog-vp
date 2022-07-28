<template><h1 id="this" tabindex="-1"><a class="header-anchor" href="#this" aria-hidden="true">#</a> this</h1>
<p>为什么需要 this ?</p>
<p>JavaScript中的this更加灵活，无论是它出现的位置还是它代表的含义</p>
<p>下面编写一个obj的对象，有this和没有this的区别
<img src="@source/.vuepress/public/images/this1.png" alt="图片"></p>
<p>this 在<strong>全局作用域</strong>下指向什么 ?</p>
<ul>
<li>在<strong>浏览器下会指向 window</strong></li>
</ul>
<p><img src="@source/.vuepress/public/images/windowthis.png" alt="图片"></p>
<ul>
<li>开发中很少直接在全局作用于下去使用 this ，通常都是在<strong>函数中使用</strong></li>
</ul>
<h2 id="this的指向" tabindex="-1"><a class="header-anchor" href="#this的指向" aria-hidden="true">#</a> this的指向</h2>
<p>定义一个函数，采用三种不同的方式对它进行调用，产生三种不同的结果</p>
<p><img src="@source/.vuepress/public/images/tfn.png" alt="图片"></p>
<ul>
<li>
<ol>
<li>函数在调用时，JavaScript 会默认给 this 绑定一个值</li>
</ol>
</li>
<li>
<ol start="2">
<li>this 的绑定和<strong>定义的位置（编写的位置）没有关系</strong></li>
</ol>
</li>
<li>
<ol start="3">
<li>this 的绑定和<strong>调用方式以及调用的位置有关系</strong></li>
</ol>
</li>
<li>
<ol start="4">
<li>this 是在<strong>运行时被动态绑定的</strong></li>
</ol>
</li>
</ul>
<p>this的绑定规则 :</p>
<ul>
<li>绑定一：<strong>默认绑定</strong></li>
<li>绑定二：<strong>隐式绑定</strong></li>
<li>绑定三：<strong>显示绑定</strong></li>
<li>绑定四：<strong>new 绑定</strong></li>
</ul>
<h2 id="规则一-默认绑定" tabindex="-1"><a class="header-anchor" href="#规则一-默认绑定" aria-hidden="true">#</a> 规则一 : 默认绑定</h2>
<p><strong>独立函数调用</strong></p>
<ul>
<li>独立的函数调用可以理解成函数没有被绑定到某个对象上进行调用</li>
</ul>
<p><img src="@source/.vuepress/public/images/moren1.png" alt="图片">  <img src="@source/.vuepress/public/images/moren2.png" alt="图片">
打出的 this 全都是 window 对象</p>
<h2 id="规则二-隐式绑定" tabindex="-1"><a class="header-anchor" href="#规则二-隐式绑定" aria-hidden="true">#</a> 规则二 : 隐式绑定</h2>
<p><strong>通过某个对象</strong>进行调用的</p>
<ul>
<li>也就是它的调用位置中，是通过某个对象发起的函数调用</li>
</ul>
<p>object.fn() : object 对象会被js引擎绑定到 fn 函数的 this 里面</p>
<p><img src="@source/.vuepress/public/images/yinshi1.png" alt="图片">  <img src="@source/.vuepress/public/images/yinshi2.png" alt="图片"></p>
<h2 id="规则三-显示绑定" tabindex="-1"><a class="header-anchor" href="#规则三-显示绑定" aria-hidden="true">#</a> 规则三 : 显示绑定</h2>
<p><strong>call , apply , bind</strong></p>
<ul>
<li>
<p><strong>通过 call 或者 apply 绑定 this 对象</strong></p>
<ul>
<li>显示绑定后 , this 就会明确的指向绑定的对象</li>
</ul>
<p><img src="@source/.vuepress/public/images/ca1.png" alt="图片">
<img src="@source/.vuepress/public/images/ca2.png" alt="图片"></p>
</li>
<li>
<p>如果<strong>希望一个函数总是显示的绑定到一个对象上</strong>，<strong>可以使用 bind</strong>
<img src="@source/.vuepress/public/images/bind1.png" alt="图片">
<img src="@source/.vuepress/public/images/bind2.png" alt="图片"></p>
</li>
</ul>
<h2 id="规则四-new-绑定" tabindex="-1"><a class="header-anchor" href="#规则四-new-绑定" aria-hidden="true">#</a> 规则四 : new 绑定</h2>
<ul>
<li>
<ol>
<li>创建一个全新的对象；</li>
</ol>
</li>
<li>
<ol start="2">
<li>这个新对象会被执行 prototype 连接；</li>
</ol>
</li>
<li>
<ol start="3">
<li>这个<strong>新对象会绑定到函数调用的this上</strong>（this的绑定在这个步骤完成）</li>
</ol>
</li>
<li>
<ol start="4">
<li>如果函数没有返回其他对象，表达式会返回这个新对象；</li>
</ol>
</li>
</ul>
<p>**通过 new 关键字调用一个函数(构造函数)**时 , 这个时候 <strong>this 是调用这个构造器创建出来的对象</strong>
也就是说 , <strong>this = 创建出来的对象</strong> , 这个绑定过程就是 new 绑定</p>
<h2 id="内置函数的-this-绑定" tabindex="-1"><a class="header-anchor" href="#内置函数的-this-绑定" aria-hidden="true">#</a> 内置函数的 this 绑定</h2>
<p>一些 JavaScript 的内置函数</p>
<ul>
<li>setTimeout、数组的forEach 、div的点击
<img src="@source/.vuepress/public/images/neizhi1.png" alt="图片">  <img src="@source/.vuepress/public/images/neizhi2.png" alt="图片">
<img src="@source/.vuepress/public/images/neizhi3.png" alt="图片">
<img src="@source/.vuepress/public/images/neizhi4.png" alt="图片"></li>
</ul>
<h2 id="规则优先级" tabindex="-1"><a class="header-anchor" href="#规则优先级" aria-hidden="true">#</a> 规则优先级</h2>
<ol>
<li><strong>默认规则优先级最低</strong></li>
<li><strong>显示绑定优先级高于隐式绑定</strong></li>
</ol>
<p><img src="@source/.vuepress/public/images/xian1.png" alt="图片"></p>
<ol start="3">
<li><strong>new绑定优先级高于隐式绑定</strong></li>
</ol>
<p><img src="@source/.vuepress/public/images/new1.png" alt="图片"></p>
<ol start="4">
<li><strong>new绑定优先级高于bind</strong></li>
</ol>
<ul>
<li>new绑定和call、apply是不允许同时使用的，所以不存在谁的优先级更高</li>
<li>new绑定可以和bind一起使用，new绑定优先级更高</li>
</ul>
<p><img src="@source/.vuepress/public/images/nb2.png" alt="图片"><img src="@source/.vuepress/public/images/nb1.png" alt="图片"></p>
<p><strong>总结 : new 绑定 &gt; 显示绑定(call/apply/bind) &gt; 隐式绑定 (obj.foo()) &gt; 默认绑定(独立函数调用)</strong></p>
<h2 id="this规则之外-–-忽略显示绑定" tabindex="-1"><a class="header-anchor" href="#this规则之外-–-忽略显示绑定" aria-hidden="true">#</a> this规则之外 – 忽略显示绑定</h2>
<p>如果在显示绑定中，如果<strong>传入一个 null 或者 undefined</strong>，那么这个显示绑定会被忽略，使用默认规则</p>
<p><img src="@source/.vuepress/public/images/nub2.png" alt="图片"></p>
<p>控制台打出的全是 window 对象</p>
<h2 id="this规则之外-间接函数引用" tabindex="-1"><a class="header-anchor" href="#this规则之外-间接函数引用" aria-hidden="true">#</a> this规则之外 - 间接函数引用</h2>
<p>另外一种情况，创建一个函数的 间接引用，这种情况使用默认绑定规则</p>
<ul>
<li>赋值 (obj2.foo = obj1.foo) 的结果是foo函数</li>
<li>foo 函数被直接调用，那么是默认绑定</li>
</ul>
<p><img src="@source/.vuepress/public/images/jjyy.png" alt="图片"></p>
<h2 id="this规则之外-–-es6箭头函数" tabindex="-1"><a class="header-anchor" href="#this规则之外-–-es6箭头函数" aria-hidden="true">#</a> this规则之外 – ES6箭头函数</h2>
<p>箭头函数<strong>不使用</strong> this的四种标准规则（也就是<strong>不绑定this</strong>），而是<strong>根据外层(上层)作用域来决定this</strong>
<img src="@source/.vuepress/public/images/jt0.png" alt="图片">
<img src="@source/.vuepress/public/images/jt1.png" alt="图片"></p>
<p>一个模拟网络请求的案例：</p>
<ul>
<li>
<p>这里使用了 setTimeout 来模拟网络请求，请求到数据后如何可以存放到 data ?</p>
<ul>
<li>需要拿到obj对象，设置data；</li>
<li>但是直接拿到的this是 window，我们需要在外层定义：var _this = this</li>
<li>在setTimeout的回调函数中使用_this就代表了obj对象</li>
</ul>
</li>
</ul>
<p><img src="@source/.vuepress/public/images/_this.png" alt="图片"></p>
<p>上面的代码在 ES6之前最常用的方式，从ES6开始，都会使用<strong>箭头函数</strong></p>
<ul>
<li>为什么在 setTimeout 的回调函数中可以直接使用 this 呢？</li>
<li>因为<strong>箭头函数并不绑定this对象</strong>，那么<strong>this引用就会从上层作用于中找到对应的this</strong></li>
</ul>
<p><img src="@source/.vuepress/public/images/thisxx.png" alt="图片"></p>
<p>如果 getData 也是一个箭头函数，那么setTimeout中的回调函数中的this指向谁 ???
<img src="@source/.vuepress/public/images/wtwtwt.png" alt="图片"></p>
<h2 id="this-面试题" tabindex="-1"><a class="header-anchor" href="#this-面试题" aria-hidden="true">#</a> this 面试题</h2>
<ul>
<li>
<p><img src="@source/.vuepress/public/images/tm1.png" alt="图片"></p>
</li>
<li>
<p><img src="@source/.vuepress/public/images/tm2.png" alt="图片"></p>
</li>
<li>
<p><img src="@source/.vuepress/public/images/tm3.png" alt="图片"></p>
</li>
<li>
<p><img src="@source/.vuepress/public/images/tm4.png" alt="图片"></p>
</li>
</ul>
</template>
