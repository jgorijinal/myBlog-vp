<template><h1 id="git" tabindex="-1"><a class="header-anchor" href="#git" aria-hidden="true">#</a> Git</h1>
<h2 id="git的安装" tabindex="-1"><a class="header-anchor" href="#git的安装" aria-hidden="true">#</a> Git的安装</h2>
<ul>
<li>Git的官网：<code>https://git-scm.com/downloads</code></li>
<li>根据自己的操作系统下载 Git 即可</li>
</ul>
<h3 id="git-的配置分类" tabindex="-1"><a class="header-anchor" href="#git-的配置分类" aria-hidden="true">#</a> Git 的配置分类</h3>
<p>既然已经在系统上安装了 Git，你会需要做几件事来定制你的 Git 环境：</p>
<ul>
<li>每台计算机上只需要配置一次，程序升级时会保留配置信息；</li>
<li>你可以在任何时候再次通过运行命令来修改它们；</li>
</ul>
<p>Git 自带一个 git config 的工具来帮助设置控制 Git 外观和行为的配置变量：</p>
<ol>
<li><code>/etc/gitconfig</code> 文件：包含系统上每一个用户及他们仓库的通用配置</li>
</ol>
<ul>
<li>如果在执行 git config 时带上 --system 选项，那么它就会读写该文件中的配置变量；</li>
<li>由于它是系统配置文件，因此你需要管理员或超级用户权限来修改它。（开发中通常不修改）</li>
</ul>
<ol start="2">
<li><strong><code>~/.gitconfig 或 C/用户/coderwhy/.gitconfig</code> 文件：只针对当前用户</strong></li>
</ol>
<ul>
<li><strong>你可以传递<code> --global</code> 选项让 Git 读写此文件，这会对你系统上 所有 的仓库生效；</strong></li>
</ul>
<ol start="3">
<li><code>当前使用仓库的 Git 目录中的 config 文件（即 .git/config）</code>：针对该仓库</li>
</ol>
<ul>
<li>你可以传递 --local 选项让 Git 强制读写此文件，虽然默认情况下用的就是它；</li>
</ul>
<h3 id="git-额配置选项" tabindex="-1"><a class="header-anchor" href="#git-额配置选项" aria-hidden="true">#</a> Git 额配置选项</h3>
<p><strong>安装 Git 后，要做的第一件事就是设置你的用户名和邮件地址。</strong></p>
<ul>
<li>这一点很重要，因为<strong>每一个 Git 提交都会使用这些信息</strong>，它们会写入到你的每一次提交中，不可更改；</li>
<li>如果使用了 <code>--global</code> 选项，<strong>那么该命令只需要运行一次</strong>，因为之后无论你在该系统上做任何事情， Git 都会使用那些信息；</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> config --global user.name <span class="token string">"eren"</span>

