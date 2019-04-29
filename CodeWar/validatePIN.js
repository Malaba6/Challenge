let validatePIN = (pin) => pin.split('').map(Number).find(el => el === +el) && (pin.length === 4 || pin.length === 6) === false ? true : false;

console.log(validatePIN("'123"));