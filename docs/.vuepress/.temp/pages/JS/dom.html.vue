<template><!-- # DOM
浏览器是用来展示网页的，而网页中最重要的就是里面各种的标签元素，JavaScrip t很多时候是需要操作这些元素的
* JavaScript 如何操作元素呢？通过Document Object Model（DOM，文档对象模型）
* DOM 给我们提供了一系列的模型和对象，可以方便的来操作 Web 页面

![图片](../.vuepress/public/images/dom1.png)
## 事件基础
事件有三部分组成 : **1. 事件源, 2. 事件类型, 3. 处理程序**
```js
// 事件源
let btn = document.getElementById('btn)
// 事件类型, 处理程序
btn.onclick = function(){
  alert('你好')
}
```
## 操作 DOM
### 改变元素内容
```
element.innerText
```
从起始位置到终止位置的内容, 但去除 HTML 标签, 同时空格和换行也会去掉 (不识别 HTML)
```
element.innerHTML
```
从起始位置到终止位置的内容, 包括 HTML 标签, 同时保留空格和换行

### innerHTML 和 innerText 区别
* `innerText` *不识别* HTML,  还会*去除*空格和换行
* `innerHTML` 识别 html 标签 , 能识别空格和换行(所以 innerHTML 使用得最多)

```js
let div = document.querySelector('div')
div.innerText = '<strong>不能加粗</strong>'
div.innerHTML = '<strong>不能加粗</strong>'
```
这两个属性都**可读可写**的
### 常见元素的属性操作
* **innerText, innerText** 改变元素的内容
* **src, href**
* **id, alt, title**

```html
<button id="p1">图片1</button>
<button id="p2">图片2</button>
<img src="images/1.jpg" alt="" title="图片1">
```
```js
// 1. 获取元素
let btn1 = document.getElementById('p1')
let btn2 = document.getElementById('p2')
let img = document.querySelector('img')

btn1.onclick =()=>{
  img.src = 'images/1.jpg'
  img.title = '图片1'
}
btn2.onclick =()=>{
  img.src = 'images/2.jpg'
  img.title = '图片2'
}
```
### 表单元素的属性操作
利用 dom 可以操作如下表单元素的属性

**type , value, checked, selected, disabled**
![图片](../.vuepress/public/images/bd1.png)
### 样式属性操作
```
element.style  // 行内样式操作

element.className // 类名样式操作
```
**注意 :**
* 样式要采取**驼峰命名法**
* JS 修改 style 样式操作, 产生的是**行内样式**, **CSS 权重比较高**

#### 关闭二维码案例
样式的显示和隐藏完成, `display:none`隐藏元素, `display:block` 显示元素

![图片](../.vuepress/public/images/hj1.png)
#### 显示隐藏文本框内容
表单需要两个事件,  获得焦点 onfocus , 失去焦点 onblur
![图片](../.vuepress/public/images/onblur1.png)
#### 通过 className 修改样式
样式较多, 功能复杂的情况
![图片](../.vuepress/public/images/ca22.png)

## 注册事件(绑定事件)
![图片](../.vuepress/public/images/bn1.png)
![图片](../.vuepress/public/images/bn2.png)
### 删除事件(解绑事件)
1. 传统方式
```js
eventTarget.onclick = null
```

2. removeEventListener
```js
eventTarget.removeEventListener(type, listener, ..)
```
使用实例:
```js
const div = document.querySelector('div')

div.addEventListener(click , fn)

function fn(){
  div.removeEventListener('click', fn)
}
```
## DOM 事件流
事件发生时, 会在元素节点之间按照特定的**顺序**传播, 这个传播过程叫做**DOM 事件流**

分为3各阶段:
1. 捕获阶段
2. 当前目标阶段
3. 冒泡阶段

![图片](../.vuepress/public/images/mp1.png)

