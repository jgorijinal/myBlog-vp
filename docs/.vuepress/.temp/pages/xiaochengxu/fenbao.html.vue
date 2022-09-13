<template><h1 id="分包" tabindex="-1"><a class="header-anchor" href="#分包" aria-hidden="true">#</a> 分包</h1>
<p>分包指的是把一个完整的小程序项目，按照需求<strong>划分为不同的子包</strong>，在构建时打包成不同的分包，用户在使用
时<strong>按需进行加载</strong></p>
<p>对小程序进行分包的好处主要有以下两点：</p>
<ul>
<li>可以<strong>优化小程序首次启动的下载时间</strong></li>
<li>在多团队共同开发时可以更好的<strong>解耦协作</strong></li>
</ul>
<h2 id="分包前的项目" tabindex="-1"><a class="header-anchor" href="#分包前的项目" aria-hidden="true">#</a> 分包前的项目</h2>
<p>分包前，小程序项目中<strong>所有的页面和资源</strong>都被打包到了一起，导致整个<strong>项目体积过大</strong>，影响小程序<strong>首次启动的下载时间</strong>。</p>
<p><img src="@source/.vuepress/public/images/fenbao1.png" alt="图片"></p>
<h2 id="分包后的项目" tabindex="-1"><a class="header-anchor" href="#分包后的项目" aria-hidden="true">#</a> 分包后的项目</h2>
<p>分包后，小程序项目由 <strong>1 个主包 + 多个分包组成</strong>：</p>
<ul>
<li>主包：一般只包含项目的<strong>启动页面或 TabBar 页面</strong>、以及所有分包都需要用到的一些<strong>公共资源</strong></li>
<li>分包：只包含和当前分包有关的页面和私有资源</li>
</ul>
<p><img src="@source/.vuepress/public/images/fenbao2.png" alt="图片"></p>
<h2 id="分包加载规则" tabindex="-1"><a class="header-anchor" href="#分包加载规则" aria-hidden="true">#</a> 分包加载规则</h2>
<ol>
<li>在小程序启动时，默认会<strong>下载主包</strong>并<strong>启动主包内页面</strong></li>
</ol>
<ul>
<li>tabBar 页面需要放到主包中</li>
</ul>
<ol start="2">
<li>当用户进入分包内某个页面时，<strong>客户端会把对应分包下载下来</strong>，下载完成后再进行展示</li>
</ol>
<ul>
<li>非 tabBar 页面可以按照功能的不同，划分为不同的分包之后，进行按需下载</li>
</ul>
<h2 id="分包的体积限制" tabindex="-1"><a class="header-anchor" href="#分包的体积限制" aria-hidden="true">#</a> 分包的体积限制</h2>
<p>目前，小程序分包的大小有以下两个限制：</p>
<ul>
<li>整个小程序所有分包大小不超过 <strong>16M（主包 + 所有分包）</strong></li>
<li>单个分包/主包大小不能超过 <strong>2M</strong></li>
</ul>
<h2 id="使用分包" tabindex="-1"><a class="header-anchor" href="#使用分包" aria-hidden="true">#</a> 使用分包</h2>
<h3 id="配置方法" tabindex="-1"><a class="header-anchor" href="#配置方法" aria-hidden="true">#</a> 配置方法</h3>
<p><img src="@source/.vuepress/public/images/fenbao3.png" alt="图片"></p>
<p><img src="@source/.vuepress/public/images/fenbao4.png" alt="图片"></p>
<h3 id="添加别名-查看体积" tabindex="-1"><a class="header-anchor" href="#添加别名-查看体积" aria-hidden="true">#</a> 添加别名, 查看体积</h3>
<p><img src="@source/.vuepress/public/images/fenbao5.png" alt="图片"></p>
<h3 id="打包原则" tabindex="-1"><a class="header-anchor" href="#打包原则" aria-hidden="true">#</a> 打包原则</h3>
<ol>
<li>小程序会按 subpackages 的配置进行分包，<strong>subpackages 之外的目录将被打包到主包中</strong></li>
<li>主包也可以有自己的 pages（即最外层的 pages 字段）</li>
<li><strong>tabBar 页面必须在主包内</strong></li>
<li>分包之间不能互相嵌套</li>
</ol>
<h3 id="引用原则" tabindex="-1"><a class="header-anchor" href="#引用原则" aria-hidden="true">#</a> 引用原则</h3>
<ul>
<li>主包<strong>无法引用</strong>分包内的私有资源</li>
<li>分包之间<strong>不能相互引用</strong>私有资源</li>
<li>分包<strong>可以引用</strong>主包内的公共资源</li>
</ul>
<p><img src="@source/.vuepress/public/images/fb1.png" alt="图片"></p>
<h2 id="独立打包" tabindex="-1"><a class="header-anchor" href="#独立打包" aria-hidden="true">#</a> 独立打包</h2>
<p>独立分包本质上也是分包，只不过它比较特殊，可以独立于主包和其他分包而单独运行</p>
<p><img src="@source/.vuepress/public/images/fb2.png" alt="图片"></p>
<p>最主要的区别：是否依赖于主包才能运行</p>
<ul>
<li>普通分包必须依赖于主包才能运行</li>
<li>独立分包可以在不下载主包的情况下，<strong>独立运行</strong></li>
</ul>
<h3 id="独立分包的应用场景" tabindex="-1"><a class="header-anchor" href="#独立分包的应用场景" aria-hidden="true">#</a> 独立分包的应用场景</h3>
<p>开发者可以按需，将某些具有一定功能独立性的页面配置到独立分包中。原因如下：</p>
<ul>
<li>当小程序从普通的分包页面启动时，需要首先下载主包</li>
<li>而独立分包<strong>不依赖主包</strong>即可运行，<strong>可以很大程度上提升分包页面的启动速度</strong></li>
</ul>
<p>注意：一个小程序中可以有多个独立分包</p>
<h3 id="独立分包配置方法" tabindex="-1"><a class="header-anchor" href="#独立分包配置方法" aria-hidden="true">#</a> 独立分包配置方法</h3>
<p><img src="@source/.vuepress/public/images/fb4.png" alt="图片"></p>
<h3 id="引用规则" tabindex="-1"><a class="header-anchor" href="#引用规则" aria-hidden="true">#</a> 引用规则</h3>
<p>独立分包和普通分包以及主包之间，**是相互隔绝的，不能相互引用彼此的资源！**例如：</p>
<ol>
<li>主包<strong>无法引用</strong>独立分包内的私有资源</li>
<li>独立分包之间，<strong>不能相互引用</strong>私有资源</li>
<li>独立分包和普通分包之间，<strong>不能相互引用</strong>私有资源</li>
<li><strong>特别注意</strong>：独立分包中不能引用主包内的公共资源</li>
</ol>
<h2 id="分包预加载" tabindex="-1"><a class="header-anchor" href="#分包预加载" aria-hidden="true">#</a> 分包预加载</h2>
<p>分包预下载指的是：在进入小程序的某个页面时，由框架自动预下载可能需要的分包，从而提升进入后续分包
页面时的启动速度</p>
<h3 id="配置预下载" tabindex="-1"><a class="header-anchor" href="#配置预下载" aria-hidden="true">#</a> 配置预下载</h3>
<p>预下载分包的行为，会在进入指定的页面时触发。在 app.json 中，使用 preloadRule 节点定义分包的预下载
规则
<img src="@source/.vuepress/public/images/yx1.png" alt="图片"></p>
<h3 id="分包预下载限制" tabindex="-1"><a class="header-anchor" href="#分包预下载限制" aria-hidden="true">#</a> 分包预下载限制</h3>
<p>同一个分包中的页面享有共同的<strong>预下载大小限额 2M</strong>，例如
<img src="@source/.vuepress/public/images/yx2.png" alt="图片"></p>
</template>
