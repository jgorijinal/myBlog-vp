<template><h1 id="text-font-选择器" tabindex="-1"><a class="header-anchor" href="#text-font-选择器" aria-hidden="true">#</a> text  - font - 选择器</h1>
<h2 id="text-文本" tabindex="-1"><a class="header-anchor" href="#text-文本" aria-hidden="true">#</a> text 文本</h2>
<h3 id="text-decoration-常用" tabindex="-1"><a class="header-anchor" href="#text-decoration-常用" aria-hidden="true">#</a> text-decoration(常用)</h3>
<p>text-decoration有如下常见取值:</p>
<ul>
<li>none：无任何装饰线
<ul>
<li>可以去除a元素默认的下划线</li>
</ul>
</li>
<li>underline：下划线</li>
<li>overline：上划线</li>
<li>line-through：中划线（删除线）</li>
</ul>
<p>a元素有下划线的本质是被添加了text-decoration属性</p>
<h3 id="text-transform-一般" tabindex="-1"><a class="header-anchor" href="#text-transform-一般" aria-hidden="true">#</a> text-transform(一般)</h3>
<p>text-transform 有几个常见的值:</p>
<ul>
<li>capitalize：(使首字母大写, 资本化的意思)将每个单词的首字符变为大写</li>
<li>uppercase：(大写字母)将每个单词的所有字符变为大写</li>
<li>lowercase：(小写字母)将每个单词的所有字符变为小写</li>
<li>none：没有任何影响</li>
</ul>
<p>实际开发中用JavaScript代码转化的更多.</p>
<h3 id="text-indent-一般" tabindex="-1"><a class="header-anchor" href="#text-indent-一般" aria-hidden="true">#</a> text-indent(一般)</h3>
<ul>
<li>text-indent用于设置第一行内容的缩进</li>
<li><code>text-indent: 2em;</code> 刚好是缩进 2 个文字</li>
</ul>
<p><img src="@source/.vuepress/public/images/indent1.png" alt="图片"></p>
<p>为了 SEO 在 HTML里面协商对应文字后, 如果<strong>想要隐藏文字的话 text-index: -9999px;</strong> 可以这么做</p>
<h3 id="text-align-重要" tabindex="-1"><a class="header-anchor" href="#text-align-重要" aria-hidden="true">#</a> text-align(重要)</h3>
<p><strong>行内级元素</strong>(img , span ....)相对它的<strong>块父元素</strong>(div ....)对其</p>
<p>常用的值:</p>
<ul>
<li>left：左对齐</li>
<li>right：右对齐</li>
<li>center：正中间显示</li>
<li>justify：两端对齐</li>
</ul>
<h3 id="letter-spacing、word-spacing-一般" tabindex="-1"><a class="header-anchor" href="#letter-spacing、word-spacing-一般" aria-hidden="true">#</a> letter-spacing、word-spacing(一般)</h3>
<p>letter-spacing、word-spacing分别用于设置字母、单词之间的间距</p>
<ul>
<li>默认是 <strong><code>0</code></strong>，可以设置为负数</li>
</ul>
<h2 id="font-字体" tabindex="-1"><a class="header-anchor" href="#font-字体" aria-hidden="true">#</a> font 字体</h2>
<h3 id="font-size-重要" tabindex="-1"><a class="header-anchor" href="#font-size-重要" aria-hidden="true">#</a> font-size(重要)</h3>
<p>常用的设置</p>
<ul>
<li><strong>具体 数值+单位</strong>
<ul>
<li>默认 <code>16px</code></li>
<li>也可以使用 em 单位(<strong>不推荐</strong>)：1em 代表 100%，2em 代表 200%，0.5em 代表 50%</li>
</ul>
</li>
</ul>
<p>em: 相对于 <strong>父元素</strong> 的字体尺寸</p>
<ul>
<li><strong>百分比</strong>
<ul>
<li>基于<strong>父元素</strong>的 font-size 计算，比如 50% 表示等于父元素 font-size 的一半</li>
</ul>
</li>
</ul>
<p>百分比 这个东西每个属性都不一样, 所以要去查文档</p>
<h3 id="font-family-重要-不过一般仅设置一次" tabindex="-1"><a class="header-anchor" href="#font-family-重要-不过一般仅设置一次" aria-hidden="true">#</a> font-family (重要, 不过一般仅设置一次)</h3>
<p>font-family用于设置文字的字体名称</p>
<ul>
<li>可以设置1个<strong>或者多个</strong>字体名称;</li>
<li>浏览器会选择列表中第一个该计算机上有安装的字体;</li>
<li>或者是通过 @font-face 指定的可以直接下载的字体。</li>
</ul>
<h3 id="font-weight-重要" tabindex="-1"><a class="header-anchor" href="#font-weight-重要" aria-hidden="true">#</a> font-weight(重要)</h3>
<p>常见的取值:</p>
<ul>
<li>100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 ：每一个数字表示一个重量</li>
<li>normal：等于400</li>
<li>bold：等于700</li>
</ul>
<p>strong、b、h1~h6等标签的font-weight默认就是bold</p>
<h3 id="font-style-一般" tabindex="-1"><a class="header-anchor" href="#font-style-一般" aria-hidden="true">#</a> font-style(一般)</h3>
<p>font-style用于设置文字的常规、斜体显示</p>
<ul>
<li>normal：常规显示</li>
<li>italic(斜体)：用字体的斜体显示(通常会有专门的字体)</li>
<li>oblique(倾斜)：文本倾斜显示(仅仅是让文字倾斜)</li>
</ul>
<p>em、i、cite、address、var、dfn等元素的font-style默认就是italic</p>
<h3 id="font-variant-了解" tabindex="-1"><a class="header-anchor" href="#font-variant-了解" aria-hidden="true">#</a> font-variant(了解)</h3>
<p>font-variant可以影响小写字母的显示形式</p>
<ul>
<li>variant是变形的意思;</li>
</ul>
<p>可以设置的值如下</p>
<ul>
<li>normal：常规显示</li>
<li>small-caps：将小写字母替换为缩小过的大写字母</li>
</ul>
<h3 id="line-height-常用" tabindex="-1"><a class="header-anchor" href="#line-height-常用" aria-hidden="true">#</a> line-height(常用)</h3>
<p>line-height用于设置文本的行高</p>
<p>行高可以先简单<strong>理解为一行文字所占据的高度</strong>
<img src="@source/.vuepress/public/images/lh1.png" alt="图片"></p>
<ul>
<li>行高的<strong>严格定义</strong>是：<strong>两行文字基线（baseline）之间的间距</strong></li>
<li>基线（baseline）：<strong>与小写字母x最底部对齐的线</strong></li>
</ul>
<p><img src="@source/.vuepress/public/images/lh2.png" alt="图片"></p>
<p><strong>注意区分height和line-height的区别</strong></p>
<ul>
<li>height：元素的整体高度</li>
<li>line-height：元素中每一行文字所占据的高度</li>
</ul>
<p>应用实例：假设div中只有一行文字，如何让这行文字在div内部垂直居中</p>
<ul>
<li>让line-height等同于height
<img src="@source/.vuepress/public/images/lh3.png" alt="图片"></li>
</ul>
<h3 id="font" tabindex="-1"><a class="header-anchor" href="#font" aria-hidden="true">#</a> font</h3>
<p>font是一个缩写属性</p>
<ul>
<li>font 属性可以用来作为 font-style, font-variant, font-weight, font-size, line-height 和 font-family 属性的简写;</li>
<li><strong>font-style font-variant font-weight font-size/line-height font-family</strong></li>
</ul>
<p>规则:</p>
<ul>
<li>font-style、font-variant、font-weight可以随意调换顺序，也可以省略</li>
<li>/line-height可以省略，如果不省略，必须跟在font-size后面</li>
<li>font-size、font-family不可以调换顺序，不可以省略</li>
</ul>
<h2 id="css选择器-selector" tabindex="-1"><a class="header-anchor" href="#css选择器-selector" aria-hidden="true">#</a> CSS选择器（selector）</h2>
<p>选择器的种类繁多，大概可以这么归类</p>
<ul>
<li>通用选择器（universal selector）</li>
<li>元素选择器（type selectors）</li>
<li>类选择器（class selectors）</li>
<li>id选择器（id selectors）</li>
<li>属性选择器（attribute selectors）</li>
<li>组合（combinators）</li>
<li>伪类（pseudo-classes）</li>
<li>伪元素（pseudo-elements）</li>
</ul>
<h3 id="通用选择器" tabindex="-1"><a class="header-anchor" href="#通用选择器" aria-hidden="true">#</a> 通用选择器</h3>
<p>通用选择器（universal selector）</p>
<ul>
<li>所有的元素都会被选中;</li>
</ul>
<p>一般用来给所有元素作一些通用性的设置</p>
<ul>
<li>比如内边距、外边距;</li>
<li>比如重置一些内容;</li>
</ul>
<p><strong>效率比较低，尽量不要使用;</strong></p>
<h3 id="简单选择器" tabindex="-1"><a class="header-anchor" href="#简单选择器" aria-hidden="true">#</a> 简单选择器</h3>
<ul>
<li>元素选择器（type selectors）, 使用元素的名称;</li>
<li>类选择器（class selectors）, 使用 .类名 ;</li>
<li>id选择器（id selectors）, 使用 #id</li>
</ul>
<h3 id="id注意事项" tabindex="-1"><a class="header-anchor" href="#id注意事项" aria-hidden="true">#</a> id注意事项</h3>
<p>一个HTML文档里面的id值<strong>是唯一的，不能重复</strong></p>
<ul>
<li>id值如果由多个单词组成，单词之间可以用中划线-、下划线_连接，也可以使用驼峰标识</li>
<li>最好不要用标签名作为id值</li>
</ul>
<h3 id="属性选择器-attribute-selectors" tabindex="-1"><a class="header-anchor" href="#属性选择器-attribute-selectors" aria-hidden="true">#</a> 属性选择器(attribute selectors)</h3>
<p>拥有某一个属性 <code>[att]</code></p>
<p>属性等于某个值 <code>[att=val]</code></p>
<p>其他了解的(不用记)</p>
<ul>
<li><code>[attr*=val]</code>: 属性值包含某一个值val;</li>
<li><code>[attr^=val]</code>: 属性值以val开头;</li>
<li><code>[attr$=val]</code>: 属性值以val结尾;</li>
<li><code>[attr|=val]</code>: 属性值等于val或者以val开头后面紧跟连接符-;</li>
<li><code>[attr~=val]</code>: 属性值包含val, 如果有其他值必须以空格和val分割;</li>
</ul>
<p><img src="@source/.vuepress/public/images/sx1.png" alt="图片"></p>
<h3 id="后代选择器-descendant-combinator" tabindex="-1"><a class="header-anchor" href="#后代选择器-descendant-combinator" aria-hidden="true">#</a> 后代选择器 （descendant combinator）</h3>
<p><strong>后代选择器一: 所有的后代(直接/间接的后代)</strong></p>
<ul>
<li>选择器之间以空格分割
<img src="@source/.vuepress/public/images/houdai1.png" alt="图片"></li>
</ul>
<p><strong>后代选择器二: 直接子代选择器(必须是直接自带)</strong></p>
<ul>
<li>选择器之间以 &gt; 分割
![图片](../.vuepress/public/i</li>
</ul>
<h3 id="兄弟选择器-sibling-combinator" tabindex="-1"><a class="header-anchor" href="#兄弟选择器-sibling-combinator" aria-hidden="true">#</a> 兄弟选择器(sibling combinator)</h3>
<p><strong>兄弟选择器一:相邻兄弟选择器</strong></p>
<ul>
<li>使用符号 + 连接</li>
</ul>
<p><img src="@source/.vuepress/public/images/xiong1.png" alt="图片"></p>
<p><strong>兄弟选择器二: 普遍兄弟选择器 ~</strong></p>
<ul>
<li>使用符号 ~ 连接</li>
</ul>
<p><img src="@source/.vuepress/public/images/xiong2.png" alt="图片"></p>
<h3 id="选择器组-–-交集选择器" tabindex="-1"><a class="header-anchor" href="#选择器组-–-交集选择器" aria-hidden="true">#</a> 选择器组 – 交集选择器</h3>
<p><strong>交集选择器: 需要同时符合两个选择器条件(两个选择器紧密连接)</strong></p>
<ul>
<li>在开发中通常为了精准的选择某一个元素;</li>
</ul>
<p><img src="@source/.vuepress/public/images/jiao1.png" alt="图片"></p>
<p><strong>并集选择器: 符合一个选择器条件即可(两个选择器以,号分割)</strong></p>
<ul>
<li>在开发中通常为了给多个元素设置相同的样式</li>
</ul>
<p><img src="@source/.vuepress/public/images/jiao2.png" alt="图片"></p>
<h2 id="认识伪类" tabindex="-1"><a class="header-anchor" href="#认识伪类" aria-hidden="true">#</a> 认识伪类</h2>
<p>伪类是选择器的一种，它用于<strong>选择处于特定状态的元素</strong></p>
<p>常见的伪类有</p>
<p><strong>1.动态伪类（dynamic pseudo-classes）</strong></p>
<ul>
<li>:link、:visited、:hover、:active、:focus</li>
</ul>
<p><strong>2.目标伪类（target pseudo-classes）</strong></p>
<ul>
<li>:target</li>
</ul>
<p><strong>3.语言伪类（language pseudo-classes）</strong></p>
<ul>
<li>:lang( )</li>
</ul>
<p><strong>4.元素状态伪类（UI element states pseudo-classes）</strong></p>
<ul>
<li>:enabled、:disabled、:checked</li>
</ul>
<p><strong>5.结构伪类（structural pseudo-classes）</strong></p>
<ul>
<li>:nth-child( )、:nth-last-child( )、:nth-of-type( )、:nth-last-of-type( )</li>
<li>:first-child、:last-child、:first-of-type、:last-of-type</li>
<li>:root、:only-child、:only-of-type、:empty</li>
</ul>
<p><strong>6.否定伪类（negation pseudo-classes）</strong></p>
<ul>
<li>:not()</li>
</ul>
<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-classes" target="_blank" rel="noopener noreferrer">所有的伪类<ExternalLinkIcon/></a></p>
<h3 id="动态伪类-dynamic-pseudo-classes" tabindex="-1"><a class="header-anchor" href="#动态伪类-dynamic-pseudo-classes" aria-hidden="true">#</a> 动态伪类（dynamic pseudo-classes)</h3>
<p>使用举例</p>
<ul>
<li>a:link 未访问的链接</li>
<li>a:visited 已访问的链接</li>
<li><strong>a:hover</strong> 鼠标挪动到链接上(重要)</li>
<li>a:active 激活的链接（鼠标在链接上长按住未松开）</li>
</ul>
<p>使用注意</p>
<ul>
<li>:hover必须放在:link和:visited后面才能完全生效</li>
<li>:active必须放在:hover后面才能完全生效</li>
<li>所以建议的编写顺序是 :link、:visited、:hover、:active</li>
</ul>
<p><strong>除了a元素，:hover、:active也能用在其他元素上</strong></p>
<h3 id="动态伪类-focus" tabindex="-1"><a class="header-anchor" href="#动态伪类-focus" aria-hidden="true">#</a> 动态伪类 - :focus</h3>
<p>:focus 指当前<strong>拥有输入焦点的元素</strong>（能接收键盘输入）</p>
<ul>
<li>文本输入框一聚焦后，背景就会变红色</li>
</ul>
<p>因为链接a元素可以被键盘的Tab键选中聚焦，所以:focus也适用于a元素</p>
<p><strong>动态伪类编写顺序建议为</strong></p>
<ul>
<li>:link、:visited、:focus、:hover、:active</li>
</ul>
<p><strong>直接给a元素设置样式，相当于给a元素的所有动态伪类都设置了</strong></p>
<ul>
<li>相当于a:link、a:visited、a:hover、a:active、a:focus的color都是red</li>
</ul>
<h3 id="结构伪类-nth-child" tabindex="-1"><a class="header-anchor" href="#结构伪类-nth-child" aria-hidden="true">#</a> 结构伪类 - :nth-child</h3>
<p><strong>:nth-child(1)</strong></p>
<ul>
<li>是父元素中的第1个子元素</li>
</ul>
<p><strong>:nth-child(2n)</strong></p>
<ul>
<li>代表任意正整数和0</li>
<li>是父元素中的第偶数个子元素（第2、4、6、8......个）</li>
<li>跟:nth-child(even)同义</li>
</ul>
<p><strong>:nth-child(2n + 1)</strong></p>
<ul>
<li>n代表任意正整数和0</li>
<li>是父元素中的第奇数个子元素（第1、3、5、7......个）</li>
<li>跟:nth-child(odd)同义</li>
</ul>
<p><strong>nth-child(-n + 2)</strong></p>
<ul>
<li>代表前2个子元素</li>
</ul>
<h3 id="结构伪类-nth-last-child" tabindex="-1"><a class="header-anchor" href="#结构伪类-nth-last-child" aria-hidden="true">#</a> 结构伪类 - :nth-last-child( )</h3>
<p>:nth-last-child()的语法跟:nth-child()类似，不同点是:nth-last-child()从最后一个子元素开始往前计数</p>
<ul>
<li>:nth-last-child(1)，代表倒数第一个子元素</li>
<li>:nth-last-child(-n + 2)，代表最后2个子元素</li>
</ul>
<p>:nth-of-type()用法跟:nth-child()类似</p>
<ul>
<li>不同点是:nth-of-type()计数时只计算同种类型的元素</li>
</ul>
<p>:nth-last-of-type()用法跟:nth-of-type()类似</p>
<ul>
<li>不同点是:nth-last-of-type()从最后一个这种类型的子元素开始往前计数</li>
</ul>
<h3 id="结构伪类-nth-of-type-、-nth-last-of-type" tabindex="-1"><a class="header-anchor" href="#结构伪类-nth-of-type-、-nth-last-of-type" aria-hidden="true">#</a> 结构伪类 - :nth-of-type( )、:nth-last-of-type( )</h3>
<p>其他常见的伪类(了解):</p>
<ul>
<li>:first-child，等同于:nth-child(1)</li>
<li>:last-child，等同于:nth-last-child(1)</li>
<li>:first-of-type，等同于:nth-of-type(1)</li>
<li>:last-of-type，等同于:nth-last-of-type(1)</li>
<li>:only-child，是父元素中唯一的子元素</li>
<li>:only-of-type，是父元素中唯一的这种类型的子元素</li>
</ul>
<p>下面的伪类偶尔会使用:</p>
<ul>
<li>:root，根元素，就是HTML元素</li>
<li>:empty代表里面完全空白的元素</li>
</ul>
<h3 id="否定伪类-negation-pseudo-class" tabindex="-1"><a class="header-anchor" href="#否定伪类-negation-pseudo-class" aria-hidden="true">#</a> 否定伪类（negation pseudo-class)</h3>
<p>:not()的格式是 :not(x)</p>
<ul>
<li>x是一个简单选择器</li>
<li>元素选择器、通用选择器、属性选择器、类选择器、id选择器、伪类（除否定伪类）</li>
</ul>
<p>:not(x) 表示除x以外的元素</p>
<h2 id="伪元素-pseudo-elements" tabindex="-1"><a class="header-anchor" href="#伪元素-pseudo-elements" aria-hidden="true">#</a> 伪元素（pseudo-elements）</h2>
<p><strong>常用的伪元素有</strong></p>
<ul>
<li>:first-line、::first-line</li>
<li>:first-letter、::first-letter</li>
<li>:before、<strong>::before</strong></li>
<li>:after、<strong>::after</strong></li>
</ul>
<p>为了区分伪元素和伪类，建议<strong>伪元素使用2个冒号</strong>，比如::first-line</p>
<h3 id="伪元素-first-line-first-letter-了解" tabindex="-1"><a class="header-anchor" href="#伪元素-first-line-first-letter-了解" aria-hidden="true">#</a> 伪元素 - ::first-line - ::first-letter(了解)</h3>
<ul>
<li>::first-line可以针对首行文本设置属性</li>
<li>::first-letter可以针对首字母设置属性</li>
</ul>
<p><img src="@source/.vuepress/public/images/firstline1.png" alt="图片"></p>
<h3 id="伪元素-before和-after-常用" tabindex="-1"><a class="header-anchor" href="#伪元素-before和-after-常用" aria-hidden="true">#</a> 伪元素 - ::before和::after(常用)</h3>
<p>::before和::after用来在一个元素的<strong>内容之前或之后插入其他内容（可以是文字、图片)</strong></p>
<ul>
<li>常通过 <strong>content 属</strong>性来为一个元素添加修饰性的内容</li>
</ul>
<p><img src="@source/.vuepress/public/images/kkkk1.png" alt="图片"></p>
</template>
