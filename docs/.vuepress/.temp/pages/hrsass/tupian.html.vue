<template><h1 id="图片上传预览及打印" tabindex="-1"><a class="header-anchor" href="#图片上传预览及打印" aria-hidden="true">#</a> 图片上传预览及打印</h1>
<h2 id="_1-封装上传图片组件-上传组件需求分析" tabindex="-1"><a class="header-anchor" href="#_1-封装上传图片组件-上传组件需求分析" aria-hidden="true">#</a> 1. 封装上传图片组件 - 上传组件需求分析</h2>
<p>梳理整个的上传过程</p>
<p><strong>初始化cos对象参数</strong></p>
<table>
<thead>
<tr>
<th style="text-align:left">名称</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">SecretId</td>
<td style="text-align:left">开发者拥有的项目身份识别 ID，用以身份认证，可在 <a href="https://console.cloud.tencent.com/capi" target="_blank" rel="noopener noreferrer">API 密钥管理<ExternalLinkIcon/></a> 页面获取</td>
</tr>
<tr>
<td style="text-align:left">SecretKey</td>
<td style="text-align:left">开发者拥有的项目身份密钥，可在 <a href="https://console.cloud.tencent.com/capi" target="_blank" rel="noopener noreferrer">API 密钥管理<ExternalLinkIcon/></a> 页面获取</td>
</tr>
</tbody>
</table>
<blockquote>
<p>注意，上述的参数我们在本次开发过程中，直接将参数放置在前端代码中存储，但是腾讯云本身是不建议这么做的，因为**<code>敏感信息</code>**放在前端很容易被捕获，由于我们本次是测试研发，所以这个过程可以忽略</p>
<p>正确的做法应该是，通过网站调用接口换取敏感信息</p>
</blockquote>
<p><a href="https://cloud.tencent.com/document/product/436/11459" target="_blank" rel="noopener noreferrer">相关文档<ExternalLinkIcon/></a></p>
<p>实例化 上传sdk</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> cos <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">COS</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">SecretId</span><span class="token operator">:</span> <span class="token string">'COS_SECRETID'</span><span class="token punctuation">,</span> <span class="token comment">// 身份识别 ID</span>
    <span class="token literal-property property">SecretKey</span><span class="token operator">:</span> <span class="token string">'COS_SECRETKEY'</span><span class="token punctuation">,</span> <span class="token comment">// 身份密钥</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><blockquote>
