/*
 * JavaScript Deep Dive
 * Day 09 — Object Methods & this
 */

// ============================================================
// Exercise 01 — Basic Method
// ============================================================

const user = {
  name: "Shafiqul",

  greet() {
    console.log(this.name);
  },
};

user.greet();

// Output:
// Shafiqul

// ============================================================
// Exercise 02 — Two Objects, Same Method
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

userOne.greet();
userTwo.greet();

// Output:
// Shafiqul
// Rahim

// Same function, different call-site this.

// ============================================================
// Exercise 03 — Method Extraction
// ============================================================

const person = {
  name: "Shafiqul",

  greet() {
    console.log(this.name);
  },
};

const greet = person.greet;

// Predict:
// greet();

// In strict mode:
// this → undefined
// this.name → TypeError

// ============================================================
// Exercise 04 — Modifying Object State
// ============================================================

const account = {
  balance: 5000,

  deposit(amount) {
    this.balance += amount;
  },
};

account.deposit(2000);

console.log(account.balance);

// Output:
// 7000

// ============================================================
// Exercise 05 — Nested Normal Function
// ============================================================

const employee = {
  name: "Shafiqul",

  greet() {
    function inner() {
      console.log(this.name);
    }

    inner();
  },
};

// Predict:
// employee.greet();

// In strict mode:
// inner() → this = undefined
// this.name → TypeError

// ============================================================
// Exercise 06 — Arrow Function
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

member.greet();

// Output:
// Shafiqul

// Reason:
// inner is an arrow function.
// It inherits this from greet().

// ============================================================
// Exercise 07 — Method + Arrow Function
// ============================================================

const developer = {
  name: "Shafiqul",

  greet() {
    console.log(this.name);

    const inner = () => {
      console.log(this.name);
    };

    inner();
  },
};

developer.greet();

// Output:
// Shafiqul
// Shafiqul

// ============================================================
// Exercise 08 — call()
// ============================================================

const customer = {
  name: "Shafiqul",

  greet() {
    console.log(this.name);
  },
};

const customerGreet = customer.greet;

customerGreet.call(customer);

// Output:
// Shafiqul

// call() explicitly sets this to customer.

// ============================================================
// Exercise 09 — bind()
// ============================================================

const admin = {
  name: "Rahim",

  greet() {
    console.log(this.name);
  },
};

const adminGreet = admin.greet.bind(admin);

adminGreet();

// Output:
// Rahim

// bind() returns a new function.
// The function executes when adminGreet() is called.

// ============================================================
// Exercise 10 — Final Challenge
// ============================================================

const finalUser = {
  name: "Shafiqul",

  greet() {
    console.log("1:", this.name);

    const inner = () => {
      console.log("2:", this.name);
    };

    inner();

    function normalFunction() {
      console.log("3:", this.name);
    }

    // In strict mode this call causes a TypeError.
    // normalFunction();
  },
};

finalUser.greet();

// Output:
// 1: Shafiqul
// 2: Shafiqul

// Why?
//
// 1 → greet() is called as finalUser.greet()
//     Therefore this = finalUser.
//
// 2 → inner is an arrow function.
//     It inherits this from greet().
//
// 3 → normalFunction() would have its own this.
//     In strict mode this = undefined.
//     Therefore this.name causes a TypeError.

// ============================================================
// Exercise 11 — Extracted Method + call()
// ============================================================

const profile = {
  name: "Shafiqul",

  showName() {
    console.log(this.name);
  },
};

const showName = profile.showName;

showName.call(profile);

// Output:
// Shafiqul

// ============================================================
// Exercise 12 — Final Reasoning Challenge
// ============================================================

const userProfile = {
  name: "Shafiqul",

  greet() {
    const arrow = () => {
      console.log("Arrow:", this.name);
    };

    arrow();
  },
};

const extractedGreet = userProfile.greet;

extractedGreet.call(userProfile);

// Predict the output:
//
// Arrow: Shafiqul
//
// Reason:
// call(userProfile) sets greet()'s this to userProfile.
// The arrow function inherits that this.
