
// ==========================================
// let and const
// ==========================================

let age = 10;

// Use `let` when you want to reassign a variable.
age = 20;


// Use `const` when you don't want to reassign a variable.

const name = "Rahul";

// name = "Amit"; // ❌ Error: Assignment to a constant variable


// ==========================================
// const with Objects
// ==========================================

const user = {
    name: "Rahul",
};

user.name = "Amit";

console.log(user.name); // Amit

// Why does this work?
// `const` prevents reassignment of the variable,
// but it does NOT prevent modification of the object's properties.
//
// The variable `user` still refers to the same object.
// We are only changing a property inside that object.


// ==========================================
// Scope
// ==========================================

// Scope = where a variable can be accessed.

// Two important concepts:
// 1. Block Scope
// 2. Function Scope


// ==========================================
// Block Scope
// ==========================================

// A block is anything inside `{ }`,
// such as the body of an `if` statement or a loop.

if (true) {
    let x = 10;
    const y = 20;

    console.log(x); // ✅ 10
    console.log(y); // ✅ 20
}

// x and y cannot be accessed outside the block.

console.log(x); // ❌ ReferenceError
console.log(y); // ❌ ReferenceError

// `let` and `const` are block-scoped.


// ==========================================
// var is NOT Block-Scoped
// ==========================================

if (true) {
    var z = 10;
}

console.log(z); // ✅ 10

// `var` is NOT block-scoped.
// Therefore, `z` can be accessed outside the `if` block.
