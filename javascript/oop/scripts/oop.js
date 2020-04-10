
const oopFunctions = {
    play() {
        return "You have run play...";
    }
}

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHello() {
        return `Hello there ${this.name}`;
    }
    birthday() {
        this.age++;
    }
}

export default {oopFunctions, Person};