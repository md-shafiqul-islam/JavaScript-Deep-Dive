# Closures

## Objective

Understand how JavaScript functions retain access to variables from their surrounding lexical environments and how closures are created and used.

## Topics Covered

- Closure
- Lexical Environment
- Lexical Scope and Closure
- Returning Functions
- Retaining Outer Variables
- Closure State
- Independent Closure Instances
- Data Privacy
- Function Factories
- Closures and the Call Stack

## Key Mental Model

A closure occurs when a function retains access to bindings from its surrounding lexical environment, even after the outer function has finished executing.

Example:

function outer() {
let message = "Hello";

    function inner() {
        console.log(message);
    }

    return inner;

}

const fn = outer();

fn();

Output:

Hello

The inner function retains access to the lexical environment containing `message`.

## Important Rule

A closure does not create a copy of the variable.

The function retains access to the original binding.

## Closure and Lexical Scope

Lexical scope determines where JavaScript searches for a variable.

A closure allows a function to retain access to the relevant outer lexical environment.

## Closure and Call Stack

The Call Stack controls execution order.

The Call Stack does not determine variable lookup.

Variable lookup follows lexical scope.

## Status

Completed
