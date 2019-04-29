function digitize(n) {
    n = `${n}`;
    let nArray = n.split('');
    numbers = [];
    for(let n of nArray){
        numbers.push(+n);
    }
    return numbers;
  }

  console.log(digitize(0));