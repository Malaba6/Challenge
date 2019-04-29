var uniqueInOrder = (iter) => {
    //your code here - remember iter can be a string or an array
    try{
      let uniques = [];
      if(iter.length !== 0){
        uniques.push(iter[0]);
      }
      for (let el of iter){
        if(el != uniques[uniques.length - 1]) uniques.push(el);
      }
      return uniques;
    }catch(e){
      return e;
    }
    
  }

  console.log(uniqueInOrder('AAAABBBCCDAABBB'));