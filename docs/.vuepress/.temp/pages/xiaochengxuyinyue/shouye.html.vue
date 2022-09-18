<template><h1 id="首页-音乐页面" tabindex="-1"><a class="header-anchor" href="#首页-音乐页面" aria-hidden="true">#</a> 首页 - 音乐页面</h1>
<h2 id="使用-npm-引入-vant-组件库" tabindex="-1"><a class="header-anchor" href="#使用-npm-引入-vant-组件库" aria-hidden="true">#</a> 使用 npm - 引入 Vant 组件库</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm init -y
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm i @vant/weapp@1.3.3 -S --production
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>点击 构建 npm</p>
<p><img src="@source/.vuepress/public/images/np1.png" alt="图片"></p>
<h2 id="搜索框" tabindex="-1"><a class="header-anchor" href="#搜索框" aria-hidden="true">#</a> 搜索框</h2>
<p>事先给所有页面的都加上偏灰一点的背景色 #fafafa , 给上面导航栏也加上</p>
<p>app.wxss:</p>
<p><img src="@source/.vuepress/public/images/sou1.png" alt="图片"></p>
<p>app.json:</p>
<p><img src="@source/.vuepress/public/images/sou2.png" alt="图片"></p>
<p>wxml 结构 :</p>
<p><img src="@source/.vuepress/public/images/sou3.png" alt="图片"></p>
<p>页面的搜索框<strong>不能</strong>在当前页面上输入东西, 这样的话特别丑, 所以该<strong>跳转到一个新的搜索页面</strong>进行歌曲的搜索</p>
<p>创建搜索页面:</p>
<p><img src="@source/.vuepress/public/images/sou4.png" alt="图片"></p>
<p>点击搜索框时, 跳转到搜索页面
<img src="@source/.vuepress/public/images/sou5.png" alt="图片"></p>
<h2 id="轮播图" tabindex="-1"><a class="header-anchor" href="#轮播图" aria-hidden="true">#</a> 轮播图</h2>
<h3 id="封装请求接口" tabindex="-1"><a class="header-anchor" href="#封装请求接口" aria-hidden="true">#</a> 封装请求接口</h3>
<p>创建文件 service/api_music, 封装关于音乐页面的接口
<img src="@source/.vuepress/public/images/lunbo1.png" alt="图片"></p>
<p><img src="@source/.vuepress/public/images/lunbo2.png" alt="图片"></p>
<h3 id="获取数据并ui渲染" tabindex="-1"><a class="header-anchor" href="#获取数据并ui渲染" aria-hidden="true">#</a> 获取数据并UI渲染</h3>
<p><img src="@source/.vuepress/public/images/lunbo3.png" alt="图片">
<img src="@source/.vuepress/public/images/lunbo4.png" alt="图片"></p>
<h3 id="关于-swiper-组件和图片适配方案" tabindex="-1"><a class="header-anchor" href="#关于-swiper-组件和图片适配方案" aria-hidden="true">#</a> 关于 swiper 组件和图片适配方案</h3>
<p><strong>需求:</strong> 不管是哪一种机型,  <strong>让 swiper 组件的高度 等于 图片的高度</strong></p>
<p><strong>思路</strong>:</p>
<ol>
<li>图片加载完后, 获取图片的高度</li>
<li>获取到的图片高度 赋值给 swiper 组件的高度</li>
</ol>
<p><strong>实现:</strong></p>
<p>怎么获取到图片加载完后的时机? image 组件有 <strong>bindload</strong> 事件,
<img src="@source/.vuepress/public/images/bindload.png" alt="图片">
可以监听这个事件</p>
<p>那下一步怎么获取到<strong>图片的高度</strong>呢?  <a href="https://developers.weixin.qq.com/miniprogram/dev/api/wxml/wx.createSelectorQuery.html" target="_blank" rel="noopener noreferrer">wx.createSelectorQuery()<ExternalLinkIcon/></a></p>
<p><img src="@source/.vuepress/public/images/lunbo5.png" alt="图片"></p>
<p>data 里的 swiperHeight 动态设置到 swiper 的高度上
<img src="@source/.vuepress/public/images/lunbo6.png" alt="图片"></p>
<p>但这次发现上面的(获取高度)逻辑代码有点难记, 所以封装一下, 在里面用promise 直接 resolve(res)
<img src="@source/.vuepress/public/images/rect1.png" alt="图片">
<img src="@source/.vuepress/public/images/rect2.png" alt="图片"></p>
<p><strong>最终</strong>:
<img src="@source/.vuepress/public/images/rect3.png" alt="图片"></p>
<h2 id="标题组件-area-header" tabindex="-1"><a class="header-anchor" href="#标题组件-area-header" aria-hidden="true">#</a> 标题组件 area-header</h2>
<p><img src="@source/.vuepress/public/images/areaheader1.png" alt="图片"></p>
<p>封装成一个组件, components 下创先 area-header 目录</p>
<p><img src="@source/.vuepress/public/images/ah2.png" alt="图片"></p>
<p>父组件中可以通过 properties 指定对应的文字, 并且可以通过 showRight 控制是否显示/隐藏 右边&quot;更多&quot;功能
<img src="@source/.vuepress/public/images/ah3.png" alt="图片">
<img src="@source/.vuepress/public/images/ah4.png" alt="图片"></p>
<p>最后在 home-music 页面引用 area-header 并使用</p>
<p><img src="@source/.vuepress/public/images/ah6.png" alt="图片"></p>
<h2 id="全局状态管理" tabindex="-1"><a class="header-anchor" href="#全局状态管理" aria-hidden="true">#</a> 全局状态管理</h2>
<p>用一个库 <a href="https://github.com/coderwhy/hy-event-store" target="_blank" rel="noopener noreferrer">hy-event-store<ExternalLinkIcon/></a></p>
<p>这个是一个基于事件的全局状态管理工具，可以在Vue、React、<strong>小程序</strong>等任何地方使用</p>
<p><strong>安装</strong>:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm install hy-event-store
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><strong>数据共享 示例</strong>:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> HYEventStore <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"hy-event-store"</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> axios <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'axios'</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> eventStore <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HYEventStore</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"why"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">friends</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"abc"</span><span class="token punctuation">,</span> <span class="token string">"cba"</span><span class="token punctuation">,</span> <span class="token string">"nba"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">banners</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">recommends</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">getHomeMultidata</span><span class="token punctuation">(</span><span class="token parameter">ctx</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span>
      axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"http://123.207.32.32:8000/home/multidata"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> banner <span class="token operator">=</span> res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>data<span class="token punctuation">.</span>banner
        <span class="token keyword">const</span> recommend <span class="token operator">=</span> res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>data<span class="token punctuation">.</span>recommend
        <span class="token comment">// 赋值</span>
        ctx<span class="token punctuation">.</span>banners <span class="token operator">=</span> banner
        ctx<span class="token punctuation">.</span>recommends <span class="token operator">=</span> recommend
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 数据监听</span>
eventStore<span class="token punctuation">.</span><span class="token function">onState</span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"监听name:"</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

eventStore<span class="token punctuation">.</span><span class="token function">onState</span><span class="token punctuation">(</span><span class="token string">"friends"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"监听friends:"</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

eventStore<span class="token punctuation">.</span><span class="token function">onState</span><span class="token punctuation">(</span><span class="token string">"banners"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"监听banners:"</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

eventStore<span class="token punctuation">.</span><span class="token function">onState</span><span class="token punctuation">(</span><span class="token string">"recommends"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"监听recommends"</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 数据变化</span>
<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  eventStore<span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">,</span> <span class="token string">"lilei"</span><span class="token punctuation">)</span>
  eventStore<span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token string">"friends"</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">"kobe"</span><span class="token punctuation">,</span> <span class="token string">"james"</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

eventStore<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">"getHomeMultidata"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br></div></div></template>
