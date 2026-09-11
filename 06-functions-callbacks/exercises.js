// ==========================================
// Day 6 Exercises — Solved
// Functions, Callbacks & Higher-Order Functions
// ==========================================

// Exercise 1 — Function as a Value

function greet() {
  return "Hello";
}

const fn = greet;

console.log(fn()); // Hello

// greet and fn refer to the same function.
// greet → function value
// greet() → calls the function

// Exercise 2 — Callback

function process(callback) {
  console.log("Start");
  callback();
  console.log("End");
}

function finish() {
  console.log("Finished");
}

process(finish);

// Start
// Finished
// End

// finish → callback
// process → Higher-Order Function

// Exercise 3 — HOF Returning a Function

function multiplyBy(x) {
  return function (y) {
    return x * y;
  };
}

const double = multiplyBy(2);

console.log(double(5)); // 10
console.log(double(10)); // 20

// multiplyBy(2) returns the inner function.
// The returned function retains access to x through closure.

// Exercise 4 — map()

const numbers = [1, 2, 3, 4];

const result = numbers.map((number) => {
  return number * number;
});

console.log(result); // [1, 4, 9, 16]

// The callback receives each array element.
// map() returns a new array.
// The original array is not modified.

// Exercise 5 — filter()

const values = [10, 15, 20, 25, 30];

const filtered = values.filter((number) => {
  return number >= 20;
});

console.log(filtered); // [20, 25, 30]

// Values satisfying the condition are kept.
// filter() returns a new array.

// Exercise 6 — reduce()

const numbersForReduce = [5, 10, 15];

const reduced = numbersForReduce.reduce((sum, number) => {
  return sum + number;
}, 0);

console.log(reduced); // 30

// Initial sum = 0
// Step 1: 0 + 5 = 5
// Step 2: 5 + 10 = 15
// Step 3: 15 + 15 = 30

// ==========================================
// Final Challenge — Solved
// ==========================================

function createCalculator(operation) {
  return function (a, b) {
    return operation(a, b);
  };
}

function add(x, y) {
  return x + y;
}

function multiply(x, y) {
  return x * y;
}

const addNumbers = createCalculator(add);
const multiplyNumbers = createCalculator(multiply);

console.log(addNumbers(5, 3)); // 8
console.log(multiplyNumbers(5, 3)); // 15

// createCalculator() is a Higher-Order Function
// because it receives and returns a function.

// operation is a callback because a function is passed to
// createCalculator().

// createCalculator(add) returns the inner function.

// The returned function retains access to the
// operation binding through closure.

// addNumbers → operation refers to add
// multiplyNumbers → operation refers to multiply
