# Vue 插件 
![图片](../.vuepress/public/images/chajian.png)
```
plugins
|-- plugins_obj.js
|-- plugins_fn.js
...
```
main.js 
```
app.use(xxx)
```
* 1. **对象类型: 必须包含 install 方法**

![图片](../.vuepress/public/images/plugin1.png)

**直接 this.$xxx 拿到** 或者 在setup函数里  
![图片](../.vuepress/public/images/品.png)

* 2. **函数类型**

![图片](../.vuepress/public/images/pf.png)
