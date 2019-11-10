'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Car = function () {
    function Car(name, number) {
        _classCallCheck(this, Car);

        this.name = name;
        this.number = number;
    }

    _createClass(Car, [{
        key: 'aaa1',
        value: function aaa1() {
            console.log(123123);
        }
    }]);

    return Car;
}();

// Car.aaa = 123
var car = new Car();
car.aaa1();
// console.log(Car.aaa)

var Kc = function (_Car) {
    _inherits(Kc, _Car);

    function Kc(name, number, price) {
        _classCallCheck(this, Kc);

        var _this = _possibleConstructorReturn(this, (Kc.__proto__ || Object.getPrototypeOf(Kc)).call(this, name, number));

        _this.price = price;
        return _this;
    }

    return Kc;
}(Car);

var Trip = function () {
    function Trip(car) {
        _classCallCheck(this, Trip);

        this.car = car;
    }

    _createClass(Trip, [{
        key: 'start',
        value: function start() {
            console.log('\u884C\u7A0B\u5F00\u59CB\uFF0C\u8F66\u578B\uFF1A' + this.car.name + '\uFF0C\u7F16\u53F7\uFF1A' + this.car.number);
        }
    }, {
        key: 'end',
        value: function end() {
            console.log('\u884C\u7A0B\u7ED3\u675F\uFF0C\u8D39\u7528\uFF1A' + this.car.price);
        }
    }]);

    return Trip;
}();

var kc = new Kc('快车', 10001, '20.00');
var trip = new Trip(kc);
trip.start();
trip.end();