# 表单验证 vee-validate

## 安装
* [vee-validate](https://vee-validate.logaretm.com/v4/guide/composition-api/validation)表单验证核心库
* [vee-validate/rules](https://vee-validate.logaretm.com/v4/guide/global-validators#vee-validaterules)验证规则
* [yup](https://github.com/jquense/yup)支持定义链式声明的验证规则

使用yarn安装扩展包
```sh
yarn add vee-validate@next @vee-validate/rules yup @vee-validate/i18n
```
## 组件方式
vee-validate提供了组件方式进行验证，加快常用表单验证的开发效率
### 基本使用
有 `Form` , `Field` , `ErrorMEssage`等组件...

* 组件`Field`中的`label`属性用于定义错误消息的表单名称
* 组件`Field`中的`rules`属性用于定义[验证规则](https://vee-validate.logaretm.com/v4/guide/global-validators#available-rules)
* 组件`Field`中的 `validate-on-input`指`input`事件时验证(但默认是失去焦点时)，其他事件要查看[事件文档](https://vee-validate.logaretm.com/v4/guide/components/validation#customizing-validation-triggers)

```vue
<script lang="ts" setup>
import { Form, Field, ErrorMessage } from 'vee-validate';
import { ref } from 'vue'
const validateEmail = (value:any) =>{
  return /@/.test(value) ? true : '邮箱格式错误'    //要 return true
}

const account  = ref<any>('')

const onSubmit = (values:any) => {
  console.log(values)   // {email: 'cuizhixian20@gmail.com'}
  alert('验证通过时执行')
}
</script>
<template>
  <Form @submit="onSubmit">
    <Field name="email" :rules="validateEmail" 
    v-model="account" label="帐号  as="input"
    placeholder="请输入您的用户名或邮箱" 
    :validate-on-input="true"/>
    <ErrorMessage name="email" />
    <hr />
    <button>提交</button>
  </Form>
</template>
```
### 插槽布局
可以使用插槽来自定义验证布局
```vue
<template>
  <Form>
    <Field name="username" :rules="validateEmail" :validate-on-input="true" #default="{ errorMessage, field }">
      <input v-bind="field" type="text" />
      <p>{{ errorMessage }}</p>
    </Field>
    <!-- <ErrorMessage name="username" /> -->
  </Form>
</template>
```
### 验证规则
使用 [@vee-validate/rules](https://vee-validate.logaretm.com/v4/guide/global-validators#available-rules)提供的验证规则进行验证，可以减少我们写验证规则
```vue{4,8,9}
<script>
import {Form, Field, ErrorMessage, defineRule, configure} from 'vee-validate';

import {required, email, min, max, confirmed, regex} from '@vee-validate/rules';   //看文档

import {ref} from 'vue';

defineRule('required', required);
defineRule('email', email);

// const validateEmail = (value:any) =>{
//   return /@/.test(value) ? true : '邮箱格式错误'    //要 return true
// }

const account = ref<any>('');
const onSubmit = (values: any) => {
  console.log(values);   // {username: 'xxxx@123.com'}
  alert('验证通过时执行');
};
</script>
<template>
  <Form @submit="onSubmit">
    <Field
        name="username"
        :rules="{required: true , email: true }"
        label="账号" :validate-on-input="true"
        #default="{ errorMessage, field }">
      <input v-bind="field" type="text" v-model="account"/>
      <p>{{ errorMessage }}</p>
      <button>提交</button>
    </Field>
    <!-- <ErrorMessage name="username" /> -->
  </Form>
</template>
```
### 批量定义验证规则
```vue{15-22,25}
<script lang="ts" setup>
import v from '@/plugins/validate'
const {Form , Field , ErrorMessage} = v

import {reactive} from 'vue';
const form = reactive({
  account:'abc',
  password:''
})

const onSubmit = (values:any)=>{
  console.log(values)
}

const schema = v.yup.object({    //可以用 yup
  account:v.yup.string().email().required().label('用户名'),  
  password:v.yup.string().required().min(3).label('密码')
})
// const schema = {     // 也可以用 rules
//   account:{required:true ,  email:true},
//   password:{required:true ,  min:3,max:10}
// }
</script>
<template>  
    <Form @submit="onSubmit" :validation-schema="schema" >  // 使用props -> :validation-schema
          <Field name="account"
                 placeholder="请输入您的邮箱"
                 label="用户名"            
                 :validate-on-input="true" class="hd-input" />  <!--Field可以不写rules了,因为是上面schema中已经定义了规则-->
          <ErrorMessage name="account" class="hd-error"/>
          <Field name="password" type="password" label="密码"
                 placeholder="请输入密码"
                  class="hd-input mt-2"
                 :validate-on-input="true" />
          <ErrorMessage name="password" class="hd-error"/>
        <button class="hd-button mt-2 " type="submit">登录</button>
        </Form>
</template>
<style lang="scss" scoped>
....
</style>
```

## 组合 API
非组件形式的JS编程方式进行表单验证
### 单独定义
useField的第一个参数是name , 第二个参数是rules , 第三个参数是options
```vue{14-17}
<script setup lang="ts">
import {configure, defineRule, useField} from 'vee-validate';  //userField
import {min , max , email , regex , required} from '@vee-validate/rules';
import {localize} from '@vee-validate/i18n';
import zh_CN from '@vee-validate/i18n/dist/locale/zh_CN.json';

defineRule('required' , required)
defineRule('email' , email)

configure({
  generateMessage: localize('zh_CN', zh_CN)
});

const {errorMessage : usernameError , value:usernameValue} = useField(
    'username',    //name
    {required:true ,email:true}, //rules
    {label:'用户名'})  //options
</script>
<template>
<div>
  <input type="text" v-model="usernameValue">
  <p>{{usernameError}}</p>
</div>
</template>
```
### 操作表单
使用 [handleSubmit](https://vee-validate.logaretm.com/v4/guide/composition-api/handling-forms)可以在验证通过时提交表单, (组件形式的话不需要这个函数)
`handleSubmit`函数接受一个接收最终表单值的回调，
```vue{14,18,29,30}
<script setup lang="ts">
import {configure, defineRule, useField , useForm} from 'vee-validate';
import {min , max , email , regex , required} from '@vee-validate/rules';
import {localize} from '@vee-validate/i18n';
import zh_CN from '@vee-validate/i18n/dist/locale/zh_CN.json';

defineRule('required' , required)
defineRule('email' , email)

configure({
  generateMessage: localize('zh_CN', zh_CN)
});

const {handleSubmit , errors} = useForm()
const {errorMessage : usernameError , value:usernameValue} = useField(
    'username',   //name
    {required:true ,email:true}, //rules
    {label:'用户名'})  //options

const onSubmit = handleSubmit((values)=>{  //用 handleSubmit 包裹
  console.log(values)
  alert('验证通过')
})
</script>
<template>
<div>
  <form @submit="onSubmit">
    <input type="text" v-model="usernameValue">
    <!--<p>{{ usernameError }}</p> -->
    <p>{{errors.username}}</p>   //在 errors 里面筛选 name
    <button type="submit">提交</button>
  </form>
</div>
```
### 批量定义验证规则
```vue{14-23,24-26,34-44}
<script setup lang="ts">
import {configure, defineRule, useField , useForm} from 'vee-validate';
import {min , max , email , regex , required} from '@vee-validate/rules';
import {localize} from '@vee-validate/i18n';
import zh_CN from '@vee-validate/i18n/dist/locale/zh_CN.json';

defineRule('required' , required)
defineRule('email' , email)

configure({
  generateMessage: localize('zh_CN', zh_CN)
});

const {handleSubmit , errors} = useForm( {
   initialValues:{   // input框的初始值
     username:'hello',
     password:''
   },
    validationSchema:{ // 验证规则
        username:{required:true ,email:true },
        password:{required:true}
    }
})
const { value:usernameValue } = useField('username', {},{label:'用户名'}) 
//验证规则在上面已经定义了, 所以 userField 的第二个参数可以为空
const { value :passwordValue} = useField('password' , {},{label:'密码'})

const onSubmit = handleSubmit((values)=>{  //用 handleSubmit 包裹
  console.log(values)
  alert('验证通过')
})
</script>
<template>
<div>
  <form @submit="onSubmit">
    <div>
      <input type="text" v-model="usernameValue">
      <p v-if="errors.username">{{errors.username}}</p>
    </div>
    <div>
      <input type="password" v-model="passwordValue">
      <p v-if="errors.password">{{errors.password}}</p>
    </div>
    <button type="submit">提交</button>
  </form>
</div>
</template>
```
## Yup
`yup`使得提示验证更灵活一些 , 当然也可以用上面的`@vee-validate/rules` , 随便选择
### 安装
```sh
yarn yup //最初(最上面)已经安装过
```
### 基本使用
```vue{6,21,22}
<script setup lang="ts">
import {configure, defineRule, useField , useForm} from 'vee-validate';
import {min , max , email , regex , required} from '@vee-validate/rules';
import {localize} from '@vee-validate/i18n';
import zh_CN from '@vee-validate/i18n/dist/locale/zh_CN.json';
import  * as yup from 'yup'

defineRule('required' , required)
defineRule('email' , email)

configure({
  generateMessage: localize('zh_CN', zh_CN)
});

const {handleSubmit , errors} = useForm( {
   initialValues:{  //初始值
     username:'hello',
     password:''
   },
    validationSchema:{ 
        username:yup.string().email('邮箱格式错误').required('用户名不饿能为空') , //链式调用
        password:yup.string().required('密码不嫩恶搞为空')
    }
})
const { value:usernameValue } = useField('username', {},{label:'用户名'})
const { value :passwordValue} = useField('password' , {},{label:'密码'})

const onSubmit = handleSubmit((values)=>{  //用 handleSubmit 包裹
  console.log(values)
  alert('验证通过')
})
</script>
<template>
<div>
  <form @submit="onSubmit">
    <div>
      <input type="text" v-model="usernameValue">
      <p v-if="errors.username">{{errors.username}}</p>
    </div>
    <div>
      <input type="password" v-model="passwordValue">
      <p v-if="errors.password">{{errors.password}}</p>
    </div>
    <button type="submit">提交</button>
  </form>
</div>
</template>
```
## 中文消息
使用 [@vee-validate/i18n](https://vee-validate.logaretm.com/v4/guide/i18n)实现中文验证消息
```vue{2,4,6-7,14-16}
<script lang="ts" setup>
import {Form, Field, ErrorMessage, defineRule, configure} from 'vee-validate'; 

import {required, email, min, max, confirmed, regex} from '@vee-validate/rules';   //看文档

import {localize} from '@vee-validate/i18n';
import zh_CN from '@vee-validate/i18n/dist/locale/zh_CN.json';

import {ref} from 'vue';

defineRule('required', required);
defineRule('email', email);

configure({
  generateMessage: localize('zh_CN', zh_CN)
});

// const validateEmail = (value:any) =>{
//   return /@/.test(value) ? true : '邮箱格式错误'    //要 return true
// }
const account = ref<any>('');
const onSubmit = (values: any) => {
  console.log(values);   // {username: 'xxxx@123.com'}
  alert('验证通过时执行');
};

</script>
<template>
  <Form @submit="onSubmit">
    <Field
        name="username"
        :rules="{required: true , email: true }"
        label="账号" :validate-on-input="true"
        #default="{ errorMessage, field }">
      <input v-bind="field" type="text" v-model="account"/>
      <p>{{ errorMessage }}</p>
      <button>提交</button>
    </Field>
    <!-- <ErrorMessage name="username" /> -->
  </Form>
</template>
```
为了节省打包文件大小，语言包也可以使用网络加载
```js
...
// import zh_CN from '@vee-validate/i18n/dist/locale/zh_CN.json'
loadLocaleFromURL('https://unpkg.com/@vee-validate/i18n@4.1.0/dist/locale/zh_CN.json');

configure({
	generateMessage: localize('zh_CN'),
});
...
```
## 业务封装
每次 import 一大堆特别麻烦 , 所以将公共的业务提取出来
### 文件结构
```
src/plugins
├── validate
│   ├── index.ts
│   └── yup.ts
```
###  index.ts
```ts
import yup from './yup'
import * as veeValidate from 'vee-validate';  // * as
import rules from '@vee-validate/rules'
import { defineRule } from 'vee-validate'
import { localize , loadLocaleFromURL } from '@vee-validate/i18n';
// import zh_CN from '@vee-validate/i18n/dist/locale/zh_CN.json'
loadLocaleFromURL('https://unpkg.com/@vee-validate/i18n@4.1.0/dist/locale/zh_CN.json'); 

//中文消息定义
veeValidate.configure({
  validateOnInput:true,    //全局设定输入时验证
  generateMessage: localize('zh_CN')  //中文
});

//批量定义规则
Object.keys(rules).forEach((key) => {
  defineRule(key, rules[key])            // 比如 defineRule('required' , required)...
}) 

//合并导出
const modules = { yup, ...veeValidate }

export default modules
```
### yup.ts
```ts
//定义中文提示信息
yup.setLocale({
	mixed: {   // 通用的
		required: '${label}不能为空'
	},
	string: {
		email: '邮箱格式错误',
		min: '${label}不能少于 ${min} 位',
		max: '不能大于 ${max} 位'
	},
	number: {
		min: '${label}}不能少于 ${min} ',
		max: '不能大于 ${max} '
	}
});
```
### 实际应用
```vue {15,16}
<script>
// import {configure, defineRule, useField , useForm} from 'vee-validate';
// import {min , max , email , regex , required} from '@vee-validate/rules';
// import {localize} from '@vee-validate/i18n';
// import zh_CN from '@vee-validate/i18n/dist/locale/zh_CN.json';
// import  * as yup from 'yup'

// defineRule('required' , required)
// defineRule('email' , email)
//
// configure({
//   generateMessage: localize('zh_CN', zh_CN)
// });

import v from '@/plugins/validate'
const {yup , useForm , useField} = v

const {handleSubmit , errors} = useForm( {
   initialValues:{  //初始值
     username:'hello',
     password:''
   },
    validationSchema:{
        username:yup.string().email().required().label('用户名') , //看yup.ts, label 会成为占位符
        password:yup.string().required().label('密码')
    }
})
const { value:usernameValue } = useField('username', {},{label:'用户名'})
const { value :passwordValue} = useField('password' , {},{label:'密码'})

const onSubmit = handleSubmit((values)=>{  //用 handleSubmit 包裹
  console.log(values)
  alert('验证通过')
})
</script>
<template>
<div>
  <form @submit="onSubmit">
    <div>
      <input type="text" v-model="usernameValue">
      <p v-if="errors.username">{{errors.username}}</p>
    </div>
    <div>
      <input type="password" v-model="passwordValue">
      <p v-if="errors.password">{{errors.password}}</p>
    </div>
    <button type="submit">提交</button>
  </form>
</div>
</template>
```
