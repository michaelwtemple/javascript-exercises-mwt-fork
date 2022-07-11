const sumAll = function(start, end) {
    let result = 0;

    for (let step = start;step <= end; step++) {
        result += step;
    }

    return result;
};

// Do not edit below this line
module.exports = sumAll;
