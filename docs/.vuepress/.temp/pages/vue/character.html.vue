<template><h1 id="vue和react对比" tabindex="-1"><a class="header-anchor" href="#vue和react对比" aria-hidden="true">#</a> Vue和React对比</h1>
<h2 id="相同点" tabindex="-1"><a class="header-anchor" href="#相同点" aria-hidden="true">#</a> 相同点</h2>
<ul>
<li>都有组件化思想</li>
<li>都支持服务器端渲染</li>
<li>都有Virtual DOM（虚拟dom）</li>
<li>数据驱动视图</li>
</ul>
<h2 id="区别" tabindex="-1"><a class="header-anchor" href="#区别" aria-hidden="true">#</a> 区别</h2>
<ul>
<li>数据流向的不同。<code>react</code>从诞生开始就推崇<strong>单向数据流</strong>，而<code>Vue</code>是双向数据流</li>
<li>模板的语法不同，React是通过<code>JSX</code>渲染模板。而Vue是通过一种拓展的<code>HTML</code>语法进行渲染，但其实这只是表面现象，毕竟React并不必须依赖<code>JSX</code></li>
<li>数据变化的实现原理不同。<code>react</code>使用的是不可变数据，而<code>Vue</code>使用的是可变的数据 。 这是因为Vue和React设计理念上的区别，Vue使用的是可变数据，而React更强调数据的不可变，两者没有好坏之分，Vue更加简单</li>
<li>组件化通信的不同。<code>react</code>中我们通过使用回调函数来进行通信的，而<code>Vue</code>中子组件向父组件传递消息有两种方式：事件和回调函数</li>
<li>diff算法不同。<code>react</code>主要使用diff队列保存需要更新哪些DOM，得到patch树，再统一操作批量更新DOM。<code>Vue</code>使用双向指针，边对比，边更新DOM</li>
</ul>
</template>
