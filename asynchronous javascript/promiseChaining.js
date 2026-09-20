
// Promise chaining means executing multiple asynchronous operations 
// one after another by connecting multiple .then() calls.
function loginUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ userId: 101, name: "John" });
    }, 1000);
  });
}

function getOrders(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["Laptop", "Phone", "Headphones"]);
    }, 1000);
  });
}

function getFirstOrder(order) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        product: order,
        price: 50000
      });
    }, 1000);
  });
}

loginUser()
  .then((user) => {
    console.log("Logged in:", user);

    return getOrders(user.userId);
  })
  .then((orders) => {
    console.log("Orders:", orders);

    return getFirstOrder(orders[0]);
  })
  .then((order) => {
    console.log("First order:", order);
  })
  .catch((error) => {
    console.log("Error:", error);
  })
  .finally(() => {
    console.log("Process completed");
  });