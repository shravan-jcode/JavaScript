
// ==========================================
// Nullish Coalescing Operator (??)
// ==========================================

// `??` provides a fallback value when the
// left side is `null` or `undefined`.
//
// Syntax:
//
// value ?? fallback


// ==========================================
// Basic Example
// ==========================================

const username = null;

const displayName = username ?? "Guest";

console.log(displayName); // Guest

// `username` is null,
// so JavaScript uses the fallback value "Guest".


// ==========================================
// When the Value Exists
// ==========================================

const userNameValue = "Rahul";

const finalName = userNameValue ?? "Guest";

console.log(finalName); // Rahul

// The value is not null or undefined,
// so "Rahul" is kept.


// ==========================================
// ?? vs ||
// ==========================================

// This is an important difference.

// `||` treats ANY falsy value as missing.
//
// Falsy values include:
// false
// 0
// -0
// ""
// null
// undefined
// NaN


const count = 0;

console.log(count || 10); // 10

console.log(count ?? 10); // 0


// Why?
//
// `||` sees 0 as falsy,
// so it uses 10.
//
// `??` only considers null and undefined
// as missing values.
//
// Since 0 is a valid value,
// `??` keeps 0.


// ==========================================
// More Examples
// ==========================================

// `||` replaces false:

const isLoggedIn = false;

console.log(isLoggedIn || true); // true

console.log(isLoggedIn ?? true); // false


// `||` replaces an empty string:

const userInput = "";

console.log(userInput || "Default"); // Default

console.log(userInput ?? "Default"); // ""


// ==========================================
// The Main Rule
// ==========================================

// `||` → fallback when the left side is FALSY.
//
// `??` → fallback only when the left side is
//         NULL or UNDEFINED.


// ==========================================
// When to Use ??
// ==========================================

// Use `??` when values such as:
//
// 0
// false
// ""
//
// are valid values and should NOT be replaced
// by the fallback value.

const score = 0;

const finalScore = score ?? 100;

console.log(finalScore); // 0


// If the value is actually missing:

const missingScore = null;

const defaultScore = missingScore ?? 100;

console.log(defaultScore); // 100
