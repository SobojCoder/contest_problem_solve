function getMonthName(monthNumber) {
  // TODO: Implement this function
//   January, February, March, April, May, June, July, August, September, October, November, and December.]
let months = ["January", "February", "March", "April", "May", "June", "July", "August","September", "October", "November", "December"];
for (let i=0; i<months.length; i++){
    if(i === monthNumber-1){
        return months[i];
    }
}
}
console.log(getMonthName(12))