
// ==========================================
// == vs ===
// ==========================================

// Both `==` and `===` are comparison operators.
//
// `==`  → Loose equality
// `===` → Strict equality


// ==========================================
// == Loose Equality
// ==========================================

// `==` compares values after allowing JavaScript
// to convert (coerce) the types when necessary.

console.log(5 == "5"); // true

// Number 5 is compared with string "5".
// JavaScript converts the string to a number,
// so they are considered equal.


// ==========================================
// === Strict Equality
// ==========================================

// `===` checks both:
// 1. Value
// 2. Type
//
// No type conversion is performed.

console.log(5 === "5"); // false

// 5      → number
// "5"    → string
//
// The types are different, so the result is false.


// ==========================================
// More Examples
// ==========================================

console.log(10 == 10);   // true
console.log(10 === 10);  // true

console.log(10 == "10");  // true
console.log(10 === "10"); // false

console.log(true == 1);   // true
console.log(true === 1);  // false


// ==========================================
// null and undefined
// ==========================================

console.log(null == undefined);  // true
console.log(null === undefined); // false

// `==` considers null and undefined equal.
//
// `===` checks their types too:
//
// null      → object (special JavaScript behavior)
// undefined → undefined
//
// Therefore, `===` returns false.


// ==========================================
// Which One Should You Use?
// ==========================================

// In most cases, prefer `===`.
//
// Why?
// - It is more predictable.
// - It does not perform unexpected type conversion.
// - It makes your comparisons easier to understand.
//
// Use `

