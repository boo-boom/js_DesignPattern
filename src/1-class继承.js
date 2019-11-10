class Person {
    constructor(name) {
        this.name = name
    }
    getName() {
        console.log(`getName: ${this.name}`)
    }
}

// 继承
class Student extends Person {
    constructor(name, age){
        super(name)
        this.age = age
    }
    getAge() {
        console.log(`getAge: ${this.age}`)
    }
}

let p = new Student('nameaaaaa', 20)
p.getName()
p.getAge()
