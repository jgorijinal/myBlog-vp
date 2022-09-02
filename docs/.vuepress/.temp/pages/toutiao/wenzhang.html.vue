<template><h1 id="首页-文章列表" tabindex="-1"><a class="header-anchor" href="#首页-文章列表" aria-hidden="true">#</a> 首页 - 文章列表</h1>
<h2 id="_1-头部导航栏" tabindex="-1"><a class="header-anchor" href="#_1-头部导航栏" aria-hidden="true">#</a> 1. 头部导航栏</h2>
<p><img src="@source/.vuepress/public/images/tb01.png" alt="图片"></p>
<p>1、使用导航栏组件</p>
<p>2、在导航栏组件中插入按钮</p>
<ul>
<li>文本</li>
<li>图标</li>
</ul>
<p>3、样式调整</p>
<ul>
<li>宽高</li>
<li>背景色</li>
<li>边框</li>
<li>文本大小</li>
<li>图标大小</li>
</ul>
<p><img src="@source/.vuepress/public/images/tbdh1.png" alt="图片"></p>
<h2 id="_2-频道列表" tabindex="-1"><a class="header-anchor" href="#_2-频道列表" aria-hidden="true">#</a> 2. 频道列表</h2>
<h3 id="_2-1-使用-tab-标签页组件" tabindex="-1"><a class="header-anchor" href="#_2-1-使用-tab-标签页组件" aria-hidden="true">#</a> 2.1 使用 Tab 标签页组件</h3>
<p>参考：<a href="https://youzan.github.io/vant/#/zh-CN/tab" target="_blank" rel="noopener noreferrer">Tab 标签页组件<ExternalLinkIcon/></a></p>
<p><img src="@source/.vuepress/public/images/bq1.png" alt="图片"></p>
<h3 id="_2-2-样式调整" tabindex="-1"><a class="header-anchor" href="#_2-2-样式调整" aria-hidden="true">#</a> 2.2 样式调整</h3>
<p>（1）<strong>基础样式调整</strong></p>
<ul>
<li>标签项
<ul>
<li>右边框</li>
<li>下边框</li>
<li>宽高</li>
<li>文字大小</li>
<li>文字颜色</li>
</ul>
</li>
<li>底部条
<ul>
<li>宽高</li>
<li>颜色</li>
<li>位置</li>
</ul>
</li>
</ul>
<p><img src="@source/.vuepress/public/images/deep1.png" alt="图片"></p>
<p>（2）<strong>处理汉堡按钮</strong></p>
<p><img src="@source/.vuepress/public/images/ham1.png" alt="图片"></p>
<p>1、使用插槽插入内容</p>
<p><img src="@source/.vuepress/public/images/tabsright1.png" alt="图片"></p>
<p>2、样式调整</p>
<ul>
<li>定位</li>
<li>内容居中</li>
<li>宽高</li>
<li>背景色、透明度</li>
<li>字体图标大小</li>
</ul>
<p>3、使用伪元素设置渐变边框</p>
<ul>
<li>定位</li>
<li>宽高</li>
<li>背景图</li>
<li>背景图填充模式</li>
</ul>
<p>4、添加占位符充当内容区域</p>
<p><img src="@source/.vuepress/public/images/zhan1.png" alt="图片">
<img src="@source/.vuepress/public/images/shrink1.png" alt="图片"></p>
<h3 id="_2-3-展示频道列表" tabindex="-1"><a class="header-anchor" href="#_2-3-展示频道列表" aria-hidden="true">#</a> 2.3 展示频道列表</h3>
<p><img src="@source/.vuepress/public/images/pindao1.png" alt="图片"></p>
<ol>
<li>
<p>封装请求  src/api/user.js
<img src="@source/.vuepress/public/images/uc1.png" alt="图片"></p>
</li>
<li>
<p>调接口, 绑定数据
<img src="@source/.vuepress/public/images/uc2.png" alt="图片">
<img src="@source/.vuepress/public/images/uc3.png" alt="图片"></p>
</li>
</ol>
<h2 id="_3-文章列表" tabindex="-1"><a class="header-anchor" href="#_3-文章列表" aria-hidden="true">#</a> 3. 文章列表</h2>
<h3 id="_3-1-思路分析" tabindex="-1"><a class="header-anchor" href="#_3-1-思路分析" aria-hidden="true">#</a> 3.1 思路分析</h3>
<p>思路<strong>可能</strong>是这样的：</p>
<p>1、找到数据接口
2、封装请求方法
3、在组件中请求获取数据，将数据存储到 data 中
4、模板绑定展示</p>
<p>根据不同的频道加载不同的文章列表，思路可能是这样的：</p>
<ul>
<li>有一个 <code>list</code> 数组，用来存储文章列表</li>
<li>查看 <code>a</code> 频道：请求获取数据，让 <code>list = a</code> 频道文章</li>
<li>查看 <code>b</code> 频道：请求获取数据，让 <code>list = b</code> 频道文章</li>
<li>查看 <code>c</code> 频道：请求获取数据，让 <code>list = c</code> 频道文章</li>
<li>...</li>
</ul>
<p><img src="@source/.vuepress/public/images/wz1.png" alt="图片"></p>
<p>思路没有问题，但是并不是我们想要的效果。</p>
<p>现在想要的效果是：<strong>加载过的数据列表不要重新加载</strong>。</p>
<p>实现思路也非常简单，就是准备<strong>多个 list 数组，每个频道对应一个，查看哪个频道就把数据往哪个频道的列表数组中存放，这样的话就不会导致覆盖问题</strong>。</p>
<p><img src="@source/.vuepress/public/images/wz2.png" alt="图片"></p>
<p>可是有多少频道就得有多少频道文章数组，都一个一个声明的话会非常麻烦，所以这里的建议是利用组件来处理</p>
<p>具体做法就是：</p>
<ul>
<li>封装一个文章列表组件</li>
<li>然后在频道列表中把文章列表遍历出来</li>
</ul>
<p><strong>因为文章列表组件中请求获取文章列表数据需要频道 id，所以 频道 id 应该作为 props 参数传递给文章列表组件，为了方便，我们直接把频道对象传递给文章列表组件就可以了。</strong></p>
<p><img src="@source/.vuepress/public/images/wz3.png" alt="图片"></p>
<p>在文章列表中请求获取对应的列表数据，展示到列表中。</p>
<p>最后把组件在频道列表中遍历出来</p>
<ol>
<li>
<p>创建文章列表组件 src/home/components/article-list.vue
<img src="@source/.vuepress/public/images/lb1.png" alt="图片"></p>
</li>
<li>
<p>在 <code>home/index.vue</code> 中注册使用
<img src="@source/.vuepress/public/images/lb2.png" alt="图片">
<img src="@source/.vuepress/public/images/lb3.png" alt="图片"></p>
</li>
</ol>
<p>为什么标签内容是<strong>懒渲染</strong>的？</p>
<ul>
<li>因为这是 Tab 标签页组件本身支持的默认功能，如果不需要可以通过配置 <code>:lazy-render=&quot;false&quot;</code> 来关闭这个效果</li>
</ul>
<h3 id="_3-2-使用-list-列表组件" tabindex="-1"><a class="header-anchor" href="#_3-2-使用-list-列表组件" aria-hidden="true">#</a> 3.2 使用 List 列表组件</h3>
<p><a href="https://youzan.github.io/vant/#/zh-CN/list" target="_blank" rel="noopener noreferrer">List 列表组件<ExternalLinkIcon/></a>：瀑布流滚动加载，用于展示长列表。</p>
<p><img src="@source/.vuepress/public/images/listzujian.png" alt="图片">
List 组件通过 loading 和 finished 两个变量控制加载状态，
当组件初始化或滚动到到底部时，会触发 load 事件并将 loading 设置成 true，此时可以发起异步操作并更新数据，数据更新完毕后，将 loading 设置成 false 即可。
若数据已全部加载完毕，则直接将 finished 设置成 true 即可。</p>
<ul>
<li><code>load 事件</code>：
<ul>
<li>List 初始化后会触发一次 load 事件，用于加载第一屏的数据。</li>
<li>如果一次请求加载的数据条数较少，导致列表内容无法铺满当前屏幕，List 会继续触发 load 事件，直到内容铺满屏幕或数据全部加载完成。</li>
</ul>
</li>
<li><code>loading 属性</code>：控制加载中的 loading 状态
<ul>
<li>非加载中，loading 为 false，此时会根据列表滚动位置判断是否触发 load 事件（列表内容不足一屏幕时，会直接触发）</li>
<li>加载中，loading 为 true，表示正在发送异步请求，此时不会触发 load 事件</li>
</ul>
</li>
<li><code>finished 属性</code>：控制加载结束的状态
<ul>
<li>在每次请求完毕后，需要手动将 loading 设置为 false，表示本次加载结束</li>
<li>所有数据加载结束，finished 为 true，此时不会触发 load 事件</li>
</ul>
</li>
</ul>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>article-list<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!--
      List 列表组件：瀑布流滚动加载，用于展示长列表。

      List 组件通过 loading 和 finished 两个变量控制加载状态，
      当组件初始化或滚动到到底部时，会触发 load 事件并将 loading 自动设置成 true，此时可以发起异步操作并更新数据，
      数据更新完毕后，将 loading 设置成 false 即可。
      若数据已全部加载完毕，则直接将 finished 设置成 true 即可。

      - load 事件：
        + List 初始化后会触发一次 load 事件，用于加载第一屏的数据。
        + 如果一次请求加载的数据条数较少，导致列表内容无法铺满当前屏幕，List 会继续触发 load 事件，直到内容铺满屏幕或数据全部加载完成。

      - loading 属性：控制加载中的 loading 状态
        + 非加载中，loading 为 false，此时会根据列表滚动位置判断是否触发 load 事件（列表内容不足一屏幕时，会直接触发）
        + 加载中，loading 为 true，表示正在发送异步请求，此时不会触发 load 事件

      - finished 属性：控制加载结束的状态
        + 在每次请求完毕后，需要手动将 loading 设置为 false，表示本次加载结束
        + 所有数据加载结束，finished 为 true，此时不会触发 load 事件
     --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>van-list</span>
      <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>loading<span class="token punctuation">"</span></span>
      <span class="token attr-name">:finished</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>finished<span class="token punctuation">"</span></span>
      <span class="token attr-name">finished-text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>没有更多了<span class="token punctuation">"</span></span>
      <span class="token attr-name">@load</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onLoad<span class="token punctuation">"</span></span>
    <span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>van-cell</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item in list<span class="token punctuation">"</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item<span class="token punctuation">"</span></span> <span class="token attr-name">:title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>van-list</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'ArticleList'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">channel</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> Object<span class="token punctuation">,</span>
      <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">data</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">list</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 存储列表数据的数组</span>
      <span class="token literal-property property">loading</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 控制加载中 loading 状态</span>
      <span class="token literal-property property">finished</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token comment">// 控制数据加载结束的状态</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">created</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">mounted</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 初始化或滚动到底部的时候会触发调用 onLoad</span>
    <span class="token function">onLoad</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'onLoad'</span><span class="token punctuation">)</span>
      <span class="token comment">// 1. 请求获取数据</span>
      <span class="token comment">// setTimeout 仅做示例，真实场景中一般为 ajax 请求</span>
      <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token comment">// 2. 把请求结果数据放到 list 数组中</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// 0 + 1 = 1</span>
          <span class="token comment">// 1 + 1 = 2</span>
          <span class="token comment">// 2 + 1 = 3</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>list<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>list<span class="token punctuation">.</span>length <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 3. 本次数据加载结束之后要把加载状态设置为结束</span>
        <span class="token comment">//     loading 关闭以后才能触发下一次的加载更多</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>loading <span class="token operator">=</span> <span class="token boolean">false</span>

        <span class="token comment">// 4. 判断数据是否全部加载完成</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>list<span class="token punctuation">.</span>length <span class="token operator">>=</span> <span class="token number">40</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// 如果没有数据了，把 finished 设置为 true，之后不再触发加载更多</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>finished <span class="token operator">=</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>less<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token style"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br></div></div><h3 id="_3-3-加载文章列表数据" tabindex="-1"><a class="header-anchor" href="#_3-3-加载文章列表数据" aria-hidden="true">#</a> 3.3 加载文章列表数据</h3>
