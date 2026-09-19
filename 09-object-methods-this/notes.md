# Object Methods & this — Notes

## 1. Object Methods

A function stored as an object property is commonly called a method.

Object methods allow an object to contain both data and behavior.

## 2. Method Call

When a normal function is called as a method:

user.greet()

`this` refers to the object before the dot.

user.greet()
↓
this = user

## 3. this and Call Site

For normal functions, `this` is generally determined by how the function is called.

object.method()
↓
this = object

The location where the function was defined does not determine `this` for a normal function.

## 4. Method Extraction

When a method is assigned to another variable:

const greet = user.greet;

and called as:

greet();

it becomes a normal function call.

In strict mode:

this = undefined

Accessing `this.name` then causes a TypeError.

## 5. Same Function, Different this

The same function can be used by different objects.

user.greet()
→ this = user

admin.greet()
→ this = admin

The function stays the same; the call site changes.

## 6. Methods and Object State

Methods can read and modify object properties through `this`.

this.balance
this.name
this.count

This allows methods to work with the object's state.

## 7. Nested Normal Functions

A nested normal function does not automatically inherit the outer function's `this`.

function inner() {
// own this based on its call
}

inner();

`inner()` is a separate normal function call.

## 8. Arrow Functions and this

Arrow functions do not have their own `this`.

They inherit `this` from their surrounding lexical context.

object.method()
↓
method this = object
↓
arrow function
↓
inherits this
↓
this = object

## 9. Normal Function vs Arrow Function

Normal function:

- Has its own `this`.
- `this` depends on how it is called.

Arrow function:

- Has no own `this`.
- Inherits `this` lexically.

## 10. Scope vs this

These are different concepts.

Scope:

- Lexical.
- Determined by where code is written.

Normal-function `this`:

- Dynamic.
- Determined by how the function is called.

Arrow-function `this`:

- Lexical.
- Inherited from the surrounding context.

## 11. call()

`call()` immediately invokes a function with an explicitly provided `this`.

greet.call(user);

## 12. apply()

`apply()` immediately invokes a function with an explicitly provided `this`.

Main difference from `call()`:

call(thisArg, arg1, arg2)

apply(thisArg, [arg1, arg2])

## 13. bind()

`bind()` returns a new function with `this` bound to the provided value.

const boundGreet = greet.bind(user);

The function is executed later when the returned function is called.

## 14. Connection With Previous Concepts

Day 01 — Scope
→ Scope is lexical.

Day 04 — Closures
→ Functions can retain access to their lexical environment.

Day 05 — this
→ Normal-function `this` depends on the call site.

Day 08 — Objects & Object References
→ Objects store data and variables can reference objects.

Day 09 — Object Methods & this
→ Methods provide behavior for objects and can use `this` to access object state.

## 15. Core Mental Model

Normal function
→ `this` depends on call site

Object method
→ object.method()
→ `this = object`

Extracted method
→ function()
→ no object receiver
→ `this = undefined` in strict mode

Arrow function
→ no own `this`
→ inherits surrounding `this`

call()
→ invoke immediately with explicit `this`

apply()
→ invoke immediately with explicit `this`

bind()
→ return a new function with bound `this`

## Key Takeaways

- Object methods are functions stored as object properties.
- Normal-function `this` depends on the call site.
- In `object.method()`, `this` refers to the object.
- Extracting a method changes its call context.
- The same function can be called with different `this` values.
- Arrow functions do not have their own `this`.
- Arrow functions inherit `this` from their surrounding context.
- `call()` and `apply()` invoke immediately with explicit `this`.
- `bind()` returns a new function with bound `this`.
- Scope and `this` are different mechanisms.
