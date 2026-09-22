# Constructor Functions

JavaScript Deep Dive — Day 11

## Overview

Constructor functions provide a traditional way to create multiple objects with the same structure and shared behavior.

In this topic, we learned how constructor functions work with the `new` operator, prototypes, `this`, and the prototype chain.

We also explored `instanceof` and the `constructor` property.

## Topics Covered

- Constructor functions
- Constructor naming convention
- The `new` operator
- `this` inside constructor functions
- Constructor vs instance
- Constructor vs prototype
- Shared prototype methods
- `User.prototype`
- `constructor` property
- `instanceof`
- Prototype chain and `instanceof`
- Constructor functions without `new`
- Connection with objects, methods, `this`, and prototypes

## Key Learning

A constructor function is a regular JavaScript function intended to initialize objects when called with `new`.

The `new` operator:

1. Creates a new object.
2. Connects the object to the constructor's prototype.
3. Sets `this` to the new object.
4. Executes the constructor function.
5. Returns the new object.

## Important Distinction

Instance properties are usually created inside the constructor:

```js
function User(name) {
  this.name = name;
}

User.prototype.greet = function () {
  console.log(`Hello ${this.name}`);
};
```
