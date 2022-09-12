<template><h1 id="页面事件" tabindex="-1"><a class="header-anchor" href="#页面事件" aria-hidden="true">#</a> 页面事件</h1>
<h2 id="下拉刷新" tabindex="-1"><a class="header-anchor" href="#下拉刷新" aria-hidden="true">#</a> 下拉刷新</h2>
<p>下拉刷新 -&gt; 重新加载页面数据</p>
<h3 id="启用下拉刷新" tabindex="-1"><a class="header-anchor" href="#启用下拉刷新" aria-hidden="true">#</a> 启用下拉刷新</h3>
<ol>
<li>全局开启(不推荐)</li>
</ol>
<ul>
<li>在 app.json 的 window 节点中，将 enablePullDownRefresh 设置为 true</li>
</ul>
<ol start="2">
<li>局部开启(更推荐)</li>
</ol>
<ul>
<li>在页面的 .json 配置文件中，将 enablePullDownRefresh 设置为 true</li>
</ul>
<p>在实际开发中，推荐使用第 2 种方式，<strong>为需要的页面单独开启下拉刷新的效果</strong></p>
<h3 id="配置下拉刷新窗口配置" tabindex="-1"><a class="header-anchor" href="#配置下拉刷新窗口配置" aria-hidden="true">#</a> 配置下拉刷新窗口配置</h3>
<p>在全局或页面的 .json 配置文件中，通过 backgroundColor 和 backgroundTextStyle 来配置下拉刷新窗口
的样式，其中：</p>
<ul>
<li><strong>backgroundColor</strong> 用来配置下拉刷新<strong>窗口的背景颜色</strong>，仅支持16 进制的颜色值</li>
<li><strong>backgroundTextStyle</strong> 用来配置下拉刷新 <strong>loading 的样式</strong>，仅支持 dark 和 light</li>
</ul>
<h3 id="监听页面的呢下拉刷新事件" tabindex="-1"><a class="header-anchor" href="#监听页面的呢下拉刷新事件" aria-hidden="true">#</a> 监听页面的呢下拉刷新事件</h3>
<p>在页面的 .js 文件中，通过 <strong>onPullDownRefresh()</strong> 函数即可监听当前页面的下拉刷新事件</p>
<p>例如，在页面的 wxml 中有如下的 UI 结构，点击按钮可以让 count 值自增 +1</p>
<p><img src="@source/.vuepress/public/images/pulldown1.png" alt="图片"></p>
<h3 id="停止下拉刷新" tabindex="-1"><a class="header-anchor" href="#停止下拉刷新" aria-hidden="true">#</a> 停止下拉刷新</h3>
<p>当处理完下拉刷新后，下拉刷新的 loading 效果会一直显示，<strong>不会主动消失</strong>，所以需要手动隐藏下拉刷新的
loading 效果。此时，调用 <strong>wx.stopPullDownRefresh()</strong> 可以停止当前页面的下拉刷新</p>
<p><img src="@source/.vuepress/public/images/stoppulldown.png" alt="图片"></p>
<h2 id="上拉触底" tabindex="-1"><a class="header-anchor" href="#上拉触底" aria-hidden="true">#</a> 上拉触底</h2>
<p>沙拉触底 -&gt; 加载更多数据(分页功能)</p>
<h3 id="监听页面的上拉触底" tabindex="-1"><a class="header-anchor" href="#监听页面的上拉触底" aria-hidden="true">#</a> 监听页面的上拉触底</h3>
<p>在页面的 .js 文件中，通过 <strong>onReachBottom() 函数</strong>即可监听当前页面的上拉触底事件</p>
<p><img src="@source/.vuepress/public/images/rb1.png" alt="图片"></p>
<h3 id="配置上拉触底举例" tabindex="-1"><a class="header-anchor" href="#配置上拉触底举例" aria-hidden="true">#</a> 配置上拉触底举例</h3>
<p>上拉触底距离指的是触发上拉触底事件时，滚动条距离页面底部的距离</p>
<p>可以在全局或页面的 .json 配置文件中，通过 <strong>onReachBottomDistance 属性</strong>来配置上拉触底的距离</p>
<p>小程序默认的触底距离是 <strong>50px</strong>，在实际开发中，可以根据自己的需求修改这个默认值</p>
<h3 id="上拉触底案例" tabindex="-1"><a class="header-anchor" href="#上拉触底案例" aria-hidden="true">#</a> 上拉触底案例</h3>
<ul>
<li>定义获取随机颜色的方法</li>
<li>在页面加载时获取初始数据</li>
<li>渲染 UI 结构并美化页面效果</li>
<li><strong>在上拉触底时调用获取随机颜色的方法</strong></li>
<li><strong>添加 loading 提示效果</strong></li>
<li><strong>对上拉触底进行节流处理</strong></li>
</ul>
<h3 id="_1-定义获取随机颜色的方法" tabindex="-1"><a class="header-anchor" href="#_1-定义获取随机颜色的方法" aria-hidden="true">#</a> (1) 定义获取随机颜色的方法</h3>
<p><img src="@source/.vuepress/public/images/color1.png" alt="图片"></p>
<h3 id="_2-页面加载时获取数据" tabindex="-1"><a class="header-anchor" href="#_2-页面加载时获取数据" aria-hidden="true">#</a> (2) 页面加载时获取数据</h3>
<p><img src="@source/.vuepress/public/images/color2.png" alt="图片"></p>
<h3 id="_3-渲染到页面" tabindex="-1"><a class="header-anchor" href="#_3-渲染到页面" aria-hidden="true">#</a> (3)渲染到页面</h3>
<p><img src="@source/.vuepress/public/images/color3.png" alt="图片"></p>
<h3 id="_4-上啦触底获取随机颜色" tabindex="-1"><a class="header-anchor" href="#_4-上啦触底获取随机颜色" aria-hidden="true">#</a> (4)上啦触底获取随机颜色</h3>
<p><img src="@source/.vuepress/public/images/color5.png" alt="图片"></p>
<h3 id="_5-添加-loading-提示效果" tabindex="-1"><a class="header-anchor" href="#_5-添加-loading-提示效果" aria-hidden="true">#</a> (5) 添加 loading 提示效果</h3>
<p>[官网][https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showLoading.html]</p>
<p><img src="@source/.vuepress/public/images/color6.png" alt="图片"></p>
<h3 id="_6-节流处理" tabindex="-1"><a class="header-anchor" href="#_6-节流处理" aria-hidden="true">#</a> (6) 节流处理</h3>
<ol>
<li>在 data 中定义 isloading 节流阀</li>
</ol>
<ul>
<li>false 表示当前没有进行任何数据请求</li>
<li>true 表示当前正在进行数据请求</li>
</ul>
<ol start="2">
<li>在 getColors() 方法中修改 isloading 节流阀的值</li>
</ol>
<ul>
<li>在刚调用 getColors 时将节流阀设置 true</li>
<li>在网络请求的 complete 回调函数中，将节流阀重置为 false</li>
</ul>
<ol start="3">
<li>在 onReachBottom 中判断节流阀的值，从而对数据请求进行节流控制</li>
</ol>
<ul>
<li>如果节流阀的值为 true，则阻止当前请求</li>
<li>如果节流阀的值为 false，则发起数据请求</li>
</ul>
<p><img src="@source/.vuepress/public/images/color7.png" alt="图片">
<img src="@source/.vuepress/public/images/color8.png" alt="图片"></p>
<h2 id="自定义编译模式" tabindex="-1"><a class="header-anchor" href="#自定义编译模式" aria-hidden="true">#</a> 自定义编译模式</h2>
<p><img src="@source/.vuepress/public/images/bianyi1.png" alt="图片"></p>
</template>
