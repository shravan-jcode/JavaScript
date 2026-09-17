
// ==========================================
// undefined vs null
// ==========================================


// ==========================================
// undefined
// ==========================================

// `undefined` means a value is missing or
// has not been assigned.

// Example 1: Variable declared but no value assigned

let username;

console.log(username); // undefined


// Example 2: Accessing a property that does not exist

const userInfo = {
    name: "Rahul"
};

console.log(userInfo.age); // undefined

// The `age` property does not exist,
// so JavaScript returns undefined.


// ==========================================
// null
// ==========================================

// `null` means:
// "There is intentionally no value."

// We use `null` when we want to explicitly
// say that a value is empty or absent.

let selectedUser = null;

console.log(selectedUser); // null


// Later, we can assign a value:

selectedUser = {
    name: "Rahul"
};

console.log(selectedUser); // { name: "Rahul" }


// ==========================================
// Main Difference
// ==========================================

// undefined
// → A value is missing or has not been assigned.
//
// null
// → We intentionally set the value to "nothing".


// Easy way to remember:
//
// undefined → "No value has been provided."
//
// null → "I intentionally set it to no value."