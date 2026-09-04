# Notes — Execution Context & Call Stack

## 1. Execution Context

An Execution Context is the environment in which JavaScript evaluates and executes code.

It contains information required to execute the code, including variable/function bindings and scope-related information.

---

## 2. Global Execution Context

When JavaScript starts executing a script, it creates the Global Execution Context (GEC).

The Global Execution Context is created before the global code starts executing.

---

## 3. Creation Phase

During the creation phase, JavaScript prepares bindings required by the execution context.

Conceptually:

var:
binding is created and initialized with undefined

let / const:
binding is created but remains uninitialized

function declaration:
function binding is created and made available

Example:

var x = 10;

Conceptually during creation:

x -> undefined

During execution:

x -> 10

---

## 4. Execution Phase

During the execution phase, JavaScript executes code according to program order.

Example:

console.log("A");
console.log("B");
console.log("C");

Output:

A
B
C

---

## 5. Function Execution Context

A Function Execution Context (FEC) is created when a function is called.

Example:

function test() {
console.log("Hello");
}

test();

The function binding exists before the call executes, but the Function Execution Context is created when:

test();

is executed.

---

## 6. Call Stack

The Call Stack keeps track of currently executing execution contexts.

It follows LIFO:

Last In, First Out

Example:

function first() {
second();
}

function second() {
third();
}

function third() {
console.log("Hello");
}

first();

When third() is executing:

TOP
third()
second()
first()
Global Execution Context
BOTTOM

When third() completes, it is popped from the stack.

---

## 7. Lexical Scope vs Call Stack

Lexical Scope answers:

"Where does JavaScript search for a variable?"

Call Stack answers:

"Which function is currently executing?"

Variable lookup follows lexical scope.

It does NOT follow the Call Stack.

Example:

var x = "global";

function outer() {
var x = "outer";

    function inner() {
        console.log(x);
    }

    inner();

}

outer();

inner() finds:

x -> outer

because inner() was defined inside outer().

---

## 8. Important Mental Model

Execution Context:
Environment for executing code

Lexical Scope:
Determines variable lookup

Call Stack:
Determines function execution order
