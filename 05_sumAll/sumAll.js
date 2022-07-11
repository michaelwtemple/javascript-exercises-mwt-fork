const sumAll = function(start, end) {
    let result = 0;

    if (start < 0 || end < 0) {
        return 'ERROR';
    }

    if (start > end) {
        let holder = start;
        start = end;
        end = holder;
    }

    for (let step = start;step <= end; step++) {
        result += step;
    }

    return result;
};

// Do not edit below this line
module.exports = sumAll;
