<template><h1 id="模块化" tabindex="-1"><a class="header-anchor" href="#模块化" aria-hidden="true">#</a> 模块化</h1>
<h2 id="模块化的历史" tabindex="-1"><a class="header-anchor" href="#模块化的历史" aria-hidden="true">#</a> 模块化的历史</h2>
<p>在网页开发的早期，Brendan Eich 开发 JavaScript 仅仅作为一种<strong>脚本语言</strong>，做一些简单的表单验证或动画实现等，那个时
候代码还是很少的：</p>
<ul>
<li>这个时候我们只需要讲JavaScript代码写到 <strong><code>&lt;script&gt;</code>标签</strong>中即可；</li>
<li>并没有必要放到多个文件中来编写；甚至流行：通常来说 JavaScript 程序的长度只有一行。</li>
</ul>
<p>但是随着前端和 JavaScript 的快速发展，JavaScript 代码变得越来越复杂了：</p>
<ul>
<li>ajax 的出现，<strong>前后端开发分离</strong>，意味着后端返回数据后，我们需要通过<strong>JavaScript进行前端页面的渲染</strong>；</li>
<li>SPA 的出现，前端页面变得更加复杂：包括<strong>前端路由、状态管理</strong>等等一系列复杂的需求需要通过JavaScript来实现；</li>
<li>包括Node的实现，JavaScript 编写<strong>复杂的后端程序</strong>，没有模块化是致命的硬伤；</li>
</ul>
<p>所以，模块化已经是 JavaScript 一个非常迫切的需求：</p>
<ul>
<li>但是 JavaScript 本身，直到<strong>ES6（2015</strong>）才推出了自己的模块化方案；</li>
<li>在此之前，为了让 JavaScript 支持模块化，涌现出了很多不同的模块化规范：<strong>AMD、CMD、CommonJS</strong>等；</li>
</ul>
<h2 id="没有模块化带来的问题" tabindex="-1"><a class="header-anchor" href="#没有模块化带来的问题" aria-hidden="true">#</a> 没有模块化带来的问题</h2>
<p>早期没有模块化带来了很多的问题：比如命名冲突的问题</p>
<p>当然，有办法可以解决上面的问题：<strong>立即函数调用表达式（IIFE）</strong></p>
<ul>
<li>IIFE (Immediately Invoked Function Expression)</li>
</ul>
<p>但是，我们其实带来了新的问题：</p>
<ul>
<li>第一，我必须记得<strong>每一个模块中返回对象的命名</strong>，才能在其他模块使用过程中正确的使用；</li>
<li>第二，代码写起来<strong>混乱不堪</strong>，每个文件中的代码都需要<strong>包裹在一个匿名函数中来编写</strong>；</li>
<li>第三，在<strong>没有合适的规范情况</strong>下，每个人、每个公司都可能会任意命名、甚至出现模块名称相同的情况；</li>
</ul>
<p>所以，我们会发现，虽然实现了模块化，但是我们的实现过于简单，并且是没有规范的。</p>
<ul>
<li>我们需要制定一定的规范来约束每个人都<strong>按照这个规范去编写模块化的代码</strong>；</li>
<li>这个规范中应该包括核心功能：<strong>模块本身可以导出暴露的属性，模块又可以导入自己需要的属性；</strong></li>
<li>JavaScript 社区为了解决上面的问题，涌现出<strong>一系列好用的规范</strong>，接下来我们就学习具有代表性的一些规范。</li>
</ul>
<h2 id="commonjs-规范和-node-关系" tabindex="-1"><a class="header-anchor" href="#commonjs-规范和-node-关系" aria-hidden="true">#</a> CommonJS 规范和 Node 关系</h2>
<p>我们需要知道 CommonJS 是一个<strong>规范</strong>，最初提出来是在浏览器以外的地方使用，并且当时被命名为 <strong>ServerJS</strong>，后来为了
体现它的广泛性，修改为 <strong>CommonJS</strong>，平时我们也会<strong>简称为CJS</strong></p>
<ul>
<li>Node 是 CommonJS 在服务器端一个具有代表性的实现；</li>
<li>Browserify 是 CommonJS 在浏览器中的一种实现；</li>
<li>webpack 打包工具具备对 CommonJS 的支持和转换；</li>
</ul>
<p>所以，Node 中对 <strong>CommonJS 进行了支持和实现</strong>，让我们在开发 node 的过程中可以方便的进行模块化开发：</p>
<ul>
<li><strong>在Node中<em>每一个js文件都是一个单独的模块；</em></strong></li>
<li>这个模块中包括 <strong>CommonJS 规范的核心变量</strong>：exports、module.exports、require；</li>
<li>我们可以使用这些变量来方便的进行<strong>模块化开发</strong>；</li>
</ul>
<p>前面我们提到过模块化的核心是导出和导入，Node 中对其进行了实现：</p>
<ul>
<li>exports 和 module.exports 可以负责<strong>对模块中的内容进行导出</strong>；</li>
<li>require 函数可以帮助我们**导入其他模块（自定义模块、系统模块、第三方库模块）**中的内容；</li>
</ul>
<h2 id="模块化案例" tabindex="-1"><a class="header-anchor" href="#模块化案例" aria-hidden="true">#</a> 模块化案例</h2>
<p><img src="@source/.vuepress/public/images/mokuaihua1.png" alt="图片"></p>
<h2 id="exports-导出" tabindex="-1"><a class="header-anchor" href="#exports-导出" aria-hidden="true">#</a> exports 导出</h2>
<p><strong>注意：exports 是一个对象，我们可以在这个对象中添加很多个属性，添加的属性会导出</strong></p>
<p><img src="@source/.vuepress/public/images/exports1.png" alt="图片"></p>
<p><strong>另外一个文件中可以导入：</strong></p>
<p><img src="@source/.vuepress/public/images/exports2.png" alt="图片"></p>
<p>理解下面这句话，Node 中的模块化一目了然 :</p>
<ul>
<li><strong>意味着 main 中的 bar 变量等于 exports 对象</strong></li>
<li>也就是 require 通过各种查找方式，最终找到了 exports 这个对象；</li>
<li>并且将这个 exports 对象赋值给了 bar 变量；</li>
<li>bar 变量就是 exports 对象了</li>
</ul>
<h2 id="module-exports-导出" tabindex="-1"><a class="header-anchor" href="#module-exports-导出" aria-hidden="true">#</a> module.exports 导出</h2>
<p><img src="@source/.vuepress/public/images/me.png" alt="图片"></p>
<p><strong>module.exports 和 exports 有什么关系或者区别 ??</strong></p>
<ul>
<li>CommonJS 中是没有 module.exports 的概念的；</li>
<li>为了实现模块的导出，Node 中使用的是 Module 的类，每一个模块都是Module的一个实例，也就是
module；</li>
<li>所以在 Node 中真正用于导出的其实根本不是 exports ，而是 module.exports</li>
<li>因为 module 才是导出的真正实现者；</li>
</ul>
<p>但是，为什么 exports 也可以导出呢？</p>
<ul>
<li>这是因为 module 对象的 exports 属性是 exports 对象的一个引用；</li>
<li>也就是说 module.exports = exports = main 中的 bar；</li>
</ul>
<p><img src="@source/.vuepress/public/images/moduleyinyong.png" alt="图片"></p>
<h4 id="改下代码思考一下" tabindex="-1"><a class="header-anchor" href="#改下代码思考一下" aria-hidden="true">#</a> 改下代码思考一下</h4>
<p><img src="@source/.vuepress/public/images/yygx.png" alt="图片">
这里从几个方面来研究修改代码发生了什么？</p>
<ul>
<li>1.在三者项目引用的情况下，修改 exports 中的 name 属性到底发生了什么？</li>
<li>2.在三者引用的情况下，修改了 main 中的 bar 的 name 属性，在bar 模块中会发生什么？</li>
<li>3.如果 module.exports 不再引用 exports 对象了，那么修改 export 还有意义吗？</li>
</ul>
<h2 id="require-细节" tabindex="-1"><a class="header-anchor" href="#require-细节" aria-hidden="true">#</a> require 细节</h2>
<p><strong>require 是一个函数</strong>，可以帮助我们引入一个文件（模块）中导出的对象</p>
<p><strong>总结比较常见的查找规则</strong>：导入格式如下：require(X)</p>
<p><strong>情况一</strong>：X是一个Node核心模块，比如path、http</p>
<ul>
<li>直接返回核心模块，并且停止查找</li>
</ul>
<p><strong>情况二</strong>：X 是以 ./ 或 ../ 或 /（根目录）开头的</p>
<ul>
<li>第一步：将 X 当做一个文件在对应的目录下查找；
<ul>
<li>1.如果有后缀名，按照后缀名的格式查找对应的文件</li>
</ul>
</li>
<li>2.如果没有后缀名，会按照如下顺序：
<ul>
<li>1&gt; 直接查找文件 X</li>
<li>2&gt; 查找 X.js 文件</li>
<li>3&gt; 查找 X.json 文件</li>
<li>4&gt; 查找 X.node 文件</li>
</ul>
</li>
</ul>
<p>第二步：没有找到对应的文件，将 X 作为一个目录</p>
<ul>
<li>查找目录下面的 index 文件</li>
<li>1&gt; 查找 X/index.js 文件</li>
<li>2&gt; 查找 X/index.json 文件</li>
<li>3&gt; 查找 X/index.node 文件</li>
</ul>
<p>如果没有找到，那么报错：not found</p>
<p><strong>情况三</strong>：直接是一个X（没有路径），并且X不是一个核心模块
<img src="@source/.vuepress/public/images/qk3.png" alt="图片"></p>
<p>如果上面的路径中都没有找到，那么报错：not found</p>
<h2 id="模块加载过程" tabindex="-1"><a class="header-anchor" href="#模块加载过程" aria-hidden="true">#</a> 模块加载过程</h2>
<ul>
<li>
<p><strong>结论一 ：模块在被第一次引入时，模块中的 js 代码会被运行一次</strong></p>
</li>
<li>
<p><strong>结论二：模块被多次引入时，会缓存，最终只加载（运行）一次</strong></p>
<ul>
<li>为什么只会加载运行一次呢？</li>
<li>这是因为每个模块对象 module 都有一个属性：loaded。</li>
<li>为 false 表示还没有加载，为 true 表示已经加载；</li>
</ul>
</li>
<li>
<p>结论三：如果有循环引入，那么加载顺序是什么？</p>
</li>
</ul>
<p>如果出现图模块的引用关系，那么加载顺序是什么呢？</p>
<p><img src="@source/.vuepress/public/images/tu01.png" alt="图片"></p>
<ul>
<li>这个其实是一种数据结构：图结构；</li>
<li>图结构在遍历的过程中，有深度优先搜索（DFS, depth first search）和广度优先搜索（BFS, breadth first search）；</li>
<li>Node采用的是深度优先算法：main -&gt; aaa -&gt; ccc -&gt; ddd -&gt; eee -&gt;bbb</li>
</ul>
<h2 id="commonjs-规范缺点" tabindex="-1"><a class="header-anchor" href="#commonjs-规范缺点" aria-hidden="true">#</a> CommonJS 规范缺点</h2>
<p><em>CommonJS 加载模块是同步的：</em></p>
<ul>
<li>同步的意味着只有<strong>等到对应的模块加载完毕</strong>，<strong>当前模块中的内容才能被运行</strong>；</li>
<li>这个在服务器不会有什么问题，因为<strong>服务器加载的js文件都是本地文件</strong>，加载速度非常快；</li>
</ul>
<p><em>如果将它应用于浏览器呢？</em></p>
<ul>
<li>浏览器<strong>加载js文件需要先从服务器将文件下载下来</strong>，之后<strong>再加载运行</strong>；</li>
<li>那么采用<strong>同步的就意味着后续的js代码都无法正常运行</strong>，即使是<strong>一些简单的 DOM  操作</strong>；</li>
</ul>
<p><em>所以在浏览器中，我们通常不使用CommonJS规范：</em></p>
<ul>
<li>当然在 webpack 中使用 CommonJS 是另外一回事；</li>
<li>因为它会将我们的代码转成浏览器可以直接执行的代码；</li>
</ul>
<p><em>在早期为了可以在浏览器中使用模块化，通常会采用AMD或CMD：</em></p>
<ul>
<li>但是目前一方面现代的浏览器<strong>已经支持ES Modules</strong>，另一方面借助于 webpack 等工具可以<strong>实现对CommonJS或者ES Module代码的转换</strong>；</li>
<li><strong>AMD 和 CMD 已经使用非常少了</strong>，所以这里我们进行简单的演练</li>
</ul>
<h2 id="amd-规范" tabindex="-1"><a class="header-anchor" href="#amd-规范" aria-hidden="true">#</a> AMD 规范</h2>
<p>AMD主要是应用于浏览器的一种模块化规范：</p>
<ul>
<li>AMD 是 Asynchronous Module Definition（异步模块定义）的缩写；</li>
<li>它采用的是<strong>异步加载模块</strong>；</li>
<li>事实上 AMD 的规范还要早于 CommonJS，但是 CommonJS 目前依然在被使用，而 AMD 使用的较少了；</li>
</ul>
<p>规范只是定义代码的应该如何去编写，只有有了具体的实现才能被应用：</p>
<ul>
<li>AMD 实现的比较常用的库是 require.js 和 curl.js；</li>
</ul>
<h2 id="cmd-规范" tabindex="-1"><a class="header-anchor" href="#cmd-规范" aria-hidden="true">#</a> CMD 规范</h2>
<p>CMD规范也是应用于浏览器的一种模块化规范：</p>
<ul>
<li>CMD 是Common Module Definition（通用模块定义）的缩写；</li>
<li>它也采用了异步加载模块，但是它将CommonJS的优点吸收了过来；</li>
<li>但是目前CMD使用也非常少了；</li>
</ul>
<p>CMD也有自己比较优秀的实现方案：</p>
<ul>
<li>SeaJS</li>
</ul>
<h2 id="es-module" tabindex="-1"><a class="header-anchor" href="#es-module" aria-hidden="true">#</a> ES Module</h2>
<p>ES Module 和 CommonJS 的模块化有一些不同之处：</p>
<ul>
<li>一方面它使用了 import 和 export 关键字；</li>
<li>另一方面它采用编译期的静态分析，并且也加入了动态引用的方式；</li>
</ul>
<p>ES Module 模块采用 export 和 import 关键字来实现模块化：</p>
<ul>
<li>export 负责将模块内的内容导出；</li>
<li>import 负责从其他模块导入内容；</li>
</ul>
<p>了解：采用 ES Module 将自动采用严格模式：<strong>use strict</strong></p>
<h3 id="export-关键字" tabindex="-1"><a class="header-anchor" href="#export-关键字" aria-hidden="true">#</a> export 关键字</h3>
<p>export 关键字将一个模块中的变量、函数、类等导出</p>
<ul>
<li>方式一：在语句声明的前面直接加上 export 关键字</li>
<li>方式二：将所有需要导出的标识符，放到 export 后面的 {}中
<ul>
<li>注意：这里的 {} 里面不是ES6的对象字面量的增强写法，{}也不是表示一个对象的；</li>
<li>所以： export {name: name}，是错误的写法；</li>
</ul>
</li>
<li>方式三：导出时给标识符起一个别名</li>
</ul>
<p><img src="@source/.vuepress/public/images/export11.png" alt="图片"></p>
<h3 id="import-关键字" tabindex="-1"><a class="header-anchor" href="#import-关键字" aria-hidden="true">#</a> import 关键字</h3>
<p>导入内容的方式也有多种：</p>
<ul>
<li>方式一：import { 标识符列表 } from '模块'；
<ul>
<li>注意：这里的 {} 也不是一个对象，里面只是存放导入的标识符列表内容；</li>
</ul>
</li>
<li>方式二：导入时给标识符起别名</li>
<li>方式三：通过 * 将模块功能放到一个模块功能对象（a module object）上</li>
</ul>
<p><img src="@source/.vuepress/public/images/import01.png" alt="图片"></p>
<h3 id="export-和-import-结合使用" tabindex="-1"><a class="header-anchor" href="#export-和-import-结合使用" aria-hidden="true">#</a> export 和 import 结合使用</h3>
<p>补充：export 和 import 可以结合使用</p>
<p>为什么要这样做呢？</p>
<ul>
<li>在开发和封装一个功能库时，通常我们希望将暴露的所有接口放到一个文件中；</li>
<li>这样方便指定统一的接口规范，也方便阅读；</li>
<li>这个时候，我们就可以使用 export 和 import 结合使用</li>
</ul>
<p><img src="@source/.vuepress/public/images/exportimport.png" alt="图片"></p>
<h3 id="default-用法" tabindex="-1"><a class="header-anchor" href="#default-用法" aria-hidden="true">#</a> default 用法</h3>
<p>前面的导出功能都是有名字的导出（named exports）：</p>
<ul>
<li>在导出 export 时指定了名字；</li>
<li>在导入 import 时需要知道具体的名字；</li>
</ul>
<p>还有一种导出叫做默认导出（default export）</p>
<ul>
<li>默认导出 export 时可以不需要指定名字；</li>
<li>在导入时不需要使用 {}，并且可以自己来指定名字；</li>
<li>它也方便我们和现有的 CommonJS 等规范相互操作；</li>
</ul>
<p>注意：在一个模块中，<strong>只能有一个</strong>默认导出（default export）；
<img src="@source/.vuepress/public/images/exportdefault.png" alt="图片"></p>
<h3 id="import-函数" tabindex="-1"><a class="header-anchor" href="#import-函数" aria-hidden="true">#</a> import 函数</h3>
<p>通过 import 加载一个模块，是不可以在其放到逻辑代码中的，比如：</p>
<p>为什么会出现这个情况呢？</p>
<ul>
<li>这是因为ES Module在被JS引擎解析时，就必须知道它的依赖关系；</li>
<li>由于这个时候js代码没有任何的运行，所以无法在进行类似于if判断中根据代码的执行情况；</li>
<li>甚至下面的这种写法也是错误的：因为我们必须到运行时能确定path的值；</li>
</ul>
<p>但是某些情况下，我们确确实实希望动态的来加载某一个模块：</p>
<ul>
<li>如果根据不同的条件，动态来选择加载模块的路径；</li>
<li>这个时候我们需要使用 import() 函数来动态加载；</li>
</ul>
<p><img src="@source/.vuepress/public/images/importhashu.png" alt="图片"></p>
<h3 id="import-meta" tabindex="-1"><a class="header-anchor" href="#import-meta" aria-hidden="true">#</a> import.meta</h3>
<p>import.meta ( 上面的图中 )是一个给 JavaScript 模块暴露特定上下文的元数据属性的对象。</p>
<ul>
<li>它包含了这个模块的信息，比如说这个模块的URL；</li>
<li>在ES11（ES2020）中新增的特性；</li>
</ul>
<h3 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> </h3>
</template>
