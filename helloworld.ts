console.log("hello typescript");

function getdata() {}
// 字符串类型
let str: string = "hello typescript";
// 布尔类型
var flag: boolean = true;

// 数字类型
var num: number = 999;

// 数组类型（三种）
// 1
var arr1: number[] = [4, 8];
// 2
var arr2: Array<number> = [1, 2, 3];
// 3
let arrr3: any = [1, true, "ds"];

// 元组类型(给数组中的位置给定类型)，属于数组的一种
let arr3: [number, string] = [123, "123"];

// 枚举类型（enum）在自然语言中用相应的单词代表某一状态
enum Flag {
  success = 1,
  error = 2
}
let s: Flag = Flag.error;
console.log(s);
// 如果标识符没有赋值，那他的值就是下标
enum Color {
  bule,
  red,
  "orage"
}
let c: Color = Color.orage;
console.log(c);
// 应用
enum Er {
  "undefind" = -1,
  "null" = -2,
  "success" = 1
}

var r: Er = Er.null;
console.log(r);

// 任意类型（any）
let op: any = "123";
op = 0;
op = true;

// 任意类型的用法
var Box: any = document.querySelector("#box");
Box.style.color = "red";
console.log(Box);

// null 类型 和 undefined类型
// var num1: number
// console.log(num1);//报错

// var num1: undefined
// console.log(num1);

// 定义没有赋值,一个元素可能是number可能是null可能是undefined
var num1: number | null | undefined;
// num1 = 122
console.log(num1);

// void类型，方法无返回值
function run(): void {
  console.log("run");
}
run();

function run1(): number {
  console.log(run1);
  return 4;
}

run1();

// never类型：是其他类型的子类型，代表从不会出现的值
// 这意味着never的变量只能被never所赋值
// 基本上用不到
// var n: never

// n = (() => {
//     throw new Error('throw error')
// })()

// 定义函数的方法
// es5中
// // 函数声明式
// function func() {
//     return 'e'
// }
// // 匿名函数
// var f = function () {
//     return 'o'
// }

// ts中
// 1函数声明式
function func1(): string {
  return "asd";
}
// 2匿名函数
var func2 = function(): any {
  return 213 + "2";
};

// alert(func2())
// ts中定义方法传参
function getinfo(name: string, age: number): string {
  return `${name}---${age}`;
}

// alert(getinfo('张三', 20))

// TS中匿名函数传参
// var getinfo=function(name: string, age: number): string{
//     return `${name}---${age}`
// }

// 方法的可选参数
function qq(name: string, age?: number): void {
  if (age) console.log(name + "----" + age);
  else console.log(name + "----" + "年龄保密");
}
qq("sasa");

// TS中的默认参数
function qw(name: string, age: number = 0) {
  console.log(name + "----" + age);
}
qw("mm");

// TS中的剩余参数
function sum(...result: number[]) {
  let c = 0;
  for (let index = 0; index < result.length; index++) {
    c += result[index];
  }
  console.log(c);
}
sum(1, 2, 3, 4);

// 函数的重载
// JAVA中的方法的重载：两个或者两个以上同名函数，但它们的参数不一样，这时会出现函数重载的情况
// typescript中的重载：用过位同一个函数提供类型定义来试下多种功能的目的
function css(name: string): void
function css(age: number): void
function css(str: any): void{
    if (typeof str==='string') {
        console.log('name:' + str);
    } else {
        console.log('age:' + str);
    }
}
css('淡黄的长裙,蓬松的头发，你牵着我的手看最新展出的油画')
css(90)
// 复习一下ES5的类
// function FarType(name) {
//     this.name = name
//     this.sex = 'male'
//     this.color = ['red', 'blue', 'yellow']
// }
// FarType.prototype.showName = function() {
//     console.log(this.name)
// }
// FarType.prototype.showSex = function() {
//     console.log(this.sex)
// }
// // 继承
// function SonType(age, name) {
//     FarType.call(this, name)
//     this.age = age
// }
// SonType.prototype = new FarType();
// SonType.prototype.showAge = function() {
//     console.log(this.age)
// }


// TS中的类的概念
class Person {
    name: string; //前面省略了public关键字

    constructor(n:string) {
        // new的时候触发
        this.name = n
    }

    getName(): void{
        console.log(this.name+'说：就当是一场梦，行了很久还是很感动')
    }

    setName(n:string): void{
        this.name = n
    }
}

var p = new Person('jonyj')

// p.getName()
// p.setName('qnzw')
// p.getName()

