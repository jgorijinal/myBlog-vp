<template><h1 id="登录注册" tabindex="-1"><a class="header-anchor" href="#登录注册" aria-hidden="true">#</a> 登录注册</h1>
<blockquote>
<p>目标</p>
</blockquote>
<ul>
<li>能实现登录页面的布局</li>
<li>能实现基本登录功能</li>
<li>掌握 Vant 中 <strong>Toast 提示组件</strong>的使用</li>
<li>理解 <strong>API 请求模块</strong>的封装</li>
<li>理解发送<strong>验证码</strong>的实现思路</li>
<li>理解 Vant <strong>Form 实现表单验证</strong>的使用</li>
</ul>
<h2 id="_1-准备阶段" tabindex="-1"><a class="header-anchor" href="#_1-准备阶段" aria-hidden="true">#</a> 1. 准备阶段</h2>
<h3 id="_1-1-创建组件并配置路由" tabindex="-1"><a class="header-anchor" href="#_1-1-创建组件并配置路由" aria-hidden="true">#</a> 1.1 创建组件并配置路由</h3>
<p><code>src/views/login/index.vue</code>  创建登录页面并配置路由
<img src="@source/.vuepress/public/images/cj1.png" alt="图片">
访问 <code>/login</code> 查看是否能访问到登录页面</p>
<h3 id="_1-2-布局结构" tabindex="-1"><a class="header-anchor" href="#_1-2-布局结构" aria-hidden="true">#</a> 1.2 布局结构</h3>
<p><img src="@source/.vuepress/public/images/dl111.png" alt="图片"></p>
<p>这里主要使用到三个 Vant 组件：</p>
<ul>
<li><a href="https://youzan.github.io/vant/#/zh-CN/nav-bar" target="_blank" rel="noopener noreferrer">NavBar 导航栏<ExternalLinkIcon/></a></li>
<li><a href="https://youzan.github.io/vant/#/zh-CN/form" target="_blank" rel="noopener noreferrer">Form 表单<ExternalLinkIcon/></a>
<ul>
<li><a href="https://youzan.github.io/vant/#/zh-CN/field" target="_blank" rel="noopener noreferrer">Field 输入框<ExternalLinkIcon/></a></li>
<li><a href="https://youzan.github.io/vant/#/zh-CN/button" target="_blank" rel="noopener noreferrer">Button 按钮<ExternalLinkIcon/></a></li>
</ul>
</li>
</ul>
<blockquote>
<p>一个经验：使用组件库中的现有组件快速布局，再慢慢调整细节，效率更高</p>
</blockquote>
<h3 id="_1-3-布局样式" tabindex="-1"><a class="header-anchor" href="#_1-3-布局样式" aria-hidden="true">#</a> 1.3 布局样式</h3>
<blockquote>
<p>写样式的原则：将公共样式写到全局（<code>src/styles/index.less</code>），将局部样式写到组件内部。</p>
</blockquote>
<p>1、<code>src/styles/index.less</code>  全局样式</p>
<p><img src="@source/.vuepress/public/images/ys1.png" alt="图片"></p>
<p>2、<code>src/views/login/index.vue</code> 登录页面
<img src="@source/.vuepress/public/images/ys2.png" alt="图片">
<img src="@source/.vuepress/public/images/ys3.png" alt="图片"></p>
<h2 id="_2-实现基本登录功能" tabindex="-1"><a class="header-anchor" href="#_2-实现基本登录功能" aria-hidden="true">#</a> 2. 实现基本登录功能</h2>
<ol>
<li>封装登录请求  src/api/user.js
<img src="@source/.vuepress/public/images/tlogin1.png" alt="图片"></li>
</ol>
<p>2、在表单中使用 <code>v-model</code> 绑定对应数据
<img src="@source/.vuepress/public/images/tlogin3.png" alt="图片">
3、给登录按钮注册点击事件, 实现最基本的登录
<img src="@source/.vuepress/public/images/tlogin2.png" alt="图片"></p>
<h2 id="_3-登录状态提示" tabindex="-1"><a class="header-anchor" href="#_3-登录状态提示" aria-hidden="true">#</a> 3. 登录状态提示</h2>
<p>Vant 中内置了<a href="https://youzan.github.io/vant/#/zh-CN/toast" target="_blank" rel="noopener noreferrer">Toast 轻提示<ExternalLinkIcon/></a>组件，可以实现移动端常见的提示效果。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>// 简单文字提示 
Toast("提示内容");

