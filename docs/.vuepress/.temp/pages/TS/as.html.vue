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
<h2 id="as断言" tabindex="-1"><a class="header-anchor" href="#as断言" aria-hidden="true">#</a> as断言</h2>
<p>跳过吧..</p>
<!-- ## const断言
### let & const
* const 保证该字面量的严格类型
* let 为通用类型比如字符串类型
const hd = 'houdunren' //const h
```ts
const str = 'hello' //const str: "hello"
let x = 'hello'  //let x: string
```
### as const
const断言会根据具体的值推断出它能推断出的最窄或最特定的类型 , 而不是宽泛的类型
* 字符串、布尔类型转换为具体值
* 对象转换为只读属性
* 数组转换成为只读元组

值
```ts
let str = 'hello' as const  //let str: "hello"
str = 'hi' //报错

//类似于
let str:'hello = 'hello
```
对象转换为只读属性
```ts
let  user = {name:'frank' , age:18} as const
//let user: { readonly name: "frank", readonly age: 18 } 
//只读属性 , 不允许设置值
```
当为变量时转换为其变量的类型，具体值是转为值类型
```ts
let a = 'hello'
let b = 2030

let f = [a, b, 'hello', true, 100] as const //readonly [string, number, "hello", true, 100]
let hd = f[0]
hd = '123'
```
### 数组使用as const
变量 x 得到的类型是数组的类型 string | number，所以只要值是这两个类型都可以
```ts
let  a:string = 'hello'
let b:number = 1
let arr = [a, b]  // let arr: (string | number)[]
let x = arr[1]    //let x: string | number
```
使用 const 后会得到值的具体类型，会让数组转换成为只读元组
```ts
let  a:string = 'hello'
let b:number = 1
let arr = [a, b] as const  // let arr: readonly [string, number]
//也可以这么写
// let arr = <const>[a, b]
let x = arr[1]      //let x: number
```
### 解构中使用as const
```ts
function run() {
  let a  = 'hello'
  let b = (x:number , y:number):number => x + y
  return [a , b]
}

const [n , m] = run() //解构 , m的类型为 const m: string | ((x: number, y: number) => number)

m(1, 6) //报错：因为类型可能是字符串，所以不允许调用
```
可以断言 m 为函数然后调用
```ts{8}
function run() {
  let a  = 'hello'
  let b = (x:number , y:number):number => x + y
  return [a , b] as const
}

const [n , m] = run()
console.log((m as Function)(1,2))
//或者
//console.log((m as (x: number, y: number) => number)(1, 5))
```
可以在函数体内声明返回类型
```ts{4}
function run() {
  let a  = 'hello'
  let b = (x:number , y:number):number => x + y
  return [a , b] as  [typeof a , typeof b] 
}

const [n , m] = run() //const m: (x: number, y: number) => number
m(1, 6) 
```
使用 as const 就可以很高效的解决上面的问题，可以得到具体的类型，来得到更安全的代码，同时会有更好的代码提示
```ts{4}
function run() {
  let a  = 'hello'
  let b = (x:number , y:number):number => x + y
  return [a , b] as const
}

const [n , m] = run() //const m: (x: number, y: number) => number
m(1, 6)
```
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
<h2 id="非空断言" tabindex="-1"><a class="header-anchor" href="#非空断言" aria-hidden="true">#</a> 非空断言</h2>
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="dom" tabindex="-1"><a class="header-anchor" href="#dom" aria-hidden="true">#</a> DOM</h2>
<h3 id="类型推断" tabindex="-1"><a class="header-anchor" href="#类型推断" aria-hidden="true">#</a> 类型推断</h3>
<p>对于获取的标签对象可能是为 null 也可能是该标签类型</p>
<ul>
<li>body 等具体的标签可以推断出准确的标签和 null</li>
<li>但根据 class 获取标签不能准确获取标签类型，推断的类型为 Element|null</li>
</ul>
<p>例如:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">const</span> bodyEl <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'body'</span><span class="token punctuation">)</span> <span class="token comment">//const body: HTMLBodyElement | null</span>
<span class="token keyword">const</span> el <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'xxx'</span><span class="token punctuation">)</span>   <span class="token comment">//const el: Element | null</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>下例中的 <code>DOM</code> 类型会报错，因为 .xxx 是 <code>Element</code> 类型，而构建函数参数 <code>el</code> 的类型是 <code>HTMLDivElement</code>,
所以要明确断言类型成 <code>HTMLDivElement</code></p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Hd</span> <span class="token punctuation">{</span>
  el<span class="token operator">:</span> HTMLDivElement<span class="token punctuation">;</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>el<span class="token operator">:</span>HTMLDivElement<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>el <span class="token operator">=</span> el
  <span class="token punctuation">}</span>
  <span class="token function">html</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>el<span class="token punctuation">.</span>innerHTML
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> el <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'xxx'</span><span class="token punctuation">)</span> <span class="token keyword">as</span> HTMLDivElement  <span class="token comment">// const el: Element | null , 所以要断言</span>
<span class="token keyword">new</span> <span class="token class-name">Hd</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="对null的处理-非空断言" tabindex="-1"><a class="header-anchor" href="#对null的处理-非空断言" aria-hidden="true">#</a> 对null的处理 (非空断言)</h3>
<p>针对于其他标签元素，返回值可能为 null，所以使用 <code>as</code> 断言或<code>！</code>处理</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 用 as</span>
<span class="token keyword">const</span> body <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'body'</span><span class="token punctuation">)</span> <span class="token keyword">as</span> HTMLBodyElement
<span class="token keyword">const</span> el <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'xxx'</span><span class="token punctuation">)</span> <span class="token keyword">as</span> HTMLDivElement
<span class="token comment">// 用 !</span>
<span class="token keyword">const</span> body <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'body'</span><span class="token punctuation">)</span><span class="token operator">!</span>
<span class="token keyword">const</span> el <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'xxx'</span><span class="token punctuation">)</span><span class="token operator">!</span>     
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="dom事件处理" tabindex="-1"><a class="header-anchor" href="#dom事件处理" aria-hidden="true">#</a> DOM事件处理</h3>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">const</span> button <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'button'</span><span class="token punctuation">)</span> <span class="token keyword">as</span> HTMLButtonElement
button<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>e<span class="token operator">:</span> Event<span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'hi'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></template>
