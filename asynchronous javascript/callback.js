// Callbacks

// A callback is a function passed to another function to be executed later.

function greet(name,callback){
    console.log(`Hello ${name}`)
    callback()
}

function done(){
    console.log("Done")
}

greet("Shravan",done)

// Callback problem

// When many async operations depend on each other, callbacks can become difficult to manage.

// getUser(userId, (user) => {
//   getOrders(user.id, (orders) => {
//     getProducts(orders, (products) => {
//       // more code...
//     });
//   });
// });

// This is often called callback hell.

// Promises were introduced to make this easier to manage.