// JavaScript Deep Dive — Day 12
// Classes
//
// Exercises completed during Day 12 practice.

// ============================================
// Exercise 1 — Class Basics
// ============================================

class User1 {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello ${this.name}`);
  }
}

const user1 = new User1("Shafiqul");

console.log(user1.name); // Shafiqul
console.log(user1.hasOwnProperty("name")); // true
console.log(user1.hasOwnProperty("greet")); // false
console.log(user1 instanceof User1); // true

user1.greet(); // Hello Shafiqul

// ============================================
// Exercise 2 — Shared Prototype Method
// ============================================

class User2 {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello ${this.name}`);
  }
}

const user2a = new User2("Shafiqul");
const user2b = new User2("Rahim");

console.log(user2a === user2b); // false
console.log(user2a.greet === user2b.greet); // true

console.log(Object.getPrototypeOf(user2a) === User2.prototype); // true

// ============================================
// Exercise 3 — Static Method
// ============================================

class Calculator {
  static add(a, b) {
    return a + b;
  }

  multiply(a, b) {
    return a * b;
  }
}

const calculator = new Calculator();

console.log(Calculator.add(10, 20)); // 30
console.log(calculator.multiply(10, 20)); // 200
console.log(typeof Calculator.multiply); // undefined
console.log(typeof calculator.add); // undefined

// ============================================
// Exercise 4 — Inheritance
// ============================================

class Animal1 {
  speak() {
    console.log("Animal sound");
  }
}

class Dog1 extends Animal1 {
  bark() {
    console.log("Dog barks");
  }
}

const dog1 = new Dog1();

dog1.speak(); // Animal sound
dog1.bark(); // Dog barks

console.log(dog1 instanceof Dog1); // true
console.log(dog1 instanceof Animal1); // true
console.log(dog1.hasOwnProperty("speak")); // false
console.log(dog1.hasOwnProperty("bark")); // false

// Prototype chain:
//
// dog1
// ↓
// Dog1.prototype
// ↓
// Animal1.prototype
// ↓
// Object.prototype
// ↓
// null

// ============================================
// Exercise 5 — super + this
// ============================================

class Animal2 {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound`);
  }
}

class Dog2 extends Animal2 {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  speak() {
    super.speak();
    console.log(`${this.name} is a ${this.breed}`);
  }
}

const dog2 = new Dog2("Max", "Labrador");

dog2.speak();

// Max makes a sound
// Max is a Labrador

// ============================================
// Exercise 6 — Method Overriding
// ============================================

class User3 {
  getRole() {
    return "User";
  }
}

class Admin extends User3 {
  getRole() {
    return "Admin";
  }
}

const user3 = new User3();
const admin = new Admin();

console.log(user3.getRole()); // User
console.log(admin.getRole()); // Admin

console.log(admin instanceof User3); // true
console.log(admin instanceof Admin); // true

// ============================================
// Exercise 7 — Final Challenge
// ============================================

class Employee2 {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  getInfo() {
    return `${this.name}: ${this.salary}`;
  }
}

class Developer3 extends Employee2 {
  constructor(name, salary, language) {
    super(name, salary);
    this.language = language;
  }

  getInfo() {
    return `${super.getInfo()} - ${this.language}`;
  }
}

class SeniorDeveloper2 extends Developer3 {
  constructor(name, salary, language, experience) {
    super(name, salary, language);
    this.experience = experience;
  }

  getInfo() {
    return `${super.getInfo()} - ${this.experience} years`;
  }
}

const developer = new Developer3("Shafiqul", 50000, "JavaScript");

const senior = new SeniorDeveloper2("Rahim", 80000, "TypeScript", 5);

console.log(developer.getInfo());
// Shafiqul: 50000 - JavaScript

console.log(senior.getInfo());
// Rahim: 80000 - TypeScript - 5 years

console.log(developer instanceof Employee2); // true
console.log(senior instanceof Developer3); // true
console.log(senior instanceof Employee2); // true

console.log(developer.hasOwnProperty("language")); // true

console.log(developer.hasOwnProperty("getInfo")); // false

console.log(developer.getInfo === senior.getInfo); // false

// Prototype chain:
//
// senior
// ↓
// SeniorDeveloper2.prototype
// ↓
// Developer3.prototype
// ↓
// Employee2.prototype
// ↓
// Object.prototype
// ↓
// null
