// ============================================
// DAY 5 — `this`
// ============================================

// --------------------------------------------
// Exercise 1 — Method Call
// --------------------------------------------

const user = {
  name: "Shafiqul",

  greet() {
    console.log(this.name);
  },
};

user.greet();

// Output:
// Shafiqul

// this === user
//
// The method is called directly through user:
//
// user.greet();
//
// Therefore this refers to user.

// --------------------------------------------
// Exercise 2 — Two Objects, One Function
// --------------------------------------------

const user1 = {
  name: "Alice",
};

const user2 = {
  name: "Bob",
};

function greet() {
  console.log(this.name);
}

user1.greet = greet;
user2.greet = greet;

user1.greet();
user2.greet();

// Output:
// Alice
// Bob

// First call:
// this === user1
//
// Second call:
// this === user2
//
// The function is the same,
// but the call sites are different.

// --------------------------------------------
// Exercise 3 — Regular Function
// --------------------------------------------

("use strict");

function showThis() {
  console.log(this);
}

showThis();

// Output:
// undefined
//
// showThis() is a regular function call.
// There is no object before the dot.
//
// In strict mode:
// this === undefined
//
// Without strict mode in a classic browser
// script, this can refer to the global object.

// --------------------------------------------
// Exercise 4 — Method vs Regular Call
// --------------------------------------------

const person = {
  name: "Shafiqul",

  greet() {
    console.log(this.name);
  },
};

person.greet();

const fn = person.greet;

fn();

// Output:
// Shafiqul
// undefined

// First call:
// person.greet()
// this === person
//
// Second call:
// fn()
// this === undefined in strict mode
//
// The function reference does not preserve
// person as its this value.

// --------------------------------------------
// Exercise 5 — Normal Function Inside Method
// --------------------------------------------

const member = {
  name: "Shafiqul",

  greet() {
    function inner() {
      console.log(this);
    }

    inner();
  },
};

member.greet();

// Output:
// undefined
//
// Inside greet():
// this === member
//
// Inside inner():
// this === undefined in strict mode
//
// inner() is a separate normal function.
// Its this is determined by its own call site.
//
// Calling inner() as:
//
// inner();
//
// does not make this === member.

// --------------------------------------------
// Exercise 6 — Arrow Function
// --------------------------------------------

const customer = {
  name: "Shafiqul",

  greet() {
    const inner = () => {
      console.log(this.name);
    };

    inner();
  },
};

customer.greet();

// Output:
// Shafiqul
//
// Inside greet():
// this === customer
//
// inner() is an arrow function.
//
// Arrow functions do not have their own this.
// It inherits this from the surrounding
// lexical context.
//
// Therefore:
// inner() → this === customer

// --------------------------------------------
// Final Challenge
// --------------------------------------------

const account = {
  name: "Shafiqul",

  normal() {
    console.log("normal:", this.name);
  },

  nested() {
    function inner() {
      console.log("inner:", this);
    }

    inner();
  },

  arrow() {
    const inner = () => {
      console.log("arrow:", this.name);
    };

    inner();
  },
};

account.normal();
account.nested();
account.arrow();

const fn2 = account.normal;
fn2();

// Output:
//
// normal: Shafiqul
// inner: undefined
// arrow: Shafiqul
// normal: undefined

// this inside normal():
// this === account
//
// this inside nested():
// this === account
//
// this inside inner() of nested():
// this === undefined
//
// inner() is a separate normal function.
//
// this inside inner() of arrow():
// this === account
//
// The arrow function has no own this.
// It inherits this from arrow().
//
// this when fn2() executes:
// this === undefined
//
// fn2() is a regular function call.
