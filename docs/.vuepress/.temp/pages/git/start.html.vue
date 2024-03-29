<template><h1 id="git" tabindex="-1"><a class="header-anchor" href="#git" aria-hidden="true">#</a> Git</h1>
<h2 id="基本操作" tabindex="-1"><a class="header-anchor" href="#基本操作" aria-hidden="true">#</a> 基本操作</h2>
<h3 id="获取-git-仓库的两种方式" tabindex="-1"><a class="header-anchor" href="#获取-git-仓库的两种方式" aria-hidden="true">#</a> 获取 Git 仓库的两种方式</h3>
<ol>
<li>
<p><strong>将</strong>尚未进行版本控制的<strong>本地目录转换为 Git 目录</strong></p>
</li>
<li>
<p>从其他服务器<strong>克隆</strong>一个已存在的Git仓库</p>
</li>
</ol>
<h3 id="现有目录中初始化仓库" tabindex="-1"><a class="header-anchor" href="#现有目录中初始化仓库" aria-hidden="true">#</a> 现有目录中初始化仓库</h3>
<p>当前目录转化为 Git 仓库</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> init 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>这个命令会创建一个名为 <strong>.git</strong> 的隐藏目录, 这个 .git 目录就是当前项目的 Git 仓库</p>
<h3 id="工作区中文件的4种状态" tabindex="-1"><a class="header-anchor" href="#工作区中文件的4种状态" aria-hidden="true">#</a> 工作区中文件的4种状态</h3>
<p>工作区中每一个文件可能有 <strong>4 种状态</strong>, 这四种状态共分为<strong>两大类</strong>:
<img src="@source/.vuepress/public/images/git1.png" alt="图片"></p>
<p>Git 操作的终极结果: 让工作区中的文件都处于 &quot;未修改的&quot; 状态</p>
<h3 id="检查文件的状态" tabindex="-1"><a class="header-anchor" href="#检查文件的状态" aria-hidden="true">#</a> 检查文件的状态</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> status
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="@source/.vuepress/public/images/git.png" alt="图片"></p>
<p>Untracked files(未跟踪的文件) , Git 不会自动将值纳入跟踪范围, 除非我明确告诉他 &quot;我要使用 Git 跟踪管理该文件&quot;</p>
<h3 id="精简方式显示文件状态" tabindex="-1"><a class="header-anchor" href="#精简方式显示文件状态" aria-hidden="true">#</a> 精简方式显示文件状态</h3>
<p>两条命令完全等价 , 其中 <strong>-s 是 --short 的简写形式</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 以精简的方式显示文件状态</span>
<span class="token function">git</span> status -s

