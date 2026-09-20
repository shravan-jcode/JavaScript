// Promise.all() is used when you have multiple Promises and
//  want to wait for all of them to finish.

// For example, suppose you need:

// User information
// User orders
// User profile

// Instead of waiting for them one by one, you can start them together.

function getUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("john")
        }, 5000);
    })
}

function getOrders() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(["Laptop", "Mobile"])
        }, 1000);
    })
}

function getProducts() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(["Keybord", "Earphone"])
        }, 3000);
    })
}


Promise.all([
    getOrders(),
    getProducts(),
    getUser()
])
    .then((results) => {
        console.log(results)
    })
    .catch((error) => {
        console.log(error)
    })


//     So there are two different concepts:

// Completion order:

// orders → products → user
//   1s        3s       5s

// Result order:

// user → orders → products

// The result order is based on the order 
// you put the Promises into Promise.all(), while .then() waits until the slowest Promise finishes.