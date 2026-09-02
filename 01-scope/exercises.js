// Day 1 - Scope Exercises

// Exercise 1
let x1 = 10;

function exercise1() {
  let x1 = 20;

  console.log(x1); // 20
}

exercise1();

// Exercise 2
let x2 = 10;

function exercise2() {
  console.log(x2); // 10
}

exercise2();

// Exercise 3
let x3 = 10;

function outer3() {
  let x3 = 20;

  function inner3() {
    console.log(x3); // 20
  }

  inner3();
}

outer3();

// Exercise 4
let x4 = "global";

function outer4() {
  let x4 = "outer";

  function inner4() {
    console.log(x4); // outer
  }

  return inner4;
}

const fn4 = outer4();

fn4();
