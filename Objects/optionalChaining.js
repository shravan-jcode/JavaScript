
// ==========================================
// Optional Chaining (?.)
// ==========================================

// Optional chaining (`?.`) allows you to safely
// access properties or methods when a value might
// be `null` or `undefined`.
//
// If the value before `?.` is null or undefined,
// JavaScript returns `undefined` instead of throwing
// an error.


// ==========================================
// Normal Property Access
// ==========================================

const user = {
    profile: {
        name: "Rahul"
    }
};

console.log(user.profile.name); // Rahul


// ==========================================
// The Problem
// ==========================================

// What if `profile` does not exist?

const emptyUser = {};

console.log(emptyUser.profile.name); // ❌ TypeError

// Why?
//
// `emptyUser.profile` is undefined.
//
// JavaScript then tries to access `.name` on undefined:
//
// undefined.name
//
// This causes an error.


// ==========================================
// Optional Chaining
// ==========================================

console.log(emptyUser.profile?.name); // undefined

// `?.` checks whether `profile` is null or undefined.
//
// If it is:
// → return undefined
// → do not throw an error


// ==========================================
// Nested Optional Chaining
// ==========================================

const anotherUser = {};

console.log(
    anotherUser?.profile?.address?.city
); // undefined

// Each `?.` safely checks the value before
// accessing the next property.


// ==========================================
// Practical API Example
// ==========================================

// API data may contain deeply nested properties,
// and some properties may be missing.

const apiUser = {
    profile: {
        address: {
            city: "Pune"
        }
    }
};

const city = apiUser?.profile?.address?.city;

console.log(city); // Pune


// If some property is missing:

const incompleteUser = {
    profile: {}
};

const userCity = incompleteUser?.profile?.address?.city;

console.log(userCity); // undefined


// ==========================================
// Important
// ==========================================

// Optional chaining only stops the error when
// the value before `?.` is null or undefined.
//
// Example:

const data = null;

console.log(data?.name); // undefined


// Without optional chaining:

console.log(data.name); // ❌ TypeError


// ==========================================
// Common Use
// ==========================================

// Optional chaining is especially useful when
// working with:
//
// - API responses
// - Nested objects
// - Optional properties
// - Data that may be missing
//
// It prevents errors when a property does not exist.
