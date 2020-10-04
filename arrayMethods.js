// Treść zadania #6 - metody wbudowane w Array
// z uwagi na to, że JS jest jezykiem funkcyjnym warto opanować jego podstawowe metody

// .map
// .filter
// .reduce
// .reduceRight
// .every
// .some
// .entries

// Stwórz funkcje, które będą działać identycznie co metody wbudowane
// ale będą działać przy pomocy pętli for lub while

// import the test items
const common = require('./common')

/* **** MAP **** */

// changes empty slot to NaN
function mapFn(arr, callback){
    const newArraysLength = 0;
    if (arr === null) {
        newArraysLength = 0;
    } else { newArraysLength === arr.length }
    const mappedArray = new Array(newArraysLength);
    if (!Array.isArray(arr)) {
        throw new TypeError('not a valid array');
    } else {
        for (let i = 0; i < arr.length; i += 1) {
            mappedArray[i] = (callback(arr[i]));
        }
    }
    return mappedArray;
}

/* **** FILTER **** */

function filterFn(array, callback){
    const newArray = [];
    if (!Array.isArray(array)) {
        throw new TypeError('not a valid array');
    } else {
        for (let i = 0; i < array.length; i += 1) {
            if(callback(array[i])) {
                newArray.push(array[i]);
            }
        }
    }
    return newArray;
}

/* **** REDUCE **** */

function reduceFn(array, callback, initial){
    if (!Array.isArray(array)) {
        throw new TypeError('not a valid array');
    } else if (array.length === 0 && !initial) {
        throw new TypeError('Reduce of empty array with no initial value');
    } else {
        const newArray = array.slice(0);
        if (initial) {
            newArray.unshift(initial);
        }
        let value = newArray[0];
        if (newArray.length === 1) {
            return value;
        }
        for (let i = 1; i < newArray.length; i += 1) {
            if (i in newArray){
                value = callback(value, newArray[i], i, newArray);
            }
        }
        return value;
    }
}

/* **** REDUCERIGHT **** */

function reduceRightFn(array, callback, initial){
    if (!Array.isArray(array)) {
        throw new TypeError('not a valid array');
    } else if (array.length === 0 && !initial) {
        throw new TypeError('Reduce of empty array with no initial value');
    } else {
        const newArray = array.slice(0);
        if (initial) {
            newArray.push(initial);
        }
        let value = newArray[newArray.length - 1];
        if (newArray.length === 1) {
            return value;
        }
        for (let i = newArray.length - 2; i > -1; i -= 1) {
            if (i in newArray){
                value = callback(value, newArray[i], i, newArray);
            }
        }
        return value;
    }
}

/* **** EVERY **** */

function everyFn(array, callback) {
    let isEvery = true;
    if (!Array.isArray(array)) {
        throw new TypeError('not a valid array');
    } else {
        for (let i = 0; i < array.length; i += 1) {
            if (!(i in array)) {
            } else if(!callback(array[i])) {
                isEvery = false;
                i = array.length - 1;
            }
        }
    }
    return isEvery;
}

/* **** SOME **** */

function someFn(array, callback){
    let hasSome = false;
    if (!Array.isArray(array)) {
        throw new TypeError('not a valid array');
    } else {
        for (let i = 0; i < array.length; i += 1) {
            if (!(i in array)) {
            } else if(callback(array[i])) {
                hasSome = true;
                i = array.length - 1;
            }
        }
    }
    return hasSome;
}

/* **** ENTRIES **** */

function entriesFn(array){
    if (!Array.isArray(array)) {
        throw new TypeError('not a valid array');
    } else {
        let newArray = new Array(array.length);
        const keys = [...array.keys()];
        const values = [...array.values()];
        for (i in keys) {
            newArray[i] = [keys[i], values[i]];
        }
        return newArray;
    }
}




/* ***** SIMPLE TESTS ***** */

