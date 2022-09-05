<template><h1 id="文章评论" tabindex="-1"><a class="header-anchor" href="#文章评论" aria-hidden="true">#</a> 文章评论</h1>
<h2 id="_1-展示文章评论列表" tabindex="-1"><a class="header-anchor" href="#_1-展示文章评论列表" aria-hidden="true">#</a> 1. 展示文章评论列表</h2>
<h3 id="_1-1-准备组件" tabindex="-1"><a class="header-anchor" href="#_1-1-准备组件" aria-hidden="true">#</a> 1.1  准备组件</h3>
<p>创建组件  src/views/article/components/comment-list.vue</p>
<p><a href="https://vant-ui.github.io/vant/v2/#/zh-CN/list" target="_blank" rel="noopener noreferrer">list 组件<ExternalLinkIcon/></a></p>
<h3 id="_1-2-获取数据并展示" tabindex="-1"><a class="header-anchor" href="#_1-2-获取数据并展示" aria-hidden="true">#</a> 1.2 获取数据并展示</h3>
<p><img src="@source/.vuepress/public/images/comment5.png" alt="图片"></p>
<p>步骤：</p>
<ul>
<li>封装接口</li>
<li>请求获取数据</li>
<li>处理模板</li>
</ul>
<p>1、在 <code>api/comment.js</code> 中添加封装请求方法
<img src="@source/.vuepress/public/images/comment1.png" alt="图片"></p>
<p>2、请求获取数据
<img src="@source/.vuepress/public/images/comment2.png" alt="图片">
<img src="@source/.vuepress/public/images/comment3.png" alt="图片">
<img src="@source/.vuepress/public/images/comment4.png" alt="图片"></p>
<h3 id="_1-3-展示文章评论总数量" tabindex="-1"><a class="header-anchor" href="#_1-3-展示文章评论总数量" aria-hidden="true">#</a> 1.3 展示文章评论总数量</h3>
<p><img src="@source/.vuepress/public/images/comall.png" alt="图片"></p>
<p>comment-list.vue 评论组件:
<img src="@source/.vuepress/public/images/comall1.png" alt="图片"></p>
<p>父组件:
<img src="@source/.vuepress/public/images/comall2.png" alt="图片">
<img src="@source/.vuepress/public/images/comall3.png" alt="图片"></p>
<p>父组件监听子组件的事件
<img src="@source/.vuepress/public/images/comall4.png" alt="图片"></p>
<h3 id="_1-4-展示文章评论项" tabindex="-1"><a class="header-anchor" href="#_1-4-展示文章评论项" aria-hidden="true">#</a> 1.4 展示文章评论项</h3>
<p><img src="@source/.vuepress/public/images/citem1.png" alt="图片"></p>
<p>评论项封装一个组件 comment-item.vue</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>van-cell</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>comment-item<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>van-image</span>
      <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>icon<span class="token punctuation">"</span></span>
      <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>avatar<span class="token punctuation">"</span></span>
      <span class="token attr-name">round</span>
      <span class="token attr-name">fit</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cover<span class="token punctuation">"</span></span>
      <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://img.yzcdn.cn/vant/cat.jpeg<span class="token punctuation">"</span></span>
    <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>title<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>title-wrap<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>user-name<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>用户名称<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>van-button</span>
        <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>like-btn<span class="token punctuation">"</span></span>
        <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>good-job-o<span class="token punctuation">"</span></span>
      <span class="token punctuation">></span></span>赞<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>van-button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>label<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>comment-content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>这是评论内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bottom-info<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>comment-pubdate<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>4天前<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>van-button</span>
          <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>reply-btn<span class="token punctuation">"</span></span>
          <span class="token attr-name">round</span>
        <span class="token punctuation">></span></span>回复 0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>van-button</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>van-cell</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'CommentItem'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">data</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">created</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">mounted</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>less<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
