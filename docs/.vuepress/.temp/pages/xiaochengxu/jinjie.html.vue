<template><h1 id="进阶" tabindex="-1"><a class="header-anchor" href="#进阶" aria-hidden="true">#</a> 进阶</h1>
<h2 id="wxss" tabindex="-1"><a class="header-anchor" href="#wxss" aria-hidden="true">#</a> WXSS</h2>
<h3 id="wxss-和-css-的关系" tabindex="-1"><a class="header-anchor" href="#wxss-和-css-的关系" aria-hidden="true">#</a> WXSS 和 CSS 的关系</h3>
<p>WXSS 具有 CSS 大部分特性，同时，WXSS 还对 CSS 进行了扩充以及修改，以适应微信小程序的开发。
与 CSS 相比，WXSS 扩展的特性有：</p>
<ul>
<li><strong>rpx</strong> 尺寸单位</li>
<li><strong>@import</strong> 样式导入</li>
</ul>
<p><img src="@source/.vuepress/public/images/wxss.png" alt="图片"></p>
<h3 id="rpx" tabindex="-1"><a class="header-anchor" href="#rpx" aria-hidden="true">#</a> rpx</h3>
<p>responsible pixel  : 用来解决屏幕适配的尺寸单位</p>
<p>rpx 的实现原理非常简单：鉴于不同设备屏幕的大小不同，为了实现屏幕的自动适配，rpx 把所有设备的屏幕，</p>
<p>在 <strong>宽度上等分为 750 份</strong> （即：当前屏幕的总宽度为 750rpx）</p>
<ul>
<li>在较小的设备上，<strong>1rpx 所代表的宽度较小</strong></li>
<li>在较大的设备上，<strong>1rpx 所代表的宽度较大</strong></li>
</ul>
<p>小程序在不同设备上运行的时候，会自动把 rpx 的样式单位换算成对应的像素单位来渲染，从而实现屏幕适配</p>
<h3 id="rpx-与-px-之间的单位换算-了解一下" tabindex="-1"><a class="header-anchor" href="#rpx-与-px-之间的单位换算-了解一下" aria-hidden="true">#</a> rpx 与 px 之间的单位换算(了解一下)</h3>
<p>在 iPhone6 上，屏幕宽度为375px，共有 750 个物理像素，等分为 750rpx。则：</p>
<ul>
<li>750rpx = 375px = 750 物理像素</li>
<li>1rpx = 0.5px = 1物理像素</li>
</ul>
<p><img src="@source/.vuepress/public/images/rpx2.png" alt="图片"></p>
<p>官方建议：开发微信小程序时，设计师可以用 iPhone6 作为视觉稿的标准</p>
<p>开发举例：在 iPhone6 上如果要绘制宽<strong>100px，高20px</strong>的盒子，换算成rpx单位，宽高分别为 <strong>200rpx 和 40rpx</strong></p>
<h3 id="样式导入-import" tabindex="-1"><a class="header-anchor" href="#样式导入-import" aria-hidden="true">#</a> 样式导入  @import</h3>
<p>使用 WXSS 提供的 <code>@import</code> 语法，可以导入外联的样式表</p>
<p>@import 后跟需要导入的外联样式表的相对路径，用 ; 表示语句结束</p>
<p><img src="@source/.vuepress/public/images/wxss22.png" alt="图片"></p>
<h3 id="全局样式和局部样式" tabindex="-1"><a class="header-anchor" href="#全局样式和局部样式" aria-hidden="true">#</a> 全局样式和局部样式</h3>
<ol>
<li>全局样式</li>
</ol>
<p>定义在 <strong>app.wxss</strong> 中的样式为全局样式，作用于每一个页面</p>
<ol start="2">
<li>局部样式
在页面的 <strong>.wxss 文件</strong>中定义的样式为局部样式，只作用于当前页面。</li>
</ol>
<p>注意：</p>
<ul>
<li>当局部样式和全局样式冲突时，根据就近原则，局部样式会覆盖全局样式</li>
<li>当局部样式的权重大于或等于全局样式的权重时，才会覆盖全局的样</li>
</ul>
<h2 id="全局配置" tabindex="-1"><a class="header-anchor" href="#全局配置" aria-hidden="true">#</a> 全局配置</h2>
<p>小程序根目录下的 <code>app.json</code> 文件是小程序的全局配置文件。常用的配置项如下：</p>
<ol>
<li>pages</li>
</ol>
<ul>
<li>记录当前小程序所有页面的存放路径</li>
</ul>
<ol start="2">
<li>window</li>
</ol>
<ul>
<li>全局设置小程序窗口的外观</li>
</ul>
<ol start="3">
<li>tabBar</li>
</ol>
<ul>
<li>设置小程序底部的 tabBar 效果</li>
</ul>
<ol start="4">
<li>style</li>
</ol>
<ul>
<li>是否启用新版的组件样式</li>
</ul>
<h3 id="window" tabindex="-1"><a class="header-anchor" href="#window" aria-hidden="true">#</a> window</h3>
<h3 id="_1-小程序窗口的组成部分" tabindex="-1"><a class="header-anchor" href="#_1-小程序窗口的组成部分" aria-hidden="true">#</a> 1. 小程序窗口的组成部分</h3>
<p><img src="@source/.vuepress/public/images/window01.png" alt="图片"></p>
<h3 id="_2-了解-window-节点常用的配置项" tabindex="-1"><a class="header-anchor" href="#_2-了解-window-节点常用的配置项" aria-hidden="true">#</a> 2. 了解 window 节点常用的配置项</h3>
<p><img src="@source/.vuepress/public/images/window02.png" alt="图片"></p>
<h3 id="_3-设置导航栏的标题" tabindex="-1"><a class="header-anchor" href="#_3-设置导航栏的标题" aria-hidden="true">#</a> 3. 设置导航栏的标题</h3>
<p>app.json -&gt; window -&gt; navigationBarTitleText</p>
<p><img src="@source/.vuepress/public/images/window03.png" alt="图片"></p>
<h3 id="_4-设置导航栏的背景色" tabindex="-1"><a class="header-anchor" href="#_4-设置导航栏的背景色" aria-hidden="true">#</a> 4. 设置导航栏的背景色</h3>
<p>app.json -&gt; window -&gt; navigationBarBackgroundColor</p>
<p><img src="@source/.vuepress/public/images/window04.png" alt="图片">
<img src="@source/.vuepress/public/images/window044.png" alt="图片"></p>
<p>只支持以 # 开头的 16进制颜色</p>
<h3 id="_5-设置导航栏的标题颜色" tabindex="-1"><a class="header-anchor" href="#_5-设置导航栏的标题颜色" aria-hidden="true">#</a> 5. 设置导航栏的标题颜色</h3>
<p>app.json -&gt; window -&gt; navigationBarTextStyle</p>
<p>从默认的 black 修改为 white</p>
<p><img src="@source/.vuepress/public/images/window05.png" alt="图片">
<img src="@source/.vuepress/public/images/window055.png" alt="图片"></p>
<h3 id="_6-全局开启下拉刷新功能" tabindex="-1"><a class="header-anchor" href="#_6-全局开启下拉刷新功能" aria-hidden="true">#</a> 6. 全局开启下拉刷新功能</h3>
<p><strong>下拉刷新</strong> 是移动端的专有名词，指的是通过手指在屏幕上的下拉滑动操作，从而重新加载页面数据的行为。</p>
<p>设置步骤：app.json -&gt; window -&gt; 把 <code>enablePullDownRefresh</code> 的值设置为 <strong><code>true</code></strong></p>
<p><strong>注意</strong>：在 <strong>app.json</strong> 中启用下拉刷新功能，会作用于每个小程序页面</p>
<p><img src="@source/.vuepress/public/images/enable1.png" alt="图片"></p>
<h3 id="_7-设置下拉刷新时窗口的背景色" tabindex="-1"><a class="header-anchor" href="#_7-设置下拉刷新时窗口的背景色" aria-hidden="true">#</a> 7. 设置下拉刷新时窗口的背景色</h3>
<p>当全局开启下拉刷新功能之后，默认的窗口背景为白色。如果自定义下拉刷新窗口背景色，设置步骤为:</p>
<p>app.json -&gt; window -&gt; 为 <strong>backgroundColor</strong> 指定16进制的颜色值 <code>#efefef</code></p>
<p><img src="@source/.vuepress/public/images/window06.png" alt="图片">
<img src="@source/.vuepress/public/images/window066.png" alt="图片"></p>
<h3 id="_8-设置下拉刷新时-loading-的样式" tabindex="-1"><a class="header-anchor" href="#_8-设置下拉刷新时-loading-的样式" aria-hidden="true">#</a> 8. 设置下拉刷新时 loading 的样式</h3>
<p>当全局开启下拉刷新功能之后，默认窗口的 loading 样式为白色，如果要更改 loading 样式的效果，设置步
骤为 app.json -&gt; window -&gt; 为 <strong>backgroundTextStyle</strong> 指定 dark 值</p>
<p><img src="@source/.vuepress/public/images/window07.png" alt="图片"></p>
<p>注意： backgroundTextStyle 的可选值只有 <strong>light 和 dark</strong></p>
<h3 id="_9-设置上拉触底的距离" tabindex="-1"><a class="header-anchor" href="#_9-设置上拉触底的距离" aria-hidden="true">#</a> 9. 设置上拉触底的距离</h3>
<p>概念：上拉触底是移动端的专有名词，通过手指在屏幕上的上拉滑动操作，从而加载更多数据的行为。</p>
<p>设置步骤： app.json -&gt; window -&gt; 为 <strong>onReachBottomDistance</strong> 设置新的数值</p>
<p>注意：<strong>默认距离为 50px</strong>，如果没有特殊需求，建议使用默认值即可</p>
<h2 id="tabbar" tabindex="-1"><a class="header-anchor" href="#tabbar" aria-hidden="true">#</a> tabBar</h2>
<h3 id="_1-关于-tabbar" tabindex="-1"><a class="header-anchor" href="#_1-关于-tabbar" aria-hidden="true">#</a> 1. 关于 tabBar</h3>
<p>小程序中通常将其分为：</p>
<ul>
<li>底部 tabBar</li>
<li>顶部 tabBar</li>
</ul>
<p>注意：</p>
<ul>
<li>tabBar 中只能配置最少 2 个、最多 5 个 tab 页签</li>
<li>当渲染顶部 tabBar 时，不显示 icon，只显示文本</li>
</ul>
<h3 id="_2-tabbar的-6个组成部分" tabindex="-1"><a class="header-anchor" href="#_2-tabbar的-6个组成部分" aria-hidden="true">#</a> 2. tabBar的 6个组成部分</h3>
<p><img src="@source/.vuepress/public/images/tabbar1.png" alt="图片"></p>
<ul>
<li>backgroundColor：tabBar 的背景色</li>
<li>selectedIconPath：选中时的图片路径</li>
<li>borderStyle：tabBar 上边框的颜色</li>
<li>iconPath：未选中时的图片路径</li>
<li>selectedColor：tab 上的文字选中时的颜色</li>
<li>color：tab 上文字的默认（未选中）颜色</li>
</ul>
<h3 id="_3-tabbar-节点的配置项" tabindex="-1"><a class="header-anchor" href="#_3-tabbar-节点的配置项" aria-hidden="true">#</a> 3. tabbar 节点的配置项</h3>
<p><img src="@source/.vuepress/public/images/tabbar2.png" alt="图片"></p>
<h3 id="_4-每个-tab-项的配置选项" tabindex="-1"><a class="header-anchor" href="#_4-每个-tab-项的配置选项" aria-hidden="true">#</a> 4. 每个 tab 项的配置选项</h3>
<p><img src="@source/.vuepress/public/images/tabbar4.png" alt="图片"></p>
<p>配置如:
<img src="@source/.vuepress/public/images/tabbar5.png" alt="图片"></p>
<h3 id="tabbar-小案例" tabindex="-1"><a class="header-anchor" href="#tabbar-小案例" aria-hidden="true">#</a> tabBar 小案例:</h3>
<p><img src="@source/.vuepress/public/images/xiaoanli11.png" alt="图片">
<img src="@source/.vuepress/public/images/tabbar6.png" alt="图片">
<img src="@source/.vuepress/public/images/tabbar7.png" alt="图片"></p>
<h2 id="页面配置" tabindex="-1"><a class="header-anchor" href="#页面配置" aria-hidden="true">#</a> 页面配置</h2>
<p>小程序中，app.json 中的 window 节点，可以全局配置小程序中每个页面的窗口表现</p>
<p>如果某些小程序页面想要拥有特殊的窗口表现，此时，“页面级别的 .json 配置文件”就可以实现这种需求</p>
<p>注意：当页面配置与全局配置冲突时，根据<strong>就近原则</strong>，最终的效果以页面配置为准</p>
<h3 id="常见的页面配置" tabindex="-1"><a class="header-anchor" href="#常见的页面配置" aria-hidden="true">#</a> 常见的页面配置</h3>
<p><img src="@source/.vuepress/public/images/yemianpeizhi1.png" alt="图片"></p>
</template>
