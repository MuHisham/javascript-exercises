const reverseString = function(phrase) {
    let charLst = phrase.split('');
    let reverseLst = [];
    for (let i = 0; i < charLst.length; i++) {
        reverseLst.push(charLst[charLst.length - 1 - i]);
    }
    return reverseLst.join('');
};

// Do not edit below this line
module.exports = reverseString;
