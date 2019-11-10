// Factory(工厂)模式
// 工厂模式抽象了具体对象的过程。也就是说，声明了一个函数，把对象放到函数里，并返回这个对象。
// 工厂模式主要好处就是可以消除对象间的耦合，通过使用工程方法而不是new关键字。将所有实例化的代码集中在一个位置防止代码重复。
function createObject(name, age, profession) { //集中实例化的函数
    var obj = new Object();
    obj.name = name;
    obj.age = age;
    obj.profession = profession;
    obj.move = function () {
        return this.name + this.age + this.profession;
    };
    return obj;
}
var test1 = createObject('小明：', 22, '岁-程序员'); //第一个实例
var test2 = createObject('mike：', 25, '岁-工程师'); //第二个实例
// console.log(test1.move());
// console.log(test2.move());

// end-------------------------------以下为扩展内容-------------------------------------

// 构造函数模式
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.sayName = function () {
        console.log(this.name)
    }
}
// var person1 = new Person('Tom', 14).sayName();
// var Person2 = new Person('Jerry', 18).sayName();


// 原型模式
function Person1() {}
Person1.prototype.name = "Tom";
Person1.prototype.sayName = function () {
    console.log(this.name)
}
// var person1_1 = new Person1().sayName();
// var person1_2 = new Person1().sayName();
