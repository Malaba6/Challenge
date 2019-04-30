/*
    Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. 
    IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.

    Input to the function is guaranteed to be a single string.
    Examples

    Valid inputs:

    1.2.3.4
    123.45.67.89

    Invalid inputs:

    1.2.3
    1.2.3.4.5
    123.456.78.90
    123.045.067.089

    - Input : A string of an IP address
    - Output : True of False if the input IP adress is true or false
*/

let isValidIP = (str) => str.split(".").filter(el => (el >= 0 && el <= 255)).filter(el => (el.length == 1) || (el.length > 1 && el[0] != 0 && el === el.trim() && (el === el.split('').filter(e => e == +e).join('')))).length !== 4 ? false : true;


console.log(isValidIP('1e2.11.12.22'));