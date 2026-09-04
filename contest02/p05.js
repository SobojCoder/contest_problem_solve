function findSecondLargestUnique(numbers) {
  
    let largest = -Infinity;
    let secondLargest = -Infinity;
    for(let num of numbers){
        if(num > largest){
            secondLargest = largest;
            largest = num;
        }else if(num>secondLargest && num <largest){
           
            secondLargest = num;
        }
    }
    if(secondLargest == -Infinity){
        return null;
    }
    return secondLargest;
}
console.log(findSecondLargestUnique([3,3,3,3]))