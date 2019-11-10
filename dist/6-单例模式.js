'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * 单例模式：
 *      系统中被唯一使用
 *      一个类只有一个实例
 */
var LoginBox = function () {
    function LoginBox() {
        _classCallCheck(this, LoginBox);
    }

    _createClass(LoginBox, [{
        key: 'login',
        value: function login() {
            console.log('login...');
        }
    }]);

    return LoginBox;
}();

LoginBox.getInstance = function () {
    var instance = void 0;
    return function () {
        if (!instance) {
            instance = new LoginBox();
        }
        return instance;
    };
}();

var box1 = LoginBox.getInstance();
box1.login();
var box2 = LoginBox.getInstance();
box1.login();

// 判断是否为一个实例
console.log(box1 === box2); // true

// 无法控制的情况
var box3 = new LoginBox();
box3.login();
console.log(box1 === box3); // false


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