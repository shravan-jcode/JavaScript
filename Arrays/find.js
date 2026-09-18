
// ==========================================
// 3. find()
// ==========================================

// `find()` returns the FIRST element that
// satisfies a condition.
//
// Once it finds a matching element,
// it stops searching.

const users = [
    { id: 1, name: "Rahul" },
    { id: 2, name: "Amit" },
    { id: 3, name: "John" }
];

const foundUser = users.find(user => user.id === 2);

console.log(foundUser);

// { id: 2, name: "Amit" }


// ==========================================
// find() — No Match
// ==========================================

// If no element satisfies the condition,
// `find()` returns `undefined`.

const missingUser = users.find(user => user.id === 10);

console.log(missingUser);
// undefined


// ==========================================
// 4. findIndex()
// ==========================================

// `findIndex()` works similarly to `find()`,
// but instead of returning the element,
// it returns the INDEX of the first matching element.

const numbers = [10, 20, 30, 40];

const foundIndex = numbers.findIndex(num => num === 30);

console.log(foundIndex);
// 2


// Array indexes:
//
// 10 → index 0
// 20 → index 1
// 30 → index 2
// 40 → index 3


// ==========================================
// findIndex() — No Match
// ==========================================

// If no element satisfies the condition,
// `findIndex()` returns -1.

const missingIndex = numbers.findIndex(num => num === 100);

console.log(missingIndex);
// -1


// ==========================================
// Easy Way to Remember
// ==========================================

// find()
// → "Give me the first matching ELEMENT."

const firstMatch = numbers.find(num => num > 20);

console.log(firstMatch);
// 30


// findIndex()
// → "Tell me the INDEX of the first matching element."

const firstMatchIndex = numbers.findIndex(num => num > 20);

console.log(firstMatchIndex);
// 2


// ==========================================
// Important: First Match Only
// ==========================================

const duplicateNumbers = [10, 20, 20, 30];

const firstTwenty = duplicateNumbers.find(num => num === 20);

console.log(firstTwenty);
// 20

// `find()` stops at the FIRST matching element.
//
// It does not return all matching elements.
//
// If you want ALL matching elements,
// use `filter()` instead.