const testedValue = 
    // mapFn(common.numbers, common.duplicate);
    // mapFn(common.mixed, common.duplicate);
    // mapFn(common.emptyArray, common.duplicate);
    // mapFn(1)
    // filterFn(common.numbers, common.biggerThanThree)
    // filterFn(common.emptyArray, common.biggerThanThree)
    // filterFn(common.mixed, ((i) => i === false))
    // filterFn(common.mixed,  common.smallerOrEqualToThree)
    // everyFn(common.numbers,  common.smallerOrEqualToThree)
    // everyFn(common.numbers, common.smallerThanTwenty)
    // everyFn(common.numbers, common.biggerThanThree)
    // someFn(common.numbers, common.smallerThanTwenty)
    // someFn(common.numbers, common.biggerThanTwenty)
    // someFn(common.emptyArray, common.biggerThanTwenty)
    // someFn(common.mixed,  common.smallerOrEqualToThree)
    // someFn(common.mixed, common.biggerThanTwenty)
    // entriesFn(common.numbers)
    // entriesFn(common.emptyArray)
    // entriesFn(common.mixed)
    // entriesFn(common.falsies)
    // reduceFn(common.numbers, common.sum, 100)
    // reduceFn(common.numbers, common.sum)
    // reduceFn(common.emptyArray, common.sum, 100)
    // reduceFn(common.emptyArray, common.sum)
    // reduceFn(common.mixed, common.sum)
    // reduceFn([ -1, 0, 1], common.sum)
    // reduceFn(common.falsies, common.sub)
    // reduceFn(common.alphanumeric, common.square)
    // reduceFn(['oh'], common.sum)
        // reduceRightFn(common.numbers, common.sum, 100)
    // reduceRightFn(common.numbers, common.sum)
    // reduceRightFn(common.emptyArray, common.sum, 100)
    // reduceRightFn(common.emptyArray, common.sum)
    // reduceRightFn(common.mixed, common.sum)
    // reduceRightFn([ -1, 0, 1], common.sum)
    // reduceRightFn(common.falsies, common.sub)
    // reduceRightFn(common.alphanumeric, common.square)
    reduceRightFn(['oh'], common.sum)

const desiredValue = 
    // common.numbers.map(duplicate);
    // common.mixed.map(duplicate);
    // common.emptyArray.map(duplicate);
    // common.numbers.filter(biggerThanThree)
    // common.emptyArray.filter(biggerThanThree)
    // common.mixed.filter(((i) => i === false))
    // common.mixed.filter( common.smallerOrEqualToThree)
    // common.numbers.every( common.smallerOrEqualToThree)
    // common.numbers.every(smallerThanTwenty)
    // common.numbers.every(biggerThanThree)
    // common.numbers.some(smallerThanTwenty)
    // common.numbers.some(biggerThanTwenty)
    // common.emptyArray.some(biggerThanTwenty)
    // common.mixed.some( common.smallerOrEqualToThree)
    // common.mixed.some(common.biggerThanTwenty)
    // common.numbers.entries()
    // common.emptyArray.entries()
    // common.mixed.entries()
    // common.falsies.entries()
    // common.numbers.reduce(common.sum, 100)
    // common.numbers.reduce(common.sum)
    // common.emptyArray.reduce(common.sum)
    // common.emptyArray.reduce(common.sum, 100)
    // common.mixed.reduce(common.sum)
    // common.falsies.reduce(common.sub)
    // [ -1, 0, 1].reduce(common.sum)
    // common.alphanumeric.reduce(common.square)
    // ['oh'].reduce(common.sum)
    // common.numbers.reduceRight(common.sum, 100)
    // common.numbers.reduceRight(common.sum)
    // common.emptyArray.reduceRight(common.sum, 100)
    // common.emptyArray.reduceRight(common.sum)
    // common.mixed.reduceRight(common.sum)
    // common.falsies.reduceRight(common.sub)
    // [ -1, 0, 1].reduceRight(common.sum)
    // common.alphanumeric.reduceRight(common.square)
    ['oh'].reduceRight(common.sum)

console.log('TESTED: ' + testedValue);
console.log('SHOULD BE: ' + desiredValue);
console.log('TESTED: ' + typeof testedValue);
console.log('SHOULD BE: ' + typeof desiredValue);


// TESTS' CONSOLES FOR ENTRIES
// for (let e of testedValue) {
//     console.log('TESTED: ' +  e);
// }

// for (let e of desiredValue) {
//     console.log('SHOULD BE: ' + e)
// }
