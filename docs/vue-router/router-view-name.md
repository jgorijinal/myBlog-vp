# `<router-view>`的命名视图
想同时展示多个视图, 并且每个试图展示不同的组件, 可以使用命名视图

`<router-view>`可以设置`name`属性, **默认值**："default"
* 如果 `<router-view>` 设置了 `name`，则会渲染对应的路由配置中 `components `下的相应组件。

```html
<router-view class="view one">default</router-view>
<router-view class="view two" name="a">A</router-view>
<router-view class="view three" name="b">B</router-view>
```
或者 根据不同的情况
```html
<router-view  name="a" v-slot="{Component}">
  <component :is="Component ? Component : OtherComponent ">   <!--路由配置名为a的组件存在的话就展示a , 不然就展示其他的组件 -->
</router-view>
```
初始路由配置:
```js{5-8}
const router = new VueRouter({
  routes: [
    {
      path: '/',
      components: {   //注意: 这里是components , 不是component
        default: Foo, //默认为 default
        a: Bar,
        b: Baz
      }
    }
  ]
})
```