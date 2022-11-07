<template><h1 id="html" tabindex="-1"><a class="header-anchor" href="#html" aria-hidden="true">#</a> HTML</h1>
<!-- ## HTML 结构分析
* **文档声明**
* **html元素**
   1. head元素
   2. body元素

![图片](../.vuepress/public/images/html0.png)
### 文档声明
HTML 最上方的一段文本我们称之为 `文档类型声明，用于声明文档类型`

`<!DOCTYPE html>`
* HTML文档声明，告诉浏览器当前页面是**HTML5页面**；
* 让浏览器用**HTML5的标准去解析识别内容**；
* 必须**放在HTML文档的最前面，不能省略**，省略了会出现兼容性问题；

### html元素
`<html>` 元素 表示一个 HTML 文档的根（顶级元素），所以它也被称为根元素
* 所有其他元素必须是**此元素的后代**

![图片](../.vuepress/public/images/html1.png)

W3C标准建议为html元素增加一个 **lang属性** ，作用是
* 帮助**语音合成工具**确定要使用的发音
* 帮助**翻译工具**确定要使用的翻译规则

比如常用的规则：
* `lang=“en”` *表示这个 HTML 文档的语言是英文*
* `lang=“zh-CN”` *表示这个 HTML 文档的语言是中文* -->
<h2 id="a元素" tabindex="-1"><a class="header-anchor" href="#a元素" aria-hidden="true">#</a> a元素</h2>
<p>HTML <code>&lt;a&gt;</code> 元素（或称锚（anchor）元素）</p>
<ul>
<li>定义超链接，用于打开新的 URL</li>
</ul>
<p>a 元素有两个常见的属性：</p>
<ul>
<li><strong>href</strong>：Hypertext Reference的简称
<ul>
<li>指定要打开的URL地址；</li>
<li>也可以是一个本地地址；</li>
</ul>
</li>
<li><strong>target</strong>：该属性指定在何处显示链接的资源
<ul>
<li>_self：默认值，在当前窗口打开URL</li>
<li>_blank：在一个新的窗口中打开URL</li>
<li>其他不常用, 后面iframe可以讲一下</li>
</ul>
</li>
</ul>
<h3 id="a元素-锚点链接" tabindex="-1"><a class="header-anchor" href="#a元素-锚点链接" aria-hidden="true">#</a> a元素 - 锚点链接</h3>
<p>锚点链接可以实现：跳转到网页中的具体位置</p>
<p>锚点链接有两个重要步骤：</p>
<ul>
<li>在要跳到的元素上<strong>定义一个id属性</strong></li>
<li>定义a元素，并且a元素的<strong>href指向对应的 id</strong></li>
</ul>
<p><img src="@source/.vuepress/public/images/maodian1.png" alt="图片"></p>
<h3 id="a元素-图片链接" tabindex="-1"><a class="header-anchor" href="#a元素-图片链接" aria-hidden="true">#</a> a元素 - 图片链接</h3>
<p>在很多网站会发现图片也是可以点击进行跳转的</p>
<ul>
<li>img元素跟a元素一起使用，可以实现图片链接；</li>
</ul>
<p>实现思路：</p>
<ul>
<li>a元素中不存放文字，而是<strong>存放一个img元素</strong></li>
<li>也就是img元素是a元素的内容；</li>
</ul>
<p><img src="@source/.vuepress/public/images/maodian2.png" alt="图片"></p>
<h2 id="iframe元素" tabindex="-1"><a class="header-anchor" href="#iframe元素" aria-hidden="true">#</a> iframe元素</h2>
<p>利用iframe元素可以实现：在一个HTML文档中嵌入其他HTML文档</p>
<p>frameborder属性</p>
<ul>
<li>用于规定是否显示边框
✓ 1：显示
✓ 0：不显示</li>
</ul>
<p>a元素target的其他值:</p>
<ul>
<li>_parent：在父窗口中打开URL</li>
<li>_top：在顶层窗口中打开URL</li>
</ul>
<p>禁止 iframe :</p>
<p><img src="@source/.vuepress/public/images/frame1.png" alt="图片"></p>
<h2 id="div元素、span元素的区别" tabindex="-1"><a class="header-anchor" href="#div元素、span元素的区别" aria-hidden="true">#</a> div元素、span元素的区别</h2>
<p>div元素和span元素都是“纯粹的” 容器，也可以把他们理解成 <strong>“盒子”</strong>，它们都是用来<strong>包裹内容</strong>的；</p>
<p>div元素 : 多个 div 元素包裹的内容会在<strong>不同的行</strong>显示；</p>
<ul>
<li>一般作为其他元素的父容器，把其他元素包住，代表一个整体</li>
<li>用于把网页分割为多个独立的部分</li>
</ul>
<p>span元素 : 多个span元素包裹的内容会在<strong>同一行</strong>显示；</p>
<ul>
<li>默认情况下，跟普通文本几乎没差别</li>
<li>用于区分特殊文本和普通文本，比如用来显示一些关键字</li>
</ul>
<h2 id="html-全局属性" tabindex="-1"><a class="header-anchor" href="#html-全局属性" aria-hidden="true">#</a> HTML 全局属性</h2>
<p>可以发现<strong>某些属性只能设置在特定的元素中</strong>：</p>
<ul>
<li>比如img元素的src、a元素的href；</li>
</ul>
<p>也<strong>有一些属性是所有HTML都可以设置和拥有的</strong>，这样的属性我们称之为 “<strong>全局属性（Global Attributes）</strong>”</p>
<ul>
<li>全局属性有很多：<a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes" target="_blank" rel="noopener noreferrer">https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes<ExternalLinkIcon/></a></li>
</ul>
<p>常见的全局属性如下：</p>
<ol>
<li>id：定义唯一标识符（ID），该标识符在整个文档中必须是唯一的。其目的是在链接（使用片段标识符），脚本或样
式（使用 CSS）时标识元素。</li>
<li>class：一个以空格分隔的元素的类名（classes ）列表，它允许 CSS 和 Javascript 通过类选择器或者DOM方法来选
择和访问特定的元素；</li>
<li>style：给元素添加内联样式；</li>
<li>title：包含表示与其所属元素相关信息的文本。 这些信息通常可以作为提示呈现给用户，但不是必须的。</li>
</ol>
<h2 id="额外知识" tabindex="-1"><a class="header-anchor" href="#额外知识" aria-hidden="true">#</a> 额外知识</h2>
<h3 id="字符实体" tabindex="-1"><a class="header-anchor" href="#字符实体" aria-hidden="true">#</a> 字符实体</h3>
<p>思考：编写的HTML代码会被浏览器解析</p>
<p>如下代码是<strong>如何被解析</strong>的呢？</p>
<ul>
<li>如果使用小于号（&lt;），浏览器会将其后的文本解析为一个tag</li>
<li>但是某些情况下，确实需要编写一个小于号（&lt;）</li>
<li>这个时候就可以使用<strong>字符实体</strong></li>
</ul>
<p>HTML 实体是一段以<strong>连字号（&amp;）开头、以分号（;）结尾的文本（字符串）</strong>：</p>
<ul>
<li>实体常常用于显示保留字符（这些字符会被解析为 HTML 代码）和不可见的字符（如“不换行空格”）；</li>
<li>也可以用实体来代替其他难以用标准键盘键入的字符；</li>
</ul>
<p><img src="@source/.vuepress/public/images/zifu1.png" alt="图片"></p>
<h3 id="url的格式" tabindex="-1"><a class="header-anchor" href="#url的格式" aria-hidden="true">#</a> URL的格式</h3>
<p>URL的标准格式如下：</p>
<p><strong><code>[协议类型]://[服务器地址]:[端口号]/[文件路径][文件名]?[查询]#[片段ID]</code></strong>
<img src="@source/.vuepress/public/images/ul.png" alt="图片"></p>
<h3 id="元素的语义化" tabindex="-1"><a class="header-anchor" href="#元素的语义化" aria-hidden="true">#</a> 元素的语义化</h3>
<p>元素的语义化：用正确的元素做正确的事情。</p>
<p>理论上来说，所有的HTML元素，都能实现相同的事情：</p>
<p>标签语义化的好处</p>
<ul>
<li>方便代码维护</li>
<li>减少让开发者之间的沟通成本</li>
<li>能让语音合成工具正确识别网页元素的用途，以便作出正确的反应；</li>
<li>有利于SEO；</li>
<li>.....</li>
</ul>
<h3 id="什么是seo" tabindex="-1"><a class="header-anchor" href="#什么是seo" aria-hidden="true">#</a> 什么是SEO？</h3>
<p><strong>搜索引擎优化</strong>（英语：search engine optimization，缩写为SEO）是通过了解搜索引擎的运作规则来调整网站，
以及提高网站在有关搜索引擎内排名的方式</p>
</template>
