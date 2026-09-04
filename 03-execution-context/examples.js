// ============================================
// DAY 3 — EXECUTION CONTEXT & CALL STACK
// ============================================

// --------------------------------------------
// Example 1 — Function Execution Context
// --------------------------------------------

function greet() {
  console.log("Hello");
}

greet(); // Hello

// --------------------------------------------
// Example 2 — Execution Order
// --------------------------------------------

console.log("Start");

function sayHello() {
  console.log("Hello");
}

sayHello(); // Hello

console.log("End");

// Output:
// Start
// Hello
// End

// --------------------------------------------
// Example 3 — Nested Function Calls
// --------------------------------------------

function first() {
  console.log("First start");

  second();

  console.log("First end");
}

function second() {
  console.log("Second");
}

first();

// Output:
// First start
// Second
// First end

// --------------------------------------------
// Example 4 — Multiple Nested Calls
// --------------------------------------------

function a() {
  console.log("A start");

  function b() {
    console.log("B start");

    function c() {
      console.log("C");
    }

    c();

    console.log("B end");
  }

  b();

  console.log("A end");
}

a();

// Output:
// A start
// B start
// C
// B end
// A end

// --------------------------------------------
// Example 5 — Creation Phase + Execution Phase
// --------------------------------------------

console.log(a);

var a = 10;

function test() {
  console.log(a);
}

test();

// Output:
// undefined
// 10

// --------------------------------------------
// Example 6 — Lexical Scope vs Call Stack
// --------------------------------------------

let x = "global";

function outer() {
  let x = "outer";

  function inner() {
    console.log(x);
  }

  inner();
}

outer();

// Output:
// outer

// Variable lookup:
// inner() → inner lexical environment
//          → outer lexical environment
//          → x = "outer"
