// Control Flow & Loops
//
// Control flow determines which code runs and when.
// Loops are used to repeat code.


// if / else
// Runs different code depending on a condition.

const age = 20;

if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}


// switch
// Useful when you want to compare one value
// against multiple possible values.

const day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of the week");
    break;

  case "Friday":
    console.log("Almost weekend");
    break;

  case "Sunday":
    console.log("Weekend");
    break;

  default:
    console.log("Another day");
}

// break stops the switch from continuing
// into the next case.


// for loop
// Used when you know how many times
// you want to repeat something.

for (let i = 0; i < 5; i++) {
  console.log(i);
}

// Output:
// 0
// 1
// 2
// 3
// 4


// for...of
// Used to loop through the values of an iterable,
// such as an array or string.

const fruits = ["apple", "banana", "mango"];

for (const fruit of fruits) {
  console.log(fruit);
}

// Output:
// apple
// banana
// mango


// for...in
// Used to loop through the keys/indexes of an object or array.

const user = {
  name: "Rahul",
  age: 25
};

for (const key in user) {
  console.log(key, user[key]);
}

// Output:
// name Rahul
// age 25

// For arrays, for...of is usually preferred
// when you need the values.


// while
// Repeats code as long as the condition is true.

let count = 1;

while (count <= 5) {
  console.log(count);
  count++;
}

// Output:
// 1
// 2
// 3
// 4
// 5

// Make sure the condition eventually becomes false,
// otherwise you can create an infinite loop.