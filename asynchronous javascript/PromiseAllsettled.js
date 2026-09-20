// 1. What is Promise.allSettled()?

// Promise.allSettled() is used when you have multiple Promises and you want to wait for ALL of them, whether they succeed or fail.

// The key difference:

// Promise.all()

// "Give me the results only if everything succeeds."

// Promise.allSettled()

// "Tell me what happened with every Promise, whether it succeeded or failed."

const p1 = Promise.resolve("User found");

const p2 = Promise.reject("Orders failed");

const p3 = Promise.resolve("Products found");

Promise.allSettled([p1, p2, p3])
  .then((results) => {
    console.log(results);
  });

//   output
//   [
//   { status: 'fulfilled', value: 'User found' },
//   { status: 'rejected', reason: 'Orders failed' },
//   { status: 'fulfilled', value: 'Products found' }
// ]
console.log("******************************")
console.log()


function getUser(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("John")
        },2000)
    })
}

function getOrders(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject(new Error("Failed to get orders"))
        },1000)
    })
}

function getProducts(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(["Keybord","Earphone"])
        },3000)
    })
}

Promise.allSettled([
    getUser(),
    getProducts(),
    getOrders()
])
.then((results)=>{
    console.log(results)
})