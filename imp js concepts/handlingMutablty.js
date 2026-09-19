// If you don't want to change the original array/object, create a copy first, then modify the copy.

const fruits = ["apple", "banana", "mango"];

// mutates
fruits.push("orange");

console.log(fruits);
// ["apple", "banana", "mango", "orange"]

// dont want mutate 

const newFruits =[...fruits,"Mango"];

console.log(fruits)
// ["apple", "banana", "mango", "orange"]

console.log(newFruits);
// ["apple", "banana", "mango", "orange","Mango"]

// Object — don't mutate the original

const updatedUser = {
  ...user,
  age: 26
};

console.log(user);
// { name: "Rahul", age: 25 }

console.log(updatedUser);
// { name: "Rahul", age: 26 }