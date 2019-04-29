let numberToOrdinal = (number) => {
    try {
        number = +number
    } catch (Error) {
        return "numbers only allowed";
    }
    if (number < 0) {
        return "Number should be positive";
    } else if (number === 0) {
        return "0";
    } else if (number > 10000) {
        return "Too big number. Number should be less than 10001";
    }
    n = n.toString();
    if (!(n.includes('11')) && n.slice(-1) == '1') return `${n}st`;
    else if(!(n.includes('12')) && n.slice(-1) == '2') return `${n}nd`;
    else if(!(n.includes('13')) && n.slice(-1) == '3') return `${n}rd`;
    else if(n === '0') return '0';
    return `${n}th`;
    
}

console.log(numberToOrdinal(113));