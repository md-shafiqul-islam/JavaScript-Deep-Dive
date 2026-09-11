# Notes — Functions, Callbacks & Higher-Order Functions

## Functions as Values

Functions are first-class values in JavaScript.

They can be:

- Stored in variables
- Passed as arguments
- Returned from functions

---

## Callback

A callback is a function passed to another function to be called there.

```js
process(finish);
```

- `finish` → callback
- `process` → higher-order function

---

## Higher-Order Function

A function that receives or returns another function.

```js
function process(callback) {}
```

```js
function createFunction() {
  return function () {};
}
```

---

## Function Returning a Function

A function can return another function.

This is commonly used with closures and function factories.

```js
function multiplyBy(x) {
  return function (y) {
    return x * y;
  };
}
```

---

## Array Methods

| Method      | Purpose            | Returns      |
| ----------- | ------------------ | ------------ |
| `forEach()` | Perform an action  | `undefined`  |
| `map()`     | Transform elements | New array    |
| `filter()`  | Select elements    | New array    |
| `reduce()`  | Accumulate values  | Final result |

### Quick Memory

```text
forEach → Do
map     → Transform
filter  → Select
reduce  → Combine
```

---

## Callback + `this`

Normal function:

```text
this → determined by call site
```

Arrow function:

```text
this → inherited from surrounding scope
```

Arrow functions do not have their own `this`.

---

## HOF + Closure

A higher-order function can return a function.

If the returned function accesses an outer variable, it forms a closure.

```text
HOF
 ↓
returns function
 ↓
retains outer variable
 ↓
closure
```

---

## Key Takeaways

- Functions are first-class values.
- Callback = function passed to another function.
- HOF = function that receives or returns a function.
- `map()` transforms.
- `filter()` selects.
- `reduce()` combines.
- `forEach()` performs an action.
- Returned functions can create closures.
