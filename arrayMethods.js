// za pomocą metody .reduce wbudowanej w array 
// odtwórz działanie innych metod:

// - array.some
// - array.every
// - array.filter
// - array.map

// import the test items

const common = require('./common')

/* implement custom array.some */

function customArraySome (arr, callback) {
    if (arr.length === 0) {
        return true;
    }
    return arr.reduce((accumulator, currentValue, index, array) => {
        if (callback(currentValue)) {
            array.splice(1);
            return true;
        }
        return false;
    });
}

// based on mdn solution for map with reduce
Array.prototype.someUsingReduce = function(callback, thisArg) {
    return this.reduce(function(accumulator, currentValue, index, array) {
        if (callback.call(thisArg, currentValue, index, array)) {
            array.splice(1);
            return true;
        }
        return false;
    }, []);
}

/* implement custom array.every */

function customArrayEvery (arr, callback) {
    if (arr.length === 0) {
        return true;
    }
    return arr.reduce((accumulator, currentValue, index, array) => {
        if (!callback(currentValue)) {
            array.splice(1);
            return false;
        }
        return true;
    });
}

// based on mdn solution for map with reduce
Array.prototype.everyUsingReduce = function(callback, thisArg) {
    return this.reduce(function(accumulator, currentValue, index, array) {
        if (!callback.call(thisArg, currentValue, index, array)) {
            array.splice(1);
            return false;
        }
        return true;
    }, []);
}

/* implement custom array.filter */

function customArrayFilter(arr, callback) {
    if (arr.length === 0) {
        return [];
    }
    return arr.reduce((accumulator, currentValue, index, array) => {
        if (callback(currentValue)) {
            return [...accumulator, currentValue];
        }
        return accumulator;
    }, []);
};

// based on mdn

Array.prototype.filterUsingReduce = function(callback, thisArg) {
    return this.reduce(function(accumulator, currentValue, index, array) {
        if (callback.call(thisArg, currentValue, index, array)) {
            return [...accumulator, currentValue];
        }
        return accumulator;
    }, []);
}

/* implement custom array.map */
// doesnt work if there are empty slots since reduce omits them
function customArrayMap(arr, callback) {
    console.log(arr.length, arr)
    if (arr.length === 0) {
        return [];
    }
    return arr.reduce((accumulator, currentValue, index, array) => {
        return [...accumulator, (callback(currentValue, index, array))]
    }, [])
}

// from mdn: 
Array.prototype.mapUsingReduce = function(callback, thisArg) {
    return this.reduce(function(mappedArray, currentValue, index, array) {
      mappedArray[index] = callback.call(thisArg, currentValue, index, array)
      return mappedArray
    }, [])
}


/* ***** SIMPLE TESTS ***** */

let testedValue = 
    // customArrayFilter(common.numbers, common.biggerThanThree)
    // common.numbers.every(common.biggerThanThree)
    // customArrayEvery(common.numbers, common.smallerThanTwenty)
    // customArrayEvery(common.numbers, common.smallerOrEqualToThree)
    // customArrayEvery(common.emptyArray, common.biggerThanThree)
    // customArraySome(common.numbers, common.smallerOrEqualToThree)
    // customArraySome(common.numbers, common.biggerThanTwenty)
    // common.numbers.filterUsingReduce(common.biggerThanThree)
    // common.numbers.someUsingReduce(common.biggerThanThree)
    // common.numbers.someUsingReduce(common.biggerThanTwenty)
    // common.numbers.everyUsingReduce(common.smallerOrEqualToThree)
    // common.numbers.everyUsingReduce(common.smallerThanTwenty)
    // common.emptyArray.everyUsingReduce(common.smallerThanTwenty)
    // common.numbers.mapUsingReduce(common.duplicate)
    // common.emptyArray.mapUsingReduce(common.duplicate)

console.log(testedValue);