// TS中的继承
class Stu extends Person{
    age:number
    constructor(name: string, age: number) {
        // super是继承的精髓
        super(name)
        this.age = age
    }

    work(): void{
        console.log(this.name+this.age+'岁，穿着淡黄的长裙');
    }
    // 子类和父类有同样方法时，会运行子类方法
    getName(): void{
        console.log(this.name+'说：只剩我一人开着狂欢的趴体')
    }

}

var ss = new Stu('qnzww',20)
ss.getName()
ss.work()

// TS中类里面的修饰符（public，protected，private）
// public：             共有，在类里面，子类，类外面都可以访问
// protected：          保护类型，在类里面，子类可以访问，类外面不可以访问
// private：            私有，在类里面可以访问，子类，类外部不可以访问
// 属性如果不加修饰符，默认公有

// protected演示
class Prot{
    protected name: string;
    constructor(n: string) {
        this.name=n
    }
}

var pro = new Prot('protected')
// 在外部使用，ts会提示报错
// console.log(pro.name)

// private演示
class Pri{
    private name: string
    constructor(n: string) {
        this.name = n
    }
    sayhi(): void{
        console.log(this.name)
    }
}

var pri = new Pri('private')
// 在外部使用，ts会提示报错
// console.log(pri.name)

// 继承后使用private修饰的属性
class Prison extends Pri{

    constructor(name:string) {
        super(name)
    }

    sayhi() {
        // 在子类不能使用private修饰的属性
        // console.log(this.name)
    }
}

// TS中静态属性，静态方法：对应实例属性，实例方法
class Jingt{
    public name: string
    // 静态属性关键字static
    static age: number=20
    constructor(name: string) {
        this.name = name
    }
    // 静态方法只能调用静态属性
    static print() {
        console.log(this.age)
    }
}
// 静态方法喝属性的调用
console.log(Jingt.age)
Jingt.print()

// TS中的多态
// 父类定义的方法不去实现，让子类继承后的子类去实现，每一个子类有不同的表现
// 多态也是继承的一种表现
class Ani{

    name: string
    constructor(name: string) {
        this.name = name
        
    }
    // 父类定义的方法，不实现
    eat() {
        console.log('eat');
    }
}

class Dog extends Ani{
    constructor(name: string) {
        super(name)
    }
// 子类表现不同
    eat() {
        return this.name+'eat meet'
    }
}

class Cat extends Ani{
    constructor(name: string) {
        super(name)
    }
// 子类表现不同
    eat() {
        return this.name + 'miao'
        
    }
}


// 抽象类，提供其他类继承的基类，不能直接实例化
// 抽象方法，用abstract关键字定义抽象类和抽象方法，抽象类中的抽象方法不包含具体实现并且必须在派生类中实现

// abstract抽象方法只能放在抽象类里面

// 抽象类和方法用来定义标准，
// 一个标准：animal类，要求子类必须包含eat方法

// 抽象类不能创建实例
abstract class Animal{

    name: string
    constructor(name:string) {
        this.name = name
    }




// tip:抽象方法只能定义在抽象类里面
    abstract eat():any


}

// 继承抽象类的子类
class Wolf extends Animal{
    constructor(name: string) {
        super(name)
    }
    // 继承抽象类必须实现父类抽象方法
    eat() {
        console.log(this.name+'爱上羊');
    }
}

// 实例化子类
let w = new Wolf('狼')
w.eat()

// 接口是一种规范的定义，约束属性、函数、类等的动作和规范
// 和抽象类一样都是个标准
// 1.属性接口：对json的约束

// 要求必须传入一个label，label必须是json类型(自定义类型)
// function printLabel(labelinfo: {label:string}) {
//     console.log('pl');
// }

// printLabel({ label: '123' })

// 接口对批量方法进行约束

// ---------------
interface FullName{

    firstName: string
    lastName: string
    


}
// ——————————接口interface——————————
function printName(name: FullName) {
    console.log(name.firstName+'--'+name.lastName)
}

var obj = {
    age: 20,
    firstName: 'jony',
    lastName:'j'
}
// 传入的参数必须包含接口的规范
printName(obj)
// 2.接口可选属性
interface quanming{
    fname?: string
    lname: string
    
}

function gname(name: quanming) {
    console.log(name.lname + name.fname);
}

gname({ lname: 'll' })
// 用接口重写Ajax

interface config{
    type: string
    url: string
    data?: string
    dataType: string
}

