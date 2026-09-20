// =====================================================
// utils.js
// =====================================================


// -----------------------------------------------------
// Function declaration
// -----------------------------------------------------

export function cleanTaskTitle(title) {

    return title
        .trim()
        .replace(/\s+/g, " ");
}


// -----------------------------------------------------
// Function expression
// -----------------------------------------------------

export const capitalize = function (text) {

    if (!text) {
        return "";
    }

    return (
        text.charAt(0).toUpperCase() +
        text.slice(1)
    );
};


// -----------------------------------------------------
// Arrow function
// -----------------------------------------------------

export const getTaskLabel = (task) => {

    return `${task.title} [${task.priority}]`;
};


// -----------------------------------------------------
// Default parameter
// -----------------------------------------------------

export function createMessage(
    name = "Student"
) {

    return `Hello ${name}! Keep practicing JavaScript.`;
}


// -----------------------------------------------------
// Rest parameter
// -----------------------------------------------------

export function calculateTotal(...numbers) {

    return numbers.reduce(
        (total, number) => total + number,
        0
    );
}


// -----------------------------------------------------
// Callback function
// -----------------------------------------------------

export function runCallback(callback) {

    const message = callback();

    return message;
}


// -----------------------------------------------------
// Function receiving another function
// -----------------------------------------------------

export function processText(
    text,
    callback
) {

    const cleaned = cleanTaskTitle(text);

    return callback(cleaned);
}


// -----------------------------------------------------
// Destructuring
// -----------------------------------------------------

export function getTaskDescription(task) {

    const {
        title,
        priority,
        completed
    } = task;


    return `${title} - ${priority} - ${completed}`;
}


// -----------------------------------------------------
// Optional chaining
// -----------------------------------------------------

export function getUserCity(user) {

    return user?.address?.city;
}


// -----------------------------------------------------
// Nullish coalescing
// -----------------------------------------------------

export function getDisplayName(user) {

    return user?.name ?? "Anonymous";
}


// -----------------------------------------------------
// Truthy / falsy
// -----------------------------------------------------

export function checkValue(value) {

    if (value) {

        return "Value is truthy";

    } else {

        return "Value is falsy";
    }
}


// -----------------------------------------------------
// == and ===
// -----------------------------------------------------

export function compareValues(value) {

    return {
        looseEquality: value == 10,
        strictEquality: value === 10
    };
}


// -----------------------------------------------------
// Type conversion
// -----------------------------------------------------

export function convertValues(value) {

    const numberValue = Number(value);

    const stringValue = String(value);

    const booleanValue = Boolean(value);

    return {
        original: value,
        numberValue,
        stringValue,
        booleanValue
    };
}


// -----------------------------------------------------
// String methods
// -----------------------------------------------------

export function stringPractice(text) {

    return {
        original: text,

        uppercase:
            text.toUpperCase(),

        lowercase:
            text.toLowerCase(),

        length:
            text.length,

        startsWithHello:
            text.startsWith("Hello"),

        includesJavaScript:
            text.toLowerCase()
                .includes("javascript"),

        words:
            text.split(" ")
    };
}


// -----------------------------------------------------
// Deep copy
// -----------------------------------------------------

export function deepCopy(object) {

    return JSON.parse(
        JSON.stringify(object)
    );
}