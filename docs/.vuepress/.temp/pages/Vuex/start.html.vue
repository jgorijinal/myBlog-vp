<template><h1 id="vuex" tabindex="-1"><a class="header-anchor" href="#vuex" aria-hidden="true">#</a> Vuex</h1>
<p><a href="https://vuex.vuejs.org/zh/" target="_blank" rel="noopener noreferrer">官网<ExternalLinkIcon/></a></p>
<p>先安装vuex, 使用的是vuex.4.x, 安装的时候需要添加next指定版本</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> vuex@next --save
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="创建-store" tabindex="-1"><a class="header-anchor" href="#创建-store" aria-hidden="true">#</a> 创建 store</h2>
<p><strong>每一个 Vuex 的应用核心就是 store(仓库)</strong></p>
<ul>
<li>store 本质上是一个容器, 它包含着应用中大部分的状态 (state)</li>
</ul>
<p><strong>Vuex 和单纯的全局对象有什么区别 ?</strong></p>
<ul>
<li>第一 : Vuex 的状态存储是响应式的
<ul>
<li>当vue组件从 store中读取状态的时候, 若store中的状态发生了变化, 那么相应的组件也会被更新</li>
</ul>
</li>
<li>第二 : 不能直接改变 store 中的状态
<ul>
<li>改变store中状态的唯一途径是显示提交(commit) mutation</li>
<li>这样使我们可以方便的跟踪每一个状态, 从而让我们能够通过devtools工具帮助我们更好的管应用的状态</li>
</ul>
</li>
<li>使用步骤:
<ul>
<li>创建 store 对象</li>
<li>在 app 中通过插件安装</li>
</ul>
</li>
</ul>
<p><img src="@source/.vuepress/public/images/store.png" alt="图片">
<img src="@source/.vuepress/public/images/mstore.png" alt="图片"></p>
<h2 id="组件获取状态-state" tabindex="-1"><a class="header-anchor" href="#组件获取状态-state" aria-hidden="true">#</a> 组件获取状态 state</h2>
<ul>
<li>可以在模板里获取状态</li>
</ul>
<p><img src="@source/.vuepress/public/images/tstate.png" alt="图片"></p>
<ul>
<li>如果觉得上面方式优点繁琐(表达式过长) , 可以使用计算属性 computed</li>
</ul>
<p><img src="@source/.vuepress/public/images/cstate.png" alt="图片"></p>
<ul>
<li>但是有很多个状态都需要获取的话 , 可以使用 mapState 辅助函数 :</li>
<li>方式一 : 对象类型</li>
<li>方式二 : 数组类型</li>
<li>也可以使用展开运算符和原有的 computed 属性混合在一起</li>
</ul>
<p><img src="@source/.vuepress/public/images/map1.png" alt="图片">
<img src="@source/.vuepress/public/images/map2.png" alt="图片"></p>
<h3 id="在setup中使用-mapstate" tabindex="-1"><a class="header-anchor" href="#在setup中使用-mapstate" aria-hidden="true">#</a> 在setup中使用 mapState</h3>
<p>在 setup 中如果想要获取单个状态是非常简单的</p>
<ul>
<li>通过 useStore 拿到 store后获取某个状态就行</li>
</ul>
<p><img src="@source/.vuepress/public/images/setupstate.png" alt="图片"></p>
<p>但是如果想要使用 mapState 功能呢 ?</p>
<ul>
<li>默认情况下 , Vuex 没有提供非常方便的使用 mapState 的方法 , 需要进行一个封装 hook</li>
</ul>
<p>hooks/useState.js
<img src="@source/.vuepress/public/images/useState.png" alt="图片">
在组件内使用时:
<img src="@source/.vuepress/public/images/useState2.png" alt="图片"></p>
<h2 id="getters的基本使用" tabindex="-1"><a class="header-anchor" href="#getters的基本使用" aria-hidden="true">#</a> getters的基本使用</h2>
<p>某些属性可能经过变化后来使用 , 这个时候可以用 getters
<img src="@source/.vuepress/public/images/getters1.png" alt="图片">
<img src="@source/.vuepress/public/images/getters2.png" alt="图片"></p>
<h3 id="getters的第二个参数" tabindex="-1"><a class="header-anchor" href="#getters的第二个参数" aria-hidden="true">#</a> getters的第二个参数</h3>
<p>getters 可以接受第二个参数 : getters 它可以访问其他的getters  (下图)</p>
<h3 id="getters的返回函数" tabindex="-1"><a class="header-anchor" href="#getters的返回函数" aria-hidden="true">#</a> getters的返回函数</h3>
<p>getters 中的函数本身 , 可以返回一个函数 , 那么在使用的地方相当于可以调用这个函数
<img src="@source/.vuepress/public/images/gfn.png" alt="图片">
<img src="@source/.vuepress/public/images/gfn2.png" alt="图片"></p>
<h3 id="mapgetters-辅助函数" tabindex="-1"><a class="header-anchor" href="#mapgetters-辅助函数" aria-hidden="true">#</a> mapGetters 辅助函数</h3>
<ul>
<li>使用 mapGetters 辅助函数 :
<img src="@source/.vuepress/public/images/mg1.png" alt="图片"></li>
<li>在 setup 中使用:
<img src="@source/.vuepress/public/images/sg.png" alt="图片"></li>
</ul>
<h2 id="mutation-基本使用" tabindex="-1"><a class="header-anchor" href="#mutation-基本使用" aria-hidden="true">#</a> mutation 基本使用</h2>
<p><strong>更改 Vuex 的 store 中的状态的唯一方法就是提交 mutation :</strong>
<img src="@source/.vuepress/public/images/mu1.png" alt="图片">
<img src="@source/.vuepress/public/images/mu11.png" alt="图片"></p>
<ul>
<li>payload 为<strong>对象</strong>形式</li>
</ul>
<p><img src="@source/.vuepress/public/images/mu2.png" alt="图片">
<img src="@source/.vuepress/public/images/mu22.png" alt="图片"></p>
<ul>
<li>对象风格的提交方法</li>
</ul>
<p><img src="@source/.vuepress/public/images/mu3.png" alt="图片"></p>
<h3 id="mutation常量类型" tabindex="-1"><a class="header-anchor" href="#mutation常量类型" aria-hidden="true">#</a> Mutation常量类型</h3>
<ul>
<li>定义常量  : mutation-type.js</li>
</ul>
<p><img src="@source/.vuepress/public/images/tm.png" alt="图片"></p>
<ul>
<li>定义 mutation</li>
</ul>
<p><img src="@source/.vuepress/public/images/mm.png" alt="图片"></p>
<ul>
<li>提交 mutation</li>
</ul>
<p><img src="@source/.vuepress/public/images/mmm.png" alt="图片"></p>
<h3 id="mapmutations" tabindex="-1"><a class="header-anchor" href="#mapmutations" aria-hidden="true">#</a> mapMutations</h3>
<ul>
<li>方式一 : 数组类型</li>
<li>方式二 : 对象类型</li>
</ul>
<p><img src="@source/.vuepress/public/images/mapmu.png" alt="图片"></p>
<ul>
<li>在setup中使用 mapMutations</li>
</ul>
<p><img src="@source/.vuepress/public/images/sm.png" alt="图片"></p>
</template>
