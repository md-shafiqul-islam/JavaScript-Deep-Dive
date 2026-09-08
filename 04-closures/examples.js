// ============================================
// DAY 4 — CLOSURES
// ============================================

// --------------------------------------------
// Example 1 — Basic Closure
// --------------------------------------------

function outer() {
  let message = "Hello";

  function inner() {
    console.log(message);
  }

  return inner;
}

const fn = outer();

fn(); // Hello

// --------------------------------------------
// Example 2 — Closure Retains Variable Access
// --------------------------------------------

function createGreeting() {
  let message = "Welcome";

  return function () {
    console.log(message);
  };
}

const greet = createGreeting();

greet(); // Welcome

// --------------------------------------------
// Example 3 — Closure With State
// --------------------------------------------

function createCounter() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

const counter = createCounter();

counter(); // 1
counter(); // 2
counter(); // 3

// --------------------------------------------
// Example 4 — Closure Does Not Copy Variable
// --------------------------------------------

function createCounterValue() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const counterValue = createCounterValue();

console.log(counterValue()); // 1
console.log(counterValue()); // 2
console.log(counterValue()); // 3

// The same count binding is modified.

// --------------------------------------------
// Example 5 — Independent Closures
// --------------------------------------------

const counterA = createCounterValue();
const counterB = createCounterValue();

console.log(counterA()); // 1
console.log(counterA()); // 2

console.log(counterB()); // 1

console.log(counterA()); // 3
console.log(counterB()); // 2

// counterA and counterB have separate count bindings.

// --------------------------------------------
// Example 6 — Lexical Scope + Closure
// --------------------------------------------

let x = "global";

function outerScope() {
  let x = "outer";

  return function innerScope() {
    console.log(x);
  };
}

const innerFunction = outerScope();

function another() {
  let x = "another";

  innerFunction();
}

another(); // outer

// innerScope() uses x from outerScope(),
// not x from another().

// --------------------------------------------
// Example 7 — Data Privacy
// --------------------------------------------

function createUser() {
  let password = "secret";

  return {
    checkPassword() {
      return password;
    },
  };
}

const user = createUser();

console.log(user.checkPassword()); // secret

// password is not directly accessible outside
// the createUser lexical environment.
