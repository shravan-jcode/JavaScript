// 1. Spread: Array → individual values

const numbers = [10,20,30,40]

console.log(...numbers) //10   20   30


function add(a, b, c) {
    return a + b + c;
}

console.log(add(...numbers))


// 2. Rest: Individual values → Array

function calculateTotal(...numbers) {
    console.log(numbers);
}

calculateTotal(10, 20, 30);//[10, 20, 30]
