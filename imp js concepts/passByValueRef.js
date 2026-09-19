// 1. Pass by Value / Reference

// The easiest practical rule:

// Primitive values are copied. Objects/arrays are shared through references.

let a = 10;
let b = a;

b = 20;

console.log(a); // 10
console.log(b); // 20

// b gets its own copy of 10.

const user1 = {
  name: "Rahul"
};

const user2 = user1;

user2.name = "Amit";

console.log(user1.name); // Amit

// Both variables point to the same object.

// Think:

// user1 ──┐
//         ├──> { name: "Amit" }
// user2 ──┘