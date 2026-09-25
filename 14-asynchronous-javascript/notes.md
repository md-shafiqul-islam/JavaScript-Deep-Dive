# Asynchronous JavaScript — Notes

## 1. Asynchronous JavaScript

Allows long-running operations such as:

- API requests
- Database queries
- Timers
- File operations
- Network requests

to complete without blocking the main JavaScript execution flow.

---

## 2. Callbacks

A callback is a function passed to another function to be executed later.

Common problem:

Callback nesting can make asynchronous code difficult to read and maintain.

---

## 3. Promise

A Promise represents the eventual result of an asynchronous operation.

States:

- Pending
- Fulfilled
- Rejected

A Promise settles only once.

---

## 4. Promise Executor

The function passed to `new Promise()` executes synchronously.

`resolve()` → fulfills the Promise.

`reject()` → rejects the Promise.

Important:

Promise executor is synchronous.

Promise reactions are asynchronous.

---

## 5. `.then()`

Handles a fulfilled Promise.

The callback passed to `.then()` runs as a microtask after the current synchronous/task execution finishes.

---

## 6. `.catch()`

Handles Promise rejection.

A rejection can travel through a Promise chain until a `.catch()` handles it.

---

## 7. `.finally()`

Runs after fulfillment or rejection.

Common use:

- Loading cleanup
- Closing resources
- Resetting state

---

## 8. Promise Chaining

Each `.then()` returns a new Promise.

The returned value becomes the fulfillment value for the next `.then()`.

Core pattern:

Promise
→ `.then()`
→ returned value
→ next `.then()`

---

## 9. Returning Promises

When the next step depends on an asynchronous operation, return the Promise.

Important:

`return somePromise`

allows the next `.then()` to wait for and receive its result.

---

## 10. `async`

An `async` function always returns a Promise.

Calling an `async` function starts executing its body immediately.

Execution continues synchronously until an `await` is encountered.

---

## 11. `await`

`await` pauses the current async function until the Promise settles.

It does not block the entire JavaScript runtime.

The continuation after `await` is handled asynchronously.

---

## 12. `try...catch`

Used with `async`/`await` to handle rejected Promises.

Pattern:

`try`
→ asynchronous operation

`catch`
→ handle error

---

## 13. Sequential vs Parallel

Sequential:

Operation A
→ wait
→ Operation B
→ wait
→ Operation C

Parallel:

Operation A ─┐
Operation B ─┼→ Promise.all()
Operation C ─┘

Use parallel execution when operations are independent.

---

## 14. `Promise.all()`

Waits for multiple Promises.

Behavior:

- All fulfilled → fulfills with all results.
- One rejected → rejects.

Useful when several independent results are required.

---

## 15. Promise and Event Loop

Promise reactions such as `.then()` are placed in the Microtask Queue.

General flow:

Async operation
→ Promise settles
→ Promise reaction
→ Microtask Queue
→ Event Loop
→ Call Stack

---

## 16. Important Execution Rules

Synchronous code runs first.

Promise executor runs synchronously.

`setTimeout()` callback runs later as a task.

Promise `.then()` callbacks run as microtasks.

Microtasks are processed before the next task after the current task finishes.

---

## 17. Core Mental Model

Callbacks
→ Promises
→ `.then()` / `.catch()` / `.finally()`
→ async/await
→ try/catch
→ Promise.all()

Underlying mechanism:

Async operation
→ Promise
→ Microtask Queue
→ Event Loop
→ Call Stack

---

## 18. Important Connections

Functions
→ Callbacks
→ Event Loop
→ Microtasks
→ Promises
→ async/await

---

## 19. Key Takeaways

- JavaScript executes synchronous code on the Call Stack.
- Promise executors run synchronously.
- Promises represent future results.
- A Promise settles once.
- `.then()` handles fulfillment.
- `.catch()` handles rejection.
- `.finally()` runs regardless of outcome.
- Promise callbacks run as microtasks.
- Returning a Promise is important for Promise chains.
- `async` functions always return Promises.
- `await` pauses only the current async function.
- `await` does not block the entire runtime.
- Independent operations can often run with `Promise.all()`.
