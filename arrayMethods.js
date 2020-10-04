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

function someFn(array, callback){
    let hasSome = false;
    if (!Array.isArray(array)) {
        throw new TypeError('not a valid array');
    } else {
        for (let i = 0; i < array.length; i += 1) {
            console.log('iterating: ' + i)
            if (!(i in array)) {
                console.log('was empty');
            } else if(callback(array[i])) {
                hasSome = true;
                console.log(hasSome + 'was here')
                i = array.length - 1;
            }
        }
    }
    console.log(hasSome)
    return hasSome;
}

/* **** ENTRIES **** */

function entriesFn(array){
    let newArray = new Array(array.length);
    const keys = [...array.keys()];
    const values = [...array.values()];
    for (i in keys) {
        newArray[i] = [keys[i], values[i]];
    }
    return newArray;
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
    entriesFn(common.falsies)

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
    common.falsies.entries()


// console.log('TESTED: ' + testedValue);
// console.log('SHOULD BE: ' + desiredValue);
// console.log('TESTED: ' + typeof testedValue);
// console.log('SHOULD BE: ' + typeof desiredValue);

for (let e of testedValue) {
    console.log('TESTED: ' +  e);
}

for (let e of desiredValue) {
    console.log('SHOULD BE: ' +  e);
}
