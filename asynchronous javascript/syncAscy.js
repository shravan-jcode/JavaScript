// JavaScript can start an operation that takes time and 
// continue doing other work instead of waiting for it to finish.

// Synchronous

// Code runs one step at a time and waits for each step to finish.

console.log("A");
console.log("B");
console.log("C");

// If one operation takes a long time, later code waits.

// Asynchronous

// JavaScript can start an operation and continue with other work.

console.log("Start ")

setTimeout(()=>{
    console.log("mid")
},5000)

console.log("end")

// Common async operations

// In real applications:

// API requests
// Database queries
// Reading files
// Timers
// Network requests