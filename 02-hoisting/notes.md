# Hoisting Notes

## Hoisting

Hoisting means JavaScript prepares variable and function bindings
before executing the code.

JavaScript does not literally move code to the top.

## var

A `var` binding is initialized with `undefined` before execution.

## let

A `let` binding exists before execution but cannot be accessed before
its declaration is executed.

This inaccessible period is called the Temporal Dead Zone.

## const

`const` behaves similarly to `let` regarding the TDZ.

However, a `const` variable must be initialized when declared.

## Function Declaration

Function declarations are available before their declaration appears
during execution.

## Function Expression

Function expressions depend on how their variable is declared.
