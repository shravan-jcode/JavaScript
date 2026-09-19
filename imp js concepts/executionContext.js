// Execution context is the environment JavaScript creates to run your code.

const name = "Rahul";

function greet() {
  const message = "Hello";
  console.log(message, name);
}

greet();

// It contains things needed while the function runs, such as:

// local variables
// parameters
// access to outer scope
// this

// Every time a function executes, JavaScript needs an environment to manage that execution.