<span class="token function">git</span> config --global user.email <span class="token string">"66666666@163.com"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>检测当前的配置信息：<code>git config --list</code></strong></p>
<p><img src="@source/.vuepress/public/images/gitlist1.png" alt="图片"></p>
<p>查看单个某个配置项</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> config user.name  // eren
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="获取git仓库-–-git-init-git-clone" tabindex="-1"><a class="header-anchor" href="#获取git仓库-–-git-init-git-clone" aria-hidden="true">#</a> 获取Git仓库 – git init / git clone</h2>
<p>通常有两种获取 Git 项目仓库的方式：</p>
<ul>
<li>方式一：<strong>初始化一个Git仓库</strong>，并且可以将当前项目的文件都添加到Git仓库中（目前很多的脚手架在创建项目时都会默认创建一个Git仓库）；</li>
<li>方式二：<strong>从其它服务器 克隆（clone）</strong> 一个已存在的 Git 仓库（第一天到公司通常我们需要做这个操作）；</li>
</ul>
<p><strong>方式一：初始化Git仓库</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> init
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul>
<li>该命令将创建一个名为 <code>.git</code> 的子目录，这个子目录含有你初始化的 Git 仓库中所有的必须文件，这些文件是 Git 仓库的核心；</li>
<li>但是，在这个时候，我们仅仅是做了一个初始化的操作，你的项目里的文件还没有被跟踪；</li>
</ul>
<p><strong>方式二：从Git远程仓库</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/coderwhy/hy-react-web-music.git
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="文件的状态划分" tabindex="-1"><a class="header-anchor" href="#文件的状态划分" aria-hidden="true">#</a> 文件的状态划分</h2>
<ul>
<li><strong>未跟踪：</strong> 默认情况下，Git仓库下的文件也没有添加到Git仓库管理中，我们需要通过 <code>add</code> 命令来操作；</li>
<li><strong>已跟踪：</strong> 添加到Git仓库管理的文件处于已跟踪状态，Git 可以对其进行各种跟踪管理；</li>
</ul>
<p><strong>已跟踪</strong>的文件又可以进行细分状态划分：</p>
<ul>
<li><code>staged</code>：暂缓区中的文件状态；</li>
<li><code>Unmodified</code>：<code>commit</code> 命令，可以将 staged 中文件提交到 Git 仓库</li>
<li><code>Modified</code>：修改了某个文件后，会处于 Modified 状态；</li>
</ul>
<p><img src="@source/.vuepress/public/images/gitwenjian1.png" alt="图片"></p>
<h2 id="检测文件的状态-git-status" tabindex="-1"><a class="header-anchor" href="#检测文件的状态-git-status" aria-hidden="true">#</a> 检测文件的状态 - git status</h2>
<p>我们在有 Git 仓库的目录下新建一个文件，查看文件的状态：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> status
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="@source/.vuepress/public/images/gitstatus1.png" alt="图片"></p>
<p><code>Untracked files</code>：未跟踪的文件</p>
<ul>
<li>未跟踪的文件意味着 Git 在之前的提交中没有这些文件；</li>
<li>Git 不会自动将之纳入跟踪范围，除非你明明白白地告诉它“我需要跟踪该文件”；</li>
</ul>
<p>也可以查看更加简洁的状态信息：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> status -s
<span class="token function">git</span> status --short 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><img src="@source/.vuepress/public/images/gitstatus2.png" alt="图片"></p>
<h2 id="文件添加到暂存区-–-git-add" tabindex="-1"><a class="header-anchor" href="#文件添加到暂存区-–-git-add" aria-hidden="true">#</a> 文件添加到暂存区 – git add</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>跟踪新文件命令：</p>
<ul>
<li>使用命令 <code>git add</code> 开始跟踪一个文件</li>
</ul>
<p>跟踪修改的文件命令：</p>
<ul>
<li>如果我们已经跟踪了某一个文件，这个时候<strong>修改了文件也需要重新添加到暂存区中</strong></li>
</ul>
<h2 id="git-忽略文件" tabindex="-1"><a class="header-anchor" href="#git-忽略文件" aria-hidden="true">#</a> git 忽略文件</h2>
<p>一般我们总会有些文件无需纳入 Git 的管理，也不希望它们总出现在未跟踪文件列表。</p>
<ul>
<li>通常都是些自动生成的文件，比如日志文件，或者编译过程中创建
的临时文件等；</li>
<li>我们可以创建一个名为 .<code>gitignore</code> 的文件，列出要忽略的文件的模
式；
在实际开发中，这个文件通常不需要手动创建，在必须的时候添加自
己的忽略内容即可；</li>
</ul>
<p>比如创建的 <code>Vue</code> 项目自动创建的忽略文件：</p>
<ul>
<li>包括一些不需要提交的文件、文件夹；</li>
<li>包括本地环境变量文件；</li>
<li>包括一些日志文件；</li>
<li>包括一些编辑器自动生成的文件；</li>
</ul>
<p><img src="@source/.vuepress/public/images/gitig1.png" alt="图片"></p>
<h2 id="文件更新提交-–-git-commit" tabindex="-1"><a class="header-anchor" href="#文件更新提交-–-git-commit" aria-hidden="true">#</a> 文件更新提交 – git commit</h2>
<p>现在的暂存区已经准备就绪，可以提交了。</p>
<ul>
<li>每次准备提交前，先用 <code>git status</code> 看下，你所需要的文件是不是都已暂存起来了；</li>
<li>再运行提交命令 <code>git commit</code>；</li>
<li>可以在 <code>commit</code> 命令后添加 <code>-m</code> 选项，将提交信息与命令放在同一行</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> commit –m <span class="token string">"提交信息"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>如果 <code>add</code> 操作和 <code>commit</code> 操作比较繁琐 , 那么可以将两个命令结合来使用</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> commit -a -m <span class="token string">'提交信息'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="查看提交历史-git-log" tabindex="-1"><a class="header-anchor" href="#查看提交历史-git-log" aria-hidden="true">#</a> 查看提交历史 - git log</h2>
<p>在提交了若干更新，又或者克隆了某个项目之后，有时候我们想要查看一下所有的历史提交记录。</p>
<p>这个时候可以使用 <code>git log</code> 命令：</p>
<ul>
<li>不传入任何参数的默认情况下，<code>git log</code> 会按时间先后顺序列出所有的提交，最近的更新排在最上面；</li>
<li>这个命令会列出每个提交的 SHA-1 校验和、作者的名字和电子邮件地址、提交时间以及提交说明；</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> log 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="@source/.vuepress/public/images/gitlog01.png" alt="图片"></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> log --pretty<span class="token operator">=</span>oneline
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="@source/.vuepress/public/images/gitlog02.png" alt="图片"></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> log --pretty<span class="token operator">=</span>oneline --graph
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="@source/.vuepress/public/images/gitlog03.png" alt="图片"></p>
<h2 id="版本回退-–-git-reset" tabindex="-1"><a class="header-anchor" href="#版本回退-–-git-reset" aria-hidden="true">#</a> 版本回退 – git reset</h2>
<p>如果想要进行版本回退，我们需要先知道目前处于哪一个版本：Git 通过 HEAD 指针记录当前版本。</p>
<ul>
<li>HEAD 是当前分支引用的指针，它总是指向该分支上的最后一次提交；</li>
<li>理解 HEAD 的最简方式，就是将它看做 该分支上的最后一次提交 的快照；
<img src="@source/.vuepress/public/images/githead1.png" alt="图片">
<img src="@source/.vuepress/public/images/githead2.png" alt="图片">
可以通过 <code>HEAD</code> 来改变 Git 目前的版本指向：</li>
<li>上一个版本就是<code>HEAD^</code>，上上一个版本就是<code>HEAD^^</code>；</li>
<li>如果是上 1000 个版本，我们可以使用<code>HEAD~1000</code>；</li>
<li>我们可以可以指定某一个<code>commit id</code>；</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> reset --hard HEAD^
<span class="token function">git</span> reset --hard HEAD~1000
<span class="token function">git</span> reset --hard 2d44982
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>回退以后再执行 <code>git log</code> 发现之前的提交记录已经看不见了</p>
<p>那么这个时候想要回退到最出的提交开路的话可以使用 <strong><code>git reflog</code></strong> 查看更详细的提交记录, 并进行回退</p>
<h2 id="远程仓库" tabindex="-1"><a class="header-anchor" href="#远程仓库" aria-hidden="true">#</a> 远程仓库</h2>
<p>什么是远程仓库<code>（Remote Repository）</code>呢？</p>
<ul>
<li>目前我们的代码是保存在一个本地仓库中，也就意味着我们只是在进行本地操作；</li>
<li>在真实开发中，通常是多人开发的，所以将管理的代码共享到远程仓库中；</li>
</ul>
<p>那么如何创建一个远程仓库呢？</p>
<ul>
<li>远程仓库通常是搭建在某一个服务器上的（当然本地也可以，但是本地很难共享）；</li>
<li>所以我们需要在 Git 服务器上搭建一个远程仓库；</li>
</ul>
<p>目前我们有如下方式可以使用Git服务器：</p>
<ul>
<li>使用第三方的Git服务器：比如 <code>GitHub、Gitee、Gitlab等等</code></li>
<li>在自己服务器搭建一个 Git 服务；</li>
</ul>
<h3 id="远程仓库的验证" tabindex="-1"><a class="header-anchor" href="#远程仓库的验证" aria-hidden="true">#</a> 远程仓库的验证</h3>
<p>常见的远程仓库有哪些呢？目前比较流行使用的是三种：</p>
<ul>
<li><code>GitHub</code>：https://github.com/</li>
<li><code>Gitee</code>：https://gitee.com/</li>
<li>自己搭建 <code>Gitlab</code>：http://152.136.185.210:7888/</li>
</ul>
<p>对于私有的仓库我们想要进行操作，远程仓库会对我们的身份进行验证：</p>
<ul>
<li>如果没有验证，任何人都可以随意操作仓库是一件非常危险的事情；</li>
</ul>
<p>目前 Git 服务器验证手段主要有两种：</p>
<ul>
<li><strong>方式一：基于 HTTP 的凭证存储（Credential Storage）</strong></li>
<li><strong>方式二：基于 SSH 的密钥</strong></li>
</ul>
<h3 id="远程仓库的验证-–-凭证" tabindex="-1"><a class="header-anchor" href="#远程仓库的验证-–-凭证" aria-hidden="true">#</a> 远程仓库的验证 – 凭证</h3>
<p>因为本身 HTTP 协议是无状态的连接，所以每一个连接都需要用户名和密码：</p>
<ul>
<li>如果每次都这样操作，那么会非常麻烦；</li>
<li>幸运的是，Git 拥有一个凭证系统来处理这个事情；</li>
</ul>
<p>下面有一些 Git Crediential 的选项：</p>
<ul>
<li>选项一：默认所有都不缓存。 每一次连接都会询问你的用户名和密码；</li>
<li>选项二：“cache” 模式会将凭证存放在内存中一段时间。 密码永远不会被存储在磁盘中，并且在15分钟后从内存中清除；</li>
<li>选项三：“store” 模式会将凭证用明文的形式存放在磁盘中，并且永不过期；</li>
<li>选项四：如果你使用的是 Mac，Git 还有一种 “osxkeychain” 模式，它会将凭证缓存到你系统用户的钥匙串中（加密的）；</li>
<li>选项五：如果你使用的是 Windows，你可以安装一个叫做 “<code>Git Credential Manager for Windows”</code> 的辅助工具；
<ul>
<li>可以在 https://github.com/Microsoft/Git-Credential-Manager-for-Windows 下载。</li>
</ul>
</li>
</ul>
<p><img src="@source/.vuepress/public/images/gitcre1.png" alt="图片"></p>
<h3 id="远程仓库的验证-–-ssh密钥" tabindex="-1"><a class="header-anchor" href="#远程仓库的验证-–-ssh密钥" aria-hidden="true">#</a> 远程仓库的验证 – SSH密钥</h3>
<p><code>Secure Shell</code>（安全外壳协议，简称SSH）是一种加密的网络传输协议，可在不安全的网络中为网络服务提供安全的传输环境。</p>
<p>SSH 以非对称加密实现身份验证。</p>
<ul>
<li>例如其中一种方法是使用自动生成的公钥-私钥对来简单地加密网络连接，随后使用密码认证进行登录；</li>
<li>另一种方法是人工生成一对公钥和私钥，通过生成的密钥进行认证，这样就可以在不输入密码的情况下登录；</li>
<li>公钥需要放在待访问的电脑之中，而对应的私钥需要由用户自行保管；</li>
</ul>
<p>如果我们以 SSH 的方式访问Git仓库，那么就需要生产对应的<strong>公钥和私钥</strong>：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>ssh-keygen -t ed25519 -C “your email"
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="@source/.vuepress/public/images/gitgs2.png" alt="图片">
<img src="@source/.vuepress/public/images/gitgs1.png" alt="图片">
把这些文件拖到编辑器查看<strong>公钥和私钥</strong></p>
<p>并把<strong>公钥</strong>添加到远程服务器上
<img src="@source/.vuepress/public/images/gitgs3.png" alt="图片"></p>
<h2 id="管理远程服务器" tabindex="-1"><a class="header-anchor" href="#管理远程服务器" aria-hidden="true">#</a> 管理远程服务器</h2>
<p><strong>查看远程地址：比如我们之前从GitHub上clone下来的代码，它就是有自己的远程仓库的：</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> remote
<span class="token function">git</span> remote –v
-v是—verbose的缩写<span class="token punctuation">(</span>冗长的<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><img src="@source/.vuepress/public/images/gitremote1.png" alt="图片"></p>
<p><strong>添加远程地址：让本地的仓库和远程服务器仓库建立连接</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> remote <span class="token function">add</span> <span class="token operator">&lt;</span>shortname<span class="token operator">></span> <span class="token operator">&lt;</span>url<span class="token operator">></span>
<span class="token function">git</span> remote <span class="token function">add</span> origin http://152.136.185.210:7888/coderwhy/gitremotedemo.git
远程仓库的名字默认经常会使用 origin 这个名字
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>重命名远程地址：</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> remote <span class="token function">rename</span> origin gitlab
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><strong>移除远程地址：</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> remote remove origin
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="本地分支的上游分支-跟踪分支" tabindex="-1"><a class="header-anchor" href="#本地分支的上游分支-跟踪分支" aria-hidden="true">#</a> 本地分支的上游分支（跟踪分支)</h3>
<p>在本地的仓库和一个远程仓库建立连接之后想要执行 <code>git pull</code> 命令, 想拉下远程仓库的代码的时候出现问题</p>
<p><img src="@source/.vuepress/public/images/gitgenzong1.png" alt="图片"></p>
<h3 id="拒绝合并不相干的历史" tabindex="-1"><a class="header-anchor" href="#拒绝合并不相干的历史" aria-hidden="true">#</a> 拒绝合并不相干的历史</h3>
<p><img src="@source/.vuepress/public/images/gitgenzong2.png" alt="图片"></p>
<h2 id="远程仓库的交互" tabindex="-1"><a class="header-anchor" href="#远程仓库的交互" aria-hidden="true">#</a> 远程仓库的交互</h2>
<p><img src="@source/.vuepress/public/images/gitjiaohu1.png" alt="图片"></p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>情况一 : 到公司之后公司已经有了项目, 并且有远程仓库了</p>
<ol>
<li><code>git clone xxxxx</code></li>
<li>进行开发
<ul>
<li><code>git add .</code></li>
<li><code>git commit -m 'xxx'</code></li>
<li><code>git pull</code></li>
<li><code>git push</code></li>
</ul>
</li>
</ol>
<p>情况二: 开发一个全新的项目(有我来搭建)</p>
<ol>
<li>先创建一个远程仓库</li>
<li>有两种方案
<ul>
<li><strong>方案一:</strong>
<ol>
<li><code>git clone  xxxxx</code></li>
<li>在 git clone 下来的文件夹中搭建整个项目</li>
<li><code>git add .</code></li>
<li><code>git commit -m 'xxx'</code></li>
<li><code>git push</code></li>
</ol>
</li>
<li><strong>方案二:</strong>
<ol>
<li>
<p>创建一个本地仓库并搭建本地的项目</p>
</li>
<li>
<p>把当前本地仓库和之前搭建的远程仓库进行关联 <code>git remote add origin xxxxx</code></p>
</li>
<li>
<p>gitee : <code>git branch --set-upstream-to=origin/master</code></p>
<p><strong>github</strong>: <code>git branch --set-upstream-to=origin/main</code></p>
</li>
<li>
<p><code>git fetch</code></p>
</li>
<li>
<p><code>git merge --allow-unrelated-histories</code></p>
</li>
<li>
<p><code>git push</code></p>
</li>
</ol>
</li>
</ul>
</li>
</ol>
</div>
<h2 id="git标签-tag" tabindex="-1"><a class="header-anchor" href="#git标签-tag" aria-hidden="true">#</a> Git标签（tag）</h2>
<h3 id="创建tag" tabindex="-1"><a class="header-anchor" href="#创建tag" aria-hidden="true">#</a> 创建tag</h3>
<p><strong>对于重大的版本常常会打上一个标签，以表示它的重要性：</strong></p>
<ul>
<li>Git 可以给仓库历史中的某一个提交打上标签；</li>
<li>比较有代表性的是人们会使用这个功能来标记发布结点（ v1.0 、 v2.0 等等）；</li>
</ul>
<p><strong>创建标签：</strong></p>
<ul>
<li>Git 支持两种标签：轻量标签（lightweight）与附注标签（annotated）；</li>
<li>附注标签：通过-a选项，并且通过-m添加额外信息；</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> tag v1.0.0

<span class="token function">git</span> tag -a v1.0.0 -m <span class="token string">'附注标签'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>默认情况下，git push 命令并不会传送标签到远程仓库服务器上</strong></p>
<ul>
<li>在创建完标签后你必须显式地推送标签到共享服务器上，当其他人从仓库中克隆或拉取，他们也能得到你的那些标签；</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> push origin v1.0.0 把某一个标签共享到远程服务器上

<span class="token function">git</span> push origin --tags 把所有标签都共享到远程服务器上
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="删除和检出-tag" tabindex="-1"><a class="header-anchor" href="#删除和检出-tag" aria-hidden="true">#</a> 删除和检出 tag</h3>
<p><strong>删除本地tag：</strong></p>
<ul>
<li>要删除掉你本地仓库上的标签，可以使用命令 <code>git tag -d &lt;tagname&gt;</code></li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> tag -d v1.0.0
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><strong>删除远程tag：</strong></p>
<ul>
<li>要删除远程的tag我们可以通过<code>git push &lt;remote&gt; –delete &lt;tagname&gt;</code></li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> push origin -delete v1.0.0
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><strong>检出tag：</strong></p>
<ul>
<li>如果你想查看某个标签所指向的文件版本，可以使用 <code>git checkout</code> 命令；</li>
<li>通常我们在检出 tag 的时候还会创建一个对应的分支</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> checkout v1.0.0
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="分支" tabindex="-1"><a class="header-anchor" href="#分支" aria-hidden="true">#</a> 分支</h2>
<h3 id="创建分支" tabindex="-1"><a class="header-anchor" href="#创建分支" aria-hidden="true">#</a> 创建分支</h3>
<p>Git 是怎么创建新分支的呢？</p>
<ul>
<li>很简单，它只是为你创建了一个可以移动的新的指针；</li>
</ul>
<p><strong>比如，创建一个 testing 分支， 你需要使用 git branch 命令：</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> branch testing
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="@source/.vuepress/public/images/gitb1.png" alt="图片">
<strong>那么，Git 又是怎么知道当前在哪一个分支上呢？</strong></p>
<ul>
<li>也很简单，它也是通过一个名为 <code>HEAD</code> 的特殊指针</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> checkout testing
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="@source/.vuepress/public/images/gitb2.png" alt="图片"></p>
<h3 id="分支提交" tabindex="-1"><a class="header-anchor" href="#分支提交" aria-hidden="true">#</a> 分支提交</h3>
<p>如果我们指向某一个分支，并且在这个分支上提交：
<img src="@source/.vuepress/public/images/gitb3.png" alt="图片">
你也可以切换回到master分支，继续开发：
<img src="@source/.vuepress/public/images/gitb4.png" alt="图片"></p>
<h3 id="创建分支并同时切换" tabindex="-1"><a class="header-anchor" href="#创建分支并同时切换" aria-hidden="true">#</a> 创建分支并同时切换</h3>
<p><strong>创建新分支的同时切换过去</strong></p>
<ul>
<li>通常我们会在创建一个新分支后立即切换过去；</li>
<li>这可以用 <code>git checkout -b &lt;newbranchname&gt;</code> 一条命令搞定；</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> checkout -b newBranch
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="为什么需要使用分支呢" tabindex="-1"><a class="header-anchor" href="#为什么需要使用分支呢" aria-hidden="true">#</a> 为什么需要使用分支呢？</h2>
<p><strong>让我们来看一个简单的分支新建与分支合并的例子，实际工作中你可能会用到类似的工作流</strong>。</p>
<ul>
<li>开发某个项目，在默认分支master上进行开发；</li>
<li>实现项目的功能需求，不断提交；</li>
<li>并且在一个大的版本完成时，发布版本，打上一个tag v1.0.0；</li>
</ul>
<p><strong>继续开发后续的新功能，正在此时，你突然接到一个电话说有个很严重的问题需要紧急修补， 你将按照如下方式来处理：</strong></p>
<ul>
<li>切换到tag v1.0.0的版本，并且创建一个分支hotfix；</li>
</ul>
<p><strong>想要新建一个分支并同时切换到那个分支上，你可以运行一个带有 -b 参数的 git checkout 命令</strong>：<code>git checkout -b hotfix</code></p>
<p><img src="@source/.vuepress/public/images/hotfix1.png" alt="图片"></p>
<h3 id="分支开发和合并" tabindex="-1"><a class="header-anchor" href="#分支开发和合并" aria-hidden="true">#</a> 分支开发和合并</h3>
<p><strong>分支上开发、修复bug</strong>：</p>
<ul>
<li>我们可以在创建的 hotfix 分支上继续修复 bug</li>
<li>当完成要做的工作后，重新打上一个新的 tag v1.0.1；</li>
</ul>
<p>切换回 master 分支，但是这个时候 master 分支也需要修复刚刚的bug：</p>
<ul>
<li>所以我们需要将 master 分支和 hotfix 分支进行合并；</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> checkout master
<span class="token function">git</span> merge hotfix
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="查看和删除分支" tabindex="-1"><a class="header-anchor" href="#查看和删除分支" aria-hidden="true">#</a> 查看和删除分支</h3>
<p>如果我们希望查看当前所有的分支，可以通过以下命令：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> branch <span class="token comment"># 查看当前所有的分支</span>
<span class="token function">git</span> branch –v <span class="token comment"># 同时查看最后一次提交</span>
<span class="token function">git</span> branch --merged <span class="token comment"># 查看所有合并到当前分支的分支</span>
<span class="token function">git</span> branch --no-merged <span class="token comment"># 查看所有没有合并到当前分支的分支</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><img src="@source/.vuepress/public/images/gb1.png" alt="图片"></p>
<p>如果某些已经合并的分支我们不再需要了，那么可以将其移除掉：(commit 的记录是不会删除的, 只会将<strong>指针</strong>移除掉)</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> branch –d hotfix <span class="token comment"># 删除当前分支</span>
<span class="token function">git</span> branch –D hotfix <span class="token comment"># 强制删除某一个分支</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="git的工作流-git-flow" tabindex="-1"><a class="header-anchor" href="#git的工作流-git-flow" aria-hidden="true">#</a> Git的工作流（git flow)</h2>
<p><strong>由于Git上分支的使用的便捷性，产生了很多Git的工作流：</strong></p>
<ul>
<li>也就是说，在整个项目开发周期的不同阶段，你可以同时拥有多个开放的分支；</li>
<li>你可以定期地把某些主题分支合并入其他分支中；</li>
</ul>
<p><strong>比如以下的工作流：</strong></p>
<ul>
<li>master 作为主分支；</li>
<li>develop 作为开发分支，并且有稳定版本时，合并到master分支中；</li>
<li>topic 作为某一个主题或者功能或者特性的分支进行开发，开发完成后合并到develop分支中；</li>
</ul>
<p><img src="@source/.vuepress/public/images/gf1.png" alt="图片"></p>
<h3 id="比较常见的git-flow" tabindex="-1"><a class="header-anchor" href="#比较常见的git-flow" aria-hidden="true">#</a> 比较常见的git flow</h3>
<p><img src="@source/.vuepress/public/images/gf2.png" alt="图片"></p>
<h2 id="git的远程分支" tabindex="-1"><a class="header-anchor" href="#git的远程分支" aria-hidden="true">#</a> Git的远程分支</h2>
</template>
