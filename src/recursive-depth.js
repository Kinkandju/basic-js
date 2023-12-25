const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
*/

class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1;

    // if element is an array
    if (Array.isArray(arr)) {

      // iterate over each element of the array
      for (let i = 0; i < arr.length; i += 1) {

        // If the element is an array -> call calculateDepth
        if (Array.isArray(arr[i])) {
          const currentDepth = this.calculateDepth(arr[i]) + 1;

          // if the current depth is greater, update the depth value
          if (currentDepth > depth) {
            depth = currentDepth;
          }
        }
      }
    }

    return depth;
  }
}

module.exports = {
  DepthCalculator
};
