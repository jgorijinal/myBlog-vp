<template><h1 id="项目搭建规范" tabindex="-1"><a class="header-anchor" href="#项目搭建规范" aria-hidden="true">#</a> 项目搭建规范</h1>
<h2 id="一-代码规范" tabindex="-1"><a class="header-anchor" href="#一-代码规范" aria-hidden="true">#</a> 一.代码规范</h2>
<h3 id="_1-1-集成editorconfig配置" tabindex="-1"><a class="header-anchor" href="#_1-1-集成editorconfig配置" aria-hidden="true">#</a> 1.1. 集成editorConfig配置</h3>
<p>EditorConfig 有助于为不同 IDE 编辑器上处理同一项目的多个开发人员维护一致的编码风格。</p>
<p>.editorConfig</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># http://editorconfig.org

root = true

[*] # 表示所有文件适用
charset = utf-8 # 设置文件字符集为 utf-8
indent_style = space # 缩进风格（tab | space）
indent_size = 2 # 缩进大小
end_of_line = lf # 控制换行类型(lf | cr | crlf)
trim_trailing_whitespace = true # 去除行首的任意空白字符
insert_final_newline = true # 始终在文件末尾插入一个新行

[*.md] # 表示仅 md 文件适用以下规则
max_line_length = off
trim_trailing_whitespace = false
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>VSCode需要安装一个插件：EditorConfig for VS Code
<img src="@source/.vuepress/public/images/editorConfig.png" alt="图片"></p>
<h3 id="_1-2-使用prettier工具" tabindex="-1"><a class="header-anchor" href="#_1-2-使用prettier工具" aria-hidden="true">#</a> 1.2. 使用prettier工具</h3>
<p>Prettier 是一款强大的代码格式化工具，支持 JavaScript、TypeScript、CSS、SCSS、Less、JSX、Angular、Vue、GraphQL、JSON、Markdown 等语言，基本上前端能用到的文件格式它都可以搞定，是当下最流行的代码格式化工具。</p>
<p>1.安装prettier</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm install prettier -D
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>2.配置.prettierrc文件：</p>
<ul>
<li>useTabs：使用 tab 缩进还是空格缩进，选择false；</li>
<li>tabWidth：tab 是空格的情况下，是几个空格，选择2个；</li>
<li>printWidth：当行字符的长度，推荐80，也有人喜欢100或者120；</li>
<li>singleQuote：使用单引号还是双引号，选择true，使用单引号；</li>
<li>trailingComma：在多行输入的尾逗号是否添加，设置为 <code>none</code>；</li>
<li>semi：语句末尾是否要加分号，默认值true，选择false表示不加；</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>{
  "useTabs": false,
  "tabWidth": 2,
  "printWidth": 80,
  "singleQuote": true,
  "trailingComma": "none",
  "semi": true
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>3.创建.prettierignore忽略文件</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>/dist/*
.local
.output.js
/node_modules/**

**/*.svg
**/*.sh

/public/*
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>4.VSCode需要安装prettier的插件
<img src="@source/.vuepress/public/images/prettier.png" alt="图片"></p>
<p>5.测试prettier是否生效</p>
<ul>
<li>测试一：在代码中保存代码；</li>
<li>测试二：配置一次性修改的命令；</li>
</ul>
<p>在package.json中配置一个scripts：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>  "prettier": "prettier --write ."
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="_1-3-使用eslint检测" tabindex="-1"><a class="header-anchor" href="#_1-3-使用eslint检测" aria-hidden="true">#</a> 1.3. 使用ESLint检测</h3>
<p>1.在前面创建项目的时候，我们就选择了ESLint，所以Vue会默认帮助我们配置需要的ESLint环境。</p>
<p>2.VSCode需要安装ESLint插件：
<img src="@source/.vuepress/public/images/eslint.png" alt="图片"></p>
<p>3.解决eslint和prettier冲突的问题：</p>
<p>安装插件：（vue在创建项目时，如果选择prettier，那么这两个插件已经自动安装）</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm i eslint-plugin-prettier eslint-config-prettier -D
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>添加prettier插件：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint",
    'plugin:prettier/recommended'
  ],
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p><img src="@source/.vuepress/public/images/esl.png" alt="图片"></p>
<h3 id="_1-4-git-husky和eslint" tabindex="-1"><a class="header-anchor" href="#_1-4-git-husky和eslint" aria-hidden="true">#</a> 1.4. git Husky和eslint</h3>
<p>虽然我们已经要求项目使用eslint了，但是不能保证组员提交代码之前都将eslint中的问题解决掉了：</p>
<ul>
<li>也就是我们希望保证代码仓库中的代码都是符合eslint规范的；</li>
<li>那么我们需要在组员执行 <code>git commit</code> 命令的时候对其进行校验，如果不符合eslint规范，那么自动通过规范进行修复；</li>
</ul>
<p>那么如何做到这一点呢？可以通过Husky工具：</p>
<ul>
<li>husky是一个git hook工具，可以帮助我们触发git提交的各个阶段：pre-commit、commit-msg、pre-push</li>
</ul>
<p>如何使用husky呢？</p>
<p>这里可以使用自动配置命令：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npx husky-init &amp;&amp; npm install
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>它会做三件事：</p>
<p>1.安装 husky 相关的依赖：
<img src="@source/.vuepress/public/images/hu.png" alt="图片"></p>
<p>2.在项目目录下创建 <code>.husky</code> 文件夹：
<img src="@source/.vuepress/public/images/hw.png" alt="图片"></p>
<p>3.在package.json中添加一个脚本：
<img src="@source/.vuepress/public/images/prepare.png" alt="图片"></p>
<p>接下来，我需要去完成一个操作：在进行commit时，执行lint脚本：
<img src="@source/.vuepress/public/images/pc.png" alt="图片"></p>
<p>这个时候执行git commit的时候会自动对代码进行lint校验</p>
</template>
