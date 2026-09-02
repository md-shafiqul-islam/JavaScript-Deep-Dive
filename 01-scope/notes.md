# Scope Notes

## Scope

Scope determines where a variable can be accessed.

## Lexical Scope

JavaScript uses lexical scoping.

The scope of a function is determined by where the function is
written in the source code.

## Scope Chain

Variable lookup proceeds from the current lexical environment toward
outer environments.

Example:

inner scope
↓
outer scope
↓
global scope

## Shadowing

A variable declared in an inner scope can shadow a variable with the
same name in an outer scope.

## let

`let` is block scoped.

## const

`const` is block scoped.

## var

`var` is function scoped.

## Important

The nearest matching variable binding is used during lexical lookup.
