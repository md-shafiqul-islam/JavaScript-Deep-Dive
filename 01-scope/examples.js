// Global scope
let globalMessage = "global";

function showMessage() {
  console.log(globalMessage);
}

showMessage();

// Function scope
function testFunction() {
  let localMessage = "local";

  console.log(localMessage);
}

testFunction();

// Block scope
{
  let blockMessage = "block";

  console.log(blockMessage);
}

// Shadowing
let message = "global";

function shadowTest() {
  let message = "local";

  console.log(message);
}

shadowTest();
console.log(message);
