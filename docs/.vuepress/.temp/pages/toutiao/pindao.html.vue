<template><h1 id="首页-频道编辑" tabindex="-1"><a class="header-anchor" href="#首页-频道编辑" aria-hidden="true">#</a> 首页 - 频道编辑</h1>
<h2 id="_1-处理页面弹出层" tabindex="-1"><a class="header-anchor" href="#_1-处理页面弹出层" aria-hidden="true">#</a> 1. 处理页面弹出层</h2>
<p>Vant 中内置了 <a href="https://youzan.github.io/vant/#/zh-CN/popup" target="_blank" rel="noopener noreferrer">Popup 弹出层<ExternalLinkIcon/></a> 组件</p>
<p><img src="@source/.vuepress/public/images/editshow.png" alt="图片"></p>
<p>1、在 <code>data</code> 中添加一个数据用来控制弹层的显示和隐藏
<img src="@source/.vuepress/public/images/editshow1.png" alt="图片"></p>
<p>2、在首页模板中的频道列表后面添加弹出层组件 src/views/home/index.vue
<img src="@source/.vuepress/public/images/editshow2.png" alt="图片"></p>
<p>3、点击汉堡图标时弹出
<img src="@source/.vuepress/public/images/editshow3.png" alt="图片"></p>
<h2 id="_2-创建频道编辑组件" tabindex="-1"><a class="header-anchor" href="#_2-创建频道编辑组件" aria-hidden="true">#</a> 2. 创建频道编辑组件</h2>
<p><img src="@source/.vuepress/public/images/pdbj1.png" alt="图片"></p>
<p>1、创建 <code>views/home/components/channel-edit.vue</code>
<img src="@source/.vuepress/public/images/pdbj2.png" alt="图片"></p>
<p>2、在首页中加载注册
<img src="@source/.vuepress/public/images/pdbj3.png" alt="图片">
3、在弹出层中使用频道编辑组件
<img src="@source/.vuepress/public/images/pdbj4.png" alt="图片"></p>
<h2 id="_3-页面布局及样式" tabindex="-1"><a class="header-anchor" href="#_3-页面布局及样式" aria-hidden="true">#</a> 3. 页面布局及样式</h2>
<p><img src="@source/.vuepress/public/images/pdys1.png" alt="图片">
<img src="@source/.vuepress/public/images/pdys2.png" alt="图片"></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>less<span class="token punctuation">"</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">></span></span>
.channel-edit {
  padding: 85px 0;
  .title-text {
    font-size:32px;
    color: #333333;
  }
  .edit-btn {
    width:104px;
    height:48px;
    font-size:26px;
  }
  /deep/.grid-item {
    width:160px;
    height:86px;
    .van-grid-item__content{
      background-color: #f4f5f6;
      white-space: nowrap;
      border-radius: 6px;
      .van-grid-item__text{
        font-size:28px;
      }
    }
  }
  /deep/ .my-grid {
    .grid-item {
      .van-icon-close {
        position:absolute;
        right:-6px;
        top:-6px;
        z-index:2;
        font-size:34px;
      }
    }
  }
  /deep/.recommend-grid {
    .grid-item {
      .van-grid-item__content {
        flex-direction: row;
        .van-icon-plus {
          font-size: 28px;
          margin-right:6px;
        }
        .van-grid-item__text {
          margin-top: 0
        }
      }
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br></div></div><h2 id="_4-展示我的频道" tabindex="-1"><a class="header-anchor" href="#_4-展示我的频道" aria-hidden="true">#</a> 4. 展示我的频道</h2>
<p><img src="@source/.vuepress/public/images/myc1.png" alt="图片"></p>
<p>1、在父组件中把 <code>channels</code> 传递给频道编辑组件
<img src="@source/.vuepress/public/images/myc2.png" alt="图片"></p>
<p>2、在频道编辑组件中声明<code>myChannels</code>接收父组件的 channels 频道列表数据并遍历展示
<img src="@source/.vuepress/public/images/myc3.png" alt="图片"></p>
<h2 id="_5-当前频道高亮激活" tabindex="-1"><a class="header-anchor" href="#_5-当前频道高亮激活" aria-hidden="true">#</a> 5. 当前频道高亮激活</h2>
<p><img src="@source/.vuepress/public/images/gl1.png" alt="图片">
<img src="@source/.vuepress/public/images/gl2.png" alt="图片"></p>
<ol>
<li>首页组件的 <code>active</code> 传递给编辑组件
<img src="@source/.vuepress/public/images/gl3.png" alt="图片"></li>
<li>编辑组件用 <code>props</code> 接受 传过来的 <code>active</code>
<img src="@source/.vuepress/public/images/gl4.png" alt="图片">
并且使用对应的<strong>类名</strong>改样式
<img src="@source/.vuepress/public/images/gl5.png" alt="图片"></li>
</ol>
<h2 id="_6-展示推荐频道" tabindex="-1"><a class="header-anchor" href="#_6-展示推荐频道" aria-hidden="true">#</a> 6. 展示推荐频道</h2>
<p>没有用来获取推荐频道的数据接口，但是我们有获取<strong>所有频道</strong>列表的数据接口</p>
<p>所以：<code>所有频道列表 - 我的频道 = 剩余推荐的频道</code>。</p>
<p>实现过程所以一共分为两大步：</p>
<ul>
<li>获取所有频道</li>
<li>基于所有频道和我的频道 <strong>计算属性(computed)</strong> 获取<strong>剩余</strong>的推荐频道</li>
</ul>
<h3 id="_6-1-获取所有频道" tabindex="-1"><a class="header-anchor" href="#_6-1-获取所有频道" aria-hidden="true">#</a> 6.1 获取所有频道</h3>
<ol>
<li>封装获取所有频道接口</li>
</ol>
<p><img src="@source/.vuepress/public/images/ga1.png" alt="图片"></p>
<p>2、在编辑频道组件中请求获取所有频道数据
<img src="@source/.vuepress/public/images/ga2.png" alt="图片"></p>
<h3 id="_6-2-处理展示推荐频道" tabindex="-1"><a class="header-anchor" href="#_6-2-处理展示推荐频道" aria-hidden="true">#</a> 6.2 处理展示推荐频道</h3>
<p>使用 <code>computed</code> 计算属性
<img src="@source/.vuepress/public/images/rc1.png" alt="图片"></p>
<p>或者 使用 <strong>filter()</strong> 方法
<img src="@source/.vuepress/public/images/fil1.png" alt="图片"></p>
<p>模板绑定
<img src="@source/.vuepress/public/images/rc2.png" alt="图片"></p>
<p>最终效果</p>
<p><img src="@source/.vuepress/public/images/qiyu1.png" alt="图片"></p>
<h2 id="_7-添加频道" tabindex="-1"><a class="header-anchor" href="#_7-添加频道" aria-hidden="true">#</a> 7. 添加频道</h2>
<p>思路：</p>
<ul>
<li>给推荐频道列表中每一项注册点击事件</li>
<li>获取点击的频道项</li>
<li>将频道项添加到我的频道中</li>
<li><s>将当前点击的频道项从推荐频道中移除</s>
<ul>
<li>不需要删除，因为我们获取数据使用的是计算属性，当我频道发生改变，计算属性重新求值了</li>
</ul>
</li>
</ul>
<p>但是需要还要做数据的<strong>持久化</strong>, 这个部分到后面在做</p>
<p>1、给推荐频道中的频道注册点击事件
<img src="@source/.vuepress/public/images/addchannel1.png" alt="图片"></p>
<p>2、在添加频道事件处理函数中
<img src="@source/.vuepress/public/images/addchannel2.png" alt="图片">
这里要注意, 这里需要修改props, 需要通过 $emit通知父组件亲自修改, 所以父组件使用到了 <strong>.sync</strong> 修饰符
<img src="@source/.vuepress/public/images/addchannel3.png" alt="图片"></p>
<p>然后会神奇的发现点击的那个推荐频道跑到我的频道中了，并没有去手动的删除点击的这个推荐频道，但是它没了！主要是因为推荐频道是通过一个<strong>计算属性</strong>获取的，计算属性中使用了 channels（我的频道）数据，所以只要我的频道中的数据发生变化，那么计算属性就会重新运算获取最新的数据</p>
<h2 id="_8-编辑频道" tabindex="-1"><a class="header-anchor" href="#_8-编辑频道" aria-hidden="true">#</a> 8. 编辑频道</h2>
<p>思路：</p>
<ul>
<li>给我的频道中的频道项注册点击事件</li>
<li>在事件处理函数中
<ul>
<li>如果是编辑状态，则执行删除频道操作</li>
<li>如果是非编辑状态，则执行切换频道操作</li>
</ul>
</li>
</ul>
<h3 id="_8-1-处理-编辑-非编辑-状态" tabindex="-1"><a class="header-anchor" href="#_8-1-处理-编辑-非编辑-状态" aria-hidden="true">#</a> 8.1 处理 编辑/非编辑 状态</h3>
<p><img src="@source/.vuepress/public/images/bjzt1.png" alt="图片"></p>
<p>1、在 data 中添加数据 <code>isEdit</code> 用来控制编辑状态的显示
<img src="@source/.vuepress/public/images/bjzt2.png" alt="图片"></p>
<p><strong>条件判断</strong> <code>isEdit &amp;&amp; !fixedChannels.includes(channel.id)</code> 比如: 控制图标的显示 等
<img src="@source/.vuepress/public/images/bjzt3.png" alt="图片"></p>
<h3 id="_8-2-切换我的频道" tabindex="-1"><a class="header-anchor" href="#_8-2-切换我的频道" aria-hidden="true">#</a> 8.2 切换我的频道</h3>
<p>需求: 在非编辑状态下点击我的频道, 就跳转到点击的那个频道(附加: 要关闭弹层)
<img src="@source/.vuepress/public/images/noedit0.png" alt="图片"></p>
<p>1、给我的频道项注册点击事件
<img src="@source/.vuepress/public/images/noedit1.png" alt="图片"></p>
<p>2、处理函数, 通知父组件改变它的 <code>active</code> 值
<img src="@source/.vuepress/public/images/noedit2.png" alt="图片"></p>
<p>3、在父组件中监听处理其自定义事件
<img src="@source/.vuepress/public/images/noedit3.png" alt="图片">
<img src="@source/.vuepress/public/images/noedit4.png" alt="图片"></p>
<h3 id="_8-3-删除我的频道-细节" tabindex="-1"><a class="header-anchor" href="#_8-3-删除我的频道-细节" aria-hidden="true">#</a> 8.3 删除我的频道 (细节)</h3>
<p>需求 : 在编辑状态下删除点击的频道</p>
<p><img src="@source/.vuepress/public/images/isbj1.png" alt="图片"></p>
<p>父组件的监听子组件事件这个方法, 添加了第三个参数并设置了默认值(决定是否关闭弹层)
<img src="@source/.vuepress/public/images/isbj2.png" alt="图片"></p>
<p>这节部分要注意很多细节边界情况</p>
<h2 id="_9-频道数据持久化" tabindex="-1"><a class="header-anchor" href="#_9-频道数据持久化" aria-hidden="true">#</a> 9. 频道数据持久化</h2>
<h3 id="_9-1-业务分析" tabindex="-1"><a class="header-anchor" href="#_9-1-业务分析" aria-hidden="true">#</a> 9.1 业务分析</h3>
<p>频道编辑这个功能，无论用户是否登录用户都可以使用。</p>
<p>不登录也能使用</p>
<ul>
<li>数据存储在<strong>本地</strong></li>
<li>不支持同步功能</li>
</ul>
<p>登录也能使用</p>
<ul>
<li>数据存储在线上后台服务器</li>
<li>更换不同的设备可以同步数据</li>
</ul>
<h3 id="_9-2-添加频道" tabindex="-1"><a class="header-anchor" href="#_9-2-添加频道" aria-hidden="true">#</a> 9.2 添加频道</h3>
<ol>
<li>先封装 登录状态时的添加频道接口  src/api/channel.js
<img src="@source/.vuepress/public/images/sj0.png" alt="图片"></li>
</ol>
<p>2、修改添加频道的处理逻辑</p>
<p>用 Vuex 里的 <code>user</code>数据 判断是否登录后做相应的逻辑判断
<img src="@source/.vuepress/public/images/sj1.png" alt="图片"></p>
<h3 id="_9-3-删除频道" tabindex="-1"><a class="header-anchor" href="#_9-3-删除频道" aria-hidden="true">#</a> 9.3 删除频道</h3>
<p>封装删除频道接口
<img src="@source/.vuepress/public/images/delp0.png" alt="图片"></p>
<p>修改一下删除逻辑
<img src="@source/.vuepress/public/images/delp1.png" alt="图片"></p>
<h2 id="_10-正确的获取首页频道列表数据" tabindex="-1"><a class="header-anchor" href="#_10-正确的获取首页频道列表数据" aria-hidden="true">#</a> 10. 正确的获取首页频道列表数据</h2>
<p><img src="@source/.vuepress/public/images/kaishi1.png" alt="图片"></p>
<blockquote>
<p>提示：获取登录用户的频道列表和获取默认推荐的频道列表是同一个数据接口。后端会根据接口中的 token 来判定返回数据</p>
</blockquote>
<p>主页 src/views/index.vue 最初获取数据
<img src="@source/.vuepress/public/images/kaishi2.png" alt="图片"></p>
</template>
