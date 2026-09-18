
// ==========================================
// 5. some()
// ==========================================

// `some()` checks whether AT LEAST ONE element
// in an array satisfies a condition.
//
// It returns:
// true  → if at least one element matches
// false → if no elements match
//
// `some()` stops searching as soon as it finds
// a matching element.


// ==========================================
// Basic Example
// ==========================================

const numbers = [1, 3, 5, 8];

const hasEven = numbers.some(num => num % 2 === 0);

console.log(hasEven);
// true

// Why?
//
// 1 → odd   → no
// 3 → odd   → no
// 5 → odd   → no
// 8 → even  → YES
//
// At least one number is even,
// so `some()` returns true.


// ==========================================
// When Nothing Matches
// ==========================================

const oddNumbers = [1, 3, 5, 7];

const hasEvenNumber = oddNumbers.some(num => num % 2 === 0);

console.log(hasEvenNumber);
// false

// No element satisfies the condition,
// so `some()` returns false.


// ==========================================
// Real-World Example
// ==========================================

const users = [
    { name: "Rahul", admin: false },
    { name: "Amit", admin: true }
];

const hasAdmin = users.some(user => user.admin);

console.log(hasAdmin);
// true

// At least one user is an admin,
// so the result is true.


// ==========================================
// Easy Way to Remember
// ==========================================

// some()
// → "Does AT LEAST ONE item match?"
//
// YES → true
// NO  → false


// ==========================================
// some() vs find() vs filter()
// ==========================================

// some()
// → Do any items match?
// → Returns true or false.
//
// find()
// → Give me the first matching item.
// → Returns the item or undefined.
//
// filter()
// → Give me ALL matching items.
// → Returns a new array.
