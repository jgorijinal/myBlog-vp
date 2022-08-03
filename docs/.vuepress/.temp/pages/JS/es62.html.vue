<template><h1 id="es6-二" tabindex="-1"><a class="header-anchor" href="#es6-二" aria-hidden="true">#</a> ES6 (二)</h1>
<h2 id="symbol" tabindex="-1"><a class="header-anchor" href="#symbol" aria-hidden="true">#</a> Symbol</h2>
<p>Symbol是什么呢？Symbol 是 ES6 中新增的一个基本数据类型，翻译为符号</p>
<p>那么为什么需要Symbol ？</p>
<ul>
<li>在ES6之前，对象的属性名都是字符串形式，那么很容易造成<strong>属性名的冲突</strong></li>
<li>比如原来有一个对象，我们希望在其中<strong>添加一个新的属性和值</strong>，但是我们在不确定它原来内部有什么内容的情况下，
<strong>很容易造成冲突，从而覆盖掉它内部的某个属性</strong></li>
</ul>
<p>Symbol就是为了解决上面的问题，用来生成一个独一无二的值。</p>
<ul>
<li>Symbol值是通过 <strong>Symbol函数</strong> 来生成的，生成后可以作为<strong>属性名</strong>；</li>
<li>也就是在ES6中，对象的属性名可以使用<strong>字符串</strong>，也可以使用 <strong>Symbol值</strong></li>
</ul>
<p><strong>Symbol即使多次创建值，它们也是不同的</strong>：Symbol函数执行后每次创建出来的值都是独一无二的；</p>
<p><strong>也可以在创建 Symbol 值的时候传入一个描述description</strong>：这个是 ES2019（ES10）新增的特性；</p>
<h3 id="symbol-作为属性名" tabindex="-1"><a class="header-anchor" href="#symbol-作为属性名" aria-hidden="true">#</a> Symbol 作为属性名</h3>
<p>通常会使用 Symbol 在对象中表示唯一的属性名
<img src="@source/.vuepress/public/images/symbol1.png" alt="图片">
<img src="@source/.vuepress/public/images/symbol2.png" alt="图片"></p>
<h3 id="相同值的symbol" tabindex="-1"><a class="header-anchor" href="#相同值的symbol" aria-hidden="true">#</a> 相同值的Symbol</h3>
<p>Symbol 的目的是为了创建一个独一无二的值，那么如果我们现在就是想创建相同的Symbol应该怎么来做？</p>
<ul>
<li>可以使用 Symbol.for 方法来做到这一点；</li>
<li>并且我们可以通过 Symbol.keyFor 方法来获取对应的 key</li>
</ul>
<p><img src="@source/.vuepress/public/images/symbol3.png" alt="图片"></p>
<h2 id="set" tabindex="-1"><a class="header-anchor" href="#set" aria-hidden="true">#</a> Set</h2>
<p>在 ES6 之前，我们存储数据的结构主要有两种：数组、对象。</p>
<ul>
<li>在 ES6 中新增了另外两种数据结构：Set、Map，以及它们的另外形式WeakSet、WeakMap。
Set 是一个新增的数据结构，可以用来保存数据，类似于数组，但是和数组的区别是<strong>元素不能重复</strong></li>
<li>创建 Set 我们需要通过Set构造函数（暂时没有字面量创建的方式）</li>
</ul>
<p>Set中存放的元素是不会重复的，那么Set有一个非常常用的功能就是给<strong>数组去重</strong></p>
<h3 id="set的基本使用" tabindex="-1"><a class="header-anchor" href="#set的基本使用" aria-hidden="true">#</a> Set的基本使用</h3>
<p><img src="@source/.vuepress/public/images/set1.png" alt="图片"></p>
<h3 id="set的常见方法" tabindex="-1"><a class="header-anchor" href="#set的常见方法" aria-hidden="true">#</a> Set的常见方法</h3>
<p>Set 常见的属性：</p>
<ul>
<li>size：返回Set中元素的个数；
Set 常用的方法：</li>
<li>add(value)：添加某个元素，返回Set对象本身；</li>
<li>delete(value)：从set中删除和这个值相等的元素，返回boolean类型；</li>
<li>has(value)：判断set中是否存在某个元素，返回boolean类型；</li>
<li>clear()：清空set中所有的元素，没有返回值；</li>
<li>forEach(callback, [, thisArg])：通过forEach遍历set；
另外Set是支持 for of 的遍历的</li>
</ul>
<h3 id="weakset-使用" tabindex="-1"><a class="header-anchor" href="#weakset-使用" aria-hidden="true">#</a> WeakSet 使用</h3>
<p>那么和 Set 有什么区别？</p>
<ul>
<li>区别一：WeakSet 中只能存放<strong>对象类型</strong>，不能存放基本数据类型；</li>
<li>区别二：WeakSet 对元素的引用是弱引用，如果没有其他引用对某个对象进行引用，那么GC可以对该对象进行回收；
WeakSet常见的方法：</li>
<li>add(value)：添加某个元素，返回 WeakSet 对象本身</li>
<li>delete(value)：从WeakSet中删除和这个值相等的元素，返回 boolean 类型</li>
<li>has(value)：判断WeakSet中是否存在某个元素，返回 boolean 类型</li>
</ul>
<h3 id="weakset的应用" tabindex="-1"><a class="header-anchor" href="#weakset的应用" aria-hidden="true">#</a> WeakSet的应用</h3>
<p>注意：WeakSet 不能遍历</p>
<ul>
<li>因为WeakSet只是对对象的弱引用，如果我们遍历获取到其中的元素，那么有可能造成对象不能正常的销毁。</li>
<li>所以存储到 WeakSet 中的对象是没办法获取的；</li>
</ul>
<p>那么这个东西有什么用
<img src="@source/.vuepress/public/images/weakset.png" alt="图片"></p>
<h2 id="map" tabindex="-1"><a class="header-anchor" href="#map" aria-hidden="true">#</a> Map</h2>
<h3 id="map-的基本使用" tabindex="-1"><a class="header-anchor" href="#map-的基本使用" aria-hidden="true">#</a> Map 的基本使用</h3>
<p>另外一个新增的数据结构是 Map，用于存储映射关系。</p>
<p>跟普通对象有什么区别？</p>
<ul>
<li>事实上我们对象存储映射关系只能用字符串（ES6新增了Symbol）作为属性名（key）</li>
<li>某些情况下我们可能希望通过其他类型作为 key，比如对象，这个时候会自动将对象转成字符串来作为key</li>
</ul>
<p><img src="@source/.vuepress/public/images/mapmap.png" alt="图片"></p>
<h3 id="map-的常见方法" tabindex="-1"><a class="header-anchor" href="#map-的常见方法" aria-hidden="true">#</a> Map 的常见方法</h3>
<p>Map常见的属性：</p>
<ul>
<li>size：返回Map中元素的个数；
Map常见的方法：</li>
<li>set(key, value)：在Map中添加key、value，并且返回整个Map对象；</li>
<li>get(key)：根据key获取Map中的value；</li>
<li>has(key)：判断是否包括某一个key，返回Boolean类型；</li>
<li>delete(key)：根据key删除一个键值对，返回Boolean类型；</li>
<li>clear()：清空所有的元素；</li>
</ul>
<p>forEach(callback, [, thisArg])：通过 forEach遍历Map；</p>
<ul>
<li>Map也可以通过for of进行遍历</li>
</ul>
<p><img src="@source/.vuepress/public/images/mapmap2.png" alt="图片"></p>
<h3 id="weakmap的使用" tabindex="-1"><a class="header-anchor" href="#weakmap的使用" aria-hidden="true">#</a> WeakMap的使用</h3>
<p>那么和Map有什么区别呢？
区别一：WeakMap的key只能使用对象，不接受其他的类型作为key；</p>
<ul>
<li>区别二：WeakMap的key对对象想的引用是弱引用，如果没有其他引用引用这个对象，那么GC可以回收该对象；</li>
</ul>
<p>WeakMap常见的方法有四个：</p>
<ul>
<li>set(key, value)：在Map中添加key、value，并且返回整个Map对象；</li>
<li>get(key)：根据key获取Map中的value；</li>
<li>has(key)：判断是否包括某一个key，返回Boolean类型；</li>
<li>delete(key)：根据key删除一个键值对，返回Boolean类型；</li>
</ul>
<p>注意：WeakMap也是不能遍历的</p>
<ul>
<li>因为没有 forEach 方法，也不支持通过for of的方式进行遍历</li>
</ul>
</template>
