/*
 * JavaScript Deep Dive
 * Day 08 — Exercises
 *
 * Try to predict the output before checking the solution.
 */

// ============================================================
// Exercise 01 — Property Access
// ============================================================

const student = {
  name: "Karim",
  age: 22,
  department: "CSE",
};

// 1. Print the student's name using dot notation.
// 2. Print the student's age using bracket notation.
// 3. Store "department" in a variable and access it dynamically.

// Solution:

console.log(student.name);
console.log(student["age"]);

const property = "department";

console.log(student[property]);

// ============================================================
// Exercise 02 — Add, Update, Delete
// ============================================================

const product = {
  name: "Laptop",
  price: 70000,
};

// 1. Add a brand property.
// 2. Update the price to 75000.
// 3. Delete the name property.

// Solution:

product.brand = "Lenovo";
product.price = 75000;

delete product.name;

console.log(product);

// ============================================================
// Exercise 03 — Primitive vs Reference
// ============================================================

let firstValue = 100;
let secondValue = firstValue;

secondValue = 200;

// Predict the output.

console.log(firstValue);
console.log(secondValue);

// Answer:
// 100
// 200

// Reason:
// Primitive assignment copies the value.

// ============================================================
// Exercise 04 — Object Reference
// ============================================================

const firstPerson = {
  name: "Shafiqul",
};

const secondPerson = firstPerson;

secondPerson.name = "Rahim";

// Predict the output.

console.log(firstPerson.name);
console.log(secondPerson.name);

// Answer:
// Rahim
// Rahim

// Reason:
// Both variables refer to the same object.

// ============================================================
// Exercise 05 — Object Equality
// ============================================================

const objectA = {
  value: 10,
};

const objectB = {
  value: 10,
};

const objectC = objectA;

// Predict the output.

console.log(objectA === objectB);
console.log(objectA === objectC);
console.log(objectB === objectC);

// Answer:
// false
// true
// false

// Reason:
// objectA and objectB are different objects.
// objectC refers to the same object as objectA.

// ============================================================
// Exercise 06 — Nested Object Reference
// ============================================================

const user = {
  name: "Shafiqul",
  address: {
    city: "Gazipur",
  },
};

const person = user;

person.address.city = "Dhaka";

// Predict the output.

console.log(user.address.city);
console.log(person.address.city);
console.log(user === person);

// Answer:
// Dhaka
// Dhaka
// true

// Reason:
// user and person refer to the same outer object.
// Both access the same nested address object.

// ============================================================
// Exercise 07 — Separate Objects
// ============================================================

const developerOne = {
  name: "Shafiqul",
  skills: {
    frontend: "React",
  },
};

const developerTwo = {
  name: "Shafiqul",
  skills: {
    frontend: "React",
  },
};

developerTwo.skills.frontend = "Next.js";

// Predict the output.

console.log(developerOne.skills.frontend);
console.log(developerTwo.skills.frontend);
console.log(developerOne === developerTwo);
console.log(developerOne.skills === developerTwo.skills);

// Answer:
// React
// Next.js
// false
// false

// Reason:
// Both outer objects and both nested skills objects
// were created separately.

// ============================================================
// Exercise 08 — Object Passed to a Function
// ============================================================

function updateBalance(account) {
  account.balance = 10000;
}

const bankAccount = {
  owner: "Shafiqul",
  balance: 5000,
};

updateBalance(bankAccount);

// Predict the output.

console.log(bankAccount.balance);

// Answer:
// 10000

// Reason:
// The function modifies the same object.

// ============================================================
// Exercise 09 — Objects and Closures
// ============================================================

function createProfile() {
  const profile = {
    name: "Shafiqul",
    role: "Developer",
  };

  return function getRole() {
    return profile.role;
  };
}

const readRole = createProfile();

// Predict the output.

console.log(readRole());

// Answer:
// Developer

// Reason:
// The returned function forms a closure over profile.

// ============================================================
// Exercise 10 — Final Challenge
// ============================================================

const original = {
  name: "Shafiqul",
  address: {
    city: "Gazipur",
  },
};

const reference = original;

reference.name = "Rahim";
reference.address.city = "Dhaka";

console.log(original.name);
console.log(original.address.city);
console.log(reference.name);
console.log(reference.address.city);
console.log(original === reference);

// Answer:
// Rahim
// Dhaka
// Rahim
// Dhaka
// true

// Reason:
// original and reference point to the same object.
// The nested address object is also accessed through that
// same object reference.
