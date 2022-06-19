# 各种优化
## 修复动画切换时渲染错误
使用`Transition`的过渡模式 `mode` , 先出后进
```html
<Transition mode="out-in">
  ...
</Transition> 
```

## IconPark 图标
[图标库](https://iconpark.oceanengine.com/official),[Vue3版本的安装](https://www.npmjs.com/package/@icon-park/vue-next)

老方法导入

plugins/iconpark/index.ts
```ts
import {App} from 'vue';
import {install} from '@icon-park/vue-next/es/all';
import '@icon-park/vue-next/styles/index.css';

export function setupIconPark(app:App){
  install(app)             
}
```
plugins/index.ts
```ts{12}
import {App} from 'vue';
import {setupTailwindcss} from '@/plugins/tailwindcss';
import _ from 'lodash'
import setupElementPlus from '@/plugins/elementui';
import setupPinia from '@/plugins/store';
import {setupIconPark} from '@/plugins/iconpark';
export function setupPlugins(app:App) {
  setupTailwindcss()
  setupElementPlus(app)
  autoRegisterComponent(app)
  setupPinia(app)
  setupIconPark(app)
}

```
## 优化路由守卫
router/guard.ts
```ts{15,16}
import {RouteLocationNormalized, Router} from 'vue-router';
import store, {IData} from '@/utils/store';

import {CacheEnum} from '@/enum/cacheEnum';

class Guard {
  private router: Router;

  constructor(router: Router) {
    this.router = router;
  }

  public run() {
    this.router.beforeEach((to: RouteLocationNormalized, from: RouteLocationNormalized) => {
      if(to.meta.auth && !this.token()) return {name:'login'}
      if(to.meta.guest && this.token()) return from
    });
  }
  //获取token
  private token(): IData | null {
    return store.get(CacheEnum.TOKEN_NAME);
  }
}

export default (router: Router) => {
  new Guard(router).run();
}
```

