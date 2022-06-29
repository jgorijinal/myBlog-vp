<template><h1 id="路由的原理" tabindex="-1"><a class="header-anchor" href="#路由的原理" aria-hidden="true">#</a> 路由的原理</h1>
<h2 id="url的-hash" tabindex="-1"><a class="header-anchor" href="#url的-hash" aria-hidden="true">#</a> URL的 hash</h2>
<ul>
<li>URL的hash也就是锚点(#), 本质上是改变 window.location 的 href 属性</li>
<li>可以通过直接赋值 location.hash 来改变 href, 但是页面不发生刷新
<img src="@source/.vuepress/public/images/location1.png" alt="图片">
<img src="@source/.vuepress/public/images/location2.png" alt="图片"></li>
<li>hash的优势就是兼容性更好, 在老板的IE中都可以运行 , 但缺点是有个 # , 显得不像是一个真是的路径</li>
</ul>
<h2 id="html5的-history" tabindex="-1"><a class="header-anchor" href="#html5的-history" aria-hidden="true">#</a> HTML5的 history</h2>
<p>history 接口是HTML5新增的, 他有六种模式改变URL而不刷新页面</p>
<ul>
<li>replaceState : 替换原来的路径</li>
<li>pushState : 使用新的路径</li>
<li>popState : 路径的回退</li>
<li>go : 向前或向后改变路径</li>
<li>forward : 向前改变路径</li>
<li>back : 向后改变路径</li>
</ul>
<p><img src="@source/.vuepress/public/images/history1.png" alt="图片">
<img src="@source/.vuepress/public/images/history2.png" alt="图片"></p>
</template>
