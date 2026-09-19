/*
 * JavaScript Deep Dive
 * Day 09 — Object Methods & this
 */

// ============================================================
// Example 01 — Object Method
// ============================================================

const user = {
  name: "Shafiqul",

  greet() {
    console.log("Hello");
  },
};

user.greet();

// ============================================================
// Example 02 — this Inside an Object Method
// ============================================================

const person = {
  name: "Shafiqul",

  greet() {
    console.log(this.name);
  },
};

person.greet();

// this → person
// this.name → "Shafiqul"

// ============================================================
// Example 03 — Method Shorthand
// ============================================================

const developer = {
  name: "Shafiqul",

  introduce() {
    console.log(`I am ${this.name}`);
  },
};

developer.introduce();

// ============================================================
// Example 04 — Method Modifying Object State
// ============================================================

const account = {
  owner: "Shafiqul",
  balance: 5000,

  deposit(amount) {
    this.balance += amount;
  },

  getBalance() {
    return this.balance;
  },
};

account.deposit(2000);

console.log(account.getBalance()); // 7000

// ============================================================
// Example 05 — Same Method, Different Objects
// ============================================================

const userOne = {
  name: "Shafiqul",

  greet() {
    console.log(this.name);
  },
};

const userTwo = {
  name: "Rahim",
  greet: userOne.greet,
};

userOne.greet(); // Shafiqul
userTwo.greet(); // Rahim

// Same function, different this.

// ============================================================
// Example 06 — Method Extraction
// ============================================================

const employee = {
  name: "Shafiqul",

  greet() {
    console.log(this.name);
  },
};

const greet = employee.greet;

// In strict mode, this is undefined.
// greet(); // TypeError

// ============================================================
// Example 07 — Nested Normal Function
// ============================================================

const profile = {
  name: "Shafiqul",

  greet() {
    function inner() {
      // In strict mode, this is undefined.
      // console.log(this.name); // TypeError
    }

    inner();
  },
};

profile.greet();

// inner() is a normal function call.
// It does not automatically inherit profile.greet()'s this.

// ============================================================
// Example 08 — Arrow Function Inherits this
// ============================================================

const member = {
  name: "Shafiqul",

  greet() {
    const inner = () => {
      console.log(this.name);
    };

    inner();
  },
};

member.greet(); // Shafiqul

// Arrow function has no own this.
// It inherits this from greet().

// ============================================================
// Example 09 — call()
// ============================================================

const customer = {
  name: "Shafiqul",

  greet() {
    console.log(`Hello ${this.name}`);
  },
};

const customerGreet = customer.greet;

customerGreet.call(customer);

// call() immediately invokes the function
// with this explicitly set to customer.

// ============================================================
// Example 10 — apply()
// ============================================================

const calculator = {
  multiply(a, b) {
    return this.value * a * b;
  },

  value: 2,
};

const multiply = calculator.multiply;

console.log(multiply.apply(calculator, [3, 4])); // 24

// apply() immediately invokes the function.
// Arguments are provided as an array.

// ============================================================
// Example 11 — bind()
// ============================================================

const admin = {
  name: "Rahim",

  greet() {
    console.log(`Hello ${this.name}`);
  },
};

const adminGreet = admin.greet.bind(admin);

adminGreet(); // Hello Rahim

// bind() returns a new function.
// It does not execute immediately.

// ============================================================
// Example 12 — call vs bind
// ============================================================

const personOne = {
  name: "Shafiqul",
};

function sayName() {
  console.log(this.name);
}

sayName.call(personOne); // Shafiqul

const boundSayName = sayName.bind(personOne);

boundSayName(); // Shafiqul

// call() → executes immediately
// bind() → returns a new function

// ============================================================
// Example 13 — this vs Lexical Scope
// ============================================================

const accountUser = {
  name: "Shafiqul",

  greet() {
    const message = "Hello";

    const inner = () => {
      console.log(message);
      console.log(this.name);
    };

    inner();
  },
};

accountUser.greet();

// message → lexical scope
// this.name → lexical this inherited by arrow function

// ============================================================
// Example 14 — Method Extraction + call()
// ============================================================

const anotherUser = {
  name: "Shafiqul",

  greet() {
    console.log(this.name);
  },
};

const extractedGreet = anotherUser.greet;

extractedGreet.call(anotherUser); // Shafiqul

// Method extraction removed the original call-site context.
// call() explicitly provides it again.

// ============================================================
// Example 15 — Day 09 Core Example
// ============================================================

const finalUser = {
  name: "Shafiqul",

  greet() {
    console.log("Method:", this.name);

    const arrowFunction = () => {
      console.log("Arrow:", this.name);
    };

    arrowFunction();

    function normalFunction() {
      // In strict mode, this is undefined.
      // console.log("Normal:", this.name); // TypeError
    }

    normalFunction();
  },
};

finalUser.greet();

// Method → this = finalUser
// Arrow → inherits this from greet()
// Normal function → its own this based on its call
