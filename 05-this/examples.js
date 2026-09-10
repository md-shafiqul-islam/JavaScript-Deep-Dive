// ============================================
// DAY 5 — `this`
// ============================================

// --------------------------------------------
// Example 1 — Method Call
// --------------------------------------------

const user = {
  name: "Shafiqul",

  greet() {
    console.log(this.name);
  },
};

user.greet(); // Shafiqul

// this === user

// --------------------------------------------
// Example 2 — Same Function, Different Objects
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

user1.greet(); // Alice
user2.greet(); // Bob

// Same function.
// Different call sites.
// Different this values.

// --------------------------------------------
// Example 3 — Regular Function
// --------------------------------------------

("use strict");

function showThis() {
  console.log(this);
}

showThis(); // undefined

// --------------------------------------------
// Example 4 — Losing `this`
// --------------------------------------------

const person = {
  name: "Shafiqul",

  greet() {
    console.log(this.name);
  },
};

person.greet(); // Shafiqul

const fn = person.greet;

fn(); // undefined in strict mode

// person.greet()
// → this === person
//
// fn()
// → regular function call
// → this === undefined in strict mode

// --------------------------------------------
// Example 5 — Normal Function Inside Method
// --------------------------------------------

const account = {
  owner: "Shafiqul",

  showOwner() {
    function inner() {
      console.log(this);
    }

    inner();
  },
};

account.showOwner(); // undefined

// showOwner():
// this === account
//
// inner():
// this === undefined
//
// inner() is a separate normal function.

// --------------------------------------------
// Example 6 — Arrow Function
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

customer.greet(); // Shafiqul

// greet():
// this === customer
//
// inner() is an arrow function.
// Arrow functions do not have their own this.
//
// inner() inherits this from greet().
// Therefore:
// this === customer

// --------------------------------------------
// Example 7 — call()
// --------------------------------------------

function introduce() {
  console.log(this.name);
}

const developer = {
  name: "Shafiqul",
};

introduce.call(developer); // Shafiqul

// --------------------------------------------
// Example 8 — apply()
// --------------------------------------------

function showInfo(role) {
  console.log(this.name, role);
}

showInfo.apply(developer, ["Software Engineer"]);

// Shafiqul Software Engineer

// --------------------------------------------
// Example 9 — bind()
// --------------------------------------------

function sayHello() {
  console.log(this.name);
}

const boundHello = sayHello.bind(developer);

boundHello(); // Shafiqul
