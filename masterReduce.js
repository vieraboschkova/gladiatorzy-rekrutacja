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
                                                                    // if accumulator or current value evaluated by callback is true
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
                                                                    // if accumulator or current value evaluated by callback is false
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
    if (!Array.isArray(arr)) {                                      // check if array is actually an array
        throw new TypeError('not a valid array');
    } else if (typeof callback !== 'function') {                    // check if function is type function
        throw new TypeError(callback + ' is not a function');
    } else if (arr === null) {                                      // if new array is null => return empty
        return [];
    } else {
        return arr.reduce((accumulator, currentValue, index, arr) => {  // start reduce function
            if (callback(currentValue, index, arr)) {               // if current value evaluated by callback is true
                console.log(currentValue + " :filtered: " + index)
                return [...accumulator, currentValue];              // add current value to accumulator array
            }
            return accumulator;                                     // return accumulator array with values that evaluated to true
        }, []);
    }
};


/* implement custom array.map */
function customArrayMap(arr, callback) {
    if (!Array.isArray(arr)) {                                      //check if array is actually an array
        throw new TypeError('not a valid array');
    } else if (typeof callback !== 'function') {                    // check if function is type function
        throw new TypeError(callback + ' is not a function');
    } else if (arr === null) {                                      // if new array is null => return empty
        return [];
    } else {
        return arr.reduce((accumulator, currentValue, index, arr) => {      // start reduce function
            if (index in arr){                                      // if item is not empty (ignores empty items)
                accumulator[index] = (callback(currentValue, index, arr));  // at this index put the value returned by callback
            }
            return accumulator;                                     // return new array with mapped values
        }, [])
    }
}


/* ***** SIMPLE TESTS ***** */

let testedValue = 
    // customArrayFilter(common.numbers, common.biggerThanThree)
    // customArrayEvery(common.alphanumeric, common.smallerThanTwenty)
    // customArrayEvery(common.numbers, common.smallerThanTwenty)
    // customArrayEvery(common.numbers, common.biggerThanThree)
    // customArrayEvery(common.numbers, common.smallerOrEqualToThree)
    // customArrayEvery(common.emptyArray, common.biggerThanThree)
    
    // customArraySome(common.numbers, common.smallerOrEqualToThree)
    // customArraySome(common.numbers, common.biggerThanTwenty)
    // customArraySome(common.alphanumeric, common.biggerThanTwenty)
    // customArraySome(common.alphanumeric, common.smallerOrEqualToThree)
    // customArraySome([0,1,2,3,4,5,6], common.biggerThanThree)

    // customArrayFilter(common.alphanumeric, common.smallerThanTwenty)
    // customArrayFilter(common.numbers, common.smallerThanTwenty)
    // customArrayFilter(common.numbers, common.biggerThanThree)
    // customArrayFilter(common.numbers, common.smallerOrEqualToThree)
    customArrayFilter(common.emptyArray, common.biggerThanThree)
    
    // customArrayMap(common.alphanumeric, common.duplicate)
    // customArrayMap(common.numbers, common.duplicate)
    // customArrayMap(common.numbers, common.square)
    // customArrayMap(common.alphanumeric, common.lengthOfItem)
    // customArrayMap(common.emptyArray, common.duplicate)
    // 0

let desiredValue = 
    // common.numbers.some(common.smallerOrEqualToThree)
    // common.numbers.some(common.biggerThanTwenty)
    // common.alphanumeric.some(common.biggerThanTwenty)
    // common.alphanumeric.some(common.smallerOrEqualToThree)

    // common.alphanumeric.every(common.smallerThanTwenty)
    // common.numbers.every(common.smallerThanTwenty)
    // common.numbers.every(common.biggerThanThree)
    // common.numbers.every(common.smallerOrEqualToThree)
    // common.emptyArray.every(common.biggerThanThree)

    // common.alphanumeric.filter(common.smallerThanTwenty)
    // common.numbers.filter(common.smallerThanTwenty)
    // common.numbers.filter(common.biggerThanThree)
    // common.numbers.filter(common.smallerOrEqualToThree)
    common.emptyArray.filter(common.biggerThanThree)

    // common.alphanumeric.map(common.duplicate)
    // common.numbers.map(common.duplicate)
    // common.numbers.map(common.square)
    // common.alphanumeric.map(common.lengthOfItem)
    // common.emptyArray.map(common.duplicate)
    // common.mixed.map(common.square)
    


console.log('TESTED: ' + testedValue);
console.log('SHOULD: ' + desiredValue);
