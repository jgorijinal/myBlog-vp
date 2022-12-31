<template><h1 id="js的运行原理" tabindex="-1"><a class="header-anchor" href="#js的运行原理" aria-hidden="true">#</a> js的运行原理</h1>
<h2 id="初始化全局对象-go" tabindex="-1"><a class="header-anchor" href="#初始化全局对象-go" aria-hidden="true">#</a> 初始化全局对象 GO</h2>
<p>js引擎在<strong>执行代码之前</strong>, <strong>会在堆内存里面创建一个全局对象 <code>(Global Object - GO)</code></strong></p>
<ul>
<li>该对象在所有作用域(scope)都能访问</li>
<li>里面包含 <code>Date, Array , String, Number, setTimeout, setInterval</code> 等等</li>
<li>其中还有 window 属性指向自己</li>
</ul>
<p><img src="@source/.vuepress/public/images/go1.png" alt="图片"></p>
<h2 id="执行上下文-execution-contexts-ec" tabindex="-1"><a class="header-anchor" href="#执行上下文-execution-contexts-ec" aria-hidden="true">#</a> 执行上下文（ Execution Contexts - EC）</h2>
<p>js引擎内部有一个<strong>执行上下文栈</strong><code>（Execution Context Stack，简称ECS）</code>，它是用于<strong>执行代码的调用栈</strong></p>
<p>那么一开始会执行谁呢? 执行的是 <strong>全局的代码块</strong></p>
<ul>
<li>全局代码块为了执行会创建一个 <strong>全局执行上下文</strong><code>(Global Execution Context)</code></li>
<li>全局执行上下文(GEC) 会放入到  执行上下文(ECS)里面</li>
</ul>
<p><code>GEC</code> 被放入到 <code>ECS</code> 里面包含两个内容:</p>
<ol>
<li>第一部分 : 在代码执行前, 在 parser 转成 AST 的过程中,  会将全局定义的变量.函数等加入到 <code>Global Object(GO)</code> 里, <strong>但是并不会赋值</strong></li>
</ol>
<p>这个过程也称之为 <strong>变量提升</strong>
2. 第二部分 ：在代码执行中，对变量赋值，或者执行其他的函数；</p>
<h2 id="认识-vo-对象-variable-object" tabindex="-1"><a class="header-anchor" href="#认识-vo-对象-variable-object" aria-hidden="true">#</a> 认识 VO 对象（Variable Object）</h2>
<p><strong>每一个执行上下文都会关联一个 <code>VO (Variable Object)</code></strong>, <strong>变量和函数声明</strong>都会添加到这个VO对象上</p>
<p><strong>当全局代码被执行的时候，<code>VO</code> 就是 <code>GO</code>对象了</strong></p>
<h3 id="全局代码执行前" tabindex="-1"><a class="header-anchor" href="#全局代码执行前" aria-hidden="true">#</a> 全局代码执行前</h3>
<p><img src="@source/.vuepress/public/images/go2.png" alt="图片"></p>
<h3 id="全局代码执行后" tabindex="-1"><a class="header-anchor" href="#全局代码执行后" aria-hidden="true">#</a> 全局代码执行后</h3>
<p><img src="@source/.vuepress/public/images/go3.png" alt="图片"></p>
<h2 id="函数如何被执行呢" tabindex="-1"><a class="header-anchor" href="#函数如何被执行呢" aria-hidden="true">#</a> 函数如何被执行呢？</h2>
<p>在执行的过程中执行到一个<strong>函数</strong>时，就会根据函数体创建一个<strong>函数执行上下文</strong><code>（Functional Execution Context，简称FEC）</code>，
并且压入到 <code>EC Stack</code> 执行上下文栈中</p>
<p>因为每个执行上下文都会关联一个<code>VO</code>，那么函数执行上下文关联的<code>VO</code>是什么呢？</p>
<ul>
<li>当进入一个函数执行上下文时，会创建一个 <code>AO</code> 对象<code>（Activation Object）</code>；</li>
<li>这个 AO 对象会使用 <strong>arguments 作为初始化</strong>，并且初始值是传入的参数；</li>
<li><strong>这个 AO 对象会作为执行上下文的 VO 来存放变量的初始化</strong>；</li>
</ul>
<h3 id="函数执行前" tabindex="-1"><a class="header-anchor" href="#函数执行前" aria-hidden="true">#</a> 函数执行前</h3>
<p><img src="@source/.vuepress/public/images/ao1.png" alt="图片"></p>
<h2 id="作用域提升面试题" tabindex="-1"><a class="header-anchor" href="#作用域提升面试题" aria-hidden="true">#</a> 作用域提升面试题</h2>
<p><img src="@source/.vuepress/public/images/ao2.png" alt="图片"></p>
</template>
