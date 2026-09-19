// Closures

// A closure happens when a function remembers
// and can access variables from its outer scope,
// even after the outer function has finished executing.

function createCounter() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

const counter = createCounter();

counter(); // 1
counter(); // 2
counter(); // 3

// At first, this may look strange.
//
// createCounter() has already finished executing.
//
// But the returned function still remembers
// the count variable from createCounter().
//
// This is a closure.


// Why are closures useful?


// 1. Private Data
// Closures can be used to keep data private.

function createBankAccount(balance) {
  return {
    deposit(amount) {
      balance += amount;
    },

    getBalance() {
      return balance;
    }
  };
}

const account = createBankAccount(1000);

account.deposit(500);

console.log(account.getBalance());
// 1500

console.log(account.balance);
// undefined

// balance cannot be directly accessed from outside.
// It can only be accessed through the functions
// that have access to the closure.


// 2. Callbacks
// Closures appear frequently with callbacks.

function greetUser(name) {
  return function () {
    console.log(`Hello ${name}`);
  };
}

const greetRahul = greetUser("Rahul");

greetRahul();
// Hello Rahul

// The returned function remembers the name variable
// from greetUser().


// 3. Async JavaScript
// Closures are commonly used with timers,
// promises, and event handlers.

function startTimer(name) {
  setTimeout(() => {
    console.log(`${name} finished`);
  }, 1000);
}

startTimer("Rahul");

// The callback remembers the name variable
// even after startTimer() has finished executing.


// The most important thing to remember:
//
// Lexical Scope
// Where a function is written determines
// which variables it can access.
//
// Closure
// A function remembers variables from its outer scope,
// even after that outer function has finished executing.