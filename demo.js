function sum(...numbers){
  let sum =0;

  for (const num of numbers) {
    sum +=num;
  }
  return sum;
}
const num =[1,2,3,4]
console.log(sum(...num))