<ul>
<li>封装请求方法</li>
<li>请求获取数据</li>
<li>模板绑定</li>
</ul>
<p>1、创建 <code>src/api/article.js</code> 封装获取文章列表数据的接口
<img src="@source/.vuepress/public/images/lb4.png" alt="图片">
<img src="@source/.vuepress/public/images/lb7.png" alt="图片">
2、然后在首页文章列表组件 <code>onload</code> 的时候请求加载文章列表
<img src="@source/.vuepress/public/images/lb5.png" alt="图片">
<img src="@source/.vuepress/public/images/lb6.png" alt="图片"></p>
<p><img src="@source/.vuepress/public/images/lb8.png" alt="图片"></p>
<h3 id="_3-4-错误提示" tabindex="-1"><a class="header-anchor" href="#_3-4-错误提示" aria-hidden="true">#</a> 3.4 错误提示</h3>
<p><a href="https://vant-ui.github.io/vant/v2/#/zh-CN/list#cuo-wu-ti-shi" target="_blank" rel="noopener noreferrer">错误提示<ExternalLinkIcon/></a></p>
<p><img src="@source/.vuepress/public/images/er0.png" alt="图片">
<img src="@source/.vuepress/public/images/er1.png" alt="图片">
<img src="@source/.vuepress/public/images/er2.png" alt="图片"></p>
<h3 id="_3-5-下拉刷新" tabindex="-1"><a class="header-anchor" href="#_3-5-下拉刷新" aria-hidden="true">#</a> 3.5 下拉刷新</h3>
<p><a href="https://vant-ui.github.io/vant/v2/#/zh-CN/pull-refresh" target="_blank" rel="noopener noreferrer">pullRefresh 下拉刷新<ExternalLinkIcon/></a></p>
<p><img src="@source/.vuepress/public/images/pull0.png" alt="图片"></p>
<p>下面直接全部写出了成功提示和错误提示逻辑, 细品
<img src="@source/.vuepress/public/images/pull1.png" alt="图片">
<img src="@source/.vuepress/public/images/pull2.png" alt="图片">
<img src="@source/.vuepress/public/images/pull3.png" alt="图片"></p>
<h3 id="_3-6-让导航栏在上面固定定位" tabindex="-1"><a class="header-anchor" href="#_3-6-让导航栏在上面固定定位" aria-hidden="true">#</a> 3.6 让导航栏在上面固定定位</h3>
<p><img src="@source/.vuepress/public/images/tuoli.png" alt="图片"></p>
<h3 id="_3-7-记住列表的滚动位置" tabindex="-1"><a class="header-anchor" href="#_3-7-记住列表的滚动位置" aria-hidden="true">#</a> 3.7 记住列表的滚动位置</h3>
<blockquote>
<p>为什么列表的滚动会相互影响?</p>
</blockquote>
<p>因为 它们并不是在自己内部滚动, 而是整个body 页面在滚动,
无论是在a频道, 还是在b频道, 其实滚动的都是 body 元素</p>
<blockquote>
<p>这里有个小技巧 , 如何快速找到那个元素产生的滚动 ?
把下面的代码复制到调试工具中调用运行一下, 然后滚动各页面, 就可以看到哪个元素产生的滚动了</p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">findScroller</span><span class="token punctuation">(</span><span class="token parameter">element</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  element<span class="token punctuation">.</span><span class="token function-variable function">onscroll</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">}</span>
  Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>element<span class="token punctuation">.</span>children<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>findScroller<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">findScroller</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span>body<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><blockquote>
