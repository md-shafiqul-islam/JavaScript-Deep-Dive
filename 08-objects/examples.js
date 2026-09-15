/*
 * JavaScript Deep Dive
 * Day 08 — Objects & Object References
 */

// ============================================================
// Example 01 — Creating an Object
// ============================================================

const user = {
  name: "Shafiqul",
  age: 30,
  profession: "Developer",
};

console.log(user);

// ============================================================
// Example 02 — Accessing Properties
// ============================================================

console.log(user.name); // Dot notation
console.log(user["age"]); // Bracket notation

const propertyName = "profession";

console.log(user[propertyName]); // Dynamic property access

// ============================================================
// Example 03 — Adding, Updating, and Deleting Properties
// ============================================================

user.city = "Gazipur";

user.age = 31;

delete user.city;

console.log(user);

// ============================================================
// Example 04 — Primitive Assignment
// ============================================================

let firstNumber = 10;
let secondNumber = firstNumber;

secondNumber = 20;

console.log(firstNumber); // 10
console.log(secondNumber); // 20

// Changing secondNumber does not affect firstNumber.

// ============================================================
// Example 05 — Object Assignment
// ============================================================

const firstUser = {
  name: "Shafiqul",
};

const secondUser = firstUser;

secondUser.name = "Rahim";

console.log(firstUser.name); // Rahim
console.log(secondUser.name); // Rahim

// Both variables refer to the same object.

// ============================================================
// Example 06 — Same Object Reference
// ============================================================

const userOne = {
  name: "Shafiqul",
};

const userTwo = userOne;

console.log(userOne === userTwo); // true

// ============================================================
// Example 07 — Separate Objects
// ============================================================

const personOne = {
  name: "Shafiqul",
};

const personTwo = {
  name: "Shafiqul",
};

console.log(personOne === personTwo); // false

// Same contents do not mean the same object.

// ============================================================
// Example 08 — Nested Objects
// ============================================================

const employee = {
  name: "Shafiqul",
  address: {
    city: "Gazipur",
    country: "Bangladesh",
  },
};

console.log(employee.address.city); // Gazipur

employee.address.city = "Dhaka";

console.log(employee.address.city); // Dhaka

// ============================================================
// Example 09 — Shared Reference With Nested Object
// ============================================================

const originalUser = {
  name: "Shafiqul",
  address: {
    city: "Gazipur",
  },
};

const copiedUser = originalUser;

copiedUser.name = "Rahim";
copiedUser.address.city = "Dhaka";

console.log(originalUser.name); // Rahim
console.log(originalUser.address.city); // Dhaka
console.log(copiedUser.name); // Rahim
console.log(copiedUser.address.city); // Dhaka

console.log(originalUser === copiedUser); // true

// ============================================================
// Example 10 — Object Reference in a Function
// ============================================================

function updateName(person) {
  person.name = "Rahim";
}

const developer = {
  name: "Shafiqul",
};

updateName(developer);

console.log(developer.name); // Rahim

// The function modifies the same object.

// ============================================================
// Example 11 — Object and Closure
// ============================================================

function createUser() {
  const user = {
    name: "Shafiqul",
  };

  return function getUserName() {
    return user.name;
  };
}

const getName = createUser();

console.log(getName()); // Shafiqul

// The returned function retains access to the user object
// through the closure.

// ============================================================
// Example 12 — Day 08 Final Concept
// ============================================================

const account = {
  owner: "Shafiqul",
  balance: 5000,
  address: {
    city: "Gazipur",
  },
};

const anotherAccount = account;

anotherAccount.owner = "Rahim";
anotherAccount.address.city = "Dhaka";

console.log(account.owner); // Rahim
console.log(account.address.city); // Dhaka
console.log(anotherAccount.owner); // Rahim
console.log(anotherAccount.address.city); // Dhaka

console.log(account === anotherAccount); // true