注意: 
* JS 代码只能执行捕获或者冒泡其中的一个阶段
* onclick 和 attachEvent 只能得到冒泡阶段
* **addEventListener** 第三个参数如果是 `true` , 表示事件**捕获**阶段调用事件处理程序; 如果是 `false`(不写默认 false), 表示在事件冒泡阶段处理程序
* **实际开发中, 很少使用事件捕获, 更关注的是事件冒泡**
* **有些事件没有冒泡, 比如 onblur, onfocus, onmouseenter, onmouseleave** 
### 事件对象
跟事件相关的一系列信息数据的集合就是事件对象 event 
![图片](../.vuepress/public/images/event1.png)
### 事件对象的常见属性
![图片](../.vuepress/public/images/event2.png)
## 事件委托
**不是每个子节点单独设置事件监听器, 而是事件监听器设置在其父节点上, 然后利用冒泡原理影响设置每个子节点**

比如 : 给 ul 注册点击事件, 然后利用事件对象的 target 来找到当前点击的 li, 因为点击 li, 事件会冒泡到 ul 上, 
ul 注册事件, 就会触发事件监听器

作用: 
1. 只操作一次 DOM, 提高了程序的性能
## 常用的鼠标事件
![图片](../.vuepress/public/images/shubiao1.png)
### 禁用鼠标右键菜单
contextmenu
```js
document.addEventListener('contextmenu', function(e){
  e.preventDefault();
})
```
### 禁用鼠标选中
禁止鼠标选中 (selectstart)
```js
document.addEventListener('selectstart', function(e){
  e.preventDefault();
})
```
### 鼠标事件对象
鼠标事件对象  MouseEvent
![图片](../.vuepress/public/images/sb1.png)
#### 小天使案例
让一个图片始终跟着鼠标移动

分析: 
1. 鼠标不断移动, 使用鼠标移动事件 : **mousemove**
2. 在页面中移动, 给 `document` 注册事件
3. 图片要移动距离, 而且不占位置, 使用**绝对定位**
4. 核心原理: 每次鼠标移动获取最新的鼠标位置, 把这个 x 和 y 坐标作为图片的 top 和 left 就可以了

![图片](../.vuepress/public/images/tianshi1.png)
 -->
<!-- 
## EventTarget
因为继承自 EventTarget，所以也可以使用 EventTarget 的方法
![图片](../.vuepress/public/images/et66.png)

## Node 节点
所有的DOM节点类型都继承自Node接口。

