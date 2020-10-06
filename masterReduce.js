const { smallerThanTwenty } = require('./common');
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
    if (!Array.isArray(arr)) {                                      // check if array is actually an array
        throw new TypeError('not a valid array');
    } else if (typeof callback !== 'function') {                    // check if function is type function
        throw new TypeError(callback + ' is not a function');
    } else if (arr.length === 0) {                                  // check if called on an empty array
        return false;                                               // return false
    } else {
        const newArray = common.clone(arr);                         // clone array without reference
        console.log(newArray)    
        return newArray.reduce((accumulator, currentValue, index, newArray) => { // start reduce function
            console.log(currentValue + ":" + index)
            if (callback(currentValue, index, newArray) || callback(accumulator, index, newArray)) { 
                                                                    // if accumulator or current value is true
                console.log(accumulator + ' :acc: cur: ' + currentValue + ":at:" + index)
                newArray.length = index;                            // shorten itirated array to stop reduce
                console.log(newArray)
                return true;                                        // some returns true
            }
            return false;                                           // if no true values found, returns false
        });
    }
}


/* implement custom array.every */

function customArrayEvery (arr, callback) {
    if (!Array.isArray(arr)) {                                      // check if array is actually an array
        throw new TypeError('not a valid array');
    } else if (typeof callback !== 'function') {                    // check if function is type function
        throw new TypeError(callback + ' is not a function');
    } else if (arr.length === 0) {                                  // check if called on an empty array
        return true;                                                // return true
    } else {
        // const newArray = [...arr];
        const newArray = common.clone(arr);                         // clone array without reference
        console.log(newArray)
        return newArray.reduce((accumulator, currentValue, index, newArray) => { // start reduce function
            console.log(currentValue + ":" + index)
            if (index in newArray) {
                if ((!callback(currentValue, index, newArray)) || (!callback(accumulator, index, newArray))) { 
                                                                    // if accumulator or current value is false
                    console.log(currentValue + " : was false at index: " + index)
                    newArray.length = index;                        // shorten itirated array to stop reduce
                    console.log(newArray)
                    return false;                                   // every returns false
                }
            }
            return true;                                            // if no false values, every returns true
        });
    }
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


/* ***** SIMPLE TESTS ***** */

let testedValue = 
    // customArrayFilter(common.numbers, common.biggerThanThree)
    // customArrayEvery(common.alphanumeric, common.smallerThanTwenty)
    // customArrayEvery(common.numbers, common.smallerThanTwenty)
    // customArrayEvery(common.numbers, common.biggerThanThree)
    customArrayEvery(common.numbers, common.smallerOrEqualToThree)
    // customArrayEvery(common.emptyArray, common.biggerThanThree)
    
    // customArraySome(common.numbers, common.smallerOrEqualToThree)
    // customArraySome(common.numbers, common.biggerThanTwenty)
    // customArraySome(common.alphanumeric, common.biggerThanTwenty)
    // customArraySome(common.alphanumeric, common.smallerOrEqualToThree)
    // customArraySome([0,1,2,3,4,5,6], common.biggerThanThree)
    // common.numbers.filterUsingReduce(common.biggerThanThree)
    // common.numbers.someUsingReduce(common.biggerThanThree)
    // common.numbers.someUsingReduce(common.biggerThanTwenty)
    // common.numbers.everyUsingReduce(common.smallerOrEqualToThree)
    // common.numbers.everyUsingReduce(common.smallerThanTwenty)
    // common.emptyArray.everyUsingReduce(common.smallerThanTwenty)
    // common.numbers.mapUsingReduce(common.duplicate)
    // common.emptyArray.mapUsingReduce(common.duplicate)

let desiredValue = 
    // common.numbers.some(common.smallerOrEqualToThree)
    // common.numbers.some(common.biggerThanTwenty)
    // common.alphanumeric.some(common.biggerThanTwenty)
    // common.alphanumeric.some(common.smallerOrEqualToThree)

    // common.alphanumeric.every(common.smallerThanTwenty)
    // common.numbers.every(common.smallerThanTwenty)
    // common.numbers.every(common.biggerThanThree)
    common.numbers.every(common.smallerOrEqualToThree)
    // common.emptyArray.every(common.biggerThanThree)
    


console.log('TESTED: ' + testedValue);
console.log('SHOULD: ' + desiredValue);
