const sumAll = function(a, b) {
    let result = 0;
    if ((a >= 0 && a === parseInt(a)) && (b >= 0 && b === parseInt(b))) {
        for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
            result += i;
        };
        return result;
    }
    else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;
