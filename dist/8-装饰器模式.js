'use strict';

var _class, _class2, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Demo = testDec2(_class = testDec1(_class = (_temp = _class2 = function Demo() {
    _classCallCheck(this, Demo);

    console.log('类...');
    console.log(Demo.sss);
}, _class2.sss = {
    s: 'abc'
}, _temp)) || _class) || _class;

function testDec1() {
    console.log('类装饰器1...');
}
function testDec2() {
    console.log('类装饰器2...');
}
new Demo(); // testDec1 => testDec2 => constructor