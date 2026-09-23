# Classes

JavaScript Deep Dive — Day 12

## Overview

JavaScript classes provide a cleaner syntax for creating objects and working with prototypes.

In this topic, we learned how classes work with constructors, instances, prototypes, inheritance, method overriding, and `super`.

We also explored static methods and connected class syntax with JavaScript's prototype-based object model.

## Topics Covered

- Classes
- `constructor()`
- Creating class instances
- Class methods
- Classes and prototypes
- `this` inside class methods
- Static methods
- Class inheritance
- `extends`
- `super`
- Constructor inheritance
- Method overriding
- `instanceof`
- Prototype chain
- Connection with constructor functions and prototypes

## Key Learning

Classes provide a cleaner syntax for working with JavaScript's prototype-based object system.

Class methods are placed on the class prototype rather than being recreated for every instance.

Inheritance can be created using `extends`, while `super` allows a child class to access parent functionality.

## Important Distinction

Classes do not eliminate prototypes.

For example:

```js
class User {
  greet() {
    console.log("Hello");
  }
}
```

The greet method is available through:

User.prototype

With inheritance:

instance → Child.prototype → Parent.prototype → Object.prototype → null

## Goal

Build a clear mental model of JavaScript classes, prototypes, inheritance, super, and this so that object-oriented JavaScript becomes easier to understand.
