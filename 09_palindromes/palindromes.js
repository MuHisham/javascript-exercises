const palindromes = function (phrase) {
    let lst = phrase.toLowerCase().split('');
    let isAlpha = (char) => ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || (char >= '0' && char <= '9'));
    let newLst = lst.filter(isAlpha);
    return (newLst.join('') === newLst.reverse().join('')) ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
