
// ==========================================
// Type Coercion
// ==========================================

// Type coercion = JavaScript automatically
// converting one type into another.
//
// This happens implicitly (automatically).

const result = "10" - 5;

console.log(result); // 5
console.log(typeof result); // "number"

// Why?
//
// "10" → string
// 5    → number
//
// The `-` operator expects numbers,
// so JavaScript converts "10" into 10.
//
// 10 - 5 = 5


// ==========================================
// Explicit Type Conversion
// ==========================================

// Instead of relying on JavaScript's automatic
// conversion, we can convert values ourselves.
//
// This is called explicit conversion
// (or explicit type casting/conversion).


// ==========================================
// String → Number
// ==========================================

const ageText = "25";

const numberAge = Number(ageText);

console.log(numberAge);        // 25
console.log(typeof numberAge); // "number"


// ==========================================
// Number → String
// ==========================================

const ageNumber = 25;

const textAge = String(ageNumber);

console.log(textAge);        // "25"
console.log(typeof textAge); // "string"


// ==========================================
// Value → Boolean
// ==========================================

console.log(Boolean(1));       // true
console.log(Boolean(0));       // false

console.log(Boolean("hello")); // true
console.log(Boolean(""));      // false


// ==========================================
// Important: Invalid Number Conversion
// ==========================================

// If a string cannot be converted into a valid number,
// Number() returns NaN.

const invalidNumber = Number("hello");

console.log(invalidNumber);        // NaN
console.log(typeof invalidNumber); // "number"

// `NaN` means "Not a Number".
