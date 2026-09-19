// Call Stack 

// The call stack keeps track of which functions are currently running.

function one() {
  two();
}

function two() {
  three();
}

function three() {
  console.log("Hello");
}

one();

// one()
//  ↓
// two()
//  ↓
// three()
//  ↓
// console.log()


// ┌──────────────┐
// │   three()    │ ← runs first
// ├──────────────┤
// │    two()     │
// ├──────────────┤
// │    one()     │
// └──────────────┘


// When three() finishes, it's removed.

// Then two() finishes.

// Then one() finishes.

// Why this matters

// If functions keep calling themselves without stopping:

// Eventually:

// RangeError: Maximum call stack size exceeded

// because the call stack becomes too large.