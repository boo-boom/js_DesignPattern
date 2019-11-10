'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Car = function Car(name, number) {
    _classCallCheck(this, Car);

    this.name = name;
    this.number = number;
};

var Trip = function () {
    function Trip(car) {
        _classCallCheck(this, Trip);

        this.car = car;
    }

    _createClass(Trip, [{
        key: 'start',
        value: function start() {
            console.log('\u884C\u7A0B\u5F00\u59CB\uFF0C\u540D\u79F0\uFF1A' + this.car.name + ', \u8F66\u724C\uFF1A' + this.car.number);
        }
    }, {
        key: 'end',
        value: function end() {
            console.log('\u884C\u7A0B\u7ED3\u675F\uFF0C\u5355\u4EF7\uFF1A' + this.car.price + '\uFF0C\u91D1\u989D\uFF1A' + this.car.price * 10);
        }
    }]);

    return Trip;
}();

var Kuaiche = function (_Car) {
    _inherits(Kuaiche, _Car);

    function Kuaiche(name, number, price) {
        _classCallCheck(this, Kuaiche);

        var _this = _possibleConstructorReturn(this, (Kuaiche.__proto__ || Object.getPrototypeOf(Kuaiche)).call(this, name, number, price));

        _this.price = price;
        return _this;
    }

    return Kuaiche;
}(Car);

var Zhuanche = function (_Car2) {
    _inherits(Zhuanche, _Car2);

    function Zhuanche(name, number, price) {
        _classCallCheck(this, Zhuanche);

        var _this2 = _possibleConstructorReturn(this, (Zhuanche.__proto__ || Object.getPrototypeOf(Zhuanche)).call(this, name, number, price));

        _this2.price = price;
        return _this2;
    }

    return Zhuanche;
}(Car);

var kuaiche = new Kuaiche('快车', 10001, 3);
var trip = new Trip(kuaiche);
trip.start();
trip.end();