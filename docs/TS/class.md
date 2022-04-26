# 类与接口
## 修饰符
### public
`public`指公开的属性或方法

* 默认情况下属性是 `public` （公开的），即可以在类的内部与外部修改和访问
* 不明确设置修饰符即为 `public`
```ts
class User {
  public name:string
  public age:number
  constructor(name:string , age :number) {
    this.name = name
    this.age  = age
  }
  public info(){
    return `${this.name}的年龄是${this.age}岁`
  }
}
const  user = new User('frank' , 18)
user.name = 'xxx'    //可更改

for (const key in user ) {
  if(user.hasOwnProperty(key)){
    console.log(user[key])      // 'xxx' , 18   注意:info是在prototype原型上
  }
}
```
### protected
`protected` 修饰符指受保护的，只允许在父类与子类使用，**不允许在类的外部使用**
```ts{8,19,20}
class Person {
  protected name:string
  public age:number
  protected info(){
    return `${this.name}的年龄是${this.age}岁`
  }
  public show(){
    return this.info()     //类内部可调用
  }
}
class User extends Person{
  constructor(name:string , age :number) {
    super()
    this.name = name
    this.age  = age
  }
}
const  user = new User('frank' , 18)
user.name = 'xxx'  // 报错! 外部不能访问
user.info()   //报错! 外部不能调用
```
### private
`private` 修饰符指私有的, 只能在类内部访问 , 不允许在子类访问 , 也不允许在类的外部使用
```js
class Person {
  private name: string
  constructor(name: string) {
    this.name = name
  }
}
class User extends Person {
  constructor(name: string) {
    super(name)
  }

  public info(): string {
    return `你好 ${this.name}` //属性是 private 不允许子类访问 
    //Property 'name' is private and only accessible within class 'Hd'.
  }
}
```
子类更改父类方法或属性的访问修饰符有些限制的

* 父类的 private 不允许子类修改
* 父类的 protected 子类可以修改为 protected 或 public
* 父类的 public 子类只能设置为 public
### readonly
`readonly` 将属性定义为**只读**，不允许在类的内部与外部进行修改
```ts
class Axios {
  readonly site:string = "http://localhost:3000/api"
  constructor(site?:string) {
    this.site = site || this.site  //初始化的时候是可以更改的
  } 
  public get(){
    console.log(`我请求的是${this.site}`)
  }
}
const instance = new Axios()
console.log(instance.site)
```
## constructor
`constructor` 是初始化实例参数使用 , 可以在构造函数 `constructor` 中定义属性，这样就不用在类中声明属性了，可以简化代码量

例如:
```ts
class User {
  constructor(
    public name: string,
    public age: number
  ) {}
}
const user = new User('frank' , 18)
```
## static
`static` 用于定义静态属性或方法，属性或方法是属于构造函数的 。静态属性是**为类设置**的属性 , 而不是为生成的对象设置的属性 , 所以要用**类**访问
### 基本语法
```js
class Site {
  static url: string = 'https://localhost:3000/api'

  static getSiteInfo() {
    return '我的网址是' + Site.url   //用 类 调
  }
}
console.log(Site.getSiteInfo());  //用 类 调
```
### 单例模式
当把 `construct` 定义为非`public`修饰符后，就不能通过这个类实例化对象。
```ts
class Axios {
  protected constructor() {
    console.log('执行构造函数')
  }
}
const instance = new Axios() 
// 报错!!  Constructor of class 'Axios' is protected and only accessible within the class declaration.  
// new创建的时候, 会执行构造函数 , 但是上面构造函数是protected, 不能再外部调用 , 所以报错
```
可以利用这个特性再结合 `static` 即可实现单例模式，即只实例化一个对象
```ts
class Axios {
  private static instance : Axios | null = null   // private , static 
  private constructor() {
    console.log('执行构造函数')
  }
  static makeInstance():Axios {
    if(Axios.instance === null){    //当 static instance为空时 , new一个实例
      console.log('创建了实例')
       Axios.instance = new Axios()
    }
    return  Axios.instance
  }
}
const instance = Axios.makeInstance()
```
## get / set
使用 `get` 与 `set` 访问器可以动态设置和获取属性
```ts
class User {
  private _name: string;
  constructor(name: string) {
    this._name = name;
  }
  public get name(): string {
    return this._name;
  }
  public set name(name: string) {
    this._name = name;
  }
}
const user = new User('frank')
user.name = 'eren'    //可赋值
console.log(user.name) //可读
```
## abstract
抽象类定义使用 `abstract` 关键字，抽象类除了具有普通类的功能外，还可以定义抽象方法

