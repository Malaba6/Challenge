// Return true if a number is prime, false other wise

let isPrime = (num) => {
    if (num === 0 || num === 1 || num === -1) return false;
    for (let i = 2; i < num / 2 + 1; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}