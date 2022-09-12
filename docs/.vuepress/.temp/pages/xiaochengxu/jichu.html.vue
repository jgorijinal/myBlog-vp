<template><h1 id="模板语法" tabindex="-1"><a class="header-anchor" href="#模板语法" aria-hidden="true">#</a> 模板语法</h1>
<h2 id="数据绑定" tabindex="-1"><a class="header-anchor" href="#数据绑定" aria-hidden="true">#</a> 数据绑定</h2>
<p>页面解构:</p>
<p><img src="@source/.vuepress/public/images/bdbd1.png" alt="图片"></p>
<p>页面数据:</p>
<p><img src="@source/.vuepress/public/images/bdbd2.png" alt="图片"></p>
<h2 id="事件绑定" tabindex="-1"><a class="header-anchor" href="#事件绑定" aria-hidden="true">#</a> 事件绑定</h2>
<p>事件是<strong>渲染层到逻辑层的通讯方式</strong>。通过事件可以将用户在渲染层产生的行为，反馈到逻辑层进行业务的处理</p>
<p><img src="@source/.vuepress/public/images/jiji1.png" alt="图片"></p>
<h3 id="常用的事件" tabindex="-1"><a class="header-anchor" href="#常用的事件" aria-hidden="true">#</a> 常用的事件</h3>
<p><img src="@source/.vuepress/public/images/jiji2.png" alt="图片"></p>
<h3 id="事件对象的属性列表" tabindex="-1"><a class="header-anchor" href="#事件对象的属性列表" aria-hidden="true">#</a> 事件对象的属性列表</h3>
<p><img src="@source/.vuepress/public/images/jiji3.png" alt="图片"></p>
<h3 id="target-和-currenttarget-区别" tabindex="-1"><a class="header-anchor" href="#target-和-currenttarget-区别" aria-hidden="true">#</a> target 和 currentTarget 区别</h3>
<p><strong>target</strong> 是<strong>触发该事件的源头组件</strong>，而 <strong>currentTarget</strong> 则是<strong>当前事件所绑定的组件</strong>。举例如下：</p>
<p><img src="@source/.vuepress/public/images/target1.png" alt="图片"></p>
<p>点击内部的按钮时，点击事件以 <strong>冒泡</strong> 的方式向外扩散，也会触发外层 view 的 tap 事件处理函数</p>
<p>此时，对于外层的 view 来说：</p>
<ul>
<li>e.target 指向的是触发事件的源头组件，因此，<strong>e.target 是内部的按钮组件</strong></li>
<li>e.currentTarget 指向的是当前正在触发事件的那个组件，因此，<strong>e.currentTarget 是当前的 view 组件</strong></li>
</ul>
<h3 id="bindtap-的语法格式" tabindex="-1"><a class="header-anchor" href="#bindtap-的语法格式" aria-hidden="true">#</a> bindtap 的语法格式</h3>
<p>在小程序中，不存在 HTML 中的 onclick 鼠标点击事件，而是通过 <strong>tap 事件</strong> 来响应用户的触摸行为。</p>
<ol>
<li>通过 <code>bindtap</code> ，可以为组件绑定 tap 触摸事件，语法如下：
<img src="@source/.vuepress/public/images/btnh1.png" alt="图片"></li>
<li>在页面的 .js 文件中定义对应的事件处理函数，事件参数通过形参 <strong>event</strong>（一般简写成 e） 来接收：
<img src="@source/.vuepress/public/images/btnh2.png" alt="图片">
<img src="@source/.vuepress/public/images/btnh3.png" alt="图片"></li>
</ol>
<h3 id="在事件处理函数中为-data-中的数据赋值" tabindex="-1"><a class="header-anchor" href="#在事件处理函数中为-data-中的数据赋值" aria-hidden="true">#</a> 在事件处理函数中为 data 中的数据赋值</h3>
<p>通过调用 <strong>this.setData(dataObject)</strong> 方法，可以给页面 data 中的数据重新赋值，示例如下
<img src="@source/.vuepress/public/images/changecount.png" alt="图片"></p>
<h3 id="事件传参-data" tabindex="-1"><a class="header-anchor" href="#事件传参-data" aria-hidden="true">#</a> 事件传参  data-*</h3>
<p>小程序中的事件传参比较特殊，<strong>不能在绑定事件的同时为事件处理函数传递参数</strong></p>
<p>因为小程序会把 bindtap 的属性值，统一当作事件名称来处理，相当于要调用一个名称为 btnHandler(123)
的事件处理函数</p>
<p>正确做法是 可以为组件提供 <strong><code>data-*</code></strong> 自定义属性传参，其中 * 代表的是参数的名字，示例代码如下：
<img src="@source/.vuepress/public/images/chuancan1.png" alt="图片">
<img src="@source/.vuepress/public/images/chuancan2.png" alt="图片"></p>
<h3 id="bindinput-语法格式" tabindex="-1"><a class="header-anchor" href="#bindinput-语法格式" aria-hidden="true">#</a> bindinput 语法格式</h3>
<p>在小程序中，通过 <strong>input 事件</strong> 来响应文本框的输入事件，语法格式如下：</p>
<ol>
<li>通过 bindinput，可以为文本框绑定输入事件：
<img src="@source/.vuepress/public/images/bibi1.png" alt="图片"></li>
<li>在页面的 .js 文件中定义事件处理函数
<img src="@source/.vuepress/public/images/bibi2.png" alt="图片"></li>
</ol>
<h3 id="实现文本框和-data-之间的数据同步" tabindex="-1"><a class="header-anchor" href="#实现文本框和-data-之间的数据同步" aria-hidden="true">#</a> 实现文本框和 data 之间的数据同步</h3>
<p>结构 :</p>
<p><img src="@source/.vuepress/public/images/inputvalue1.png" alt="图片"></p>
<p>事假处理:</p>
<p><img src="@source/.vuepress/public/images/inputvalue2.png" alt="图片"></p>
<h2 id="条件渲染" tabindex="-1"><a class="header-anchor" href="#条件渲染" aria-hidden="true">#</a> 条件渲染</h2>
<h3 id="wx-if-wx-elif-wx-else" tabindex="-1"><a class="header-anchor" href="#wx-if-wx-elif-wx-else" aria-hidden="true">#</a> wx:if wx:elif wx:else</h3>
<p><strong>wx:if , ws:elif, wx:else</strong> 来判断</p>
<p><img src="@source/.vuepress/public/images/elif.png" alt="图片">
<img src="@source/.vuepress/public/images/elif2.png" alt="图片"></p>
<h3 id="结合-block-使用-wx-if" tabindex="-1"><a class="header-anchor" href="#结合-block-使用-wx-if" aria-hidden="true">#</a> 结合 <code>&lt;block&gt;</code> 使用 wx:if</h3>
<p>如果要一次性控制多个组件的展示与隐藏，可以使用一个 <code>&lt;block&gt;&lt;/block&gt;</code>标签将多个组件包装起来，并在
<code>&lt;block&gt;</code> 标签上使用 wx:if 控制属性，示例如下：</p>
<p>相当于 Vue 中的 template 标签</p>
<p>注意： <code>&lt;block&gt;</code> 并不是一个组件，它只是一个包裹性质的容器，不会在页面中做任何渲染。</p>
<h3 id="hidden" tabindex="-1"><a class="header-anchor" href="#hidden" aria-hidden="true">#</a> hidden</h3>
<p>在小程序中，直接使用 hidden=&quot;{{ condition }}&quot; 也能控制元素的显示与隐藏</p>
<h3 id="wx-if-与-hidden-的对比" tabindex="-1"><a class="header-anchor" href="#wx-if-与-hidden-的对比" aria-hidden="true">#</a> wx:if 与 hidden 的对比</h3>
<ol>
<li>运行方式不同</li>
</ol>
<ul>
<li>wx:if 以 <strong>动态创建和移除元素</strong> 的方式，控制元素的展示与隐藏</li>
<li>hidden 以 <strong>切换样式</strong> 的方式（display: none/block;），控制元素的显示与隐藏</li>
</ul>
<ol start="2">
<li>使用建议</li>
</ol>
<ul>
<li>频繁切换 时，建议使用 hidden</li>
<li>控制条件复杂 时，建议使用 wx:if 搭配 wx:elif、wx:else 进行展示与隐藏的切换</li>
</ul>
<h2 id="列表渲染" tabindex="-1"><a class="header-anchor" href="#列表渲染" aria-hidden="true">#</a> 列表渲染</h2>
<h3 id="wx-for-index-item-和-wx-key-的-使用" tabindex="-1"><a class="header-anchor" href="#wx-for-index-item-和-wx-key-的-使用" aria-hidden="true">#</a> wx:for , index , item 和 wx:key 的 使用</h3>
<p>默认情况下，当前循环项的索引用 index 表示；当前循环项用 item 表示。</p>
<p><img src="@source/.vuepress/public/images/forkey.png" alt="图片"></p>
<p>类似于 Vue 列表渲染中的 <strong>:key</strong>，小程序在实现列表渲染时，也建议为渲染出来的列表项指定唯一的 key 值，
从而提高渲染的效率</p>
<h3 id="手动指定索引和当前项的变量名-了解一下" tabindex="-1"><a class="header-anchor" href="#手动指定索引和当前项的变量名-了解一下" aria-hidden="true">#</a> 手动指定索引和当前项的变量名 (了解一下)</h3>
<ul>
<li>使用 <strong>wx:for-index</strong> 可以指定当前循环项的索引的变量名</li>
<li>使用 <strong>wx:for-item</strong> 可以指定当前项的变量名</li>
</ul>
<p><img src="@source/.vuepress/public/images/idx1.png" alt="图片"></p>
</template>
