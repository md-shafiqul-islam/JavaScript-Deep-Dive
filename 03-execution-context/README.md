# Execution Context & Call Stack

## Objective

Understand how JavaScript creates and executes execution contexts and how the call stack manages function execution.

## Topics Covered

- Execution Context
- Global Execution Context (GEC)
- Function Execution Context (FEC)
- Creation Phase
- Execution Phase
- Call Stack
- Nested function execution
- Relationship between execution context and call stack
- Difference between lexical scope and call stack

## Key Mental Model

JavaScript starts by creating the Global Execution Context.

Each execution context has two conceptual phases:

1. Creation Phase
2. Execution Phase

When a function is called, JavaScript creates a new Function Execution Context and pushes it onto the Call Stack.

When the function completes, its execution context is removed from the Call Stack.

## Important Rule

Variable lookup follows lexical scope.

The Call Stack determines execution order; it does not determine where variables are found.

## Status

Completed
