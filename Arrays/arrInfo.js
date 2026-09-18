
// ==========================================
// Arrays
// ==========================================

// Arrays are used to store multiple values
// in a single variable.

const numbers = [10, 20, 30, 40];

console.log(numbers);
// [10, 20, 30, 40]


// ==========================================
// Array Methods and Callback Functions
// ==========================================

// Many array methods accept a callback function.
//
// A callback is a function that is passed to
// another function as an argument.
//
// The callback is then executed for each element
// (depending on the array method).


// ==========================================
// 1. map() ⭐⭐⭐
// ==========================================

// Use `map()` when you want to transform every
// element of an array and create a NEW array.
//
// `map()` does NOT modify the original array.

const doubledNumbers = numbers.map((number) => {
    return number * 2;
});

console.log(doubledNumbers);
// [20, 40, 60, 80]

console.log(numbers);
// [10, 20, 30, 40]

// The original `numbers` array is unchanged.
//
// The function:
// (number) => {
//     return number * 2;
// }
//
// is the callback function.


// ==========================================
// Shorter Syntax
// ==========================================

// When the callback contains only one expression,
// we can use an implicit return.

const doubled = numbers.map(number => number * 2);

console.log(doubled);
// [20, 40, 60, 80]


// ==========================================
// map() with Objects
// ==========================================

const users = [
    { name: "Rahul", age: 25 },
    { name: "Amit", age: 30 }
];

// We can use `map()` to extract a specific
// property from every object.

const names = users.map(user => user.name);

console.log(names);
// ["Rahul", "Amit"]

// What happens:
//
// First element:
// { name: "Rahul", age: 25 }
//            ↓
//        user.name
//            ↓
//          "Rahul"
//
// Second element:
// { name: "Amit", age: 30 }
//            ↓
//        user.name
//            ↓
//          "Amit"
//
// Final array:
// ["Rahul", "Amit"]


// ==========================================
// Importan