* 抽象类可以不包含抽象方法，但抽象方法必须存在于抽象类中
* 抽象方法是对方法的定义，子类**必须**实现这个方法
* 抽象类**不可以用于实例化对象**，**只能被继承**
* 抽象类类似于类的模板，实现规范的代码定义
```ts
class Animate {
  protected getPos():number[] {
       return [100 , 300]
    }
}

class Tank extends Animate {
    public move(): void {

    }
}

class Player extends Animate {
    public move: void{

}
```
子类都有 `move` 方法，我们可以在抽象方法中对其**进行规范定义**

* 抽象方法只能定义，不能实现，即没有函数体
* 子类必须实现抽象方法
* 抽象类不能被直接使用，只能被继承
```ts{2,3,10-13,16-19}
abstract class Animate {
  abstract name:string            //只能定义 , 没有值
  abstract move():void           //只能定义 , 没有函数体
  protected getPos():number[] {
    return [100 , 300]
  }
}

class Tank extends Animate {
  name:string = '敌方坦克'       //子类必须赋值 , 否则报错
   public move() {              //子类必须实现 , 否则报错
      console.log('敌方坦克移动')
   }
}
class Player extends Animate {
  name:string = '玩家坦克'      //子类必须赋值 , 否则报错
  public move(){               //子类必须实现 , 否则报错
    console.log('玩家坦克移动')
  }
}
```
## interface
接口就是用代码描述一个对象必须有什么属性(包括方法)
### 抽象类
```ts{1-4,12,18}
interface AnimateInterface {
  name:string
  move():void
}

abstract class Animate {
  protected getPos():number[] {
    return [100 , 300]
  }
}

class Tank extends Animate implements AnimateInterface{
  name:string = '敌方坦克'
   public move() {
      console.log('敌方坦克移动')
   }
}
class Player extends Animate implements AnimateInterface{
  name:string = '玩家坦克'
  public move(){
    console.log('玩家坦克移动')
  }
}
```
### 对象
```ts
interface UserInterface {
  name:string
  age?:number
  info():string
}
let user :UserInterface = {
  name:'frank',
  //age:18,
  info(){
    return `${this.name}的年龄是${this.age}`
  }
}
```
如果有额外的属性，使用以下方式声明，这样就可以添加任意属性
```ts{5}
interface UserInterface {
  name:string
  age?:number
  info():string
  [key:string]:any
}
let user :UserInterface = {
  name:'frank',
  //age:18,
  info(){
    return `${this.name}的年龄是${this.age}`
  },
  sex:'男'
}
```
### 接口继承
接口可以使用 `extends` 继承
```ts{4}
interface PlayEndInterface {
    end(): void
}
interface AnimationInterface extends PlayEndInterface {
    name: string
    move(): void
}
```
或者 重复声明再加几个也行
```ts

interface AnimationInterface {
    name: string
    move(): void
}
interface AnimationInterface {  //直接声明加上
    end(): void
}
```
对象可以使用实现多个接口，多个接口用**逗号**连接
```ts{15,25}
interface PlayEndInterface {
  end(): void
}
interface AnimationInterface {
  name: string
  move(): void
}

class Animate {
  protected getPos(): { x: number; y: number } {
    return { x: 100, y: 300 }
  }
}

class Tank extends Animate implements AnimationInterface, PlayEndInterface {   // 用逗号隔开
  name: string = '敌方坦克'
  public move(): void {
    console.log(`${this.name}移动`)
  }
  end() {
    console.log('游戏结束');
  }
}

class Player extends Animate implements AnimationInterface, PlayEndInterface {  // 用逗号隔开
  name: string = '玩家'
  public move(): void {
    console.log(`${this.name}坦克移动`)
  }
  end() {
    console.log('游戏结束');
  }
}
const hd = new Tank()
const play = new Player()
hd.move()
play.move()
```
### 函数

