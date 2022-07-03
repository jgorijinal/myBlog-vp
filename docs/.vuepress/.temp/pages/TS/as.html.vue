<template><h1 id="断言" tabindex="-1"><a class="header-anchor" href="#断言" aria-hidden="true">#</a> 断言</h1>
<!-- ## enum枚举
* 不设置值时，值以0开始递增
```ts
enum SexType {
  BOY,   //0
  GIRL   //1
}
const user = {
  name:'frank',
  sex:SexType.GIRL
}
console.log(user) //{ name: 'frank', sex: 1 }
```
当某个字段设置数值类型的值后，后面的在它基础上递增
```ts
enum SexType {
  BOY=5,  
  GIRL
}

const user = {
  name:'frank',
  sex:SexType.GIRL
}
console.log(user) //{ name: 'frank', sex: 6 }
```
可以将值设置为其他类型
```ts
enum SexType {
  BOY='男',
  GIRL='女'
}

const user = {
  name:'frank',
  sex:SexType.GIRL
}
console.log(user) //{ name: 'frank', sex: '女' }
``` -->
<!--
## null / undefined
默认情况下 null 与 undefined 可以赋值给其他类型
```ts
let a  = 'hello'
a = null
a = undefined  
```
当我们需要严格模式 , 修改 tsconfig.json 配置文件的 strictNullChecks 字段为 true 时，则不能将 null、undefined 赋值给其他类型
```
"strictNullChecks": true     
```
除非向下面一样明确指定类型
```ts
let a: string | null | undefined = 'hello'
a = null
a = undefined
``` -->
<h2 id="as断言" tabindex="-1"><a class="header-anchor" href="#as断言" aria-hidden="true">#</a> as断言</h2>
<p>TypeScript只知道该函数会返回 Element ，但并不知道它具体的类型
<img src="@source/.vuepress/public/images/as1.png" alt="图片">
<img src="@source/.vuepress/public/images/ad.png" alt="图片"></p>
<h2 id="非空断言" tabindex="-1"><a class="header-anchor" href="#非空断言" aria-hidden="true">#</a> 非空断言!</h2>
<p>先要开启 tsconfig.json 的配置项strictNullChecks 字段为 true。</p>
<p>通过 querySelector获取元素, 可能存在,也有可能为null</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">let</span> el  <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'xxx'</span><span class="token punctuation">)</span>   <span class="token comment">//let el: Element | null</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>el<span class="token punctuation">.</span>id<span class="token punctuation">)</span>  <span class="token comment">//报错 Object is possibly 'null'.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>可以使用 as 断言类型</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">let</span> el  <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'xxx'</span><span class="token punctuation">)</span>  <span class="token keyword">as</span> HTMLDivElement
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>el<span class="token punctuation">.</span>id<span class="token punctuation">)</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>或者 在值后面使用 <code>!</code>来声明值非null</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">const</span> el<span class="token operator">:</span> HTMLDivElement <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.hd'</span><span class="token punctuation">)</span><span class="token operator">!</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>el<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><img src="@source/.vuepress/public/images/ad.png" alt="图片">
这是因为传入的message有可能是为undefined的，这个时候是不能执行方法的；
<img src="@source/.vuepress/public/images/mss.png" alt="图片">
非空断言使用的是 <code>!</code> ，表示可以确定某个标识符是有值的，<strong>跳过ts在编译阶段对它的检测</strong></p>
<h2 id="可选链的使用" tabindex="-1"><a class="header-anchor" href="#可选链的使用" aria-hidden="true">#</a> 可选链的使用</h2>
<p>可选链事实上并不是TypeScript独有的特性，它是ES11（ES2020）中增加的特性：</p>
<ul>
<li>可选链使用可选链操作符 ?.；</li>
<li>它的作用是当对象的属性不存在时，会短路，直接返回 undefined，如果存在，那么才会继续执行；</li>
<li>虽然可选链操作是ECMAScript提出的特性，但是和 TypeScript 一起使用更版本
<img src="@source/.vuepress/public/images/tp.png" alt="图片">   <img src="@source/.vuepress/public/images/ip.png" alt="图片">
<img src="@source/.vuepress/public/images/co.png" alt="图片"></li>
</ul>
<h2 id="和-的作用" tabindex="-1"><a class="header-anchor" href="#和-的作用" aria-hidden="true">#</a> ?? 和 !! 的作用</h2>
<p>!!操作符：</p>
<ul>
<li>将一个其他类型转换成boolean类型；</li>
<li>类似于Boolean(变量)的方式；</li>
</ul>
<p>??操作符：</p>
<ul>
<li>它是ES11增加的新特性；</li>
<li>空值合并操作符（??）是一个逻辑操作符，当<strong>操作符的左侧是 null 或者 undefined 时</strong>，返回其右侧操作数，否则返回左侧操作数</li>
</ul>
<p><img src="@source/.vuepress/public/images/!!.png" alt="图片"></p>
<p><img src="@source/.vuepress/public/images/nnnn.png" alt="图片"></p>
<h2 id="字面量类型" tabindex="-1"><a class="header-anchor" href="#字面量类型" aria-hidden="true">#</a> 字面量类型</h2>
<p>可以将多个类型联合在一起
<img src="@source/.vuepress/public/images/string1.png" alt="图片"></p>
<h2 id="const-断言" tabindex="-1"><a class="header-anchor" href="#const-断言" aria-hidden="true">#</a> const 断言</h2>
<h3 id="let-const" tabindex="-1"><a class="header-anchor" href="#let-const" aria-hidden="true">#</a> let &amp; const</h3>
<ul>
<li>const 保证该字面量的严格类型</li>
<li>let 为通用类型比如字符串类型
const hd = 'houdunren' //const h</li>
</ul>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token string">'hello'</span> <span class="token comment">//const str: "hello"</span>
<span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token string">'hello'</span>  <span class="token comment">//let x: string</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="as-const" tabindex="-1"><a class="header-anchor" href="#as-const" aria-hidden="true">#</a> as const</h3>
<p>const断言会根据具体的值推断出它能推断出的最窄或最特定的类型 , 而不是宽泛的类型</p>
<ul>
<li>字符串、布尔类型转换为具体值</li>
<li>对象转换为只读属性</li>
<li>数组转换成为只读元组</li>
</ul>
<p>值</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">'hello'</span> <span class="token keyword">as</span> <span class="token keyword">const</span>  <span class="token comment">//let str: "hello"</span>
str <span class="token operator">=</span> <span class="token string">'hi'</span> <span class="token comment">//报错</span>

