
// reduce() is used when you want to combine an array into one final value.

const prices =[100,200,300,400,500]

const total = prices.reduce((sum,price)=>{
    return sum +price;
},0)
console.log(total)//1500

// The 0 is the initial value.