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

const smallerThanTwenty = function (x) {
    if (x  < 20) {
        return true;
    }
}

const biggerThanTwenty = function (x) {
    if (x  > 20) {
        return true;
    }
}

const smallerOrEqualToThree = function (x) {
    if (x  <= 3) {
        return true;
    }
}

function square(n) {
    return n * n;
}

function hasEmptyElement(array){
    for (var i=0; i<array.length; i++){
        if (!(i in array)) {
            return true;
        }
    }
    return false;
}

const duplicate = (a) =>  2 * a ;
const numbers = [-5, -3, , 1, 5, 6, 7, 6, 2, 0];
const mixed = [ -1, 0, 1, '', true, null, NaN, undefined, {a:2, b:3}]
const emptyArray = [];

const falsies = [ false, null, undefined, 0, -0, 0n, NaN, '' ];

module.exports =  {
    sum, 
    sub, 
    biggerThanThree, 
    smallerOrEqualToThree, 
    smallerThanTwenty,
    biggerThanTwenty,
    duplicate,
    square,
    hasEmptyElement,
    numbers, 
    emptyArray,
    mixed,
    falsies 
}