<span class="token function">git</span> status --short
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>未跟踪的有 红色的 <code>??</code> 标记</p>
<p><img src="@source/.vuepress/public/images/git2.png" alt="图片"></p>
<h3 id="跟踪新文件" tabindex="-1"><a class="header-anchor" href="#跟踪新文件" aria-hidden="true">#</a> 跟踪新文件</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> <span class="token function">add</span> 一个文件
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>再运行 <code>git status</code> 命令, 会看到 index.html 文件在 <em>Changes to be committed</em>  , 说明已经被跟踪, <strong>并处于暂存状态</strong>:
<img src="@source/.vuepress/public/images/git3.png" alt="图片"></p>
<p>以精简方式显示文件的状态, 文件前面有绿色的 <code>A</code> 标记
<img src="@source/.vuepress/public/images/git4.png" alt="图片"></p>
<h3 id="提交更新" tabindex="-1"><a class="header-anchor" href="#提交更新" aria-hidden="true">#</a> 提交更新</h3>
<p><strong>-m 选项</strong>后面是本次的提交信息, 用来对提交的内容进一步的描述</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> commit -m <span class="token string">'提交一个文件'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><code>git status</code> 检查状态
<img src="@source/.vuepress/public/images/git5.png" alt="图片">
证明工作区中所有的文件都处于 <strong>&quot;未修改&quot;</strong> 的状态, 没有任何文件需要提交</p>
<h3 id="对已提交的文件进行了修改" tabindex="-1"><a class="header-anchor" href="#对已提交的文件进行了修改" aria-hidden="true">#</a> 对已提交的文件进行了修改</h3>
<p>修改了已提交的文件的内容在之后, 再次运行 <code>git status</code> 和 <code>git status -s</code>
<img src="@source/.vuepress/public/images/git6.png" alt="图片"></p>
<p>modified, 说明已跟踪的文件的内容发生了变化 , 但还没放到暂存区</p>
<p>有 红色的 <code>M</code>标记</p>
<h3 id="暂存已修改的文件" tabindex="-1"><a class="header-anchor" href="#暂存已修改的文件" aria-hidden="true">#</a> 暂存已修改的文件</h3>
<p><img src="@source/.vuepress/public/images/git7.png" alt="图片">
绿色的 M</p>
<h3 id="提交已暂存的文件" tabindex="-1"><a class="header-anchor" href="#提交已暂存的文件" aria-hidden="true">#</a> 提交已暂存的文件</h3>
<p>再次提交</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> commit -m <span class="token string">'再洗提交'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="撤销对文件的修改" tabindex="-1"><a class="header-anchor" href="#撤销对文件的修改" aria-hidden="true">#</a> 撤销对文件的修改</h3>
<p>撤销对文件的修改指的是: 把工作区中对应文件的修改, <strong>还原</strong>成 Git 仓库中所保存的版本</p>
<p>注意: 所有的修改会被丢失, 且无法修复! <strong>危险性比较高, 慎重操作</strong>!</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> checkout -- 文件名
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="取消暂存的文件" tabindex="-1"><a class="header-anchor" href="#取消暂存的文件" aria-hidden="true">#</a> 取消暂存的文件</h3>
<p>如果需要从暂存区中移除对应的文件, 使用这个命令</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> reset HEAD 要移除的文件名称

