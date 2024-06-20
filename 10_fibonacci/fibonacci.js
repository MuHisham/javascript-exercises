const fibonacci = function(member) {
    let num1 = 1;
    let num2 = 1;
    if (parseInt(member) > 2) {
        for (let i = 0; i < member - 2; i++) {
            let sum = num1 + num2;
            num1 = num2;
            num2 = sum;
        }
        return num2;
    }
    else if (member == 1 || member == 2) {
        return 1;
    }
    else if (member == 0) {
        return 0;
    }
    else {
        return 'OOPS';
    }
};

console.log(fibonacci(4))
// Do not edit below this line
module.exports = fibonacci;
