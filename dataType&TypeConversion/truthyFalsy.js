
// ==========================================
// Truthy and Falsy
// ==========================================

// JavaScript can treat values as either
// truthy or falsy when used in a condition.
//
// A truthy value behaves like `true`.
// A falsy value behaves like `false`.


// ==========================================
// Falsy Values
// ==========================================

// There are only 7 falsy values in JavaScript.
//
// Memorize these:

false
0
-0
""
null
undefined
NaN


// Everything else is truthy.


// ==========================================
// Examples of Truthy Values
// ==========================================

if ("hello") {
    console.log("runs"); // ✅
}

if ([]) {
    console.log("also runs"); // ✅
}

if ({}) {
    console.log("also runs"); // ✅
}


// ==========================================
// Common Examples
// ==========================================

if ("0") {
    console.log("runs"); // ✅
}

// `"0"` is a non-empty string, so it is truthy.

if (100) {
    console.log("runs"); // ✅
}

if (-10) {
    console.log("runs"); // ✅
}

if ([]) {
    console.log("runs"); // ✅
}

if ({}) {
    console.log("runs"); // ✅
}


// ==========================================
// Falsy Examples
// ==========================================

if (false) {
    console.log("This will NOT run");
}

if (0) {
    console.log("This will NOT run");
}

if ("") {
    console.log("This will NOT run");
}

if (null) {
    console.log("This will NOT run");
}

if (undefined) {
    console.log("This will NOT run");
}

if (NaN) {
    console.log("This will NOT run");
}


// ==========================================
// Easy Rule
// ==========================================

// Falsy:
// false, 0, -0, "", null, undefined, NaN
//
// Everything else → Truthy


// Important:
//
// []  → truthy ✅
// {}  → truthy ✅
// "0" → truthy ✅
// "false" → truthy ✅
//
// They are truthy because they are a non-empty
// string or an object.