<p>到目前为止，我们上传图片准备的内容就已经OK，接下来，我们在**<code>src/componets</code>** 新建一个**<code>ImageUpload</code>** 组件</p>
</blockquote>
<p>该组件需要满足什么要求呢？</p>
<ol>
<li>可以显示传入的图片地址</li>
<li>可以删除传入的图片地址</li>
<li>可以上传图片到云服务器</li>
<li>上传到腾讯云之后，可以返回图片地址，显示</li>
<li>上传成功之后，可以回调成功函数</li>
</ol>
<p>看似需求很明确，但是它真正的实现很复杂，通过一个图来看一下
<img src="@source/.vuepress/public/images/tupianliucheng.png" alt="图片">
从上图中，可以看到，实际上是有两种场景的，本地场景和已经上传的场景</p>
<h2 id="_2-封装上传组件-代码实现" tabindex="-1"><a class="header-anchor" href="#_2-封装上传组件-代码实现" aria-hidden="true">#</a> 2. 封装上传组件 - 代码实现</h2>
<p>实现上传组件的代码部分</p>
<blockquote>
<p>JavaScript SDK 需浏览器支持基本的 HTML5 特性（支持 IE10 以上浏览器），以便支持 ajax 上传文件和计算文件 MD5 值。</p>
</blockquote>
<h3 id="_2-1-新建文件上传组件" tabindex="-1"><a class="header-anchor" href="#_2-1-新建文件上传组件" aria-hidden="true">#</a> 2.1 新建文件上传组件</h3>
<p><strong>安装JavaScript SDK</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">npm</span> i cos-js-sdk-v5 --save
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><strong>新建上传图片组件</strong> <strong>src/components/ImageUpload/index.vue</strong></p>
<blockquote>
<p>上传组件，可以沿用 element的 el-upload 组件,并且采用照片墙的模式 <strong><code>list-type=&quot;picture-card&quot;</code></strong> <a href="https://element.eleme.io/#/zh-CN/component/upload#zhao-pian-qiang" target="_blank" rel="noopener noreferrer">el-upload<ExternalLinkIcon/></a></p>
</blockquote>
<p><strong>放置el-upload组件</strong></p>
<p><img src="@source/.vuepress/public/images/upload01.png" alt="图片"></p>
<p><strong>全局注册组件</strong></p>
<p><img src="@source/.vuepress/public/images/quanju55.png" alt="图片"></p>
<h3 id="_2-2-点击图片进行预览" tabindex="-1"><a class="header-anchor" href="#_2-2-点击图片进行预览" aria-hidden="true">#</a> 2.2 点击图片进行预览</h3>
<h4 id="限定上传的图片数量-和-action" tabindex="-1"><a class="header-anchor" href="#限定上传的图片数量-和-action" aria-hidden="true">#</a> <strong>限定上传的图片数量 和 action</strong></h4>
<p><a href="https://element.eleme.io/#/zh-CN/component/upload#attribute" target="_blank" rel="noopener noreferrer">el-upload<ExternalLinkIcon/></a></p>
<p><img src="@source/.vuepress/public/images/upload02.png" alt="图片"></p>
<blockquote>
<p>action 为什么给 #， 因为前面我们讲过了，要上传到腾讯云，需要自定义的上传方式, action 给个#防止报错</p>
</blockquote>
<p><strong>预览图片实现思路:</strong></p>
<p><img src="@source/.vuepress/public/images/preview1.png" alt="图片">
<img src="@source/.vuepress/public/images/onpreview.png" alt="图片">
<img src="@source/.vuepress/public/images/filelist.png" alt="图片">
<img src="@source/.vuepress/public/images/yulan1.png" alt="图片"></p>
<h3 id="_2-3-根据上传数量控制上传按钮" tabindex="-1"><a class="header-anchor" href="#_2-3-根据上传数量控制上传按钮" aria-hidden="true">#</a> 2.3 根据上传数量控制上传按钮</h3>
<p><img src="@source/.vuepress/public/images/shangchuan1.png" alt="图片">
<strong>基本思路</strong>: 计算属性 得到 this.fileList长度是否为 1 , 并用 :class 控制 display:none
<img src="@source/.vuepress/public/images/yige1.png" alt="图片">
<img src="@source/.vuepress/public/images/yige2.png" alt="图片">
<img src="@source/.vuepress/public/images/yige.png" alt="图片">
<strong>注意</strong>:这里 <code>&lt;style&gt;</code>不加 scoped</p>
<h3 id="_2-4-删除图片-和-添加图片" tabindex="-1"><a class="header-anchor" href="#_2-4-删除图片-和-添加图片" aria-hidden="true">#</a> 2.4 删除图片 和 添加图片</h3>
<h4 id="删除图片" tabindex="-1"><a class="header-anchor" href="#删除图片" aria-hidden="true">#</a> 删除图片</h4>
<p><img src="@source/.vuepress/public/images/onremove.png" alt="图片"></p>
<p><img src="@source/.vuepress/public/images/onremove2.png" alt="图片"></p>
<p><img src="@source/.vuepress/public/images/shanchutupian1.png" alt="图片"></p>
<h4 id="添加图片" tabindex="-1"><a class="header-anchor" href="#添加图片" aria-hidden="true">#</a> 添加图片</h4>
<p><img src="@source/.vuepress/public/images/onchange1.png" alt="图片">
<img src="@source/.vuepress/public/images/tianjiatupian.png" alt="图片"></p>
<p><img src="@source/.vuepress/public/images/shanchutianjia.png" alt="图片"></p>
<h3 id="_2-5-上传之前检查" tabindex="-1"><a class="header-anchor" href="#_2-5-上传之前检查" aria-hidden="true">#</a> 2.5 上传之前检查</h3>
<blockquote>
<p>控制上传图片的类型和上传大小， 如果不满足条件 返回false上传就会停止</p>
</blockquote>
<p><img src="@source/.vuepress/public/images/bu1.png" alt="图片"></p>
<p><img src="@source/.vuepress/public/images/bu2.png" alt="图片">
<img src="@source/.vuepress/public/images/bu3.png" alt="图片"></p>
<h3 id="_2-6-上传动作调用上传腾讯云" tabindex="-1"><a class="header-anchor" href="#_2-6-上传动作调用上传腾讯云" aria-hidden="true">#</a> 2.6 上传动作调用上传腾讯云</h3>
<p><strong>上传动作为el-upload的http-request属性</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code> <span class="token operator">:</span>http<span class="token operator">-</span>request<span class="token operator">=</span><span class="token string">"upload"</span>

    <span class="token comment">// 自定义上传动作 有个参数 有个file对象，是我们需要上传到腾讯云服务器的内容</span>
    <span class="token function">upload</span><span class="token punctuation">(</span><span class="token parameter">params</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>params<span class="token punctuation">.</span>file<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><img src="@source/.vuepress/public/images/uploadfile1.png" alt="图片"></p>
<blockquote>
<p>需要在该方法中，调用腾讯云的上传方法</p>
</blockquote>
<p><a href="https://cloud.tencent.com/document/product/436/35649#.E7.AE.80.E5.8D.95.E4.B8.8A.E4.BC.A0.E5.AF.B9.E8.B1.A1" target="_blank" rel="noopener noreferrer">腾讯云文档地址<ExternalLinkIcon/></a></p>
<p>身份 ID 和 密钥 可以通过腾讯云平台获取</p>
<p>登录 <a href="https://console.cloud.tencent.com/capi" target="_blank" rel="noopener noreferrer">访问管理控制台<ExternalLinkIcon/></a> ，获取我的项目 SecretId 和 SecretKey</p>
<p><img src="@source/.vuepress/public/images/jiandanshangchuan.png" alt="图片"></p>
<p><strong>实现代码</strong> :</p>
<p><img src="@source/.vuepress/public/images/secret.png" alt="图片">
<img src="@source/.vuepress/public/images/upload555.png" alt="图片"></p>
<h3 id="_2-7-上传成功之后处理返回数据" tabindex="-1"><a class="header-anchor" href="#_2-7-上传成功之后处理返回数据" aria-hidden="true">#</a> 2.7 上传成功之后处理返回数据</h3>
<blockquote>
<p>如何处理返回成功的返回数据</p>
</blockquote>
<p>确定要上传记录id
<img src="@source/.vuepress/public/images/shangchuanupload1.png" alt="图片"></p>
<blockquote>
<p>处理返回数据</p>
</blockquote>
<p><img src="@source/.vuepress/public/images/shanchuupload2.png" alt="图片"></p>
<h3 id="_2-8-上传的进度条显示" tabindex="-1"><a class="header-anchor" href="#_2-8-上传的进度条显示" aria-hidden="true">#</a> 2.8 上传的进度条显示</h3>
<p><img src="@source/.vuepress/public/images/jindutiao1.png" alt="图片"></p>
<blockquote>
<p>为了再上传图片过程中显示进度条，我们可以使用element-ui的进度条显示当前的上传进度</p>
</blockquote>
<p><strong>放置进度条</strong>
<img src="@source/.vuepress/public/images/progress1.png" alt="图片">
<img src="@source/.vuepress/public/images/progress12.png" alt="图片">
<img src="@source/.vuepress/public/images/progress2.png" alt="图片">
<strong>通过腾讯云sdk监听上传进度</strong>
<img src="@source/.vuepress/public/images/progress3.png" alt="图片"></p>
<p>通过上面的代码，会发现，把上传之后的图片信息都给了  <strong><code>fileList数据</code></strong> ，那么在应用时，就可以直接获取该实例的 <strong><code>fileList数据即可</code></strong></p>
<h2 id="_3-在员工详情中应用上传组件" tabindex="-1"><a class="header-anchor" href="#_3-在员工详情中应用上传组件" aria-hidden="true">#</a> 3. 在员工详情中应用上传组件</h2>
<h3 id="_3-1-将员工的头像和证件照赋值给上传组件" tabindex="-1"><a class="header-anchor" href="#_3-1-将员工的头像和证件照赋值给上传组件" aria-hidden="true">#</a> 3.1  将员工的头像和证件照赋值给上传组件</h3>
<p>在 <strong><code>user-info.vue</code></strong> 中放置上传组件</p>
<p><strong>员工头像</strong></p>
<p><img src="@source/.vuepress/public/images/sphoto1.png" alt="图片"></p>
<p><strong>读取时赋值头像</strong></p>
<p><img src="@source/.vuepress/public/images/sphoto2.png" alt="图片"></p>
<p><strong>员工证件照</strong></p>
<p><img src="@source/.vuepress/public/images/sphoto3.png" alt="图片"></p>
<p><strong>读取时赋值照片</strong></p>
<p><img src="@source/.vuepress/public/images/sphoto4.png" alt="图片"></p>
<h3 id="_3-2-保存时处理头像照片和证件照的保存" tabindex="-1"><a class="header-anchor" href="#_3-2-保存时处理头像照片和证件照的保存" aria-hidden="true">#</a> 3.2 保存时处理头像照片和证件照的保存</h3>
<p><strong>当点击保存更新时，获取图片的内容</strong>
<img src="@source/.vuepress/public/images/save01.png" alt="图片">
<strong>下同</strong>
<img src="@source/.vuepress/public/images/save555.png" alt="图片"></p>
<h2 id="_4-员工列表显示图片" tabindex="-1"><a class="header-anchor" href="#_4-员工列表显示图片" aria-hidden="true">#</a> 4. 员工列表显示图片</h2>
<p><img src="@source/.vuepress/public/images/yuangongliebiao1.png" alt="图片"></p>
<blockquote>
<p>这是因为有的员工的头像的地址为空，给img赋值空的src不能触发错误事件，针对这一特点，我们需要对指令进行升级</p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> imageerror <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">inserted</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> bindings</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//   图片异常的逻辑</span>
    <span class="token comment">//  监听img标签的错误事件  因为图片加载失败 会触发  onerror事件</span>
    el<span class="token punctuation">.</span>src <span class="token operator">=</span> el<span class="token punctuation">.</span>src <span class="token operator">||</span> bindings<span class="token punctuation">.</span>value

    el<span class="token punctuation">.</span><span class="token function-variable function">onerror</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 图片失败  赋值一个默认的图片</span>
      el<span class="token punctuation">.</span>src <span class="token operator">=</span> bindings<span class="token punctuation">.</span>value
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">componentUpdated</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> bindings</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    el<span class="token punctuation">.</span>src <span class="token operator">=</span> el<span class="token punctuation">.</span>src <span class="token operator">||</span> bindings<span class="token punctuation">.</span>value
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="_5-图片地址生成二维码" tabindex="-1"><a class="header-anchor" href="#_5-图片地址生成二维码" aria-hidden="true">#</a> 5. 图片地址生成二维码</h2>
<blockquote>
<p>想完成这样一个功能，当我们拥有头像地址时，将头像地址生成一个二维码，用手机扫码来访问</p>
</blockquote>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm i qrcode
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><blockquote>
<p>qrcode 的用法是</p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>QrCode<span class="token punctuation">.</span><span class="token function">toCanvas</span><span class="token punctuation">(</span>dom<span class="token punctuation">,</span> info<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><blockquote>
<p>dom为一个canvas的dom对象， info为转化二维码的信息</p>
</blockquote>
<p>我们尝试将canvas标签放到dialog的弹层中</p>
<p><img src="@source/.vuepress/public/images/erweima1.png" alt="图片"></p>
<p>在点击员工的图片时，显示弹层，并将图片地址转化成二维码
<img src="@source/.vuepress/public/images/erweima3.png" alt="图片"></p>
<p><img src="@source/.vuepress/public/images/erweima2.png" alt="图片">
<img src="@source/.vuepress/public/images/erweima.png" alt="图片"></p>
<h2 id="_6-打印员工信息" tabindex="-1"><a class="header-anchor" href="#_6-打印员工信息" aria-hidden="true">#</a> 6. 打印员工信息</h2>
<h3 id="_6-1-新建打印页面及路由" tabindex="-1"><a class="header-anchor" href="#_6-1-新建打印页面及路由" aria-hidden="true">#</a> 6.1 新建打印页面及路由</h3>
<p><img src="@source/.vuepress/public/images/dayin1.png" alt="图片">
<img src="@source/.vuepress/public/images/dayin2.png" alt="图片"></p>
<blockquote>
<p>该页面内容实际上就是读取个人和详情的接口数据，根据传入的type类型决定显示个人还是岗位</p>
</blockquote>
<p>type为 **<code>personal</code>**时显示个人，为 <strong><code>job</code></strong> 时显示岗位</p>
<h4 id="新建打印页面路由" tabindex="-1"><a class="header-anchor" href="#新建打印页面路由" aria-hidden="true">#</a> 新建打印页面路由</h4>
<p><img src="@source/.vuepress/public/images/dayin3.png" alt="图片"></p>
<p>完成详情到打印的跳转</p>
<h4 id="个人" tabindex="-1"><a class="header-anchor" href="#个人" aria-hidden="true">#</a> 个人</h4>
<p><img src="@source/.vuepress/public/images/dayin4.png" alt="图片"></p>
<h4 id="岗位" tabindex="-1"><a class="header-anchor" href="#岗位" aria-hidden="true">#</a> 岗位</h4>
<p><img src="@source/.vuepress/public/images/dayin5.png" alt="图片"></p>
<h3 id="_6-2-用-vue-print-nb-进行打印" tabindex="-1"><a class="header-anchor" href="#_6-2-用-vue-print-nb-进行打印" aria-hidden="true">#</a> 6.2 用 vue-print-nb 进行打印</h3>
<p>首先，打印功能我们借助一个比较流行的插件</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">npm</span> i vue-print-nb
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><blockquote>
<p>它的用法是</p>
</blockquote>
<p>首先注册该插件</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> Print <span class="token keyword">from</span> <span class="token string">'vue-print-nb'</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Print<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><img src="@source/.vuepress/public/images/vprint0.png" alt="图片">
使用 <strong>v-print</strong> 指令的方式进行打印</p>
<p>print.vue 组件 :</p>
<p><img src="@source/.vuepress/public/images/vprint1.png" alt="图片">
<img src="@source/.vuepress/public/images/vprint2.png" alt="图片"></p>
<p><img src="@source/.vuepress/public/images/vprint4.png" alt="图片"></p>
</template>
