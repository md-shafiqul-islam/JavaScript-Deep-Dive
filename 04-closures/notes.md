# Notes — Closures

## 1. What Is a Closure?

A closure occurs when a function retains access to variables from its surrounding lexical environment, even after the outer function has finished executing.

Example:

function outer() {
let message = "Hello";

    function inner() {
        console.log(message);
    }

    return inner;

}

const fn = outer();

fn();

Output:

Hello

The inner function can still access `message`.

---

## 2. Closure Relationship

Conceptually:

Function + Retained Lexical Environment = Closure

---

## 3. Closure With Returned Function

Example:

function outer() {
let x = 10;

    function inner() {
        console.log(x);
    }

    return inner;

}

const fn = outer();

fn();

`outer()` returns the `inner` function.

The returned function retains access to the lexical environment containing `x`.

---

## 4. Closure Does Not Copy Variables

A closure does not create a copy of the variable.

It retains access to the original binding.

Example:

function createCounter() {
let count = 0;

    return function () {
        count++;
        return count;
    };

}

const counter = createCounter();

counter(); // 1
counter(); // 2
counter(); // 3

The same `count` binding is modified on each call.

---

## 5. Closure State

Example:

function createCounter() {
let count = 0;

    return function () {
        count++;
        return count;
    };

}

const counter = createCounter();

Each call modifies the retained `count` binding.

counter(); // 1
counter(); // 2
counter(); // 3

---

## 6. Independent Closure Instances

Calling the outer function multiple times creates separate lexical environments.

Example:

const counterA = createCounter();
const counterB = createCounter();

Conceptually:

counterA
↓
Closure A
↓
count = 0

counterB
↓
Closure B
↓
count = 0

They do not share the same `count` binding.

---

## 7. Lexical Scope and Closure

Lexical scope determines where variable lookup occurs.

Example:

let x = "global";

function outer() {
let x = "outer";

    return function inner() {
        console.log(x);
    };

}

const fn = outer();

function another() {
let x = "another";

    fn();

}

another();

Output:

outer

`inner()` was defined inside `outer()`, so its lexical environment gives it access to `outer()`'s `x`.

It does not use the `x` from `another()`.

---

## 8. Closure and Call Stack

When outer() executes:

Call Stack:

outer()
Global

When outer() finishes:

Call Stack:

Global

Later, when the returned function executes:

Call Stack:

inner()
Global

The variable `x` is not found through the Call Stack.

It is resolved through the function's retained lexical environment.

---

## 9. Closure and Garbage Collection

If a function still has access to a lexical environment, that environment remains reachable.

Example:

function createCounter() {
let count = 0;

    return function () {
        count++;
    };

}

const counter = createCounter();

The lexical environment containing `count` remains reachable through `counter`.

Therefore it can continue to be used.

---

## 10. Common Uses

Closures are commonly used for:

- Data privacy
- State management
- Counters
- Function factories
- Callbacks
- Event handlers
- Memoization
- Maintaining state between function calls

---

## 11. Core Mental Model

Lexical Scope
↓
Determines variable lookup

Closure
↓
Retains access to outer lexical bindings

Call Stack
↓
Controls execution order
