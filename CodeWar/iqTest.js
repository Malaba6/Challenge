let iqTest = (numbers) => {
    // ...
    let even = 0;
    let odd = 0;
    numbers = numbers.split(" ");
    let numberOdd = null; // The even number if matched 
    let numberEven = null; // The odd number, if matched
    let index = null; // the index of the matched number

    // Check wether the uneven number is even or odd
    for (let n of numbers){
        if (n % 2 === 0) {
            numberEven = n;
            even++;
        }else {
            numberOdd = n;
            odd++;
        }
    }

    // If even is less than odd then the unen number is even otherwise, it's odd
    let match = even > odd ? numberOdd : numberEven;

    n =  numbers.forEach((e, i, a) => {
        if (a[i] === match) {
            index = i+1;
        }
    });
    return index;
  }

//   function iqTest(numbers){
//     numbers = numbers.split(" ").map(function(el){return parseInt(el)});
    
//     var odd = numbers.filter(function(el){ return el % 2 === 1});
//     var even = numbers.filter(function(el){ return el % 2 === 0});
    
//     return odd.length < even.length ? (numbers.indexOf(odd[0]) + 1) : (numbers.indexOf(even[0]) + 1);
//   }

  console.log(iqTest("2 4 7 8 10"));