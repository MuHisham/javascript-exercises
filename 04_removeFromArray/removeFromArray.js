const removeFromArray = function(arr, ...moreArgs) {
    let result = arr.slice();

    for (let i = 0; i < moreArgs.length; i++) {
        if (result.includes(moreArgs[i])) {
            while (result.includes(moreArgs[i])) {
                result.splice(result.indexOf(moreArgs[i]), 1);
            };
        };
    };

    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
