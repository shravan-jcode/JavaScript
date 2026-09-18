
// ==========================================
// 6. forEach()
// ==========================================

// `forEach()` runs a callback function once
// for every element in an array.
//
// It is mainly used when you want to perform
// an action for each item.
//
// `forEach()` does NOT create a new array.

const numbers = [10, 20, 30];

numbers.forEach(num => {
    console.log(num);
});

// Output:
// 10
// 20
// 30


// ==========================================
// forEach() with Objects
// ==========================================

const users = [
    { name: "Rahul", age: 25 },
    { name: "Amit", age: 30 }
];

users.forEach(user => {
    console.log(user.name);
});

// Output:
// Rahul
// Amit


// ==========================================
// forEach() Return Value
// ==========================================

// `forEach()` returns undefined.

const result = numbers.forEach(num => {
    console.log(num);
});

console.log(result);
// undefined


// ==========================================
// forEach() vs map() ⭐
// ==========================================

// This is an important difference.


// ------------------------------------------
// map()
// ------------------------------------------

// `map()` creates and returns a NEW array.
//
// Use `map()` when you want to transform
// every element.

const doubledNumbers = numbers.map(num => num * 2);

console.log(doubledNumbers);
// [20, 40, 60]


// ------------------------------------------
// forEach()
// ------------------------------------------

// `forEach()` is generally used when you want
// to perform an action for each element.

numbers.forEach(num => {
    console.log(`Number: ${num}`);
});


// ==========================================
// Main Difference
// ==========================================

// map()
// → transforms elements
// → returns a NEW array
// → callback's return value becomes an
//   element in the new array


// forEach()
// → performs an action for each element
// → returns undefined
// → does NOT create a new array


// ==========================================
// Which One Should You Use?
// ==========================================

// If you need a transformed array:

const prices = [100, 200, 300];

const discountedPrices = prices.map(price => price * 0.9);

console.log(discountedPrices);
// [90, 180, 270]


// If you only want to perform an action:

prices.forEach(price => {
    console.log(`Price: ${price}`);
});


// ❌ Don't use forEach() when you actually
// need the transformed array.
//
// ✅ Use map() instead.

