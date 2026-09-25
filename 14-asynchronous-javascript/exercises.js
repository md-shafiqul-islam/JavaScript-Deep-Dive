// ============================================
// Asynchronous JavaScript Exercises
// ============================================

// ============================================
// Exercise 1 — Promise Microtask
// ============================================

console.log("A");

Promise.resolve().then(() => {
  console.log("B");
});

console.log("C");

// Expected:
// A
// C
// B

// ============================================
// Exercise 2 — async / await
// ============================================

async function test() {
  console.log("A");

  await Promise.resolve();

  console.log("B");
}

console.log("C");

test();

console.log("D");

// Expected:
// C
// A
// D
// B

// ============================================
// Exercise 3 — Promise Chaining
// ============================================

Promise.resolve(10)
  .then((value) => {
    console.log(value);
    return value * 2;
  })
  .then((value) => {
    console.log(value);
    return value + 5;
  })
  .then((value) => {
    console.log(value);
  });

// Expected:
// 10
// 20
// 25

// ============================================
// Exercise 4 — Returning a Promise
// ============================================

function getUser() {
  return Promise.resolve({
    id: 1,
    name: "Shafiqul",
  });
}

function getOrders(userId) {
  return Promise.resolve(["Order 1", "Order 2"]);
}

getUser()
  .then((user) => {
    console.log(user.name);

    return getOrders(user.id);
  })
  .then((orders) => {
    console.log(orders);
  });

// Expected:
// Shafiqul
// ["Order 1", "Order 2"]

// ============================================
// Exercise 5 — Promise.all()
// ============================================

async function loadDashboard() {
  const [profile, notifications, recommendations] = await Promise.all([
    getProfile(),
    getNotifications(),
    getRecommendations(),
  ]);

  console.log(profile);
  console.log(notifications);
  console.log(recommendations);
}

function getProfile() {
  return Promise.resolve("Profile");
}

function getNotifications() {
  return Promise.resolve("Notifications");
}

function getRecommendations() {
  return Promise.resolve("Recommendations");
}

loadDashboard();

// ============================================
// Exercise 6 — Error Handling
// ============================================

async function loadData() {
  try {
    const data = await Promise.reject(new Error("Request failed"));

    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
}

loadData();

// Expected:
// Request failed

// ============================================
// Exercise 7 — Prediction Challenge
// ============================================

console.log("1");

setTimeout(() => {
  console.log("2");
}, 0);

Promise.resolve().then(() => {
  console.log("3");
});

console.log("4");

// Expected:
// 1
// 4
// 3
// 2

// ============================================
// Exercise 8 — async Prediction
// ============================================

async function run() {
  console.log("A");

  await Promise.resolve();

  console.log("B");

  await Promise.resolve();

  console.log("C");
}

console.log("D");

run();

console.log("E");

// Expected:
// D
// A
// E
// B
// C

// ============================================
// Exercise 9 — Promise Chain
// ============================================

Promise.resolve(5)
  .then((value) => {
    return value * 2;
  })
  .then((value) => {
    return value + 10;
  })
  .then((value) => {
    console.log(value);
  });

// Expected:
// 20

// ============================================
// Exercise 10 — Final Challenge
// ============================================

console.log("Start");

async function process() {
  console.log("Process");

  const result = await Promise.resolve("Result");

  console.log(result);
}

setTimeout(() => {
  console.log("Timer");
}, 0);

process();

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");

// Predict the exact output order before running the code.
