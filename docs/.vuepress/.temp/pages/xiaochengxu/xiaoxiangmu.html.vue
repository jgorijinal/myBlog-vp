<template><h1 id="案例-本地生活-列表页面" tabindex="-1"><a class="header-anchor" href="#案例-本地生活-列表页面" aria-hidden="true">#</a> 案例 - 本地生活(列表页面)</h1>
<p><img src="@source/.vuepress/public/images/meishi1.png" alt="图片"></p>
<ul>
<li>页面导航并传参</li>
<li>上拉触底时加载下一页数据</li>
<li>下拉刷新列表数据</li>
</ul>
<h2 id="实现导航跳转并传参" tabindex="-1"><a class="header-anchor" href="#实现导航跳转并传参" aria-hidden="true">#</a> 实现导航跳转并传参</h2>
<h3 id="创建-shoplist-页面" tabindex="-1"><a class="header-anchor" href="#创建-shoplist-页面" aria-hidden="true">#</a> 创建 shopList 页面</h3>
<p><img src="@source/.vuepress/public/images/shenghuo1.png" alt="图片"></p>
<h3 id="跳转并传参" tabindex="-1"><a class="header-anchor" href="#跳转并传参" aria-hidden="true">#</a> 跳转并传参</h3>
<p><img src="@source/.vuepress/public/images/shenghuo2.png" alt="图片"></p>
<h3 id="动态设置商铺列表的标题内容" tabindex="-1"><a class="header-anchor" href="#动态设置商铺列表的标题内容" aria-hidden="true">#</a> 动态设置商铺列表的标题内容</h3>
<p>动态设置页面的标题</p>
<p><a href="https://developers.weixin.qq.com/miniprogram/dev/api/ui/navigation-bar/wx.setNavigationBarTitle.html" target="_blank" rel="noopener noreferrer">wx.setNavigationBarTitle(Object object)<ExternalLinkIcon/></a></p>
<p><img src="@source/.vuepress/public/images/shenghuo3.png" alt="图片"></p>
<p>需要把 onLoad 函数中获取的 参数信息(options) 保存到 data 中, 供其他函数使用</p>
<p><img src="@source/.vuepress/public/images/shenghuo4.png" alt="图片"></p>
<h2 id="商铺列表页面的编译模式" tabindex="-1"><a class="header-anchor" href="#商铺列表页面的编译模式" aria-hidden="true">#</a> 商铺列表页面的编译模式</h2>
<p><img src="@source/.vuepress/public/images/shenghuo5.png" alt="图片"></p>
<h2 id="调接口" tabindex="-1"><a class="header-anchor" href="#调接口" aria-hidden="true">#</a> 调接口</h2>
<p>以<strong>分页</strong>的形式，加载指定分类下商铺列表的数据：</p>
<ol>
<li>接口地址</li>
</ol>
<ul>
<li>https://www.escook.cn/categories/:cate_id/shops</li>
<li>URL 地址中的 :cate_id 是动态参数，表示分类的 Id</li>
</ul>
<ol start="2">
<li>请求方式</li>
</ol>
<ul>
<li>GET 请求</li>
</ul>
<ol start="3">
<li>请求参数</li>
</ol>
<ul>
<li>_page 表示请求第几页的数据</li>
<li>_limit 表示每页请求几条数据</li>
</ul>
<h3 id="定义-getshoplist-获取商铺列表数据" tabindex="-1"><a class="header-anchor" href="#定义-getshoplist-获取商铺列表数据" aria-hidden="true">#</a> 定义 getShopList() 获取商铺列表数据</h3>
<p><img src="@source/.vuepress/public/images/shenghuo01.png" alt="图片">
<img src="@source/.vuepress/public/images/shenghuo02.png" alt="图片"></p>
<h3 id="渲染-ui-结构美化样式" tabindex="-1"><a class="header-anchor" href="#渲染-ui-结构美化样式" aria-hidden="true">#</a> 渲染 UI 结构美化样式</h3>
<p><img src="@source/.vuepress/public/images/shenghuo04.png" alt="图片">
<img src="@source/.vuepress/public/images/shenghuo03.png" alt="图片"></p>
<h2 id="展示-loading-效果" tabindex="-1"><a class="header-anchor" href="#展示-loading-效果" aria-hidden="true">#</a> 展示 loading 效果</h2>
<p><img src="@source/.vuepress/public/images/shenghuo7.png" alt="图片"></p>
<h2 id="上拉触底请求下一页数据" tabindex="-1"><a class="header-anchor" href="#上拉触底请求下一页数据" aria-hidden="true">#</a> 上拉触底请求下一页数据</h2>
<ol>
<li>配置一下上啦触底的距离 onReachBottomDistance -&gt; 200px</li>
<li>onReachBottom函数中 页码 加一</li>
<li>调用数据请求</li>
</ol>
<p><img src="@source/.vuepress/public/images/chudi1.png" alt="图片">
<img src="@source/.vuepress/public/images/chudi2.png" alt="图片"></p>
<h2 id="上拉触底-节流处理" tabindex="-1"><a class="header-anchor" href="#上拉触底-节流处理" aria-hidden="true">#</a> 上拉触底 节流处理</h2>
<p><img src="@source/.vuepress/public/images/shanglajieliu1.png" alt="图片">
<img src="@source/.vuepress/public/images/shanglajieliu2.png" alt="图片">
<img src="@source/.vuepress/public/images/shanglajieliu3.png" alt="图片">
<img src="@source/.vuepress/public/images/shanglajieliu4.png" alt="图片"></p>
<h2 id="判断下一页是否还有数据-公式" tabindex="-1"><a class="header-anchor" href="#判断下一页是否还有数据-公式" aria-hidden="true">#</a> 判断下一页是否还有数据 公式</h2>
<p>如果下面的公式成立，则证明没有下一页数据了：</p>
<p>页码值 * 每页显示多少条数据 &gt;= 总数据条数
<strong>page * pageSize &gt;= total</strong></p>
<ul>
<li>案例1：总共有 77 条数据，如果每页显示 10 条数据，则总共分为 8 页，其中第 8 页只有 7 条数据</li>
</ul>
<p>page（7）* pageSize（10） &gt;= total（77）
page（8）* pageSize（10） &gt;= total（77）</p>
<ul>
<li>案例2：总共有 80 条数据，如果每页显示 10 条数据，则总共分为 8 页，其中第 8 页面有 10 条数据</li>
</ul>
<p>page（7）* pageSize（10） &gt;= total（80）
page（8）* pageSize（10） &gt;= total（80）</p>
<p><img src="@source/.vuepress/public/images/showtoast1.png" alt="图片"></p>
<h2 id="下拉刷新" tabindex="-1"><a class="header-anchor" href="#下拉刷新" aria-hidden="true">#</a> 下拉刷新</h2>
<h3 id="开启下拉刷新" tabindex="-1"><a class="header-anchor" href="#开启下拉刷新" aria-hidden="true">#</a> 开启下拉刷新</h3>
<p><img src="@source/.vuepress/public/images/xl1.png" alt="图片"></p>
<h3 id="实现下拉刷新功能" tabindex="-1"><a class="header-anchor" href="#实现下拉刷新功能" aria-hidden="true">#</a> 实现下拉刷新功能</h3>
<ol>
<li>需要重置关键的数据 ( 页码值, shopList , total)</li>
<li>重新发起请求</li>
</ol>
<p><img src="@source/.vuepress/public/images/xl2.png" alt="图片"></p>
<h3 id="下拉刷新后自动关闭" tabindex="-1"><a class="header-anchor" href="#下拉刷新后自动关闭" aria-hidden="true">#</a> 下拉刷新后自动关闭</h3>
<p>按需调用 : 在 getShopList() 传入一个回调来控制是否关闭下拉刷新</p>
<p><img src="@source/.vuepress/public/images/xl4.png" alt="图片">
<img src="@source/.vuepress/public/images/xl5.png" alt="图片"></p>
<h2 id="使用-wsx-处理手机号" tabindex="-1"><a class="header-anchor" href="#使用-wsx-处理手机号" aria-hidden="true">#</a> 使用 wsx 处理手机号</h2>
<p><img src="@source/.vuepress/public/images/phone1.png" alt="图片"></p>
<p>使用外联的 wxs 文件, 导入一个处理电话号码格式的函数
<img src="@source/.vuepress/public/images/split1.png" alt="图片">
<img src="@source/.vuepress/public/images/split2.png" alt="图片"></p>
</template>
