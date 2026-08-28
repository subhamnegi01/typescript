"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const obj = {
    name: "John Doe",
    age: 30,
    gender: "Male"
};
const obj2 = {
    name: "Smith",
    age: 25
};
const obj3 = {
    name: "Smith",
    age: 25,
    balance: 1000
};
const obj4 = {
    name: "Smith",
    age: 25,
    balance: 1000
};
const arr = [{ name: "Rohit", age: 30, gender: "Male" }, { name: "mohit", age: 25, gender: "Male" }];
// function in TS
function greet(a) {
    console.log(a);
    return a + 5;
}
console.log(greet(5));
function meet(msg, val) {
    console.log(msg, val);
}
meet("Himanshu", 4);
function neet(msg = "JIT") {
    console.log(msg);
}
neet();
// Optional Parameter
function GATE(person) {
    console.log(person || "Rohan");
}
GATE();
GATE("Subham");
// Arrow fun
const sum = (a, b) => {
    return a + b;
};
console.log(sum(3, 4));
//# sourceMappingURL=first.js.map