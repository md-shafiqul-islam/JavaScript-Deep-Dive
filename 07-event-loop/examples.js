// ========================================
// 1. Synchronous Execution
// ========================================

console.log("A");
console.log("B");
console.log("C");

// Output: A -> B -> C

// ========================================
// 2. setTimeout() Runs Later
// ========================================

console.log("Start");

setTimeout(() => {
  console.log("Timer");
}, 0);

console.log("End");

// Output: Start -> End -> Timer

// ========================================
// 3. Promise Callback as a Microtask
// ========================================

console.log("A");

Promise.resolve().then(() => {
  console.log("B");
});

console.log("C");

// Output: A -> C -> B

// ========================================
// 4. Promise Callback vs Timer Callback
// ========================================

console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

Promise.resolve().then(() => {
  console.log("C");
});

console.log("D");

// Output: A -> D -> C -> B

// ========================================
// 5. Multiple Microtasks
// ========================================

Promise.resolve().then(() => {
  console.log("Microtask 1");
});

Promise.resolve().then(() => {
  console.log("Microtask 2");
});

Promise.resolve().then(() => {
  console.log("Microtask 3");
});

// Output: Microtask 1 -> Microtask 2 -> Microtask 3

// ========================================
// 6. Multiple Timer Tasks
// ========================================

setTimeout(() => {
  console.log("Timer 1");
}, 0);

setTimeout(() => {
  console.log("Timer 2");
}, 0);

setTimeout(() => {
  console.log("Timer 3");
}, 0);

// Output: Timer 1 -> Timer 2 -> Timer 3

// ========================================
// 7. Complete Execution Order
// ========================================

console.log("1");

setTimeout(() => {
  console.log("2");
}, 0);

Promise.resolve().then(() => {
  console.log("3");
});

setTimeout(() => {
  console.log("4");
}, 0);

Promise.resolve().then(() => {
  console.log("5");
});

console.log("6");

// Output: 1 -> 6 -> 3 -> 5 -> 2 -> 4
