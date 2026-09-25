# Asynchronous JavaScript

## Overview

Asynchronous JavaScript allows operations such as timers, API requests, database queries, and other I/O tasks to complete without blocking the main JavaScript execution flow.

This topic builds on the Event Loop and introduces Promises and async/await.

## Topics Covered

- Synchronous vs asynchronous JavaScript
- Callbacks
- Callback hell
- Promises
- Promise states
- Promise resolution and rejection
- `.then()`
- `.catch()`
- `.finally()`
- Promise chaining
- Returning Promises
- `async`
- `await`
- `try...catch`
- Sequential vs parallel asynchronous operations
- `Promise.all()`
- Promises and the Microtask Queue
- Connection between Promises and the Event Loop

## Key Goals

After completing this topic, you should understand:

- Why asynchronous JavaScript is necessary
- How callbacks work
- What a Promise represents
- How Promise states change
- How Promise chaining works
- Why returning a Promise matters
- How `async`/`await` works
- How errors are handled with `try...catch`
- When to use `Promise.all()`
- How Promises connect to the Microtask Queue and Event Loop

## Connection to Previous Topics

Event Loop
→ Microtask Queue
→ Promises
→ async/await
→ Asynchronous JavaScript

## Key Mental Model

Synchronous code executes on the Call Stack.

Asynchronous operations are handled with help from the host environment.

Promise reactions are scheduled as microtasks.

The Event Loop coordinates when those microtasks can execute.

## Practice

Exercises focus on:

- Predicting asynchronous execution order
- Promise chaining
- `async`/`await`
- Error handling
- Parallel asynchronous operations
