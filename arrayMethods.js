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

function mapFn(arr, callback){
    if (!Array.isArray(arr)) {                              //check if array is actually an array
        throw new TypeError('not a valid array');
    } else if (typeof callback !== 'function') {            // check if function is type function
        throw new TypeError(callback + ' is not a function');
    } else if (arr === null) {                              // if new array is null => return empty
        return [];
    } else { 
        const newArraysLength = arr.length;                 // initiate new array's length
        const mappedArray = new Array(newArraysLength);     // initiate array for new mapped values
        for (let i = 0; i < arr.length; i += 1) {           // for every item in array 
            if (i in arr) {                                 // if it isn't an empty item in array
                mappedArray[i] = (callback(arr[i], i, arr));// create a new item in mapped array changed by callback
            }   
        }
    return mappedArray;
    }
}

/* **** FILTER **** */

function filterFn(array, callback){
    if (!Array.isArray(array)) {                            // check if array is actually an array
        throw new TypeError('not a valid array');
    } else if (typeof callback !== 'function') {            // check if function is type function
        throw new TypeError(callback + ' is not a function');
    } else if (array === null) {                            // if new array is null => return empty
        return [];
    } else {
        const newArray = [];                                // initiate new array for values      
        for (let i = 0; i < array.length; i += 1) {         // for every item in array
            if(callback(array[i], i, array)) {              // if it is true after callback
                newArray.push(array[i]);                    // push item to filtered array
            }
        }
        return newArray;
    }
}

/* **** REDUCE **** */

function reduceFn(array, callback, initial){
    if (!Array.isArray(array)) {                            // check if array is actually an array
        throw new TypeError('not a valid array');
    } else if (typeof callback !== 'function') {            // check if function is type function
        throw new TypeError(callback + ' is not a function');
    } else if (array.length === 0 && initial === undefined) { // check if called on an empty array without an initialValue
        throw new TypeError('Reduce of empty array with no initial value');
    } else {
        const arrLen = array.length;                        // get arrays length
        let i = 0;                                          // initiate index position
        let value;                                          // initiate value to be returned after reduce

        if (arguments.length >= 3) {                        // if initial argument exists
            value = initial;                                // first value of accumulator is the given initial
        } else {                                            // if no initial value
            while (i < arrLen && !(i in array)) {           // while index smaller than array's length and item is empty
                i += 1;                                     // look for next indexed item until not empty
            }
            value = array[i];                               // value to start the reducer is the first non-empty
            i += 1;                                         // increase index by one to get next value for reducer
        }

        for (i; i < arrLen; i += 1) {                       // for all other values from array
            if (i in array){                                // if item not empty
                value = callback(value, array[i], i, array);// get new reduced value
            }
        }
        return value;
    }
}

/* **** REDUCERIGHT **** */

function reduceRightFn(array, callback, initial){
    if (!Array.isArray(array)) {                            // check if array is actually an array
        throw new TypeError('not a valid array');
    } else if (typeof callback !== 'function') {            // check if function is type function
        throw new TypeError(callback + ' is not a function');
    } else if (array.length === 0 && initial === undefined) { // check if called on an empty array without an initialValue
        throw new TypeError('Reduce of empty array with no initial value');
    } else {
        let newArray = array.slice().reverse();             // create new array with reversed values
        if (initial !== undefined) {                        // if there is an initial value,
            return reduceFn(newArray, callback, initial);   // call reduceFn with three arguments
        } else {
            return reduceFn(newArray, callback);            // else, call reduceFn without initial
        }
    }
    
    /* ***** REDUCE RIGHT STEP BY STEP SOLUTION ***** */

    // if (!Array.isArray(array)) {                            // check if array is actually an array
    //     throw new TypeError('not a valid array');
    // } else if (typeof callback !== 'function') {            // check if function is type function
    //   throw new TypeError(callback + ' is not a function');
    // } else if (array.length === 0 && initial === undefined) { // check if called on an empty array without an initialValue
    //     throw new TypeError('Reduce of empty array with no initial value');
    // } else {
    //     const arrLen = array.length;                        // get arrays length
    //     let i = arrLen - 1;                                 // initiate index to the last position
    //     let value;                                          // initiate value to be returned after reduce

    //     if (arguments.length >= 3) {                        // if "initial" argument exists
    //         value = initial;                                // first value of accumulator is the given initial
    //     } else {                                            // if no initial value
    //         while (i >= 0 && !(i in array)) {               // while index bigger than array's zero and item is empty
    //             i -= 1;                                     // look for previous indexed item until not empty
    //         }
    //         value = array[i];                               // value to start the reducer is the first found non-empty
    //         i -= 1;                                         // decrease index by one to get next value for reducer
    //     }

    //     for (i; i >= 0; i -= 1) {                           // for all other values from array from the end
    //         if (i in array){                                // if item not empty
    //             value = callback(value, array[i], i, array);// get new reduced value
    //         }
    //     }
    //     return value;
    // }
}

