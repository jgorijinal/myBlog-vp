<template><h1 id="composition-api" tabindex="-1"><a class="header-anchor" href="#composition-api" aria-hidden="true">#</a> Composition API</h1>
<p><a href="https://staging-cn.vuejs.org/api/composition-api-setup.html#basic-usage" target="_blank" rel="noopener noreferrer">官网<ExternalLinkIcon/></a></p>
<h2 id="_1-为什么用-composition-api" tabindex="-1"><a class="header-anchor" href="#_1-为什么用-composition-api" aria-hidden="true">#</a> 1. 为什么⽤ Composition API</h2>
<p>Options API的弊端:</p>
<ul>
<li>Vue2中<strong>编写组件的方式是OPtions API</strong></li>
</ul>
<ol>
<li>OPtions API的最大的特点就是在<strong>对应的属性</strong>中编写<strong>对应的功能模块</strong></li>
<li>比如<strong>data定义数据</strong>, <strong>methods中定义方法</strong>, <strong>computed中定义计算属性</strong>, <strong>watch中监听属性的改变</strong>, 也包括<strong>生命钩子函数</strong></li>
</ol>
<ul>
<li>但这种代码有一个很大的弊端</li>
</ul>
<ol>
<li>当我们<strong>实现某一个功能时</strong>, 这个功能<strong>对应的代码逻辑</strong>会被<strong>拆分到各个属性</strong>中</li>
<li>当组件<strong>变得更大、更复杂时</strong>, <strong>逻辑关注点的列表</strong>就会增长, 那么同一个功能的逻辑就会被拆分地很分散, 这些代码难以阅读和理解</li>
</ol>
<!-- 
- 所有逻辑放⼊`setup`函数,第⼀个参数是 `props` 对象
- 通过 `ref` 、`reactive` 、`toRef`来创建响应式数据
- 视图要⽤的变量为 setup 函数返回到对象属性
- `watch`、`computed`是个函数
- ⽣命周期钩⼦写法微调,xyz 变成 OnXyz,如 `mounted` 变成 `onMounted`。`created`和 `beforeCreate`不再需要 -->
</template>
