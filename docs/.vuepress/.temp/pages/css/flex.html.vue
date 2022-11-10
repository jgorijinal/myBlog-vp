<template><h1 id="flex-布局" tabindex="-1"><a class="header-anchor" href="#flex-布局" aria-hidden="true">#</a> flex 布局</h1>
<h2 id="flex-布局的重要概念" tabindex="-1"><a class="header-anchor" href="#flex-布局的重要概念" aria-hidden="true">#</a> flex 布局的重要概念</h2>
<p><strong>两个重要的概念：</strong></p>
<ul>
<li>开启了 flex 布局的元素叫 <em>flex container</em></li>
<li>flex container 里面的直接子元素叫做 <em>flex item</em></li>
</ul>
<p><img src="@source/.vuepress/public/images/fx1.png" alt="图片"></p>
<p><strong>当flex container中的子元素变成了flex item时, 具备一下特点:</strong></p>
<ul>
<li>flex item 的布局<em>将受 flex container 属性的设置来进行控制和布局;</em></li>
<li>flex item <em>不再严格区分块级元素和行内级元素</em>;</li>
<li>flex item <em>默认情况下是包裹内容的, 但是可以设置宽度和高度</em></li>
</ul>
<p><strong>设置 display 属性为 flex 或者 inline-flex 可以成为 flex container</strong></p>
<ul>
<li><strong>flex：</strong> flex container 以 block-level 形式存在</li>
<li><strong>inline-flex：</strong> flex container 以 inline-level 形式存在</li>
</ul>
<h2 id="flex-布局的模型" tabindex="-1"><a class="header-anchor" href="#flex-布局的模型" aria-hidden="true">#</a> flex 布局的模型</h2>
<p><img src="@source/.vuepress/public/images/fx2.png" alt="图片"></p>
<h2 id="flex-container-的属性" tabindex="-1"><a class="header-anchor" href="#flex-container-的属性" aria-hidden="true">#</a> flex container 的属性</h2>
<h3 id="flex-direction" tabindex="-1"><a class="header-anchor" href="#flex-direction" aria-hidden="true">#</a> flex-direction</h3>
<p>flex items 默认都是沿着 main axis（主轴）从 main start 开始往 main end 方向排布</p>
<ul>
<li>flex-direction 决定了 main axis 的方向，有 4 个取值</li>
<li><strong>row（默认值）、row-reverse、column、column-reverse</strong></li>
</ul>
<p><img src="@source/.vuepress/public/images/dt1.png" alt="图片">
<img src="@source/.vuepress/public/images/dt2.png" alt="图片"></p>
<h3 id="flex-wrap" tabindex="-1"><a class="header-anchor" href="#flex-wrap" aria-hidden="true">#</a> flex-wrap</h3>
<p>flex-wrap 决定了 flex container 是单行还是多行</p>
<ul>
<li><strong>nowrap（默认）</strong>：单行</li>
<li><strong>wrap</strong>：多行</li>
<li>wrap-reverse：根本不用</li>
</ul>
<h3 id="flex-flow" tabindex="-1"><a class="header-anchor" href="#flex-flow" aria-hidden="true">#</a> flex-flow</h3>
<p>flex-flow 属性是 flex-direction 和 flex-wrap 的简写</p>
<ul>
<li> 顺序任何, 并且都可以省略</li>
</ul>
<p><img src="@source/.vuepress/public/images/flexflow.png" alt="图片"></p>
<h3 id="justify-content" tabindex="-1"><a class="header-anchor" href="#justify-content" aria-hidden="true">#</a> justify-content</h3>
<p>justify-content 决定了 flex items 在 main axis 上的对齐方式</p>
<ul>
<li><strong>flex-start</strong>（默认值）：与 main start 对齐</li>
<li><strong>flex-end</strong>：与 main end 对齐</li>
<li><strong>center</strong>：居中对齐</li>
<li><strong>space-between：</strong>
<ul>
<li>flex items 之间的距离相等</li>
<li>与 main start、main end两端对齐</li>
</ul>
</li>
<li><strong>space-around</strong>：
<ul>
<li>flex items 之间的距离相等</li>
<li>flex items 与 main start、main end 之间的距离是 flex items 之间距离的一半</li>
</ul>
</li>
<li><strong>space-evenly：</strong>
<ul>
<li>flex items 之间的距离相等</li>
<li>flex items 与 main start、main end 之间的距离 等于 flex items 之间的距离</li>
</ul>
</li>
</ul>
<p><img src="@source/.vuepress/public/images/jc1.png" alt="图片"></p>
<h3 id="align-items" tabindex="-1"><a class="header-anchor" href="#align-items" aria-hidden="true">#</a> align-items</h3>
<p>align-items 决定了 flex items 在 cross axis 上的对齐方式</p>
<ul>
<li><strong>normal</strong>：在弹性布局中，效果和stretch一样</li>
<li><strong>stretch</strong>：当 flex items 在 cross axis 方向的 size 为 auto 时，会</li>
</ul>
<p>自动拉伸至填充 flex container</p>
<ul>
<li><strong>flex-start</strong>：与 cross start 对齐</li>
<li><strong>flex-end</strong>：与 cross end 对齐</li>
<li><strong>center</strong>：居中对齐</li>
<li><strong>baseline</strong>：与基准线对齐</li>
</ul>
<p><img src="@source/.vuepress/public/images/alignitems1.png" alt="图片"></p>
<h3 id="align-content" tabindex="-1"><a class="header-anchor" href="#align-content" aria-hidden="true">#</a> align-content</h3>
<p>align-content 决定了<strong>多行</strong> flex items 在 cross axis (交叉轴)上的对齐方式，用法与 justify-content 类似</p>
<ul>
<li>stretch（默认值）：与 align-items 的 stretch 类似</li>
<li>flex-start：与 cross start 对齐</li>
<li>flex-end：与 cross end 对齐</li>
<li>center：居中对齐</li>
<li>space-between：
<ul>
<li>flex items 之间的距离相等</li>
<li>与 cross start、cross end两端对齐</li>
</ul>
</li>
<li>space-around：
<ul>
<li>flex items 之间的距离相等</li>
<li>flex items 与 cross start、cross end 之间的距离是 flex items 之间距离的一半</li>
</ul>
</li>
<li>space-evenly：
<ul>
<li>flex items 之间的距离相等</li>
<li>flex items 与 cross start、cross end 之间的距离 等于 flex items 之间的距离</li>
</ul>
</li>
</ul>
<h2 id="flex-item-的属性" tabindex="-1"><a class="header-anchor" href="#flex-item-的属性" aria-hidden="true">#</a> flex item 的属性</h2>
<h3 id="order" tabindex="-1"><a class="header-anchor" href="#order" aria-hidden="true">#</a> order</h3>
<p>order 决定了 flex items 的排布顺序</p>
<ul>
<li>可以设置任意整数（正整数、负整数、0），值越小就越排在前面</li>
<li>默认值是 0</li>
</ul>
<p><img src="@source/.vuepress/public/images/order1.png" alt="图片"></p>
<h3 id="align-self" tabindex="-1"><a class="header-anchor" href="#align-self" aria-hidden="true">#</a> align-self</h3>
<p>flex items 可以通过 <strong>align-self</strong> 覆盖 flex container 设置的 align-items</p>
<ul>
<li>auto（默认值）：遵从 flex container 的 align-items 设置</li>
<li>stretch、flex-start、flex-end、center、baseline，效果跟 align-items 一致</li>
</ul>
<p><img src="@source/.vuepress/public/images/alignself1.png" alt="图片"></p>
<h3 id="flex-grow" tabindex="-1"><a class="header-anchor" href="#flex-grow" aria-hidden="true">#</a> flex-grow</h3>
<p>flex-grow 决定了 flex items 如何扩展(拉伸/成长)</p>
<ul>
<li>可以设置任意非负数字（正小数、正整数、0），<strong>默认值是 0</strong></li>
<li>当 flex container 在 main axis 方向上有<strong>剩余 size</strong> 时，flex-grow 属性才会有效</li>
</ul>
<p>如果所有 flex items 的 flex-grow 总和 sum 超过 1，每个 flex item 扩展的 size 为</p>
<ul>
<li>flex container 的剩余 size * 自己的 flex-grow 值 / sum</li>
</ul>
<p><strong>flex items 扩展后的最终 size 不能超过 max-width\max-height</strong></p>
<h3 id="flex-shrink" tabindex="-1"><a class="header-anchor" href="#flex-shrink" aria-hidden="true">#</a> flex-shrink</h3>
<p>flex-shrink 决定了 flex items 如何收缩(缩小)</p>
<ul>
<li>可以设置任意非负数字（正小数、正整数、0），<strong>默认值是 1</strong></li>
<li>当 flex items 在 main axis 方向上超过了 flex container 的 size，flex-shrink 属性才会有效</li>
</ul>
<p>如果所有 flex items 的 flex-shrink 总和超过 1，每个 flex item 收缩的 size为</p>
<ul>
<li>flex items 超出 flex container 的 size * 收缩比例 / 所有 flex items 的收缩比例之和</li>
</ul>
<p><strong>flex items 收缩后的最终 size 不能小于 min-width\min-height</strong></p>
<h3 id="flex-basis" tabindex="-1"><a class="header-anchor" href="#flex-basis" aria-hidden="true">#</a> flex-basis</h3>
<p>flex-basis 用来设置 flex items 在 main axis 方向上的 <strong>base size</strong></p>
<ul>
<li>auto（默认值）、具体的宽度数值（100px）</li>
</ul>
<p><strong>因为设置了基础尺寸, 可以被扩展尺寸(通常代替 width 属性 使用 flex-basis 设置基础尺寸)</strong></p>
<p>决定 flex items 最终 base size 的因素，从优先级高到低</p>
<ul>
<li>max-width\max-height\min-width\min-height</li>
<li>flex-basis</li>
<li>width\height</li>
<li>内容本身的 size</li>
</ul>
<h3 id="flex" tabindex="-1"><a class="header-anchor" href="#flex" aria-hidden="true">#</a> flex</h3>
<p>flex 是 <strong>flex-grow || flex-shrink || flex-basis 的简写</strong>,flex 属性可以指定1个，2个或3个值</p>
<p><img src="@source/.vuepress/public/images/flexjianxie.png" alt="图片"></p>
<p><strong>所以 flex:1 是 flex-grow:1</strong></p>
<p>单值语法: 值必须为以下其中之一:</p>
<ul>
<li><strong>一个无单位数(<code>&lt;number&gt;</code>): 它会被当作<code>&lt;flex-grow&gt;</code>的值</strong></li>
<li>一个有效的宽度(width)值: 它会被当作 <code>&lt;flex-basis&gt;</code>的值。</li>
<li>关键字none，auto或initial</li>
</ul>
<p>双值语法: 第一个值必须为一个无单位数，并且它会被当作 <code>&lt;flex-grow&gt;</code> 的值。</p>
<ul>
<li>第二个值必须为以下之一
<ul>
<li>一个无单位数：它会被当作 <code>&lt;flex-shrink&gt;</code>的值。</li>
<li>一个有效的宽度值: 它会被当作<code> &lt;flex-basis&gt;</code> 的值。</li>
</ul>
</li>
</ul>
<p>三值语法:</p>
<ul>
<li>第一个值必须为一个无单位数，并且它会被当作 <code>&lt;flex-grow&gt;</code> 的值。</li>
<li>第二个值必须为一个无单位数，并且它会被当作 <code>&lt;flex-shrink&gt; </code>的值。</li>
<li>第三个值必须为一个有效的宽度值， 并且它会被当作<code>&lt;flex-basis&gt;</code>的值。</li>
</ul>
<h3 id="思考-如下布局如何解决对其问" tabindex="-1"><a class="header-anchor" href="#思考-如下布局如何解决对其问" aria-hidden="true">#</a> 思考: 如下布局如何解决对其问</h3>
<p><img src="@source/.vuepress/public/images/flexsikao.png" alt="图片"></p>
<p>display:flex 的子元素不区分 行内块</p>
<p>方法 :
<img src="@source/.vuepress/public/images/flexsikao2.png" alt="图片"></p>
<p>然后<strong>给空的 span 元素, 只加上正确的 width 宽度</strong></p>
</template>
