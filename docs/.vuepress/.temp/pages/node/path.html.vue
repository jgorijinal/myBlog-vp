<template><h1 id="path-路径模块" tabindex="-1"><a class="header-anchor" href="#path-路径模块" aria-hidden="true">#</a> path 路径模块</h1>
<p>用来<strong>处理路径</strong>的模块</p>
<p>例如:</p>
<ul>
<li>path.join() 方法 , 用来<strong>将多个片段拼接成一个完整的路径字符串</strong></li>
<li>path.basename() 方法, 用来从路径字符串 , 将文件名解析出来</li>
</ul>
<p>需要导入</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"path"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> basePath <span class="token operator">=</span> <span class="token string">"./User/why"</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> filename <span class="token operator">=</span> <span class="token string">"abc.txt"</span><span class="token punctuation">;</span>


<span class="token comment">// join 路径拼接</span>
<span class="token comment">// 直接拼接</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>basePath<span class="token punctuation">,</span> filename<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//  \User\why\abc.txt</span>
<span class="token comment">// resolve 路径拼接</span>
<span class="token comment">// resolve 会拼接的是 /或 ./ 或 ../ 开头的路径, 查找拼接(比较智能)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>basePath<span class="token punctuation">,</span> filename<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//  C:\Users\86188\Desktop\node-demo\User\why\abc.txt</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>获取路径信息</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"path"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> filePath <span class="token operator">=</span> <span class="token string">'/User/why/abc.txt'</span>

<span class="token comment">// 目录名</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">dirname</span><span class="token punctuation">(</span>filePath<span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment">// /User/why</span>
<span class="token comment">// 文件名</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">basename</span><span class="token punctuation">(</span>filePath<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// abc.txt</span>
<span class="token comment">// 文件名后缀</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">extname</span><span class="token punctuation">(</span>filePath<span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment">// .txt</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="webpack-中的使用" tabindex="-1"><a class="header-anchor" href="#webpack-中的使用" aria-hidden="true">#</a> webpack 中的使用</h2>
<p><img src="@source/.vuepress/public/images/pathqita.png" alt="图片"></p>
<!-- ## 路径拼接
### path.join() 语法格式
```
path.join([...paths])
```

* `...paths<string>`路径片段的序列
* 返回值 `<string>`

```js
const pathStr = path.join('/a','/b/c','../','./d','e')
// 注意 :  ../ 会抵消紧挨在前面的路径
console.log(pathStr)  // 输出 \a\b\d\e

const pathStr2 = path.join(__dirname , './file/1.txt')
console.log(pathStr2) // 输出 当前文件所处的目录\files\1.txt
```

## 获取路径中的文件名
### path.basename() 语法格式
```
path.basename(path[,ext])
```
* `path <string>` 必选参数, 表示路径的字符串
* `ext <string>` 可选参数 , 表示文件扩展名
* 返回 : 表示路径中的最后一部分

```js
const fpath = '/a/b/c/index.html' // 问价内存放路径

const fullName = path.basename(fpath)
console.log(fullName) // 输出 index.html


const nameWithoutExtension = path.basename(fpath , '.html')
console.log(nameWithoutExtension) // 输出 index
```
## 获取路径中文件扩展名
### path.extname() 语法格式

```
path.extname(path)
```
参数
* `path<string>`: 必选参数, 表示路径字符串
* 返回 : 返回的发ode扩展名字符串 

```js
const fpath = '/a/b/c/index.html' // 问价内存放路径

const fext = path.extname(fpath)
console.log(fext)  // 输出 .html
```
 -->
</template>
