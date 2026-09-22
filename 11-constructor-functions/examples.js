// JavaScript Deep Dive — Day 11
// Constructor Functions

// ============================================
// 1. Basic Constructor Function
// ============================================

function User(name, age) {
  this.name = name;
  this.age = age;
}

const user1 = new User("Shafiqul", 30);
const user2 = new User("Rahim", 28);

console.log(user1.name);
console.log(user2.name);

// ============================================
// 2. Different Instances
// ============================================

console.log(user1 === user2); // false

console.log(user1.name); // Shafiqul
console.log(user2.name); // Rahim

// ============================================
// 3. Prototype Method
// ============================================

User.prototype.greet = function () {
  console.log(`Hello ${this.name}`);
};

user1.greet();
user2.greet();

// ============================================
// 4. Shared Prototype Method
// ============================================

console.log(user1.greet === user2.greet); // true

// The same function is shared through User.prototype.

// ============================================
// 5. Own Properties vs Prototype Properties
// ============================================

console.log(user1.hasOwnProperty("name")); // true
console.log(user1.hasOwnProperty("greet")); // false

console.log("name" in user1); // true
console.log("greet" in user1); // true

// ============================================
// 6. Inspecting the Prototype
// ============================================

console.log(Object.getPrototypeOf(user1) === User.prototype); // true

console.log(Object.getPrototypeOf(user2) === User.prototype); // true

// ============================================
// 7. constructor Property
// ============================================

console.log(User.prototype.constructor === User); // true
console.log(user1.constructor === User); // true

// ============================================
// 8. instanceof
// ============================================

console.log(user1 instanceof User); // true
console.log(user2 instanceof User); // true

// ============================================
// 9. Constructor + Prototype + this
// ============================================

function Account(owner, balance) {
  this.owner = owner;
  this.balance = balance;
}

Account.prototype.deposit = function (amount) {
  this.balance += amount;
};

const account = new Account("Shafiqul", 1000);

account.deposit(500);

console.log(account.balance); // 1500

// ============================================
// 10. Multiple Instances Sharing Methods
// ============================================

const account1 = new Account("Shafiqul", 1000);
const account2 = new Account("Rahim", 2000);

console.log(account1.deposit === account2.deposit); // true

account1.deposit(500);
account2.deposit(300);

console.log(account1.balance); // 1500
console.log(account2.balance); // 2300

// ============================================
// 11. Prototype Chain
// ============================================

console.log(Object.getPrototypeOf(account1) === Account.prototype); // true

console.log(Object.getPrototypeOf(Account.prototype) === Object.prototype); // true

// ============================================
// 12. Same Method, Different this
// ============================================

function Person(name) {
  this.name = name;
}

Person.prototype.introduce = function () {
  console.log(`I am ${this.name}`);
};

const person1 = new Person("Shafiqul");
const person2 = new Person("Rahim");

person1.introduce(); // I am Shafiqul
person2.introduce(); // I am Rahim

// Same function.
// Different call sites.
// Different this values.

// ============================================
// 13. Conceptual new Process
// ============================================

function Product(name) {
  this.name = name;
}

const product = new Product("Laptop");

// Conceptually:
//
// 1. Create object
// 2. Link object to Product.prototype
// 3. Set this = object
// 4. Execute Product
// 5. Return object

console.log(product.name);

// ============================================
// 14. Constructor and Prototype Relationship
// ============================================

function Student(name) {
  this.name = name;
}

Student.prototype.study = function () {
  console.log(`${this.name} is studying`);
};

const student = new Student("Shafiqul");

console.log(student.constructor === Student); // true
console.log(student instanceof Student); // true

student.study();
