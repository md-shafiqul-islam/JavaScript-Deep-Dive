// ============================================================
// JavaScript Deep Dive — Day 10
// Prototypes & Prototype Chain
// Exercises
// ============================================================

// ============================================================
// Exercise 01 — Own vs Inherited Property
// ============================================================

const user = {
  name: "Shafiqul",
};

console.log(user.name);
console.log(user.toString);
console.log(user.hasOwnProperty("name"));
console.log(user.hasOwnProperty("toString"));

// Expected:
// Shafiqul
// function
// true
// false

// ============================================================
// Exercise 02 — hasOwnProperty() vs in
// ============================================================

const profile = {
  name: "Shafiqul",
};

console.log("name" in profile);
console.log("toString" in profile);

console.log(profile.hasOwnProperty("name"));
console.log(profile.hasOwnProperty("toString"));

// Expected:
// true
// true
// true
// false

// ============================================================
// Exercise 03 — Object.create()
// ============================================================

const person = {
  greet() {
    return "Hello";
  },
};

const developer = Object.create(person);

developer.name = "Shafiqul";

console.log(developer.name);
console.log(developer.greet());
console.log(developer.hasOwnProperty("greet"));
console.log(Object.getPrototypeOf(developer) === person);

// Expected:
// Shafiqul
// Hello
// false
// true

// ============================================================
// Exercise 04 — Property Shadowing
// ============================================================

const basePerson = {
  name: "Person",
};

const userPerson = Object.create(basePerson);

console.log(userPerson.name);

userPerson.name = "Shafiqul";

console.log(userPerson.name);
console.log(basePerson.name);

// Expected:
// Person
// Shafiqul
// Person

// ============================================================
// Exercise 05 — Prototype Property
// ============================================================

const personPrototype = {
  species: "Human",
};

const userObject = Object.create(personPrototype);

userObject.name = "Shafiqul";

console.log(userObject.species);

personPrototype.species = "Homo sapiens";

console.log(userObject.species);

// Expected:
// Human
// Homo sapiens

// ============================================================
// Exercise 06 — Own Property Created Later
// ============================================================

const rolePrototype = {
  role: "Developer",
};

const roleUser = Object.create(rolePrototype);

console.log(roleUser.role);

roleUser.role = "Software Engineer";

console.log(roleUser.role);
console.log(rolePrototype.role);

// Expected:
// Developer
// Software Engineer
// Developer

// ============================================================
// Exercise 07 — Prototype + this
// ============================================================

const personWithMethod = {
  name: "Person",

  greet() {
    console.log(this.name);
  },
};

const userWithMethod = Object.create(personWithMethod);

userWithMethod.name = "Shafiqul";

userWithMethod.greet();

// Expected:
// Shafiqul

// Important:
// greet is stored on personWithMethod.
// `this` is userWithMethod because the call is:
// userWithMethod.greet();

// ============================================================
// Exercise 08 — Prototype Method + Two Objects
// ============================================================

const sharedPrototype = {
  greet() {
    console.log(`Hello ${this.name}`);
  },
};

const firstUser = Object.create(sharedPrototype);
const secondUser = Object.create(sharedPrototype);

firstUser.name = "Shafiqul";
secondUser.name = "Rahim";

firstUser.greet();
secondUser.greet();

// Expected:
// Hello Shafiqul
// Hello Rahim

// ============================================================
// Exercise 09 — Prototype Chain
// ============================================================

const grandParent = {
  country: "Bangladesh",
};

const parent = Object.create(grandParent);

parent.city = "Dhaka";

const child = Object.create(parent);

child.name = "Shafiqul";

console.log(child.name);
console.log(child.city);
console.log(child.country);
console.log(child.age);

// Expected:
// Shafiqul
// Dhaka
// Bangladesh
// undefined

// ============================================================
// Exercise 10 — Final Challenge
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

const puppy = Object.create(dog);

puppy.name = "Max";

console.log(puppy.name);
console.log(puppy.type);

console.log(puppy.hasOwnProperty("name"));
console.log(puppy.hasOwnProperty("type"));

console.log("speak" in puppy);

puppy.speak();

console.log(Object.getPrototypeOf(puppy) === dog);
console.log(Object.getPrototypeOf(dog) === animal);

// Expected:
// Max
// Dog
// true
// false
// true
// Max is an Dog
// true
// true
