<template><h1 id="vue-插件" tabindex="-1"><a class="header-anchor" href="#vue-插件" aria-hidden="true">#</a> Vue 插件</h1>
<p><img src="@source/.vuepress/public/images/chajian.png" alt="图片"></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>plugins
|-- plugins_obj.js
|-- plugins_fn.js
...
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>main.js</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>app.use(xxx)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul>
<li>
<ol>
<li><strong>对象类型: 必须包含 install 方法</strong></li>
</ol>
</li>
</ul>
<p><img src="@source/.vuepress/public/images/plugin1.png" alt="图片"></p>
<p><strong>直接 this.$xxx 拿到</strong> 或者 在setup函数里<br>
<img src="@source/.vuepress/public/images/品.png" alt="图片"></p>
<ul>
<li>
<ol start="2">
<li><strong>函数类型</strong></li>
</ol>
</li>
</ul>
<p><img src="@source/.vuepress/public/images/pf.png" alt="图片"></p>
</template>
