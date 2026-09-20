// ============================================================
// JavaScript Deep Dive — Day 10
// Prototypes & Prototype Chain
// ============================================================

// ============================================================
// 01 — Own Property vs Inherited Property
// ============================================================

const user = {
  name: "Shafiqul",
};

console.log(user.name); // Shafiqul
console.log(user.toString); // inherited function

console.log(user.hasOwnProperty("name")); // true
console.log(user.hasOwnProperty("toString")); // false

// ============================================================
// 02 — Property Lookup
// ============================================================

const person = {
  name: "Person",
};

console.log(person.name); // Person
console.log(person.toString); // inherited from Object.prototype

// ============================================================
// 03 — Object.getPrototypeOf()
// ============================================================

const anotherUser = {
  name: "Rahim",
};

console.log(Object.getPrototypeOf(anotherUser) === Object.prototype); // true

// ============================================================
// 04 — Object.create()
// ============================================================

const employee = {
  greet() {
    console.log("Hello");
  },
};

const developer = Object.create(employee);

developer.name = "Shafiqul";

console.log(developer.name); // Shafiqul
developer.greet(); // Hello

// ============================================================
// 05 — Property Lookup Through Prototype
// ============================================================

const parent = {
  role: "Developer",
};

const child = Object.create(parent);

console.log(child.role); // Developer

// ============================================================
// 06 — Property Shadowing
// ============================================================

const baseUser = {
  name: "Person",
};

const specificUser = Object.create(baseUser);

console.log(specificUser.name); // Person

specificUser.name = "Shafiqul";

console.log(specificUser.name); // Shafiqul
console.log(baseUser.name); // Person

// ============================================================
// 07 — hasOwnProperty()
// ============================================================

const account = {
  username: "shafiqul",
};

console.log(account.hasOwnProperty("username")); // true
console.log(account.hasOwnProperty("toString")); // false

// ============================================================
// 08 — in Operator
// ============================================================

const profile = {
  name: "Shafiqul",
};

console.log("name" in profile); // true
console.log("toString" in profile); // true

console.log(profile.hasOwnProperty("name")); // true
console.log(profile.hasOwnProperty("toString")); // false

// ============================================================
// 09 — Shared Prototype Method
// ============================================================

const personPrototype = {
  greet() {
    console.log(`Hello ${this.name}`);
  },
};

const userOne = Object.create(personPrototype);
const userTwo = Object.create(personPrototype);

userOne.name = "Shafiqul";
userTwo.name = "Rahim";

userOne.greet(); // Hello Shafiqul
userTwo.greet(); // Hello Rahim

// ============================================================
// 10 — Prototype Method + this
// ============================================================

const human = {
  name: "Human",

  introduce() {
    console.log(`My name is ${this.name}`);
  },
};

const developerUser = Object.create(human);

developerUser.name = "Shafiqul";

developerUser.introduce(); // My name is Shafiqul

// ============================================================
// 11 — Prototype Method Is Not Own Property
// ============================================================

console.log(developerUser.hasOwnProperty("introduce")); // false

console.log("introduce" in developerUser); // true

// ============================================================
// 12 — Multi-Level Prototype Chain
// ============================================================

const grandParent = {
  country: "Bangladesh",
};

const parentObject = Object.create(grandParent);

parentObject.city = "Dhaka";

const childObject = Object.create(parentObject);

childObject.name = "Shafiqul";

console.log(childObject.name); // Shafiqul
console.log(childObject.city); // Dhaka
console.log(childObject.country); // Bangladesh

// ============================================================
// 13 — Property Not Found
// ============================================================

console.log(childObject.age); // undefined

// ============================================================
// 14 — Inspecting the Prototype Chain
// ============================================================

console.log(Object.getPrototypeOf(childObject) === parentObject); // true

console.log(Object.getPrototypeOf(parentObject) === grandParent); // true

// ============================================================
// 15 — Prototype + this
// ============================================================

const animal = {
  type: "Animal",

  speak() {
    console.log(`${this.name} is an ${this.type}`);
  },
};

const dog = Object.create(animal);

dog.name = "Buddy";
dog.type = "Dog";

dog.speak(); // Buddy is an Dog

// ============================================================
// 16 — Prototype Chain + Method Lookup
// ============================================================

const puppy = Object.create(dog);

puppy.name = "Max";

puppy.speak(); // Max is an Dog

console.log(puppy.hasOwnProperty("speak")); // false
console.log("speak" in puppy); // true

// ============================================================
// Core Mental Model
// ============================================================

/*
Property lookup:

object
  ↓
prototype
  ↓
prototype
  ↓
null

Prototype lookup determines where a property or method is found.

For normal functions, the call site determines `this`.

Example:

puppy.speak();

`speak` may be found on `animal`,
but:

this === puppy
*/
