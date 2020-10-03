const { duplicate } = require('./common');
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

function filterFn(array, callback){}

/* **** REDUCE **** */

function reduceFn(array, callback, initial){}

/* **** REDUCERIGHT **** */

function reduceRightFn(array, callback, initial){}

/* **** EVERY **** */

function everyFn(array, callback){}

/* **** SOME **** */

function someFn(array, callback){}

/* **** ENTRIES **** */

function entriesFn(array){}




/* ***** SIMPLE TESTS ***** */

const testedValue = 
    mapFn(common.numbers, duplicate);
    // mapFn(common.mixed, duplicate);
    // mapFn(common.emptyArray, duplicate);
    // mapFn(1)

const desiredValue = 
    common.numbers.map(duplicate);
    // common.mixed.map(duplicate);
    // common.emptyArray.map(duplicate);

console.log(testedValue);
console.log(desiredValue);
