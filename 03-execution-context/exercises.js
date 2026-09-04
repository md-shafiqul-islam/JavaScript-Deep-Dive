// ============================================
// DAY 3 — EXECUTION CONTEXT & CALL STACK
// ============================================

// --------------------------------------------
// Exercise 1
// --------------------------------------------

console.log("Start");

function greet() {
  console.log("Hello");
}

greet();

console.log("End");

// Output:
// Start
// Hello
// End

// --------------------------------------------
// Exercise 2
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

// Call Stack:
//
// first()
// Global Execution Context
//
// second() is called:
//
// second()
// first()
// Global Execution Context
//
// second() completes → popped
// first() continues → completes → popped

// --------------------------------------------
// Exercise 3
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
// Exercise 4
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

// Creation Phase:
//
// a -> undefined
// test -> function binding
//
// Execution Phase:
//
// console.log(a) -> undefined
// a = 10
// test() -> creates Function Execution Context
// test() prints 10

// --------------------------------------------
// Exercise 5
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

// Variable Lookup:
//
// inner() searches its own lexical environment.
// No x is found.
//
// Then it searches outer()'s lexical environment.
// x = "outer" is found.
//
// Lookup stops there.
//
// The Call Stack is NOT responsible for finding x.

// --------------------------------------------
// Exercise 6 — Final Challenge
// --------------------------------------------

var v = "global";

function outer() {
  var v = "outer";

  function inner() {
    console.log(v);
  }

  inner();
}

console.log(v);

outer();

console.log(v);

// Output:
// global
// outer
// global

// Global Creation Phase:
//
// x -> undefined
// outer -> function binding
//
// Call Stack while inner() is executing:
//
// TOP
// inner()
// outer()
// Global Execution Context
// BOTTOM
//
// Variable Lookup:
//
// inner() searches its lexical environment.
// No local x.
//
// Then searches outer()'s lexical environment.
// Finds x = "outer".
//
// Therefore:
// inner() -> "outer"
//
// The global x remains "global".
