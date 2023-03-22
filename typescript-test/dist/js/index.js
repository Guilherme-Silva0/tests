"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let x = 20;
x = 16;
console.log(x);
let y = 12;
let fistName = "Guilherme";
let age = 18;
let isAdmin = true;
console.log(fistName);
const myNumbers = [1, 2, 3];
console.log(myNumbers);
console.log(myNumbers.length);
console.log(fistName.toUpperCase());
myNumbers.push(4);
console.log(myNumbers);
let myTuple;
myTuple = [18, "guilherme", ["luiz", "silva"]];
const user = {
    name: "Guilherme",
    age: 18,
};
let a = 0;
a = "name";
a = true;
a = [];
let id = 10;
id = "6d";
let userId = 10;
userId = "66tt";
var Size;
(function (Size) {
    Size["p"] = "pequeno";
    Size["m"] = "medio";
    Size["g"] = "grande";
})(Size || (Size = {}));
const camisa = {
    name: "camisa gola alta",
    size: Size.m,
};
console.log(camisa);
let testes;
testes = "autenticado";
testes = null;
function sum(a, b) {
    return a + b;
}
console.log(sum(12, 21));
function sayHelloTo(name) {
    return `Hello ${name}`;
}
console.log(sayHelloTo("Guilherme"));
function logar(msg) {
    console.log(msg);
}
function greetig(name, greet) {
    if (greet) {
        console.log(`Ola ${greet} ${name}`);
        return;
    }
    console.log(`ola ${name}`);
}
greetig("Guilherme");
greetig("Guilherme", "sir");
function sumNumbers(nums) {
    return nums.n1 + nums.n2;
}
console.log(sumNumbers({ n1: 2, n2: 5 }));
function multiplyNumbers(nums) {
    return nums.n1 * nums.n2;
}
console.log(multiplyNumbers({ n1: 2, n2: 10 }));
function doSomething(info) {
    if (typeof info === "number") {
        console.log(`O numero é ${info}`);
        return;
    }
    console.log("Não foi passado um numero");
}
doSomething(13);
doSomething(false);
function showArrayItems(arr) {
    arr.forEach((item) => {
        console.log(`item ${item}`);
    });
}
let a1 = [1, 2, 3];
let a2 = ["gui", "ju"];
showArrayItems(a1);
showArrayItems(a2);
class User {
    name;
    role;
    isApproved;
    constructor(name, role, isApproved) {
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }
    showUserName() {
        console.log(`Nome do usuario ${this.name}`);
    }
}
const zeca = new User("Gui", "admin", true);
console.log(zeca);
zeca.showUserName();
class Car {
    brand;
    wheels;
    constructor(brand, wheels) {
        this.brand = brand;
        this.wheels = wheels;
    }
    showBrand() {
        console.log(`A marca do carro é ${this.brand}`);
    }
}
const fusca = new Car("VW", 4);
fusca.showBrand();
class SuperCar extends Car {
    engine;
    constructor(brand, wheels, engine) {
        super(brand, wheels);
        this.engine = engine;
    }
}
const a4 = new SuperCar("Audi", 4, 2.0);
a4.showBrand();
function baseParams() {
    return function (constructor) {
        return class extends constructor {
            id = Math.random();
            createdAt = new Date();
        };
    };
}
let Person = class Person {
    name;
    constructor(name) {
        this.name = name;
    }
};
Person = __decorate([
    baseParams()
], Person);
const sam = new Person("sam");
console.log(sam);
