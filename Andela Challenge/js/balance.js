let scaleBalancing = (weights, balancers) => {
    /** 
    params : 
    - weights : List of two initial weights to balancers,
    - balancers : List of weights to pick up from to balance the initial weight
    **/


    weights = weights.trim();
    balancers = balancers.trim();

    if (weights.includes("[") && weights.includes(']')) {
        weights = weights.slice(1, weights.length - 1).split(",").map(e => parseInt(e));
    } else {
        weights = weights.split(",").map(e => parseInt(e));
    }

    if (balancers.includes("[") && balancers.includes(']')) {
        balancers = balancers.slice(1, balancers.length - 1).split(",").map(e => parseInt(e));
    } else {
        balancers = balancers.split(",").map(e => parseInt(e));
    }

    if (weights.length != 2) {
        return "Weights must contain two arguments";
    }
    let weight = null; // The weight to be balanced
    let balance = []; // Contains figures that balanced the scale
    let switcher = null; // Switches between the two weights to balance

    for (let i = 0; i < weights.length; i++) {

        if (i === 0) switcher = 1;
        if (i === 1) switcher = 0;
        weight = weights[switcher];

        // Check if only one weight from the list balances the scale
        let matches = balancers.filter((e, j, a) => weight + a[j] == weights[i]);
        if (matches.length !== 0) return matches.toString();

        // Check if two weights from the list put on one side balance the scale
        for (let j = 0; j < balancers.length; j++) {
            for (let k = j + 1; k < balancers.length - 1; k++) {
                if (weight + balancers[j] + balancers[k] === weights[i]) {
                    balance.push(balancers[j], balancers[k]);
                    return balance.toString();
                }
            }
        }

        // Checks if one weight from the list put on each side balances the scale
        for (let j = 0; j < balancers.length; j++) {
            for (let k = 0; k < balancers.length; k++) {
                if (k !== j) {
                    if (weights[i] + balancers[j] === balancers[k] + weight) {
                        balance.push(balancers[j], balancers[k]);
                        return balance.toString();
                    }
                }
            }
        }

        if (weights[i] === weight) return "The scale is Balanced";
    }
    return "Scale Imbalanced";

}

let balanceIt = () => {
    let weights = document.getElementById("weights").value;
    let balancers = document.getElementById('balancers').value;
    let scale = scaleBalancing(weights, balancers);
    let point = document.getElementById("status-point");

    document.getElementById('results-h').innerText = scale;
    if (scale === "Scale Imbalanced" || scale === "Weights must contain two arguments") {
        point.style.backgroundColor = 'red';
    } else {
        point.style.backgroundColor = 'green';
    }
}