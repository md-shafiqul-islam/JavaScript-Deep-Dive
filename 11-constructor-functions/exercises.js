// JavaScript Deep Dive — Day 11
// Constructor Functions
//
// Exercises completed during Day 11 practice.

// ============================================
// Exercise 1 — Own vs Prototype
// ============================================

function User1(name) {
  this.name = name;
}

User1.prototype.role = "user";

const user1 = new User1("Shafiqul");

console.log(user1.hasOwnProperty("name")); // true
console.log(user1.hasOwnProperty("role")); // false

console.log("name" in user1); // true
console.log("role" in user1); // true

// ============================================
// Exercise 2 — Shared Method
// ============================================

function User2(name) {
  this.name = name;
}

User2.prototype.greet = function () {
  console.log(`Hello ${this.name}`);
};

const user2a = new User2("Shafiqul");
const user2b = new User2("Rahim");

console.log(user2a.greet === user2b.greet); // true

// ============================================
// Exercise 3 — this + Prototype
// ============================================

function User3(name) {
  this.name = name;
}

User3.prototype.greet = function () {
  console.log(this.name);
};

const user3 = new User3("Shafiqul");

user3.greet(); // Shafiqul

// greet is found through the prototype chain.
// this refers to user3 because the call is user3.greet().

// ============================================
// Exercise 4 — Constructor Property
// ============================================

function User4(name) {
  this.name = name;
}

const user4 = new User4("Shafiqul");

console.log(user4.constructor === User4); // true
console.log(User4.prototype.constructor === User4); // true

// ============================================
// Exercise 5 — Constructor + Prototype Chain
// ============================================

function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  console.log(`${this.name} makes a sound`);
};

function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.constructor = Dog;

Dog.prototype.bark = function () {
  console.log(`${this.name} barks`);
};

const dog = new Dog("Max", "Labrador");

console.log(dog.name); // Max
console.log(dog.breed); // Labrador

console.log(dog.hasOwnProperty("name")); // true
console.log(dog.hasOwnProperty("speak")); // false
console.log(dog.hasOwnProperty("bark")); // false

console.log(dog instanceof Dog); // true
console.log(dog instanceof Animal); // true

dog.speak(); // Max makes a sound
dog.bark(); // Max barks

// Prototype chain:
//
// dog
//   ↓
// Dog.prototype
//   ↓
// Animal.prototype
//   ↓
// Object.prototype
//   ↓
// null
//
// speak is found on Animal.prototype.
// bark is found on Dog.prototype.
//
// dog instanceof Animal is true because
// Animal.prototype exists in dog's prototype chain.
//
// Inside speak():
// this = dog
