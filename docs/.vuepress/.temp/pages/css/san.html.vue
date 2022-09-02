<template><h1 id="三大特性-层叠性、继承性、优先级" tabindex="-1"><a class="header-anchor" href="#三大特性-层叠性、继承性、优先级" aria-hidden="true">#</a> 三大特性 层叠性、继承性、优先级</h1>
<h2 id="_1-层叠性" tabindex="-1"><a class="header-anchor" href="#_1-层叠性" aria-hidden="true">#</a> 1. 层叠性</h2>
<p><em>相同选择器给设置相同的样式, 此时一个样式就会 <strong>覆盖(层叠)</strong> 另一个冲突的样式</em></p>
<p>层叠性原则:</p>
<ul>
<li>样式冲突, 遵循的原则是 <strong>就近原则</strong> , 哪个样式离结构近, 就执行哪个样式</li>
<li>样式不冲突 , 不会层叠</li>
</ul>
<h2 id="_2-继承性" tabindex="-1"><a class="header-anchor" href="#_2-继承性" aria-hidden="true">#</a> 2. 继承性</h2>
<p>子标签会继承附表钱的样式, 如文本颜色和字号。</p>
<ul>
<li>
<p>恰当的使用继承可以简化代码, 降低 css 样式的复杂性</p>
</li>
<li>
<p>子元素可以继承父元素的样式 (<strong>text-</strong>, <strong>font-</strong> , <strong>line-</strong> 这些元素开头的可以继承, 以及 <strong>color</strong> 属性)</p>
</li>
</ul>
<h3 id="行高的继承" tabindex="-1"><a class="header-anchor" href="#行高的继承" aria-hidden="true">#</a> 行高的继承</h3>
<p><img src="@source/.vuepress/public/images/hg1.png" alt="图片">
<img src="@source/.vuepress/public/images/hg.png" alt="图片"></p>
<h2 id="_3-优先级" tabindex="-1"><a class="header-anchor" href="#_3-优先级" aria-hidden="true">#</a> 3. 优先级</h2>
<ul>
<li>选择器相同, 则执行层叠性</li>
<li>选择器不同 , 则根据 <strong>选择器权重</strong> 执行
<img src="@source/.vuepress/public/images/quanzhong1.png" alt="图片"></li>
</ul>
<p>优先级注意点:</p>
<ul>
<li>权重是由 4组 数字组成, 但是<strong>不会有进位</strong></li>
<li>可以理解为类选择器永远大于元素选择器, id选择器永远大于类选择器, 以此类推...</li>
<li>等级判断从左到右, 如果某一位相同, 则判断下一位, 以此类推</li>
<li>简单记忆法, 通配符和继承权重为 0 , 标签选择器为 1 , 类(伪类)选择器为 10 , id 选择器为 100, 行内样式表为1000 , !important 无穷大</li>
<li><strong>继承的权重为 0</strong></li>
</ul>
<h3 id="权重叠加" tabindex="-1"><a class="header-anchor" href="#权重叠加" aria-hidden="true">#</a> 权重叠加</h3>
<p><strong>权重叠加</strong> : 如果有复合选择器, 则有权重叠加,  需要计算权重
<img src="@source/.vuepress/public/images/qz3.png" alt="图片">
<img src="@source/.vuepress/public/images/qz1.png" alt="图片">
<img src="@source/.vuepress/public/images/qz2.png" alt="图片"></p>
</template>
