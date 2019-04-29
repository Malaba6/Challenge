let power = (a, b) => {
    a = +a;
    b = +b;
    let pow = 1;
    if (typeof(a) != 'number') {
        throw new Error("A must be a number");
    }
    if (typeof(b) != 'number' || b < 0) {
        throw new TypeError("B must be a positive number");
    }
    if (a == 0 && b == 0) {
        return Infinity;
    }
    if (b == 0) {
        return 1;
    }
    for (let i = 0; i < b; i++) {
        pow *= a;
    }
    return pow;
}

console.log(power(8, 9));