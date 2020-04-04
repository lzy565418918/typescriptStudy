"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
console.log("hello typescript");
function getdata() { }
// 字符串类型
var str = "hello typescript";
// 布尔类型
var flag = true;
// 数字类型
var num = 999;
// 数组类型（三种）
// 1
var arr1 = [4, 8];
// 2
var arr2 = [1, 2, 3];
// 3
var arrr3 = [1, true, "ds"];
// 元组类型(给数组中的位置给定类型)，属于数组的一种
var arr3 = [123, "123"];
// 枚举类型（enum）在自然语言中用相应的单词代表某一状态
var Flag;
(function (Flag) {
    Flag[Flag["success"] = 1] = "success";
    Flag[Flag["error"] = 2] = "error";
})(Flag || (Flag = {}));
var s = Flag.error;
console.log(s);
// 如果标识符没有赋值，那他的值就是下标
var Color;
(function (Color) {
    Color[Color["bule"] = 0] = "bule";
    Color[Color["red"] = 1] = "red";
    Color[Color["orage"] = 2] = "orage";
})(Color || (Color = {}));
var c = Color.orage;
console.log(c);
// 应用
var Er;
(function (Er) {
    Er[Er["undefind"] = -1] = "undefind";
    Er[Er["null"] = -2] = "null";
    Er[Er["success"] = 1] = "success";
})(Er || (Er = {}));
var r = Er.null;
console.log(r);
// 任意类型（any）
var op = "123";
op = 0;
op = true;
// 任意类型的用法
var Box = document.querySelector("#box");
Box.style.color = "red";
console.log(Box);
// null 类型 和 undefined类型
// var num1: number
// console.log(num1);//报错
// var num1: undefined
// console.log(num1);
// 定义没有赋值,一个元素可能是number可能是null可能是undefined
var num1;
// num1 = 122
console.log(num1);
// void类型，方法无返回值
function run() {
    console.log("run");
}
run();
function run1() {
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
function func1() {
    return "asd";
}
// 2匿名函数
var func2 = function () {
    return 213 + "2";
};
// alert(func2())
// ts中定义方法传参
function getinfo(name, age) {
    return name + "---" + age;
}
// alert(getinfo('张三', 20))
// TS中匿名函数传参
// var getinfo=function(name: string, age: number): string{
//     return `${name}---${age}`
// }
// 方法的可选参数
function qq(name, age) {
    if (age)
        console.log(name + "----" + age);
    else
        console.log(name + "----" + "年龄保密");
}
qq("sasa");
// TS中的默认参数
function qw(name, age) {
    if (age === void 0) { age = 0; }
    console.log(name + "----" + age);
}
qw("mm");
// TS中的剩余参数
function sum() {
    var result = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        result[_i] = arguments[_i];
    }
    var c = 0;
    for (var index = 0; index < result.length; index++) {
        c += result[index];
    }
    console.log(c);
}
sum(1, 2, 3, 4);
function css(str) {
    if (typeof str === "string") {
        console.log("name:" + str);
    }
    else {
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
var Person = /** @class */ (function () {
    function Person(n) {
        //构造函数，实例化类的时候触发的方法(n是实例化传进来的参数)
        this.name = n;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.setName = function (n) {
        this.name = n;
    };
    return Person;
}());
var p = new Person("jony");
console.log(p.getName());
p.setName("jj");
console.log(p.getName());
var setData = function (value) {
    return value;
};
console.log(setData("第一种泛型"));
var func = function (val) {
    return val;
};
console.log(func("第二种泛型"));
// 类的泛型：把类作为参数来约束数据传入的类型(操作数据库表)
var MysqlDb = /** @class */ (function () {
    function MysqlDb() {
    }
    // 把User类传入约束数据
    MysqlDb.prototype.add = function (info) {
        console.log(info);
        return true;
    };
    return MysqlDb;
}());
// 定义几个类
var User = /** @class */ (function () {
    function User(f, s) {
        this.username = f;
        this.password = s;
    }
    return User;
}());
var u = new User("admin", "123");
var Article = /** @class */ (function () {
    function Article(a, b, c) {
        this.title = a;
        this.author = b;
        this.status = c;
    }
    return Article;
}());
var a = new Article("淡黄的长裙，蓬松的头发", "nine one");
// 指定泛型类,来验证数据的合法性
var m = new MysqlDb();
m.add(u);
m.add(a);
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
function logClass(params) {
    console.log(params); // 这个params就是下面修饰器传入的参数
    return function (target) {
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
var Http = /** @class */ (function () {
    function Http() {
        this.url = "我是构造函数的url";
    }
    Http.prototype.getdata = function () {
        console.log("我是构造函数的getdata方法");
    };
    Http = __decorate([
        logClass("改改")
    ], Http);
    return Http;
}());
var h = new Http();
console.log(h.url);
h.getdata();
// 属性装饰器，可以传两个参数
// params----------参数“https://www.baidu.com”
// target----------类ppt的原型对象(ppt.prototype)
// attr------------被修饰的静态成员url
function logAttr(params) {
    return function (target, attr) {
        console.log(params);
        console.log("---------------");
        console.log(target);
        console.log("---------------");
        console.log(attr);
        target[attr] = params;
    };
}
var ppt = /** @class */ (function () {
    function ppt() {
    }
    __decorate([
        logAttr("https://www.baidu.com")
    ], ppt.prototype, "url", void 0);
    return ppt;
}());
// var pp = new ppt()
