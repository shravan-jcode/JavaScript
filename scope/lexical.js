
// ==================================================
// Lexical Scope
// ==================================================

// Lexical scope means:
//
// A function can access variables based on where
// the function was written, not where it is called.

// Example:

const name = "Rahul";

function greet() {
  console.log(name);
}

greet(); // Rahul

// greet() can access name because name exists
// in the scope where greet() was defined.


// ==================================================
// Nested Scope
// ==================================================

function outer() {
  const age = 25;

  function inner() {
    console.log(name); // Rahul
    console.log(age);  // 25
  }

  inner();
}

outer();


// inner() can access:
//
// 1. Its own variables
// 2. Variables from outer()
// 3. Variables from the global scope
//
// This happens because of the lexical scope chain.


// ==================================================
// Scope Chain
// ==================================================
//
// When JavaScript looks for a variable inside inner(),
// it searches:
//
// inner()
//    ↓
// outer()
//    ↓
// global scope
//
// Example:
//
// inner() looks for "age"
// ↓
// Is age inside inner()?  → No
// ↓
// Is age inside outer()?  → Yes
// ↓
// age = 25
//
// Similarly:
//
// inner() looks for "name"
// ↓
// Is name inside inner()?  → No
// ↓
// Is name inside outer()?  → No
// ↓
// Is name in global scope? → Yes
// ↓
// name = "Rahul"


// ==================================================
// Important: Reverse Access Does NOT Work
// ==================================================
//
// The outer function cannot access variables
// declared inside the inner function.
//
// Example:

function parent() {
  function child() {
    const message = "Hello";
    console.log(message);
  }

  child();

  // console.log(message);
  // ❌ Error: message is not accessible here
}

parent();


// ==================================================
// Temporal Dead Zone (TDZ)
// ==================================================
//
// let and const variables cannot be accessed
// before they are initialized.
//
// Example:
//
// console.log(city);
// const city = "Ahmedabad";
//
// ❌ ReferenceError:
// Cannot access 'city' before initialization
//
// This period between entering the scope and
// initializing the variable is called the
// Temporal Dead Zone (TDZ).


// ==================================================
// IMPORTANT
// ==================================================
//
// Do NOT declare the same const variable twice
// in the same scope.
//
// ❌ Wrong:
//
// const name = "Rahul";
// const name = "Amit";
//
// This will cause:
// SyntaxError: Identifier 'name' has already been declared
//
// So in this file, we declare:
//
// const name = "Rahul";
//
// only ONCE.

