
// ==========================================
// Functions in JavaScript
// ==========================================

// A function is a reusable block of code
// that performs a specific task.
//
// A function can:
// - receive input (parameters)
// - perform some operation
// - return a value


// ==========================================
// 1. Function Declaration
// ==========================================

function add(a, b) {
    return a + b;
}

// `return` ends the function execution
// and sends a value back to the caller.

const sum = add(10, 20);

console.log(sum); // 30


// ==========================================
// Parameters vs Arguments
// ==========================================

// `a` and `b` are parameters.

function multiply(a, b) {
    return a * b;
}

// `10` and `20` are arguments.

console.log(multiply(10, 20)); // 200


// ==========================================
// 2. Function Expression
// ==========================================

// A function can be stored inside a variable.

const subtract = function (a, b) {
    return a - b;
};

console.log(subtract(20, 10)); // 10

// The function does not have a name,
// so it is called an anonymous function.
//
// The function is assigned to the `subtract` variable.


// ==========================================
// Function Declaration vs Expression
// ==========================================

// Function declarations can be called
// before they appear in the code.

greet();

function greet() {
    console.log("Hello");
}

// This works because function declarations
// are hoisted.


// A function expression cannot be used
// before its variable declaration.

const sayHello = function () {
    console.log("Hello");
};

sayHello(); // ✅ works


// ==========================================
// 3. Arrow Function
// ==========================================

// Arrow functions provide a shorter syntax
// for writing functions.

const divide = (a, b) => {
    return a / b;
};

console.log(divide(20, 5)); // 4


// ==========================================
// Implicit Return
// ==========================================

// If an arrow function contains only one expression,
// the `{}` and `return` can be removed.

const addNumbers = (a, b) => a + b;

console.log(addNumbers(10, 20)); // 30

// This is called an implicit return.


// ==========================================
// 4. Default Parameters
// ==========================================

// A parameter can have a default value.
//
// The default value is used when an argument
// is not provided (or is passed as undefined).

function welcome(name = "Guest") {
    return `Hello ${name}`;
}

console.log(welcome("Rahul")); // Hello Rahul
console.log(welcome());        // Hello Guest


// ==========================================
// 5. Rest Parameters (...)
// ==========================================

// Rest parameters allow a function to accept
// any number of arguments.
//
// The arguments are collected into an array.

function addAll(...numbers) {
    console.log(numbers);
}

addAll(10, 20, 30, 40);

// Output:
// [10, 20, 30, 40]


// We can also use the array inside the function.

function sumAll(...numbers) {
    let total = 0;

    for (const number of numbers) {
        total += number;
    }

    return total;
}

console.log(sumAll(10, 20, 30)); // 60


// ==========================================
// 6. Callback Function ⭐
// ==========================================

// A callback is a function passed to another
// function as an argument.
//
// The receiving function can then call
// that function later.

function greetUser(name) {
    console.log(`Hello ${name}`);
}

function processUser(callback) {
    callback("Rahul");
}

processUser(greetUser);

// Output:
// Hello Rahul


// Here:
//
// `greetUser` → callback function
//
// `processUser` → function that receives the callback
//
// `callback("Rahul")` → calls the callback function


// ==========================================
// Callback with an Anonymous Function
// ==========================================

// We can also pass a function directly.

function processMessage(callback) {
    callback("Hello from JavaScript!");
}

processMessage(function (message) {
    console.log(message);
});


// ==========================================
// Callback with an Arrow Function
// ==========================================

processMessage((message) => {
    console.log(message);
});

