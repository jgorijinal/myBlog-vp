# 动画列表组件
## 文章列表的mock数据
mock/article.ts 
```ts{13-19}
import {MockMethod} from 'vite-plugin-mock';
import {Random} from 'mockjs';

export default [
  {
    url: '/api/article',
    method: 'get',
    response: ({ query }) => {
      return {
        code: 200,
        message: '请求成功',
        type: 'success',
        result: new Array(30).fill().map((article,index) => {
          return {
            id:index,
            title:Random.ctitle(),
            content:Random.cparagraph()
          }
        })
      }
    }
  },
] as MockMethod[];
//http://localhost:3000/api/article 测试数据
```
## 列表删除动画效果
`TransitionGroup`的使用

article.vue
```vue{31-31,37-39}
<script setup lang="ts">
import {article} from '@/apis/articleApi';
import {ref} from 'vue';

const  { result } = await article()
const articles = ref(result)

const del = (index:number)=>{
  articles.value.splice(index, 1)
}
</script>
<template>
  <div>
    <TransitionGroup tag="ul"  name="animate">
      <li v-for="(article,index) in articles" :key="article.id" @click="del(index)">{{article.title}}</li>
    </TransitionGroup>
  </div>
</template>
<style lang="scss" scoped>
ul {
  position: relative;
  li {
    padding: 10px;
    background: #6c5ce7;
    margin: 0 10px 10px 10px;
    color: white;
  }
}
.animate-leave-active {
  transition:all 0.25s ease;
  position: absolute;
  width: 100%;
}
.animate-leave-to {
  opacity: 0;
}
.animate-move {
  transition: all 0.25s ease;
}
</style>
```
## 使用钩子函数和gsap控制动画
`Transition`钩子函数的`gsap`的使用 

```sh
npm install gsap
```
```vue
<script setup lang="ts">
import {article} from '@/apis/articleApi';
import {ref} from 'vue';
import gsap from 'gsap';

const articles = ref();

article().then(({result}) => {   // 为了 transition钩子函数的触发 , 不能使用顶层await , 而是使用then
  articles.value = result;
});

const del = (index: number) => {
  articles.value.splice(index, 1);
};

const onBeforeEnter = (el) => {
  gsap.set(el, {                     // 首先 set
    opacity: 0
  });
};
const onEnter = (el , done)=>{
  gsap.to(el , {                   // 再 to
    opacity:1,
    duration:0.6,
    delay:el.dataset.index * 0.15, 
    onComplete:done
  })
}
</script>
<template>
  <div>
    <TransitionGroup tag="ul" name="animate"
                     appear
                     @before-enter="onBeforeEnter"
                     @enter="onEnter">
      <li v-for="(article,index) in articles" :key="article.id" @click="del(index)"
       :data-index="index">{{ article.title }}</li>              <!--:data-index -->  
    </TransitionGroup>
  </div>
</template>
<style lang="scss" scoped>
ul {
  position: relative;
  li {
    padding: 10px;
    background: #6c5ce7;
    margin: 0 10px 10px 10px;
    color: white;
  }
}
.animate-leave-active {
  transition: all 0.25s ease;
  position: absolute;
  width: 100%;
}
.animate-leave-to {
  opacity: 0;
}

.animate-move {
  transition: all 0.25s ease;
}
</style>
```

## 封装(列表动画)组件
* 声明的 props 有 `TransitionGroup`的tag , gsap的`duration` , gsap 的`delay`延迟
* 使用了 `slot` 让用户把`v-for`遍历的列表代码传进来

components/animateList.vue
```vue{34}
<script setup lang="ts">
import gsap from 'gsap';

interface Props {
  tag?:string,
  duration?:number,
  delay?:number
}
const props = withDefaults(defineProps<Props>() , {
  tag:'ul',
  duration:0.6,
  delay:0.15
})
const onBeforeEnter = (el) => {
  gsap.set(el, {
    opacity: 0
  });
};
const onEnter = (el , done)=>{
  gsap.to(el , {
    opacity:1,
    duration:props.duration,
    delay:el.dataset.index * props.delay,
    onComplete:done
  })
}
</script>
<template>
  <div class="animateList">
    <TransitionGroup :tag="props.tag" name="animate"
                     appear
                     @before-enter="onBeforeEnter"
                     @enter="onEnter">
        <slot />                    <!-- 使用了 slot 插槽 , 让用户把关键列表模板传进来 -->
    </TransitionGroup>
  </div>
</template>
<style lang="scss" scoped>
.animateList {
  position: relative;
}
.animate-leave-active {
  transition: all 0.25s ease;
  position: absolute;
  width: 100%;
}
.animate-leave-to {
  opacity: 0;
}

.animate-move {
  transition: all 0.25s ease;
}
</style>
```

在外部使用此组件时, 有个细节

不能使用顶层`await`语法 , 此语法不触发`transition`的钩子函数 , 所以用promise的`then`语法代替了`await` , 
然后在`then`的回调里面往响应式数据里赋值
```vue
<script setup lang="ts">
import {article} from '@/apis/articleApi';
import AnimateList from '@/components/animateList.vue';
import {ref} from 'vue';

const articles = ref();

article().then(({result}) => {   // 为了transition钩子函数 , 不能使用顶层await , 而是要使用 then
  articles.value = result;
});

</script>
<template>
  <AnimateList :duration="0.4" :delay="0.15" tag="ul">   <!--props 传值-->>
    <li v-for="(article,index) in articles" :key="article.id" :data-index="index">{{ article.title }}</li>
  </AnimateList>
</template>
<style lang="scss" scoped>
li {
  padding: 10px;
  background: #6c5ce7;
  margin: 0 10px 10px 10px;
  color: white;
}
</style>
```

