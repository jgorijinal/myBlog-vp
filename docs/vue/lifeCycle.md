# Vue中的生命周期
## 一 . 生命周期有哪些
Vue生命周期总共可以分为8个阶段：
`beforeCreate` , `created` , `beforeMount` , `mounted` , `beforeUpdate` , `updated` , `beforeDestroy` , `destroyed` 
以及一些特殊场景的生命周期`activated` , `deactivated`

|生命周期        |描述           |
| ------------- |:-------------:|
|beforeCreate|组件实例被创建之初|
|created|	组件实例已经完全创建|
|beforeMount|	组件挂载之前|
|mounted|	组件挂载到实例上去之后|
|beforeUpdate	|组件数据发生变化，更新之前|
|updated|	组件数据更新之后|
|beforeDestroy|	组件实例销毁之前|
|destroyed	|组件实例销毁之后|
|activated	|keep-alive 缓存的组件激活时|
|deactivated	|keep-alive 缓存的组件停用时调用|

## 二 . 生命周期具体分析

**beforeCreate -> created**

* 初始化`vue`实例，进行数据观测

**created**

* 完成数据观测，属性与方法的运算，`watch`、`event`事件回调的配置
* 可调用`methods`中的方法，访问和修改`data`数据触发响应式渲染`dom`，可通过`computed`和`watch`完成数据计算
* 此时`vm.$el` 并没有被创建

**created -> beforeMount**

* 判断是否存在`el`选项，若不存在则停止编译，直到调用`vm.$mount(el)`才会继续编译
* `vm.el`获取到的是挂载`DOM`的

**beforeMount**

* 在此阶段可获取到`vm.el`
* 此阶段`vm.el`虽已完成`DOM`初始化，但并未挂载在`el`选项上

**beforeMount -> mounted**

* **此阶段`vm.el`完成挂载**，`vm.$el`生成的`DOM`替换了`el`选项所对应的DOM

**mounted**

* `vm.el`已完成`DOM`的挂载与渲染，此刻打印`vm.$el`，发现之前的挂载点及内容已被替换成新的`DOM`
*  **注意 `mounted` **不会**保证所有的子组件也都被挂载完成。如果希望等到整个视图都渲染完毕再执行某些操作，可以在 `mounted` 内部使用 `vm.$nextTick`**
* **数据请求**可以在`mounted`钩子做

**beforeUpdate**

* 此时`view`层还未更新
* 若在`beforeUpdate`中再次修改数据，不会再次触发更新方法

**updated**

* 完成`view`层的更新
* 若在`updated`中再次修改数据，会再次触发更新方法（`beforeUpdate`、`updated`）

**beforeDestroy**

* 实例被销毁前调用，此时实例属性与方法仍可访问

**destroyed**

* 完全销毁一个实例。可清理它与其它实例的连接，解绑它的全部指令及事件监听器
* 并不能清除`DOM`，仅仅销毁实例

**使用场景分析**

|生命周期        |描述           |
| ------------- |:-------------:|
|beforeCreate	|执行时组件实例还**未创建**，通常用于插件开发中执行一些**初始化任务**|
|created	|组件**初始化完毕**，各种数据可以使用|
|beforeMount|	未执行渲染、更新，**dom未创建**|
|mounted|	初始化结束，**dom已创建**，可用于**获取访问数据和dom元素**|
|beforeUpdate|	**更新前**，可用于获取更新前各种状态|
|updated|	**更新后**，所有状态已是最新|
|beforeDestroy|	销毁前，可用于一些定时器或订阅的**取消**|
|destroyed|	组件**已销毁**，作用同上|