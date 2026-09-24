// ============================================
// Object-Oriented JavaScript
// Exercises
// ============================================

// ============================================
// Exercise 1 — Encapsulation
// ============================================

class BankAccount {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount();

account.deposit(500);
account.deposit(200);

console.log(account.getBalance());
console.log(account.balance);

// ============================================
// Exercise 2 — Inheritance + super
// ============================================

class Employee {
  constructor(name) {
    this.name = name;
  }

  introduce() {
    console.log(`I am ${this.name}`);
  }
}

class Developer extends Employee {
  introduce() {
    super.introduce();
    console.log(`${this.name} writes code`);
  }
}

const developer = new Developer("Shafiqul");

developer.introduce();

// ============================================
// Exercise 3 — Polymorphism
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
// Exercise 4 — Prototype + OOP
// ============================================

class User {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello ${this.name}`);
  }
}

class Admin extends User {
  deleteUser() {
    console.log(`${this.name} deleted a user`);
  }
}

const admin = new Admin("Shafiqul");

console.log(admin.hasOwnProperty("name"));
console.log(admin.hasOwnProperty("greet"));
console.log(admin.hasOwnProperty("deleteUser"));

console.log(admin instanceof Admin);
console.log(admin instanceof User);

admin.greet();
admin.deleteUser();

// ============================================
// Exercise 5 — Deep Inheritance + super
// ============================================

class EmployeeBase {
  constructor(name) {
    this.name = name;
  }

  work() {
    console.log(`${this.name} is working`);
  }
}

class DeveloperBase extends EmployeeBase {
  work() {
    console.log(`${this.name} is coding`);
  }
}

class SeniorDeveloperBase extends DeveloperBase {
  work() {
    super.work();
    console.log(`${this.name} is reviewing code`);
  }
}

const developerBase = new DeveloperBase("Rahim");
const seniorBase = new SeniorDeveloperBase("Shafiqul");

seniorBase.work();

console.log(seniorBase instanceof SeniorDeveloperBase);

console.log(seniorBase instanceof DeveloperBase);

console.log(seniorBase instanceof EmployeeBase);

console.log(seniorBase.work === developerBase.work);

// ============================================
// Exercise 6 — Polymorphism Challenge
// ============================================

class Notification {
  send() {
    console.log("Sending notification");
  }
}

class EmailNotification extends Notification {
  send() {
    console.log("Sending email");
  }
}

class SMSNotification extends Notification {
  send() {
    console.log("Sending SMS");
  }
}

class PushNotification extends Notification {
  send() {
    console.log("Sending push notification");
  }
}

const notifications = [
  new EmailNotification(),
  new SMSNotification(),
  new PushNotification(),
];

notifications.forEach((notification) => {
  notification.send();
});

// ============================================
// Exercise 7 — Real-World OOP
// ============================================

class OrganizationMember {
  constructor(name, role) {
    this.name = name;
    this.role = role;
  }

  login() {
    console.log(`${this.name} logged in`);
  }

  getRole() {
    return this.role;
  }
}

class ManagerMember extends OrganizationMember {
  createTask() {
    console.log(`${this.name} created a task`);
  }
}

class DeveloperMember extends OrganizationMember {
  writeCode() {
    console.log(`${this.name} is writing code`);
  }
}

const managerMember = new ManagerMember("Karim", "Manager");

const developerMember = new DeveloperMember("Rahim", "Developer");

managerMember.login();
managerMember.createTask();

developerMember.login();
developerMember.writeCode();

console.log(managerMember instanceof OrganizationMember);

console.log(developerMember instanceof OrganizationMember);

// ============================================
// Exercise 8 — Composition
// ============================================

class Logger {
  log(message) {
    console.log(message);
  }
}

class UserService {
  constructor() {
    this.logger = new Logger();
  }

  createUser(name) {
    this.logger.log(`Creating user: ${name}`);
  }
}

const userService = new UserService();

userService.createUser("Shafiqul");

// ============================================
// Exercise 9 — Abstraction Challenge
// ============================================

class PaymentService {
  pay(amount) {
    this.validate(amount);
    this.process(amount);
    this.complete();
  }

  validate(amount) {
    console.log(`Validating ${amount}`);
  }

  process(amount) {
    console.log(`Processing ${amount}`);
  }

  complete() {
    console.log("Payment completed");
  }
}

const paymentService = new PaymentService();

paymentService.pay(1000);

// ============================================
// Exercise 10 — Final Challenge
// ============================================

class EmployeeFinal {
  constructor(name) {
    this.name = name;
  }

  work() {
    console.log(`${this.name} is working`);
  }
}

class DeveloperFinal extends EmployeeFinal {
  work() {
    console.log(`${this.name} is coding`);
  }
}

class ManagerFinal extends EmployeeFinal {
  work() {
    console.log(`${this.name} is managing`);
  }
}

const employees = [
  new EmployeeFinal("A"),
  new DeveloperFinal("B"),
  new ManagerFinal("C"),
];

employees.forEach((employee) => {
  employee.work();
});

console.log(employees[1] instanceof EmployeeFinal);

console.log(employees[2] instanceof ManagerFinal);

console.log(employees[0].hasOwnProperty("work"));
