<template><h1 id="es6" tabindex="-1"><a class="header-anchor" href="#es6" aria-hidden="true">#</a> ES6 +</h1>
<h2 id="es7-array-includes" tabindex="-1"><a class="header-anchor" href="#es7-array-includes" aria-hidden="true">#</a> ES7 - Array Includes</h2>
<ul>
<li>在ES7之前，如果想判断一个数组中是否包含某个元素，需要通过 <strong>indexOf</strong> 获取结果，并且判断是否为 -1。</li>
<li>在ES7中，可以通过 <strong>includes</strong> 来判断一个数组中是否包含一个指定的元素，根据情况，如果包含则返回 true，
否则返回false</li>
</ul>
<p><img src="@source/.vuepress/public/images/includes0.png" alt="图片">
<img src="@source/.vuepress/public/images/inclueds1.png" alt="图片"></p>
<h2 id="es7-–指数-乘方-exponentiation-运算符" tabindex="-1"><a class="header-anchor" href="#es7-–指数-乘方-exponentiation-运算符" aria-hidden="true">#</a> ES7 –指数(乘方) exponentiation 运算符</h2>
<ul>
<li>在ES7之前，计算数字的乘方需要通过 <strong>Math.pow</strong> 方法来完成。</li>
<li>在ES7中，增加了 ** 运算符，可以对数字来计算乘方</li>
</ul>
<p><img src="@source/.vuepress/public/images/expen1.png" alt="图片"></p>
<h2 id="es8-object-values" tabindex="-1"><a class="header-anchor" href="#es8-object-values" aria-hidden="true">#</a> ES8 - Object values</h2>
<p>可以通过 Object.keys 获取一个对象所有的key，在ES8中提供了 Object.values 来获取所有的value值</p>
<p><img src="@source/.vuepress/public/images/values.png" alt="图片"></p>
<h2 id="es8-object-entries" tabindex="-1"><a class="header-anchor" href="#es8-object-entries" aria-hidden="true">#</a> ES8 - Object entries</h2>
<p>通过Object.entries 可以获取到一个数组，数组中会存放可枚举属性的键值对数组。
<img src="@source/.vuepress/public/images/entries.png" alt="图片"></p>
<h2 id="es8-string-padding" tabindex="-1"><a class="header-anchor" href="#es8-string-padding" aria-hidden="true">#</a> ES8 - String Padding</h2>
<p>某些字符串我们需要对其进行前后的填充，来实现某种格式化效果，ES8中增加了 padStart 和 padEnd 方法，分
别是对字符串的首尾进行填充的
<img src="@source/.vuepress/public/images/stringpadding1.png" alt="图片">
简单的一个应用场景：比如需要对身份证、银行卡的前面位数进行隐藏
<img src="@source/.vuepress/public/images/stringpadding2.png" alt="图片"></p>
<h2 id="es8-object-descriptors" tabindex="-1"><a class="header-anchor" href="#es8-object-descriptors" aria-hidden="true">#</a> ES8 - Object Descriptors</h2>
<p>在面向对象里总结过</p>
<h2 id="es9-新增" tabindex="-1"><a class="header-anchor" href="#es9-新增" aria-hidden="true">#</a> ES9 新增</h2>
<ul>
<li>Async iterators：后续迭代器总结</li>
<li>Object spread operators：前面总结过</li>
<li>Promise finally：后续 Promise总结</li>
</ul>
<h2 id="es10-flat-flatmap" tabindex="-1"><a class="header-anchor" href="#es10-flat-flatmap" aria-hidden="true">#</a> ES10 - flat flatMap</h2>
<p>flat() 方法会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回</p>
<p>flatMap() 方法首先使用映射函数映射每个元素，然后将结果压缩成一个新数组</p>
<ul>
<li>注意一：flatMap 是先进行 map 操作，再做 flat的操作；</li>
<li>注意二：flatMap 中的 flat 相当于深度为 1
<img src="@source/.vuepress/public/images/flat.png" alt="图片"></li>
</ul>
<h2 id="es10-object-fromentries" tabindex="-1"><a class="header-anchor" href="#es10-object-fromentries" aria-hidden="true">#</a> ES10 - Object fromEntries</h2>
<p>在前面，可以通过 Object.entries 将一个对象转换成 entries，那么如果我们有一个entries了，如何将其转换
成对象？</p>
<ul>
<li>ES10 提供了 Object.formEntries 来完成转换</li>
</ul>
<p><img src="@source/.vuepress/public/images/fe1.png" alt="图片"></p>
<p>应用场景 :</p>
<p><img src="@source/.vuepress/public/images/fe2.png" alt="图片"></p>
<h2 id="es10-trimstart-trimend" tabindex="-1"><a class="header-anchor" href="#es10-trimstart-trimend" aria-hidden="true">#</a> ES10 - trimStart trimEnd</h2>
<p>去除一个字符串首尾的空格，我们可以通过 trim 方法，如果单独去除前面或者后面？</p>
<ul>
<li>ES10 中提供了trimStart 和 trimEnd</li>
</ul>
<p><img src="@source/.vuepress/public/images/trim4.png" alt="图片"></p>
<h2 id="es10-其他补充" tabindex="-1"><a class="header-anchor" href="#es10-其他补充" aria-hidden="true">#</a> ES10 其他补充</h2>
<ul>
<li>Symbol description：前面总结过</li>
<li>Optional catch binding：后面 try catch 总结</li>
</ul>
<h2 id="es11-bigint" tabindex="-1"><a class="header-anchor" href="#es11-bigint" aria-hidden="true">#</a> ES11 - BigInt</h2>
<p>在早期的JavaScript中，我们不能正确的表示过大的数字：</p>
<ul>
<li>大于MAX_SAFE_INTEGER的数值，表示的可能是不正确的。
<img src="@source/.vuepress/public/images/bi1.png" alt="图片"></li>
</ul>
<p>那么ES11中，引入了新的数据类型BigInt，用于表示大的整数：</p>
<ul>
<li>BitInt 的表示方法是在数值的后面加上 n
<img src="@source/.vuepress/public/images/bi2.png" alt="图片"></li>
</ul>
<h2 id="es11-nullish-coalescing-operator" tabindex="-1"><a class="header-anchor" href="#es11-nullish-coalescing-operator" aria-hidden="true">#</a> ES11 - Nullish Coalescing Operator</h2>
<p>ES11，Nullish Coalescing Operator 增加了空值合并操作符：
<img src="@source/.vuepress/public/images/ddddd.png" alt="图片"></p>
<h2 id="es11-optional-chaining" tabindex="-1"><a class="header-anchor" href="#es11-optional-chaining" aria-hidden="true">#</a> ES11 - Optional Chaining</h2>
<p>可选链 也是ES11中新增一个特性，主要作用是让代码在进行null和undefined判断时更加清晰和简洁：
<img src="@source/.vuepress/public/images/kexuanlian.png" alt="图片"></p>
<h2 id="es11-globalthis" tabindex="-1"><a class="header-anchor" href="#es11-globalthis" aria-hidden="true">#</a> ES11 - GlobalThis</h2>
<p>在之前希望获取JavaScript环境的全局对象，不同的环境获取的方式是不一样的</p>
<ul>
<li>比如在浏览器中可以通过this、window来获取；</li>
<li>比如在 Node 中需要通过 global 来获取；</li>
</ul>
<p>那么在 ES11 中对获取全局对象进行了统一的规范：globalThis</p>
<p><img src="@source/.vuepress/public/images/gt1.png" alt="图片"></p>
<h2 id="es11-其他补充" tabindex="-1"><a class="header-anchor" href="#es11-其他补充" aria-hidden="true">#</a> ES11 其他补充</h2>
<ul>
<li>Dynamic Import：后续 ES Module模块化中总结</li>
<li>Promise.allSettled：后续 Promise 总结</li>
<li>import meta：后续 ES Module模块化中总结</li>
</ul>
<h2 id="es12-finalizationregistry" tabindex="-1"><a class="header-anchor" href="#es12-finalizationregistry" aria-hidden="true">#</a> ES12 - FinalizationRegistry</h2>
<p>FinalizationRegistry 对象可以让在对象被垃圾回收时请求一个回调</p>
<ul>
<li>FinalizationRegistry 提供了这样的一种方法：当一个在注册表中注册的对象被回收时，请求在某个时间点上调
用一个清理回调。（清理回调有时被称为 finalizer ）</li>
<li>可以通过调用 register 方法，注册任何你想要清理回调的对象，传入该对象和所含的值
<img src="@source/.vuepress/public/images/fr1.png" alt="图片"></li>
</ul>
<h2 id="es12-weakrefs" tabindex="-1"><a class="header-anchor" href="#es12-weakrefs" aria-hidden="true">#</a> ES12 - WeakRefs</h2>
<p>如果默认将一个对象赋值给另外一个引用，那么这个引用是一个强引用：</p>
<ul>
<li>如果我们希望是一个弱引用的话，可以使用 WeakRef
<img src="@source/.vuepress/public/images/wr.png" alt="图片"></li>
</ul>
<h2 id="es12-logical-assignment-operators" tabindex="-1"><a class="header-anchor" href="#es12-logical-assignment-operators" aria-hidden="true">#</a> ES12 - logical assignment operators</h2>
<p><img src="@source/.vuepress/public/images/logi1.png" alt="图片"></p>
<h2 id="es12-其他知识点" tabindex="-1"><a class="header-anchor" href="#es12-其他知识点" aria-hidden="true">#</a> ES12 其他知识点</h2>
<ul>
<li>String.replaceAll：字符串替换</li>
</ul>
</template>
