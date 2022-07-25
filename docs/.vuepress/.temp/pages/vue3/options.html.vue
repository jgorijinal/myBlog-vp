<template><h1 id="options-api" tabindex="-1"><a class="header-anchor" href="#options-api" aria-hidden="true">#</a> Options API</h1>
<h2 id="计算属性-computed" tabindex="-1"><a class="header-anchor" href="#计算属性-computed" aria-hidden="true">#</a> 计算属性 computed</h2>
<ul>
<li>对于任何包含响应式数据的复杂逻辑，你都应该使用<strong>计算属性</strong></li>
<li><strong>计算属性</strong>将被混入到组件实例中。所有 getter 和 setter 的 this 上下文自动地绑定为组件实例</li>
</ul>
<p>计算属性的用法：</p>
<ul>
<li>选项：computed</li>
<li>类型：<strong>{ [key: string]: Function | { get: Function, set: Function }</strong></li>
</ul>
<h2 id="计算属性-缓存" tabindex="-1"><a class="header-anchor" href="#计算属性-缓存" aria-hidden="true">#</a> 计算属性 缓存</h2>
<ul>
<li>这是因为计算属性会基于它们的<strong>依赖关系</strong>进行缓存</li>
<li>在<strong>数据不发生变化</strong>时，计算属性是不需要重新计算的</li>
<li>但是如果<strong>依赖的数据发生变化</strong>，在使用时，计算属性依然<strong>会重新进行计算</strong></li>
</ul>
<h2 id="计算属性的-setter和getter" tabindex="-1"><a class="header-anchor" href="#计算属性的-setter和getter" aria-hidden="true">#</a> 计算属性的 setter和getter</h2>
<p>计算属性在大多数情况下，只需要一个 getter 方法即可，所以会将计算属性直接写成一个函数</p>
<ul>
<li>但是，如果我们确实想设置计算属性的值该怎么办  ?</li>
<li>这个时候也可以给计算属性设置一个 setter 的方法</li>
</ul>
<p><img src="@source/.vuepress/public/images/cgs.png" alt="图片"></p>
<h2 id="侦听器-watch" tabindex="-1"><a class="header-anchor" href="#侦听器-watch" aria-hidden="true">#</a> 侦听器 watch</h2>
<ul>
<li>开发中我们在 data 返回的对象中定义了数据，这个数据通过插值语法等方式绑定到 template 中；</li>
<li>当数据变化时，template 会自动进行更新来显示最新的数据；</li>
<li>但是在某些情况下，我们希望在<strong>代码逻辑</strong>中监听某个数据的变化，这个时候就需要用<strong>侦听器 watch</strong> 来完成</li>
</ul>
<p>侦听器的用法如下：</p>
<ul>
<li>选项：watch</li>
<li>类型：<strong>{ [key: string]: string | Function | Object | Array}</strong></li>
</ul>
<p>案例:
举个例子 ：</p>
<ul>
<li>比如现在我们希望用户在<strong>input中输入一个问题</strong>；</li>
<li>每当用户输入了最新的内容，我们就获取到最新的内容，并且使用该问题去服务器查询答案；</li>
<li>那么，我们就需要实时的去获取最新的数据变化；</li>
</ul>
<h2 id="侦听器watch-的配置选项" tabindex="-1"><a class="header-anchor" href="#侦听器watch-的配置选项" aria-hidden="true">#</a> 侦听器watch 的配置选项</h2>
<p>当点击按钮的时候会修改 <strong>info.name</strong> 的值；</p>
<ul>
<li>这个时候我们使用watch来侦听info，可以侦听到吗？答案是不可以。</li>
</ul>
<p>这是因为默认情况下，watch 只是在侦听info的引用变化，对于内部属性的变化是不会做出响应的：</p>
<ul>
<li>这个时候我们可以使用一个选项 deep 进行更深层的侦听；</li>
<li>注意说过 watch 里面侦听的属性对应的也可以是一个 Object</li>
</ul>
<p>还有另外一个属性，希望一开始的就会立即执行一次：</p>
<ul>
<li>这个时候我们使用 immediate 选项；</li>
<li>这个时候无论后面数据是否有变化，侦听的函数都会优先执行一次</li>
</ul>
<p><img src="@source/.vuepress/public/images/w888.png" alt="图片"></p>
<h2 id="监听器-watch-的其他方式" tabindex="-1"><a class="header-anchor" href="#监听器-watch-的其他方式" aria-hidden="true">#</a> 监听器 watch 的其他方式</h2>
<p><strong>其他方式 (一)</strong></p>
<p><img src="@source/.vuepress/public/images/w999.png" alt="图片"></p>
<p><strong>其他方式(二)</strong></p>
<p>另外一个是Vue3文档中没有提到的，但是Vue2文档中有提到的是侦听对象的属性：
<img src="@source/.vuepress/public/images/www1.png" alt="图片"></p>
<p><strong>还有另外一种方式就是使用 $watch 的API：</strong>
我们可以在created的生命周期（后续会讲到）中，使用 this.$watch 来侦听；</p>
<ul>
<li>第一个参数是要侦听的源；</li>
<li>第二个参数是侦听的回调函数callback；</li>
<li>第三个参数是额外的其他选项，比如deep、immediate</li>
</ul>
<p><img src="@source/.vuepress/public/images/www2.png" alt="图片"></p>
</template>