[https://developer.mozilla.org/zh-CN/docs/Web/API/Node](https://developer.mozilla.org/zh-CN/docs/Web/API/Node)

**Node 有几个非常重要的属性：**
* nodeName：node 节点的名称。
* nodeType：可以区分节点的类型。
* nodeValue：node 节点的值；
* childNodes：所有的子节点

**nodeType:**
![图片](../.vuepress/public/images/nt11.png)

![图片](../.vuepress/public/images/domshuxing.png)

![图片](../.vuepress/public/images/dozhuyi.png)
## Document
常见的属性和方法：
![图片](../.vuepress/public/images/doshuxing.png)
![图片](../.vuepress/public/images/documentfangfa.png)

## Element 
平时创建的div、p、span 等元素在 DOM 中表示为 Element 元素，常见的属性和方法:
![图片](../.vuepress/public/images/element.png)

## 事件冒泡和事件捕获
我们会发现默认情况下事件是从最内层的 span 向外依次传递的顺序，这个顺序我们称之为事件冒泡（Event 
Bubble）。
* 事实上，还有另外一种监听事件流的方式就是从外层到内层（body -> span），这种称之为事件捕获（Event 
Capture）；
* 为什么会产生两种不同的处理流呢？
  * 这是因为早期浏览器开发时，不管是IE还是Netscape公司都发现了这个问题，但是他们采用了完全相反的事
件流来对事件进行了传递；
  * IE采用了事件冒泡的方式，Netscape采用了事件捕获的方式；

那么如何去监听事件捕获的过程呢 ?

![图片](../.vuepress/public/images/buhuo.png)

同时有事件冒泡和时间捕获的监听，那么会**优先监听到事件捕获**的
## 事件对象 event 
当一个事件发生时，就会有和这个事件相关的很多信息：
* 比如事件的类型是什么，你点击的是哪一个元素，点击的位置是哪里等等相关的信息；
* 那么这些信息会被封装到一个Event对象中；
* 该对象给我们提供了想要的一些属性，以及可以通过该对象进行某些操作；

常见的属性：
* type：事件的类型；
* target：当前事件发生的元素；
* currentTarget：当前处理事件的元素；
* offsetX、offsetY：点击元素的位置；

常见的方法：
* preventDefault：取消事件的默认行为；
* stopPropagation：阻止事件的进一步传递

事件类型 : [https://developer.mozilla.org/zh-CN/docs/Web/Events](https://developer.mozilla.org/zh-CN/docs/Web/Events) -->
<h1 id="dom" tabindex="-1"><a class="header-anchor" href="#dom" aria-hidden="true">#</a> DOM</h1>
<p>DOM相当于是JavaScript和HTML、CSS之间的桥梁</p>
<ul>
<li>通过浏览器提供给我们的 <strong>DOM API</strong>，可以<strong>对元素以及其中的内容</strong>做任何事情；</li>
</ul>
<p>类型之间有如下的继承关系：
<img src="@source/.vuepress/public/images/ddx1.png" alt="图片"></p>
<h2 id="document对象" tabindex="-1"><a class="header-anchor" href="#document对象" aria-hidden="true">#</a> document对象</h2>
<p>Document节点表示的整个载入的网页，它的实例是全局的document对象：</p>
<ul>
<li>对DOM的所有操作都是<strong>从 document 对象开始</strong>的；</li>
<li>它是<strong>DOM的 入口点</strong>，可以从document开始去访问任何节点元素；</li>
</ul>
<p>对于最顶层的html、head、body元素，我们可以直接在document对象中获取到：</p>
<ul>
<li><strong>html元素</strong>：<code>&lt;html&gt;</code> = document.documentElement</li>
<li><strong>body元素</strong>：<code>&lt;body&gt;</code> = document.body</li>
<li><strong>head元素</strong>：<code>&lt;head&gt;</code> = document.head</li>
<li><strong>文档声明</strong>：<code>&lt;!DOCTYPE html&gt;</code> = document.doctype</li>
</ul>
<p><img src="@source/.vuepress/public/images/dot1.png" alt="图片"></p>
<h2 id="节点-node-之间的导航-navigator" tabindex="-1"><a class="header-anchor" href="#节点-node-之间的导航-navigator" aria-hidden="true">#</a> 节点（Node）之间的导航（navigator）</h2>
<p>如果我们获取到<strong>一个节点（Node）<strong>后，可以根据这个节点去获取其他的节点，称之为</strong>节点之间的导航</strong></p>
<p>节点之间存在如下的关系：</p>
<ul>
<li>父节点：<strong>parentNode</strong></li>
<li>前兄弟节点：<strong>previousSibling</strong></li>
<li>后兄弟节点：<strong>nextSibling</strong></li>
<li>子节点：<strong>childNodes</strong></li>
<li>第一个子节点：<strong>firstChild</strong></li>
<li>第二个子节点：<strong>lastChild</strong></li>
</ul>
<p><img src="@source/.vuepress/public/images/nnn1.png" alt="图片"></p>
<h2 id="元素-element-之间的导航-navigator" tabindex="-1"><a class="header-anchor" href="#元素-element-之间的导航-navigator" aria-hidden="true">#</a> 元素（Element）之间的导航（navigator）</h2>
<p>如果获取到<strong>一个元素（Element）<strong>后 ，可以根据</strong>这个元素去获取其他的元素</strong>，称之为元素之间的导航</p>
<p>节点之间存在如下的关系：</p>
<ul>
<li>父元素：<strong>parentElement</strong></li>
<li>前兄弟节点：<strong>previousElementSibling</strong></li>
<li>后兄弟节点：<strong>nextElementSibling</strong></li>
<li>子节点：<strong>children</strong></li>
<li>第一个子节点：<strong>firstElementChild</strong></li>
<li>第二个子节点：<strong>lastElementChild</strong></li>
</ul>
<p><img src="@source/.vuepress/public/images/nnn2.png" alt="图片"></p>
<h2 id="获取元素的方法" tabindex="-1"><a class="header-anchor" href="#获取元素的方法" aria-hidden="true">#</a> 获取元素的方法</h2>
<p>DOM 提供了获取元素的方法：</p>
<p><img src="@source/.vuepress/public/images/nnn3.png" alt="图片"></p>
<p>开发中如何选择呢？</p>
<ul>
<li>目前最常用的是<strong>querySelector和querySelectAll</strong>；</li>
<li><strong>getElementById</strong>偶尔也会使用或者在适配一些低版本浏览器时；</li>
</ul>
<h2 id="节点的属性" tabindex="-1"><a class="header-anchor" href="#节点的属性" aria-hidden="true">#</a> 节点的属性</h2>
<h3 id="nodetype" tabindex="-1"><a class="header-anchor" href="#nodetype" aria-hidden="true">#</a> nodeType</h3>
<p>nodeType属性：</p>
<ul>
<li>nodeType 属性提供了一种获取节点类型的方法；</li>
<li>它有一个数值型值（numeric value）；</li>
</ul>
<p>常见的节点类型有如下：
<img src="@source/.vuepress/public/images/nt1.png" alt="图片">
<a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Node/nodeType" target="_blank" rel="noopener noreferrer">https://developer.mozilla.org/zh-CN/docs/Web/API/Node/nodeType<ExternalLinkIcon/></a></p>
<h3 id="nodename、tagname" tabindex="-1"><a class="header-anchor" href="#nodename、tagname" aria-hidden="true">#</a> nodeName、tagName</h3>
<ul>
<li>nodeName：获取node节点的名字；</li>
<li>tagName：获取元素的标签名词；
<img src="@source/.vuepress/public/images/nodename1.png" alt="图片"></li>
</ul>
<p><strong>tagName 和 nodeName 之间有什么不同呢？</strong></p>
<ul>
<li>tagName 属性仅适用于 Element 节点</li>
<li>nodeName 是为任意 Node 定义的
<ul>
<li>对于元素，它的意义与 tagName 相同，所以使用哪一个都是可以的</li>
<li>对于其他节点类型（text，comment 等），它拥有一个对应节点类型的字符串</li>
</ul>
</li>
</ul>
<h3 id="innerhtml、textcontent" tabindex="-1"><a class="header-anchor" href="#innerhtml、textcontent" aria-hidden="true">#</a> innerHTML、textContent</h3>
<p><strong>innerHTML 属性</strong></p>
<ul>
<li>将元素中的 HTML 获取为字符串形式；</li>
<li>设置元素中的内容；</li>
</ul>
<p><strong>outerHTML 属性</strong></p>
<ul>
<li>包含了元素的完整 HTML</li>
<li>innerHTML<strong>加上元素本身一样</strong>；</li>
</ul>
<p><strong>textContent 属性</strong></p>
<ul>
<li>仅仅获取元素中的文本内容；</li>
</ul>
<p><strong>innerHTML和textContent的区别：</strong></p>
<ul>
<li>使用 innerHTML，我们将其 <strong>“作为 HTML”插入</strong>，带有所有 HTML 标签</li>
<li>使用 textContent，我们将其 <strong>“作为文本”插入</strong>，所有符号（symbol）均按字面意义处理</li>
</ul>
<h3 id="其他属性" tabindex="-1"><a class="header-anchor" href="#其他属性" aria-hidden="true">#</a> 其他属性</h3>
<p><strong>hidden属性：也是一个全局属性，可以用于设置元素隐藏。</strong>
<img src="@source/.vuepress/public/images/hid1.png" alt="图片">
<strong>DOM 元素还有其他属性：</strong></p>
<ul>
<li>value
<ul>
<li><code>&lt;input&gt;，&lt;select&gt; 和 &lt;textarea&gt;</code>（HTMLInputElement，HTMLSelectElement……）的 value</li>
</ul>
</li>
<li>href
<ul>
<li><code>&lt;a href=&quot;...&quot;&gt;</code>（HTMLAnchorElement）的 href</li>
</ul>
</li>
<li>id
<ul>
<li>所有元素（HTMLElement）的 “id” 特性（attribute）的值</li>
</ul>
</li>
</ul>
<h2 id="元素的-attribute" tabindex="-1"><a class="header-anchor" href="#元素的-attribute" aria-hidden="true">#</a> 元素的 attribute</h2>
<h3 id="attribute的分类" tabindex="-1"><a class="header-anchor" href="#attribute的分类" aria-hidden="true">#</a> attribute的分类</h3>
<ul>
<li><strong>标准的attribute</strong>：某些attribute属性是标准的，比如id、class、href、type、value等</li>
<li><strong>非标准的attribute</strong>：某些attribute属性是自定义的，比如abc、age、height等</li>
</ul>
<p><img src="@source/.vuepress/public/images/abute1.png" alt="图片"></p>
<h3 id="attribute的操作" tabindex="-1"><a class="header-anchor" href="#attribute的操作" aria-hidden="true">#</a> attribute的操作</h3>
<ul>
<li><strong>elem.hasAttribute(name)</strong> — 检查特性是否存在。</li>
<li><strong>elem.getAttribute(name)</strong> — 获取这个特性值。</li>
<li><strong>elem.setAttribute(name, value)</strong> — 设置这个特性值。</li>
<li><strong>elem.removeAttribute(name)</strong> — 移除这个特性。</li>
<li><strong>attributes</strong> - attr对象的集合，具有name、value属性；</li>
</ul>
<p>attribute具备以下特征：</p>
<ul>
<li>它们的<strong>名字是大小写不敏感的（id 与 ID 相同）</strong></li>
<li>它们的值总是<strong>字符串类型</strong>的</li>
</ul>
<h2 id="元素的属性-property" tabindex="-1"><a class="header-anchor" href="#元素的属性-property" aria-hidden="true">#</a> 元素的属性（property）</h2>
<p>对于<strong>标准的attribute</strong>，会在DOM对象上创建<strong>与其对应的property属性</strong>：</p>
<p><img src="@source/.vuepress/public/images/proper1.png" alt="图片"></p>
<p>在大多数情况下，它们是相互作用的</p>
<ul>
<li>改变property，通过attribute获取的值，会随着改变；</li>
<li>通过attribute操作修改，property的值会随着改变；</li>
</ul>
<p><strong>除非特别情况，大多数情况下，设置、获取attribute，推荐使用property的方式：</strong></p>
<ul>
<li>这是因为它<strong>默认情况下是有类型</strong>的</li>
</ul>
<p><img src="@source/.vuepress/public/images/chc1.png" alt="图片"></p>
<h3 id="html5的data-自定义属性" tabindex="-1"><a class="header-anchor" href="#html5的data-自定义属性" aria-hidden="true">#</a> HTML5的data-*自定义属性</h3>
<p>它们也是可以在dataset属性中获取到的：</p>
<p><img src="@source/.vuepress/public/images/dataset01.png" alt="图片"></p>
<h3 id="元素的classname和classlist" tabindex="-1"><a class="header-anchor" href="#元素的classname和classlist" aria-hidden="true">#</a> 元素的className和classList</h3>
<p>元素的class attribute，对应的property并非叫class，<strong>而是 className</strong></p>
<ul>
<li>这是因为JavaScript早期是不允许使用class这种关键字来作为对象的属性，所以DOM规范使用了className；</li>
<li>虽然现在JavaScript已经没有这样的限制，但是并不推荐，并且依然在使用className这个名称；</li>
</ul>
<p>可以对className进行赋值，它会替换整个类中的字符串。
<img src="@source/.vuepress/public/images/classname1.png" alt="图片"></p>
<p>如果我们需要添加或者移除单个的 class，那么<strong>可以使用classList属性</strong></p>
<p>elem.classList 是一个特殊的对象：</p>
<ul>
<li><strong>elem.classList.add (class)</strong> ：添加一个类</li>
<li><strong>elem.classList.remove(class)</strong>：添加/移除类。</li>
<li><strong>elem.classList.toggle(class)</strong> ：如果类不存在就添加类，存在就移除它。</li>
<li><strong>elem.classList.contains(class)</strong>：检查给定类，返回 true/false。</li>
</ul>
<p><strong>classList是可迭代对象，可以通过for of进行遍历</strong></p>
<h3 id="元素的-style-属性" tabindex="-1"><a class="header-anchor" href="#元素的-style-属性" aria-hidden="true">#</a> 元素的 style 属性</h3>
<p>如果需要单独修改某一个CSS属性，那么可以通过style来操作：</p>
<ul>
<li><strong>对于多词（multi-word）属性，使用驼峰式 camelCase</strong></li>
</ul>
<p><img src="@source/.vuepress/public/images/yuan1.png" alt="图片"></p>
<p>如果我们将值设置为<strong>空字符串</strong>，那么会使用<strong>CSS的默认样式</strong>：</p>
<p><img src="@source/.vuepress/public/images/yuan2.png" alt="图片"></p>
<p>多个样式的写法，我们需要使用cssText属性：</p>
<ul>
<li>不推荐这种用法，因为它会替换整个字符串；
<img src="@source/.vuepress/public/images/yuan3.png" alt="图片"></li>
</ul>
<h3 id="元素style的读取-getcomputedstyle" tabindex="-1"><a class="header-anchor" href="#元素style的读取-getcomputedstyle" aria-hidden="true">#</a> 元素style的读取 - getComputedStyle</h3>
<p>如果我们需要读取样式：</p>
<ul>
<li>对于内联样式，是可以通过style.*的方式读取到的;</li>
<li>对于style、css文件中的样式，是读取不到的；</li>
</ul>
<p>可以通过<strong>getComputedStyle的全局函数</strong>来实现</p>
<p><img src="@source/.vuepress/public/images/cs1.png" alt="图片"></p>
<h2 id="元素常见操作" tabindex="-1"><a class="header-anchor" href="#元素常见操作" aria-hidden="true">#</a> 元素常见操作</h2>
<h3 id="创建元素" tabindex="-1"><a class="header-anchor" href="#创建元素" aria-hidden="true">#</a> 创建元素</h3>
<ul>
<li>步骤一：创建一个元素</li>
<li>步骤二：插入元素到 DOM 的某一个位置</li>
</ul>
<p><img src="@source/.vuepress/public/images/chuang1.png" alt="图片"></p>
<h3 id="插入元素" tabindex="-1"><a class="header-anchor" href="#插入元素" aria-hidden="true">#</a> 插入元素</h3>
<ul>
<li>node.append(...nodes or strings) —— 在 node 末尾 插入节点或字符串，</li>
<li>node.prepend(...nodes or strings) —— 在 node 开头 插入节点或字符串，</li>
<li>node.before(...nodes or strings) —— 在 node 前面 插入节点或字符串，</li>
<li>node.after(...nodes or strings) —— 在 node 后面 插入节点或字符串，</li>
<li>node.replaceWith(...nodes or strings) —— 将 node 替换为给定的节点或字符串。</li>
</ul>
<p><img src="@source/.vuepress/public/images/charu1.png" alt="图片"></p>
<h3 id="移除和克隆元素" tabindex="-1"><a class="header-anchor" href="#移除和克隆元素" aria-hidden="true">#</a> 移除和克隆元素</h3>
<p><strong>移除元素我们可以调用元素本身的remove方法：</strong></p>
<p><img src="@source/.vuepress/public/images/yichu1.png" alt="图片"></p>
<p><strong>如果我们想要复制一个现有的元素，可以通过cloneNode方法：</strong></p>
<ul>
<li>可以传入一个Boolean类型的值，来决定是否是深度克隆；</li>
<li>深度克隆会克隆对应元素的子元素，否则不会；</li>
</ul>
<p><img src="@source/.vuepress/public/images/yichu2.png" alt="图片"></p>
<h3 id="旧的元素操作方法" tabindex="-1"><a class="header-anchor" href="#旧的元素操作方法" aria-hidden="true">#</a> 旧的元素操作方法</h3>
<p>在很多地方也会看到一些旧的操作方法：</p>
<ul>
<li>parentElem.appendChild(node)：
<ul>
<li>在parentElem的父元素最后位置添加一个子元素</li>
</ul>
</li>
<li>parentElem.insertBefore(node, nextSibling)：
<ul>
<li>在parentElem的nextSibling前面插入一个子元素；</li>
</ul>
</li>
<li>parentElem.replaceChild(node, oldChild)：
<ul>
<li>在parentElem中，新元素替换之前的oldChild元素；</li>
</ul>
</li>
<li>parentElem.removeChild(node)：
<ul>
<li>在parentElem中，移除某一个元素；</li>
</ul>
</li>
</ul>
<h2 id="元素的大小-滚动" tabindex="-1"><a class="header-anchor" href="#元素的大小-滚动" aria-hidden="true">#</a> 元素的大小, 滚动</h2>
<ul>
<li>clientWidth：contentWith+padding（不包含滚动条）</li>
<li>clientHeight：contentHeight+padding</li>
<li>clientTop：border-top的宽度</li>
<li>clientLeft：border-left的宽度</li>
<li>offsetWidth：元素完整的宽度</li>
<li>offsetHeight：元素完整的高度</li>
<li>offsetLeft：距离父元素的x</li>
<li>offsetHeight：距离父元素的y</li>
<li>scrollHeight：整个可滚动的区域高度</li>
<li>scrollTop：滚动部分的高度</li>
</ul>
<p><img src="@source/.vuepress/public/images/daxiao1.png" alt="图片"></p>
<h2 id="window的大小、滚动" tabindex="-1"><a class="header-anchor" href="#window的大小、滚动" aria-hidden="true">#</a> window的大小、滚动</h2>
<p><strong>window的width和height</strong></p>
<ul>
<li>innerWidth、innerHeight：获取window窗口的宽度和高度（包含滚动条）</li>
<li>outerWidth、outerHeight：获取window窗口的整个宽度和高度（包括调试工具、工具栏）</li>
<li>documentElement.clientHeight、documentElement.clientWidth：获取html的宽度和高度（不包含滚动条）</li>
</ul>
<p><strong>window的滚动位置：</strong></p>
<ul>
<li>scrollX：X轴滚动的位置（别名pageXOffset）</li>
<li>scrollY：Y轴滚动的位置（别名pageYOffset）</li>
</ul>
<p><strong>也有提供对应的滚动方法：</strong></p>
<ul>
<li>方法 scrollBy(x,y) ：将页面滚动至 相对于当前位置的 (x, y) 位置；</li>
<li>方法 scrollTo(pageX,pageY) 将页面滚动至 绝对坐标；</li>
</ul>
</template>
