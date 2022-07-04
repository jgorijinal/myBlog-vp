# 项目搭建规范
## 一.代码规范
### 1.1. 集成editorConfig配置 
EditorConfig 有助于为不同 IDE 编辑器上处理同一项目的多个开发人员维护一致的编码风格。

.editorConfig
```
# http://editorconfig.org

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
```

VSCode需要安装一个插件：EditorConfig for VS Code
![图片](../.vuepress/public/images/editorConfig.png)

### 1.2. 使用prettier工具
Prettier 是一款强大的代码格式化工具，支持 JavaScript、TypeScript、CSS、SCSS、Less、JSX、Angular、Vue、GraphQL、JSON、Markdown 等语言，基本上前端能用到的文件格式它都可以搞定，是当下最流行的代码格式化工具。

1.安装prettier
```
npm install prettier -D
```
2.配置.prettierrc文件：
*  useTabs：使用 tab 缩进还是空格缩进，选择false；
*  tabWidth：tab 是空格的情况下，是几个空格，选择2个；
*  printWidth：当行字符的长度，推荐80，也有人喜欢100或者120；
*  singleQuote：使用单引号还是双引号，选择true，使用单引号；
*  trailingComma：在多行输入的尾逗号是否添加，设置为 `none`；
*  semi：语句末尾是否要加分号，默认值true，选择false表示不加；
```
{
  "useTabs": false,
  "tabWidth": 2,
  "printWidth": 80,
  "singleQuote": true,
  "trailingComma": "none",
  "semi": true
}
```

3.创建.prettierignore忽略文件
```
/dist/*
.local
.output.js
/node_modules/**

**/*.svg
**/*.sh

/public/*
```

4.VSCode需要安装prettier的插件
![图片](../.vuepress/public/images/prettier.png)

5.测试prettier是否生效

- 测试一：在代码中保存代码；
- 测试二：配置一次性修改的命令；

在package.json中配置一个scripts：
```
  "prettier": "prettier --write ."
```

### 1.3. 使用ESLint检测

1.在前面创建项目的时候，我们就选择了ESLint，所以Vue会默认帮助我们配置需要的ESLint环境。

2.VSCode需要安装ESLint插件：
![图片](../.vuepress/public/images/eslint.png)

3.解决eslint和prettier冲突的问题：

安装插件：（vue在创建项目时，如果选择prettier，那么这两个插件已经自动安装）
```
npm i eslint-plugin-prettier eslint-config-prettier -D
```
添加prettier插件：
```
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint",
    'plugin:prettier/recommended'
  ],
```
![图片](../.vuepress/public/images/esl.png)
### 1.4. git Husky和eslint

虽然我们已经要求项目使用eslint了，但是不能保证组员提交代码之前都将eslint中的问题解决掉了：

* 也就是我们希望保证代码仓库中的代码都是符合eslint规范的；
* 那么我们需要在组员执行 `git commit` 命令的时候对其进行校验，如果不符合eslint规范，那么自动通过规范进行修复；

那么如何做到这一点呢？可以通过Husky工具：

* husky是一个git hook工具，可以帮助我们触发git提交的各个阶段：pre-commit、commit-msg、pre-push

如何使用husky呢？

这里可以使用自动配置命令：
```
npx husky-init && npm install
```
它会做三件事：

1.安装 husky 相关的依赖：
![图片](../.vuepress/public/images/hu.png)

2.在项目目录下创建 `.husky` 文件夹：
![图片](../.vuepress/public/images/hw.png)

3.在package.json中添加一个脚本：
![图片](../.vuepress/public/images/prepare.png)

接下来，我需要去完成一个操作：在进行commit时，执行lint脚本：
![图片](../.vuepress/public/images/pc.png)

这个时候执行git commit的时候会自动对代码进行lint校验