<span class="token comment">//类似于</span>
<span class="token keyword">let</span> str<span class="token operator">:</span><span class="token string">'hello = '</span>hello
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>对象转换为只读属性</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">let</span>  user <span class="token operator">=</span> <span class="token punctuation">{</span>name<span class="token operator">:</span><span class="token string">'frank'</span> <span class="token punctuation">,</span> age<span class="token operator">:</span><span class="token number">18</span><span class="token punctuation">}</span> <span class="token keyword">as</span> <span class="token keyword">const</span>
<span class="token comment">//let user: { readonly name: "frank", readonly age: 18 } </span>
<span class="token comment">//只读属性 , 不允许设置值</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>当为变量时转换为其变量的类型，具体值是转为值类型</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token string">'hello'</span>
<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token number">2030</span>

<span class="token keyword">let</span> f <span class="token operator">=</span> <span class="token punctuation">[</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> <span class="token string">'hello'</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">]</span> <span class="token keyword">as</span> <span class="token keyword">const</span> <span class="token comment">//readonly [string, number, "hello", true, 100]</span>
<span class="token keyword">let</span> hd <span class="token operator">=</span> f<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
hd <span class="token operator">=</span> <span class="token string">'123'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="数组使用as-const" tabindex="-1"><a class="header-anchor" href="#数组使用as-const" aria-hidden="true">#</a> 数组使用as const</h3>
<p>变量 x 得到的类型是数组的类型 string | number，所以只要值是这两个类型都可以</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">let</span>  a<span class="token operator">:</span><span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">'hello'</span>
<span class="token keyword">let</span> b<span class="token operator">:</span><span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span>a<span class="token punctuation">,</span> b<span class="token punctuation">]</span>  <span class="token comment">// let arr: (string | number)[]</span>
<span class="token keyword">let</span> x <span class="token operator">=</span> arr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>    <span class="token comment">//let x: string | number</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>使用 const 后会得到值的具体类型，会让数组转换成为只读元组</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">let</span>  a<span class="token operator">:</span><span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">'hello'</span>
<span class="token keyword">let</span> b<span class="token operator">:</span><span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span>a<span class="token punctuation">,</span> b<span class="token punctuation">]</span> <span class="token keyword">as</span> <span class="token keyword">const</span>  <span class="token comment">// let arr: readonly [string, number]</span>
<span class="token comment">//也可以这么写</span>
<span class="token comment">// let arr = &lt;const>[a, b]</span>
<span class="token keyword">let</span> x <span class="token operator">=</span> arr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>      <span class="token comment">//let x: number</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="解构中使用as-const" tabindex="-1"><a class="header-anchor" href="#解构中使用as-const" aria-hidden="true">#</a> 解构中使用as const</h3>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> a  <span class="token operator">=</span> <span class="token string">'hello'</span>
  <span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token punctuation">(</span>x<span class="token operator">:</span><span class="token builtin">number</span> <span class="token punctuation">,</span> y<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token builtin">number</span> <span class="token operator">=></span> x <span class="token operator">+</span> y
  <span class="token keyword">return</span> <span class="token punctuation">[</span>a <span class="token punctuation">,</span> b<span class="token punctuation">]</span> <span class="token keyword">as</span> <span class="token keyword">const</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token punctuation">[</span>n <span class="token punctuation">,</span> m<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">(</span>m <span class="token keyword">as</span> <span class="token builtin">Function</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">//或者</span>
<span class="token comment">//console.log((m as (x: number, y: number) => number)(1, 5))</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>可以在函数体内声明返回类型</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> a  <span class="token operator">=</span> <span class="token string">'hello'</span>
  <span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token punctuation">(</span>x<span class="token operator">:</span><span class="token builtin">number</span> <span class="token punctuation">,</span> y<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token builtin">number</span> <span class="token operator">=></span> x <span class="token operator">+</span> y
  <span class="token keyword">return</span> <span class="token punctuation">[</span>a <span class="token punctuation">,</span> b<span class="token punctuation">]</span> <span class="token keyword">as</span>  <span class="token punctuation">[</span><span class="token keyword">typeof</span> a <span class="token punctuation">,</span> <span class="token keyword">typeof</span> b<span class="token punctuation">]</span> 
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token punctuation">[</span>n <span class="token punctuation">,</span> m<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//const m: (x: number, y: number) => number</span>
<span class="token function">m</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span> 
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>使用 as const 就可以很高效的解决上面的问题，可以得到具体的类型，来得到更安全的代码，同时会有更好的代码提示</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> a  <span class="token operator">=</span> <span class="token string">'hello'</span>
  <span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token punctuation">(</span>x<span class="token operator">:</span><span class="token builtin">number</span> <span class="token punctuation">,</span> y<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token builtin">number</span> <span class="token operator">=></span> x <span class="token operator">+</span> y
  <span class="token keyword">return</span> <span class="token punctuation">[</span>a <span class="token punctuation">,</span> b<span class="token punctuation">]</span> <span class="token keyword">as</span> <span class="token keyword">const</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token punctuation">[</span>n <span class="token punctuation">,</span> m<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//const m: (x: number, y: number) => number</span>
<span class="token function">m</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span>
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>可以断言 m 为函数然后调用</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> a  <span class="token operator">=</span> <span class="token string">'hello'</span>
  <span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token punctuation">(</span>x<span class="token operator">:</span><span class="token builtin">number</span> <span class="token punctuation">,</span> y<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token builtin">number</span> <span class="token operator">=></span> x <span class="token operator">+</span> y
  
</code></pre><div class="highlight-lines"><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><!-- ## DOM
### 类型推断
对于获取的标签对象可能是为 null 也可能是该标签类型
* body 等具体的标签可以推断出准确的标签和 null
* 但根据 class 获取标签不能准确获取标签类型，推断的类型为 Element|null

例如:
```ts
const bodyEl = document.querySelector('body') //const body: HTMLBodyElement | null
const el = document.querySelector('xxx')   //const el: Element | null
```
下例中的 `DOM` 类型会报错，因为 .xxx 是 `Element` 类型，而构建函数参数 `el` 的类型是 `HTMLDivElement`,
所以要明确断言类型成 `HTMLDivElement`
```ts
class Hd {
  el: HTMLDivElement;
  constructor(el:HTMLDivElement) {
    this.el = el
  }
  html(){
    return this.el.innerHTML
  }
}
const el = document.querySelector('xxx') as HTMLDivElement  // const el: Element | null , 所以要断言
new Hd(el)
```
### 对null的处理 (非空断言)
针对于其他标签元素，返回值可能为 null，所以使用 `as` 断言或`！`处理
```ts
// 用 as
const body = document.querySelector('body') as HTMLBodyElement
const el = document.querySelector('xxx') as HTMLDivElement
// 用 !
const body = document.querySelector('body')!
const el = document.querySelector('xxx')!     
```
### DOM事件处理
```ts
const button = document.querySelector('button') as HTMLButtonElement
button.addEventListener('click', (e: Event)=>{
  console.log('hi')
})
``` -->
</template>
