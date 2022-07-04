<template><h1 id="模块化开发" tabindex="-1"><a class="header-anchor" href="#模块化开发" aria-hidden="true">#</a> 模块化开发</h1>
<p>TypeScript支持两种方式来控制我们的作用域：</p>
<ul>
<li>模块化：每个文件可以是一个独立的模块，支持ES Module，也支持CommonJS；</li>
<li>命名空间：通过 namespace 来声明一个命名空间</li>
</ul>
<h2 id="命名空间-namespace" tabindex="-1"><a class="header-anchor" href="#命名空间-namespace" aria-hidden="true">#</a> 命名空间 namespace</h2>
<p>命名空间在TypeScript早期时，称之为内部模块，主要目的是将一个模块内部再进行作用域的划分，防止一些命名
冲突的问题</p>
<p><img src="@source/.vuepress/public/images/ns.png" alt="图片"></p>
<h2 id="外部定义类型声明和自定义声明" tabindex="-1"><a class="header-anchor" href="#外部定义类型声明和自定义声明" aria-hidden="true">#</a> 外部定义类型声明和自定义声明</h2>
<p>外部类型声明通常是我们使用一些库（比如第三方库）时，需要的一些类型声明。
这些库通常有两种类型声明方式：</p>
<ul>
<li>方式一：在自己库中进行类型声明（编写.d.ts文件），比如axios</li>
<li>方式二：通过社区的一个公有库DefinitelyTyped存放类型声明文件
<ul>
<li>库的GitHub地址：<a href="https://github.com/DefinitelyTyped/DefinitelyTyped/" target="_blank" rel="noopener noreferrer">库<ExternalLinkIcon/></a></li>
<li>库查找声明安装方式的地址：<a href="https://www.typescriptlang.org/dt/search?search=" target="_blank" rel="noopener noreferrer">搜索<ExternalLinkIcon/></a></li>
<li>比如我们安装react的类型声明： npm i @types/react --save-dev</li>
</ul>
</li>
</ul>
<h2 id="声明变量-函数-类" tabindex="-1"><a class="header-anchor" href="#声明变量-函数-类" aria-hidden="true">#</a> 声明变量 , 函数 ,类</h2>
<p><img src="@source/.vuepress/public/images/def.png" alt="图片"></p>
<h2 id="声明模块" tabindex="-1"><a class="header-anchor" href="#声明模块" aria-hidden="true">#</a> 声明模块</h2>
<p>也可以声明模块，比如lodash模块默认不能使用的情况，可以自己来声明这个模块：
<img src="@source/.vuepress/public/images/dec.png" alt="图片"></p>
<ul>
<li>声明模块的语法: declare module '模块名' {}。</li>
<li>在声明模块的内部，我们可以通过 export 导出对应库的类、函数等</li>
</ul>
<h2 id="declare文件" tabindex="-1"><a class="header-anchor" href="#declare文件" aria-hidden="true">#</a> declare文件</h2>
<p>在某些情况下，我们也可以声明文件：</p>
<ul>
<li>比如在开发vue的过程中，默认是不识别我们的.vue文件的，那么我们就需要对其进行文件的声明；</li>
<li>比如在开发中我们使用了 jpg 这类图片文件，默认typescript也是不支持的，也需要对其进行声明；</li>
</ul>
<p><img src="@source/.vuepress/public/images/ddd.png" alt="图片"></p>
<h2 id="declare命名空间" tabindex="-1"><a class="header-anchor" href="#declare命名空间" aria-hidden="true">#</a> declare命名空间</h2>
<ul>
<li>比如我们在index.html中直接引入了jQuery：</li>
</ul>
<p>CDN地址： https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.js</p>
<ul>
<li>我们可以进行命名空间的声明：</li>
</ul>
<p><img src="@source/.vuepress/public/images/x1.png" alt="图片"></p>
<ul>
<li>在main.ts中就可以使用了</li>
</ul>
<p><img src="@source/.vuepress/public/images/x2.png" alt="图片"></p>
</template>
