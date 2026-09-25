// ============================================
// Asynchronous JavaScript
// ============================================

// ============================================
// 1. Callback
// ============================================

function greet(name, callback) {
  console.log(`Hello ${name}`);
  callback();
}

greet("Shafiqul", () => {
  console.log("Callback executed");
});

// ============================================
// 2. setTimeout
// ============================================

console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

console.log("C");

// Output:
// A
// C
// B

// ============================================
// 3. Promise
// ============================================

const promise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve("Operation successful");
  } else {
    reject("Operation failed");
  }
});

promise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

// ============================================
// 4. Promise executor is synchronous
// ============================================

console.log("1");

const example = new Promise((resolve) => {
  console.log("2");

  setTimeout(() => {
    console.log("3");
    resolve("4");
  }, 0);
});

example.then((value) => {
  console.log(value);
});

console.log("5");

// Output:
// 1
// 2
// 5
// 3
// 4

// ============================================
// 5. Promise.resolve()
// ============================================

console.log("A");

Promise.resolve().then(() => {
  console.log("B");
});

console.log("C");

// Output:
// A
// C
// B

// ============================================
// 6. Promise chaining
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

// Output:
// 10
// 20
// 25

// ============================================
// 7. Returning a Promise from a chain
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

// ============================================
// 8. async function
// ============================================

async function getMessage() {
  return "Hello";
}

getMessage().then((message) => {
  console.log(message);
});

// ============================================
// 9. await
// ============================================

async function testAwait() {
  console.log("Start");

  const result = await Promise.resolve("Finished");

  console.log(result);
}

testAwait();

// ============================================
// 10. try...catch with await
// ============================================

async function fetchData() {
  try {
    const result = await Promise.resolve("Data received");

    console.log(result);
  } catch (error) {
    console.log("Error:", error);
  }
}

fetchData();

// ============================================
// 11. Handling rejection
// ============================================

async function fetchUser() {
  try {
    const user = await Promise.reject(new Error("User request failed"));

    console.log(user);
  } catch (error) {
    console.log(error.message);
  }
}

fetchUser();

// ============================================
// 12. Sequential asynchronous operations
// ============================================

async function sequentialExample() {
  const profile = await getProfile();
  const notifications = await getNotifications();

  console.log(profile);
  console.log(notifications);
}

function getProfile() {
  return Promise.resolve("Profile");
}

function getNotifications() {
  return Promise.resolve("Notifications");
}

sequentialExample();

// ============================================
// 13. Parallel operations with Promise.all()
// ============================================

async function parallelExample() {
  const [profile, notifications, recommendations] = await Promise.all([
    getProfile(),
    getNotifications(),
    getRecommendations(),
  ]);

  console.log(profile);
  console.log(notifications);
  console.log(recommendations);
}

function getRecommendations() {
  return Promise.resolve("Recommendations");
}

parallelExample();

// ============================================
// 14. Promise.all() rejection
// ============================================

Promise.all([Promise.resolve("A"), Promise.resolve("B"), Promise.resolve("C")])
  .then((results) => {
    console.log(results);
  })
  .catch((error) => {
    console.log(error);
  });

// Output:
// ["A", "B", "C"]
