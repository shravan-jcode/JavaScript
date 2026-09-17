
// ==========================================
// Hoisting
// ==========================================

// Hoisting means JavaScript processes certain
// declarations before executing the code.

// ------------------------------------------
// var and Hoisting
// ------------------------------------------

console.log(x); // undefined

var x = 10;

console.log(x); // 10


// Why does the first console.log() print undefined?
//
// JavaScript treats the declaration roughly like this:
//
// var x;
// console.log(x); // undefined
// x = 10;
//
// The variable is hoisted and initialized with `undefined`.


// ==========================================
// let and const with Hoisting
// ==========================================

// `let` and `const` are also hoisted,
// but they are NOT initialized before their declaration.

// Trying to access them before the declaration
// causes a ReferenceError.

console.log(y); // ❌ ReferenceError

let y = 10;


// The same applies to `const`:

console.log(z); // ❌ ReferenceError

const z = 10;


// ==========================================
// Temporal Dead Zone (TDZ)
// ==========================================

// The period between entering the scope and reaching
// the declaration of a `let` or `const` variable
// is called the Temporal Dead Zone (TDZ).

// Example:

console.log(a); // ❌ ReferenceError

let a = 10;

// `a` exists in the scope, but it cannot be accessed
// until execution reaches its declaration.

// After the declaration, it can be used normally.

console.log(a); // 10