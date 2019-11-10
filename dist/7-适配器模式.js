'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * 适配器模式：
 *          旧接口格式和使用者不兼容
 *          中间加一个适配转换接口
 */
// 演示： 美国插座 --> 适配器 --> 中国插座
var Usa = function () {
    function Usa() {
        _classCallCheck(this, Usa);
    }

    _createClass(Usa, [{
        key: 'outlet',
        value: function outlet() {
            return '美国插座';
        }
    }]);

    return Usa;
}();

var China = function () {
    function China() {
        _classCallCheck(this, China);

        this.adaptee = new Usa();
    }

    _createClass(China, [{
        key: 'outlet_zh',
        value: function outlet_zh() {
            return this.adaptee.outlet() + ' --> \u9002\u914D\u5668 --> \u4E2D\u56FD\u63D2\u5EA7';
        }
    }]);

    return China;
}();

var zh = new China();
console.log(zh.outlet_zh());

// 模拟情况
// // 原代码有$,新的代码要兼容这个$对象
// $.ajax({
//     url: '...'
// })
// // 适配器
// const $ = {
//     ajax: function(options) {
//         return ajax(options)
//     }
// }