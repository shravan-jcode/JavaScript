
// ==========================================
// Objects
// ==========================================

// An object stores related data as key-value pairs.
//
// Syntax:
// {
//     key: value
// }

const user = {
    name: "Rahul",
    age: 25,
    isAdmin: true
};

console.log(user.name);    // Rahul
console.log(user.age);     // 25
console.log(user.isAdmin); // true


// ==========================================
// const with Objects
// ==========================================

// Even though `user` is declared with `const`,
// you can modify its properties.

user.age = 26;

console.log(user.age); // 26

// `const` prevents reassignment of the variable,
// but it does NOT prevent modification of the object.

// This is NOT allowed:
//
// user = {}; // ❌ Error
//
// Because we are trying to make `user` refer
// to a completely different object.


// ==========================================
// Object Destructuring
// ==========================================

// Destructuring lets you extract values from
// an object and store them in variables.

const response = {
    id: 101,
    name: "Rahul",
    email: "rahul@gmail.com"
};

// For object destructuring:
// - Property/key names matter.
// - Order does NOT matter.
//
// JavaScript looks for matching property names.

const { email, id, name } = response;

console.log(id);    // 101
console.log(name);  // Rahul
console.log(email); // rahul@gmail.com

// This works even though the order is different
// from the original object.


// ==========================================
// Renaming While Destructuring
// ==========================================

// You can also give the extracted value
// a different variable name.

const account = {
    username: "Rahul",
    age: 25
};

const { username: userName, age: userAge } = account;

console.log(userName); // Rahul
console.log(userAge);  // 25

// `username` is the object property.
// `userName` is the new variable name.


// ==========================================
// Spread Operator (...)
// ==========================================

// The spread operator `...` expands the
// properties of an object into another object.

const student = {
    name: "Rahul",
    age: 25
};

const updatedStudent = {
    ...student,
    age: 26
};

console.log(updatedStudent);
// { name: "Rahul", age: 26 }

// `...student` copies the properties of `student`.
//
// Then `age: 26` overrides the existing age.
//
// So:
// name → kept as "Rahul"
// age  → changed from 25 to 26


// ==========================================
// Combining Objects
// ==========================================

const basicInfo = {
    name: "Rahul"
};

const details = {
    age: 25,
    city: "Pune"
};

const info = {
    ...basicInfo,
    ...details
};

console.log(info);
// { name: "Rahul", age: 25, city: "Pune" }


// ==========================================
// Property Overriding with Spread
// ==========================================

const firstData = {
    name: "Rahul",
    age: 25
};

const secondData = {
    age: 30
};

const combinedData = {
    ...firstData,
    ...secondData
};

console.log(combinedData);
// { name: "Rahul", age: 30 }

// When the same property exists in both objects,
// the property that appears LAST wins.


// ==========================================
// Shorthand Properties
// ==========================================

// If the variable name and object property name
// are the same, you can use shorthand syntax.

const item = "Pen";
const price = 122;

const product = {
    item,
    price
};

console.log(product);
// { item: "Pen", price: 122 }


// Without shorthand, this would be:

const productDetails = {
    item: item,
    price: price
};

// Shorthand is simply a shorter way of writing it.

