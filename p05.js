function calculateRemainingMoney(totalMoney, cakeCost, donutCost) {
  // TODO: Implement the function
  let afterCakeBuy = totalMoney - cakeCost;
    if (afterCakeBuy <= 0 || donutCost == 0){
        return afterCakeBuy
    }
      let totalDonutBuy = Math.floor(afterCakeBuy / donutCost);
      let totalDonutCost = totalDonutBuy * donutCost;
      return afterCakeBuy - totalDonutCost; 
}
// function calculateRemainingMoney(totalMoney, cakeCost, donutCost) {
//   // Money left after buying the cake
//   let afterCakeBuy = totalMoney - cakeCost;

//   // If you can't afford the cake, return 0 (or -1 if negative should be preserved)
//   if (afterCakeBuy <= 0) {
//     return afterCakeBuy;
//   }

//   // Free donuts case: no donut cost, so nothing is deducted
//   if (donutCost <= 0) {
//     return afterCakeBuy;
//   }

//   // Number of donuts you can buy with remaining money
//   let totalDonutBuy = Math.floor(afterCakeBuy / donutCost);
//   let totalDonutCost = totalDonutBuy * donutCost;

//   // Money remaining after buying as many donuts as possible
//   return afterCakeBuy - totalDonutCost;
// }
console.log(calculateRemainingMoney(100, 20, 0))