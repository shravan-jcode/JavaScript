// event loop

// JavaScript normally executes synchronous code one piece at a time.

// But Node.js also needs to handle things like:

// timers
// file operations
// network requests
// database operations
// HTTP requests

console.log("1")

setTimeout(()=>{
    console.log("2")
},4)

console.log("3")

// The synchronous code runs first:

//         JavaScript
//             │
//             ▼
//        ┌──────────┐
//        │ Call     │
//        │ Stack    │
//        └────┬─────┘
//             │
//        async work
//             │
//             ▼
//    ┌─────────────────┐
//    │ Runtime / Node  │
//    │ APIs            │
//    └────────┬────────┘
//             │
//             ▼
//        Callback Queue
//             │
//             ▼
//        Event Loop
//             │
//             ▼
//         Call Stack