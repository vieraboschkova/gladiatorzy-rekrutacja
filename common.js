function sum(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

const biggerThanThree = function (x) {
    if (x  > 3) {
        return true;
    }
}

const smallerOrEqualToThree = function (x) {
    if (x  <= 3) {
        return true;
    }
}

const numbers = [-5, -3, , 1, 5, 6, 7, 6, 2, 0,];
const emptyArray = [];

Array.prototype.push = function() {

    // Use loop for multiple/any no. of elements
    for (var i = 0; i < arguments.length; i++) {
        this[this.length] = arguments[i];
    }


    // Return new length of the array
    return this.length;
};

module.exports =  { sum, sub, biggerThanThree, smallerOrEqualToThree, numbers, emptyArray }