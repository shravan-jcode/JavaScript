// sort()
// Sorts the elements of an array.

// By default, sort() converts values to strings
// and sorts them lexicographically.

const numbers = [6, 2, 4, 1, 7];

numbers.sort();

console.log(numbers);
// [1, 2, 4, 6, 7]

// For numbers, use a compare function.
// Ascending order: smallest to largest.

numbers.sort((a, b) => a - b);

console.log(numbers);
// [1, 2, 4, 6, 7]

// Descending order: largest to smallest.

numbers.sort((a, b) => b - a);

console.log(numbers);
// [7, 6, 4, 2, 1]

// Important:
// sort() modifies the original array.