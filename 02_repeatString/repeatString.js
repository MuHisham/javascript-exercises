const repeatString = function(word, noOfRepeat) {
    let resultString = ''; 
    if (noOfRepeat > 0) {
        for (let i = 0; i < noOfRepeat; i++) {
            resultString += word;
        }
    }
    else if (noOfRepeat === 0) {
        resultString = '';
    }
    else {
        return 'ERROR';
    }
    return resultString;
};

// Do not edit below this line
module.exports = repeatString;
