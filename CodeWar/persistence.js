function persistence(num) {
    // Return number of times you must multiply the digits in num until you reach a single digit.
    let count = 0;

    let persist = (num) => {
        num = `${num}`;
        let product = 1;
        if (num.length === 1) {
            return count;
        } else {
            for (let n of num) {
                product *= n;
            }
            count++;
            return persist(product);
        }
    }
    return persist(num);
}

console.log(persistence(25));
console.log(persistence(39));