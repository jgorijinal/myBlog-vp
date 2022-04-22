# 基础类型

## 类型推断
### 数组
类型推断会表示数组内容值为字符串
```ts
const hd = ["hello", "hi"]; //const hd: string[]

hd.push(100); //因为类型不允许，所以报错
```
会推断数组允许的值为字符串或数值或布尔值

```ts
let array = ["hello", 2, true]; //let array: (string | number | boolean)[]

array.push(2); //数组允许数值、字符串类型，所以编译通过
array.push("bye");
```
### 对象
```ts
const user = {
  name: "frank",
  age: 18,
  visible: true,
  lessons: [{ title: "js" }, { title: "vue" }],
};
user.lessons.push({ title: "css" });
```
类型推断结果为
```
const user: {
  name: string,
  age: number,
  visible: boolean,
  lessons:{ title: string }[]
}
```
## 基本类型
除了上面的类型自动推断外，还是要明确设置变量类型
### 数组
```ts
let array:string[]
array = []
array.push('hi')
```
还可以用泛型
```ts
let array:Array<string> = []
array.push('hi')
```
### 对象
对象类型但不限制值类型
```ts
let user1:object
user1 = []
user1 = {}
user1 = function (){}
```
限定对象值类型 ,属性后面加`?`,这样的属性是非必填项
```ts
let user1:{name:string , age:number , url?:string}
user1 ={name:'frank', age:18}
```
### 元组
明确数组每个成员值类型的数组为元组
```ts
let x: [string, number, boolean]
x = ['frank', 2090, true]
console.log(x);
```
### any

使用 any 指包含所有值的顶部类型，所以any不进行类型检查，等于关闭了 TS 对该变量的严格类型校验

* 使用any 类型等同于使用纯 JavaScript 的开发方式
* any 类型是**顶部类型**，所有其他类型是他的子类型
* 使用any类型将**失去** typescript 静态类型的强制检测
* 只有在描述一个根本不知道的类型时使用 any

any 太过宽泛所以**不建议使用**，他会丢失 TS 的严格类型校验，
### unknown
unknown 类型也是顶部类型这与 any 一样

* unknown 用于表示未知的类型

* 与 any 的区别是 any 不进行 TS 校验，unknown 类型要安全得多，会进行 TS 的类型检查

* 使用 unknown 类型时一般需要 **as 类型断言**来转换类型

unknown **赋值时要求明确类型**

```ts
let a:unknown  = 'frank'
let b:any = 'frank'

let c:string = a  //报错  Type 'unknown' is not assignable to type 'string'.
let d:string = b  //不报错
```
上面的 unknown 类型需要明确类型后赋值
```ts
let b:string = a as string
```
**借助 unknown 转换类型**
```ts
let a:string = 'frank'
let b:number = a //报错
```
这里需要使用 unknown 做个中间层转换
```ts
let a:string = 'frank'
let b:number = a as unknown as number  //不报错
```
### void
void类型的值为 null 或 undefined，常用于对函数返回值类型定义
* 严格模式下只能是 undefined
* 如果函数没有返回值请使用 void 类型，这会使用代码更易读，并可对不小心造成的函数返回内容进行校验
* 也可以将 void理解为对返回 null 或 undefined的函数返回值声明

注意: void 类型的值可以是 null 或 undefined，但如果 TS 配置开启了 `strict` 或 `strictNullChecks` 则*不允许* void 为null
```ts
let a: void = undefined;
let b:void = null;    //严格模式下void不允许是null
```
通常用于函数的返回值是null
```ts
function run():void {
  return 123   //报错 Type 'number' is not assignable to type 'void'.
}
```
### never
相比其他类型来讲 never 使用的机会相对较少。

函数返回值使用never与 void 的区别是

* void 是有null 或 undefined 值的
* never 是永远不会结束的函数，所以也不会有返回值
```ts
function run():never {
  throw new Error('类型错误')   //抛出异常,函数不会执行到最后
}  
```
### null & undefined
null 与 undefined 也是对变量类型，用于定义值为 null 或 undefined

## 函数
### 函数参数的声明
如果参数是可选的，使用 `?` 修饰
* 下面的ratio 参数可以不传
* 不传时ratio 值为 undefined
```ts
function sum(a:number , b:number , ratio?:number){
  ratio = ratio || 0.6
  return (a + b) * ratio
}
```
但如果参数有默认值了 , 那不需要用`?`修饰
```ts
function sum(a:number , b:number , ratio:number = 0.6){
  return (a + b) * ratio
}
```
### 返回值的类型
系统自动推算返回值类型
```ts
function sum(a:number , b:number ){
  return a + b
}
//function sum(a: number, b: number):  number
```
可以明确指定返回值的类型
```ts
function sum(a: number, b: number): string {
    return `计算结果是：${a + b}`;
}
console.log(sum(3, 3));
```
在箭头函数里面
```ts
let sum = (a: number, b: number): string => `计算结果是：${a + b}`
```
当函数没有明确返回值时，最好明确使用 void 类型。
```ts
function run():void {
  console.log('没有返回值 , 最好明确使用void')
}
```
### 使用 type 对函数参数声明
```ts
let addUser = (user:{name:string , age:number}):void =>{
   console.log('添加用户')
}
let updateUser = (user:{name:string , age:number}):void =>{
  console.log('更新用户')
}
updateUser({name:'frank' , age:18})
```
可以使用 type 对参数对象进行声明，通过这种复用的手段可以很好的优化代码
```ts{1-4}
type UserType = {
  name: string,
  age: number
}
let addUser = (user: UserType): void => {
  console.log('添加用户');
};
let updateUser = (user: UserType): void => {
  console.log('更新用户');
};
updateUser({name: 'frank', age: 18});
```
### 函数结构定义
* 没有返回值的函数的定义
```ts
let fn:() => void
fn = () => {
  console.log('hi')
}
```
* 普通函数的定义 , 在具体实现函数时参数可以为任何名称
```ts
let  sum: (a:number , b:number) => number

sum = (x:number , y:number):number => {
  return x + y
}
```
也可以直接声明函数时定义
```ts
let  sum:(a:number , b:number) => number = (x:number , y:number):number => x+ y
```
* 参数为对象结构的函数定义
```ts
let addUser: (user: { name: string, age: number }) => boolean;

addUser = (user: { name: string, age: number }): boolean => {
  return true;
};

addUser({ name: 'frank', age: 18 })
```
参数使用 type 进行了描述，也可以将函数结构使用 type 进行描述
```ts
type UserType = {
  name:string,
  age:number
}
type  AddUserFn = (user : UserType) => boolean

let addUser:AddUserFn = (user: UserType): boolean => {
  console.log('添加用户')
  return true;
};

addUser({ name: 'frank', age: 18 })
```
### 剩余参数
```ts
function push(arr: any[], ...args: any[]): any[] {
  arr.push(...args); 
  return arr;
}

push([], 'frank', 'jack', 'john');
```
### 元组Tuple
元组与数组类似，但元组要为每个值进行类型声明。

数组只是定义了值的类型，并没有约束某个位置的值必须是什么类型
```ts
const arr: (number | string | boolean)[] = ['frank', 2030, true];

arr[1] = 'abcdef'     //不报错，可以将原来是数值的更改为字符串，数组允许
arr[10] = '向军老师' 		//不报错，类型也是允许的
console.log(arr);
```
```ts
const hd: [string, number] = ['frank', 2030]
hd[0] = true    //报错，第一个值必须是字符串
```