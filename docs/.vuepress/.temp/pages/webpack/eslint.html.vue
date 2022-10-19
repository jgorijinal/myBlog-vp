<template><h1 id="eslint" tabindex="-1"><a class="header-anchor" href="#eslint" aria-hidden="true">#</a> ESLint</h1>
<p>什么是ESLint呢？</p>
<ul>
<li>ESLint是一个静态代码分析工具（Static program analysis，在没有任何程序执行的情况下，对代码进行分析）；</li>
<li>ESLint可以帮助我们在项目中建立统一的团队代码规范，保持正确、统一的代码风格，提高代码的可读性、可维护
性；</li>
<li>并且ESLint的规则是可配置的，我们可以自定义属于自己的规则；</li>
<li>早期还有一些其他的工具，比如JSLint、JSHint、JSCS等，目前使用最多的是ESLint</li>
</ul>
<h2 id="使用-eslint" tabindex="-1"><a class="header-anchor" href="#使用-eslint" aria-hidden="true">#</a> 使用 ESLint</h2>
<p>首先我们需要安装 ESLint：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> eslint -D
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul>
<li>创建 ESLint 的<strong>配置文件</strong>：</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>npx eslint --init
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul>
<li>选择想要使用的ESLint：
<img src="@source/.vuepress/public/images/elel1.png" alt="图片"></li>
<li>执行检测命令：</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>npx eslint ./src/main.js
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="eslint-的文件解析" tabindex="-1"><a class="header-anchor" href="#eslint-的文件解析" aria-hidden="true">#</a> ESLint 的文件解析</h2>
<p>默认创建的环境如下：</p>
<ul>
<li>env：运行的环境，比如是浏览器，并且我们会使用es2021（对应的ecmaVersion是12）的语法；</li>
<li>extends：可以扩展当前的配置，让其继承自其他的配置信息，可以跟字符串或者数组（多个）；</li>
<li>parserOptions：这里可以指定ESMAScript的版本、sourceType的类型</li>
<li>parser：默认情况下是espree（也是一个JS Parser，用于ESLint），但是因为我们需要编译TypeScript，所以需要指定对应的解释器；</li>
<li>plugins：指定我们用到的插件；</li>
<li>rules：自定义的一些规则；</li>
</ul>
</template>
