<template><h1 id="公司和角色" tabindex="-1"><a class="header-anchor" href="#公司和角色" aria-hidden="true">#</a> 公司和角色</h1>
<h2 id="建立公司角色页面的基本结构" tabindex="-1"><a class="header-anchor" href="#建立公司角色页面的基本结构" aria-hidden="true">#</a> 建立公司角色页面的基本结构</h2>
<p><img src="@source/.vuepress/public/images/shezhi01.png" alt="图片">
<img src="@source/.vuepress/public/images/shezhi02.png" alt="图片">
<img src="@source/.vuepress/public/images/gongsi01.png" alt="图片">
<img src="@source/.vuepress/public/images/gongsi02.png" alt="图片"></p>
<h2 id="读取公司角色信息" tabindex="-1"><a class="header-anchor" href="#读取公司角色信息" aria-hidden="true">#</a> 读取公司角色信息</h2>
<p>封装公司角色请求，读取公司角色信息</p>
<h3 id="读取角色列表数据" tabindex="-1"><a class="header-anchor" href="#读取角色列表数据" aria-hidden="true">#</a> 读取角色列表数据</h3>
<p>首先，封装读取角色的信息的请求 <strong>src/api/setting.js</strong>
<img src="@source/.vuepress/public/images/role01.png" alt="图片"></p>
<blockquote>
<p>params 是查询参数，里面需要携带分页信息
<img src="@source/.vuepress/public/images/fenyeparams.png" alt="图片"></p>
</blockquote>
<p>然后，在页面created()中调用接口获取数据，绑定表格数据 <strong>src/views/setting/index.vue</strong>
<img src="@source/.vuepress/public/images/role02.png" alt="图片"></p>
<h4 id="绑定表格数据" tabindex="-1"><a class="header-anchor" href="#绑定表格数据" aria-hidden="true">#</a> <strong>绑定表格数据</strong></h4>
<p><img src="@source/.vuepress/public/images/role03.png" alt="图片"></p>
<h4 id="绑定分页数据" tabindex="-1"><a class="header-anchor" href="#绑定分页数据" aria-hidden="true">#</a> <strong>绑定分页数据</strong></h4>
<p><img src="@source/.vuepress/public/images/role04.png" alt="图片"></p>
<h3 id="读取-公司信息-数据" tabindex="-1"><a class="header-anchor" href="#读取-公司信息-数据" aria-hidden="true">#</a> 读取 公司信息 数据</h3>
<blockquote>
<p>第二个tab页，同样需要读取数据
封装读取公司信息的api  <strong>src/api/setting.js</strong>
<img src="@source/.vuepress/public/images/ny1.png" alt="图片"></p>
</blockquote>
<h4 id="初始化时调用接口" tabindex="-1"><a class="header-anchor" href="#初始化时调用接口" aria-hidden="true">#</a> 初始化时调用接口</h4>
<blockquote>
<p>请求中的companyId来自哪里？它来自我们登录成功之后的用户资料，所以需要在该组件中使用vuex数据</p>
</blockquote>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>  companyId: state => state.user.userInfo.companyId // 建立对于user模块的companyId的快捷访问
  computed: {
    ...mapGetters(['companyId'])
  },
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><img src="@source/.vuepress/public/images/ny2.png" alt="图片"></p>
<h4 id="绑定公司表单数据" tabindex="-1"><a class="header-anchor" href="#绑定公司表单数据" aria-hidden="true">#</a> 绑定公司表单数据</h4>
<p><img src="@source/.vuepress/public/images/ny3.png" alt="图片"></p>
<h2 id="删除角色功能" tabindex="-1"><a class="header-anchor" href="#删除角色功能" aria-hidden="true">#</a> 删除角色功能</h2>
<p>实现删除角色的功能</p>
<p><strong>封装删除角色的api</strong>  src/api/setting.js
<img src="@source/.vuepress/public/images/shanchujuese.png" alt="图片"></p>
<h4 id="删除功能实现" tabindex="-1"><a class="header-anchor" href="#删除功能实现" aria-hidden="true">#</a> 删除功能实现</h4>
<p><img src="@source/.vuepress/public/images/shanchugongneng.png" alt="图片"></p>
<p>或 使用 async</p>
<p><img src="@source/.vuepress/public/images/try12.png" alt="图片"></p>
<h4 id="删除按钮注册事" tabindex="-1"><a class="header-anchor" href="#删除按钮注册事" aria-hidden="true">#</a> 删除按钮注册事</h4>
<p><img src="@source/.vuepress/public/images/scopeslot.png" alt="图片"></p>
<h2 id="编辑角色功能" tabindex="-1"><a class="header-anchor" href="#编辑角色功能" aria-hidden="true">#</a> 编辑角色功能</h2>
<p><strong>目标</strong>： 实现编辑角色的功能
<img src="@source/.vuepress/public/images/bianjixiaoguo.png" alt="图片"></p>
<h3 id="封装编辑接口-新建编辑弹层" tabindex="-1"><a class="header-anchor" href="#封装编辑接口-新建编辑弹层" aria-hidden="true">#</a> 封装编辑接口，新建编辑弹层</h3>
<p><strong>封装编辑角色的功能 api</strong></p>
<p><img src="@source/.vuepress/public/images/zuizhong.png" alt="图片"></p>
<h4 id="定义编辑弹层数据" tabindex="-1"><a class="header-anchor" href="#定义编辑弹层数据" aria-hidden="true">#</a> 定义编辑弹层数据</h4>
<p><img src="@source/.vuepress/public/images/bianjijuese2.png" alt="图片"></p>
<h4 id="编辑弹层结构" tabindex="-1"><a class="header-anchor" href="#编辑弹层结构" aria-hidden="true">#</a> 编辑弹层结构</h4>
<p><img src="@source/.vuepress/public/images/bianjijuese3.png" alt="图片"></p>
<h3 id="实现编辑功能-为新增功能留口" tabindex="-1"><a class="header-anchor" href="#实现编辑功能-为新增功能留口" aria-hidden="true">#</a> 实现编辑功能，为新增功能留口</h3>
<h4 id="编辑功能实现-为新增功能留口" tabindex="-1"><a class="header-anchor" href="#编辑功能实现-为新增功能留口" aria-hidden="true">#</a> 编辑功能实现（为新增功能留口）</h4>
<p><img src="@source/.vuepress/public/images/bianji7.png" alt="图片"></p>
<h4 id="编辑按钮注册事件" tabindex="-1"><a class="header-anchor" href="#编辑按钮注册事件" aria-hidden="true">#</a> 编辑按钮注册事件</h4>
<p><img src="@source/.vuepress/public/images/bianji8.png" alt="图片"></p>
<h2 id="新增角色功能" tabindex="-1"><a class="header-anchor" href="#新增角色功能" aria-hidden="true">#</a> 新增角色功能</h2>
<p>实现新增角色功能</p>
<h4 id="封装新增角色功能api" tabindex="-1"><a class="header-anchor" href="#封装新增角色功能api" aria-hidden="true">#</a> 封装新增角色功能api</h4>
<p><img src="@source/.vuepress/public/images/bianji9.png" alt="图片"></p>
<h4 id="新增功能实现和编辑功能合并-处理关闭" tabindex="-1"><a class="header-anchor" href="#新增功能实现和编辑功能合并-处理关闭" aria-hidden="true">#</a> 新增功能实现和编辑功能合并（处理关闭）</h4>
<p><img src="@source/.vuepress/public/images/bianji10.png" alt="图片"></p>
<h4 id="按钮注册事件" tabindex="-1"><a class="header-anchor" href="#按钮注册事件" aria-hidden="true">#</a> 按钮注册事件</h4>
<p>el-dialog  <strong>@close事件</strong> 绑定 btnCancel()方法
<img src="@source/.vuepress/public/images/bianji11.png" alt="图片"></p>
</template>
