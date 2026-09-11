// ==========================================
// Functions, Callbacks & Higher-Order Functions
// ==========================================

// 1. Function as a Value

function greet() {
  return "Hello";
}

const fn = greet;

console.log(fn()); // Hello

// 2. Callback Function

function processUser(name, callback) {
  console.log(`Processing ${name}`);
  callback();
}

function done() {
  console.log("Done");
}

processUser("Shafiqul", done);

// Processing Shafiqul
// Done

// 3. Higher-Order Function

function calculate(a, b, operation) {
  return operation(a, b);
}

function add(x, y) {
  return x + y;
}

console.log(calculate(5, 3, add)); // 8

// 4. Function Returning a Function

function createGreeting(message) {
  return function (name) {
    return `${message}, ${name}`;
  };
}

const sayHello = createGreeting("Hello");

console.log(sayHello("Shafiqul")); // Hello, Shafiqul

// 5. Closure with Higher-Order Function

function multiplyBy(x) {
  return function (y) {
    return x * y;
  };
}

const double = multiplyBy(2);

console.log(double(5)); // 10
console.log(double(10)); // 20

// 6. forEach()

const numbers = [1, 2, 3];

numbers.forEach((number) => {
  console.log(number);
});

// 1
// 2
// 3

// 7. map()

const values = [1, 2, 3, 4];

const doubled = values.map((value) => value * 2);

console.log(doubled); // [2, 4, 6, 8]

// 8. filter()

const scores = [45, 60, 72, 35, 90];

const passed = scores.filter((score) => score >= 50);

console.log(passed); // [60, 72, 90]

// 9. reduce()

const prices = [100, 200, 300];

const total = prices.reduce((sum, price) => {
  return sum + price;
}, 0);

console.log(total); // 600

// 10. Arrow Function as Callback

const names = ["Alice", "Bob", "Charlie"];

const greetings = names.map((name) => `Hello ${name}`);

console.log(greetings);
// ["Hello Alice", "Hello Bob", "Hello Charlie"]
