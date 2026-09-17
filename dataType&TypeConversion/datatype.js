
// ==========================================
// JavaScript Data Types
// ==========================================

// JavaScript is dynamically typed.
//
// This means a variable does not have a fixed type.
// The same variable can hold different types of values
// during its lifetime.

let value = 10;       // number

value = "Hello";      // string

value = true;        // boolean


// ==========================================
// Primitive Data Types
// ==========================================

// Primitive values are simple, single values.
//
// The 7 primitive data types in JavaScript are:
//
// 1. string
// 2. number
// 3. bigint
// 4. boolean
// 5. undefined
// 6. symbol
// 7. null

const name = "Rahul";       // string

const age = 25;             // number

const isAdmin = true;       // boolean

const X = undefined;        // undefined

const Y = null;             // null


// ==========================================
// Reference / Non-Primitive Types
// ==========================================

// Objects are non-primitive values.
//
// Common examples:
// - Object
// - Array
// - Function

const user = {
    name: "Rahul",
    age: 25
};

const numbers = [10, 20, 30];

function greet() {
    console.log("Hello");
}


// ==========================================
// Primitive Values — Copied by Value
// ==========================================

let x = 10;

let y = x;

y = 20;

console.log(x); // 10
console.log(y); // 20

// `y` gets a separate copy of th


const user1 = { name: "Rahul" };
const user2 = user1;

user2.name = "Amit";

console.log(user1.name); // "Amit"

// Primitive:
// a → 10

// Reference:
// user1 ──┐
//         ↓
//       {name: "Rahul"}
//         ↑
// user2 ──┘