<span class="token function">git</span> reset HEAD <span class="token builtin class-name">.</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="跳过使用暂存区域" tabindex="-1"><a class="header-anchor" href="#跳过使用暂存区域" aria-hidden="true">#</a> 跳过使用暂存区域</h3>
<p>Git 标准的工作流程是 <strong>工作区 -&gt; 暂存区 -&gt; Git 仓库</strong></p>
<p>这个过程优点繁琐, 可以简化为 <strong>工作区 -&gt; Git仓库</strong></p>
<p>git commit 加上 <code>-a</code>选项, 自动暂存一并提交</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> commit -a -m <span class="token string">'描述信息'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="移除文件" tabindex="-1"><a class="header-anchor" href="#移除文件" aria-hidden="true">#</a> 移除文件</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 从 Git 仓库和工作区中同时移除 index,js 文件</span>
<span class="token function">git</span> <span class="token function">rm</span> -f index.js
<span class="token comment"># 只从 Git 仓库中移除 index.js 文件, 但保留工作区中 index.css 文件</span>
<span class="token function">git</span> <span class="token function">rm</span> -- cached index.js
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>还要 commit 一下</p>
<h3 id="忽略文件和-glob-匹配模式" tabindex="-1"><a class="header-anchor" href="#忽略文件和-glob-匹配模式" aria-hidden="true">#</a> 忽略文件和 glob 匹配模式</h3>
<p>.gitignore 配置文件</p>
<ol>
<li>#开头的是注释</li>
<li>/ 结尾的是目录</li>
<li>/ 开头的防止递归</li>
<li>!开头表示取反</li>
<li>glob模式下进行文件和文件夹的匹配(glob 指简化了的正则表达式 )</li>
</ol>
<p>glob模式:
<img src="@source/.vuepress/public/images/glob1.png" alt="图片"></p>
<p>.gitignore文件的例子:
<img src="@source/.vuepress/public/images/lizi1.png" alt="图片"></p>
<h3 id="查看提交历史" tabindex="-1"><a class="header-anchor" href="#查看提交历史" aria-hidden="true">#</a> 查看提交历史</h3>
<p><img src="@source/.vuepress/public/images/gitlog1.png" alt="图片"></p>
<h3 id="回退到指定版本" tabindex="-1"><a class="header-anchor" href="#回退到指定版本" aria-hidden="true">#</a> 回退到指定版本</h3>
<p><img src="@source/.vuepress/public/images/huitui1.png" alt="图片"></p>
<h2 id="github" tabindex="-1"><a class="header-anchor" href="#github" aria-hidden="true">#</a> github</h2>
<h3 id="远程仓库克隆到本地" tabindex="-1"><a class="header-anchor" href="#远程仓库克隆到本地" aria-hidden="true">#</a> 远程仓库克隆到本地</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>git clone 远程仓库的地址
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="分支" tabindex="-1"><a class="header-anchor" href="#分支" aria-hidden="true">#</a> 分支</h2>
<h3 id="分支的作用" tabindex="-1"><a class="header-anchor" href="#分支的作用" aria-hidden="true">#</a> 分支的作用</h3>
<p><img src="@source/.vuepress/public/images/fenzhi1.png" alt="图片"></p>
<h3 id="master-主分支" tabindex="-1"><a class="header-anchor" href="#master-主分支" aria-hidden="true">#</a> master 主分支</h3>
<p>初始化本地 Git 仓库, 默认已经创建了 master 的分支, 也叫做<strong>主分支</strong></p>
<p>作用: <strong>用来保存和记录整个项目已完成的功能代码</strong></p>
<p>因此不允许程序员在 master 主分支上修改代码, 因为这样做风险太高, 容易导致整个项目的崩溃</p>
<h3 id="功能分支" tabindex="-1"><a class="header-anchor" href="#功能分支" aria-hidden="true">#</a> 功能分支</h3>
<p>由于程序员不能在 master 分支上进行功能的开发, 所以就有了<strong>功能分支</strong>的概念</p>
<p><strong>功能分支</strong>指的是<strong>专门用来开发新功能的分支</strong>, 它是临时从 master 主分支分叉出来的 , 最终合并到 master 主分支</p>
<h3 id="查看分支列表" tabindex="-1"><a class="header-anchor" href="#查看分支列表" aria-hidden="true">#</a> 查看分支列表</h3>
<p>查看当前 Git 仓库中所有的分支列表:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> branch 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="@source/.vuepress/public/images/fenzhi2.png" alt="图片">
分支名称前面的 <code>*</code>号<strong>表示当前所处的分支</strong></p>
<h3 id="创建新分支" tabindex="-1"><a class="header-anchor" href="#创建新分支" aria-hidden="true">#</a> 创建新分支</h3>
<p>基于当前分支, 创建一个新的分支, 此时, 新分支中的代码和当前分支完全一样</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>git branch 分支名称
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="@source/.vuepress/public/images/fenzhi3.png" alt="图片"></p>
<h3 id="切换分支" tabindex="-1"><a class="header-anchor" href="#切换分支" aria-hidden="true">#</a> 切换分支</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> checkout 都要切换的分支名称
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="@source/.vuepress/public/images/fenzhi5.png" alt="图片"></p>
<h3 id="分支的快速创建和切换" tabindex="-1"><a class="header-anchor" href="#分支的快速创建和切换" aria-hidden="true">#</a> 分支的快速创建和切换</h3>
<p>创建指定名称的新分支, 并立即切换到新分支上</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>git checkout -b  分支名称
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>是简写形式:</p>
<ul>
<li>git branch 分支名称</li>
<li>git checkout 分支名称
<img src="@source/.vuepress/public/images/fenzhi6.png" alt="图片"></li>
</ul>
<h3 id="合并分支" tabindex="-1"><a class="header-anchor" href="#合并分支" aria-hidden="true">#</a> 合并分支</h3>
<p>功能分支的代码开发测试完毕后, 可以使用如下命令, 将完成的代码合并到 master 主分支上:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 1. 切换到 master 分支</span>
<span class="token function">git</span> checkout master
<span class="token comment"># 2. 在 master 分支上运行 git merge 命令, 将分值代码合并到 master 主分支</span>
<span class="token function">git</span> merge 分支名称 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>假设要把 C 代码 合并到 A 分支, 则必须<strong>先切换到 A 分支, 在运行 git merge 命令</strong>, 合并 C 分支</p>
<h3 id="删除分支" tabindex="-1"><a class="header-anchor" href="#删除分支" aria-hidden="true">#</a> 删除分支</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>git branch -d 分支名称
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="遇到冲突时的分支合并" tabindex="-1"><a class="header-anchor" href="#遇到冲突时的分支合并" aria-hidden="true">#</a> 遇到冲突时的分支合并</h3>
<p>程序员手动打开文件, 需要<strong>手动解决冲突</strong></p>
<p>手动解决了冲突之后,在执行, <code>git add .</code> ,<code>git commit -m '解决冲突的问题'</code></p>
<h2 id="远程分支操作" tabindex="-1"><a class="header-anchor" href="#远程分支操作" aria-hidden="true">#</a> 远程分支操作</h2>
<h3 id="本地分支-推送到远程仓库" tabindex="-1"><a class="header-anchor" href="#本地分支-推送到远程仓库" aria-hidden="true">#</a> 本地分支 推送到远程仓库</h3>
<p><strong>第一次</strong>将分支推送到跟远程仓库
<img src="@source/.vuepress/public/images/fz1.png" alt="图片"></p>
<h3 id="查看远程仓库中所有的分支列表" tabindex="-1"><a class="header-anchor" href="#查看远程仓库中所有的分支列表" aria-hidden="true">#</a> 查看远程仓库中所有的分支列表</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> remote show 远程仓库名称
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>远程仓库名称默认为 origin</p>
<h3 id="跟踪分支" tabindex="-1"><a class="header-anchor" href="#跟踪分支" aria-hidden="true">#</a> 跟踪分支</h3>
<p>从远程仓库中, 把远程分支下载到本地仓库中, 需要运行的命令:
<img src="@source/.vuepress/public/images/fz2.png" alt="图片"></p>
<h3 id="拉取远程分支最新的代码" tabindex="-1"><a class="header-anchor" href="#拉取远程分支最新的代码" aria-hidden="true">#</a> 拉取远程分支最新的代码</h3>
<p>把远程分支最新的代码下载到本地对应的分支中</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>git pull
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="删除远程分支" tabindex="-1"><a class="header-anchor" href="#删除远程分支" aria-hidden="true">#</a> 删除远程分支</h3>
<p><img src="@source/.vuepress/public/images/fz3.png" alt="图片"></p>
<h2 id="git的远程分支" tabindex="-1"><a class="header-anchor" href="#git的远程分支" aria-hidden="true">#</a> Git的远程分支 !!!</h2>
<p><strong>远程分支是也是一种分支结构：</strong></p>
<ul>
<li>以 <code>&lt;remote&gt;/&lt;branch&gt;</code> 的形式命名的；</li>
</ul>
<p><strong>操作一：推送分支到远程</strong></p>
<ul>
<li>当你想要公开分享一个分支时，需要将其推送到有写入权限的远程仓库上；</li>
<li>运行 <code>git push &lt;remote&gt; &lt;branch&gt;</code>；</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> push origin <span class="token operator">&lt;</span>branch<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><strong>操作二：跟踪远程分支</strong></p>
<ul>
<li>当克隆一个仓库时，它通常会自动地创建一个跟踪 origin/main 的 main 分支；</li>
<li>如果你愿意的话可以设置其他的跟踪分支，可以通过运行 <code>git checkout --track &lt;remote&gt;/&lt;branch&gt;</code></li>
<li>如果你尝试检出的分支 (a) 不存在且 (b) 刚好只有一个名字与之匹配的远程分支，那么 Git 就会为你创建一个跟踪分支</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> checkout --track <span class="token operator">&lt;</span>remote<span class="token operator">></span>/<span class="token operator">&lt;</span>branch<span class="token operator">></span>
<span class="token function">git</span> checkout <span class="token operator">&lt;</span>branch<span class="token operator">></span>  <span class="token comment">#简写</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>操作三：删除远程分支</strong></p>
<ul>
<li>如果某一个远程分支不再使用，我们想要删除掉，可以运行带有 --delete 选项的 git push 命令来删除一个远程分支。</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> push origin --delete <span class="token operator">&lt;</span>branch<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><strong>将本地仓库和远程仓库建立连接</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> init 创建本地仓库
创建一些文件之后
<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
<span class="token function">git</span> commit -m <span class="token string">'初始化项目'</span>

