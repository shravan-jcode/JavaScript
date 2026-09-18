// Template literals
// The backtick (`) is used to create a template literal.
// Template literals make it easy to include variables and write multiline strings.

const name = "Rahul";
const age = 25;

const message = `My name is ${name} and I am ${age} years old.`;

console.log(message);

// ${} is called interpolation.
// It allows us to insert variables or expressions inside a template literal.


// Multiline strings
// Template literals also make multiline text easy.
// You can write text across multiple lines without using \n.

const welcomeMessage = `
Hello Rahul,

Welcome to our application.

Thanks!
`;

console.log(welcomeMessage);