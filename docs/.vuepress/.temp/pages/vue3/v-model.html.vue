<template><h1 id="v-model" tabindex="-1"><a class="header-anchor" href="#v-model" aria-hidden="true">#</a> v-model</h1>
<h2 id="v-model-的基本使用" tabindex="-1"><a class="header-anchor" href="#v-model-的基本使用" aria-hidden="true">#</a> v-model 的基本使用</h2>
<ul>
<li><strong>v-model 指令</strong>可以在表单 input、textarea以及 select元素上创建<strong>双向数据绑定</strong></li>
<li><strong>v-model 本质上不过是语法糖</strong>，它负责<strong>监听用户的输入事件来更新数据</strong>，并在某种极端场景
下进行一些特殊处理</li>
</ul>
<p><img src="@source/.vuepress/public/images/vmodel1.png" alt="图片"></p>
<h2 id="v-model的原理" tabindex="-1"><a class="header-anchor" href="#v-model的原理" aria-hidden="true">#</a> v-model的原理</h2>
<p>v-model 的原理其实是背后有两个操作：</p>
<ul>
<li>v-bind绑定value属性的值；</li>
<li>v-on绑定input事件监听到函数中，函数会获取最新的值赋值到绑定的属性中</li>
</ul>
<p><img src="@source/.vuepress/public/images/vmodel2.png" alt="图片"></p>
<h2 id="v-model-绑定其他表单" tabindex="-1"><a class="header-anchor" href="#v-model-绑定其他表单" aria-hidden="true">#</a> v-model 绑定其他表单</h2>
<h3 id="绑定-textarea" tabindex="-1"><a class="header-anchor" href="#绑定-textarea" aria-hidden="true">#</a> 绑定 textarea</h3>
<p><img src="@source/.vuepress/public/images/vmodel3.png" alt="图片"></p>
<h3 id="绑定checkbox" tabindex="-1"><a class="header-anchor" href="#绑定checkbox" aria-hidden="true">#</a> 绑定checkbox</h3>
<p>单个勾选框：</p>
<ul>
<li>v-model即为布尔值</li>
<li>此时input的value并不影响v-model的值</li>
</ul>
<p>多个复选框：</p>
<ul>
<li>当是多个复选框时，因为可以选中多个，所以对应的data中属性是一个数组</li>
<li>当选中某一个时，就会将input的value添加到数组中</li>
</ul>
<p><img src="@source/.vuepress/public/images/vmodel4.png" alt="图片">
<img src="@source/.vuepress/public/images/vmodel5.png" alt="图片"></p>
<h3 id="绑定-radio" tabindex="-1"><a class="header-anchor" href="#绑定-radio" aria-hidden="true">#</a> 绑定 radio</h3>
<p><img src="@source/.vuepress/public/images/vmodel6.png" alt="图片"></p>
<h3 id="绑定-select" tabindex="-1"><a class="header-anchor" href="#绑定-select" aria-hidden="true">#</a> 绑定 select</h3>
<p><img src="@source/.vuepress/public/images/vmodel7.png" alt="图片"></p>
<h2 id="v-model-值绑定" tabindex="-1"><a class="header-anchor" href="#v-model-值绑定" aria-hidden="true">#</a> v-model 值绑定</h2>
<p>目前在前面的案例中大部分的值都是在template中固定好的：</p>
<ul>
<li>比如gender的两个输入框值male、female；</li>
<li>比如hobbies的三个输入框值basketball、football、tennis；</li>
</ul>
<p>但在真实开发中，数据可能是来自服务器的，那么就可以先将值请求下来，<strong>绑定到data返回的对象</strong>中，
再 v-for 通过<strong>v-bind 来进行值的绑定</strong>，这个过程就是值绑定</p>
<h2 id="v-model-修饰符" tabindex="-1"><a class="header-anchor" href="#v-model-修饰符" aria-hidden="true">#</a> v-model 修饰符</h2>
<h3 id="v-model-lazy" tabindex="-1"><a class="header-anchor" href="#v-model-lazy" aria-hidden="true">#</a> v-model.lazy</h3>
<p>lazy修饰符是什么作用:</p>
<ul>
<li>默认情况下，v-model在进行双向绑定时，绑定的是 <strong>input事件</strong>，那么会在每次内容输入后就将最新的值和绑定
的属性进行同步；</li>
<li>如果我们在v-model后跟上 lazy 修饰符，那么会将绑定的事件切换为 <strong>change 事件</strong>，只有在提交时（比如回车）
才会触发</li>
</ul>
<h3 id="v-model-number" tabindex="-1"><a class="header-anchor" href="#v-model-number" aria-hidden="true">#</a> v-model.number</h3>
<p>v-model绑定后的值它是默认始终是 <strong>字符串(string) 类型</strong></p>
<p>即使在我们设置 type 为number也是string类型</p>
<p>如果希望转换为数字类型，那么可以使用 .number 修饰符：</p>
<p><img src="@source/.vuepress/public/images/vmodel8.png" alt="图片"></p>
<h3 id="v-model-trim" tabindex="-1"><a class="header-anchor" href="#v-model-trim" aria-hidden="true">#</a> v-model.trim</h3>
<p>如果要自动过滤用户输入的首尾空白字符，可以给 v-model 添加 trim 修饰符：
<img src="@source/.vuepress/public/images/vmodel9.png" alt="图片"></p>
<h2 id="组件的-v-model" tabindex="-1"><a class="header-anchor" href="#组件的-v-model" aria-hidden="true">#</a> 组件的 v-model</h2>
<p>前面我们在<strong>input</strong>中可以使用<strong>v-model</strong>来完成双向绑定：</p>
<ul>
<li>这个时候往往会非常方便，因为v-model默认帮助我们完成了两件事；</li>
<li><strong>v-bind:value的数据绑定</strong> 和 <strong>@input的事件监听</strong>；</li>
</ul>
<p>如果现在封装了一个组件，其他地方在使用这个组件时，是否也可以使用 v-model 来同时完成这两个功能呢</p>
<ul>
<li>也是可以的，vue也支持在<strong>组件上使用v-model</strong>；</li>
</ul>
<p>当在组件上使用的时候，等价于如下的操作：</p>
<ul>
<li>实际和<strong>input元素不同的只是属性的名称和事件触发的名称</strong>而已</li>
</ul>
<p><img src="@source/.vuepress/public/images/vm.png" alt="图片"></p>
<h2 id="组件v-model的实现" tabindex="-1"><a class="header-anchor" href="#组件v-model的实现" aria-hidden="true">#</a> 组件v-model的实现</h2>
<p>为了让我的 MyInput组件 可以正常的工作，这个组件内的 <code>&lt;input&gt;</code> 必须：</p>
<ul>
<li>将其 value attribute 绑定到一个名叫 <strong>modelValue 的 prop</strong> 上；</li>
<li>在其 input 事件被触发时，将新的值通过<strong>自定义的 update:modelValue 事件抛出</strong>；</li>
</ul>
<p><img src="@source/.vuepress/public/images/vmodelzujian.png" alt="图片"></p>
<p><img src="@source/.vuepress/public/images/vmvm.png" alt="图片"></p>
<h2 id="computed-实现" tabindex="-1"><a class="header-anchor" href="#computed-实现" aria-hidden="true">#</a> computed 实现</h2>
<p>依然希望在组件内部按照 v-model 双向绑定的做法去完成，应该如何操作呢？</p>
<p><strong>可以使用计算属性的setter和getter来完成</strong></p>
<p><img src="@source/.vuepress/public/images/vmo.png" alt="图片"></p>
<h2 id="绑定多个属性-v-model-xxx" tabindex="-1"><a class="header-anchor" href="#绑定多个属性-v-model-xxx" aria-hidden="true">#</a> 绑定多个属性 v-model:xxx</h2>
<ul>
<li>默认情况下的v-model其实是绑定了 <strong>modelValue 属性</strong>和 <strong>@update:modelValue的事件</strong></li>
<li>如果我们希望绑定更多，可以给v-model传入一个参数，那么这个参数的名称就是我们绑定属性的名称</li>
</ul>
<p><img src="@source/.vuepress/public/images/vm01.png" alt="图片">
v-model:title相当于做了两件事：</p>
<ul>
<li>绑定了 <strong>title属性</strong></li>
<li>监听了 <strong>@update:title的事件</strong></li>
</ul>
<p><img src="@source/.vuepress/public/images/vmtitle.png" alt="图片"></p>
</template>
