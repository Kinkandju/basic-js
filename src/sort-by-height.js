const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
*/

function sortByHeight(arr) {
  const sortedArray = [];

  // iterate through the entire array, take all values that 
  // are not equal to -1 and add them to the sorted array
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] !== -1) {
      sortedArray.push(arr[i]);
    }
  }

  // sorting the new array in ascending order of values
  sortedArray.sort((a, b) => a - b);

  const resultingArray = [];
  let currentIndex = 0;

  // iterate through the entire array
  for (let i = 0; i < arr.length; i += 1) {

    // if the value is -1, then add it to the resulting array
    if (arr[i] === -1) {
      resultingArray.push(-1);
    } 
    
    // if the value is not -1, then add the current value 
    // from the sorted array to the resulting array
    else {
      resultingArray.push(sortedArray[currentIndex]);

      // increasing index to move to the next value
      currentIndex++;
    }
  }

  return resultingArray;
}

module.exports = {
  sortByHeight
};