function ajax(config: config) {
    var xhr = new XMLHttpRequest()
    xhr.open(config.type, config.url, true)
    xhr.send(config.data)
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log('success');
            if (config.dataType == 'json') {
                console.log(JSON.parse(xhr.responseText))
            } else {
                console.log(xhr.responseText)
            }
        }
    }
}

ajax({
    type: 'get',
    url: 'http://a.itying.com/api/productlist',
    dataType: 'json'
})

// 3.函数类型接口：对方法传入的参数，以及返回值进行约束
// 实现一个加密的函数类型接口

interface encript{
    (key: string, value: string): string;

}

let md5: encript = function (key: string, value: string): string{
    return atob(key) + atob(value)
}


console.log(md5('12111111113','22222222222222222222'))






// 4.可索引接口，对数组对象的约束（不常用）
interface Arr{
    // 意思是index索引值是数字，值是字符串
    [index: number]: string|number
    
}
var sz: Arr = ['123', 2]

// 约束对象
interface Obj{
    [index: string]: string
    
}
var objb:Obj={name:'sa',age:'20'}

// 5.类类型接口，和抽象类很像
interface Ann{
    name: string
    eat(str: string): void
}

class Ant implements Ann{
    name: string
    constructor(name: string) {
        this.name = name
    }
    // 可以不传参数
    eat() {
        console.log(this.name+'mayichigou');
    }
}

var ant = new Ant('xiaoei')
ant.eat()

// 6.接口的扩展，接口继承接口
// 命名空间
namespace A {

    export interface Per extends Ann {

        work(): void
    }
    export class Web implements Per {
        name: string
        constructor(name: string) {
            this.name = name
        }

        eat() {
            console.log('接口好难 你妈的')
        }

        work() {
            console.log(this.name + '上班也难');
        
        }
    }
}
namespace B {

    export interface Per extends Ann {

        work(): void
    }
    export class Web implements Per {
        name: string
        constructor(name: string) {
            this.name = name
        }

        eat() {
            console.log('接口好难 你妈的')
        }

        work() {
            console.log(this.name + '上班也难');
        
        }
    }
}
var ww = new A.Web('命名空间A')
var www = new B.Web('空间B')
ww.eat()
www.eat()
ww.work()
www.work()

// typescript中的泛型
// 解决接口复用性,可以支持不特定的数据类型
// 要求：传入的参数和返回的参数一致
// T表示泛型
function getvalue<T>(value: T): T{
    return value
}
// 调用的时候再指定T的具体类型
getvalue<number>(123)
getvalue<string>('123')

// 泛型类
class ColMin<T>{

    public list:T[]=[]
    
    add(val: T): void{
        this.list.push(val)
    }

    min(): T{
        let min = this.list[0]
        for (let index = 0; index < this.list.length; index++) {
            if (min > this.list[index]) {
                min = this.list[index]
            }
        }
        return min
    }
}

let m = new ColMin<string>()
m.add('1')
m.add('51')
m.add('100')

console.log(m.min())


// 第一种泛型接口
interface ConfigFn {
  <T>(value: T): T;
}

var setData: ConfigFn = function<T>(value: T): T {
  return value;
};

console.log(setData<string>("第一种泛型"));
// 第二种泛型接口写法
interface Config<T> {
  (val: T): T;
}

var func: Config<string> = function(val: string): string {
  return val;
};

console.log(func("第二种泛型"));

// 类的泛型：把类作为参数来约束数据传入的类型(操作数据库表)
class MysqlDb<T> {
  // 把User类传入约束数据
  add(info: T): boolean {
    console.log(info);
    return true;
  }
}

// 定义几个类
class User {
  username: string;
  password: string;

  constructor(f: string, s: string) {
    this.username = f;
    this.password = s;
  }
}

var u = new User("admin", "123");

class Article {
  title: string;
  author: string;
  status?: number;

  constructor(a: string, b: string, c?: number) {
    this.title = a;
    this.author = b;
    this.status = c;
  }
}

var a = new Article("淡黄的长裙，蓬松的头发", "nine one");

// 指定泛型类,来验证数据的合法性
var mm = new MysqlDb<User | Article>();
mm.add(u);
mm.add(a);

// 修饰器:装饰器是一种特殊类型的声明，它能够被附加到类声明，方法，属性，参数上，可以修改类的行为。

// 通俗的讲，装饰器是一个方法（function），可以注入到类，方法，属性，参数上来扩展类，属性，方法，参数的功能

// 常见的装饰器有：类装饰器，属性装饰器，方法装饰器，参数装饰器

// 装饰器的写法：普通装饰器（无法传参），装饰器工厂（可以传参）

