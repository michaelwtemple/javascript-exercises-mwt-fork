const removeFromArray = function(source, ...removals) {
    return source.filter(x => {
        return !removals.includes(x);
    });
};

// Do not edit below this line
module.exports = removeFromArray;
