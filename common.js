function sum(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

const biggerThanThree = function (x) {
    if (x > 3) {
        return true;
    }
    return false;
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

const clone = items =>
  items.map(item => (Array.isArray(item) ? clone(item) : item));

const duplicate = (a) =>  2 * a ;
const lengthOfItem = (a) => a.length;
const numbers = [,-5, -3, , 1, 5, 6, 7, 6, 2, 0];
const mixed = [ -1, 0, 1, '', true, null, NaN, undefined, {a:2, b:3}]
const emptyArray = [];
const alphanumeric = [ 10, 2, 3, , 'a', 'b', 'c', 10, 2, 3]
const falsies = [ false, null, undefined, 0, -0, 0n, NaN, '' ];

module.exports =  {
    sum, 
    sub, 
    biggerThanThree, 
    smallerOrEqualToThree, 
    smallerThanTwenty,
    biggerThanTwenty,
    duplicate,
    lengthOfItem,
    square,
    hasEmptyElement,
    clone,
    numbers, 
    emptyArray,
    mixed,
    falsies,
    alphanumeric 
}
