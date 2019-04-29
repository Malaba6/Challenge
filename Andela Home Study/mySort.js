function mySort(nums) {
    // if (!(nums instanceof Array)){
    //   throw new Error("Numbers must be an array list");
    // }
    let oddN = [];
    let evenN = [];
    
    for (let i = 0; i < nums.length; i++) {
      if(typeof nums[i] === 'number'){
      if (nums[i] % 2 === 1) {oddN.push(parseInt(nums[i]));
    }else{
      evenN.push(parseInt(nums[i]));
    }
}
}
    let numberArray = oddN.sort((a,b) => a-b).concat(evenN.sort((a,b) => a-b));
    
   return numberArray; 
}
// function mySort(nums) {
//     let evens = [];
//     let odds = [];
  
//     for (let i = 0; i < nums.length; i++) {
//       if(typeof nums[i] === "number"){ // ignore if its not a number
//         if ((nums[i] % 2) === 1) {
//             odds.push(parseInt(nums[i]));
//         }
//         else {
//             evens.push(parseInt(nums[i]));
//         }
//       }
//     }
//     let numsArray = odds.sort((a, b) => a - b).concat(evens.sort((a, b) => a - b));
//     return numsArray;
//   }

console.log(mySort( [90, 45, 66, 'bye', 100.5]));
