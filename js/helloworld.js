"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
console.log('hello typescript');
function getdata() {
}
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
var arrr3 = [1, true, 'ds'];
// 元组类型(给数组中的位置给定类型)，属于数组的一种
var arr3 = [123, '123'];
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
var op = '123';
op = 0;
op = true;
// 任意类型的用法
var Box = document.querySelector('#box');
Box.style.color = 'red';
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
    console.log('run');
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
    return 'asd';
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
        console.log(name + '----' + age);
    else
        console.log(name + '----' + '年龄保密');
}
qq('sasa');
// TS中的默认参数
function qw(name, age) {
    if (age === void 0) { age = 0; }
    console.log(name + '----' + age);
}
qw('mm');
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
    if (typeof str === 'string') {
        console.log('name:' + str);
    }
    else {
        console.log('age:' + str);
    }
}
css('淡黄的长裙,蓬松的头发，你牵着我的手看最新展出的油画');
css(90);
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
var Person = /** @class */ (function () {
    function Person(n) {
        // new的时候触发
        this.name = n;
    }
    Person.prototype.getName = function () {
        console.log(this.name + '说：就当是一场梦，行了很久还是很感动');
    };
    Person.prototype.setName = function (n) {
        this.name = n;
    };
    return Person;
}());
var p = new Person('jonyj');
// p.getName()
// p.setName('qnzw')
// p.getName()
// TS中的继承
var Stu = /** @class */ (function (_super) {
    __extends(Stu, _super);
    function Stu(name, age) {
        var _this = 
        // super是继承的精髓
        _super.call(this, name) || this;
        _this.age = age;
        return _this;
    }
    Stu.prototype.work = function () {
        console.log(this.name + this.age + '岁，穿着淡黄的长裙');
    };
    // 子类和父类有同样方法时，会运行子类方法
    Stu.prototype.getName = function () {
        console.log(this.name + '说：只剩我一人开着狂欢的趴体');
    };
    return Stu;
}(Person));
var ss = new Stu('qnzww', 20);
ss.getName();
ss.work();
// TS中类里面的修饰符（public，protected，private）
// public：             共有，在类里面，子类，类外面都可以访问
// protected：          保护类型，在类里面，子类可以访问，类外面不可以访问
// private：            私有，在类里面可以访问，子类，类外部不可以访问
// 属性如果不加修饰符，默认公有
// protected演示
var Prot = /** @class */ (function () {
    function Prot(n) {
        this.name = n;
    }
    return Prot;
}());
var pro = new Prot('protected');
// 在外部使用，ts会提示报错
// console.log(pro.name)
// private演示
var Pri = /** @class */ (function () {
    function Pri(n) {
        this.name = n;
    }
    Pri.prototype.sayhi = function () {
        console.log(this.name);
    };
    return Pri;
}());
var pri = new Pri('private');
// 在外部使用，ts会提示报错
// console.log(pri.name)
// 继承后使用private修饰的属性
var Prison = /** @class */ (function (_super) {
    __extends(Prison, _super);
    function Prison(name) {
        return _super.call(this, name) || this;
    }
    Prison.prototype.sayhi = function () {
        // 在子类不能使用private修饰的属性
        // console.log(this.name)
    };
    return Prison;
}(Pri));
// TS中静态属性，静态方法：对应实例属性，实例方法
var Jingt = /** @class */ (function () {
    function Jingt(name) {
        this.name = name;
    }
    // 静态方法只能调用静态属性
    Jingt.print = function () {
        console.log(this.age);
    };
    // 静态属性关键字static
    Jingt.age = 20;
    return Jingt;
}());
// 静态方法喝属性的调用
console.log(Jingt.age);
Jingt.print();
// TS中的多态
// 父类定义的方法不去实现，让子类继承后的子类去实现，每一个子类有不同的表现
// 多态也是继承的一种表现
var Ani = /** @class */ (function () {
    function Ani(name) {
        this.name = name;
    }
    // 父类定义的方法，不实现
    Ani.prototype.eat = function () {
        console.log('eat');
    };
    return Ani;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    // 子类表现不同
    Dog.prototype.eat = function () {
        return this.name + 'eat meet';
    };
    return Dog;
}(Ani));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        return _super.call(this, name) || this;
    }
    // 子类表现不同
    Cat.prototype.eat = function () {
        return this.name + 'miao';
    };
    return Cat;
}(Ani));
// 抽象类，提供其他类继承的基类，不能直接实例化
// 抽象方法，用abstract关键字定义抽象类和抽象方法，抽象类中的抽象方法不包含具体实现并且必须在派生类中实现
// abstract抽象方法只能放在抽象类里面
// 抽象类和方法用来定义标准，
// 一个标准：animal类，要求子类必须包含eat方法
// 抽象类不能创建实例
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    return Animal;
}());
// 继承抽象类的子类
var Wolf = /** @class */ (function (_super) {
    __extends(Wolf, _super);
    function Wolf(name) {
        return _super.call(this, name) || this;
    }
    // 继承抽象类必须实现父类抽象方法
    Wolf.prototype.eat = function () {
        console.log(this.name + '爱上羊');
    };
    return Wolf;
}(Animal));
// 实例化子类
var w = new Wolf('狼');
w.eat();
// ——————————接口interface——————————
function printName(name) {
    console.log(name.firstName + '--' + name.lastName);
}
var obj = {
    age: 20,
    firstName: 'jony',
    lastName: 'j'
};
// 传入的参数必须包含接口的规范
printName(obj);
function gname(name) {
    console.log(name.lname + name.fname);
}
gname({ lname: 'll' });
function ajax(config) {
    var xhr = new XMLHttpRequest();
    xhr.open(config.type, config.url, true);
    xhr.send(config.data);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log('success');
            if (config.dataType == 'json') {
                console.log(JSON.parse(xhr.responseText));
            }
            else {
                console.log(xhr.responseText);
            }
        }
    };
}
ajax({
    type: 'get',
    url: 'http://a.itying.com/api/productlist',
    dataType: 'json'
});
var md5 = function (key, value) {
    return atob(key) + atob(value);
};
console.log(md5('12111111113', '22222222222222222222'));
var sz = ['123', 2];
var objb = { name: 'sa', age: '20' };
var Ant = /** @class */ (function () {
    function Ant(name) {
        this.name = name;
    }
    // 可以不传参数
    Ant.prototype.eat = function () {
        console.log(this.name + 'mayichigou');
    };
    return Ant;
}());
var ant = new Ant('xiaoei');
ant.eat();
// 6.接口的扩展，接口继承接口
// 命名空间
var A;
(function (A) {
    var Web = /** @class */ (function () {
        function Web(name) {
            this.name = name;
        }
        Web.prototype.eat = function () {
            console.log('接口好难 你妈的');
        };
        Web.prototype.work = function () {
            console.log(this.name + '上班也难');
        };
        return Web;
    }());
    A.Web = Web;
})(A || (A = {}));
var B;
(function (B) {
    var Web = /** @class */ (function () {
        function Web(name) {
            this.name = name;
        }
        Web.prototype.eat = function () {
            console.log('接口好难 你妈的');
        };
        Web.prototype.work = function () {
            console.log(this.name + '上班也难');
        };
        return Web;
    }());
    B.Web = Web;
})(B || (B = {}));
var ww = new A.Web('命名空间A');
var www = new B.Web('空间B');
ww.eat();
www.eat();
ww.work();
www.work();
// typescript中的泛型
// 解决接口复用性,可以支持不特定的数据类型
// 要求：传入的参数和返回的参数一致
// T表示泛型
function getvalue(value) {
    return value;
}
// 调用的时候再指定T的具体类型
getvalue(123);
getvalue('123');
// 泛型类
var ColMin = /** @class */ (function () {
    function ColMin() {
        this.list = [];
    }
    ColMin.prototype.add = function (val) {
        this.list.push(val);
    };
    ColMin.prototype.min = function () {
        var min = this.list[0];
        for (var index = 0; index < this.list.length; index++) {
            if (min > this.list[index]) {
                min = this.list[index];
            }
        }
        return min;
    };
    return ColMin;
}());
var m = new ColMin();
m.add('1');
m.add('51');
m.add('100');
console.log(m.min());
// 装饰器
// 1.类装饰器,在不修改类的前提下，扩展类的功能
// 普通装饰器
// 可以用来重载类
function logclass(params) {
    //params就是当前类
    console.log(params);
    // 给类扩展属性
    params.prototype.apiUrl = 'xxx';
    // 给类扩展方法
    params.prototype.run = function () {
        console.log('kuozhan');
    };
    // 重载：
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.name = '修饰器重载后的';
            return _this;
        }
        class_1.prototype.getdata = function () {
            console.log(this.name + '方法');
        };
        return class_1;
    }(params));
}
var Http = /** @class */ (function () {
    function Http() {
        this.name = '重载';
    }
    Http.prototype.getdata = function () {
        console.log(this.name + '方法');
    };
    Http = __decorate([
        logclass
    ], Http);
    return Http;
}());
var h = new Http();
console.log(h.apiUrl);
h.run();
h.getdata();
// 装饰器工厂,用的非常多
function log(params) {
    return function (el) {
        console.log(params, 'params');
        el.prototype.url = params;
    };
}
var he = /** @class */ (function () {
    function he() {
    }
    he.prototype.getdata = function () {
    };
    he = __decorate([
        log('http://www.baidu.com')
    ], he);
    return he;
}());
var qwe = new he();
qwe.url;
// 属性装饰器
function attr(params) {
    return function (e, attr) {
        console.log(e);
        console.log('---------------');
        console.log(attr);
    };
}
var Qi = /** @class */ (function () {
    function Qi() {
    }
    __decorate([
        attr('属性装饰器内容')
    ], Qi.prototype, "url", void 0);
    return Qi;
}());
// 方法装饰器
