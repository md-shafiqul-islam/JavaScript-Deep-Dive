# `this`

## Objective

Understand how the `this` keyword works in JavaScript and how its value is determined for different types of function calls.

## Topics Covered

- `this` keyword
- Method calls
- Regular function calls
- `this` in strict mode
- Dynamic `this` binding
- Losing `this`
- Arrow functions
- Lexical `this`
- `call()`
- `apply()`
- `bind()`
- Normal function vs arrow function

## Key Mental Model

For normal functions, `this` is determined by how the function is called.

Examples:

obj.method()
→ this === obj

method()
→ this === undefined in strict mode

method.call(obj)
→ this === obj

method.apply(obj)
→ this === obj

method.bind(obj)
→ creates a function with this bound to obj

## Arrow Functions

Arrow functions do not have their own `this`.

They inherit `this` from their surrounding lexical context.

## Important Difference

Lexical scope:

Where was the function defined?

`this` for a normal function:

How was the function called?

## Status

Completed
