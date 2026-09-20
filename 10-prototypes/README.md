# Prototypes & Prototype Chain

JavaScript Deep Dive — Day 10

## Overview

JavaScript objects can access properties and methods through their prototype chain.

In this topic, we learned how prototype relationships work, how JavaScript performs property lookup, and how own properties differ from inherited properties.

We also connected prototypes with object methods and `this`.

## Topics Covered

- Prototypes
- Own properties vs inherited properties
- Property lookup
- Prototype chain
- `Object.prototype`
- `Object.getPrototypeOf()`
- `Object.create()`
- Property shadowing
- `hasOwnProperty()`
- `in` operator
- Shared prototype methods
- Prototype chain with multiple levels
- Prototypes and `this`
- Connection with objects and object methods

## Key Learning

Every ordinary JavaScript object has an internal prototype relationship.

When a property is not found directly on an object, JavaScript continues searching through its prototype chain.

The lookup continues until the property is found or the chain reaches `null`.

## Important Distinction

Prototype lookup determines where a property or method is found.

The call site determines `this` for a normal function.

For example:

user.greet();

JavaScript may find `greet` on the prototype, but because the function is called as `user.greet()`, `this` is `user`.

## Goal

Build a clear mental model of JavaScript's prototype system so that constructor functions, classes, inheritance, and object-oriented JavaScript become easier to understand.
