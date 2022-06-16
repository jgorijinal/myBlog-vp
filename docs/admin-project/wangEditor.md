# wangEditor  富文本编辑器
国产的富文本编辑器[wangEditor 4](https://www.wangeditor.com/v4/pages/01-%E5%BC%80%E5%A7%8B%E4%BD%BF%E7%94%A8/01-%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8.html)

* CDN引入
```
  <script src="https://cdn.jsdelivr.net/npm/wangeditor@latest/dist/wangEditor.min.js"></script>
```
## 基本配置
```
components/wangEditor
|--editor.vue
|--wangEditor.ts
```
wangEditor.ts
```ts
export default  class  {
  constructor(el:string) {
    const editor = new wangEditor(el)
    editor.create()
  }
}
```
typings.d.ts
```ts
declare class wangEditor {
  constructor(el:string)
  create:()=>void
}
```
editor.vue
```vue
<script setup lang="ts">
import wangEditor from './wangEditor';
import {nextTick} from 'vue';

nextTick(()=>{
  new wangEditor('#editor')
})
</script>

<template>
 <div id="editor">
   <p>欢迎</p>
 </div>
</template>
<style lang="scss" scoped>
#editor {
  background: white;
}
</style>
```
## 编辑器props设置高度
editor.vue
```vue
<script setup lang="ts">
import wangEditor from './wangEditor';
import {nextTick} from 'vue';

interface Props {
  height?:number
}
const props = withDefaults(defineProps<Props>(), {
  height:500
})

nextTick(()=>{
  new wangEditor('#editor', props)
})
</script>

<template>
 <div id="editor" style="height: 600px;">
   <p>欢迎</p>
 </div>
</template>
<style lang="scss" scoped>
#editor {
  background: white;
}
</style>
```
wangEditor.ts
```ts
export default  class  {
  editor:wangEditor
  constructor(el:string, config:{[keys:string]:any}) {
    this.editor = new wangEditor(el)
    this.editor.config.height = config.height
    this.editor.create()
  }
}
```
typings.d.ts
```ts
declare class wangEditor {
  constructor(el:string)
  create:()=>void
  config:{[key:string]:any}
}
```
## 绑定数据及父组件数据同步
`v-model` 传递数据

views/editor/base.vue 
```vue
<script setup lang="ts">
import Editor from '@/components/wangEditor/editor.vue'
import {ref} from 'vue';

const content = ref('请输入内容')
</script>
<template>
  <div>
    <Editor v-model="content" :height="500" />     
    {{content}}
  </div>
</template>
<style lang="scss" scoped>
</style>
```
* 绑定数据 : 使用外部传的`modelValue`设置文本的初始内容 , 需要看文档找(设置内容)方法
* 父组件数据同步 : 每个编辑器都有自己的**`change`函数** , `wangEditor`使用的是`onchange`回调函数 , 配合`emit`实现了数据同步

components/wangEditor/editor.vue
```vue
<script setup lang="ts">
import wangEditor from './wangEditor';
import {nextTick} from 'vue';

interface Props {
  height?:number,
  modelValue?:string
}
const props = withDefaults(defineProps<Props>(), {
  height:500
})
const emit = defineEmits(['update:modelValue'])

nextTick(()=>{
  new wangEditor('#editor',(newHtml:string)=>{       // 第二个参数传了callback回调
    emit('update:modelValue',newHtml)
  }, props)
})
</script>

<template>
 <div id="editor"></div>
</template>
<style lang="scss" scoped>
#editor {
  background: white;
}
</style>
```
细节需要看文档 , 比如:初始化顺序...

components/wangEditor/wangEditor.ts 
```ts
export default  class  {
  editor:wangEditor
  constructor(el:string,callback:(newHtml:string)=>void, config:{[keys:string]:any}) {  // 第二个参数回调
    this.editor = new wangEditor(el)
    this.editor.config.height = config.height
    this.editor.config.onchange = callback
    this.editor.create()

    this.editor.txt.html(config.modelValue)      // 通过 modelValue 设置内容
  }
}
```
typings.d.ts   ts类性
```ts 
declare class wangEditor {
  constructor(el: string)

  create: () => void
  config: { [key: string]: any }
  txt: { [key: string]: any }
}
```
## 自定义图片上传
editor.vue
```vue{8,12}
<script setup lang="ts">
import wangEditor from './wangEditor';
import {nextTick} from 'vue';

interface Props {
  height?:number,
  modelValue?:string,
  uploadImgServer?:string
}
const props = withDefaults(defineProps<Props>(), {
  height:500,
  uploadImgServer:'/api/upload/image'
})
const emit = defineEmits(['update:modelValue'])

nextTick(()=>{
  new wangEditor('#editor',(newHtml:string)=>{
    emit('update:modelValue',newHtml)
  }, props)
})
</script>

<template>
 <div id="editor"></div>
</template>
<style lang="scss" scoped>
#editor {
  background: white;
}
</style>
```
wangEditor.ts
```ts{7,8,13-19}
export default  class  {
  editor:wangEditor
  constructor(el:string,callback:(newHtml:string)=>void, config:{[keys:string]:any}) {
    this.editor = new wangEditor(el)
    this.editor.config.height = config.height
    this.editor.config.onchange = callback
    this.editor.config.uploadImgServer = config.uploadImgServer
    this.editor.config.uploadImgHooks = this.uploadImage()
    this.editor.create()
    this.editor.txt.html(config.modelValue)
  }

  private uploadImage(){
    return {
      customInsert(insertImgFn:Function, result:any) {
        insertImgFn(result.result.url)
      }
    }
  }
}
```
typings.d.ts
```ts
declare class wangEditor {
  constructor(el: string)

  create: () => void
  config: { [key: string]: any }
  txt: { [key: string]: any }
  uploadImgServer: () => void
  uploadImgHooks:()=>void
}
```