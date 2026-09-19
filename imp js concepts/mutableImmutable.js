// Mutable

// Something can be changed after creation.

// Objects and arrays are mutable.

const user = {
  name: "Rahul"
};

user.name = "Amit";

console.log(user.name); // Amit

// Even though user is const, the object can be modified.

// Immutable

// The original value isn't changed; instead, you create a new value.
const user = {
  name: "Rahul",
  age: 25
};

const updatedUser = {
  ...user,
  age: 26
};

console.log(user.age);        // 25
console.log(updatedUser.age); // 26

// const prevents you from reassigning the variable, but it doesn't prevent you from changing the object it refers to.



