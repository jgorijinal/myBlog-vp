<template><h1 id="vue中的生命周期" tabindex="-1"><a class="header-anchor" href="#vue中的生命周期" aria-hidden="true">#</a> Vue中的生命周期</h1>
<h2 id="一-生命周期有哪些" tabindex="-1"><a class="header-anchor" href="#一-生命周期有哪些" aria-hidden="true">#</a> 一 . 生命周期有哪些</h2>
<p>Vue生命周期总共可以分为8个阶段：
<code>beforeCreate</code> , <code>created</code> , <code>beforeMount</code> , <code>mounted</code> , <code>beforeUpdate</code> , <code>updated</code> , <code>beforeDestroy</code> , <code>destroyed</code>
以及一些特殊场景的生命周期<code>activated</code> , <code>deactivated</code></p>
<table>
<thead>
<tr>
<th>生命周期</th>
<th style="text-align:center">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>beforeCreate</td>
<td style="text-align:center">组件实例被创建之初</td>
</tr>
<tr>
<td>created</td>
<td style="text-align:center">组件实例已经完全创建</td>
</tr>
<tr>
<td>beforeMount</td>
<td style="text-align:center">组件挂载之前</td>
</tr>
<tr>
<td>mounted</td>
<td style="text-align:center">组件挂载到实例上去之后</td>
</tr>
<tr>
<td>beforeUpdate</td>
<td style="text-align:center">组件数据发生变化，更新之前</td>
</tr>
<tr>
<td>updated</td>
<td style="text-align:center">组件数据更新之后</td>
</tr>
<tr>
<td>beforeDestroy</td>
<td style="text-align:center">组件实例销毁之前</td>
</tr>
<tr>
<td>destroyed</td>
<td style="text-align:center">组件实例销毁之后</td>
</tr>
<tr>
<td>activated</td>
<td style="text-align:center">keep-alive 缓存的组件激活时</td>
</tr>
<tr>
<td>deactivated</td>
<td style="text-align:center">keep-alive 缓存的组件停用时调用</td>
</tr>
</tbody>
</table>
<h2 id="二-生命周期具体分析" tabindex="-1"><a class="header-anchor" href="#二-生命周期具体分析" aria-hidden="true">#</a> 二 . 生命周期具体分析</h2>
<p><strong>beforeCreate -&gt; created</strong></p>
<ul>
<li>初始化<code>vue</code>实例，进行数据观测</li>
</ul>
<p><strong>created</strong></p>
<ul>
<li>完成数据观测，属性与方法的运算，<code>watch</code>、<code>event</code>事件回调的配置</li>
<li>可调用<code>methods</code>中的方法，访问和修改<code>data</code>数据触发响应式渲染<code>dom</code>，可通过<code>computed</code>和<code>watch</code>完成数据计算</li>
<li>此时<code>vm.$el</code> 并没有被创建</li>
</ul>
<p><strong>created -&gt; beforeMount</strong></p>
<ul>
<li>判断是否存在<code>el</code>选项，若不存在则停止编译，直到调用<code>vm.$mount(el)</code>才会继续编译</li>
<li><code>vm.el</code>获取到的是挂载<code>DOM</code>的</li>
</ul>
<p><strong>beforeMount</strong></p>
<ul>
<li>在此阶段可获取到<code>vm.el</code></li>
<li>此阶段<code>vm.el</code>虽已完成<code>DOM</code>初始化，但并未挂载在<code>el</code>选项上</li>
</ul>
<p><strong>beforeMount -&gt; mounted</strong></p>
<ul>
<li><strong>此阶段<code>vm.el</code>完成挂载</strong>，<code>vm.$el</code>生成的<code>DOM</code>替换了<code>el</code>选项所对应的DOM</li>
</ul>
<p><strong>mounted</strong></p>
<ul>
<li><code>vm.el</code>已完成<code>DOM</code>的挂载与渲染，此刻打印<code>vm.$el</code>，发现之前的挂载点及内容已被替换成新的<code>DOM</code></li>
<li><strong>注意 <code>mounted</code> <strong>不会</strong>保证所有的子组件也都被挂载完成。如果希望等到整个视图都渲染完毕再执行某些操作，可以在 <code>mounted</code> 内部使用 <code>vm.$nextTick</code></strong></li>
<li><strong>数据请求</strong>可以在<code>mounted</code>钩子做</li>
</ul>
<p><strong>beforeUpdate</strong></p>
<ul>
<li>此时<code>view</code>层还未更新</li>
<li>若在<code>beforeUpdate</code>中再次修改数据，不会再次触发更新方法</li>
</ul>
<p><strong>updated</strong></p>
<ul>
<li>完成<code>view</code>层的更新</li>
<li>若在<code>updated</code>中再次修改数据，会再次触发更新方法（<code>beforeUpdate</code>、<code>updated</code>）</li>
</ul>
<p><strong>beforeDestroy</strong></p>
<ul>
<li>实例被销毁前调用，此时实例属性与方法仍可访问</li>
</ul>
<p><strong>destroyed</strong></p>
<ul>
<li>完全销毁一个实例。可清理它与其它实例的连接，解绑它的全部指令及事件监听器</li>
<li>并不能清除<code>DOM</code>，仅仅销毁实例</li>
</ul>
<p><strong>使用场景分析</strong></p>
<table>
<thead>
<tr>
<th>生命周期</th>
<th style="text-align:center">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>beforeCreate</td>
<td style="text-align:center">执行时组件实例还<strong>未创建</strong>，通常用于插件开发中执行一些<strong>初始化任务</strong></td>
</tr>
<tr>
<td>created</td>
<td style="text-align:center">组件<strong>初始化完毕</strong>，各种数据可以使用</td>
</tr>
<tr>
<td>beforeMount</td>
<td style="text-align:center">未执行渲染、更新，<strong>dom未创建</strong></td>
</tr>
<tr>
<td>mounted</td>
<td style="text-align:center">初始化结束，<strong>dom已创建</strong>，可用于<strong>获取访问数据和dom元素</strong></td>
</tr>
<tr>
<td>beforeUpdate</td>
<td style="text-align:center"><strong>更新前</strong>，可用于获取更新前各种状态</td>
</tr>
<tr>
<td>updated</td>
<td style="text-align:center"><strong>更新后</strong>，所有状态已是最新</td>
</tr>
<tr>
<td>beforeDestroy</td>
<td style="text-align:center">销毁前，可用于一些定时器或订阅的<strong>取消</strong></td>
</tr>
<tr>
<td>destroyed</td>
<td style="text-align:center">组件<strong>已销毁</strong>，作用同上</td>
</tr>
</tbody>
</table>
</template>