<p>怎么解决 ?</p>
</blockquote>
<p><strong>让每一个标签内容列表产生自己的滚动容器, 这样就不会相互影响了</strong></p>
<p>如何让标签内容列表产生自己的滚动容器呢 ?</p>
<ul>
<li>固定容器 : <code>height: xxx</code></li>
<li>一处滚动 : <code>overflow-y:auto</code></li>
</ul>
<p>然后给文章列表组件的根节点样式设置如下</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.article-list</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span>100%<span class="token punctuation">;</span>
  <span class="token property">overflow-y</span><span class="token punctuation">:</span>auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>但是会发现设置高 **<code>100%</code>**的话没有作用, 这是为什么 ?</p>
<p><em>因为<strong>百分比是相对于父元素的</strong>, 而通过审查父元素发现它所有的父元素都没有高, 那坑定就没有作用了</em></p>
<p>解决办法来了 : CSS3新增了一种视口单位 <strong><code>vw</code></strong> 和 <strong><code>vh</code></strong>, 就是根据浏览及窗口的大小的单位, <strong>不受父元素的影响</strong></p>
<ul>
<li>1vw = 可视窗口的宽度的百分之一. 比如窗口宽度为750, 则 1vw = 7.5px</li>
<li>1vh = 可视窗口的高度的百分之一. 比如窗口高度为667, 则 1vw = 6.67px</li>
</ul>
<p>唯一需要关系的是兼容性, 但无需在意, 可以大胆去用</p>
<p>所以设置代码如下</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.article-list</span><span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span>79vh<span class="token punctuation">;</span>
  <span class="token property">overflow-y</span><span class="token punctuation">:</span>auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="_4-文章列表项" tabindex="-1"><a class="header-anchor" href="#_4-文章列表项" aria-hidden="true">#</a> 4. 文章列表项</h2>
