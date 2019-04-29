
function countChange (money,coins) {
    let coinCombinationsSub = (money, coins, n, str) => {
      if(money === 0){
        return str + ', ';
      }else if(money < 0 || coins.length === n){
        return '';
      }
      let plus = "+" + coins[n];
      if(str === ''){
        plus = coins[n];
      }
      return coinCombinationsSub(money - coins[n], coins, n, str + plus) + coinCombinationsSub(money, coins, n, n+1, str);
    }
    let coin = coinCombinationsSub(money, coins, 0,'').slice(0, -2);
    if(coin[0] == ''){
      return 0;
    }
    return coin.length;
  }

 
var test1 = countChange(11, [5,7]);
console.log(test1);
// var test2 = coinCombinations(300, [5, 10, 20, 50, 100, 200, 500]);
// console.log('\nTest 2 ');
// console.log(test2.split(',').length === 1022);  // combinations should be 1022
// console.log(test2);
