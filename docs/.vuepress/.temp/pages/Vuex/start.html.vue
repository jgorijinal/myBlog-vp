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
<h3 id="封装usestate和usegetters-辅助函数" tabindex="-1"><a class="header-anchor" href="#封装usestate和usegetters-辅助函数" aria-hidden="true">#</a> 封装useState和useGetters 辅助函数</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>hooks
|-- useMapper.js  抽取共同的代码部分
|-- useState.js
|-- useGetters.js
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>useMapper.js</p>
<p><img src="@source/.vuepress/public/images/useMapper.png" alt="图片"></p>
<p>useState.js</p>
<p><img src="@source/.vuepress/public/images/us.png" alt="图片"></p>
<p>useGetters.js</p>
<p><img src="@source/.vuepress/public/images/ug.png" alt="图片"></p>
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
<h2 id="actions的基本使用" tabindex="-1"><a class="header-anchor" href="#actions的基本使用" aria-hidden="true">#</a> actions的基本使用</h2>
<p>action 类似于 mutation ,不同在于 :</p>
<ul>
<li>action 提交的是 mutation , 而不是直接变更状态</li>
<li>action 可以包含任何异步操作</li>
</ul>
<p>这里有一个非常重要的参数 context</p>
<ul>
<li>context 是一个和store实例均有相同方法和属性的 context 对象</li>
<li>所以可以从其中获取到 commit 方法来提交一个mutation, 或者通过context.state 和 context.getters 来获取state和getters</li>
<li>但是为什么他不是 store 对象? 在下面 modules 部分会知道</li>
</ul>
<h3 id="actions的分发操作" tabindex="-1"><a class="header-anchor" href="#actions的分发操作" aria-hidden="true">#</a> actions的分发操作</h3>
<ul>
<li>分发是用的是 store 上的 dispatch 函数 , 同样也可以携带参数</li>
</ul>
<p><img src="@source/.vuepress/public/images/dispatch.png" alt="图片">
<img src="@source/.vuepress/public/images/context.png" alt="图片"></p>
<h3 id="actions的其他细节" tabindex="-1"><a class="header-anchor" href="#actions的其他细节" aria-hidden="true">#</a> actions的其他细节</h3>
<ul>
<li>把 context 打出来看看 , 在参数上可进行解构
<img src="@source/.vuepress/public/images/cgetters.png" alt="图片">
<img src="@source/.vuepress/public/images/gg.png" alt="图片"></li>
<li>对象形式的派发风格</li>
</ul>
<p><img src="@source/.vuepress/public/images/oa.png" alt="图片"></p>
<h3 id="mapactions-辅助函数" tabindex="-1"><a class="header-anchor" href="#mapactions-辅助函数" aria-hidden="true">#</a> mapActions 辅助函数</h3>
<p><img src="@source/.vuepress/public/images/ma.png" alt="图片"></p>
<ul>
<li>在setup中使用 :
<img src="@source/.vuepress/public/images/sa.png" alt="图片"></li>
</ul>
<h3 id="actions的异步操作" tabindex="-1"><a class="header-anchor" href="#actions的异步操作" aria-hidden="true">#</a> actions的异步操作</h3>
<p>Action 通常是异步的 , 那么如何知道 action 什么时候结束 ?</p>
<ul>
<li>可以通过让action返回一个 Promise , 在Promise的then中处理完成后的操作</li>
</ul>
<p><img src="@source/.vuepress/public/images/pp.png" alt="图片">
<img src="@source/.vuepress/public/images/ppp.png" alt="图片"></p>
<h2 id="modules的基本使用" tabindex="-1"><a class="header-anchor" href="#modules的基本使用" aria-hidden="true">#</a> modules的基本使用</h2>
<p>什么是 Module ?</p>
<ul>
<li>由于使用单一状态树 , 应用中的所有状态会集中到一个比较大的对象 ,  当应用变得非常复杂时 , store对象就有可能变得相当臃肿</li>
<li>为了解决这个问题 , Vuex 允许我们将store 分割成多个<strong>模块(module)</strong></li>
<li>每个模块拥有自己的 state , getters , mutations , actions, 甚至是嵌套子模块</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>store
|-- index.js
|-- modules/home.js
|-- modules/user.js
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>home.js
<img src="@source/.vuepress/public/images/home.png" alt="图片"></p>
<p>user.js
<img src="@source/.vuepress/public/images/user.png" alt="图片"></p>
<p>index.js
<img src="@source/.vuepress/public/images/i.png" alt="图片"></p>
<p>模板:
<img src="@source/.vuepress/public/images/tmo.png" alt="图片"></p>
<h3 id="module的命名空间" tabindex="-1"><a class="header-anchor" href="#module的命名空间" aria-hidden="true">#</a> module的命名空间</h3>
<p>默认情况下, 模块内部的action 和 mutation 仍然是注册在<strong>全局的命名空间</strong>中:</p>
<ul>
<li>这样使得多个模块能够对同一个 action 或 mutation 作出相应</li>
<li>Getter 同样也默认注册在全局的命名空间中</li>
</ul>
<p>如果我们希望具有更高的封装度和复用性, 可以添加 <strong>namespaced:true</strong> 的方式使其成为带命名空间的模块 :</p>
<ul>
<li>当模块被注册后, 它的所有getters , actions , mutations ,都会自动根据模块注册的路径调整命名</li>
</ul>
<p><img src="@source/.vuepress/public/images/namespaced.png" alt="图片"></p>
<h3 id="module的辅助函数" tabindex="-1"><a class="header-anchor" href="#module的辅助函数" aria-hidden="true">#</a> module的辅助函数</h3>
<p>使用辅助函数有三种使用方法:</p>
<ul>
<li>方式一 : 通过完整的模块名称来查找</li>
<li>方式二 : 第一个参数传入模块空间名称, 后面写上要使用的属性</li>
<li>方式三 : 通过 <strong>createNamespacedHelper</strong> 生成一个模块的辅助函数</li>
</ul>
<p><img src="@source/.vuepress/public/images/no1.png" alt="图片"></p>
<p>主要使用下面的方法: <strong>createNamespacedHelper</strong></p>
<p><img src="@source/.vuepress/public/images/555.png" alt="图片"></p>
<h3 id="对-usestate-和-usegetters的修改-setup中的使用" tabindex="-1"><a class="header-anchor" href="#对-usestate-和-usegetters的修改-setup中的使用" aria-hidden="true">#</a> 对 useState 和 useGetters的修改 (setup中的使用)</h3>
<p>useState.js</p>
<p><img src="@source/.vuepress/public/images/ms.png" alt="图片"></p>
<p>useGetters.js</p>
<p><img src="@source/.vuepress/public/images/mg.png" alt="图片"></p>
</template>
