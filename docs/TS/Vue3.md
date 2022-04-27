# TS 与 Vue 结合

## 封装fetch请求

src/composables/useApi.ts

```ts
import { ref } from "vue";

export default async <T>( url: RequestInfo,  options: RequestInit = { method: "GET" }) => {//使用泛型复用
  const response = ref<T>();     // 响应式数据
  const request = async () => {  //封装成函数形态 , 要在外面调用
    response.value = await fetch(url).then((r) => r.json());
  };

  return { response, request };
};
```

src/apis/articles.ts 文章请求模块

```ts
import useApi from "../composables/useApi";

const host = "http://127.0.0.1:3000";
export type Article = {
  id: number;
  title: string;
  author: string;
};

export const getAll = async () => { //获取全部文章
  const { response, request } = await useApi<Article[]>(`${host}/posts`);
  await request();
  return { response };
};
export const find = async (id: number) => { //获取一个文章
  const { response, request } = await useApi<Article>(`${host}/articles/${id}`);
  await request();
  return { response };
};
```
在模板使用
```vue
<script lang="ts" setup>
import { getAll } from "../apis/articles";

const { response } = await getAll();
</script>

<template>
  <div v-for="article of response" :key="article.id">{{ article.title }}</div>
</template>
<style lang="scss" scoped>
</style>
```
