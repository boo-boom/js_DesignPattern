"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var createObject = function () {
    function createObject() {
        _classCallCheck(this, createObject);
    }

    _createClass(createObject, [{
        key: "fn1",
        value: function fn1() {
            // 每次实例化都会创建一个fn1的方法
        }
    }]);

    return createObject;
}();

createObject.fn2 = function () {
    // 静态方法
    // 无论实例化多少次   均只有一个fn2方法
};