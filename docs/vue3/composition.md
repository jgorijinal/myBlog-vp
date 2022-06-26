# Composition API
[官网](https://staging-cn.vuejs.org/api/composition-api-setup.html#basic-usage)
## 1. 为什么⽤ Composition API

Options API的弊端:
* Vue2中**编写组件的方式是OPtions API**
1. OPtions API的最大的特点就是在**对应的属性**中编写**对应的功能模块**
2. 比如**data定义数据**, **methods中定义方法**, **computed中定义计算属性**, **watch中监听属性的改变**, 也包括**生命钩子函数**
* 但这种代码有一个很大的弊端
1. 当我们**实现某一个功能时**, 这个功能**对应的代码逻辑**会被**拆分到各个属性**中
2. 当组件**变得更大、更复杂时**, **逻辑关注点的列表**就会增长, 那么同一个功能的逻辑就会被拆分地很分散, 这些代码难以阅读和理解

<!-- 
- 所有逻辑放⼊`setup`函数,第⼀个参数是 `props` 对象
- 通过 `ref` 、`reactive` 、`toRef`来创建响应式数据
- 视图要⽤的变量为 setup 函数返回到对象属性
- `watch`、`computed`是个函数
- ⽣命周期钩⼦写法微调,xyz 变成 OnXyz,如 `mounted` 变成 `onMounted`。`created`和 `beforeCreate`不再需要 -->





