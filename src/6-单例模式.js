/**
 * 单例模式：
 *      系统中被唯一使用
 *      一个类只有一个实例
 */
class LoginBox {
    login() {
        console.log('login...')
    }
}

LoginBox.getInstance = (function () {
    let instance;
    return function () {
        if (!instance) {
            instance = new LoginBox()
        }
        return instance
    }
})();

const box1 = LoginBox.getInstance()
box1.login()
const box2 = LoginBox.getInstance()
box1.login()

// 判断是否为一个实例
console.log(box1 === box2)          // true

// 无法控制的情况
const box3 = new LoginBox()
box3.login()
console.log(box1 === box3)          // false


// class Demo {
//     constructor() {
//         this.instance = null
//     }
//     test(value) {
//         console.log(value)
//     }
//     // 1-静态方法定义单例
//     static init(data = {}) {
//         if (!this.instance) {
//             this.instance = new Demo(data);
//         }
//         return this.instance;
//     }
// }

// 2-给类直接创建一个函数
// Demo.init = (function() {
//     let instance
//     return function() {
//         if(!instance) {
//             instance = new Demo()
//         }
//         return instance
//     }
// })()


// const d1 = Demo.init()
// d1.test('test...')
