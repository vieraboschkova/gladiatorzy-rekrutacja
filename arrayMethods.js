// za pomocą metody .reduce wbudowanej w array 
// odtwórz działanie innych metod:

// - array.some
// - array.every
// - array.filter
// - array.map

const common = require('./common')

function customArraySome () {

}

function customArrayEvery () {
    
}

function customArrayFilter(arr, callback) {
    if (arr.length === 0) {
        return [];
    }
    arr.reduce((accumulator, currentValue) => {
        if (callback(currentValue)) {
            accumulator.push(currentValue);
        }
        console.log(accumulator);
        return accumulator;
    }, []);
};

// doesnt work if there are empty slots since reduce omits them
function customArrayMap(arr, callback) {
    console.log(arr.length, arr)
    if (arr.length === 0) {
        return [];
    }

    return arr.reduce((acc, cv, i, a) => {
        return [...acc, (callback(cv, i, a))]
    }, [])
}

// from mdn: 
Array.prototype.mapUsingReduce = function(callback, thisArg) {
    return this.reduce(function(mappedArray, currentValue, index, array) {
      mappedArray[index] = callback.call(thisArg, currentValue, index, array)
      return mappedArray
    }, [])
}

console.log(
    customArrayMap(common.emptyArray, ((a) => a * 2 )), 
    customArrayMap(common.numbers, ((a) => a * 2 )),
    common.numbers.mapUsingReduce((a) => a * 2)
)