<h3 id="_4-1-准备组件" tabindex="-1"><a class="header-anchor" href="#_4-1-准备组件" aria-hidden="true">#</a> 4.1 准备组件</h3>
<p>项目中有好几个页面中都有这个文章列表项内容，如果在每个页面中都写一次的话不仅效率低而且维护起来也麻烦。所以最好的办法就是把它封装为一个组件，然后在需要使用的组件中加载使用即可</p>
<p>1、创建 <code>src/components/article-item/index.vue</code> 组件
<img src="@source/.vuepress/public/images/ai1.png" alt="图片">
2、在文章列表组件中注册使用文章列表项组件 src/views/home/components/article-list.vue
<img src="@source/.vuepress/public/images/ai2.png" alt="图片">
<img src="@source/.vuepress/public/images/ai3.png" alt="图片"></p>
<h3 id="_4-2-展示其内容" tabindex="-1"><a class="header-anchor" href="#_4-2-展示其内容" aria-hidden="true">#</a> 4.2 展示其内容</h3>
<ul>
<li>使用 <a href="https://vant-ui.github.io/vant/v2/#/zh-CN/cell" target="_blank" rel="noopener noreferrer">Cell 单元<ExternalLinkIcon/></a>格组件</li>
<li>展示标题</li>
<li>展示底部信息</li>
</ul>
<p><img src="@source/.vuepress/public/images/lbx1.png" alt="图片">
<img src="@source/.vuepress/public/images/lbx2.png" alt="图片"></p>
<h3 id="_4-3-样式调整" tabindex="-1"><a class="header-anchor" href="#_4-3-样式调整" aria-hidden="true">#</a> 4.3 样式调整</h3>
<p><img src="@source/.vuepress/public/images/tj1.png" alt="图片">
<img src="@source/.vuepress/public/images/tj2.png" alt="图片">
<img src="@source/.vuepress/public/images/tj.png" alt="图片"></p>
<h3 id="_4-4-图片资源-403-问题" tabindex="-1"><a class="header-anchor" href="#_4-4-图片资源-403-问题" aria-hidden="true">#</a> 4.4 图片资源 403 问题</h3>
<p>为什么文章列表数据中的好多图片资源请求失败返回 403？</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>这是因为我们项目的接口数据是后端通过爬虫抓取的第三方平台内容，而第三方平台对图片资源做了防盗链保护处理。

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>第三方平台怎么处理图片资源保护的？</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>服务端一般使用 Referer 请求头识别访问来源，然后处理资源访问。

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><img src="@source/.vuepress/public/images/refer1.png" alt="图片"></p>
<p>Referer 是什么东西？</p>
<blockquote>
<p>扩展参考：http://www.ruanyifeng.com/blog/2019/06/http-referer.html</p>
</blockquote>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>Referer 是 HTTP 请求头的一部分，当浏览器向 Web 服务器发送请求的时候，一般会带上 Referer，它包含了当前请求资源的来源页面的地址。服务端一般使用 Referer 请求头识别访问来源，可能会以此进行统计分析、日志记录以及缓存优化等。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><blockquote>
<p>需要注意的是 referer 实际上是 &quot;referrer&quot; 误拼写。参见 <a href="https://zh.wikipedia.org/wiki/HTTP_referer" target="_blank" rel="noopener noreferrer">HTTP referer on Wikipedia<ExternalLinkIcon/></a> （HTTP referer 在维基百科上的条目）来获取更详细的信息。</p>
</blockquote>
<p>怎么解决？</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>不要发送 referrer ，对方服务端就不知道你从哪来的了，姑且认为是你是自己人吧。

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>如何设置不发送 referrer？</p>
<p>用 <code>&lt;a&gt;</code>、<code>&lt;area&gt;</code>、<code>&lt;img&gt;</code>、<code>&lt;iframe&gt;</code>、<code>&lt;script&gt;</code> 或者 <code>&lt;link&gt;</code> 元素上的 <code>referrerpolicy</code> 属性为其设置独立的请求策略，例如：</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://……<span class="token punctuation">"</span></span> <span class="token attr-name">referrerPolicy</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>no-referrer<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>或者直接在 HTMl 页面头中通过 meta 属性全局配置：</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>referrer<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>no-referrer<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="_4-5-处理相对时间" tabindex="-1"><a class="header-anchor" href="#_4-5-处理相对时间" aria-hidden="true">#</a> 4.5 处理相对时间</h3>
<p>推荐两个第三方库：</p>
<ul>
<li><a href="https://momentjs.com/" target="_blank" rel="noopener noreferrer">Moment.js<ExternalLinkIcon/></a></li>
<li><a href="https://day.js.org/" target="_blank" rel="noopener noreferrer">Day.js<ExternalLinkIcon/></a></li>
</ul>
<p>两者都是专门用于处理时间的 JavaScript 库，功能差不多，因为 Day.js 的设计就是参考的 Moment.js。但是 Day.js 相比 Moment.js 的包体积要更小一些，因为它采用了插件化的处理方式。</p>
<p>1、安装</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i dayjs

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>2、创建 <code>utils/dayjs.js</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> dayjs <span class="token keyword">from</span> <span class="token string">'dayjs'</span>

