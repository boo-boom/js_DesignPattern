class Car {
    constructor(name, number) {
        this.name = name
        this.number = number
    }
}

class Trip {
    constructor(car) {
        this.car = car
    }
    start() {
        console.log(`行程开始，名称：${this.car.name}, 车牌：${this.car.number}`)
    }
    end() {
        console.log(`行程结束，单价：${this.car.price}，金额：${this.car.price * 10}`)
    }
}

class Kuaiche extends Car {
    constructor(name, number, price) {
        super(name, number, price)
        this.price = price
    }
}

class Zhuanche extends Car {
    constructor(name, number, price) {
        super(name, number, price)
        this.price = price
    }
}

const kuaiche = new Kuaiche('快车', 10001, 3)
const trip = new Trip(kuaiche)
trip.start()
trip.end()