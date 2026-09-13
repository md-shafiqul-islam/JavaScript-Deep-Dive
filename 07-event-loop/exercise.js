// ========================================
// Exercise 1
// Predict the output.
// ========================================

console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

console.log("C");

// Answer: A -> C -> B

// Reason:
// Synchronous code runs first.
// The timer callback runs later as a task.

// ========================================
// Exercise 2
// Predict the output.
// ========================================

console.log("A");

Promise.resolve().then(() => {
  console.log("B");
});

console.log("C");

// Answer: A -> C -> B

// Reason:
// The Promise callback is a microtask.
// It runs after synchronous code finishes.

// ========================================
// Exercise 3
// Predict the output.
// ========================================

console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

Promise.resolve().then(() => {
  console.log("C");
});

console.log("D");

// Answer: A -> D -> C -> B

// Reason:
// A and D are synchronous.
// C is a microtask.
// B is a timer task.
// Microtasks run before the next task.

// ========================================
// Exercise 4
// Predict the output.
// ========================================

Promise.resolve().then(() => {
  console.log("A");
});

Promise.resolve().then(() => {
  console.log("B");
});

setTimeout(() => {
  console.log("C");
}, 0);

// Answer: A -> B -> C

// Reason:
// Microtasks execute in registration order.
// Both microtasks run before the timer task.

// ========================================
// Exercise 5
// Predict the output.
// ========================================

console.log("1");

setTimeout(() => {
  console.log("2");
}, 0);

Promise.resolve().then(() => {
  console.log("3");
});

console.log("4");

Promise.resolve().then(() => {
  console.log("5");
});

setTimeout(() => {
  console.log("6");
}, 0);

// Answer: 1 -> 4 -> 3 -> 5 -> 2 -> 6

// Reason:
// Synchronous code: 1, 4
// Microtasks: 3, 5
// Tasks: 2, 6

// ========================================
// Exercise 6
// Final Challenge
// ========================================

console.log("Start");

setTimeout(() => {
  console.log("Timer 1");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise 1");
});

setTimeout(() => {
  console.log("Timer 2");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise 2");
});

console.log("End");

// Answer: Start -> End -> Promise 1 - > Promise 2 -> Timer 1 -> Timer 2

// Reason:
// 1. "Start" and "End" execute synchronously.
// 2. Promise 1 and Promise 2 enter the Microtask Queue.
// 3. Timer 1 and Timer 2 enter the Task Queue.
// 4. Microtasks are processed before timer tasks.
