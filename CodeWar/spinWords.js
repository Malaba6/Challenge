function spinWords(sentence){
    //TODO Have fun :)
    return sentence.trim().split(" ").map(word => { 
        if (word.length >= 5) word = [...word].reverse().join("");    
        return word;   
    }).join(" ");
}

console.log(spinWords("My name is Malaba Mashauri"));