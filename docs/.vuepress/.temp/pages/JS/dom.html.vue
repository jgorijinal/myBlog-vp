<template><h1 id="dom" tabindex="-1"><a class="header-anchor" href="#dom" aria-hidden="true">#</a> DOM</h1>
<p>浏览器是用来展示网页的，而网页中最重要的就是里面各种的标签元素，JavaScrip t很多时候是需要操作这些元素的</p>
<ul>
<li>JavaScript 如何操作元素呢？通过Document Object Model（DOM，文档对象模型）</li>
<li>DOM 给我们提供了一系列的模型和对象，可以方便的来操作 Web 页面</li>
</ul>
<p><img src="@source/.vuepress/public/images/dom1.png" alt="图片"></p>
<h2 id="eventtarget" tabindex="-1"><a class="header-anchor" href="#eventtarget" aria-hidden="true">#</a> EventTarget</h2>
<p>因为继承自 EventTarget，所以也可以使用 EventTarget 的方法
<img src="@source/.vuepress/public/images/et66.png" alt="图片"></p>
<h2 id="node-节点" tabindex="-1"><a class="header-anchor" href="#node-节点" aria-hidden="true">#</a> Node 节点</h2>
<p>所有的DOM节点类型都继承自Node接口。</p>
<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Node" target="_blank" rel="noopener noreferrer">https://developer.mozilla.org/zh-CN/docs/Web/API/Node<ExternalLinkIcon/></a></p>
<p><strong>Node 有几个非常重要的属性：</strong></p>
<ul>
<li>nodeName：node 节点的名称。</li>
<li>nodeType：可以区分节点的类型。</li>
<li>nodeValue：node 节点的值；</li>
<li>childNodes：所有的子节点</li>
</ul>
<p><strong>nodeType:</strong>
<img src="@source/.vuepress/public/images/nt11.png" alt="图片"></p>
<p><img src="@source/.vuepress/public/images/domshuxing.png" alt="图片"></p>
<p><img src="@source/.vuepress/public/images/dozhuyi.png" alt="图片"></p>
<h2 id="document" tabindex="-1"><a class="header-anchor" href="#document" aria-hidden="true">#</a> Document</h2>
<p>常见的属性和方法：
<img src="@source/.vuepress/public/images/doshuxing.png" alt="图片">
<img src="@source/.vuepress/public/images/documentfangfa.png" alt="图片"></p>
<h2 id="element" tabindex="-1"><a class="header-anchor" href="#element" aria-hidden="true">#</a> Element</h2>
<p>平时创建的div、p、span 等元素在 DOM 中表示为 Element 元素，常见的属性和方法:
<img src="@source/.vuepress/public/images/element.png" alt="图片"></p>
<h2 id="事件冒泡和事件捕获" tabindex="-1"><a class="header-anchor" href="#事件冒泡和事件捕获" aria-hidden="true">#</a> 事件冒泡和事件捕获</h2>
<p>我们会发现默认情况下事件是从最内层的 span 向外依次传递的顺序，这个顺序我们称之为事件冒泡（Event
Bubble）。</p>
<ul>
<li>事实上，还有另外一种监听事件流的方式就是从外层到内层（body -&gt; span），这种称之为事件捕获（Event
Capture）；</li>
<li>为什么会产生两种不同的处理流呢？
<ul>
<li>这是因为早期浏览器开发时，不管是IE还是Netscape公司都发现了这个问题，但是他们采用了完全相反的事
件流来对事件进行了传递；</li>
<li>IE采用了事件冒泡的方式，Netscape采用了事件捕获的方式；</li>
</ul>
</li>
</ul>
<p>那么如何去监听事件捕获的过程呢 ?</p>
<p><img src="@source/.vuepress/public/images/buhuo.png" alt="图片"></p>
<p>同时有事件冒泡和时间捕获的监听，那么会<strong>优先监听到事件捕获</strong>的</p>
<h2 id="事件对象-event" tabindex="-1"><a class="header-anchor" href="#事件对象-event" aria-hidden="true">#</a> 事件对象 event</h2>
<p>当一个事件发生时，就会有和这个事件相关的很多信息：</p>
<ul>
<li>比如事件的类型是什么，你点击的是哪一个元素，点击的位置是哪里等等相关的信息；</li>
<li>那么这些信息会被封装到一个Event对象中；</li>
<li>该对象给我们提供了想要的一些属性，以及可以通过该对象进行某些操作；</li>
</ul>
<p>常见的属性：</p>
<ul>
<li>type：事件的类型；</li>
<li>target：当前事件发生的元素；</li>
<li>currentTarget：当前处理事件的元素；</li>
<li>offsetX、offsetY：点击元素的位置；</li>
</ul>
<p>常见的方法：</p>
<ul>
<li>preventDefault：取消事件的默认行为；</li>
<li>stopPropagation：阻止事件的进一步传递</li>
</ul>
<p>事件类型 : <a href="https://developer.mozilla.org/zh-CN/docs/Web/Events" target="_blank" rel="noopener noreferrer">https://developer.mozilla.org/zh-CN/docs/Web/Events<ExternalLinkIcon/></a></p>
</template>
