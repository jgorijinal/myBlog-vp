# Mixin 和 extends
**组件组件之间有时候会有相同的代码逻辑**, 所以可以对**相同的代码逻辑进行抽取**

Vue2和Vue3中都支持的一种方式就是**使用`Mixin`来完成**
* Mixin提供了一种非常灵活的方式, 来**分发Vue组件中可复用的功能**
* 一个Mixin对象可以包含**任何组件选项**
* 当组件使用Mixin对象时, 所有**Mixin对象的选项被混入进入该组件本身的选项中**

## Mixin基本使用
```
mixins
|--demoMixin.js
```
demoMixin.js
```js
export const demoMixin = {
    data(){
        return {
            message:'mixin'
        }
    },
    created(){
        console.log(1)
    }
}
```
任意组件内部:
```vue
<script>
import {demoMixin} from "./mixins/demoMixins";

export default {
 mixins:[demoMixin]
}
</script>
```
## Mixin的合并规则
**如果Mixin对象中的选项和组件对象中的选项发生了冲突, Vue会如何操作?**

这里**分成不同情况**来讨论
1. **如果是data函数的返回值对象**
* 返回值对象默认情况下会**进行合并**
* 如果data返回值发生了冲突, 那么会**保留组件自身的数据**
2. **如果是生命周期钩子函数**
* 生命周期钩子函数**会被合并到数组**当中, 都会被调用
3. **值为对象的选项, 例如methods, components, directives, 将被合并为同一个对象**
* 比如都有 **methods 选项**, 并且都定义了方法, 那么**它们都会被调用**
* 但是如果**对象的key相同**, 那么会**取组件对象的键值对**

## 全局混入 Mixin
如果组件中的某些选项, 是所有组件都需要拥有的, 那么这个时候可以用**全局Mixin**
* 可以用**应用App方法mixin**来完成注册
* 一旦注册, 那么**全局混入的选项将会影响到每一个组件**

main.js
```js
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.mixin({
    data(){
        return {
            message:'全局引入的Mixin'
        }
    },
    created() {
        console.log('全局引入的Mixin')
    }
})

app.mount('#app')
```
## extends(用得少)
* 允许声明扩展另外一个组件, **类似Mixins**
使一个组件可以**继承另一个组件的组件选项**
```vue
<script>
import basePage from '/basePage.vue'
export default {
  extends:basePage
}
</script>
```




