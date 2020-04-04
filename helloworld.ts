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
function css(name: string): void;
function css(age: number): void;
function css(str: any): void {
  if (typeof str === "string") {
    console.log("name:" + str);
  } else {
    console.log("age:" + str);
  }
}
css("淡黄的长裙,蓬松的头发，你牵着我的手看最新展出的油画");
css(90);

// ts中的类
// 首先，复习一下ES5的类
// function Person(name) {
//   this.name = name;
//   this.sayhi = function() {
//     console.log(this.name);
//   };
// }

// const obj = new Person("zhangsan");
// obj.sayhi();
class Person {
  name: string; //属性：前面省略了public关键词

  constructor(n: string) {
    //构造函数，实例化类的时候触发的方法(n是实例化传进来的参数)
    this.name = n;
  }

  getName(): string {
    return this.name;
  }
  setName(n: string): void {
    this.name = n;
  }
}

var p = new Person("jony");
console.log(p.getName());
p.setName("jj");
console.log(p.getName());

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
var m = new MysqlDb<User | Article>();
m.add(u);
m.add(a);

// 修饰器:装饰器是一种特殊类型的声明，它能够被附加到类声明，方法，属性，参数上，可以修改类的行为。
// 通俗的讲，装饰器是一个方法（function），可以注入到类，方法，属性，参数上来扩展类，属性，方法，参数的功能
// 常见的装饰器有