目前跟远程仓库没有建立过关系, 所以先需要把本地仓库跟远程仓库建立关系
<span class="token function">git</span> remote <span class="token function">add</span> origin xxxxxxxxxxxxxxxxx 跟远程仓库建立关系

<span class="token function">git</span> fetch origin main  把远程仓库的 main 分支拿到本地去了 , 在本地叫做 origin/main

<span class="token function">git</span> branch --set-upstream-to<span class="token operator">=</span>origin/main  设置上游分支

本地的分支和远程的分支没有共同的祖先<span class="token punctuation">(</span>common base<span class="token punctuation">)</span>, 所以不能 <span class="token function">git</span> merge<span class="token punctuation">(</span>完整写法是 <span class="token function">git</span> merge origin main, 但上面已经设置了上游分支, 所以默认可以省略<span class="token punctuation">)</span> 
所以要执行 <span class="token function">git</span> merge --allow-unrelated-histories

但 <span class="token function">git</span> push 的时候又不行
<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> 需要执行 <span class="token function">git</span> config push.default upstream

因为 <span class="token function">git</span> push 的默认是 <span class="token function">git</span> config push.default simple  , simple 的时候会去找本地的 master 分支, 而不是上游分支, 所以不行

再 <span class="token function">git</span> push

<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>或者 
<span class="token function">git</span> checkout --track origin/main

