'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var jQuery = function () {
    function jQuery(seletor) {
        _classCallCheck(this, jQuery);

        var slice = Array.prototype.slice;
        var dom = slice.call(document.querySelectorAll(seletor));
        var len = dom ? dom.length : 0;
        console.log(dom);
        this.lenght = len;
        this.seletor = seletor || '';
        for (var i = 0; i < len; i++) {
            this[i] = dom[i];
        }
    }

    _createClass(jQuery, [{
        key: 'addClass',
        value: function addClass() {
            // ...
        }
    }]);

    return jQuery;
}();

window.$ = function (seletor) {
    return new jQuery(seletor);
};

var $p = $('p');
console.log($p);

/**
 * apply/call (obj,arg)  =>  第一个参数为一个对象，无调用对象则为null(上下文)，后面的参数为前面apply/call前面方法需传入的参数
 * apply/call可以改变传递给函数参数的形式
 * call =>  参数按顺序接收
 * apply => ...1,2   参数为一个数组集合
 */
var arr = [3, 1, 2, 0];
var nodeList = document.querySelectorAll('span');
console.log(Math.max.apply(null, arr)); // Math.max(3,1,2,0) : 使用apply改变传参的形式
console.log(Object.prototype.toString.call(arr)); // call(对象, 无传入参数))
console.log(Array.prototype.slice.call(nodeList, 0, 2)); // call(对象, 参数1, 参数2)
console.log(Array.prototype.sort.call(arr));

// 改变参数的形式 => 
// apply: arr2 [4,5,6] = push 4, 5, 6(多个对象作为参数传入) => apply的参数为一个集合
// call: arr2 [4,5,6] = push[4,5,6](作为一个对象参数传入) => call的参数只能单个按顺序传入
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
Array.prototype.push.apply(arr1, arr2);
console.log(arr1, arr2);