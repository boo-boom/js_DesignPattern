/**
 * 装饰器模式：
 *      对对象添加新功能
 *      不改变其原有的结构和功能
 * 与适配器模式不同：
 *      适配器因为原接口不能使用而使用适配器进行兼容
 *      装饰器是添加新功能
 */
// 装饰器模式的执行过程
// class One {
//     test1() {
//         console.log('测试方法1...')
//     }
// }

// class Two {
//     constructor(one) {
//         this.one = one
//     }
//     test1() {
//         this.one.test1()
//         this.test2()
//     }
//     test2() {
//         console.log('新添测试方法2...')
//     }
// }

// const o = new One()
// const t = new Two(o)
// t.test1()

// end-------------------------------------------------

// 演示1: 类装饰器
// @testDec
// class Demo {}

// function testDec(target) {
//     target.isDec = true
//     target.sayname = function() {
//         console.log('类装饰器...')
//     }
//     // console.log(target)              // target：被装饰的类
// }
// Demo.sayname()
// console.log(Demo.isDec)

// end-------------------------------------------------

// 演示2: 类装饰器(传参)
// @testDec(false)
// class Demo {}

// function testDec(value) {
//     return target => {
//         target.isDec = value
//         target.sayname = function() {
//             console.log('类装饰器...')
//         }
//     }
// }
// Demo.sayname()
// console.log(Demo.isDec)

// end-------------------------------------------------

// 演示3: mixins()
// const Foo = {
//     test() {
//         console.log('mixins...')
//     }
// }
// function mixins (...list) {
//     return (target) => {
//         Object.assign(target.prototype, ...list)
//     }
// }

// @mixins(Foo)
// class Myclass {}

// const obj = new Myclass()
// obj.test()

// end-------------------------------------------------

// 方法修饰器
// function readonly(value) {
//     // target: 当前装饰的类
//     // name: 当前装饰的方法名
//     // descriptor: 当前类的描述对象
//     return function(target, name, descriptor) {
//         descriptor.writable = value
//         return descriptor
//     }
// }
// class Person {
//     constructor() {
//         this.name = 'readonly...'
//     }
//     @readonly(false)
//     name() {
//         return this.name
//     }
// }

// let p = new Person()
// p.name = function() {
//     console.log(123)
// }

// function test1(value) {
//     return (target, name, descriptor) => {
//         console.log(value)
//         // console.log(target)
//         // console.log(name)
//         // console.log(descriptor)
//     }
// }
// function test2(value) {
//     return (target, name, descriptor) => {
//         console.log(value)
//     }
// }

// class Demo {
//     @test1('test1...')
//     @test2('test2...')
//     fnsay() {
//         console.log('say...')
//     }
// }

// const d1 = new Demo()
// d1.fnsay()                      // 假设函数都是同步时：test2 => test1 => fnsay


// end-------------------------------------------------

// 类装饰器执行顺序
@testDec2
@testDec1
class Demo {
    constructor() {
        console.log('类...')
        console.log(Demo.sss)
    }
    static sss = {
        s: 'abc'
    }
}
function testDec1() {
    console.log('类装饰器1...')
}
function testDec2() {
    console.log('类装饰器2...')
}
new Demo()          // testDec1 => testDec2 => constructor