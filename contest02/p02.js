function countEvenOdd(numbers){
    let countEven = 0;
    let countOdd = 0;
    for(let num of numbers){
        if(num % 2 == 0){
            countEven++;
        }else{
            countOdd++;
        }
    }
    return {
        even: countEven,
        odd: countOdd
    }
}
console.log(countEvenOdd([2, 2, 2, 3, 3]))
console.log(countEvenOdd([]))
console.log(countEvenOdd([0]))
console.log(countEvenOdd([-1, -2, -3, -4]))
console.log(countEvenOdd([2, 2, 2, 3, 3]))
console.log(countEvenOdd([0, -1, -2, 3, 4, -5]))
// [],
//   [0],
//   [1],
//   [2],
//   [-1, -2, -3, -4],
//   [2, 2, 2, 3, 3],
//   [0, -1, -2, 3, 4, -5]