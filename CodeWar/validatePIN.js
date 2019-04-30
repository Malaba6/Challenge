let validatePIN = (pin) => (pin.length === 4 || pin.length === 6) && !pin.split('').map(Number).map(el => el === +el).includes(false) ? false : true;

console.log(validatePIN("21235"));