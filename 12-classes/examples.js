// JavaScript Deep Dive — Day 12
// Classes

// ============================================
// 1. Basic Class
// ============================================

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello ${this.name}`);
  }
}

const user1 = new User("Shafiqul", 30);
const user2 = new User("Rahim", 28);

console.log(user1.name); // Shafiqul
console.log(user2.name); // Rahim

// ============================================
// 2. Different Instances
// ============================================

console.log(user1 === user2); // false

// ============================================
// 3. Class Methods
// ============================================

user1.greet(); // Hello Shafiqul
user2.greet(); // Hello Rahim

// ============================================
// 4. Shared Prototype Method
// ============================================

console.log(user1.greet === user2.greet); // true

console.log(Object.getPrototypeOf(user1) === User.prototype); // true

// ============================================
// 5. Own Properties vs Prototype Methods
// ============================================

console.log(user1.hasOwnProperty("name")); // true
console.log(user1.hasOwnProperty("greet")); // false

console.log("name" in user1); // true
console.log("greet" in user1); // true

// ============================================
// 6. Class Prototype
// ============================================

console.log(Object.getPrototypeOf(user1) === User.prototype); // true

console.log(Object.getPrototypeOf(user2) === User.prototype); // true

// ============================================
// 7. Static Method
// ============================================

class Calculator {
  static add(a, b) {
    return a + b;
  }

  multiply(a, b) {
    return a * b;
  }
}

console.log(Calculator.add(10, 20)); // 30

const calculator = new Calculator();

console.log(calculator.multiply(10, 20)); // 200

// Static methods belong to the class.
// Instance methods belong to the prototype.

// ============================================
// 8. Class Inheritance
// ============================================

class Animal {
  speak() {
    console.log("Animal makes a sound");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Dog barks");
  }
}

const dog = new Dog();

dog.speak(); // Animal makes a sound
dog.bark(); // Dog barks

// ============================================
// 9. Prototype Chain With Inheritance
// ============================================

console.log(Object.getPrototypeOf(dog) === Dog.prototype); // true

console.log(Object.getPrototypeOf(Dog.prototype) === Animal.prototype); // true

console.log(Object.getPrototypeOf(Animal.prototype) === Object.prototype); // true

// ============================================
// 10. instanceof
// ============================================

console.log(dog instanceof Dog); // true
console.log(dog instanceof Animal); // true

// ============================================
// 11. Constructor Inheritance
// ============================================

class Person {
  constructor(name) {
    this.name = name;
  }
}

class Developer extends Person {
  constructor(name, language) {
    super(name);
    this.language = language;
  }
}

const developer = new Developer("Shafiqul", "JavaScript");

console.log(developer.name); // Shafiqul
console.log(developer.language); // JavaScript

// ============================================
// 12. Method Overriding
// ============================================

class Animal2 {
  speak() {
    console.log("Animal sound");
  }
}

class Dog2 extends Animal2 {
  speak() {
    console.log("Dog barks");
  }
}

const dog2 = new Dog2();

dog2.speak(); // Dog barks

// ============================================
// 13. super Method
// ============================================

class Animal3 {
  speak() {
    console.log("Animal makes a sound");
  }
}

class Dog3 extends Animal3 {
  speak() {
    super.speak();
    console.log("Dog barks");
  }
}

const dog3 = new Dog3();

dog3.speak();

// Animal makes a sound
// Dog barks

// ============================================
// 14. super + this
// ============================================

class Animal4 {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound`);
  }
}

class Dog4 extends Animal4 {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  speak() {
    super.speak();
    console.log(`${this.name} is a ${this.breed}`);
  }
}

const dog4 = new Dog4("Max", "Labrador");

dog4.speak();

// Max makes a sound
// Max is a Labrador

// ============================================
// 15. Multi-Level Inheritance
// ============================================

class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  getInfo() {
    return `${this.name}: ${this.salary}`;
  }
}

class Developer2 extends Employee {
  constructor(name, salary, language) {
    super(name, salary);
    this.language = language;
  }

  getInfo() {
    return `${super.getInfo()} - ${this.language}`;
  }
}

class SeniorDeveloper extends Developer2 {
  constructor(name, salary, language, experience) {
    super(name, salary, language);
    this.experience = experience;
  }

  getInfo() {
    return `${super.getInfo()} - ${this.experience} years`;
  }
}

const senior = new SeniorDeveloper("Rahim", 80000, "TypeScript", 5);

console.log(senior.getInfo());
// Rahim: 80000 - TypeScript - 5 years

console.log(senior instanceof SeniorDeveloper); // true
console.log(senior instanceof Developer2); // true
console.log(senior instanceof Employee); // true

// ============================================
// 16. Complete Prototype Chain
// ============================================

console.log(Object.getPrototypeOf(senior) === SeniorDeveloper.prototype); // true

console.log(
  Object.getPrototypeOf(SeniorDeveloper.prototype) === Developer2.prototype,
); // true

console.log(Object.getPrototypeOf(Developer2.prototype) === Employee.prototype); // true

console.log(Object.getPrototypeOf(Employee.prototype) === Object.prototype); // true
