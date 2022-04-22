# 断言
## enum枚举
* 不设置值时，值以0开始递增
```ts
enum SexType {
  BOY,   //0
  GIRL   //1
}
const user = {
  name:'frank',
  sex:SexType.GIRL
}
console.log(user) //{ name: 'frank', sex: 1 }
```
当某个字段设置数值类型的值后，后面的在它基础上递增
```ts
enum SexType {
  BOY=5,  
  GIRL
}

const user = {
  name:'frank',
  sex:SexType.GIRL
}
console.log(user) //{ name: 'frank', sex: 6 }
```
可以将值设置为其他类型
```ts
enum SexType {
  BOY='男',
  GIRL='女'
}

const user = {
  name:'frank',
  sex:SexType.GIRL
}
console.log(user) //{ name: 'frank', sex: '女' }
```
## as断言