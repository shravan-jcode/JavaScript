let age =10;
let ++;
//use let when want to reassin a variable


//use when dont want to reassign the variable
const name = "Rahul";

// name = "Amit"; // ❌ error

const user ={
    name:"Rahul",
}

user.name ="Amit"
//Why? const prevents reassignment of the variable, not modification of an object.


// **********************************
// Scope

// Scope = where a variable can be accessed.

// There are two important scopes you need to understand here.

// Block scope

// A block is anything inside { }, such as an if or loop.

if (true) {
  let x = 10;
  const y = 20;

  console.log(x); // ✅
  console.log(y); // ✅
}

console.log(x); // ❌
console.log(y); // ❌

// let and const are block-scoped.

// var is not block-scoped:

if (true) {
  var x = 10;
}

console.log(x); // 10