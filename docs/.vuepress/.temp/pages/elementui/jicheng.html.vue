<template><h1 id="element-ui" tabindex="-1"><a class="header-anchor" href="#element-ui" aria-hidden="true">#</a> element-ui</h1>
<p><a href="https://element.eleme.io/#/zh-CN/component/installation" target="_blank" rel="noopener noreferrer">Element-ui 官网<ExternalLinkIcon/></a></p>
<p>安装 element-ui</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm i element-ui
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="element-ui-集成" tabindex="-1"><a class="header-anchor" href="#element-ui-集成" aria-hidden="true">#</a> element-ui 集成</h2>
<p><strong>按需引入</strong></p>
<p>在 global 文件夹的 register-element 模块单独管理</p>
<p><img src="@source/.vuepress/public/images/anxuyinru.png" alt="图片"></p>
<p><strong>main.js</strong></p>
<p><img src="@source/.vuepress/public/images/jicheng1.png" alt="图片"></p>
<p>global/index.js  入口文件
<img src="@source/.vuepress/public/images/jicheng2.png" alt="图片"></p>
<p>global/register-element.js
<img src="@source/.vuepress/public/images/jicheng3.png" alt="图片"></p>
<h2 id="表单校验" tabindex="-1"><a class="header-anchor" href="#表单校验" aria-hidden="true">#</a> 表单校验</h2>
<h3 id="表单校验的先决条件" tabindex="-1"><a class="header-anchor" href="#表单校验的先决条件" aria-hidden="true">#</a> 表单校验的先决条件</h3>
<p>表单校验需要如下先决条件, <a href="https://element.eleme.io/#/zh-CN/component/form" target="_blank" rel="noopener noreferrer">https://element.eleme.io/#/zh-CN/component/form<ExternalLinkIcon/></a>
<img src="@source/.vuepress/public/images/jiaoyantiaojian.png" alt="图片"></p>
<p><strong>model 属性</strong>
<img src="@source/.vuepress/public/images/biao0.png" alt="图片"></p>
<p><strong>绑定 model</strong>
<img src="@source/.vuepress/public/images/biao1.png" alt="图片"></p>
<p><strong>rules规则</strong>
<img src="@source/.vuepress/public/images/loginrule.png" alt="图片"> 先至为空 , 后面再总结</p>
<p><strong>设置 prop 属性</strong>
<img src="@source/.vuepress/public/images/biao3.png" alt="图片"></p>
<p><strong>给 input 绑定字段属性</strong>
<img src="@source/.vuepress/public/images/biao4.png" alt="图片"></p>
<p><img src="@source/.vuepress/public/images/biaodan01.png" alt="图片"></p>
<h3 id="表单校验规则" tabindex="-1"><a class="header-anchor" href="#表单校验规则" aria-hidden="true">#</a> 表单校验规则</h3>
<p>要完成表单的校验，需要编写规则</p>
<p>ElementUI 的表单校验规则来自第三方校验规则参见 <a href="https://github.com/yiminghe/async-validator" target="_blank" rel="noopener noreferrer">async-validator<ExternalLinkIcon/></a></p>
<p>几个基本使用的规则</p>
<table>
<thead>
<tr>
<th>规则</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>required</td>
<td>如果为true，表示该字段为必填</td>
</tr>
<tr>
<td>message</td>
<td>当不满足设置的规则时的提示信息</td>
</tr>
<tr>
<td>pattern</td>
<td>正则表达式，通过正则验证值</td>
</tr>
<tr>
<td>min</td>
<td>当值为字符串时，min表示字符串的最小长度，当值为数字时，min表示数字的最小值</td>
</tr>
<tr>
<td>max</td>
<td>当值为字符串时，max表示字符串的最大长度，当值为数字时，max表示数字的最大值</td>
</tr>
<tr>
<td>trigger</td>
<td>校验的触发方式，change（值改变） / blur （失去焦点）两种，</td>
</tr>
<tr>
<td>validator</td>
<td>如果配置型的校验规则不满足你的需求，你可以通过自定义函数来完成校验</td>
</tr>
</tbody>
</table>
<p>校验规则的格式 :<em><strong>{ key(字段名): value(校验规则) -&gt; [{},{}...] }</strong></em></p>
<ul>
<li><strong>手机号</strong>  1.必填 2.手机号格式校验 3. 失去焦点校验</li>
<li><strong>密码</strong> 1.必填 2.6-16位长度 3. 失去焦点校验</li>
</ul>
<p><img src="@source/.vuepress/public/images/geshi22.png" alt="图片"></p>
<h3 id="自定义校验规则" tabindex="-1"><a class="header-anchor" href="#自定义校验规则" aria-hidden="true">#</a> 自定义校验规则</h3>
<p><strong><code>validator</code></strong> 是一个函数, 其中有三个参数 (<strong><code>rule</code></strong>(当前规则),<strong><code>value</code></strong>(当前值),<strong><code>callback</code></strong>(回调函数))</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span>  <span class="token function-variable function">func</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">rule<span class="token punctuation">,</span> value<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 根据value进行进行校验 </span>
    <span class="token comment">// 如果一切ok  </span>
    <span class="token comment">// 直接执行callback</span>
    <span class="token function">callback</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 一切ok 请继续</span>
    <span class="token comment">// 如果不ok </span>
    <span class="token function">callback</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">"错误信息"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>根据以上要求，增加手机号第三位必须是 9 的校验规则</p>
<p>如下</p>
<p><img src="@source/.vuepress/public/images/guize01.png" alt="图片"></p>
<h3 id="手动校验的实现" tabindex="-1"><a class="header-anchor" href="#手动校验的实现" aria-hidden="true">#</a> 手动校验的实现</h3>
<p>如果直接点登陆按钮，没有离开焦点，那该怎么校验 ?</p>
<p>此时需要用到手动完整校验</p>
<p>form 表单提供了一份 API 方法，我们可以对表单进行完整和部分校验</p>
<table>
<thead>
<tr>
<th style="text-align:left">方法名</th>
<th style="text-align:left">说明</th>
<th style="text-align:left">参数</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">validate</td>
<td style="text-align:left">对整个表单进行校验的方法，参数为一个回调函数。该回调函数会在校验结束后被调用，并传入两个参数：是否校验成功和未通过校验的字段。<strong>若不传入回调函数，则会返回一个 promise</strong></td>
<td style="text-align:left">Function(callback: Function(boolean, object))</td>
</tr>
<tr>
<td style="text-align:left">validateField</td>
<td style="text-align:left">对部分表单字段进行校验的方法</td>
<td style="text-align:left">Function(props: array | string, callback: Function(errorMessage: string))</td>
</tr>
<tr>
<td style="text-align:left">resetFields</td>
<td style="text-align:left">对整个表单进行重置，将所有字段值重置为初始值并移除校验结果</td>
<td style="text-align:left">—</td>
</tr>
<tr>
<td style="text-align:left">clearValidate</td>
<td style="text-align:left">移除表单项的校验结果。传入待移除的表单项的 prop 属性或者 prop 组成的数组，如不传则移除整个表单的校验结果</td>
<td style="text-align:left">Function(props: array | string)</td>
</tr>
</tbody>
</table>
<p>这些方法是 el-form 的 API，需要获取 el-form 的实例，才可以调用</p>
<p><strong>采用 ref 进行调用 , 调用校验 validate 方法</strong></p>
<p><img src="@source/.vuepress/public/images/vali00.png" alt="图片"></p>
<p>如果没传入回调, 返回的是 Promise
<img src="@source/.vuepress/public/images/vp1.png" alt="图片"></p>
</template>
