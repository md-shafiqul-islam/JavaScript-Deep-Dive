# Object Methods & this

JavaScript Deep Dive — Day 09

## Overview

Objects can contain both data and behavior.

In this topic, we learned how functions stored inside objects work as methods and how `this` allows methods to access the object involved in the call.

We also explored method extraction, arrow functions, and explicit `this` binding.

## Topics Covered

- Object methods
- Method shorthand
- `this` inside object methods
- Method call vs normal function call
- Method extraction
- Same method with different objects
- Methods modifying object state
- Nested functions and `this`
- Arrow functions and lexical `this`
- `call()`
- `apply()`
- `bind()`
- `this` vs lexical scope
- Connection with previous concepts

## Key Learning

For normal functions, `this` is generally determined by how the function is called.

Arrow functions do not have their own `this`. They inherit `this` from their surrounding lexical context.

The same function can therefore have different `this` values depending on how it is called.

## Goal

Build a precise mental model of object methods and `this` so that later concepts such as prototypes, classes, and object-oriented JavaScript become easier to understand.
