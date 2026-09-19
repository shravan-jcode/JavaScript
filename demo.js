function counterDemo (){
  let count =0;

  return function() {
    count++;
    console.log(count)
  }
}

const count = counterDemo()
count()
count()
count()