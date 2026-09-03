// ============================================
// HOISTING & SCOPE EXERCISES
// ============================================

// Exercise 1

// Prediction: undefined
// Output: undefined
// Reason: var is initialized with undefined before execution.

console.log(a);

var a = 10;

// --------------------------------------------

// Exercise 2

// Prediction: ReferenceError
// Output: ReferenceError
// Reason: let is hoisted, but it remains in the Temporal Dead Zone (TDZ)
// until its declaration is executed.

console.log(b);

let b = 20;

// --------------------------------------------

// Exercise 3

// Prediction: ReferenceError
// Output: ReferenceError
// Reason: const is hoisted, but it remains in the Temporal Dead Zone (TDZ)
// until its declaration is executed.

console.log(c);

const c = 30;

// --------------------------------------------

// Exercise 4

// Prediction: undefined - Hello
// Output: undefined - Hello
// Reason: var is hoisted and initialized with undefined before execution.
// Therefore, the first access returns undefined. After the assignment is
// executed, the variable contains "Hello", so the second access returns Hello.

console.log(message);

var message = "Hello";

console.log(message);

// --------------------------------------------

// Exercise 5

// Prediction: Hello
// Output: It works successfully.
// Reason: Function declarations are hoisted with their complete function
// definition, so they can be called before their declaration appears
// in the code.

sayHello();

function sayHello() {
  console.log("Hello");
}

// --------------------------------------------

// Exercise 6

// Prediction: TypeError
// Output: TypeError
// Reason: The function expression is assigned using var. During hoisting,
// the variable is initialized with undefined, but the function assignment
// has not happened yet. Calling undefined() causes a TypeError, not a
// ReferenceError.

test();

var test = function () {
  console.log("Hello");
};

// --------------------------------------------

// Exercise 7

// Prediction: ReferenceError
// Output: ReferenceError
// Reason: The function test looks for the variable x in its lexical scope,
// meaning the scope where the function was defined. Since x is available
// in its lexical scope, but in TDZ - JavaScript ReferenceError.

let x = 10;

function test() {
  console.log(x);

  let x = 20;
}

test();
