# 左侧菜单的实现
## 菜单布局基础
* `5-32` 自定义菜单数据 , 模板里通过v-for循环展示菜单具体内容 , 注意**响应式**操作数据
* `34-42` 菜单切换事件 , 只会显示一种菜单的选项(其他会折叠)
```vue{5-32,34-42}
<script  lang="ts" setup>
import Icon from '@/components/Icon.vue'
import {ref} from 'vue';

interface IMenuItem  {
  title:string,
  iconName?:string,
  active?:boolean
}
interface IMenu extends IMenuItem { 
  children:IMenuItem[]
}

const menus = ref<IMenu[]>([     // 注意: 要变成响应式
  {
    title:'错误页面',
    iconName:'error',
    active:true,
    children:[
      {title:'404 页面',active:true},
      {title:'403 页面'},
    ]
  },
  {
    title:'编辑器',
    iconName:'fuwenbenbianjiqi',
    children:[
      {title:'markdown编辑器'},
      {title:'富文本编辑器'},
    ]
  }
])

const handle = (pMenu:IMenu , cMenu?:IMenuItem)=>{
  resetMenu()
  pMenu.active = true
}
const resetMenu = ()=>{
  menus.value.forEach(menu => {      // 注意:因为用的是ref , 要使用 .value !!!
    menu.active = false
  })
}
</script>

<template>
  <div class="admin">
    <div class="menu">
      <div class="logo">
        <Icon name="admin" class="admin-logo" /> Eren后台管理
      </div>
      <div class="left-container">
        <dl v-for="(menu,index) in menus" :key="index">
          <dt @click="handle(menu)">
            <section class="title">
              <Icon :name="menu.iconName" />
              <span>{{menu.title}}</span>
            </section>
            <section class="arrow">
              <Icon name="xiangxiajiantou" />
            </section>
          </dt>
          <dd v-show="menu.active" :class="{active:childMenu.active}" v-for="(childMenu,index) in menu.children" :key="index">{{childMenu.title}}</dd>
        </dl>
      </div>
    </div>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.menu {
  min-width: 220px;
  background: #283142;
  min-height: 100vh;
  white-space: nowrap;
  .logo{
    padding-top: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #f1f2f6;
    font-size: 18px;
    > svg {
      fill:#f23fce ;
      width: 2em;
      height: 2em;
      margin-right: 6px;
    }
  }
  .left-container {
    dt {
      cursor: pointer;
      padding:8px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      color:#f1f2f6;
      font-weight: bold;
      .title{
        display: flex;
        >svg {
          margin:0px  8px;
          width: 1.3em;
          height:1.3em;
        }
      }
      .arrow {
        transition: all 0.25s ease;
        &.active{
          transform: rotate(180deg);
        }
        >svg {
          margin:0  10px;
          width: 1em;
          height:1em;
        }
      }
    }
    dd{
      margin: 0 12px 10px 12px;
      padding: 12px 10px 12px 30px;
      border-radius: 6px;
      transition: all 0.25s ease;
      font-size: 14px;
      color: #f1f2f6;
      cursor: pointer;
      background: #353b48;
      &.active {
        background: #5e25de;
      }
      &:hover {
        background: #744dcc;
      }
    }
  }
}
@media (max-width:1000px) {   
  .menu{
    display: none;
  }
}
</style>
```
## 提取菜单组件
提取出菜单组件

src/layouts/admin/menu.vue
```vue
<script lang="ts" setup>
import Icon from '@/components/Icon.vue'
import {ref} from 'vue';

interface IMenuItem  {
  title:string,
  iconName?:string,
  active?:boolean
}
interface IMenu extends IMenuItem {
  children:IMenuItem[]
}

const menus =ref<IMenu[]>([     // 注意: 要变成响应式
  {
    title:'错误页面',
    iconName:'error',
    active:true,
    children:[
      {title:'404 页面',active:true},
      {title:'403 页面'},
    ]
  },
  {
    title:'编辑器',
    iconName:'fuwenbenbianjiqi',
    children:[
      {title:'markdown编辑器'},
      {title:'富文本编辑器'},
    ]
  }
])

const handle = (pMenu:IMenu , cMenu?:IMenuItem)=>{
  resetMenu()
  pMenu.active = true
}
const resetMenu = ()=>{
  menus.value.forEach(menu => {      // 注意:因为用的是ref , 要使用 .value !!!
    menu.active = false
  })
}
</script>
<template>
  <div class="menu">
    <div class="logo">
      <Icon name="admin" class="admin-logo" /> Eren后台管理
    </div>
    <div class="left-container">
      <dl v-for="(menu,index) in menus" :key="index">
        <dt @click="handle(menu)">
          <section class="title">
            <Icon :name="menu.iconName" />
            <span>{{menu.title}}</span>
          </section>
          <section class="arrow">
            <Icon name="xiangxiajiantou" />
          </section>
        </dt>
        <dd v-show="menu.active" :class="{active:childMenu.active}" v-for="(childMenu,index) in menu.children" :key="index">{{childMenu.title}}</dd>
      </dl>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.menu {
  width: 220px;
  background: #283142;
  height: 100vh;
  .logo{
    padding-top: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #f1f2f6;
    font-size: 18px;
    > svg {
      fill:#f23fce ;
      width: 2em;
      height: 2em;
      margin-right: 6px;
    }
  }
  .left-container {
    dt {
      cursor: pointer;
      padding:8px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      color:#f1f2f6;
      font-weight: bold;
      .title{
        display: flex;
        >svg {
          margin:0px  8px;
          width: 1.3em;
          height:1.3em;
        }
      }
      .arrow {
        >svg {
          margin:0  10px;
          width: 1em;
          height:1em;
        }
      }
    }
    dd{
      margin: 0 12px;
      padding: 12px 10px 12px 30px;
      border-radius: 6px;
      transition: all 0.25s ease;
      font-size: 14px;
      color: #f1f2f6;
      cursor: pointer;
      &.active {
        background: #5e25de;
      }
      &:hover {
        background: #744dcc;
      }
    }
  }
}
</style>
```

src/layouts/admin.vue
```vue{2,7}
<script lang="ts" setup>
import menuComponent from '@/layouts/admin/menu.vue';
</script>

<template>
  <div class="admin">
    <menuComponent />
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.admin {
  display: flex;
  .content{
    flex-grow: 1;
    background: #f1f2f6;
  }
}
</style>
```