// loading 转圈圈提示
Toast.loading({
  duration: 0, // 持续展示 toast
  message: "加载中...",
  forbidClick: true // 是否禁止背景点击
});

// 成功提示
Toast.success("成功文案");

// 失败提示
Toast.fail("失败文案");
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><blockquote>
<p>提示：在组件中可以直接通过 <code>this.$toast</code> 调用。</p>
</blockquote>
<p>另外需要注意的是：Toast <strong>默认采用单例模式</strong>，即同一时间只会存在一个 Toast，如果需要在同一时间弹出多个 Toast，可以参考下面的示例</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>Toast<span class="token punctuation">.</span><span class="token function">allowMultiple</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> toast1 <span class="token operator">=</span> <span class="token function">Toast</span><span class="token punctuation">(</span><span class="token string">'第一个 Toast'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> toast2 <span class="token operator">=</span> Toast<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string">'第二个 Toast'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

toast1<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
toast2<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>下面给登录功能增加 toast 交互提示
<img src="@source/.vuepress/public/images/tlogin4.png" alt="图片"></p>
<h2 id="_4-表单验证" tabindex="-1"><a class="header-anchor" href="#_4-表单验证" aria-hidden="true">#</a> 4. 表单验证</h2>
<blockquote>
<p>参考文档：<a href="https://youzan.github.io/vant/#/zh-CN/form#xiao-yan-gui-ze" target="_blank" rel="noopener noreferrer">Form 表单验证<ExternalLinkIcon/></a></p>
</blockquote>
<p><img src="@source/.vuepress/public/images/jy01.png" alt="图片">
<img src="@source/.vuepress/public/images/jy02.png" alt="图片"></p>
<h2 id="_5-验证码处理" tabindex="-1"><a class="header-anchor" href="#_5-验证码处理" aria-hidden="true">#</a> 5. 验证码处理</h2>
<h3 id="_5-1-验证手机号" tabindex="-1"><a class="header-anchor" href="#_5-1-验证手机号" aria-hidden="true">#</a> 5.1 验证手机号</h3>
<p>发送验证码之前 (1)需要校验手机号, (2)如果验证通过, 显示倒计时 (3) 调接口
<img src="@source/.vuepress/public/images/native01.png" alt="图片"></p>
<p><img src="@source/.vuepress/public/images/val1.png" alt="图片"></p>
<h3 id="_5-2-使用倒计时组件" tabindex="-1"><a class="header-anchor" href="#_5-2-使用倒计时组件" aria-hidden="true">#</a> 5.2 使用倒计时组件</h3>
<p><img src="@source/.vuepress/public/images/yz.png" alt="图片">
使用倒计时组件
<img src="@source/.vuepress/public/images/yz1.png" alt="图片">
在 data 中添加数据用来控制倒计时的显示和隐藏
<img src="@source/.vuepress/public/images/yz2.png" alt="图片">
<img src="@source/.vuepress/public/images/yz3.png" alt="图片"></p>
<h3 id="_5-3-发送验证码" tabindex="-1"><a class="header-anchor" href="#_5-3-发送验证码" aria-hidden="true">#</a> 5.3 发送验证码</h3>
<h4 id="封装-发送验证码-接口" tabindex="-1"><a class="header-anchor" href="#封装-发送验证码-接口" aria-hidden="true">#</a> 封装 发送验证码 接口</h4>
<p><img src="@source/.vuepress/public/images/yzm0.png" alt="图片"></p>
<h4 id="发送处理" tabindex="-1"><a class="header-anchor" href="#发送处理" aria-hidden="true">#</a> 发送处理</h4>
<p><img src="@source/.vuepress/public/images/429.png" alt="图片">
<img src="@source/.vuepress/public/images/yzm.png" alt="图片"></p>
<h2 id="_6-处理用户-token" tabindex="-1"><a class="header-anchor" href="#_6-处理用户-token" aria-hidden="true">#</a> 6. 处理用户 token</h2>
<p>Token 是用户登录成功之后服务端返回的一个身份令牌，在项目中的多个业务中需要使用到：</p>
<ul>
<li>访问需要授权的 API 接口</li>
<li>校验页面的访问权限</li>
<li>...</li>
</ul>
<p>但是我们只有在第一次用户登录成功之后才能拿到 Token。</p>
<p>所以为了能在其它模块中获取到 Token 数据，我们需要把它存储到一个公共的位置，方便随时取用。</p>
<p>往哪儿存？</p>
<ul>
<li>本地存储
<ul>
<li>获取麻烦</li>
<li>数据不是响应式</li>
</ul>
</li>
<li>Vuex 容器（推荐）
<ul>
<li>获取方便</li>
<li>响应式的</li>
</ul>
</li>
</ul>
<p>使用容器存储 Token 的思路：</p>
<ul>
<li>登录成功，将 Token 存储到 Vuex 容器中
<ul>
<li>获取方便</li>
<li>响应式</li>
</ul>
</li>
<li>为了持久化(刷新页面Vuex数据会清空)，还需要把 Token 放到本地存储
<ul>
<li>持久化</li>
</ul>
</li>
</ul>
<h3 id="_6-1-封装-本地存储-模块" tabindex="-1"><a class="header-anchor" href="#_6-1-封装-本地存储-模块" aria-hidden="true">#</a> 6.1 封装 本地存储 模块</h3>
<p>创建 src/utils/storage.js 模块
<img src="@source/.vuepress/public/images/sto1.png" alt="图片"></p>
<h3 id="_6-2-vuex-的登录封装" tabindex="-1"><a class="header-anchor" href="#_6-2-vuex-的登录封装" aria-hidden="true">#</a> 6.2 Vuex 的登录封装</h3>
<p><img src="@source/.vuepress/public/images/sto2.png" alt="图片"></p>
<p>数据持久化:  为了防止数据刷新丢失 , 需要把数据本分到本地存储, 刷新页面使直接从本地存储里拿
<img src="@source/.vuepress/public/images/sto3.png" alt="图片"></p>
<p>调用 登录 dispatch 请求
<img src="@source/.vuepress/public/images/sto4.png" alt="图片"></p>
<p><img src="@source/.vuepress/public/images/tn1.png" alt="图片"></p>
<h2 id="解决-token-过期" tabindex="-1"><a class="header-anchor" href="#解决-token-过期" aria-hidden="true">#</a> 解决 Token 过期</h2>
<p>登录成功之后后端会返回两个 Token：</p>
<ul>
<li><code>token</code>：访问令牌，有效期 2 小时</li>
<li><code>refresh_token</code>：刷新令牌，有效期 14 天，用于访问令牌过期之后重新获取新的访问令牌</li>
</ul>
<p>项目接口中设定的 <code>Token</code> 有效期是 <code>2 小时</code>，超过有效期服务端会返回 <code>401</code> 表示 Token 无效或过期了。</p>
<p>为什么过期时间这么短？</p>
<ul>
<li>为了安全，例如 Token 被别人盗用</li>
</ul>
<p>过期了怎么办？</p>
<ul>
<li><s>让用户重新登录</s>，用户体验太差了</li>
<li>使用 <code>refresh_token</code> 解决 <code>token</code> 过期</li>
</ul>
</template>
