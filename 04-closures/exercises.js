// ============================================
// DAY 4 — CLOSURES
// ============================================

// --------------------------------------------
// Exercise 1
// --------------------------------------------

function outer() {
  let message = "Hello";

  function inner() {
    console.log(message);
  }

  return inner;
}

const fn = outer();

fn();

// Output:
// Hello

// message is created inside outer().
//
// outer() returns inner.
//
// inner() retains access to the lexical
// environment containing message.
//
// Therefore fn() can access message even
// after outer() has finished execution.

// --------------------------------------------
// Exercise 2
// --------------------------------------------

function createCounter() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

const counter = createCounter();

counter();
counter();
counter();

// Output:
// 1
// 2
// 3

// A new count variable is NOT created on
// every counter() call.
//
// count is created when createCounter()
// executes.
//
// The returned function retains access to
// the lexical environment containing count.
//
// The same count binding is modified:
//
// 0 → 1
// 1 → 2
// 2 → 3

// --------------------------------------------
// Exercise 3
// --------------------------------------------

let x = "global";

function outer() {
  let x = "outer";

  return function inner() {
    console.log(x);
  };
}

const fnc = outer();

function another() {
  let x = "another";

  fn();
}

another();

// Output:
// outer

// inner() does not use x = "another".
//
// inner() was defined inside outer(),
// not inside another().
//
// Variable lookup follows lexical scope:
//
// inner lexical environment
//       ↓
// outer lexical environment
//       ↓
// x = "outer"
//
// The global x is not reached because
// the outer x is found first.

// --------------------------------------------
// Exercise 4
// --------------------------------------------

function createCounterObject() {
  let count = 0;

  return {
    increment() {
      count++;
    },

    getCount() {
      return count;
    },
  };
}

const counterObject = createCounterObject();

console.log(counterObject.getCount());

counterObject.increment();
counterObject.increment();

console.log(counterObject.getCount());

// Output:
// 0
// 2

// getCount() has access to count through
// the closure.
//
// increment() modifies the same count binding.
//
// Therefore:
//
// Initial count = 0
// increment() → 1
// increment() → 2
// getCount() → 2

// --------------------------------------------
// Final Challenge
// --------------------------------------------

function createCounterFinal() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const counterA = createCounterFinal();
const counterB = createCounterFinal();

console.log(counterA());
console.log(counterA());

console.log(counterB());

console.log(counterA());
console.log(counterB());

// Output:
// 1
// 2
// 1
// 3
// 2

// Two separate count bindings are created.
//
// createCounterFinal() is called twice.
//
// First call:
//
// counterA
//   ↓
// closure A
//   ↓
// count = 0
//
// Second call:
//
// counterB
//   ↓
// closure B
//   ↓
// count = 0
//
// counterA and counterB do not share
// the same count binding.