/* **** EVERY **** */

function everyFn(array, callback) {
    if (!Array.isArray(array)) {                            // check if array is actually an array
        throw new TypeError('not a valid array');
    } else if (typeof callback !== 'function') {            // check if function is type function
        throw new TypeError(callback + ' is not a function');
    } else if (array.length === 0) {                        // check if called on an empty array
        return true;                                        // return true
    } else {
        const arrLen = array.length;                        // set lenght value
        let isEvery = true;                                 // set return value to default true
        let i = 0;                                          // set the first index to iterate

        /* WHILE */
        // while (i < arrLen) {                                // as long as index smaller than arrays length
        //     if (i in array) {                               // if it is not empty
        //         if(!callback(array[i], i, array)) {         // if value returned by callback is false
        //             isEvery = false;                        // set return value to false and
        //             return isEvery;                         // return it
        //         }
        //     }
        //     i += 1;                                         // if the value returned by callback is true, get next item
        // }

        /* FOR LOOP */
        for (let i = 0; i < arrLen; i += 1) {                   // for all indexes smaller than array's length
            if (i in array) {                                   // if i not empty
                if(!callback(array[i], i, array)) {             // if value returned by callback is false
                    isEvery = false;  
                    return isEvery;                             // return false
                }
            }
        }
        return isEvery;
    }
}

/* **** SOME **** */

function someFn(array, callback){
    if (!Array.isArray(array)) {                            // check if array is actually an array
        throw new TypeError('not a valid array');
    } else if (typeof callback !== 'function') {            // check if function is type function
        throw new TypeError(callback + ' is not a function');
    } else if (array.length === 0) {                        // check if called on an empty array
        return false;                                       // return false
    } else {
        let hasAtLeastOne = false;                          // initiate return value
        for (let i = 0; i < array.length; i += 1) {         // for every item in array
            if (i in array) {                               // if it isn't empty
                if (callback(array[i], i, array)) {         // if value after callback is true
                    hasAtLeastOne = true;                   // set return value to true
                    return hasAtLeastOne;
                }
            }
        }
        return hasAtLeastOne;
    }
}

/* **** ENTRIES **** */

function entriesFn(array){
    if (!Array.isArray(array)) {                        // check if array is actually an array
        throw new TypeError('not a valid array');
    } else {
        let newArray = new Array(array.length);         // initiate new array with the same length
        const keys = [...array.keys()];                 // create an array "keys" with arrray's keys
        const values = [...array.values()];             // create an array "values" with arrray's values
        for (i in keys) {                               // for every item in the array
            newArray[i] = [keys[i], values[i]];         // set value at current index as a key/ value pair
        }
        return newArray;                                // return array of pairs
    }
}




/* ***** SIMPLE TESTS ***** */

const testedValue = 
    // mapFn(common.numbers, common.duplicate);
    // mapFn(common.mixed, common.duplicate);
    // mapFn(common.emptyArray, common.duplicate);
    // mapFn(common.falsies, common.square)
    // mapFn(common.alphanumeric, common.falsies)
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
    // someFn(common.alphanumeric, common.biggerThanThree)
    // someFn(common.alphanumeric, common.biggerThanTwenty)
    entriesFn(common.numbers)
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
    // reduceRightFn(['oh'], common.sum)

const desiredValue = 
    // common.numbers.map(common.duplicate);
    // common.mixed.map(common.duplicate);
    // common.emptyArray.map(common.duplicate);
    // common.falsies.map(common.square)
    // common.alphanumeric.map(common.falsies)
    // common.numbers.filter(common.biggerThanThree)
    // common.emptyArray.filter(common.biggerThanThree)
    // common.mixed.filter(((i) => i === false))
    // common.mixed.filter( common.smallerOrEqualToThree)
    // common.numbers.every( common.smallerOrEqualToThree)
    // common.numbers.every(common.smallerThanTwenty)
    // common.numbers.every(common.biggerThanThree)
    // common.numbers.some(common.smallerThanTwenty)
    // common.numbers.some(common.biggerThanTwenty)
    // common.emptyArray.some(common.biggerThanTwenty)
    // common.mixed.some( common.smallerOrEqualToThree)
    // common.mixed.some(common.biggerThanTwenty)
    // common.alphanumeric.some(common.biggerThanThree)
    // common.alphanumeric.some(common.biggerThanTwenty)
    common.numbers.entries()
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
    // ['oh'].reduceRight(common.sum)

// console.log('TESTED:    ' + testedValue);
// console.log('SHOULD BE: ' + desiredValue);
console.log('TESTED: ' + typeof testedValue);
console.log('SHOULD BE: ' + typeof desiredValue);


// TESTS' CONSOLES FOR ENTRIES
for (let e of testedValue) {
    console.log('TESTED: ' +  e);
}

for (let e of desiredValue) {
    console.log('SHOULD BE: ' + e)
}