<span class="token comment">// 加载中文语言包</span>
<span class="token keyword">import</span> <span class="token string">'dayjs/locale/zh-cn'</span>

<span class="token keyword">import</span> relativeTime <span class="token keyword">from</span> <span class="token string">'dayjs/plugin/relativeTime'</span>

<span class="token comment">// 配置使用处理相对时间的插件</span>
dayjs<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span>relativeTime<span class="token punctuation">)</span>

<span class="token comment">// 配置使用中文语言包</span>
dayjs<span class="token punctuation">.</span><span class="token function">locale</span><span class="token punctuation">(</span><span class="token string">'zh-cn'</span><span class="token punctuation">)</span>

<span class="token comment">// 全局过滤器：处理相对时间</span>
<span class="token comment">// 参数一 : 过滤器名称</span>
<span class="token comment">// 参数二 : 过滤器函数 </span>
<span class="token comment">// 前面的表达式的结果会以过滤器函数的参数传递给函数</span>
<span class="token comment">// 返回值会显示给模板</span>
Vue<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token string">'relativeTime'</span><span class="token punctuation">,</span> <span class="token parameter">value</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">dayjs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">to</span><span class="token punctuation">(</span><span class="token function">dayjs</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>3、在 <code>main.js</code> 中加载初始化</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">'./utils/dayjs'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>4、使用</p>
<p>使用过滤器：</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>{{ 日期数据 | relativeTime }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></template>
