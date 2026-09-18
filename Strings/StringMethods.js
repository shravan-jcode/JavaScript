// String methods

const name = "Rahul";

// length
// Returns the number of characters in a string.

console.log(name.length);
// 5


// toUpperCase()
// Converts a string to uppercase.

console.log(name.toUpperCase());
// RAHUL


// toLowerCase()
// Converts a string to lowercase.

console.log(name.toLowerCase());
// rahul


// Useful for case-insensitive comparisons.

const input = "ADMIN";

if (input.toLowerCase() === "admin") {
  console.log("Admin");
}


// trim()
// Removes whitespace from the beginning and end of a string.

const username = "   Rahul   ";

console.log(username.trim());
// "Rahul"


// includes()
// Checks whether a string contains a specific value.
// Returns true or false.

const email = "rahul@gmail.com";

console.log(email.includes("@"));
// true


// startsWith() / endsWith()
// Checks whether a string starts or ends with a specific value.

const url = "https://example.com";

console.log(url.startsWith("https"));
// true

console.log(url.endsWith(".com"));
// true

// Useful for validation and checking formats.


// indexOf()
// Returns the index of the first occurrence of a value.

const text = "hello world";

console.log(text.indexOf("world"));
// 6

// If the value doesn't exist, it returns -1.

console.log(text.indexOf("xyz"));
// -1


// slice()
// Extracts part of a string.
// The original string is not modified.

const language = "JavaScript";

console.log(language.slice(0, 4));
// "Java"

// slice(start, end)
// The end index is not included.


// replace()
// Replaces the first matching value in a string.

const message = "Hello Rahul";

const result = message.replace("Rahul", "Amit");

console.log(result);
// "Hello Amit"


// Important: Strings are immutable.
// String methods do not modify the original string.
// They return a new string.

const usernameValue = "rahul";

usernameValue.toUpperCase();

console.log(usernameValue);
// "rahul"

// To keep the changed value, store the returned string.

const upperName = usernameValue.toUpperCase();

console.log(upperName);
// "RAHUL"


// split()
// Converts a string into an array.

const fruits = "apple,banana,mango";

const fruitList = fruits.split(",");

console.log(fruitList);
// ["apple", "banana", "mango"]


// charAt() / bracket access
// You can access individual characters using their index.

const personName = "Rahul";

console.log(personName[0]);
// "R"

console.log(personName[2]);
// "h"

// name[index] is usually preferred over charAt().