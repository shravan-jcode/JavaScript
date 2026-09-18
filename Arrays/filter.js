
// ==========================================
// 2. filter() ⭐⭐⭐
// ==========================================

// Use `filter()` when you want to keep only
// the elements that satisfy a condition.
//
// `filter()` returns a NEW array.
// It does NOT modify the original array.

const numbers = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(evenNumbers);
// [2, 4, 6]

console.log(numbers);
// [1, 2, 3, 4, 5, 6]


// ==========================================
// How filter() Works
// ==========================================

// Original array:
//
// [1, 2, 3, 4, 5, 6]
//          ↓
//       filter()
//          ↓
//    "Is the number even?"
//          ↓
//   YES → keep the item
//   NO  → discard the item
//          ↓
//       [2, 4, 6]


// ==========================================
// Callback Return Value
// ==========================================

// The callback should return a value.
//
// If the returned value is:
// truthy → item is kept
// falsy  → item is discarded

const positiveNumbers = [-2, -1, 0, 1, 2, 3];

const positives = positiveNumbers.filter(num => num > 0);

console.log(positives);
// [1, 2, 3]


// ==========================================
// Real-World Example
// ==========================================

const users = [
    { name: "Rahul", active: true },
    { name: "Amit", active: false },
    { name: "John", active: true }
];

const activeUsers = users.filter(user => user.active);

console.log(activeUsers);

// [
//     { name: "Rahul", active: true },
//     { name: "John", active: true }
// ]


// ==========================================
// filter() — Block Body Syntax
// ==========================================

// The same thing can be written using
// a block body and explicit `return`.

const activeUsersDetailed = users.filter((user) => {
    return user.active;
});

console.log(activeUsersDetailed);


// Both are equivalent:
//
// Short:
// users.filter(user => user.active);
//
// Block:
// users.filter((user) => {
//     return user.active;
// });


// ==========================================
// map() vs filter()
// ==========================================

// `map()`
// → transforms every element
// → returns an array with the same number
//   of elements.
//
// Example:
// [1, 2, 3] → [2, 4, 6]


// `filter()`
// → keeps elements that satisfy a condition
// → can return fewer elements.
//
// Example:
// [1, 2, 3, 4] → [2, 4]
