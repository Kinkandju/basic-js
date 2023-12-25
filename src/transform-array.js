const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
*/

function transform(arr) {
  const ERROR = "'arr' parameter must be an instance of the Array!";

  // check is an array
  if (!Array.isArray(arr)) {
    throw new Error(ERROR);
  }

  const transformedArray = [];

  const DSD_NEXT = '--discard-next';
  const DSD_PREV = '--discard-prev';
  const DBL_NEXT = '--double-next';
  const DBL_PREV = '--double-prev';

  // iterating over the elements of the array
  for (let i = 0; i < arr.length; i += 1) {

    // check whether the element matches any of the control sequences

    // if found '--discard-next'
    if (arr[i] === DSD_NEXT) {

      // skip the next element
      i += 1;
    } 
    
    // if found '--discard-prev'
    else if (arr[i] === DSD_PREV) {

      // if the previous element exists and has not been excluded
      if (i > 0 && arr[i - 2] !== DSD_NEXT) {

        // remove the last added element from the result
        transformedArray.pop();
      }
    } 
    
    // if found '--double-next'
    else if (arr[i] === DBL_NEXT) {

      // if the next element exists
      if (i < arr.length - 1) {

        // duplicate the next element and add it to the transformed array
        transformedArray.push(arr[i + 1]);
      }
    } 
    
    // if found '--double-prev'
    else if (arr[i] === DBL_PREV) {

      // if the previous element exists and has not been excluded
      if (i > 0 && arr[i - 2] !== DSD_NEXT) {

        // duplicate the previous element and add it to the transformed array
        transformedArray.push(arr[i - 1]);
      }
    } 
    
    // if the element is not a control sequence
    else {

      // add it to the transformed array
      transformedArray.push(arr[i]);
    }
  }

  return transformedArray;
}

module.exports = {
  transform
};
