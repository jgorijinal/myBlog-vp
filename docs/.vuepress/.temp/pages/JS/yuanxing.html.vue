<template><h1 id="面向对象" tabindex="-1"><a class="header-anchor" href="#面向对象" aria-hidden="true">#</a> 面向对象</h1>
<p>JavaScript其实支持多种编程范式的，包括函数式编程和面向对象编程：</p>
<ul>
<li>JavaScript中的对象被设计成一组<strong>属性的无序集合</strong>，像是一个<strong>哈希表</strong>，有 key 和 value 组成；</li>
<li><strong>key是一个标识符名称，value可以是任意类型</strong>，也可以是<strong>其他对象或者函数类型</strong></li>
<li>如果值是一个<strong>函数</strong>，那么我们可以称之为是<strong>对象的方法</strong></li>
</ul>
<p>如何创建一个对象？</p>
<ul>
<li>早期使用创建对象的方式最多的是使用<strong>Object类</strong>，并且使用 <strong>new 关键字</strong>来创建一个对象：
<ul>
<li>这是因为早期很多 JavaScript 开发者是从Java过来的，它们也更习惯于Java中通过new的方式创建一个对象；</li>
</ul>
</li>
<li>后来很多开发者为了方便起见，都是直接通过<strong>字面量的形式来创建对象</strong>
<ul>
<li>这种形式看起来更加的简洁，并且对象和属性之间的内聚性也更强，所以这种方式后来就流行了起来</li>
</ul>
</li>
</ul>
<h2 id="创建对象的两种方式" tabindex="-1"><a class="header-anchor" href="#创建对象的两种方式" aria-hidden="true">#</a> 创建对象的两种方式</h2>
<p><img src="@source/.vuepress/public/images/duixiang1.png" alt="图片"></p>
<h2 id="对属性操作的控制" tabindex="-1"><a class="header-anchor" href="#对属性操作的控制" aria-hidden="true">#</a> 对属性操作的控制</h2>
<p>通常对象的属性都是<strong>直接定义在对象内部</strong>，或者<strong>直接添加到对象内部的</strong></p>
<ul>
<li>但是这样来做的时候我们就<strong>不能对这个属性进行一些限制</strong>：比如这个属性<strong>是否是可以通过delete删除的？<strong>这个
属性</strong>是否在 for-in 遍历的时候被遍历出来呢</strong></li>
</ul>
<p><img src="@source/.vuepress/public/images/obj.png" alt="图片"></p>
<p>如果我们想要对一个属性进行<strong>比较精准的操作控制</strong>，那么我们就可以使用<strong>属性描述符</strong></p>
<ul>
<li>通过属性描述符<strong>可以精准的添加或修改对象的属性</strong></li>
<li>属性描述符需要使用 <strong>Object.defineProperty</strong> 来对属性进行添加或者修改</li>
</ul>
<h3 id="object-defineproperty" tabindex="-1"><a class="header-anchor" href="#object-defineproperty" aria-hidden="true">#</a> Object.defineProperty</h3>
<p>Object.defineProperty() 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象</p>
<p><img src="@source/.vuepress/public/images/odp1.png" alt="图片"></p>
<p>可接收三个参数：</p>
<ul>
<li>obj 要定义属性的对象</li>
<li>prop 要定义或修改的属性的名称或 Symbol</li>
<li>descriptor 要定义或修改的属性描述符</li>
</ul>
<p>返回值：</p>
<ul>
<li>被传递给函数的对象</li>
</ul>
<h3 id="属性描述符分类" tabindex="-1"><a class="header-anchor" href="#属性描述符分类" aria-hidden="true">#</a> 属性描述符分类</h3>
<p>属性描述符的类型有两种：</p>
<ul>
<li>数据属性（Data Properties）描述符（Descriptor）；</li>
<li>存取属性（Accessor访问器 Properties）描述符（Descriptor）；</li>
</ul>
<p><img src="@source/.vuepress/public/images/dddd1.png" alt="图片"></p>
<h3 id="数据属性描述符" tabindex="-1"><a class="header-anchor" href="#数据属性描述符" aria-hidden="true">#</a> 数据属性描述符</h3>
<ul>
<li><strong>[[Configurable]]</strong>：表示属性是否可以通过delete删除属性，是否可以修改它的特性，或者是否可以将它修改为存取属性
描述符；</li>
<li>当我们直接在一个对象上定义某个属性时，这个属性的[[Configurable]]为true；</li>
<li>当我们通过属性描述符定义一个属性时，这个属性的[[Configurable]]默认为false；</li>
<li><strong>[[Enumerable]]</strong>：表示属性是否可以通过for-in或者Object.keys()返回该属性；
<ul>
<li>当我们直接在一个对象上定义某个属性时，这个属性的[[Enumerable]]为true；</li>
<li>当我们通过属性描述符定义一个属性时，这个属性的[[Enumerable]]默认为false；</li>
</ul>
</li>
<li><strong>[[Writable]]</strong>：表示是否可以修改属性的值；
<ul>
<li>当我们直接在一个对象上定义某个属性时，这个属性的[[Writable]]为true；</li>
<li>当我们通过属性描述符定义一个属性时，这个属性的[[Writable]]默认为false；</li>
</ul>
</li>
<li><strong>[[value]]</strong>：属性的value值，读取属性时会返回该值，修改属性时，会对其进行修改；
<ul>
<li>默认情况下这个值是undefined；</li>
</ul>
</li>
</ul>
<p><img src="@source/.vuepress/public/images/odp2.png" alt="图片">
<img src="@source/.vuepress/public/images/odp3.png" alt="图片"></p>
<h3 id="存取属性描述符" tabindex="-1"><a class="header-anchor" href="#存取属性描述符" aria-hidden="true">#</a> 存取属性描述符</h3>
<p>数据数据描述符有如下四个特性：</p>
<ul>
<li><strong>[[Configurable]]</strong>：表示属性是否可以通过delete删除属性，是否可以修改它的特性，或者是否可以将它修改为存取属性
描述符；
<ul>
<li>和数据属性描述符是一致的；</li>
<li>当我们直接在一个对象上定义某个属性时，这个属性的[[Configurable]]为true；</li>
<li>当我们通过属性描述符定义一个属性时，这个属性的[[Configurable]]默认为false；</li>
</ul>
</li>
<li><strong>[[Enumerable]]</strong>：表示属性是否可以通过for-in或者Object.keys()返回该属性；
<ul>
<li>和数据属性描述符是一致的；</li>
<li>当我们直接在一个对象上定义某个属性时，这个属性的[[Enumerable]]为true；</li>
<li>当我们通过属性描述符定义一个属性时，这个属性的[[Enumerable]]默认为false；</li>
</ul>
</li>
<li><strong>[[get]]</strong>：获取属性时会执行的函数。默认为undefined</li>
<li><strong>[[set]]</strong>：设置属性时会执行的函数。默认为undefined</li>
</ul>
<p><img src="@source/.vuepress/public/images/cunqu.png" alt="图片"></p>
<h3 id="同时定义多个属性" tabindex="-1"><a class="header-anchor" href="#同时定义多个属性" aria-hidden="true">#</a> 同时定义多个属性</h3>
<p><strong>Object.defineProperties()</strong> 方法直接在一个对象上定义 <strong>多个</strong> 新的属性或修改现有属性，并且返回该对象。</p>
<p><img src="@source/.vuepress/public/images/pes.png" alt="图片"></p>
<p><strong>get/set 还可以这么写</strong></p>
<p><img src="@source/.vuepress/public/images/gs11.png" alt="图片"></p>
<h3 id="对象的其他方法" tabindex="-1"><a class="header-anchor" href="#对象的其他方法" aria-hidden="true">#</a> 对象的其他方法</h3>
<ul>
<li>获取对象的属性描述符：
<ul>
<li>getOwnPropertyDescriptor</li>
<li>getOwnPropertyDescriptors</li>
</ul>
</li>
</ul>
<p><img src="@source/.vuepress/public/images/dui1.png" alt="图片"></p>
<ul>
<li>禁止对象扩展新属性：preventExtensions
<ul>
<li>给一个对象添加新的属性会失败（在严格模式下会报错）；</li>
</ul>
</li>
</ul>
<p><img src="@source/.vuepress/public/images/dui2.png" alt="图片"></p>
<ul>
<li>密封对象，不允许配置和删除属性：seal
<ul>
<li>实际是调用preventExtensions</li>
<li>并且将现有属性的configurable:false</li>
</ul>
</li>
</ul>
<p><img src="@source/.vuepress/public/images/dui3.png" alt="图片"></p>
<ul>
<li>冻结对象，不允许修改现有属性： freeze
<ul>
<li>实际上是调用seal</li>
<li>并且将现有属性的writable: false</li>
</ul>
</li>
</ul>
<p><img src="@source/.vuepress/public/images/dui4.png" alt="图片"></p>
<h2 id="构造函数" tabindex="-1"><a class="header-anchor" href="#构造函数" aria-hidden="true">#</a> 构造函数</h2>
<p>JavaScript 中的构造函数是怎么样的？</p>
<ul>
<li>构造函数也是一个普通的函数，从表现形式来说，和千千万万个普通的函数没有任何区别</li>
<li>那么如果这么一个普通的函数被使用 new 操作符来调用了，那么这个函数就称之为是一个构造函数</li>
</ul>
<h3 id="new操作符调用的作用" tabindex="-1"><a class="header-anchor" href="#new操作符调用的作用" aria-hidden="true">#</a> new操作符调用的作用</h3>
<p>如果一个函数被使用new操作符调用了，那么它会执行如下操作：</p>
<ul>
<li>
<ol>
<li>在内存中创建一个新的对象（空对象）；</li>
</ol>
</li>
<li>
<ol start="2">
<li>这个对象内部的 [[prototype]] 属性会被赋值为该构造函数的 prototype 属性</li>
</ol>
</li>
<li>
<ol start="3">
<li>构造函数内部的this，会指向创建出来的新对象；</li>
</ol>
</li>
<li>
<ol start="4">
<li>执行函数的内部代码（函数体代码）；</li>
</ol>
</li>
<li>
<ol start="5">
<li>如果构造函数没有返回非空对象，则返回创建出来的新对象</li>
</ol>
</li>
</ul>
<p><img src="@source/.vuepress/public/images/new01.png" alt="图片"></p>
<h3 id="创建对象的方案-–-构造函数" tabindex="-1"><a class="header-anchor" href="#创建对象的方案-–-构造函数" aria-hidden="true">#</a> 创建对象的方案 – 构造函数</h3>
<p><img src="@source/.vuepress/public/images/gouzaohanshu.png" alt="图片"></p>
<p>但是构造函数就没有缺点了吗？</p>
<ul>
<li>构造函数也是有缺点的，它在于我们需要为每个对象的函数<strong>去创建一个函数对象实例</strong></li>
</ul>
<h3 id="对象的原型" tabindex="-1"><a class="header-anchor" href="#对象的原型" aria-hidden="true">#</a> 对象的原型</h3>
<p>JavaScript当中每个对象都有一个特殊的内置属性 [[prototype]]，这个特殊的对象可以指向另外一个对象</p>
<p>那么这个对象有什么用？</p>
<ul>
<li>当我们通过引用对象的属性 key 来获取一个value时，它会触发 [[Get]]的操作</li>
<li>这个操作会首先检查该属性是否有对应的属性，如果有的话就使用它</li>
<li>如果对象中没有改属性，那么会访问对象[[prototype]]内置属性指向的对象上的属性</li>
</ul>
<p>那么如果通过字面量直接创建一个对象，这个对象也会有这样的属性吗？如果有，应该如何获取这个属性呢？</p>
<ul>
<li>答案是有的，只要是对象都会有这样的一个内置属性；</li>
</ul>
<p>获取的方式有两种：</p>
<ul>
<li>方式一：通过对象的 <strong>proto</strong> 属性可以获取到（但是这个是早期浏览器自己添加的，存在一定的兼容性问
题）；</li>
<li>方式二：通过 Object.getPrototypeOf 方法可以获取到；</li>
</ul>
<p><img src="@source/.vuepress/public/images/pro1.png" alt="图片"></p>
<h3 id="函数的原型-prototype-再看-new-操作符" tabindex="-1"><a class="header-anchor" href="#函数的原型-prototype-再看-new-操作符" aria-hidden="true">#</a> 函数的原型 prototype/ 再看 new 操作符</h3>
<p>所有的函数都有一个 prototype 的属性
<img src="@source/.vuepress/public/images/pt1.png" alt="图片"></p>
<h4 id="再看-new-操作符" tabindex="-1"><a class="header-anchor" href="#再看-new-操作符" aria-hidden="true">#</a> 再看 new 操作符</h4>
<p>之前说过 new 关键字的步骤如下：</p>
<ul>
<li>
<ol>
<li>在内存中创建一个新的对象（空对象）；</li>
</ol>
</li>
<li>
<ol start="2">
<li><strong>这个对象内部的[[prototype]]属性(隐式原型)会被赋值为该构造函数的 prototype 属性</strong></li>
</ol>
</li>
</ul>
<p>那么也就意味着通过 Person 构造函数创建出来的所有对象的[[prototype]]属性都指向 Person.prototype</p>
<p><img src="@source/.vuepress/public/images/pro2.png" alt="图片">
<img src="@source/.vuepress/public/images/pro3.png" alt="图片">
内存图 :
<img src="@source/.vuepress/public/images/pn1.png" alt="图片"></p>
<h3 id="constructor-属性" tabindex="-1"><a class="header-anchor" href="#constructor-属性" aria-hidden="true">#</a> constructor 属性</h3>
<p>事实上原型对象上面是有一个属性的：<strong>constructor</strong></p>
<ul>
<li>默认情况下原型上都会添加一个属性叫做 constructor，这个<strong>constructor 指向当前的函数本身</strong></li>
</ul>
<p><img src="@source/.vuepress/public/images/con1.png" alt="图片"></p>
<h3 id="重写-prototype-原型对象" tabindex="-1"><a class="header-anchor" href="#重写-prototype-原型对象" aria-hidden="true">#</a> 重写 prototype 原型对象</h3>
<p>如果需要在原型上添加过多的属性，通常会重新整个原型对象
<img src="@source/.vuepress/public/images/con2.png" alt="图片"></p>
<p>如果希望 constructor 指向 Person，那么可以(像上面的图)手动添加：</p>
<ul>
<li>上面的方式虽然可以, 但是也会造成constructor的[[Enumerable]]特性被设置了true.</li>
<li>默认情况下, 原生的 constructor 属性是不可枚举的.</li>
</ul>
<p>如果希望解决这个问题, 就可以使用前面介绍的 Object.defineProperty() 函数了
<img src="@source/.vuepress/public/images/con3.png" alt="图片"></p>
<h3 id="创建对象-–-构造函数和原型组合" tabindex="-1"><a class="header-anchor" href="#创建对象-–-构造函数和原型组合" aria-hidden="true">#</a> 创建对象 – 构造函数和原型组合</h3>
<p>在上一个构造函数的方式创建对象时，有一个弊端：会创建出重复的函数，比如 running、eating 这些函数</p>
<ul>
<li>那么有没有办法让所有的对象去共享这些函数?</li>
<li>可以，将这些函数放到 Person.prototype 的对象上即可</li>
</ul>
<p><img src="@source/.vuepress/public/images/pro6.png" alt="图片"></p>
</template>
