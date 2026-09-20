// promises

// A Promise represents the eventual result of an asynchronous operation.

// A Promise has three states:

// pending
//    ↓
// fulfilled

// or:

// pending
//    ↓
// rejected

const promise = new Promise((resolve, reject) => {
    const success = true;

    if (success) {
        resolve("Operation successful")
    }
    else {
        reject("Operation failed")
    }
})

promise.then((result) => {
    console.log(result)
})

// Promise
//   │
//   ├── pending
//   │
//   ├── fulfilled → result
//   │
//   └── rejected → error

// --------------------------------------------------
// .then()

const newPromise = Promise.resolve("Success")

newPromise.then((result) => {
    console.log(result)
})



function getUser() {
  return new Promise((resolve, reject) => {
    const success = true;

    if (success) {
      const user = {
        name: "John",
        age: 25
      };

      resolve(user);
    } else {
      reject(new Error("Failed to get user"));
    }
  });
}

getUser()
  .then((user) => {
    console.log("User:", user);
    console.log("Name:", user.name);
  })
  .catch((error) => {
    console.log("Error:", error.message);
  })
  .finally(() => {
    console.log("Promise completed");
  });