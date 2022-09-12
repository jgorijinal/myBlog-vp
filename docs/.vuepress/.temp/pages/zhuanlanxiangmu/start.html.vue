<template><h1 id="起步" tabindex="-1"><a class="header-anchor" href="#起步" aria-hidden="true">#</a> 起步</h1>
<h2 id="初始化项目" tabindex="-1"><a class="header-anchor" href="#初始化项目" aria-hidden="true">#</a> 初始化项目</h2>
<p>使用 vue-cli 创建项目</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>vue create zheye
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="css-样式解决方案-bootstrap" tabindex="-1"><a class="header-anchor" href="#css-样式解决方案-bootstrap" aria-hidden="true">#</a> CSS 样式解决方案 - Bootstrap</h3>
<p><a href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer">Bootstrap 官网<ExternalLinkIcon/></a></p>
<p>安装</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm i bootstrap@5.2.1
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="开发流程" tabindex="-1"><a class="header-anchor" href="#开发流程" aria-hidden="true">#</a> 开发流程</h3>
<ul>
<li>
<p>将 UI 划分出组件的层级</p>
</li>
<li>
<p>创建应用的静态版本</p>
</li>
</ul>
<h3 id="columnlist-组件编码" tabindex="-1"><a class="header-anchor" href="#columnlist-组件编码" aria-hidden="true">#</a> columnList 组件编码</h3>
<p><img src="@source/.vuepress/public/images/columnlist0.png" alt="图片">
<img src="@source/.vuepress/public/images/columnlist1.png" alt="图片">
columnList 需要接受的是有 <code>columnProps</code>类型对象 组成的数组</p>
<p>想把构造函数断言类型需要使用 <code>PropType</code>, PropType 接受泛型</p>
<p>PropType 作用 :</p>
<ul>
<li>写代码有补全功能, 有提示</li>
</ul>
<p>在 App.vue 注册使用测试一下 columnList.vue 组件
<img src="@source/.vuepress/public/images/columnlist0.png" alt="图片"></p>
<p>测试数据:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>   <span class="token keyword">const</span> <span class="token literal-property property">testData</span><span class="token operator">:</span> columnProps<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'test1的专栏'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">description</span><span class="token operator">:</span>
          <span class="token string">'这是的test1专栏，有一段非常有意思的简介，可以更新一下欧, 这是的test1专栏，有一段非常有意思的简介，可以更新一下欧'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">avatar</span><span class="token operator">:</span>
          <span class="token string">'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_150,w_150'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'test2的专栏'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">'这是的test2专栏，有一段非常有意思的简介，可以更新一下欧'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">avatar</span><span class="token operator">:</span>
          <span class="token string">'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'test3的专栏'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">description</span><span class="token operator">:</span>
          <span class="token string">'这是的test1专栏，有一段非常有意思的简介，可以更新一下欧 这是的test1专栏，有一段非常有意思的简介，可以更新一下欧'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">avatar</span><span class="token operator">:</span> <span class="token string">'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100'</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'test4的专栏'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">'这是的test2专栏，有一段非常有意思的简介，可以更新一下欧'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">avatar</span><span class="token operator">:</span>
          <span class="token string">'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><h3 id="columnlist-组件使用-bootstrap-美化" tabindex="-1"><a class="header-anchor" href="#columnlist-组件使用-bootstrap-美化" aria-hidden="true">#</a> columnList 组件使用 bootstrap 美化</h3>
<p>使用 bootstrap 的 grid , card
<img src="@source/.vuepress/public/images/cl1.png" alt="图片">
<img src="@source/.vuepress/public/images/cl2.png" alt="图片"></p>
<p>效果:
<img src="@source/.vuepress/public/images/cl3.png" alt="图片"></p>
<h3 id="globalheader-组件编写" tabindex="-1"><a class="header-anchor" href="#globalheader-组件编写" aria-hidden="true">#</a> GlobalHeader 组件编写</h3>
<p>设计图:
<img src="@source/.vuepress/public/images/globalheader1.png" alt="图片"></p>
<p>分析:</p>
<p><img src="@source/.vuepress/public/images/globalheader2.png" alt="图片"></p>
<p><strong>components/GlobalHeader.vue</strong></p>
<p><img src="@source/.vuepress/public/images/gh3.png" alt="图片">
<img src="@source/.vuepress/public/images/gh4.png" alt="图片"></p>
<p>然后在 App.vue 注册使用测试一下 columnList.vue 组件
<img src="@source/.vuepress/public/images/gh5.png" alt="图片"></p>
<p>最终效果:
<img src="@source/.vuepress/public/images/gh0.png" alt="图片"></p>
<h3 id="dropdown-组件基本功能编码" tabindex="-1"><a class="header-anchor" href="#dropdown-组件基本功能编码" aria-hidden="true">#</a> Dropdown 组件基本功能编码</h3>
<p><img src="@source/.vuepress/public/images/dd0.png" alt="图片"></p>
<p><strong>components/Dropdown.vue</strong>
<img src="@source/.vuepress/public/images/dd1.png" alt="图片"></p>
</template>
