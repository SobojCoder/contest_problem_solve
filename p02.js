function countNumberProperties(numbers) {
  // TODO: Implement this function
  let even =0;
  let odd = 0;
  let positive = 0;
  let negative = 0;

  for (let num of numbers){
    if(num % 2 == 0){
        even ++;
        if(num < 0){
            negative ++;
        }else if(num > 0){
            positive ++;
        }
    }else if(num % 2 != 0){
        odd ++;
        if(num < 0){
            negative ++;
        }else if(num > 0){

            positive ++;
        }
    }
    
  }
  return {
    even: even,
    negative,
    odd,
    positive,
  }
}
console.log(countNumberProperties([2,4,6,8,10]))