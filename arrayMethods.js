// za pomocą metody .reduce wbudowanej w array 
// odtwórz działanie innych metod:

// - array.some
// - array.every
// - array.filter
// - array.map

const common = require('./common')

function customArraySome (arr, callback) {
    if (arr.length === 0) {
        return true;
    }
    return arr.reduce((accumulator, currentValue, index, array) => {
        // console.log('going');
        if (callback(currentValue)) {
            array.splice(1);
            // console.log('finished')
            return true;
        }
        return false;
    });
}

function customArrayEvery (arr, callback) {
    if (arr.length === 0) {
        return true;
    }
    return arr.reduce((accumulator, currentValue, index, array) => {
        // console.log('going')
        if (!callback(currentValue)) {
            array.splice(1);
            // console.log('finished')
            return false;
        }
        return true;
    });
}

function customArrayFilter(arr, callback) {
    if (arr.length === 0) {
        return [];
    }
    return arr.reduce((accumulator, currentValue, index, array) => {
        if (callback(currentValue)) {
            // accumulator.push(currentValue); 
            return [...accumulator, currentValue];
        }
        // console.log(accumulator);
        return accumulator;
    }, []);
};

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
    customArraySome(common.numbers, common.biggerThanTwenty)

console.log(testedValue);

// console.log(
//     customArrayMap(common.emptyArray, ((a) => a * 2 )), 
//     customArrayMap(common.numbers, ((a) => a * 2 )),
//     common.numbers.mapUsingReduce((a) => a * 2)
// )
