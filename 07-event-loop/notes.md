# Event Loop Notes

## 1. Synchronous Code

Synchronous code executes one statement at a time, from top to bottom.

```js
console.log("A");
console.log("B");
console.log("C");
```

Output: A -> B -> C

---

## 2. Call Stack

The Call Stack keeps track of currently executing functions.

- Function call → pushed onto the stack
- Function finishes → removed from the stack

JavaScript executes the current synchronous code before handling pending callbacks.

---

## 3. Host Environment

The browser or Node.js provides APIs for asynchronous operations.

Examples:

- `setTimeout()`
- Network requests
- User events
- File operations

The JavaScript engine does not execute timer callbacks immediately.

---

## 4. Task Queue

The Task Queue stores callbacks from tasks such as timers and some user events.

```js
setTimeout(() => {
  console.log("Timer");
}, 0);
```

`0` milliseconds does not mean the callback runs immediately.

The callback must wait until the current synchronous code finishes.

---

## 5. Microtask Queue

The Microtask Queue stores callbacks such as:

- Promise `.then()`
- Promise `.catch()`
- Promise `.finally()`
- `queueMicrotask()`

Microtasks are processed after the current synchronous code finishes and before the next task.

---

## 6. Event Loop

The Event Loop coordinates the Call Stack, Microtask Queue, and Task Queue.

Basic order: Synchronous code -> Microtask Queue -> Task Queue

The current task must finish before the Event Loop can process pending callbacks.

---

## 7. Promise vs Timer

```js
console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

Promise.resolve().then(() => {
  console.log("C");
});

console.log("D");
```

Output: A -> D -> C -> B

Reason:

- `A` and `D` execute synchronously.
- `C` enters the Microtask Queue.
- `B` enters the Task Queue.
- The microtask runs before the timer task.

---

## 8. Queue Order

Callbacks in the same queue are generally processed in the order they were added.

```text
Microtask 1
Microtask 2
Microtask 3
```

The same principle applies to timer callbacks in the Task Queue.

---

## 9. Important Rules

- Synchronous code executes first.
- `setTimeout(fn, 0)` does not execute immediately.
- Promise callbacks are microtasks.
- Timer callbacks are tasks.
- Microtasks are processed before the next task.
- Microtasks are processed in registration order.
- The Event Loop does not interrupt running synchronous code.
- Variable lookup does not follow the Event Loop or Call Stack.

---

## 10. Core Mental Model

```text
Call Stack
→ executes the current code

Microtask Queue
→ Promise callbacks

Task Queue
→ timer and event callbacks

Event Loop
→ coordinates when queued callbacks can execute
```
