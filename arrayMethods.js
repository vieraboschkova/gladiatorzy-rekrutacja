const { duplicate, biggerThanThree, smallerOrEqualToThree, smallerThanTwenty } = require('./common');
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

function reduceFn(array, callback, initial){}

/* **** REDUCERIGHT **** */

function reduceRightFn(array, callback, initial){}

/* **** EVERY **** */

function everyFn(array, callback) {
    let isEvery = true;
    if (!Array.isArray(array)) {
        throw new TypeError('not a valid array');
    } else {
        for (let i = 0; i < array.length; i += 1) {
            console.log('iterating: ' + i)
            if (!(i in array)) {
                console.log('was empty');
            } else if(!callback(array[i])) {
                console.log (callback(array[i]))
                isEvery = false;
                console.log(isEvery + 'was here')
                i = array.length - 1;
            }
        }
    }
    console.log(isEvery)
    return isEvery;
}

/* **** SOME **** */

function someFn(array, callback){}

/* **** ENTRIES **** */

function entriesFn(array){}




/* ***** SIMPLE TESTS ***** */

const testedValue = 
    // mapFn(common.numbers, duplicate);
    // mapFn(common.mixed, duplicate);
    // mapFn(common.emptyArray, duplicate);
    // mapFn(1)
    // filterFn(common.numbers, biggerThanThree)
    // filterFn(common.emptyArray, biggerThanThree)
    // filterFn(common.mixed, ((i) => i === false))
    // filterFn(common.mixed, smallerOrEqualToThree)
    // everyFn(common.numbers, smallerOrEqualToThree)
    everyFn(common.numbers, smallerThanTwenty)
    // everyFn(common.numbers, biggerThanThree)

const desiredValue = 
    // common.numbers.map(duplicate);
    // common.mixed.map(duplicate);
    // common.emptyArray.map(duplicate);
    // common.numbers.filter(biggerThanThree)
    // common.emptyArray.filter(biggerThanThree)
    // common.mixed.filter(((i) => i === false))
    // common.mixed.filter(smallerOrEqualToThree)
    // common.numbers.every(smallerOrEqualToThree)
    common.numbers.every(smallerThanTwenty)
    // common.numbers.every(biggerThanThree)

console.log('TESTED: ' + testedValue);
console.log('SHOULD BE: ' + desiredValue);
