class Car {
    constructor(name, number) {
        this.name = name
        this.number = number
    };
    aaa1() {
        console.log(123123)
    };
    // static aaa = {
    //     a: 123
    // };
}

// Car.aaa = 123
const car = new Car()
car.aaa1()
// console.log(Car.aaa)

class Kc extends Car {
    constructor(name, number, price) {
        super(name, number)
        this.price = price
    }
}

class Trip {
    constructor(car) {
        this.car = car
    }
    start() {
        console.log(`行程开始，车型：${this.car.name}，编号：${this.car.number}`)
    }
    end() {
        console.log(`行程结束，费用：${this.car.price}`)
    }
}

const kc = new Kc('快车', 10001, '20.00')
const trip = new Trip(kc)
trip.start()
trip.end()
