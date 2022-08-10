<template><h1 id="json" tabindex="-1"><a class="header-anchor" href="#json" aria-hidden="true">#</a> JSON</h1>
<p>在目前的开发中，JSON 是一种非常重要的<strong>数据格式</strong>，它并<strong>不是编程语言</strong>，而是一种可以在服务器和客户端之间传输的数据格式。</p>
<p>JSON 的全称是 JavaScript Object Notation（JavaScript对象符号）</p>
<ul>
<li>JSON 是由 Douglas Crockford 构想和设计的一种轻量级资料交换格式，算是 JavaScript 的一个子集</li>
<li>但是虽然 JSON 被提出来的时候是主要应用 JavaScript 中，但是目前已经独立于编程语言，可以在各个编程语言中使用</li>
<li>很多编程语言都实现了将 JSON 转成对应模型的方式</li>
</ul>
<p>其他的传输格式：</p>
<ul>
<li>XML：在早期的网络传输中主要是使用XML来进行数据交换的，但是这种格式在解析、传输等各方面都弱于JSON，所以目前已经很
少在被使用了；</li>
<li>Protobuf：另外一个在网络传输中目前已经越来越多使用的传输格式是protobuf，但是直到2021年的3.x版本才支持JavaScript，所
以目前在前端使用的较少</li>
</ul>
<p>目前 JSON 被使用的场景也越来越多：</p>
<ul>
<li><strong>网络数据的传输 JSON 数据</strong></li>
<li><strong>项目的某些配置文件</strong></li>
<li>非关系型数据库（NoSQL）将 json 作为存储格式</li>
</ul>
<h2 id="json-基本语法" tabindex="-1"><a class="header-anchor" href="#json-基本语法" aria-hidden="true">#</a> JSON 基本语法</h2>
<p>JSON 的顶层支持三种类型的值：</p>
<ul>
<li>简单值：数字（Number）、字符串（String，不支持单引号）、布尔类型（Boolean）、null 类型；</li>
<li>对象值：由 key、value 组成，key 是字符串类型，并且必须添加双引号，值可以是简单值、对象值、数组值；</li>
<li>数组值：数组的值可以是简单值、对象值、数组值；</li>
</ul>
<p><img src="@source/.vuepress/public/images/json01.png" alt="图片">
<img src="@source/.vuepress/public/images/json02.png" alt="图片">
<img src="@source/.vuepress/public/images/json03.png" alt="图片"></p>
<h2 id="json-序列化" tabindex="-1"><a class="header-anchor" href="#json-序列化" aria-hidden="true">#</a> JSON 序列化</h2>
<p>某些情况下我们希望将 JavaScript 中的复杂类型转化成 JSON 格式的字符串，这样方便对其进行处理：</p>
<ul>
<li>比如希望将一个对象保存到 localStorage 中；</li>
<li>但是如果直接存放一个对象，这个对象会被转化成 [object Object] 格式的字符串，并不是我们想要的结果；
<img src="@source/.vuepress/public/images/objobj.png" alt="图片"></li>
</ul>
<h3 id="json-序列化方法" tabindex="-1"><a class="header-anchor" href="#json-序列化方法" aria-hidden="true">#</a> JSON 序列化方法</h3>
<p>在 ES5 中引用了 JSON 全局对象，该对象有两个常用的方法：</p>
<ul>
<li><strong>stringify 方法</strong>：将 JavaScript 类型转成对应的 JSON 字符串；</li>
<li><strong>parse 方法</strong>：解析 JSON 字符串，转回对应的 JavaScript 类型；</li>
</ul>
<p><img src="@source/.vuepress/public/images/json1.png" alt="图片"></p>
<h3 id="stringify-的参数-replace" tabindex="-1"><a class="header-anchor" href="#stringify-的参数-replace" aria-hidden="true">#</a> Stringify 的参数 - replace</h3>
<p>JSON.stringify() 方法将一个 JavaScript 对象或值转换为 JSON 字符串：</p>
<ul>
<li>如果指定了一个 replacer 函数，则可以选择性地替换值；</li>
<li>如果指定的 replacer 是数组，则可选择性地仅包含数组指定的属性；</li>
</ul>
<p><img src="@source/.vuepress/public/images/sy1.png" alt="图片"></p>
<h3 id="stringify-的参数-space" tabindex="-1"><a class="header-anchor" href="#stringify-的参数-space" aria-hidden="true">#</a> Stringify 的参数 - space</h3>
<p>它还可以跟上第三个参数 space：
<img src="@source/.vuepress/public/images/sy3.png" alt="图片"></p>
<p>如果对象本身包含 toJSON 方法，那么会直接使用 toJSON 方法的结果：
<img src="@source/.vuepress/public/images/sy4.png" alt="图片"></p>
<h3 id="parse-方法" tabindex="-1"><a class="header-anchor" href="#parse-方法" aria-hidden="true">#</a> parse 方法</h3>
<p>JSON.parse() 方法用来解析 JSON 字符串，构造由字符串描述的 JavaScript 值或对象。</p>
<ul>
<li>提供可选的 reviver 函数用以在返回之前对所得到的对象执行变换(操作)
<img src="@source/.vuepress/public/images/parse2.png" alt="图片"></li>
</ul>
<h2 id="使用-json序列化-深拷贝" tabindex="-1"><a class="header-anchor" href="#使用-json序列化-深拷贝" aria-hidden="true">#</a> 使用 JSON序列化 深拷贝</h2>
<p><img src="@source/.vuepress/public/images/skb.png" alt="图片">
注意：这种方法它对函数是无能为力的</p>
<ul>
<li>创建出来的 info 中是没有 foo 函数的，这是因为 stringify 并不会对函数进行处理</li>
<li>后面再自己编写一个深拷贝函数总结一下</li>
</ul>
</template>
