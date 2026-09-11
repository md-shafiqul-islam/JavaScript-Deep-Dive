# Notes — Closures

## Closure

A closure occurs when a function retains access to variables from its surrounding lexical environment, even after the outer function has finished executing.

```text
Function
+
Retained Lexical Environment
=
Closure
```

---

## Returned Function

A returned function can retain access to the lexical environment where it was created.

```js
function outer() {
  let x = 10;

  return function inner() {
    console.log(x);
  };
}

const fn = outer();

fn(); // 10
```

`inner` retains access to `x` after `outer()` finishes.

---

## Closure Does Not Copy Variables

A closure retains access to the **original binding**.

```js
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
```

The same `count` binding is modified on each call.

---

## Closure State

Closures allow state to persist between function calls.

```text
createCounter()
      ↓
  count = 0
      ↓
returned function
      ↓
retains count
      ↓
1 → 2 → 3
```

---

## Independent Closures

Each call to the outer function creates a separate lexical environment.

```js
const counterA = createCounter();
const counterB = createCounter();
```

Conceptually:

```text
counterA → Closure A → count = 0

counterB → Closure B → count = 0
```

They do not share the same `count` binding.

---

## Lexical Scope and Closure

Lexical scope determines where variable lookup occurs.

A closure retains access to the lexical environment where the function was defined.

```js
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
```

`fn()` uses:

```text
x → "outer"
```

It does not use `x` from `another()`.

---

## Closure and Call Stack

Closure and Call Stack are different concepts.

```text
Call Stack
→ controls execution order

Closure
→ retains access to lexical bindings
```

When the outer function finishes, its execution context leaves the Call Stack, but a retained lexical environment can still be accessed through the closure.

Variable lookup does **not** follow the Call Stack.

---

## Closure and Garbage Collection

A retained lexical environment remains reachable while a closure can still access it.

```js
const counter = createCounter();
```

As long as `counter` remains reachable, the environment containing `count` can remain reachable as well.

---

## Common Uses

Closures are commonly used for:

- Data privacy
- State management
- Counters
- Function factories
- Callbacks
- Event handlers
- Memoization

---

## Core Mental Model

```text
Lexical Scope
→ determines where variable lookup occurs

Closure
→ retains access to outer lexical bindings

Call Stack
→ controls execution order
```