// 1.类装饰器，在类声明之前被声明。应用于类构造函数，可以用来监视，修改或替换类定义。传入参数

// 定义一个装饰器(这是普通装饰器，不可传参)
// function logClass(key: any) {
//   console.log(key); // 这个key就是下面的Http

//   // 扩展所修饰类的属性
//   key.prototype.url = "动态扩展的属性";
//   key.prototype.run = function() {
//     console.log("我是一个run方法,url:", this.url);
//   };
// }

// // 表明修饰哪个类
// @logClass
// // d定义一个类
// class Http {
//   constructor() {}

//   getdata() {}
// }

// var h: any = new Http();

// h.run();

// 这是装饰器工厂，可传参
function logClass(params: any) {
  console.log(params); // 这个params就是下面修饰器传入的参数

  return (target: any) => {
    // 这个target就变成了修饰的类，也就是下面的Http
    console.log(target);
    target.prototype.url = params;
  };

  // 重载构造函数
  // return class extends params {
  //   url = "我是修饰器改了构造函数后的url";
  //   getdata() {
  //     console.log(this.url + "我是改了构造函数后的getdata方法");
  //   }
  // };
}

// 表明修饰哪个类
@logClass("改改")
class Http {
  // d定义一个类
  public url: string | undefined;
  constructor() {
    this.url = "我是构造函数的url";
  }

  getdata() {
    console.log("我是构造函数的getdata方法");
  }
}

var h: any = new Http();
console.log(h.url);
h.getdata();

// 属性装饰器，可以传两个参数
// params----------参数“https://www.baidu.com”
// target----------类ppt的原型对象(ppt.prototype)
// attr------------被修饰的静态成员url

function logAttr(params: string) {
  return (target: any, attr: any) => {
    console.log(params);
    console.log("---------------");
    console.log(target);
    console.log("---------------");
    console.log(attr);
    target[attr] = params;
  };
}

class ppt {
  @logAttr("https://www.baidu.com")
  public url: string | undefined;

  constructor() {}
}
// var pp = new ppt()
console.log("以下是方法装饰器：");

// 方法装饰器：
// 它会被应用到方法的 属性描述符 上，可以用来监视，修改或者替换方法定义

// 方法装饰器会在运行时传入三个参数
function logFunc(params: any) {
  return (target: any, funcName: any, desc: any) => {
    console.log("params--------------------", params); // 修饰器后面传入的参数
    console.log("target--------------------", target); // 类的构造函数/实例化的原型对象
    console.log("funcName--------------------", funcName); // 被修饰的方法的方法名
    console.log("desc--------------------", desc.value); // 被修饰的方法
    // case1：替换Docx类中的getsome方法，在这之前，先将老方法保存一下
    var ofunc = desc.value;

    // 开始重写getsome方法
    desc.value = function(...arg: any[]) {
      arg = arg.map(item => String(item));

      console.log(arg);

      // 重写好之后，再把原本的getsome方法加上去（类似于继承）
      ofunc.apply(this, arg);
    };
  };
}

// 定义一个类
class Docx {
  constructor() {}
  @logFunc("xxxx")
  // 做一个小案例case：调用getsome方法时，把传入的参数类型全部转换成string类型，注意听课
  getsome(...arg: any[]) {
    console.log("方法修饰器");
  }
}

var d = new Docx();
// 调用之后就变了不
d.getsome(123, 321, "222");

console.log("以下是方法参数修饰器");
// 方法参数修饰器
// 参数装饰器表达式会在运行时当作函数被调用，可以使用参数装饰器为类的原型增加一些元素数据

// 定义一个装饰器
function logParams(params: any) {
  return (target: any, funcName: any, index: number) => {
    console.log("params:------------", params); // 装饰器后面传入的参数
    console.log("target:------------", target); // 对静态成员来说时类的构造函数，对实例成员来说是类的原型对象
    console.log("funcName:------------", funcName); // 方法的名字
    console.log("index:------------", index); // 参数在函数参数列表中的索引
  };
}

// 然后先定义一个类
class pdf {
  public url: string | undefined;
  constructor(u: string | undefined) {
    this.url = u;
  }

  getdata(@logParams("xxxuuid") uuid: any, @logParams("xxxval") val: any) {
    console.log("我是你爸爸", uuid);
  }
}

// var pd = new pdf('')

// pd.getdata()

// 装饰器的执行顺序：同一级别的右下->左上
//               ： 不同级别的，属性装饰器 -> 方法装饰器 -> 方法参数装饰器 -> 类装饰器
