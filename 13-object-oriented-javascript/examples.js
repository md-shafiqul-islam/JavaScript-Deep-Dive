// ============================================
// Object-Oriented JavaScript
// ============================================

// ============================================
// 1. Basic Class
// ============================================

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  greet() {
    console.log(`Hello ${this.name}`);
  }
}

const user = new User("Shafiqul", "shafiqul@example.com");

console.log(user.name);
user.greet();

// ============================================
// 2. Encapsulation
// ============================================

class BankAccount {
  constructor(balance) {
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
    }
  }
}

const account = new BankAccount(1000);

account.deposit(500);
account.withdraw(200);

console.log(account.balance);

// ============================================
// 3. Private Fields
// ============================================

class PrivateBankAccount {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const privateAccount = new PrivateBankAccount();

privateAccount.deposit(500);

console.log(privateAccount.getBalance());

// privateAccount.#balance;
// TypeError

// ============================================
// 4. Inheritance
// ============================================

class Employee {
  constructor(name) {
    this.name = name;
  }

  login() {
    console.log(`${this.name} logged in`);
  }
}

class Manager extends Employee {
  createTeam() {
    console.log(`${this.name} created a team`);
  }
}

const manager = new Manager("Karim");

manager.login();
manager.createTeam();

// ============================================
// 5. Method Overriding
// ============================================

class Animal {
  speak() {
    console.log("Animal makes a sound");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Dog barks");
  }
}

const dog = new Dog();

dog.speak();

// ============================================
// 6. Polymorphism
// ============================================

class Cat extends Animal {
  speak() {
    console.log("Cat meows");
  }
}

const animals = [new Dog(), new Cat(), new Animal()];

animals.forEach((animal) => {
  animal.speak();
});

// ============================================
// 7. super Method
// ============================================

class Developer extends Employee {
  work() {
    console.log(`${this.name} is writing code`);
  }
}

class SeniorDeveloper extends Developer {
  work() {
    super.work();
    console.log(`${this.name} is reviewing code`);
  }
}

const senior = new SeniorDeveloper("Shafiqul");

senior.work();

// ============================================
// 8. super Constructor
// ============================================

class Product {
  constructor(name) {
    this.name = name;
  }
}

class Laptop extends Product {
  constructor(name, brand) {
    super(name);
    this.brand = brand;
  }
}

const laptop = new Laptop("MacBook Pro", "Apple");

console.log(laptop.name);
console.log(laptop.brand);

// ============================================
// 9. instanceof
// ============================================

console.log(laptop instanceof Laptop);
console.log(laptop instanceof Product);
console.log(laptop instanceof Object);

// ============================================
// 10. hasOwnProperty
// ============================================

console.log(laptop.hasOwnProperty("name"));
console.log(laptop.hasOwnProperty("brand"));
console.log(laptop.hasOwnProperty("toString"));

// ============================================
// 11. Polymorphism with Payments
// ============================================

class Payment {
  pay() {
    console.log("Processing payment");
  }
}

class CardPayment extends Payment {
  pay() {
    console.log("Processing card payment");
  }
}

class CashPayment extends Payment {
  pay() {
    console.log("Processing cash payment");
  }
}

const payments = [new CardPayment(), new CashPayment(), new Payment()];

payments.forEach((payment) => {
  payment.pay();
});

// ============================================
// 12. Composition
// ============================================

class Logger {
  log(message) {
    console.log(`[LOG]: ${message}`);
  }
}

class Application {
  constructor() {
    this.logger = new Logger();
  }

  start() {
    this.logger.log("Application started");
  }
}

const app = new Application();

app.start();

// ============================================
// 13. Real-World Employee Model
// ============================================

class BaseEmployee {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  login() {
    console.log(`${this.name} logged in`);
  }
}

class ManagerEmployee extends BaseEmployee {
  createTask() {
    console.log(`${this.name} created a task`);
  }
}

class DeveloperEmployee extends BaseEmployee {
  writeCode() {
    console.log(`${this.name} is writing code`);
  }
}

const managerEmployee = new ManagerEmployee("Karim", "karim@example.com");

const developerEmployee = new DeveloperEmployee("Rahim", "rahim@example.com");

managerEmployee.login();
managerEmployee.createTask();

developerEmployee.login();
developerEmployee.writeCode();

// ============================================
// 14. Prototype Connection
// ============================================

console.log(
  Object.getPrototypeOf(managerEmployee) === ManagerEmployee.prototype,
);

console.log(
  Object.getPrototypeOf(ManagerEmployee.prototype) === BaseEmployee.prototype,
);