因为本地的分支叫做 master ,  远程的分支叫做 main, 两个名字不一样的情况下不行
<span class="token variable"><span class="token variable">`</span><span class="token function">git</span> checkout --track origin/main<span class="token variable">`</span></span> 表示要跟踪 origin/main

再 <span class="token function">git</span> push
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><p>在本地新创建一个 <code>develop</code> 分支</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> checkout -b develop <span class="token comment">#在本地创建了一个 develop 分支 </span>

要把本地的 develop 分支推送到远程
<span class="token function">git</span> push origin develop 
那么远程也多了一个叫 develop 的分支

在 develop 分支上提交一些文件之后, 但这个时候还不能执行 <span class="token function">git</span> push 推送到远程, 还需要指定上游分支
<span class="token function">git</span> branch --set-upstream-to<span class="token operator">=</span>origin/develop

然后才可以执行 <span class="token function">git</span> push
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>比如项新增特性, 在本地创建了一个叫做 <code>feature</code> 分支(步骤同上)</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> checkout -b feature

<span class="token function">git</span> push origin feature

<span class="token function">git</span> branch --set-upstream-to<span class="token operator">=</span>origin/feature

然后把一些新的文件推送到远程, <span class="token function">git</span> push
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>作为 <strong>组员</strong>的操作:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> clone xxxxxxxxxxxxxxxx

但默认 clone 下来的分支只有 main 主分支, 没有 develop 分支<span class="token punctuation">(</span>需要知道开发需要都在 develop 分支上进行开发嘛<span class="token punctuation">)</span>

那么在组员的本地怎么去跟踪 develop 分支 ?
需要执行 <span class="token function">git</span> checkout --track origin/develop
或者直接 <span class="token function">git</span> checkout develop <span class="token punctuation">(</span>简写<span class="token punctuation">)</span>


<span class="token function">git</span> pull 拉下其他人写的代码
然后进行开发, 再 <span class="token function">git</span> push
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="git-命令速查表" tabindex="-1"><a class="header-anchor" href="#git-命令速查表" aria-hidden="true">#</a> Git 命令速查表</h2>
<p><img src="@source/.vuepress/public/images/gitsu1.png" alt="图片"></p>
</template>
