// slice()
// Extracts part of an array without modifying the original array.

const numbers = [10, 20, 30, 40];

const selectedNumbers = numbers.slice(1, 3);

console.log(selectedNumbers);
// [20, 30]

console.log(numbers);
// [10, 20, 30, 40]

// slice(start, end)
// Start at index 1 and stop before index 3.


// splice()
// Adds, removes, or replaces elements in an array.
// splice() modifies the original array.

const values = [10, 20, 30, 40];

values.splice(1, 2);

console.log(values);
// [10, 40]

// splice(start, deleteCount)
// Start at index 1 and remove 2 elements.


// Adding elements with splice()

const numbersList = [10, 20, 40];

numbersList.splice(2, 0, 30);

console.log(numbersList);
// [10, 20, 30, 40]

// 0 means don't delete anything.
// 30 is inserted at index 2.


// slice() vs splice()

// slice()  -> does not modify the original array.
// splice() -> modifies the original array.

// Remember:
// slice  = copy/extract part of an array
// splice = modify the original array