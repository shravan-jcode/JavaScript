// JSON stands for JavaScript Object Notation.
// JSON is a standard text format used to store and exchange data.


// JavaScript object
// const user = {
//     name: "Rahul",
//     age: 25
// };

// JSON
// {
//     "name": "Rahul",
//     "age": 25
// }

// They look almost the same, but there is an important difference:

// JavaScript object → actual data structure that JavaScript can work with
// JSON → text/string representation of data


const person ={
    name:"shravan",
    age:21,
}
console.log(person)

// This converts the JavaScript object into a JSON string.
const jsonStr =JSON.stringify(person)//'{"name":"Shravan","age":21}'
console.log(jsonStr)

// It takes a JSON string and converts it back into a JavaScript object.
const obj = JSON.parse(jsonStr)
console.log(obj)