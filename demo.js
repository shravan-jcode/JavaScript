const text ="shravan"
console.log(text.slice(1))

console.log()
const numbers =[1,2,3,4]


function spread(...numbers){
    console.log(numbers)
}
spread(10,20,30)

const person ={
    name:"shravan",
    age:21
}

const json =JSON.stringify(person)
console.log(json)
console.log(JSON.parse(json))
