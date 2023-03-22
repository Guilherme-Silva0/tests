let x: number = 20;

x = 16;

console.log(x);

//inferencia x annotation

let y = 12;

// y = "eita";

//tipos basicos

let fistName: string = "Guilherme";
let age: number = 18;
let isAdmin: boolean = true;

console.log(fistName);

//array

const myNumbers: number[] = [1, 2, 3];

console.log(myNumbers);
console.log(myNumbers.length);
// console.log(myNumbers.toUpperCase());
console.log(fistName.toUpperCase());
myNumbers.push(4);
console.log(myNumbers);

//tuplas
let myTuple: [number, string, string[]];

myTuple = [18, "guilherme", ["luiz", "silva"]];

// myTuple = ["", true, 18]

//object

const user: { name: string; age: number } = {
  name: "Guilherme",
  age: 18,
};

// user.job = "programador";

//any

let a: any = 0;
a = "name";
a = true;
a = [];

// uion type
let id: string | number = 10;
id = "6d";

// type alias
type myIdType = number | string;

let userId: myIdType = 10;
userId = "66tt";

// enum
enum Size {
  p = "pequeno",
  m = "medio",
  g = "grande",
}
const camisa = {
  name: "camisa gola alta",
  size: Size.m,
};

console.log(camisa);

//literal types

let testes: "autenticado" | null;

testes = "autenticado";
testes = null;

//function
function sum(a: number, b: number) {
  return a + b;
}

console.log(sum(12, 21));
// console.log(sum("eita", false));

function sayHelloTo(name: string): string {
  return `Hello ${name}`;
}

console.log(sayHelloTo("Guilherme"));

function logar(msg: string): void {
  console.log(msg);
}

function greetig(name: string, greet?: string): void {
  if (greet) {
    console.log(`Ola ${greet} ${name}`);
    return;
  }
  console.log(`ola ${name}`);
}
greetig("Guilherme");
greetig("Guilherme", "sir");

//interfaces

interface MathFunctionParams {
  n1: number;
  n2: number;
}

function sumNumbers(nums: MathFunctionParams): number {
  return nums.n1 + nums.n2;
}

console.log(sumNumbers({ n1: 2, n2: 5 }));

function multiplyNumbers(nums: MathFunctionParams): number {
  return nums.n1 * nums.n2;
}

console.log(multiplyNumbers({ n1: 2, n2: 10 }));

//narrowing

function doSomething(info: number | boolean): void {
  if (typeof info === "number") {
    console.log(`O numero é ${info}`);
    return;
  }
  console.log("Não foi passado um numero");
}

doSomething(13);
doSomething(false);

//generyc

function showArrayItems<T>(arr: T[]) {
  arr.forEach((item) => {
    console.log(`item ${item}`);
  });
}

let a1 = [1, 2, 3];
let a2 = ["gui", "ju"];

showArrayItems(a1);
showArrayItems(a2);

//classes (inferno!)

class User {
  name;
  role;
  isApproved;

  constructor(name: string, role: string, isApproved: boolean) {
    this.name = name;
    this.role = role;
    this.isApproved = isApproved;
  }

  showUserName(): void {
    console.log(`Nome do usuario ${this.name}`);
  }
}

const zeca = new User("Gui", "admin", true);
console.log(zeca);
zeca.showUserName();

//iterfaces em classes (um terror)

interface isVehicle {
  brand: string;
  showBrand(): void;
}

class Car implements isVehicle {
  brand;
  wheels;

  constructor(brand: string, wheels: number) {
    this.brand = brand;
    this.wheels = wheels;
  }

  showBrand(): void {
    console.log(`A marca do carro é ${this.brand}`);
  }
}

const fusca = new Car("VW", 4);

fusca.showBrand();

//herança

class SuperCar extends Car {
  engine;

  constructor(brand: string, wheels: number, engine: number) {
    super(brand, wheels);
    this.engine = engine;
  }
}

const a4 = new SuperCar("Audi", 4, 2.0);
a4.showBrand();

//Decorators

function baseParams() {
  return function <T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      id = Math.random();
      createdAt = new Date();
    };
  };
}

@baseParams()
class Person {
  name;

  constructor(name: string) {
    this.name = name;
  }
}

const sam = new Person("sam");
console.log(sam);