#### 函数参数
```ts
interface UserInterface {
  name: string;
  age: number;
  isLock: boolean;
}

function lockUser(user: UserInterface, lock: boolean): UserInterface {
  user.isLock = lock;
  return user;
}

let user: UserInterface = {
  name: 'frank', age: 18, isLock: false
};

lockUser(user, true);
```
#### 函数声明
```ts
interface Pay {
  (price:number):void
}
const pay : Pay = (price:number):void =>{
  console.log('hello')
}
```
### 类
```ts
interface  UserInterface {
  name:string
  age:number
}
class User {
  info:UserInterface
  constructor(user:UserInterface){
    this.info = user
  }
}
const  user = new User( { name:'frank', age:18 } )
console.log(user.info)
```
### 数组 和 enum
```ts
enum SexType {
  BOY,
  GIRL
}

interface UserInterface {
  name: string;
  age: number;
  sex: SexType;
}

const user1: UserInterface = {
  name: 'frank',
  age: 18,
  sex: SexType.BOY
};
const user2: UserInterface = {
  name: 'lucy',
  age: 19,
  sex: SexType.GIRL
};
const users: UserInterface[] = [user1, user2];
```
### 案例
模拟在线支付
```html
    <button onclick="pay('alipay' , 100)">支付宝支付</button>
    <button onclick="pay('wechatpay' , 100)">微信支付</button>
```
```ts
interface PayInterface {
  handle(price:number):void
}
class AliPay implements PayInterface{
  public handle(price:number):void {
    console.log(`支付宝支付${price}元`)
  }
}
class WechatPay implements PayInterface{
  public handle(price:number):void {
    console.log(`微信支付${price}元`)
  }
}

function pay(type:string , price:number):void{
  let pay:PayInterface
  if (type == 'alipay') {
    pay = new AliPay()
  } else {
    pay = new WechatPay()
  }
  pay.handle(price)
}
```
## type
type 与 interface 非常相似都可以描述一个对象或者函数，使用 type 用于定义类型的别名，是非常灵活的类型定义方式。
### interface 和 type 的区别
* 组合方式 : interface使用 `extends` 来实现继承 , type 使用 `&` 来实现联合类型
* 拓展不同 : interface 可以重复声明用来拓展 , type 一个类型只能声明一次  
* 范围不同 : type 适用于基本类型 , intertface 一般不行
* 命名方式 : interface 会创建新的类型名。 type 只是创建类型别名 , 并没有创建新的类型名
### 基本用法
```ts
// 对象
type User = {
  name:string
  age:number
}
const hd: User = { name: 'frank', age: 18 }

// 函数
type Pay = {
  (price:number):void
}
const wechatPay: Pay = (price: number):void => {
  console.log(`微信支付${price}`);
}
```
### 类型别名
```ts
//基本类型别名
type IsAdmin = boolean

//定义联合类型
type Sex = 'boy' | 'girl'

type User = {
    isAdmin: IsAdmin,
    sex: Sex
}
const hd: User = {
    isAdmin: true,
    sex: "boy"
}
```
### 继承
#### interface
系统将同名的 interface 接口声明进行合并
```ts
interface User {
  name: string
}
interface User {
  age: number
}
const hd: User = {
  name: '后盾人',
  age: 18
}
```
interface 也可以使用 `extends` 继承
```ts
interface Admin {
    role: string
}
interface User extends Admin {
    name: string
}
const hd: User = {
    role: 'admin',
    name: '后盾人',
}
```
interface 也可以 extends 继承 type
```ts
type Admin = {
  role: string
}
interface User extends Admin {
  name: string
}
const hd: User = {
  role: 'admin',
  name: '后盾人',
}
```
#### type
但 type 与 interface 不同，存在同名的 type 时将是**不允许**的
```ts
type Admin = {
  role: string
}
type Admin = {     //报错 Duplicate identifier 'Admin'.
  isLock :boolean
}
```
可以使用 `&`来进行 interface 的合并
```ts
interface Name {
    name: string
}
interface Age {
    age: number
}
type User = Name & Age
```
type 类型的声明合并 , 使用 `&`进行合并
```ts{8}
type Admin = {
    role: string,
    isSuperAdmin: boolean
}
type Member = {
    name: string
}
type User = Admin & Member;
const hd: User = {
    isSuperAdmin: true,
    role: 'admin',
    name: 'frank'
}
```
type 可以使用 `|` , 满足一个声明
```ts{8}
type Admin = {
    role: string,
    isSuperAdmin: boolean
}
type Member = {
    name: string
}
type User = Admin | Member;
const hd: User = {
    name: 'frank'
}
```


### implements
class 可以使用 implements 来实现 type 或 interface
```ts
type Member = {
    name: string
}
class User implements Member {
    name: string = 'frank'
}
```