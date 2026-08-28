"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class person {
    name;
    age;
    constructor(n1, n2) {
        this.name = n1;
        this.age = n2;
    }
    greet() {
        console.log(`hi ${this.name}`);
    }
}
const obj1 = new person("Rohit", 20);
const obj2 = new person("Smith", 23);
console.log(obj1);
console.log(obj2);
console.log(obj1.name);
obj1.greet();
const obj = {
    name: "Hitesh",
    age: 20,
    salary: "12000",
    id: 123
};
// Public private protected
class customer {
    name;
    age;
    balance;
    constructor(name, age, balance) {
        this.name = name;
        this.age = age;
        this.balance = balance;
    }
    meet() {
        this.age = this.age + 15;
        return this.age;
    }
}
const p1 = new customer("Om", 20, 34312);
console.log(p1.name);
console.log(p1.meet());
class employee extends customer {
    salary;
    constructor(salary, name, age, balance) {
        super(name, age, balance);
        this.salary = salary;
    }
    meet() {
        console.log("Hello Coder Army");
        return 10;
    }
}
const E1 = new employee(12000, "Ramesh", 23, 24223);
console.log(E1);
console.log(E1.meet());
// Generic: Template
// function value(a:(number|string|number[]|boolean)):(number|string|number[]|boolean){
//     return a
// }
function value(a) {
    return a;
}
console.log(value(10));
console.log(value("Rohit"));
console.log(value([10, 11, 12, 13, 14]));
console.log(value(true));
const obj10 = {
    name: "Ridhi",
    age: 20,
    adhar: 1234
};
//# sourceMappingURL=classes.js.map