<template><h1 id="自定义组件" tabindex="-1"><a class="header-anchor" href="#自定义组件" aria-hidden="true">#</a> 自定义组件</h1>
<h2 id="创建组件" tabindex="-1"><a class="header-anchor" href="#创建组件" aria-hidden="true">#</a> 创建组件</h2>
<ul>
<li>在项目的根目录中，鼠标右键，创建 <strong>components -&gt; test</strong> 文件夹</li>
<li>在新建的 components -&gt; test 文件夹上，鼠标右键，点击 <strong>“新建 Component”</strong></li>
<li>键入组件的名称之后回车，会自动生成组件对应的 4 个文件，后缀名分别为 .js，.json， .wxml 和 .wxs</li>
</ul>
<h2 id="引用组件" tabindex="-1"><a class="header-anchor" href="#引用组件" aria-hidden="true">#</a> 引用组件</h2>
<h3 id="局部引用组件" tabindex="-1"><a class="header-anchor" href="#局部引用组件" aria-hidden="true">#</a> 局部引用组件</h3>
<p>在<strong>页面的 .json 配置文件</strong>中引用组件的方式，叫做 <strong>“局部引用”</strong>
<img src="@source/.vuepress/public/images/jb1.png" alt="图片"></p>
<p><img src="@source/.vuepress/public/images/jb2.png" alt="图片"></p>
<h3 id="全局引用组件" tabindex="-1"><a class="header-anchor" href="#全局引用组件" aria-hidden="true">#</a> 全局引用组件</h3>
<p>在 <strong>app.json 全局配置文件</strong> 中引用组件的方式，叫做 <strong>“全局引用”</strong></p>
<p><img src="@source/.vuepress/public/images/jb3.png" alt="图片"></p>
<h2 id="组件和页面的区别" tabindex="-1"><a class="header-anchor" href="#组件和页面的区别" aria-hidden="true">#</a> 组件和页面的区别</h2>
<p>从表面来看，组件和页面都是由 .js、.json、.wxml 和 .wxss 这四个文件组成的。但是，组件和页面的 .js 与
.json 文件有明显的不同：</p>
<ul>
<li>组件的 .json 文件中需要声明 <strong>&quot;component&quot;: true 属性</strong></li>
<li>组件的 .js 文件中调用的是 <strong>Component() 函数</strong></li>
<li>组件的事件处理函数需要定义到 <strong>methods 节点</strong> 中</li>
</ul>
<h2 id="样式" tabindex="-1"><a class="header-anchor" href="#样式" aria-hidden="true">#</a> 样式</h2>
<h3 id="组件样式隔离" tabindex="-1"><a class="header-anchor" href="#组件样式隔离" aria-hidden="true">#</a> 组件样式隔离</h3>
<p>样式被隔离, 不会相互影响</p>
<h3 id="组件样式注意点" tabindex="-1"><a class="header-anchor" href="#组件样式注意点" aria-hidden="true">#</a> 组件样式注意点</h3>
<ul>
<li>app.wxss 中的全局样式对组件无效</li>
<li>只有 <strong>class 选择器会有样式隔离效果</strong>，id 选择器、属性选择器、标签选择器不受样式隔离的影响</li>
</ul>
<p><strong>注意: !!!!!!!!!</strong>
<em>在组件和引用组件的页面中建议使用 class 选择器，不要使用 id、属性、标签选择器！</em></p>
<h3 id="修改组件的样式隔离选项" tabindex="-1"><a class="header-anchor" href="#修改组件的样式隔离选项" aria-hidden="true">#</a> 修改组件的样式隔离选项</h3>
<p>默认情况下，自定义组件的样式隔离特性能够防止组件内外样式互相干扰的问题。但有时，我们希望在外界能
够控制组件内部的样式，此时，可以通过 <strong>styleIsolation</strong> 修改组件的样式隔离选项</p>
<p><img src="@source/.vuepress/public/images/jb4.png" alt="图片"></p>
<h3 id="styleisolation-可选值" tabindex="-1"><a class="header-anchor" href="#styleisolation-可选值" aria-hidden="true">#</a> styleIsolation 可选值</h3>
<p><img src="@source/.vuepress/public/images/jb5.png" alt="图片"></p>
<h2 id="数据-方法-属性" tabindex="-1"><a class="header-anchor" href="#数据-方法-属性" aria-hidden="true">#</a> 数据, 方法, 属性</h2>
<h3 id="data-数据" tabindex="-1"><a class="header-anchor" href="#data-数据" aria-hidden="true">#</a> data 数据</h3>
<p>用于组件模板渲染的私有数据，需要定义到 data 节点</p>
<h3 id="methods-方法" tabindex="-1"><a class="header-anchor" href="#methods-方法" aria-hidden="true">#</a> methods 方法</h3>
<p>在小程序组件中，<strong>事件处理函数</strong>和<strong>自定义方法</strong>需要定义到 methods 节点中，</p>
<p><img src="@source/.vuepress/public/images/zidingyi1.png" alt="图片"></p>
<h3 id="properties-属性" tabindex="-1"><a class="header-anchor" href="#properties-属性" aria-hidden="true">#</a> properties 属性</h3>
<p>小程序组件中，properties 是组件的对外属性，<strong>用来接收外界传递到组件中的数据</strong>
<img src="@source/.vuepress/public/images/properties1.png" alt="图片"></p>
<h4 id="小案例" tabindex="-1"><a class="header-anchor" href="#小案例" aria-hidden="true">#</a> 小案例</h4>
<p>实现 count 不能比 max 值 大 , 做一下简单的判断
<img src="@source/.vuepress/public/images/properties2.png" alt="图片"></p>
<h3 id="data-和-properties-的区别" tabindex="-1"><a class="header-anchor" href="#data-和-properties-的区别" aria-hidden="true">#</a> data 和 properties 的区别</h3>
<p>在小程序的组件中，properties 属性和 data 数据的用法相同，它们<strong>都是可读可写的</strong>，(跟 Vue 不一样)只不过：</p>
<ul>
<li>data 更倾向于存储组件的私有数据</li>
<li>properties 更倾向于存储外界传递到组件中的数据</li>
</ul>
<p><img src="@source/.vuepress/public/images/dp1.png" alt="图片"></p>
<p>证明 data和 properties <strong>本质上是一样</strong>的 , 都是<strong>可读可写</strong></p>
<h3 id="使用-setdata-修改-properties" tabindex="-1"><a class="header-anchor" href="#使用-setdata-修改-properties" aria-hidden="true">#</a> 使用 setData 修改 properties</h3>
<p>由于<strong>data 数据</strong> 和 <strong>properties 属性</strong> 在本质上没有任何区别，因此 properties 属性的值也可以用于<strong>页面渲染</strong>，
或使用 setData 为 properties 中的属性重新赋值</p>
<h2 id="数据监听器" tabindex="-1"><a class="header-anchor" href="#数据监听器" aria-hidden="true">#</a> 数据监听器</h2>
<p>数据监听器用于监听和响应任何属性和数据字段的变化，从而执行特定的操作。它的作用类似于 vue 中的
watch 侦听器
<img src="@source/.vuepress/public/images/obs.png" alt="图片"></p>
<h3 id="数据监听器基本用法" tabindex="-1"><a class="header-anchor" href="#数据监听器基本用法" aria-hidden="true">#</a> 数据监听器基本用法</h3>
<p><img src="@source/.vuepress/public/images/obs0.png" alt="图片">
<img src="@source/.vuepress/public/images/obs1.png" alt="图片"></p>
<h3 id="监听对象属性变化" tabindex="-1"><a class="header-anchor" href="#监听对象属性变化" aria-hidden="true">#</a> 监听对象属性变化</h3>
<p>数据监听器支持监听<em>对象</em>中<strong>单个</strong>或<strong>多个属性</strong>的变化，
<img src="@source/.vuepress/public/images/obs3.png" alt="图片"></p>
<p>如果某个对象中需要被监听的属性太多，为了方便，可以使用<strong>通配符</strong> <code>**</code> 来监听对象中所有属性的变化
<img src="@source/.vuepress/public/images/obs5.png" alt="图片"></p>
<h2 id="纯数据字段" tabindex="-1"><a class="header-anchor" href="#纯数据字段" aria-hidden="true">#</a> 纯数据字段</h2>
<p>概念：纯数据字段指的是那些<strong>不用于界面渲染的 data 字段</strong></p>
<p>应用场景：例如有些情况下，某些 data 中的字段<strong>既不会展示在界面上，也不会传递给其他组件</strong>，仅仅在当前
组件内部使用。带有这种特性的 data 字段适合被设置为纯数据字段</p>
<p>好处：纯数据字段<strong>有助于提升页面更新的性能</strong></p>
<h3 id="使用规则" tabindex="-1"><a class="header-anchor" href="#使用规则" aria-hidden="true">#</a> 使用规则</h3>
<p>在 Component 构造器的 <strong>options 节点</strong>中，<strong>指定 pureDataPattern 为一个正则表达</strong>式，字段名符合这个正则
表达式的字段将成为纯数据字段</p>
<p><img src="@source/.vuepress/public/images/puredata1.png" alt="图片"></p>
<ol start="3">
<li>使用纯数据字段改造数据监听器
<img src="@source/.vuepress/public/images/puredata2.png" alt="图片"></li>
</ol>
</template>