<span class="token selector">.comment-item</span> <span class="token punctuation">{</span>
  <span class="token selector">.avatar</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 72px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 72px<span class="token punctuation">;</span>
    <span class="token property">margin-right</span><span class="token punctuation">:</span> 25px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.title-wrap</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
    <span class="token property">justify-content</span><span class="token punctuation">:</span> space-between<span class="token punctuation">;</span>
    <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token selector">.user-name</span> <span class="token punctuation">{</span>
      <span class="token property">color</span><span class="token punctuation">:</span> #406599<span class="token punctuation">;</span>
      <span class="token property">font-size</span><span class="token punctuation">:</span> 26px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.comment-content</span> <span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 32px<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #222222<span class="token punctuation">;</span>
    <span class="token property">word-break</span><span class="token punctuation">:</span> break-all<span class="token punctuation">;</span>
    <span class="token property">text-align</span><span class="token punctuation">:</span> justify<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.comment-pubdate</span> <span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 19px<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #222<span class="token punctuation">;</span>
    <span class="token property">margin-right</span><span class="token punctuation">:</span> 25px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.bottom-info</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
    <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.reply-btn</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 135px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 48px<span class="token punctuation">;</span>
    <span class="token property">line-height</span><span class="token punctuation">:</span> 48px<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 21px<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #222<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.like-btn</span> <span class="token punctuation">{</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 19px<span class="token punctuation">;</span>
    <span class="token property">line-height</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
    <span class="token property">margin-right</span><span class="token punctuation">:</span> 7px<span class="token punctuation">;</span>
    <span class="token selector">.van-icon</span> <span class="token punctuation">{</span>
      <span class="token property">font-size</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br></div></div><p>父组件绑定
<img src="@source/.vuepress/public/images/citem4.png" alt="图片"></p>
<p>绑定模板
<img src="@source/.vuepress/public/images/citem2.png" alt="图片">
<img src="@source/.vuepress/public/images/citem3.png" alt="图片"></p>
<h2 id="_2-评论点赞-v-for-和-sync的bug" tabindex="-1"><a class="header-anchor" href="#_2-评论点赞-v-for-和-sync的bug" aria-hidden="true">#</a> 2. 评论点赞(v-for 和 .sync的bug)</h2>
<p><img src="@source/.vuepress/public/images/clike.png" alt="图片"></p>
<p>1、在 <code>api/comment.js</code> 中添加封装两个接口
<img src="@source/.vuepress/public/images/clike0.png" alt="图片">
2、然后给评论项中的 <code>like</code> 图标注册点击事件
<img src="@source/.vuepress/public/images/clike1.png" alt="图片">
3、在事件处理函数中
<img src="@source/.vuepress/public/images/clike2.png" alt="图片">
4、父组件使用 .sync , 但这里需要注意的是<strong>v-for 和 .sync</strong>不能一起绑定因为<strong>会报错</strong>, 解决办法是用<strong>索引</strong>值取值 代替原来的值
<img src="@source/.vuepress/public/images/clike3.png" alt="图片"></p>
<h2 id="_3-发布文章评论" tabindex="-1"><a class="header-anchor" href="#_3-发布文章评论" aria-hidden="true">#</a> 3. 发布文章评论</h2>
<h3 id="_3-1-准备组件" tabindex="-1"><a class="header-anchor" href="#_3-1-准备组件" aria-hidden="true">#</a> 3.1 准备组件</h3>
<p><a href="https://vant-ui.github.io/vant/v2/#/zh-CN/popup" target="_blank" rel="noopener noreferrer">popup弹出层<ExternalLinkIcon/></a></p>
<p><img src="@source/.vuepress/public/images/pinglun0.png" alt="图片"></p>
<p>在主页 article/index.vue:
<img src="@source/.vuepress/public/images/tan1.png" alt="图片">
<img src="@source/.vuepress/public/images/tan2.png" alt="图片">
<img src="@source/.vuepress/public/images/tan3.png" alt="图片"></p>
<h3 id="_3-2-封装弹出层内部的组件" tabindex="-1"><a class="header-anchor" href="#_3-2-封装弹出层内部的组件" aria-hidden="true">#</a> 3.2 封装弹出层内部的组件</h3>
<p><img src="@source/.vuepress/public/images/postc.png" alt="图片"></p>
<p>封装 src/views/article/components/comment-post.vue 组件</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>post-comment<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>van-field</span>
      <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>post-field<span class="token punctuation">"</span></span>
      <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>message<span class="token punctuation">"</span></span>
      <span class="token attr-name">rows</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span>
      <span class="token attr-name">autosize</span>
      <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>textarea<span class="token punctuation">"</span></span>
      <span class="token attr-name">maxlength</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>50<span class="token punctuation">"</span></span>
      <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>优质评论将会被优先展示<span class="token punctuation">"</span></span>
      <span class="token attr-name">show-word-limit</span>
    <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>van-button</span>
      <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span>
      <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span>
    <span class="token punctuation">></span></span>发布<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>van-button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'PostComment'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">data</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">''</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>less<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
<span class="token selector">.post-comment</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> flex-end<span class="token punctuation">;</span>
  <span class="token selector">.post-field</span> <span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span> #f5f7f9<span class="token punctuation">;</span>
    <span class="token property">margin-right</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br></div></div><p>在主页注册 index.vue
<img src="@source/.vuepress/public/images/commentp1.png" alt="图片">
<img src="@source/.vuepress/public/images/commentp2.png" alt="图片"></p>
<h3 id="_3-3-发布评论逻辑完成" tabindex="-1"><a class="header-anchor" href="#_3-3-发布评论逻辑完成" aria-hidden="true">#</a> 3.3 发布评论逻辑完成</h3>
<p>1、 封装接口 src/api/comment.js</p>
<p><img src="@source/.vuepress/public/images/addcomment1.png" alt="图片"></p>
<p>2、 comment-post.vue 组件内绑定点击事件, 调接口
<img src="@source/.vuepress/public/images/addcomment2.png" alt="图片">
<img src="@source/.vuepress/public/images/addcomment3.png" alt="图片">
<img src="@source/.vuepress/public/images/addcomment4.png" alt="图片">
3、在主页监听子组件事件, 并通过 $ref 把最新评论 obj 追加到<code>comment-list</code>组件里的<code>list</code>数组, 引起视图变化
<img src="@source/.vuepress/public/images/addcomment5.png" alt="图片">
<img src="@source/.vuepress/public/images/addcomment6.png" alt="图片">
<img src="@source/.vuepress/public/images/addcomment7.png" alt="图片"></p>
<!-- ## 4. 评论回复 

### 4.1 准备回复弹层
![图片](../.vuepress/public/images/huifu0.png)

一、在详情页中使用弹层用来展示文章的回复

在 data 中添加数据用来控制展示回复弹层的显示状态
![图片](../.vuepress/public/images/huifu2.png)

![图片](../.vuepress/public/images/huifu1.png)
在 `comment-item.vue` 组件中点击回复按钮的时候，对外发布自定义事件
![图片](../.vuepress/public/images/huifu3.png)

父组件中使用的位置监听处理
![图片](../.vuepress/public/images/huifu5.png)
![图片](../.vuepress/public/images/huifu6.png)


### 展示评论回复列表

基本思路：

- 回复列表和文章的评论列表几乎是一样的
- 重用把之前封装的评论列表 -->
</template>
