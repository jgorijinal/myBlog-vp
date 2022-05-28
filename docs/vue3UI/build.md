# 部署
* 如果有 `dist` 目录，则删除 `dist` 目录
* 在 `.gitignore` 添加一行 `/dist` 然后提交代码
* 运行` yarn build` 创建出最新的 `dist`
* 运行 hs dist 在本地测试网站是否成功运行 http-server dist -c-1
```sh
npm i -g http-server
http-server dist -c-1
```

## 设置 build path
在 `vite.config.js` 中设置正确的 `base` 

* 如果你要部署在 `https://<USERNAME>.github.io/` 上，你可以省略 `base` 使其默认为 `'/'`

* 如果你要部署在 `https://<USERNAME>.github.io/<REPO>/` 上，例如你的仓库地址为 `https://github.com/<USERNAME>/<REPO>`，那么请设置 `base` 为 `'/<REPO>/'`

简单可以写成 `{base:'./' , ....}`
```ts
... 
export default {
  base:'./',              //加这两句 , 因为中间要有仓库名, 加点会用相对的路径
  assetsDir:'assets',     //加这两句  github不支持下划线 _asset , 所以改成assets
  plugins: [md()],
  vueCustomBlockTransforms: {
      demo: (options) => {
          const { code, path } = options
          const file = fs.readFileSync(path).toString()
          const parsed = baseParse(file).children.find(n => n.tag === 'demo')
          const title = parsed.children[0].content
          const main = file.split(parsed.loc.source).join('').trim()
          return `export default function (Component) {
      Component.__sourceCode = ${
            JSON.stringify(main)
          }
      Component.__sourceCodeTitle = ${JSON.stringify(title)}
    }`.trim()
      }
  }
};
```
## 部署
* 新建仓库
* 部署到 GitHub
```sh
cd dist
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:jgorijinal/vue3-ui-website.git
git push -f -u origin main
cd ..
```

## 一键部署
deploy.sh:
```sh
rm -rf dist
yarn build
cd dist
git init
git add .
git commit -m 'first commit'
git branch -M main
git remote add origin git@github.com:jgorijinal/vue3-ui-website.git
git push -f -u origin main
cd -
echo https://jgorijinal.github.io/vue3-ui-website/#/
```
运行时 `sh deploy.sh`


