<template><h1 id="页面导航" tabindex="-1"><a class="header-anchor" href="#页面导航" aria-hidden="true">#</a> 页面导航</h1>
<h2 id="页面导航两种方法" tabindex="-1"><a class="header-anchor" href="#页面导航两种方法" aria-hidden="true">#</a> 页面导航两种方法</h2>
<ol>
<li>声明式导航</li>
</ol>
<ul>
<li>在页面上声明一个 <code>&lt;navigator&gt;</code> 导航组件</li>
<li>通过点击 <code>&lt;navigator&gt;</code> 组件实现页面跳转</li>
</ul>
<ol start="2">
<li>编程式导航</li>
</ol>
<ul>
<li>调用小程序的导航 API，实现页面的跳转</li>
</ul>
<h2 id="声明式导航" tabindex="-1"><a class="header-anchor" href="#声明式导航" aria-hidden="true">#</a> 声明式导航</h2>
<h3 id="导航到-tabbar-页面" tabindex="-1"><a class="header-anchor" href="#导航到-tabbar-页面" aria-hidden="true">#</a> 导航到 tabBar 页面</h3>
<p>tabBar 页面指的是被配置为 tabBar 的页面</p>
<p>在使用 <code>&lt;navigator&gt;</code> 组件跳转到指定的 tabBar 页面时，需要指定 url 属性和 open-type 属性，其中：</p>
<ul>
<li><strong>url</strong> 表示要跳转的页面的地址，必须以 **/**开头</li>
<li><strong>open-type</strong> 表示跳转的方式，<strong>必须为 switchTab</strong></li>
</ul>
<p><img src="@source/.vuepress/public/images/navigator1.png" alt="图片"></p>
<h3 id="导航到-非-tanbar页面" tabindex="-1"><a class="header-anchor" href="#导航到-非-tanbar页面" aria-hidden="true">#</a> 导航到 非 tanBar页面</h3>
<p><strong>非 tabBar 页面</strong>指的是没有被配置为 tabBar 的页面。</p>
<p>在使用 <code>&lt;navigator&gt;</code> 组件跳转到普通的非 tabBar 页面时，则需要指定 <strong>url 属性和 open-type 属性</strong>，其中：</p>
<ul>
<li>url 表示要跳转的页面的地址，必须以 <code>/</code>开头</li>
<li>open-type 表示跳转的方式，<strong>必须为 navigate</strong></li>
</ul>
<p>示例代码如下：</p>
<p><img src="@source/.vuepress/public/images/navigator2.png" alt="图片"></p>
<p>注意：为了简便，在导航到非 tabBar 页面时，open-type=&quot;navigate&quot; 属性可以省略</p>
<h3 id="后退导航" tabindex="-1"><a class="header-anchor" href="#后退导航" aria-hidden="true">#</a> 后退导航</h3>
<p>如果要后退到上一页面或多级页面，则需要指定 open-type 属性 navigateBack和 <strong>delta 属性</strong>，其中：</p>
<ul>
<li>open-type 的值必须是 <strong>navigateBack</strong>，表示要进行后退导航</li>
<li>delta 的值必须是数字，表示要后退的层级</li>
</ul>
<p><img src="@source/.vuepress/public/images/navigator3.png" alt="图片"></p>
<p>注意：为了简便，如果只是后退到上一页面，<strong>则可以省略 delta 属性，因为其默认值就是 1</strong></p>
<h2 id="编程式导航" tabindex="-1"><a class="header-anchor" href="#编程式导航" aria-hidden="true">#</a> 编程式导航</h2>
<h3 id="导航到-tabbar-页面-1" tabindex="-1"><a class="header-anchor" href="#导航到-tabbar-页面-1" aria-hidden="true">#</a> 导航到 tabBar 页面</h3>
<p>调用 <strong>wx.switchTab(Object object) 方法</strong>，可以跳转到 tabBar 页面。其中 Object 参数对象的属性列表如下</p>
<p><img src="@source/.vuepress/public/images/navigator4.png" alt="图片"></p>
<p>实际代码如下:</p>
<p><img src="@source/.vuepress/public/images/bcs1.png" alt="图片"></p>
<h3 id="导航到-非-tabbar-页面" tabindex="-1"><a class="header-anchor" href="#导航到-非-tabbar-页面" aria-hidden="true">#</a> 导航到 非 tabBar 页面</h3>
<p>调用 <strong>wx.navigateTo(Object object) 方法</strong>，可以跳转到非 tabBar 的页面。其中 Object 参数对象的属性列表
如下：
<img src="@source/.vuepress/public/images/bcs2.png" alt="图片"></p>
<p>示例代码:</p>
<p><img src="@source/.vuepress/public/images/bcs3.png" alt="图片"></p>
<h3 id="后退导航-1" tabindex="-1"><a class="header-anchor" href="#后退导航-1" aria-hidden="true">#</a> 后退导航</h3>
<p>调用 <strong>wx.navigateBack(Object object) 方法</strong>，可以返回上一页面或多级页面。其中 Object 参数对象可选的
属性列表如下：
<img src="@source/.vuepress/public/images/bcs5.png" alt="图片"></p>
<p><img src="@source/.vuepress/public/images/bcs6.png" alt="图片"></p>
<h2 id="导航传参" tabindex="-1"><a class="header-anchor" href="#导航传参" aria-hidden="true">#</a> 导航传参</h2>
<h3 id="声明式导航传参" tabindex="-1"><a class="header-anchor" href="#声明式导航传参" aria-hidden="true">#</a> 声明式导航传参</h3>
<p>navigator 组件的 url 属性用来指定将要跳转到的页面的路径。同时，路径的后面还可以携带参数：</p>
<ul>
<li>参数与路径之间使用 <code>?</code> 分隔</li>
<li>参数键与参数值用 <code>=</code> 相连</li>
<li>不同参数用 <code>&amp;</code> 分隔</li>
</ul>
<p><img src="@source/.vuepress/public/images/dhcc.png" alt="图片"></p>
<h3 id="编程式导航传参" tabindex="-1"><a class="header-anchor" href="#编程式导航传参" aria-hidden="true">#</a> 编程式导航传参</h3>
<p>调用 <strong>wx.navigateTo(Object object)</strong> 方法跳转页面时，也可以携带参数，代码示例如下</p>
<p><img src="@source/.vuepress/public/images/dhcc2.png" alt="图片"></p>
<h3 id="在-onload-中接收导航参数" tabindex="-1"><a class="header-anchor" href="#在-onload-中接收导航参数" aria-hidden="true">#</a> 在 onLoad 中接收导航参数</h3>
<p>通过<strong>声明式导航传参</strong>或<strong>编程式导航传参</strong>所携带的参数，可以直接在 onLoad 事件中直接获取到</p>
<p><img src="@source/.vuepress/public/images/onloadoption.png" alt="图片"></p>
</template>
