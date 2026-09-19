// this in Regular Functions

// In a regular function, `this` usually depends on
// how the function is called.


// Called as an object method

const user = {
  name: "Rahul",

  greet: function () {
    console.log(this.name);
  }
};

user.greet();
// Rahul

// Here, `this` refers to the object that called the method.
// So `this` refers to `user`.



// Called as a standalone function

function greet() {
  console.log(this);
}

greet();

// In strict mode, `this` is undefined.
// In non-strict mode, `this` can refer to the global object.
//
// For practical development, don't rely on `this`
// inside standalone regular functions.


// this in Object Methods

const person = {
  name: "Rahul",
  age: 25,

  introduce() {
    console.log(`I am ${this.name} and I am ${this.age}`);
  }
};

person.introduce();
// I am Rahul and I am 25

// Here, `this` refers to `person` because
// `person` is calling the method.


// Important:
// `this` is determined by how a regular function is called,
// not simply by where the function is written.



// this in Arrow Functions

// Arrow functions work differently.
//
// Arrow functions do NOT have their own `this`.
// They inherit `this` from their surrounding scope.

const anotherUser = {
  name: "Rahul",

  greet: () => {
    console.log(this.name);
  }
};

anotherUser.greet();
// Usually undefined

// `this` does NOT refer to anotherUser here.
//
// So don't use arrow functions as object methods
// when you need `this` to refer to the object.



// Why Arrow Functions Are Useful with this

// Arrow functions are useful when you have a regular
// function or method and want an inner callback
// to keep the outer `this`.

const profile = {
  name: "Rahul",

  greet() {
    setTimeout(() => {
      console.log(this.name);
    }, 1000);
  }
};

profile.greet();
// Rahul

// `greet()` is a regular method, so `this` refers to profile.
//
// The arrow function does not create its own `this`.
// It inherits `this` from greet().
//
// Therefore, inside the arrow function,
// `this` still refers to profile.



// Easy way to remember:
//
// Regular function:
// `this` depends on how the function is called.
//
// Arrow function:
// No own `this`.
// It inherits `this` from the surrounding scope.
//
// Think of an arrow function as:
// "I don't have my own `this`.
//  I'll use the `this` from my surrounding scope."